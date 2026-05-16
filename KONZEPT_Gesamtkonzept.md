# DJS-Lernplattform: Gesamtes Produktkonzept

**Datum:** Mai 2026  
**Status:** Produktkonzept für Entwicklung  
**Zielgruppe:** Kandidat:innen der Aufnahmeprüfung Deutsche Journalistenschule

---

## 1. Vision & Kernprinzipien

### Vision
Eine **interaktive, gamifizierte Lernplattform**, die Kandidat:innen der DJS-Aufnahmeprüfung so trainiert, dass sie:
- Journalistisches Orientierungswissen aufbauen
- Aktuelle Ereignisse schnell einordnen können
- Unter Prüfungsdruck konsistent hohe Leistungen bringen
- Langfristig und nachhaltig lernen (nicht nur Auswendiglernen)

### Kernprinzipien
1. **Zwei Quiz-Modi**: Schnelle Routine + tieferes Lernen
2. **Gamifiziert**: Streaks, XP, tägliche Boni für Motivation
3. **Kontextbasiert**: Jede Frage mit Hintergrund und Quellen
4. **Erweiterbar**: Neue Kategorien und Level leicht hinzufügbar
5. **Offline-fähig**: Funktioniert lokal im Browser

---

## 2. User Interface & Struktur

### 2.1 Seitennavigation (Hauptmenü)

Die Plattform besteht aus 4 Hauptbereichen:

**A) Dashboard**
- Zeige Gesamtfortschritt (68% von Ziel 85%)
- Streaks & Punkte heute
- Empfohlene Aufgaben für heute
- Übersicht aller Themenbereiche mit Fortschrittsbalken

**B) Quiz-Modus (Stufe 1: Schnelles Trainieren)**
- Frage + 4 Antwortoptionen
- Sofortige Validierung (richtig/falsch)
- XP-Anzeige
- Keine Ablenkung, reines Trainieren
- Ideal für tägliche 5–10-Minuten-Sessions

**C) Lernmodus (Stufe 2: Tiefes Verständnis)**
- Alles aus Quiz-Modus
- **+ Erklär-Panel mit:**
  - Historischer/gesellschaftlicher Kontext
  - Quellenverweise (offizielle Links)
  - Ähnliche Fragen zum Thema
  - Tags für assoziatives Lernen

**D) Statistiken & Verwaltung**
- Fehleranalyse: Welche Themen sind schwach?
- Zeitanalyse: Wann lerne ich am besten?
- Lerntrends: Fortschritt über Wochen/Monate
- Admin-Panel für neue Inhalte

---

## 3. Quiz-Modi im Detail

### 3.1 Level 1: Quiz-Modus (Schnelles Training)

**Zweck:** Routine, Geschwindigkeit, tägliches Trainieren

**Flow:**
```
1. Frage laden
   ↓
2. Antwort eingeben (Single Choice, Multiple, Matching, Cloze)
   ↓
3. SOFORT Feedback (0,5 sec Verzögerung max)
   → Richtig: +50 XP, Streak +1, grüner Haken
   → Falsch: -10 XP, kurze Erklärung
   ↓
4. Automatisch zur nächsten Frage
   ↓
5. Nach 5, 10 oder 25 Fragen: Pause + Statistik-Zusammenfassung
```

**Visual Design:**
- Fokussiert, minimalistische Ästhetik
- Fortschrittsleiste oben (7/25 Fragen)
- Aktuelle XP und Streak prominent
- "Hinweis"-Button für schwere Fragen
- "Überspringen"-Option für später
- Nachricht bei Bestleistungen ("🔥 5er-Streak!" etc.)

**Spaced Repetition:**
| Ergebnis | Nächste Wiederholung |
|---|---|
| Falsch | 10 Minuten |
| Unsicher richtig | 1 Tag |
| Richtig | 3 Tage |
| Sicher richtig | 7 Tage |
| Mehrfach sicher | 14–30 Tage |

---

### 3.2 Level 2: Lernmodus (Tiefes Verstehen)

**Zweck:** Echtes Lernen, Kontextualisierung, Langzeitgedächtnis

**Flow:**
```
1. Frage + Kategorie/Unterkategorie anzeigen
   ↓
2. Antwort eingeben (wie Level 1)
   ↓
3. Sofort Feedback PLUS:
   • Kurze Erklärung (2–3 Sätze)
   • "Tieferes Verständnis" Button
   ↓
4. Optional: Erklär-Panel öffnen mit:
   → Historischer Kontext (Warum ist das wichtig?)
   → Quellenverweise (Links zu offiziellen Seiten)
   → Verwandte Fragen (andere Fragen zum Thema)
   → Zeitbezug (Wann war das? Wie aktuell ist es?)
   ↓
5. User entscheidet: Nächste Frage oder Vertiefung lesen?
```

**Visual Design:**
- Größeres Kontext-Feld unterhalb der Frage
- Tabs für "Erklärung | Quellen | Ähnliche Fragen"
- Zurück-Button um Quiz fortzusetzen
- "Speichern" für Lesezeichen-Funktion

---

## 4. Vertiefungsmodule (Deep Learning)

Diese sind **innerhalb des Lernmodus** zugänglich:

### 4.1 Kontext-Tab
**Was:** Historischer, politischer, gesellschaftlicher Hintergrund

**Beispiel:**
```
Frage: Welcher Rechercheverbund berichtete über das Potsdamer Treffen?

Antwort: Correctiv

Kontext:
Im Januar 2024 veröffentlichte das Investigativteam von Correctiv 
eine bahnbrechende Recherche über ein Treffen führender Rechtsextremisten 
in Potsdam. Die Recherche löste bundesweit massive Proteste und 
gesellschaftliche Debatten aus – ein gutes Beispiel für die Rolle 
moderner Investigativjournalismus in einer Demokratie.

Warum ist das DJS-relevant?
→ Zeigt aktuelle Recherche-Excellence
→ Beutet journalistische Vertragung ab
→ Test für Nachrichten-Kompetenz
```

### 4.2 Quellen-Tab
**Was:** Offizielle Quellenverweise

**Beispiel:**
```
Offizielle Quelle: https://correctiv.org/...
Verifizierungsstatus: Offiziell von DJS bestätigt
Weitere Lektüre: "Recherche-Standards moderner Journalismus"
```

### 4.3 Ähnliche Fragen-Tab
**Was:** Andere Fragen zum selben Themengebiet

**Beispiel:**
```
Du möchtest mehr zu "Investigativrecherche" lernen?

→ Wer gründete Netzwerk Recherche?
→ Welche investigativen Projekte gab es 2024?
→ Was ist der Unterschied zwischen Correctiv und anderen Verbünden?
```

---

## 5. Dashboard & Fortschrittsmanagement

### 5.1 Oberfläche

**Top:** Fortschrittsstatistiken
- Gesamtfortschritt (68% von 85%)
- Zielmarke & Tage bis Prüfung
- Warnung bei schwachen Bereichen

**Mitte:** Empfohlene Aufgaben für heute
- 3–5 personalisierte Fragen basierend auf Spaced Repetition
- "Jetzt trainieren" Button für schnelles Start

**Unten:** Kategorien-Übersicht
```
Internationale Politik:    8/10  ████████░░
Deutsche Politik:         9/10  █████████░
Wirtschaft:              4/8   ████░░░░░░
Kultur:                  2/6   ██░░░░░░░░
Sport:                   3/5   ███░░░░░░░
```

### 5.2 Spaced Repetition Engine

**Algorithmus:**
```
WHEN user opens app:
  1. Load all answered questions
  2. Calculate "due_date" für jede Frage:
     due_date = last_answered + interval
  3. Filter: nur Fragen wo today >= due_date
  4. Sortiere nach: interval DESC (schwache zuerst)
  5. Show top 5–10 Fragen als "Heute empfohlen"
```

**Interval-Berechnung:**
```
if answer == correct:
  new_interval = old_interval * 2.5  // exponentielles Wachstum
else:
  new_interval = 10 minutes           // zurücksetzen
```

---

## 6. Gamifizierung & Motivation

### 6.1 XP-System

**Basis-Punkte:**
- Richtige Antwort (schnell): +50 XP
- Richtige Antwort (Lernmodus): +60 XP
- Falsche Antwort: -10 XP
- Überspringen: 0 XP

**Bonuspunkte:**
- 5er Streak: +25 XP
- 10er Streak: +50 XP
- Täglich 5+ Fragen: +100 XP Tages-Bonus
- Wöchentlich 50+ Fragen: +500 XP Wochen-Bonus

### 6.2 Streak-System

**Mechanik:**
- Zähle konsekutive Tage mit mindestens 1 Frage
- Zeige 🔥 Icon mit Zahl
- Warnung wenn Streak morgen in Gefahr ist
- Monatliche Achievements ("30-Tage-Streak!")

### 6.3 Kategorie-Badges

Für jede Kategorie:
```
10% complete:  Bronze
25% complete:  Silver
50% complete:  Gold
75% complete:  Platinum
100% complete: Diamond ⭐
```

---

## 7. Content-Verwaltung & Updates

### 7.1 JSON-basierte Content-Struktur

```json
{
  "id": "djs2024sc001",
  "year": 2024,
  "type": "singlechoice",
  "category": "Internationale Politik",
  "subcategory": "Investigativrecherche Rechtsextremismus",
  "difficulty": "mittel",
  "question": "Welcher Rechercheverbund berichtete 2024 über das Potsdamer Treffen?",
  "options": [
    "Rechercheverbund NDR, WDR und SZ",
    "Netzwerk Recherche",
    "Paper Trail Media",
    "Correctiv"
  ],
  "correctAnswers": ["Correctiv"],
  "explanation": "Correctiv veröffentlichte die Recherche über das Potsdamer Treffen.",
  "context": "Im Januar 2024 veröffentlichte Correctiv...",
  "sources": [
    { "title": "Correctiv Originalrecherche", "url": "https://correctiv.org/..." },
    { "title": "Reporter ohne Grenzen", "url": "https://rsf.org/..." }
  ],
  "relatedQuestions": ["djs2023sc005", "djs2024mc003"],
  "tags": ["Deutschland", "Medien", "Rechtsextremismus", "2024"],
  "verificationStatus": "offiziell DJS"
}
```

### 7.2 Update-Mechanismus

**Für Entwickler/Admin:**

```
1. Neue Kategorie hinzufügen:
   → JSON-Datei in /categories/neue_kategorie.json
   → Admin-Panel: "Kategorien importieren"
   → Live nach Bestätigung

2. Neue Fragen hinzufügen:
   → questions.json erweitern
   → Validierung (alle Felder vorhanden?)
   → "Kategorisieren" Dialog
   → Test-Mode vor Live

3. Neue Level hinzufügen:
   → Nur im Code, aber einfach
   → z.B. Level 3: "Prüfungsmodus" (100 Fragen, 90 Min)
```

### 7.3 Versioning

```
content/
├── v1.0/
│   ├── questions.json
│   └── categories.json
├── v1.1/
│   ├── questions.json (+ 50 neue Fragen)
│   └── categories.json (+ Kultur erweitert)
└── v2.0/
    ├── questions.json (+ Level 3: Prüfungsmodus)
    └── categories.json (neue Struktur)
```

---

## 8. Technische Architektur

### 8.1 Tech-Stack

**Frontend:**
- React (Komponenten-basiert)
- TypeScript (Typsicherheit)
- Tailwind CSS (Styling)
- Local Storage (Datenspeicherung)

**Daten:**
- JSON-basiert (kein Backend nötig für MVP)
- localStorage für User Progress
- Optional später: Firebase/Supabase für Cloud-Sync

**Deployment:**
- Claude Code (für Rapid Prototyping)
- Später: Vercel/Netlify (static site)
- Optional: Custom Domain

### 8.2 Komponenten-Struktur

```
App/
├── pages/
│   ├── Dashboard.tsx
│   ├── QuizMode.tsx
│   ├── LearningMode.tsx
│   ├── Statistics.tsx
│   └── Admin.tsx
├── components/
│   ├── QuestionCard.tsx
│   ├── ProgressBar.tsx
│   ├── StreakCounter.tsx
│   ├── ExplanationPanel.tsx
│   ├── ContextPanel.tsx
│   ├── SourcesPanel.tsx
│   └── RelatedQuestionsPanel.tsx
├── hooks/
│   ├── useSpacedRepetition.ts
│   ├── useProgress.ts
│   ├── useGameState.ts
│   └── useLocalStorage.ts
├── data/
│   ├── questions.json
│   ├── categories.json
│   └── config.json
└── utils/
    ├── validators.ts
    ├── algorithms.ts
    └── formatters.ts
```

---

## 9. Fragetypen (Implementierung)

### 9.1 Single Choice
```
Frage: Welcher...?
Optionen: A, B, C, D
Antwort: Eine Option
```

### 9.2 Multiple Response
```
Frage: Welche der folgenden...?
Optionen: A, B, C, D, E
Antwort: Mehrere Optionen möglich
```

### 9.3 Lückensätze (Cloze)
```
Frage: "Die Hauptstadt von ___ ist Paris"
Input: Text eingeben oder Dropdown wählen
Antwort: Frankreich
```

### 9.4 Matching (Zuordnung)
```
Frage: Ordne Personen ihren Rollen zu
Links:   Christian Lindner, Friedrich Merz, ...
Rechts:  FDP-Chef, CDU/CSU-Chef, ...
Antwort: Mapping
```

### 9.5 Karten
```
Frage: Markiere Myanmar und Nachbarstaaten auf der Karte
Interaction: Klickbare Landkarte
Antwort: Korrekte Länder erkannt
```

---

## 10. User Flow (gesamt)

```
START
 │
 ├─→ DASHBOARD
 │   • Sehe Fortschritt & Streaks
 │   • Drücke "Jetzt trainieren"
 │   │
 │   ├─→ QUIZ-MODUS (Level 1)
 │   │   • Schnelle Routine
 │   │   • 5–10 Fragen in 5 Min
 │   │   • Zurück zu Dashboard
 │   │
 │   └─→ LERNMODUS (Level 2)
 │       • Tiefere Fragen
 │       • Klicke "Erklärung"
 │       │
 │       ├─→ Kontext-Tab
 │       │   • Lese Hintergrund
 │       │
 │       ├─→ Quellen-Tab
 │       │   • Clicke Quellenlinks
 │       │
 │       └─→ Ähnliche-Fragen-Tab
 │           • Siehe verwandte Themen
 │
 ├─→ STATISTIKEN
 │   • Sehe Fehler-Analyse
 │   • Identifiziere schwache Bereiche
 │   • Fokussiere nächstes Lernen
 │
 └─→ ADMIN/UPDATE
     • Lade neue Kategorien
     • Importiere Fragen
     • Konfiguriere Level
```

---

## 11. MVP vs. Zukunft

### MVP (Phase 1: 4 Wochen)
- ✅ Dashboard mit Fortschritt
- ✅ Quiz-Modus (Level 1)
- ✅ Lernmodus mit Erklärungen (Level 2)
- ✅ Gamification (XP, Streaks, Badges)
- ✅ Spaced Repetition
- ✅ Admin-Panel für Content-Updates
- ✅ localStorage Persistierung

### Phase 2 (Zukunft)
- Optional: Cloud-Sync (Firebase)
- Optional: Bildertest-Modul
- Optional: Prüfungsmodus (100 Fragen, 90 Min, Zeitlimit)
- Optional: Kollaboratives Lernen (Freunde hinzufügen)
- Optional: Tägliche Newsletter (aktuelle Nachrichten)

---

## 12. Erfolgskriterien

Ein erfolgreiches MVP:

- [ ] Alle 4 Seiten funktionstüchtig
- [ ] Mindestens 200 Fragen aus Altprüfungen
- [ ] Spaced Repetition funktioniert
- [ ] XP und Streaks trackbar
- [ ] Content-Updates möglich
- [ ] Keine externen APIs nötig (offline-ready)
- [ ] Ladezeit < 2 Sekunden
- [ ] Mobile-responsive Design
- [ ] Light/Dark Mode unterstützt

---

## 13. Nächste Schritte

1. **Phase 1: Musteranalyse** (diese Woche)
   - Analysiere alle gesammelten DJS-Tests
   - Identifiziere Fragetypen und Schwerpunkte
   - Erstelle 02_DJS_Musteranalysis_Kategorien.md

2. **Phase 2: Content-Struktur** (nächste Woche)
   - Konvertiere F&A in JSON-Format
   - Ergänze Kontext und Quellen
   - Bereite 2025/2026-Recherche vor

3. **Phase 3: MVP in Claude Code** (2–3 Wochen)
   - Baue alle UI-Komponenten
   - Integriere Spaced Repetition
   - Teste mit echten Daten

4. **Phase 4: Launch & Refinement** (1 Woche)
   - User-Testing
   - Performance-Optimierung
   - Go-Live

---

## 14. Offene Fragen / Ideen

**Zu prüfen:**
- Sollen Community-Features später kommen? (Freunde, Lerngruppen)
- Wollen wir A/B-Testing für Quiz-Modi machen?
- Prüfungsmodus-Zeitmodus: 90 Min oder flexibel?
- Bilder-Test Modul parallel oder später?
- Newsletter mit aktuellen Nachrichten?

**Feedback erwünscht zu:**
- UI-Design (Farben, Layout, Icons)
- Schwierigkeitsgrad der Gamification
- Update-Frequenz für neue Inhalte
- Monetarisierung später? (kostenlos oder freemium?)

