/**
 * fetch-via-wikipedia.mjs
 *
 * Zweiter Pass: Wikipedia REST API → Wikimedia Commons → CC-Lizenzcheck → Download.
 * Zuverlässiger als direkte Commons-Suche, da Wikipedia das Hauptbild pro Artikel kennt.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_FILE = join(ROOT, 'src/data/bildertestRounds.json');
const OUT_DIR = join(ROOT, 'public/bildertest/2026');
const ATTRIB_FILE = join(__dirname, 'bildertest-attributions.json');

const DELAY_MS = 1200; // Rate-limit-sicher
const sleep = ms => new Promise(r => setTimeout(r, ms));

const GOOD_LICENSES = [
  'CC0','CC BY','CC BY-SA','CC-BY','CC-BY-SA',
  'PUBLIC DOMAIN','PDM','GFDL','FAL','OGL','GOVERNMENT',
];
function isOK(lic) {
  if (!lic) return false;
  const u = lic.toUpperCase();
  if (u.includes('EDITORIAL') || u.includes('RESTRICT') || u.includes('FAIR USE') || u.includes('ALL RIGHTS')) return false;
  return GOOD_LICENSES.some(ok => u.includes(ok));
}

function slugify(str) {
  return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Wikipedia REST API → Hauptbild-URL
async function getWikipediaImage(name, lang = 'de') {
  const title = name.replace(/ /g, '_');
  const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'DJS-Lernplattform/1.4' } });
    if (!res.ok) return null;
    const d = await res.json();
    return d.originalimage?.source || d.thumbnail?.source || null;
  } catch { return null; }
}

// Wikimedia API → Lizenz + Autor für gegebene URL
async function getImageMeta(imgUrl) {
  // Filename aus URL extrahieren
  const match = imgUrl.match(/\/wikipedia\/commons\/[a-f0-9]\/[a-f0-9]{2}\/(.+?)(?:\?.*)?$/);
  if (!match) return null;
  const filename = decodeURIComponent(match[1]);
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url|extmetadata|mime&iiurlwidth=900&format=json&origin=*`;
  try {
    const res = await fetch(apiUrl, { headers: { 'User-Agent': 'DJS-Lernplattform/1.4' } });
    if (!res.ok) return null;
    const d = await res.json();
    const page = Object.values(d.query?.pages ?? {})[0];
    const info = page?.imageinfo?.[0];
    if (!info) return null;
    const meta = info.extmetadata ?? {};
    const license = meta.LicenseShortName?.value || '';
    const artist = (meta.Artist?.value || '').replace(/<[^>]+>/g, '').trim();
    const licenseUrl = meta.LicenseUrl?.value || '';
    const filePageUrl = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;
    return { filename, license, artist, licenseUrl, filePageUrl, downloadUrl: info.url || imgUrl };
  } catch { return null; }
}

async function download(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'DJS-Lernplattform/1.4' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, Buffer.from(buf));
    return true;
  } catch(e) { console.error(`  ⚠ Download error: ${e.message}`); return false; }
}

// Personen die wir suchen wollen (Name → DE-Wikipedia-Titel, EN als Fallback)
const PERSONS = [
  // Round 1 – fehlende oder zu prüfende
  { id: 'bt26-r01-01', name: 'Friedrich Merz', round: 'r01', wiki_de: 'Friedrich Merz', wiki_en: 'Friedrich Merz' },
  { id: 'bt26-r01-02', name: 'Lars Klingbeil', round: 'r01', wiki_de: 'Lars Klingbeil', wiki_en: 'Lars Klingbeil' },
  { id: 'bt26-r01-03', name: 'Katherina Reiche', round: 'r01', wiki_de: 'Katherina Reiche', wiki_en: 'Katherina Reiche' },
  { id: 'bt26-r01-07', name: 'Johann Wadephul', round: 'r01', wiki_de: 'Johann Wadephul', wiki_en: 'Johann Wadephul' },
  // Round 2
  { id: 'bt26-r02-01', name: 'Alice Weidel', round: 'r02', wiki_de: 'Alice Weidel', wiki_en: 'Alice Weidel' },
  { id: 'bt26-r02-02', name: 'Tino Chrupalla', round: 'r02', wiki_de: 'Tino Chrupalla', wiki_en: 'Tino Chrupalla' },
  { id: 'bt26-r02-03', name: 'Sahra Wagenknecht', round: 'r02', wiki_de: 'Sahra Wagenknecht', wiki_en: 'Sahra Wagenknecht' },
  { id: 'bt26-r02-04', name: 'Heidi Reichinnek', round: 'r02', wiki_de: 'Heidi Reichinnek', wiki_en: 'Heidi Reichinnek' },
  { id: 'bt26-r02-07', name: 'Yoon Suk Yeol', round: 'r02', wiki_de: 'Yoon Suk-yeol', wiki_en: 'Yoon Suk Yeol' },
  // Round 3
  { id: 'bt26-r03-01', name: 'Ursula von der Leyen', round: 'r03', wiki_de: 'Ursula von der Leyen', wiki_en: 'Ursula von der Leyen' },
  { id: 'bt26-r03-02', name: 'Kaja Kallas', round: 'r03', wiki_de: 'Kaja Kallas', wiki_en: 'Kaja Kallas' },
  { id: 'bt26-r03-03', name: 'António Costa', round: 'r03', wiki_de: 'António Costa', wiki_en: 'António Costa' },
  { id: 'bt26-r03-04', name: 'Roberta Metsola', round: 'r03', wiki_de: 'Roberta Metsola', wiki_en: 'Roberta Metsola' },
  { id: 'bt26-r03-05', name: 'Mark Rutte', round: 'r03', wiki_de: 'Mark Rutte', wiki_en: 'Mark Rutte' },
  // Round 4
  { id: 'bt26-r04-01', name: 'Donald Trump', round: 'r04', wiki_de: 'Donald Trump', wiki_en: 'Donald Trump' },
  { id: 'bt26-r04-02', name: 'J. D. Vance', round: 'r04', wiki_de: 'J. D. Vance', wiki_en: 'JD Vance' },
  { id: 'bt26-r04-06', name: 'Elon Musk', round: 'r04', wiki_de: 'Elon Musk', wiki_en: 'Elon Musk' },
  { id: 'bt26-r04-07', name: 'Cory Booker', round: 'r04', wiki_de: 'Cory Booker', wiki_en: 'Cory Booker' },
  { id: 'bt26-r04-08', name: 'Jerome Powell', round: 'r04', wiki_de: 'Jerome Powell', wiki_en: 'Jerome Powell' },
  // Round 5
  { id: 'bt26-r05-01', name: 'Wolodymyr Selenskyj', round: 'r05', wiki_de: 'Wolodymyr Selenskyj', wiki_en: 'Volodymyr Zelenskyy' },
  { id: 'bt26-r05-02', name: 'Wladimir Putin', round: 'r05', wiki_de: 'Wladimir Putin', wiki_en: 'Vladimir Putin' },
  { id: 'bt26-r05-03', name: 'Benjamin Netanjahu', round: 'r05', wiki_de: 'Benjamin Netanjahu', wiki_en: 'Benjamin Netanyahu' },
  { id: 'bt26-r05-05', name: 'António Guterres', round: 'r05', wiki_de: 'António Guterres', wiki_en: 'António Guterres' },
  // Round 6
  { id: 'bt26-r06-04', name: 'Paul Kagame', round: 'r06', wiki_de: 'Paul Kagame', wiki_en: 'Paul Kagame' },
  { id: 'bt26-r06-06', name: 'María Corina Machado', round: 'r06', wiki_de: 'María Corina Machado', wiki_en: 'María Corina Machado' },
  { id: 'bt26-r06-07', name: 'Nayib Bukele', round: 'r06', wiki_de: 'Nayib Bukele', wiki_en: 'Nayib Bukele' },
  // Round 7
  { id: 'bt26-r07-01', name: 'Christine Lagarde', round: 'r07', wiki_de: 'Christine Lagarde', wiki_en: 'Christine Lagarde' },
  { id: 'bt26-r07-04', name: 'Jensen Huang', round: 'r07', wiki_de: 'Jensen Huang', wiki_en: 'Jensen Huang' },
  { id: 'bt26-r07-05', name: 'Sam Altman', round: 'r07', wiki_de: 'Sam Altman', wiki_en: 'Sam Altman' },
  // Round 10
  { id: 'bt26-r10-02', name: 'Lula da Silva', round: 'r10', wiki_de: 'Luiz Inácio Lula da Silva', wiki_en: 'Luiz Inácio Lula da Silva' },
  { id: 'bt26-r10-04', name: 'Tedros Adhanom Ghebreyesus', round: 'r10', wiki_de: 'Tedros Adhanom Ghebreyesus', wiki_en: 'Tedros Adhanom Ghebreyesus' },
  { id: 'bt26-r10-07', name: 'Suni Williams', round: 'r10', wiki_de: 'Sunita Williams', wiki_en: 'Sunita Williams' },
];

async function processItem(p) {
  const destPath = join(OUT_DIR, p.round, `${slugify(p.name)}.jpg`);
  if (existsSync(destPath)) {
    console.log(`  ↩ Bereits vorhanden: ${p.name}`);
    // Trotzdem Attribution holen
    return { alreadyExists: true, localPath: `/bildertest/2026/${p.round}/${slugify(p.name)}.jpg` };
  }

  // 1. Wikipedia DE versuchen
  let imgUrl = await getWikipediaImage(p.wiki_de, 'de');
  await sleep(500);

  // 2. Wikipedia EN als Fallback
  if (!imgUrl || !imgUrl.includes('commons')) {
    imgUrl = await getWikipediaImage(p.wiki_en, 'en');
    await sleep(500);
  }

  if (!imgUrl) {
    console.log(`  ❌ Kein Wikipedia-Bild: ${p.name}`);
    return null;
  }

  // 3. Lizenz prüfen
  const meta = await getImageMeta(imgUrl);
  await sleep(500);

  if (!meta) {
    console.log(`  ⚠ Keine Meta-Daten: ${p.name}`);
    return null;
  }

  if (!isOK(meta.license)) {
    console.log(`  🚫 Lizenz nicht OK (${meta.license}): ${p.name}`);
    return null;
  }

  // 4. Download
  console.log(`  ✅ ${meta.license} | ${meta.artist.substring(0,40)} | ${p.name}`);
  const ok = await download(meta.downloadUrl, destPath);
  await sleep(DELAY_MS);

  if (!ok) return null;
  return {
    localPath: `/bildertest/2026/${p.round}/${slugify(p.name)}.jpg`,
    ...meta,
  };
}

async function main() {
  const attribs = existsSync(ATTRIB_FILE) ? JSON.parse(readFileSync(ATTRIB_FILE, 'utf-8')) : {};

  for (const p of PERSONS) {
    if (attribs[p.id]?.status === 'READY') {
      console.log(`⏭ Überspring (schon READY): ${p.name}`);
      continue;
    }
    console.log(`🔍 ${p.name} (${p.id})`);
    const result = await processItem(p);

    if (result) {
      attribs[p.id] = {
        status: 'READY',
        name: p.name,
        localPath: result.localPath,
        license: result.license || 'unbekannt',
        licenseUrl: result.licenseUrl || '',
        credit: result.artist || '',
        photographer: result.artist || '',
        filePageUrl: result.filePageUrl || '',
        alreadyExisted: !!result.alreadyExists,
      };
    } else {
      attribs[p.id] = { status: 'NO_FREE_IMAGE_YET', name: p.name };
    }

    writeFileSync(ATTRIB_FILE, JSON.stringify(attribs, null, 2), 'utf-8');
  }

  console.log('\n✅ Zweiter Pass fertig');
  const ready = Object.values(attribs).filter(v => v.status === 'READY').length;
  console.log(`Bereit: ${ready} | Nicht gefunden: ${Object.keys(attribs).length - ready}`);
}

main().catch(console.error);
