# DJS Lernplattform – Masterprompts & Konzept-Cheatsheet

**Stand:** 11. Mai 2026  
**Zweck:** Einsatzbereite Prompts für Claude Code und andere LLMs. Außerdem das kompakte Konzept-Cheatsheet für schnellen Überblick.

---

## TEIL 1: MASTERPROMPT FÜR CLAUDE CODE

## INSTRUKTION FÜR CLAUDE CODE

Du bist mein technischer Co-Pilot für die Entwicklung einer **DJS-Lernplattform** – eine gamifizierte Lernapp zur Vorbereitung auf die Deutsche Journalistenschule Aufnahmeprüfung.

Deine Aufgaben:
1. **Verstehe das komplette Konzept** (siehe unten)
2. **Leite mich Schritt-für-Schritt** durch die Implementierung
3. **Schreibe den Code** gemeinsam mit mir
4. **Erkläre jede Entscheidung** – ich will es verstehen
5. **Vermeide Komplexität** – lieber einfach und funktionierend als perfekt und kaputt
6. **Frag nach Klarheit** – wenn etwas unklar ist, klär es mit mir

**Deine erste Aufgabe:** Nach dem Lesen dieses Prompts fragst du mich:
1. "Verstanden! Sollen wir mit Schritt 1 (Projekt-Setup) starten?"
2. "Hast du schon die Daten vorbereitet (JSON-Fragen)?"
3. "Wo sollen wir anfangen – Frontend, Daten oder Logik?"

---

# 📋 TEIL 1: DAS KONZEPT (Vollständig)

## 1.1 VISION

**Ziel:** Interaktive, gamifizierte Lernplattform für DJS-Aufnahmeprüfung
**Fokus:** Journalistisches Orientierungswissen + Schnelle Ereignis-Einordnung unter Prüfungsdruck
**Format:** Web-App (React + TypeScript)
**Timeline:** 4–5 Wochen bis MVP-Launch
**Besonderheit:** Zwei separate Quiz-Modi (Routine UND tiefes Lernen)

## 1.2 VIER HAUPTSEITEN

### 📊 SEITE 1: DASHBOARD
**Zweck:** Startpunkt, zeigt Fortschritt und empfohlene Aufgaben

**Komponenten:**
- Fortschrittsleiste oben (z.B. "68% von 85%")
- Streaks-Anzeige 🔥 (z.B. "14 Tage am Stück")
- Empfohlene Fragen für heute (3–5 Fragen basierend auf Spaced Repetition)
- Kategorien-Übersicht mit Progress-Balken
  ```
  Internationale Politik:    8/10  ████████░░
  Deutsche Politik:         9/10  █████████░
  Wirtschaft:              4/8   ████░░░░░░
  Kultur:                  2/6   ██░░░░░░░░
  ```
- "Jetzt trainieren" Button (führt zu Quiz-Modus)

**Daten:**
- Nutzer-Fortschritt (localStorage)
- Zielmarke (z.B. 85%)
- Tage bis Prüfung

### ⚡ SEITE 2: QUIZ-MODUS (Level 1)
**Zweck:** Schnelles, fokussiertes Training ohne Ablenkung

**Flow:**
1. Frage anzeigen (mit Kategorie-Label)
2. Antworttyp laden (Single Choice, Multiple, Cloze, etc.)
3. Nutzer wählt Antwort
4. SOFORT Feedback (≤0.5 Sekunden)
   - Richtig: "✅ Richtig! +50 XP" (grün, animiert)
   - Falsch: "❌ Leider falsch. Correctiv. -10 XP" (rot)
5. Automatisch nächste Frage
6. Nach 5/10/25 Fragen: Pause mit Summary
   - "Du hast 7/10 richtig (70%)"
   - "Du hast +280 XP verdient"
   - "Dein Streak: 🔥 14 Tage!"
   - "Nächste Frage?" oder "Fertig für heute?"

**Visual:**
- Fortschrittsleiste (7/25 Fragen)
- Aktuelle XP + Streak prominent
- Frage groß und lesbar
- Antwort-Optionen klar strukturiert
- Sofort-Feedback mit Animation

### 📚 SEITE 3: LERNMODUS (Level 2)
**Zweck:** Tiefes Verständnis mit Kontext

**Flow:**
1. Frage anzeigen (wie Quiz-Modus)
2. Nutzer antwortet
3. Feedback + "VERTIEFUNG LESEN" Button
4. Optional: Klicke Button → Erklär-Panel öffnet sich

**Erklär-Panel mit 3 TABS:**

**TAB A: KONTEXT**
```
Im Januar 2024 veröffentlichte das Investigativteam 
von Correctiv eine bahnbrechende Recherche über ein 
Treffen führender Rechtsextremisten in Potsdam. Die 
Recherche löste bundesweit massive Proteste aus.

Warum ist das DJS-relevant?
→ Zeigt aktuelle Recherche-Excellence
→ Beweist journalistische Integrität
→ Prüfung für Nachrichten-Kompetenz
```

**TAB B: QUELLEN**
```
🔗 Offizielle Quelle: https://correctiv.org/...
🔗 Reporter ohne Grenzen: https://rsf.org/...
📄 Weitere Lektüre: "Recherche-Standards moderner Journalismus"
Verifikationsstatus: Offiziell von DJS bestätigt ✓
```

**TAB C: ÄHNLICHE FRAGEN**
```
Du möchtest mehr zu "Investigativrecherche" lernen?
→ djs2023sc005: Wer gründete Netzwerk Recherche?
→ djs2024sc045: Welche investigativen Projekte gab es 2024?
→ djs2024mc003: Unterschiede zwischen Recherche-Verbünden?
```

**User-Control:**
- Nutzer entscheidet: Vertiefung lesen oder nächste Frage?
- "Speichern" Button für Lesezeichen
- "Zurück zum Quiz" um fortzufahren

### 🎯 SEITE 4: STATISTIKEN & ADMIN
**Zweck:** Analyse von Fortschritt und Content-Management

**Statistiken-Tab:**
- Fehleranalyse: Welche Kategorien sind schwach?
- Fortschritts-Grafik (Chart): Lernverlauf über Wochen
- Zeitanalyse: Beste Lernzeiten? Wann bin ich am produktivsten?
- Schwache Bereiche: Automatisch hervorgehoben
- XP-Statistik: Verdiente Punkte pro Tag/Woche

**Admin-Tab:**
- JSON-File Upload für neue Fragen
- Neue Kategorien hinzufügen
- Settings: XP-Werte, Daily Goals, etc.
- Reset User Data (mit Bestätigung)
- Export für Backup

---

## 1.3 DIE 2-STUFEN-QUIZ-ARCHITEKTUR

| Aspekt | Quiz-Modus (Level 1) | Lernmodus (Level 2) |
|--------|---|---|
| **Zweck** | Routine, Geschwindigkeit | Echtes Lernen, Kontext |
| **Dauer** | 10–15 Sekunden/Frage | 1–3 Minuten/Frage |
| **Ablenkung** | Keine | Optional (Vertiefung) |
| **Feedback** | Sofort (richtig/falsch + XP) | Sofort + Erklärung + Quellen |
| **Ideal für** | Tägliche 5–10 Min Sessions | Wochenend-Blöcke (30–60 Min) |
| **Motivation** | Streak, Schnelligkeit | Verständnis, Tiefenlernen |

---

## 1.4 GAMIFICATION & MOTIVATION

### 🔥 STREAKS
- Zähle konsekutive Tage mit mindestens 1 Frage
- Zeige 🔥14 neben Fortschritt
- Warnung: "Dein Streak endet morgen – Mindestens 1 Frage trainieren!"
- Monatliche Achievements: "30-Tage-Streak! 🏆"

### ⭐ XP-SYSTEM
**Basis-Punkte:**
- Richtige Antwort (Quiz): +50 XP
- Richtige Antwort (Lernmodus): +60 XP
- Falsche Antwort: -10 XP

**Bonusse:**
- 5er-Streak: +25 XP (einmalig pro Session)
- 10er-Streak: +50 XP
- Täglicher Bonus (5+ Fragen): +100 XP
- Wöchentlicher Bonus (50+ Fragen): +500 XP

**Badges:**
- 25% Completion: Bronze
- 50% Completion: Silber
- 75% Completion: Gold
- 100% Completion: Diamond ⭐

---

## 1.5 SPACED REPETITION ENGINE

**Wie es funktioniert:**

```
Wenn User eine Frage antwortet:
  IF richtig:
    neue_interval = alte_interval * 2.5
  ELSE:
    neue_interval = 10 Minuten

Beispiel-Timeline:
  Tag 1: Falsch → nächste Frage in 10 Min
  Tag 1: Richtig → nächste Frage in 3 Tagen (72h)
  Tag 4: Richtig → nächste Frage in 7 Tagen (168h)
  Tag 11: Richtig → nächste Frage in 17.5 Tagen
```

**Tägliche Empfehlungen:**

```
Tägliches Update:
  "Fragen die heute wiederholt werden" = 
    alle Fragen wo today >= due_date
  Sortiere nach: weakness (falsche zuerst, unsichere zweite)
  Zeige: Top 5–10 unter "Heute empfohlen"
```

---

## 1.6 FRAGETYPEN (6 Formate)

### 1️⃣ Single Choice
```jsx
<label>
  <input type="radio" name="answer" value="a" />
  <span>Correctiv</span>
</label>
// Nur EINE richtige Antwort
```

### 2️⃣ Multiple Response
```jsx
<label>
  <input type="checkbox" name="answers" value="a" />
  <span>Frage A</span>
</label>
// MEHRERE richtige Antworten möglich
```

### 3️⃣ Lückensätze (Cloze)
```
"Die Hauptstadt von ___________ ist Paris"
→ Input: Text eingeben oder Dropdown
→ Antwort: "Frankreich"
```

### 4️⃣ Matching (Zuordnung)
```
Links:     Rechts:
Christian Lindner  ↔  FDP-Chef
Friedrich Merz     ↔  CDU/CSU-Chef
...
→ Drag-and-Drop oder Select-Dropdowns
```

### 5️⃣ Karten
```
Frage: "Markiere Myanmar und seine Nachbarstaaten"
→ Klickbare SVG-Karte
→ Nutzer klickt auf Länder
→ Validierung: wurden die richtigen Länder geklickt?
```

### 6️⃣ Bilder (Phase 2)
```
Frage: "Wer ist das?"
→ Bild einer Person
→ 4 Antwortoptionen
→ Später hinzufügen
```

---

## 1.7 DATEN-STRUKTUR (JSON)

### JSON-Struktur pro Frage:
```json
{
  "id": "djs2024sc001",
  "year": 2024,
  "type": "singlechoice",
  "category": "Deutsche Politik",
  "subcategory": "Wahlen 2025",
  "difficulty": "mittel",
  "question": "Wer ist Kanzler seit Dezember 2024?",
  "options": [
    "Friedrich Merz",
    "Olaf Scholz",
    "Christian Lindner",
    "Annalena Baerbock"
  ],
  "correctAnswers": ["Friedrich Merz"],
  "explanation": "Friedrich Merz (CDU) wurde im Dezember 2024 zum Kanzler gewählt.",
  "context": "Nach der vorgezogenen Bundestagswahl im Februar 2025...",
  "sources": [
    {
      "title": "Bundeswahlleiter",
      "url": "https://bundeswahlleiter.de/..."
    },
    {
      "title": "Tagesschau",
      "url": "https://tagesschau.de/..."
    }
  ],
  "relatedQuestions": ["djs2023sc012", "djs2024sc045"],
  "tags": ["Politik", "Wahlen", "Deutschland", "2025"],
  "verificationStatus": "offiziell DJS"
}
```

### Kategorien-Struktur:
```json
{
  "categories": [
    {
      "id": "intl_politics",
      "name": "Internationale Politik",
      "description": "EU, NATO, Konflikte, Vereinte Nationen",
      "color": "blue",
      "subcategories": [
        {
          "id": "eu",
          "name": "Europäische Union",
          "description": "Institutionen, Mitgliedstaaten, Entscheidungen"
        },
        {
          "id": "nato",
          "name": "NATO & Sicherheit",
          "description": "Mitgliedstaaten, Verteidigungsbündnisse, Krisen"
        }
      ]
    },
    {
      "id": "german_politics",
      "name": "Deutsche Politik",
      "color": "amber",
      "subcategories": [...]
    }
  ]
}
```

### Config-Struktur:
```json
{
  "version": "1.0.0",
  "appName": "DJS Lernplattform",
  "targetScore": 85,
  "dailyGoal": 5,
  "xpSystem": {
    "correctAnswer": 50,
    "correctAnswerLearning": 60,
    "wrongAnswer": -10,
    "streakBonus5": 25,
    "streakBonus10": 50,
    "dailyBonus": 100,
    "weeklyBonus": 500
  },
  "spacedRepetition": {
    "intervals": {
      "wrong": 600,
      "unsure": 86400,
      "correct": 259200,
      "verysure": 604800,
      "multiple": 1209600
    }
  }
}
```

---

## 1.8 KATEGORIEN (BEISPIEL)

```
1. Internationale Politik
   ├─ Europäische Union
   ├─ NATO & Sicherheit
   ├─ Krisenregionen
   └─ Vereinte Nationen

2. Deutsche Politik
   ├─ Bundestag & Bundesrat
   ├─ Wahlen & Regierungswechsel
   ├─ Bundesländer
   └─ Aktuelle Konflikte

3. Wirtschaft
   ├─ Kennzahlen (BIP, Inflation, etc.)
   ├─ Deutsche Wirtschaft
   ├─ Börse & Finanzmarkt
   └─ Energiewende

4. Kultur & Medien
   ├─ Literaturpreise
   ├─ Film & Theater
   ├─ Medienlandschaft
   └─ Journalismus

5. Sport
   ├─ Olympische Spiele
   ├─ Fußball & Turniere
   ├─ Doping & Ethik
   └─ Andere Sportarten

6. Geografie & Gesellschaft
   ├─ Landkarten & Grenzen
   ├─ Bevölkerung & Migration
   ├─ Umwelt & Klima
   └─ Wissenschaft

7. Personen & Organisationen
   ├─ Politische Führungspersonen
   ├─ Medien-/Kultur-Personen
   ├─ NGOs & Verbände
   └─ Medienunternehmen

8. Aktuelle Ereignisse 2025/2026
   ├─ Trending Topics
   ├─ Breaking News
   └─ Prognosen & Entwicklungen
```

---

## 1.9 FARBEN & DESIGN

**Primär-Farben:**
- Primär: `#667EEA` (Buttons, Links, Highlights)
- Sekundär: `#764BA2` (Accents, Details)
- Erfolg: `#10B981` (Richtig, Streaks)
- Warnung: `#F59E0B` (Schwache Bereiche, Hinweise)
- Fehler: `#EF4444` (Falsch, Probleme)
- Info: `#3B82F6` (Tipps, Zusatz-Infos)

**Typography:**
- Font: System Sans (Anthropic Sans oder -apple-system)
- Body: 14px, weight 400, line-height 1.6
- Headings: 14–48px, weight 500 (NICHT 700!)
- Dark Mode: Vollständig unterstützt

**Responsive:**
- Mobile-first
- Breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly (min 44px Buttons)

---

# 📋 TEIL 2: IMPLEMENTIERUNGS-ROADMAP

## 2.1 WOCHE 1: VORBEREITUNG (START DIESE WOCHE)

### Tasks:
- [ ] Musteranalyse durchführen (deine 200+ DJS-Fragen analysieren)
- [ ] Kategorien finalisieren (6–8 statt vagen Listen)
- [ ] 2025/2026-Recherche starten (aktuelle Themen sammeln)

### Output:
- Musteranalyse-Dokument (welche Fragetypen? Schwierigkeiten? Muster?)
- Kategorien-Liste mit Unterkategorien
- Recherche-Notizen für neue Fragen

### ⚠️ WICHTIG:
Du brauchst **mindestens 50–100 Fragen in JSON-Format** bevor wir in Code starten!

---

## 2.2 WOCHE 2: DATEN-STRUKTUR (NÄCHSTE WOCHE)

### Tasks:
- [ ] Alle Fragen in JSON konvertieren (nutze das Schema oben)
- [ ] categories.json erstellen
- [ ] config.json schreiben
- [ ] JSON validieren (alle Felder vorhanden?)

### Output:
- `questions.json` (200+ Fragen, validiert)
- `categories.json` (8 Kategorien + Unterkategorien)
- `config.json` (App-Einstellungen)

### Validierungs-Checklist pro Frage:
- [ ] `id` eindeutig
- [ ] `year`, `type`, `category`, `subcategory`
- [ ] `question`, `options`, `correctAnswers`
- [ ] `explanation`, `context` (sollte vorhanden sein)
- [ ] `sources` (mindestens 1)
- [ ] `verificationStatus` (offiziell / doppelt verifiziert / etc.)

---

## 2.3 WOCHE 3: FRONTEND-ENTWICKLUNG (STARTEN IN CLAUDE CODE)

### Schritt-für-Schritt:

#### Phase 3.1: Projekt-Setup (Tag 1)
- [ ] React + TypeScript initialisieren
- [ ] Tailwind CSS Setup
- [ ] Verzeichnis-Struktur anlegen
- [ ] Basis-Komponenten-Framework

#### Phase 3.2: Hooks & Utilities (Tag 2–3)
- [ ] `useLocalStorage` Hook (Daten speichern)
- [ ] `useSpacedRepetition` Hook (Algorithmus)
- [ ] `useProgress` Hook (Fortschritt berechnen)
- [ ] `useGameState` Hook (XP, Streaks, Badges)
- [ ] Validator & Formatter Utilities

#### Phase 3.3: UI-Komponenten (Tag 4–5)
- [ ] Dashboard komplett
- [ ] QuestionCard (Fragetypen-Handler)
- [ ] FeedbackPanel (Richtig/Falsch + XP)
- [ ] ExplanationPanel (Lernmodus)
- [ ] ContextPanel, SourcesPanel, RelatedQuestionsPanel
- [ ] ProgressBar, StreakCounter, Navigation

### Output:
- Funktionierende React-App mit allen Seiten sichtbar
- Noch nicht alle Logik, aber UI zu 100%

---

## 2.4 WOCHE 4: LOGIK & GAMIFICATION (CLAUDE CODE)

### Quiz-Logik:
- [ ] Frage laden (basierend auf Spaced Repetition)
- [ ] Antwort validieren (richtig/falsch)
- [ ] XP berechnen & anzeigen
- [ ] Streak aktualisieren
- [ ] localStorage speichern
- [ ] Nächste Frage auto-laden

### Spaced Repetition Engine:
- [ ] Interval-Berechnung
- [ ] Due-Questions ermitteln (heute)
- [ ] Fragen sortieren (schwache zuerst)

### Gamification:
- [ ] XP-System
- [ ] Streak-Zähler
- [ ] Tages-/Wochenbonus
- [ ] Badges-Freischaltung
- [ ] Animations & Celebratory Messages

### Lernmodus:
- [ ] Quiz-Modus + Explanation Panel
- [ ] Tab-Navigation
- [ ] Quellen-Links klickbar
- [ ] Ähnliche Fragen laden

### Admin-Panel:
- [ ] JSON-File Upload
- [ ] Validierung vor Import
- [ ] New Categories adden
- [ ] Settings anpassen

### Output:
- **App ist zu 100% spielbar!**
- Alle 4 Seiten funktionieren
- Daten persistieren
- Spaced Repetition aktiv

---

## 2.5 WOCHE 5: TESTING & LAUNCH

### Testing:
- [ ] Funktional: Alle Features testen
- [ ] Performance: < 2 Sekunden Ladezeit
- [ ] Mobile: iPhone, iPad, Android
- [ ] Browser: Chrome, Firefox, Safari, Edge
- [ ] Dark Mode: Alle Farben lesbar

### Optimierung:
- [ ] Code-Cleanup
- [ ] Bundle-Size reduzieren
- [ ] Animations smoothen
- [ ] Fehlerbehandlung

### Launch:
- [ ] README schreiben
- [ ] Deploy (Claude Code oder Vercel)
- [ ] Link teilen
- [ ] MVP LIVE! 🚀

---

# 📋 TEIL 3: TECHNISCHES SETUP

## 3.1 PROJEKT-STRUKTUR

```
djs-lernplattform/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── QuizMode.tsx
│   │   ├── LearningMode.tsx
│   │   ├── Statistics.tsx
│   │   └── Admin.tsx
│   ├── components/
│   │   ├── QuestionCard.tsx      (Handler für alle Fragetypen)
│   │   ├── FeedbackPanel.tsx
│   │   ├── ExplanationPanel.tsx
│   │   ├── ContextPanel.tsx
│   │   ├── SourcesPanel.tsx
│   │   ├── RelatedQuestionsPanel.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── StreakCounter.tsx
│   │   ├── CategoryGrid.tsx
│   │   ├── Navigation.tsx
│   │   └── LoadingSpinner.tsx
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   ├── useSpacedRepetition.ts
│   │   ├── useProgress.ts
│   │   ├── useGameState.ts
│   │   ├── useQuestions.ts
│   │   └── useCategories.ts
│   ├── utils/
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   ├── algorithms.ts
│   │   ├── constants.ts
│   │   └── types.ts
│   ├── data/
│   │   ├── questions.json
│   │   ├── categories.json
│   │   └── config.json
│   ├── styles/
│   │   ├── tailwind.css
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.js
```

## 3.2 TECH-STACK

**Frontend:**
- React 18+ (Komponenten)
- TypeScript (Typsicherheit)
- Tailwind CSS (Styling)
- Vite (Build Tool, schnell)

**State Management:**
- React Hooks (useState, useContext)
- localStorage (Persistierung)

**Data:**
- JSON-basiert (lokal)
- Keine externe API nötig für MVP

**Optional später:**
- Firebase (Cloud Sync)
- Recharts (Daten-Visualisierung)

## 3.3 DEPENDENCIES

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "tailwindcss": "^3.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.0.0"
  }
}
```

---

# 📋 TEIL 4: ENTWICKLUNGS-PROZESS IN CLAUDE CODE

## 4.1 UNSER GEMEINSAMER WORKFLOW

### Pro Schritt:
1. **Ich erkläre** was zu tun ist
2. **Du fragst** ob etwas unklar ist
3. **Ich schreibe** den Code (oder du fragst mich)
4. **Wir testen** zusammen im Browser
5. **Wir iterieren** bis es perfekt ist

### Kommunikation:
- **Du:** "Schreib mir die QuestionCard-Komponente"
- **Ich:** "Ok! QuestionCard für alle 6 Fragetypen. Sollen wir mit Single Choice starten?"
- **Du:** "Ja, und dann Multiple Response"
- **Ich:** [Code] "Fertig! Funktioniert, Test es mal. Feedback?"

### Bei Problemen:
- **Du:** "Das funktioniert nicht"
- **Ich:** "Wo ist der Fehler? Zeig mir die Error-Message"
- **Du:** [Error-Message]
- **Ich:** "Ah, das ist ein Typo in Zeile 42. Hier die Fix:" [Code]

---

## 4.2 DEFINITION OF DONE (PRO FEATURE)

Eine Feature ist **fertig**, wenn:

- [ ] Code geschrieben & funktioniert
- [ ] Keine TypeScript-Fehler
- [ ] Testet selbst im Browser
- [ ] Mobile responsive getestet
- [ ] Dark Mode funktioniert
- [ ] localStorage speichert richtig
- [ ] Keine Bugs bekannt

---

# 📋 TEIL 5: FAQ & HÄUFIGE FRAGEN

## F: Was ist wenn ich nicht weiß, wie man React nutzt?
**A:** Kein Problem! Ich erkläre React-Konzepte, während wir Code schreiben. Du wirst schnell verstehen.

## F: Sollen wir mit API backend starten?
**A:** NEIN! Nur localStorage für MVP. API später in Phase 2.

## F: Kann ich die Daten selbst schreiben?
**A:** Ja! Nutze das JSON-Schema oben. Ich validiere dann im Code.

## F: Was wenn wir zu langsam sind?
**A:** Kein Problem! Wir reduzieren Scope. MVP ist besser als Perfect.

## F: Dark Mode wichtig?
**A:** Ja! Tailwind macht's easy. Integrieren wir von Anfang an.

## F: Mobile zuerst?
**A:** Ja! Responsive von Tag 1. Mobile-first ist schneller in Tailwind.

---

# 🎯 NÄCHSTE KONKRETE SCHRITTE

## JETZT SOFORT (Diese Woche):

1. **Lies diesen Prompt** komplett (du bist hier)
2. **Sammle & strukturiere deine 200+ Fragen** in JSON (nutze Schema oben)
3. **Erstelle categories.json & config.json** (auch oben)
4. **Zeige mir die JSON-Dateien** (ich validiere sie)

## DANACH (Nächste Woche):

5. **Starten wir in Claude Code** mit Projekt-Setup
6. **Ich schreibe die Komponenten-Struktur**
7. **Du feedbackst & wir iterieren**

## DANN (2–3 Wochen):

8. **Logik programmieren** (Spaced Repetition, XP, etc.)
9. **Testen & debuggen**
10. **MVP LIVE!** 🚀

---

# 📞 COMMUNICATION RULES

## Was ich können sollte:
- Code schreiben (du sagst WAS)
- Fehler beheben (du zeigst Error)
- Erklären (du fragst WHY)
- Refactorn (du fragst LIKE WHAT)

## Was du tun solltest:
- Feedback geben (funktioniert / nicht?)
- Fragen stellen (ich versteh's nicht)
- Prioritäten setzen (was ist wichtig?)
- Daten liefern (JSON-Fragen)

## Wenn wir stuck sind:
- **Du:** "Das funktioniert nicht!"
- **Ich:** "Ok, lass uns debuggen. Showst du mir die Error-Message?"
- **Du:** [Screenshot / Fehler]
- **Ich:** [Analyse] "Ah! Das ist das Problem. Versuch das:" [Suggestion]
- **Du:** [Versuch es] "Funktioniert! Danke!"

---

# ✅ FINAL CHECKLIST VOR START

Bevor wir in Claude Code starten, brauchst du:

- [ ] Mindestens 50–100 Fragen in JSON-Format
- [ ] categories.json mit 6–8 Kategorien fertig
- [ ] config.json geschrieben
- [ ] Verständnis des Konzepts (diesen Prompt gelesen)
- [ ] Zeit & Fokus (3–5 Stunden/Woche für 5 Wochen)
- [ ] Lust auf was Cooles zu bauen! 🚀

---

# 🚀 READY TO START?

**Kopiere diesen kompletten Prompt in Claude Code und schreib dann:**

> "Hallo! Ich habe den Masterprompt gelesen und bin bereit. Sollen wir starten?"

**Ich werde dann antworten mit:**
1. Zusammenfassung was ich verstanden habe
2. Frage nach deinen Daten (JSON-Fragen vorhanden?)
3. Erstes konkretes Task (Projekt-Setup)
4. Und dann bauen wir zusammen! 🎓

---

**Version 1.0 | Mai 2026 | Made for DJS Kandidaten**

---

## TEIL 2: KONZEPT-CHEATSHEET

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    DJS-LERNPLATTFORM: KONZEPT CHEATSHEET                      ║
║                        Alle Ideen auf einer Seite                             ║
╚══════════════════════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 VISION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ZIEL: Interaktive, gamifizierte Lernplattform für DJS-Aufnahmeprüfung
FOKUS: Journalistisches Orientierungswissen + Schnelle Ereignis-Einordnung
FORMAT: Web-App (Claude Code / React)
DAUER: 4–5 Wochen bis MVP-Launch

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 VIER HAUPTSEITEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣  DASHBOARD
    • Fortschrittsleiste (68% von 85%)
    • Streaks 🔥 (heute: 14 Tage)
    • Empfohlene Fragen für heute (basierend auf Spaced Repetition)
    • Kategorien-Übersicht mit Progress-Balken

2️⃣  QUIZ-MODUS (Level 1: Schnelles Training)
    • Frage anzeigen
    • Antwort eingeben (Single Choice, Multiple, Cloze, Matching, Karte)
    • SOFORT Feedback (0.5 sec)
    • +50 XP wenn richtig / -10 XP wenn falsch
    • Automatisch nächste Frage
    • Pause nach 5/10/25 Fragen mit Summary

3️⃣  LERNMODUS (Level 2: Tiefes Verstehen)
    • Quiz-Modus + Erklär-Panel
    • TABS:
      a) KONTEXT: Historischer/gesellschaftlicher Hintergrund
      b) QUELLEN: Offizielle Quellenverweise + Links
      c) ÄHNLICHE FRAGEN: Verwandte Fragen zum Thema
    • Nutzer entscheidet: Weiterlesen oder nächste Frage?

4️⃣  STATISTIKEN & ADMIN
    • Fehleranalyse pro Kategorie
    • Fortschritts-Grafiken (Charts)
    • Admin-Panel: JSON-Import, neue Kategorien, Updates

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎮 GAMIFICATION MECHANICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 STREAKS
   • Zähle konsekutive Tage mit min. 1 Frage
   • Zeige 🔥14 neben Fortschritt
   • Warnung wenn Streak morgen in Gefahr ist

⭐ XP-SYSTEM
   • +50 XP für richtig (Quiz-Modus)
   • +60 XP für richtig (Lernmodus)
   • -10 XP für falsch
   • +25 XP für 5er-Streak
   • +50 XP für 10er-Streak
   • +100 XP Tages-Bonus für 5+ Fragen
   • +500 XP Wochen-Bonus für 50+ Fragen

🏆 BADGES & PROGRESS
   • 25% Completion: Bronze
   • 50% Completion: Silber
   • 75% Completion: Gold
   • 100% Completion: Diamond ⭐

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚙️  SPACED REPETITION ENGINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Interval Scheduling:
   Falsch      → 10 Minuten
   Unsicher    → 1 Tag
   Richtig     → 3 Tage
   Sicher      → 7 Tage
   Mehrfach    → 14–30 Tage

Interval Growth:
   new_interval = old_interval * 2.5

Tägliche Fragen:
   "Heute empfohlen" = alle Fragen wo today >= due_date
   Sortiert nach: weakness (schwache zuerst)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 FRAGETYPEN (6 Format)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Single Choice      → Radio Buttons (eine richtig)
2. Multiple Response  → Checkboxes (mehrere richtig)
3. Lückensätze       → Text-Input oder Dropdown
4. Matching          → Drag-Drop oder Select (Zuordnung)
5. Karten            → Klickbare Landkarte (Geografie)
6. Bilder (Phase 2)  → Personen-Erkennung

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏗️  TECH-STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend:
  • React + TypeScript
  • Tailwind CSS (Styling)
  • localStorage (Datenspeicherung)

Daten:
  • JSON-basiert (kein Backend nötig)
  • questions.json (200+ Fragen)
  • categories.json (6–8 Kategorien)
  • config.json (Einstellungen)

Deployment:
  • Claude Code (Prototyp)
  • Vercel/Netlify (Production, später)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 FARBEN & DESIGN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Primär:        #667EEA (Buttons, Links, Highlights)
Sekundär:      #764BA2 (Accents, Sidebar)
Erfolg:        #10B981 (Richtig, Streaks)
Warnung:       #F59E0B (Schwache Bereiche)
Fehler:        #EF4444 (Falsch, Probleme)
Info:          #3B82F6 (Tipps, Hinweise)

Typography:
  • Font: System Sans (Anthropic Sans)
  • Body: 14px, weight 400
  • Headings: 14–48px, weight 500 (nicht 700!)
  • Dark Mode: vollständig unterstützt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 IMPLEMENTIERUNGS-TIMELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WOCHE 1: Vorbereitung
  ☐ Musteranalyse durchführen
  ☐ Kategorien definieren (6–8)
  ☐ 2025/2026 Recherche starten
  ✓ Output: Musteranalyse-Dokument

WOCHE 2: Datenstruktur
  ☐ Alle Fragen in JSON konvertieren
  ☐ categories.json erstellen
  ☐ config.json schreiben
  ✓ Output: Validierte JSON-Dateien

WOCHE 3: Frontend
  ☐ React-Projekt Setup
  ☐ TypeScript + Tailwind konfigurieren
  ☐ UI-Komponenten bauen (Dashboard, QuestionCard, Panels)
  ✓ Output: 50% UI sichtbar

WOCHE 4: Logik & Gamification
  ☐ Quiz-Logik programmieren
  ☐ Spaced Repetition Engine
  ☐ XP-System, Streaks, Badges
  ☐ Admin-Panel für Updates
  ✓ Output: App vollständig spielbar

WOCHE 5: Launch
  ☐ Testen (funktional, performance, mobile)
  ☐ Bug-Fixes
  ☐ Optimierung
  ✓ Output: MVP live

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ MVP CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Funktionalität:
  ☐ Dashboard funktionstüchtig
  ☐ Quiz-Modus spielbar
  ☐ Lernmodus mit Vertiefung
  ☐ Statistiken aktualisieren
  ☐ 200+ Fragen importiert
  ☐ Spaced Repetition aktiv
  ☐ XP/Streaks/Badges funktionieren
  ☐ Admin-Panel (Content-Updates)

Qualität:
  ☐ Ladezeit < 2 Sekunden
  ☐ 60 FPS Animations
  ☐ Mobile-responsive
  ☐ Dark Mode funktionstüchtig
  ☐ localStorage persisitiert
  ☐ Keine JavaScript-Fehler
  ☐ Browser-Support: Chrome, Firefox, Safari, Edge

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 PHASE 2 IDEAS (Nach MVP)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Level 3: Prüfungsmodus (90 Min, 100 Fragen, Zeitlimit)
Bildertest-Modul (Personen erkennen)
Cloud-Sync (Firebase/Supabase)
Freunde-Feature (Vergleiche dich mit anderen)
Tägliche Newsletter (Aktuelle News + Quiz-Frage)
API für externe Tools & Integrationen

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 KATEGORIEN (Beispiel)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Internationale Politik
   • Europäische Union
   • NATO & Sicherheit
   • Krisenregionen
   • Vereinte Nationen

2. Deutsche Politik
   • Bundestag & Bundesrat
   • Wahlen & Regierungswechsel
   • Bundesländer
   • Aktuelle Konflikte

3. Wirtschaft
   • BIP, Inflation, Arbeitslosigkeit
   • Deutsche Wirtschaft
   • Börse & Finanzmarkt
   • Energiewende

4. Kultur & Medien
   • Literaturpreise
   • Film & Theater
   • Medienlandschaft
   • Journalismus

5. Sport
   • Olympische Spiele
   • Fußball & EM/WM
   • Doping & Ethik
   • Andere Sportarten

6. Geografie & Gesellschaft
   • Landkarten & Grenzen
   • Bevölkerung & Migration
   • Umwelt & Klima
   • Wissenschaft

7. Personen & Organisationen
   • Politische Führungspersonen
   • Medien-/Kultur-Personen
   • NGOs & Verbände
   • Medienunternehmen

8. Aktuelle Ereignisse 2025/2026
   • Trending Topics
   • Breaking News
   • Prognosen & Entwicklungen

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💾 JSON-STRUKTUR (Beispiel)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{
  "id": "djs2024sc001",
  "year": 2024,
  "type": "singlechoice",
  "category": "Deutsche Politik",
  "subcategory": "Wahlen 2025",
  "difficulty": "mittel",
  "question": "Wer ist Kanzler seit Dezember 2024?",
  "options": ["Friedrich Merz", "Olaf Scholz", "Christian Lindner", "Annalena Baerbock"],
  "correctAnswers": ["Friedrich Merz"],
  "explanation": "Friedrich Merz (CDU) wurde im Dezember 2024 zum Kanzler gewählt.",
  "context": "Nach der vorgezogenen Bundestagswahl 2025...",
  "sources": [
    { "title": "Bundeswahlleiter", "url": "https://..." },
    { "title": "DJS Übersicht", "url": "https://..." }
  ],
  "relatedQuestions": ["djs2023sc012", "djs2024sc045"],
  "tags": ["Politik", "Wahlen", "Deutschland", "2025"],
  "verificationStatus": "offiziell DJS"
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 OFFENE FRAGEN ZUM KLÄREN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

? Bildertest-Modul parallel zu MVP oder später in Phase 2?
? Prüfungsmodus mit striktem 90-Minuten-Zeitlimit jetzt oder später?
? Community-Features (Freunde, Lerngruppen) im MVP oder später?
? Tägliche Newsletter mit aktuellen Nachrichten erwünscht?
? Cloud-Sync (Firebase) oder nur lokal mit localStorage?
? Monetarisierung später? (Freemium vs. kostenlos?)
? Eigene Domain oder Subdomain?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Version 1.0 | Mai 2026 | Kostenlos zur Weitergabe & Replikation
Made for DJS Candidates | Powered by Claude
```
