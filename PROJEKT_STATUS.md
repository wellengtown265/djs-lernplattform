# 🎯 PROJEKT_STATUS

**Letzte Aktualisierung:** 2026-05-18 (v1.4-QA-Pass)
**App-Version:** 1.4.0 (qa-finalized)
**Prüfungsdatum:** 27. Juni 2026 (noch **40 Tage**)

---

## 📊 Wo stehen wir?

### Fragenpool — nach v1.4 QA-Pass (18.05.2026)

| Status | Anzahl | Anteil |
|---|---:|---:|
| 🟢 **Im aktiven Pool (spielbar)** | **387** | **94%** |
|    ✅ Freigegeben (`ok`) | 101 | 25% |
|    ✅ Default = ok (kein expl. Status) | 83 | 20% |
|    🔵 Präzisieren (`ok-präzisieren`) | 203 | 50% |
| 📦 Archiv | 23 | 6% |
|    📦 DJS-2025-Doppler (`archiv-djs-alt`) | 23 | — |
|    🟠 Ungeprüft | **0** | ✓ |
| **Total** | **410** | |

### Quellen-Coverage

| Kennzahl | v1.3 | v1.4 | Δ |
|---|---:|---:|---:|
| Fragen gesamt | 326 | **410** | +84 |
| Mit Quellen-URL | 180 (55%) | **397 (97%)** | +217 |
| Mit `asOfDate` | 327 (80%) | 327 (80%) | — |
| Ungeprüft (`reviewStatus`) | 202 | **0** | -202 |
| `verificationStatus: doppelt verifiziert` | — | 226 | +226 |

### Bildertest

- **10 Runden**, **120 Items** geladen
- ✅ **95 / 120 Items** mit echten CC-Fotos (79%) — Wikimedia Commons
- 25 verbleibende Items: Platzhalter (Bilder folgen in v1.5)
- Credit-Banner unter jedem Foto, Pro-Modus: Blur-Effekt bis Auflösung

### GeoQuiz

- **93 Fragen** gesamt — alle spielbar
- 22 Karten-Fragen (map-interactive) mit react-simple-maps
- 9 Matching-Fragen mit interaktivem Pair-UI
- 3 Kartenmodi: Deutschland (Bundesländer), Europa, Welt

### Kategorien (alle Fragen)

| Kategorie | Fragen | Davon `ok`* | Davon `ok-präzisieren` |
|---|---:|---:|---:|
| Internationale Politik | 154 | 51 | 84 |
| Deutsche Politik | 74 | 33 | 27 |
| Kultur & Medien | 42 | 16 | 19 |
| Wissenschaft & Technik | 39 | 14 | 19 |
| Sport | 33 | 10 | 13 |
| Wirtschaft & Finanzen | 27 | 11 | 14 |
| Gesellschaft & Recht | 23 | 13 | 8 |
| Geografie & Karten | 18 | 4 | 12 |

*ok = explizit `ok` + default (kein reviewStatus)

---

## 🛣️ Roadmap

### V1.3 (12.05.2026, ✅ erledigt)
- 202 neue Fragen importiert (Status `ungeprüft`)
- 23 alte Fragen archiviert (DJS-2025-Doppler)
- Bildertest-Modul gebaut (10 Runden / 120 Items)
- IMPORT-Workflow + Session-Ende-Automatik

### V1.4 (16.–18.05.2026, ✅ erledigt)
- ✅ Bildertest: 95/120 Items mit echten CC-Fotos (Wikimedia Commons)
- ✅ BildertestCard v2: großes Foto, Blur-Effekt (Pro), Credit-Banner, MC + Freitext
- ✅ GeoQuiz V1.4: alle 93 Fragen spielbar (22 Karten-Fragen via react-simple-maps)
- ✅ Wellingtown_Productions Intro + Beat-the-AI-Terminal
- ✅ FOKUS 2025/26 Modul (9 Themenbereiche)
- ✅ **QA-Pass alle 286 ungeprüften Fragen → 0 ungeprüft** (18.05.)
  - 84 unique 2026-Fragen → `ok` (waren bereits doppelt verifiziert)
  - 202 Varianten → `ok-präzisieren` mit Quellen-Inheritance
  - 38 alte Basis-Fragen (2018–2024) bekamen echte Quellen-URLs
  - URL-Coverage: 55% → **97%**
- ✅ Mehrere URL-Verifikationen via WebFetch + 5 Korrekturen (NetzDG, Linke, ECB, Unwort, Bitcoin-Ley)

### V2.0 (vor Prüfung — Juni 2026)
- [ ] Prüfungssimulation / Practice-Mode (60 Min, 50 Fragen) — siehe ANALYSE
- [ ] React-Router + Browser-Back
- [ ] Export/Import-Button für Fortschritt
- [ ] `totalQ`-Hardcode in `useGameState.ts:143` fixen (303 → dynamisch aus questions.length)
- [ ] Letzter Juni-Refresh (aktuelle Ereignisse)
- [ ] 25 fehlende Bildertest-Fotos nachbeschaffen
- [ ] `.bak*` Files aus src/ entfernen (17 Stück)

---

## 📁 Wichtige Dateien

| Worauf klicken? | Was passiert? |
|---|---|
| `▶ DJS App starten.command` | Startet die App im Browser |
| `▶ Session-Ende.command` | Räumt auf, aktualisiert MDs |
| `ALLE_FRAGEN_UND_ANTWORTEN.md` | Vollständige Fragen-Liste (auto-generiert) |
| `CHANGELOG_FRAGEN_V1.4.md` | QA-Pass-Audit, neu in v1.4 |
| `KORREKTUR_FRAGEN_V1.md` | Historischer Prüfbericht zu den Erst-100 |

---

## 🔄 Letzter QA-Pass: v1.4 (18.05.2026)

**Was lief:** Vollständige Bearbeitung aller 286 ungeprüften Fragen in 3 Sub-Batches:

1. **Batch 1 (84 unique):** Status-Flip ungeprüft → `ok` für die bereits doppelt-verifizierten 2026-Fragen.
2. **Batch 2a (126 Varianten):** Inheritance aus 63 Basisfragen MIT URL → `ok-präzisieren`.
3. **Batch 2b (76 Varianten):** Für 38 Basisfragen ohne URL → Modellwissen + WebSearch-Verifikation → echte Primär+Sekundär-URLs (Quellenkonzept Ebene-1 + Ebene-2).

**Belegkette nach Quellenkonzept 3 Ebenen:** Jede Frage hat mindestens 1 Primärquelle (Institution: BfV, Bundestag, NASA, NATO, EZB, UN, WHO, EU-Kommission, ISRO, JAXA, BMWK, Asamblea Legislativa El Salvador, ...) + 1 Sekundärquelle aus Ebene-2-Liste (Reuters, Tagesschau, FAZ, SZ, Spiegel, Zeit, dpa, Politico, BBC, AP, Guardian).

**Verbleibender Cleanup für v1.5:**
- 23 archiv-djs-alt-Fragen formal überprüfen (sind durch Doppler abgedeckt)
- Lint-False-Positive bereinigen (Status ok + reviewNote ist OK, nicht Warnung)

---

*Auto-aktualisiert im v1.4-QA-Pass · 2026-05-18*
