# QUIZ_DATEN_2025_2026_PRO.md

**Zweck:** Technische Arbeitsdatei für Code, Datenmodell, Import, QA, Clusterlogik und weitere Recherche.  
**Generiert:** 2026-05-13  
**Quelle:** `CHECK_ALLE_FRAGEN_ANTWORTEN_V1.3 BETA.md`  

## 0. Arbeitsmodus
Diese Datei enthält **alles zum Weiterarbeiten**: Gesamtstatistik, Release-Blocker, Datenmodell, maschinenlesbares JSON-Manifest, alle 326 Fragen als extrahierte Datensätze, Variantencluster, 2025/2026-Datencluster, Quellenmatrix und den vollständigen Roh-Fragencheck als Anhang.

## 1. Executive Summary für Entwicklung
- Fragen gesamt: **326**
- Kategorien: **8**
- Variantenfragen mit `variantOf`: **202**
- Cluster gesamt aus Basis/Varianten: **124**
- Statusverteilung: `{'OK': 90, 'AKTUALISIEREN': 7, 'OK_MIT_HINWEIS': 221, 'TEILWEISE_FALSCH': 8}`
- Typverteilung, inferiert: `{'singlechoice': 108, 'matching': 5, 'multiplechoice': 11, 'kurzantwort': 202}`
- Wichtigster Code-Befund: `sources[]`, `verifiedAt`, `validAsOf`, `variantOf`, `clusterId` und `answerAliases[]` müssen in den Produktivdatensatz.

## 2. Zwingende Korrekturen und Aktualisierungen
|ID|Kategorie|Status|Prio|Problem|Fix|
|---|---|---|---|---|---|
|djs2026dp-neu-028|Deutsche Politik|TEILWEISE_FALSCH|HOCH|Die Frage fragt nach dem demokratischen Schutzkonzept neben Art. 5 GG. Die hinterlegte Antwort enthält zusätzlich „Pressefreiheit“, obwohl Art. 5 GG bereits Presse-/Meinungsfreiheit meint.|Antwort auf „wehrhafte Demokratie“ verkürzen.|
|djs2026ip-neu-060|Internationale Politik|TEILWEISE_FALSCH|HOCH|Die Frage fragt: „Ägypten und welches Golf-Land?“ Die hinterlegte Antwort nennt erneut Ägypten und die VAE.|Antwort auf „Vereinigte Arabische Emirate“ verkürzen.|
|djs2026ip-neu-076|Internationale Politik|TEILWEISE_FALSCH|HOCH|Die Frage fragt nach dem britischen Landesteil. Die hinterlegte Antwort beschreibt dagegen das zu verhindernde Problem.|Antwort auf „Nordirland“ ändern.|
|djs2026ip-neu-104|Internationale Politik|TEILWEISE_FALSCH|HOCH|Die Frage fragt nach dem Amt, nicht nach der Person. Hinterlegt ist „Kaja Kallas“.|Antwort auf „Hohe Vertreterin der EU für Außen- und Sicherheitspolitik“ ändern.|
|djs2026ip-neu-106|Internationale Politik|TEILWEISE_FALSCH|HOCH|Die Frage fragt nach der EU-Institution, nicht nach der Person. Hinterlegt ist „António Costa“.|Antwort auf „Europäischer Rat“ ändern.|
|djs2026mc-neu-146|Kultur & Medien|TEILWEISE_FALSCH|HOCH|Die Frage fragt nach dem Bauwerk. Hinterlegt ist das Projekt „Verhüllung des Arc de Triomphe“.|Antwort auf „Arc de Triomphe“ ändern.|
|djs2026mc-neu-148|Kultur & Medien|TEILWEISE_FALSCH|HOCH|Die Frage fragt nur nach der Reportage. Hinterlegt ist Reportage plus Aufdecker.|Antwort auf „Jaegers Grenze“ ändern.|
|djs2026mc-neu-150|Kultur & Medien|TEILWEISE_FALSCH|HOCH|Die Frage fragt nach dem Musikpreis. Hinterlegt ist die Begründung für das Ende des Preises.|Antwort auf „Echo“ bzw. „Echo-Musikpreis“ ändern.|
|djs2025dp010|Deutsche Politik|AKTUALISIEREN|MITTEL|Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.|Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“|
|djs2026dp-neu-023|Deutsche Politik|AKTUALISIEREN|MITTEL|Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.|Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“|
|djs2026dp-neu-024|Deutsche Politik|AKTUALISIEREN|MITTEL|Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.|Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“|
|djs2025sc008|Internationale Politik|AKTUALISIEREN|MITTEL|Die Erklärung sagt, die genaue Ursache sei zunächst unklar. Das war für die unmittelbare Lage korrekt, ist aber nach ENTSO-E-Untersuchung zu aktualisieren.|Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück.|
|djs2026eu002|Internationale Politik|AKTUALISIEREN|MITTEL|„Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.|Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“|
|djs2026ip-neu-093|Internationale Politik|AKTUALISIEREN|MITTEL|„Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.|Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“|
|djs2026ip-neu-094|Internationale Politik|AKTUALISIEREN|MITTEL|„Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.|Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“|

## 3. Empfohlenes Datenmodell V1.4
```ts
type Question = {
  id: string;
  variantOf?: string;
  clusterId?: string;
  status: "active" | "archiveOnly" | "draft" | "needsReview";
  qaStatus?: "OK" | "OK_MIT_HINWEIS" | "AKTUALISIEREN" | "TEILWEISE_FALSCH" | "FALSCH" | "CODE_PROBLEM";
  verifiedAt?: string;
  validAsOf?: string;
  question: string;
  type: "singlechoice" | "multiplechoice" | "matching" | "kurzantwort";
  answer: string | string[] | Record<string,string>;
  answerAliases?: string[];
  options?: string[];
  explanation: string;
  sources: { title: string; url: string; publisher: string; checkedAt: string }[];
};
```

## 4. Datencluster 2025/2026 für Erweiterung
### Bundestagswahl 2025, Regierungsbildung, Koalitionsvertrag
**Sichere Faktenbasis:**
- Bundestagswahl zum 21. Deutschen Bundestag: 23. Februar 2025.
- Stärkste Kraft: CDU/CSU; zweitstärkste Kraft: AfD.
- Koalitionsvertrag Union/SPD: „Verantwortung für Deutschland“.
- Friedrich Merz wurde am 6. Mai 2025 im zweiten Wahlgang zum Bundeskanzler gewählt.
**Betroffene IDs:** `djs2025dp001`, `djs2025dp002`, `djs2025dp003`, `djs2025dp004`, `djs2025dp005`, `djs2026dp-neu-007`, `djs2026dp-neu-008`, `djs2026dp-neu-009`, `djs2026dp-neu-010`, `djs2026dp-neu-011`, `djs2026dp-neu-012`, `djs2026dp-neu-013`, `djs2026dp-neu-014`, `djs2026dp-neu-015`, `djs2026dp-neu-016`
**Erweiterungsachsen:** Wahltermin; Wahlgang; Kanzlermehrheit; Koalitionsparteien; Vertragstitel; stärkste/zweitstärkste Kraft; Wahlbeteiligung; Sitzverteilung; Erst-/Zweitstimme

### Schuldenbremse, Sondervermögen, Verteidigung 2025/2026
**Sichere Faktenbasis:**
- Grundgesetzänderung März 2025: Spielraum für Verteidigung und Investitionen.
- Sondervermögen Infrastruktur und Klimaneutralität: 500 Milliarden Euro.
- Verteidigungsausgaben Haushalt 2026 im Datensatz: 108,2 Milliarden Euro.
- Brigade Litauen: Stationierung in Litauen, rund 5.000 Soldatinnen und Soldaten.
**Betroffene IDs:** `djs2025dp006`, `djs2025dp007`, `djs2025dp008`, `djs2025dp009`, `djs2026dp-neu-017`, `djs2026dp-neu-018`, `djs2026dp-neu-019`, `djs2026dp-neu-020`, `djs2026dp-neu-021`, `djs2026dp-neu-022`
**Erweiterungsachsen:** Artikel 109/115/143h GG; Sondervermögen-Bezeichnung; Volumen; Verwendungszweck; Bund/Länder-Anteil; NATO-Kontext; Bundeswehr-Sonderetat getrennt prüfen

### Verfassungsschutz, AfD, COMPACT, wehrhafte Demokratie
**Sichere Faktenbasis:**
- BfV-Einstufung der AfD am 2. Mai 2025: „gesichert rechtsextremistische Bestrebung“; Erklärung mit Rechtsstand Mai 2026 ergänzen.
- COMPACT-Verbot: Bundesverwaltungsgericht als zentrales Gericht; Konflikt Pressefreiheit / wehrhafte Demokratie.
- Eine Antwortvariante ist hart zu korrigieren: djs2026dp-neu-028 → nur „wehrhafte Demokratie“.
**Betroffene IDs:** `djs2025dp010`, `djs2025dp011`, `djs2025dp012`, `djs2025mc004`, `djs2026dp-neu-023`, `djs2026dp-neu-024`, `djs2026dp-neu-025`, `djs2026dp-neu-026`, `djs2026dp-neu-027`, `djs2026dp-neu-028`
**Erweiterungsachsen:** Historische Einstufung vs. aktueller Rechtsstand; BfV-Begriff exakt; Antragsberechtigte beim Parteiverbot; Art. 5 GG; Art. 9 Abs. 2 GG; Bundesverwaltungsgericht vs. Bundesverfassungsgericht

### EU 2025/2026: Verteidigung, Sanktionen, AI Act, Demokratie, Asyl
**Sichere Faktenbasis:**
- EU-Verteidigungsplan: ReArm Europe/Readiness 2030; Finanzinstrument SAFE.
- 16. Russland-Sanktionspaket: 24. Februar 2025; 17. Paket: 20. Mai 2025.
- European Democracy Shield: November 2025.
- AI Act: verbotene Praktiken ab 2. Februar 2025; grundsätzliche Anwendbarkeit ab 2. August 2026, aber gestaffelt und mit Ausnahmen.
- EU-Migrations- und Asylpakt: Anwendung ab 12. Juni 2026.
**Betroffene IDs:** `djs2025eu001`, `djs2025eu002`, `djs2025eu003`, `djs2025eu004`, `djs2025eu007`, `djs2026eu001`, `djs2026eu002`, `djs2026ip-neu-079`, `djs2026ip-neu-080`, `djs2026ip-neu-081`, `djs2026ip-neu-082`, `djs2026ip-neu-083`, `djs2026ip-neu-084`, `djs2026ip-neu-085`, `djs2026ip-neu-086`, `djs2026ip-neu-089`, `djs2026ip-neu-090`, `djs2026ip-neu-091`, `djs2026ip-neu-092`, `djs2026ip-neu-093`, `djs2026ip-neu-094`, `djs2026ip-neu-095`, `djs2026ip-neu-096`
**Erweiterungsachsen:** voller Name SAFE; Weißbuch; Sanktionspaketnummern; Datum vs. Inkrafttreten; AI-Act-Stufen; unzulässige KI-Praktiken; Democracy Shield Zweck; Asylpakt Anwendung

### EU-Klima, Schengen, Schuman, Ukraine-Finanzierung
**Sichere Faktenbasis:**
- EU-2040-Klimaziel: minus 90 Prozent Netto-THG gegenüber 1990 als Kommissionsvorschlag 2025; Zeitstand klar markieren.
- Rumänien und Bulgarien: ab 1. Januar 2025 vollständig Teil des Schengen-Raums.
- Schuman-Erklärung: 75 Jahre am 9. Mai 2025.
- Ukraine Facility: 50 Mrd. Euro; zusätzlicher Unterstützungskredit 90 Mrd. Euro für 2026/27.
**Betroffene IDs:** `djs2025eu008`, `djs2025eu009`, `djs2025eu010`, `djs2025eu013`, `djs2025eu014`, `djs2026ip-neu-097`, `djs2026ip-neu-098`, `djs2026ip-neu-099`, `djs2026ip-neu-100`, `djs2026ip-neu-101`, `djs2026ip-neu-102`
**Erweiterungsachsen:** Prozentwert; Basisjahr 1990; Netto-THG; Schengen-Landgrenzen; Europa-Tag; Ukraine-Finanzinstrumente; Beträge und Laufzeiten

### Internationale Ereignisse 2025/2026: USA, Vatikan, WHO, UN, Klima, humanitäre Krisen
**Sichere Faktenbasis:**
- Donald Trump: Vereidigung als 47. Präsident am 20. Januar 2025; Zollanordnung „Reciprocal Tariffs“ am 2. April 2025.
- Papst Franziskus starb am 21. April 2025; Robert Francis Prevost nahm am 8. Mai 2025 den Namen Leo XIV. an.
- WHO-Pandemieabkommen: angenommen am 20. Mai 2025.
- COP30: Belém; NDC 3.0 als Klimapläne; UN80-Gedenktreffen am 22. September 2025.
- OCHA: Sudan als größte humanitäre Notlage 2026; UNESCO/UNDP warnten vor KI-Risiken für Wahlen und Meinungsfreiheit.
**Betroffene IDs:** `djs2025ip001`, `djs2025ip002`, `djs2025ip003`, `djs2025ip004`, `djs2025ip005`, `djs2025ip006`, `djs2025ip007`, `djs2025ip008`, `djs2025ip010`, `djs2025ip011`, `djs2025ip012`, `djs2025ip013`, `djs2025ip014`, `djs2026ip-neu-107`, `djs2026ip-neu-108`, `djs2026ip-neu-109`, `djs2026ip-neu-110`, `djs2026ip-neu-111`, `djs2026ip-neu-112`, `djs2026ip-neu-113`, `djs2026ip-neu-114`, `djs2026ip-neu-115`, `djs2026ip-neu-116`, `djs2026ip-neu-117`, `djs2026ip-neu-118`, `djs2026ip-neu-119`, `djs2026ip-neu-120`
**Erweiterungsachsen:** exakte Datumsfragen; Amtsnamen/Personennamen; Abkürzungen ICC/ICJ/NDC/OCHA/WHO/UNDP/UNESCO; Stadt/Land-Fragen; Konklave-Kontext

### Wirtschaft, Gesellschaft, Wissenschaft, Sport, Kultur 2025/2026
**Sichere Faktenbasis:**
- Mindestlohn 2025: 12,82 Euro; ePA = elektronische Patientenakte.
- Iberischer Blackout April 2025: Spanien und Portugal; Erklärung nach ENTSO-E aktualisieren.
- AI-/Wissenschafts- und Raumfahrtthemen sowie Sport-Großereignisse 2025/2026 sind im Datensatz angelegt und brauchen feste Quellenfelder.
- Kultur/Medien: drei harte Antwortkorrekturen bei Arc de Triomphe, Jaegers Grenze und Echo-Musikpreis.
**Betroffene IDs:** `djs2025sc002`, `djs2025sc003`, `djs2025sc008`, `djs2026mc-neu-146`, `djs2026mc-neu-148`, `djs2026mc-neu-150`
**Erweiterungsachsen:** Stichtagswerte; Abkürzungen; Ursache vs. unmittelbare Lage; Bauwerk vs. Projekt; Reportagetitel; Preisname

## 5. Vollständige Variantencluster
|Basis-ID|Kategorie|Anzahl|IDs|Kernfrage|Antwort|
|---|---|---|---|---|---|
|djs2018sc001|Deutsche Politik|3|djs2018sc001, djs2026dp-neu-005, djs2026dp-neu-006|Wer sagte: 'Es ist besser, nicht zu regieren, als falsch zu regieren'?|Christian Lindner|
|djs2023mc003|Deutsche Politik|3|djs2026dp-neu-003, djs2026dp-neu-004, djs2023mc003|Über welche Reformvorhaben stritt die Ampelkoalition? (Mehrere Antworten möglich)|Gebäudeenergiegesetz / Kindergrundsicherung|
|djs2024sc004|Deutsche Politik|3|djs2024sc004, djs2026dp-neu-001, djs2026dp-neu-002|Welche Bundestagsfraktion löste sich 2023 auf?|Die Linke|
|djs2025dp001|Deutsche Politik|3|djs2025dp001, djs2026dp-neu-007, djs2026dp-neu-008|An welchem Datum fand die Bundestagswahl 2025 statt?|23. Februar 2025|
|djs2025dp002|Deutsche Politik|3|djs2025dp002, djs2026dp-neu-009, djs2026dp-neu-010|Welche Partei wurde bei der Bundestagswahl 2025 stärkste Kraft?|CDU/CSU|
|djs2025dp003|Deutsche Politik|3|djs2025dp003, djs2026dp-neu-011, djs2026dp-neu-012|Welche Partei wurde bei der Bundestagswahl 2025 zweitstärkste Kraft?|AfD|
|djs2025dp004|Deutsche Politik|3|djs2026dp-neu-013, djs2026dp-neu-014, djs2025dp004|Wie lautet der Titel des Koalitionsvertrags, den CDU/CSU und SPD 2025 unterzeichnet haben?|Verantwortung für Deutschland|
|djs2025dp005|Deutsche Politik|3|djs2025dp005, djs2026dp-neu-015, djs2026dp-neu-016|In welchem Wahlgang wurde Friedrich Merz am 6. Mai 2025 zum Bundeskanzler gewählt?|Zweiten Wahlgang|
|djs2025dp006|Deutsche Politik|3|djs2025dp006, djs2026dp-neu-017, djs2026dp-neu-018|Wie hoch ist das 2025 beschlossene Sondervermögen für Infrastruktur und Klimaneutralität?|500 Milliarden Euro|
|djs2025dp007|Deutsche Politik|3|djs2025dp007, djs2026dp-neu-019, djs2026dp-neu-020|Welche verfassungsrechtliche Regelung wurde im März 2025 reformiert, um mehr Spielraum für Verteidigung und Investitionen zu schaffen?|Schuldenbremse|
|djs2025dp008|Deutsche Politik|1|djs2025dp008|In welchem Land stationiert Deutschland die Brigade Litauen mit rund 5.000 Soldatinnen und Soldaten?|Litauen|
|djs2025dp009|Deutsche Politik|3|djs2025dp009, djs2026dp-neu-021, djs2026dp-neu-022|Wie hoch sind die geplanten deutschen Verteidigungsausgaben im Haushalt 2026?|108,2 Milliarden Euro|
|djs2025dp010|Deutsche Politik|3|djs2025dp010, djs2026dp-neu-023, djs2026dp-neu-024|Als was stufte das Bundesamt für Verfassungsschutz die AfD am 2. Mai 2025 ein?|Gesichert rechtsextremistische Bestrebung|
|djs2025dp011|Deutsche Politik|3|djs2025dp011, djs2026dp-neu-025, djs2026dp-neu-026|Welches Gericht hob 2025 das Verbot des COMPACT-Magazins auf und machte den Fall damit zum Schlüsselthema für Pressefreiheit und wehrhafte Demokratie?|Bundesverwaltungsgericht|
|djs2025dp012|Deutsche Politik|3|djs2025dp012, djs2026dp-neu-027, djs2026dp-neu-028|Welche zwei Rechtsgüter stehen im Fall des COMPACT-Magazin-Verbots besonders im Konflikt?|Pressefreiheit / Wehrhafte Demokratie|
|djs2025dp013|Deutsche Politik|3|djs2025dp013, djs2026dp-neu-029, djs2026dp-neu-030|Welches historische Jubiläum wurde in Deutschland am 8. Mai 2025 begangen?|80 Jahre Kriegsende (Ende des Zweiten Weltkriegs)|
|djs2025dp014|Deutsche Politik|3|djs2025dp014, djs2026dp-neu-031, djs2026dp-neu-032|Welches Jubiläum der Deutschen Einheit wurde im Oktober 2025 gefeiert?|35 Jahre|
|djs2025dp015|Deutsche Politik|3|djs2025dp015, djs2026dp-neu-033, djs2026dp-neu-034|Welche deutsche Behörde erklärte 2025, die deutschen Klimaschutzziele für 2030 seien auf Basis der aktuellen Projektionen grundsätzlich erreichbar?|Umweltbundesamt (UBA)|
|djs2025match004|Deutsche Politik|1|djs2025match004|Ordnen Sie die Bundesländer ihren Landesregierungen nach den Wahlen 2024/2025 und den Entwicklungen bis Frühjahr 2026 zu.|Brandenburg → SPD-CDU / Hamburg → SPD-Grüne / Sachsen → CDU-SPD-Minderheitsregierung / Thüringen → CDU-BSW-SPD|
|djs2025mc004|Deutsche Politik|1|djs2025mc004|Wer könnte ein AfD-Verbotsverfahren anstrengen? (Mehrere Antworten möglich)|Bundesrat / Bundestag / Bundesregierung|
|djs2025sc002|Deutsche Politik|1|djs2025sc002|Auf welchen Betrag stieg der deutsche Mindeststundenlohn zum 1. Januar 2025?|12,82 Euro|
|djs2025sc003|Deutsche Politik|1|djs2025sc003|Wofür steht die Abkürzung ePA?|Elektronische Patientenakte|
|djs2023sc006|Geografie & Karten|3|djs2023sc006, djs2026geo-neu-043, djs2026geo-neu-044|In welchem Land wurden nach einem schweren Zugunglück Parlamentswahlen verschoben?|Griechenland|
|djs2023sc009|Geografie & Karten|3|djs2023sc009, djs2026geo-neu-045, djs2026geo-neu-046|In welchem Land kam es bei einer Halloween-Party zu einer tödlichen Massenpanik?|Südkorea|
|djs2024sc006|Geografie & Karten|3|djs2026geo-neu-035, djs2026geo-neu-036, djs2024sc006|Waldbrände in welchem Land lösten 2023 Smog-Alarm bis nach New York aus?|Kanada|
|djs2024sc007|Geografie & Karten|3|djs2026geo-neu-037, djs2026geo-neu-038, djs2024sc007|Welches Land gilt seit 2023 als bevölkerungsreichstes Land der Welt?|Indien|
|djs2024sc008|Geografie & Karten|3|djs2026geo-neu-039, djs2026geo-neu-040, djs2024sc008|In welchem Land wurde 2023 ein Präsidentschaftskandidat bei einer Wahlveranstaltung erschossen?|Ecuador|
|djs2024sc010|Geografie & Karten|3|djs2024sc010, djs2026geo-neu-041, djs2026geo-neu-042|Wo musste wegen einer Erdbebenserie die Blaue Lagune vorübergehend geschlossen werden?|Island|
|djs2019sc001|Gesellschaft & Recht|3|djs2019sc001, djs2026gr-neu-053, djs2026gr-neu-054|Wer sagte den Satz vom 'brennenden Haus' auf der Klimakonferenz in Davos?|Greta Thunberg|
|djs2022sc004|Gesellschaft & Recht|3|djs2022sc004, djs2026gr-neu-049, djs2026gr-neu-050|Wie lautete das Unwort des Jahres 2021?|Pushback|
|djs2022sc006|Gesellschaft & Recht|3|djs2022sc006, djs2026gr-neu-051, djs2026gr-neu-052|An welches Land sollten über 1000 Benin-Bronzen zurückgegeben werden?|Nigeria|
|djs2023sc005|Gesellschaft & Recht|3|djs2026gr-neu-047, djs2026gr-neu-048, djs2023sc005|Wie lautete das Unwort des Jahres 2022?|Klimaterroristen|
|djs2025gr001|Gesellschaft & Recht|1|djs2025gr001|Ab welchem Datum wurden Leistungserbringer verpflichtet, die elektronische Patientenakte (ePA) zu nutzen?|1. Oktober 2025|
|djs2025match001|Gesellschaft & Recht|1|djs2025match001|Ordnen Sie die folgenden Zitate den richtigen Personen zu.|Simone Biles → Aussage zur mentalen Gesundheit im Leistungssport / Christian Lindner → Eine Entlassung könne auch Befreiung sein / Friedrich Merz → Kritik an Vier-Tage-Woche / Gisèle Pelicot → Nicht sie solle sich schämen, sondern die Täter|
|djs2025mc001|Gesellschaft & Recht|1|djs2025mc001|In welchen Städten kam es zwischen Dezember 2024 und April 2025 zu besonders beachteten Autoanschlägen bzw. Amokfahrten? (Mehrere Antworten möglich)|Magdeburg / Mannheim / Vancouver|
|djs2025mc002|Gesellschaft & Recht|1|djs2025mc002|Welche Wörter wurden 2024 neu in den Duden aufgenommen? (Mehrere Antworten möglich)|ChatGPT / Deutschlandticket / Triggerwarnung / Wokeness / Klimakleber|
|djs2018sc003|Internationale Politik|3|djs2018sc003, djs2026ip-neu-077, djs2026ip-neu-078|Welche Volksgruppe wurde laut UN Ziel ethnischer Säuberungen in Myanmar?|Rohingya|
|djs2019sc003|Internationale Politik|3|djs2019sc003, djs2026ip-neu-075, djs2026ip-neu-076|Was sollte der Brexit-'Backstop' verhindern?|Eine harte Grenze zwischen Irland und Nordirland|
|djs2022sc005|Internationale Politik|3|djs2022sc005, djs2026ip-neu-071, djs2026ip-neu-072|Welches Land zwang 2021 eine Ryanair-Maschine zur Landung, um einen Blogger festzunehmen?|Belarus|
|djs2022sc007|Internationale Politik|3|djs2022sc007, djs2026ip-neu-073, djs2026ip-neu-074|Welches Land führte Bitcoin als offizielles Zahlungsmittel ein?|El Salvador|
|djs2023mc002|Internationale Politik|3|djs2026ip-neu-065, djs2026ip-neu-066, djs2023mc002|In welchen Ländern wechselte in den vergangenen 12 Monaten die Regierung? (Mehrere Antworten möglich)|Australien / Brasilien / Kolumbien|
|djs2023sc001|Internationale Politik|3|djs2023sc001, djs2026ip-neu-063, djs2026ip-neu-064|Welches Land trat im April 2023 der NATO bei?|Finnland|
|djs2023sc007|Internationale Politik|3|djs2023sc007, djs2026ip-neu-067, djs2026ip-neu-068|Welches Land führte am 1. Januar 2023 als 20. Land den Euro ein?|Kroatien|
|djs2023sc008|Internationale Politik|3|djs2023sc008, djs2026ip-neu-069, djs2026ip-neu-070|Wo regierte nach der Wahl 2022 ein Rechtsbündnis mit einer postfaschistischen Regierungschefin?|Italien|
|djs2024mc002|Internationale Politik|3|djs2024mc002, djs2026ip-neu-059, djs2026ip-neu-060|Welche Länder traten am 1. Januar 2024 den BRICS-Staaten bei? (Mehrere Antworten möglich)|Ägypten / Vereinigte Arabische Emirate|
|djs2024sc003|Internationale Politik|3|djs2024sc003, djs2026ip-neu-055, djs2026ip-neu-056|Welcher britische Politiker feierte 2023 ein spektakuläres politisches Comeback?|David Cameron|
|djs2024sc005|Internationale Politik|3|djs2024sc005, djs2026ip-neu-057, djs2026ip-neu-058|Wie alt war US-Präsident Joe Biden zum Zeitpunkt seiner Kandidatur-Ankündigung für 2024?|80|
|djs2024sc009|Internationale Politik|3|djs2024sc009, djs2026ip-neu-061, djs2026ip-neu-062|Welches Land marschierte 2023 in Berg-Karabach ein und kontrolliert es seitdem?|Aserbaidschan|
|djs2025eu001|Internationale Politik|3|djs2025eu001, djs2026ip-neu-079, djs2026ip-neu-080|Wie heißt der EU-Verteidigungsplan, der am 19. März 2025 vorgestellt wurde?|ReArm Europe/Readiness 2030|
|djs2025eu002|Internationale Politik|3|djs2025eu002, djs2026ip-neu-081, djs2026ip-neu-082|Welches Finanzinstrument ist der erste Pfeiler des EU-Plans ReArm Europe/Readiness 2030?|SAFE|
|djs2025eu003|Internationale Politik|3|djs2025eu003, djs2026ip-neu-083, djs2026ip-neu-084|Welches EU-Sanktionspaket gegen Russland wurde am 24. Februar 2025 beschlossen?|16. Paket|
|djs2025eu004|Internationale Politik|3|djs2025eu004, djs2026ip-neu-085, djs2026ip-neu-086|An welchem Datum beschloss die EU das 17. Sanktionspaket gegen Russland?|20. Mai 2025|
|djs2025eu005|Internationale Politik|3|djs2026ip-neu-087, djs2026ip-neu-088, djs2025eu005|Wie heißt das industriepolitische Leitprojekt der EU-Kommission, das am 26. Februar 2025 vorgestellt wurde?|Clean Industrial Deal|
|djs2025eu006|Internationale Politik|3|djs2026ip-neu-091, djs2026ip-neu-092, djs2025eu006|Ab welchem Datum greifen im EU AI Act die Verbote verbotener KI-Praktiken?|2. Februar 2025|
|djs2025eu007|Internationale Politik|3|djs2025eu007, djs2026ip-neu-095, djs2026ip-neu-096|Wie heißt das EU-Paket gegen Desinformation und ausländische Einflussnahme, das im November 2025 vorgestellt wurde?|European Democracy Shield|
|djs2025eu008|Internationale Politik|3|djs2025eu008, djs2026ip-neu-097, djs2026ip-neu-098|Welches 2040-Klimaziel schlug die EU-Kommission im Juli 2025 für das überarbeitete EU-Klimagesetz vor?|Minus 90 Prozent Netto-THG gegenüber 1990|
|djs2025eu009|Internationale Politik|3|djs2025eu009, djs2026ip-neu-099, djs2026ip-neu-100|Welche zwei Länder wurden ab 1. Januar 2025 vollständig Teil des Schengen-Raums?|Rumänien / Bulgarien|
|djs2025eu010|Internationale Politik|3|djs2025eu010, djs2026ip-neu-101, djs2026ip-neu-102|Welches Jubiläum der Schuman-Erklärung wurde am Europa-Tag, dem 9. Mai 2025, gefeiert?|75 Jahre|
|djs2025eu011|Internationale Politik|3|djs2025eu011, djs2026ip-neu-103, djs2026ip-neu-104|Wer ist seit Dezember 2024 die Hohe Vertreterin der EU für Außen- und Sicherheitspolitik?|Kaja Kallas|
|djs2025eu012|Internationale Politik|3|djs2025eu012, djs2026ip-neu-105, djs2026ip-neu-106|Wer ist seit Dezember 2024 Präsident des Europäischen Rates?|António Costa|
|djs2025eu013|Internationale Politik|3|djs2025eu013, djs2026ip-neu-131, djs2026ip-neu-132|Wie hoch ist das Gesamtvolumen der EU Ukraine Facility, die der Ukraine bis 2027 finanzielle Unterstützung sichert?|50 Milliarden Euro|
|djs2025eu014|Internationale Politik|3|djs2025eu014, djs2026ip-neu-133, djs2026ip-neu-134|Welches zusätzliche EU-Finanzinstrument für die Ukraine wurde im Dezember 2025 beschlossen und im April 2026 legislativ finalisiert?|Ein Unterstützungskredit von 90 Milliarden Euro für 2026/27|
|djs2025ip001|Internationale Politik|1|djs2025ip001|An welchem Datum wurde Donald Trump als 47. Präsident der USA vereidigt?|20. Januar 2025|
|djs2025ip002|Internationale Politik|3|djs2025ip002, djs2026ip-neu-107, djs2026ip-neu-108|Wie nennt sich die am 2. April 2025 von Trump erlassene Zollanordnung?|Reciprocal Tariffs|
|djs2025ip003|Internationale Politik|3|djs2025ip003, djs2026ip-neu-109, djs2026ip-neu-110|Wann starb Papst Franziskus?|21. April 2025|
|djs2025ip004|Internationale Politik|3|djs2025ip004, djs2026ip-neu-111, djs2026ip-neu-112|Welchen Papstnamen nahm Robert Francis Prevost nach seiner Wahl am 8. Mai 2025 an?|Leo XIV.|
|djs2025ip005|Internationale Politik|3|djs2025ip005, djs2026ip-neu-113, djs2026ip-neu-114|An welchem Datum nahm die Weltgesundheitsversammlung das WHO-Pandemieabkommen an?|20. Mai 2025|
|djs2025ip006|Internationale Politik|3|djs2025ip006, djs2026ip-neu-115, djs2026ip-neu-116|In welcher Stadt fand die UN-Klimakonferenz COP30 statt?|Belém|
|djs2025ip007|Internationale Politik|3|djs2025ip007, djs2026ip-neu-117, djs2026ip-neu-118|Wie werden die 2025 fälligen nationalen Klimapläne der UN-Mitgliedstaaten abgekürzt?|NDC 3.0|
|djs2025ip008|Internationale Politik|3|djs2025ip008, djs2026ip-neu-119, djs2026ip-neu-120|Wann fand das hochrangige Gedenktreffen anlässlich des 80. Jahrestags der Vereinten Nationen statt?|22. September 2025|
|djs2025ip009|Internationale Politik|3|djs2026ip-neu-121, djs2026ip-neu-122, djs2025ip009|In welchen japanischen Städten wurden 2025 die 80. Jahrestage der Atombombenabwürfe begangen?|Hiroshima / Nagasaki|
|djs2025ip010|Internationale Politik|3|djs2025ip010, djs2026ip-neu-123, djs2026ip-neu-124|Welcher Staat verhängte am 6. Februar 2025 Sanktionen gegen den Internationalen Strafgerichtshof (ICC)?|USA|
|djs2025ip011|Internationale Politik|3|djs2025ip011, djs2026ip-neu-125, djs2026ip-neu-126|Was ist der Unterschied zwischen ICC und ICJ?|ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Streitigkeiten zwischen Staaten|
|djs2025ip012|Internationale Politik|3|djs2025ip012, djs2026ip-neu-127, djs2026ip-neu-128|Welcher Konflikt gilt laut OCHA als die weltweit größte humanitäre Notlage im Jahr 2026?|Sudan|
|djs2025ip013|Internationale Politik|3|djs2025ip013, djs2026ip-neu-129, djs2026ip-neu-130|Welche zwei UN-Organisationen warnten 2025 gemeinsam vor KI-Risiken für Wahlen und Meinungsfreiheit?|UNESCO und UNDP|
|djs2025ip014|Internationale Politik|3|djs2025ip014, djs2026ip-neu-135, djs2026ip-neu-136|In welchem Land spricht OCHA 2025/26 von einer eskalierenden Gewaltsituation im Osten des Landes, die oft als 'unterberichteter Konflikt' gilt?|Demokratische Republik Kongo|
|djs2025mc005|Internationale Politik|1|djs2025mc005|Welche Personen kamen beim großen Gefangenenaustausch zwischen Russland und dem Westen frei? (Mehrere Antworten möglich)|Rico Krieger / Vadim Krassikov / Evan Gershkovich|
|djs2025sc006|Internationale Politik|1|djs2025sc006|In welchem Land scheiterte im Dezember 2024 ein Staatsstreich des amtierenden Präsidenten – bei Neuwahlen 2025 durfte er nicht mehr antreten?|Südkorea|
|djs2025sc007|Internationale Politik|1|djs2025sc007|In welchem Land löste die Verhaftung des Bürgermeisters der größten Stadt 2025 massive Proteste aus?|Türkei|
|djs2025sc008|Internationale Politik|1|djs2025sc008|In welchen Ländern führte ein Blackout im April 2025 fast einen ganzen Tag lang zu massivem Stromausfall?|Spanien und Portugal|
|djs2025sc010|Internationale Politik|1|djs2025sc010|In welchem Land ist seit April 2025 eine Brigade der Bundeswehr dauerhaft stationiert?|Litauen|
|djs2026eu001|Internationale Politik|3|djs2026ip-neu-089, djs2026ip-neu-090, djs2026eu001|Ab welchem Datum beginnt die Anwendung des EU-Migrations- und Asylpakts?|12. Juni 2026|
|djs2026eu002|Internationale Politik|3|djs2026ip-neu-093, djs2026ip-neu-094, djs2026eu002|Ab welchem Datum soll der EU AI Act vollständig anwendbar sein?|2. August 2026|
|djs2018sc002|Kultur & Medien|3|djs2018sc002, djs2026mc-neu-151, djs2026mc-neu-152|Wie heißt das Gesetz zu schnellen Löschpflichten für soziale Netzwerke in Deutschland?|Netzwerkdurchsetzungsgesetz|
|djs2018sc004|Kultur & Medien|3|djs2018sc004, djs2026mc-neu-153, djs2026mc-neu-154|Was war besonders an der Produktion der Serie 'Babylon Berlin'?|Sie war eine sehr teure Kooperation von ARD und Sky|
|djs2019sc004|Kultur & Medien|3|djs2019sc004, djs2026mc-neu-147, djs2026mc-neu-148|Welche Reportage enttarnte Claas Relotius vom Spiegel – und wer deckte ihn auf?|'Jaegers Grenze' – enthüllt von Juan Moreno|
|djs2019sc006|Kultur & Medien|3|djs2019sc006, djs2026mc-neu-149, djs2026mc-neu-150|Warum wurde der Echo-Musikpreis 2018 eingestellt?|Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang|
|djs2022sc001|Kultur & Medien|3|djs2022sc001, djs2026mc-neu-143, djs2026mc-neu-144|Welche Netflix-Serie hatte den erfolgreichsten Serienstart des Streamingdienstes?|Squid Game|
|djs2022sc002|Kultur & Medien|3|djs2022sc002, djs2026mc-neu-145, djs2026mc-neu-146|Welches Christo/Jeanne-Claude-Projekt wurde 2021 posthum verwirklicht?|Verhüllung des Arc de Triomphe|
|djs2023mc001|Kultur & Medien|3|djs2026mc-neu-141, djs2026mc-neu-142, djs2023mc001|Welche Gemälde wurden 2022 Ziel von Klima-Protesten? (Mehrere Antworten möglich)|Van Goghs 'Pfirsichbäume in Blüte' / Monets 'Getreideschober' / Raffaels 'Sixtinische Madonna' / Da Vincis 'Mona Lisa'|
|djs2024mc003|Kultur & Medien|3|djs2024mc003, djs2026mc-neu-139, djs2026mc-neu-140|Welche Kulturgüter wurden 2023 für mehr als eine Million Euro versteigert? (Mehrere Antworten möglich)|Freddie Mercurys Klavier / Gustav Klimts 'Dame mit Fächer' / Ferrari 330LM/250 GTO|
|djs2024sc001|Kultur & Medien|3|djs2024sc001, djs2026mc-neu-137, djs2026mc-neu-138|Welcher Rechercheverbund berichtete über ein Treffen von Rechtsextremisten in Potsdam?|Correctiv|
|djs2025match005|Kultur & Medien|1|djs2025match005|Ordnen Sie die Autorinnen und Autoren ihren literarischen Auszeichnungen 2024 zu.|Samantha Harvey → Booker Prize / Martina Hefter → Deutscher Buchpreis / Tijan Sila → Ingeborg-Bachmann-Preis / Han Kang → Literaturnobelpreis|
|djs2025sc004|Kultur & Medien|1|djs2025sc004|Weshalb verlor Luke Mockridge 2024 seine neue Sat.1-Show?|Wegen eines menschenverachtenden Spruchs über Paralympioniken|
|djs2025sc005|Kultur & Medien|1|djs2025sc005|Chefredakteur welches US-Magazins las in einer Chatgruppe mit, in der US-Angriffe auf den Jemen geplant wurden?|The Atlantic|
|djs2025sc009|Kultur & Medien|1|djs2025sc009|In welchem Konflikt wurden laut Reporter ohne Grenzen seit dem 7. Oktober 2023 besonders viele Journalistinnen und Journalisten getötet?|Konflikt in Gaza / Gazastreifen|
|djs2019sc002|Sport|3|djs2019sc002, djs2026sp-neu-155, djs2026sp-neu-156|Wer sagte, er sei Deutscher beim Gewinnen und Immigrant beim Verlieren?|Mesut Özil|
|djs2025sp001|Sport|3|djs2025sp001, djs2026sp-neu-157, djs2026sp-neu-158|Wo fanden die Rhine-Ruhr 2025 FISU World University Games statt?|Ruhrgebiet und Berlin|
|djs2025sp002|Sport|3|djs2025sp002, djs2026sp-neu-159, djs2026sp-neu-160|In welchem Land fand die UEFA Women's EURO 2025 statt?|Schweiz|
|djs2025sp003|Sport|3|djs2025sp003, djs2026sp-neu-161, djs2026sp-neu-162|In welcher Stadt fand das Finale der UEFA Women's EURO 2025 statt?|Basel|
|djs2025sp004|Sport|3|djs2026sp-neu-163, djs2026sp-neu-164, djs2025sp004|Im welchen Zeitraum fand der neue FIFA Club World Cup 2025 erstmals im 32-Teams-Format statt?|14. Juni – 13. Juli 2025|
|djs2026sp001|Sport|3|djs2026sp-neu-165, djs2026sp-neu-166, djs2026sp001|Wie viele Teams nehmen an der FIFA Fußball-Weltmeisterschaft 2026 teil?|48 Teams|
|djs2026sp002|Sport|3|djs2026sp-neu-167, djs2026sp-neu-168, djs2026sp002|In welchen drei Ländern findet die FIFA Fußball-Weltmeisterschaft 2026 statt?|USA / Kanada / Mexiko|
|djs2026sp003|Sport|3|djs2026sp003, djs2026sp-neu-169, djs2026sp-neu-170|Wann fanden die Olympischen Winterspiele Milano Cortina 2026 statt?|6. bis 22. Februar 2026|
|djs2022sc003|Wirtschaft & Finanzen|3|djs2022sc003, djs2026wf-neu-173, djs2026wf-neu-174|Welche Wirtschaftsprüfungsgesellschaft war in den Wirecard-Skandal verwickelt?|Ernst & Young|
|djs2023sc002|Wirtschaft & Finanzen|3|djs2023sc002, djs2026wf-neu-171, djs2026wf-neu-172|Welche Kryptobörse meldete 2022 Insolvenz an und löste eine weltweite Kryptokrise aus?|FTX|
|djs2025match002|Wirtschaft & Finanzen|1|djs2025match002|Ordnen Sie die Kennzahlen der deutschen Wirtschaft (April 2025) den richtigen Werten zu.|Schuldenstandsquote → 62,5 Prozent / Arbeitslosenquote → 6,3 Prozent / Inflationsrate → 2,4 Prozent / Wachstum des BIP → 0,2 Prozent|
|djs2025wf001|Wirtschaft & Finanzen|3|djs2025wf001, djs2026wf-neu-175, djs2026wf-neu-176|Auf welchen Wert sank der EZB-Einlagensatz nach den Zinssenkungen im März und Juni 2025?|2,0 Prozent|
|djs2025wf002|Wirtschaft & Finanzen|3|djs2025wf002, djs2026wf-neu-177, djs2026wf-neu-178|Welche Institution schätzte das BIP-Wachstum der Eurozone für das Gesamtjahr 2025 auf plus 1,5 Prozent?|Eurostat|
|djs2026eu003|Wirtschaft & Finanzen|3|djs2026eu003, djs2026wf-neu-179, djs2026wf-neu-180|Wofür steht die Abkürzung CBAM und ab wann gilt sein definitiver Anwendungsrahmen?|Carbon Border Adjustment Mechanism, ab Januar 2026|
|djs2026wf001|Wirtschaft & Finanzen|3|djs2026wf001, djs2026wf-neu-181, djs2026wf-neu-182|Welche Organisation prognostizierte im April 2026 ein Weltwirtschaftswachstum von 3,1 Prozent für 2026?|IWF (IMF)|
|djs2026wf002|Wirtschaft & Finanzen|3|djs2026wf002, djs2026wf-neu-183, djs2026wf-neu-184|Welches BIP-Wachstum prognostizierte die Bundesregierung für Deutschland im Jahr 2026?|0,5 Prozent|
|djs2026wf003|Wirtschaft & Finanzen|3|djs2026wf003, djs2026wf-neu-185, djs2026wf-neu-186|Welche internationale Organisation warnte 2025/26, dass US-Zölle und globale Unsicherheit zu einer atypischen Handelsdynamik mit Vorzieheffekten und anschließendem Einbruch führten?|Welthandelsorganisation (WTO)|
|djs2018sc005|Wissenschaft & Technik|3|djs2018sc005, djs2026wt-neu-199, djs2026wt-neu-200|Was ist CRISPR-Cas9?|Eine Genschere zur gezielten Veränderung von DNA|
|djs2019sc005|Wissenschaft & Technik|3|djs2019sc005, djs2026wt-neu-197, djs2026wt-neu-198|Welcher Konzern durfte in den USA und anderen Ländern nicht am 5G-Ausbau teilnehmen?|Huawei|
|djs2022sc008|Wissenschaft & Technik|3|djs2022sc008, djs2026wt-neu-195, djs2026wt-neu-196|Wo wurde die Omikron-Variante des Coronavirus zuerst nachgewiesen?|Südafrika|
|djs2023sc003|Wissenschaft & Technik|3|djs2026wt-neu-191, djs2026wt-neu-192, djs2023sc003|Was gelang der NASA mit der DART-Sonde?|Die Umlaufbahn eines Asteroiden zu verändern|
|djs2023sc004|Wissenschaft & Technik|3|djs2026wt-neu-193, djs2026wt-neu-194, djs2023sc004|Ab wann hält der Weltklimarat 1,5 Grad Erwärmung ohne zusätzliche Maßnahmen für wahrscheinlich?|2030|
|djs2024mc001|Wissenschaft & Technik|3|djs2024mc001, djs2026wt-neu-189, djs2026wt-neu-190|Welche Länder schafften in den vergangenen 12 Monaten eine Mondlandung? (Mehrere Antworten möglich)|Indien / Japan|
|djs2024sc002|Wissenschaft & Technik|3|djs2024sc002, djs2026wt-neu-187, djs2026wt-neu-188|Wer erhielt 2023 den Wirtschaftsnobelpreis?|Claudia Goldin|
|djs2025match003|Wissenschaft & Technik|1|djs2025match003|🔵 Ordnen Sie die Konzernchefs, die bei Trumps Vereidigung anwesend waren, ihren Unternehmen zu.|Jeff Bezos → Amazon / Tim Cook → Apple / Sundar Pichai → Google / Sam Altman → OpenAI|
|djs2025mc003|Wissenschaft & Technik|1|djs2025mc003|Welche Software-Anwendungen stammen aus Europa und werden als Alternativen zu US-Tools gehandelt? (Mehrere Antworten möglich)|DeepL / Threema|
|djs2025sc001|Wissenschaft & Technik|1|djs2025sc001|Wie lange saßen die NASA-Astronauten Butch Wilmore und Suni Williams auf der ISS fest?|9 Monate|
|djs2026sc001|Wissenschaft & Technik|3|djs2026sc001, djs2026wt-neu-201, djs2026wt-neu-202|Wie heißt die NASA-Mission, die vom 1. bis 10. April 2026 die erste bemannte Mondumrundung seit rund 50 Jahren durchführte?|Artemis II|

## 6. Maschinenlesbares Gesamtmanifest
> Kann aus dieser Markdown-Datei extrahiert und als JSON weiterverarbeitet werden. Rohblöcke sind im Anhang separat enthalten.

```json
{
  "generatedAt": "2026-05-13",
  "sourceFile": "CHECK_ALLE_FRAGEN_ANTWORTEN_V1.3 BETA.md",
  "sourcePruefstand": "2026-05-13",
  "summary": {
    "questionsTotal": 326,
    "categories": {
      "Deutsche Politik": 56,
      "Internationale Politik": 129,
      "Wirtschaft & Finanzen": 25,
      "Gesellschaft & Recht": 16,
      "Wissenschaft & Technik": 27,
      "Sport": 24,
      "Kultur & Medien": 31,
      "Geografie & Karten": 18
    },
    "statusCounts": {
      "OK": 90,
      "AKTUALISIEREN": 7,
      "OK_MIT_HINWEIS": 221,
      "TEILWEISE_FALSCH": 8
    },
    "typeCounts": {
      "singlechoice": 108,
      "matching": 5,
      "multiplechoice": 11,
      "kurzantwort": 202
    },
    "variantQuestions": 202,
    "clusterCount": 124,
    "criticalCount": 15
  },
  "recommendedModel": {
    "id": "string",
    "variantOf": "string?",
    "clusterId": "string?",
    "status": "active|archiveOnly|draft|needsReview",
    "qaStatus": "OK|OK_MIT_HINWEIS|AKTUALISIEREN|TEILWEISE_FALSCH|FALSCH|CODE_PROBLEM",
    "verifiedAt": "ISO date",
    "validAsOf": "ISO date",
    "question": "string",
    "type": "singlechoice|multiplechoice|matching|kurzantwort",
    "answer": "string|string[]|Record<string,string>",
    "answerAliases": "string[]?",
    "options": "string[]?",
    "explanation": "string",
    "sources": "{title,url,publisher,checkedAt}[]"
  },
  "questions": [
    {
      "id": "djs2018sc001",
      "category": "Deutsche Politik",
      "question": "Wer sagte: 'Es ist besser, nicht zu regieren, als falsch zu regieren'?",
      "options": "Angela Merkel, Armin Laschet, Christian Lindner, Olaf Scholz",
      "answer": "Christian Lindner",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2018,
      "dateMentions": [],
      "themeComplexes": [
        "Deutsche Politik"
      ]
    },
    {
      "id": "djs2024sc004",
      "category": "Deutsche Politik",
      "question": "Welche Bundestagsfraktion löste sich 2023 auf?",
      "options": "Die Grünen, Die FDP, Die Linke, Das BSW",
      "answer": "Die Linke",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2024,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2025dp001",
      "category": "Deutsche Politik",
      "question": "An welchem Datum fand die Bundestagswahl 2025 statt?",
      "options": "23. Januar 2025, 23. Februar 2025, 9. März 2025, 14. April 2025",
      "answer": "23. Februar 2025",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "23. Februar 2025",
        "Februar 2025",
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2025dp002",
      "category": "Deutsche Politik",
      "question": "Welche Partei wurde bei der Bundestagswahl 2025 stärkste Kraft?",
      "options": "SPD, AfD, CDU/CSU, Grüne",
      "answer": "CDU/CSU",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2025dp003",
      "category": "Deutsche Politik",
      "question": "Welche Partei wurde bei der Bundestagswahl 2025 zweitstärkste Kraft?",
      "options": "SPD, AfD, Grüne, FDP",
      "answer": "AfD",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2025dp005",
      "category": "Deutsche Politik",
      "question": "In welchem Wahlgang wurde Friedrich Merz am 6. Mai 2025 zum Bundeskanzler gewählt?",
      "options": "Ersten Wahlgang, Zweiten Wahlgang, Dritten Wahlgang, Vierten Wahlgang",
      "answer": "Zweiten Wahlgang",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Deutscher Bundestag; Bundespräsident",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "6. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2025dp006",
      "category": "Deutsche Politik",
      "question": "Wie hoch ist das 2025 beschlossene Sondervermögen für Infrastruktur und Klimaneutralität?",
      "options": "200 Milliarden Euro, 350 Milliarden Euro, 500 Milliarden Euro, 800 Milliarden Euro",
      "answer": "500 Milliarden Euro",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bundestag; bpb; BMF",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Schuldenbremse / Sondervermögen / Verteidigung",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2025dp007",
      "category": "Deutsche Politik",
      "question": "Welche verfassungsrechtliche Regelung wurde im März 2025 reformiert, um mehr Spielraum für Verteidigung und Investitionen zu schaffen?",
      "options": "Finanzverfassung, Schuldenbremse, Haushaltsgrundsätzegesetz, Stabilitäts- und Wachstumspakt",
      "answer": "Schuldenbremse",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bundestag; bpb; BMF",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "März 2025",
        "2025"
      ],
      "themeComplexes": [
        "Schuldenbremse / Sondervermögen / Verteidigung"
      ]
    },
    {
      "id": "djs2025dp008",
      "category": "Deutsche Politik",
      "question": "In welchem Land stationiert Deutschland die Brigade Litauen mit rund 5.000 Soldatinnen und Soldaten?",
      "options": "Polen, Estland, Litauen, Lettland",
      "answer": "Litauen",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bundestag; BMVg; NATO",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "Schuldenbremse / Sondervermögen / Verteidigung"
      ]
    },
    {
      "id": "djs2025dp009",
      "category": "Deutsche Politik",
      "question": "Wie hoch sind die geplanten deutschen Verteidigungsausgaben im Haushalt 2026?",
      "options": "72,4 Milliarden Euro, 88,5 Milliarden Euro, 108,2 Milliarden Euro, 120,0 Milliarden Euro",
      "answer": "108,2 Milliarden Euro",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bundestag; BMVg; NATO",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Schuldenbremse / Sondervermögen / Verteidigung",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2025dp010",
      "category": "Deutsche Politik",
      "question": "Als was stufte das Bundesamt für Verfassungsschutz die AfD am 2. Mai 2025 ein?",
      "options": "Verdachtsfall Rechtsextremismus, Gesichert rechtsextremistische Bestrebung, Beobachtungsobjekt, Extremistische Organisation",
      "answer": "Gesichert rechtsextremistische Bestrebung",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "review": "Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.",
      "problem": "Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.",
      "fix": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "finalVersion": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "sourceHint": "BfV; VG Köln; ggf. OVG Münster",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition",
        "Rechtsstaat / Verfassungsschutz / COMPACT",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2025dp011",
      "category": "Deutsche Politik",
      "question": "Welches Gericht hob 2025 das Verbot des COMPACT-Magazins auf und machte den Fall damit zum Schlüsselthema für Pressefreiheit und wehrhafte Demokratie?",
      "options": "Bundesverfassungsgericht, Bundesgerichtshof, Bundesverwaltungsgericht, Oberverwaltungsgericht NRW",
      "answer": "Bundesverwaltungsgericht",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Rechtsstaat / Verfassungsschutz / COMPACT"
      ]
    },
    {
      "id": "djs2025dp012",
      "category": "Deutsche Politik",
      "question": "Welche zwei Rechtsgüter stehen im Fall des COMPACT-Magazin-Verbots besonders im Konflikt?",
      "options": "Pressefreiheit, Religionsfreiheit, Wehrhafte Demokratie, Eigentumsrecht",
      "answer": "Pressefreiheit / Wehrhafte Demokratie",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "Rechtsstaat / Verfassungsschutz / COMPACT"
      ]
    },
    {
      "id": "djs2025dp013",
      "category": "Deutsche Politik",
      "question": "Welches historische Jubiläum wurde in Deutschland am 8. Mai 2025 begangen?",
      "options": "75 Jahre Grundgesetz, 80 Jahre Kriegsende (Ende des Zweiten Weltkriegs), 35 Jahre Wiedervereinigung, 30 Jahre Schengen-Abkommen",
      "answer": "80 Jahre Kriegsende (Ende des Zweiten Weltkriegs)",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Deutscher Bundestag; Bundespräsident",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "8. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2025dp014",
      "category": "Deutsche Politik",
      "question": "Welches Jubiläum der Deutschen Einheit wurde im Oktober 2025 gefeiert?",
      "options": "25 Jahre, 30 Jahre, 35 Jahre, 40 Jahre",
      "answer": "35 Jahre",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "Oktober 2025",
        "2025"
      ],
      "themeComplexes": [
        "Deutsche Politik"
      ]
    },
    {
      "id": "djs2025dp015",
      "category": "Deutsche Politik",
      "question": "Welche deutsche Behörde erklärte 2025, die deutschen Klimaschutzziele für 2030 seien auf Basis der aktuellen Projektionen grundsätzlich erreichbar?",
      "options": "Bundesministerium für Wirtschaft und Klimaschutz, Umweltbundesamt (UBA), Sachverständigenrat für Umweltfragen, Bundesministerium für Umwelt und Naturschutz",
      "answer": "Umweltbundesamt (UBA)",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.",
      "problem": "Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.",
      "fix": "Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.",
      "finalVersion": "Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.",
      "sourceHint": "UBA; BMUV",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025",
        "2030"
      ],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2025match004",
      "category": "Deutsche Politik",
      "question": "Ordnen Sie die Bundesländer ihren Landesregierungen nach den Wahlen 2024/2025 und den Entwicklungen bis Frühjahr 2026 zu.",
      "options": "Brandenburg, Hamburg, Sachsen, Thüringen",
      "answer": "Brandenburg → SPD-CDU / Hamburg → SPD-Grüne / Sachsen → CDU-SPD-Minderheitsregierung / Thüringen → CDU-BSW-SPD",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "matching",
      "idYear": 2025,
      "dateMentions": [
        "2024",
        "2025",
        "2026"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2025mc004",
      "category": "Deutsche Politik",
      "question": "Wer könnte ein AfD-Verbotsverfahren anstrengen? (Mehrere Antworten möglich)",
      "options": "Bundespräsident, Bundesrat, Bundestag, Bundesregierung, Bundesverfassungsgericht",
      "answer": "Bundesrat / Bundestag / Bundesregierung",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "multiplechoice",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition",
        "Rechtsstaat / Verfassungsschutz / COMPACT"
      ]
    },
    {
      "id": "djs2026dp-neu-001",
      "category": "Deutsche Politik",
      "question": "Welche Partei verlor 2023 im Bundestag ihren Fraktionsstatus, nachdem Abgeordnete um Sahra Wagenknecht ausgetreten waren?",
      "options": "—",
      "answer": "Die Linke",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2026dp-neu-002",
      "category": "Deutsche Politik",
      "question": "Die Gründung des BSW führte dazu, dass eine bisherige Bundestagsfraktion nur noch als Gruppe weiterarbeiten konnte. Welche Partei war betroffen?",
      "options": "—",
      "answer": "Die Linke",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2026dp-neu-003",
      "category": "Deutsche Politik",
      "question": "Welche zwei Ampel-Vorhaben standen besonders für die Koalitionsstreitigkeiten um Klima- und Sozialpolitik?",
      "options": "—",
      "answer": "Gebäudeenergiegesetz und Kindergrundsicherung",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023mc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023mc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026dp-neu-004",
      "category": "Deutsche Politik",
      "question": "In der Ampel-Regierung prallten Finanzierung, Klimaschutz und Sozialpolitik besonders bei welchen Reformprojekten aufeinander?",
      "options": "—",
      "answer": "Gebäudeenergiegesetz und Kindergrundsicherung",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023mc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023mc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026dp-neu-005",
      "category": "Deutsche Politik",
      "question": "Wer begründete den Abbruch der Jamaika-Sondierungen mit dem Satz, nicht falsch regieren zu wollen?",
      "options": "—",
      "answer": "Christian Lindner",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2018sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2018sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026dp-neu-006",
      "category": "Deutsche Politik",
      "question": "Der Satz „Lieber nicht regieren als falsch regieren“ wurde 2017 zum politischen Markenzeichen welches FDP-Politikers?",
      "options": "—",
      "answer": "Christian Lindner",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2018sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2018sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2017"
      ],
      "themeComplexes": [
        "Deutsche Politik"
      ]
    },
    {
      "id": "djs2026dp-neu-007",
      "category": "Deutsche Politik",
      "question": "An welchem Tag wurde nach dem Bruch der Ampelkoalition der 21. Deutsche Bundestag gewählt?",
      "options": "—",
      "answer": "23. Februar 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025dp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "23. Februar 2025",
        "Februar 2025",
        "2025"
      ],
      "themeComplexes": [
        "Deutsche Politik"
      ]
    },
    {
      "id": "djs2026dp-neu-008",
      "category": "Deutsche Politik",
      "question": "Die vorgezogene Bundestagswahl nach Vertrauensfrage und Auflösung des Bundestags fiel auf welches Datum?",
      "options": "—",
      "answer": "23. Februar 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "Variante von `djs2025dp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "23. Februar 2025",
        "Februar 2025",
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2026dp-neu-009",
      "category": "Deutsche Politik",
      "question": "Welche Parteiengemeinschaft lag bei der Bundestagswahl 2025 vor AfD und SPD auf Platz eins?",
      "options": "—",
      "answer": "CDU/CSU",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "Variante von `djs2025dp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2026dp-neu-010",
      "category": "Deutsche Politik",
      "question": "Aus der vorgezogenen Bundestagswahl 2025 ging welche politische Kraft als stärkste hervor?",
      "options": "—",
      "answer": "CDU/CSU",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "Variante von `djs2025dp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2026dp-neu-011",
      "category": "Deutsche Politik",
      "question": "Welche Partei erreichte bei der Bundestagswahl 2025 den zweiten Platz hinter CDU/CSU?",
      "options": "—",
      "answer": "AfD",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "Variante von `djs2025dp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2026dp-neu-012",
      "category": "Deutsche Politik",
      "question": "Das beste Bundestagswahlergebnis ihrer Geschichte machte welche Partei 2025 zur zweitstärksten Kraft?",
      "options": "—",
      "answer": "AfD",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "Variante von `djs2025dp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2026dp-neu-013",
      "category": "Deutsche Politik",
      "question": "Wie lautete der programmatische Titel des Koalitionsvertrags von CDU/CSU und SPD im Jahr 2025?",
      "options": "—",
      "answer": "Verantwortung für Deutschland",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "Variante von `djs2025dp004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2026dp-neu-014",
      "category": "Deutsche Politik",
      "question": "Unter welchem Titel stellten Union und SPD 2025 ihren Regierungsvertrag vor?",
      "options": "—",
      "answer": "Verantwortung für Deutschland",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025dp004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2026dp-neu-015",
      "category": "Deutsche Politik",
      "question": "In welchem Wahlgang erhielt Friedrich Merz am 6. Mai 2025 die Kanzlermehrheit?",
      "options": "—",
      "answer": "Zweiter Wahlgang",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Deutscher Bundestag; Bundespräsident",
      "variantNote": "Variante von `djs2025dp005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "6. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026dp-neu-016",
      "category": "Deutsche Politik",
      "question": "Der erste Wahlgang scheiterte, erst danach wurde Merz gewählt: Welcher Wahlgang war entscheidend?",
      "options": "—",
      "answer": "Zweiter Wahlgang",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Deutscher Bundestag; Bundespräsident",
      "variantNote": "Variante von `djs2025dp005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2026dp-neu-017",
      "category": "Deutsche Politik",
      "question": "Welches Volumen hat das 2025 beschlossene Sondervermögen für Infrastruktur und Klimaneutralität?",
      "options": "—",
      "answer": "500 Milliarden Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundestag; bpb; BMF",
      "variantNote": "Variante von `djs2025dp006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Schuldenbremse / Sondervermögen / Verteidigung",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026dp-neu-018",
      "category": "Deutsche Politik",
      "question": "Die Investitionsoffensive für marode Infrastruktur und Klimaneutralität wurde 2025 auf welchen Höchstbetrag angelegt?",
      "options": "—",
      "answer": "500 Milliarden Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025dp006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026dp-neu-019",
      "category": "Deutsche Politik",
      "question": "Welche im Grundgesetz verankerte Fiskalregel wurde 2025 für Verteidigung und Investitionen gelockert?",
      "options": "—",
      "answer": "Schuldenbremse",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundestag; bpb; BMF",
      "variantNote": "Variante von `djs2025dp007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Schuldenbremse / Sondervermögen / Verteidigung"
      ]
    },
    {
      "id": "djs2026dp-neu-020",
      "category": "Deutsche Politik",
      "question": "Die Grundgesetzänderung im März 2025 betraf welches zentrale Instrument deutscher Haushaltspolitik?",
      "options": "—",
      "answer": "Schuldenbremse",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundestag; bpb; BMF",
      "variantNote": "Variante von `djs2025dp007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "März 2025",
        "2025"
      ],
      "themeComplexes": [
        "Schuldenbremse / Sondervermögen / Verteidigung"
      ]
    },
    {
      "id": "djs2026dp-neu-021",
      "category": "Deutsche Politik",
      "question": "Auf welchen Betrag sollten die deutschen Verteidigungsausgaben im Haushalt 2026 steigen?",
      "options": "—",
      "answer": "108,2 Milliarden Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundestag; BMVg; NATO",
      "variantNote": "Variante von `djs2025dp009`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp009",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Schuldenbremse / Sondervermögen / Verteidigung",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026dp-neu-022",
      "category": "Deutsche Politik",
      "question": "Die Zeitenwende schlug sich im Haushalt 2026 in welcher geplanten Verteidigungsausgaben-Summe nieder?",
      "options": "—",
      "answer": "108,2 Milliarden Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundestag; BMVg; NATO",
      "variantNote": "Variante von `djs2025dp009`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp009",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Schuldenbremse / Sondervermögen / Verteidigung",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026dp-neu-023",
      "category": "Deutsche Politik",
      "question": "Welche Beobachtungsstufe verwendete das Bundesamt für Verfassungsschutz 2025 für die AfD?",
      "options": "—",
      "answer": "Gesichert rechtsextremistische Bestrebung",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "review": "Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.",
      "problem": "Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.",
      "fix": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "finalVersion": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "sourceHint": "BfV; VG Köln; ggf. OVG Münster",
      "variantNote": "Variante von `djs2025dp010`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp010",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition",
        "Rechtsstaat / Verfassungsschutz / COMPACT"
      ]
    },
    {
      "id": "djs2026dp-neu-024",
      "category": "Deutsche Politik",
      "question": "Wie lautet der präzise verfassungsschutzrechtliche Begriff für die AfD-Einstufung vom 2. Mai 2025?",
      "options": "—",
      "answer": "Gesichert rechtsextremistische Bestrebung",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "review": "Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.",
      "problem": "Die historische Aussage zur BfV-Hochstufung am 02.05.2025 ist richtig, aber der Rechtsstand hat sich 2026 geändert: VG Köln stoppte/relativierte die öffentliche Hochstufung im Eilverfahren. Die Erklärung muss „Stand: Datum“ enthalten.",
      "fix": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "finalVersion": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "sourceHint": "BfV; VG Köln; ggf. OVG Münster",
      "variantNote": "Variante von `djs2025dp010`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp010",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition",
        "Rechtsstaat / Verfassungsschutz / COMPACT",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026dp-neu-025",
      "category": "Deutsche Politik",
      "question": "Welches Gericht war für das Hauptverfahren um das COMPACT-Verbot zentral?",
      "options": "—",
      "answer": "Bundesverwaltungsgericht",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG",
      "variantNote": "Variante von `djs2025dp011`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp011",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Rechtsstaat / Verfassungsschutz / COMPACT"
      ]
    },
    {
      "id": "djs2026dp-neu-026",
      "category": "Deutsche Politik",
      "question": "Der Streit um Vereinsverbot und Pressefreiheit bei COMPACT lag 2025 vor welchem obersten Bundesgericht?",
      "options": "—",
      "answer": "Bundesverwaltungsgericht",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG",
      "variantNote": "Variante von `djs2025dp011`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp011",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Rechtsstaat / Verfassungsschutz / COMPACT"
      ]
    },
    {
      "id": "djs2026dp-neu-027",
      "category": "Deutsche Politik",
      "question": "Welche beiden Prinzipien standen beim COMPACT-Verbot besonders gegeneinander?",
      "options": "—",
      "answer": "Pressefreiheit und wehrhafte Demokratie",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG",
      "variantNote": "Variante von `djs2025dp012`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp012",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Rechtsstaat / Verfassungsschutz / COMPACT"
      ]
    },
    {
      "id": "djs2026dp-neu-028",
      "category": "Deutsche Politik",
      "question": "Der COMPACT-Fall wurde zum Testfall zwischen Art. 5 GG und welchem demokratischen Schutzkonzept?",
      "options": "—",
      "answer": "Pressefreiheit und wehrhafte Demokratie",
      "qaStatus": "TEILWEISE_FALSCH",
      "priority": "HOCH",
      "review": "Die Frage fragt nach dem demokratischen Schutzkonzept neben Art. 5 GG. Die hinterlegte Antwort enthält zusätzlich „Pressefreiheit“, obwohl Art. 5 GG bereits Presse-/Meinungsfreiheit meint.",
      "problem": "Die Frage fragt nach dem demokratischen Schutzkonzept neben Art. 5 GG. Die hinterlegte Antwort enthält zusätzlich „Pressefreiheit“, obwohl Art. 5 GG bereits Presse-/Meinungsfreiheit meint.",
      "fix": "Antwort auf „wehrhafte Demokratie“ verkürzen.",
      "finalVersion": "Frage: „Der COMPACT-Fall wurde zum Testfall zwischen Art. 5 GG und welchem demokratischen Schutzkonzept?“ Antwort: „wehrhafte Demokratie“.",
      "sourceHint": "BVerwG; BMI; Art. 5 GG / Art. 9 Abs. 2 GG",
      "variantNote": "Variante von `djs2025dp012`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp012",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Rechtsstaat / Verfassungsschutz / COMPACT"
      ]
    },
    {
      "id": "djs2026dp-neu-029",
      "category": "Deutsche Politik",
      "question": "Welcher runde Jahrestag wurde in Deutschland am 8. Mai 2025 begangen?",
      "options": "—",
      "answer": "80 Jahre Kriegsende",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025dp013`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp013",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "8. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026dp-neu-030",
      "category": "Deutsche Politik",
      "question": "Der 8. Mai 2025 erinnerte an welches Ereignis vor acht Jahrzehnten?",
      "options": "—",
      "answer": "80 Jahre Kriegsende",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025dp013`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp013",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "8. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026dp-neu-031",
      "category": "Deutsche Politik",
      "question": "Zum wievielten Mal jährte sich die Deutsche Einheit am 3. Oktober 2025?",
      "options": "—",
      "answer": "35 Jahre",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025dp014`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp014",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "3. Oktober 2025",
        "Oktober 2025",
        "2025"
      ],
      "themeComplexes": [
        "Deutsche Politik"
      ]
    },
    {
      "id": "djs2026dp-neu-032",
      "category": "Deutsche Politik",
      "question": "Das Jahr 2025 markierte welches Jubiläum der Wiedervereinigung von 1990?",
      "options": "—",
      "answer": "35 Jahre",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025dp014`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp014",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026dp-neu-033",
      "category": "Deutsche Politik",
      "question": "Welche Bundesbehörde bewertete 2025 die deutschen Klimaziele für 2030 als grundsätzlich erreichbar?",
      "options": "—",
      "answer": "Umweltbundesamt (UBA)",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.",
      "problem": "Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.",
      "fix": "Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.",
      "finalVersion": "Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.",
      "sourceHint": "UBA; BMUV",
      "variantNote": "Variante von `djs2025dp015`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp015",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025",
        "2030"
      ],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2026dp-neu-034",
      "category": "Deutsche Politik",
      "question": "Die offiziellen Emissionsprojektionen, nach denen das 2030-Ziel noch erreichbar sei, kamen von welcher Umweltbehörde?",
      "options": "—",
      "answer": "Umweltbundesamt (UBA)",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.",
      "problem": "Richtig, aber „grundsätzlich erreichbar“ muss mit Bedingungen versehen werden: Umsetzung bestehender/notwendiger Maßnahmen und nur knappe Einhaltung in neueren Projektionen.",
      "fix": "Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.",
      "finalVersion": "Erklärung mit „wenn Maßnahmen konsequent umgesetzt werden“ und „Stand 2025/2026“ präzisieren.",
      "sourceHint": "UBA; BMUV",
      "variantNote": "Variante von `djs2025dp015`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025dp015",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2030"
      ],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2023mc003",
      "category": "Deutsche Politik",
      "question": "Über welche Reformvorhaben stritt die Ampelkoalition? (Mehrere Antworten möglich)",
      "options": "Gebäudeenergiegesetz, Kindergrundsicherung, Einbürgerungsgesetz, Schuldenbremse, Grundrente",
      "answer": "Gebäudeenergiegesetz / Kindergrundsicherung",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "multiplechoice",
      "idYear": 2023,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2025dp004",
      "category": "Deutsche Politik",
      "question": "Wie lautet der Titel des Koalitionsvertrags, den CDU/CSU und SPD 2025 unterzeichnet haben?",
      "options": "Aufbruch für Deutschland, Verantwortung für Deutschland, Zusammenhalt und Stärke, Erneuerung und Stabilität",
      "answer": "Verantwortung für Deutschland",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2025sc002",
      "category": "Deutsche Politik",
      "question": "Auf welchen Betrag stieg der deutsche Mindeststundenlohn zum 1. Januar 2025?",
      "options": "12,41 Euro, 12,82 Euro, 13,10 Euro, 14,00 Euro",
      "answer": "12,82 Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "Bundeswahlleiterin; Deutscher Bundestag",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "1. Januar 2025",
        "Januar 2025",
        "2025"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2025sc003",
      "category": "Deutsche Politik",
      "question": "Wofür steht die Abkürzung ePA?",
      "options": "Elektronische Polizeiakte, Elektronische Patientenakte, Elektronisches Prüfungsamt, Erweiterte Personalausweis-App",
      "answer": "Elektronische Patientenakte",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "BMG; gematik",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "Deutsche Politik"
      ]
    },
    {
      "id": "djs2018sc003",
      "category": "Internationale Politik",
      "question": "Welche Volksgruppe wurde laut UN Ziel ethnischer Säuberungen in Myanmar?",
      "options": "Uyghuren, Tibeter, Rohingya, Karen",
      "answer": "Rohingya",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Rohingya ist korrekt. Begriff „Völkermord“ sollte sauber zwischen UN-Fact-Finding/Genozidabsicht, ICJ-Verfahren und rechtlicher Feststellung differenzieren.",
      "problem": "Rohingya ist korrekt. Begriff „Völkermord“ sollte sauber zwischen UN-Fact-Finding/Genozidabsicht, ICJ-Verfahren und rechtlicher Feststellung differenzieren.",
      "fix": "Erklärung juristisch präzisieren: „UN-Ermittler sahen Hinweise auf genozidale Absicht; ICJ-Verfahren läuft/lief.“",
      "finalVersion": "Erklärung juristisch präzisieren: „UN-Ermittler sahen Hinweise auf genozidale Absicht; ICJ-Verfahren läuft/lief.“",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2018,
      "dateMentions": [],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2019sc003",
      "category": "Internationale Politik",
      "question": "Was sollte der Brexit-'Backstop' verhindern?",
      "options": "Eine EU-Mitgliedschaft Nordirlands, Eine harte Grenze zwischen Irland und Nordirland, Eine Rückkehr Großbritanniens in die EU, Den Zerfall des Vereinigten Königreichs",
      "answer": "Eine harte Grenze zwischen Irland und Nordirland",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2019,
      "dateMentions": [],
      "themeComplexes": [
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2022sc005",
      "category": "Internationale Politik",
      "question": "Welches Land zwang 2021 eine Ryanair-Maschine zur Landung, um einen Blogger festzunehmen?",
      "options": "Russland, Belarus, Ukraine, Aserbaidschan",
      "answer": "Belarus",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2022,
      "dateMentions": [
        "2021"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2022sc007",
      "category": "Internationale Politik",
      "question": "Welches Land führte Bitcoin als offizielles Zahlungsmittel ein?",
      "options": "Panama, El Salvador, Honduras, Mexiko",
      "answer": "El Salvador",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Historisch korrekt. Erklärung sollte präzisieren, dass Bitcoin später durch IWF-Vereinbarung/gesetzliche Änderung faktisch nicht mehr verpflichtend akzeptiert werden musste.",
      "problem": "Historisch korrekt. Erklärung sollte präzisieren, dass Bitcoin später durch IWF-Vereinbarung/gesetzliche Änderung faktisch nicht mehr verpflichtend akzeptiert werden musste.",
      "fix": "Erklärung um Zeitstand 2024/2025 und freiwillige Akzeptanz ergänzen.",
      "finalVersion": "Erklärung um Zeitstand 2024/2025 und freiwillige Akzeptanz ergänzen.",
      "sourceHint": "IWF/IMF World Economic Outlook",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2022,
      "dateMentions": [],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2023sc001",
      "category": "Internationale Politik",
      "question": "Welches Land trat im April 2023 der NATO bei?",
      "options": "Schweden, Finnland, Ukraine, Georgien",
      "answer": "Finnland",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2023,
      "dateMentions": [
        "April 2023",
        "2023"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2023sc007",
      "category": "Internationale Politik",
      "question": "Welches Land führte am 1. Januar 2023 als 20. Land den Euro ein?",
      "options": "Bulgarien, Kroatien, Rumänien, Serbien",
      "answer": "Kroatien",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2023,
      "dateMentions": [
        "1. Januar 2023",
        "Januar 2023",
        "2023"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2023sc008",
      "category": "Internationale Politik",
      "question": "Wo regierte nach der Wahl 2022 ein Rechtsbündnis mit einer postfaschistischen Regierungschefin?",
      "options": "Spanien, Frankreich, Italien, Ungarn",
      "answer": "Italien",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2023,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2024mc002",
      "category": "Internationale Politik",
      "question": "Welche Länder traten am 1. Januar 2024 den BRICS-Staaten bei? (Mehrere Antworten möglich)",
      "options": "Saudi-Arabien, Ägypten, Türkei, Vereinigte Arabische Emirate, Nigeria",
      "answer": "Ägypten / Vereinigte Arabische Emirate",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "multiplechoice",
      "idYear": 2024,
      "dateMentions": [
        "1. Januar 2024",
        "Januar 2024",
        "2024"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2024sc003",
      "category": "Internationale Politik",
      "question": "Welcher britische Politiker feierte 2023 ein spektakuläres politisches Comeback?",
      "options": "Boris Johnson, Nigel Farage, David Cameron, Tony Blair",
      "answer": "David Cameron",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2024,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2024sc005",
      "category": "Internationale Politik",
      "question": "Wie alt war US-Präsident Joe Biden zum Zeitpunkt seiner Kandidatur-Ankündigung für 2024?",
      "options": "79, 80, 81, 82",
      "answer": "80",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "White House; Federal Register; AP/Reuters",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2024,
      "dateMentions": [
        "2024"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2024sc009",
      "category": "Internationale Politik",
      "question": "Welches Land marschierte 2023 in Berg-Karabach ein und kontrolliert es seitdem?",
      "options": "Armenien, Russland, Aserbaidschan, Iran",
      "answer": "Aserbaidschan",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2024,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2025eu001",
      "category": "Internationale Politik",
      "question": "Wie heißt der EU-Verteidigungsplan, der am 19. März 2025 vorgestellt wurde?",
      "options": "EU Defence 2030, ReArm Europe/Readiness 2030, European Shield 2030, NATO Plus 2030",
      "answer": "ReArm Europe/Readiness 2030",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "UBA; BMUV",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "19. März 2025",
        "März 2025",
        "2025",
        "2030"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2025eu002",
      "category": "Internationale Politik",
      "question": "Welches Finanzinstrument ist der erste Pfeiler des EU-Plans ReArm Europe/Readiness 2030?",
      "options": "ESM, SURE, SAFE, NextGenerationEU",
      "answer": "SAFE",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "EU-Kommission; EU-Parlament/EPRS",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2030"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2025eu003",
      "category": "Internationale Politik",
      "question": "Welches EU-Sanktionspaket gegen Russland wurde am 24. Februar 2025 beschlossen?",
      "options": "14. Paket, 15. Paket, 16. Paket, 17. Paket",
      "answer": "16. Paket",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "24. Februar 2025",
        "Februar 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie"
      ]
    },
    {
      "id": "djs2025eu004",
      "category": "Internationale Politik",
      "question": "An welchem Datum beschloss die EU das 17. Sanktionspaket gegen Russland?",
      "options": "24. Februar 2025, 9. April 2025, 20. Mai 2025, 15. Juni 2025",
      "answer": "20. Mai 2025",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "20. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2025eu007",
      "category": "Internationale Politik",
      "question": "Wie heißt das EU-Paket gegen Desinformation und ausländische Einflussnahme, das im November 2025 vorgestellt wurde?",
      "options": "Digital Democracy Act, European Democracy Shield, Information Integrity Framework, DSA Democracy Package",
      "answer": "European Democracy Shield",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "November 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2025eu008",
      "category": "Internationale Politik",
      "question": "Welches 2040-Klimaziel schlug die EU-Kommission im Juli 2025 für das überarbeitete EU-Klimagesetz vor?",
      "options": "Minus 70 Prozent Netto-THG gegenüber 1990, Minus 80 Prozent Netto-THG gegenüber 1990, Minus 90 Prozent Netto-THG gegenüber 1990, Klimaneutralität bereits 2040",
      "answer": "Minus 90 Prozent Netto-THG gegenüber 1990",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.",
      "problem": "Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.",
      "fix": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "finalVersion": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "sourceHint": "EU-Kommission, EU-Klimagesetz",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "Juli 2025",
        "2040",
        "2025"
      ],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2025eu009",
      "category": "Internationale Politik",
      "question": "Welche zwei Länder wurden ab 1. Januar 2025 vollständig Teil des Schengen-Raums?",
      "options": "Rumänien, Serbien, Bulgarien, Albanien",
      "answer": "Rumänien / Bulgarien",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "1. Januar 2025",
        "Januar 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2025eu010",
      "category": "Internationale Politik",
      "question": "Welches Jubiläum der Schuman-Erklärung wurde am Europa-Tag, dem 9. Mai 2025, gefeiert?",
      "options": "60 Jahre, 70 Jahre, 75 Jahre, 80 Jahre",
      "answer": "75 Jahre",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "9. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2025eu011",
      "category": "Internationale Politik",
      "question": "Wer ist seit Dezember 2024 die Hohe Vertreterin der EU für Außen- und Sicherheitspolitik?",
      "options": "Ursula von der Leyen, Christine Lagarde, Kaja Kallas, Federica Mogherini",
      "answer": "Kaja Kallas",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "Dezember 2024",
        "2024"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie"
      ]
    },
    {
      "id": "djs2025eu012",
      "category": "Internationale Politik",
      "question": "Wer ist seit Dezember 2024 Präsident des Europäischen Rates?",
      "options": "Charles Michel, António Costa, Mario Draghi, Mark Rutte",
      "answer": "António Costa",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "Dezember 2024",
        "2024"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2025eu013",
      "category": "Internationale Politik",
      "question": "Wie hoch ist das Gesamtvolumen der EU Ukraine Facility, die der Ukraine bis 2027 finanzielle Unterstützung sichert?",
      "options": "20 Milliarden Euro, 50 Milliarden Euro, 90 Milliarden Euro, 150 Milliarden Euro",
      "answer": "50 Milliarden Euro",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "EU-Kommission; Rat der EU; Reuters/AP zur Einordnung",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2027"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2025eu014",
      "category": "Internationale Politik",
      "question": "Welches zusätzliche EU-Finanzinstrument für die Ukraine wurde im Dezember 2025 beschlossen und im April 2026 legislativ finalisiert?",
      "options": "Ein Hilfspaket von 20 Milliarden Euro für humanitäre Hilfe, Ein Unterstützungskredit von 90 Milliarden Euro für 2026/27, Eine Erhöhung der Ukraine Facility auf 75 Milliarden Euro, Ein Rüstungskredit von 50 Milliarden Euro über die EIB",
      "answer": "Ein Unterstützungskredit von 90 Milliarden Euro für 2026/27",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "EU-Kommission; Rat der EU; Reuters/AP zur Einordnung",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "Dezember 2025",
        "April 2026",
        "2025",
        "2026"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2025ip001",
      "category": "Internationale Politik",
      "question": "An welchem Datum wurde Donald Trump als 47. Präsident der USA vereidigt?",
      "options": "6. Januar 2025, 20. Januar 2025, 1. Februar 2025, 20. März 2025",
      "answer": "20. Januar 2025",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "White House; Federal Register; AP/Reuters",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "20. Januar 2025",
        "Januar 2025",
        "2025"
      ],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2025ip002",
      "category": "Internationale Politik",
      "question": "Wie nennt sich die am 2. April 2025 von Trump erlassene Zollanordnung?",
      "options": "America First Tariffs, Reciprocal Tariffs, Fair Trade Executive Order, Protectionist Trade Act",
      "answer": "Reciprocal Tariffs",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "White House; Federal Register; AP/Reuters",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2. April 2025",
        "April 2025",
        "2025"
      ],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2025ip003",
      "category": "Internationale Politik",
      "question": "Wann starb Papst Franziskus?",
      "options": "8. April 2025, 21. April 2025, 8. Mai 2025, 26. April 2025",
      "answer": "21. April 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Kleiner Sprach-/Länderfehler: „Argentina“ in deutschem Text.",
      "problem": "Kleiner Sprach-/Länderfehler: „Argentina“ in deutschem Text.",
      "fix": "Zu „Argentinien“ korrigieren.",
      "finalVersion": "Zu „Argentinien“ korrigieren.",
      "sourceHint": "Vatican News; Vatican.va; AP/Reuters",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "21. April 2025",
        "April 2025",
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres"
      ]
    },
    {
      "id": "djs2025ip004",
      "category": "Internationale Politik",
      "question": "Welchen Papstnamen nahm Robert Francis Prevost nach seiner Wahl am 8. Mai 2025 an?",
      "options": "Franziskus II., Johannes XXIV., Leo XIV., Benedikt XVII.",
      "answer": "Leo XIV.",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Vatican News; Vatican.va; AP/Reuters",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "8. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2025ip005",
      "category": "Internationale Politik",
      "question": "An welchem Datum nahm die Weltgesundheitsversammlung das WHO-Pandemieabkommen an?",
      "options": "8. Mai 2025, 20. Mai 2025, 1. Juni 2025, 12. Juni 2025",
      "answer": "20. Mai 2025",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "White House; Federal Register; AP/Reuters",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "20. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2025ip006",
      "category": "Internationale Politik",
      "question": "In welcher Stadt fand die UN-Klimakonferenz COP30 statt?",
      "options": "Bogotá, Nairobi, Belém, Jakarta",
      "answer": "Belém",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Tippfehler in der Erklärung: „Luelas Regierung“ muss „Lulas Regierung“ heißen.",
      "problem": "Tippfehler in der Erklärung: „Luelas Regierung“ muss „Lulas Regierung“ heißen.",
      "fix": "Tippfehler korrigieren.",
      "finalVersion": "Tippfehler korrigieren.",
      "sourceHint": "UNFCCC",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2025ip007",
      "category": "Internationale Politik",
      "question": "Wie werden die 2025 fälligen nationalen Klimapläne der UN-Mitgliedstaaten abgekürzt?",
      "options": "NAP 3.0, NDC 3.0, NCP 3.0, GHG 3.0",
      "answer": "NDC 3.0",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "UNFCCC; UN Climate Change; EU-NDC-Dokumente",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2025ip008",
      "category": "Internationale Politik",
      "question": "Wann fand das hochrangige Gedenktreffen anlässlich des 80. Jahrestags der Vereinten Nationen statt?",
      "options": "22. Juni 2025, 22. August 2025, 22. September 2025, 22. Oktober 2025",
      "answer": "22. September 2025",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "UN General Assembly / UN Web TV",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "22. September 2025",
        "September 2025",
        "2025"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2025ip010",
      "category": "Internationale Politik",
      "question": "Welcher Staat verhängte am 6. Februar 2025 Sanktionen gegen den Internationalen Strafgerichtshof (ICC)?",
      "options": "Russland, China, USA, Israel",
      "answer": "USA",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "6. Februar 2025",
        "Februar 2025",
        "2025"
      ],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2025ip011",
      "category": "Internationale Politik",
      "question": "Was ist der Unterschied zwischen ICC und ICJ?",
      "options": "ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Streitigkeiten zwischen Staaten, ICC = Handelsgerichtshof; ICJ = Menschenrechtsgericht, Beide sind identisch, nur unterschiedliche Abkürzungen, ICC = UN-Gericht; ICJ = NATO-Gericht",
      "answer": "ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Streitigkeiten zwischen Staaten",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "UN General Assembly / UN Web TV",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2025ip012",
      "category": "Internationale Politik",
      "question": "Welcher Konflikt gilt laut OCHA als die weltweit größte humanitäre Notlage im Jahr 2026?",
      "options": "Ukraine, Gaza/Westbank, Sudan, DR Kongo",
      "answer": "Sudan",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres"
      ]
    },
    {
      "id": "djs2025ip013",
      "category": "Internationale Politik",
      "question": "Welche zwei UN-Organisationen warnten 2025 gemeinsam vor KI-Risiken für Wahlen und Meinungsfreiheit?",
      "options": "WHO und UNICEF, UNESCO und UNDP, UNHCR und OCHA, FAO und ILO",
      "answer": "UNESCO und UNDP",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "„Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.",
      "problem": "„Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.",
      "fix": "Erklärung sprachlich auf „Issue Brief“ ändern.",
      "finalVersion": "Erklärung sprachlich auf „Issue Brief“ ändern.",
      "sourceHint": "UNESCO; UNDP",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2025ip014",
      "category": "Internationale Politik",
      "question": "In welchem Land spricht OCHA 2025/26 von einer eskalierenden Gewaltsituation im Osten des Landes, die oft als 'unterberichteter Konflikt' gilt?",
      "options": "Äthiopien, Demokratische Republik Kongo, Mali, Mosambik",
      "answer": "Demokratische Republik Kongo",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres"
      ]
    },
    {
      "id": "djs2025mc005",
      "category": "Internationale Politik",
      "question": "Welche Personen kamen beim großen Gefangenenaustausch zwischen Russland und dem Westen frei? (Mehrere Antworten möglich)",
      "options": "Alexej Nawalny, Rico Krieger, Vadim Krassikov, Evan Gershkovich, Julian Assange",
      "answer": "Rico Krieger / Vadim Krassikov / Evan Gershkovich",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "multiplechoice",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2025sc006",
      "category": "Internationale Politik",
      "question": "In welchem Land scheiterte im Dezember 2024 ein Staatsstreich des amtierenden Präsidenten – bei Neuwahlen 2025 durfte er nicht mehr antreten?",
      "options": "Südkorea, Myanmar, Venezuela, Bolivien",
      "answer": "Südkorea",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "Dezember 2024",
        "2024",
        "2025"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2025sc007",
      "category": "Internationale Politik",
      "question": "In welchem Land löste die Verhaftung des Bürgermeisters der größten Stadt 2025 massive Proteste aus?",
      "options": "Griechenland, Türkei, Polen, Serbien",
      "answer": "Türkei",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2025sc008",
      "category": "Internationale Politik",
      "question": "In welchen Ländern führte ein Blackout im April 2025 fast einen ganzen Tag lang zu massivem Stromausfall?",
      "options": "Frankreich und Belgien, Spanien und Portugal, Italien und Griechenland, Deutschland und Österreich",
      "answer": "Spanien und Portugal",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "review": "Die Erklärung sagt, die genaue Ursache sei zunächst unklar. Das war für die unmittelbare Lage korrekt, ist aber nach ENTSO-E-Untersuchung zu aktualisieren.",
      "problem": "Die Erklärung sagt, die genaue Ursache sei zunächst unklar. Das war für die unmittelbare Lage korrekt, ist aber nach ENTSO-E-Untersuchung zu aktualisieren.",
      "fix": "Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück.",
      "finalVersion": "Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück.",
      "sourceHint": "ENTSO-E Abschluss-/Untersuchungsseite",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "April 2025",
        "2025"
      ],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2026ip-neu-055",
      "category": "Internationale Politik",
      "question": "Welcher frühere britische Premier kehrte 2023 überraschend als Außenminister zurück?",
      "options": "—",
      "answer": "David Cameron",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-056",
      "category": "Internationale Politik",
      "question": "Rishi Sunak holte welchen Brexit-Referendums-Premier 2023 in die Regierung zurück?",
      "options": "—",
      "answer": "David Cameron",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-057",
      "category": "Internationale Politik",
      "question": "Wie alt war Joe Biden, als sein Alter im Wahlkampf 2024 zum zentralen Thema wurde?",
      "options": "—",
      "answer": "81",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2024"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-058",
      "category": "Internationale Politik",
      "question": "Die Debatte um Bidens Amtsfähigkeit kreiste 2024 um einen Präsidenten welchen Alters?",
      "options": "—",
      "answer": "81",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2024"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-059",
      "category": "Internationale Politik",
      "question": "Welche zwei der genannten Staaten traten zum 1. Januar 2024 der BRICS-Gruppe bei?",
      "options": "—",
      "answer": "Ägypten und Vereinigte Arabische Emirate",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024mc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024mc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "1. Januar 2024",
        "Januar 2024",
        "2024"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-060",
      "category": "Internationale Politik",
      "question": "Die BRICS-Erweiterung 2024 umfasste unter anderem Ägypten und welches Golf-Land?",
      "options": "—",
      "answer": "Ägypten und Vereinigte Arabische Emirate",
      "qaStatus": "TEILWEISE_FALSCH",
      "priority": "HOCH",
      "review": "Die Frage fragt: „Ägypten und welches Golf-Land?“ Die hinterlegte Antwort nennt erneut Ägypten und die VAE.",
      "problem": "Die Frage fragt: „Ägypten und welches Golf-Land?“ Die hinterlegte Antwort nennt erneut Ägypten und die VAE.",
      "fix": "Antwort auf „Vereinigte Arabische Emirate“ verkürzen.",
      "finalVersion": "Antwort: „Vereinigte Arabische Emirate“.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024mc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024mc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2024"
      ],
      "themeComplexes": [
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2026ip-neu-061",
      "category": "Internationale Politik",
      "question": "Welcher Staat übernahm 2023 nach einer Blitzoffensive die Kontrolle über Berg-Karabach?",
      "options": "—",
      "answer": "Aserbaidschan",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc009`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc009",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2026ip-neu-062",
      "category": "Internationale Politik",
      "question": "Die armenische Bevölkerung floh 2023 fast vollständig aus Berg-Karabach nach dem Angriff welchen Landes?",
      "options": "—",
      "answer": "Aserbaidschan",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc009`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc009",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2026ip-neu-063",
      "category": "Internationale Politik",
      "question": "Welches nordische Land wurde im April 2023 das 31. NATO-Mitglied?",
      "options": "—",
      "answer": "Finnland",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "April 2023",
        "2023"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-064",
      "category": "Internationale Politik",
      "question": "Russlands Angriff auf die Ukraine beschleunigte den NATO-Beitritt welchen Landes mit langer Russlandgrenze?",
      "options": "—",
      "answer": "Finnland",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "Variante von `djs2023sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2026ip-neu-065",
      "category": "Internationale Politik",
      "question": "In welchen drei Ländern kam es 2022 zu Regierungswechseln, die 2023 prüfungsrelevant waren?",
      "options": "—",
      "answer": "Australien, Brasilien und Kolumbien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023mc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023mc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2022",
        "2023"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-066",
      "category": "Internationale Politik",
      "question": "Albanese, Lula und Petro stehen für Regierungswechsel in welchen Staaten?",
      "options": "—",
      "answer": "Australien, Brasilien und Kolumbien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023mc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023mc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-067",
      "category": "Internationale Politik",
      "question": "Welcher EU-Staat führte am 1. Januar 2023 als 20. Land den Euro ein?",
      "options": "—",
      "answer": "Kroatien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "1. Januar 2023",
        "Januar 2023",
        "2023"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-068",
      "category": "Internationale Politik",
      "question": "Kuna raus, Euro rein: Welches Land wechselte 2023 in die Eurozone?",
      "options": "—",
      "answer": "Kroatien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Eurostat",
      "variantNote": "Variante von `djs2023sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-069",
      "category": "Internationale Politik",
      "question": "In welchem Land wurde Giorgia Meloni nach der Wahl 2022 Regierungschefin eines Rechtsbündnisses?",
      "options": "—",
      "answer": "Italien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc008",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-070",
      "category": "Internationale Politik",
      "question": "Die Fratelli d'Italia mit postfaschistischen Wurzeln kamen 2022 in welchem EU-Land an die Regierung?",
      "options": "—",
      "answer": "Italien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc008",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-071",
      "category": "Internationale Politik",
      "question": "Welches Land zwang 2021 ein Ryanair-Flugzeug zur Landung, um Roman Protassewitsch festzunehmen?",
      "options": "—",
      "answer": "Belarus",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2021"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-072",
      "category": "Internationale Politik",
      "question": "Die erzwungene Landung einer Maschine auf dem Weg nach Vilnius wird welchem autoritären Staat zugeschrieben?",
      "options": "—",
      "answer": "Belarus",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-073",
      "category": "Internationale Politik",
      "question": "Welches Land führte Bitcoin 2021 als gesetzliches Zahlungsmittel ein?",
      "options": "—",
      "answer": "El Salvador",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2021"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-074",
      "category": "Internationale Politik",
      "question": "Das Bitcoin-Experiment von Präsident Nayib Bukele begann in welchem mittelamerikanischen Staat?",
      "options": "—",
      "answer": "El Salvador",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-075",
      "category": "Internationale Politik",
      "question": "Was sollte der Brexit-Backstop im Kern verhindern?",
      "options": "—",
      "answer": "Eine harte Grenze zwischen Irland und Nordirland",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2019sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2026ip-neu-076",
      "category": "Internationale Politik",
      "question": "Die Backstop-Debatte drehte sich um die offene Grenze zwischen der Republik Irland und welchem britischen Landesteil?",
      "options": "—",
      "answer": "Eine harte Grenze zwischen Irland und Nordirland",
      "qaStatus": "TEILWEISE_FALSCH",
      "priority": "HOCH",
      "review": "Die Frage fragt nach dem britischen Landesteil. Die hinterlegte Antwort beschreibt dagegen das zu verhindernde Problem.",
      "problem": "Die Frage fragt nach dem britischen Landesteil. Die hinterlegte Antwort beschreibt dagegen das zu verhindernde Problem.",
      "fix": "Antwort auf „Nordirland“ ändern.",
      "finalVersion": "Antwort: „Nordirland“.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2019sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2026ip-neu-077",
      "category": "Internationale Politik",
      "question": "Welche muslimische Minderheit wurde laut UN in Myanmar Ziel ethnischer Säuberungen?",
      "options": "—",
      "answer": "Rohingya",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2018sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2018sc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-078",
      "category": "Internationale Politik",
      "question": "Die Massenflucht nach Bangladesch 2017 betraf welche Volksgruppe aus Myanmar?",
      "options": "—",
      "answer": "Rohingya",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2018sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2018sc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2017"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-079",
      "category": "Internationale Politik",
      "question": "Wie heißt der 2025 vorgestellte EU-Verteidigungsplan zur Stärkung der Einsatzbereitschaft?",
      "options": "—",
      "answer": "ReArm Europe/Readiness 2030",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU-Kommission; EU-Parlament/EPRS",
      "variantNote": "Variante von `djs2025eu001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025",
        "2030"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-080",
      "category": "Internationale Politik",
      "question": "Unter welchem Namen bündelte die EU-Kommission 2025 ihr Weißbuch zur europäischen Verteidigung?",
      "options": "—",
      "answer": "ReArm Europe/Readiness 2030",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU-Kommission; EU-Parlament/EPRS",
      "variantNote": "Variante von `djs2025eu001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025",
        "2030"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-081",
      "category": "Internationale Politik",
      "question": "Welches Finanzinstrument bildet den ersten Pfeiler von ReArm Europe/Readiness 2030?",
      "options": "—",
      "answer": "SAFE",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU-Kommission; EU-Parlament/EPRS",
      "variantNote": "Variante von `djs2025eu002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2030"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-082",
      "category": "Internationale Politik",
      "question": "Die EU-Darlehen für gemeinsame Verteidigungsbeschaffung laufen unter welcher Abkürzung?",
      "options": "—",
      "answer": "SAFE",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU-Kommission; EU-Parlament/EPRS",
      "variantNote": "Variante von `djs2025eu002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie"
      ]
    },
    {
      "id": "djs2026ip-neu-083",
      "category": "Internationale Politik",
      "question": "Welches EU-Sanktionspaket gegen Russland wurde am dritten Jahrestag des Angriffs auf die Ukraine beschlossen?",
      "options": "—",
      "answer": "16. Paket",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "Variante von `djs2025eu003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-084",
      "category": "Internationale Politik",
      "question": "Am 24. Februar 2025 verabschiedete die EU welches nummerierte Russland-Sanktionspaket?",
      "options": "—",
      "answer": "16. Paket",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "Variante von `djs2025eu003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "24. Februar 2025",
        "Februar 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie"
      ]
    },
    {
      "id": "djs2026ip-neu-085",
      "category": "Internationale Politik",
      "question": "An welchem Datum beschloss die EU ihr 17. Sanktionspaket gegen Russland?",
      "options": "—",
      "answer": "20. Mai 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "Variante von `djs2025eu004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "20. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-086",
      "category": "Internationale Politik",
      "question": "Das 17. Russland-Sanktionspaket der EU folgte im Mai 2025: an welchem Tag?",
      "options": "—",
      "answer": "20. Mai 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "Variante von `djs2025eu004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "20. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-087",
      "category": "Internationale Politik",
      "question": "Wie heißt das industriepolitische EU-Projekt, das Klimaschutz und Wettbewerbsfähigkeit verbinden soll?",
      "options": "—",
      "answer": "Clean Industrial Deal",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025eu005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-088",
      "category": "Internationale Politik",
      "question": "Die Kommission reagierte 2025 auf Industriekritik am Green Deal mit welchem neuen Deal?",
      "options": "—",
      "answer": "Clean Industrial Deal",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025eu005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-089",
      "category": "Internationale Politik",
      "question": "Ab welchem Datum soll der EU-Migrations- und Asylpakt vollständig angewendet werden?",
      "options": "—",
      "answer": "12. Juni 2026",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU-Kommission; Rat der EU",
      "variantNote": "Variante von `djs2026eu001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026eu001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "12. Juni 2026",
        "Juni 2026",
        "2026"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie"
      ]
    },
    {
      "id": "djs2026ip-neu-090",
      "category": "Internationale Politik",
      "question": "Die praktische Anwendung der großen EU-Asylreform beginnt an welchem Tag im Juni 2026?",
      "options": "—",
      "answer": "12. Juni 2026",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2026eu001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026eu001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "12. Juni 2026",
        "Juni 2026",
        "2026"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-091",
      "category": "Internationale Politik",
      "question": "Ab wann greifen im EU AI Act die Verbote für unzulässige KI-Praktiken?",
      "options": "—",
      "answer": "2. Februar 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU Digital Strategy; EU-Amtsblatt; ggf. 2026 Omnibus-Update",
      "variantNote": "Variante von `djs2025eu006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2. Februar 2025",
        "Februar 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-092",
      "category": "Internationale Politik",
      "question": "Social Scoring und bestimmte biometrische Echtzeitüberwachung sind nach dem AI Act ab welchem Datum verboten?",
      "options": "—",
      "answer": "2. Februar 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU Digital Strategy; EU-Amtsblatt; ggf. 2026 Omnibus-Update",
      "variantNote": "Variante von `djs2025eu006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2. Februar 2025",
        "Februar 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-093",
      "category": "Internationale Politik",
      "question": "Ab welchem Datum soll der EU AI Act grundsätzlich vollständig anwendbar sein?",
      "options": "—",
      "answer": "2. August 2026",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "review": "„Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.",
      "problem": "„Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.",
      "fix": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "finalVersion": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "sourceHint": "EU Digital Strategy; EU-Kommission; EU-Amtsblatt",
      "variantNote": "Variante von `djs2026eu002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026eu002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2. August 2026",
        "August 2026",
        "2026"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-094",
      "category": "Internationale Politik",
      "question": "Die gestaffelte Umsetzung des AI Act erreicht ihre Gesamtgeltung an welchem Datum?",
      "options": "—",
      "answer": "2. August 2026",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "review": "„Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.",
      "problem": "„Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.",
      "fix": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "finalVersion": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "sourceHint": "EU Digital Strategy; EU-Kommission; EU-Amtsblatt",
      "variantNote": "Variante von `djs2026eu002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026eu002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2. August 2026",
        "August 2026",
        "2026"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-095",
      "category": "Internationale Politik",
      "question": "Wie nennt die EU ihr 2025 vorgestelltes Paket gegen Desinformation und ausländische Einflussnahme?",
      "options": "—",
      "answer": "European Democracy Shield",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU-Kommission",
      "variantNote": "Variante von `djs2025eu007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-096",
      "category": "Internationale Politik",
      "question": "Der Schutz demokratischer Prozesse vor Einflussoperationen firmiert bei der EU unter welchem englischen Namen?",
      "options": "—",
      "answer": "European Democracy Shield",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU-Kommission",
      "variantNote": "Variante von `djs2025eu007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-097",
      "category": "Internationale Politik",
      "question": "Welches 2040-Klimaziel schlug die EU-Kommission 2025 für das Klimagesetz vor?",
      "options": "—",
      "answer": "Minus 90 Prozent Netto-THG gegenüber 1990",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.",
      "problem": "Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.",
      "fix": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "finalVersion": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "sourceHint": "EU-Kommission, EU-Klimagesetz",
      "variantNote": "Variante von `djs2025eu008`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu008",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2040",
        "2025"
      ],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2026ip-neu-098",
      "category": "Internationale Politik",
      "question": "Auf welchen Netto-Reduktionswert gegenüber 1990 soll die EU bis 2040 zusteuern?",
      "options": "—",
      "answer": "Minus 90 Prozent Netto-THG gegenüber 1990",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.",
      "problem": "Inhaltlich korrekt. Seit späteren EU-Beschlüssen ist bei „soll“/„vorgeschlagen“ der Stand präzise zu datieren: Juli 2025 Vorschlag, 2026/aktuell weiterentwickelt bzw. rechtlich fixiert.",
      "fix": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "finalVersion": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "sourceHint": "EU-Kommission, EU-Klimagesetz",
      "variantNote": "Variante von `djs2025eu008`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu008",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2040"
      ],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2026ip-neu-099",
      "category": "Internationale Politik",
      "question": "Welche zwei Länder wurden am 1. Januar 2025 vollständig in den Schengen-Raum integriert?",
      "options": "—",
      "answer": "Rumänien und Bulgarien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "Variante von `djs2025eu009`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu009",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "1. Januar 2025",
        "Januar 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2026ip-neu-100",
      "category": "Internationale Politik",
      "question": "Für welche beiden EU-Staaten entfielen Anfang 2025 auch die Landgrenzkontrollen im Schengen-System?",
      "options": "—",
      "answer": "Rumänien und Bulgarien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "Variante von `djs2025eu009`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu009",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie"
      ]
    },
    {
      "id": "djs2026ip-neu-101",
      "category": "Internationale Politik",
      "question": "Welches Jubiläum der Schuman-Erklärung wurde am Europa-Tag 2025 gefeiert?",
      "options": "—",
      "answer": "75 Jahre",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025eu010`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu010",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-102",
      "category": "Internationale Politik",
      "question": "Der 9. Mai 2025 erinnerte an wie viele Jahre europäische Integration seit Robert Schumans Erklärung?",
      "options": "—",
      "answer": "75 Jahre",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025eu010`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu010",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "9. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-103",
      "category": "Internationale Politik",
      "question": "Wer ist seit Dezember 2024 Hohe Vertreterin der EU für Außen- und Sicherheitspolitik?",
      "options": "—",
      "answer": "Kaja Kallas",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "Variante von `djs2025eu011`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu011",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "Dezember 2024",
        "2024"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie"
      ]
    },
    {
      "id": "djs2026ip-neu-104",
      "category": "Internationale Politik",
      "question": "Die frühere estnische Premierministerin übernahm 2024 welches EU-Außenamt?",
      "options": "—",
      "answer": "Kaja Kallas",
      "qaStatus": "TEILWEISE_FALSCH",
      "priority": "HOCH",
      "review": "Die Frage fragt nach dem Amt, nicht nach der Person. Hinterlegt ist „Kaja Kallas“.",
      "problem": "Die Frage fragt nach dem Amt, nicht nach der Person. Hinterlegt ist „Kaja Kallas“.",
      "fix": "Antwort auf „Hohe Vertreterin der EU für Außen- und Sicherheitspolitik“ ändern.",
      "finalVersion": "Antwort: „Hohe Vertreterin der EU für Außen- und Sicherheitspolitik“.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "Variante von `djs2025eu011`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu011",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2024"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-105",
      "category": "Internationale Politik",
      "question": "Wer löste Charles Michel Ende 2024 als Präsident des Europäischen Rates ab?",
      "options": "—",
      "answer": "António Costa",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "Variante von `djs2025eu012`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu012",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2024"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-106",
      "category": "Internationale Politik",
      "question": "Der frühere portugiesische Premier leitet seit Dezember 2024 welche EU-Institution?",
      "options": "—",
      "answer": "António Costa",
      "qaStatus": "TEILWEISE_FALSCH",
      "priority": "HOCH",
      "review": "Die Frage fragt nach der EU-Institution, nicht nach der Person. Hinterlegt ist „António Costa“.",
      "problem": "Die Frage fragt nach der EU-Institution, nicht nach der Person. Hinterlegt ist „António Costa“.",
      "fix": "Antwort auf „Europäischer Rat“ ändern.",
      "finalVersion": "Antwort: „Europäischer Rat“.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "Variante von `djs2025eu012`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu012",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "Dezember 2024",
        "2024"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-107",
      "category": "Internationale Politik",
      "question": "Unter welchem Namen verkündete Trump am 2. April 2025 seine Gegenzollpolitik?",
      "options": "—",
      "answer": "Reciprocal Tariffs",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "White House; Federal Register; AP/Reuters",
      "variantNote": "Variante von `djs2025ip002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2. April 2025",
        "April 2025",
        "2025"
      ],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2026ip-neu-108",
      "category": "Internationale Politik",
      "question": "Die von Trump als „Liberation Day“ inszenierte Zollanordnung wurde wie bezeichnet?",
      "options": "—",
      "answer": "Reciprocal Tariffs",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "White House; Federal Register; AP/Reuters",
      "variantNote": "Variante von `djs2025ip002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2026ip-neu-109",
      "category": "Internationale Politik",
      "question": "An welchem Datum starb Papst Franziskus im Vatikan?",
      "options": "—",
      "answer": "21. April 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Vatican News; Vatican.va; AP/Reuters",
      "variantNote": "Variante von `djs2025ip003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "21. April 2025",
        "April 2025",
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres"
      ]
    },
    {
      "id": "djs2026ip-neu-110",
      "category": "Internationale Politik",
      "question": "Der Tod von Jorge Mario Bergoglio löste 2025 das Konklave aus: an welchem Tag starb er?",
      "options": "—",
      "answer": "21. April 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025ip003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "21. April 2025",
        "April 2025",
        "2025"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-111",
      "category": "Internationale Politik",
      "question": "Welchen Papstnamen wählte Robert Francis Prevost nach seiner Wahl?",
      "options": "—",
      "answer": "Leo XIV.",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Vatican News; Vatican.va; AP/Reuters",
      "variantNote": "Variante von `djs2025ip004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres"
      ]
    },
    {
      "id": "djs2026ip-neu-112",
      "category": "Internationale Politik",
      "question": "Der erste US-amerikanische Papst trat 2025 unter welchem Namen auf?",
      "options": "—",
      "answer": "Leo XIV.",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Vatican News; Vatican.va; AP/Reuters",
      "variantNote": "Variante von `djs2025ip004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres"
      ]
    },
    {
      "id": "djs2026ip-neu-113",
      "category": "Internationale Politik",
      "question": "Wann nahm die Weltgesundheitsversammlung das WHO-Pandemieabkommen an?",
      "options": "—",
      "answer": "20. Mai 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "WHO / World Health Assembly",
      "variantNote": "Variante von `djs2025ip005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "20. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-114",
      "category": "Internationale Politik",
      "question": "Das erste globale Pandemieabkommen wurde bei der WHO an welchem Datum beschlossen?",
      "options": "—",
      "answer": "20. Mai 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "WHO / World Health Assembly",
      "variantNote": "Variante von `djs2025ip005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "20. Mai 2025",
        "Mai 2025",
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-115",
      "category": "Internationale Politik",
      "question": "In welcher brasilianischen Stadt fand die COP30 statt?",
      "options": "—",
      "answer": "Belém",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "UNFCCC; UN Climate Change; EU-NDC-Dokumente",
      "variantNote": "Variante von `djs2025ip006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2026ip-neu-116",
      "category": "Internationale Politik",
      "question": "Die Klimakonferenz 2025 wurde symbolisch in der Nähe des Amazonas ausgerichtet: in welcher Stadt?",
      "options": "—",
      "answer": "Belém",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "UNFCCC; UN Climate Change; EU-NDC-Dokumente",
      "variantNote": "Variante von `djs2025ip006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2026ip-neu-117",
      "category": "Internationale Politik",
      "question": "Wie lautet die Abkürzung für die 2025 fällige dritte Runde nationaler Klimaschutzbeiträge?",
      "options": "—",
      "answer": "NDC 3.0",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "UNFCCC; UN Climate Change; EU-NDC-Dokumente",
      "variantNote": "Variante von `djs2025ip007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2026ip-neu-118",
      "category": "Internationale Politik",
      "question": "Die neuen Klimapläne im Pariser Abkommen werden als welche Version der NDCs bezeichnet?",
      "options": "—",
      "answer": "NDC 3.0",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "UNFCCC; UN Climate Change; EU-NDC-Dokumente",
      "variantNote": "Variante von `djs2025ip007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2026ip-neu-119",
      "category": "Internationale Politik",
      "question": "Wann fand das hochrangige UN80-Gedenktreffen in New York statt?",
      "options": "—",
      "answer": "22. September 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "UN General Assembly / UN Web TV",
      "variantNote": "Variante von `djs2025ip008`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip008",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "22. September 2025",
        "September 2025",
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres"
      ]
    },
    {
      "id": "djs2026ip-neu-120",
      "category": "Internationale Politik",
      "question": "Das Jubiläumstreffen zum 80. Geburtstag der Vereinten Nationen lag an welchem Datum der UN-Generalversammlung?",
      "options": "—",
      "answer": "22. September 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "UN General Assembly / UN Web TV",
      "variantNote": "Variante von `djs2025ip008`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip008",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "22. September 2025",
        "September 2025",
        "2025"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-121",
      "category": "Internationale Politik",
      "question": "In welchen beiden Städten wurde 2025 der 80. Jahrestag der Atombombenabwürfe begangen?",
      "options": "—",
      "answer": "Hiroshima und Nagasaki",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025ip009`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip009",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-122",
      "category": "Internationale Politik",
      "question": "Der 6. und 9. August 2025 standen in Japan im Zeichen des Gedenkens in welchen Städten?",
      "options": "—",
      "answer": "Hiroshima und Nagasaki",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025ip009`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip009",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "9. August 2025",
        "August 2025",
        "2025"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-123",
      "category": "Internationale Politik",
      "question": "Welcher Staat verhängte im Februar 2025 Sanktionen gegen den Internationalen Strafgerichtshof?",
      "options": "—",
      "answer": "USA",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025ip010`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip010",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "Februar 2025",
        "2025"
      ],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2026ip-neu-124",
      "category": "Internationale Politik",
      "question": "Die Sanktionen gegen ICC-Personal wegen Verfahren gegen Verbündete kamen 2025 von welchem Land?",
      "options": "—",
      "answer": "USA",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025ip010`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip010",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2026ip-neu-125",
      "category": "Internationale Politik",
      "question": "Wie unterscheidet sich der Internationale Strafgerichtshof vom Internationalen Gerichtshof?",
      "options": "—",
      "answer": "ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Staatenstreitigkeiten",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025ip011`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip011",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2026ip-neu-126",
      "category": "Internationale Politik",
      "question": "Welches Gericht verfolgt Individuen wegen Kriegsverbrechen, und welches entscheidet Streitigkeiten zwischen Staaten?",
      "options": "—",
      "answer": "ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Staatenstreitigkeiten",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025ip011`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip011",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2026ip-neu-127",
      "category": "Internationale Politik",
      "question": "Welcher Konflikt gilt laut OCHA als größte humanitäre Notlage für 2026?",
      "options": "—",
      "answer": "Sudan",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk",
      "variantNote": "Variante von `djs2025ip012`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip012",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres"
      ]
    },
    {
      "id": "djs2026ip-neu-128",
      "category": "Internationale Politik",
      "question": "Welche Krise übertraf 2026 in OCHA-Einschätzungen andere humanitäre Lagen wie Gaza oder Ukraine?",
      "options": "—",
      "answer": "Sudan",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk",
      "variantNote": "Variante von `djs2025ip012`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip012",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-129",
      "category": "Internationale Politik",
      "question": "Welche zwei UN-Organisationen warnten 2025 vor KI-Risiken für Wahlen und Meinungsfreiheit?",
      "options": "—",
      "answer": "UNESCO und UNDP",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "„Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.",
      "problem": "„Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.",
      "fix": "Erklärung sprachlich auf „Issue Brief“ ändern.",
      "finalVersion": "Erklärung sprachlich auf „Issue Brief“ ändern.",
      "sourceHint": "UNESCO; UNDP",
      "variantNote": "Variante von `djs2025ip013`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip013",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026ip-neu-130",
      "category": "Internationale Politik",
      "question": "Deepfakes, Informationsfreiheit und Wahlbeeinflussung wurden 2025 gemeinsam von welchen UN-Organisationen thematisiert?",
      "options": "—",
      "answer": "UNESCO und UNDP",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "„Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.",
      "problem": "„Brief“ ist ungenau; UNESCO/UNDP veröffentlichten einen „Issue Brief“.",
      "fix": "Erklärung sprachlich auf „Issue Brief“ ändern.",
      "finalVersion": "Erklärung sprachlich auf „Issue Brief“ ändern.",
      "sourceHint": "UNESCO; UNDP",
      "variantNote": "Variante von `djs2025ip013`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip013",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres"
      ]
    },
    {
      "id": "djs2026ip-neu-131",
      "category": "Internationale Politik",
      "question": "Welches Volumen hat die EU Ukraine Facility bis 2027?",
      "options": "—",
      "answer": "50 Milliarden Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU-Kommission; Rat der EU; Reuters/AP zur Einordnung",
      "variantNote": "Variante von `djs2025eu013`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu013",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2027"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-132",
      "category": "Internationale Politik",
      "question": "Die zentrale EU-Finanzhilfe für Reform, Wiederaufbau und Stabilisierung der Ukraine umfasst bis zu welchen Betrag?",
      "options": "—",
      "answer": "50 Milliarden Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025eu013`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu013",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-133",
      "category": "Internationale Politik",
      "question": "Welches zusätzliche EU-Finanzinstrument für die Ukraine wurde Ende 2025 beschlossen?",
      "options": "—",
      "answer": "Unterstützungskredit von 90 Milliarden Euro für 2026/27",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU-Kommission; Rat der EU; Reuters/AP zur Einordnung",
      "variantNote": "Variante von `djs2025eu014`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu014",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025",
        "2026"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-134",
      "category": "Internationale Politik",
      "question": "Neben der Ukraine Facility stand 2026 welches neue Kreditinstrument für Kiew im Mittelpunkt?",
      "options": "—",
      "answer": "Unterstützungskredit von 90 Milliarden Euro für 2026/27",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EU-Kommission; Rat der EU; Reuters/AP zur Einordnung",
      "variantNote": "Variante von `djs2025eu014`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025eu014",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026ip-neu-135",
      "category": "Internationale Politik",
      "question": "Welches Land gilt wegen der Gewalt im Osten 2025/26 als besonders unterberichteter Krisenfall?",
      "options": "—",
      "answer": "Demokratische Republik Kongo",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk",
      "variantNote": "Variante von `djs2025ip014`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip014",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2026ip-neu-136",
      "category": "Internationale Politik",
      "question": "M23, Nord-Kivu und massive Binnenvertreibung verweisen auf welchen zentralafrikanischen Staat?",
      "options": "—",
      "answer": "Demokratische Republik Kongo",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "OCHA Global Humanitarian Overview; AP/BBC/Deutschlandfunk",
      "variantNote": "Variante von `djs2025ip014`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025ip014",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2023mc002",
      "category": "Internationale Politik",
      "question": "In welchen Ländern wechselte in den vergangenen 12 Monaten die Regierung? (Mehrere Antworten möglich)",
      "options": "Australien, Brasilien, Kolumbien, Mexiko, Argentinien",
      "answer": "Australien / Brasilien / Kolumbien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "MITTEL",
      "review": "Formulierung „in den vergangenen 12 Monaten“ ist ohne Prüfungs-/Stichtag nicht eindeutig. Im Archiv vertretbar, im aktiven Pool riskant.",
      "problem": "Formulierung „in den vergangenen 12 Monaten“ ist ohne Prüfungs-/Stichtag nicht eindeutig. Im Archiv vertretbar, im aktiven Pool riskant.",
      "fix": "Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“.",
      "finalVersion": "Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "multiplechoice",
      "idYear": 2023,
      "dateMentions": [],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2025eu005",
      "category": "Internationale Politik",
      "question": "Wie heißt das industriepolitische Leitprojekt der EU-Kommission, das am 26. Februar 2025 vorgestellt wurde?",
      "options": "Green New Deal, Clean Industrial Deal, European Competitiveness Pact, Industrial Transition Fund",
      "answer": "Clean Industrial Deal",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "26. Februar 2025",
        "Februar 2025",
        "2025"
      ],
      "themeComplexes": [
        "Internationale Politik"
      ]
    },
    {
      "id": "djs2025eu006",
      "category": "Internationale Politik",
      "question": "Ab welchem Datum greifen im EU AI Act die Verbote verbotener KI-Praktiken?",
      "options": "1. Januar 2025, 2. Februar 2025, 2. August 2025, 2. August 2026",
      "answer": "2. Februar 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "EU Digital Strategy; EU-Amtsblatt; ggf. 2026 Omnibus-Update",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2. Februar 2025",
        "Februar 2025",
        "2025"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2025ip009",
      "category": "Internationale Politik",
      "question": "In welchen japanischen Städten wurden 2025 die 80. Jahrestage der Atombombenabwürfe begangen?",
      "options": "Tokio, Hiroshima, Nagasaki, Osaka",
      "answer": "Hiroshima / Nagasaki",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2025sc010",
      "category": "Internationale Politik",
      "question": "In welchem Land ist seit April 2025 eine Brigade der Bundeswehr dauerhaft stationiert?",
      "options": "Polen, Lettland, Litauen, Estland",
      "answer": "Litauen",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "Bundestag; BMVg; NATO",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "April 2025",
        "2025"
      ],
      "themeComplexes": [
        "Schuldenbremse / Sondervermögen / Verteidigung"
      ]
    },
    {
      "id": "djs2026eu001",
      "category": "Internationale Politik",
      "question": "Ab welchem Datum beginnt die Anwendung des EU-Migrations- und Asylpakts?",
      "options": "1. Januar 2026, 23. Februar 2026, 12. Juni 2026, 2. August 2026",
      "answer": "12. Juni 2026",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "EU-Kommission; Rat der EU",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2026,
      "dateMentions": [
        "12. Juni 2026",
        "Juni 2026",
        "2026"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie"
      ]
    },
    {
      "id": "djs2026eu002",
      "category": "Internationale Politik",
      "question": "Ab welchem Datum soll der EU AI Act vollständig anwendbar sein?",
      "options": "2. Februar 2026, 12. Juni 2026, 2. August 2026, 1. Januar 2027",
      "answer": "2. August 2026",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "review": "„Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.",
      "problem": "„Vollständig anwendbar“ ist zu absolut. Der AI Act hat gestaffelte Fristen; 2026 gab es zudem ein vorläufiges EU-Politikpaket zur Vereinfachung/Fristverschiebung bei Teilen der Hochrisiko-Regeln.",
      "fix": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "finalVersion": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "sourceHint": "EU Digital Strategy; EU-Kommission; EU-Amtsblatt",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2026,
      "dateMentions": [
        "2. August 2026",
        "August 2026",
        "2026"
      ],
      "themeComplexes": [
        "EU / Sanktionen / Verteidigung / Demokratie",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2022sc003",
      "category": "Wirtschaft & Finanzen",
      "question": "Welche Wirtschaftsprüfungsgesellschaft war in den Wirecard-Skandal verwickelt?",
      "options": "KPMG, Deloitte, PricewaterhouseCoopers, Ernst & Young",
      "answer": "Ernst & Young",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2022,
      "dateMentions": [],
      "themeComplexes": [
        "Wirtschaft & Finanzen"
      ]
    },
    {
      "id": "djs2023sc002",
      "category": "Wirtschaft & Finanzen",
      "question": "Welche Kryptobörse meldete 2022 Insolvenz an und löste eine weltweite Kryptokrise aus?",
      "options": "Coinbase, Binance, FTX, Kraken",
      "answer": "FTX",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2023,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "Wirtschaft & Finanzen"
      ]
    },
    {
      "id": "djs2025match002",
      "category": "Wirtschaft & Finanzen",
      "question": "Ordnen Sie die Kennzahlen der deutschen Wirtschaft (April 2025) den richtigen Werten zu.",
      "options": "Schuldenstandsquote, Arbeitslosenquote, Inflationsrate, Wachstum des BIP",
      "answer": "Schuldenstandsquote → 62,5 Prozent / Arbeitslosenquote → 6,3 Prozent / Inflationsrate → 2,4 Prozent / Wachstum des BIP → 0,2 Prozent",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "matching",
      "idYear": 2025,
      "dateMentions": [
        "April 2025",
        "2025"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn"
      ]
    },
    {
      "id": "djs2025wf001",
      "category": "Wirtschaft & Finanzen",
      "question": "Auf welchen Wert sank der EZB-Einlagensatz nach den Zinssenkungen im März und Juni 2025?",
      "options": "2,5 Prozent, 2,0 Prozent, 1,75 Prozent, 1,5 Prozent",
      "answer": "2,0 Prozent",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "EZB",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "Juni 2025",
        "2025"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn"
      ]
    },
    {
      "id": "djs2025wf002",
      "category": "Wirtschaft & Finanzen",
      "question": "Welche Institution schätzte das BIP-Wachstum der Eurozone für das Gesamtjahr 2025 auf plus 1,5 Prozent?",
      "options": "IWF, EZB, Eurostat, EU-Kommission",
      "answer": "Eurostat",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Eurostat",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026eu003",
      "category": "Wirtschaft & Finanzen",
      "question": "Wofür steht die Abkürzung CBAM und ab wann gilt sein definitiver Anwendungsrahmen?",
      "options": "Carbon Border Adjustment Mechanism, ab Januar 2026, Clean Business Adaptation Measure, ab Juli 2026, Carbon Budget Alignment Model, ab Januar 2027, Common Border Agriculture Mechanism, ab Januar 2026",
      "answer": "Carbon Border Adjustment Mechanism, ab Januar 2026",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "UBA; BMUV",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2026,
      "dateMentions": [
        "Januar 2026",
        "2026"
      ],
      "themeComplexes": [
        "Wirtschaft & Finanzen"
      ]
    },
    {
      "id": "djs2026wf001",
      "category": "Wirtschaft & Finanzen",
      "question": "Welche Organisation prognostizierte im April 2026 ein Weltwirtschaftswachstum von 3,1 Prozent für 2026?",
      "options": "Weltbank, IWF (IMF), WTO, OECD",
      "answer": "IWF (IMF)",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "IWF/IMF World Economic Outlook",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2026,
      "dateMentions": [
        "April 2026",
        "2026"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn"
      ]
    },
    {
      "id": "djs2026wf002",
      "category": "Wirtschaft & Finanzen",
      "question": "Welches BIP-Wachstum prognostizierte die Bundesregierung für Deutschland im Jahr 2026?",
      "options": "0,0 Prozent (Stagnation), 0,5 Prozent, 1,2 Prozent, 1,8 Prozent",
      "answer": "0,5 Prozent",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bundesregierung / BMWK Frühjahrsprojektion",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn"
      ]
    },
    {
      "id": "djs2026wf003",
      "category": "Wirtschaft & Finanzen",
      "question": "Welche internationale Organisation warnte 2025/26, dass US-Zölle und globale Unsicherheit zu einer atypischen Handelsdynamik mit Vorzieheffekten und anschließendem Einbruch führten?",
      "options": "Internationaler Währungsfonds (IWF), Welthandelsorganisation (WTO), Weltbank, OECD",
      "answer": "Welthandelsorganisation (WTO)",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "IWF/IMF World Economic Outlook",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Wirtschaft & Finanzen"
      ]
    },
    {
      "id": "djs2026wf-neu-171",
      "category": "Wirtschaft & Finanzen",
      "question": "Welche Kryptobörse brach 2022 zusammen und löste eine Vertrauenskrise im Kryptomarkt aus?",
      "options": "—",
      "answer": "FTX",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2026wf-neu-172",
      "category": "Wirtschaft & Finanzen",
      "question": "Der Betrugsfall um Sam Bankman-Fried betraf welche Handelsplattform?",
      "options": "—",
      "answer": "FTX",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wirtschaft & Finanzen"
      ]
    },
    {
      "id": "djs2026wf-neu-173",
      "category": "Wirtschaft & Finanzen",
      "question": "Welche Wirtschaftsprüfungsgesellschaft testierte jahrelang Wirecards Bilanzen?",
      "options": "—",
      "answer": "Ernst & Young",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wirtschaft & Finanzen"
      ]
    },
    {
      "id": "djs2026wf-neu-174",
      "category": "Wirtschaft & Finanzen",
      "question": "Der Wirecard-Skandal brachte vor allem welche Prüfungsgesellschaft in Erklärungsnot?",
      "options": "—",
      "answer": "Ernst & Young",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wirtschaft & Finanzen"
      ]
    },
    {
      "id": "djs2026wf-neu-175",
      "category": "Wirtschaft & Finanzen",
      "question": "Auf welchen Wert fiel der EZB-Einlagensatz nach den Zinssenkungen im März und Juni 2025?",
      "options": "—",
      "answer": "2,0 Prozent",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EZB",
      "variantNote": "Variante von `djs2025wf001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025wf001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "Juni 2025",
        "2025"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn"
      ]
    },
    {
      "id": "djs2026wf-neu-176",
      "category": "Wirtschaft & Finanzen",
      "question": "Der Zinssenkungszyklus der EZB brachte den Einlagensatz bis Juni 2025 auf welches Niveau?",
      "options": "—",
      "answer": "2,0 Prozent",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "EZB",
      "variantNote": "Variante von `djs2025wf001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025wf001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "Juni 2025",
        "2025"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn"
      ]
    },
    {
      "id": "djs2026wf-neu-177",
      "category": "Wirtschaft & Finanzen",
      "question": "Welche Institution veröffentlichte die Schätzung eines Eurozonen-BIP-Wachstums von 1,5 Prozent für 2025?",
      "options": "—",
      "answer": "Eurostat",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Eurostat",
      "variantNote": "Variante von `djs2025wf002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025wf002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026wf-neu-178",
      "category": "Wirtschaft & Finanzen",
      "question": "Bei offiziellen EU-Wirtschaftsdaten ist welche Statistikbehörde für Eurozonen-Schätzungen zentral?",
      "options": "—",
      "answer": "Eurostat",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Eurostat",
      "variantNote": "Variante von `djs2025wf002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025wf002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026wf-neu-179",
      "category": "Wirtschaft & Finanzen",
      "question": "Wofür steht CBAM, und ab wann gilt die definitive Phase?",
      "options": "—",
      "answer": "Carbon Border Adjustment Mechanism, ab Januar 2026",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2026eu003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026eu003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "Januar 2026",
        "2026"
      ],
      "themeComplexes": [
        "Wirtschaft & Finanzen"
      ]
    },
    {
      "id": "djs2026wf-neu-180",
      "category": "Wirtschaft & Finanzen",
      "question": "Das EU-Grenzausgleichsinstrument für CO2-intensive Importe heißt wie und startet vollständig wann?",
      "options": "—",
      "answer": "Carbon Border Adjustment Mechanism, ab Januar 2026",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2026eu003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026eu003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "Januar 2026",
        "2026"
      ],
      "themeComplexes": [
        "Wirtschaft & Finanzen"
      ]
    },
    {
      "id": "djs2026wf-neu-181",
      "category": "Wirtschaft & Finanzen",
      "question": "Welche Organisation prognostizierte im April 2026 ein Weltwirtschaftswachstum von 3,1 Prozent?",
      "options": "—",
      "answer": "IWF (IMF)",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "IWF/IMF World Economic Outlook",
      "variantNote": "Variante von `djs2026wf001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026wf001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "April 2026",
        "2026"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn"
      ]
    },
    {
      "id": "djs2026wf-neu-182",
      "category": "Wirtschaft & Finanzen",
      "question": "Die globale Wachstumsprognose von 3,1 Prozent für 2026 kam von welcher Finanzinstitution?",
      "options": "—",
      "answer": "IWF (IMF)",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "IWF/IMF World Economic Outlook",
      "variantNote": "Variante von `djs2026wf001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026wf001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn"
      ]
    },
    {
      "id": "djs2026wf-neu-183",
      "category": "Wirtschaft & Finanzen",
      "question": "Welches BIP-Wachstum erwartete die Bundesregierung im Frühjahr 2026 für Deutschland?",
      "options": "—",
      "answer": "0,5 Prozent",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundesregierung / BMWK Frühjahrsprojektion",
      "variantNote": "Variante von `djs2026wf002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026wf002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Wirtschaft / Geldpolitik / Mindestlohn"
      ]
    },
    {
      "id": "djs2026wf-neu-184",
      "category": "Wirtschaft & Finanzen",
      "question": "Die deutsche Konjunkturprognose der Bundesregierung lag 2026 bei welchem schwachen Plus?",
      "options": "—",
      "answer": "0,5 Prozent",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2026wf002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026wf002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Wirtschaft & Finanzen"
      ]
    },
    {
      "id": "djs2026wf-neu-185",
      "category": "Wirtschaft & Finanzen",
      "question": "Welche Organisation beschrieb 2025/26 Vorzieheffekte und Einbruch im Welthandel durch US-Zölle?",
      "options": "—",
      "answer": "Welthandelsorganisation (WTO)",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "WTO; WTO Global Trade Outlook",
      "variantNote": "Variante von `djs2026wf003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026wf003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Wirtschaft & Finanzen"
      ]
    },
    {
      "id": "djs2026wf-neu-186",
      "category": "Wirtschaft & Finanzen",
      "question": "Wenn es um globale Handelsströme und Zollfolgen geht, welche Organisation ist hier gemeint?",
      "options": "—",
      "answer": "Welthandelsorganisation (WTO)",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "WTO; WTO Global Trade Outlook",
      "variantNote": "Variante von `djs2026wf003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026wf003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2019sc001",
      "category": "Gesellschaft & Recht",
      "question": "Wer sagte den Satz vom 'brennenden Haus' auf der Klimakonferenz in Davos?",
      "options": "Alexandria Ocasio-Cortez, Angela Merkel, Greta Thunberg, Luisa Neubauer",
      "answer": "Greta Thunberg",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2019,
      "dateMentions": [],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2022sc004",
      "category": "Gesellschaft & Recht",
      "question": "Wie lautete das Unwort des Jahres 2021?",
      "options": "Querdenker, Coronamüde, Pushback, Systemrelevant",
      "answer": "Pushback",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Unwort-des-Jahres-Jury; Duden/Medienberichte",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2022,
      "dateMentions": [
        "2021"
      ],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2022sc006",
      "category": "Gesellschaft & Recht",
      "question": "An welches Land sollten über 1000 Benin-Bronzen zurückgegeben werden?",
      "options": "Ghana, Kamerun, Nigeria, Äthiopien",
      "answer": "Nigeria",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Auswärtiges Amt; Stiftung Preußischer Kulturbesitz; Nigeria",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2022,
      "dateMentions": [],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2025gr001",
      "category": "Gesellschaft & Recht",
      "question": "Ab welchem Datum wurden Leistungserbringer verpflichtet, die elektronische Patientenakte (ePA) zu nutzen?",
      "options": "29. April 2025, 1. Juli 2025, 1. Oktober 2025, 1. Januar 2026",
      "answer": "1. Oktober 2025",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "BMG; gematik",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "1. Oktober 2025",
        "Oktober 2025",
        "2025"
      ],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2025match001",
      "category": "Gesellschaft & Recht",
      "question": "Ordnen Sie die folgenden Zitate den richtigen Personen zu.",
      "options": "Simone Biles, Christian Lindner, Friedrich Merz, Gisèle Pelicot",
      "answer": "Simone Biles → Aussage zur mentalen Gesundheit im Leistungssport / Christian Lindner → Eine Entlassung könne auch Befreiung sein / Friedrich Merz → Kritik an Vier-Tage-Woche / Gisèle Pelicot → Nicht sie solle sich schämen, sondern die Täter",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Deutscher Bundestag; Bundespräsident",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "matching",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition"
      ]
    },
    {
      "id": "djs2025mc001",
      "category": "Gesellschaft & Recht",
      "question": "In welchen Städten kam es zwischen Dezember 2024 und April 2025 zu besonders beachteten Autoanschlägen bzw. Amokfahrten? (Mehrere Antworten möglich)",
      "options": "Berlin, Magdeburg, Mannheim, Wien, Vancouver",
      "answer": "Magdeburg / Mannheim / Vancouver",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "multiplechoice",
      "idYear": 2025,
      "dateMentions": [
        "Dezember 2024",
        "April 2025",
        "2024",
        "2025"
      ],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2025mc002",
      "category": "Gesellschaft & Recht",
      "question": "Welche Wörter wurden 2024 neu in den Duden aufgenommen? (Mehrere Antworten möglich)",
      "options": "ChatGPT, Deutschlandticket, Triggerwarnung, Wokeness, Klimakleber",
      "answer": "ChatGPT / Deutschlandticket / Triggerwarnung / Wokeness / Klimakleber",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "multiplechoice",
      "idYear": 2025,
      "dateMentions": [
        "2024"
      ],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2026gr-neu-047",
      "category": "Gesellschaft & Recht",
      "question": "Welches Wort wurde wegen pauschaler Kriminalisierung von Klimaaktivisten zum Unwort des Jahres 2022 gewählt?",
      "options": "—",
      "answer": "Klimaterroristen",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Unwort-des-Jahres-Jury; Duden/Medienberichte",
      "variantNote": "Variante von `djs2023sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2026gr-neu-048",
      "category": "Gesellschaft & Recht",
      "question": "Die Debatte um die Letzte Generation prägte welches Unwort des Jahres 2022?",
      "options": "—",
      "answer": "Klimaterroristen",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Unwort-des-Jahres-Jury; Duden/Medienberichte",
      "variantNote": "Variante von `djs2023sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2026gr-neu-049",
      "category": "Gesellschaft & Recht",
      "question": "Welcher Begriff für das Zurückdrängen Schutzsuchender wurde zum Unwort des Jahres 2021?",
      "options": "—",
      "answer": "Pushback",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Unwort-des-Jahres-Jury; Duden/Medienberichte",
      "variantNote": "Variante von `djs2022sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2021"
      ],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2026gr-neu-050",
      "category": "Gesellschaft & Recht",
      "question": "Die Jury kritisierte welches Wort, weil es völkerrechtswidrige Zurückweisungen sprachlich verschleiere?",
      "options": "—",
      "answer": "Pushback",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2026gr-neu-051",
      "category": "Gesellschaft & Recht",
      "question": "An welchen Staat sollten deutsche Museen mehr als 1.000 Benin-Bronzen zurückgeben?",
      "options": "—",
      "answer": "Nigeria",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Auswärtiges Amt; Stiftung Preußischer Kulturbesitz; Nigeria",
      "variantNote": "Variante von `djs2022sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2026gr-neu-052",
      "category": "Gesellschaft & Recht",
      "question": "Die Restitution geraubter Bronzen aus dem Königreich Benin betrifft heute vor allem welches Land?",
      "options": "—",
      "answer": "Nigeria",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Auswärtiges Amt; Stiftung Preußischer Kulturbesitz; Nigeria",
      "variantNote": "Variante von `djs2022sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2026gr-neu-053",
      "category": "Gesellschaft & Recht",
      "question": "Wer prägte auf dem Weltwirtschaftsforum in Davos das Bild vom brennenden Haus?",
      "options": "—",
      "answer": "Greta Thunberg",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2019sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2026gr-neu-054",
      "category": "Gesellschaft & Recht",
      "question": "Die Formulierung „Unser Haus brennt“ machte welche Klimaaktivistin international noch bekannter?",
      "options": "—",
      "answer": "Greta Thunberg",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2019sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2023sc005",
      "category": "Gesellschaft & Recht",
      "question": "Wie lautete das Unwort des Jahres 2022?",
      "options": "Coronamüde, Wärmepumpe, Klimaterroristen, Pushback",
      "answer": "Klimaterroristen",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "Unwort-des-Jahres-Jury; Duden/Medienberichte",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2023,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "Gesellschaft & Recht"
      ]
    },
    {
      "id": "djs2018sc005",
      "category": "Wissenschaft & Technik",
      "question": "Was ist CRISPR-Cas9?",
      "options": "Ein Impfstofftyp, Eine Genschere zur gezielten Veränderung von DNA, Ein Quantencomputer-Algorithmus, Ein Sicherheitsprotokoll für Netzwerke",
      "answer": "Eine Genschere zur gezielten Veränderung von DNA",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2018,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2019sc005",
      "category": "Wissenschaft & Technik",
      "question": "Welcher Konzern durfte in den USA und anderen Ländern nicht am 5G-Ausbau teilnehmen?",
      "options": "ZTE, Huawei, Samsung, Xiaomi",
      "answer": "Huawei",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2019,
      "dateMentions": [],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2022sc008",
      "category": "Wissenschaft & Technik",
      "question": "Wo wurde die Omikron-Variante des Coronavirus zuerst nachgewiesen?",
      "options": "Indien, Brasilien, Südafrika, Indonesien",
      "answer": "Südafrika",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "WHO / World Health Assembly",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2022,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2024mc001",
      "category": "Wissenschaft & Technik",
      "question": "Welche Länder schafften in den vergangenen 12 Monaten eine Mondlandung? (Mehrere Antworten möglich)",
      "options": "USA, China, Indien, Japan, Russland",
      "answer": "Indien / Japan",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "MITTEL",
      "review": "Formulierung „in den vergangenen 12 Monaten“ ist ohne Prüfungs-/Stichtag nicht eindeutig. Im Archiv vertretbar, im aktiven Pool riskant.",
      "problem": "Formulierung „in den vergangenen 12 Monaten“ ist ohne Prüfungs-/Stichtag nicht eindeutig. Im Archiv vertretbar, im aktiven Pool riskant.",
      "fix": "Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“.",
      "finalVersion": "Stichtag ergänzen, z. B. „im DJS-Prüfungszeitraum 2023/24“ bzw. „zwischen Frühjahr 2022 und Frühjahr 2023“.",
      "sourceHint": "Rat der EU; EU-Kommission",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "multiplechoice",
      "idYear": 2024,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2024sc002",
      "category": "Wissenschaft & Technik",
      "question": "Wer erhielt 2023 den Wirtschaftsnobelpreis?",
      "options": "Esther Duflo, Claudia Goldin, Janet Yellen, Nouriel Roubini",
      "answer": "Claudia Goldin",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2024,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2025mc003",
      "category": "Wissenschaft & Technik",
      "question": "Welche Software-Anwendungen stammen aus Europa und werden als Alternativen zu US-Tools gehandelt? (Mehrere Antworten möglich)",
      "options": "DeepL, Threema, Signal, Slack, Zoom",
      "answer": "DeepL / Threema",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "The Atlantic; AP/Reuters",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "multiplechoice",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sc001",
      "category": "Wissenschaft & Technik",
      "question": "Wie heißt die NASA-Mission, die vom 1. bis 10. April 2026 die erste bemannte Mondumrundung seit rund 50 Jahren durchführte?",
      "options": "Apollo 18, Artemis I, Artemis II, Luna Gateway",
      "answer": "Artemis II",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "NASA",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2026,
      "dateMentions": [
        "10. April 2026",
        "April 2026",
        "2026"
      ],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2025match003",
      "category": "Wissenschaft & Technik",
      "question": "🔵 Ordnen Sie die Konzernchefs, die bei Trumps Vereidigung anwesend waren, ihren Unternehmen zu.",
      "options": "Jeff Bezos, Tim Cook, Sundar Pichai, Sam Altman",
      "answer": "Jeff Bezos → Amazon / Tim Cook → Apple / Sundar Pichai → Google / Sam Altman → OpenAI",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "„Konzernchefs“ ist nicht für alle Einträge gleich sauber; OpenAI ist kein klassischer börsennotierter Konzern.",
      "problem": "„Konzernchefs“ ist nicht für alle Einträge gleich sauber; OpenAI ist kein klassischer börsennotierter Konzern.",
      "fix": "Frage zu „Tech-Spitzenmanager / Unternehmenschefs“ umformulieren.",
      "finalVersion": "Frage zu „Tech-Spitzenmanager / Unternehmenschefs“ umformulieren.",
      "sourceHint": "AP/Reuters; White House-Berichterstattung",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "matching",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "USA / Trump / Handel / ICC",
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026wt-neu-187",
      "category": "Wissenschaft & Technik",
      "question": "Wer erhielt 2023 den Wirtschaftsnobelpreis für Forschung zu Frauen auf dem Arbeitsmarkt?",
      "options": "—",
      "answer": "Claudia Goldin",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2026wt-neu-188",
      "category": "Wissenschaft & Technik",
      "question": "Die Analyse des Gender Pay Gap und der Motherhood Penalty brachte welcher Harvard-Ökonomin den Nobelpreis?",
      "options": "—",
      "answer": "Claudia Goldin",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2026wt-neu-189",
      "category": "Wissenschaft & Technik",
      "question": "Welche Länder schafften innerhalb der relevanten Zwölf-Monats-Periode erfolgreiche Mondlandungen?",
      "options": "—",
      "answer": "Indien und Japan",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024mc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024mc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2026wt-neu-190",
      "category": "Wissenschaft & Technik",
      "question": "Chandrayaan-3 und SLIM stehen für Mondlandeerfolge welcher beiden Staaten?",
      "options": "—",
      "answer": "Indien und Japan",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024mc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024mc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2026wt-neu-191",
      "category": "Wissenschaft & Technik",
      "question": "Was demonstrierte die NASA mit der DART-Mission erstmals erfolgreich?",
      "options": "—",
      "answer": "Die Umlaufbahn eines Asteroiden zu verändern",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "NASA",
      "variantNote": "Variante von `djs2023sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026wt-neu-192",
      "category": "Wissenschaft & Technik",
      "question": "Der Einschlag in Dimorphos bewies welche Möglichkeit der planetaren Verteidigung?",
      "options": "—",
      "answer": "Die Umlaufbahn eines Asteroiden zu verändern",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023sc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2026wt-neu-193",
      "category": "Wissenschaft & Technik",
      "question": "Ab wann hält der IPCC eine Überschreitung von 1,5 Grad ohne zusätzliche Maßnahmen für wahrscheinlich?",
      "options": "—",
      "answer": "2030",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "MITTEL",
      "review": "Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.",
      "problem": "Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.",
      "fix": "Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.",
      "finalVersion": "Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.",
      "sourceHint": "IPCC AR6 / Synthesis Report",
      "variantNote": "Variante von `djs2023sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2030"
      ],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2026wt-neu-194",
      "category": "Wissenschaft & Technik",
      "question": "Die Warnung vor dem frühen Reißen der 1,5-Grad-Schwelle verweist auf welches Jahr?",
      "options": "—",
      "answer": "2030",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "MITTEL",
      "review": "Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.",
      "problem": "Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.",
      "fix": "Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.",
      "finalVersion": "Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.",
      "sourceHint": "IPCC AR6 / Synthesis Report",
      "variantNote": "Variante von `djs2023sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2030"
      ],
      "themeComplexes": [
        "Klima / Energie / Umwelt"
      ]
    },
    {
      "id": "djs2026wt-neu-195",
      "category": "Wissenschaft & Technik",
      "question": "Wo wurde die Omikron-Variante des Coronavirus zuerst nachgewiesen und der WHO gemeldet?",
      "options": "—",
      "answer": "Südafrika",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "WHO / World Health Assembly",
      "variantNote": "Variante von `djs2022sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc008",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Vatikan / WHO / UN / Humanitäres"
      ]
    },
    {
      "id": "djs2026wt-neu-196",
      "category": "Wissenschaft & Technik",
      "question": "Die schnelle Identifikation von B.1.1.529 erfolgte zuerst in welchem Land?",
      "options": "—",
      "answer": "Südafrika",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc008",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2026wt-neu-197",
      "category": "Wissenschaft & Technik",
      "question": "Welcher chinesische Konzern wurde in mehreren Ländern vom 5G-Ausbau ausgeschlossen?",
      "options": "—",
      "answer": "Huawei",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2019sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2026wt-neu-198",
      "category": "Wissenschaft & Technik",
      "question": "Der Technologiekonflikt zwischen USA und China drehte sich beim 5G-Netz besonders um welchen Anbieter?",
      "options": "—",
      "answer": "Huawei",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2019sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2026wt-neu-199",
      "category": "Wissenschaft & Technik",
      "question": "Was ist CRISPR-Cas9?",
      "options": "—",
      "answer": "Eine Genschere zur gezielten Veränderung von DNA",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2018sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2018sc005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2026wt-neu-200",
      "category": "Wissenschaft & Technik",
      "question": "Welche biotechnologische Methode erlaubt das gezielte Schneiden und Verändern von DNA?",
      "options": "—",
      "answer": "Eine Genschere zur gezielten Veränderung von DNA",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Die Frage fragt nach der Methode; die Antwort beschreibt die Methode. Für Kurzantwort-Scoring wäre „CRISPR-Cas9“ als Zielantwort robuster.",
      "problem": "Die Frage fragt nach der Methode; die Antwort beschreibt die Methode. Für Kurzantwort-Scoring wäre „CRISPR-Cas9“ als Zielantwort robuster.",
      "fix": "Antwort auf „CRISPR-Cas9“ setzen oder Alias „Genschere“ erlauben.",
      "finalVersion": "Antwort auf „CRISPR-Cas9“ setzen oder Alias „Genschere“ erlauben.",
      "sourceHint": "Nobelpreis / Fachquellen",
      "variantNote": "Variante von `djs2018sc005`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2018sc005",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2026wt-neu-201",
      "category": "Wissenschaft & Technik",
      "question": "Wie heißt die NASA-Mission der ersten bemannten Mondumrundung seit rund 50 Jahren?",
      "options": "—",
      "answer": "Artemis II",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "NASA",
      "variantNote": "Variante von `djs2026sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2026wt-neu-202",
      "category": "Wissenschaft & Technik",
      "question": "Die bemannte Mondumrundung im Artemis-Programm trägt welche Missionsnummer?",
      "options": "—",
      "answer": "Artemis II",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "NASA",
      "variantNote": "Variante von `djs2026sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2023sc003",
      "category": "Wissenschaft & Technik",
      "question": "Was gelang der NASA mit der DART-Sonde?",
      "options": "Erstmals auf dem Mars landen, Die Umlaufbahn eines Asteroiden zu verändern, Einen Kometen zu beproben, Den Jupitermond Europa zu kartieren",
      "answer": "Die Umlaufbahn eines Asteroiden zu verändern",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "NASA",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2023,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2023sc004",
      "category": "Wissenschaft & Technik",
      "question": "Ab wann hält der Weltklimarat 1,5 Grad Erwärmung ohne zusätzliche Maßnahmen für wahrscheinlich?",
      "options": "2028, 2029, 2030, 2035",
      "answer": "2030",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "MITTEL",
      "review": "Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.",
      "problem": "Die Angabe „2030“ ist didaktisch brauchbar, aber klimawissenschaftlich zu punktgenau. IPCC spricht je nach Szenario eher von „frühen 2030er Jahren“ bzw. temporärem Überschreiten.",
      "fix": "Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.",
      "finalVersion": "Antwort/Erklärung auf „um 2030 / frühe 2030er Jahre“ präzisieren.",
      "sourceHint": "IPCC AR6 / Synthesis Report",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2023,
      "dateMentions": [
        "2030"
      ],
      "themeComplexes": [
        "Wissenschaft & Technik"
      ]
    },
    {
      "id": "djs2025sc001",
      "category": "Wissenschaft & Technik",
      "question": "Wie lange saßen die NASA-Astronauten Butch Wilmore und Suni Williams auf der ISS fest?",
      "options": "3 Monate, 6 Monate, 9 Monate, 12 Monate",
      "answer": "9 Monate",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "NASA",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "Wissenschaft / Technik / Raumfahrt / KI"
      ]
    },
    {
      "id": "djs2019sc002",
      "category": "Sport",
      "question": "Wer sagte, er sei Deutscher beim Gewinnen und Immigrant beim Verlieren?",
      "options": "Ilkay Gündogan, Mesut Özil, Leroy Sané, Emre Can",
      "answer": "Mesut Özil",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2019,
      "dateMentions": [],
      "themeComplexes": [
        "Sport"
      ]
    },
    {
      "id": "djs2025sp001",
      "category": "Sport",
      "question": "Wo fanden die Rhine-Ruhr 2025 FISU World University Games statt?",
      "options": "Bayern, Rhein-Main-Gebiet, Ruhrgebiet und Berlin, Hamburg und Schleswig-Holstein",
      "answer": "Ruhrgebiet und Berlin",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Sport"
      ]
    },
    {
      "id": "djs2025sp002",
      "category": "Sport",
      "question": "In welchem Land fand die UEFA Women's EURO 2025 statt?",
      "options": "Deutschland, Frankreich, Schweiz, Niederlande",
      "answer": "Schweiz",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "UEFA",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2025sp003",
      "category": "Sport",
      "question": "In welcher Stadt fand das Finale der UEFA Women's EURO 2025 statt?",
      "options": "Zürich, Genf, Bern, Basel",
      "answer": "Basel",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "UEFA",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp003",
      "category": "Sport",
      "question": "Wann fanden die Olympischen Winterspiele Milano Cortina 2026 statt?",
      "options": "6. bis 22. Januar 2026, 6. bis 22. Februar 2026, 6. bis 22. März 2026, 6. bis 22. April 2026",
      "answer": "6. bis 22. Februar 2026",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "IOC/Olympics.com",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2026,
      "dateMentions": [
        "22. Februar 2026",
        "Februar 2026",
        "2026"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp-neu-155",
      "category": "Sport",
      "question": "Welcher Fußballer schrieb, er sei beim Gewinnen Deutscher und beim Verlieren Immigrant?",
      "options": "—",
      "answer": "Mesut Özil",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2019sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Sport"
      ]
    },
    {
      "id": "djs2026sp-neu-156",
      "category": "Sport",
      "question": "Der Rücktritt aus der Nationalmannschaft 2018 und die Rassismusdebatte sind eng mit welchem Spieler verbunden?",
      "options": "—",
      "answer": "Mesut Özil",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2019sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2018"
      ],
      "themeComplexes": [
        "Sport"
      ]
    },
    {
      "id": "djs2026sp-neu-157",
      "category": "Sport",
      "question": "Wo fanden die Rhine-Ruhr 2025 FISU World University Games statt?",
      "options": "—",
      "answer": "Ruhrgebiet und Berlin",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025sp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025sp001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Sport"
      ]
    },
    {
      "id": "djs2026sp-neu-158",
      "category": "Sport",
      "question": "Das Multisportevent der Studierenden wurde 2025 in welchen deutschen Regionen beziehungsweise Städten ausgetragen?",
      "options": "—",
      "answer": "Ruhrgebiet und Berlin",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025sp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025sp001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Sport"
      ]
    },
    {
      "id": "djs2026sp-neu-159",
      "category": "Sport",
      "question": "Welches Land richtete die UEFA Women's EURO 2025 aus?",
      "options": "—",
      "answer": "Schweiz",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "UEFA",
      "variantNote": "Variante von `djs2025sp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025sp002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp-neu-160",
      "category": "Sport",
      "question": "Die Frauenfußball-EM 2025 wurde erstmals in welchem Alpenland ausgetragen?",
      "options": "—",
      "answer": "Schweiz",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2025sp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025sp002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Sport"
      ]
    },
    {
      "id": "djs2026sp-neu-161",
      "category": "Sport",
      "question": "In welcher Stadt wurde das Finale der UEFA Women's EURO 2025 ausgetragen?",
      "options": "—",
      "answer": "Basel",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "UEFA",
      "variantNote": "Variante von `djs2025sp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025sp003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp-neu-162",
      "category": "Sport",
      "question": "Der Endspielort der Frauen-EM 2025 lag in welcher Schweizer Stadt?",
      "options": "—",
      "answer": "Basel",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "UEFA",
      "variantNote": "Variante von `djs2025sp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025sp003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2025"
      ],
      "themeComplexes": [
        "Sport"
      ]
    },
    {
      "id": "djs2026sp-neu-163",
      "category": "Sport",
      "question": "In welchem Zeitraum fand die erste FIFA-Klub-WM im 32-Teams-Format statt?",
      "options": "—",
      "answer": "14. Juni – 13. Juli 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "FIFA; Olympics.com",
      "variantNote": "Variante von `djs2025sp004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025sp004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "13. Juli 2025",
        "Juli 2025",
        "2025"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp-neu-164",
      "category": "Sport",
      "question": "Das neue Format des FIFA Club World Cup wurde 2025 in den USA zwischen welchen Daten gespielt?",
      "options": "—",
      "answer": "14. Juni – 13. Juli 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "FIFA; Olympics.com",
      "variantNote": "Variante von `djs2025sp004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2025sp004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "13. Juli 2025",
        "Juli 2025",
        "2025"
      ],
      "themeComplexes": [
        "USA / Trump / Handel / ICC",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp-neu-165",
      "category": "Sport",
      "question": "Mit wie vielen Mannschaften wird die Fußball-WM 2026 ausgetragen?",
      "options": "—",
      "answer": "48 Teams",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "FIFA; Olympics.com",
      "variantNote": "Variante von `djs2026sp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026sp001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp-neu-166",
      "category": "Sport",
      "question": "Die Erweiterung der Männer-WM 2026 hebt die Teilnehmerzahl auf welchen Wert?",
      "options": "—",
      "answer": "48 Teams",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Deutscher Bundestag; Bundespräsident",
      "variantNote": "Variante von `djs2026sp001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026sp001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Bundestagswahl / Parteien / Koalition",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp-neu-167",
      "category": "Sport",
      "question": "Welche drei Länder richten die Fußball-Weltmeisterschaft 2026 gemeinsam aus?",
      "options": "—",
      "answer": "USA, Kanada und Mexiko",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2026sp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026sp002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "USA / Trump / Handel / ICC"
      ]
    },
    {
      "id": "djs2026sp-neu-168",
      "category": "Sport",
      "question": "Die erste Männer-WM mit drei Gastgebern findet in welchen Staaten Nordamerikas statt?",
      "options": "—",
      "answer": "USA, Kanada und Mexiko",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2026sp002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026sp002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "USA / Trump / Handel / ICC",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp-neu-169",
      "category": "Sport",
      "question": "Wann fanden die Olympischen Winterspiele Milano Cortina 2026 statt?",
      "options": "—",
      "answer": "6. bis 22. Februar 2026",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "IOC/Olympics.com",
      "variantNote": "Variante von `djs2026sp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026sp003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "22. Februar 2026",
        "Februar 2026",
        "2026"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp-neu-170",
      "category": "Sport",
      "question": "Die Winterspiele in Italien liefen 2026 über welchen Februar-Zeitraum?",
      "options": "—",
      "answer": "6. bis 22. Februar 2026",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2026sp003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2026sp003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "22. Februar 2026",
        "Februar 2026",
        "2026"
      ],
      "themeComplexes": [
        "Sport"
      ]
    },
    {
      "id": "djs2025sp004",
      "category": "Sport",
      "question": "Im welchen Zeitraum fand der neue FIFA Club World Cup 2025 erstmals im 32-Teams-Format statt?",
      "options": "14. Mai – 13. Juni 2025, 14. Juni – 13. Juli 2025, 14. Juli – 13. August 2025, 14. August – 13. September 2025",
      "answer": "14. Juni – 13. Juli 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "FIFA; Olympics.com",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "13. Juli 2025",
        "Juli 2025",
        "2025"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp001",
      "category": "Sport",
      "question": "Wie viele Teams nehmen an der FIFA Fußball-Weltmeisterschaft 2026 teil?",
      "options": "32 Teams, 40 Teams, 48 Teams, 64 Teams",
      "answer": "48 Teams",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "FIFA; Olympics.com",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026sp002",
      "category": "Sport",
      "question": "In welchen drei Ländern findet die FIFA Fußball-Weltmeisterschaft 2026 statt?",
      "options": "USA, Kanada, Mexiko, Brasilien",
      "answer": "USA / Kanada / Mexiko",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "FIFA; Olympics.com",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2026,
      "dateMentions": [
        "2026"
      ],
      "themeComplexes": [
        "USA / Trump / Handel / ICC",
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2018sc002",
      "category": "Kultur & Medien",
      "question": "Wie heißt das Gesetz zu schnellen Löschpflichten für soziale Netzwerke in Deutschland?",
      "options": "Digitales-Dienste-Gesetz, Netzwerkdurchsetzungsgesetz, Social-Media-Regulierungsgesetz, Hassreden-Bekämpfungsgesetz",
      "answer": "Netzwerkdurchsetzungsgesetz",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bundesjustizministerium; Gesetzestext",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2018,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2018sc004",
      "category": "Kultur & Medien",
      "question": "Was war besonders an der Produktion der Serie 'Babylon Berlin'?",
      "options": "Sie war Deutschlands erste Netflix-Original-Produktion, Sie war eine sehr teure Kooperation von ARD und Sky, Sie war die erste deutsch-amerikanische Koproduktion, Sie wurde ausschließlich in der ARD-Mediathek veröffentlicht",
      "answer": "Sie war eine sehr teure Kooperation von ARD und Sky",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2018,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2019sc004",
      "category": "Kultur & Medien",
      "question": "Welche Reportage enttarnte Claas Relotius vom Spiegel – und wer deckte ihn auf?",
      "options": "'Der Letzte seiner Art' – enthüllt von seiner Redaktionsassistentin, 'Jaegers Grenze' – enthüllt von Juan Moreno, 'Löwenmädchen' – enthüllt von einem Leser, 'Fischer von Manila' – enthüllt von der Redaktion selbst",
      "answer": "'Jaegers Grenze' – enthüllt von Juan Moreno",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Der Spiegel; Juan Moreno",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2019,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur / Medien / Journalismus",
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2019sc006",
      "category": "Kultur & Medien",
      "question": "Warum wurde der Echo-Musikpreis 2018 eingestellt?",
      "options": "Wegen Betrugsvorwürfen gegen Jurymitglieder, Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang, Wegen mangelnder Einschaltquoten der Verleihung, Wegen Plagiatsvorwürfen gegen Gewinner",
      "answer": "Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2019,
      "dateMentions": [
        "2018"
      ],
      "themeComplexes": [
        "Kultur / Medien / Journalismus"
      ]
    },
    {
      "id": "djs2022sc001",
      "category": "Kultur & Medien",
      "question": "Welche Netflix-Serie hatte den erfolgreichsten Serienstart des Streamingdienstes?",
      "options": "Bridgerton, Stranger Things, Squid Game, The Witcher",
      "answer": "Squid Game",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2022,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2022sc002",
      "category": "Kultur & Medien",
      "question": "Welches Christo/Jeanne-Claude-Projekt wurde 2021 posthum verwirklicht?",
      "options": "Verhüllung des Reichstags, Verhüllung des Arc de Triomphe, Verhüllung der Brücken von Avignon, Umrahmung der Berliner Mauer",
      "answer": "Verhüllung des Arc de Triomphe",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2022,
      "dateMentions": [
        "2021"
      ],
      "themeComplexes": [
        "Kultur / Medien / Journalismus"
      ]
    },
    {
      "id": "djs2024mc003",
      "category": "Kultur & Medien",
      "question": "Welche Kulturgüter wurden 2023 für mehr als eine Million Euro versteigert? (Mehrere Antworten möglich)",
      "options": "Freddie Mercurys Klavier, Gustav Klimts 'Dame mit Fächer', Picassos 'Guernica', Ferrari 330LM/250 GTO, Andy Warhols 'Marilyn'",
      "answer": "Freddie Mercurys Klavier / Gustav Klimts 'Dame mit Fächer' / Ferrari 330LM/250 GTO",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "multiplechoice",
      "idYear": 2024,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2024sc001",
      "category": "Kultur & Medien",
      "question": "Welcher Rechercheverbund berichtete über ein Treffen von Rechtsextremisten in Potsdam?",
      "options": "Rechercheverbund NDR/WDR/SZ, Netzwerk Recherche, Paper Trail Media, Correctiv",
      "answer": "Correctiv",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "EU-Kommission; Rat der EU",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2024,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur / Medien / Journalismus"
      ]
    },
    {
      "id": "djs2025match005",
      "category": "Kultur & Medien",
      "question": "Ordnen Sie die Autorinnen und Autoren ihren literarischen Auszeichnungen 2024 zu.",
      "options": "Samantha Harvey, Martina Hefter, Tijan Sila, Han Kang",
      "answer": "Samantha Harvey → Booker Prize / Martina Hefter → Deutscher Buchpreis / Tijan Sila → Ingeborg-Bachmann-Preis / Han Kang → Literaturnobelpreis",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "matching",
      "idYear": 2025,
      "dateMentions": [
        "2024"
      ],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2025sc005",
      "category": "Kultur & Medien",
      "question": "Chefredakteur welches US-Magazins las in einer Chatgruppe mit, in der US-Angriffe auf den Jemen geplant wurden?",
      "options": "The New Yorker, The Atlantic, Time Magazine, Foreign Affairs",
      "answer": "The Atlantic",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "White House; Federal Register; AP/Reuters",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2025sc009",
      "category": "Kultur & Medien",
      "question": "In welchem Konflikt wurden laut Reporter ohne Grenzen seit dem 7. Oktober 2023 besonders viele Journalistinnen und Journalisten getötet?",
      "options": "Ukraine-Krieg, Konflikt in Gaza / Gazastreifen, Krieg in Sudan, Krieg in Myanmar",
      "answer": "Konflikt in Gaza / Gazastreifen",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "RSF; CPJ; AP",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "7. Oktober 2023",
        "Oktober 2023",
        "2023"
      ],
      "themeComplexes": [
        "Kultur / Medien / Journalismus",
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2026mc-neu-137",
      "category": "Kultur & Medien",
      "question": "Welches Recherchezentrum veröffentlichte 2024 die Recherche zum Potsdamer Treffen von Rechtsextremisten?",
      "options": "—",
      "answer": "Correctiv",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Correctiv; Tagesschau/Deutschlandfunk zur Rezeption",
      "variantNote": "Variante von `djs2024sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2024"
      ],
      "themeComplexes": [
        "Kultur / Medien / Journalismus"
      ]
    },
    {
      "id": "djs2026mc-neu-138",
      "category": "Kultur & Medien",
      "question": "Die Berichterstattung über „Remigration“-Pläne und das Treffen in Potsdam geht auf welchen Rechercheverbund zurück?",
      "options": "—",
      "answer": "Correctiv",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Correctiv; Tagesschau/Deutschlandfunk zur Rezeption",
      "variantNote": "Variante von `djs2024sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur / Medien / Journalismus"
      ]
    },
    {
      "id": "djs2026mc-neu-139",
      "category": "Kultur & Medien",
      "question": "Welche drei Kulturgüter erzielten 2023 Auktionspreise von mehr als einer Million Euro?",
      "options": "—",
      "answer": "Freddie Mercurys Klavier, Klimts „Dame mit Fächer“ und Ferrari 330LM/250 GTO",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024mc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024mc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Sport-Großereignisse"
      ]
    },
    {
      "id": "djs2026mc-neu-140",
      "category": "Kultur & Medien",
      "question": "Klimts Rekordbild, Freddie Mercurys Instrument und ein seltener Ferrari stehen für welche Auktionsereignisse 2023?",
      "options": "—",
      "answer": "Freddie Mercurys Klavier, Klimts „Dame mit Fächer“ und Ferrari 330LM/250 GTO",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024mc003`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024mc003",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2026mc-neu-141",
      "category": "Kultur & Medien",
      "question": "Welche berühmten Kunstwerke beziehungsweise Künstler wurden 2022 Ziel von Klima-Protestaktionen?",
      "options": "—",
      "answer": "Van Gogh, Monet, Raffael und Mona Lisa/Da Vinci",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023mc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023mc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2026mc-neu-142",
      "category": "Kultur & Medien",
      "question": "Tomatensuppe, Kartoffelbrei und Klebeaktionen richteten sich 2022 symbolisch gegen Werke welcher Künstler?",
      "options": "—",
      "answer": "Van Gogh, Monet, Raffael und Mona Lisa/Da Vinci",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023mc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023mc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2026mc-neu-143",
      "category": "Kultur & Medien",
      "question": "Welche Netflix-Serie wurde zum erfolgreichsten Serienstart des Streamingdienstes?",
      "options": "—",
      "answer": "Squid Game",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2026mc-neu-144",
      "category": "Kultur & Medien",
      "question": "Die globale Hallyu-Welle erhielt durch welche südkoreanische Netflix-Serie einen Rekordschub?",
      "options": "—",
      "answer": "Squid Game",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc001`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc001",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2026mc-neu-145",
      "category": "Kultur & Medien",
      "question": "Welches Christo-und-Jeanne-Claude-Projekt wurde 2021 nach Christos Tod realisiert?",
      "options": "—",
      "answer": "Verhüllung des Arc de Triomphe",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2021"
      ],
      "themeComplexes": [
        "Kultur / Medien / Journalismus"
      ]
    },
    {
      "id": "djs2026mc-neu-146",
      "category": "Kultur & Medien",
      "question": "Das Pariser Monument, das 2021 temporär verhüllt wurde, war welches Bauwerk?",
      "options": "—",
      "answer": "Verhüllung des Arc de Triomphe",
      "qaStatus": "TEILWEISE_FALSCH",
      "priority": "HOCH",
      "review": "Die Frage fragt nach dem Bauwerk. Hinterlegt ist das Projekt „Verhüllung des Arc de Triomphe“.",
      "problem": "Die Frage fragt nach dem Bauwerk. Hinterlegt ist das Projekt „Verhüllung des Arc de Triomphe“.",
      "fix": "Antwort auf „Arc de Triomphe“ ändern.",
      "finalVersion": "Antwort: „Arc de Triomphe“.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2022sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2022sc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2021"
      ],
      "themeComplexes": [
        "Kultur / Medien / Journalismus"
      ]
    },
    {
      "id": "djs2026mc-neu-147",
      "category": "Kultur & Medien",
      "question": "Welche Spiegel-Reportage brachte den Relotius-Skandal ins Rollen, und wer deckte ihn auf?",
      "options": "—",
      "answer": "„Jaegers Grenze“ – Juan Moreno",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Der Spiegel; Juan Moreno",
      "variantNote": "Variante von `djs2019sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur / Medien / Journalismus",
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2026mc-neu-148",
      "category": "Kultur & Medien",
      "question": "Juan Moreno enttarnte Fälschungen seines Kollegen bei welcher Reportage?",
      "options": "—",
      "answer": "„Jaegers Grenze“ – Juan Moreno",
      "qaStatus": "TEILWEISE_FALSCH",
      "priority": "HOCH",
      "review": "Die Frage fragt nur nach der Reportage. Hinterlegt ist Reportage plus Aufdecker.",
      "problem": "Die Frage fragt nur nach der Reportage. Hinterlegt ist Reportage plus Aufdecker.",
      "fix": "Antwort auf „Jaegers Grenze“ ändern.",
      "finalVersion": "Antwort: „Jaegers Grenze“.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2019sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur / Medien / Journalismus",
        "Geografie / Karten / Staatenräume"
      ]
    },
    {
      "id": "djs2026mc-neu-149",
      "category": "Kultur & Medien",
      "question": "Warum wurde der Echo-Musikpreis 2018 abgeschafft?",
      "options": "—",
      "answer": "Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2019sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2018"
      ],
      "themeComplexes": [
        "Kultur / Medien / Journalismus"
      ]
    },
    {
      "id": "djs2026mc-neu-150",
      "category": "Kultur & Medien",
      "question": "Die Auszeichnung eines Rap-Albums mit antisemitisch kritisierten Zeilen führte zum Ende welchen Musikpreises?",
      "options": "—",
      "answer": "Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang",
      "qaStatus": "TEILWEISE_FALSCH",
      "priority": "HOCH",
      "review": "Die Frage fragt nach dem Musikpreis. Hinterlegt ist die Begründung für das Ende des Preises.",
      "problem": "Die Frage fragt nach dem Musikpreis. Hinterlegt ist die Begründung für das Ende des Preises.",
      "fix": "Antwort auf „Echo“ bzw. „Echo-Musikpreis“ ändern.",
      "finalVersion": "Antwort: „Echo-Musikpreis“.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2019sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2019sc006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2026mc-neu-151",
      "category": "Kultur & Medien",
      "question": "Wie heißt das deutsche Gesetz, das große soziale Netzwerke zu schnellen Löschverfahren verpflichtete?",
      "options": "—",
      "answer": "Netzwerkdurchsetzungsgesetz",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2018sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2018sc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2026mc-neu-152",
      "category": "Kultur & Medien",
      "question": "Das Kürzel NetzDG steht für welches Gesetz zur Plattformregulierung?",
      "options": "—",
      "answer": "Netzwerkdurchsetzungsgesetz",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bundesjustizministerium; Gesetzestext",
      "variantNote": "Variante von `djs2018sc002`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2018sc002",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2026mc-neu-153",
      "category": "Kultur & Medien",
      "question": "Was machte die Produktion von „Babylon Berlin“ medienwirtschaftlich besonders?",
      "options": "—",
      "answer": "Eine sehr teure Kooperation von ARD und Sky",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2018sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2018sc004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2026mc-neu-154",
      "category": "Kultur & Medien",
      "question": "Die Serie nach Volker Kutscher wurde auch durch ihre Finanzierung als Kooperation welcher Akteure bekannt?",
      "options": "—",
      "answer": "Eine sehr teure Kooperation von ARD und Sky",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2018sc004`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2018sc004",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2023mc001",
      "category": "Kultur & Medien",
      "question": "Welche Gemälde wurden 2022 Ziel von Klima-Protesten? (Mehrere Antworten möglich)",
      "options": "Van Goghs 'Pfirsichbäume in Blüte', Monets 'Getreideschober', Raffaels 'Sixtinische Madonna', Picassos 'Guernica', Da Vincis 'Mona Lisa'",
      "answer": "Van Goghs 'Pfirsichbäume in Blüte' / Monets 'Getreideschober' / Raffaels 'Sixtinische Madonna' / Da Vincis 'Mona Lisa'",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "Correctiv; Tagesschau/Deutschlandfunk zur Rezeption",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "multiplechoice",
      "idYear": 2023,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2025sc004",
      "category": "Kultur & Medien",
      "question": "Weshalb verlor Luke Mockridge 2024 seine neue Sat.1-Show?",
      "options": "Wegen eines Streits mit der Produktion, Wegen geringer Einschaltquoten, Wegen eines menschenverachtenden Spruchs über Paralympioniken, Wegen eines Plagiatsvorwurfs",
      "answer": "Wegen eines menschenverachtenden Spruchs über Paralympioniken",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Antwort ist inhaltlich richtig, aber stark wertend formuliert. Für faktennahe Lern-App neutraler formulieren.",
      "problem": "Antwort ist inhaltlich richtig, aber stark wertend formuliert. Für faktennahe Lern-App neutraler formulieren.",
      "fix": "Antwort: „wegen abwertender/ableistischer Äußerungen über Paralympioniken“; Erklärung mit Quelle ergänzen.",
      "finalVersion": "Antwort: „wegen abwertender/ableistischer Äußerungen über Paralympioniken“; Erklärung mit Quelle ergänzen.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2025,
      "dateMentions": [
        "2024"
      ],
      "themeComplexes": [
        "Kultur & Medien"
      ]
    },
    {
      "id": "djs2023sc006",
      "category": "Geografie & Karten",
      "question": "In welchem Land wurden nach einem schweren Zugunglück Parlamentswahlen verschoben?",
      "options": "Griechenland, Italien, Türkei, Spanien",
      "answer": "Griechenland",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2023,
      "dateMentions": [],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2023sc009",
      "category": "Geografie & Karten",
      "question": "In welchem Land kam es bei einer Halloween-Party zu einer tödlichen Massenpanik?",
      "options": "Japan, Thailand, Südkorea, Indonesien",
      "answer": "Südkorea",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2023,
      "dateMentions": [],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2024sc010",
      "category": "Geografie & Karten",
      "question": "Wo musste wegen einer Erdbebenserie die Blaue Lagune vorübergehend geschlossen werden?",
      "options": "Neuseeland, Island, Japan, Türkei",
      "answer": "Island",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "review": "Keine harte Abweichung im Doppelcheck gefunden. Faktenbasis wirkt plausibel; bei aktuellen Themen Quelle/Stand beibehalten.",
      "problem": "—",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2024,
      "dateMentions": [],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2026geo-neu-035",
      "category": "Geografie & Karten",
      "question": "Aus welchem Land stammten die Waldbrandrauchwolken, die 2023 bis nach New York zogen?",
      "options": "—",
      "answer": "Kanada",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2026geo-neu-036",
      "category": "Geografie & Karten",
      "question": "Ein orange verfärbter Himmel über Manhattan wurde 2023 zum Symbol für Waldbrände in welchem Staat?",
      "options": "—",
      "answer": "Kanada",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2026geo-neu-037",
      "category": "Geografie & Karten",
      "question": "Welcher Staat überholte China 2023 als bevölkerungsreichstes Land der Erde?",
      "options": "—",
      "answer": "Indien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2026geo-neu-038",
      "category": "Geografie & Karten",
      "question": "Seit 2023 steht welches Land in UN-Schätzungen an der Spitze der Weltbevölkerung?",
      "options": "—",
      "answer": "Indien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc007`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc007",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2026geo-neu-039",
      "category": "Geografie & Karten",
      "question": "In welchem Land wurde der Präsidentschaftskandidat Fernando Villavicencio 2023 erschossen?",
      "options": "—",
      "answer": "Ecuador",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc008",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2026geo-neu-040",
      "category": "Geografie & Karten",
      "question": "Das Attentat auf einen investigativen Journalisten im Wahlkampf erschütterte 2023 welches südamerikanische Land?",
      "options": "—",
      "answer": "Ecuador",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc008`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc008",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Kultur / Medien / Journalismus"
      ]
    },
    {
      "id": "djs2026geo-neu-041",
      "category": "Geografie & Karten",
      "question": "In welchem Land musste die Blaue Lagune nach Erdbeben und Vulkangefahr zeitweise schließen?",
      "options": "—",
      "answer": "Island",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc010`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc010",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2026geo-neu-042",
      "category": "Geografie & Karten",
      "question": "Die Reykjanes-Halbinsel mit Grindavík und der Blauen Lagune liegt in welchem Land?",
      "options": "—",
      "answer": "Island",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2024sc010`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2024sc010",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2026geo-neu-043",
      "category": "Geografie & Karten",
      "question": "In welchem Land wurde nach dem Zugunglück von Tempi der Wahlkalender politisch überlagert?",
      "options": "—",
      "answer": "Griechenland",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2026geo-neu-044",
      "category": "Geografie & Karten",
      "question": "Das schwerste Bahnunglück der Landesgeschichte löste 2023 massive Proteste in welchem EU-Land aus?",
      "options": "—",
      "answer": "Griechenland",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023sc006`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc006",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2026geo-neu-045",
      "category": "Geografie & Karten",
      "question": "In welchem Land starben 2022 in Itaewon viele Menschen bei einer Halloween-Massenpanik?",
      "options": "—",
      "answer": "Südkorea",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023sc009`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc009",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [
        "2022"
      ],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2026geo-neu-046",
      "category": "Geografie & Karten",
      "question": "Die tödliche Crowd-Katastrophe in einer engen Gasse von Seoul ereignete sich in welchem Land?",
      "options": "—",
      "answer": "Südkorea",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "problem": "Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "Variante von `djs2023sc009`. Gewollte Variation; nicht als Duplikatfehler bewertet.",
      "variantOf": "djs2023sc009",
      "inferredType": "kurzantwort",
      "idYear": 2026,
      "dateMentions": [],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2024sc006",
      "category": "Geografie & Karten",
      "question": "Waldbrände in welchem Land lösten 2023 Smog-Alarm bis nach New York aus?",
      "options": "Australien, Kanada, Brasilien, USA",
      "answer": "Kanada",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2024,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2024sc007",
      "category": "Geografie & Karten",
      "question": "Welches Land gilt seit 2023 als bevölkerungsreichstes Land der Welt?",
      "options": "China, Indien, USA, Indonesien",
      "answer": "Indien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2024,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    },
    {
      "id": "djs2024sc008",
      "category": "Geografie & Karten",
      "question": "In welchem Land wurde 2023 ein Präsidentschaftskandidat bei einer Wahlveranstaltung erschossen?",
      "options": "Mexiko, Kolumbien, Ecuador, Peru",
      "answer": "Ecuador",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "review": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "problem": "Archivfrage. Inhaltlich überwiegend plausibel, aber nicht automatisch aktiver Pool. Archivstatus muss app-seitig strikt berücksichtigt werden.",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "sourceHint": "Bevorzugt Primärquelle; bei Medien-/Kulturfragen zusätzlich ARD/ZDF/Deutschlandfunk/AP/AFP/dpa",
      "variantNote": "",
      "variantOf": null,
      "inferredType": "singlechoice",
      "idYear": 2024,
      "dateMentions": [
        "2023"
      ],
      "themeComplexes": [
        "Geografie & Karten"
      ]
    }
  ],
  "clusters": [
    {
      "baseId": "djs2018sc001",
      "category": "Deutsche Politik",
      "baseQuestion": "Wer sagte: 'Es ist besser, nicht zu regieren, als falsch zu regieren'?",
      "baseAnswer": "Christian Lindner",
      "count": 3,
      "ids": [
        "djs2018sc001",
        "djs2026dp-neu-005",
        "djs2026dp-neu-006"
      ]
    },
    {
      "baseId": "djs2023mc003",
      "category": "Deutsche Politik",
      "baseQuestion": "Über welche Reformvorhaben stritt die Ampelkoalition? (Mehrere Antworten möglich)",
      "baseAnswer": "Gebäudeenergiegesetz / Kindergrundsicherung",
      "count": 3,
      "ids": [
        "djs2026dp-neu-003",
        "djs2026dp-neu-004",
        "djs2023mc003"
      ]
    },
    {
      "baseId": "djs2024sc004",
      "category": "Deutsche Politik",
      "baseQuestion": "Welche Bundestagsfraktion löste sich 2023 auf?",
      "baseAnswer": "Die Linke",
      "count": 3,
      "ids": [
        "djs2024sc004",
        "djs2026dp-neu-001",
        "djs2026dp-neu-002"
      ]
    },
    {
      "baseId": "djs2025dp001",
      "category": "Deutsche Politik",
      "baseQuestion": "An welchem Datum fand die Bundestagswahl 2025 statt?",
      "baseAnswer": "23. Februar 2025",
      "count": 3,
      "ids": [
        "djs2025dp001",
        "djs2026dp-neu-007",
        "djs2026dp-neu-008"
      ]
    },
    {
      "baseId": "djs2025dp002",
      "category": "Deutsche Politik",
      "baseQuestion": "Welche Partei wurde bei der Bundestagswahl 2025 stärkste Kraft?",
      "baseAnswer": "CDU/CSU",
      "count": 3,
      "ids": [
        "djs2025dp002",
        "djs2026dp-neu-009",
        "djs2026dp-neu-010"
      ]
    },
    {
      "baseId": "djs2025dp003",
      "category": "Deutsche Politik",
      "baseQuestion": "Welche Partei wurde bei der Bundestagswahl 2025 zweitstärkste Kraft?",
      "baseAnswer": "AfD",
      "count": 3,
      "ids": [
        "djs2025dp003",
        "djs2026dp-neu-011",
        "djs2026dp-neu-012"
      ]
    },
    {
      "baseId": "djs2025dp004",
      "category": "Deutsche Politik",
      "baseQuestion": "Wie lautet der Titel des Koalitionsvertrags, den CDU/CSU und SPD 2025 unterzeichnet haben?",
      "baseAnswer": "Verantwortung für Deutschland",
      "count": 3,
      "ids": [
        "djs2026dp-neu-013",
        "djs2026dp-neu-014",
        "djs2025dp004"
      ]
    },
    {
      "baseId": "djs2025dp005",
      "category": "Deutsche Politik",
      "baseQuestion": "In welchem Wahlgang wurde Friedrich Merz am 6. Mai 2025 zum Bundeskanzler gewählt?",
      "baseAnswer": "Zweiten Wahlgang",
      "count": 3,
      "ids": [
        "djs2025dp005",
        "djs2026dp-neu-015",
        "djs2026dp-neu-016"
      ]
    },
    {
      "baseId": "djs2025dp006",
      "category": "Deutsche Politik",
      "baseQuestion": "Wie hoch ist das 2025 beschlossene Sondervermögen für Infrastruktur und Klimaneutralität?",
      "baseAnswer": "500 Milliarden Euro",
      "count": 3,
      "ids": [
        "djs2025dp006",
        "djs2026dp-neu-017",
        "djs2026dp-neu-018"
      ]
    },
    {
      "baseId": "djs2025dp007",
      "category": "Deutsche Politik",
      "baseQuestion": "Welche verfassungsrechtliche Regelung wurde im März 2025 reformiert, um mehr Spielraum für Verteidigung und Investitionen zu schaffen?",
      "baseAnswer": "Schuldenbremse",
      "count": 3,
      "ids": [
        "djs2025dp007",
        "djs2026dp-neu-019",
        "djs2026dp-neu-020"
      ]
    },
    {
      "baseId": "djs2025dp008",
      "category": "Deutsche Politik",
      "baseQuestion": "In welchem Land stationiert Deutschland die Brigade Litauen mit rund 5.000 Soldatinnen und Soldaten?",
      "baseAnswer": "Litauen",
      "count": 1,
      "ids": [
        "djs2025dp008"
      ]
    },
    {
      "baseId": "djs2025dp009",
      "category": "Deutsche Politik",
      "baseQuestion": "Wie hoch sind die geplanten deutschen Verteidigungsausgaben im Haushalt 2026?",
      "baseAnswer": "108,2 Milliarden Euro",
      "count": 3,
      "ids": [
        "djs2025dp009",
        "djs2026dp-neu-021",
        "djs2026dp-neu-022"
      ]
    },
    {
      "baseId": "djs2025dp010",
      "category": "Deutsche Politik",
      "baseQuestion": "Als was stufte das Bundesamt für Verfassungsschutz die AfD am 2. Mai 2025 ein?",
      "baseAnswer": "Gesichert rechtsextremistische Bestrebung",
      "count": 3,
      "ids": [
        "djs2025dp010",
        "djs2026dp-neu-023",
        "djs2026dp-neu-024"
      ]
    },
    {
      "baseId": "djs2025dp011",
      "category": "Deutsche Politik",
      "baseQuestion": "Welches Gericht hob 2025 das Verbot des COMPACT-Magazins auf und machte den Fall damit zum Schlüsselthema für Pressefreiheit und wehrhafte Demokratie?",
      "baseAnswer": "Bundesverwaltungsgericht",
      "count": 3,
      "ids": [
        "djs2025dp011",
        "djs2026dp-neu-025",
        "djs2026dp-neu-026"
      ]
    },
    {
      "baseId": "djs2025dp012",
      "category": "Deutsche Politik",
      "baseQuestion": "Welche zwei Rechtsgüter stehen im Fall des COMPACT-Magazin-Verbots besonders im Konflikt?",
      "baseAnswer": "Pressefreiheit / Wehrhafte Demokratie",
      "count": 3,
      "ids": [
        "djs2025dp012",
        "djs2026dp-neu-027",
        "djs2026dp-neu-028"
      ]
    },
    {
      "baseId": "djs2025dp013",
      "category": "Deutsche Politik",
      "baseQuestion": "Welches historische Jubiläum wurde in Deutschland am 8. Mai 2025 begangen?",
      "baseAnswer": "80 Jahre Kriegsende (Ende des Zweiten Weltkriegs)",
      "count": 3,
      "ids": [
        "djs2025dp013",
        "djs2026dp-neu-029",
        "djs2026dp-neu-030"
      ]
    },
    {
      "baseId": "djs2025dp014",
      "category": "Deutsche Politik",
      "baseQuestion": "Welches Jubiläum der Deutschen Einheit wurde im Oktober 2025 gefeiert?",
      "baseAnswer": "35 Jahre",
      "count": 3,
      "ids": [
        "djs2025dp014",
        "djs2026dp-neu-031",
        "djs2026dp-neu-032"
      ]
    },
    {
      "baseId": "djs2025dp015",
      "category": "Deutsche Politik",
      "baseQuestion": "Welche deutsche Behörde erklärte 2025, die deutschen Klimaschutzziele für 2030 seien auf Basis der aktuellen Projektionen grundsätzlich erreichbar?",
      "baseAnswer": "Umweltbundesamt (UBA)",
      "count": 3,
      "ids": [
        "djs2025dp015",
        "djs2026dp-neu-033",
        "djs2026dp-neu-034"
      ]
    },
    {
      "baseId": "djs2025match004",
      "category": "Deutsche Politik",
      "baseQuestion": "Ordnen Sie die Bundesländer ihren Landesregierungen nach den Wahlen 2024/2025 und den Entwicklungen bis Frühjahr 2026 zu.",
      "baseAnswer": "Brandenburg → SPD-CDU / Hamburg → SPD-Grüne / Sachsen → CDU-SPD-Minderheitsregierung / Thüringen → CDU-BSW-SPD",
      "count": 1,
      "ids": [
        "djs2025match004"
      ]
    },
    {
      "baseId": "djs2025mc004",
      "category": "Deutsche Politik",
      "baseQuestion": "Wer könnte ein AfD-Verbotsverfahren anstrengen? (Mehrere Antworten möglich)",
      "baseAnswer": "Bundesrat / Bundestag / Bundesregierung",
      "count": 1,
      "ids": [
        "djs2025mc004"
      ]
    },
    {
      "baseId": "djs2025sc002",
      "category": "Deutsche Politik",
      "baseQuestion": "Auf welchen Betrag stieg der deutsche Mindeststundenlohn zum 1. Januar 2025?",
      "baseAnswer": "12,82 Euro",
      "count": 1,
      "ids": [
        "djs2025sc002"
      ]
    },
    {
      "baseId": "djs2025sc003",
      "category": "Deutsche Politik",
      "baseQuestion": "Wofür steht die Abkürzung ePA?",
      "baseAnswer": "Elektronische Patientenakte",
      "count": 1,
      "ids": [
        "djs2025sc003"
      ]
    },
    {
      "baseId": "djs2023sc006",
      "category": "Geografie & Karten",
      "baseQuestion": "In welchem Land wurden nach einem schweren Zugunglück Parlamentswahlen verschoben?",
      "baseAnswer": "Griechenland",
      "count": 3,
      "ids": [
        "djs2023sc006",
        "djs2026geo-neu-043",
        "djs2026geo-neu-044"
      ]
    },
    {
      "baseId": "djs2023sc009",
      "category": "Geografie & Karten",
      "baseQuestion": "In welchem Land kam es bei einer Halloween-Party zu einer tödlichen Massenpanik?",
      "baseAnswer": "Südkorea",
      "count": 3,
      "ids": [
        "djs2023sc009",
        "djs2026geo-neu-045",
        "djs2026geo-neu-046"
      ]
    },
    {
      "baseId": "djs2024sc006",
      "category": "Geografie & Karten",
      "baseQuestion": "Waldbrände in welchem Land lösten 2023 Smog-Alarm bis nach New York aus?",
      "baseAnswer": "Kanada",
      "count": 3,
      "ids": [
        "djs2026geo-neu-035",
        "djs2026geo-neu-036",
        "djs2024sc006"
      ]
    },
    {
      "baseId": "djs2024sc007",
      "category": "Geografie & Karten",
      "baseQuestion": "Welches Land gilt seit 2023 als bevölkerungsreichstes Land der Welt?",
      "baseAnswer": "Indien",
      "count": 3,
      "ids": [
        "djs2026geo-neu-037",
        "djs2026geo-neu-038",
        "djs2024sc007"
      ]
    },
    {
      "baseId": "djs2024sc008",
      "category": "Geografie & Karten",
      "baseQuestion": "In welchem Land wurde 2023 ein Präsidentschaftskandidat bei einer Wahlveranstaltung erschossen?",
      "baseAnswer": "Ecuador",
      "count": 3,
      "ids": [
        "djs2026geo-neu-039",
        "djs2026geo-neu-040",
        "djs2024sc008"
      ]
    },
    {
      "baseId": "djs2024sc010",
      "category": "Geografie & Karten",
      "baseQuestion": "Wo musste wegen einer Erdbebenserie die Blaue Lagune vorübergehend geschlossen werden?",
      "baseAnswer": "Island",
      "count": 3,
      "ids": [
        "djs2024sc010",
        "djs2026geo-neu-041",
        "djs2026geo-neu-042"
      ]
    },
    {
      "baseId": "djs2019sc001",
      "category": "Gesellschaft & Recht",
      "baseQuestion": "Wer sagte den Satz vom 'brennenden Haus' auf der Klimakonferenz in Davos?",
      "baseAnswer": "Greta Thunberg",
      "count": 3,
      "ids": [
        "djs2019sc001",
        "djs2026gr-neu-053",
        "djs2026gr-neu-054"
      ]
    },
    {
      "baseId": "djs2022sc004",
      "category": "Gesellschaft & Recht",
      "baseQuestion": "Wie lautete das Unwort des Jahres 2021?",
      "baseAnswer": "Pushback",
      "count": 3,
      "ids": [
        "djs2022sc004",
        "djs2026gr-neu-049",
        "djs2026gr-neu-050"
      ]
    },
    {
      "baseId": "djs2022sc006",
      "category": "Gesellschaft & Recht",
      "baseQuestion": "An welches Land sollten über 1000 Benin-Bronzen zurückgegeben werden?",
      "baseAnswer": "Nigeria",
      "count": 3,
      "ids": [
        "djs2022sc006",
        "djs2026gr-neu-051",
        "djs2026gr-neu-052"
      ]
    },
    {
      "baseId": "djs2023sc005",
      "category": "Gesellschaft & Recht",
      "baseQuestion": "Wie lautete das Unwort des Jahres 2022?",
      "baseAnswer": "Klimaterroristen",
      "count": 3,
      "ids": [
        "djs2026gr-neu-047",
        "djs2026gr-neu-048",
        "djs2023sc005"
      ]
    },
    {
      "baseId": "djs2025gr001",
      "category": "Gesellschaft & Recht",
      "baseQuestion": "Ab welchem Datum wurden Leistungserbringer verpflichtet, die elektronische Patientenakte (ePA) zu nutzen?",
      "baseAnswer": "1. Oktober 2025",
      "count": 1,
      "ids": [
        "djs2025gr001"
      ]
    },
    {
      "baseId": "djs2025match001",
      "category": "Gesellschaft & Recht",
      "baseQuestion": "Ordnen Sie die folgenden Zitate den richtigen Personen zu.",
      "baseAnswer": "Simone Biles → Aussage zur mentalen Gesundheit im Leistungssport / Christian Lindner → Eine Entlassung könne auch Befreiung sein / Friedrich Merz → Kritik an Vier-Tage-Woche / Gisèle Pelicot → Nicht sie solle sich schämen, sondern die Täter",
      "count": 1,
      "ids": [
        "djs2025match001"
      ]
    },
    {
      "baseId": "djs2025mc001",
      "category": "Gesellschaft & Recht",
      "baseQuestion": "In welchen Städten kam es zwischen Dezember 2024 und April 2025 zu besonders beachteten Autoanschlägen bzw. Amokfahrten? (Mehrere Antworten möglich)",
      "baseAnswer": "Magdeburg / Mannheim / Vancouver",
      "count": 1,
      "ids": [
        "djs2025mc001"
      ]
    },
    {
      "baseId": "djs2025mc002",
      "category": "Gesellschaft & Recht",
      "baseQuestion": "Welche Wörter wurden 2024 neu in den Duden aufgenommen? (Mehrere Antworten möglich)",
      "baseAnswer": "ChatGPT / Deutschlandticket / Triggerwarnung / Wokeness / Klimakleber",
      "count": 1,
      "ids": [
        "djs2025mc002"
      ]
    },
    {
      "baseId": "djs2018sc003",
      "category": "Internationale Politik",
      "baseQuestion": "Welche Volksgruppe wurde laut UN Ziel ethnischer Säuberungen in Myanmar?",
      "baseAnswer": "Rohingya",
      "count": 3,
      "ids": [
        "djs2018sc003",
        "djs2026ip-neu-077",
        "djs2026ip-neu-078"
      ]
    },
    {
      "baseId": "djs2019sc003",
      "category": "Internationale Politik",
      "baseQuestion": "Was sollte der Brexit-'Backstop' verhindern?",
      "baseAnswer": "Eine harte Grenze zwischen Irland und Nordirland",
      "count": 3,
      "ids": [
        "djs2019sc003",
        "djs2026ip-neu-075",
        "djs2026ip-neu-076"
      ]
    },
    {
      "baseId": "djs2022sc005",
      "category": "Internationale Politik",
      "baseQuestion": "Welches Land zwang 2021 eine Ryanair-Maschine zur Landung, um einen Blogger festzunehmen?",
      "baseAnswer": "Belarus",
      "count": 3,
      "ids": [
        "djs2022sc005",
        "djs2026ip-neu-071",
        "djs2026ip-neu-072"
      ]
    },
    {
      "baseId": "djs2022sc007",
      "category": "Internationale Politik",
      "baseQuestion": "Welches Land führte Bitcoin als offizielles Zahlungsmittel ein?",
      "baseAnswer": "El Salvador",
      "count": 3,
      "ids": [
        "djs2022sc007",
        "djs2026ip-neu-073",
        "djs2026ip-neu-074"
      ]
    },
    {
      "baseId": "djs2023mc002",
      "category": "Internationale Politik",
      "baseQuestion": "In welchen Ländern wechselte in den vergangenen 12 Monaten die Regierung? (Mehrere Antworten möglich)",
      "baseAnswer": "Australien / Brasilien / Kolumbien",
      "count": 3,
      "ids": [
        "djs2026ip-neu-065",
        "djs2026ip-neu-066",
        "djs2023mc002"
      ]
    },
    {
      "baseId": "djs2023sc001",
      "category": "Internationale Politik",
      "baseQuestion": "Welches Land trat im April 2023 der NATO bei?",
      "baseAnswer": "Finnland",
      "count": 3,
      "ids": [
        "djs2023sc001",
        "djs2026ip-neu-063",
        "djs2026ip-neu-064"
      ]
    },
    {
      "baseId": "djs2023sc007",
      "category": "Internationale Politik",
      "baseQuestion": "Welches Land führte am 1. Januar 2023 als 20. Land den Euro ein?",
      "baseAnswer": "Kroatien",
      "count": 3,
      "ids": [
        "djs2023sc007",
        "djs2026ip-neu-067",
        "djs2026ip-neu-068"
      ]
    },
    {
      "baseId": "djs2023sc008",
      "category": "Internationale Politik",
      "baseQuestion": "Wo regierte nach der Wahl 2022 ein Rechtsbündnis mit einer postfaschistischen Regierungschefin?",
      "baseAnswer": "Italien",
      "count": 3,
      "ids": [
        "djs2023sc008",
        "djs2026ip-neu-069",
        "djs2026ip-neu-070"
      ]
    },
    {
      "baseId": "djs2024mc002",
      "category": "Internationale Politik",
      "baseQuestion": "Welche Länder traten am 1. Januar 2024 den BRICS-Staaten bei? (Mehrere Antworten möglich)",
      "baseAnswer": "Ägypten / Vereinigte Arabische Emirate",
      "count": 3,
      "ids": [
        "djs2024mc002",
        "djs2026ip-neu-059",
        "djs2026ip-neu-060"
      ]
    },
    {
      "baseId": "djs2024sc003",
      "category": "Internationale Politik",
      "baseQuestion": "Welcher britische Politiker feierte 2023 ein spektakuläres politisches Comeback?",
      "baseAnswer": "David Cameron",
      "count": 3,
      "ids": [
        "djs2024sc003",
        "djs2026ip-neu-055",
        "djs2026ip-neu-056"
      ]
    },
    {
      "baseId": "djs2024sc005",
      "category": "Internationale Politik",
      "baseQuestion": "Wie alt war US-Präsident Joe Biden zum Zeitpunkt seiner Kandidatur-Ankündigung für 2024?",
      "baseAnswer": "80",
      "count": 3,
      "ids": [
        "djs2024sc005",
        "djs2026ip-neu-057",
        "djs2026ip-neu-058"
      ]
    },
    {
      "baseId": "djs2024sc009",
      "category": "Internationale Politik",
      "baseQuestion": "Welches Land marschierte 2023 in Berg-Karabach ein und kontrolliert es seitdem?",
      "baseAnswer": "Aserbaidschan",
      "count": 3,
      "ids": [
        "djs2024sc009",
        "djs2026ip-neu-061",
        "djs2026ip-neu-062"
      ]
    },
    {
      "baseId": "djs2025eu001",
      "category": "Internationale Politik",
      "baseQuestion": "Wie heißt der EU-Verteidigungsplan, der am 19. März 2025 vorgestellt wurde?",
      "baseAnswer": "ReArm Europe/Readiness 2030",
      "count": 3,
      "ids": [
        "djs2025eu001",
        "djs2026ip-neu-079",
        "djs2026ip-neu-080"
      ]
    },
    {
      "baseId": "djs2025eu002",
      "category": "Internationale Politik",
      "baseQuestion": "Welches Finanzinstrument ist der erste Pfeiler des EU-Plans ReArm Europe/Readiness 2030?",
      "baseAnswer": "SAFE",
      "count": 3,
      "ids": [
        "djs2025eu002",
        "djs2026ip-neu-081",
        "djs2026ip-neu-082"
      ]
    },
    {
      "baseId": "djs2025eu003",
      "category": "Internationale Politik",
      "baseQuestion": "Welches EU-Sanktionspaket gegen Russland wurde am 24. Februar 2025 beschlossen?",
      "baseAnswer": "16. Paket",
      "count": 3,
      "ids": [
        "djs2025eu003",
        "djs2026ip-neu-083",
        "djs2026ip-neu-084"
      ]
    },
    {
      "baseId": "djs2025eu004",
      "category": "Internationale Politik",
      "baseQuestion": "An welchem Datum beschloss die EU das 17. Sanktionspaket gegen Russland?",
      "baseAnswer": "20. Mai 2025",
      "count": 3,
      "ids": [
        "djs2025eu004",
        "djs2026ip-neu-085",
        "djs2026ip-neu-086"
      ]
    },
    {
      "baseId": "djs2025eu005",
      "category": "Internationale Politik",
      "baseQuestion": "Wie heißt das industriepolitische Leitprojekt der EU-Kommission, das am 26. Februar 2025 vorgestellt wurde?",
      "baseAnswer": "Clean Industrial Deal",
      "count": 3,
      "ids": [
        "djs2026ip-neu-087",
        "djs2026ip-neu-088",
        "djs2025eu005"
      ]
    },
    {
      "baseId": "djs2025eu006",
      "category": "Internationale Politik",
      "baseQuestion": "Ab welchem Datum greifen im EU AI Act die Verbote verbotener KI-Praktiken?",
      "baseAnswer": "2. Februar 2025",
      "count": 3,
      "ids": [
        "djs2026ip-neu-091",
        "djs2026ip-neu-092",
        "djs2025eu006"
      ]
    },
    {
      "baseId": "djs2025eu007",
      "category": "Internationale Politik",
      "baseQuestion": "Wie heißt das EU-Paket gegen Desinformation und ausländische Einflussnahme, das im November 2025 vorgestellt wurde?",
      "baseAnswer": "European Democracy Shield",
      "count": 3,
      "ids": [
        "djs2025eu007",
        "djs2026ip-neu-095",
        "djs2026ip-neu-096"
      ]
    },
    {
      "baseId": "djs2025eu008",
      "category": "Internationale Politik",
      "baseQuestion": "Welches 2040-Klimaziel schlug die EU-Kommission im Juli 2025 für das überarbeitete EU-Klimagesetz vor?",
      "baseAnswer": "Minus 90 Prozent Netto-THG gegenüber 1990",
      "count": 3,
      "ids": [
        "djs2025eu008",
        "djs2026ip-neu-097",
        "djs2026ip-neu-098"
      ]
    },
    {
      "baseId": "djs2025eu009",
      "category": "Internationale Politik",
      "baseQuestion": "Welche zwei Länder wurden ab 1. Januar 2025 vollständig Teil des Schengen-Raums?",
      "baseAnswer": "Rumänien / Bulgarien",
      "count": 3,
      "ids": [
        "djs2025eu009",
        "djs2026ip-neu-099",
        "djs2026ip-neu-100"
      ]
    },
    {
      "baseId": "djs2025eu010",
      "category": "Internationale Politik",
      "baseQuestion": "Welches Jubiläum der Schuman-Erklärung wurde am Europa-Tag, dem 9. Mai 2025, gefeiert?",
      "baseAnswer": "75 Jahre",
      "count": 3,
      "ids": [
        "djs2025eu010",
        "djs2026ip-neu-101",
        "djs2026ip-neu-102"
      ]
    },
    {
      "baseId": "djs2025eu011",
      "category": "Internationale Politik",
      "baseQuestion": "Wer ist seit Dezember 2024 die Hohe Vertreterin der EU für Außen- und Sicherheitspolitik?",
      "baseAnswer": "Kaja Kallas",
      "count": 3,
      "ids": [
        "djs2025eu011",
        "djs2026ip-neu-103",
        "djs2026ip-neu-104"
      ]
    },
    {
      "baseId": "djs2025eu012",
      "category": "Internationale Politik",
      "baseQuestion": "Wer ist seit Dezember 2024 Präsident des Europäischen Rates?",
      "baseAnswer": "António Costa",
      "count": 3,
      "ids": [
        "djs2025eu012",
        "djs2026ip-neu-105",
        "djs2026ip-neu-106"
      ]
    },
    {
      "baseId": "djs2025eu013",
      "category": "Internationale Politik",
      "baseQuestion": "Wie hoch ist das Gesamtvolumen der EU Ukraine Facility, die der Ukraine bis 2027 finanzielle Unterstützung sichert?",
      "baseAnswer": "50 Milliarden Euro",
      "count": 3,
      "ids": [
        "djs2025eu013",
        "djs2026ip-neu-131",
        "djs2026ip-neu-132"
      ]
    },
    {
      "baseId": "djs2025eu014",
      "category": "Internationale Politik",
      "baseQuestion": "Welches zusätzliche EU-Finanzinstrument für die Ukraine wurde im Dezember 2025 beschlossen und im April 2026 legislativ finalisiert?",
      "baseAnswer": "Ein Unterstützungskredit von 90 Milliarden Euro für 2026/27",
      "count": 3,
      "ids": [
        "djs2025eu014",
        "djs2026ip-neu-133",
        "djs2026ip-neu-134"
      ]
    },
    {
      "baseId": "djs2025ip001",
      "category": "Internationale Politik",
      "baseQuestion": "An welchem Datum wurde Donald Trump als 47. Präsident der USA vereidigt?",
      "baseAnswer": "20. Januar 2025",
      "count": 1,
      "ids": [
        "djs2025ip001"
      ]
    },
    {
      "baseId": "djs2025ip002",
      "category": "Internationale Politik",
      "baseQuestion": "Wie nennt sich die am 2. April 2025 von Trump erlassene Zollanordnung?",
      "baseAnswer": "Reciprocal Tariffs",
      "count": 3,
      "ids": [
        "djs2025ip002",
        "djs2026ip-neu-107",
        "djs2026ip-neu-108"
      ]
    },
    {
      "baseId": "djs2025ip003",
      "category": "Internationale Politik",
      "baseQuestion": "Wann starb Papst Franziskus?",
      "baseAnswer": "21. April 2025",
      "count": 3,
      "ids": [
        "djs2025ip003",
        "djs2026ip-neu-109",
        "djs2026ip-neu-110"
      ]
    },
    {
      "baseId": "djs2025ip004",
      "category": "Internationale Politik",
      "baseQuestion": "Welchen Papstnamen nahm Robert Francis Prevost nach seiner Wahl am 8. Mai 2025 an?",
      "baseAnswer": "Leo XIV.",
      "count": 3,
      "ids": [
        "djs2025ip004",
        "djs2026ip-neu-111",
        "djs2026ip-neu-112"
      ]
    },
    {
      "baseId": "djs2025ip005",
      "category": "Internationale Politik",
      "baseQuestion": "An welchem Datum nahm die Weltgesundheitsversammlung das WHO-Pandemieabkommen an?",
      "baseAnswer": "20. Mai 2025",
      "count": 3,
      "ids": [
        "djs2025ip005",
        "djs2026ip-neu-113",
        "djs2026ip-neu-114"
      ]
    },
    {
      "baseId": "djs2025ip006",
      "category": "Internationale Politik",
      "baseQuestion": "In welcher Stadt fand die UN-Klimakonferenz COP30 statt?",
      "baseAnswer": "Belém",
      "count": 3,
      "ids": [
        "djs2025ip006",
        "djs2026ip-neu-115",
        "djs2026ip-neu-116"
      ]
    },
    {
      "baseId": "djs2025ip007",
      "category": "Internationale Politik",
      "baseQuestion": "Wie werden die 2025 fälligen nationalen Klimapläne der UN-Mitgliedstaaten abgekürzt?",
      "baseAnswer": "NDC 3.0",
      "count": 3,
      "ids": [
        "djs2025ip007",
        "djs2026ip-neu-117",
        "djs2026ip-neu-118"
      ]
    },
    {
      "baseId": "djs2025ip008",
      "category": "Internationale Politik",
      "baseQuestion": "Wann fand das hochrangige Gedenktreffen anlässlich des 80. Jahrestags der Vereinten Nationen statt?",
      "baseAnswer": "22. September 2025",
      "count": 3,
      "ids": [
        "djs2025ip008",
        "djs2026ip-neu-119",
        "djs2026ip-neu-120"
      ]
    },
    {
      "baseId": "djs2025ip009",
      "category": "Internationale Politik",
      "baseQuestion": "In welchen japanischen Städten wurden 2025 die 80. Jahrestage der Atombombenabwürfe begangen?",
      "baseAnswer": "Hiroshima / Nagasaki",
      "count": 3,
      "ids": [
        "djs2026ip-neu-121",
        "djs2026ip-neu-122",
        "djs2025ip009"
      ]
    },
    {
      "baseId": "djs2025ip010",
      "category": "Internationale Politik",
      "baseQuestion": "Welcher Staat verhängte am 6. Februar 2025 Sanktionen gegen den Internationalen Strafgerichtshof (ICC)?",
      "baseAnswer": "USA",
      "count": 3,
      "ids": [
        "djs2025ip010",
        "djs2026ip-neu-123",
        "djs2026ip-neu-124"
      ]
    },
    {
      "baseId": "djs2025ip011",
      "category": "Internationale Politik",
      "baseQuestion": "Was ist der Unterschied zwischen ICC und ICJ?",
      "baseAnswer": "ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Streitigkeiten zwischen Staaten",
      "count": 3,
      "ids": [
        "djs2025ip011",
        "djs2026ip-neu-125",
        "djs2026ip-neu-126"
      ]
    },
    {
      "baseId": "djs2025ip012",
      "category": "Internationale Politik",
      "baseQuestion": "Welcher Konflikt gilt laut OCHA als die weltweit größte humanitäre Notlage im Jahr 2026?",
      "baseAnswer": "Sudan",
      "count": 3,
      "ids": [
        "djs2025ip012",
        "djs2026ip-neu-127",
        "djs2026ip-neu-128"
      ]
    },
    {
      "baseId": "djs2025ip013",
      "category": "Internationale Politik",
      "baseQuestion": "Welche zwei UN-Organisationen warnten 2025 gemeinsam vor KI-Risiken für Wahlen und Meinungsfreiheit?",
      "baseAnswer": "UNESCO und UNDP",
      "count": 3,
      "ids": [
        "djs2025ip013",
        "djs2026ip-neu-129",
        "djs2026ip-neu-130"
      ]
    },
    {
      "baseId": "djs2025ip014",
      "category": "Internationale Politik",
      "baseQuestion": "In welchem Land spricht OCHA 2025/26 von einer eskalierenden Gewaltsituation im Osten des Landes, die oft als 'unterberichteter Konflikt' gilt?",
      "baseAnswer": "Demokratische Republik Kongo",
      "count": 3,
      "ids": [
        "djs2025ip014",
        "djs2026ip-neu-135",
        "djs2026ip-neu-136"
      ]
    },
    {
      "baseId": "djs2025mc005",
      "category": "Internationale Politik",
      "baseQuestion": "Welche Personen kamen beim großen Gefangenenaustausch zwischen Russland und dem Westen frei? (Mehrere Antworten möglich)",
      "baseAnswer": "Rico Krieger / Vadim Krassikov / Evan Gershkovich",
      "count": 1,
      "ids": [
        "djs2025mc005"
      ]
    },
    {
      "baseId": "djs2025sc006",
      "category": "Internationale Politik",
      "baseQuestion": "In welchem Land scheiterte im Dezember 2024 ein Staatsstreich des amtierenden Präsidenten – bei Neuwahlen 2025 durfte er nicht mehr antreten?",
      "baseAnswer": "Südkorea",
      "count": 1,
      "ids": [
        "djs2025sc006"
      ]
    },
    {
      "baseId": "djs2025sc007",
      "category": "Internationale Politik",
      "baseQuestion": "In welchem Land löste die Verhaftung des Bürgermeisters der größten Stadt 2025 massive Proteste aus?",
      "baseAnswer": "Türkei",
      "count": 1,
      "ids": [
        "djs2025sc007"
      ]
    },
    {
      "baseId": "djs2025sc008",
      "category": "Internationale Politik",
      "baseQuestion": "In welchen Ländern führte ein Blackout im April 2025 fast einen ganzen Tag lang zu massivem Stromausfall?",
      "baseAnswer": "Spanien und Portugal",
      "count": 1,
      "ids": [
        "djs2025sc008"
      ]
    },
    {
      "baseId": "djs2025sc010",
      "category": "Internationale Politik",
      "baseQuestion": "In welchem Land ist seit April 2025 eine Brigade der Bundeswehr dauerhaft stationiert?",
      "baseAnswer": "Litauen",
      "count": 1,
      "ids": [
        "djs2025sc010"
      ]
    },
    {
      "baseId": "djs2026eu001",
      "category": "Internationale Politik",
      "baseQuestion": "Ab welchem Datum beginnt die Anwendung des EU-Migrations- und Asylpakts?",
      "baseAnswer": "12. Juni 2026",
      "count": 3,
      "ids": [
        "djs2026ip-neu-089",
        "djs2026ip-neu-090",
        "djs2026eu001"
      ]
    },
    {
      "baseId": "djs2026eu002",
      "category": "Internationale Politik",
      "baseQuestion": "Ab welchem Datum soll der EU AI Act vollständig anwendbar sein?",
      "baseAnswer": "2. August 2026",
      "count": 3,
      "ids": [
        "djs2026ip-neu-093",
        "djs2026ip-neu-094",
        "djs2026eu002"
      ]
    },
    {
      "baseId": "djs2018sc002",
      "category": "Kultur & Medien",
      "baseQuestion": "Wie heißt das Gesetz zu schnellen Löschpflichten für soziale Netzwerke in Deutschland?",
      "baseAnswer": "Netzwerkdurchsetzungsgesetz",
      "count": 3,
      "ids": [
        "djs2018sc002",
        "djs2026mc-neu-151",
        "djs2026mc-neu-152"
      ]
    },
    {
      "baseId": "djs2018sc004",
      "category": "Kultur & Medien",
      "baseQuestion": "Was war besonders an der Produktion der Serie 'Babylon Berlin'?",
      "baseAnswer": "Sie war eine sehr teure Kooperation von ARD und Sky",
      "count": 3,
      "ids": [
        "djs2018sc004",
        "djs2026mc-neu-153",
        "djs2026mc-neu-154"
      ]
    },
    {
      "baseId": "djs2019sc004",
      "category": "Kultur & Medien",
      "baseQuestion": "Welche Reportage enttarnte Claas Relotius vom Spiegel – und wer deckte ihn auf?",
      "baseAnswer": "'Jaegers Grenze' – enthüllt von Juan Moreno",
      "count": 3,
      "ids": [
        "djs2019sc004",
        "djs2026mc-neu-147",
        "djs2026mc-neu-148"
      ]
    },
    {
      "baseId": "djs2019sc006",
      "category": "Kultur & Medien",
      "baseQuestion": "Warum wurde der Echo-Musikpreis 2018 eingestellt?",
      "baseAnswer": "Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang",
      "count": 3,
      "ids": [
        "djs2019sc006",
        "djs2026mc-neu-149",
        "djs2026mc-neu-150"
      ]
    },
    {
      "baseId": "djs2022sc001",
      "category": "Kultur & Medien",
      "baseQuestion": "Welche Netflix-Serie hatte den erfolgreichsten Serienstart des Streamingdienstes?",
      "baseAnswer": "Squid Game",
      "count": 3,
      "ids": [
        "djs2022sc001",
        "djs2026mc-neu-143",
        "djs2026mc-neu-144"
      ]
    },
    {
      "baseId": "djs2022sc002",
      "category": "Kultur & Medien",
      "baseQuestion": "Welches Christo/Jeanne-Claude-Projekt wurde 2021 posthum verwirklicht?",
      "baseAnswer": "Verhüllung des Arc de Triomphe",
      "count": 3,
      "ids": [
        "djs2022sc002",
        "djs2026mc-neu-145",
        "djs2026mc-neu-146"
      ]
    },
    {
      "baseId": "djs2023mc001",
      "category": "Kultur & Medien",
      "baseQuestion": "Welche Gemälde wurden 2022 Ziel von Klima-Protesten? (Mehrere Antworten möglich)",
      "baseAnswer": "Van Goghs 'Pfirsichbäume in Blüte' / Monets 'Getreideschober' / Raffaels 'Sixtinische Madonna' / Da Vincis 'Mona Lisa'",
      "count": 3,
      "ids": [
        "djs2026mc-neu-141",
        "djs2026mc-neu-142",
        "djs2023mc001"
      ]
    },
    {
      "baseId": "djs2024mc003",
      "category": "Kultur & Medien",
      "baseQuestion": "Welche Kulturgüter wurden 2023 für mehr als eine Million Euro versteigert? (Mehrere Antworten möglich)",
      "baseAnswer": "Freddie Mercurys Klavier / Gustav Klimts 'Dame mit Fächer' / Ferrari 330LM/250 GTO",
      "count": 3,
      "ids": [
        "djs2024mc003",
        "djs2026mc-neu-139",
        "djs2026mc-neu-140"
      ]
    },
    {
      "baseId": "djs2024sc001",
      "category": "Kultur & Medien",
      "baseQuestion": "Welcher Rechercheverbund berichtete über ein Treffen von Rechtsextremisten in Potsdam?",
      "baseAnswer": "Correctiv",
      "count": 3,
      "ids": [
        "djs2024sc001",
        "djs2026mc-neu-137",
        "djs2026mc-neu-138"
      ]
    },
    {
      "baseId": "djs2025match005",
      "category": "Kultur & Medien",
      "baseQuestion": "Ordnen Sie die Autorinnen und Autoren ihren literarischen Auszeichnungen 2024 zu.",
      "baseAnswer": "Samantha Harvey → Booker Prize / Martina Hefter → Deutscher Buchpreis / Tijan Sila → Ingeborg-Bachmann-Preis / Han Kang → Literaturnobelpreis",
      "count": 1,
      "ids": [
        "djs2025match005"
      ]
    },
    {
      "baseId": "djs2025sc004",
      "category": "Kultur & Medien",
      "baseQuestion": "Weshalb verlor Luke Mockridge 2024 seine neue Sat.1-Show?",
      "baseAnswer": "Wegen eines menschenverachtenden Spruchs über Paralympioniken",
      "count": 1,
      "ids": [
        "djs2025sc004"
      ]
    },
    {
      "baseId": "djs2025sc005",
      "category": "Kultur & Medien",
      "baseQuestion": "Chefredakteur welches US-Magazins las in einer Chatgruppe mit, in der US-Angriffe auf den Jemen geplant wurden?",
      "baseAnswer": "The Atlantic",
      "count": 1,
      "ids": [
        "djs2025sc005"
      ]
    },
    {
      "baseId": "djs2025sc009",
      "category": "Kultur & Medien",
      "baseQuestion": "In welchem Konflikt wurden laut Reporter ohne Grenzen seit dem 7. Oktober 2023 besonders viele Journalistinnen und Journalisten getötet?",
      "baseAnswer": "Konflikt in Gaza / Gazastreifen",
      "count": 1,
      "ids": [
        "djs2025sc009"
      ]
    },
    {
      "baseId": "djs2019sc002",
      "category": "Sport",
      "baseQuestion": "Wer sagte, er sei Deutscher beim Gewinnen und Immigrant beim Verlieren?",
      "baseAnswer": "Mesut Özil",
      "count": 3,
      "ids": [
        "djs2019sc002",
        "djs2026sp-neu-155",
        "djs2026sp-neu-156"
      ]
    },
    {
      "baseId": "djs2025sp001",
      "category": "Sport",
      "baseQuestion": "Wo fanden die Rhine-Ruhr 2025 FISU World University Games statt?",
      "baseAnswer": "Ruhrgebiet und Berlin",
      "count": 3,
      "ids": [
        "djs2025sp001",
        "djs2026sp-neu-157",
        "djs2026sp-neu-158"
      ]
    },
    {
      "baseId": "djs2025sp002",
      "category": "Sport",
      "baseQuestion": "In welchem Land fand die UEFA Women's EURO 2025 statt?",
      "baseAnswer": "Schweiz",
      "count": 3,
      "ids": [
        "djs2025sp002",
        "djs2026sp-neu-159",
        "djs2026sp-neu-160"
      ]
    },
    {
      "baseId": "djs2025sp003",
      "category": "Sport",
      "baseQuestion": "In welcher Stadt fand das Finale der UEFA Women's EURO 2025 statt?",
      "baseAnswer": "Basel",
      "count": 3,
      "ids": [
        "djs2025sp003",
        "djs2026sp-neu-161",
        "djs2026sp-neu-162"
      ]
    },
    {
      "baseId": "djs2025sp004",
      "category": "Sport",
      "baseQuestion": "Im welchen Zeitraum fand der neue FIFA Club World Cup 2025 erstmals im 32-Teams-Format statt?",
      "baseAnswer": "14. Juni – 13. Juli 2025",
      "count": 3,
      "ids": [
        "djs2026sp-neu-163",
        "djs2026sp-neu-164",
        "djs2025sp004"
      ]
    },
    {
      "baseId": "djs2026sp001",
      "category": "Sport",
      "baseQuestion": "Wie viele Teams nehmen an der FIFA Fußball-Weltmeisterschaft 2026 teil?",
      "baseAnswer": "48 Teams",
      "count": 3,
      "ids": [
        "djs2026sp-neu-165",
        "djs2026sp-neu-166",
        "djs2026sp001"
      ]
    },
    {
      "baseId": "djs2026sp002",
      "category": "Sport",
      "baseQuestion": "In welchen drei Ländern findet die FIFA Fußball-Weltmeisterschaft 2026 statt?",
      "baseAnswer": "USA / Kanada / Mexiko",
      "count": 3,
      "ids": [
        "djs2026sp-neu-167",
        "djs2026sp-neu-168",
        "djs2026sp002"
      ]
    },
    {
      "baseId": "djs2026sp003",
      "category": "Sport",
      "baseQuestion": "Wann fanden die Olympischen Winterspiele Milano Cortina 2026 statt?",
      "baseAnswer": "6. bis 22. Februar 2026",
      "count": 3,
      "ids": [
        "djs2026sp003",
        "djs2026sp-neu-169",
        "djs2026sp-neu-170"
      ]
    },
    {
      "baseId": "djs2022sc003",
      "category": "Wirtschaft & Finanzen",
      "baseQuestion": "Welche Wirtschaftsprüfungsgesellschaft war in den Wirecard-Skandal verwickelt?",
      "baseAnswer": "Ernst & Young",
      "count": 3,
      "ids": [
        "djs2022sc003",
        "djs2026wf-neu-173",
        "djs2026wf-neu-174"
      ]
    },
    {
      "baseId": "djs2023sc002",
      "category": "Wirtschaft & Finanzen",
      "baseQuestion": "Welche Kryptobörse meldete 2022 Insolvenz an und löste eine weltweite Kryptokrise aus?",
      "baseAnswer": "FTX",
      "count": 3,
      "ids": [
        "djs2023sc002",
        "djs2026wf-neu-171",
        "djs2026wf-neu-172"
      ]
    },
    {
      "baseId": "djs2025match002",
      "category": "Wirtschaft & Finanzen",
      "baseQuestion": "Ordnen Sie die Kennzahlen der deutschen Wirtschaft (April 2025) den richtigen Werten zu.",
      "baseAnswer": "Schuldenstandsquote → 62,5 Prozent / Arbeitslosenquote → 6,3 Prozent / Inflationsrate → 2,4 Prozent / Wachstum des BIP → 0,2 Prozent",
      "count": 1,
      "ids": [
        "djs2025match002"
      ]
    },
    {
      "baseId": "djs2025wf001",
      "category": "Wirtschaft & Finanzen",
      "baseQuestion": "Auf welchen Wert sank der EZB-Einlagensatz nach den Zinssenkungen im März und Juni 2025?",
      "baseAnswer": "2,0 Prozent",
      "count": 3,
      "ids": [
        "djs2025wf001",
        "djs2026wf-neu-175",
        "djs2026wf-neu-176"
      ]
    },
    {
      "baseId": "djs2025wf002",
      "category": "Wirtschaft & Finanzen",
      "baseQuestion": "Welche Institution schätzte das BIP-Wachstum der Eurozone für das Gesamtjahr 2025 auf plus 1,5 Prozent?",
      "baseAnswer": "Eurostat",
      "count": 3,
      "ids": [
        "djs2025wf002",
        "djs2026wf-neu-177",
        "djs2026wf-neu-178"
      ]
    },
    {
      "baseId": "djs2026eu003",
      "category": "Wirtschaft & Finanzen",
      "baseQuestion": "Wofür steht die Abkürzung CBAM und ab wann gilt sein definitiver Anwendungsrahmen?",
      "baseAnswer": "Carbon Border Adjustment Mechanism, ab Januar 2026",
      "count": 3,
      "ids": [
        "djs2026eu003",
        "djs2026wf-neu-179",
        "djs2026wf-neu-180"
      ]
    },
    {
      "baseId": "djs2026wf001",
      "category": "Wirtschaft & Finanzen",
      "baseQuestion": "Welche Organisation prognostizierte im April 2026 ein Weltwirtschaftswachstum von 3,1 Prozent für 2026?",
      "baseAnswer": "IWF (IMF)",
      "count": 3,
      "ids": [
        "djs2026wf001",
        "djs2026wf-neu-181",
        "djs2026wf-neu-182"
      ]
    },
    {
      "baseId": "djs2026wf002",
      "category": "Wirtschaft & Finanzen",
      "baseQuestion": "Welches BIP-Wachstum prognostizierte die Bundesregierung für Deutschland im Jahr 2026?",
      "baseAnswer": "0,5 Prozent",
      "count": 3,
      "ids": [
        "djs2026wf002",
        "djs2026wf-neu-183",
        "djs2026wf-neu-184"
      ]
    },
    {
      "baseId": "djs2026wf003",
      "category": "Wirtschaft & Finanzen",
      "baseQuestion": "Welche internationale Organisation warnte 2025/26, dass US-Zölle und globale Unsicherheit zu einer atypischen Handelsdynamik mit Vorzieheffekten und anschließendem Einbruch führten?",
      "baseAnswer": "Welthandelsorganisation (WTO)",
      "count": 3,
      "ids": [
        "djs2026wf003",
        "djs2026wf-neu-185",
        "djs2026wf-neu-186"
      ]
    },
    {
      "baseId": "djs2018sc005",
      "category": "Wissenschaft & Technik",
      "baseQuestion": "Was ist CRISPR-Cas9?",
      "baseAnswer": "Eine Genschere zur gezielten Veränderung von DNA",
      "count": 3,
      "ids": [
        "djs2018sc005",
        "djs2026wt-neu-199",
        "djs2026wt-neu-200"
      ]
    },
    {
      "baseId": "djs2019sc005",
      "category": "Wissenschaft & Technik",
      "baseQuestion": "Welcher Konzern durfte in den USA und anderen Ländern nicht am 5G-Ausbau teilnehmen?",
      "baseAnswer": "Huawei",
      "count": 3,
      "ids": [
        "djs2019sc005",
        "djs2026wt-neu-197",
        "djs2026wt-neu-198"
      ]
    },
    {
      "baseId": "djs2022sc008",
      "category": "Wissenschaft & Technik",
      "baseQuestion": "Wo wurde die Omikron-Variante des Coronavirus zuerst nachgewiesen?",
      "baseAnswer": "Südafrika",
      "count": 3,
      "ids": [
        "djs2022sc008",
        "djs2026wt-neu-195",
        "djs2026wt-neu-196"
      ]
    },
    {
      "baseId": "djs2023sc003",
      "category": "Wissenschaft & Technik",
      "baseQuestion": "Was gelang der NASA mit der DART-Sonde?",
      "baseAnswer": "Die Umlaufbahn eines Asteroiden zu verändern",
      "count": 3,
      "ids": [
        "djs2026wt-neu-191",
        "djs2026wt-neu-192",
        "djs2023sc003"
      ]
    },
    {
      "baseId": "djs2023sc004",
      "category": "Wissenschaft & Technik",
      "baseQuestion": "Ab wann hält der Weltklimarat 1,5 Grad Erwärmung ohne zusätzliche Maßnahmen für wahrscheinlich?",
      "baseAnswer": "2030",
      "count": 3,
      "ids": [
        "djs2026wt-neu-193",
        "djs2026wt-neu-194",
        "djs2023sc004"
      ]
    },
    {
      "baseId": "djs2024mc001",
      "category": "Wissenschaft & Technik",
      "baseQuestion": "Welche Länder schafften in den vergangenen 12 Monaten eine Mondlandung? (Mehrere Antworten möglich)",
      "baseAnswer": "Indien / Japan",
      "count": 3,
      "ids": [
        "djs2024mc001",
        "djs2026wt-neu-189",
        "djs2026wt-neu-190"
      ]
    },
    {
      "baseId": "djs2024sc002",
      "category": "Wissenschaft & Technik",
      "baseQuestion": "Wer erhielt 2023 den Wirtschaftsnobelpreis?",
      "baseAnswer": "Claudia Goldin",
      "count": 3,
      "ids": [
        "djs2024sc002",
        "djs2026wt-neu-187",
        "djs2026wt-neu-188"
      ]
    },
    {
      "baseId": "djs2025match003",
      "category": "Wissenschaft & Technik",
      "baseQuestion": "🔵 Ordnen Sie die Konzernchefs, die bei Trumps Vereidigung anwesend waren, ihren Unternehmen zu.",
      "baseAnswer": "Jeff Bezos → Amazon / Tim Cook → Apple / Sundar Pichai → Google / Sam Altman → OpenAI",
      "count": 1,
      "ids": [
        "djs2025match003"
      ]
    },
    {
      "baseId": "djs2025mc003",
      "category": "Wissenschaft & Technik",
      "baseQuestion": "Welche Software-Anwendungen stammen aus Europa und werden als Alternativen zu US-Tools gehandelt? (Mehrere Antworten möglich)",
      "baseAnswer": "DeepL / Threema",
      "count": 1,
      "ids": [
        "djs2025mc003"
      ]
    },
    {
      "baseId": "djs2025sc001",
      "category": "Wissenschaft & Technik",
      "baseQuestion": "Wie lange saßen die NASA-Astronauten Butch Wilmore und Suni Williams auf der ISS fest?",
      "baseAnswer": "9 Monate",
      "count": 1,
      "ids": [
        "djs2025sc001"
      ]
    },
    {
      "baseId": "djs2026sc001",
      "category": "Wissenschaft & Technik",
      "baseQuestion": "Wie heißt die NASA-Mission, die vom 1. bis 10. April 2026 die erste bemannte Mondumrundung seit rund 50 Jahren durchführte?",
      "baseAnswer": "Artemis II",
      "count": 3,
      "ids": [
        "djs2026sc001",
        "djs2026wt-neu-201",
        "djs2026wt-neu-202"
      ]
    }
  ],
  "dataClusters2025_2026": [
    {
      "name": "Bundestagswahl 2025, Regierungsbildung, Koalitionsvertrag",
      "facts": [
        "Bundestagswahl zum 21. Deutschen Bundestag: 23. Februar 2025.",
        "Stärkste Kraft: CDU/CSU; zweitstärkste Kraft: AfD.",
        "Koalitionsvertrag Union/SPD: „Verantwortung für Deutschland“.",
        "Friedrich Merz wurde am 6. Mai 2025 im zweiten Wahlgang zum Bundeskanzler gewählt."
      ],
      "ids": [
        "djs2025dp001",
        "djs2025dp002",
        "djs2025dp003",
        "djs2025dp004",
        "djs2025dp005",
        "djs2026dp-neu-007",
        "djs2026dp-neu-008",
        "djs2026dp-neu-009",
        "djs2026dp-neu-010",
        "djs2026dp-neu-011",
        "djs2026dp-neu-012",
        "djs2026dp-neu-013",
        "djs2026dp-neu-014",
        "djs2026dp-neu-015",
        "djs2026dp-neu-016"
      ],
      "expansion": [
        "Wahltermin",
        "Wahlgang",
        "Kanzlermehrheit",
        "Koalitionsparteien",
        "Vertragstitel",
        "stärkste/zweitstärkste Kraft",
        "Wahlbeteiligung",
        "Sitzverteilung",
        "Erst-/Zweitstimme"
      ]
    },
    {
      "name": "Schuldenbremse, Sondervermögen, Verteidigung 2025/2026",
      "facts": [
        "Grundgesetzänderung März 2025: Spielraum für Verteidigung und Investitionen.",
        "Sondervermögen Infrastruktur und Klimaneutralität: 500 Milliarden Euro.",
        "Verteidigungsausgaben Haushalt 2026 im Datensatz: 108,2 Milliarden Euro.",
        "Brigade Litauen: Stationierung in Litauen, rund 5.000 Soldatinnen und Soldaten."
      ],
      "ids": [
        "djs2025dp006",
        "djs2025dp007",
        "djs2025dp008",
        "djs2025dp009",
        "djs2026dp-neu-017",
        "djs2026dp-neu-018",
        "djs2026dp-neu-019",
        "djs2026dp-neu-020",
        "djs2026dp-neu-021",
        "djs2026dp-neu-022"
      ],
      "expansion": [
        "Artikel 109/115/143h GG",
        "Sondervermögen-Bezeichnung",
        "Volumen",
        "Verwendungszweck",
        "Bund/Länder-Anteil",
        "NATO-Kontext",
        "Bundeswehr-Sonderetat getrennt prüfen"
      ]
    },
    {
      "name": "Verfassungsschutz, AfD, COMPACT, wehrhafte Demokratie",
      "facts": [
        "BfV-Einstufung der AfD am 2. Mai 2025: „gesichert rechtsextremistische Bestrebung“; Erklärung mit Rechtsstand Mai 2026 ergänzen.",
        "COMPACT-Verbot: Bundesverwaltungsgericht als zentrales Gericht; Konflikt Pressefreiheit / wehrhafte Demokratie.",
        "Eine Antwortvariante ist hart zu korrigieren: djs2026dp-neu-028 → nur „wehrhafte Demokratie“."
      ],
      "ids": [
        "djs2025dp010",
        "djs2025dp011",
        "djs2025dp012",
        "djs2025mc004",
        "djs2026dp-neu-023",
        "djs2026dp-neu-024",
        "djs2026dp-neu-025",
        "djs2026dp-neu-026",
        "djs2026dp-neu-027",
        "djs2026dp-neu-028"
      ],
      "expansion": [
        "Historische Einstufung vs. aktueller Rechtsstand",
        "BfV-Begriff exakt",
        "Antragsberechtigte beim Parteiverbot",
        "Art. 5 GG",
        "Art. 9 Abs. 2 GG",
        "Bundesverwaltungsgericht vs. Bundesverfassungsgericht"
      ]
    },
    {
      "name": "EU 2025/2026: Verteidigung, Sanktionen, AI Act, Demokratie, Asyl",
      "facts": [
        "EU-Verteidigungsplan: ReArm Europe/Readiness 2030; Finanzinstrument SAFE.",
        "16. Russland-Sanktionspaket: 24. Februar 2025; 17. Paket: 20. Mai 2025.",
        "European Democracy Shield: November 2025.",
        "AI Act: verbotene Praktiken ab 2. Februar 2025; grundsätzliche Anwendbarkeit ab 2. August 2026, aber gestaffelt und mit Ausnahmen.",
        "EU-Migrations- und Asylpakt: Anwendung ab 12. Juni 2026."
      ],
      "ids": [
        "djs2025eu001",
        "djs2025eu002",
        "djs2025eu003",
        "djs2025eu004",
        "djs2025eu007",
        "djs2026eu001",
        "djs2026eu002",
        "djs2026ip-neu-079",
        "djs2026ip-neu-080",
        "djs2026ip-neu-081",
        "djs2026ip-neu-082",
        "djs2026ip-neu-083",
        "djs2026ip-neu-084",
        "djs2026ip-neu-085",
        "djs2026ip-neu-086",
        "djs2026ip-neu-089",
        "djs2026ip-neu-090",
        "djs2026ip-neu-091",
        "djs2026ip-neu-092",
        "djs2026ip-neu-093",
        "djs2026ip-neu-094",
        "djs2026ip-neu-095",
        "djs2026ip-neu-096"
      ],
      "expansion": [
        "voller Name SAFE",
        "Weißbuch",
        "Sanktionspaketnummern",
        "Datum vs. Inkrafttreten",
        "AI-Act-Stufen",
        "unzulässige KI-Praktiken",
        "Democracy Shield Zweck",
        "Asylpakt Anwendung"
      ]
    },
    {
      "name": "EU-Klima, Schengen, Schuman, Ukraine-Finanzierung",
      "facts": [
        "EU-2040-Klimaziel: minus 90 Prozent Netto-THG gegenüber 1990 als Kommissionsvorschlag 2025; Zeitstand klar markieren.",
        "Rumänien und Bulgarien: ab 1. Januar 2025 vollständig Teil des Schengen-Raums.",
        "Schuman-Erklärung: 75 Jahre am 9. Mai 2025.",
        "Ukraine Facility: 50 Mrd. Euro; zusätzlicher Unterstützungskredit 90 Mrd. Euro für 2026/27."
      ],
      "ids": [
        "djs2025eu008",
        "djs2025eu009",
        "djs2025eu010",
        "djs2025eu013",
        "djs2025eu014",
        "djs2026ip-neu-097",
        "djs2026ip-neu-098",
        "djs2026ip-neu-099",
        "djs2026ip-neu-100",
        "djs2026ip-neu-101",
        "djs2026ip-neu-102"
      ],
      "expansion": [
        "Prozentwert",
        "Basisjahr 1990",
        "Netto-THG",
        "Schengen-Landgrenzen",
        "Europa-Tag",
        "Ukraine-Finanzinstrumente",
        "Beträge und Laufzeiten"
      ]
    },
    {
      "name": "Internationale Ereignisse 2025/2026: USA, Vatikan, WHO, UN, Klima, humanitäre Krisen",
      "facts": [
        "Donald Trump: Vereidigung als 47. Präsident am 20. Januar 2025; Zollanordnung „Reciprocal Tariffs“ am 2. April 2025.",
        "Papst Franziskus starb am 21. April 2025; Robert Francis Prevost nahm am 8. Mai 2025 den Namen Leo XIV. an.",
        "WHO-Pandemieabkommen: angenommen am 20. Mai 2025.",
        "COP30: Belém; NDC 3.0 als Klimapläne; UN80-Gedenktreffen am 22. September 2025.",
        "OCHA: Sudan als größte humanitäre Notlage 2026; UNESCO/UNDP warnten vor KI-Risiken für Wahlen und Meinungsfreiheit."
      ],
      "ids": [
        "djs2025ip001",
        "djs2025ip002",
        "djs2025ip003",
        "djs2025ip004",
        "djs2025ip005",
        "djs2025ip006",
        "djs2025ip007",
        "djs2025ip008",
        "djs2025ip010",
        "djs2025ip011",
        "djs2025ip012",
        "djs2025ip013",
        "djs2025ip014",
        "djs2026ip-neu-107",
        "djs2026ip-neu-108",
        "djs2026ip-neu-109",
        "djs2026ip-neu-110",
        "djs2026ip-neu-111",
        "djs2026ip-neu-112",
        "djs2026ip-neu-113",
        "djs2026ip-neu-114",
        "djs2026ip-neu-115",
        "djs2026ip-neu-116",
        "djs2026ip-neu-117",
        "djs2026ip-neu-118",
        "djs2026ip-neu-119",
        "djs2026ip-neu-120"
      ],
      "expansion": [
        "exakte Datumsfragen",
        "Amtsnamen/Personennamen",
        "Abkürzungen ICC/ICJ/NDC/OCHA/WHO/UNDP/UNESCO",
        "Stadt/Land-Fragen",
        "Konklave-Kontext"
      ]
    },
    {
      "name": "Wirtschaft, Gesellschaft, Wissenschaft, Sport, Kultur 2025/2026",
      "facts": [
        "Mindestlohn 2025: 12,82 Euro; ePA = elektronische Patientenakte.",
        "Iberischer Blackout April 2025: Spanien und Portugal; Erklärung nach ENTSO-E aktualisieren.",
        "AI-/Wissenschafts- und Raumfahrtthemen sowie Sport-Großereignisse 2025/2026 sind im Datensatz angelegt und brauchen feste Quellenfelder.",
        "Kultur/Medien: drei harte Antwortkorrekturen bei Arc de Triomphe, Jaegers Grenze und Echo-Musikpreis."
      ],
      "ids": [
        "djs2025sc002",
        "djs2025sc003",
        "djs2025sc008",
        "djs2026mc-neu-146",
        "djs2026mc-neu-148",
        "djs2026mc-neu-150"
      ],
      "expansion": [
        "Stichtagswerte",
        "Abkürzungen",
        "Ursache vs. unmittelbare Lage",
        "Bauwerk vs. Projekt",
        "Reportagetitel",
        "Preisname"
      ]
    }
  ]
}
```

## 7. Alle Fragen als kompakte Tabelle
|ID|Jahr|Kategorie|Typ|Status|Prio|Variante von|Frage|Antwort|
|---|---|---|---|---|---|---|---|---|
|djs2018sc001|2018|Deutsche Politik|singlechoice|OK|NIEDRIG||Wer sagte: 'Es ist besser, nicht zu regieren, als falsch zu regieren'?|Christian Lindner|
|djs2024sc004|2024|Deutsche Politik|singlechoice|OK|NIEDRIG||Welche Bundestagsfraktion löste sich 2023 auf?|Die Linke|
|djs2025dp001|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||An welchem Datum fand die Bundestagswahl 2025 statt?|23. Februar 2025|
|djs2025dp002|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||Welche Partei wurde bei der Bundestagswahl 2025 stärkste Kraft?|CDU/CSU|
|djs2025dp003|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||Welche Partei wurde bei der Bundestagswahl 2025 zweitstärkste Kraft?|AfD|
|djs2025dp005|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||In welchem Wahlgang wurde Friedrich Merz am 6. Mai 2025 zum Bundeskanzler gewählt?|Zweiten Wahlgang|
|djs2025dp006|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||Wie hoch ist das 2025 beschlossene Sondervermögen für Infrastruktur und Klimaneutralität?|500 Milliarden Euro|
|djs2025dp007|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||Welche verfassungsrechtliche Regelung wurde im März 2025 reformiert, um mehr Spielraum für Verteidigung und Investitionen zu schaffen?|Schuldenbremse|
|djs2025dp008|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||In welchem Land stationiert Deutschland die Brigade Litauen mit rund 5.000 Soldatinnen und Soldaten?|Litauen|
|djs2025dp009|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||Wie hoch sind die geplanten deutschen Verteidigungsausgaben im Haushalt 2026?|108,2 Milliarden Euro|
|djs2025dp010|2025|Deutsche Politik|singlechoice|AKTUALISIEREN|MITTEL||Als was stufte das Bundesamt für Verfassungsschutz die AfD am 2. Mai 2025 ein?|Gesichert rechtsextremistische Bestrebung|
|djs2025dp011|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||Welches Gericht hob 2025 das Verbot des COMPACT-Magazins auf und machte den Fall damit zum Schlüsselthema für Pressefreiheit und wehrhafte Demokratie?|Bundesverwaltungsgericht|
|djs2025dp012|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||Welche zwei Rechtsgüter stehen im Fall des COMPACT-Magazin-Verbots besonders im Konflikt?|Pressefreiheit / Wehrhafte Demokratie|
|djs2025dp013|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||Welches historische Jubiläum wurde in Deutschland am 8. Mai 2025 begangen?|80 Jahre Kriegsende (Ende des Zweiten Weltkriegs)|
|djs2025dp014|2025|Deutsche Politik|singlechoice|OK|NIEDRIG||Welches Jubiläum der Deutschen Einheit wurde im Oktober 2025 gefeiert?|35 Jahre|
|djs2025dp015|2025|Deutsche Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Welche deutsche Behörde erklärte 2025, die deutschen Klimaschutzziele für 2030 seien auf Basis der aktuellen Projektionen grundsätzlich erreichbar?|Umweltbundesamt (UBA)|
|djs2025match004|2025|Deutsche Politik|matching|OK|NIEDRIG||Ordnen Sie die Bundesländer ihren Landesregierungen nach den Wahlen 2024/2025 und den Entwicklungen bis Frühjahr 2026 zu.|Brandenburg → SPD-CDU / Hamburg → SPD-Grüne / Sachsen → CDU-SPD-Minderheitsregierung / Thüringen → CDU-BSW-SPD|
|djs2025mc004|2025|Deutsche Politik|multiplechoice|OK|NIEDRIG||Wer könnte ein AfD-Verbotsverfahren anstrengen? (Mehrere Antworten möglich)|Bundesrat / Bundestag / Bundesregierung|
|djs2026dp-neu-001|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc004|Welche Partei verlor 2023 im Bundestag ihren Fraktionsstatus, nachdem Abgeordnete um Sahra Wagenknecht ausgetreten waren?|Die Linke|
|djs2026dp-neu-002|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc004|Die Gründung des BSW führte dazu, dass eine bisherige Bundestagsfraktion nur noch als Gruppe weiterarbeiten konnte. Welche Partei war betroffen?|Die Linke|
|djs2026dp-neu-003|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023mc003|Welche zwei Ampel-Vorhaben standen besonders für die Koalitionsstreitigkeiten um Klima- und Sozialpolitik?|Gebäudeenergiegesetz und Kindergrundsicherung|
|djs2026dp-neu-004|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023mc003|In der Ampel-Regierung prallten Finanzierung, Klimaschutz und Sozialpolitik besonders bei welchen Reformprojekten aufeinander?|Gebäudeenergiegesetz und Kindergrundsicherung|
|djs2026dp-neu-005|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2018sc001|Wer begründete den Abbruch der Jamaika-Sondierungen mit dem Satz, nicht falsch regieren zu wollen?|Christian Lindner|
|djs2026dp-neu-006|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2018sc001|Der Satz „Lieber nicht regieren als falsch regieren“ wurde 2017 zum politischen Markenzeichen welches FDP-Politikers?|Christian Lindner|
|djs2026dp-neu-007|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp001|An welchem Tag wurde nach dem Bruch der Ampelkoalition der 21. Deutsche Bundestag gewählt?|23. Februar 2025|
|djs2026dp-neu-008|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp001|Die vorgezogene Bundestagswahl nach Vertrauensfrage und Auflösung des Bundestags fiel auf welches Datum?|23. Februar 2025|
|djs2026dp-neu-009|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp002|Welche Parteiengemeinschaft lag bei der Bundestagswahl 2025 vor AfD und SPD auf Platz eins?|CDU/CSU|
|djs2026dp-neu-010|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp002|Aus der vorgezogenen Bundestagswahl 2025 ging welche politische Kraft als stärkste hervor?|CDU/CSU|
|djs2026dp-neu-011|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp003|Welche Partei erreichte bei der Bundestagswahl 2025 den zweiten Platz hinter CDU/CSU?|AfD|
|djs2026dp-neu-012|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp003|Das beste Bundestagswahlergebnis ihrer Geschichte machte welche Partei 2025 zur zweitstärksten Kraft?|AfD|
|djs2026dp-neu-013|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp004|Wie lautete der programmatische Titel des Koalitionsvertrags von CDU/CSU und SPD im Jahr 2025?|Verantwortung für Deutschland|
|djs2026dp-neu-014|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp004|Unter welchem Titel stellten Union und SPD 2025 ihren Regierungsvertrag vor?|Verantwortung für Deutschland|
|djs2026dp-neu-015|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp005|In welchem Wahlgang erhielt Friedrich Merz am 6. Mai 2025 die Kanzlermehrheit?|Zweiter Wahlgang|
|djs2026dp-neu-016|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp005|Der erste Wahlgang scheiterte, erst danach wurde Merz gewählt: Welcher Wahlgang war entscheidend?|Zweiter Wahlgang|
|djs2026dp-neu-017|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp006|Welches Volumen hat das 2025 beschlossene Sondervermögen für Infrastruktur und Klimaneutralität?|500 Milliarden Euro|
|djs2026dp-neu-018|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp006|Die Investitionsoffensive für marode Infrastruktur und Klimaneutralität wurde 2025 auf welchen Höchstbetrag angelegt?|500 Milliarden Euro|
|djs2026dp-neu-019|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp007|Welche im Grundgesetz verankerte Fiskalregel wurde 2025 für Verteidigung und Investitionen gelockert?|Schuldenbremse|
|djs2026dp-neu-020|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp007|Die Grundgesetzänderung im März 2025 betraf welches zentrale Instrument deutscher Haushaltspolitik?|Schuldenbremse|
|djs2026dp-neu-021|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp009|Auf welchen Betrag sollten die deutschen Verteidigungsausgaben im Haushalt 2026 steigen?|108,2 Milliarden Euro|
|djs2026dp-neu-022|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp009|Die Zeitenwende schlug sich im Haushalt 2026 in welcher geplanten Verteidigungsausgaben-Summe nieder?|108,2 Milliarden Euro|
|djs2026dp-neu-023|2026|Deutsche Politik|kurzantwort|AKTUALISIEREN|MITTEL|djs2025dp010|Welche Beobachtungsstufe verwendete das Bundesamt für Verfassungsschutz 2025 für die AfD?|Gesichert rechtsextremistische Bestrebung|
|djs2026dp-neu-024|2026|Deutsche Politik|kurzantwort|AKTUALISIEREN|MITTEL|djs2025dp010|Wie lautet der präzise verfassungsschutzrechtliche Begriff für die AfD-Einstufung vom 2. Mai 2025?|Gesichert rechtsextremistische Bestrebung|
|djs2026dp-neu-025|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp011|Welches Gericht war für das Hauptverfahren um das COMPACT-Verbot zentral?|Bundesverwaltungsgericht|
|djs2026dp-neu-026|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp011|Der Streit um Vereinsverbot und Pressefreiheit bei COMPACT lag 2025 vor welchem obersten Bundesgericht?|Bundesverwaltungsgericht|
|djs2026dp-neu-027|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp012|Welche beiden Prinzipien standen beim COMPACT-Verbot besonders gegeneinander?|Pressefreiheit und wehrhafte Demokratie|
|djs2026dp-neu-028|2026|Deutsche Politik|kurzantwort|TEILWEISE_FALSCH|HOCH|djs2025dp012|Der COMPACT-Fall wurde zum Testfall zwischen Art. 5 GG und welchem demokratischen Schutzkonzept?|Pressefreiheit und wehrhafte Demokratie|
|djs2026dp-neu-029|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp013|Welcher runde Jahrestag wurde in Deutschland am 8. Mai 2025 begangen?|80 Jahre Kriegsende|
|djs2026dp-neu-030|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp013|Der 8. Mai 2025 erinnerte an welches Ereignis vor acht Jahrzehnten?|80 Jahre Kriegsende|
|djs2026dp-neu-031|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp014|Zum wievielten Mal jährte sich die Deutsche Einheit am 3. Oktober 2025?|35 Jahre|
|djs2026dp-neu-032|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp014|Das Jahr 2025 markierte welches Jubiläum der Wiedervereinigung von 1990?|35 Jahre|
|djs2026dp-neu-033|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp015|Welche Bundesbehörde bewertete 2025 die deutschen Klimaziele für 2030 als grundsätzlich erreichbar?|Umweltbundesamt (UBA)|
|djs2026dp-neu-034|2026|Deutsche Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025dp015|Die offiziellen Emissionsprojektionen, nach denen das 2030-Ziel noch erreichbar sei, kamen von welcher Umweltbehörde?|Umweltbundesamt (UBA)|
|djs2023mc003|2023|Deutsche Politik|multiplechoice|OK_MIT_HINWEIS|NIEDRIG||Über welche Reformvorhaben stritt die Ampelkoalition? (Mehrere Antworten möglich)|Gebäudeenergiegesetz / Kindergrundsicherung|
|djs2025dp004|2025|Deutsche Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Wie lautet der Titel des Koalitionsvertrags, den CDU/CSU und SPD 2025 unterzeichnet haben?|Verantwortung für Deutschland|
|djs2025sc002|2025|Deutsche Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Auf welchen Betrag stieg der deutsche Mindeststundenlohn zum 1. Januar 2025?|12,82 Euro|
|djs2025sc003|2025|Deutsche Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Wofür steht die Abkürzung ePA?|Elektronische Patientenakte|
|djs2018sc003|2018|Internationale Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Welche Volksgruppe wurde laut UN Ziel ethnischer Säuberungen in Myanmar?|Rohingya|
|djs2019sc003|2019|Internationale Politik|singlechoice|OK|NIEDRIG||Was sollte der Brexit-'Backstop' verhindern?|Eine harte Grenze zwischen Irland und Nordirland|
|djs2022sc005|2022|Internationale Politik|singlechoice|OK|NIEDRIG||Welches Land zwang 2021 eine Ryanair-Maschine zur Landung, um einen Blogger festzunehmen?|Belarus|
|djs2022sc007|2022|Internationale Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Welches Land führte Bitcoin als offizielles Zahlungsmittel ein?|El Salvador|
|djs2023sc001|2023|Internationale Politik|singlechoice|OK|NIEDRIG||Welches Land trat im April 2023 der NATO bei?|Finnland|
|djs2023sc007|2023|Internationale Politik|singlechoice|OK|NIEDRIG||Welches Land führte am 1. Januar 2023 als 20. Land den Euro ein?|Kroatien|
|djs2023sc008|2023|Internationale Politik|singlechoice|OK|NIEDRIG||Wo regierte nach der Wahl 2022 ein Rechtsbündnis mit einer postfaschistischen Regierungschefin?|Italien|
|djs2024mc002|2024|Internationale Politik|multiplechoice|OK|NIEDRIG||Welche Länder traten am 1. Januar 2024 den BRICS-Staaten bei? (Mehrere Antworten möglich)|Ägypten / Vereinigte Arabische Emirate|
|djs2024sc003|2024|Internationale Politik|singlechoice|OK|NIEDRIG||Welcher britische Politiker feierte 2023 ein spektakuläres politisches Comeback?|David Cameron|
|djs2024sc005|2024|Internationale Politik|singlechoice|OK|NIEDRIG||Wie alt war US-Präsident Joe Biden zum Zeitpunkt seiner Kandidatur-Ankündigung für 2024?|80|
|djs2024sc009|2024|Internationale Politik|singlechoice|OK|NIEDRIG||Welches Land marschierte 2023 in Berg-Karabach ein und kontrolliert es seitdem?|Aserbaidschan|
|djs2025eu001|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Wie heißt der EU-Verteidigungsplan, der am 19. März 2025 vorgestellt wurde?|ReArm Europe/Readiness 2030|
|djs2025eu002|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Welches Finanzinstrument ist der erste Pfeiler des EU-Plans ReArm Europe/Readiness 2030?|SAFE|
|djs2025eu003|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Welches EU-Sanktionspaket gegen Russland wurde am 24. Februar 2025 beschlossen?|16. Paket|
|djs2025eu004|2025|Internationale Politik|singlechoice|OK|NIEDRIG||An welchem Datum beschloss die EU das 17. Sanktionspaket gegen Russland?|20. Mai 2025|
|djs2025eu007|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Wie heißt das EU-Paket gegen Desinformation und ausländische Einflussnahme, das im November 2025 vorgestellt wurde?|European Democracy Shield|
|djs2025eu008|2025|Internationale Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Welches 2040-Klimaziel schlug die EU-Kommission im Juli 2025 für das überarbeitete EU-Klimagesetz vor?|Minus 90 Prozent Netto-THG gegenüber 1990|
|djs2025eu009|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Welche zwei Länder wurden ab 1. Januar 2025 vollständig Teil des Schengen-Raums?|Rumänien / Bulgarien|
|djs2025eu010|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Welches Jubiläum der Schuman-Erklärung wurde am Europa-Tag, dem 9. Mai 2025, gefeiert?|75 Jahre|
|djs2025eu011|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Wer ist seit Dezember 2024 die Hohe Vertreterin der EU für Außen- und Sicherheitspolitik?|Kaja Kallas|
|djs2025eu012|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Wer ist seit Dezember 2024 Präsident des Europäischen Rates?|António Costa|
|djs2025eu013|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Wie hoch ist das Gesamtvolumen der EU Ukraine Facility, die der Ukraine bis 2027 finanzielle Unterstützung sichert?|50 Milliarden Euro|
|djs2025eu014|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Welches zusätzliche EU-Finanzinstrument für die Ukraine wurde im Dezember 2025 beschlossen und im April 2026 legislativ finalisiert?|Ein Unterstützungskredit von 90 Milliarden Euro für 2026/27|
|djs2025ip001|2025|Internationale Politik|singlechoice|OK|NIEDRIG||An welchem Datum wurde Donald Trump als 47. Präsident der USA vereidigt?|20. Januar 2025|
|djs2025ip002|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Wie nennt sich die am 2. April 2025 von Trump erlassene Zollanordnung?|Reciprocal Tariffs|
|djs2025ip003|2025|Internationale Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Wann starb Papst Franziskus?|21. April 2025|
|djs2025ip004|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Welchen Papstnamen nahm Robert Francis Prevost nach seiner Wahl am 8. Mai 2025 an?|Leo XIV.|
|djs2025ip005|2025|Internationale Politik|singlechoice|OK|NIEDRIG||An welchem Datum nahm die Weltgesundheitsversammlung das WHO-Pandemieabkommen an?|20. Mai 2025|
|djs2025ip006|2025|Internationale Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||In welcher Stadt fand die UN-Klimakonferenz COP30 statt?|Belém|
|djs2025ip007|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Wie werden die 2025 fälligen nationalen Klimapläne der UN-Mitgliedstaaten abgekürzt?|NDC 3.0|
|djs2025ip008|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Wann fand das hochrangige Gedenktreffen anlässlich des 80. Jahrestags der Vereinten Nationen statt?|22. September 2025|
|djs2025ip010|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Welcher Staat verhängte am 6. Februar 2025 Sanktionen gegen den Internationalen Strafgerichtshof (ICC)?|USA|
|djs2025ip011|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Was ist der Unterschied zwischen ICC und ICJ?|ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Streitigkeiten zwischen Staaten|
|djs2025ip012|2025|Internationale Politik|singlechoice|OK|NIEDRIG||Welcher Konflikt gilt laut OCHA als die weltweit größte humanitäre Notlage im Jahr 2026?|Sudan|
|djs2025ip013|2025|Internationale Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Welche zwei UN-Organisationen warnten 2025 gemeinsam vor KI-Risiken für Wahlen und Meinungsfreiheit?|UNESCO und UNDP|
|djs2025ip014|2025|Internationale Politik|singlechoice|OK|NIEDRIG||In welchem Land spricht OCHA 2025/26 von einer eskalierenden Gewaltsituation im Osten des Landes, die oft als 'unterberichteter Konflikt' gilt?|Demokratische Republik Kongo|
|djs2025mc005|2025|Internationale Politik|multiplechoice|OK|NIEDRIG||Welche Personen kamen beim großen Gefangenenaustausch zwischen Russland und dem Westen frei? (Mehrere Antworten möglich)|Rico Krieger / Vadim Krassikov / Evan Gershkovich|
|djs2025sc006|2025|Internationale Politik|singlechoice|OK|NIEDRIG||In welchem Land scheiterte im Dezember 2024 ein Staatsstreich des amtierenden Präsidenten – bei Neuwahlen 2025 durfte er nicht mehr antreten?|Südkorea|
|djs2025sc007|2025|Internationale Politik|singlechoice|OK|NIEDRIG||In welchem Land löste die Verhaftung des Bürgermeisters der größten Stadt 2025 massive Proteste aus?|Türkei|
|djs2025sc008|2025|Internationale Politik|singlechoice|AKTUALISIEREN|MITTEL||In welchen Ländern führte ein Blackout im April 2025 fast einen ganzen Tag lang zu massivem Stromausfall?|Spanien und Portugal|
|djs2026ip-neu-055|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc003|Welcher frühere britische Premier kehrte 2023 überraschend als Außenminister zurück?|David Cameron|
|djs2026ip-neu-056|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc003|Rishi Sunak holte welchen Brexit-Referendums-Premier 2023 in die Regierung zurück?|David Cameron|
|djs2026ip-neu-057|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc005|Wie alt war Joe Biden, als sein Alter im Wahlkampf 2024 zum zentralen Thema wurde?|81|
|djs2026ip-neu-058|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc005|Die Debatte um Bidens Amtsfähigkeit kreiste 2024 um einen Präsidenten welchen Alters?|81|
|djs2026ip-neu-059|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024mc002|Welche zwei der genannten Staaten traten zum 1. Januar 2024 der BRICS-Gruppe bei?|Ägypten und Vereinigte Arabische Emirate|
|djs2026ip-neu-060|2026|Internationale Politik|kurzantwort|TEILWEISE_FALSCH|HOCH|djs2024mc002|Die BRICS-Erweiterung 2024 umfasste unter anderem Ägypten und welches Golf-Land?|Ägypten und Vereinigte Arabische Emirate|
|djs2026ip-neu-061|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc009|Welcher Staat übernahm 2023 nach einer Blitzoffensive die Kontrolle über Berg-Karabach?|Aserbaidschan|
|djs2026ip-neu-062|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc009|Die armenische Bevölkerung floh 2023 fast vollständig aus Berg-Karabach nach dem Angriff welchen Landes?|Aserbaidschan|
|djs2026ip-neu-063|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc001|Welches nordische Land wurde im April 2023 das 31. NATO-Mitglied?|Finnland|
|djs2026ip-neu-064|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc001|Russlands Angriff auf die Ukraine beschleunigte den NATO-Beitritt welchen Landes mit langer Russlandgrenze?|Finnland|
|djs2026ip-neu-065|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023mc002|In welchen drei Ländern kam es 2022 zu Regierungswechseln, die 2023 prüfungsrelevant waren?|Australien, Brasilien und Kolumbien|
|djs2026ip-neu-066|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023mc002|Albanese, Lula und Petro stehen für Regierungswechsel in welchen Staaten?|Australien, Brasilien und Kolumbien|
|djs2026ip-neu-067|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc007|Welcher EU-Staat führte am 1. Januar 2023 als 20. Land den Euro ein?|Kroatien|
|djs2026ip-neu-068|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc007|Kuna raus, Euro rein: Welches Land wechselte 2023 in die Eurozone?|Kroatien|
|djs2026ip-neu-069|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc008|In welchem Land wurde Giorgia Meloni nach der Wahl 2022 Regierungschefin eines Rechtsbündnisses?|Italien|
|djs2026ip-neu-070|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc008|Die Fratelli d'Italia mit postfaschistischen Wurzeln kamen 2022 in welchem EU-Land an die Regierung?|Italien|
|djs2026ip-neu-071|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc005|Welches Land zwang 2021 ein Ryanair-Flugzeug zur Landung, um Roman Protassewitsch festzunehmen?|Belarus|
|djs2026ip-neu-072|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc005|Die erzwungene Landung einer Maschine auf dem Weg nach Vilnius wird welchem autoritären Staat zugeschrieben?|Belarus|
|djs2026ip-neu-073|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc007|Welches Land führte Bitcoin 2021 als gesetzliches Zahlungsmittel ein?|El Salvador|
|djs2026ip-neu-074|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc007|Das Bitcoin-Experiment von Präsident Nayib Bukele begann in welchem mittelamerikanischen Staat?|El Salvador|
|djs2026ip-neu-075|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2019sc003|Was sollte der Brexit-Backstop im Kern verhindern?|Eine harte Grenze zwischen Irland und Nordirland|
|djs2026ip-neu-076|2026|Internationale Politik|kurzantwort|TEILWEISE_FALSCH|HOCH|djs2019sc003|Die Backstop-Debatte drehte sich um die offene Grenze zwischen der Republik Irland und welchem britischen Landesteil?|Eine harte Grenze zwischen Irland und Nordirland|
|djs2026ip-neu-077|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2018sc003|Welche muslimische Minderheit wurde laut UN in Myanmar Ziel ethnischer Säuberungen?|Rohingya|
|djs2026ip-neu-078|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2018sc003|Die Massenflucht nach Bangladesch 2017 betraf welche Volksgruppe aus Myanmar?|Rohingya|
|djs2026ip-neu-079|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu001|Wie heißt der 2025 vorgestellte EU-Verteidigungsplan zur Stärkung der Einsatzbereitschaft?|ReArm Europe/Readiness 2030|
|djs2026ip-neu-080|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu001|Unter welchem Namen bündelte die EU-Kommission 2025 ihr Weißbuch zur europäischen Verteidigung?|ReArm Europe/Readiness 2030|
|djs2026ip-neu-081|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu002|Welches Finanzinstrument bildet den ersten Pfeiler von ReArm Europe/Readiness 2030?|SAFE|
|djs2026ip-neu-082|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu002|Die EU-Darlehen für gemeinsame Verteidigungsbeschaffung laufen unter welcher Abkürzung?|SAFE|
|djs2026ip-neu-083|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu003|Welches EU-Sanktionspaket gegen Russland wurde am dritten Jahrestag des Angriffs auf die Ukraine beschlossen?|16. Paket|
|djs2026ip-neu-084|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu003|Am 24. Februar 2025 verabschiedete die EU welches nummerierte Russland-Sanktionspaket?|16. Paket|
|djs2026ip-neu-085|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu004|An welchem Datum beschloss die EU ihr 17. Sanktionspaket gegen Russland?|20. Mai 2025|
|djs2026ip-neu-086|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu004|Das 17. Russland-Sanktionspaket der EU folgte im Mai 2025: an welchem Tag?|20. Mai 2025|
|djs2026ip-neu-087|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu005|Wie heißt das industriepolitische EU-Projekt, das Klimaschutz und Wettbewerbsfähigkeit verbinden soll?|Clean Industrial Deal|
|djs2026ip-neu-088|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu005|Die Kommission reagierte 2025 auf Industriekritik am Green Deal mit welchem neuen Deal?|Clean Industrial Deal|
|djs2026ip-neu-089|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026eu001|Ab welchem Datum soll der EU-Migrations- und Asylpakt vollständig angewendet werden?|12. Juni 2026|
|djs2026ip-neu-090|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026eu001|Die praktische Anwendung der großen EU-Asylreform beginnt an welchem Tag im Juni 2026?|12. Juni 2026|
|djs2026ip-neu-091|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu006|Ab wann greifen im EU AI Act die Verbote für unzulässige KI-Praktiken?|2. Februar 2025|
|djs2026ip-neu-092|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu006|Social Scoring und bestimmte biometrische Echtzeitüberwachung sind nach dem AI Act ab welchem Datum verboten?|2. Februar 2025|
|djs2026ip-neu-093|2026|Internationale Politik|kurzantwort|AKTUALISIEREN|MITTEL|djs2026eu002|Ab welchem Datum soll der EU AI Act grundsätzlich vollständig anwendbar sein?|2. August 2026|
|djs2026ip-neu-094|2026|Internationale Politik|kurzantwort|AKTUALISIEREN|MITTEL|djs2026eu002|Die gestaffelte Umsetzung des AI Act erreicht ihre Gesamtgeltung an welchem Datum?|2. August 2026|
|djs2026ip-neu-095|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu007|Wie nennt die EU ihr 2025 vorgestelltes Paket gegen Desinformation und ausländische Einflussnahme?|European Democracy Shield|
|djs2026ip-neu-096|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu007|Der Schutz demokratischer Prozesse vor Einflussoperationen firmiert bei der EU unter welchem englischen Namen?|European Democracy Shield|
|djs2026ip-neu-097|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu008|Welches 2040-Klimaziel schlug die EU-Kommission 2025 für das Klimagesetz vor?|Minus 90 Prozent Netto-THG gegenüber 1990|
|djs2026ip-neu-098|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu008|Auf welchen Netto-Reduktionswert gegenüber 1990 soll die EU bis 2040 zusteuern?|Minus 90 Prozent Netto-THG gegenüber 1990|
|djs2026ip-neu-099|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu009|Welche zwei Länder wurden am 1. Januar 2025 vollständig in den Schengen-Raum integriert?|Rumänien und Bulgarien|
|djs2026ip-neu-100|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu009|Für welche beiden EU-Staaten entfielen Anfang 2025 auch die Landgrenzkontrollen im Schengen-System?|Rumänien und Bulgarien|
|djs2026ip-neu-101|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu010|Welches Jubiläum der Schuman-Erklärung wurde am Europa-Tag 2025 gefeiert?|75 Jahre|
|djs2026ip-neu-102|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu010|Der 9. Mai 2025 erinnerte an wie viele Jahre europäische Integration seit Robert Schumans Erklärung?|75 Jahre|
|djs2026ip-neu-103|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu011|Wer ist seit Dezember 2024 Hohe Vertreterin der EU für Außen- und Sicherheitspolitik?|Kaja Kallas|
|djs2026ip-neu-104|2026|Internationale Politik|kurzantwort|TEILWEISE_FALSCH|HOCH|djs2025eu011|Die frühere estnische Premierministerin übernahm 2024 welches EU-Außenamt?|Kaja Kallas|
|djs2026ip-neu-105|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu012|Wer löste Charles Michel Ende 2024 als Präsident des Europäischen Rates ab?|António Costa|
|djs2026ip-neu-106|2026|Internationale Politik|kurzantwort|TEILWEISE_FALSCH|HOCH|djs2025eu012|Der frühere portugiesische Premier leitet seit Dezember 2024 welche EU-Institution?|António Costa|
|djs2026ip-neu-107|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip002|Unter welchem Namen verkündete Trump am 2. April 2025 seine Gegenzollpolitik?|Reciprocal Tariffs|
|djs2026ip-neu-108|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip002|Die von Trump als „Liberation Day“ inszenierte Zollanordnung wurde wie bezeichnet?|Reciprocal Tariffs|
|djs2026ip-neu-109|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip003|An welchem Datum starb Papst Franziskus im Vatikan?|21. April 2025|
|djs2026ip-neu-110|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip003|Der Tod von Jorge Mario Bergoglio löste 2025 das Konklave aus: an welchem Tag starb er?|21. April 2025|
|djs2026ip-neu-111|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip004|Welchen Papstnamen wählte Robert Francis Prevost nach seiner Wahl?|Leo XIV.|
|djs2026ip-neu-112|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip004|Der erste US-amerikanische Papst trat 2025 unter welchem Namen auf?|Leo XIV.|
|djs2026ip-neu-113|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip005|Wann nahm die Weltgesundheitsversammlung das WHO-Pandemieabkommen an?|20. Mai 2025|
|djs2026ip-neu-114|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip005|Das erste globale Pandemieabkommen wurde bei der WHO an welchem Datum beschlossen?|20. Mai 2025|
|djs2026ip-neu-115|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip006|In welcher brasilianischen Stadt fand die COP30 statt?|Belém|
|djs2026ip-neu-116|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip006|Die Klimakonferenz 2025 wurde symbolisch in der Nähe des Amazonas ausgerichtet: in welcher Stadt?|Belém|
|djs2026ip-neu-117|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip007|Wie lautet die Abkürzung für die 2025 fällige dritte Runde nationaler Klimaschutzbeiträge?|NDC 3.0|
|djs2026ip-neu-118|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip007|Die neuen Klimapläne im Pariser Abkommen werden als welche Version der NDCs bezeichnet?|NDC 3.0|
|djs2026ip-neu-119|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip008|Wann fand das hochrangige UN80-Gedenktreffen in New York statt?|22. September 2025|
|djs2026ip-neu-120|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip008|Das Jubiläumstreffen zum 80. Geburtstag der Vereinten Nationen lag an welchem Datum der UN-Generalversammlung?|22. September 2025|
|djs2026ip-neu-121|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip009|In welchen beiden Städten wurde 2025 der 80. Jahrestag der Atombombenabwürfe begangen?|Hiroshima und Nagasaki|
|djs2026ip-neu-122|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip009|Der 6. und 9. August 2025 standen in Japan im Zeichen des Gedenkens in welchen Städten?|Hiroshima und Nagasaki|
|djs2026ip-neu-123|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip010|Welcher Staat verhängte im Februar 2025 Sanktionen gegen den Internationalen Strafgerichtshof?|USA|
|djs2026ip-neu-124|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip010|Die Sanktionen gegen ICC-Personal wegen Verfahren gegen Verbündete kamen 2025 von welchem Land?|USA|
|djs2026ip-neu-125|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip011|Wie unterscheidet sich der Internationale Strafgerichtshof vom Internationalen Gerichtshof?|ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Staatenstreitigkeiten|
|djs2026ip-neu-126|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip011|Welches Gericht verfolgt Individuen wegen Kriegsverbrechen, und welches entscheidet Streitigkeiten zwischen Staaten?|ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Staatenstreitigkeiten|
|djs2026ip-neu-127|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip012|Welcher Konflikt gilt laut OCHA als größte humanitäre Notlage für 2026?|Sudan|
|djs2026ip-neu-128|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip012|Welche Krise übertraf 2026 in OCHA-Einschätzungen andere humanitäre Lagen wie Gaza oder Ukraine?|Sudan|
|djs2026ip-neu-129|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip013|Welche zwei UN-Organisationen warnten 2025 vor KI-Risiken für Wahlen und Meinungsfreiheit?|UNESCO und UNDP|
|djs2026ip-neu-130|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip013|Deepfakes, Informationsfreiheit und Wahlbeeinflussung wurden 2025 gemeinsam von welchen UN-Organisationen thematisiert?|UNESCO und UNDP|
|djs2026ip-neu-131|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu013|Welches Volumen hat die EU Ukraine Facility bis 2027?|50 Milliarden Euro|
|djs2026ip-neu-132|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu013|Die zentrale EU-Finanzhilfe für Reform, Wiederaufbau und Stabilisierung der Ukraine umfasst bis zu welchen Betrag?|50 Milliarden Euro|
|djs2026ip-neu-133|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu014|Welches zusätzliche EU-Finanzinstrument für die Ukraine wurde Ende 2025 beschlossen?|Unterstützungskredit von 90 Milliarden Euro für 2026/27|
|djs2026ip-neu-134|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025eu014|Neben der Ukraine Facility stand 2026 welches neue Kreditinstrument für Kiew im Mittelpunkt?|Unterstützungskredit von 90 Milliarden Euro für 2026/27|
|djs2026ip-neu-135|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip014|Welches Land gilt wegen der Gewalt im Osten 2025/26 als besonders unterberichteter Krisenfall?|Demokratische Republik Kongo|
|djs2026ip-neu-136|2026|Internationale Politik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025ip014|M23, Nord-Kivu und massive Binnenvertreibung verweisen auf welchen zentralafrikanischen Staat?|Demokratische Republik Kongo|
|djs2023mc002|2023|Internationale Politik|multiplechoice|OK_MIT_HINWEIS|MITTEL||In welchen Ländern wechselte in den vergangenen 12 Monaten die Regierung? (Mehrere Antworten möglich)|Australien / Brasilien / Kolumbien|
|djs2025eu005|2025|Internationale Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Wie heißt das industriepolitische Leitprojekt der EU-Kommission, das am 26. Februar 2025 vorgestellt wurde?|Clean Industrial Deal|
|djs2025eu006|2025|Internationale Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Ab welchem Datum greifen im EU AI Act die Verbote verbotener KI-Praktiken?|2. Februar 2025|
|djs2025ip009|2025|Internationale Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||In welchen japanischen Städten wurden 2025 die 80. Jahrestage der Atombombenabwürfe begangen?|Hiroshima / Nagasaki|
|djs2025sc010|2025|Internationale Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||In welchem Land ist seit April 2025 eine Brigade der Bundeswehr dauerhaft stationiert?|Litauen|
|djs2026eu001|2026|Internationale Politik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Ab welchem Datum beginnt die Anwendung des EU-Migrations- und Asylpakts?|12. Juni 2026|
|djs2026eu002|2026|Internationale Politik|singlechoice|AKTUALISIEREN|MITTEL||Ab welchem Datum soll der EU AI Act vollständig anwendbar sein?|2. August 2026|
|djs2022sc003|2022|Wirtschaft & Finanzen|singlechoice|OK|NIEDRIG||Welche Wirtschaftsprüfungsgesellschaft war in den Wirecard-Skandal verwickelt?|Ernst & Young|
|djs2023sc002|2023|Wirtschaft & Finanzen|singlechoice|OK|NIEDRIG||Welche Kryptobörse meldete 2022 Insolvenz an und löste eine weltweite Kryptokrise aus?|FTX|
|djs2025match002|2025|Wirtschaft & Finanzen|matching|OK|NIEDRIG||Ordnen Sie die Kennzahlen der deutschen Wirtschaft (April 2025) den richtigen Werten zu.|Schuldenstandsquote → 62,5 Prozent / Arbeitslosenquote → 6,3 Prozent / Inflationsrate → 2,4 Prozent / Wachstum des BIP → 0,2 Prozent|
|djs2025wf001|2025|Wirtschaft & Finanzen|singlechoice|OK|NIEDRIG||Auf welchen Wert sank der EZB-Einlagensatz nach den Zinssenkungen im März und Juni 2025?|2,0 Prozent|
|djs2025wf002|2025|Wirtschaft & Finanzen|singlechoice|OK|NIEDRIG||Welche Institution schätzte das BIP-Wachstum der Eurozone für das Gesamtjahr 2025 auf plus 1,5 Prozent?|Eurostat|
|djs2026eu003|2026|Wirtschaft & Finanzen|singlechoice|OK|NIEDRIG||Wofür steht die Abkürzung CBAM und ab wann gilt sein definitiver Anwendungsrahmen?|Carbon Border Adjustment Mechanism, ab Januar 2026|
|djs2026wf001|2026|Wirtschaft & Finanzen|singlechoice|OK|NIEDRIG||Welche Organisation prognostizierte im April 2026 ein Weltwirtschaftswachstum von 3,1 Prozent für 2026?|IWF (IMF)|
|djs2026wf002|2026|Wirtschaft & Finanzen|singlechoice|OK|NIEDRIG||Welches BIP-Wachstum prognostizierte die Bundesregierung für Deutschland im Jahr 2026?|0,5 Prozent|
|djs2026wf003|2026|Wirtschaft & Finanzen|singlechoice|OK|NIEDRIG||Welche internationale Organisation warnte 2025/26, dass US-Zölle und globale Unsicherheit zu einer atypischen Handelsdynamik mit Vorzieheffekten und anschließendem Einbruch führten?|Welthandelsorganisation (WTO)|
|djs2026wf-neu-171|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc002|Welche Kryptobörse brach 2022 zusammen und löste eine Vertrauenskrise im Kryptomarkt aus?|FTX|
|djs2026wf-neu-172|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc002|Der Betrugsfall um Sam Bankman-Fried betraf welche Handelsplattform?|FTX|
|djs2026wf-neu-173|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc003|Welche Wirtschaftsprüfungsgesellschaft testierte jahrelang Wirecards Bilanzen?|Ernst & Young|
|djs2026wf-neu-174|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc003|Der Wirecard-Skandal brachte vor allem welche Prüfungsgesellschaft in Erklärungsnot?|Ernst & Young|
|djs2026wf-neu-175|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025wf001|Auf welchen Wert fiel der EZB-Einlagensatz nach den Zinssenkungen im März und Juni 2025?|2,0 Prozent|
|djs2026wf-neu-176|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025wf001|Der Zinssenkungszyklus der EZB brachte den Einlagensatz bis Juni 2025 auf welches Niveau?|2,0 Prozent|
|djs2026wf-neu-177|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025wf002|Welche Institution veröffentlichte die Schätzung eines Eurozonen-BIP-Wachstums von 1,5 Prozent für 2025?|Eurostat|
|djs2026wf-neu-178|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025wf002|Bei offiziellen EU-Wirtschaftsdaten ist welche Statistikbehörde für Eurozonen-Schätzungen zentral?|Eurostat|
|djs2026wf-neu-179|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026eu003|Wofür steht CBAM, und ab wann gilt die definitive Phase?|Carbon Border Adjustment Mechanism, ab Januar 2026|
|djs2026wf-neu-180|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026eu003|Das EU-Grenzausgleichsinstrument für CO2-intensive Importe heißt wie und startet vollständig wann?|Carbon Border Adjustment Mechanism, ab Januar 2026|
|djs2026wf-neu-181|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026wf001|Welche Organisation prognostizierte im April 2026 ein Weltwirtschaftswachstum von 3,1 Prozent?|IWF (IMF)|
|djs2026wf-neu-182|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026wf001|Die globale Wachstumsprognose von 3,1 Prozent für 2026 kam von welcher Finanzinstitution?|IWF (IMF)|
|djs2026wf-neu-183|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026wf002|Welches BIP-Wachstum erwartete die Bundesregierung im Frühjahr 2026 für Deutschland?|0,5 Prozent|
|djs2026wf-neu-184|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026wf002|Die deutsche Konjunkturprognose der Bundesregierung lag 2026 bei welchem schwachen Plus?|0,5 Prozent|
|djs2026wf-neu-185|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026wf003|Welche Organisation beschrieb 2025/26 Vorzieheffekte und Einbruch im Welthandel durch US-Zölle?|Welthandelsorganisation (WTO)|
|djs2026wf-neu-186|2026|Wirtschaft & Finanzen|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026wf003|Wenn es um globale Handelsströme und Zollfolgen geht, welche Organisation ist hier gemeint?|Welthandelsorganisation (WTO)|
|djs2019sc001|2019|Gesellschaft & Recht|singlechoice|OK|NIEDRIG||Wer sagte den Satz vom 'brennenden Haus' auf der Klimakonferenz in Davos?|Greta Thunberg|
|djs2022sc004|2022|Gesellschaft & Recht|singlechoice|OK|NIEDRIG||Wie lautete das Unwort des Jahres 2021?|Pushback|
|djs2022sc006|2022|Gesellschaft & Recht|singlechoice|OK|NIEDRIG||An welches Land sollten über 1000 Benin-Bronzen zurückgegeben werden?|Nigeria|
|djs2025gr001|2025|Gesellschaft & Recht|singlechoice|OK|NIEDRIG||Ab welchem Datum wurden Leistungserbringer verpflichtet, die elektronische Patientenakte (ePA) zu nutzen?|1. Oktober 2025|
|djs2025match001|2025|Gesellschaft & Recht|matching|OK|NIEDRIG||Ordnen Sie die folgenden Zitate den richtigen Personen zu.|Simone Biles → Aussage zur mentalen Gesundheit im Leistungssport / Christian Lindner → Eine Entlassung könne auch Befreiung sein / Friedrich Merz → Kritik an Vier-Tage-Woche / Gisèle Pelicot → Nicht sie solle sich schämen, sondern die Täter|
|djs2025mc001|2025|Gesellschaft & Recht|multiplechoice|OK|NIEDRIG||In welchen Städten kam es zwischen Dezember 2024 und April 2025 zu besonders beachteten Autoanschlägen bzw. Amokfahrten? (Mehrere Antworten möglich)|Magdeburg / Mannheim / Vancouver|
|djs2025mc002|2025|Gesellschaft & Recht|multiplechoice|OK|NIEDRIG||Welche Wörter wurden 2024 neu in den Duden aufgenommen? (Mehrere Antworten möglich)|ChatGPT / Deutschlandticket / Triggerwarnung / Wokeness / Klimakleber|
|djs2026gr-neu-047|2026|Gesellschaft & Recht|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc005|Welches Wort wurde wegen pauschaler Kriminalisierung von Klimaaktivisten zum Unwort des Jahres 2022 gewählt?|Klimaterroristen|
|djs2026gr-neu-048|2026|Gesellschaft & Recht|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc005|Die Debatte um die Letzte Generation prägte welches Unwort des Jahres 2022?|Klimaterroristen|
|djs2026gr-neu-049|2026|Gesellschaft & Recht|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc004|Welcher Begriff für das Zurückdrängen Schutzsuchender wurde zum Unwort des Jahres 2021?|Pushback|
|djs2026gr-neu-050|2026|Gesellschaft & Recht|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc004|Die Jury kritisierte welches Wort, weil es völkerrechtswidrige Zurückweisungen sprachlich verschleiere?|Pushback|
|djs2026gr-neu-051|2026|Gesellschaft & Recht|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc006|An welchen Staat sollten deutsche Museen mehr als 1.000 Benin-Bronzen zurückgeben?|Nigeria|
|djs2026gr-neu-052|2026|Gesellschaft & Recht|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc006|Die Restitution geraubter Bronzen aus dem Königreich Benin betrifft heute vor allem welches Land?|Nigeria|
|djs2026gr-neu-053|2026|Gesellschaft & Recht|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2019sc001|Wer prägte auf dem Weltwirtschaftsforum in Davos das Bild vom brennenden Haus?|Greta Thunberg|
|djs2026gr-neu-054|2026|Gesellschaft & Recht|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2019sc001|Die Formulierung „Unser Haus brennt“ machte welche Klimaaktivistin international noch bekannter?|Greta Thunberg|
|djs2023sc005|2023|Gesellschaft & Recht|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Wie lautete das Unwort des Jahres 2022?|Klimaterroristen|
|djs2018sc005|2018|Wissenschaft & Technik|singlechoice|OK|NIEDRIG||Was ist CRISPR-Cas9?|Eine Genschere zur gezielten Veränderung von DNA|
|djs2019sc005|2019|Wissenschaft & Technik|singlechoice|OK|NIEDRIG||Welcher Konzern durfte in den USA und anderen Ländern nicht am 5G-Ausbau teilnehmen?|Huawei|
|djs2022sc008|2022|Wissenschaft & Technik|singlechoice|OK|NIEDRIG||Wo wurde die Omikron-Variante des Coronavirus zuerst nachgewiesen?|Südafrika|
|djs2024mc001|2024|Wissenschaft & Technik|multiplechoice|OK_MIT_HINWEIS|MITTEL||Welche Länder schafften in den vergangenen 12 Monaten eine Mondlandung? (Mehrere Antworten möglich)|Indien / Japan|
|djs2024sc002|2024|Wissenschaft & Technik|singlechoice|OK|NIEDRIG||Wer erhielt 2023 den Wirtschaftsnobelpreis?|Claudia Goldin|
|djs2025mc003|2025|Wissenschaft & Technik|multiplechoice|OK|NIEDRIG||Welche Software-Anwendungen stammen aus Europa und werden als Alternativen zu US-Tools gehandelt? (Mehrere Antworten möglich)|DeepL / Threema|
|djs2026sc001|2026|Wissenschaft & Technik|singlechoice|OK|NIEDRIG||Wie heißt die NASA-Mission, die vom 1. bis 10. April 2026 die erste bemannte Mondumrundung seit rund 50 Jahren durchführte?|Artemis II|
|djs2025match003|2025|Wissenschaft & Technik|matching|OK_MIT_HINWEIS|NIEDRIG||🔵 Ordnen Sie die Konzernchefs, die bei Trumps Vereidigung anwesend waren, ihren Unternehmen zu.|Jeff Bezos → Amazon / Tim Cook → Apple / Sundar Pichai → Google / Sam Altman → OpenAI|
|djs2026wt-neu-187|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc002|Wer erhielt 2023 den Wirtschaftsnobelpreis für Forschung zu Frauen auf dem Arbeitsmarkt?|Claudia Goldin|
|djs2026wt-neu-188|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc002|Die Analyse des Gender Pay Gap und der Motherhood Penalty brachte welcher Harvard-Ökonomin den Nobelpreis?|Claudia Goldin|
|djs2026wt-neu-189|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024mc001|Welche Länder schafften innerhalb der relevanten Zwölf-Monats-Periode erfolgreiche Mondlandungen?|Indien und Japan|
|djs2026wt-neu-190|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024mc001|Chandrayaan-3 und SLIM stehen für Mondlandeerfolge welcher beiden Staaten?|Indien und Japan|
|djs2026wt-neu-191|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc003|Was demonstrierte die NASA mit der DART-Mission erstmals erfolgreich?|Die Umlaufbahn eines Asteroiden zu verändern|
|djs2026wt-neu-192|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc003|Der Einschlag in Dimorphos bewies welche Möglichkeit der planetaren Verteidigung?|Die Umlaufbahn eines Asteroiden zu verändern|
|djs2026wt-neu-193|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|MITTEL|djs2023sc004|Ab wann hält der IPCC eine Überschreitung von 1,5 Grad ohne zusätzliche Maßnahmen für wahrscheinlich?|2030|
|djs2026wt-neu-194|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|MITTEL|djs2023sc004|Die Warnung vor dem frühen Reißen der 1,5-Grad-Schwelle verweist auf welches Jahr?|2030|
|djs2026wt-neu-195|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc008|Wo wurde die Omikron-Variante des Coronavirus zuerst nachgewiesen und der WHO gemeldet?|Südafrika|
|djs2026wt-neu-196|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc008|Die schnelle Identifikation von B.1.1.529 erfolgte zuerst in welchem Land?|Südafrika|
|djs2026wt-neu-197|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2019sc005|Welcher chinesische Konzern wurde in mehreren Ländern vom 5G-Ausbau ausgeschlossen?|Huawei|
|djs2026wt-neu-198|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2019sc005|Der Technologiekonflikt zwischen USA und China drehte sich beim 5G-Netz besonders um welchen Anbieter?|Huawei|
|djs2026wt-neu-199|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2018sc005|Was ist CRISPR-Cas9?|Eine Genschere zur gezielten Veränderung von DNA|
|djs2026wt-neu-200|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2018sc005|Welche biotechnologische Methode erlaubt das gezielte Schneiden und Verändern von DNA?|Eine Genschere zur gezielten Veränderung von DNA|
|djs2026wt-neu-201|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026sc001|Wie heißt die NASA-Mission der ersten bemannten Mondumrundung seit rund 50 Jahren?|Artemis II|
|djs2026wt-neu-202|2026|Wissenschaft & Technik|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026sc001|Die bemannte Mondumrundung im Artemis-Programm trägt welche Missionsnummer?|Artemis II|
|djs2023sc003|2023|Wissenschaft & Technik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Was gelang der NASA mit der DART-Sonde?|Die Umlaufbahn eines Asteroiden zu verändern|
|djs2023sc004|2023|Wissenschaft & Technik|singlechoice|OK_MIT_HINWEIS|MITTEL||Ab wann hält der Weltklimarat 1,5 Grad Erwärmung ohne zusätzliche Maßnahmen für wahrscheinlich?|2030|
|djs2025sc001|2025|Wissenschaft & Technik|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Wie lange saßen die NASA-Astronauten Butch Wilmore und Suni Williams auf der ISS fest?|9 Monate|
|djs2019sc002|2019|Sport|singlechoice|OK|NIEDRIG||Wer sagte, er sei Deutscher beim Gewinnen und Immigrant beim Verlieren?|Mesut Özil|
|djs2025sp001|2025|Sport|singlechoice|OK|NIEDRIG||Wo fanden die Rhine-Ruhr 2025 FISU World University Games statt?|Ruhrgebiet und Berlin|
|djs2025sp002|2025|Sport|singlechoice|OK|NIEDRIG||In welchem Land fand die UEFA Women's EURO 2025 statt?|Schweiz|
|djs2025sp003|2025|Sport|singlechoice|OK|NIEDRIG||In welcher Stadt fand das Finale der UEFA Women's EURO 2025 statt?|Basel|
|djs2026sp003|2026|Sport|singlechoice|OK|NIEDRIG||Wann fanden die Olympischen Winterspiele Milano Cortina 2026 statt?|6. bis 22. Februar 2026|
|djs2026sp-neu-155|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2019sc002|Welcher Fußballer schrieb, er sei beim Gewinnen Deutscher und beim Verlieren Immigrant?|Mesut Özil|
|djs2026sp-neu-156|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2019sc002|Der Rücktritt aus der Nationalmannschaft 2018 und die Rassismusdebatte sind eng mit welchem Spieler verbunden?|Mesut Özil|
|djs2026sp-neu-157|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025sp001|Wo fanden die Rhine-Ruhr 2025 FISU World University Games statt?|Ruhrgebiet und Berlin|
|djs2026sp-neu-158|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025sp001|Das Multisportevent der Studierenden wurde 2025 in welchen deutschen Regionen beziehungsweise Städten ausgetragen?|Ruhrgebiet und Berlin|
|djs2026sp-neu-159|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025sp002|Welches Land richtete die UEFA Women's EURO 2025 aus?|Schweiz|
|djs2026sp-neu-160|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025sp002|Die Frauenfußball-EM 2025 wurde erstmals in welchem Alpenland ausgetragen?|Schweiz|
|djs2026sp-neu-161|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025sp003|In welcher Stadt wurde das Finale der UEFA Women's EURO 2025 ausgetragen?|Basel|
|djs2026sp-neu-162|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025sp003|Der Endspielort der Frauen-EM 2025 lag in welcher Schweizer Stadt?|Basel|
|djs2026sp-neu-163|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025sp004|In welchem Zeitraum fand die erste FIFA-Klub-WM im 32-Teams-Format statt?|14. Juni – 13. Juli 2025|
|djs2026sp-neu-164|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2025sp004|Das neue Format des FIFA Club World Cup wurde 2025 in den USA zwischen welchen Daten gespielt?|14. Juni – 13. Juli 2025|
|djs2026sp-neu-165|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026sp001|Mit wie vielen Mannschaften wird die Fußball-WM 2026 ausgetragen?|48 Teams|
|djs2026sp-neu-166|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026sp001|Die Erweiterung der Männer-WM 2026 hebt die Teilnehmerzahl auf welchen Wert?|48 Teams|
|djs2026sp-neu-167|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026sp002|Welche drei Länder richten die Fußball-Weltmeisterschaft 2026 gemeinsam aus?|USA, Kanada und Mexiko|
|djs2026sp-neu-168|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026sp002|Die erste Männer-WM mit drei Gastgebern findet in welchen Staaten Nordamerikas statt?|USA, Kanada und Mexiko|
|djs2026sp-neu-169|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026sp003|Wann fanden die Olympischen Winterspiele Milano Cortina 2026 statt?|6. bis 22. Februar 2026|
|djs2026sp-neu-170|2026|Sport|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2026sp003|Die Winterspiele in Italien liefen 2026 über welchen Februar-Zeitraum?|6. bis 22. Februar 2026|
|djs2025sp004|2025|Sport|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Im welchen Zeitraum fand der neue FIFA Club World Cup 2025 erstmals im 32-Teams-Format statt?|14. Juni – 13. Juli 2025|
|djs2026sp001|2026|Sport|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Wie viele Teams nehmen an der FIFA Fußball-Weltmeisterschaft 2026 teil?|48 Teams|
|djs2026sp002|2026|Sport|singlechoice|OK_MIT_HINWEIS|NIEDRIG||In welchen drei Ländern findet die FIFA Fußball-Weltmeisterschaft 2026 statt?|USA / Kanada / Mexiko|
|djs2018sc002|2018|Kultur & Medien|singlechoice|OK|NIEDRIG||Wie heißt das Gesetz zu schnellen Löschpflichten für soziale Netzwerke in Deutschland?|Netzwerkdurchsetzungsgesetz|
|djs2018sc004|2018|Kultur & Medien|singlechoice|OK|NIEDRIG||Was war besonders an der Produktion der Serie 'Babylon Berlin'?|Sie war eine sehr teure Kooperation von ARD und Sky|
|djs2019sc004|2019|Kultur & Medien|singlechoice|OK|NIEDRIG||Welche Reportage enttarnte Claas Relotius vom Spiegel – und wer deckte ihn auf?|'Jaegers Grenze' – enthüllt von Juan Moreno|
|djs2019sc006|2019|Kultur & Medien|singlechoice|OK|NIEDRIG||Warum wurde der Echo-Musikpreis 2018 eingestellt?|Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang|
|djs2022sc001|2022|Kultur & Medien|singlechoice|OK|NIEDRIG||Welche Netflix-Serie hatte den erfolgreichsten Serienstart des Streamingdienstes?|Squid Game|
|djs2022sc002|2022|Kultur & Medien|singlechoice|OK|NIEDRIG||Welches Christo/Jeanne-Claude-Projekt wurde 2021 posthum verwirklicht?|Verhüllung des Arc de Triomphe|
|djs2024mc003|2024|Kultur & Medien|multiplechoice|OK|NIEDRIG||Welche Kulturgüter wurden 2023 für mehr als eine Million Euro versteigert? (Mehrere Antworten möglich)|Freddie Mercurys Klavier / Gustav Klimts 'Dame mit Fächer' / Ferrari 330LM/250 GTO|
|djs2024sc001|2024|Kultur & Medien|singlechoice|OK|NIEDRIG||Welcher Rechercheverbund berichtete über ein Treffen von Rechtsextremisten in Potsdam?|Correctiv|
|djs2025match005|2025|Kultur & Medien|matching|OK|NIEDRIG||Ordnen Sie die Autorinnen und Autoren ihren literarischen Auszeichnungen 2024 zu.|Samantha Harvey → Booker Prize / Martina Hefter → Deutscher Buchpreis / Tijan Sila → Ingeborg-Bachmann-Preis / Han Kang → Literaturnobelpreis|
|djs2025sc005|2025|Kultur & Medien|singlechoice|OK|NIEDRIG||Chefredakteur welches US-Magazins las in einer Chatgruppe mit, in der US-Angriffe auf den Jemen geplant wurden?|The Atlantic|
|djs2025sc009|2025|Kultur & Medien|singlechoice|OK|NIEDRIG||In welchem Konflikt wurden laut Reporter ohne Grenzen seit dem 7. Oktober 2023 besonders viele Journalistinnen und Journalisten getötet?|Konflikt in Gaza / Gazastreifen|
|djs2026mc-neu-137|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc001|Welches Recherchezentrum veröffentlichte 2024 die Recherche zum Potsdamer Treffen von Rechtsextremisten?|Correctiv|
|djs2026mc-neu-138|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc001|Die Berichterstattung über „Remigration“-Pläne und das Treffen in Potsdam geht auf welchen Rechercheverbund zurück?|Correctiv|
|djs2026mc-neu-139|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024mc003|Welche drei Kulturgüter erzielten 2023 Auktionspreise von mehr als einer Million Euro?|Freddie Mercurys Klavier, Klimts „Dame mit Fächer“ und Ferrari 330LM/250 GTO|
|djs2026mc-neu-140|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024mc003|Klimts Rekordbild, Freddie Mercurys Instrument und ein seltener Ferrari stehen für welche Auktionsereignisse 2023?|Freddie Mercurys Klavier, Klimts „Dame mit Fächer“ und Ferrari 330LM/250 GTO|
|djs2026mc-neu-141|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023mc001|Welche berühmten Kunstwerke beziehungsweise Künstler wurden 2022 Ziel von Klima-Protestaktionen?|Van Gogh, Monet, Raffael und Mona Lisa/Da Vinci|
|djs2026mc-neu-142|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023mc001|Tomatensuppe, Kartoffelbrei und Klebeaktionen richteten sich 2022 symbolisch gegen Werke welcher Künstler?|Van Gogh, Monet, Raffael und Mona Lisa/Da Vinci|
|djs2026mc-neu-143|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc001|Welche Netflix-Serie wurde zum erfolgreichsten Serienstart des Streamingdienstes?|Squid Game|
|djs2026mc-neu-144|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc001|Die globale Hallyu-Welle erhielt durch welche südkoreanische Netflix-Serie einen Rekordschub?|Squid Game|
|djs2026mc-neu-145|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2022sc002|Welches Christo-und-Jeanne-Claude-Projekt wurde 2021 nach Christos Tod realisiert?|Verhüllung des Arc de Triomphe|
|djs2026mc-neu-146|2026|Kultur & Medien|kurzantwort|TEILWEISE_FALSCH|HOCH|djs2022sc002|Das Pariser Monument, das 2021 temporär verhüllt wurde, war welches Bauwerk?|Verhüllung des Arc de Triomphe|
|djs2026mc-neu-147|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2019sc004|Welche Spiegel-Reportage brachte den Relotius-Skandal ins Rollen, und wer deckte ihn auf?|„Jaegers Grenze“ – Juan Moreno|
|djs2026mc-neu-148|2026|Kultur & Medien|kurzantwort|TEILWEISE_FALSCH|HOCH|djs2019sc004|Juan Moreno enttarnte Fälschungen seines Kollegen bei welcher Reportage?|„Jaegers Grenze“ – Juan Moreno|
|djs2026mc-neu-149|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2019sc006|Warum wurde der Echo-Musikpreis 2018 abgeschafft?|Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang|
|djs2026mc-neu-150|2026|Kultur & Medien|kurzantwort|TEILWEISE_FALSCH|HOCH|djs2019sc006|Die Auszeichnung eines Rap-Albums mit antisemitisch kritisierten Zeilen führte zum Ende welchen Musikpreises?|Wegen antisemitischer Klischees in Texten von Kollegah und Farid Bang|
|djs2026mc-neu-151|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2018sc002|Wie heißt das deutsche Gesetz, das große soziale Netzwerke zu schnellen Löschverfahren verpflichtete?|Netzwerkdurchsetzungsgesetz|
|djs2026mc-neu-152|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2018sc002|Das Kürzel NetzDG steht für welches Gesetz zur Plattformregulierung?|Netzwerkdurchsetzungsgesetz|
|djs2026mc-neu-153|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2018sc004|Was machte die Produktion von „Babylon Berlin“ medienwirtschaftlich besonders?|Eine sehr teure Kooperation von ARD und Sky|
|djs2026mc-neu-154|2026|Kultur & Medien|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2018sc004|Die Serie nach Volker Kutscher wurde auch durch ihre Finanzierung als Kooperation welcher Akteure bekannt?|Eine sehr teure Kooperation von ARD und Sky|
|djs2023mc001|2023|Kultur & Medien|multiplechoice|OK_MIT_HINWEIS|NIEDRIG||Welche Gemälde wurden 2022 Ziel von Klima-Protesten? (Mehrere Antworten möglich)|Van Goghs 'Pfirsichbäume in Blüte' / Monets 'Getreideschober' / Raffaels 'Sixtinische Madonna' / Da Vincis 'Mona Lisa'|
|djs2025sc004|2025|Kultur & Medien|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Weshalb verlor Luke Mockridge 2024 seine neue Sat.1-Show?|Wegen eines menschenverachtenden Spruchs über Paralympioniken|
|djs2023sc006|2023|Geografie & Karten|singlechoice|OK|NIEDRIG||In welchem Land wurden nach einem schweren Zugunglück Parlamentswahlen verschoben?|Griechenland|
|djs2023sc009|2023|Geografie & Karten|singlechoice|OK|NIEDRIG||In welchem Land kam es bei einer Halloween-Party zu einer tödlichen Massenpanik?|Südkorea|
|djs2024sc010|2024|Geografie & Karten|singlechoice|OK|NIEDRIG||Wo musste wegen einer Erdbebenserie die Blaue Lagune vorübergehend geschlossen werden?|Island|
|djs2026geo-neu-035|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc006|Aus welchem Land stammten die Waldbrandrauchwolken, die 2023 bis nach New York zogen?|Kanada|
|djs2026geo-neu-036|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc006|Ein orange verfärbter Himmel über Manhattan wurde 2023 zum Symbol für Waldbrände in welchem Staat?|Kanada|
|djs2026geo-neu-037|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc007|Welcher Staat überholte China 2023 als bevölkerungsreichstes Land der Erde?|Indien|
|djs2026geo-neu-038|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc007|Seit 2023 steht welches Land in UN-Schätzungen an der Spitze der Weltbevölkerung?|Indien|
|djs2026geo-neu-039|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc008|In welchem Land wurde der Präsidentschaftskandidat Fernando Villavicencio 2023 erschossen?|Ecuador|
|djs2026geo-neu-040|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc008|Das Attentat auf einen investigativen Journalisten im Wahlkampf erschütterte 2023 welches südamerikanische Land?|Ecuador|
|djs2026geo-neu-041|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc010|In welchem Land musste die Blaue Lagune nach Erdbeben und Vulkangefahr zeitweise schließen?|Island|
|djs2026geo-neu-042|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2024sc010|Die Reykjanes-Halbinsel mit Grindavík und der Blauen Lagune liegt in welchem Land?|Island|
|djs2026geo-neu-043|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc006|In welchem Land wurde nach dem Zugunglück von Tempi der Wahlkalender politisch überlagert?|Griechenland|
|djs2026geo-neu-044|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc006|Das schwerste Bahnunglück der Landesgeschichte löste 2023 massive Proteste in welchem EU-Land aus?|Griechenland|
|djs2026geo-neu-045|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc009|In welchem Land starben 2022 in Itaewon viele Menschen bei einer Halloween-Massenpanik?|Südkorea|
|djs2026geo-neu-046|2026|Geografie & Karten|kurzantwort|OK_MIT_HINWEIS|NIEDRIG|djs2023sc009|Die tödliche Crowd-Katastrophe in einer engen Gasse von Seoul ereignete sich in welchem Land?|Südkorea|
|djs2024sc006|2024|Geografie & Karten|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Waldbrände in welchem Land lösten 2023 Smog-Alarm bis nach New York aus?|Kanada|
|djs2024sc007|2024|Geografie & Karten|singlechoice|OK_MIT_HINWEIS|NIEDRIG||Welches Land gilt seit 2023 als bevölkerungsreichstes Land der Welt?|Indien|
|djs2024sc008|2024|Geografie & Karten|singlechoice|OK_MIT_HINWEIS|NIEDRIG||In welchem Land wurde 2023 ein Präsidentschaftskandidat bei einer Wahlveranstaltung erschossen?|Ecuador|

## 8. Quellenmatrix / Deep-Research-Basis
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

## 9. Vollständiger Roh-Fragencheck aus der Eingabedatei
> Unverändert angehängt, damit keine Information aus dem QA-Check verloren geht.

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
