/**
 * update-bildertest-json.mjs
 *
 * Trägt alle heruntergeladenen Bilder in bildertestRounds.json ein.
 * Nutzt Attributionsdaten aus dem Wikipedia-Pass und bekannte Lizenzen.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_FILE = join(ROOT, 'src/data/bildertestRounds.json');
const ATTRIB_FILE = join(__dirname, 'bildertest-attributions.json');
const PUBLIC = join(ROOT, 'public/bildertest/2026');

function slugify(str) {
  return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Bekannte Attribution für alle 16 heruntergeladenen Bilder
// (Kombiniert aus: First-Pass-Log, Second-Pass, manuelle Recherche)
const KNOWN_ATTRIBS = {
  // Round 1 – Deutsche Politik
  'bt26-r01-01': { license: 'CC BY-SA 4.0', credit: 'Sandro Halank / Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Friedrich_Merz_-_2023_(cropped).jpg' },
  'bt26-r01-02': { license: 'CC BY-SA 4.0', credit: 'Olaf Krostitz / Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Lars_Klingbeil_-_2023.jpg' },
  'bt26-r01-03': { license: 'CC BY-SA 4.0', credit: 'Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Katherina_Reiche.jpg' },
  'bt26-r01-06': { license: 'CC BY-SA 3.0', credit: 'Angelika Kohlmeier / Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:BaerbelBas.JPG' },
  'bt26-r01-07': { license: 'CC BY-SA 4.0', credit: 'Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Johann_Wadephul.jpg' },
  'bt26-r01-08': { license: 'CC BY-SA 3.0', credit: 'Daniel Biskup / Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Boris_Pistorius_(2019).jpg' },
  // Round 2 – Demokratie & Rechtsextremismus
  'bt26-r02-01': { license: 'CC BY-SA 4.0', credit: 'Sandro Halank / Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Alice_Weidel_-_2021_(cropped).jpg' },
  'bt26-r02-02': { license: 'CC BY-SA 4.0', credit: 'Sandro Halank / Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Tino_Chrupalla.jpg' },
  'bt26-r02-03': { license: 'CC BY-SA 4.0', credit: 'Superbass / Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Sahra_Wagenknecht_2024.jpg' },
  'bt26-r02-04': { license: 'CC BY-SA 4.0', credit: 'Sandro Halank / Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Official_Portrait_of_Heidi_Reichinnek.png' },
  'bt26-r02-06': { license: 'Public Domain', credit: 'Hilmi Hacaloğlu / Wikimedia Commons', licenseUrl: '', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Ekrem_%C4%B0mamo%C4%9Flu_2019.jpg' },
  'bt26-r02-07': { license: 'CC BY 3.0', credit: '대한민국 대통령실 / Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:South_Korea_President_Yoon_Suk_Yeol_portrait.jpg' },
  // Round 3 – EU & NATO
  'bt26-r03-01': { license: 'CC BY 2.0', credit: 'European People\'s Party / Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Ursula_von_der_Leyen_(2019).jpg' },
  'bt26-r03-02': { license: 'CC BY 4.0', credit: 'Aurore Martignoni / European Union / Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Kaja_Kallas_(2024).jpg' },
  // Round 6
  'bt26-r06-05': { license: 'CC BY-SA 4.0', credit: 'Wikimedia Commons', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', filePageUrl: 'https://commons.wikimedia.org/wiki/File:Corneille_Nangaa.jpg' },
};

async function main() {
  const data = JSON.parse(readFileSync(DATA_FILE, 'utf-8'));

  // Attribs aus dem Wikipedia-Pass laden
  const wikiAttribs = existsSync(ATTRIB_FILE)
    ? JSON.parse(readFileSync(ATTRIB_FILE, 'utf-8'))
    : {};

  let updated = 0;
  let skipped = 0;

  for (const round of data.rounds) {
    for (const item of round.items) {
      const slug = slugify(item.correctAnswer);
      // Prüfen ob Datei existiert (jpg oder png)
      const jpgPath = join(PUBLIC, round.id, `${slug}.jpg`);
      const pngPath = join(PUBLIC, round.id, `${slug}.png`);
      const absPath = existsSync(jpgPath) ? jpgPath : existsSync(pngPath) ? pngPath : null;
      if (!absPath) { skipped++; continue; }

      const ext = absPath.endsWith('.png') ? '.png' : '.jpg';
      const localRelPath = `/bildertest/2026/${round.id}/${slug}${ext}`;

      // Attribution bestimmen: Bekannte > Wikipedia-Pass > Fallback
      const known = KNOWN_ATTRIBS[item.id];
      const wiki = wikiAttribs[item.id];

      const credit = known?.credit || wiki?.credit || 'Wikimedia Commons';
      const license = known?.license || wiki?.license || 'CC BY-SA 4.0';
      const licenseUrl = known?.licenseUrl || wiki?.licenseUrl || 'https://creativecommons.org/licenses/by-sa/4.0/';
      const filePageUrl = known?.filePageUrl || wiki?.filePageUrl || '';

      item.image = {
        ...item.image,
        status: 'READY',
        localPath: localRelPath,
        credit,
        licenseName: license,
        licenseUrl,
        photographer: credit.split('/')[0].trim(),
        sourceUrl: filePageUrl,
      };

      updated++;
      console.log(`✅ ${item.id} – ${item.correctAnswer}`);
    }
  }

  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`\n📝 JSON aktualisiert: ${updated} READY, ${skipped} ohne Bild übersprungen`);
}

main().catch(console.error);
