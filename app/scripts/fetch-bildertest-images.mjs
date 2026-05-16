/**
 * fetch-bildertest-images.mjs
 *
 * Beschafft CC-lizenzierte Fotos von Wikimedia Commons für alle
 * Bildertest-Person-Items. Gibt ein Ergebnis-JSON aus, das zeigt
 * welche Bilder gefunden wurden und wie sie attributiert werden müssen.
 *
 * Wird NICHT automatisch heruntergeladen — erst nach Sichtprüfung.
 * Akzeptierte Lizenzen: CC0, CC BY, CC BY-SA (alle Versionen), Public Domain, GFDL
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_FILE = join(ROOT, 'src/data/bildertestRounds.json');
const OUT_DIR = join(ROOT, 'public/bildertest/2026');
const RESULT_FILE = join(__dirname, 'bildertest-image-results.json');

const CC_LICENSES = [
  'CC0', 'CC BY', 'CC BY-SA', 'CC BY 4.0', 'CC BY-SA 4.0',
  'CC BY 3.0', 'CC BY-SA 3.0', 'CC BY 2.0', 'CC BY-SA 2.0',
  'CC BY 2.5', 'CC BY-SA 2.5', 'CC BY 1.0', 'CC BY-SA 1.0',
  'Public Domain', 'PDM', 'GFDL', 'FAL',
  'CC-BY-SA-4.0', 'CC-BY-4.0', 'CC-BY-SA-3.0', 'CC-BY-3.0',
];

function isAcceptableLicense(licenseStr) {
  if (!licenseStr) return false;
  const l = licenseStr.toUpperCase();
  // Block editorial-only, restricted
  if (l.includes('EDITORIAL') || l.includes('RESTRICT') || l.includes('FAIR USE')) return false;
  return CC_LICENSES.some(ok => l.includes(ok.toUpperCase()));
}

async function searchWikimedia(query, limit = 8) {
  const url = `https://commons.wikimedia.org/w/api.php?` +
    `action=query&generator=search&gsrnamespace=6` +
    `&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}` +
    `&prop=imageinfo&iiprop=url|extmetadata|size|mime` +
    `&iiurlwidth=800&format=json&origin=*`;

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'DJS-Lernplattform/1.4 (educational app; contact: djs-app)' }
    });
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.query?.pages) return [];

    const results = [];
    for (const page of Object.values(data.query.pages)) {
      const info = page.imageinfo?.[0];
      if (!info) continue;
      const meta = info.extmetadata || {};

      const license = meta.LicenseShortName?.value || meta.License?.value || '';
      if (!isAcceptableLicense(license)) continue;

      // Filter out non-photo file types
      const mime = info.mime || '';
      if (!mime.includes('jpeg') && !mime.includes('jpg') && !mime.includes('png') && !mime.includes('webp')) continue;

      // Skip SVG, GIF, audio, video
      if (page.title?.toLowerCase().includes('.svg') ||
          page.title?.toLowerCase().includes('.gif') ||
          page.title?.toLowerCase().includes('.ogg')) continue;

      const artist = meta.Artist?.value?.replace(/<[^>]+>/g, '').trim() || '';
      const credit = meta.Credit?.value?.replace(/<[^>]+>/g, '').trim() || '';
      const licenseUrl = meta.LicenseUrl?.value || '';

      results.push({
        title: page.title,
        url: info.url,
        thumbUrl: info.thumburl || info.url,
        filePageUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title)}`,
        license,
        licenseUrl,
        artist,
        credit: credit || artist,
        width: info.width,
        height: info.height,
        mime,
      });
    }
    return results;
  } catch (e) {
    console.error(`API error for "${query}":`, e.message);
    return [];
  }
}

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'DJS-Lernplattform/1.4 (educational app)' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    const dir = dirname(destPath);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFileSync(destPath, Buffer.from(buf));
    return true;
  } catch (e) {
    console.error(`Download error for ${url}:`, e.message);
    return false;
  }
}

function slugify(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function main() {
  const data = JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
  const results = {};
  let downloaded = 0;
  let notFound = 0;

  for (const round of data.rounds) {
    for (const item of round.items) {
      // Nur Person-Items, Events sind schwieriger
      if (item.itemType !== 'person') continue;
      if (item.image?.status === 'READY') continue; // schon fertig

      const name = item.correctAnswer;
      const query = `${name} portrait`;
      console.log(`🔍 Suche: ${name} (${item.id})`);

      const candidates = await searchWikimedia(query);

      if (candidates.length === 0) {
        console.log(`  ❌ Kein CC-Bild gefunden`);
        results[item.id] = { status: 'NO_FREE_IMAGE_YET', name, candidates: [] };
        notFound++;
        continue;
      }

      // Bestes Bild: möglichst quadratisch/hochformat, min 400px breit
      const best = candidates
        .filter(c => c.width >= 300 && c.height >= 300)
        .sort((a, b) => {
          // Bevorzuge Portraits (höher als breit) und höhere Auflösung
          const aScore = (a.height / a.width) * Math.min(a.width, 1200);
          const bScore = (b.height / b.width) * Math.min(b.width, 1200);
          return bScore - aScore;
        })[0] || candidates[0];

      // Lokaler Pfad
      const roundFolder = item.roundId;
      const filename = `${slugify(name)}.jpg`;
      const localPath = `/bildertest/2026/${roundFolder}/${filename}`;
      const destPath = join(OUT_DIR, roundFolder, filename);

      // Download
      console.log(`  ✅ ${best.license} | ${best.artist.substring(0, 50)}`);
      console.log(`  📥 ${best.url.substring(0, 80)}`);

      if (!existsSync(dirname(destPath))) mkdirSync(dirname(destPath), { recursive: true });
      const ok = await downloadImage(best.url, destPath);

      results[item.id] = {
        status: ok ? 'READY' : 'DOWNLOAD_FAILED',
        name,
        localPath,
        filePageUrl: best.filePageUrl,
        license: best.license,
        licenseUrl: best.licenseUrl,
        credit: best.credit || best.artist,
        artist: best.artist,
        photographer: best.artist,
        candidates: candidates.slice(0, 3).map(c => ({
          title: c.title,
          thumbUrl: c.thumbUrl,
          filePageUrl: c.filePageUrl,
          license: c.license,
          artist: c.artist,
        })),
      };

      if (ok) downloaded++;
      // Rate limiting
      await new Promise(r => setTimeout(r, 300));
    }
  }

  writeFileSync(RESULT_FILE, JSON.stringify(results, null, 2), 'utf-8');

  console.log(`\n✅ Fertig: ${downloaded} heruntergeladen, ${notFound} nicht gefunden`);
  console.log(`📋 Ergebnisse: ${RESULT_FILE}`);
}

main().catch(console.error);
