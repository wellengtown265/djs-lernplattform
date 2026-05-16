# DJS-Lernplattform: Implementierungs-Roadmap

**Zeitleiste:** 4–5 Wochen bis MVP-Launch

---

## Phase 1: Vorbereitung & Recherche (Woche 1)

### Aufgabe 1.1: Musteranalyse durchführen
- [ ] Alle 200+ Fragen aus den F&A-Dateien analysieren
- [ ] Fragetypen kategorisieren: Single Choice, Multiple, Cloze, Matching, Karten
- [ ] Themenbereiche identifizieren: Politik, Wirtschaft, Kultur, Sport, etc.
- [ ] Schwierigkeitsmuster feststellen: Leicht, Mittel, Schwer
- [ ] Zeitbezüge prüfen: Wie viel % sind aktuell (2024/2025)?
- [ ] **Deliverable:** `02_DJS_Musteranalyse_Kategorien.md`

### Aufgabe 1.2: Kategorien-Struktur definieren
- [ ] Finale 6–8 Kategorien festlegen
  - [ ] Internationale Politik
  - [ ] Deutsche Politik
  - [ ] Wirtschaft
  - [ ] Kultur & Medien
  - [ ] Sport
  - [ ] Geografie
  - [ ] Aktuelle Ereignisse 2024/2025
  - [ ] Optional: Personen & Organisationen
- [ ] Pro Kategorie: Unterkategorien definieren
- [ ] **Deliverable:** Categories-JSON-Schema

### Aufgabe 1.3: Content-Struktur (2025/2026 Recherche)
- [ ] Aktuelle Ereignisse der letzten 12 Monate recherchieren
- [ ] Für jedes Ereignis: Fragen generieren
- [ ] Kontexte & Quellen sammeln
- [ ] **Deliverable:** `03_DJS_Themenrecherche_2025_2026.md`

**✅ Checkpoint 1.0:** Musteranalyse abgeschlossen, Kategorien definiert, Content-Struktur klar

---

## Phase 2: Daten-Vorbereitung (Woche 2)

### Aufgabe 2.1: Alle Fragen in JSON konvertieren
- [ ] Bestehende F&A-Datei durchgehen
- [ ] Jede Frage → JSON-Objekt mit allen Feldern:
  ```json
  {
    "id": "djs2024sc001",
    "year": 2024,
    "type": "singlechoice",
    "category": "Deutsche Politik",
    "subcategory": "Wahlen 2025",
    "difficulty": "mittel",
    "question": "...",
    "options": [...],
    "correctAnswers": [...],
    "explanation": "...",
    "context": "...",
    "sources": [...],
    "tags": [...]
  }
  ```
- [ ] JSON validieren (alle Felder vorhanden?)
- [ ] **Deliverable:** `questions.json` (200+ Fragen)

### Aufgabe 2.2: Categories-Datei erstellen
- [ ] Schema definieren:
  ```json
  {
    "categories": [
      {
        "id": "intl_politics",
        "name": "Internationale Politik",
        "description": "...",
        "color": "blue",
        "subcategories": [
          { "id": "eu", "name": "Europäische Union" },
          { "id": "nato", "name": "NATO & Sicherheit" },
          { "id": "conflicts", "name": "Krisenregionen" }
        ]
      }
    ]
  }
  ```
- [ ] Alle 6–8 Kategorien + Unterkategorien eintragen
- [ ] **Deliverable:** `categories.json`

### Aufgabe 2.3: Config-Datei
- [ ] App-Konfiguration definieren:
  ```json
  {
    "version": "1.0.0",
    "appName": "DJS Lernplattform",
    "targetScore": 85,
    "dailyGoal": 5,
    "xpSystem": {
      "correctAnswer": 50,
      "correctAnswerLearning": 60,
      "wrongAnswer": -10
    }
  }
  ```
- [ ] **Deliverable:** `config.json`

**✅ Checkpoint 2.0:** Alle Daten strukturiert, JSON validiert, bereit für Frontend

---

## Phase 3: Frontend-Entwicklung in Claude Code (Woche 2–3)

### Aufgabe 3.1: Projekt-Setup
- [ ] React-Projekt initialisieren
- [ ] TypeScript konfigurieren
- [ ] Tailwind CSS Setup
- [ ] Verzeichnis-Struktur anlegen (components/, pages/, hooks/, data/, utils/)
- [ ] **Deliverable:** Funktionierende Projekt-Grundstruktur

### Aufgabe 3.2: Hooks & Utilities programmieren
- [ ] `useLocalStorage.ts` – Datenspeicherung in Browser
- [ ] `useSpacedRepetition.ts` – Algorithmus für Wiederholungen
- [ ] `useProgress.ts` – Fortschrittsberechnung
- [ ] `useGameState.ts` – XP, Streaks, Badges Management
- [ ] Validation & Formatter Utilities
- [ ] **Deliverable:** Alle Hooks getestet

### Aufgabe 3.3: UI-Komponenten bauen

#### 3.3a Dashboard
- [ ] Header mit Grußwort & Fortschrittsleiste
- [ ] Metric Cards (Gesamtfortschritt, Zielmarke, Tage verbleibend)
- [ ] Warnung bei schwachen Bereichen
- [ ] "Jetzt trainieren" Button
- [ ] Empfohlene Fragen für heute (bis 5)
- [ ] Kategorien-Übersicht mit Fortschrittsbalken

#### 3.3b QuestionCard (Wiederverwendbar)
- [ ] Frage anzeigen
- [ ] Verschiedene Input-Typen:
  - [ ] Radio Buttons (Single Choice)
  - [ ] Checkboxes (Multiple)
  - [ ] Text Input (Cloze)
  - [ ] Drag-Drop (Matching)
  - [ ] Klickbare Karte (Geografie)
- [ ] Animierte Optionen
- [ ] Sofortiges Feedback

#### 3.3c FeedbackPanel
- [ ] Richtig/Falsch Indikator
- [ ] XP-Anzeige animiert
- [ ] Kurze Erklärung
- [ ] "Vertiefung lesen" Button
- [ ] Nächste-Frage Button

#### 3.3d ExplanationPanel (Lernmodus)
- [ ] Tabs: Kontext | Quellen | Ähnliche Fragen
- [ ] Kontext-Text mit Formatierung
- [ ] Quellen als Linkliste
- [ ] Verwandte Fragen als klickbare Liste
- [ ] Close-Button

#### 3.3e Statistiken-Seite
- [ ] Fehleranalyse pro Kategorie
- [ ] Fortschritts-Grafik (Chart.js oder einfache Balken)
- [ ] Zeitanalys: Beste Lernzeit
- [ ] Schwache Bereiche Warning

### Aufgabe 3.4: Navigation & Layout
- [ ] Haupt-Navigation (4 Tabs: Dashboard, Quiz, Lernmodus, Statistiken)
- [ ] Responsive Design (Mobile first)
- [ ] Dark Mode Support
- [ ] Loading States & Error Handling
- [ ] **Deliverable:** Alle Seiten navigierbar

**✅ Checkpoint 3.0:** Alle UI-Komponenten sichtbar, aber noch nicht vollständig interaktiv

---

## Phase 4: Logik & Interaktion (Woche 3)

### Aufgabe 4.1: Quiz-Modus Logik
- [ ] Frage laden basierend auf Spaced Repetition
- [ ] Antwort validieren (richtig/falsch)
- [ ] XP berechnen und anzeigen
- [ ] Streak aktualisieren
- [ ] Fortschritt speichern in localStorage
- [ ] Nächste Frage automatisch laden
- [ ] Pausen nach 5/10/25 Fragen mit Summary
- [ ] **Testen:** Mit 5+ Fragen durchspielen

### Aufgabe 4.2: Lernmodus Logik
- [ ] Quiz-Modus + Explanation Panel
- [ ] Kontext-Daten laden & anzeigen
- [ ] Quellen-Links clicky
- [ ] Ähnliche Fragen laden
- [ ] Tieferes Verständnis Modal
- [ ] **Testen:** Mit 3+ Fragen mit Erklärungen

### Aufgabe 4.3: Gamification
- [ ] XP-System implementieren
- [ ] Streak-Zähler aktualisieren
- [ ] Täglich/Wöchentlich Boni berechnen
- [ ] Badges freischalten (10%, 25%, 50%, 75%, 100%)
- [ ] Animations & Celebratory Messages
- [ ] **Testen:** Fragen absolvieren, Punkte & Streaks prüfen

### Aufgabe 4.4: Spaced Repetition Engine
- [ ] Algoritmus implementieren (Interval Scheduling)
- [ ] "Due Questions" für heute berechnen
- [ ] Fragen sortieren (Schwache zuerst)
- [ ] Interval update nach jeder Antwort
- [ ] localStorage sync
- [ ] **Testen:** Mehrere Tage simulieren, richtige Reihenfolge prüfen

**✅ Checkpoint 4.0:** Quiz und Lernmodus vollständig spielbar, Daten persistieren

---

## Phase 5: Admin & Content Management (Woche 4)

### Aufgabe 5.1: Admin-Panel
- [ ] Admin-Seite mit 3 Bereichen:
  
  **A) Content Importer**
  - [ ] JSON-File Upload
  - [ ] Validierung
  - [ ] Preview vor Import
  - [ ] Bestätigung & Import
  
  **B) Category Manager**
  - [ ] Neue Kategorien anlegen
  - [ ] Bestehende bearbeiten
  - [ ] Löschen (mit Bestätigung)
  
  **C) Settings**
  - [ ] App-Name, Version
  - [ ] XP-Werte anpassen
  - [ ] Daily/Weekly Ziele ändern
  - [ ] Export/Reset User Data

### Aufgabe 5.2: Content-Update Workflow
- [ ] CLI-Tool oder Web-Interface für Updates
- [ ] Versionierung (v1.0, v1.1, v2.0)
- [ ] Backup vor Update
- [ ] Rollback-Möglickeit
- [ ] **Testen:** 2–3 Test-Imports durchführen

**✅ Checkpoint 5.0:** Admin-Funktionen funktionstüchtig, Updates möglich

---

## Phase 6: Testing & Optimierung (Woche 4–5)

### Aufgabe 6.1: Funktionales Testing
- [ ] Alle Fragetypen durchspielen ✓
- [ ] Quiz-Modus von Start bis Pause bis Ende ✓
- [ ] Lernmodus mit Vertiefung ✓
- [ ] Statistiken aktualisieren korrekt ✓
- [ ] localStorage persisitert über Seiten-Reload ✓
- [ ] Spaced Repetition korrekt ✓
- [ ] XP/Streaks/Badges funkionieren ✓

### Aufgabe 6.2: UX & Performance
- [ ] Seiten-Ladezeit < 2 Sekunden
- [ ] Keine unerwarteten Lags beim Antwort-Input
- [ ] Animations smooth (60 FPS)
- [ ] Mobile responsive auf iPhone SE / iPad
- [ ] Tablet-Layout optimiert
- [ ] Dark Mode alle Texte lesbar

### Aufgabe 6.3: Fehlerbehandlung
- [ ] Graceful handling von leeren Daten
- [ ] Validierungsfehler anzeigen (Admin-Panel)
- [ ] localStorage-Fehler (voll?) handhaben
- [ ] Netzwerkfehler (falls später APIs) behandeln

### Aufgabe 6.4: Browser-Kompatibilität
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓

**✅ Checkpoint 6.0:** Alle Tests bestanden, App stabil & schnell

---

## Phase 7: Launch & Go-Live (Woche 5)

### Aufgabe 7.1: Final Checklist
- [ ] Alle Komponenten vollständig
- [ ] Alle Daten importiert & validiert
- [ ] UI poliert (Farben, Icons, Layout)
- [ ] Documentation geschrieben (README)
- [ ] User Manual vorbereitet

### Aufgabe 7.2: Deployment
- [ ] Claude Code Umgebung finalisiert
- [ ] Optional: Build für static Deploy (Vercel/Netlify)
- [ ] Domain konfigurieren (optional später)
- [ ] SSL/TLS (falls Cloud Hosting)

### Aufgabe 7.3: User Onboarding
- [ ] Willkommens-Tour schreiben
- [ ] First-Time Setup (Zielmarke, Prüfungsdatum)
- [ ] Hilfe-Seite mit FAQs
- [ ] Support-Email oder Contact Form

**✅ MVP LAUNCH:** App live für erste User!

---

## Komponenten-Checkliste

### Seiten
- [ ] Dashboard.tsx
- [ ] QuizMode.tsx
- [ ] LearningMode.tsx
- [ ] Statistics.tsx
- [ ] Admin.tsx
- [ ] About.tsx / Help.tsx

### UI-Komponenten
- [ ] QuestionCard.tsx
- [ ] ProgressBar.tsx
- [ ] StreakCounter.tsx
- [ ] XPBadge.tsx
- [ ] ExplanationPanel.tsx
- [ ] ContextPanel.tsx
- [ ] SourcesPanel.tsx
- [ ] RelatedQuestionsPanel.tsx
- [ ] CategoryGrid.tsx
- [ ] FeedbackMessage.tsx
- [ ] LoadingSpinner.tsx

### Hooks
- [ ] useLocalStorage.ts
- [ ] useSpacedRepetition.ts
- [ ] useProgress.ts
- [ ] useGameState.ts
- [ ] useQuestions.ts
- [ ] useCategories.ts

### Utils
- [ ] validators.ts
- [ ] formatters.ts
- [ ] algorithms.ts (Interval, XP Calc)
- [ ] constants.ts

---

## Daten-Dateien

- [ ] `questions.json` (200+ Fragen)
- [ ] `categories.json` (6–8 Kategorien)
- [ ] `config.json` (App-Einstellungen)
- [ ] `schema.json` (Validation Schemas)

---

## Kritische Fehler zu vermeiden

🔴 **NICHT MACHEN:**
- Keine Offline-Persistierung programmiert → Daten weg nach Refresh
- Zu viele Komponenten pro Seite → Performance leidet
- Keine Error Boundaries → App crasht bei Fehler
- Spaced Repetition Algo fehlerhaft → Falscher Lernplan
- Admin-Panel vergessen → Updates unmöglich
- Mobile nicht getestet → Halbe User können nicht nutzen
- Zu bunte UI → Überlastet, unprofessionell wirkend

---

## Definition of Done (pro Aufgabe)

Eine Aufgabe ist **erledigt**, wenn:

1. ✅ Code geschrieben & committed
2. ✅ Tests geschrieben & bestanden
3. ✅ Code-Review bestanden
4. ✅ In mind mit anderen Komponenten
5. ✅ Dokumentiert (README/Comments)
6. ✅ Keine bekannten Bugs

---

## Zeitbudget pro Phase

| Phase | Aufgabe | Zeit | Checkpoint |
|---|---|---|---|
| 1 | Vorbereitung | 3 Tage | Musteranalyse fertig |
| 2 | Daten | 2 Tage | JSON validiert |
| 3 | Frontend | 5 Tage | UI komplett |
| 4 | Logik | 4 Tage | App spielbar |
| 5 | Admin | 2 Tage | Content updatable |
| 6 | Testing | 3 Tage | Stabil & schnell |
| 7 | Launch | 2 Tage | Go-live |
| **Gesamt** | | **21 Tage** | **MVP live** |

**Realistisch: 4–5 Wochen mit 5–6h/Tag**

---

## Post-MVP Roadmap

### Phase 8: Polishing (Woche 6)
- [ ] User Feedback integrieren
- [ ] Bug Fixes
- [ ] Performance Fine-Tuning
- [ ] UI/UX Refinements

### Phase 9: Features (Woche 7+)
- [ ] Level 3: Prüfungsmodus (90 Min, 100 Fragen)
- [ ] Bildertest-Modul
- [ ] Cloud-Sync (Firebase/Supabase)
- [ ] Freunde-Feature
- [ ] Tägliche Newsletter

