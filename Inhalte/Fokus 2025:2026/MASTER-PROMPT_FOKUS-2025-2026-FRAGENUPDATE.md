# MASTER-PROMPT: FOKUS 2025/2026 — Großes Fragen-Update
**Für: Claude Desktop / Claude App**  
**Aufgabe:** Neue QA-Fragen aus Themenkomplexe 2025-2026 generieren  
**Ziel:** +120-150 neue Fragen für DJS v2-Launch (17.05.2026)  
**Status:** Rohquellen vorhanden, ready für Verarbeitung

---

## 📋 INPUT-DATEIEN

Alle Dateien liegen in: `/CLAUDE_CODE/DJS-Lernplattform/Inhalte/Fokus 2025:2026/`

1. **QUELLEN_DATA_NEW_Themenkomplexe_DJS_2025-2026.md** (PRIMARY)
   - 12 Themenkomplexe mit Quellen (Stufe 1/2/3)
   - Suchstrings für Nachrecherche
   - Zeitraum: Mai 2025 – Mai 2026

2. **deep-research-report.md** & **deep-research-report-2.md**
   - Tiefenanalysen zu einzelnen Themen
   - Kontext, Hintergründe, Verknüpfungen
   - Fact-Checking Material

3. **Bestehende Frage-Struktur** (in `app/src/data/questions.json`)
   - Aktuell: ~202 Fragen
   - Zu erweitern um ~120-150 neue Fragen

---

## 🎯 THEMENKOMPLEXE → KATEGORIEN-MAPPING

| # | Themenkomplex | Haupt-Kategorie | Subcategory | Q-Target |
|---|---|---|---|---|
| 1 | AfD, BfV, Verbotdebatte | Deutsche Politik | Innenpolitik | 8-10 |
| 2 | Bundeshaushalt, Investitionspaket | Wirtschaft & Finanzen | Kennzahlen + Recht | 8-10 |
| 3 | Migration, Grenzpolitik, GEAS | Gesellschaft & Recht | Migration | 10-12 |
| 4 | Trump-Zölle, EU-US-Handel | Intl. Politik + Wirtschaft | EU & Weltpolitik | 10-12 |
| 5 | Gipfeljahr 2025 (NATO, G7, EU-China, COP30) | Intl. Politik | NATO & Weltpolitik | 12-15 |
| 6 | Europäische Wahlen (Rumänien, Polen) | Intl. Politik | EU & Europa | 8-10 |
| 7 | Vatikan nach Franziskus (Papst Leo XIV) | Kultur & Religion | Kultur | 5-8 |
| 8 | WHO-Pandemieabkommen (PABS) | Wissenschaft & Technik | Gesundheit | 8-10 |
| 9 | Plattformregulierung (DSA, DMA, KI-Infra) | Wissenschaft & Technik | KI & Digitales | 12-15 |
| 10 | Literatur- & Friedenspreise 2025 | Kultur & Medien | Literatur & Preise | 10-12 |
| 11 | Film/Pop (ESC, Berlinale, Oscars 2025-26) | Kultur & Medien | Film & Kunst | 8-10 |
| 12 | Sportgroßereignisse 2025 | Sport | Fußball + Olympia | 10-12 |
| **Gesamt** | — | — | — | **109-139** |

---

## ❌ QUALITÄTS-RICHTLINIEN (müssen eingehalten werden!)

### 1. Frage-Struktur (verbindlich)
```json
{
  "id": "djs{year}{category-code}{3-digit}",
  "year": 2025 || 2026,
  "type": "singlechoice" | "multichoice" | "cloze" | "matching",
  "category": "Deutsche Politik" | "Internationale Politik" | "Wirtschaft & Finanzen" | "Gesellschaft & Recht" | "Wissenschaft & Technik" | "Sport" | "Kultur & Medien" | "Geografie & Karten",
  "subcategory": "MUST match categories.json",
  "difficulty": "leicht" | "mittel" | "schwer",
  "question": "STRING (max 200 chars, prägnant, kein Buzzword-Salat)",
  "options": ["A", "B", "C", "D"],  // 4 Optionen, keine Fangfragen
  "correctAnswers": ["A"],  // Array, kann bei multichoice >1 sein
  "explanation": "AUSFÜHRLICH (min. 150 Wörter): Antwort erklären, Kontext, warum andere falsch",
  "context": "Hintergrund für Lernende (min. 80 Wörter): Was ist wichtig? Warum DJS-relevant?",
  "sources": [
    {
      "title": "STRING",
      "url": "https://..."  // MUSS valide sein
    }
  ],
  "relatedQuestions": [],  // Später filled
  "tags": ["tag1", "tag2", ...],  // 3-5 Tags, lowercase
  "verificationStatus": "doppelt verifiziert" | "verifiziert" | "recherche nötig",
  "reviewStatus": "draft" | "in-review" | "approved",
  "asOfDate": "2026-05-16"
}
```

### 2. Fakten-Check
- **Jede Frage muss auf Stufe-1 oder Stufe-2 Quellen basieren** (Behörde, Agentur, Primärquelle)
- Daten: Zahlen + Datum überprüfen (z.B. „Haushalt 2026: 524,54 Mrd" ← muss verifiziert sein)
- Keine Fehlinformationen, keine Spekulation
- Bei kontroversen Themen (AfD, Migration, etc.): AUSGEWOGEN bleiben, nicht POV

### 3. Schwierigkeitsgrade
- **Leicht:** Begriffe, Daten, wer/was/wann (Hauptsache faktisch)
- **Mittel:** Konsequenzen, Zusammenhänge, Prozesse verstehen
- **Schwer:** Vergleiche, Abwägungen, Kontext-Verständnis (selten >20% der Fragen)

### 4. Keine Duplikate
- Prüfen gegen bestehende questions.json
- Ähnliche Fragen: NUR wenn neuer Kontext/Winkel (z.B. AfD-Einstufung in Eilverfahren vs. Gerichtsentscheidung = 2 Fragen OK)

### 5. DJS-Relevanz
- **DJS-Zeitfenster:** März 2025 bis Mai 2026 (12 Monate vor Prüfung)
- **Prüfungs-Wahrscheinlichkeit:** Hochfrequenz-Events (Wahlen, Haushalt, Gipfel) >80%; Nice-to-know Events (Preise, Sport) 30-50%
- Falls Fragetext: asOfDate = Datum des Events/News (nicht heute!)

---

## 🔧 WORKFLOW FÜR DESKTOP

### Phase 1: THEMENKOMPLEX-ANALYSE (pro Thema)
1. Öffne `QUELLEN_DATA_NEW_Themenkomplexe_DJS_2025-2026.md`
2. Extrahiere Stufe-1/2 Quellen (nicht Suchstrings noch!)
3. Lese deep-research-reports für Vertiefung
4. Schreibe 8-15 Fragen basierend auf:
   - Primäre Events (wer, was, wann)
   - Konsequenzen (warum DJS-relevant?)
   - Verbindungen (zu anderen Themen)

### Phase 2: FRAGEN-BATCH GENERIEREN
1. Pro Themenkomplex: Fragen in JSON-Format
2. Mischung: 50% singlechoice (Fakten), 30% multichoice (Zusammenhänge), 20% cloze/matching (Vertiefung)
3. Schwierigkeits-Verteilung: 60% leicht, 30% mittel, 10% schwer

### Phase 3: QUALITÄTS-CHECK
1. Lint-Check: `npm run lint:questions` (muss 0 Fehler geben)
2. Duplikat-Check gegen bestehende Fragen
3. Quelle-Validierung: Alle URLs live?
4. Verificationstatus: Min. „doppelt verifiziert" für Launch

### Phase 4: INTEGRATION IN questions.json
1. Neue Fragen an bestehende `.json` anhängen
2. IDs nicht ändern (fortlaufend: djs2025dp101, djs2025dp102, ...)
3. Commit mit Message: `feat(questions): add FOKUS 2025/2026 batch (+120 Fragen)`

---

## 📊 FRAGEN-AUDIT (vor Freigabe)

| Check | Status | Muss erfüllt sein |
|---|---|---|
| Anzahl Fragen | — | 120-150 |
| Duplikate | — | 0 |
| Lint-Fehler | — | 0 |
| Ohne Source-URL | — | 0 |
| Ohne explanation | — | 0 |
| verificationStatus < „doppelt verifiziert" | — | <5% (nur Draft) |
| Invalid URLs | — | 0 |
| Schwierigkeits-Mix | — | 55-65% leicht, 25-35% mittel, 10-15% schwer |

---

## 🎁 ZUSATZ-INFOS FÜR DICH

### Bestehende Fragen-Infrastruktur
- **questions.json:** Aktuell ~202 Fragen (Stand 13.05.2026)
- **Kategorien (8):** Deutsche Politik, Intl. Politik, Wirtschaft & Finanzen, Gesellschaft & Recht, Wissenschaft & Technik, Sport, Kultur & Medien, Geografie
- **ID-Schema:** `djs{2025|2026}{category-code}{3-digit}` (Beispiel: `djs2025dp042` = DJS 2025 Deutsche Politik 042)

### Category Codes (für IDs)
- `dp` = Deutsche Politik
- `ip` = Intl. Politik
- `wf` = Wirtschaft & Finanzen
- `gr` = Gesellschaft & Recht
- `wt` = Wissenschaft & Technik
- `sp` = Sport
- `mc` = Kultur & Medien (Media/Culture)
- `geo` = Geografie

### Bestehende Tools
- `npm run lint:questions` — Findet E1-E5 Fehler (Duplikate, fehlende Felder, etc.)
- `npm run build` — TypeScript-Check + Vite Build

---

## 🚀 ZIELTERMIN

**17. Mai 2026 — v2-Launch**

- Desktop fertig mit Fragen-Batch: **16. Mai 23:59**
- Terminal (Daten-Validierung): ✅ Geo-Daten & Bildertest validiert
- Build & Test: **17. Mai Früh**

---

## 📝 NOTES FÜR DICH

1. **Nicht perfektionieren.** Besser 150 gute Fragen als 80 perfekte. v1.4 kann Nachschliff sein.
2. **Kontroverse OK.** AfD, Migration, Zölle sind wichtig. Bleib neutral, aber vollständig.
3. **Quellen-Links:** Falls 404, ersetze mit Archiv.org oder Agentur-Übernahme (Reuters, dpa, AFP)
4. **Zwei Schreiber?** Wenn Split: Je einen pro 6 Themenkomplexe, dann gemeinsamer Lint/QA-Check.

---

**Viel Erfolg! 🚀 Terminal wartet auf Validation — Daten sind ready.**
