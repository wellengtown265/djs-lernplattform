# CHECK_ALLE_FRAGEN_ANTWORTEN_V1.3 BETA

**Prüfstand:** 2026-05-13  |  **Input:** `ALLE_FRAGEN_UND_ANTWORTEN.md`  |  **Datenquelle laut Datei:** `app/src/data/questions.json`

> Wichtig: Gewollte Variantencluster wurden **nicht** als Duplikatfehler bewertet. Sie wurden nur dann beanstandet, wenn Fragegrammatik, Antwortfeld, Erklärung oder Scoring-Logik auseinanderlaufen.

## 1. Executive Summary

- **Anzahl geprüfter Fragen:** 326
- **Input-Kategorien:** 8 Kategorien
- **Variantencluster:** 101 Basisfragen mit jeweils zwei Kurzantwort-Varianten
- **Doppelte IDs:** 0
- **Fehlende Antwortfelder:** 0
- **Kritische Korrekturen HOCH:** 8
- **Aktualisieren / Rechts- oder Zeitstandsrisiken:** 7

**Kurzbefund:** Der Katalog ist strukturell gut inventarisierbar und die meisten Basisfakten sind plausibel. Die größten Risiken liegen nicht in den gewollten Varianten selbst, sondern in **Antwortfeldern, die aus der Basisfrage übernommen wurden und bei einzelnen Kurzantwort-Varianten grammatisch nicht mehr exakt passen**. Dazu kommen wenige **Zeitstandsrisiken** bei AfD-Verfassungsschutz, AI Act, iberischem Blackout und Klimaziel-/UBA-Formulierungen.

**Sofort vor Veröffentlichung ändern:**
- `djs2026dp-neu-028` – Antwort auf „wehrhafte Demokratie“ verkürzen.
- `djs2026ip-neu-060` – Antwort auf „Vereinigte Arabische Emirate“ verkürzen.
- `djs2026ip-neu-076` – Antwort auf „Nordirland“ ändern.
- `djs2026ip-neu-104` – Antwort auf „Hohe Vertreterin der EU für Außen- und Sicherheitspolitik“ ändern.
- `djs2026ip-neu-106` – Antwort auf „Europäischer Rat“ ändern.
- `djs2026mc-neu-146` – Antwort auf „Arc de Triomphe“ ändern.
- `djs2026mc-neu-148` – Antwort auf „Jaegers Grenze“ ändern.
- `djs2026mc-neu-150` – Antwort auf „Echo“ bzw. „Echo-Musikpreis“ ändern.

## 2. Methodik

Geprüft wurde dreistufig:

1. **Daten-/Codeebene:** IDs, Kategorien, Typen, Antwortfelder, Optionen, Archivstatus, Variantencluster, Copy-Paste-Risiken.
2. **Faktenebene:** Plausibilität und Widerspruchsfreiheit zwischen Frage, Antwort und Erklärung.
3. **Quellen-/Zeitstandsebene:** Vertiefter Gegencheck für aktuelle/politisch/rechtlich sensible Themen gegen Primärquellen und faktennahe Medien-/Agenturquellen.

Die Prüfung ist als Beta-QA zu verstehen: Sie liefert eine vollständige Frage-für-Frage-Bewertung und konkrete Code-To-dos. Für eine finale Produktionsfreigabe sollten die verlinkten Quellen anschließend als maschinenlesbare `sources[]` in den Originaldatensatz übernommen werden.

## 3. Struktur- und Codeprüfung

| Prüffeld | Ergebnis | Bewertung |
|---|---:|---|
| Fragen gesamt | 326 | passt zur Input-Datei |
| Kategorie: Deutsche Politik | 56 | inventarisiert |
| Kategorie: Internationale Politik | 129 | inventarisiert |
| Kategorie: Wirtschaft & Finanzen | 25 | inventarisiert |
| Kategorie: Gesellschaft & Recht | 16 | inventarisiert |
| Kategorie: Wissenschaft & Technik | 27 | inventarisiert |
| Kategorie: Sport | 24 | inventarisiert |
| Kategorie: Kultur & Medien | 31 | inventarisiert |
| Kategorie: Geografie & Karten | 18 | inventarisiert |
| IDs eindeutig | ja | keine doppelten IDs gefunden |
| Fehlende Antworten | 0 | keine |
| Typen | singlechoice: 104, multiplechoice: 15, matching: 5, kurzantwort: 202 | Kurzantwort-Varianten bewusst akzeptieren |
| Variantencluster | 101 | gewollt; als `variantOf`/`clusterId` modellieren |
| Quellenfelder | 0 explizite strukturierte Quellenfelder erkannt | **strukturelle Quellenlücke**: `sources[]`, `sourceStatus`, `verifiedAt` ergänzen |
| Review-Notizen | vorhanden, aber Freitext | in strukturierte Felder migrieren: `reviewStatus`, `reviewNote`, `reviewedAt` |
| Archivstatus | vorhanden als Textstatus | app-seitig harte Filterlogik nötig: active vs archiveOnly |

### Empfohlenes Datenmodell für V1.4

```ts
type Question = {
  id: string;
  variantOf?: string;        // Basisfrage, falls Kurzantwort-Variante
  clusterId?: string;        // stabiler Kontextcluster
  status: "active" | "archiveOnly" | "draft" | "needsReview";
  qaStatus?: "OK" | "OK_MIT_HINWEIS" | "AKTUALISIEREN" | "TEILWEISE_FALSCH" | "FALSCH" | "CODE_PROBLEM";
  verifiedAt?: string;       // ISO-Datum
  validAsOf?: string;        // fachlicher Zeitstand
  question: string;
  type: "singlechoice" | "multiplechoice" | "matching" | "kurzantwort";
  answer: string | string[] | Record<string,string>;
  answerAliases?: string[];  // für Kurzantworten zwingend
  options?: string[];
  explanation: string;
  sources: { title: string; url: string; publisher: string; checkedAt: string }[];
};
```

## 4. Gesamtstatistik

| Kategorie | Anzahl | Hinweise |
|---|---:|---|
| OK | 90 | keine harte Abweichung gefunden |
| OK_MIT_HINWEIS | 221 | meist Varianten/Archiv/Quellenfeld/Präzisierung |
| UNKLAR | 0 | nicht oder nicht relevant vergeben |
| QUELLE_FEHLT | 0 | nicht oder nicht relevant vergeben |
| TEILWEISE_FALSCH | 8 | Antwortfeld passt nicht exakt zur Fragegrammatik |
| FALSCH | 0 | nicht oder nicht relevant vergeben |
| DOPPELT | 0 | nicht oder nicht relevant vergeben |
| CODE_PROBLEM | 0 | nicht oder nicht relevant vergeben |
| AKTUALISIEREN | 7 | Rechts-/Zeitstand in Erklärung oder Frage präzisieren |
| ENTFERNEN_ODER_NEU_BAUEN | 0 | nicht oder nicht relevant vergeben |

### Statistik nach Oberkategorie

| Oberkategorie | OK | OK_MIT_HINWEIS | TEILWEISE_FALSCH | AKTUALISIEREN | Sonstige |
|---|---:|---:|---:|---:|---:|
| Deutsche Politik | 16 | 36 | 1 | 3 | 0 |
| Geografie & Karten | 3 | 15 | 0 | 0 | 0 |
| Gesellschaft & Recht | 7 | 9 | 0 | 0 | 0 |
| Internationale Politik | 33 | 88 | 4 | 4 | 0 |
| Kultur & Medien | 11 | 17 | 3 | 0 | 0 |
| Sport | 5 | 19 | 0 | 0 | 0 |
| Wirtschaft & Finanzen | 9 | 16 | 0 | 0 | 0 |
| Wissenschaft & Technik | 6 | 21 | 0 | 0 | 0 |

## 5. Kritische Befunde zuerst

| ID | Frage | Status | Priorität | Problem | Korrekturvorschlag | Quellen-/Prüfhinweis |
|---|---|---|---|---|---|---|
| `djs2026dp-neu-028` | Der COMPACT-Fall wurde zum Testfall zwischen Art. 5 GG und welchem demokratischen Schutzkonzept? | TEILWEISE_FALSCH | HOCH | Die Frage fragt nach dem demokratischen Schutzkonzept neben Art. 5 GG. Die hinterlegte Antwort enthält zusätzlich „Pressefreiheit“, obwohl Art. 5 GG bereits Presse-/Meinungsfreiheit meint. | Antwort auf „wehrhafte Demokratie“ verkürzen. | BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG |
| `djs2026ip-neu-060` | Die BRICS-Erweiterung 2024 umfasste unter anderem Ägypten und welches Golf-Land? | TEILWEISE_FALSCH | HOCH | Die Frage fragt: „Ägypten und welches Golf-Land?“ Die hinterlegte Antwort nennt erneut Ägypten und die VAE. | Antwort auf „Vereinigte Arabische Emirate“ verkürzen. | Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa |
| `djs2026ip-neu-076` | Die Backstop-Debatte drehte sich um die offene Grenze zwischen der Republik Irland und welchem britischen Landesteil? | TEILWEISE_FALSCH | HOCH | Die Frage fragt nach dem britischen Landesteil. Die hinterlegte Antwort beschreibt dagegen das zu verhindernde Problem. | Antwort auf „Nordirland“ ändern. | Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa |
| `djs2026ip-neu-104` | Die frühere estnische Premierministerin übernahm 2024 welches EU-Außenamt? | TEILWEISE_FALSCH | HOCH | Die Frage fragt nach dem Amt, nicht nach der Person. Hinterlegt ist „Kaja Kallas“. | Antwort auf „Hohe Vertreterin der EU für Außen- und Sicherheitspolitik“ ändern. | Rat der EU; EU-Kommission |
| `djs2026ip-neu-106` | Der frühere portugiesische Premier leitet seit Dezember 2024 welche EU-Institution? | TEILWEISE_FALSCH | HOCH | Die Frage fragt nach der EU-Institution, nicht nach der Person. Hinterlegt ist „António Costa“. | Antwort auf „Europäischer Rat“ ändern. | Rat der EU; EU-Kommission |
| `djs2026mc-neu-146` | Das Pariser Monument, das 2021 temporär verhüllt wurde, war welches Bauwerk? | TEILWEISE_FALSCH | HOCH | Die Frage fragt nach dem Bauwerk. Hinterlegt ist das Projekt „Verhüllung des Arc de Triomphe“. | Antwort auf „Arc de Triomphe“ ändern. | Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa |
| `djs2026mc-neu-148` | Juan Moreno enttarnte Fälschungen seines Kollegen bei welcher Reportage? | TEILWEISE_FALSCH | HOCH | Die Frage fragt nur nach der Reportage. Hinterlegt ist Reportage plus Aufdecker. | Antwort auf „Jaegers Grenze“ ändern. | Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa |
| `djs2026mc-neu-150` | Die Auszeichnung eines Rap-Albums mit antisemitisch kritisierten Zeilen führte zum Ende welchen Musikpreises? | TEILWEISE_FALSCH | HOCH | Die Frage fragt nach dem Musikpreis. Hinterlegt ist die Begründung für das Ende des Preises. | Antwort auf „Echo“ bzw. „Echo-Musikpreis“ ändern. | Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa |
| `djs2025dp010` | Als was stufte das Bundesamt für Verfassungsschutz die AfD am 2. Mai 2025 ein? | AKTUALISIEREN | MITTEL | Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten. | Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“ | BfV; VG Köln; ggf. OVG Münster |
| `djs2026dp-neu-023` | Welche Beobachtungsstufe verwendete das Bundesamt für Verfassungsschutz 2025 für die AfD? | AKTUALISIEREN | MITTEL | Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten. | Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“ | BfV; VG Köln; ggf. OVG Münster |
| `djs2026dp-neu-024` | Wie lautet der präzise verfassungsschutzrechtliche Begriff für die AfD-Einstufung vom 2. Mai 2025? | AKTUALISIEREN | MITTEL | Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten. | Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“ | BfV; VG Köln; ggf. OVG Münster |
| `djs2025sc008` | In welchen Ländern führte ein Blackout im April 2025 fast einen ganzen Tag lang zu massivem Stromausfall? | AKTUALISIEREN | MITTEL | Die Erklärung sagt, die genaue Ursache sei zunächst unklar. Das war für die unmittelbare Lage korrekt, ist aber nach ENTSO-E-Untersuchung zu aktualisieren. | Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück. | ENTSO-E Abschluss-/Untersuchungsseite |
| `djs2026ip-neu-093` | Ab welchem Datum soll der EU AI Act grundsätzlich vollständig anwendbar sein? | AKTUALISIEREN | MITTEL | „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln. | Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“ | EU Digital Strategy; EU-Kommission; EU-Amtsblatt |
| `djs2026ip-neu-094` | Die gestaffelte Umsetzung des AI Act erreicht ihre Gesamtgeltung an welchem Datum? | AKTUALISIEREN | MITTEL | „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln. | Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“ | EU Digital Strategy; EU-Kommission; EU-Amtsblatt |
| `djs2026eu002` | Ab welchem Datum soll der EU AI Act vollständig anwendbar sein? | AKTUALISIEREN | MITTEL | „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln. | Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“ | EU Digital Strategy; EU-Kommission; EU-Amtsblatt |

## 6. Vollständiger Fragencheck

### Frage-ID: `djs2018sc001`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Wer sagte: 'Es ist besser, nicht zu regieren, als falsch zu regieren'?  
**Antwortoptionen:** Angela Merkel, Armin Laschet, Christian Lindner, Olaf Scholz  
**Markierte richtige Antwort:** Christian Lindner  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  

---

### Frage-ID: `djs2024sc004`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche Bundestagsfraktion löste sich 2023 auf?  
**Antwortoptionen:** Die Grünen, Die FDP, Die Linke, Das BSW  
**Markierte richtige Antwort:** Die Linke  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025dp001`

**Kategorie:** Deutsche Politik  
**Originalfrage:** An welchem Datum fand die Bundestagswahl 2025 statt?  
**Antwortoptionen:** 23. Januar 2025, 23. Februar 2025, 9. März 2025, 14. April 2025  
**Markierte richtige Antwort:** 23. Februar 2025  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  

---

### Frage-ID: `djs2025dp002`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche Partei wurde bei der Bundestagswahl 2025 stärkste Kraft?  
**Antwortoptionen:** SPD, AfD, CDU/CSU, Grüne  
**Markierte richtige Antwort:** CDU/CSU  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  

---

### Frage-ID: `djs2025dp003`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche Partei wurde bei der Bundestagswahl 2025 zweitstärkste Kraft?  
**Antwortoptionen:** SPD, AfD, Grüne, FDP  
**Markierte richtige Antwort:** AfD  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  

---

### Frage-ID: `djs2025dp005`

**Kategorie:** Deutsche Politik  
**Originalfrage:** In welchem Wahlgang wurde Friedrich Merz am 6. Mai 2025 zum Bundeskanzler gewählt?  
**Antwortoptionen:** Ersten Wahlgang, Zweiten Wahlgang, Dritten Wahlgang, Vierten Wahlgang  
**Markierte richtige Antwort:** Zweiten Wahlgang  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Deutscher Bundestag; Bundespräsident  

---

### Frage-ID: `djs2025dp006`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Wie hoch ist das 2025 beschlossene Sondervermögen für Infrastruktur und Klimaneutralität?  
**Antwortoptionen:** 200 Milliarden Euro, 350 Milliarden Euro, 500 Milliarden Euro, 800 Milliarden Euro  
**Markierte richtige Antwort:** 500 Milliarden Euro  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bundestag; bpb; BMF  

---

### Frage-ID: `djs2025dp007`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche verfassungsrechtliche Regelung wurde im März 2025 reformiert, um mehr Spielraum für Verteidigung und Investitionen zu schaffen?  
**Antwortoptionen:** Finanzverfassung, Schuldenbremse, Haushaltsgrundsätzegesetz, Stabilitäts- und Wachstumspakt  
**Markierte richtige Antwort:** Schuldenbremse  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bundestag; bpb; BMF  

---

### Frage-ID: `djs2025dp008`

**Kategorie:** Deutsche Politik  
**Originalfrage:** In welchem Land stationiert Deutschland die Brigade Litauen mit rund 5.000 Soldatinnen und Soldaten?  
**Antwortoptionen:** Polen, Estland, Litauen, Lettland  
**Markierte richtige Antwort:** Litauen  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bundestag; BMVg; NATO  

---

### Frage-ID: `djs2025dp009`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Wie hoch sind die geplanten deutschen Verteidigungsausgaben im Haushalt 2026?  
**Antwortoptionen:** 72,4 Milliarden Euro, 88,5 Milliarden Euro, 108,2 Milliarden Euro, 120,0 Milliarden Euro  
**Markierte richtige Antwort:** 108,2 Milliarden Euro  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bundestag; BMVg; NATO  

---

### Frage-ID: `djs2025dp010`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Als was stufte das Bundesamt für Verfassungsschutz die AfD am 2. Mai 2025 ein?  
**Antwortoptionen:** Verdachtsfall Rechtsextremismus, Gesichert rechtsextremistische Bestrebung, Beobachtungsobjekt, Extremistische Organisation  
**Markierte richtige Antwort:** Gesichert rechtsextremistische Bestrebung  
**Status:** `AKTUALISIEREN`  
**Priorität:** `MITTEL`  
**Prüfung:** Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.  
**Problem, falls vorhanden:** Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.  
**Korrekturvorschlag:** Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“  
**Empfohlene finale Version:** Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“  
**Quellen-/Recherchehinweis:** BfV; VG Köln; ggf. OVG Münster  

---

### Frage-ID: `djs2025dp011`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welches Gericht hob 2025 das Verbot des COMPACT-Magazins auf und machte den Fall damit zum Schlüsselthema für Pressefreiheit und wehrhafte Demokratie?  
**Antwortoptionen:** Bundesverfassungsgericht, Bundesgerichtshof, Bundesverwaltungsgericht, Oberverwaltungsgericht NRW  
**Markierte richtige Antwort:** Bundesverwaltungsgericht  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG  

---

### Frage-ID: `djs2025dp012`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche zwei Rechtsgüter stehen im Fall des COMPACT-Magazin-Verbots besonders im Konflikt?  
**Antwortoptionen:** Pressefreiheit, Religionsfreiheit, Wehrhafte Demokratie, Eigentumsrecht  
**Markierte richtige Antwort:** Pressefreiheit / Wehrhafte Demokratie  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG  

---

### Frage-ID: `djs2025dp013`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welches historische Jubiläum wurde in Deutschland am 8. Mai 2025 begangen?  
**Antwortoptionen:** 75 Jahre Grundgesetz, 80 Jahre Kriegsende (Ende des Zweiten Weltkriegs), 35 Jahre Wiedervereinigung, 30 Jahre Schengen-Abkommen  
**Markierte richtige Antwort:** 80 Jahre Kriegsende (Ende des Zweiten Weltkriegs)  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Deutscher Bundestag; Bundespräsident  

---

### Frage-ID: `djs2025dp014`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welches Jubiläum der Deutschen Einheit wurde im Oktober 2025 gefeiert?  
**Antwortoptionen:** 25 Jahre, 30 Jahre, 35 Jahre, 40 Jahre  
**Markierte richtige Antwort:** 35 Jahre  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025dp015`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche deutsche Behörde erklärte 2025, die deutschen Klimaschutzziele für 2030 seien auf Basis der aktuellen Projektionen grundsätzlich erreichbar?  
**Antwortoptionen:** Bundesministerium für Wirtschaft und Klimaschutz, Umweltbundesamt (UBA), Sachverständigenrat für Umweltfragen, Bundesministerium für Umwelt und Naturschutz  
**Markierte richtige Antwort:** Umweltbundesamt (UBA)  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.  
**Problem, falls vorhanden:** Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.  
**Korrekturvorschlag:** Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.  
**Empfohlene finale Version:** Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.  
**Quellen-/Recherchehinweis:** UBA; BMUV  

---

### Frage-ID: `djs2025match004`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Ordnen Sie die Bundesländer ihren Landesregierungen nach den Wahlen 2024/2025 und den Entwicklungen bis Frühjahr 2026 zu.  
**Antwortoptionen:** Brandenburg, Hamburg, Sachsen, Thüringen  
**Markierte richtige Antwort:** Brandenburg → SPD-CDU / Hamburg → SPD-Grüne / Sachsen → CDU-SPD-Minderheitsregierung / Thüringen → CDU-BSW-SPD  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025mc004`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Wer könnte ein AfD-Verbotsverfahren anstrengen? (Mehrere Antworten möglich)  
**Antwortoptionen:** Bundespräsident, Bundesrat, Bundestag, Bundesregierung, Bundesverfassungsgericht  
**Markierte richtige Antwort:** Bundesrat / Bundestag / Bundesregierung  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2026dp-neu-001`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche Partei verlor 2023 im Bundestag ihren Fraktionsstatus, nachdem Abgeordnete um Sahra Wagenknecht ausgetreten waren?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Die Linke  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-002`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Die Gründung des BSW führte dazu, dass eine bisherige Bundestagsfraktion nur noch als Gruppe weiterarbeiten konnte. Welche Partei war betroffen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Die Linke  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-003`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche zwei Ampel-Vorhaben standen besonders für die Koalitionsstreitigkeiten um Klima- und Sozialpolitik?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Gebäudeenergiegesetz und Kindergrundsicherung  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023mc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-004`

**Kategorie:** Deutsche Politik  
**Originalfrage:** In der Ampel-Regierung prallten Finanzierung, Klimaschutz und Sozialpolitik besonders bei welchen Reformprojekten aufeinander?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Gebäudeenergiegesetz und Kindergrundsicherung  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023mc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-005`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Wer begründete den Abbruch der Jamaika-Sondierungen mit dem Satz, nicht falsch regieren zu wollen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Christian Lindner  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2018sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-006`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Der Satz „Lieber nicht regieren als falsch regieren“ wurde 2017 zum politischen Markenzeichen welches FDP-Politikers?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Christian Lindner  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2018sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-007`

**Kategorie:** Deutsche Politik  
**Originalfrage:** An welchem Tag wurde nach dem Bruch der Ampelkoalition der 21. Deutsche Bundestag gewählt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 23. Februar 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025dp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-008`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Die vorgezogene Bundestagswahl nach Vertrauensfrage und Auflösung des Bundestags fiel auf welches Datum?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 23. Februar 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  
**Variantencluster:** Variante von `djs2025dp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-009`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche Parteiengemeinschaft lag bei der Bundestagswahl 2025 vor AfD und SPD auf Platz eins?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** CDU/CSU  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  
**Variantencluster:** Variante von `djs2025dp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-010`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Aus der vorgezogenen Bundestagswahl 2025 ging welche politische Kraft als stärkste hervor?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** CDU/CSU  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  
**Variantencluster:** Variante von `djs2025dp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-011`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche Partei erreichte bei der Bundestagswahl 2025 den zweiten Platz hinter CDU/CSU?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** AfD  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  
**Variantencluster:** Variante von `djs2025dp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-012`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Das beste Bundestagswahlergebnis ihrer Geschichte machte welche Partei 2025 zur zweitstärksten Kraft?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** AfD  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  
**Variantencluster:** Variante von `djs2025dp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-013`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Wie lautete der programmatische Titel des Koalitionsvertrags von CDU/CSU und SPD im Jahr 2025?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Verantwortung für Deutschland  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  
**Variantencluster:** Variante von `djs2025dp004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-014`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Unter welchem Titel stellten Union und SPD 2025 ihren Regierungsvertrag vor?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Verantwortung für Deutschland  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025dp004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-015`

**Kategorie:** Deutsche Politik  
**Originalfrage:** In welchem Wahlgang erhielt Friedrich Merz am 6. Mai 2025 die Kanzlermehrheit?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Zweiter Wahlgang  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Deutscher Bundestag; Bundespräsident  
**Variantencluster:** Variante von `djs2025dp005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-016`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Der erste Wahlgang scheiterte, erst danach wurde Merz gewählt: Welcher Wahlgang war entscheidend?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Zweiter Wahlgang  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Deutscher Bundestag; Bundespräsident  
**Variantencluster:** Variante von `djs2025dp005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-017`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welches Volumen hat das 2025 beschlossene Sondervermögen für Infrastruktur und Klimaneutralität?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 500 Milliarden Euro  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundestag; bpb; BMF  
**Variantencluster:** Variante von `djs2025dp006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-018`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Die Investitionsoffensive für marode Infrastruktur und Klimaneutralität wurde 2025 auf welchen Höchstbetrag angelegt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 500 Milliarden Euro  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025dp006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-019`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche im Grundgesetz verankerte Fiskalregel wurde 2025 für Verteidigung und Investitionen gelockert?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Schuldenbremse  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundestag; bpb; BMF  
**Variantencluster:** Variante von `djs2025dp007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-020`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Die Grundgesetzänderung im März 2025 betraf welches zentrale Instrument deutscher Haushaltspolitik?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Schuldenbremse  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundestag; bpb; BMF  
**Variantencluster:** Variante von `djs2025dp007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-021`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Auf welchen Betrag sollten die deutschen Verteidigungsausgaben im Haushalt 2026 steigen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 108,2 Milliarden Euro  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundestag; BMVg; NATO  
**Variantencluster:** Variante von `djs2025dp009`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-022`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Die Zeitenwende schlug sich im Haushalt 2026 in welcher geplanten Verteidigungsausgaben-Summe nieder?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 108,2 Milliarden Euro  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundestag; BMVg; NATO  
**Variantencluster:** Variante von `djs2025dp009`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-023`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche Beobachtungsstufe verwendete das Bundesamt für Verfassungsschutz 2025 für die AfD?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Gesichert rechtsextremistische Bestrebung  
**Status:** `AKTUALISIEREN`  
**Priorität:** `MITTEL`  
**Prüfung:** Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.  
**Problem, falls vorhanden:** Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.  
**Korrekturvorschlag:** Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“  
**Empfohlene finale Version:** Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“  
**Quellen-/Recherchehinweis:** BfV; VG Köln; ggf. OVG Münster  
**Variantencluster:** Variante von `djs2025dp010`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-024`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Wie lautet der präzise verfassungsschutzrechtliche Begriff für die AfD-Einstufung vom 2. Mai 2025?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Gesichert rechtsextremistische Bestrebung  
**Status:** `AKTUALISIEREN`  
**Priorität:** `MITTEL`  
**Prüfung:** Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.  
**Problem, falls vorhanden:** Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.  
**Korrekturvorschlag:** Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“  
**Empfohlene finale Version:** Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“  
**Quellen-/Recherchehinweis:** BfV; VG Köln; ggf. OVG Münster  
**Variantencluster:** Variante von `djs2025dp010`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-025`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welches Gericht war für das Hauptverfahren um das COMPACT-Verbot zentral?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Bundesverwaltungsgericht  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG  
**Variantencluster:** Variante von `djs2025dp011`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-026`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Der Streit um Vereinsverbot und Pressefreiheit bei COMPACT lag 2025 vor welchem obersten Bundesgericht?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Bundesverwaltungsgericht  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG  
**Variantencluster:** Variante von `djs2025dp011`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-027`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche beiden Prinzipien standen beim COMPACT-Verbot besonders gegeneinander?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Pressefreiheit und wehrhafte Demokratie  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG  
**Variantencluster:** Variante von `djs2025dp012`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-028`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Der COMPACT-Fall wurde zum Testfall zwischen Art. 5 GG und welchem demokratischen Schutzkonzept?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Pressefreiheit und wehrhafte Demokratie  
**Status:** `TEILWEISE_FALSCH`  
**Priorität:** `HOCH`  
**Prüfung:** Die Frage fragt nach dem demokratischen Schutzkonzept neben Art. 5 GG. Die hinterlegte Antwort enthält zusätzlich „Pressefreiheit“, obwohl Art. 5 GG bereits Presse-/Meinungsfreiheit meint.  
**Problem, falls vorhanden:** Die Frage fragt nach dem demokratischen Schutzkonzept neben Art. 5 GG. Die hinterlegte Antwort enthält zusätzlich „Pressefreiheit“, obwohl Art. 5 GG bereits Presse-/Meinungsfreiheit meint.  
**Korrekturvorschlag:** Antwort auf „wehrhafte Demokratie“ verkürzen.  
**Empfohlene finale Version:** Frage: „Der COMPACT-Fall wurde zum Testfall zwischen Art. 5 GG und welchem demokratischen Schutzkonzept?“ Antwort: „wehrhafte Demokratie“.  
**Quellen-/Recherchehinweis:** BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG  
**Variantencluster:** Variante von `djs2025dp012`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-029`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welcher runde Jahrestag wurde in Deutschland am 8. Mai 2025 begangen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 80 Jahre Kriegsende  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025dp013`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-030`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Der 8. Mai 2025 erinnerte an welches Ereignis vor acht Jahrzehnten?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 80 Jahre Kriegsende  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025dp013`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-031`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Zum wievielten Mal jährte sich die Deutsche Einheit am 3. Oktober 2025?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 35 Jahre  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025dp014`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-032`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Das Jahr 2025 markierte welches Jubiläum der Wiedervereinigung von 1990?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 35 Jahre  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025dp014`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-033`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Welche Bundesbehörde bewertete 2025 die deutschen Klimaziele für 2030 als grundsätzlich erreichbar?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Umweltbundesamt (UBA)  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.  
**Problem, falls vorhanden:** Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.  
**Korrekturvorschlag:** Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.  
**Empfohlene finale Version:** Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.  
**Quellen-/Recherchehinweis:** UBA; BMUV  
**Variantencluster:** Variante von `djs2025dp015`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026dp-neu-034`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Die offiziellen Emissionsprojektionen, nach denen das 2030-Ziel noch erreichbar sei, kamen von welcher Umweltbehörde?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Umweltbundesamt (UBA)  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.  
**Problem, falls vorhanden:** Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.  
**Korrekturvorschlag:** Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.  
**Empfohlene finale Version:** Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.  
**Quellen-/Recherchehinweis:** UBA; BMUV  
**Variantencluster:** Variante von `djs2025dp015`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2023mc003`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Über welche Reformvorhaben stritt die Ampelkoalition? (Mehrere Antworten möglich)  
**Antwortoptionen:** Gebäudeenergiegesetz, Kindergrundsicherung, Einbürgerungsgesetz, Schuldenbremse, Grundrente  
**Markierte richtige Antwort:** Gebäudeenergiegesetz / Kindergrundsicherung  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025dp004`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Wie lautet der Titel des Koalitionsvertrags, den CDU/CSU und SPD 2025 unterzeichnet haben?  
**Antwortoptionen:** Aufbruch für Deutschland, Verantwortung für Deutschland, Zusammenhalt und Stärke, Erneuerung und Stabilität  
**Markierte richtige Antwort:** Verantwortung für Deutschland  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  

---

### Frage-ID: `djs2025sc002`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Auf welchen Betrag stieg der deutsche Mindeststundenlohn zum 1. Januar 2025?  
**Antwortoptionen:** 12,41 Euro, 12,82 Euro, 13,10 Euro, 14,00 Euro  
**Markierte richtige Antwort:** 12,82 Euro  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Bundeswahlleiterin; Deutscher Bundestag  

---

### Frage-ID: `djs2025sc003`

**Kategorie:** Deutsche Politik  
**Originalfrage:** Wofür steht die Abkürzung ePA?  
**Antwortoptionen:** Elektronische Polizeiakte, Elektronische Patientenakte, Elektronisches Prüfungsamt, Erweiterte Personalausweis-App  
**Markierte richtige Antwort:** Elektronische Patientenakte  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** BMG; gematik  

---

### Frage-ID: `djs2018sc003`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welche Volksgruppe wurde laut UN Ziel ethnischer Säuberungen in Myanmar?  
**Antwortoptionen:** Uyghuren, Tibeter, Rohingya, Karen  
**Markierte richtige Antwort:** Rohingya  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Rohingya ist korrekt. Begriff „Völkermord“ sollte sauber zwischen UN-Fact-Finding/Genozidabsicht, ICJ-Verfahren und rechtlicher Feststellung differenzieren.  
**Problem, falls vorhanden:** Rohingya ist korrekt. Begriff „Völkermord“ sollte sauber zwischen UN-Fact-Finding/Genozidabsicht, ICJ-Verfahren und rechtlicher Feststellung differenzieren.  
**Korrekturvorschlag:** Erklärung juristisch präzisieren: „UN-Ermittler sahen Hinweise auf genozidale Absicht; ICJ-Verfahren läuft/lief.“  
**Empfohlene finale Version:** Erklärung juristisch präzisieren: „UN-Ermittler sahen Hinweise auf genozidale Absicht; ICJ-Verfahren läuft/lief.“  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2019sc003`

**Kategorie:** Internationale Politik  
**Originalfrage:** Was sollte der Brexit-'Backstop' verhindern?  
**Antwortoptionen:** Eine EU-Mitgliedschaft Nordirlands, Eine harte Grenze zwischen Irland und Nordirland, Eine Rückkehr Großbritanniens in die EU, Den Zerfall des Vereinigten Königreichs  
**Markierte richtige Antwort:** Eine harte Grenze zwischen Irland und Nordirland  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2022sc005`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Land zwang 2021 eine Ryanair-Maschine zur Landung, um einen Blogger festzunehmen?  
**Antwortoptionen:** Russland, Belarus, Ukraine, Aserbaidschan  
**Markierte richtige Antwort:** Belarus  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2022sc007`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Land führte Bitcoin als offizielles Zahlungsmittel ein?  
**Antwortoptionen:** Panama, El Salvador, Honduras, Mexiko  
**Markierte richtige Antwort:** El Salvador  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Historisch korrekt. Erklärung sollte präzisieren, dass Bitcoin später durch IWF-Vereinbarung/gesetzliche Änderung faktisch nicht mehr verpflichtend akzeptiert werden musste.  
**Problem, falls vorhanden:** Historisch korrekt. Erklärung sollte präzisieren, dass Bitcoin später durch IWF-Vereinbarung/gesetzliche Änderung faktisch nicht mehr verpflichtend akzeptiert werden musste.  
**Korrekturvorschlag:** Erklärung um Zeitstand 2024/2025 und freiwillige Akzeptanz ergänzen.  
**Empfohlene finale Version:** Erklärung um Zeitstand 2024/2025 und freiwillige Akzeptanz ergänzen.  
**Quellen-/Recherchehinweis:** IWF/IMF World Economic Outlook  

---

### Frage-ID: `djs2023sc001`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Land trat im April 2023 der NATO bei?  
**Antwortoptionen:** Schweden, Finnland, Ukraine, Georgien  
**Markierte richtige Antwort:** Finnland  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  

---

### Frage-ID: `djs2023sc007`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Land führte am 1. Januar 2023 als 20. Land den Euro ein?  
**Antwortoptionen:** Bulgarien, Kroatien, Rumänien, Serbien  
**Markierte richtige Antwort:** Kroatien  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  

---

### Frage-ID: `djs2023sc008`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wo regierte nach der Wahl 2022 ein Rechtsbündnis mit einer postfaschistischen Regierungschefin?  
**Antwortoptionen:** Spanien, Frankreich, Italien, Ungarn  
**Markierte richtige Antwort:** Italien  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2024mc002`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welche Länder traten am 1. Januar 2024 den BRICS-Staaten bei? (Mehrere Antworten möglich)  
**Antwortoptionen:** Saudi-Arabien, Ägypten, Türkei, Vereinigte Arabische Emirate, Nigeria  
**Markierte richtige Antwort:** Ägypten / Vereinigte Arabische Emirate  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2024sc003`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welcher britische Politiker feierte 2023 ein spektakuläres politisches Comeback?  
**Antwortoptionen:** Boris Johnson, Nigel Farage, David Cameron, Tony Blair  
**Markierte richtige Antwort:** David Cameron  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2024sc005`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie alt war US-Präsident Joe Biden zum Zeitpunkt seiner Kandidatur-Ankündigung für 2024?  
**Antwortoptionen:** 79, 80, 81, 82  
**Markierte richtige Antwort:** 80  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** White House; Federal Register; AP/Reuters  

---

### Frage-ID: `djs2024sc009`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Land marschierte 2023 in Berg-Karabach ein und kontrolliert es seitdem?  
**Antwortoptionen:** Armenien, Russland, Aserbaidschan, Iran  
**Markierte richtige Antwort:** Aserbaidschan  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  

---

### Frage-ID: `djs2025eu001`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie heißt der EU-Verteidigungsplan, der am 19. März 2025 vorgestellt wurde?  
**Antwortoptionen:** EU Defence 2030, ReArm Europe/Readiness 2030, European Shield 2030, NATO Plus 2030  
**Markierte richtige Antwort:** ReArm Europe/Readiness 2030  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** UBA; BMUV  

---

### Frage-ID: `djs2025eu002`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Finanzinstrument ist der erste Pfeiler des EU-Plans ReArm Europe/Readiness 2030?  
**Antwortoptionen:** ESM, SURE, SAFE, NextGenerationEU  
**Markierte richtige Antwort:** SAFE  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** EU-Kommission; EU-Parlament/EPRS  

---

### Frage-ID: `djs2025eu003`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches EU-Sanktionspaket gegen Russland wurde am 24. Februar 2025 beschlossen?  
**Antwortoptionen:** 14. Paket, 15. Paket, 16. Paket, 17. Paket  
**Markierte richtige Antwort:** 16. Paket  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  

---

### Frage-ID: `djs2025eu004`

**Kategorie:** Internationale Politik  
**Originalfrage:** An welchem Datum beschloss die EU das 17. Sanktionspaket gegen Russland?  
**Antwortoptionen:** 24. Februar 2025, 9. April 2025, 20. Mai 2025, 15. Juni 2025  
**Markierte richtige Antwort:** 20. Mai 2025  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  

---

### Frage-ID: `djs2025eu007`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie heißt das EU-Paket gegen Desinformation und ausländische Einflussnahme, das im November 2025 vorgestellt wurde?  
**Antwortoptionen:** Digital Democracy Act, European Democracy Shield, Information Integrity Framework, DSA Democracy Package  
**Markierte richtige Antwort:** European Democracy Shield  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** EU-Kommission  

---

### Frage-ID: `djs2025eu008`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches 2040-Klimaziel schlug die EU-Kommission im Juli 2025 für das überarbeitete EU-Klimagesetz vor?  
**Antwortoptionen:** Minus 70 Prozent Netto-THG gegenüber 1990, Minus 80 Prozent Netto-THG gegenüber 1990, Minus 90 Prozent Netto-THG gegenüber 1990, Klimaneutralität bereits 2040  
**Markierte richtige Antwort:** Minus 90 Prozent Netto-THG gegenüber 1990  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.  
**Problem, falls vorhanden:** Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.  
**Korrekturvorschlag:** Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“  
**Empfohlene finale Version:** Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“  
**Quellen-/Recherchehinweis:** EU-Kommission, EU-Klimagesetz  

---

### Frage-ID: `djs2025eu009`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welche zwei Länder wurden ab 1. Januar 2025 vollständig Teil des Schengen-Raums?  
**Antwortoptionen:** Rumänien, Serbien, Bulgarien, Albanien  
**Markierte richtige Antwort:** Rumänien / Bulgarien  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  

---

### Frage-ID: `djs2025eu010`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Jubiläum der Schuman-Erklärung wurde am Europa-Tag, dem 9. Mai 2025, gefeiert?  
**Antwortoptionen:** 60 Jahre, 70 Jahre, 75 Jahre, 80 Jahre  
**Markierte richtige Antwort:** 75 Jahre  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  

---

### Frage-ID: `djs2025eu011`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wer ist seit Dezember 2024 die Hohe Vertreterin der EU für Außen- und Sicherheitspolitik?  
**Antwortoptionen:** Ursula von der Leyen, Christine Lagarde, Kaja Kallas, Federica Mogherini  
**Markierte richtige Antwort:** Kaja Kallas  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  

---

### Frage-ID: `djs2025eu012`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wer ist seit Dezember 2024 Präsident des Europäischen Rates?  
**Antwortoptionen:** Charles Michel, António Costa, Mario Draghi, Mark Rutte  
**Markierte richtige Antwort:** António Costa  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  

---

### Frage-ID: `djs2025eu013`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie hoch ist das Gesamtvolumen der EU Ukraine Facility, die der Ukraine bis 2027 finanzielle Unterstützung sichert?  
**Antwortoptionen:** 20 Milliarden Euro, 50 Milliarden Euro, 90 Milliarden Euro, 150 Milliarden Euro  
**Markierte richtige Antwort:** 50 Milliarden Euro  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** EU-Kommission; Rat der EU; Reuters/AP zur Einordnung  

---

### Frage-ID: `djs2025eu014`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches zusätzliche EU-Finanzinstrument für die Ukraine wurde im Dezember 2025 beschlossen und im April 2026 legislativ finalisiert?  
**Antwortoptionen:** Ein Hilfspaket von 20 Milliarden Euro für humanitäre Hilfe, Ein Unterstützungskredit von 90 Milliarden Euro für 2026/27, Eine Erhöhung der Ukraine Facility auf 75 Milliarden Euro, Ein Rüstungskredit von 50 Milliarden Euro über die EIB  
**Markierte richtige Antwort:** Ein Unterstützungskredit von 90 Milliarden Euro für 2026/27  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** EU-Kommission; Rat der EU; Reuters/AP zur Einordnung  

---

### Frage-ID: `djs2025ip001`

**Kategorie:** Internationale Politik  
**Originalfrage:** An welchem Datum wurde Donald Trump als 47. Präsident der USA vereidigt?  
**Antwortoptionen:** 6. Januar 2025, 20. Januar 2025, 1. Februar 2025, 20. März 2025  
**Markierte richtige Antwort:** 20. Januar 2025  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** White House; Federal Register; AP/Reuters  

---

### Frage-ID: `djs2025ip002`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie nennt sich die am 2. April 2025 von Trump erlassene Zollanordnung?  
**Antwortoptionen:** America First Tariffs, Reciprocal Tariffs, Fair Trade Executive Order, Protectionist Trade Act  
**Markierte richtige Antwort:** Reciprocal Tariffs  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** White House; Federal Register; AP/Reuters  

---

### Frage-ID: `djs2025ip003`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wann starb Papst Franziskus?  
**Antwortoptionen:** 8. April 2025, 21. April 2025, 8. Mai 2025, 26. April 2025  
**Markierte richtige Antwort:** 21. April 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Kleiner Sprach-/Länderfehler: „Argentina“ in deutschem Text.  
**Problem, falls vorhanden:** Kleiner Sprach-/Länderfehler: „Argentina“ in deutschem Text.  
**Korrekturvorschlag:** Zu „Argentinien“ korrigieren.  
**Empfohlene finale Version:** Zu „Argentinien“ korrigieren.  
**Quellen-/Recherchehinweis:** Vatican News; Vatican.va; AP/Reuters  

---

### Frage-ID: `djs2025ip004`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welchen Papstnamen nahm Robert Francis Prevost nach seiner Wahl am 8. Mai 2025 an?  
**Antwortoptionen:** Franziskus II., Johannes XXIV., Leo XIV., Benedikt XVII.  
**Markierte richtige Antwort:** Leo XIV.  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Vatican News; Vatican.va; AP/Reuters  

---

### Frage-ID: `djs2025ip005`

**Kategorie:** Internationale Politik  
**Originalfrage:** An welchem Datum nahm die Weltgesundheitsversammlung das WHO-Pandemieabkommen an?  
**Antwortoptionen:** 8. Mai 2025, 20. Mai 2025, 1. Juni 2025, 12. Juni 2025  
**Markierte richtige Antwort:** 20. Mai 2025  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** White House; Federal Register; AP/Reuters  

---

### Frage-ID: `djs2025ip006`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welcher Stadt fand die UN-Klimakonferenz COP30 statt?  
**Antwortoptionen:** Bogotá, Nairobi, Belém, Jakarta  
**Markierte richtige Antwort:** Belém  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Tippfehler in der Erklärung: „Luelas Regierung“ muss „Lulas Regierung“ heißen.  
**Problem, falls vorhanden:** Tippfehler in der Erklärung: „Luelas Regierung“ muss „Lulas Regierung“ heißen.  
**Korrekturvorschlag:** Tippfehler korrigieren.  
**Empfohlene finale Version:** Tippfehler korrigieren.  
**Quellen-/Recherchehinweis:** UNFCCC  

---

### Frage-ID: `djs2025ip007`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie werden die 2025 fälligen nationalen Klimapläne der UN-Mitgliedstaaten abgekürzt?  
**Antwortoptionen:** NAP 3.0, NDC 3.0, NCP 3.0, GHG 3.0  
**Markierte richtige Antwort:** NDC 3.0  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** UNFCCC; UN Climate Change; EU-NDC-Dokumente  

---

### Frage-ID: `djs2025ip008`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wann fand das hochrangige Gedenktreffen anlässlich des 80. Jahrestags der Vereinten Nationen statt?  
**Antwortoptionen:** 22. Juni 2025, 22. August 2025, 22. September 2025, 22. Oktober 2025  
**Markierte richtige Antwort:** 22. September 2025  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** UN General Assembly / UN Web TV  

---

### Frage-ID: `djs2025ip010`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welcher Staat verhängte am 6. Februar 2025 Sanktionen gegen den Internationalen Strafgerichtshof (ICC)?  
**Antwortoptionen:** Russland, China, USA, Israel  
**Markierte richtige Antwort:** USA  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025ip011`

**Kategorie:** Internationale Politik  
**Originalfrage:** Was ist der Unterschied zwischen ICC und ICJ?  
**Antwortoptionen:** ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Streitigkeiten zwischen Staaten, ICC = Handelsgerichtshof; ICJ = Menschenrechtsgericht, Beide sind identisch, nur unterschiedliche Abkürzungen, ICC = UN-Gericht; ICJ = NATO-Gericht  
**Markierte richtige Antwort:** ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Streitigkeiten zwischen Staaten  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** UN General Assembly / UN Web TV  

---

### Frage-ID: `djs2025ip012`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welcher Konflikt gilt laut OCHA als die weltweit größte humanitäre Notlage im Jahr 2026?  
**Antwortoptionen:** Ukraine, Gaza/Westbank, Sudan, DR Kongo  
**Markierte richtige Antwort:** Sudan  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk  

---

### Frage-ID: `djs2025ip013`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welche zwei UN-Organisationen warnten 2025 gemeinsam vor KI-Risiken für Wahlen und Meinungsfreiheit?  
**Antwortoptionen:** WHO und UNICEF, UNESCO und UNDP, UNHCR und OCHA, FAO und ILO  
**Markierte richtige Antwort:** UNESCO und UNDP  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** „Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.  
**Problem, falls vorhanden:** „Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.  
**Korrekturvorschlag:** Erklärung sprachlich auf „Issue Brief“ ändern.  
**Empfohlene finale Version:** Erklärung sprachlich auf „Issue Brief“ ändern.  
**Quellen-/Recherchehinweis:** UNESCO; UNDP  

---

### Frage-ID: `djs2025ip014`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welchem Land spricht OCHA 2025/26 von einer eskalierenden Gewaltsituation im Osten des Landes, die oft als 'unterberichteter Konflikt' gilt?  
**Antwortoptionen:** Äthiopien, Demokratische Republik Kongo, Mali, Mosambik  
**Markierte richtige Antwort:** Demokratische Republik Kongo  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk  

---

### Frage-ID: `djs2025mc005`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welche Personen kamen beim großen Gefangenenaustausch zwischen Russland und dem Westen frei? (Mehrere Antworten möglich)  
**Antwortoptionen:** Alexej Nawalny, Rico Krieger, Vadim Krassikov, Evan Gershkovich, Julian Assange  
**Markierte richtige Antwort:** Rico Krieger / Vadim Krassikov / Evan Gershkovich  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  

---

### Frage-ID: `djs2025sc006`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welchem Land scheiterte im Dezember 2024 ein Staatsstreich des amtierenden Präsidenten – bei Neuwahlen 2025 durfte er nicht mehr antreten?  
**Antwortoptionen:** Südkorea, Myanmar, Venezuela, Bolivien  
**Markierte richtige Antwort:** Südkorea  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025sc007`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welchem Land löste die Verhaftung des Bürgermeisters der größten Stadt 2025 massive Proteste aus?  
**Antwortoptionen:** Griechenland, Türkei, Polen, Serbien  
**Markierte richtige Antwort:** Türkei  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025sc008`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welchen Ländern führte ein Blackout im April 2025 fast einen ganzen Tag lang zu massivem Stromausfall?  
**Antwortoptionen:** Frankreich und Belgien, Spanien und Portugal, Italien und Griechenland, Deutschland und Österreich  
**Markierte richtige Antwort:** Spanien und Portugal  
**Status:** `AKTUALISIEREN`  
**Priorität:** `MITTEL`  
**Prüfung:** Die Erklärung sagt, die genaue Ursache sei zunächst unklar. Das war für die unmittelbare Lage korrekt, ist aber nach ENTSO-E-Untersuchung zu aktualisieren.  
**Problem, falls vorhanden:** Die Erklärung sagt, die genaue Ursache sei zunächst unklar. Das war für die unmittelbare Lage korrekt, ist aber nach ENTSO-E-Untersuchung zu aktualisieren.  
**Korrekturvorschlag:** Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück.  
**Empfohlene finale Version:** Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück.  
**Quellen-/Recherchehinweis:** ENTSO-E Abschluss-/Untersuchungsseite  

---

### Frage-ID: `djs2026ip-neu-055`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welcher frühere britische Premier kehrte 2023 überraschend als Außenminister zurück?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** David Cameron  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-056`

**Kategorie:** Internationale Politik  
**Originalfrage:** Rishi Sunak holte welchen Brexit-Referendums-Premier 2023 in die Regierung zurück?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** David Cameron  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-057`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie alt war Joe Biden, als sein Alter im Wahlkampf 2024 zum zentralen Thema wurde?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 81  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-058`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die Debatte um Bidens Amtsfähigkeit kreiste 2024 um einen Präsidenten welchen Alters?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 81  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-059`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welche zwei der genannten Staaten traten zum 1. Januar 2024 der BRICS-Gruppe bei?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Ägypten und Vereinigte Arabische Emirate  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024mc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-060`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die BRICS-Erweiterung 2024 umfasste unter anderem Ägypten und welches Golf-Land?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Ägypten und Vereinigte Arabische Emirate  
**Status:** `TEILWEISE_FALSCH`  
**Priorität:** `HOCH`  
**Prüfung:** Die Frage fragt: „Ägypten und welches Golf-Land?“ Die hinterlegte Antwort nennt erneut Ägypten und die VAE.  
**Problem, falls vorhanden:** Die Frage fragt: „Ägypten und welches Golf-Land?“ Die hinterlegte Antwort nennt erneut Ägypten und die VAE.  
**Korrekturvorschlag:** Antwort auf „Vereinigte Arabische Emirate“ verkürzen.  
**Empfohlene finale Version:** Antwort: „Vereinigte Arabische Emirate“.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024mc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-061`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welcher Staat übernahm 2023 nach einer Blitzoffensive die Kontrolle über Berg-Karabach?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Aserbaidschan  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc009`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-062`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die armenische Bevölkerung floh 2023 fast vollständig aus Berg-Karabach nach dem Angriff welchen Landes?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Aserbaidschan  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc009`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-063`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches nordische Land wurde im April 2023 das 31. NATO-Mitglied?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Finnland  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-064`

**Kategorie:** Internationale Politik  
**Originalfrage:** Russlands Angriff auf die Ukraine beschleunigte den NATO-Beitritt welchen Landes mit langer Russlandgrenze?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Finnland  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  
**Variantencluster:** Variante von `djs2023sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-065`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welchen drei Ländern kam es 2022 zu Regierungswechseln, die 2023 prüfungsrelevant waren?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Australien, Brasilien und Kolumbien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023mc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-066`

**Kategorie:** Internationale Politik  
**Originalfrage:** Albanese, Lula und Petro stehen für Regierungswechsel in welchen Staaten?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Australien, Brasilien und Kolumbien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023mc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-067`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welcher EU-Staat führte am 1. Januar 2023 als 20. Land den Euro ein?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Kroatien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-068`

**Kategorie:** Internationale Politik  
**Originalfrage:** Kuna raus, Euro rein: Welches Land wechselte 2023 in die Eurozone?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Kroatien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Eurostat  
**Variantencluster:** Variante von `djs2023sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-069`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welchem Land wurde Giorgia Meloni nach der Wahl 2022 Regierungschefin eines Rechtsbündnisses?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Italien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-070`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die Fratelli d'Italia mit postfaschistischen Wurzeln kamen 2022 in welchem EU-Land an die Regierung?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Italien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-071`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Land zwang 2021 ein Ryanair-Flugzeug zur Landung, um Roman Protassewitsch festzunehmen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Belarus  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-072`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die erzwungene Landung einer Maschine auf dem Weg nach Vilnius wird welchem autoritären Staat zugeschrieben?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Belarus  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-073`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Land führte Bitcoin 2021 als gesetzliches Zahlungsmittel ein?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** El Salvador  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-074`

**Kategorie:** Internationale Politik  
**Originalfrage:** Das Bitcoin-Experiment von Präsident Nayib Bukele begann in welchem mittelamerikanischen Staat?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** El Salvador  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-075`

**Kategorie:** Internationale Politik  
**Originalfrage:** Was sollte der Brexit-Backstop im Kern verhindern?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Eine harte Grenze zwischen Irland und Nordirland  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2019sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-076`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die Backstop-Debatte drehte sich um die offene Grenze zwischen der Republik Irland und welchem britischen Landesteil?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Eine harte Grenze zwischen Irland und Nordirland  
**Status:** `TEILWEISE_FALSCH`  
**Priorität:** `HOCH`  
**Prüfung:** Die Frage fragt nach dem britischen Landesteil. Die hinterlegte Antwort beschreibt dagegen das zu verhindernde Problem.  
**Problem, falls vorhanden:** Die Frage fragt nach dem britischen Landesteil. Die hinterlegte Antwort beschreibt dagegen das zu verhindernde Problem.  
**Korrekturvorschlag:** Antwort auf „Nordirland“ ändern.  
**Empfohlene finale Version:** Antwort: „Nordirland“.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2019sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-077`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welche muslimische Minderheit wurde laut UN in Myanmar Ziel ethnischer Säuberungen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Rohingya  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2018sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-078`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die Massenflucht nach Bangladesch 2017 betraf welche Volksgruppe aus Myanmar?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Rohingya  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2018sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-079`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie heißt der 2025 vorgestellte EU-Verteidigungsplan zur Stärkung der Einsatzbereitschaft?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** ReArm Europe/Readiness 2030  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU-Kommission; EU-Parlament/EPRS  
**Variantencluster:** Variante von `djs2025eu001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-080`

**Kategorie:** Internationale Politik  
**Originalfrage:** Unter welchem Namen bündelte die EU-Kommission 2025 ihr Weißbuch zur europäischen Verteidigung?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** ReArm Europe/Readiness 2030  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU-Kommission; EU-Parlament/EPRS  
**Variantencluster:** Variante von `djs2025eu001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-081`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Finanzinstrument bildet den ersten Pfeiler von ReArm Europe/Readiness 2030?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** SAFE  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU-Kommission; EU-Parlament/EPRS  
**Variantencluster:** Variante von `djs2025eu002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-082`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die EU-Darlehen für gemeinsame Verteidigungsbeschaffung laufen unter welcher Abkürzung?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** SAFE  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU-Kommission; EU-Parlament/EPRS  
**Variantencluster:** Variante von `djs2025eu002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-083`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches EU-Sanktionspaket gegen Russland wurde am dritten Jahrestag des Angriffs auf die Ukraine beschlossen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 16. Paket  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  
**Variantencluster:** Variante von `djs2025eu003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-084`

**Kategorie:** Internationale Politik  
**Originalfrage:** Am 24. Februar 2025 verabschiedete die EU welches nummerierte Russland-Sanktionspaket?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 16. Paket  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  
**Variantencluster:** Variante von `djs2025eu003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-085`

**Kategorie:** Internationale Politik  
**Originalfrage:** An welchem Datum beschloss die EU ihr 17. Sanktionspaket gegen Russland?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 20. Mai 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  
**Variantencluster:** Variante von `djs2025eu004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-086`

**Kategorie:** Internationale Politik  
**Originalfrage:** Das 17. Russland-Sanktionspaket der EU folgte im Mai 2025: an welchem Tag?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 20. Mai 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  
**Variantencluster:** Variante von `djs2025eu004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-087`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie heißt das industriepolitische EU-Projekt, das Klimaschutz und Wettbewerbsfähigkeit verbinden soll?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Clean Industrial Deal  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025eu005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-088`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die Kommission reagierte 2025 auf Industriekritik am Green Deal mit welchem neuen Deal?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Clean Industrial Deal  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025eu005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-089`

**Kategorie:** Internationale Politik  
**Originalfrage:** Ab welchem Datum soll der EU-Migrations- und Asylpakt vollständig angewendet werden?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 12. Juni 2026  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU-Kommission; Rat der EU  
**Variantencluster:** Variante von `djs2026eu001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-090`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die praktische Anwendung der großen EU-Asylreform beginnt an welchem Tag im Juni 2026?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 12. Juni 2026  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2026eu001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-091`

**Kategorie:** Internationale Politik  
**Originalfrage:** Ab wann greifen im EU AI Act die Verbote für unzulässige KI-Praktiken?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 2. Februar 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU Digital Strategy; EU-Amtsblatt; ggf. 2026 Omnibus-Update  
**Variantencluster:** Variante von `djs2025eu006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-092`

**Kategorie:** Internationale Politik  
**Originalfrage:** Social Scoring und bestimmte biometrische Echtzeitüberwachung sind nach dem AI Act ab welchem Datum verboten?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 2. Februar 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU Digital Strategy; EU-Amtsblatt; ggf. 2026 Omnibus-Update  
**Variantencluster:** Variante von `djs2025eu006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-093`

**Kategorie:** Internationale Politik  
**Originalfrage:** Ab welchem Datum soll der EU AI Act grundsätzlich vollständig anwendbar sein?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 2. August 2026  
**Status:** `AKTUALISIEREN`  
**Priorität:** `MITTEL`  
**Prüfung:** „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.  
**Problem, falls vorhanden:** „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.  
**Korrekturvorschlag:** Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“  
**Empfohlene finale Version:** Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“  
**Quellen-/Recherchehinweis:** EU Digital Strategy; EU-Kommission; EU-Amtsblatt  
**Variantencluster:** Variante von `djs2026eu002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-094`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die gestaffelte Umsetzung des AI Act erreicht ihre Gesamtgeltung an welchem Datum?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 2. August 2026  
**Status:** `AKTUALISIEREN`  
**Priorität:** `MITTEL`  
**Prüfung:** „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.  
**Problem, falls vorhanden:** „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.  
**Korrekturvorschlag:** Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“  
**Empfohlene finale Version:** Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“  
**Quellen-/Recherchehinweis:** EU Digital Strategy; EU-Kommission; EU-Amtsblatt  
**Variantencluster:** Variante von `djs2026eu002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-095`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie nennt die EU ihr 2025 vorgestelltes Paket gegen Desinformation und ausländische Einflussnahme?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** European Democracy Shield  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU-Kommission  
**Variantencluster:** Variante von `djs2025eu007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-096`

**Kategorie:** Internationale Politik  
**Originalfrage:** Der Schutz demokratischer Prozesse vor Einflussoperationen firmiert bei der EU unter welchem englischen Namen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** European Democracy Shield  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU-Kommission  
**Variantencluster:** Variante von `djs2025eu007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-097`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches 2040-Klimaziel schlug die EU-Kommission 2025 für das Klimagesetz vor?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Minus 90 Prozent Netto-THG gegenüber 1990  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.  
**Problem, falls vorhanden:** Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.  
**Korrekturvorschlag:** Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“  
**Empfohlene finale Version:** Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“  
**Quellen-/Recherchehinweis:** EU-Kommission, EU-Klimagesetz  
**Variantencluster:** Variante von `djs2025eu008`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-098`

**Kategorie:** Internationale Politik  
**Originalfrage:** Auf welchen Netto-Reduktionswert gegenüber 1990 soll die EU bis 2040 zusteuern?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Minus 90 Prozent Netto-THG gegenüber 1990  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.  
**Problem, falls vorhanden:** Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.  
**Korrekturvorschlag:** Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“  
**Empfohlene finale Version:** Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“  
**Quellen-/Recherchehinweis:** EU-Kommission, EU-Klimagesetz  
**Variantencluster:** Variante von `djs2025eu008`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-099`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welche zwei Länder wurden am 1. Januar 2025 vollständig in den Schengen-Raum integriert?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Rumänien und Bulgarien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  
**Variantencluster:** Variante von `djs2025eu009`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-100`

**Kategorie:** Internationale Politik  
**Originalfrage:** Für welche beiden EU-Staaten entfielen Anfang 2025 auch die Landgrenzkontrollen im Schengen-System?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Rumänien und Bulgarien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  
**Variantencluster:** Variante von `djs2025eu009`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-101`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Jubiläum der Schuman-Erklärung wurde am Europa-Tag 2025 gefeiert?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 75 Jahre  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025eu010`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-102`

**Kategorie:** Internationale Politik  
**Originalfrage:** Der 9. Mai 2025 erinnerte an wie viele Jahre europäische Integration seit Robert Schumans Erklärung?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 75 Jahre  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025eu010`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-103`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wer ist seit Dezember 2024 Hohe Vertreterin der EU für Außen- und Sicherheitspolitik?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Kaja Kallas  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  
**Variantencluster:** Variante von `djs2025eu011`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-104`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die frühere estnische Premierministerin übernahm 2024 welches EU-Außenamt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Kaja Kallas  
**Status:** `TEILWEISE_FALSCH`  
**Priorität:** `HOCH`  
**Prüfung:** Die Frage fragt nach dem Amt, nicht nach der Person. Hinterlegt ist „Kaja Kallas“.  
**Problem, falls vorhanden:** Die Frage fragt nach dem Amt, nicht nach der Person. Hinterlegt ist „Kaja Kallas“.  
**Korrekturvorschlag:** Antwort auf „Hohe Vertreterin der EU für Außen- und Sicherheitspolitik“ ändern.  
**Empfohlene finale Version:** Antwort: „Hohe Vertreterin der EU für Außen- und Sicherheitspolitik“.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  
**Variantencluster:** Variante von `djs2025eu011`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-105`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wer löste Charles Michel Ende 2024 als Präsident des Europäischen Rates ab?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** António Costa  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  
**Variantencluster:** Variante von `djs2025eu012`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-106`

**Kategorie:** Internationale Politik  
**Originalfrage:** Der frühere portugiesische Premier leitet seit Dezember 2024 welche EU-Institution?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** António Costa  
**Status:** `TEILWEISE_FALSCH`  
**Priorität:** `HOCH`  
**Prüfung:** Die Frage fragt nach der EU-Institution, nicht nach der Person. Hinterlegt ist „António Costa“.  
**Problem, falls vorhanden:** Die Frage fragt nach der EU-Institution, nicht nach der Person. Hinterlegt ist „António Costa“.  
**Korrekturvorschlag:** Antwort auf „Europäischer Rat“ ändern.  
**Empfohlene finale Version:** Antwort: „Europäischer Rat“.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  
**Variantencluster:** Variante von `djs2025eu012`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-107`

**Kategorie:** Internationale Politik  
**Originalfrage:** Unter welchem Namen verkündete Trump am 2. April 2025 seine Gegenzollpolitik?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Reciprocal Tariffs  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** White House; Federal Register; AP/Reuters  
**Variantencluster:** Variante von `djs2025ip002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-108`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die von Trump als „Liberation Day“ inszenierte Zollanordnung wurde wie bezeichnet?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Reciprocal Tariffs  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** White House; Federal Register; AP/Reuters  
**Variantencluster:** Variante von `djs2025ip002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-109`

**Kategorie:** Internationale Politik  
**Originalfrage:** An welchem Datum starb Papst Franziskus im Vatikan?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 21. April 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Vatican News; Vatican.va; AP/Reuters  
**Variantencluster:** Variante von `djs2025ip003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-110`

**Kategorie:** Internationale Politik  
**Originalfrage:** Der Tod von Jorge Mario Bergoglio löste 2025 das Konklave aus: an welchem Tag starb er?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 21. April 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025ip003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-111`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welchen Papstnamen wählte Robert Francis Prevost nach seiner Wahl?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Leo XIV.  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Vatican News; Vatican.va; AP/Reuters  
**Variantencluster:** Variante von `djs2025ip004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-112`

**Kategorie:** Internationale Politik  
**Originalfrage:** Der erste US-amerikanische Papst trat 2025 unter welchem Namen auf?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Leo XIV.  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Vatican News; Vatican.va; AP/Reuters  
**Variantencluster:** Variante von `djs2025ip004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-113`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wann nahm die Weltgesundheitsversammlung das WHO-Pandemieabkommen an?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 20. Mai 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** WHO / World Health Assembly  
**Variantencluster:** Variante von `djs2025ip005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-114`

**Kategorie:** Internationale Politik  
**Originalfrage:** Das erste globale Pandemieabkommen wurde bei der WHO an welchem Datum beschlossen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 20. Mai 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** WHO / World Health Assembly  
**Variantencluster:** Variante von `djs2025ip005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-115`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welcher brasilianischen Stadt fand die COP30 statt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Belém  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** UNFCCC; UN Climate Change; EU-NDC-Dokumente  
**Variantencluster:** Variante von `djs2025ip006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-116`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die Klimakonferenz 2025 wurde symbolisch in der Nähe des Amazonas ausgerichtet: in welcher Stadt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Belém  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** UNFCCC; UN Climate Change; EU-NDC-Dokumente  
**Variantencluster:** Variante von `djs2025ip006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-117`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie lautet die Abkürzung für die 2025 fällige dritte Runde nationaler Klimaschutzbeiträge?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** NDC 3.0  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** UNFCCC; UN Climate Change; EU-NDC-Dokumente  
**Variantencluster:** Variante von `djs2025ip007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-118`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die neuen Klimapläne im Pariser Abkommen werden als welche Version der NDCs bezeichnet?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** NDC 3.0  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** UNFCCC; UN Climate Change; EU-NDC-Dokumente  
**Variantencluster:** Variante von `djs2025ip007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-119`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wann fand das hochrangige UN80-Gedenktreffen in New York statt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 22. September 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** UN General Assembly / UN Web TV  
**Variantencluster:** Variante von `djs2025ip008`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-120`

**Kategorie:** Internationale Politik  
**Originalfrage:** Das Jubiläumstreffen zum 80. Geburtstag der Vereinten Nationen lag an welchem Datum der UN-Generalversammlung?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 22. September 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** UN General Assembly / UN Web TV  
**Variantencluster:** Variante von `djs2025ip008`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-121`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welchen beiden Städten wurde 2025 der 80. Jahrestag der Atombombenabwürfe begangen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Hiroshima und Nagasaki  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025ip009`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-122`

**Kategorie:** Internationale Politik  
**Originalfrage:** Der 6. und 9. August 2025 standen in Japan im Zeichen des Gedenkens in welchen Städten?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Hiroshima und Nagasaki  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025ip009`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-123`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welcher Staat verhängte im Februar 2025 Sanktionen gegen den Internationalen Strafgerichtshof?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** USA  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025ip010`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-124`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die Sanktionen gegen ICC-Personal wegen Verfahren gegen Verbündete kamen 2025 von welchem Land?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** USA  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025ip010`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-125`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie unterscheidet sich der Internationale Strafgerichtshof vom Internationalen Gerichtshof?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Staatenstreitigkeiten  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025ip011`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-126`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Gericht verfolgt Individuen wegen Kriegsverbrechen, und welches entscheidet Streitigkeiten zwischen Staaten?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Staatenstreitigkeiten  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025ip011`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-127`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welcher Konflikt gilt laut OCHA als größte humanitäre Notlage für 2026?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Sudan  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk  
**Variantencluster:** Variante von `djs2025ip012`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-128`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welche Krise übertraf 2026 in OCHA-Einschätzungen andere humanitäre Lagen wie Gaza oder Ukraine?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Sudan  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk  
**Variantencluster:** Variante von `djs2025ip012`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-129`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welche zwei UN-Organisationen warnten 2025 vor KI-Risiken für Wahlen und Meinungsfreiheit?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** UNESCO und UNDP  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** „Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.  
**Problem, falls vorhanden:** „Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.  
**Korrekturvorschlag:** Erklärung sprachlich auf „Issue Brief“ ändern.  
**Empfohlene finale Version:** Erklärung sprachlich auf „Issue Brief“ ändern.  
**Quellen-/Recherchehinweis:** UNESCO; UNDP  
**Variantencluster:** Variante von `djs2025ip013`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-130`

**Kategorie:** Internationale Politik  
**Originalfrage:** Deepfakes, Informationsfreiheit und Wahlbeeinflussung wurden 2025 gemeinsam von welchen UN-Organisationen thematisiert?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** UNESCO und UNDP  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** „Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.  
**Problem, falls vorhanden:** „Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.  
**Korrekturvorschlag:** Erklärung sprachlich auf „Issue Brief“ ändern.  
**Empfohlene finale Version:** Erklärung sprachlich auf „Issue Brief“ ändern.  
**Quellen-/Recherchehinweis:** UNESCO; UNDP  
**Variantencluster:** Variante von `djs2025ip013`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-131`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Volumen hat die EU Ukraine Facility bis 2027?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 50 Milliarden Euro  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU-Kommission; Rat der EU; Reuters/AP zur Einordnung  
**Variantencluster:** Variante von `djs2025eu013`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-132`

**Kategorie:** Internationale Politik  
**Originalfrage:** Die zentrale EU-Finanzhilfe für Reform, Wiederaufbau und Stabilisierung der Ukraine umfasst bis zu welchen Betrag?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 50 Milliarden Euro  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025eu013`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-133`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches zusätzliche EU-Finanzinstrument für die Ukraine wurde Ende 2025 beschlossen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Unterstützungskredit von 90 Milliarden Euro für 2026/27  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU-Kommission; Rat der EU; Reuters/AP zur Einordnung  
**Variantencluster:** Variante von `djs2025eu014`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-134`

**Kategorie:** Internationale Politik  
**Originalfrage:** Neben der Ukraine Facility stand 2026 welches neue Kreditinstrument für Kiew im Mittelpunkt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Unterstützungskredit von 90 Milliarden Euro für 2026/27  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EU-Kommission; Rat der EU; Reuters/AP zur Einordnung  
**Variantencluster:** Variante von `djs2025eu014`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-135`

**Kategorie:** Internationale Politik  
**Originalfrage:** Welches Land gilt wegen der Gewalt im Osten 2025/26 als besonders unterberichteter Krisenfall?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Demokratische Republik Kongo  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk  
**Variantencluster:** Variante von `djs2025ip014`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026ip-neu-136`

**Kategorie:** Internationale Politik  
**Originalfrage:** M23, Nord-Kivu und massive Binnenvertreibung verweisen auf welchen zentralafrikanischen Staat?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Demokratische Republik Kongo  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk  
**Variantencluster:** Variante von `djs2025ip014`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2023mc002`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welchen Ländern wechselte in den vergangenen 12 Monaten die Regierung? (Mehrere Antworten möglich)  
**Antwortoptionen:** Australien, Brasilien, Kolumbien, Mexiko, Argentinien  
**Markierte richtige Antwort:** Australien / Brasilien / Kolumbien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `MITTEL`  
**Prüfung:** Formulierung „in den vergangenen 12 Monaten“ ist ohne Prüfungs-/Stichtag nicht eindeutig. Im Archiv vertretbar, im aktiven Pool riskant.  
**Problem, falls vorhanden:** Formulierung „in den vergangenen 12 Monaten“ ist ohne Prüfungs-/Stichtag nicht eindeutig. Im Archiv vertretbar, im aktiven Pool riskant.  
**Korrekturvorschlag:** Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“.  
**Empfohlene finale Version:** Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025eu005`

**Kategorie:** Internationale Politik  
**Originalfrage:** Wie heißt das industriepolitische Leitprojekt der EU-Kommission, das am 26. Februar 2025 vorgestellt wurde?  
**Antwortoptionen:** Green New Deal, Clean Industrial Deal, European Competitiveness Pact, Industrial Transition Fund  
**Markierte richtige Antwort:** Clean Industrial Deal  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025eu006`

**Kategorie:** Internationale Politik  
**Originalfrage:** Ab welchem Datum greifen im EU AI Act die Verbote verbotener KI-Praktiken?  
**Antwortoptionen:** 1. Januar 2025, 2. Februar 2025, 2. August 2025, 2. August 2026  
**Markierte richtige Antwort:** 2. Februar 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** EU Digital Strategy; EU-Amtsblatt; ggf. 2026 Omnibus-Update  

---

### Frage-ID: `djs2025ip009`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welchen japanischen Städten wurden 2025 die 80. Jahrestage der Atombombenabwürfe begangen?  
**Antwortoptionen:** Tokio, Hiroshima, Nagasaki, Osaka  
**Markierte richtige Antwort:** Hiroshima / Nagasaki  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025sc010`

**Kategorie:** Internationale Politik  
**Originalfrage:** In welchem Land ist seit April 2025 eine Brigade der Bundeswehr dauerhaft stationiert?  
**Antwortoptionen:** Polen, Lettland, Litauen, Estland  
**Markierte richtige Antwort:** Litauen  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Bundestag; BMVg; NATO  

---

### Frage-ID: `djs2026eu001`

**Kategorie:** Internationale Politik  
**Originalfrage:** Ab welchem Datum beginnt die Anwendung des EU-Migrations- und Asylpakts?  
**Antwortoptionen:** 1. Januar 2026, 23. Februar 2026, 12. Juni 2026, 2. August 2026  
**Markierte richtige Antwort:** 12. Juni 2026  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** EU-Kommission; Rat der EU  

---

### Frage-ID: `djs2026eu002`

**Kategorie:** Internationale Politik  
**Originalfrage:** Ab welchem Datum soll der EU AI Act vollständig anwendbar sein?  
**Antwortoptionen:** 2. Februar 2026, 12. Juni 2026, 2. August 2026, 1. Januar 2027  
**Markierte richtige Antwort:** 2. August 2026  
**Status:** `AKTUALISIEREN`  
**Priorität:** `MITTEL`  
**Prüfung:** „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.  
**Problem, falls vorhanden:** „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.  
**Korrekturvorschlag:** Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“  
**Empfohlene finale Version:** Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“  
**Quellen-/Recherchehinweis:** EU Digital Strategy; EU-Kommission; EU-Amtsblatt  

---

### Frage-ID: `djs2022sc003`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welche Wirtschaftsprüfungsgesellschaft war in den Wirecard-Skandal verwickelt?  
**Antwortoptionen:** KPMG, Deloitte, PricewaterhouseCoopers, Ernst & Young  
**Markierte richtige Antwort:** Ernst & Young  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2023sc002`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welche Kryptobörse meldete 2022 Insolvenz an und löste eine weltweite Kryptokrise aus?  
**Antwortoptionen:** Coinbase, Binance, FTX, Kraken  
**Markierte richtige Antwort:** FTX  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025match002`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Ordnen Sie die Kennzahlen der deutschen Wirtschaft (April 2025) den richtigen Werten zu.  
**Antwortoptionen:** Schuldenstandsquote, Arbeitslosenquote, Inflationsrate, Wachstum des BIP  
**Markierte richtige Antwort:** Schuldenstandsquote → 62,5 Prozent / Arbeitslosenquote → 6,3 Prozent / Inflationsrate → 2,4 Prozent / Wachstum des BIP → 0,2 Prozent  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025wf001`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Auf welchen Wert sank der EZB-Einlagensatz nach den Zinssenkungen im März und Juni 2025?  
**Antwortoptionen:** 2,5 Prozent, 2,0 Prozent, 1,75 Prozent, 1,5 Prozent  
**Markierte richtige Antwort:** 2,0 Prozent  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** EZB  

---

### Frage-ID: `djs2025wf002`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welche Institution schätzte das BIP-Wachstum der Eurozone für das Gesamtjahr 2025 auf plus 1,5 Prozent?  
**Antwortoptionen:** IWF, EZB, Eurostat, EU-Kommission  
**Markierte richtige Antwort:** Eurostat  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Eurostat  

---

### Frage-ID: `djs2026eu003`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Wofür steht die Abkürzung CBAM und ab wann gilt sein definitiver Anwendungsrahmen?  
**Antwortoptionen:** Carbon Border Adjustment Mechanism, ab Januar 2026, Clean Business Adaptation Measure, ab Juli 2026, Carbon Budget Alignment Model, ab Januar 2027, Common Border Agriculture Mechanism, ab Januar 2026  
**Markierte richtige Antwort:** Carbon Border Adjustment Mechanism, ab Januar 2026  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** UBA; BMUV  

---

### Frage-ID: `djs2026wf001`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welche Organisation prognostizierte im April 2026 ein Weltwirtschaftswachstum von 3,1 Prozent für 2026?  
**Antwortoptionen:** Weltbank, IWF (IMF), WTO, OECD  
**Markierte richtige Antwort:** IWF (IMF)  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** IWF/IMF World Economic Outlook  

---

### Frage-ID: `djs2026wf002`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welches BIP-Wachstum prognostizierte die Bundesregierung für Deutschland im Jahr 2026?  
**Antwortoptionen:** 0,0 Prozent (Stagnation), 0,5 Prozent, 1,2 Prozent, 1,8 Prozent  
**Markierte richtige Antwort:** 0,5 Prozent  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bundesregierung / BMWK Frühjahrsprojektion  

---

### Frage-ID: `djs2026wf003`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welche internationale Organisation warnte 2025/26, dass US-Zölle und globale Unsicherheit zu einer atypischen Handelsdynamik mit Vorzieheffekten und anschließendem Einbruch führten?  
**Antwortoptionen:** Internationaler Währungsfonds (IWF), Welthandelsorganisation (WTO), Weltbank, OECD  
**Markierte richtige Antwort:** Welthandelsorganisation (WTO)  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** IWF/IMF World Economic Outlook  

---

### Frage-ID: `djs2026wf-neu-171`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welche Kryptobörse brach 2022 zusammen und löste eine Vertrauenskrise im Kryptomarkt aus?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** FTX  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-172`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Der Betrugsfall um Sam Bankman-Fried betraf welche Handelsplattform?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** FTX  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-173`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welche Wirtschaftsprüfungsgesellschaft testierte jahrelang Wirecards Bilanzen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Ernst & Young  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-174`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Der Wirecard-Skandal brachte vor allem welche Prüfungsgesellschaft in Erklärungsnot?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Ernst & Young  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-175`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Auf welchen Wert fiel der EZB-Einlagensatz nach den Zinssenkungen im März und Juni 2025?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 2,0 Prozent  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EZB  
**Variantencluster:** Variante von `djs2025wf001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-176`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Der Zinssenkungszyklus der EZB brachte den Einlagensatz bis Juni 2025 auf welches Niveau?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 2,0 Prozent  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** EZB  
**Variantencluster:** Variante von `djs2025wf001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-177`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welche Institution veröffentlichte die Schätzung eines Eurozonen-BIP-Wachstums von 1,5 Prozent für 2025?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Eurostat  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Eurostat  
**Variantencluster:** Variante von `djs2025wf002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-178`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Bei offiziellen EU-Wirtschaftsdaten ist welche Statistikbehörde für Eurozonen-Schätzungen zentral?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Eurostat  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Eurostat  
**Variantencluster:** Variante von `djs2025wf002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-179`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Wofür steht CBAM, und ab wann gilt die definitive Phase?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Carbon Border Adjustment Mechanism, ab Januar 2026  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2026eu003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-180`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Das EU-Grenzausgleichsinstrument für CO2-intensive Importe heißt wie und startet vollständig wann?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Carbon Border Adjustment Mechanism, ab Januar 2026  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2026eu003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-181`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welche Organisation prognostizierte im April 2026 ein Weltwirtschaftswachstum von 3,1 Prozent?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** IWF (IMF)  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** IWF/IMF World Economic Outlook  
**Variantencluster:** Variante von `djs2026wf001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-182`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Die globale Wachstumsprognose von 3,1 Prozent für 2026 kam von welcher Finanzinstitution?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** IWF (IMF)  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** IWF/IMF World Economic Outlook  
**Variantencluster:** Variante von `djs2026wf001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-183`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welches BIP-Wachstum erwartete die Bundesregierung im Frühjahr 2026 für Deutschland?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 0,5 Prozent  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundesregierung / BMWK Frühjahrsprojektion  
**Variantencluster:** Variante von `djs2026wf002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-184`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Die deutsche Konjunkturprognose der Bundesregierung lag 2026 bei welchem schwachen Plus?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 0,5 Prozent  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2026wf002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-185`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Welche Organisation beschrieb 2025/26 Vorzieheffekte und Einbruch im Welthandel durch US-Zölle?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Welthandelsorganisation (WTO)  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** WTO; WTO Global Trade Outlook  
**Variantencluster:** Variante von `djs2026wf003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wf-neu-186`

**Kategorie:** Wirtschaft & Finanzen  
**Originalfrage:** Wenn es um globale Handelsströme und Zollfolgen geht, welche Organisation ist hier gemeint?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Welthandelsorganisation (WTO)  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** WTO; WTO Global Trade Outlook  
**Variantencluster:** Variante von `djs2026wf003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2019sc001`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Wer sagte den Satz vom 'brennenden Haus' auf der Klimakonferenz in Davos?  
**Antwortoptionen:** Alexandria Ocasio-Cortez, Angela Merkel, Greta Thunberg, Luisa Neubauer  
**Markierte richtige Antwort:** Greta Thunberg  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2022sc004`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Wie lautete das Unwort des Jahres 2021?  
**Antwortoptionen:** Querdenker, Coronamüde, Pushback, Systemrelevant  
**Markierte richtige Antwort:** Pushback  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Unwort-des-Jahres-Jury; Duden/Medienberichte  

---

### Frage-ID: `djs2022sc006`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** An welches Land sollten über 1000 Benin-Bronzen zurückgegeben werden?  
**Antwortoptionen:** Ghana, Kamerun, Nigeria, Äthiopien  
**Markierte richtige Antwort:** Nigeria  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Auswärtiges Amt; Stiftung Preußischer Kulturbesitz; Nigeria  

---

### Frage-ID: `djs2025gr001`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Ab welchem Datum wurden Leistungserbringer verpflichtet, die elektronische Patientenakte (ePA) zu nutzen?  
**Antwortoptionen:** 29. April 2025, 1. Juli 2025, 1. Oktober 2025, 1. Januar 2026  
**Markierte richtige Antwort:** 1. Oktober 2025  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** BMG; gematik  

---

### Frage-ID: `djs2025match001`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Ordnen Sie die folgenden Zitate den richtigen Personen zu.  
**Antwortoptionen:** Simone Biles, Christian Lindner, Friedrich Merz, Gisèle Pelicot  
**Markierte richtige Antwort:** Simone Biles → Aussage zur mentalen Gesundheit im Leistungssport / Christian Lindner → Eine Entlassung könne auch Befreiung sein / Friedrich Merz → Kritik an Vier-Tage-Woche / Gisèle Pelicot → Nicht sie solle sich schämen, sondern die Täter  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Deutscher Bundestag; Bundespräsident  

---

### Frage-ID: `djs2025mc001`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** In welchen Städten kam es zwischen Dezember 2024 und April 2025 zu besonders beachteten Autoanschlägen bzw. Amokfahrten? (Mehrere Antworten möglich)  
**Antwortoptionen:** Berlin, Magdeburg, Mannheim, Wien, Vancouver  
**Markierte richtige Antwort:** Magdeburg / Mannheim / Vancouver  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025mc002`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Welche Wörter wurden 2024 neu in den Duden aufgenommen? (Mehrere Antworten möglich)  
**Antwortoptionen:** ChatGPT, Deutschlandticket, Triggerwarnung, Wokeness, Klimakleber  
**Markierte richtige Antwort:** ChatGPT / Deutschlandticket / Triggerwarnung / Wokeness / Klimakleber  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2026gr-neu-047`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Welches Wort wurde wegen pauschaler Kriminalisierung von Klimaaktivisten zum Unwort des Jahres 2022 gewählt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Klimaterroristen  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Unwort-des-Jahres-Jury; Duden/Medienberichte  
**Variantencluster:** Variante von `djs2023sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026gr-neu-048`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Die Debatte um die Letzte Generation prägte welches Unwort des Jahres 2022?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Klimaterroristen  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Unwort-des-Jahres-Jury; Duden/Medienberichte  
**Variantencluster:** Variante von `djs2023sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026gr-neu-049`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Welcher Begriff für das Zurückdrängen Schutzsuchender wurde zum Unwort des Jahres 2021?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Pushback  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Unwort-des-Jahres-Jury; Duden/Medienberichte  
**Variantencluster:** Variante von `djs2022sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026gr-neu-050`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Die Jury kritisierte welches Wort, weil es völkerrechtswidrige Zurückweisungen sprachlich verschleiere?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Pushback  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026gr-neu-051`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** An welchen Staat sollten deutsche Museen mehr als 1.000 Benin-Bronzen zurückgeben?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Nigeria  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Auswärtiges Amt; Stiftung Preußischer Kulturbesitz; Nigeria  
**Variantencluster:** Variante von `djs2022sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026gr-neu-052`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Die Restitution geraubter Bronzen aus dem Königreich Benin betrifft heute vor allem welches Land?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Nigeria  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Auswärtiges Amt; Stiftung Preußischer Kulturbesitz; Nigeria  
**Variantencluster:** Variante von `djs2022sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026gr-neu-053`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Wer prägte auf dem Weltwirtschaftsforum in Davos das Bild vom brennenden Haus?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Greta Thunberg  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2019sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026gr-neu-054`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Die Formulierung „Unser Haus brennt“ machte welche Klimaaktivistin international noch bekannter?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Greta Thunberg  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2019sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2023sc005`

**Kategorie:** Gesellschaft & Recht  
**Originalfrage:** Wie lautete das Unwort des Jahres 2022?  
**Antwortoptionen:** Coronamüde, Wärmepumpe, Klimaterroristen, Pushback  
**Markierte richtige Antwort:** Klimaterroristen  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Unwort-des-Jahres-Jury; Duden/Medienberichte  

---

### Frage-ID: `djs2018sc005`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Was ist CRISPR-Cas9?  
**Antwortoptionen:** Ein Impfstofftyp, Eine Genschere zur gezielten Veränderung von DNA, Ein Quantencomputer-Algorithmus, Ein Sicherheitsprotokoll für Netzwerke  
**Markierte richtige Antwort:** Eine Genschere zur gezielten Veränderung von DNA  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2019sc005`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Welcher Konzern durfte in den USA und anderen Ländern nicht am 5G-Ausbau teilnehmen?  
**Antwortoptionen:** ZTE, Huawei, Samsung, Xiaomi  
**Markierte richtige Antwort:** Huawei  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2022sc008`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Wo wurde die Omikron-Variante des Coronavirus zuerst nachgewiesen?  
**Antwortoptionen:** Indien, Brasilien, Südafrika, Indonesien  
**Markierte richtige Antwort:** Südafrika  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** WHO / World Health Assembly  

---

### Frage-ID: `djs2024mc001`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Welche Länder schafften in den vergangenen 12 Monaten eine Mondlandung? (Mehrere Antworten möglich)  
**Antwortoptionen:** USA, China, Indien, Japan, Russland  
**Markierte richtige Antwort:** Indien / Japan  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `MITTEL`  
**Prüfung:** Formulierung „in den vergangenen 12 Monaten“ ist ohne Prüfungs-/Stichtag nicht eindeutig. Im Archiv vertretbar, im aktiven Pool riskant.  
**Problem, falls vorhanden:** Formulierung „in den vergangenen 12 Monaten“ ist ohne Prüfungs-/Stichtag nicht eindeutig. Im Archiv vertretbar, im aktiven Pool riskant.  
**Korrekturvorschlag:** Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“.  
**Empfohlene finale Version:** Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“.  
**Quellen-/Recherchehinweis:** Rat der EU; EU-Kommission  

---

### Frage-ID: `djs2024sc002`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Wer erhielt 2023 den Wirtschaftsnobelpreis?  
**Antwortoptionen:** Esther Duflo, Claudia Goldin, Janet Yellen, Nouriel Roubini  
**Markierte richtige Antwort:** Claudia Goldin  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025mc003`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Welche Software-Anwendungen stammen aus Europa und werden als Alternativen zu US-Tools gehandelt? (Mehrere Antworten möglich)  
**Antwortoptionen:** DeepL, Threema, Signal, Slack, Zoom  
**Markierte richtige Antwort:** DeepL / Threema  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** The Atlantic; AP/Reuters  

---

### Frage-ID: `djs2026sc001`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Wie heißt die NASA-Mission, die vom 1. bis 10. April 2026 die erste bemannte Mondumrundung seit rund 50 Jahren durchführte?  
**Antwortoptionen:** Apollo 18, Artemis I, Artemis II, Luna Gateway  
**Markierte richtige Antwort:** Artemis II  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** NASA  

---

### Frage-ID: `djs2025match003`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** 🔵 Ordnen Sie die Konzernchefs, die bei Trumps Vereidigung anwesend waren, ihren Unternehmen zu.  
**Antwortoptionen:** Jeff Bezos, Tim Cook, Sundar Pichai, Sam Altman  
**Markierte richtige Antwort:** Jeff Bezos → Amazon / Tim Cook → Apple / Sundar Pichai → Google / Sam Altman → OpenAI  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** „Konzernchefs“ ist nicht für alle Einträge gleich sauber; OpenAI ist kein klassischer börsennotierter Konzern.  
**Problem, falls vorhanden:** „Konzernchefs“ ist nicht für alle Einträge gleich sauber; OpenAI ist kein klassischer börsennotierter Konzern.  
**Korrekturvorschlag:** Frage zu „Tech-Spitzenmanager / Unternehmenschefs“ umformulieren.  
**Empfohlene finale Version:** Frage zu „Tech-Spitzenmanager / Unternehmenschefs“ umformulieren.  
**Quellen-/Recherchehinweis:** AP/Reuters; White House-Berichterstattung  

---

### Frage-ID: `djs2026wt-neu-187`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Wer erhielt 2023 den Wirtschaftsnobelpreis für Forschung zu Frauen auf dem Arbeitsmarkt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Claudia Goldin  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-188`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Die Analyse des Gender Pay Gap und der Motherhood Penalty brachte welcher Harvard-Ökonomin den Nobelpreis?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Claudia Goldin  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-189`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Welche Länder schafften innerhalb der relevanten Zwölf-Monats-Periode erfolgreiche Mondlandungen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Indien und Japan  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024mc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-190`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Chandrayaan-3 und SLIM stehen für Mondlandeerfolge welcher beiden Staaten?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Indien und Japan  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024mc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-191`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Was demonstrierte die NASA mit der DART-Mission erstmals erfolgreich?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Die Umlaufbahn eines Asteroiden zu verändern  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** NASA  
**Variantencluster:** Variante von `djs2023sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-192`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Der Einschlag in Dimorphos bewies welche Möglichkeit der planetaren Verteidigung?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Die Umlaufbahn eines Asteroiden zu verändern  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-193`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Ab wann hält der IPCC eine Überschreitung von 1,5 Grad ohne zusätzliche Maßnahmen für wahrscheinlich?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 2030  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `MITTEL`  
**Prüfung:** Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.  
**Problem, falls vorhanden:** Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.  
**Korrekturvorschlag:** Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.  
**Empfohlene finale Version:** Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.  
**Quellen-/Recherchehinweis:** IPCC AR6 / Synthesis Report  
**Variantencluster:** Variante von `djs2023sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-194`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Die Warnung vor dem frühen Reißen der 1,5-Grad-Schwelle verweist auf welches Jahr?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 2030  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `MITTEL`  
**Prüfung:** Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.  
**Problem, falls vorhanden:** Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.  
**Korrekturvorschlag:** Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.  
**Empfohlene finale Version:** Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.  
**Quellen-/Recherchehinweis:** IPCC AR6 / Synthesis Report  
**Variantencluster:** Variante von `djs2023sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-195`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Wo wurde die Omikron-Variante des Coronavirus zuerst nachgewiesen und der WHO gemeldet?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Südafrika  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** WHO / World Health Assembly  
**Variantencluster:** Variante von `djs2022sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-196`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Die schnelle Identifikation von B.1.1.529 erfolgte zuerst in welchem Land?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Südafrika  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-197`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Welcher chinesische Konzern wurde in mehreren Ländern vom 5G-Ausbau ausgeschlossen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Huawei  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2019sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-198`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Der Technologiekonflikt zwischen USA und China drehte sich beim 5G-Netz besonders um welchen Anbieter?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Huawei  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2019sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-199`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Was ist CRISPR-Cas9?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Eine Genschere zur gezielten Veränderung von DNA  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2018sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-200`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Welche biotechnologische Methode erlaubt das gezielte Schneiden und Verändern von DNA?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Eine Genschere zur gezielten Veränderung von DNA  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Die Frage fragt nach der Methode; die Antwort beschreibt die Methode. Für Kurzantwort-Scoring wäre „CRISPR-Cas9“ als Zielantwort robuster.  
**Problem, falls vorhanden:** Die Frage fragt nach der Methode; die Antwort beschreibt die Methode. Für Kurzantwort-Scoring wäre „CRISPR-Cas9“ als Zielantwort robuster.  
**Korrekturvorschlag:** Antwort auf „CRISPR-Cas9“ setzen oder Alias „Genschere“ erlauben.  
**Empfohlene finale Version:** Antwort auf „CRISPR-Cas9“ setzen oder Alias „Genschere“ erlauben.  
**Quellen-/Recherchehinweis:** Nobelpreis / Fachquellen  
**Variantencluster:** Variante von `djs2018sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-201`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Wie heißt die NASA-Mission der ersten bemannten Mondumrundung seit rund 50 Jahren?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Artemis II  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** NASA  
**Variantencluster:** Variante von `djs2026sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026wt-neu-202`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Die bemannte Mondumrundung im Artemis-Programm trägt welche Missionsnummer?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Artemis II  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** NASA  
**Variantencluster:** Variante von `djs2026sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2023sc003`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Was gelang der NASA mit der DART-Sonde?  
**Antwortoptionen:** Erstmals auf dem Mars landen, Die Umlaufbahn eines Asteroiden zu verändern, Einen Kometen zu beproben, Den Jupitermond Europa zu kartieren  
**Markierte richtige Antwort:** Die Umlaufbahn eines Asteroiden zu verändern  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** NASA  

---

### Frage-ID: `djs2023sc004`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Ab wann hält der Weltklimarat 1,5 Grad Erwärmung ohne zusätzliche Maßnahmen für wahrscheinlich?  
**Antwortoptionen:** 2028, 2029, 2030, 2035  
**Markierte richtige Antwort:** 2030  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `MITTEL`  
**Prüfung:** Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.  
**Problem, falls vorhanden:** Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.  
**Korrekturvorschlag:** Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.  
**Empfohlene finale Version:** Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.  
**Quellen-/Recherchehinweis:** IPCC AR6 / Synthesis Report  

---

### Frage-ID: `djs2025sc001`

**Kategorie:** Wissenschaft & Technik  
**Originalfrage:** Wie lange saßen die NASA-Astronauten Butch Wilmore und Suni Williams auf der ISS fest?  
**Antwortoptionen:** 3 Monate, 6 Monate, 9 Monate, 12 Monate  
**Markierte richtige Antwort:** 9 Monate  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** NASA  

---

### Frage-ID: `djs2019sc002`

**Kategorie:** Sport  
**Originalfrage:** Wer sagte, er sei Deutscher beim Gewinnen und Immigrant beim Verlieren?  
**Antwortoptionen:** Ilkay Gündogan, Mesut Özil, Leroy Sané, Emre Can  
**Markierte richtige Antwort:** Mesut Özil  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025sp001`

**Kategorie:** Sport  
**Originalfrage:** Wo fanden die Rhine-Ruhr 2025 FISU World University Games statt?  
**Antwortoptionen:** Bayern, Rhein-Main-Gebiet, Ruhrgebiet und Berlin, Hamburg und Schleswig-Holstein  
**Markierte richtige Antwort:** Ruhrgebiet und Berlin  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025sp002`

**Kategorie:** Sport  
**Originalfrage:** In welchem Land fand die UEFA Women's EURO 2025 statt?  
**Antwortoptionen:** Deutschland, Frankreich, Schweiz, Niederlande  
**Markierte richtige Antwort:** Schweiz  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** UEFA  

---

### Frage-ID: `djs2025sp003`

**Kategorie:** Sport  
**Originalfrage:** In welcher Stadt fand das Finale der UEFA Women's EURO 2025 statt?  
**Antwortoptionen:** Zürich, Genf, Bern, Basel  
**Markierte richtige Antwort:** Basel  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** UEFA  

---

### Frage-ID: `djs2026sp003`

**Kategorie:** Sport  
**Originalfrage:** Wann fanden die Olympischen Winterspiele Milano Cortina 2026 statt?  
**Antwortoptionen:** 6. bis 22. Januar 2026, 6. bis 22. Februar 2026, 6. bis 22. März 2026, 6. bis 22. April 2026  
**Markierte richtige Antwort:** 6. bis 22. Februar 2026  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** IOC/Olympics.com  

---

### Frage-ID: `djs2026sp-neu-155`

**Kategorie:** Sport  
**Originalfrage:** Welcher Fußballer schrieb, er sei beim Gewinnen Deutscher und beim Verlieren Immigrant?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Mesut Özil  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2019sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-156`

**Kategorie:** Sport  
**Originalfrage:** Der Rücktritt aus der Nationalmannschaft 2018 und die Rassismusdebatte sind eng mit welchem Spieler verbunden?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Mesut Özil  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2019sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-157`

**Kategorie:** Sport  
**Originalfrage:** Wo fanden die Rhine-Ruhr 2025 FISU World University Games statt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Ruhrgebiet und Berlin  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025sp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-158`

**Kategorie:** Sport  
**Originalfrage:** Das Multisportevent der Studierenden wurde 2025 in welchen deutschen Regionen beziehungsweise Städten ausgetragen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Ruhrgebiet und Berlin  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025sp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-159`

**Kategorie:** Sport  
**Originalfrage:** Welches Land richtete die UEFA Women's EURO 2025 aus?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Schweiz  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** UEFA  
**Variantencluster:** Variante von `djs2025sp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-160`

**Kategorie:** Sport  
**Originalfrage:** Die Frauenfußball-EM 2025 wurde erstmals in welchem Alpenland ausgetragen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Schweiz  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2025sp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-161`

**Kategorie:** Sport  
**Originalfrage:** In welcher Stadt wurde das Finale der UEFA Women's EURO 2025 ausgetragen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Basel  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** UEFA  
**Variantencluster:** Variante von `djs2025sp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-162`

**Kategorie:** Sport  
**Originalfrage:** Der Endspielort der Frauen-EM 2025 lag in welcher Schweizer Stadt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Basel  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** UEFA  
**Variantencluster:** Variante von `djs2025sp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-163`

**Kategorie:** Sport  
**Originalfrage:** In welchem Zeitraum fand die erste FIFA-Klub-WM im 32-Teams-Format statt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 14. Juni – 13. Juli 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** FIFA; Olympics.com  
**Variantencluster:** Variante von `djs2025sp004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-164`

**Kategorie:** Sport  
**Originalfrage:** Das neue Format des FIFA Club World Cup wurde 2025 in den USA zwischen welchen Daten gespielt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 14. Juni – 13. Juli 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** FIFA; Olympics.com  
**Variantencluster:** Variante von `djs2025sp004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-165`

**Kategorie:** Sport  
**Originalfrage:** Mit wie vielen Mannschaften wird die Fußball-WM 2026 ausgetragen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 48 Teams  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** FIFA; Olympics.com  
**Variantencluster:** Variante von `djs2026sp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-166`

**Kategorie:** Sport  
**Originalfrage:** Die Erweiterung der Männer-WM 2026 hebt die Teilnehmerzahl auf welchen Wert?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 48 Teams  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Deutscher Bundestag; Bundespräsident  
**Variantencluster:** Variante von `djs2026sp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-167`

**Kategorie:** Sport  
**Originalfrage:** Welche drei Länder richten die Fußball-Weltmeisterschaft 2026 gemeinsam aus?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** USA, Kanada und Mexiko  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2026sp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-168`

**Kategorie:** Sport  
**Originalfrage:** Die erste Männer-WM mit drei Gastgebern findet in welchen Staaten Nordamerikas statt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** USA, Kanada und Mexiko  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2026sp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-169`

**Kategorie:** Sport  
**Originalfrage:** Wann fanden die Olympischen Winterspiele Milano Cortina 2026 statt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 6. bis 22. Februar 2026  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** IOC/Olympics.com  
**Variantencluster:** Variante von `djs2026sp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026sp-neu-170`

**Kategorie:** Sport  
**Originalfrage:** Die Winterspiele in Italien liefen 2026 über welchen Februar-Zeitraum?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** 6. bis 22. Februar 2026  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2026sp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2025sp004`

**Kategorie:** Sport  
**Originalfrage:** Im welchen Zeitraum fand der neue FIFA Club World Cup 2025 erstmals im 32-Teams-Format statt?  
**Antwortoptionen:** 14. Mai – 13. Juni 2025, 14. Juni – 13. Juli 2025, 14. Juli – 13. August 2025, 14. August – 13. September 2025  
**Markierte richtige Antwort:** 14. Juni – 13. Juli 2025  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** FIFA; Olympics.com  

---

### Frage-ID: `djs2026sp001`

**Kategorie:** Sport  
**Originalfrage:** Wie viele Teams nehmen an der FIFA Fußball-Weltmeisterschaft 2026 teil?  
**Antwortoptionen:** 32 Teams, 40 Teams, 48 Teams, 64 Teams  
**Markierte richtige Antwort:** 48 Teams  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** FIFA; Olympics.com  

---

### Frage-ID: `djs2026sp002`

**Kategorie:** Sport  
**Originalfrage:** In welchen drei Ländern findet die FIFA Fußball-Weltmeisterschaft 2026 statt?  
**Antwortoptionen:** USA, Kanada, Mexiko, Brasilien  
**Markierte richtige Antwort:** USA / Kanada / Mexiko  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** FIFA; Olympics.com  

---

### Frage-ID: `djs2018sc002`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Wie heißt das Gesetz zu schnellen Löschpflichten für soziale Netzwerke in Deutschland?  
**Antwortoptionen:** Digitales-Dienste-Gesetz, Netzwerkdurchsetzungsgesetz, Social-Media-Regulierungsgesetz, Hassreden-Bekämpfungsgesetz  
**Markierte richtige Antwort:** Netzwerkdurchsetzungsgesetz  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bundesjustizministerium; Gesetzestext  

---

### Frage-ID: `djs2018sc004`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Was war besonders an der Produktion der Serie 'Babylon Berlin'?  
**Antwortoptionen:** Sie war Deutschlands erste Netflix-Original-Produktion, Sie war eine sehr teure Kooperation von ARD und Sky, Sie war die erste deutsch-amerikanische Koproduktion, Sie wurde ausschließlich in der ARD-Mediathek veröffentlicht  
**Markierte richtige Antwort:** Sie war eine sehr teure Kooperation von ARD und Sky  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2019sc004`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welche Reportage enttarnte Claas Relotius vom Spiegel – und wer deckte ihn auf?  
**Antwortoptionen:** 'Der Letzte seiner Art' – enthüllt von seiner Redaktionsassistentin, 'Jaegers Grenze' – enthüllt von Juan Moreno, 'Löwenmädchen' – enthüllt von einem Leser, 'Fischer von Manila' – enthüllt von der Redaktion selbst  
**Markierte richtige Antwort:** 'Jaegers Grenze' – enthüllt von Juan Moreno  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Der Spiegel; Juan Moreno  

---

### Frage-ID: `djs2019sc006`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Warum wurde der Echo-Musikpreis 2018 eingestellt?  
**Antwortoptionen:** Wegen Betrugsvorwürfen gegen Jurymitglieder, Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang, Wegen mangelnder Einschaltquoten der Verleihung, Wegen Plagiatsvorwürfen gegen Gewinner  
**Markierte richtige Antwort:** Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2022sc001`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welche Netflix-Serie hatte den erfolgreichsten Serienstart des Streamingdienstes?  
**Antwortoptionen:** Bridgerton, Stranger Things, Squid Game, The Witcher  
**Markierte richtige Antwort:** Squid Game  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2022sc002`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welches Christo/Jeanne-Claude-Projekt wurde 2021 posthum verwirklicht?  
**Antwortoptionen:** Verhüllung des Reichstags, Verhüllung des Arc de Triomphe, Verhüllung der Brücken von Avignon, Umrahmung der Berliner Mauer  
**Markierte richtige Antwort:** Verhüllung des Arc de Triomphe  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2024mc003`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welche Kulturgüter wurden 2023 für mehr als eine Million Euro versteigert? (Mehrere Antworten möglich)  
**Antwortoptionen:** Freddie Mercurys Klavier, Gustav Klimts 'Dame mit Fächer', Picassos 'Guernica', Ferrari 330LM/250 GTO, Andy Warhols 'Marilyn'  
**Markierte richtige Antwort:** Freddie Mercurys Klavier / Gustav Klimts 'Dame mit Fächer' / Ferrari 330LM/250 GTO  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2024sc001`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welcher Rechercheverbund berichtete über ein Treffen von Rechtsextremisten in Potsdam?  
**Antwortoptionen:** Rechercheverbund NDR/WDR/SZ, Netzwerk Recherche, Paper Trail Media, Correctiv  
**Markierte richtige Antwort:** Correctiv  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** EU-Kommission; Rat der EU  

---

### Frage-ID: `djs2025match005`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Ordnen Sie die Autorinnen und Autoren ihren literarischen Auszeichnungen 2024 zu.  
**Antwortoptionen:** Samantha Harvey, Martina Hefter, Tijan Sila, Han Kang  
**Markierte richtige Antwort:** Samantha Harvey → Booker Prize / Martina Hefter → Deutscher Buchpreis / Tijan Sila → Ingeborg-Bachmann-Preis / Han Kang → Literaturnobelpreis  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2025sc005`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Chefredakteur welches US-Magazins las in einer Chatgruppe mit, in der US-Angriffe auf den Jemen geplant wurden?  
**Antwortoptionen:** The New Yorker, The Atlantic, Time Magazine, Foreign Affairs  
**Markierte richtige Antwort:** The Atlantic  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** White House; Federal Register; AP/Reuters  

---

### Frage-ID: `djs2025sc009`

**Kategorie:** Kultur & Medien  
**Originalfrage:** In welchem Konflikt wurden laut Reporter ohne Grenzen seit dem 7. Oktober 2023 besonders viele Journalistinnen und Journalisten getötet?  
**Antwortoptionen:** Ukraine-Krieg, Konflikt in Gaza / Gazastreifen, Krieg in Sudan, Krieg in Myanmar  
**Markierte richtige Antwort:** Konflikt in Gaza / Gazastreifen  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** RSF; CPJ; AP  

---

### Frage-ID: `djs2026mc-neu-137`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welches Recherchezentrum veröffentlichte 2024 die Recherche zum Potsdamer Treffen von Rechtsextremisten?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Correctiv  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Correctiv; Tagesschau/Deutschlandfunk zur Rezeption  
**Variantencluster:** Variante von `djs2024sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-138`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Die Berichterstattung über „Remigration“-Pläne und das Treffen in Potsdam geht auf welchen Rechercheverbund zurück?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Correctiv  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Correctiv; Tagesschau/Deutschlandfunk zur Rezeption  
**Variantencluster:** Variante von `djs2024sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-139`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welche drei Kulturgüter erzielten 2023 Auktionspreise von mehr als einer Million Euro?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Freddie Mercurys Klavier, Klimts „Dame mit Fächer“ und Ferrari 330LM/250 GTO  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024mc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-140`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Klimts Rekordbild, Freddie Mercurys Instrument und ein seltener Ferrari stehen für welche Auktionsereignisse 2023?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Freddie Mercurys Klavier, Klimts „Dame mit Fächer“ und Ferrari 330LM/250 GTO  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024mc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-141`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welche berühmten Kunstwerke beziehungsweise Künstler wurden 2022 Ziel von Klima-Protestaktionen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Van Gogh, Monet, Raffael und Mona Lisa/Da Vinci  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023mc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-142`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Tomatensuppe, Kartoffelbrei und Klebeaktionen richteten sich 2022 symbolisch gegen Werke welcher Künstler?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Van Gogh, Monet, Raffael und Mona Lisa/Da Vinci  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023mc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-143`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welche Netflix-Serie wurde zum erfolgreichsten Serienstart des Streamingdienstes?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Squid Game  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-144`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Die globale Hallyu-Welle erhielt durch welche südkoreanische Netflix-Serie einen Rekordschub?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Squid Game  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-145`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welches Christo-und-Jeanne-Claude-Projekt wurde 2021 nach Christos Tod realisiert?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Verhüllung des Arc de Triomphe  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-146`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Das Pariser Monument, das 2021 temporär verhüllt wurde, war welches Bauwerk?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Verhüllung des Arc de Triomphe  
**Status:** `TEILWEISE_FALSCH`  
**Priorität:** `HOCH`  
**Prüfung:** Die Frage fragt nach dem Bauwerk. Hinterlegt ist das Projekt „Verhüllung des Arc de Triomphe“.  
**Problem, falls vorhanden:** Die Frage fragt nach dem Bauwerk. Hinterlegt ist das Projekt „Verhüllung des Arc de Triomphe“.  
**Korrekturvorschlag:** Antwort auf „Arc de Triomphe“ ändern.  
**Empfohlene finale Version:** Antwort: „Arc de Triomphe“.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2022sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-147`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welche Spiegel-Reportage brachte den Relotius-Skandal ins Rollen, und wer deckte ihn auf?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** „Jaegers Grenze“ – Juan Moreno  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Der Spiegel; Juan Moreno  
**Variantencluster:** Variante von `djs2019sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-148`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Juan Moreno enttarnte Fälschungen seines Kollegen bei welcher Reportage?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** „Jaegers Grenze“ – Juan Moreno  
**Status:** `TEILWEISE_FALSCH`  
**Priorität:** `HOCH`  
**Prüfung:** Die Frage fragt nur nach der Reportage. Hinterlegt ist Reportage plus Aufdecker.  
**Problem, falls vorhanden:** Die Frage fragt nur nach der Reportage. Hinterlegt ist Reportage plus Aufdecker.  
**Korrekturvorschlag:** Antwort auf „Jaegers Grenze“ ändern.  
**Empfohlene finale Version:** Antwort: „Jaegers Grenze“.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2019sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-149`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Warum wurde der Echo-Musikpreis 2018 abgeschafft?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2019sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-150`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Die Auszeichnung eines Rap-Albums mit antisemitisch kritisierten Zeilen führte zum Ende welchen Musikpreises?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang  
**Status:** `TEILWEISE_FALSCH`  
**Priorität:** `HOCH`  
**Prüfung:** Die Frage fragt nach dem Musikpreis. Hinterlegt ist die Begründung für das Ende des Preises.  
**Problem, falls vorhanden:** Die Frage fragt nach dem Musikpreis. Hinterlegt ist die Begründung für das Ende des Preises.  
**Korrekturvorschlag:** Antwort auf „Echo“ bzw. „Echo-Musikpreis“ ändern.  
**Empfohlene finale Version:** Antwort: „Echo-Musikpreis“.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2019sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-151`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Wie heißt das deutsche Gesetz, das große soziale Netzwerke zu schnellen Löschverfahren verpflichtete?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Netzwerkdurchsetzungsgesetz  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2018sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-152`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Das Kürzel NetzDG steht für welches Gesetz zur Plattformregulierung?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Netzwerkdurchsetzungsgesetz  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bundesjustizministerium; Gesetzestext  
**Variantencluster:** Variante von `djs2018sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-153`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Was machte die Produktion von „Babylon Berlin“ medienwirtschaftlich besonders?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Eine sehr teure Kooperation von ARD und Sky  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2018sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026mc-neu-154`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Die Serie nach Volker Kutscher wurde auch durch ihre Finanzierung als Kooperation welcher Akteure bekannt?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Eine sehr teure Kooperation von ARD und Sky  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2018sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2023mc001`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Welche Gemälde wurden 2022 Ziel von Klima-Protesten? (Mehrere Antworten möglich)  
**Antwortoptionen:** Van Goghs 'Pfirsichbäume in Blüte', Monets 'Getreideschober', Raffaels 'Sixtinische Madonna', Picassos 'Guernica', Da Vincis 'Mona Lisa'  
**Markierte richtige Antwort:** Van Goghs 'Pfirsichbäume in Blüte' / Monets 'Getreideschober' / Raffaels 'Sixtinische Madonna' / Da Vincis 'Mona Lisa'  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Correctiv; Tagesschau/Deutschlandfunk zur Rezeption  

---

### Frage-ID: `djs2025sc004`

**Kategorie:** Kultur & Medien  
**Originalfrage:** Weshalb verlor Luke Mockridge 2024 seine neue Sat.1-Show?  
**Antwortoptionen:** Wegen eines Streits mit der Produktion, Wegen geringer Einschaltquoten, Wegen eines menschenverachtenden Spruchs über Paralympioniken, Wegen eines Plagiatsvorwurfs  
**Markierte richtige Antwort:** Wegen eines menschenverachtenden Spruchs über Paralympioniken  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Antwort ist inhaltlich richtig, aber stark wertend formuliert. Für faktennahe Lern-App neutraler formulieren.  
**Problem, falls vorhanden:** Antwort ist inhaltlich richtig, aber stark wertend formuliert. Für faktennahe Lern-App neutraler formulieren.  
**Korrekturvorschlag:** Antwort: „wegen abwertender/ableistischer Äußerungen über Paralympioniken“; Erklärung mit Quelle ergänzen.  
**Empfohlene finale Version:** Antwort: „wegen abwertender/ableistischer Äußerungen über Paralympioniken“; Erklärung mit Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2023sc006`

**Kategorie:** Geografie & Karten  
**Originalfrage:** In welchem Land wurden nach einem schweren Zugunglück Parlamentswahlen verschoben?  
**Antwortoptionen:** Griechenland, Italien, Türkei, Spanien  
**Markierte richtige Antwort:** Griechenland  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2023sc009`

**Kategorie:** Geografie & Karten  
**Originalfrage:** In welchem Land kam es bei einer Halloween-Party zu einer tödlichen Massenpanik?  
**Antwortoptionen:** Japan, Thailand, Südkorea, Indonesien  
**Markierte richtige Antwort:** Südkorea  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2024sc010`

**Kategorie:** Geografie & Karten  
**Originalfrage:** Wo musste wegen einer Erdbebenserie die Blaue Lagune vorübergehend geschlossen werden?  
**Antwortoptionen:** Neuseeland, Island, Japan, Türkei  
**Markierte richtige Antwort:** Island  
**Status:** `OK`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.  
**Problem, falls vorhanden:** —  
**Korrekturvorschlag:** Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.  
**Empfohlene finale Version:** Original kann bleiben.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2026geo-neu-035`

**Kategorie:** Geografie & Karten  
**Originalfrage:** Aus welchem Land stammten die Waldbrandrauchwolken, die 2023 bis nach New York zogen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Kanada  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026geo-neu-036`

**Kategorie:** Geografie & Karten  
**Originalfrage:** Ein orange verfärbter Himmel über Manhattan wurde 2023 zum Symbol für Waldbrände in welchem Staat?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Kanada  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026geo-neu-037`

**Kategorie:** Geografie & Karten  
**Originalfrage:** Welcher Staat überholte China 2023 als bevölkerungsreichstes Land der Erde?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Indien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026geo-neu-038`

**Kategorie:** Geografie & Karten  
**Originalfrage:** Seit 2023 steht welches Land in UN-Schätzungen an der Spitze der Weltbevölkerung?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Indien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026geo-neu-039`

**Kategorie:** Geografie & Karten  
**Originalfrage:** In welchem Land wurde der Präsidentschaftskandidat Fernando Villavicencio 2023 erschossen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Ecuador  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026geo-neu-040`

**Kategorie:** Geografie & Karten  
**Originalfrage:** Das Attentat auf einen investigativen Journalisten im Wahlkampf erschütterte 2023 welches südamerikanische Land?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Ecuador  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026geo-neu-041`

**Kategorie:** Geografie & Karten  
**Originalfrage:** In welchem Land musste die Blaue Lagune nach Erdbeben und Vulkangefahr zeitweise schließen?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Island  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc010`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026geo-neu-042`

**Kategorie:** Geografie & Karten  
**Originalfrage:** Die Reykjanes-Halbinsel mit Grindavík und der Blauen Lagune liegt in welchem Land?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Island  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2024sc010`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026geo-neu-043`

**Kategorie:** Geografie & Karten  
**Originalfrage:** In welchem Land wurde nach dem Zugunglück von Tempi der Wahlkalender politisch überlagert?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Griechenland  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026geo-neu-044`

**Kategorie:** Geografie & Karten  
**Originalfrage:** Das schwerste Bahnunglück der Landesgeschichte löste 2023 massive Proteste in welchem EU-Land aus?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Griechenland  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026geo-neu-045`

**Kategorie:** Geografie & Karten  
**Originalfrage:** In welchem Land starben 2022 in Itaewon viele Menschen bei einer Halloween-Massenpanik?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Südkorea  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023sc009`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2026geo-neu-046`

**Kategorie:** Geografie & Karten  
**Originalfrage:** Die tödliche Crowd-Katastrophe in einer engen Gasse von Seoul ereignete sich in welchem Land?  
**Antwortoptionen:** —  
**Markierte richtige Antwort:** Südkorea  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Problem, falls vorhanden:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
**Korrekturvorschlag:** Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.  
**Empfohlene finale Version:** Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  
**Variantencluster:** Variante von `djs2023sc009`. Gewollte Variation; nicht als Duplikatfehler bewertet.  

---

### Frage-ID: `djs2024sc006`

**Kategorie:** Geografie & Karten  
**Originalfrage:** Waldbrände in welchem Land lösten 2023 Smog-Alarm bis nach New York aus?  
**Antwortoptionen:** Australien, Kanada, Brasilien, USA  
**Markierte richtige Antwort:** Kanada  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2024sc007`

**Kategorie:** Geografie & Karten  
**Originalfrage:** Welches Land gilt seit 2023 als bevölkerungsreichstes Land der Welt?  
**Antwortoptionen:** China, Indien, USA, Indonesien  
**Markierte richtige Antwort:** Indien  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

### Frage-ID: `djs2024sc008`

**Kategorie:** Geografie & Karten  
**Originalfrage:** In welchem Land wurde 2023 ein Präsidentschaftskandidat bei einer Wahlveranstaltung erschossen?  
**Antwortoptionen:** Mexiko, Kolumbien, Ecuador, Peru  
**Markierte richtige Antwort:** Ecuador  
**Status:** `OK_MIT_HINWEIS`  
**Priorität:** `NIEDRIG`  
**Prüfung:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Problem, falls vorhanden:** Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.  
**Korrekturvorschlag:** Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.  
**Empfohlene finale Version:** Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.  
**Quellen-/Recherchehinweis:** Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa  

---

## 7. Duplikate und ähnliche Fragen

Gewollte Variantencluster wurden nicht als Fehler bewertet. Für die App-Logik sollten sie aber technisch sichtbar werden, damit Randomisierung nicht mehrfach denselben Wissenskontext direkt hintereinander ausspielt.

| Basis-ID | Varianten | Ähnlichkeit | Empfehlung |
|---|---|---|---|
| `djs2018sc001` | `djs2026dp-neu-005`, `djs2026dp-neu-006` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2018sc002` | `djs2026mc-neu-151`, `djs2026mc-neu-152` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2018sc003` | `djs2026ip-neu-077`, `djs2026ip-neu-078` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2018sc004` | `djs2026mc-neu-153`, `djs2026mc-neu-154` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2018sc005` | `djs2026wt-neu-199`, `djs2026wt-neu-200` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2019sc001` | `djs2026gr-neu-053`, `djs2026gr-neu-054` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2019sc002` | `djs2026sp-neu-155`, `djs2026sp-neu-156` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2019sc003` | `djs2026ip-neu-075`, `djs2026ip-neu-076` | hoch / gewollt | Inhaltlich vor Aktivierung korrigieren: djs2026ip-neu-076 |
| `djs2019sc004` | `djs2026mc-neu-147`, `djs2026mc-neu-148` | hoch / gewollt | Inhaltlich vor Aktivierung korrigieren: djs2026mc-neu-148 |
| `djs2019sc005` | `djs2026wt-neu-197`, `djs2026wt-neu-198` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2019sc006` | `djs2026mc-neu-149`, `djs2026mc-neu-150` | hoch / gewollt | Inhaltlich vor Aktivierung korrigieren: djs2026mc-neu-150 |
| `djs2022sc001` | `djs2026mc-neu-143`, `djs2026mc-neu-144` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2022sc002` | `djs2026mc-neu-145`, `djs2026mc-neu-146` | hoch / gewollt | Inhaltlich vor Aktivierung korrigieren: djs2026mc-neu-146 |
| `djs2022sc003` | `djs2026wf-neu-173`, `djs2026wf-neu-174` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2022sc004` | `djs2026gr-neu-049`, `djs2026gr-neu-050` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2022sc005` | `djs2026ip-neu-071`, `djs2026ip-neu-072` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2022sc006` | `djs2026gr-neu-051`, `djs2026gr-neu-052` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2022sc007` | `djs2026ip-neu-073`, `djs2026ip-neu-074` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2022sc008` | `djs2026wt-neu-195`, `djs2026wt-neu-196` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023mc001` | `djs2026mc-neu-141`, `djs2026mc-neu-142` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023mc002` | `djs2026ip-neu-065`, `djs2026ip-neu-066` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023mc003` | `djs2026dp-neu-003`, `djs2026dp-neu-004` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023sc001` | `djs2026ip-neu-063`, `djs2026ip-neu-064` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023sc002` | `djs2026wf-neu-171`, `djs2026wf-neu-172` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023sc003` | `djs2026wt-neu-191`, `djs2026wt-neu-192` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023sc004` | `djs2026wt-neu-193`, `djs2026wt-neu-194` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023sc005` | `djs2026gr-neu-047`, `djs2026gr-neu-048` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023sc006` | `djs2026geo-neu-043`, `djs2026geo-neu-044` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023sc007` | `djs2026ip-neu-067`, `djs2026ip-neu-068` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023sc008` | `djs2026ip-neu-069`, `djs2026ip-neu-070` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2023sc009` | `djs2026geo-neu-045`, `djs2026geo-neu-046` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024mc001` | `djs2026wt-neu-189`, `djs2026wt-neu-190` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024mc002` | `djs2026ip-neu-059`, `djs2026ip-neu-060` | hoch / gewollt | Inhaltlich vor Aktivierung korrigieren: djs2026ip-neu-060 |
| `djs2024mc003` | `djs2026mc-neu-139`, `djs2026mc-neu-140` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024sc001` | `djs2026mc-neu-137`, `djs2026mc-neu-138` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024sc002` | `djs2026wt-neu-187`, `djs2026wt-neu-188` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024sc003` | `djs2026ip-neu-055`, `djs2026ip-neu-056` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024sc004` | `djs2026dp-neu-001`, `djs2026dp-neu-002` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024sc005` | `djs2026ip-neu-057`, `djs2026ip-neu-058` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024sc006` | `djs2026geo-neu-035`, `djs2026geo-neu-036` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024sc007` | `djs2026geo-neu-037`, `djs2026geo-neu-038` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024sc008` | `djs2026geo-neu-039`, `djs2026geo-neu-040` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024sc009` | `djs2026ip-neu-061`, `djs2026ip-neu-062` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2024sc010` | `djs2026geo-neu-041`, `djs2026geo-neu-042` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp001` | `djs2026dp-neu-007`, `djs2026dp-neu-008` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp002` | `djs2026dp-neu-009`, `djs2026dp-neu-010` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp003` | `djs2026dp-neu-011`, `djs2026dp-neu-012` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp004` | `djs2026dp-neu-013`, `djs2026dp-neu-014` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp005` | `djs2026dp-neu-015`, `djs2026dp-neu-016` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp006` | `djs2026dp-neu-017`, `djs2026dp-neu-018` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp007` | `djs2026dp-neu-019`, `djs2026dp-neu-020` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp009` | `djs2026dp-neu-021`, `djs2026dp-neu-022` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp010` | `djs2026dp-neu-023`, `djs2026dp-neu-024` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp011` | `djs2026dp-neu-025`, `djs2026dp-neu-026` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp012` | `djs2026dp-neu-027`, `djs2026dp-neu-028` | hoch / gewollt | Inhaltlich vor Aktivierung korrigieren: djs2026dp-neu-028 |
| `djs2025dp013` | `djs2026dp-neu-029`, `djs2026dp-neu-030` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp014` | `djs2026dp-neu-031`, `djs2026dp-neu-032` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025dp015` | `djs2026dp-neu-033`, `djs2026dp-neu-034` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu001` | `djs2026ip-neu-079`, `djs2026ip-neu-080` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu002` | `djs2026ip-neu-081`, `djs2026ip-neu-082` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu003` | `djs2026ip-neu-083`, `djs2026ip-neu-084` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu004` | `djs2026ip-neu-085`, `djs2026ip-neu-086` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu005` | `djs2026ip-neu-087`, `djs2026ip-neu-088` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu006` | `djs2026ip-neu-091`, `djs2026ip-neu-092` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu007` | `djs2026ip-neu-095`, `djs2026ip-neu-096` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu008` | `djs2026ip-neu-097`, `djs2026ip-neu-098` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu009` | `djs2026ip-neu-099`, `djs2026ip-neu-100` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu010` | `djs2026ip-neu-101`, `djs2026ip-neu-102` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu011` | `djs2026ip-neu-103`, `djs2026ip-neu-104` | hoch / gewollt | Inhaltlich vor Aktivierung korrigieren: djs2026ip-neu-104 |
| `djs2025eu012` | `djs2026ip-neu-105`, `djs2026ip-neu-106` | hoch / gewollt | Inhaltlich vor Aktivierung korrigieren: djs2026ip-neu-106 |
| `djs2025eu013` | `djs2026ip-neu-131`, `djs2026ip-neu-132` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025eu014` | `djs2026ip-neu-133`, `djs2026ip-neu-134` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip002` | `djs2026ip-neu-107`, `djs2026ip-neu-108` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip003` | `djs2026ip-neu-109`, `djs2026ip-neu-110` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip004` | `djs2026ip-neu-111`, `djs2026ip-neu-112` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip005` | `djs2026ip-neu-113`, `djs2026ip-neu-114` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip006` | `djs2026ip-neu-115`, `djs2026ip-neu-116` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip007` | `djs2026ip-neu-117`, `djs2026ip-neu-118` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip008` | `djs2026ip-neu-119`, `djs2026ip-neu-120` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip009` | `djs2026ip-neu-121`, `djs2026ip-neu-122` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip010` | `djs2026ip-neu-123`, `djs2026ip-neu-124` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip011` | `djs2026ip-neu-125`, `djs2026ip-neu-126` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip012` | `djs2026ip-neu-127`, `djs2026ip-neu-128` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip013` | `djs2026ip-neu-129`, `djs2026ip-neu-130` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025ip014` | `djs2026ip-neu-135`, `djs2026ip-neu-136` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025sp001` | `djs2026sp-neu-157`, `djs2026sp-neu-158` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025sp002` | `djs2026sp-neu-159`, `djs2026sp-neu-160` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025sp003` | `djs2026sp-neu-161`, `djs2026sp-neu-162` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025sp004` | `djs2026sp-neu-163`, `djs2026sp-neu-164` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025wf001` | `djs2026wf-neu-175`, `djs2026wf-neu-176` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2025wf002` | `djs2026wf-neu-177`, `djs2026wf-neu-178` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2026eu001` | `djs2026ip-neu-089`, `djs2026ip-neu-090` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2026eu002` | `djs2026ip-neu-093`, `djs2026ip-neu-094` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2026eu003` | `djs2026wf-neu-179`, `djs2026wf-neu-180` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2026sc001` | `djs2026wt-neu-201`, `djs2026wt-neu-202` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2026sp001` | `djs2026sp-neu-165`, `djs2026sp-neu-166` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2026sp002` | `djs2026sp-neu-167`, `djs2026sp-neu-168` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2026sp003` | `djs2026sp-neu-169`, `djs2026sp-neu-170` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2026wf001` | `djs2026wf-neu-181`, `djs2026wf-neu-182` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2026wf002` | `djs2026wf-neu-183`, `djs2026wf-neu-184` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |
| `djs2026wf003` | `djs2026wf-neu-185`, `djs2026wf-neu-186` | hoch / gewollt | OK als Variantencluster; `variantOf` setzen und Rotationsabstand definieren. |

## 8. Unklare oder riskante Formulierungen

| Formulierung | Risiko | Besser |
|---|---|---|
| aktuell / derzeit / heute | veraltet schnell | immer `Stand: YYYY-MM-DD` ergänzen |
| vollständig anwendbar | bei EU-Gesetzen oft gestaffelte Fristen | `grundsätzlich anwendbar ab …; Ausnahmen: …` |
| größte / wichtigste / erfolgreichste | abhängig von Quelle, Metrik und Zeitpunkt | Metrik nennen: Umsatz, Nutzer, Opferzahl, Reichweite, OCHA-Einschätzung etc. |
| in den vergangenen 12 Monaten | ohne Prüfungsdatum unklar | DJS-Prüfungszeitraum oder konkreten Zeitraum nennen |
| gesichert rechtsextremistisch | juristisch dynamisch / Eilverfahren | Datum und Rechtsstand nennen |
| weltweit größte humanitäre Notlage | Quellen- und Methodikfrage | `laut OCHA Global Humanitarian Overview 2026` |
| erstmals / erste | bei internationalen Vergleichen fehleranfällig | Bezugsraum nennen: Deutschland, EU, Welt, Nachkriegszeit etc. |

## 9. Quellenlücken

Der Katalog enthält keine maschinenlesbaren Quellenfelder. Das ist der größte strukturelle Nachbesserungspunkt, auch wenn viele Erklärtexte bereits quellenähnliche Fakten nennen.

| ID/Thema | Fehlende Quelle | Empfohlene Quelle |
|---|---|---|
| `djs2026dp-neu-028` / Der COMPACT-Fall wurde zum Testfall zwischen Art. 5 GG und welchem demokratischen Schutzkonzept? | strukturierte Quelle + `checkedAt` | BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG |
| `djs2026ip-neu-060` / Die BRICS-Erweiterung 2024 umfasste unter anderem Ägypten und welches Golf-Land? | strukturierte Quelle + `checkedAt` | Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa |
| `djs2026ip-neu-076` / Die Backstop-Debatte drehte sich um die offene Grenze zwischen der Republik Irland und welchem britischen Landesteil? | strukturierte Quelle + `checkedAt` | Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa |
| `djs2026ip-neu-104` / Die frühere estnische Premierministerin übernahm 2024 welches EU-Außenamt? | strukturierte Quelle + `checkedAt` | Rat der EU; EU-Kommission |
| `djs2026ip-neu-106` / Der frühere portugiesische Premier leitet seit Dezember 2024 welche EU-Institution? | strukturierte Quelle + `checkedAt` | Rat der EU; EU-Kommission |
| `djs2026mc-neu-146` / Das Pariser Monument, das 2021 temporär verhüllt wurde, war welches Bauwerk? | strukturierte Quelle + `checkedAt` | Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa |
| `djs2026mc-neu-148` / Juan Moreno enttarnte Fälschungen seines Kollegen bei welcher Reportage? | strukturierte Quelle + `checkedAt` | Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa |
| `djs2026mc-neu-150` / Die Auszeichnung eines Rap-Albums mit antisemitisch kritisierten Zeilen führte zum Ende welchen Musikpreises? | strukturierte Quelle + `checkedAt` | Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa |
| `djs2025dp010` / Als was stufte das Bundesamt für Verfassungsschutz die AfD am 2. Mai 2025 ein? | strukturierte Quelle + `checkedAt` | BfV; VG Köln; ggf. OVG Münster |
| `djs2026dp-neu-023` / Welche Beobachtungsstufe verwendete das Bundesamt für Verfassungsschutz 2025 für die AfD? | strukturierte Quelle + `checkedAt` | BfV; VG Köln; ggf. OVG Münster |
| `djs2026dp-neu-024` / Wie lautet der präzise verfassungsschutzrechtliche Begriff für die AfD-Einstufung vom 2. Mai 2025? | strukturierte Quelle + `checkedAt` | BfV; VG Köln; ggf. OVG Münster |
| `djs2025sc008` / In welchen Ländern führte ein Blackout im April 2025 fast einen ganzen Tag lang zu massivem Stromausfall? | strukturierte Quelle + `checkedAt` | ENTSO-E Abschluss-/Untersuchungsseite |
| `djs2026ip-neu-093` / Ab welchem Datum soll der EU AI Act grundsätzlich vollständig anwendbar sein? | strukturierte Quelle + `checkedAt` | EU Digital Strategy; EU-Kommission; EU-Amtsblatt |
| `djs2026ip-neu-094` / Die gestaffelte Umsetzung des AI Act erreicht ihre Gesamtgeltung an welchem Datum? | strukturierte Quelle + `checkedAt` | EU Digital Strategy; EU-Kommission; EU-Amtsblatt |
| `djs2026eu002` / Ab welchem Datum soll der EU AI Act vollständig anwendbar sein? | strukturierte Quelle + `checkedAt` | EU Digital Strategy; EU-Kommission; EU-Amtsblatt |
| alle `djs2026*-neu-*` Varianten | `variantOf`, `sourceRef`, `answerAliases` | jeweilige Basisfrage + Primärquelle |
| alle Archivfragen | aktiver/archivierter Pool nicht nur als Freitext | `status: "archiveOnly"` + Quellenstand |

## 10. Konkrete Korrekturliste für den Datensatz

| ID | Aktion | Neue Frage | Neue richtige Antwort | Neue Erklärung | Notiz |
|---|---|---|---|---|---|
| `djs2025dp010` | AKTUALISIEREN | Als was stufte das Bundesamt für Verfassungsschutz die AfD am 2. Mai 2025 ein? | Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“ | Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“ | Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten. |
| `djs2026dp-neu-023` | AKTUALISIEREN | Welche Beobachtungsstufe verwendete das Bundesamt für Verfassungsschutz 2025 für die AfD? | Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“ | Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“ | Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten. |
| `djs2026dp-neu-024` | AKTUALISIEREN | Wie lautet der präzise verfassungsschutzrechtliche Begriff für die AfD-Einstufung vom 2. Mai 2025? | Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“ | Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“ | Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten. |
| `djs2026dp-neu-028` | TEILWEISE_FALSCH | Der COMPACT-Fall wurde zum Testfall zwischen Art. 5 GG und welchem demokratischen Schutzkonzept? | wehrhafte Demokratie | Antwort auf „wehrhafte Demokratie“ verkürzen. | Die Frage fragt nach dem demokratischen Schutzkonzept neben Art. 5 GG. Die hinterlegte Antwort enthält zusätzlich „Pressefreiheit“, obwohl Art. 5 GG bereits Presse-/Meinungsfreiheit meint. |
| `djs2018sc003` | OK_MIT_HINWEIS | Welche Volksgruppe wurde laut UN Ziel ethnischer Säuberungen in Myanmar? | Erklärung juristisch präzisieren: „UN-Ermittler sahen Hinweise auf genozidale Absicht; ICJ-Verfahren läuft/lief.“ | Erklärung juristisch präzisieren: „UN-Ermittler sahen Hinweise auf genozidale Absicht; ICJ-Verfahren läuft/lief.“ | Rohingya ist korrekt. Begriff „Völkermord“ sollte sauber zwischen UN-Fact-Finding/Genozidabsicht, ICJ-Verfahren und rechtlicher Feststellung differenzieren. |
| `djs2022sc007` | OK_MIT_HINWEIS | Welches Land führte Bitcoin als offizielles Zahlungsmittel ein? | Erklärung um Zeitstand 2024/2025 und freiwillige Akzeptanz ergänzen. | Erklärung um Zeitstand 2024/2025 und freiwillige Akzeptanz ergänzen. | Historisch korrekt. Erklärung sollte präzisieren, dass Bitcoin später durch IWF-Vereinbarung/gesetzliche Änderung faktisch nicht mehr verpflichtend akzeptiert werden musste. |
| `djs2025ip003` | OK_MIT_HINWEIS | Wann starb Papst Franziskus? | Zu „Argentinien“ korrigieren. | Zu „Argentinien“ korrigieren. | Kleiner Sprach-/Länderfehler: „Argentina“ in deutschem Text. |
| `djs2025ip006` | OK_MIT_HINWEIS | In welcher Stadt fand die UN-Klimakonferenz COP30 statt? | Tippfehler korrigieren. | Tippfehler korrigieren. | Tippfehler in der Erklärung: „Luelas Regierung“ muss „Lulas Regierung“ heißen. |
| `djs2025ip013` | OK_MIT_HINWEIS | Welche zwei UN-Organisationen warnten 2025 gemeinsam vor KI-Risiken für Wahlen und Meinungsfreiheit? | Erklärung sprachlich auf „Issue Brief“ ändern. | Erklärung sprachlich auf „Issue Brief“ ändern. | „Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“. |
| `djs2025sc008` | AKTUALISIEREN | In welchen Ländern führte ein Blackout im April 2025 fast einen ganzen Tag lang zu massivem Stromausfall? | Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück. | Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück. | Die Erklärung sagt, die genaue Ursache sei zunächst unklar. Das war für die unmittelbare Lage korrekt, ist aber nach ENTSO-E-Untersuchung zu aktualisieren. |
| `djs2026ip-neu-060` | TEILWEISE_FALSCH | Die BRICS-Erweiterung 2024 umfasste unter anderem Ägypten und welches Golf-Land? | Vereinigte Arabische Emirate | Antwort auf „Vereinigte Arabische Emirate“ verkürzen. | Die Frage fragt: „Ägypten und welches Golf-Land?“ Die hinterlegte Antwort nennt erneut Ägypten und die VAE. |
| `djs2026ip-neu-076` | TEILWEISE_FALSCH | Die Backstop-Debatte drehte sich um die offene Grenze zwischen der Republik Irland und welchem britischen Landesteil? | Nordirland | Antwort auf „Nordirland“ ändern. | Die Frage fragt nach dem britischen Landesteil. Die hinterlegte Antwort beschreibt dagegen das zu verhindernde Problem. |
| `djs2026ip-neu-093` | AKTUALISIEREN | Ab welchem Datum soll der EU AI Act grundsätzlich vollständig anwendbar sein? | Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“ | Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“ | „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln. |
| `djs2026ip-neu-094` | AKTUALISIEREN | Die gestaffelte Umsetzung des AI Act erreicht ihre Gesamtgeltung an welchem Datum? | Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“ | Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“ | „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln. |
| `djs2026ip-neu-104` | TEILWEISE_FALSCH | Die frühere estnische Premierministerin übernahm 2024 welches EU-Außenamt? | Hohe Vertreterin der EU für Außen- und Sicherheitspolitik | Antwort auf „Hohe Vertreterin der EU für Außen- und Sicherheitspolitik“ ändern. | Die Frage fragt nach dem Amt, nicht nach der Person. Hinterlegt ist „Kaja Kallas“. |
| `djs2026ip-neu-106` | TEILWEISE_FALSCH | Der frühere portugiesische Premier leitet seit Dezember 2024 welche EU-Institution? | Europäischer Rat | Antwort auf „Europäischer Rat“ ändern. | Die Frage fragt nach der EU-Institution, nicht nach der Person. Hinterlegt ist „António Costa“. |
| `djs2023mc002` | OK_MIT_HINWEIS | In welchen Ländern wechselte in den vergangenen 12 Monaten die Regierung? (Mehrere Antworten möglich) | Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“. | Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“. | Formulierung „in den vergangenen 12 Monaten“ ist ohne Prüfungs-/Stichtag nicht eindeutig. Im Archiv vertretbar, im aktiven Pool riskant. |
| `djs2026eu002` | AKTUALISIEREN | Ab welchem Datum soll der EU AI Act vollständig anwendbar sein? | Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“ | Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“ | „Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln. |
| `djs2024mc001` | OK_MIT_HINWEIS | Welche Länder schafften in den vergangenen 12 Monaten eine Mondlandung? (Mehrere Antworten möglich) | Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“. | Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“. | Formulierung „in den vergangenen 12 Monaten“ ist ohne Prüfungs-/Stichtag nicht eindeutig. Im Archiv vertretbar, im aktiven Pool riskant. |
| `djs2025match003` | OK_MIT_HINWEIS | 🔵 Ordnen Sie die Konzernchefs, die bei Trumps Vereidigung anwesend waren, ihren Unternehmen zu. | Frage zu „Tech-Spitzenmanager / Unternehmenschefs“ umformulieren. | Frage zu „Tech-Spitzenmanager / Unternehmenschefs“ umformulieren. | „Konzernchefs“ ist nicht für alle Einträge gleich sauber; OpenAI ist kein klassischer börsennotierter Konzern. |
| `djs2026wt-neu-193` | OK_MIT_HINWEIS | Ab wann hält der IPCC eine Überschreitung von 1,5 Grad ohne zusätzliche Maßnahmen für wahrscheinlich? | Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren. | Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren. | Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten. |
| `djs2026wt-neu-194` | OK_MIT_HINWEIS | Die Warnung vor dem frühen Reißen der 1,5-Grad-Schwelle verweist auf welches Jahr? | Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren. | Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren. | Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten. |
| `djs2026wt-neu-200` | OK_MIT_HINWEIS | Welche biotechnologische Methode erlaubt das gezielte Schneiden und Verändern von DNA? | Antwort auf „CRISPR-Cas9“ setzen oder Alias „Genschere“ erlauben. | Antwort auf „CRISPR-Cas9“ setzen oder Alias „Genschere“ erlauben. | Die Frage fragt nach der Methode; die Antwort beschreibt die Methode. Für Kurzantwort-Scoring wäre „CRISPR-Cas9“ als Zielantwort robuster. |
| `djs2023sc004` | OK_MIT_HINWEIS | Ab wann hält der Weltklimarat 1,5 Grad Erwärmung ohne zusätzliche Maßnahmen für wahrscheinlich? | Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren. | Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren. | Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten. |
| `djs2026mc-neu-146` | TEILWEISE_FALSCH | Das Pariser Monument, das 2021 temporär verhüllt wurde, war welches Bauwerk? | Arc de Triomphe | Antwort auf „Arc de Triomphe“ ändern. | Die Frage fragt nach dem Bauwerk. Hinterlegt ist das Projekt „Verhüllung des Arc de Triomphe“. |
| `djs2026mc-neu-148` | TEILWEISE_FALSCH | Juan Moreno enttarnte Fälschungen seines Kollegen bei welcher Reportage? | Jaegers Grenze | Antwort auf „Jaegers Grenze“ ändern. | Die Frage fragt nur nach der Reportage. Hinterlegt ist Reportage plus Aufdecker. |
| `djs2026mc-neu-150` | TEILWEISE_FALSCH | Die Auszeichnung eines Rap-Albums mit antisemitisch kritisierten Zeilen führte zum Ende welchen Musikpreises? | Echo-Musikpreis | Antwort auf „Echo“ bzw. „Echo-Musikpreis“ ändern. | Die Frage fragt nach dem Musikpreis. Hinterlegt ist die Begründung für das Ende des Preises. |
| `djs2025sc004` | OK_MIT_HINWEIS | Weshalb verlor Luke Mockridge 2024 seine neue Sat.1-Show? | wegen abwertender/ableistischer Äußerungen über Paralympioniken | Antwort: „wegen abwertender/ableistischer Äußerungen über Paralympioniken“; Erklärung mit Quelle ergänzen. | Antwort ist inhaltlich richtig, aber stark wertend formuliert. Für faktennahe Lern-App neutraler formulieren. |

### Maschinenlesbarer Patch-Block / Arbeitsgrundlage

```json
[
  {
    "id": "djs2025dp010",
    "qaStatus": "AKTUALISIEREN",
    "priority": "MITTEL",
    "suggestedAnswer": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
    "note": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“"
  },
  {
    "id": "djs2026dp-neu-023",
    "qaStatus": "AKTUALISIEREN",
    "priority": "MITTEL",
    "suggestedAnswer": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
    "note": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“"
  },
  {
    "id": "djs2026dp-neu-024",
    "qaStatus": "AKTUALISIEREN",
    "priority": "MITTEL",
    "suggestedAnswer": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
    "note": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“"
  },
  {
    "id": "djs2026dp-neu-028",
    "qaStatus": "TEILWEISE_FALSCH",
    "priority": "HOCH",
    "suggestedAnswer": "wehrhafte Demokratie",
    "note": "Antwort auf „wehrhafte Demokratie“ verkürzen."
  },
  {
    "id": "djs2025sc008",
    "qaStatus": "AKTUALISIEREN",
    "priority": "MITTEL",
    "suggestedAnswer": "Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück.",
    "note": "Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück."
  },
  {
    "id": "djs2026ip-neu-060",
    "qaStatus": "TEILWEISE_FALSCH",
    "priority": "HOCH",
    "suggestedAnswer": "Vereinigte Arabische Emirate",
    "note": "Antwort auf „Vereinigte Arabische Emirate“ verkürzen."
  },
  {
    "id": "djs2026ip-neu-076",
    "qaStatus": "TEILWEISE_FALSCH",
    "priority": "HOCH",
    "suggestedAnswer": "Nordirland",
    "note": "Antwort auf „Nordirland“ ändern."
  },
  {
    "id": "djs2026ip-neu-093",
    "qaStatus": "AKTUALISIEREN",
    "priority": "MITTEL",
    "suggestedAnswer": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
    "note": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“"
  },
  {
    "id": "djs2026ip-neu-094",
    "qaStatus": "AKTUALISIEREN",
    "priority": "MITTEL",
    "suggestedAnswer": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
    "note": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“"
  },
  {
    "id": "djs2026ip-neu-104",
    "qaStatus": "TEILWEISE_FALSCH",
    "priority": "HOCH",
    "suggestedAnswer": "Hohe Vertreterin der EU für Außen- und Sicherheitspolitik",
    "note": "Antwort auf „Hohe Vertreterin der EU für Außen- und Sicherheitspolitik“ ändern."
  },
  {
    "id": "djs2026ip-neu-106",
    "qaStatus": "TEILWEISE_FALSCH",
    "priority": "HOCH",
    "suggestedAnswer": "Europäischer Rat",
    "note": "Antwort auf „Europäischer Rat“ ändern."
  },
  {
    "id": "djs2026eu002",
    "qaStatus": "AKTUALISIEREN",
    "priority": "MITTEL",
    "suggestedAnswer": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
    "note": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“"
  },
  {
    "id": "djs2026mc-neu-146",
    "qaStatus": "TEILWEISE_FALSCH",
    "priority": "HOCH",
    "suggestedAnswer": "Arc de Triomphe",
    "note": "Antwort auf „Arc de Triomphe“ ändern."
  },
  {
    "id": "djs2026mc-neu-148",
    "qaStatus": "TEILWEISE_FALSCH",
    "priority": "HOCH",
    "suggestedAnswer": "Jaegers Grenze",
    "note": "Antwort auf „Jaegers Grenze“ ändern."
  },
  {
    "id": "djs2026mc-neu-150",
    "qaStatus": "TEILWEISE_FALSCH",
    "priority": "HOCH",
    "suggestedAnswer": "Echo-Musikpreis",
    "note": "Antwort auf „Echo“ bzw. „Echo-Musikpreis“ ändern."
  }
]
```

## 11. Quellenmatrix / Deep-Research-Basis

| Quelle | Abgedeckte Themen | URL |
|---|---|---|
| Bundeswahlleiterin | Bundestagswahl 2025: endgültiges Ergebnis; Wahltermin, Beteiligung, Zweitstimmen, Sitzverteilung | https://www.bundeswahlleiterin.de/bundestagswahlen/2025/ergebnisse/bund-99.html |
| Deutscher Bundestag | Kanzlerwahl Friedrich Merz am 6. Mai 2025 im zweiten Wahlgang | https://www.bundestag.de/dokumente/textarchiv/2025/kw19-de-kanzlerwahl-1062470 |
| Deutscher Bundestag / bpb / BMF | Grundgesetzänderung, Schuldenbremse und 500-Mrd.-Sondervermögen Infrastruktur/Klimaneutralität | https://www.bundestag.de/dokumente/textarchiv/2025/kw11-de-sondersitzung-1056228 |
| Deutscher Bundestag | Verteidigungsausgaben 2026: 108,2 Mrd. Euro | https://www.bundestag.de/presse/hib/kurzmeldungen-1106068 |
| VG Köln / BVerwG | AfD-Einstufung 2025/2026 und COMPACT-Urteil | https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/05_26022026/index.php |
| Bundesverwaltungsgericht | COMPACT-Verbot am 24.06.2025 aufgehoben | https://www.bverwg.de/de/pm/2025/48 |
| Land Brandenburg / Deutschlandfunk / ZEIT | Brandenburg: Bruch SPD-BSW und spätere SPD-CDU-Koalition 2026 | https://brandenburg.de/cms/detail.php/brandenburg_06.c.892654.de |
| UBA / BMUV | Klimaziele 2030, Projektionen 2025/2026 | https://www.umweltbundesamt.de/presse/pressemitteilungen/klimaziele-bis-2030-erreichbar |
| EU-Kommission | White Paper for European Defence – Readiness 2030 / ReArm Europe | https://defence-industry-space.ec.europa.eu/eu-defence-industry/white-paper-european-defence-readiness-2030_en |
| EU-Kommission / Rat der EU | Russland-Sanktionspakete: 16. Paket 24.02.2025, 17. Paket 20.05.2025 | https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures/sanctions-adopted-following-russias-military-aggression-against-ukraine_en |
| EU-Kommission | European Democracy Shield, 12.11.2025 | https://commission.europa.eu/news-and-media/news/stronger-measures-protect-our-democracy-and-civil-society-2025-11-12_en |
| EU-Kommission | EU-Klimaziel 2040: 90 Prozent Netto-THG ggü. 1990 | https://climate.ec.europa.eu/eu-action/european-climate-law_en |
| EU-Kommission / Rat der EU | Ukraine Facility 50 Mrd. Euro; zusätzlicher Ukraine Support Loan 90 Mrd. Euro | https://commission.europa.eu/topics/eu-solidarity-ukraine/eu-assistance-ukraine/ukraine-facility_en |
| Rat der EU | 90-Mrd.-Ukraine-Support-Loan finalisiert am 23.04.2026 | https://www.consilium.europa.eu/en/press/press-releases/2026/04/23/council-finalises-90-billion-support-loan-to-ukraine/ |
| White House / Federal Register | Trump-Inauguration und Executive Order 14257 zu reciprocal tariffs | https://www.federalregister.gov/documents/2025/04/07/2025-06063/regulating-imports-with-a-reciprocal-tariff-to-rectify-trade-practices-that-contribute-to-large-and |
| Vatican News / WHO | Papst Franziskus, Leo XIV., WHO Pandemic Agreement | https://www.who.int/news/item/20-05-2025-world-health-assembly-adopts-historic-pandemic-agreement-to-make-the-world-more-equitable-and-safer-from-future-pandemics |
| UNFCCC / UN | COP30 Belém; UN80 High-Level Meeting | https://unfccc.int/cop30/about-cop30 |
| OCHA / AP | Sudan als größte humanitäre Krise / OCHA Global Humanitarian Overview 2026 | https://humanitarianaction.info/document/global-humanitarian-overview-2026/article/sudan-4 |
| UNESCO / UNDP | Issue Brief zu AI, Freedom of Expression and Elections | https://www.unesco.org/en/articles/new-unesco-undp-issue-brief-highlights-impacts-ai-freedom-expression-and-elections |
| EU Digital Strategy | AI Act: 02.02.2025 verbotene Praktiken, 02.08.2026 grundsätzliche Anwendbarkeit; 2026 Änderungen beachten | https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai |
| EU-Kommission | EU-Migrations- und Asylpakt: Anwendung ab 12.06.2026 | https://home-affairs.ec.europa.eu/news/commission-reports-progress-implementing-pact-migration-and-asylum-2026-05-08_en |
| BMG / gematik | ePA: bundesweiter Rollout und Nutzungspflicht ab 01.10.2025 | https://www.bundesgesundheitsministerium.de/themen/digitalisierung/elektronische-patientenakte/epa-fuer-alle |
| Bundesregierung / BMAS | Mindestlohn 2025: 12,82 Euro | https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Mindestlohn/Einfuehrung-und-Anpassungen-Mindestlohn/einfuehrung-und-anpassung-mindestlohn.html |
| EZB / Eurostat / IMF / Bundesregierung | Einlagensatz 2,0%; Eurozonen-BIP 2025; IWF-Prognose 2026; Frühjahrsprojektion 2026 | https://www.ecb.europa.eu/press/pr/date/2025/html/ecb.mp250605~3b5f67d007.de.html |
| NASA / IPCC | Artemis II 2026; DART; 1,5-Grad-Schwelle | https://www.nasa.gov/news-release/nasa-welcomes-record-setting-artemis-ii-moonfarers-back-to-earth/ |
| FIFA / Olympics / UEFA | Club World Cup 2025, Fußball-WM 2026, Milano Cortina 2026 | https://www.fifa.com/en/tournaments/mens/club-world-cup/usa-2025/articles/teams-dates-venue-groups-draw-matches-tickets |
| The Atlantic / RSF / Correctiv | Signal-Chat Jemen; Gaza-Journalisten; Potsdam-Recherche | https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/ |
| ENTSO-E | Iberischer Blackout 28.04.2025: Abschluss/Untersuchung mit technischen Faktoren | https://www.entsoe.eu/publications/blackout/28-april-2025-iberian-blackout/ |

## 12. Finale Empfehlung

**Veröffentlichungsreife:** Der Katalog ist nach Korrektur der HOCH-Fälle grundsätzlich gut nutzbar, aber noch nicht als „final quellenhart“ freizugeben, solange strukturierte Quellenfelder fehlen.

**Zwingend vor Aktivierung ändern:**
- `djs2026dp-neu-028`: Antwort auf „wehrhafte Demokratie“ verkürzen.
- `djs2026ip-neu-060`: Antwort auf „Vereinigte Arabische Emirate“ verkürzen.
- `djs2026ip-neu-076`: Antwort auf „Nordirland“ ändern.
- `djs2026ip-neu-104`: Antwort auf „Hohe Vertreterin der EU für Außen- und Sicherheitspolitik“ ändern.
- `djs2026ip-neu-106`: Antwort auf „Europäischer Rat“ ändern.
- `djs2026mc-neu-146`: Antwort auf „Arc de Triomphe“ ändern.
- `djs2026mc-neu-148`: Antwort auf „Jaegers Grenze“ ändern.
- `djs2026mc-neu-150`: Antwort auf „Echo“ bzw. „Echo-Musikpreis“ ändern.

**Vor dem nächsten Release zusätzlich erledigen:**
- `variantOf`/`clusterId` für alle 101 Variantencluster einführen.
- `answerAliases[]` für Kurzantworten ergänzen, insbesondere bei Umlauten, Bindestrichen, Abkürzungen und Schreibweisen wie „USA/US/Vereinigte Staaten“ oder „EU-Kommission/Kommission“.
- `sources[]`, `verifiedAt`, `validAsOf` einführen.
- Rechts-/Zeitstand-Fragen mit automatischem Review-Datum versehen: AfD, AI Act, Ukraine-Finanzierung, EU-Sanktionen, Klimaziele, Wirtschaftsdaten, Sporttermine.
- Archivfragen technisch aus dem aktiven Pool trennen, nicht nur redaktionell markieren.

**Gesamturteil:** Gute Beta-Datenbasis mit starkem Variantenansatz. Die inhaltlichen Fehler sind konzentriert und gut korrigierbar; die wichtigste strukturelle Baustelle ist Quellen- und Variantenmodellierung im Code.
