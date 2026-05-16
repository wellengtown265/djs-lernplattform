# CHANGELOG_FRAGEN — V1.3 Großimport

**Stand:** 13. Mai 2026
**Version:** 1.3.0 — Foundation Bildertest + 202 neue Fragen
**Vorgänger:** V1.1 (QA-Pass) am 13.05.2026

---

## Zusammenfassung

Großer Datenimport mit drei parallelen Strängen, die ChatGPT (Recherche) und Claude Code (Implementierung) vorbereitet haben:

| Strang | Was passiert | Wie viele |
|---|---|---|
| A | **Neue Fragen** importiert (status `ungeprüft`, laufen im Pool mit) | **202** |
| B | **Alte Fragen archiviert** (kamen wortgleich in DJS-2025 vor) | **23** |
| C | **Neues Modul Bildertest** mit Seed-Datenbasis | **10 Runden / 120 Items** |

**Spielbare Fragen-Anzahl nach Import:**
- Vorher: 124 (alle freigegeben)
- Nachher: **124 − 23 + 202 = 303 spielbare Fragen** (davon 202 als `ungeprüft` markiert, 101 als `ok`)

---

## A — 202 neue Fragen

**Quelle:** `IMPORT_13.05/NEU__202_Fragen;2026-05-13;02-52.md` (von ChatGPT generiert auf Basis der 101 verbleibenden Altfragen + DJS-2025-Lückenanalyse).

**Schema-Details:**
- Alle 202 sind `type: "kurzantwort"` (Freitext-Antwort)
- Alle 202 haben `reviewStatus: "ungeprüft"` → laufen mit, sind aber in der Statistik als "noch nicht verifiziert" markiert
- Alle haben `asOfDate: "2026-05-13"` und `importBatch: "202_NEU_2026-05-13"`
- ID-Schema: `djs2026<cat-code>-neu-<seq>`, z. B. `djs2026dp-neu-001`
- Jede Frage referenziert via `relatedQuestions` ihre Basisfrage (`djs2024sc004` usw.)

**Verteilung nach Kategorie:**

| Kategorie | Anzahl |
|---|---:|
| Internationale Politik | 82 |
| Deutsche Politik | 34 |
| Kultur & Medien | 18 |
| Sport | 16 |
| Wirtschaft & Finanzen | 16 |
| Wissenschaft & Technik | 16 |
| Geografie & Karten | 12 |
| Gesellschaft & Recht | 8 |
| **Summe** | **202** |

---

## B — 23 archivierte Altfragen (DJS-2025-Doppler)

Die offizielle DJS-Aufnahmeprüfung 2025 enthielt diese 23 Themen wortgleich oder im selben Kontext. Sie wurden mit `reviewStatus: "archiv-djs-alt"` markiert und fliegen aus dem aktiven Pool. In V1.4 bekommen sie eine eigene Rubrik **„Historische DJS-Fragen"**.

**F-Nummern (positional in der Originaldatei):** F1, F2, F3, F4, F15, F29, F30, F31, F36, F37, F38, F39, F40, F41, F68, F84, F85, F86, F87, F105, F114, F115, F116

| F# | Thema | DJS-2025-Aufgabe |
|---|---|---|
| F1 | Mindestlohn 12,82 € | III-2 |
| F2 / F36 | ePA = elektronische Patientenakte | III-3 |
| F3 | AfD-Verbotsverfahren Antragsberechtigte | IV-4 |
| F4 | Koalitionen Brandenburg/Hamburg/Sachsen/Thüringen | V-4 |
| F15 / F41 | Bundeswehr-Brigade in Litauen | II-5 |
| F29 | Amokfahrten Magdeburg/Mannheim/Vancouver | IV-1 |
| F30 | Duden-Neuaufnahmen 2024 | IV-2 |
| F31 | Zitate Biles/Lindner/Merz/Pelicot | V-1 |
| F37 | Gefangenenaustausch Russland/Westen | IV-5 |
| F38 | Südkorea Staatsstreich Yoon | II-1 |
| F39 | Türkei İmamoğlu Verhaftung | II-2 |
| F40 | Blackout Spanien/Portugal | II-3 |
| F68 / F116 | Tech-CEOs bei Trump-Vereidigung | V-3 |
| F84 | Luke Mockridge / Sat.1 / Paralympioniken | III-4 |
| F85 | Atlantic-Chefredakteur Signal-Chat Jemen | III-5 |
| F86 | Getötete Journalisten Gaza | II-4 |
| F87 | Literaturpreise 2024 | V-5 |
| F105 | Wirtschaftskennzahlen Deutschland April | V-2 |
| F114 | NASA-Astronauten 9 Monate ISS | III-1 |
| F115 | DeepL / Threema EU-Software | IV-3 |

**Begründung:** Vollständig dokumentiert in `IMPORT_13.05/RAUS_FRAGEN_ALT.md` (Wort-/Thematreffer + Kontexttreffer).

---

## C — Bildertest-Modul

Neues Hauptmodul mit eigenem Tab in der Navigation.

**Datenbasis:**
- `src/data/bildertestRounds.json` — 10 Runden à 12 Items (= 120 Items)
- `src/types-bildertest.ts` — `BildertestItem`, `BildertestRound`, `BildertestImageMeta`

**Runden:**

| ID | Titel | Mix |
|---|---|---|
| r01 | Deutsche Bundesregierung & Machtwechsel | 8 P / 4 E |
| r02 | Demokratie, Rechtsextremismus & Rechtsstaat | 8 P / 4 E |
| r03 | EU, NATO & europäische Sicherheit | 8 P / 4 E |
| r04 | USA, Trump II & Tech-Macht | 8 P / 4 E |
| r05 | Kriege, Konflikte & Diplomatie | 8 P / 4 E |
| r06 | Humanitäre Krisen & Globaler Süden | 8 P / 4 E |
| r07 | Wirtschaft, KI & Plattformmacht | 8 P / 4 E |
| r08 | Kultur, Medien & Preise | 8 P / 4 E |
| r09 | Sport 2025/26 | 8 P / 4 E |
| r10 | Klima, Wissenschaft, Gesundheit & Ereignisbilder | 8 P / 4 E |

**Bildstatus:**
- Alle 120 Items haben `image.status = "NEEDS_IMAGE_REVIEW"` — d. h. Platzhalter
- App zeigt aktuell Prompt + Auflösung ohne Foto (Test ist trotzdem nutzbar)
- Lizenzfreie Bildquellen-Recherche steht in `IMPORT_13.05/BILDERTEST_2026_QUELLEN_BILDQUELLEN_FUER_CODE.md`
- Workflow: Wikimedia Commons → Lizenz/Autor prüfen → `public/bildertest/2026/...` speichern → in JSON status auf `READY` setzen

**Code-Module:**
- `src/types-bildertest.ts`
- `src/data/bildertestRounds.json`
- `src/pages/BildertestMode.tsx` (Startscreen + Rundenkarten + Round-Summary)
- `src/components/BildertestCard.tsx`
- `src/hooks/useBildertestState.ts` (localStorage `djs_bildertest_v1`)

---

## Technische Änderungen

| Datei | Änderung |
|---|---|
| `src/types.ts` | `ReviewStatus` += `'ungeprüft'`, `'archiv-djs-alt'`; `Question.type` += `'kurzantwort'`; `Page` += `'bildertest'`; `Question.importBatch` neu |
| `src/lib/quality.ts` | `PLAYABLE` Set += `'ungeprüft'` (neu laufen mit) |
| `src/data/questions.json` | 202 neu, 23 archiviert |
| `src/data/categories.json` | + Bildertest |
| `src/App.tsx` | Route `'bildertest'` |
| `src/components/navItems.tsx` | + Bildertest-Tab |
| `src/components/NavIcons.tsx` | + BildertestIcon (Kamera-SVG) |
| `scripts/lint-questions.mjs` | + 'ungeprüft', 'archiv-djs-alt', 'kurzantwort' |
| `src/data/changelog.json` | + V1.3-Eintrag |

---

## Nächste Schritte (V1.3 → V1.4)

1. **QA-Pass auf die 202 neuen Fragen** (von `ungeprüft` → `ok`) — Quellenanker verifizieren, URLs ergänzen
2. **Bildertest-Bildrecherche** — Wikimedia Commons abklappern, lokale JPGs nach `public/bildertest/2026/...`
3. **V1.4 Historische DJS-Fragen** — die 23 archivierten + alle alten Bildertests 2021/2023/2024/2025 als eigene Rubrik
4. **QuizMode/LearningMode** — `kurzantwort`-Type sauber rendern (Freitextfeld + tolerante Match-Logik)

---

*Generiert: 13.05.2026 04:xx Uhr — Claude Code v1.3 Foundation-Import*
