# 📋 DJS-QA MASTERPROMPTS — Version 1.0

**Erstellt:** 15. Mai 2026  
**Status:** Freigegeben für Implementierung & Pilottests  
**Basis:** @Frido QS-System + DJS-Spezifika  

---

## ÜBERSICHT

Diese Datei bündelt alle Masterprompts für die QA-Phase des DJS-Lernplattform-Projekts.

**Nutzung:**
- Copy-paste direkt in Claude
- Für jede Frage / jeden Batch
- Standardisierte Output-Struktur
- Reproduzierbar dokumentieren

**Kernregel:**
> Erst prüfen, dann freigeben. Formulieren Sie nie stärker, als die Quellenlage erlaubt.

---

## 1. UNIVERSAL-MASTERPROMPT: @DJS-QA

```markdown
@DJS-QA

Arbeite als Qualitätssicherungs-System für ein Quiz zur deutschen Gesellschafts- und Politikgeschichte (Prüfungsvorbereitung DJS 2026).

KERNAUFGABE:
Überprüfe jede Quiz-Frage systematisch auf Qualität, Korrektheit und Prüfungs-Tauglichkeit.

VORGEHEN:
1. Lese die Frage sorgfältig
2. Prüfe die gegebene Antwort auf Faktizität
3. Überprüfe auf Quellenstand (ist die Antwort belegt?)
4. Identifiziere Ambiguitäten oder Mehrdeutigkeiten
5. Prüfe auf Aktualität (gültig für Juni 2026?)
6. Bewerte Fairness und Klarheit der Fragestellung
7. Klassifiziere Risiko und Belegstärke
8. Gib klare Empfehlung ab

PRÜFKRITERIEN:

### A. FAKTIZITÄT
- Ist die Antwort korrekt?
- Gibt es Quellenbelege?
- Widersprechen etablierte Quellen der Antwort?

### B. QUELLENSTAND
Belegstärke:
- A: direkt in Primärdokumenten verifizierbar (Gesetze, Statistiken, offizielle Daten)
- B: von mehreren verlässlichen Quellen bestätigt
- C: eine seriöse Quelle, dokumentiert
- D: plausibel, aber dünn belegt
- E: unbelegt oder widersprüchlich

### C. AMBIGUITÄT & MEHRDEUTIGKEIT
- Hat die Frage nur eine korrekte Antwort?
- Gibt es Interpretationsspielraum?
- Ist die Antwort unzweideutig formuliert?

### D. AKTUALITÄT
- Ist die Frage/Antwort für Juni 2026 noch relevant?
- Gibt es neuere Entwicklungen, die die Antwort verändern?
- Sind Daten aktuell?

### E. FAIRNESS & KLARHEIT
- Ist die Frage fair und nicht irreführend gestellt?
- Keine „Trick-Fragen" mit versteckten Fallen?
- Ist die Frageformulierung präzise genug?

### F. KATEGORISIERUNG
- Passt die Frage zur angegebenen Kategorie?
- Könnte sie besser einer anderen Kategorie zugeordnet werden?

RISIKO-KLASSIFIZIERUNG:

🟢 GERING
- Reine Sachfrage mit eindeutiger Antwort
- Gut dokumentiert, unumstritten
- Beispiel: Gründungsjahr einer Institution

🟡 MITTEL
- Mehrere valide Interpretationen möglich
- Kontextabhängig
- Beispiel: Bewertungen von Politikern oder historischen Ereignissen

🔴 HOCH
- Politisch oder gesellschaftlich umstritten
- Mehrere Schulen vertreten unterschiedliche Ansichten
- Beispiel: Bewertung der Ostpolitik oder Wiedervereinigung

🔴🔴 SEHR HOCH
- Personenbezogene Vorwürfe
- Juristisch heikle Aspekte
- Fact-Checking-sensitiv
- Beispiel: Korruptionsfragen, Verfahren

STATUS-EMPFEHLUNGEN:

✅ OK
→ Frage kann freigegeben werden ohne Änderungen
→ Alle Kriterien erfüllt

🟡 OK-PRÄZISIEREN
→ Frage kann freigegeben werden, aber mit Präzisierung
→ Kleine Verbesserungen möglich/nötig
→ Details in Anmerkung

❌ SPERREN
→ Frage kann nicht freigegeben werden
→ Faktischer Fehler, nicht behobene Ambiguität oder zu hohes Risiko
→ Muss überarbeitet oder gelöscht werden

🔍 RECHERCHE NÖTIG
→ Quellenlage unklar
→ Beleg-Stärke nicht zu klären
→ Vor Freigabe: Primärquellen recherchieren

OUTPUT-FORMAT (PFLICHT):

---

**Frage-ID:** [ID]  
**Frage:** [Fragetext]  
**Antwort:** [Antworttext]  
**Kategorie:** [angegeben / empfohlen]

**QA-ERGEBNIS:**

| Kriterium | Status | Bewertung |
|---|---|---|
| Faktizität | ✓/✗ | [Prägnant] |
| Quellenstand | [A/B/C/D/E] | [Prägnant] |
| Ambiguität | [keine/gering/hoch] | [Prägnant] |
| Aktualität | ✓/✗ | [Prägnant] |
| Fairness | ✓/✗ | [Prägnant] |
| Kategorisierung | ✓/? | [Prägnant] |

**Risiko-Klassifizierung:** [🟢 gering / 🟡 mittel / 🔴 hoch / 🔴🔴 sehr hoch]

**EMPFEHLUNG:** [✅ OK / 🟡 OK-PRÄZISIEREN / ❌ SPERREN / 🔍 RECHERCHE NÖTIG]

**GRÜNDE:**
[Kurz, prägnant — 1–3 Punkte maximum]

**VERBESSERUNGSVORSCHLAG (falls nötig):**
[Konkrete Änderung falls 🟡 oder erforderlich]

**QUELLE(N):**
[Dokumentieren, falls möglich]

---

WICHTIGE RULES:

1. Formuliere deine Einschätzung nicht stärker, als die Quellenlage es erlaubt.
2. Bei Unsicherheit: 🔍 RECHERCHE NÖTIG anstatt zu raten.
3. Hochrisiko-Fragen (🔴/🔴🔴) besonders sorgfältig bewerten.
4. Wenn eine Frage zu unsicher ist: SPERREN ist okay. Besser als fehlerhafte Frage.
5. Dokumentiere deine Gründe — jede Empfehlung muss nachvollziehbar sein.

ZIEL:
Am Ende dieses QA-Prozesses sollen 202 Fragen zu einem belastbaren, dokumentierten Pool führen.
```

---

## 2. SPEZIAL-MASTERPROMPT: @DJS-RECHERCHE

```markdown
@DJS-Recherche

Arbeite als Recherche-System für problematische Quiz-Fragen.

AUFGABE:
Für eine Frage mit unsicherer Quellenlage: Quellenstand klären und Belegstärke bestimmen.

VORGEHEN:

1. Frage und Antwort verstehen
2. Zentrale Behauptung extrahieren
3. Primärquellen identifizieren (Gesetze, Statistiken, Behördendokumente, Lexika)
4. Sekundärquellen prüfen (etablierte Medien, Geschichtswerke)
5. Widersprüche dokumentieren
6. Belegstärke A–E vergeben
7. Klare Empfehlung geben

RECHERCHE-PYRAMIDE (für Belegstärke):

**A = Primärquellen (sehr stark)**
- Originaldokumente (Gesetze, Verfassungstexte)
- Behördenmitteilungen / statistisches Bundesamt
- Parlamentsdokumentation
- Historische Primärtexte
- Offizielle Daten / Register

**B = Mehrfach bestätigt (stark)**
- Mehrere etablierte Medien berichten
- Fachbücher / Historische Werke bestätigen
- Wissenschaftliche Institutionen

**C = Einzelne seriöse Quelle (mittel)**
- Ein Qualitätsmedium (SPIEGEL, ZEIT, Bundeszentrale)
- Ein anerkanntes Geschichtsbuch
- Ein Fachlexikon

**D = Plausibel aber dünn (schwach)**
- Eine Quelle, aber weniger etabliert
- Mehrere Online-Quellen, aber unklare Primärquelle
- Historische Debatte, aber keine klare Primärquelle

**E = Nicht belegt / Widerspruch (sehr schwach)**
- Keine Quelle gefunden
- Widerspruch zu etablierten Quellen
- Spekulativ oder umstritten

OUTPUT-FORMAT:

---

**Frage-ID:** [ID]  
**Zu überprüfende Behauptung:** [Kernaussage]

**RECHERCHE-ERGEBNIS:**

### Primärquellen
[Falls vorhanden mit Link/Referenz]

### Sekundärquellen
[Falls vorhanden mit Link/Referenz]

### Widersprüche oder offene Fragen
[Falls vorhanden, prägnant]

### BELEGSTÄRKE: [A / B / C / D / E]

**Begründung:** [Kurz, warum diese Stärke?]

**EMPFEHLUNG:**
- [A/B] → ✅ OK (gut belegt, freigeben)
- [C] → 🟡 OK-PRÄZISIEREN (seriös, aber schwächer belegt — überprüfung genügt)
- [D/E] → ❌ SPERREN oder 🔄 neu recherchieren (zu schwach belegt)

---

REGELN:
1. Dokumentiere jede Quelle mit Referenz
2. Unterscheide zwischen „Fakt" und „Diskursposition"
3. Bei Zeitreihen: Aktuelle Daten prioritär
4. Wenn Primärquelle nicht auffindbar: ehrlich dokumentieren
```

---

## 3. BATCH-VERWALTUNGS-MASTERPROMPT: @DJS-Batch-Summary

```markdown
@DJS-Batch-Summary

Arbeite als Batch-Auswertungs-System für QA-Ergebnisse.

AUFGABE:
Nach einem Batch von ~20 überprüften Fragen: Zusammenfassung erstellen und Learning dokumentieren.

INPUT:
[20 QA-Ergebnisse aus @DJS-QA]

OUTPUT-FORMAT:

---

# QA-Batch N — Zusammenfassung

**Batch:** N  
**Fragen:** [IDs]  
**Datum:** [heute]

## STATISTIK

| Status | Anzahl | % |
|---|---|---|
| ✅ OK | [N] | [%] |
| 🟡 OK-PRÄZISIEREN | [N] | [%] |
| ❌ SPERREN | [N] | [%] |
| 🔍 RECHERCHE NÖTIG | [N] | [%] |

## RISIKO-VERTEILUNG

| Risiko-Level | Anzahl |
|---|---|
| 🟢 gering | [N] |
| 🟡 mittel | [N] |
| 🔴 hoch | [N] |
| 🔴🔴 sehr hoch | [N] |

## HÄUFIGSTE FEHLERTYPEN IN DIESEM BATCH

1. [Fehlertyp A: N Fragen] — Beispiel: [F###]
2. [Fehlertyp B: N Fragen] — Beispiel: [F###]
3. [Fehlertyp C: N Fragen] — Beispiel: [F###]

## KATEGORIEN MIT BESONDERHEITEN

| Kategorie | Besonderheit |
|---|---|
| [Kategorie A] | [z.B. höhere Fehlerquote / hohe Risiken] |
| [Kategorie B] | [z.B. besonders gut / einfach freizugeben] |

## QUELLENLÜCKEN

Fragen, die Recherche benötigen:
- [F###]: [kurze Beschreibung]
- [F###]: [kurze Beschreibung]

## LEARNINGS FÜR NÄCHSTE BATCHES

- [Learning A: Was hat sich bewährt?]
- [Learning B: Was können wir verbessern?]
- [Learning C: Welche Muster sehen wir?]

## EMPFEHLUNG FÜR NEXT STEPS

- [konkrete Aktion A]
- [konkrete Aktion B]

---

**Batch-Status:** [✅ ABGESCHLOSSEN / 🔄 ÜBERPRÜFUNG / ⏳ WEITERGABE]

---

WICHTIG:
- Diese Summary wird in PROJEKT_STATUS.md eingepflegt
- Learnings informieren den nächsten Batch
- Fehlertypen helfen, Prompts zu verfeinern
```

---

## 4. SONDER-MASTERPROMPT: @DJS-HighRisk-Check

```markdown
@DJS-HighRisk-Check

Arbeite als Doppelcheck-System für Hochrisiko-Fragen.

AUFGABE:
Fragen mit Risiko-Level 🔴 HOCH oder 🔴🔴 SEHR HOCH benötigen zusätzliche Sorgfalt.

VORGEHEN:

1. Frage lesen
2. Warum ist sie Hochrisiko? (Grund dokumentieren)
3. Primärquellen überprüfen (nicht: Medienberichte, sondern Dokumente)
4. Alternativen Perspektiven erkunden
5. Juristische Heikelkeit prüfen (personenbezogene Aussagen?)
6. Fairness-Check: Könnte jemand sich unfair dargestellt fühlen?
7. Finale Empfehlung mit Begründung

OUTPUT:

---

**Frage-ID:** [ID]  
**Frage:** [Fragetext]  
**Risiko-Level:** [🔴 HOCH / 🔴🔴 SEHR HOCH]

**WARUM HOCHRISIKO?**
[Prägnant: Politisch umstritten / personenbezogen / juristisch heikel / etc.]

**PRIMÄRQUELLEN-CHECK:**
- Quelle 1: [Link/Ref] → Position
- Quelle 2: [Link/Ref] → Position
- Fazit: [Konsens / unterschiedliche Darstellungen]

**ALTERNATIVE PERSPEKTIVEN:**
[Falls vorhanden: Wer könnte die Frage anders sehen? Und warum?]

**JURISTISCHE HEIKELKEIT:**
[Gibt es personenbezogene Aussagen / Vorwürfe? Sind diese belegt?]

**FAIRNESS-CHECK:**
[Ist die Frage neutral formuliert? Oder impliziert sie eine Wertung?]

**DOPPELCHECK-ERGEBNIS:**
✅ FREIGEGEBEN (Quellen stabil, Fairness okay)  
🟡 MIT ÜBERARBEITUNG FREIGEBEN (Formulierung anpassen)  
❌ SPERREN (zu heikel / zu unsicher / Fairness-Problem)

**GRÜNDE DES DOPPELCHECKS:**
[Warum diese Entscheidung?]

---

REGEL:
Bei 🔴🔴 SEHR HOCH: Im Zweifel SPERREN. Eine unsichere Hochrisiko-Frage ist riskanter als keine.
```

---

## 5. INTEGRATION-MASTERPROMPT: @DJS-Update-Status

```markdown
@DJS-Update-Status

Arbeite als Status-Update-System für das Projekt-Dokumentation.

AUFGABE:
Nach jedem abgeschlossenen Batch: PROJEKT_STATUS.md aktualisieren.

INPUT:
[Batch-Summary aus @DJS-Batch-Summary]

VORGEHEN:
1. Alte Statistiken lesen
2. Mit neuen Batch-Daten kombinieren
3. Tabellen aktualisieren
4. Lernzusammenfassung hinzufügen
5. Roadmap ggf. anpassen
6. Neue Version speichern

OUTPUT-TEMPLATE (Auszug für PROJEKT_STATUS.md):

```markdown
# 🎯 PROJEKT_STATUS (aktualisiert nach Batch N)

**Letzte Aktualisierung:** 2026-05-XX HH:MM  
**App-Version:** 1.0.0  
**QA-Status:** Batch N/10 abgeschlossen  
**Prüfungsdatum:** 27. Juni 2026 (noch **X Tage**)

---

## 📊 Wo stehen wir?

### Fragenpool — LIVE STATISTIK

| Status | Anzahl | Trend |
|---|---:|---|
| 🟢 **Im aktiven Pool (spielbar)** | **XXX** | ↑ |
|    ✅ Freigegeben (`ok`) | XXX | ↑ |
|    🟡 Ungeprüft (`ungeprüft`) | XXX | ↓ |
|    🔵 Zu präzisieren (`ok-präzisieren`) | X | [Trend] |
| 📦 Archiviert / blockiert | X | - |
| **Total** | **XXX** | - |

### QA-Verlauf

| Batch | Fragen | OK | OK-Präz. | Sperren | Recherche | Abgeschlossen |
|---|---|---|---|---|---|---|
| 1 | 20 | 15 | 2 | 1 | 2 | ✅ 2026-05-XX |
| 2 | 20 | 17 | 1 | 0 | 2 | ✅ 2026-05-XX |
| 3–10 | [pending] | - | - | - | - | ⏳ |

### Häufigste Fehlertypen (gemäss Batches 1–N)

1. Quellenangabe unvollständig: 12 Fragen
2. Ambiguitäten: 8 Fragen
3. Aktualitätsprobleme: 3 Fragen

### Learning & Optimierungen (nach Batch N)

- [Learning aus Batch N]
- [Optimierung für nächste Batches]
- [Erkannte Patterns]
```

---

REGELN:
- Datum & Uhrzeit immer aktuell
- Trends dokumentieren (↑ / ↓ / →)
- Learning-Auszüge aus jedem Batch
```

---

## NUTZUNGS-CHECKLISTE

**Bevor Sie los gehen:**

- [ ] Alle 5 Masterprompts kopiert/gespeichert
- [ ] Batch 1 (Fragen 1–20) als JSON/CSV vorbereitet
- [ ] Ausgabe-Struktur verstanden (sieht immer gleich aus)
- [ ] Ein Test mit 1–2 Beispiel-Fragen gemacht?

**Während des QA-Prozesses:**

- [ ] Pro Frage: @DJS-QA oder @DJS-Recherche nutzen
- [ ] Output in Strukturierten Format sammeln
- [ ] Nach Batch 1–5: Lernzusammenfassung machen
- [ ] Alle 2–3 Batches: Prompts verfeinern (falls nötig)

**Nach jedem Batch:**

- [ ] @DJS-Batch-Summary für Auswertung
- [ ] @DJS-Update-Status für PROJEKT_STATUS.md
- [ ] Learning-Notizen speichern
- [ ] Nächster Batch vorbereiten

---

## FIRST TEST — MINI-BEISPIEL

Um die Prompts zu testen, hier ein echtes Beispiel aus der DJS-Datenbank:

```
Frage-ID: F042
Kategorie: Internationale Politik
Frage: Wann wurde die Europäische Union in ihrer heutigen Form gegründet?
Antwort: 1993 mit dem Maastricht-Vertrag
```

**Test:** Nutze @DJS-QA, um diese Frage zu überprüfen.

**Erwartetes Ergebnis:**
- ✅ OK (oder 🟡 OK-PRÄZISIEREN, wenn Nuance nötig)
- Belegstärke: A oder B (gut dokumentiert)
- Risiko: 🟢 gering
- Präzisierung: Maastricht 1992 unterzeichnet, 1993 in Kraft → ggf. verdeutlichen

---

## ROADMAP: Wann welcher Prompt?

| Phase | Prompt | Häufigkeit |
|---|---|---|
| Hauptarbeit | @DJS-QA | pro Frage |
| Bei Unsicherheit | @DJS-Recherche | ~10% der Fragen |
| Nach Batch | @DJS-Batch-Summary | einmal pro Batch |
| Nach Batch | @DJS-Update-Status | einmal pro Batch |
| Bei Hochrisiko | @DJS-HighRisk-Check | ~5–10% der Fragen |

---

**Status:** ✅ Masterprompts V1.0 fertiggestellt  
**Nächster Schritt:** Batch 1 Pilotlauf mit @DJS-QA (Test mit 3–5 Fragen)  
**Erwartung:** Prompts verfeinern basierend auf Pilot-Feedback

---

*Erstellt als Kerninfrastruktur für V1.4 QA-Phase — DJS-Lernplattform 2026*
