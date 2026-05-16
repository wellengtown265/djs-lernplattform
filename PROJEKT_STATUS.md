# 🎯 PROJEKT_STATUS

**Letzte Aktualisierung:** 2026-05-16 (auto)
**App-Version:** 1.4.0-dev
**Prüfungsdatum:** 27. Juni 2026 (noch **42 Tage**)

---

## 📊 Wo stehen wir?

### Fragenpool

| Status | Anzahl |
|---|---:|
| 🟢 **Im aktiven Pool (spielbar)** | **303** |
|    ✅ Freigegeben (`ok`) | 100 |
|    🟡 Ungeprüft (`ungeprüft`) | 202 |
|    🔵 Präzisieren (`ok-präzisieren`) | 1 |
| 📦 Archiviert / blockiert | 23 |
|    📦 DJS-2025-Doppler (`archiv-djs-alt`) | 23 |
|    🟠 Korrekturbedarf | 0 |
| **Total** | **326** |

### Bildertest

- **10 Runden**, **120 Items** geladen
- ✅ **95 / 120 Items** mit echten CC-Fotos (79%) — Wikimedia Commons
- 25 verbleibende Items: Platzhalter (weniger prüfungsrelevante Events)
- Credit-Banner unter jedem Foto, Pro-Modus: Blur-Effekt bis Auflösung

### GeoQuiz

- **93 Fragen** gesamt — alle spielbar (vorher: 71)
- 22 neue Karten-Fragen (map-interactive) mit react-simple-maps
- 9 Matching-Fragen mit interaktivem Pair-UI
- 3 Kartenmodi: Deutschland (Bundesländer), Europa, Welt
- Korrekte Regionen nach Auflösung in DJS-Rot hervorgehoben

### Kategorien

| Kategorie | Fragen |
|---|---:|
| Internationale Politik | 129 |
| Deutsche Politik | 56 |
| Kultur & Medien | 31 |
| Wissenschaft & Technik | 27 |
| Wirtschaft & Finanzen | 25 |
| Sport | 24 |
| Geografie & Karten | 18 |
| Gesellschaft & Recht | 16 |

---

## 🛣️ Roadmap

### V1.3 (heute, ✅ erledigt)
- 202 neue Fragen importiert (Status `ungeprüft`)
- 23 alte Fragen archiviert (DJS-2025-Doppler)
- Bildertest-Modul gebaut (10 Runden / 120 Items, Bilder pending)
- IMPORT-Workflow + Session-Ende-Automatik

### V1.4 (✅ 16.05.2026 — heute fertiggestellt)
- ✅ Bildertest: 95/120 Items mit echten CC-Fotos (Wikimedia Commons)
- ✅ BildertestCard v2: großes Foto, Blur-Effekt (Pro), Credit-Banner, MC + Freitext
- ✅ BildertestMode Startscreen: Vorschaubilder, modernes Dark-Design
- ✅ GeoQuiz V1.4: alle 93 Fragen spielbar (war: 71)
- ✅ map-interactive: react-simple-maps mit DE/EU/Welt-Karten, Auflösung in DJS-Rot
- ✅ Matching-UI: interaktive Zuordnungspaare
- ✅ App baut fehlerfrei (TypeScript, kein Fehler)

### V2.0 (vor Prüfung — Juni 2026)
- QA-Pass: 202 ungeprüfte Fragen → `ok` (10 Batches à 20)
- Quellenmatrix für alle Fragen erstellen
- 25 fehlende Bildertest-Fotos nachbeschaffen
- Prüfungssimulation / Practice-Mode (60 Min, 50 Fragen)
- Letzte Aktualisierungsrunde (Juni 2026)

---

## 📁 Wichtige Dateien (kurzer Klick-Guide)

| Worauf klicken? | Was passiert? |
|---|---|
| `▶ DJS App starten.command` | Startet die App im Browser |
| `▶ Session-Ende.command` | Räumt auf, aktualisiert MDs |
| `LIES_MICH.md` | Anfänger-Übersicht, wie alles funktioniert |
| `ALLE_FRAGEN_UND_ANTWORTEN.md` | Vollständige Fragen-Liste (auto-generiert) |
| `CHANGELOG_FRAGEN_V1.3.md` | Was wurde wann warum geändert |

---

*Auto-generiert von session_end.py · nicht manuell editieren — Änderungen gehen verloren.*