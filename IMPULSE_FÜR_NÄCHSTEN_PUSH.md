# 🚀 IMPULSE FÜR DEN NÄCHSTEN GROSSEN PUSH — DJS-Lernplattform

**Erstellt:** 15. Mai 2026  
**Status:** Gesamtschau über Systeme, Erkenntnisse & Strategien aus anderen Projekten

---

## 📍 AUSGANGSLAGE

**Aktueller Stand:**
- 303 Fragen im aktiven Pool
- 100 freigegeben (ok) ✅
- 202 ungeprüft (dringend QA-Pass erforderlich) 🟡
- Bildertest: 10 Runden / 120 Items (Struktur fertig, Bilder noch Platzhalter) 🖼️
- Prüfung in **45 Tagen** (27. Juni 2026)

**Hürde:** Die 202 neuen Fragen brauchen einen strukturierten, reproduzierbaren QA-Prozess.

---

## 🎯 STRATEGISCHER KERNPUNKT

Nicht:
> „202 Fragen durchgehen und hoffen, dass dabei nichts schiefgeht."

Sondern:
> „Ein systematisches QA-System aufbauen, das jede Frage methodisch überprüft, dokumentiert und als freigegeben / korrigiert / blockiert markiert."

**Inspiration:** Das @Frido-Recherche-System aus anderen Projekten

---

## 💡 WICHTIGSTE ERKENNTNISSE AUS ANDEREN PROJEKTEN

### A. Aus der TAGESNOTIZ 14.05.2026 — Infrastruktur-Philosophie

> „Context is infrastructure."

Das bedeutet für DJS konkret:
- Jeden QA-Schritt dokumentieren (nicht nur Ergebnis)
- Widersprüche / Fehler sichtbar machen
- Offene Fragen notieren (nicht ignorieren)
- Quellenverifizierung als Kernprozess

**Zentrale Erkenntnis:**
Die größte Engstelle in modernen Projekten ist nicht mangelnde Intelligenz, sondern **Kontextverlust und fehlende Persistenz**.

→ Für DJS: Jede Frage muss ihre **Qualitätshistorie** haben (wer hat sie überprüft, was wurde geändert, warum).

---

### B. Aus @Frido QS-System (AGENTS/AGENT@FRIDO/)

Das @Frido-System ist ein journalistisches Recherche-, Dokumentations- und Redaktionssystem mit folgenden Kernelementen:

#### 1. **Recherche-Pyramide (Quellenhierarchie)**

Für DJS adaptiert:

| Ebene | Beispiel | Verwendung |
|---|---|---|
| **Primärquelle** | offizielle Dokumente, Gesetze, Statistiken | Grundlage für harte Fakten |
| **Sekundärquelle** | Behördenmitteilungen, Geschäftsberichte | mit Vorsicht |
| **Journalistische Quelle** | etablierte Medien, investigative Recherche | Kontext, Hinweise |
| **Fachquellen** | Studien, Verbände, NGOs | wenn Methodik klar ist |
| **Interessenquellen** | Parteien, Kampagnen, PR | nur als Position, nicht als Fakt |

**Für DJS konkret:** Jede Frage sollte ihre Quelle haben und deren **Reliability-Level** dokumentiert sein.

#### 2. **Belegstärke-Skala (A–E)**

```
A = direkt verifizierbar (Primärdokument, Statistik, Gesetz)
B = von mehreren verlässlichen Quellen bestätigt
C = eine Quelle, aber seriös und dokumentiert
D = plausibel, aber dünn belegt
E = nicht belegt / widersprüchlich
```

**Für DJS:** Jede Frage sollte eine Belegstärke haben. Fragen mit Belegstärke D/E sollten korrigiert oder blockiert werden.

#### 3. **Risiko-Klassifizierung**

```
GERING    = Sachfrage, eindeutige Antwort
MITTEL    = mehrere valide Interpretationen möglich
HOCH      = politisch/gesellschaftlich umstritten
SEHR HOCH = personenbezogen / juristisch heikel / factchecking-sensitiv
```

**Für DJS:** Besonders Fragen mit HOCH/SEHR HOCH sollten doppelt überprüft und dokumentiert werden.

#### 4. **Quellenmatrix (Standardformat)**

```md
| Frage-ID | Aussage | Kategorie | Quelle | Quellentyp | Belegstärke | Risiko | Status |
|---|---|---|---|---|---|---|---|
| F001 | Wann trat Merkel ins Amt? | Fakt | Bundestag.de | Primär | A | gering | ✅ OK |
| F002 | Schätzen Sie ein: ... | Einschätzung | SPIEGEL Analyse | Sekundär | B | mittel | 🟡 Review |
```

**Für DJS:** Diese Matrix sollte für alle 202 Fragen erstellt werden.

---

### C. Aus SNAKE on FIRE 2026 — Deployment & Iteration

**Lesson:** Versionierte Vorschauen sind essenziell.

Für DJS konkret:
- Nicht einfach die 202 Fragen freigeben, wenn QA fertig ist.
- Sondern: **QA-Versionen** dokumentieren (z.B. `v1.3-qa-batch1`, `v1.3-qa-batch2`)
- Damit jederzeit sichtbar, wann welche Frage überprüft wurde
- Und ein Rollback möglich ist, falls Fehler auftauchen

---

## 🛠️ KONKRETES QA-SYSTEM FÜR DEN NÄCHSTEN PUSH

### Phase 1: Vorbereitung (1–2 Tage)

**Aufgabe:** Masterprompts für DJS-Fragen-QA definieren

Basierend auf @Frido, aber vereinfacht für Quiz-Kontext:

```markdown
@DJS-QA-Masterprompt

Arbeite als Qualitätssicherungs-System für ein Quiz zur Deutschen Gesellschafts- und Politikgeschichte.

Prüfe jede Frage nach folgendem Standard:

1. **Faktizität:** Ist die Antwort korrekt und belegt?
2. **Quellenstand:** Kann die Frage mit einer Primärquelle oder etablierten Quelle begründet werden?
3. **Ambiguität:** Gibt es mehrere korrekte Antworten? Falls ja: reparabel?
4. **Aktualität:** Ist die Frage/Antwort noch relevant (Juni 2026)?
5. **Fairness:** Ist die Frage fair gestellt? Sind "Trick-Fragen" oder missverständliche Formulierungen vorhanden?
6. **Kategorie-Fit:** Passt die Frage zur kategorialen Einteilung?

Ausgabe je Frage:
- Status: [✅ OK / 🟡 Zu präzisieren / ❌ Sperren / 🔄 Recherche nötig]
- Gründe (prägnant)
- Vorschlag zur Verbesserung (falls nötig)
- Quellen prüfen (ja/nein)
```

### Phase 2: Batch-Weise QA (2–3 Wochen)

**Struktur:**
- 202 Fragen in **10 Batches à ~20 Fragen** aufteilen
- Batch-weise: Masterprompt nutzen + Ergebnisse dokumentieren
- Nach jedem Batch: Status-Update in `PROJEKT_STATUS.md`

**Output pro Batch:**
```md
# QA-Batch 1 (Fragen 1–20)

**Freigegeben (ok):** 15  
**Zu präzisieren (ok-präzisieren):** 2  
**Sperrung empfohlen:** 1  
**Recherche nötig:** 2

## Detailfeststellungen

### F001: [Frage]
- Status: ✅ OK
- Grund: Primärquelle verifizierbar, sachlich korrekt
- Quelle: Bundestag.de

### F002: [Frage]
- Status: 🟡 Zu präzisieren
- Grund: Ambiguitäten in der Antwortformulierung
- Vorschlag: „... statt ...  Bitte überprüfen"

### F003: [Frage]
- Status: ❌ Sperren
- Grund: Claim lässt sich nicht belegen, widersprechen etablierte Quellen
- Details: Recherche zeigt, dass ...

## Gesamtlerning
...
```

### Phase 3: Quellenverifikation (kontinuierlich)

**Aktion:**
- Für jede Frage mit Belegstärke C/D/E: Rechercheprompt nutzen
- Entweder: Quelle ergänzen (→ Belegstärke erhöhen)
- Oder: Frage als unsicher markieren / blockieren

**Tool:**
```markdown
@DJS-Recherche-Masterprompt

Überprüfe diese Quiz-Frage auf Quellenlage:

Frage: [Frage]  
Antwort: [Antwort]

Finde:
1. Primärquellen (Gesetze, Statistiken, Behördendokumente)
2. Sekundärquellen (etablierte Medien, Lexika)
3. Dokumentiere Belegstärke
4. Markiere Widersprüche

Ausgabe:
- Belegstärke: [A/B/C/D/E]
- Quellen: [...Verlinkung...]
- Empfehlung: [freigeben / korrigieren / sperren]
```

---

## 📊 METRIKEN & MONITORING

### KPI für den nächsten Push

| Metrik | Aktuell | Ziel (nach Push) |
|---|---|---|
| Fragen im Pool (gesamt) | 326 | 326+ |
| Davon freigegeben (ok) | 100 | 302+ |
| Davon ungeprüft | 202 | <10 |
| Bildertest mit echten Fotos | 0 | 120 |
| Geo-Quiz fertig | Nein | Ja |
| Quellenverifikation (%) | ~30% | 100% |

### Dokumentations-KPI

| Artefakt | Status |
|---|---|
| QA-Masterprompts definiert | → Phase 1 |
| QA-Batch-Ergebnisse dokumentiert | → Phase 2 |
| Quellenmatrix vollständig | → Phase 3 |
| Changelog aktualisiert | → kontinuierlich |
| Lernzusammenfassung pro Batch | → nach jedem Batch |

---

## 🔗 INTEGRATION MIT ANDEREN SYSTEMEN

### Memory & Archivierung

**Nutzung:** Obsidian-Modell aus TAGESNOTIZ 14.05.2026

Für DJS: Nach jedem Batch
- Snapshot: `_archive_qa-batch-N.md` speichern
- Learning: Was hat sich bewährt, wo waren Probleme?
- Memory aktualisieren: aktuelle Erkenntnisse

### Agenten-Modell

@DJS-QA Agent:
- Rolle: Qualitätssicherung für Quiz-Fragen
- Aktivierung: `@DJS-QA [Frage]` oder `@djs-qa [Frage]`
- Masterprompt: siehe Phase 1
- Ausgabeformat: strukturiert, mit Status und Gründen

### Workflow mit Cursor

**Im Projekt arbeiten:**
1. Batch-Fragen in JSON/CSV laden
2. Loop durch Masterprompt
3. Ergebnisse in Datenstruktur sammeln
4. `PROJEKT_STATUS.md` automatisch aktualisieren (Python-Script)

---

## 🎬 ROADMAP — NÄCHSTER GROSSER PUSH

### Woche 1: Setup
- [ ] Masterprompts definieren (DJS-QA, DJS-Recherche)
- [ ] 202 Fragen in 10 Batches organisieren
- [ ] QA-Ausgabe-Template erstellen

### Woche 2–3: Massive Parallelisierung
- [ ] QA-Batches 1–5 durcharbeiten (~100 Fragen)
- [ ] Pro Batch: 2–3 Stunden durchschnittlich
- [ ] Tägliche Status-Updates
- [ ] Learning-Notizen pro Batch sammeln

### Woche 4: Recherche & Verifikation
- [ ] Fragen mit unklaren Quellen recherchieren
- [ ] Quellenmatrix komplettieren
- [ ] Hochrisiko-Fragen doppelt überprüfen

### Woche 5: Bilder & Zusatzmodule
- [ ] Wikimedia-Bilder für Bildertest beschaffen + integrieren
- [ ] Geo-Quiz-Modul vorbereiten
- [ ] Historische Rubrik aufbauen

### Woche 6: Finale Tests
- [ ] Vollständiger Durchgang durchs App
- [ ] Quellencheck final
- [ ] Performance-Test

---

## 🎓 LEARNINGS ZU METHODIK

### Was bewährt sich laut anderen Projekten?

1. **Dokumentation vor Aktion**
   - Bevor 200 Fragen überprüft werden: Methodik schriftlich festlegen
   - Sonst: Inkonsistenzen nach 50 Fragen

2. **Batches statt Marathon**
   - 20 Fragen parallel überprüfen ist besser als 200 Linear
   - Batch-Lerneffekt (wird in Batch 5 schneller)

3. **Quellenmatrix früh anfangen**
   - Nicht am Ende vollständig erstellen
   - Von Anfang an mitziehen (pro Frage: 5 Min)

4. **Riskio-Klassifizierung obligatorisch**
   - High-Risk-Fragen (politisch / faktenchecking-sensitiv) brauchen Doppelcheck
   - Low-Risk-Fragen (Sachfakten) können schneller freigegeben werden

5. **Memory-Update nach jedem Batch**
   - Nicht erst am Ende
   - Wissen geht sonst verloren

---

## 🚨 KRITISCHE RISIKEN & IHRE MITIGATION

| Risiko | Wahrscheinlichkeit | Mitigation |
|---|---|---|
| QA dauert länger als 5 Wochen | mittel | Parallel-Batches, 2+ Agenten |
| Widersprüchliche Quellen zu einer Frage | hoch | Recherche-Priorisierung, Quellenmatrix |
| Fragen sind faktisch unhaltbar | niedrig (bekannt gut recherchiert) | aber: Doppelcheck bei High-Risk |
| Bildertest-Fotos lassen sich nicht beschaffen | niedrig | Fallback: Stock-Fotos (Unsplash) |
| Prüfung deckt Fehler auf, die Änderungen nötig machen | hoch | **erwartbar & okay** — deshalb QA jetzt |

---

## 💻 KONKRETE TOOLS & BEFEHLE

### Python-Script für Batch-Automation

```python
# organize_batches.py
import json

fragen = load_fragen()  # 202 Fragen laden
batches = [fragen[i:i+20] for i in range(0, len(fragen), 20)]

for batch_num, batch in enumerate(batches, 1):
    batch_file = f"qa_batch_{batch_num}.json"
    save_json(batch, batch_file)
    print(f"Batch {batch_num}: {len(batch)} Fragen → {batch_file}")
```

### Monitoring-Prompt

```markdown
@DJS-Monitor

Erstelle eine aktuelle QA-Gesamtstatistik:

✅ Freigegeben: [N]
🟡 Zu präzisieren: [N]
❌ Blockiert: [N]
🔍 Recherche nötig: [N]
⏳ Noch nicht überprüft: [N]

Trends:
- durchschnittliche Review-Zeit pro Frage
- häufigste Fehlertypen
- Kategorien mit höchstem Fehleraufkommen

Nächste Aktionen:
- [...]
```

---

## 📈 SUCCESS CRITERIA FÜR DEN PUSH

**Der Push ist erfolgreich wenn:**

1. ✅ 202 Fragen überprüft & dokumentiert (Status: `ok` / `ok-präzisieren` / `archiv`)
2. ✅ Quellenmatrix für alle Fragen existiert
3. ✅ Bildertest mit 120 echten Fotos gefüllt
4. ✅ Geo-Quiz-Modul integriert
5. ✅ Prüfungssimulation / Practice-Mode funktional
6. ✅ Keine kritischen Fehler in QA erkannt
7. ✅ Alle Learning & Erkenntnisse dokumentiert

---

## 🎯 TIPP FÜR DIE ERSTE SITZUNG

**Nicht:** 202 Fragen alle durcharbeiten wollen.

**Sondern:**
1. **Tag 1:** Masterprompts schreiben & testen (2–3 Stunden)
2. **Tag 2:** Batch 1 (20 Fragen) als Pilotlauf (3 Stunden) → Learning sammeln
3. **Danach:** Batches 2–10 in optimiertem Rhythmus

Dieser Approach spart Zeit und Fehler!

---

**Dokument-Status:** Freigegeben für Implementierung  
**Nächster Schritt:** Phase 1 starten (Masterprompts definieren)  
**Geschätzter Timeline:** 5–6 Wochen bis V1.4 Release-Ready

---

*Impulsdokument erstellt von Claude Code — kombiniert Erkenntnisse aus DJS-Projekt, @Frido-QS-System, SNAKE-on-FIRE und Infrastructure-2026-Learnings.*
