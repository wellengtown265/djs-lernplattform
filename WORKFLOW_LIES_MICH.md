# So funktioniert ab heute der Workflow

**Status:** Letzte Setup-Session am 13. Mai 2026

---

## 🔧 1. Einmaliges Setup (Full Disk Access geben)

Damit Claude **dauerhaft** auf deinen Projekt-Ordner zugreifen kann, musst du ihm **einmal** die Berechtigung geben. Das dauert 60 Sekunden:

1. ⌘ + Leertaste → **„Datenschutz" tippen** → Datenschutz & Sicherheit öffnen
2. Links runterscrollen: **„Festplattenvollzugriff"** klicken
3. Du siehst eine Liste mit Apps. Wenn **Claude** schon dabei ist: einfach den Schalter daneben einschalten ✅
4. Falls **Claude** NICHT in der Liste ist:
   - Klick auf das **+** unten links
   - In den Programme-Ordner gehen: **`/Applications`**
   - **`Claude.app`** auswählen → „Öffnen"
   - Schalter daneben einschalten ✅
5. **WICHTIG:** Claude **komplett beenden** (⌘ + Q, NICHT nur Fenster schließen) und neu öffnen

→ Danach kann Claude **alle** Dateien in deinem Projekt-Ordner direkt lesen. Kein Bridge-Quatsch mehr nötig.

> **Test:** Nach dem Neustart frag mich einfach „kannst du jetzt auf IMPORT zugreifen?" — ich teste sofort.

---

## 📁 2. Der IMPORT-Workflow ab jetzt

```
Lernen.AUFNAHMEPRÜFUNG DJS 2026/
├── IMPORT/                          ← HIER LEGST DU ALLES REIN
│   ├── neue_fragen.md
│   ├── foto.jpg
│   ├── irgendwas.pdf
│   └── ...
│
├── ▶ DJS App starten.command        ← Doppelklick = App starten
├── ▶ Session-Ende.command           ← Doppelklick am Ende der Session
│
├── LIES_MICH.md                     ← Diese Datei
├── PROJEKT_STATUS.md                ← Wo stehen wir? (auto-aktualisiert)
└── ...
```

**So läuft jede Session ab:**

1. Du wirfst Dateien in `IMPORT/` (jederzeit, parallel zu unserer Arbeit)
2. Du sagst mir: „**schau mal in IMPORT**"
3. Ich lese, analysiere, integriere — alles direkt aus dem IMPORT-Ordner
4. Am Session-Ende: Doppelklick auf `▶ Session-Ende.command`
   → MDs werden aktualisiert, IMPORT-Inhalte archiviert nach `_archive_imports/2026-MM-DD/`

---

## 📚 3. Wo finde ich was? (Anfänger-Übersicht)

| Wenn du wissen willst … | Schau in: |
|---|---|
| **Was ist aktueller Stand?** | `PROJEKT_STATUS.md` (oben im Hauptordner) |
| **Welche Fragen-Änderungen gab es?** | `CHANGELOG_FRAGEN.md` |
| **Welche Fragen sind drin? Alle anzeigen?** | `ALLE_FRAGEN_UND_ANTWORTEN.md` |
| **Welche Fragen fielen raus warum?** | `RAUS_FRAGEN_ALT_AUDIT.md` |
| **Was ist der Bildertest?** | `BILDERTEST_2026_KONZEPT.md` |
| **Welche Bildquellen darf ich nutzen?** | `BILDERTEST_2026_BILDQUELLEN.md` |
| **Wie sieht das alte DJS-Bildertest aus?** | `BILDERTESTS_ALT_ANALYSE.md` |
| **Wie funktioniert der 3-Chat-Workflow?** | `ARBEITSANLEITUNG.md` |

→ Alle MD-Dateien lassen sich mit **TextEdit** oder **Markdown-Viewer** (z. B. Marked, Typora) lesen.
→ Im Finder rechts-klick → „Öffnen mit" → wähle deinen Lieblings-Editor und „Immer öffnen mit".

---

## ⚙️ 4. Was passiert in „Session-Ende"?

Wenn du am Ende doppelklickst auf `▶ Session-Ende.command`, läuft folgendes ab (vollautomatisch):

1. **PROJEKT_STATUS.md** aktualisieren — neuer Stand, Versionsnummer, was wurde gemacht
2. **ALLE_FRAGEN_UND_ANTWORTEN.md** komplett neu generieren — aus aktueller `questions.json`
3. **CHANGELOG_FRAGEN.md** ergänzen — neuer Eintrag mit Datum, falls Fragen geändert
4. **IMPORT/** leeren → nach `_archive_imports/2026-MM-DD_HH-MM/` verschieben
5. **Lint** über alle Fragen laufen lassen → Fehler/Warnungen anzeigen
6. **Quick-Stats** in Terminal anzeigen: „X Fragen, Y ungeprüft, Z archiviert"

→ Du siehst sofort, ob alles ok ist oder ob noch was zu tun ist.

---

## 🆘 5. Was, wenn was nicht geht?

| Problem | Lösung |
|---|---|
| „Permission denied" beim Lesen von IMPORT | Full Disk Access geben (Schritt 1 oben) |
| App startet nicht | Im Terminal: `cd app && npm install && npm run dev` |
| Lint zeigt Fehler | Lass dich von mir guiden — sag „lint fehler" |
| Etwas Wichtiges versehentlich gelöscht | Schau in `_backups/` — da sind `*.bak.YYYYMMDD_HHMM` Files |
| Komplett neu starten? | `_archive_imports/` und alles, was du wegwerfen willst, manuell löschen |

---

## 📝 6. Was DU am Ende einer Session machst

Empfohlener Ablauf:

1. ✅ Im Chat sagen: „**Session-Ende**" oder „**komm zum Schluss**"
2. ✅ Ich fasse zusammen, was wir gemacht haben, prüfe Lint
3. ✅ Du schaust kurz drüber, ob alles passt
4. ✅ Doppelklick `▶ Session-Ende.command`
5. ✅ MDs sind aktualisiert, du kannst Claude beenden, schlafen gehen.

---

*Stand: 13. Mai 2026 — Erstes Setup nach IMPORT-Bridge-Klärung.*
