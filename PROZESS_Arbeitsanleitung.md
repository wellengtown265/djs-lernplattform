# DJS Lernplattform – Arbeitsanleitung & Workflow

**Stand:** 11. Mai 2026  
**Zweck:** Zentrale Arbeitsanleitung für alle Beteiligten. Enthält den 3-Chat-Workflow, tägliche Abläufe, Templates, Masterprompts und systemübergreifende Projektlogik.

---

## TEIL 1: 3-CHAT-WORKFLOW & TAGESABLAUF

: WER MACHT WAS?

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  HIER (Claude – Dieser Chat)                             │
│  ├─ Konzept verstehen & klären                           │
│  ├─ Arbeit planen & strukturieren                        │
│  ├─ Commands für Code schreiben (token-optimiert)        │
│  └─ Learnings dokumentieren                              │
│                                                             │
│  RECHERCHE (ChatGPT)                                     │
│  ├─ Aktuelle Themen 2025/2026 recherchieren             │
│  ├─ Fragen generieren (DJS-Format)                       │
│  ├─ JSON vorbereiten                                     │
│  └─ Quellen sammeln & validieren                         │
│                                                             │
│  CODE (Claude Code)                                      │
│  ├─ React-App bauen                                      │
│  ├─ Components schreiben                                 │
│  ├─ Logik implementieren                                 │
│  └─ Testen im Browser                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📍 STAND JETZT

### ✅ ABGESCHLOSSEN
- [x] Vollständiges Konzept (4 Seiten, Gamification, etc.)
- [x] Implementierungs-Roadmap (5 Wochen)
- [x] JSON-Schemas definiert (Frage, Kategorie, Config)
- [x] Design-System (Farben, Responsive, Dark Mode)
- [x] Masterprompt für Code geschrieben
- [x] Arbeitsablauf strukturiert (3-Chat-System)

### 🟡 AKTUELL (DIESE WOCHE)
- [ ] Fragen sammeln & in JSON konvertieren
- [ ] Recherche für 2025/2026 Themen
- [ ] Erste Komponenten-Struktur in Code
- [ ] localStorage & Hooks programmieren

### 🔄 KOMMENDE WOCHE
- [ ] Quiz-Modus implementieren
- [ ] Spaced Repetition Engine
- [ ] Lernmodus mit Tabs
- [ ] XP & Streak System

### ⏳ SPÄTER (WOCHEN 4–5)
- [ ] Admin-Panel
- [ ] Testing & Bug-Fixes
- [ ] MVP Launch

---

## 📌 DIE 3 CHATS & IHRE ROLLE

### CHAT 1: HIER (Claude – META & PLANNING)

**AUFGABEN:**
```
✓ Struktur & Planung
✓ Konzept verstehen
✓ Commands generieren (für Code)
✓ Learnings dokumentieren
✓ Zwischen den Chats koordinieren
```

**WAS DU FRAGST:**
```
"Schreib mir einen Command für [Feature]"
→ Ich schreibe kurz & token-optimiert

"Wie funktioniert [Konzept]?"
→ Ich erkläre (kurz, mit Beispiel)

"Was kommt als nächstes?"
→ Ich gebe nächsten Command & Step
```

**WAS DU NICHT FRAGST:**
```
❌ Code schreiben (→ Code Chat)
❌ Recherche durchführen (→ ChatGPT)
❌ Detailliertes Debugging (→ Code Chat)
```

---

### CHAT 2: ChatGPT (RECHERCHE & DATEN)

**AUFGABEN:**
```
✓ Recherche durchführen
✓ Fragen generieren
✓ JSON vorbereiten
✓ Quellen sammeln
✓ Verifikation
```

**MASTERPROMPT FÜR CHATGPT:**

```
Du hilfst mir, Fragen für eine DJS-Lernplattform 
vorzubereiten. Themen: 2025/2026, aktuelle Events.

AUFTRÄGE:
1. Recherchiere Thema X (letzte 12 Monate)
2. Schreib 3–5 mögliche Quiz-Fragen
3. Gib Quellen an
4. Format als JSON (gemäß Schema unten)

FRAGE-SCHEMA:
{
  "topic": "Internationale Politik",
  "theme": "EU",
  "questions": [
    {
      "text": "...",
      "type": "singlechoice",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": "A",
      "context": "...",
      "sources": ["URL1", "URL2"]
    }
  ]
}

WICHTIG:
- Nur VERIFIZIERTE Fakten
- Mindestens 2 Quellen pro Frage
- Format konsistent halten
- Deutlich Schwierigkeit: leicht/mittel/schwer
```

**WAS DU FRAGST (in ChatGPT):**
```
"Recherchiere aktuelle EU-Entscheidungen 2025/2026"
→ ChatGPT recherchiert & schreibt Fragen

"Generiere Fragen zu [Thema]"
→ ChatGPT erstellt Fragen in JSON

"Verifiziere diese Fakten"
→ ChatGPT prüft & gibt Quellen
```

---

### CHAT 3: Claude Code (ENTWICKLUNG)

**AUFGABEN:**
```
✓ React-App bauen
✓ Components schreiben
✓ Logik programmieren
✓ Testen im Browser
✓ Bug-Fixes
```

**WAS DU FRAGST (in Code):**
```
Du kopierst einen COMMAND von mir (aus Chat 1)

Beispiel-Command:
"Schreib Dashboard.tsx mit:
- Fortschrittsleiste (progress %)
- Streak 🔥 (number)
- Empfohlene Fragen (array)
- Responsive: mobile/tablet/desktop"

Claude Code:
→ Schreibt den Code
→ Du testest im Browser
→ Feedback geben oder nächster Command
```

---

## 🔄 WORKFLOW: DIE 3 CHATS IM EINSATZ

### SZENARIO: "Wir bauen das Quiz-Modus Feature"

```
SCHRITT 1 (Hier im Chat):
DU:  "Schreib mir den Command für QuizMode.tsx"
ICH: 
  "Schreib QuizMode.tsx:
   - State: currentQuestion, userAnswer, score
   - Load: Frage von useQuestions.js
   - Show: Frage + Optionen (Button)
   - Check: Antwort validieren
   - Feedback: ✅ richtig (+50 XP) / ❌ falsch
   - Next: Auto zur nächsten Frage
   - Pause: nach 5/10/25 Fragen"

SCHRITT 2 (Claude Code):
DU:  [Kopierst Command in Code]
CODE: [Schreibt QuizMode.tsx Komponente]

SCHRITT 3 (Hier im Chat):
DU:  "Funktioniert! Jetzt brauch ich XP-Counter"
ICH: "Schreib XPCounter.tsx:
      - Input: xp (number)
      - Display: '+50 XP' (animiert, grün)
      - Fade out nach 2 Sekunden
      - Dark mode"

SCHRITT 4 (Claude Code):
DU:  [Kopierst Command]
CODE: [Schreibt Komponente]
```

---

## 📋 DIESE WOCHE: KONKRETE SCHRITTE

### TÄGLICH SCHLEIFE:

```
MORGENS (Hier - Planung):
1. "Was mache ich heute?"
2. ICH: "Heute:
   - Recherche: [Thema]
   - Command generieren für: [Feature]
   - Code-Session: [Komponenten]"

MITTAGS (ChatGPT - Recherche):
1. Copy-Paste meinen Recherche-Prompt
2. Recherchiere & erstelle Fragen
3. Speichere JSON lokal

NACHMITTAGS (Claude Code - Bau):
1. Copy-Paste meinen Code-Command
2. Schreib Komponente
3. Test im Browser
4. Screenshot/Feedback

ABENDS (Hier - Dokumentation):
1. "Das hab ich heute geschafft"
2. ICH: "Super! Morgen dann..."
3. Updaten diese Datei
```

---

## 📄 TEMPLATE FÜR RECHERCHE (ChatGPT)

**KOPIERE DIESEN BLOCK IN CHATGPT:**

```
Recherchiere dieses Thema für DJS-Lernplattform:

THEMA: [z.B. "Bundestagswahl 2025"]
ZEITRAUM: Letzte 12 Monate
FOKUS: Journalistische Relevanz, aktuelle Events

GEBE ZURÜCK:
1. TOP 5 Ereignisse (mit Datum)
2. Pro Ereignis: 2–3 Quiz-Fragen
3. Format: JSON (siehe Schema unten)
4. Quellen: Verifiziert & seriös

JSON-SCHEMA:
{
  "topic": "Deutsche Politik",
  "subTopic": "Bundestagswahl 2025",
  "lastUpdated": "2025-05-10",
  "questions": [
    {
      "id": "djs2025dp001",
      "text": "Wann fand die Bundestagswahl 2025 statt?",
      "type": "singlechoice",
      "options": ["Januar 2025", "Februar 2025", "März 2025", "April 2025"],
      "correctAnswer": "Februar 2025",
      "difficulty": "leicht",
      "context": "Die vorgezogene Bundestagswahl fand am 23. Februar 2025 statt...",
      "sources": [
        "https://bundeswahlleiter.de",
        "https://tagesschau.de"
      ],
      "verificationStatus": "verifiziert"
    }
  ]
}

WICHTIG:
- NUR verifizierte Fakten
- Mindestens 2 seriöse Quellen
- Format exakt halten
- Klare Schwierigkeitsstufen
```

---

## 📄 TEMPLATE FÜR CODE-COMMANDS (Hier)

**MUSTER FÜR COMMANDS DIE ICH SCHREIBE:**

```
Schreib [ComponentName].tsx:
- Props: [input]
- State: [wenn nötig]
- Display: [visuell]
- Behavior: [interaktion]
- Mobile: [responsive]
- Dark Mode: [yes/no]
```

**BEISPIEL:**

```
Schreib QuestionCard.tsx:
- Props: question (obj), onAnswer (func)
- State: selected (string)
- Display: question.text + 4 Options (Buttons)
- Behavior: click button → onAnswer(selected)
- Mobile: full width, 44px buttons
- Dark Mode: yes (bg-gray-800)
```

---

## 🗂️ DATEI-STRUKTUR (Lokal bei dir)

```
djs-project/
├── 📄 THIS FILE (zentrale-arbeitsanleitung.md)
├── 📂 data/
│   ├── questions.json (alle Fragen)
│   ├── categories.json
│   └── config.json
├── 📂 research/
│   ├── 2025-themen.md (Recherche-Output)
│   ├── fragen-draft.json (von ChatGPT)
│   └── quellen.md
└── 📂 code/
    ├── src/
    │   ├── components/
    │   ├── hooks/
    │   ├── pages/
    │   └── data/
    └── package.json
```

---

## 🔗 ZWISCHEN CHATS KOPIEREN

**So nutzt du diese Datei:**

```
1. HIER (Claude Chat):
   - Du liest diese Datei
   - Du fragst: "Schreib Command für X"
   - Ich schreibe Command

2. CHATGPT:
   - Du öffnest diese Datei
   - Kopierst den RECHERCHE-TEMPLATE
   - Fordern ein Thema hinzu
   - Paste in ChatGPT

3. CLAUDE CODE:
   - Du öffnest diese Datei
   - Kopierst den Command (den ich schrieb)
   - Paste in Claude Code
   - Fertig!

4. UPDATE:
   - Am Ende des Tages:
   - Du updatest diese Datei mit dem Stand
   - Nächster Tag: alles ist synchronized
```

---

## ✅ CHECKLISTE FÜR HEUTE/DIESE WOCHE

### HIER (Claude – Jetzt):
- [ ] Diese Datei komplett verstanden?
- [ ] Bereit, Commands zu schreiben?
- [ ] Fragen zum Workflow?

### CHATGPT (Parallel):
- [ ] Ersten Recherche-Prompt ausprobiert?
- [ ] JSON-Format OK?
- [ ] Quellen gesammelt?

### CODE (Heute/Morgen):
- [ ] Projekt initialisiert (React + Tailwind)?
- [ ] Erste Component geschrieben?
- [ ] Läuft im Browser?

### DIESE DATEI:
- [ ] In deinem Projekt-Folder gespeichert?
- [ ] Kopiert zwischen Chats?
- [ ] Am Ende des Tages updated?

---

## 📞 SHORTCUTS: SCHNELLE REFERENCE

### FÜR HIER (Claude):
```
"Command für [Feature]" → Ich schreib optimierten Prompt
"Wie funktioniert [X]?" → Ich erkläre (kurz)
"Was kommt nächstes?" → Ich gebe nächsten Schritt
```

### FÜR CHATGPT:
```
Copy → research-template.md
Paste → "Recherchiere [Thema]"
→ Bekommst JSON-Fragen
```

### FÜR CODE:
```
Copy → Command von mir
Paste → Claude Code
→ Bekommst geschriebenen Code
```

---

## 🚀 JETZT STARTEN?

**Sag mir hier im Chat:**

```
"Ok, verstanden. Erste Steps:
1. Schreib mir Command für App.tsx Grundstruktur
2. Was soll ChatGPT recherchieren?"
```

**Dann schreib ich:**
```
Command für App.tsx:
- Import: React, useState, Router
- Routes: Dashboard, QuizMode, LearningMode, Stats
- Navigation: 4 Buttons bottom
- State: currentPage, userProgress
- localStorage: load/save progress
- Dark Mode: auto (system preference)

ChatGPT-Auftrag:
Recherchiere "Bundestagswahl 2025"
Erstelle 5 Quiz-Fragen
Format: JSON (siehe template)
```

**Dann kopierst du:**
```
Command → Code
ChatGPT-Auftrag → ChatGPT
→ Parallel arbeiten!
```

---

## 📝 UPDATES DIESER DATEI

Am Ende JEDES Tages:

```
STAND [DATUM]:
- HEUTE GEMACHT:
  ✅ [Was du erledigt hast]
  ✅ [...]
  
- MORGEN:
  🔄 [Was kommt als nächstes]
  
- BLOCKERS:
  ⚠️ [Falls etwas nicht funktioniert]
```

---

**VERSION 1.0 | PARALLELES 3-CHAT-SYSTEM | LET'S BUILD! 🎓**

---

---

## TEIL 2: PROJEKTLOGIK, MASTERPROMPTS & QUALITÄTSREGELN

## A) Klarer Arbeitsweg / How-to

### 1. Projektziel

In diesem Projekt soll eine Lernsoftware zur Vorbereitung auf die Aufnahmeprüfung der Deutschen Journalistenschule (DJS) entstehen.

Der Fokus liegt auf dem **aktuellen Wissenstest** und den typischen Aufgabenformaten der DJS. Ziel ist nicht nur eine lose Sammlung von Fakten, sondern ein strukturiertes Trainingssystem mit:

- alten DJS-Wissenstests als Rohdatenbasis,
- verifizierten Antworten,
- Analyse wiederkehrender Muster,
- aktuellen Wissensdaten für 2025/2026,
- daraus ableitbaren Übungsfragen,
- späterer Lernsoftware-Logik mit Modulen, Fragetypen und Fortschrittsauswertung.

---

### 2. Grundprinzip des Projekts

Die Arbeit folgt immer dieser Logik:

1. **Offizielle Quellen zuerst prüfen.**  
   Die DJS-Seiten sind die Primärquelle für alte Aufnahmeprüfungen.

2. **Alle auffindbaren Tests sammeln.**  
   Jede öffentlich erreichbare Aufnahmeprüfung wird jahrgangsweise erfasst.

3. **Fragen und Antworten sauber trennen.**  
   Jede Frage bekommt Jahr, Fragetyp, Thema, Antwort und Quelle.

4. **Fehlende Antworten nicht raten.**  
   Was nicht offiziell beantwortet ist, wird nur durch seriöse Doppelprüfung ergänzt.

5. **Erst Rohdaten, dann Analyse.**  
   Die Musteranalyse erfolgt erst, wenn die Alttests möglichst vollständig vorliegen.

6. **Danach aktuelle Themenrecherche 2025/2026.**  
   Diese Recherche orientiert sich an DJS-typischen Mustern und am Zeitraum der vergangenen zwölf Monate.

7. **Alles maschinenlesbar strukturieren.**  
   Die Inhalte sollen später in eine Lernsoftware importierbar sein.

---

### 3. Zieldateien

Die Arbeit soll idealerweise in mehrere Markdown-Dateien aufgeteilt werden.

```text
djs-lernsoftware/
├── 01djswissenstestsrohdaten.md
├── 02djsmusteranalysekategorien.md
├── 03themenrecherche20252026.md
├── 04lernsoftwarekonzept.md
├── data/
│   ├── djstestsraw.json
│   ├── questions.json
│   ├── topics.json
│   ├── persons.json
│   ├── countries.json
│   └── events20252026.json
└── sources/
    └── quellenliste.md
```

Falls nur eine Datei ausgegeben werden kann, soll sie heißen:

```text
djsmasterrecherchelernsoftware.md
```

Diese Datei enthält dann alle Hauptkapitel gesammelt.

---

### 4. Arbeitsreihenfolge

#### Schritt 1: DJS-Indexseite vollständig auslesen

Primäre Quelle:

```text
https://djs-online.de/bewerben/aufnahmepruefungen/
```

Zu prüfen:

- alle verlinkten Jahresprüfungen,
- alle Unterseiten,
- mögliche PDFs,
- eingebettete Aufgaben,
- offizielle Antworten,
- Hinweise zum Prüfungsaufbau.

---

#### Schritt 2: Jahresseiten extrahieren

Mindestens zu berücksichtigen, sofern öffentlich erreichbar:

```text
https://djs-online.de/bewerben/aufnahmepruefungen/aufnahmepruefung-2024/
https://djs-online.de/bewerben/aufnahmepruefungen/aufnahmepruefung-2023/
https://djs-online.de/bewerben/aufnahmepruefungen/aufnahmepruefung-2022/
```

Zusätzlich sollen ältere Jahre gesucht werden, zum Beispiel:

- 2021
- 2020
- 2019
- 2018
- 2017
- 2016

Nur öffentlich verifizierbare Inhalte aufnehmen.

---

#### Schritt 3: Fragen und Antworten trennen

Jede Frage wird einzeln erfasst.

Pro Frage sollen mindestens diese Daten gespeichert werden:

- ID,
- Jahr,
- Quelle/URL,
- Aufgabenbereich,
- Fragetyp,
- Originalfrage,
- Antwortoptionen,
- richtige Antwort,
- Themengebiet,
- Unterthema,
- Schwierigkeit,
- Zeitbezug,
- Lernziel,
- Verifikationsstatus,
- offene Unsicherheiten.

Beispiel für Metadaten:

```yaml
jahr: 2024
fragetyp: singlechoice
themengebiet: medien/politik
unterthema: rechtsextremismus/recherche
schwierigkeit: mittel
zeitbezug: vergangene12monate
antworttyp: einerichtigeantwort
quelle: djs-online.de
verifikation: offiziell DJS
lernziel: "Correctiv-Recherche zum Potsdam-Treffen einordnen können"
```

---

#### Schritt 4: Antworten prüfen

Antworten dürfen nur übernommen werden, wenn sie:

1. direkt von der DJS stammen, oder  
2. durch mindestens zwei unabhängige seriöse Quellen bestätigt wurden.

Bevorzugte Quellen:

- offizielle Regierungsseiten,
- Gerichte,
- EU,
- UN,
- NATO,
- WHO,
- EZB,
- Bundesbank,
- Destatis,
- Nobelpreis-Website,
- offizielle Preis-, Festival- oder Sportseiten,
- Pressemitteilungen,
- etablierte Nachrichtenagenturen und Qualitätsmedien.

Verifikationsstufen:

| Status | Bedeutung |
|---|---|
| offiziell DJS | Antwort stammt direkt aus einer DJS-Veröffentlichung |
| doppelt verifiziert | Antwort wurde durch mindestens zwei unabhängige seriöse Quellen geprüft |
| einfach verifiziert | Antwort wurde durch eine seriöse Quelle geprüft |
| plausibel | Antwort wirkt wahrscheinlich, ist aber noch nicht ausreichend geprüft |
| unklar | Antwort widersprüchlich oder nicht ausreichend belegbar |
| nicht auffindbar | Frage, Lösung oder Quelle konnte nicht gefunden werden |

Standard bei Widersprüchen:

```md
Prüfstatus: widersprüchlich  
Problem: …  
Quelle A sagt: …  
Quelle B sagt: …  
Vorläufige Bewertung: …
```

---

#### Schritt 5: Rohdatendatei erstellen

Datei:

```text
01djswissenstestsrohdaten.md
```

Diese Datei ist die Hauptbasis für alle alten DJS-Tests.

Sie soll nicht nur Links enthalten, sondern die Tests selbst strukturiert lesbar machen.

Musterstruktur pro Jahr:

```md
## Aufnahmeprüfung JAHR

Quelle: URL  
Prüfungsdauer: X Minuten / nicht angegeben  
Status: vollständig / teilweise / unklar

### Überblick

- Kartenaufgabe: …
- Lückentext/Länderfragen: …
- Single Choice: …
- Multiple Response: …
- Zuordnung: …

### I. Kartenaufgabe

Aufgabe: …  
Offizielle/verifizierte Antwort: …  
Themengebiet: Geografie / Internationale Politik / Krisenregionen  
Lernhinweis: …

### II. Lückensätze

| Nr. | Frage/Satz | Antwort | Themengebiet | Verifiziert |
|---:|---|---|---|---|
| 1 | … | … | … | ja/nein |

### III. Single Choice

| Nr. | Frage | Optionen | Richtige Antwort | Themengebiet | Verifiziert |
|---:|---|---|---|---|---|

### IV. Multiple Response

| Nr. | Frage | Optionen | Richtige Antworten | Themengebiet | Verifiziert |
|---:|---|---|---|---|---|

### V. Zuordnungen

| Nr. | Aufgabe | Elemente | Richtige Zuordnung | Themengebiet | Verifiziert |
|---:|---|---|---|---|---|

### Offene Punkte / Unsicherheiten

- …
```

---

#### Schritt 6: Musteranalyse erstellen

Datei:

```text
02djsmusteranalysekategorien.md
```

Diese Datei wird erst nach der Rohdatensammlung erstellt oder aktualisiert.

Zu analysieren:

- Welche Fragetypen kommen wiederholt vor?
- Welche Themengebiete kommen jedes Jahr vor?
- Welche Themengebiete kommen gelegentlich vor?
- Welche Wissensdatensätze werden abgefragt?
- Welche Arten von Personen muss man kennen?
- Welche Organisationen muss man kennen?
- Welche Ereignistypen sind besonders prüfungsrelevant?
- Welche geografischen Kenntnisse werden erwartet?
- Welche Zahlen, Kennwerte und Jahresdaten werden abgefragt?
- Wie stark ist der Fokus auf Deutschland, Europa und Weltpolitik?
- Wie stark ist der Fokus auf die vergangenen zwölf Monate?
- Welche Lernformate ergeben sich daraus?

---

#### Schritt 7: Themenrecherche 2025/2026 erstellen

Datei:

```text
03themenrecherche20252026.md
```

Diese Datei sammelt potenziell DJS-relevante Themen für 2025/2026.

Wichtig:

- Die DJS fragt nach Ereignissen der vergangenen zwölf Monate.
- Die Recherche muss laufend aktualisierbar sein.
- 2025 und 2026 müssen klar getrennt werden.
- Fakten, Prognosen und offene Entwicklungen müssen klar unterschieden werden.
- Keine Spekulationen als Tatsache darstellen.

---

#### Schritt 8: Lernsoftware-Konzept ableiten

Datei:

```text
04lernsoftwarekonzept.md
```

Diese Datei beschreibt die spätere Umsetzung als Software:

- Module,
- Fragetypen,
- Datenmodell,
- Spaced Repetition,
- Prüfungsmodus,
- Bildertest,
- Schreibprobe,
- Aufnahmegespräch,
- Fortschrittslogik,
- Admin-/Redaktionsworkflow.

---

### 5. Bekannte Muster aus bisherigen DJS-Prüfungen

Aus den bisherigen Chats wurden diese öffentlich bekannten Muster festgehalten.

#### Aufnahmeprüfung 2024

Bekannte Bestandteile:

- Kartenaufgabe: Israel und vier Nachbarstaaten markieren.
- Lückensätze zu Ländern, unter anderem Kanada, Indien, Ecuador, Aserbaidschan, Island.
- Single Choice zu Correctiv, Claudia Goldin, David Cameron, Auflösung der Linksfraktion, Alter Joe Biden.
- Multiple Response unter anderem zu Mondlandungen, BRICS-Erweiterung, versteigerten Kulturgütern, Wildtieren in Deutschland, EU-Einigungen.
- Zuordnungen unter anderem zu Zitaten, Gewerkschaftserfolgen, europäischen Regierungen, Grundsatzurteilen und Halbleiter-/Batteriestandorten.

#### Aufnahmeprüfung 2023

Bekannte Bestandteile:

- Kartenaufgabe: Türkei und Nachbarländer.
- Lückensätze zu Griechenland, Kroatien, Italien, Südkorea, England.
- Single Choice zu Finnland/NATO, FTX, NASA-DART, IPCC/1,5 Grad, Unwort des Jahres.
- Multiple Response unter anderem zu Klima-Protesten gegen Kunstwerke, Regierungswechseln, eingestellten Magazinen/Sendungen, Ampel-Streit, Ukraine-Kriegsgerät.
- Zuordnungen unter anderem zu Wirtschaftszahlen, Zitaten, internationalen Protesten, Grundsatzurteilen und Kulturschaffenden.

#### Aufnahmeprüfung 2022

Bekannte Bestandteile:

- Kartenaufgabe: Ukraine und Nachbarländer.
- Lückensätze zu Belarus, Marokko, Nigeria, El Salvador, Südafrika.
- Single Choice zu Drosten/Wiesendanger, Squid Game, Christo/Arc de Triomphe, Wirecard/Wirtschaftsprüfung, Unwort des Jahres.
- Multiple Response unter anderem zu EU/NATO-Staaten, Milliardären im All, Merkel-Zapfenstreich, Grundsatzurteilen, Afghanistan/Taliban.
- Zuordnungen unter anderem zu Olympia Tokio, Zitaten, Gesundheitsorganisationen, Landesregierungen, Klimazielen.

---

### 6. Stop- und Scope-Regeln

Aus dem letzten Arbeitsauftrag ergibt sich eine wichtige Scope-Grenze:

> Zuerst nur alle verfügbaren Daten sammeln, verfügbar machen und auslegen.  
> Alte Datensätze der zurückliegenden Tests zuerst.  
> Stopp vor der ausführlichen Erstellung der 2025/2026-Hauptdatei, sofern ausdrücklich nur Altdaten gesammelt werden sollen.

Das bedeutet:

1. Erst DJS-Alttests sammeln.
2. Erst alte Fragen und Antworten verfügbar machen.
3. Erst offene Antworten prüfen.
4. Erst danach Musteranalyse.
5. 2025/2026-Themenrecherche nur starten, wenn dieser Schritt ausdrücklich freigegeben ist.

---

## B) Masterpromptsammlung

### Masterprompt 1: Gesamtprojekt DJS-Lernsoftware

```md
Du arbeitest als gründlicher Recherche-, Analyse- und Produktassistent für den Aufbau einer Lernsoftware zur Vorbereitung auf die Aufnahmeprüfung der Deutschen Journalistenschule.

Ziel des Projekts ist es, alle öffentlich auffindbaren bisherigen DJS-Wissenstests systematisch zu sammeln, ihre Muster zu analysieren und daraus eine aktuelle, lernbare Wissensbasis für die Prüfungsjahre 2025/2026 zu erstellen.

Rolle:

- Rechercheur:in für öffentlich verfügbare DJS-Aufnahmeprüfungen.
- Faktenchecker:in mit Pflicht zur Doppelprüfung bei unsicheren Antworten.
- Analyst:in für Prüfungslogik, Themenmuster und wiederkehrende Wissensdatensätze.
- Didaktiker:in für die spätere Aufbereitung als Lernsoftware.
- Strukturgeber:in für Markdown-Dateien, Wissensdatenbanken, Fragenpools und Lernmodule.

Arbeite präzise, quellenbasiert und vollständig. Erfinde keine Fakten. Wenn Informationen nicht auffindbar sind, markiere sie transparent als „nicht öffentlich auffindbar“ oder „nicht verifiziert“.

Erstelle eine vollständige, sauber strukturierte Markdown-Dateisammlung mit mindestens diesen Dateien:

1. 01djswissenstestsrohdaten.md  
   Sammlung aller auffindbaren bisherigen DJS-Wissenstests inklusive Antworten.

2. 02djsmusteranalysekategorien.md  
   Analyse aller gefundenen Tests: Muster, Fragetypen, Themengebiete, Wissensdatensätze, Lernlogik.

3. 03themenrecherche20252026.md  
   Tiefenrecherche zu allen potenziell prüfungsrelevanten Themengebieten für 2025/2026.

4. Optional: 04lernsoftwarekonzept.md  
   Strukturvorschlag für die Umsetzung als Lernsoftware mit Modulen, Fragetypen, Wiederholungslogik und Datenmodell.

Wenn nur eine Markdown-Datei ausgegeben werden kann, fasse alles in einer Datei namens djsmasterrecherchelernsoftware.md zusammen und gliedere sie mit klaren Hauptkapiteln.
```

---

### Masterprompt 2: DJS-Alttests sammeln

```md
Beginne mit der Recherche und Erstellung von 01djswissenstestsrohdaten.md.

Arbeite in dieser Reihenfolge:

1. Offizielle DJS-Übersichtsseite prüfen.
2. Alle verlinkten Jahresprüfungen sammeln.
3. Zusätzlich nach älteren öffentlich auffindbaren Prüfungen suchen.
4. Pro Jahr alle Fragen und Antworten extrahieren.
5. Antworten und Unklarheiten markieren.
6. Keine Musteranalyse starten, bevor die Rohdaten vollständig erfasst sind.

Primäre Quelle:

https://djs-online.de/bewerben/aufnahmepruefungen/

Zusätzlich zu prüfen:

https://djs-online.de/bewerben/aufnahmepruefungen/aufnahmepruefung-2024/
https://djs-online.de/bewerben/aufnahmepruefungen/aufnahmepruefung-2023/
https://djs-online.de/bewerben/aufnahmepruefungen/aufnahmepruefung-2022/

Suche zusätzlich im Web nach weiteren öffentlich auffindbaren DJS-Aufnahmeprüfungen, älteren Tests, archivierten Seiten, PDFs oder Erwähnungen.

Mögliche Suchanfragen:

- site:djs-online.de/bewerben/aufnahmepruefungen/ Aufnahmeprüfung Deutsche Journalistenschule
- site:djs-online.de Aufnahmeprüfung 2021 Deutsche Journalistenschule
- site:djs-online.de Aufnahmeprüfung 2020 DJS
- Deutsche Journalistenschule Aufnahmeprüfung Wissenstest Antworten
- DJS Aufnahmeprüfung Wissenstest
- DJS Aufnahmetest Allgemeinwissen
- Deutsche Journalistenschule Aufnahmeprüfung 2024
- Deutsche Journalistenschule Aufnahmeprüfung 2023
- Deutsche Journalistenschule Aufnahmeprüfung 2022

Für jeden gefundenen Test erfasse:

- Jahr,
- Quelle/URL,
- Prüfungsdauer, falls angegeben,
- alle Aufgabenbereiche,
- alle Fragen,
- alle Antwortoptionen,
- alle offiziellen oder verifizierten Antworten,
- Hinweise auf fehlende, unklare oder widersprüchliche Antworten,
- Fragetyp,
- Themengebiet,
- Relevanz für Lernsoftware.
```

---

### Masterprompt 3: Antwortprüfung und Doppelverifikation

```md
Prüfe alle Antworten zu DJS-Wissenstests streng quellenbasiert.

Eine Antwort darf nur als korrekt übernommen werden, wenn sie entweder:

1. aus der offiziellen DJS-Seite stammt, oder
2. bei fehlender offizieller Antwort durch mindestens zwei unabhängige seriöse Quellen verifiziert wurde.

Bevorzuge Primärquellen:

- Regierungsseiten,
- Gerichte,
- EU,
- UN,
- NATO,
- WHO,
- EZB,
- Bundesbank,
- Destatis,
- Nobelpreis-Website,
- offizielle Preis-/Festival-/Sportseiten,
- Pressemitteilungen.

Nutze Sekundärquellen nur ergänzend:

- Reuters,
- AP,
- BBC,
- Tagesschau,
- Deutschlandfunk,
- Süddeutsche Zeitung,
- FAZ,
- ZEIT,
- Spiegel,
- Guardian,
- New York Times.

Nutze diese Verifikationsstufen:

- offiziell DJS,
- doppelt verifiziert,
- einfach verifiziert,
- unklar,
- nicht auffindbar.

Bei widersprüchlichen Daten nutze dieses Format:

Prüfstatus: widersprüchlich  
Problem: …  
Quelle A sagt: …  
Quelle B sagt: …  
Vorläufige Bewertung: …

Erfinde keine Antwort. Wenn keine belastbare Antwort auffindbar ist, markiere sie als unklar oder nicht auffindbar.
```

---

### Masterprompt 4: Musteranalyse der DJS-Tests

```md
Erstelle die Datei 02djsmusteranalysekategorien.md.

Analysiere alle gesammelten DJS-Wissenstests systematisch.

Untersuche:

- Welche Fragetypen kommen wiederholt vor?
- Welche Themengebiete kommen jedes Jahr vor?
- Welche Themengebiete kommen gelegentlich vor?
- Welche Wissensdatensätze werden abgefragt?
- Welche Arten von Personen muss man kennen?
- Welche Arten von Organisationen muss man kennen?
- Welche Ereignistypen sind besonders prüfungsrelevant?
- Welche geografischen Kenntnisse werden erwartet?
- Welche Zahlen, Kennwerte und Jahresdaten werden abgefragt?
- Welche Medien-, Kultur- und Gesellschaftsthemen werden abgefragt?
- Wie stark ist der Fokus auf Deutschland, Europa und Weltpolitik?
- Wie stark ist der Fokus auf die vergangenen zwölf Monate?
- Welche Lernformate ergeben sich daraus?

Gliedere mindestens in folgende Kategorien:

1. Executive Summary
2. Wiederkehrende Prüfungsstruktur
   - Kartenaufgaben
   - Lückensätze mit Ländernamen
   - Single-Choice-Fragen
   - Multiple-Response-Fragen
   - Zuordnungsaufgaben
   - Bildertest / Personen- und Ereigniserkennung
   - Schreibprobe
   - Aufnahmegespräch
3. Wiederkehrende Themengebiete
   - Internationale Politik und Konflikte
   - Deutsche Politik
   - Europäische Union und europäische Regierungen
   - Wahlen und Regierungswechsel
   - Wirtschaft, Inflation, Zinsen, Arbeit
   - Klima, Energie und Umwelt
   - Justiz und Grundsatzurteile
   - Medien und Journalismus
   - Kultur, Literatur, Kunst und Preise
   - Sport
   - Wissenschaft, Technik und Raumfahrt
   - Gesellschaft, Proteste und soziale Bewegungen
   - Geografie und Kartenwissen
   - Zitate und öffentliche Debatten
4. Wissensdatensätze für die Lernsoftware
5. Lernbare Muster
6. Priorisierung für die Lernsoftware
7. Ableitungen für neue Prüfungsfragen
```

---

### Masterprompt 5: Tiefenrecherche 2025/2026

```md
Erstelle die Datei 03themenrecherche20252026.md.

Ziel ist eine möglichst umfassende Sammlung potenziell DJS-relevanter Themen für den Zeitraum 2025/2026.

Wichtig:

Die DJS fragt nach Ereignissen der vergangenen zwölf Monate. Deshalb muss die Recherche laufend aktualisierbar sein und klar zwischen 2025 und 2026 unterscheiden.

Rechercheregeln:

- Recherchiere breit und tief.
- Priorisiere Ereignisse, die öffentlich breit berichtet wurden.
- Prüfe wichtige Fakten doppelt.
- Nutze Primärquellen, wenn möglich.
- Markiere den Aktualitätsstand.
- Führe Quellen pro Thema mit.
- Unterscheide Fakten, Prognosen und offene Entwicklungen.
- Stelle keine ungeprüften Spekulationen als Tatsache dar.

Recherchiere mindestens diese Bereiche:

1. Deutschland
   - Bundesregierung, Parteien, Bundestag
   - Bundestagswahl, Landtagswahlen, Kommunalwahlen
   - Koalitionen, Regierungswechsel, Parteiführung
   - Bundespräsident, Kanzleramt, Ministerien
   - Bundesverfassungsgericht und wichtige Urteile
   - Innenpolitik, Migration, Sicherheit
   - Wirtschaft, Haushalt, Schuldenbremse, Steuern
   - Klima, Energie, Verkehr, Landwirtschaft
   - Medien, Rundfunk, Pressefreiheit, Journalismus
   - Kultur, Literatur, Film, Musik, Kunst
   - Sportereignisse mit Deutschlandbezug

2. Europa und EU
   - EU-Kommission, EU-Parlament, Europäischer Rat
   - EU-Gesetzgebung und große Einigungen
   - Eurozone, EZB, Inflation, Leitzinsen
   - Erweiterung, Beitrittskandidaten, Schengen, Euro
   - Wahlen und Regierungswechsel in europäischen Ländern
   - Ukraine und Russland im europäischen Kontext

3. Weltpolitik
   - USA
   - Russland
   - Ukrainekrieg
   - Israel, Gaza, Westjordanland, Libanon, Iran
   - China, Taiwan, Hongkong
   - Indien, Pakistan, Afghanistan
   - Afrika: Wahlen, Konflikte, Putsche, Krisen
   - Lateinamerika: Wahlen, Krisen, Regierungswechsel
   - Internationale Organisationen: UN, NATO, G7, G20, BRICS, OPEC, WTO, WHO
   - Internationale Strafgerichtsbarkeit

4. Wirtschaft und Finanzen
5. Klima, Umwelt und Naturkatastrophen
6. Wissenschaft, Technik und Raumfahrt
7. Kultur, Medien und Gesellschaft
8. Sport
9. Geografie und Kartenwissen
10. Personen des Jahres 2025/2026
11. Zitate 2025/2026
12. Potenzielle DJS-Fragen aus 2025/2026
```

---

### Masterprompt 6: Lernsoftware-Konzept

```md
Erstelle die Datei 04lernsoftwarekonzept.md.

Ziel:
Die recherchierten Inhalte sollen in eine Lernsoftware überführt werden.

Beschreibe:

1. Zielgruppe
   Bewerberinnen und Bewerber für die Deutsche Journalistenschule.

2. Lernziele
   - Aktuelle Ereignisse der vergangenen zwölf Monate sicher einordnen.
   - Personen, Orte, Organisationen und Ereignisse erkennen.
   - DJS-typische Frageformate trainieren.
   - Unter Zeitdruck Wissen abrufen.
   - Eigene Wissenslücken erkennen.
   - Für Bildertest, Wissenstest, Schreibprobe und Gespräch vorbereitet sein.

3. Module
   - Wissenstest-Training
   - Bildertest
   - Nachrichtenchronik
   - Karteikarten
   - Schreibprobe
   - Aufnahmegespräch

4. Datenmodell
   Beschreibe Tabellen/Collections für:
   - questions
   - answers
   - sources
   - topics
   - persons
   - countries
   - events
   - quotes
   - organizations
   - courtdecisions
   - elections
   - awards
   - mediaevents
   - learningsessions
   - userprogress

5. Lernlogik
   - Spaced Repetition
   - Fehlerwiederholung
   - Themengewichtung nach DJS-Häufigkeit
   - Aktualitätsboost für neue Ereignisse
   - Prüfungsmodus mit Zeitlimit
   - Jahresmodus
   - Schwächenanalyse
   - Tagesziel
   - Wochenrückblick-Test

6. Bewertungslogik
   - Punkte pro Frage
   - Teilpunkte bei Multiple Response
   - Abzug für falsche Kreuze
   - Sicherheitseinschätzung
   - Fehlerkategorien
   - Fortschritt pro Themengebiet

7. Interface-Ideen
   - Dashboard
   - Heute lernen
   - DJS-Simulation
   - Kartenmodus
   - Bildermodus
   - Personenmodus
   - Chronikmodus
   - Schwächenliste
   - Quellenansicht
```

---

## C) Weitere Prompts, Learnings & systemübergreifende Abspeicherungen

### 1. Systemübergreifende Qualitätsregeln

Diese Regeln gelten für alle weiteren DJS-Recherche- und Lernsoftware-Aufgaben:

- Keine erfundenen Fakten.
- Keine unbelegten Antworten.
- Bei Unsicherheit immer markieren.
- Antworten aus DJS-Seiten als „offiziell DJS“ kennzeichnen.
- Fehlende Antworten nur nach Doppelprüfung ergänzen.
- Jede Datei muss in Markdown sauber strukturiert sein.
- Tabellen sollen möglichst maschinenlesbar sein.
- Jede Frage soll später in eine Lernsoftware importierbar sein.
- Rohdaten, Analyse und neue Themenrecherche strikt trennen.
- Klar unterscheiden zwischen:
  - Original-DJS-Fragen,
  - verifizierten Ergänzungen,
  - Analyse,
  - neu generierten Übungsfragen,
  - Prognose / potenzieller Relevanz.

---

### 2. Suchprompt: ältere DJS-Prüfungen finden

```md
Suche öffentlich auffindbare alte Aufnahmeprüfungen der Deutschen Journalistenschule.

Nutze gezielt Suchoperatoren und prüfe sowohl die offizielle DJS-Website als auch archivierte, verlinkte oder zitierte Inhalte.

Suchanfragen:

- site:djs-online.de/bewerben/aufnahmepruefungen/ Aufnahmeprüfung Deutsche Journalistenschule
- site:djs-online.de Aufnahmeprüfung 2021 Deutsche Journalistenschule
- site:djs-online.de Aufnahmeprüfung 2020 DJS
- site:djs-online.de Aufnahmeprüfung 2019 DJS
- site:djs-online.de Aufnahmeprüfung 2018 DJS
- site:djs-online.de Aufnahmeprüfung 2017 DJS
- site:djs-online.de Aufnahmeprüfung 2016 DJS
- Deutsche Journalistenschule Aufnahmeprüfung Wissenstest Antworten
- DJS Aufnahmeprüfung Wissenstest
- DJS Aufnahmetest Allgemeinwissen
- DJS Aufnahmeprüfung Fragen Antworten

Dokumentiere für jeden Treffer:

- URL,
- Jahr,
- Art der Quelle,
- ob Fragen enthalten sind,
- ob Antworten enthalten sind,
- ob die Quelle offiziell ist,
- ob sie vollständig oder fragmentarisch ist.
```

---

### 3. Extraktionsprompt für eine einzelne Jahresseite

```md
Extrahiere aus dieser DJS-Jahresseite alle verwertbaren Inhalte.

Erfasse:

- Jahr,
- Quelle/URL,
- Prüfungsdauer,
- Aufgabenbereiche,
- Originalfragen,
- Antwortoptionen,
- richtige Antworten,
- Hinweise und Erläuterungen,
- Fragetyp,
- Themengebiet,
- mögliche Lernziele,
- offene Unsicherheiten.

Gliedere die Ausgabe nach:

1. Überblick
2. Kartenaufgabe
3. Lückensätze
4. Single Choice
5. Multiple Response
6. Zuordnungen
7. Sonstige Aufgaben
8. Offene Punkte

Nutze Tabellen, wo möglich. Markiere jede Antwort mit Verifikationsstatus.
```

---

### 4. Prompt für Fragemetadaten

```md
Ergänze zu jeder DJS-Frage strukturierte Metadaten.

Nutze dieses Schema:

jahr:
fragetyp:
themengebiet:
unterthema:
schwierigkeit:
zeitbezug:
antworttyp:
quelle:
verifikation:
lernziel:
tags:

Die Metadaten sollen später maschinenlesbar in eine Lernsoftware übertragbar sein.
```

---

### 5. JSON-Schema für eine Frage

```json
{
  "id": "djs2024sc001",
  "year": 2024,
  "sourcetype": "officialdjs",
  "sourceurl": "https://djs-online.de/bewerben/aufnahmepruefungen/aufnahmepruefung-2024/",
  "questiontype": "singlechoice",
  "topic": "Medien und Politik",
  "subtopic": "Investigativrecherche Rechtsextremismus",
  "question": "Dieser Rechercheverbund berichtete 2024 über ein Treffen von Rechtsextremisten in Potsdam.",
  "options": [
    "Rechercheverbund NDR, WDR und SZ",
    "Netzwerk Recherche",
    "Paper Trail Media",
    "Correctiv"
  ],
  "correctanswers": ["Correctiv"],
  "explanation": "Correctiv veröffentlichte die Recherche über das Potsdamer Treffen.",
  "difficulty": "mittel",
  "timereference": "vergangene zwölf Monate",
  "learninggoal": "Zentrale journalistische Recherchen des Jahres einordnen können.",
  "verificationstatus": "offiziell DJS",
  "tags": ["Deutschland", "Medien", "Rechtsextremismus", "Correctiv"]
}
```

---

### 6. Wichtige Wissensdatensätze für die Lernsoftware

#### Länder-Ereignis-Datensatz

Felder:

- Land,
- Ereignis,
- Datum/Zeitraum,
- Akteur:innen,
- Kurzbeschreibung,
- Prüfungsrelevanz,
- mögliche Frageformate,
- Quellen,
- Verifikationsstatus.

#### Person-Zitat-Datensatz

Felder:

- Person,
- Funktion/Rolle,
- Zitat,
- Kontext,
- Datum,
- Kontroverse/Relevanz,
- mögliche Verwechslungsoptionen,
- Quellen.

#### Organisation-Funktion-Datensatz

Felder:

- Organisation,
- Abkürzung,
- Zuständigkeit,
- Sitz,
- relevante Ereignisse,
- typische DJS-Frageformate.

#### Gericht-Urteil-Datensatz

Felder:

- Gericht,
- Entscheidung,
- Datum,
- Thema,
- gesellschaftliche Relevanz,
- Merksatz,
- Quellen.

#### Wahl-Regierung-Datensatz

Felder:

- Land/Bundesland,
- Wahltermin,
- Sieger/Regierungspartei,
- Koalition,
- Regierungschef:in,
- politische Richtung,
- Relevanz.

#### Preis-Auszeichnung-Datensatz

Felder:

- Preis,
- Kategorie,
- Gewinner:in,
- Werk/Leistung,
- Land,
- Datum,
- Relevanz.

#### Medienereignis-Datensatz

Felder:

- Medium/Sendung/Plattform,
- Ereignis,
- Beteiligte,
- Datum,
- Relevanz für Journalismus,
- mögliche Prüfungsfrage.

#### Kulturwerk-Person-Datensatz

Felder:

- Person/Künstler:in/Autor:in,
- Werk,
- Ereignis,
- Preis/Kontroverse,
- Jahr,
- mögliche Zuordnungsfrage.

#### Kennzahlen-Datensatz

Felder:

- Kennzahl,
- Wert,
- Bezugsraum,
- Zeitpunkt,
- Quelle,
- Veränderung,
- prüfungsrelevanter Kontext.

---

### 7. Lernbare Muster

Die DJS-Prüfung prüft weniger isoliertes Lexikonwissen als die Fähigkeit, aktuelle Ereignisse schnell zu erkennen und einzuordnen.

Daher sollte die Lernsoftware drei Ebenen trainieren:

1. **Faktenabruf**  
   Wer, was, wann, wo?

2. **Einordnung**  
   Warum ist das relevant? Welche Akteure hängen zusammen?

3. **Transfer**  
   Kann ich aus einer Meldung eine journalistisch relevante Frage ableiten?

Geeignete Lernformate:

- Kartenquiz,
- Lückensatztraining,
- Single Choice,
- Multiple Response,
- Zuordnung,
- Bilderkennung,
- Zeitstrahl,
- Personen-Steckbriefe,
- Ereignis-Land-Mapping,
- Zitat-Person-Mapping,
- Gericht-Urteil-Mapping,
- Kennzahlen-Training,
- tägliche Nachrichtenroutine,
- Wochenrückblick,
- Monatsrückblick,
- Jahresrückblick.

---

### 8. Priorisierung für die Lernsoftware

| Priorität | Bereich | Warum wichtig? | Lernformat |
|---|---|---|---|
| Hoch | Internationale Politik | kommt jährlich vor | Karten, Lückensatz, Quiz |
| Hoch | Deutsche Politik | kommt jährlich vor | Quiz, Zitate, Zuordnung |
| Hoch | Personen der Nachrichtenlage | Bildertest und Wissenstest | Karteikarten, Bilder |
| Hoch | Wahlen und Regierungswechsel | leicht prüfbar, hoher Aktualitätswert | Zuordnung, Lückensatz |
| Hoch | EU und NATO | politisch zentral und häufig in Nachrichten | Quiz, Karten, Organisationen |
| Mittel | Kulturpreise | häufig | Zuordnung |
| Mittel | Sport | gelegentlich | Ereignisfragen |
| Mittel | Wirtschaftsdaten | relevant bei starker Nachrichtenlage | Kennzahlen-Training |
| Niedrig | sehr spezielle Einzelfakten | nur punktuell | Bonusfragen |

---

### 9. MVP-Funktionsumfang der Lernsoftware

Ein erster funktionsfähiger Prototyp sollte enthalten:

- Import der recherchierten DJS-Alttests,
- Fragenpool mit Filter nach Jahr, Thema und Fragetyp,
- Übungsmodus,
- Prüfungsmodus mit Zeitlimit,
- Fehlerliste,
- Wiederholungssystem,
- Quellen- und Verifizierungsstatus,
- Admin-Editor für neue Fragen.

---

### 10. Redaktionsworkflow

Standardprozess für neue Inhalte:

1. Thema erfassen.
2. Quelle prüfen.
3. Entität oder Ereignis anlegen.
4. Relevanz bewerten.
5. Fragetypen generieren.
6. Antworten verifizieren.
7. Erklärung schreiben.
8. In Review geben.
9. Freigeben.
10. Nach Aktualitätsverlust archivieren.

---

### 11. Spaced-Repetition-Logik

Empfohlene Wiederholungslogik:

| Antwortqualität | Nächste Wiederholung |
|---|---|
| falsch | nach 10 Minuten |
| unsicher richtig | nach 1 Tag |
| richtig | nach 3 Tagen |
| sicher richtig | nach 7 Tagen |
| mehrfach sicher richtig | nach 14–30 Tagen |

Zusätzlich sollten aktuelle Themen mit hoher Nachrichtenrelevanz häufiger abgefragt werden.

---

### 12. Importfähiges Grundschema für Ereignisse

```json
{
  "id": "eventslug",
  "type": "event",
  "title": "Ereignistitel",
  "date": "YYYY-MM-DD",
  "location": "Ort/Land",
  "actors": [],
  "summary": "Kurze faktenbasierte Beschreibung",
  "whyrelevant": "Journalistische Relevanz",
  "topiccluster": [],
  "sourceurls": [],
  "verificationstatus": "unverified",
  "possiblequestiontypes": ["singlechoice", "multipleresponse", "cloze"]
}
```

---

### 13. Importfähiges Grundschema für Personen

```json
{
  "id": "personvornamenachname",
  "type": "person",
  "name": "Vorname Nachname",
  "role": "Amt oder öffentliche Rolle",
  "country": "Land",
  "topiccluster": ["Deutsche Politik", "EU"],
  "relevance": "hoch",
  "validfrom": "YYYY-MM-DD",
  "validto": null,
  "sourceurls": [],
  "verificationstatus": "unverified",
  "possiblequestiontypes": ["singlechoice", "matching", "cloze", "image"]
}
```

---

### 14. Kernaussage zur DJS-Lernlogik

Die spätere Software soll nicht nur Fakten abfragen. Sie soll journalistisches Orientierungswissen trainieren:

- aktuelle Personen erkennen,
- Ereignisse geografisch und politisch einordnen,
- Organisationen und Institutionen verstehen,
- Entwicklungen der letzten zwölf Monate strukturieren,
- unter Zeitdruck DJS-typische Formate lösen,
- aus Nachrichtenlagen mögliche Prüfungsfragen ableiten.

---

## Kompakte Arbeitsanweisung für den nächsten Einsatz

```md
Arbeite jetzt ausschließlich an der Sammlung der alten DJS-Wissenstests.

Ziel:
Alle öffentlich verfügbaren alten DJS-Aufnahmeprüfungen sammeln, extrahieren, strukturieren und mit Antwort-/Verifikationsstatus versehen.

Reihenfolge:

1. DJS-Indexseite vollständig prüfen.
2. Alle verlinkten Jahresseiten erfassen.
3. Ältere öffentlich auffindbare Tests suchen.
4. Pro Jahr Fragen und Antworten extrahieren.
5. Jede Frage mit Metadaten versehen.
6. Fehlende Antworten nur durch seriöse Doppelprüfung ergänzen.
7. Unsicherheiten transparent markieren.
8. Noch keine 2025/2026-Themenrecherche starten, solange die Altdaten nicht fertig sind.

Ausgabe:
01djswissenstestsrohdaten.md
```
