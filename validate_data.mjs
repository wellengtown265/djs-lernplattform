#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🔍 GEO-DATEN & BILDERTEST VALIDIERUNG\n');

// ═══════════════════════════════════════════════════════════════════════════
// 1. GEO-FRAGEN ANALYSE
// ═══════════════════════════════════════════════════════════════════════════

const geoData = JSON.parse(fs.readFileSync(path.join(__dirname, 'app/src/data/geoQuestions.json')));
const geoQuestions = geoData.questions;

console.log('📍 GEO-FRAGEN:');
console.log(`  Gesamt: ${geoQuestions.length}`);
console.log(`  Spielbar in V1.3: ${geoData.playableInV1_3}`);

const geoByType = {};
const geoByDifficulty = {};
const geoByRegion = {};

geoQuestions.forEach(q => {
  geoByType[q.type] = (geoByType[q.type] || 0) + 1;
  geoByDifficulty[q.difficulty] = (geoByDifficulty[q.difficulty] || 0) + 1;
  geoByRegion[q.region] = (geoByRegion[q.region] || 0) + 1;
});

console.log('\n  Nach Typ:');
Object.entries(geoByType).forEach(([t, c]) => console.log(`    ${t}: ${c}`));

console.log('\n  Nach Schwierigkeit:');
Object.entries(geoByDifficulty).forEach(([d, c]) => console.log(`    ${d}: ${c}`));

console.log('\n  Nach Region (Top 5):');
Object.entries(geoByRegion)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5)
  .forEach(([r, c]) => console.log(`    ${r}: ${c}`));

// Fehler-Check
const geoErrors = [];
geoQuestions.forEach((q, i) => {
  if (!q.id) geoErrors.push(`[${i}] Fehlende ID`);
  if (!q.type) geoErrors.push(`[${q.id}] Fehlender type`);
  if (!q.prompt) geoErrors.push(`[${q.id}] Fehlender prompt`);
  if (q.type === 'map-interactive' && (!q.locations || q.locations.length === 0)) {
    geoErrors.push(`[${q.id}] map-interactive ohne locations`);
  }
});

if (geoErrors.length > 0) {
  console.log(`\n  ⚠️  FEHLER (${geoErrors.length}):`);
  geoErrors.slice(0, 10).forEach(e => console.log(`    ${e}`));
  if (geoErrors.length > 10) console.log(`    ... und ${geoErrors.length - 10} weitere`);
} else {
  console.log('\n  ✓ Alle Geo-Fragen valide');
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. BILDERTEST ANALYSE
// ═══════════════════════════════════════════════════════════════════════════

const btData = JSON.parse(fs.readFileSync(path.join(__dirname, 'app/src/data/bildertestRounds.json')));

console.log('\n🖼️  BILDERTEST:');
console.log(`  Runden: ${btData.rounds.length}`);

const btStats = { total: 0, ready: 0, pending: 0, failed: 0 };

btData.rounds.forEach(round => {
  const stats = {
    total: round.items.length,
    ready: round.items.filter(i => i.image?.status === 'READY').length,
    pending: round.items.filter(i => i.image?.status === 'PENDING').length,
    failed: round.items.filter(i => i.image?.status === 'FAILED').length,
  };

  btStats.total += stats.total;
  btStats.ready += stats.ready;
  btStats.pending += stats.pending;
  btStats.failed += stats.failed;

  const pct = Math.round((stats.ready / stats.total) * 100);
  console.log(`  ${round.id}: ${stats.ready}/${stats.total} READY (${pct}%) | ${stats.pending} pending, ${stats.failed} failed`);
});

console.log(`\n  Gesamt: ${btStats.ready}/${btStats.total} READY (${Math.round((btStats.ready / btStats.total) * 100)}%)`);

// Bilder auf Disk checken
console.log('\n📂 BILDER AUF DISK:');
const btDir = path.join(__dirname, 'app/public/bildertest/2026');
let diskCount = 0;
if (fs.existsSync(btDir)) {
  const rounds = fs.readdirSync(btDir).filter(d => d.match(/^r\d+$/));
  rounds.forEach(round => {
    const roundPath = path.join(btDir, round);
    const files = fs.readdirSync(roundPath).filter(f => f.match(/\.(jpg|png|webp)$/i));
    diskCount += files.length;
    console.log(`  ${round}: ${files.length} Bilder`);
  });
  console.log(`  Gesamt auf Disk: ${diskCount}`);
}

// Fehler-Check
const btErrors = [];
btData.rounds.forEach(round => {
  round.items.forEach((item, i) => {
    if (!item.id) btErrors.push(`[${round.id}] Item ${i}: Fehlende ID`);
    if (!item.image) btErrors.push(`[${round.id}/${item.id}] Fehlende image-Metadaten`);
    if (item.image && !item.image.status) btErrors.push(`[${round.id}/${item.id}] Fehlender image.status`);
  });
});

if (btErrors.length > 0) {
  console.log(`\n  ⚠️  FEHLER (${btErrors.length}):`);
  btErrors.slice(0, 10).forEach(e => console.log(`    ${e}`));
  if (btErrors.length > 10) console.log(`    ... und ${btErrors.length - 10} weitere`);
} else {
  console.log('\n  ✓ Alle Bildertest-Metadaten valide');
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. MAPPING CHECK
// ═══════════════════════════════════════════════════════════════════════════

console.log('\n🔗 MAPPING GEO ↔ TOPOJSON:');

const deutschlandGeoJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'app/public/geo/deutschland-bundeslaender.json')));
const worldTopoJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'app/public/geo/world-110m.json')));

const deFeatures = deutschlandGeoJson.features?.length || 0;
const worldCountries = worldTopoJson.objects?.countries?.geometries?.length || 0;

console.log(`  Deutschland GeoJSON: ${deFeatures} Bundesländer`);
console.log(`  World TopoJSON: ${worldCountries} Länder`);

// Check ob alle map-interactive Fragen Highlighting-Codes haben
const mapQuestions = geoQuestions.filter(q => q.type === 'map-interactive');
console.log(`\n  Map-interactive Fragen: ${mapQuestions.length}`);

const mapErrors = mapQuestions.filter(q => {
  const hasCodes = q.locations?.some(loc => loc.match(/\([A-Z]{2}(?:-[A-Z0-9]+)?\)/));
  return !hasCodes;
});

if (mapErrors.length > 0) {
  console.log(`  ⚠️  ${mapErrors.length} Fragen ohne Highlight-Codes`);
  mapErrors.slice(0, 3).forEach(q => console.log(`    ${q.id}: ${q.prompt.substring(0, 50)}`));
} else {
  console.log(`  ✓ Alle map-interactive Fragen haben Highlight-Codes`);
}

// ═══════════════════════════════════════════════════════════════════════════
// SUMMARY
// ═══════════════════════════════════════════════════════════════════════════

console.log('\n═════════════════════════════════════════');
console.log('SUMMARY für 17.05.2026 v2-Launch:');
console.log(`  Geo-Fragen: ${geoQuestions.length} (${geoData.playableInV1_3} spielbar)`);
console.log(`  Bildertest-Items: ${btStats.total} (${btStats.ready} ready, ${btStats.pending} pending)`);
console.log(`  Bilder auf Disk: ${diskCount}`);
console.log(`  Geo-Fehler: ${geoErrors.length}`);
console.log(`  Bildertest-Fehler: ${btErrors.length}`);
console.log('═════════════════════════════════════════\n');
