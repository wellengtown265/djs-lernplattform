# GEOGRAFIE-FRAGEN AUS 2025/2026 THEMEN

**Stand:** 13. Mai 2026  
**Ziel:** Implementierungsnahe Geografie-Fragen für eine DJS-Quiz- und Lernplattform.  
**Umfang:** 93 Fragen in 30 Kategorien.  
**Qualitätspriorität:** absolute Faktentreue; aktive Konflikte und politisch strittige Gebiete mit Stichtag, Quellenumfang und Statushinweis.

## Implementierungsregeln

- Erlaubte `Type`-Werte: `map-interactive`, `multiple-choice`, `text-input`, `matching`.
- Jede Frage enthält `Source` und `DoubleCheck`. `DoubleCheck` bedeutet: mindestens eine zweite unabhängige Quelle oder interne Korrektur-/Reportlogik.
- Bei `RiskFlag: high` darf die App die Frage nur mit sichtbarer Statusnotiz und `as_of_date` veröffentlichen.
- Bei Karten zu aktiven Konflikten niemals ungeprüft aktuelle Front-/Kontrolllinien aus statischen Länderpolygonen ableiten.
- Für `map-interactive` möglichst ISO-3166-1/2, Natural-Earth- oder eigene stabile Feature-IDs speichern; bei Inselstaaten und Mikroflächen großzügige Toleranzen verwenden.
- Für Multiple-Choice-Fragen mit mehreren richtigen Antworten `multipleAnswers=true` speichern; nicht als Single Choice rendern.

## Empfohlenes Question-Schema

```json
{
  "question_id": "geo2026_001",
  "category": "Ukrainekrieg: Grenzen, Nachbarländer und Schwarzmeerraum",
  "prompt": "Welche Landnachbarn hat die Ukraine?",
  "type": "multiple-choice",
  "difficulty": "leicht|mittel|schwer",
  "region": "Europa|Asien|Afrika|Amerika|Ozeanien|Welt",
  "locations": ["Ukraine", "Polen"],
  "options": [],
  "correctAnswer": "...",
  "implementationHints": "...",
  "context": "Warum DJS-relevant",
  "sources": ["SRC-ID"],
  "doubleCheck": ["SRC-ID"],
  "riskFlag": "low|medium|high",
  "as_of_date": "2026-05-13"
}
```

## Kategorie: Deutschland: Bundesländer, Wahlen und Regierungsbildung

### Frage 1: Markiere die drei ostdeutschen Länder, deren Landtagswahlen 2024 besonders DJS-relevant waren: Brandenburg, Sachsen und Thüringen.
- QuestionID: `geo2026_001`
- Type: map-interactive
- Schwierigkeit: mittel
- Region: Europa
- Locations: Brandenburg (DE-BB), Sachsen (DE-SN), Thüringen (DE-TH)
- CorrectAnswer: Die Karte muss Brandenburg, Sachsen und Thüringen markieren; Hamburg darf nicht Teil dieser 2024er-Ost-Landtagswahl-Gruppe sein.
- Context: Innenpolitik ist DJS-Kernstoff; die Korrekturdatei warnt ausdrücklich vor unsauberen Formulierungen zu Ländern und Koalitionen.
- ImplementationHints: adminLevel=DE-Bundesland; acceptedFeatureIds=[DE-BB,DE-SN,DE-TH]; noCityStateHamburg=true
- RiskFlag: medium
- Source: SRC-CRITICAL, SRC-REPORT
- DoubleCheck: SRC-CRITICAL, SRC-REPORT
- AsOfDate: 2026-05-13

### Frage 2: Ordne die Landeshauptstädte zu: Brandenburg, Sachsen, Thüringen, Hamburg.
- QuestionID: `geo2026_002`
- Type: matching
- Schwierigkeit: leicht
- Region: Europa
- Locations: Potsdam, Dresden, Erfurt, Hamburg
- CorrectAnswer: Brandenburg → Potsdam; Sachsen → Dresden; Thüringen → Erfurt; Hamburg → Hamburg.
- Context: DJS prüft oft politische Ereignisse über präzise Orts- und Länderzuordnung.
- ImplementationHints: matchingPairs; normalize umlauts; Hamburg is both city and Land
- RiskFlag: low
- Source: SRC-CRITICAL, SRC-QUESTIONS
- DoubleCheck: SRC-CRITICAL, SRC-QUESTIONS
- AsOfDate: 2026-05-13

### Frage 3: Welches Bundesland ist ein Stadtstaat: Brandenburg, Sachsen, Thüringen oder Hamburg?
- QuestionID: `geo2026_003`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Europa
- Locations: Hamburg
- Options:
  - Brandenburg
  - Sachsen
  - Thüringen
  - Hamburg
- CorrectAnswer: Hamburg.
- Context: Die Frage verhindert die im Review markierte Vermischung von Landtagswahl 2024 und Bürgerschaftswahl 2025.
- ImplementationHints: singleAnswer=Hamburg
- RiskFlag: low
- Source: SRC-CRITICAL, SRC-REPORT
- DoubleCheck: SRC-CRITICAL, SRC-REPORT
- AsOfDate: 2026-05-13

## Kategorie: Ukrainekrieg: Grenzen, Nachbarländer und Schwarzmeerraum

### Frage 4: Markiere die Ukraine auf einer Europakarte nach international anerkanntem Staatsgebiet.
- QuestionID: `geo2026_004`
- Type: map-interactive
- Schwierigkeit: mittel
- Region: Europa
- Locations: Ukraine (UA)
- CorrectAnswer: Polygon Ukraine/ISO UA. Krim und besetzte Gebiete nicht als russisches Staatsgebiet abfragen; Kontrolle vor Ort ist dynamisch.
- Context: Der Report nennt Ukraine/Kartenwissen als Kernmuster. Konfliktkarten müssen klar zwischen völkerrechtlicher Grenze und Kontrolllinie unterscheiden.
- ImplementationHints: mapLayer=sovereignStates; featureId=UA; statusNote=internationallyRecognizedBorders; doNotUseCurrentControlLine=true
- RiskFlag: high
- Source: UK-UKR-TOP, UNHCR-UKR
- DoubleCheck: UK-UKR-TOP, UNHCR-UKR
- AsOfDate: 2026-05-13

### Frage 5: Welche Landnachbarn hat die Ukraine?
- QuestionID: `geo2026_005`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa
- Locations: Ukraine, Russland, Belarus, Polen, Slowakei, Ungarn, Rumänien, Moldau
- Options:
  - Russland
  - Belarus
  - Polen
  - Slowakei
  - Ungarn
  - Rumänien
  - Moldau
  - Bulgarien
  - Tschechien
- CorrectAnswer: Russland, Belarus, Polen, Slowakei, Ungarn, Rumänien und Moldau.
- Context: Nachbarländer sind klassisches DJS-Kartenwissen und für Ukraine-Berichterstattung zentral.
- ImplementationHints: multipleAnswers; exactSet=[RU,BY,PL,SK,HU,RO,MD]
- RiskFlag: medium
- Source: UK-UKR-TOP, UNHCR-UKR
- DoubleCheck: UK-UKR-TOP, UNHCR-UKR
- AsOfDate: 2026-05-13

### Frage 6: Welche zwei Meere grenzen im Süden an die Ukraine?
- QuestionID: `geo2026_006`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa
- Locations: Schwarzes Meer, Asowsches Meer
- Options:
  - Schwarzes Meer
  - Asowsches Meer
  - Ostsee
  - Ägäis
  - Adria
- CorrectAnswer: Schwarzes Meer und Asowsches Meer.
- Context: Die Schwarzmeerregion ist geopolitisch wichtig: Getreideexporte, Häfen, Krim, Marinekrieg.
- ImplementationHints: multipleAnswers; exactSet=[BlackSea,SeaOfAzov]
- RiskFlag: medium
- Source: UK-UKR-TOP, CONS-RUS-SANC
- DoubleCheck: UK-UKR-TOP, CONS-RUS-SANC
- AsOfDate: 2026-05-13

## Kategorie: NATO-Ostflanke: Baltikum, Litauen und Kaliningrad

### Frage 7: Markiere Litauen auf der Karte des Baltikums.
- QuestionID: `geo2026_007`
- Type: map-interactive
- Schwierigkeit: leicht
- Region: Europa
- Locations: Litauen (LT)
- CorrectAnswer: Litauen ist der südlichste der drei baltischen Staaten und grenzt an Lettland, Belarus, Polen und Russland/Kaliningrad.
- Context: Die Bundeswehr-Brigade in Litauen ist laut Report sicherheits- und kartenrelevant.
- ImplementationHints: mapLayer=sovereignStates; featureId=LT
- RiskFlag: low
- Source: BW-LTU-1, BW-LTU-2
- DoubleCheck: BW-LTU-1, BW-LTU-2
- AsOfDate: 2026-05-13

### Frage 8: Welche Staaten grenzen an Litauen?
- QuestionID: `geo2026_008`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa
- Locations: Litauen, Lettland, Belarus, Polen, Russland/Kaliningrad
- Options:
  - Lettland
  - Belarus
  - Polen
  - Russland
  - Estland
  - Ukraine
  - Finnland
- CorrectAnswer: Lettland, Belarus, Polen und Russland. Hinweis: Die russische Grenze ist die Grenze zur Exklave Kaliningrad.
- Context: Für die NATO-Ostflanke ist die Lage Litauens zwischen Belarus, Kaliningrad und Polen besonders prüfungsrelevant.
- ImplementationHints: multipleAnswers; exactSet=[LV,BY,PL,RU]; labelRU=KaliningradExclave
- RiskFlag: medium
- Source: BW-LTU-1, NATO-MEMBERS
- DoubleCheck: BW-LTU-1, NATO-MEMBERS
- AsOfDate: 2026-05-13

### Frage 9: Markiere die russische Exklave Kaliningrad zwischen Polen und Litauen.
- QuestionID: `geo2026_009`
- Type: map-interactive
- Schwierigkeit: schwer
- Region: Europa
- Locations: Kaliningrad Oblast (RU-KGD), Polen, Litauen, Ostsee
- CorrectAnswer: Kaliningrad Oblast ist russisches Gebiet an der Ostsee, getrennt vom russischen Kernland, zwischen Polen und Litauen.
- Context: Kaliningrad ist für NATO-Ostflanke, Ostsee-Sicherheit und Litauen-Berichterstattung zentral.
- ImplementationHints: mapLayer=admin1_or_disputedSubregion; featureId=RU-KGD; notCountry=true
- RiskFlag: medium
- Source: NATO-MEMBERS, BW-LTU-1
- DoubleCheck: NATO-MEMBERS, BW-LTU-1
- AsOfDate: 2026-05-13

## Kategorie: Gaza, Israel, Palästinensische Gebiete und Nahost

### Frage 10: Markiere den Gaza-Streifen – ohne ihn als souveränen Staat zu labeln.
- QuestionID: `geo2026_010`
- Type: map-interactive
- Schwierigkeit: schwer
- Region: Asien
- Locations: Gaza Strip, Israel, Ägypten, Mittelmeer
- CorrectAnswer: Der Gaza-Streifen liegt am östlichen Mittelmeer und grenzt an Israel und Ägypten. In der App als Gebiet/occupied Palestinian territory labeln, nicht als normaler Staat.
- Context: Der Report markiert Gaza/Palästina als dynamisches Thema für Journalistensicherheit und humanitäre Lage.
- ImplementationHints: mapLayer=territories; featureId=GazaStrip; labelType=territory; avoidStatehoodClaim=true
- RiskFlag: high
- Source: OCHA-OPT, RSF-PAL
- DoubleCheck: OCHA-OPT, RSF-PAL
- AsOfDate: 2026-05-13

### Frage 11: Welche zwei Landgrenzen hat der Gaza-Streifen?
- QuestionID: `geo2026_011`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Asien
- Locations: Gaza, Israel, Ägypten
- Options:
  - Israel
  - Ägypten
  - Jordanien
  - Libanon
  - Syrien
- CorrectAnswer: Israel und Ägypten.
- Context: Gaza-Fragen sind politisch sensibel; geografisch lässt sich die Lage am Mittelmeer und an zwei Landgrenzen eindeutig abfragen.
- ImplementationHints: multipleAnswers; exactSet=[Israel,Egypt]; doNotIncludeJordan=true
- RiskFlag: high
- Source: OCHA-OPT, WHO-MENA
- DoubleCheck: OCHA-OPT, WHO-MENA
- AsOfDate: 2026-05-13

### Frage 12: Ordne die Orte/Gebiete zu: Gaza-Streifen, Westjordanland, Jerusalem, Rafah.
- QuestionID: `geo2026_012`
- Type: matching
- Schwierigkeit: schwer
- Region: Asien
- Locations: Gaza, West Bank, Jerusalem, Rafah
- CorrectAnswer: Gaza-Streifen → Küstengebiet am Mittelmeer; Westjordanland → Gebiet westlich des Jordan; Jerusalem → Stadt mit international umstrittenem Status; Rafah → Grenzstadt/Grenzübergang im Süden Gazas an Ägypten.
- Context: Journalistische Genauigkeit verlangt hier Gebiet, Stadt und Grenzort strikt zu trennen.
- ImplementationHints: matchingPairs; statusNotes=[JerusalemContested,RafahBorderCrossing]; noSovereigntySimplification=true
- RiskFlag: high
- Source: OCHA-OPT, RSF-PAL
- DoubleCheck: OCHA-OPT, RSF-PAL
- AsOfDate: 2026-05-13

## Kategorie: Sudan: größte humanitäre Krise und Nordostafrika

### Frage 13: Markiere Sudan in Nordostafrika.
- QuestionID: `geo2026_013`
- Type: map-interactive
- Schwierigkeit: leicht
- Region: Afrika
- Locations: Sudan (SD)
- CorrectAnswer: Sudan liegt südlich von Ägypten, am Roten Meer, zwischen Sahel, Horn von Afrika und Zentralafrika.
- Context: Der Report nennt Sudan als zentrale humanitäre Krise; geografische Lage ist Basiswissen.
- ImplementationHints: mapLayer=sovereignStates; featureId=SD
- RiskFlag: low
- Source: OCHA-SUDAN, SRC-QUESTIONS
- DoubleCheck: OCHA-SUDAN, SRC-QUESTIONS
- AsOfDate: 2026-05-13

### Frage 14: Welche Länder grenzen an Sudan?
- QuestionID: `geo2026_014`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Afrika
- Locations: Sudan, Ägypten, Libyen, Tschad, Zentralafrikanische Republik, Südsudan, Äthiopien, Eritrea
- Options:
  - Ägypten
  - Libyen
  - Tschad
  - Zentralafrikanische Republik
  - Südsudan
  - Äthiopien
  - Eritrea
  - Kenia
  - Somalia
- CorrectAnswer: Ägypten, Libyen, Tschad, Zentralafrikanische Republik, Südsudan, Äthiopien und Eritrea.
- Context: Für Fluchtbewegungen, Konfliktausbreitung und Hilfslogistik sind Nachbarstaaten entscheidend.
- ImplementationHints: multipleAnswers; exactSet=[EG,LY,TD,CF,SS,ET,ER]
- RiskFlag: medium
- Source: OCHA-SUDAN, SRC-REPORT
- DoubleCheck: OCHA-SUDAN, SRC-REPORT
- AsOfDate: 2026-05-13

### Frage 15: Welche Hauptstadt gehört zu Sudan?
- QuestionID: `geo2026_015`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Afrika
- Locations: Khartum/Khartoum
- Options:
  - Khartum
  - Juba
  - Asmara
  - Addis Abeba
- CorrectAnswer: Khartum.
- Context: Hauptstädte in Krisenstaaten sind typische DJS-Single-Choice-Basics.
- ImplementationHints: singleAnswer=Khartum; accepted=[Khartoum,Khartum]
- RiskFlag: low
- Source: OCHA-SUDAN, SRC-QUESTIONS
- DoubleCheck: OCHA-SUDAN, SRC-QUESTIONS
- AsOfDate: 2026-05-13

## Kategorie: DR Kongo: Große Seen, Ostkongo und M23-Konflikt

### Frage 16: Markiere die Demokratische Republik Kongo auf einer Afrikakarte.
- QuestionID: `geo2026_016`
- Type: map-interactive
- Schwierigkeit: leicht
- Region: Afrika
- Locations: Demokratische Republik Kongo (CD)
- CorrectAnswer: Die DR Kongo liegt in Zentralafrika; Kinshasa liegt im Westen, die aktuelle Konflikteskalation besonders im Osten.
- Context: Der Report nennt den Ostkongo als unterberichteten Konflikt; geografische Trennung West/Kinshasa und Ost/Kivu ist wichtig.
- ImplementationHints: mapLayer=sovereignStates; featureId=CD
- RiskFlag: low
- Source: OCHA-DRC, SRC-QUESTIONS
- DoubleCheck: OCHA-DRC, SRC-QUESTIONS
- AsOfDate: 2026-05-13

### Frage 17: Welche Staaten liegen direkt östlich bzw. südöstlich der DR Kongo im Gebiet der Großen Seen?
- QuestionID: `geo2026_017`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Afrika
- Locations: Rwanda, Uganda, Burundi, Tansania
- Options:
  - Uganda
  - Ruanda
  - Burundi
  - Tansania
  - Ghana
  - Senegal
  - Namibia
- CorrectAnswer: Uganda, Ruanda, Burundi und Tansania.
- Context: Die Eskalation in Nord- und Südkivu hat regionale Dimensionen; Nachbarstaaten der Großen Seen müssen sitzen.
- ImplementationHints: multipleAnswers; exactSet=[UG,RW,BI,TZ]; includeLakeTanganyikaBorder=true
- RiskFlag: medium
- Source: OCHA-DRC, SRC-QUESTIONS
- DoubleCheck: OCHA-DRC, SRC-QUESTIONS
- AsOfDate: 2026-05-13

### Frage 18: Ordne die Orte: Kinshasa, Goma, Bukavu, Nord-Kivu.
- QuestionID: `geo2026_018`
- Type: matching
- Schwierigkeit: schwer
- Region: Afrika
- Locations: Kinshasa, Goma, Bukavu, Nord-Kivu
- CorrectAnswer: Kinshasa → Hauptstadt im Westen; Goma → Stadt am Kivusee/Nord-Kivu; Bukavu → Stadt am Kivusee/Süd-Kivu; Nord-Kivu → östliche Konfliktprovinz.
- Context: DJS-relevant, weil Konfliktberichte häufig Stadt, Provinz und Land verwechseln.
- ImplementationHints: matchingPairs; adminLevel=city/province/capital
- RiskFlag: low
- Source: OCHA-DRC, SRC-QUESTIONS
- DoubleCheck: OCHA-DRC, SRC-QUESTIONS
- AsOfDate: 2026-05-13

## Kategorie: EU-Migrations- und Asylpakt: Außengrenzen und Routen

### Frage 19: Markiere die zentralen EU-Mittelmeer-Ankunftsstaaten: Spanien, Italien, Griechenland, Malta und Zypern.
- QuestionID: `geo2026_019`
- Type: map-interactive
- Schwierigkeit: mittel
- Region: Europa
- Locations: Spanien, Italien, Griechenland, Malta, Zypern
- CorrectAnswer: Diese Staaten liegen an EU-Außengrenzen im Mittelmeerraum und sind für Asyl-/Migrationspolitik besonders relevant.
- Context: Der EU-Migrationspakt ist laut Report ein A-Thema mit Umsetzungsdatum 2026.
- ImplementationHints: mapLayer=EUStates; featureIds=[ES,IT,GR,MT,CY]
- RiskFlag: medium
- Source: EU-MIG, EU-MIG-2026
- DoubleCheck: EU-MIG, EU-MIG-2026
- AsOfDate: 2026-05-13

### Frage 20: Ab welchem Datum beginnt die Anwendung des EU-Migrations- und Asylpakts?
- QuestionID: `geo2026_020`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Europa
- Locations: EU
- Options:
  - 1. Januar 2026
  - 12. Juni 2026
  - 2. August 2026
  - 1. Januar 2027
- CorrectAnswer: 12. Juni 2026.
- Context: Das ist keine reine Kartenfrage, aber geografisch wichtig für EU-Außengrenzen und nationale Umsetzungslogik.
- ImplementationHints: singleAnswer=2026-06-12; validUntil=2026-06-12_or_after_asApplied
- RiskFlag: low
- Source: EU-MIG-2026, EU-MIG
- DoubleCheck: EU-MIG-2026, EU-MIG
- AsOfDate: 2026-05-13

### Frage 21: Welche der folgenden Staaten liegen auf der sogenannten Balkanroute in Richtung EU?
- QuestionID: `geo2026_021`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa/Asien
- Locations: Türkei, Griechenland, Bulgarien, Serbien, Ungarn
- Options:
  - Türkei
  - Griechenland
  - Bulgarien
  - Serbien
  - Ungarn
  - Libyen
  - Marokko
- CorrectAnswer: Türkei, Griechenland, Bulgarien, Serbien und Ungarn sind plausible Kernstationen je nach Route; Libyen und Marokko gehören nicht zur Balkanroute.
- Context: Migrationsberichterstattung verlangt Routendenken statt bloßes Länderwissen.
- ImplementationHints: multipleAnswers; allowRouteVariant=true; exactCore=[TR,GR,BG,RS,HU]
- RiskFlag: medium
- Source: EU-MIG, CONS-SCHENGEN
- DoubleCheck: EU-MIG, CONS-SCHENGEN
- AsOfDate: 2026-05-13

## Kategorie: Schengen und EU-Erweiterungsgeografie

### Frage 22: Welche zwei EU-Staaten sind seit dem 1. Januar 2025 vollständig Teil des Schengen-Raums?
- QuestionID: `geo2026_022`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Europa
- Locations: Bulgarien, Rumänien
- Options:
  - Bulgarien
  - Rumänien
  - Kroatien
  - Irland
  - Serbien
- CorrectAnswer: Bulgarien und Rumänien.
- Context: DJS-typisch: EU-Status plus Karte. Wichtig ist vollständig inklusive Landgrenzen ab 1. Januar 2025.
- ImplementationHints: multipleAnswers; exactSet=[BG,RO]; note=fullSchengenLandBordersFrom2025
- RiskFlag: low
- Source: CONS-SCHENGEN, CONS-BG-RO
- DoubleCheck: CONS-SCHENGEN, CONS-BG-RO
- AsOfDate: 2026-05-13

### Frage 23: Markiere Bulgarien und Rumänien an der EU-Südostgrenze.
- QuestionID: `geo2026_023`
- Type: map-interactive
- Schwierigkeit: leicht
- Region: Europa
- Locations: Bulgarien (BG), Rumänien (RO)
- CorrectAnswer: Bulgarien liegt südlich von Rumänien am Schwarzen Meer; Rumänien liegt nördlich von Bulgarien ebenfalls am Schwarzen Meer.
- Context: Ergänzt Schengen-Frage um Kartenmodus.
- ImplementationHints: mapLayer=EUStates; featureIds=[BG,RO]
- RiskFlag: low
- Source: CONS-SCHENGEN, CONS-BG-RO
- DoubleCheck: CONS-SCHENGEN, CONS-BG-RO
- AsOfDate: 2026-05-13

### Frage 24: Welches Land führte am 1. Januar 2023 den Euro ein und wurde zugleich Schengen-Mitglied?
- QuestionID: `geo2026_024`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Europa
- Locations: Kroatien
- Options:
  - Kroatien
  - Bulgarien
  - Rumänien
  - Serbien
- CorrectAnswer: Kroatien.
- Context: Alttests fragten Euro-/Schengen-Erweiterung; als Geografiefrage gut mit Adriaraum verknüpfbar.
- ImplementationHints: singleAnswer=HR
- RiskFlag: low
- Source: CONS-SCHENGEN, SRC-QUESTIONS
- DoubleCheck: CONS-SCHENGEN, SRC-QUESTIONS
- AsOfDate: 2026-05-13

## Kategorie: EU-Institutionen, internationale Gerichte und Diplomatieorte

### Frage 25: Ordne die EU-Orte zu: Brüssel, Straßburg, Luxemburg, Frankfurt am Main.
- QuestionID: `geo2026_025`
- Type: matching
- Schwierigkeit: mittel
- Region: Europa
- Locations: Brüssel, Straßburg, Luxemburg, Frankfurt
- CorrectAnswer: Brüssel → Kommission/Rat-Zentrum; Straßburg → offizieller Sitz des Europaparlaments; Luxemburg → Gerichtshof der EU; Frankfurt am Main → Europäische Zentralbank.
- Context: DJS fragt Institutionen häufig; geografische Ortszuordnung verhindert Verwechslungen.
- ImplementationHints: matchingPairs; allowBrusselsParliamentAsAdditionalButNotSeat=true
- RiskFlag: medium
- Source: SRC-REPORT, DJS
- DoubleCheck: SRC-REPORT, DJS
- AsOfDate: 2026-05-13

### Frage 26: In welcher niederländischen Stadt sitzen sowohl der Internationale Gerichtshof (ICJ) als auch der Internationale Strafgerichtshof (ICC)?
- QuestionID: `geo2026_026`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa
- Locations: Den Haag, Niederlande
- Options:
  - Den Haag
  - Luxemburg
  - Straßburg
  - Genf
- CorrectAnswer: Den Haag.
- Context: ICC/ICJ-Verwechslungen sind prüfungsrelevant; die Ortsfrage ist eine robuste Geografievariante.
- ImplementationHints: singleAnswer=TheHague; accepted=[Den Haag,The Hague,'s-Gravenhage]
- RiskFlag: low
- Source: ICJ, ICC
- DoubleCheck: ICJ, ICC
- AsOfDate: 2026-05-13

### Frage 27: Welche vier Städte gehören zu den Hauptstandorten des UN-Systems?
- QuestionID: `geo2026_027`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Welt
- Locations: New York, Genf, Wien, Nairobi
- Options:
  - New York
  - Genf
  - Wien
  - Nairobi
  - Brüssel
  - Rom
  - Paris
- CorrectAnswer: New York, Genf, Wien und Nairobi.
- Context: UN-Orte sind wiederkehrende DJS-Institutionenbasics und helfen bei WHO, ICC/ICJ und UN-Berichten.
- ImplementationHints: multipleAnswers; exactSet=[NewYork,Geneva,Vienna,Nairobi]
- RiskFlag: low
- Source: UNOV, UN-GENEVA
- DoubleCheck: UNOV, UN-GENEVA
- AsOfDate: 2026-05-13

## Kategorie: CBAM, EU-Handel und Industriegeografie

### Frage 28: Wofür steht CBAM geografisch gedacht: an welcher Grenze setzt der Mechanismus an?
- QuestionID: `geo2026_028`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa/Welt
- Locations: EU-Außengrenze
- Options:
  - EU-Außengrenze/Import in die EU
  - Grenze zwischen Bundesländern
  - Schengen-Binnengrenze
  - Grenze zwischen Euro- und Nicht-Eurostaaten
- CorrectAnswer: An der EU-Außengrenze beziehungsweise beim Import bestimmter CO₂-intensiver Waren in die EU.
- Context: CBAM ist Wirtschafts- und Klimapolitik; für Kartenfragen ist die Außengrenzenlogik entscheidend.
- ImplementationHints: singleAnswer=EUExternalImportBorder
- RiskFlag: low
- Source: EC-CBAM, EC-CBAM-2026
- DoubleCheck: EC-CBAM, EC-CBAM-2026
- AsOfDate: 2026-05-13

### Frage 29: Welche der folgenden Warenbereiche gehören zum typischen CBAM-Kontext?
- QuestionID: `geo2026_029`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa/Welt
- Locations: Zement, Eisen/Stahl, Aluminium, Düngemittel, Strom, Wasserstoff
- Options:
  - Zement
  - Eisen/Stahl
  - Aluminium
  - Düngemittel
  - Strom
  - Wasserstoff
  - Bananen
  - Textilien
- CorrectAnswer: Zement, Eisen und Stahl, Aluminium, Düngemittel, Strom und Wasserstoff.
- Context: CBAM-Fragen lassen sich später mit Industriekarten und Importströmen kombinieren.
- ImplementationHints: multipleAnswers; exactSet=[cement,ironSteel,aluminium,fertilisers,electricity,hydrogen]
- RiskFlag: low
- Source: EC-CBAM, SRC-REPORT
- DoubleCheck: EC-CBAM, SRC-REPORT
- AsOfDate: 2026-05-13

### Frage 30: Markiere den Ruhrraum als klassische deutsche Industrie- und Transformationsregion.
- QuestionID: `geo2026_030`
- Type: map-interactive
- Schwierigkeit: mittel
- Region: Europa
- Locations: Ruhrgebiet, Nordrhein-Westfalen, Deutschland
- CorrectAnswer: Das Ruhrgebiet liegt in Nordrhein-Westfalen, grob zwischen Duisburg, Essen, Bochum und Dortmund.
- Context: Für Wirtschaft/Industriefragen ist räumliches Strukturwissen in Deutschland sinnvoll, auch wenn exakte Grenzen regional variieren.
- ImplementationHints: mapLayer=regionApprox; acceptedBoundingBox=RuhrArea; fuzzyMapValidation=true
- RiskFlag: medium
- Source: SRC-REPORT, DJS
- DoubleCheck: SRC-REPORT, DJS
- AsOfDate: 2026-05-13

## Kategorie: COP30, Amazonas und Brasilien

### Frage 31: In welcher Stadt fand die UN-Klimakonferenz COP30 statt?
- QuestionID: `geo2026_031`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Amerika
- Locations: Belém, Brasilien
- Options:
  - Belém
  - Bogotá
  - Nairobi
  - Jakarta
- CorrectAnswer: Belém.
- Context: COP30 war laut Fragensammlung ein DJS-relevantes Klimathema; die Stadt liegt im Amazonasraum.
- ImplementationHints: singleAnswer=Belem; accepted=[Belém,Belem]
- RiskFlag: low
- Source: UNFCCC-COP30, UN-COP30
- DoubleCheck: UNFCCC-COP30, UN-COP30
- AsOfDate: 2026-05-13

### Frage 32: Markiere Belém im Norden Brasiliens nahe der Amazonasmündung.
- QuestionID: `geo2026_032`
- Type: map-interactive
- Schwierigkeit: mittel
- Region: Amerika
- Locations: Belém, Pará, Brasilien
- CorrectAnswer: Belém liegt im Bundesstaat Pará im Norden Brasiliens, nahe der Mündung des Amazonas in den Atlantik.
- Context: Kartenfrage zur COP30: Stadt, Bundesstaat und Amazonasraum verbinden.
- ImplementationHints: mapLayer=cityPoints; point=Belem_PA_Brazil; toleranceKm=80
- RiskFlag: low
- Source: UNFCCC-COP30, UN-COP30
- DoubleCheck: UNFCCC-COP30, UN-COP30
- AsOfDate: 2026-05-13

### Frage 33: Welche Hauptstadt gehört zu Brasilien?
- QuestionID: `geo2026_033`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Amerika
- Locations: Brasília, Brasilien
- Options:
  - Brasília
  - Rio de Janeiro
  - São Paulo
  - Belém
- CorrectAnswer: Brasília. Nicht Rio de Janeiro und nicht São Paulo.
- Context: Bei Brasilien/COP30 droht die Verwechslung zwischen Hauptstadt, größter Stadt und Konferenzort.
- ImplementationHints: singleAnswer=Brasilia; note=BelemIsCOP30HostNotCapital
- RiskFlag: low
- Source: UNFCCC-COP30, SRC-QUESTIONS
- DoubleCheck: UNFCCC-COP30, SRC-QUESTIONS
- AsOfDate: 2026-05-13

## Kategorie: Klima Europa: Mittelmeer, Alpen, Arktis und Fennoskandien

### Frage 34: Welche europäische Großregion wird in Klima- und Hitzeberichten besonders mit Hitzewellen verbunden?
- QuestionID: `geo2026_034`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa
- Locations: Mittelmeerraum/Südeuropa
- Options:
  - Mittelmeerraum/Südeuropa
  - Benelux
  - Baltikum
  - Irland
- CorrectAnswer: Der Mittelmeerraum beziehungsweise Südeuropa.
- Context: Der Report nennt europäische Hitze- und Extremereignisse; die Region ist kartografisch gut abfragbar.
- ImplementationHints: singleAnswer=MediterraneanEurope
- RiskFlag: low
- Source: WMO-EUROPE-2025, WMO-GLOBAL-2025
- DoubleCheck: WMO-EUROPE-2025, WMO-GLOBAL-2025
- AsOfDate: 2026-05-13

### Frage 35: Welche Länder gehören in der engen Kartenlogik zu Fennoskandien?
- QuestionID: `geo2026_035`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Europa
- Locations: Norwegen, Schweden, Finnland; teils auch Kola/Karelien in Russland
- Options:
  - Norwegen
  - Schweden
  - Finnland
  - Teile Nordwestrusslands
  - Spanien
  - Griechenland
- CorrectAnswer: Norwegen, Schweden und Finnland; geologisch/geografisch werden Teile Nordwestrusslands oft mitgezählt.
- Context: Schwer, aber nützlich für Klima- und Arktisberichterstattung. Als MC Russland nur mit Statushinweis akzeptieren.
- ImplementationHints: multipleAnswers; exactCore=[NO,SE,FI]; optionalContext=[NW_Russia]; scoring=corePlusContext
- RiskFlag: medium
- Source: WMO-EUROPE-2025, SRC-REPORT
- DoubleCheck: WMO-EUROPE-2025, SRC-REPORT
- AsOfDate: 2026-05-13

### Frage 36: Markiere die Alpen als europäische Hochgebirgsregion.
- QuestionID: `geo2026_036`
- Type: map-interactive
- Schwierigkeit: mittel
- Region: Europa
- Locations: Alpenraum: Frankreich, Monaco, Italien, Schweiz, Liechtenstein, Österreich, Deutschland, Slowenien
- CorrectAnswer: Die Alpen verlaufen bogenförmig von Südostfrankreich über Schweiz/Italien/Österreich bis Slowenien; Monaco und Liechtenstein liegen im Alpenraum-Kontext.
- Context: Gletscher, Hitze, Starkregen und Tourismus machen den Alpenraum DJS-relevant.
- ImplementationHints: mapLayer=mountainRange; featureId=Alps; acceptRangePolygon=true
- RiskFlag: low
- Source: WMO-EUROPE-2025, SRC-REPORT
- DoubleCheck: WMO-EUROPE-2025, SRC-REPORT
- AsOfDate: 2026-05-13

## Kategorie: Energie, Stromnetze und Resilienz

### Frage 37: Welche zwei Länder waren vom großflächigen Stromausfall am 28. April 2025 hauptsächlich betroffen?
- QuestionID: `geo2026_037`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Europa
- Locations: Spanien, Portugal
- Options:
  - Spanien
  - Portugal
  - Deutschland
  - Österreich
  - Italien
- CorrectAnswer: Spanien und Portugal.
- Context: Der Blackout ist eine geografisch klare Resilienzfrage zur Iberischen Halbinsel.
- ImplementationHints: multipleAnswers; exactSet=[ES,PT]
- RiskFlag: low
- Source: ENTSOE-BLACKOUT, ACER-BLACKOUT
- DoubleCheck: ENTSOE-BLACKOUT, ACER-BLACKOUT
- AsOfDate: 2026-05-13

### Frage 38: Markiere die Iberische Halbinsel.
- QuestionID: `geo2026_038`
- Type: map-interactive
- Schwierigkeit: leicht
- Region: Europa
- Locations: Iberische Halbinsel: Spanien, Portugal, Andorra, Gibraltar; kleiner Randbezug zu Südwestfrankreich
- CorrectAnswer: Für Quizvalidierung mindestens Spanien und Portugal markieren; Andorra/Gibraltar optional je nach Kartenlayer.
- Context: Die Halbinsel ist der räumliche Kontext des Blackouts.
- ImplementationHints: mapLayer=region; required=[ES,PT]; optional=[AD,GI]; tolerance=peninsulaPolygon
- RiskFlag: medium
- Source: ENTSOE-BLACKOUT, ACER-BLACKOUT
- DoubleCheck: ENTSOE-BLACKOUT, ACER-BLACKOUT
- AsOfDate: 2026-05-13

### Frage 39: Welche Meerenge verbindet den Atlantik mit dem Mittelmeer südlich der Iberischen Halbinsel?
- QuestionID: `geo2026_039`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa/Afrika
- Locations: Straße von Gibraltar
- Options:
  - Straße von Gibraltar
  - Bosporus
  - Suezkanal
  - Bab al-Mandab
- CorrectAnswer: Die Straße von Gibraltar.
- Context: Für Energie-, Handels- und Migrationsrouten ist die Meerenge zwischen Spanien/Gibraltar und Marokko zentral.
- ImplementationHints: singleAnswer=StraitOfGibraltar
- RiskFlag: low
- Source: SRC-REPORT, CONS-SCHENGEN
- DoubleCheck: SRC-REPORT, CONS-SCHENGEN
- AsOfDate: 2026-05-13

## Kategorie: Digitalisierung, EU-Digitalstaat und Regulierungsorte

### Frage 40: Welche Stadt ist der wichtigste EU-Politikort für AI Act, Data Act und EUDI Wallet?
- QuestionID: `geo2026_040`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Europa
- Locations: Brüssel
- Options:
  - Brüssel
  - Oslo
  - Lissabon
  - Dublin
- CorrectAnswer: Brüssel.
- Context: Digitalregulierung ist laut Report ein A-Thema; geografisch ist Brüssel als EU-Regulierungszentrum relevant.
- ImplementationHints: singleAnswer=Brussels
- RiskFlag: low
- Source: EC-AI, EC-DATA, EC-EUDI
- DoubleCheck: EC-AI, EC-DATA
- AsOfDate: 2026-05-13

### Frage 41: Ordne die Digitalthemen dem Raum zu: ePA, EUDI Wallet, AI Act, Data Act.
- QuestionID: `geo2026_041`
- Type: matching
- Schwierigkeit: mittel
- Region: Europa
- Locations: Deutschland, Europäische Union
- CorrectAnswer: ePA → Deutschland; EUDI Wallet → Europäische Union; AI Act → Europäische Union; Data Act → Europäische Union.
- Context: Hilft später bei App-Filtern: nationaler Rollout versus EU-Regelwerk.
- ImplementationHints: matchingPairs; geoScopeField=[DE/EU]
- RiskFlag: low
- Source: SRC-REPORT, EC-AI, EC-DATA, EC-EUDI
- DoubleCheck: SRC-REPORT, EC-AI
- AsOfDate: 2026-05-13

### Frage 42: Markiere Deutschland als Land des ePA-Rollouts.
- QuestionID: `geo2026_042`
- Type: map-interactive
- Schwierigkeit: leicht
- Region: Europa
- Locations: Deutschland (DE)
- CorrectAnswer: Deutschland markieren; die ePA ist ein deutsches Digitalisierungsprojekt im Gesundheitswesen.
- Context: DJS-relevant, weil ePA als aktuelles Innenpolitik-/Digitalthema auftaucht.
- ImplementationHints: mapLayer=sovereignStates; featureId=DE
- RiskFlag: low
- Source: SRC-REPORT, SRC-QUESTIONS
- DoubleCheck: SRC-REPORT, SRC-QUESTIONS
- AsOfDate: 2026-05-13

## Kategorie: WHO, Pandemieabkommen und globale Gesundheitsorte

### Frage 43: In welcher Stadt hat die Weltgesundheitsorganisation WHO ihren Sitz?
- QuestionID: `geo2026_043`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Europa
- Locations: Genf, Schweiz
- Options:
  - Genf
  - Wien
  - Rom
  - Den Haag
- CorrectAnswer: Genf.
- Context: Das WHO-Pandemieabkommen ist laut Report A/B-relevant; Genf ist der zentrale Ort für globale Gesundheitspolitik.
- ImplementationHints: singleAnswer=Geneva; accepted=[Genf,Geneva]
- RiskFlag: low
- Source: WHO-PAN, UN-GENEVA
- DoubleCheck: WHO-PAN, UN-GENEVA
- AsOfDate: 2026-05-13

### Frage 44: In welchem Land liegt Genf?
- QuestionID: `geo2026_044`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Europa
- Locations: Schweiz
- Options:
  - Schweiz
  - Frankreich
  - Belgien
  - Österreich
- CorrectAnswer: Schweiz.
- Context: Basisgeografie für WHO, UNHCR, ILO und viele internationale Organisationen.
- ImplementationHints: singleAnswer=CH
- RiskFlag: low
- Source: UN-GENEVA, WHO-PAN
- DoubleCheck: UN-GENEVA, WHO-PAN
- AsOfDate: 2026-05-13

### Frage 45: Welche Organisation gehört nicht primär zu Genf: WHO, UNHCR, ILO oder ICC?
- QuestionID: `geo2026_045`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa
- Locations: ICC → Den Haag
- Options:
  - WHO
  - UNHCR
  - ILO
  - ICC
- CorrectAnswer: ICC. Der Internationale Strafgerichtshof sitzt in Den Haag; WHO, UNHCR und ILO sind stark mit Genf verbunden.
- Context: Verhindert typische Verwechslungen internationaler Organisationen und Orte.
- ImplementationHints: singleAnswer=ICC
- RiskFlag: low
- Source: UN-GENEVA, ICC
- DoubleCheck: UN-GENEVA, ICC
- AsOfDate: 2026-05-13

## Kategorie: BRICS, Globaler Süden und neue Mitglieder

### Frage 46: Welche dieser Staaten gehören zu den afrikanischen BRICS-Mitgliedern im erweiterten BRICS-Kontext?
- QuestionID: `geo2026_046`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Afrika/Asien/Amerika
- Locations: Südafrika, Ägypten, Äthiopien
- Options:
  - Südafrika
  - Ägypten
  - Äthiopien
  - Nigeria
  - Kenia
  - Marokko
- CorrectAnswer: Südafrika, Ägypten und Äthiopien.
- Context: BRICS ist geopolitisch DJS-relevant; die geografische Verteilung zeigt Süd-Süd-Politik.
- ImplementationHints: multipleAnswers; exactSet=[ZA,EG,ET]; note=NigeriaPartnerNotFullMemberAsOfSources
- RiskFlag: medium
- Source: BRICS-2026, BRICS-BR
- DoubleCheck: BRICS-2026, BRICS-BR
- AsOfDate: 2026-05-13

### Frage 47: Markiere die ursprünglichen BRICS-Staaten auf der Weltkarte.
- QuestionID: `geo2026_047`
- Type: map-interactive
- Schwierigkeit: mittel
- Region: Welt
- Locations: Brasilien, Russland, Indien, China, Südafrika
- CorrectAnswer: Brasilien, Russland, Indien, China und Südafrika.
- Context: Klassische geopolitische Kartengruppe; gute Weltkartenfrage.
- ImplementationHints: mapLayer=sovereignStates; featureIds=[BR,RU,IN,CN,ZA]
- RiskFlag: low
- Source: BRICS-2026, BRICS-BR
- DoubleCheck: BRICS-2026, BRICS-BR
- AsOfDate: 2026-05-13

### Frage 48: Welches südostasiatische Land wird in aktuellen BRICS-Quellen als Mitglied ab 2025 geführt?
- QuestionID: `geo2026_048`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Asien
- Locations: Indonesien
- Options:
  - Indonesien
  - Thailand
  - Vietnam
  - Malaysia
- CorrectAnswer: Indonesien.
- Context: Aktualitätsfrage; nur mit festem Quellenstand verwenden.
- ImplementationHints: singleAnswer=ID; asOf=2026-05-13
- RiskFlag: medium
- Source: BRICS-2026, BRICS-BR
- DoubleCheck: BRICS-2026, BRICS-BR
- AsOfDate: 2026-05-13

## Kategorie: USA, Nordamerika und Handelspolitik

### Frage 49: Welche zwei Staaten haben eine Landgrenze mit den USA?
- QuestionID: `geo2026_049`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Amerika
- Locations: Kanada, Mexiko
- Options:
  - Kanada
  - Mexiko
  - Kuba
  - Panama
  - Brasilien
- CorrectAnswer: Kanada und Mexiko.
- Context: Bei US-Zoll-, Grenz- und Migrationsthemen ist Basisgeografie Nordamerikas Pflicht.
- ImplementationHints: multipleAnswers; exactSet=[CA,MX]
- RiskFlag: low
- Source: SRC-QUESTIONS, DJS
- DoubleCheck: SRC-QUESTIONS, DJS
- AsOfDate: 2026-05-13

### Frage 50: Markiere die US-mexikanische Grenze.
- QuestionID: `geo2026_050`
- Type: map-interactive
- Schwierigkeit: mittel
- Region: Amerika
- Locations: USA, Mexiko
- CorrectAnswer: Grenzlinie zwischen USA und Mexiko von Kalifornien/Baja California bis Texas/Tamaulipas markieren.
- Context: Relevant für Trump-Grenzpolitik, Migration und Zoll-/Handelsthemen.
- ImplementationHints: mapLayer=internationalBoundaries; featurePair=[US,MX]; toleranceLineKm=50
- RiskFlag: low
- Source: SRC-QUESTIONS, DJS
- DoubleCheck: SRC-QUESTIONS, DJS
- AsOfDate: 2026-05-13

### Frage 51: Welche drei Länder bilden das USMCA-Handelsgebiet?
- QuestionID: `geo2026_051`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Amerika
- Locations: USA, Mexiko, Kanada
- Options:
  - USA
  - Mexiko
  - Kanada
  - Brasilien
  - Argentinien
- CorrectAnswer: USA, Mexiko und Kanada.
- Context: Handelspolitik-Fragen lassen sich stabil als Nordamerika-Geografie üben.
- ImplementationHints: multipleAnswers; exactSet=[US,MX,CA]
- RiskFlag: low
- Source: SRC-REPORT, DJS
- DoubleCheck: SRC-REPORT, DJS
- AsOfDate: 2026-05-13

## Kategorie: Vatikan, Rom und katholische Weltgeografie

### Frage 52: Markiere den Vatikanstaat innerhalb von Rom.
- QuestionID: `geo2026_052`
- Type: map-interactive
- Schwierigkeit: mittel
- Region: Europa
- Locations: Vatikanstadt, Rom, Italien
- CorrectAnswer: Vatikanstadt ist ein eigener Staat, vollständig von Italien/Rom umgeben.
- Context: Papstwechsel 2025 ist DJS-relevant; geografisch sollte Vatikan ≠ Italien sauber modelliert werden.
- ImplementationHints: mapLayer=microstates; featureId=VA; nestedIn=Rome; countryNotItaly=true
- RiskFlag: low
- Source: VATICAN-FRANCIS, VATICAN-LEO
- DoubleCheck: VATICAN-FRANCIS, VATICAN-LEO
- AsOfDate: 2026-05-13

### Frage 53: Welcher Staat umschließt den Vatikan vollständig?
- QuestionID: `geo2026_053`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Europa
- Locations: Italien
- Options:
  - Italien
  - San Marino
  - Frankreich
  - Schweiz
- CorrectAnswer: Italien.
- Context: Basisfrage zum kleinsten Staat und Papstberichterstattung.
- ImplementationHints: singleAnswer=IT
- RiskFlag: low
- Source: VATICAN-FRANCIS, VATICAN-LEO
- DoubleCheck: VATICAN-FRANCIS, VATICAN-LEO
- AsOfDate: 2026-05-13

### Frage 54: In welcher Stadt Argentiniens wurde Papst Franziskus geboren?
- QuestionID: `geo2026_054`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Amerika
- Locations: Buenos Aires, Argentinien
- Options:
  - Buenos Aires
  - Lima
  - Santiago de Chile
  - Montevideo
- CorrectAnswer: Buenos Aires.
- Context: Verbindet Personenwissen mit Geografie: Franziskus war der erste Papst aus Lateinamerika.
- ImplementationHints: singleAnswer=BuenosAires
- RiskFlag: low
- Source: VATICAN-FRANCIS, SRC-QUESTIONS
- DoubleCheck: VATICAN-FRANCIS, SRC-QUESTIONS
- AsOfDate: 2026-05-13

## Kategorie: Indien, China und Demografie Asien

### Frage 55: Welches Land gilt seit 2023 als bevölkerungsreichstes Land der Welt?
- QuestionID: `geo2026_055`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Asien
- Locations: Indien
- Options:
  - China
  - Indien
  - USA
  - Indonesien
- CorrectAnswer: Indien.
- Context: DJS-Altteststoff und aktuelles Weltgeografie-Basiswissen.
- ImplementationHints: singleAnswer=IN
- RiskFlag: low
- Source: UN-DESA-INDIA, UN-DESA-INDIA2
- DoubleCheck: UN-DESA-INDIA, UN-DESA-INDIA2
- AsOfDate: 2026-05-13

### Frage 56: Markiere Indien und China auf einer Asienkarte.
- QuestionID: `geo2026_056`
- Type: map-interactive
- Schwierigkeit: leicht
- Region: Asien
- Locations: Indien (IN), China (CN)
- CorrectAnswer: Beide Länder markieren; keine Grenzlinie im Himalaya abfragen, da Teile des Grenzverlaufs politisch strittig sind.
- Context: Geografie zur Demografie und Weltmachtverschiebung.
- ImplementationHints: mapLayer=sovereignStates; featureIds=[IN,CN]; avoidDisputedBoundaryLine=true
- RiskFlag: medium
- Source: UN-DESA-INDIA, UN-DESA-INDIA2
- DoubleCheck: UN-DESA-INDIA, UN-DESA-INDIA2
- AsOfDate: 2026-05-13

### Frage 57: Welche Hauptstädte gehören zu Indien und China?
- QuestionID: `geo2026_057`
- Type: matching
- Schwierigkeit: leicht
- Region: Asien
- Locations: Indien, China, Neu-Delhi, Peking/Beijing
- CorrectAnswer: Indien → Neu-Delhi; China → Peking/Beijing.
- Context: Robustes Hauptstadtwissen ohne dynamische Politikfalle.
- ImplementationHints: matchingPairs; accepted=[Neu-Delhi,New Delhi,Peking,Beijing]
- RiskFlag: low
- Source: UN-DESA-INDIA, SRC-QUESTIONS
- DoubleCheck: UN-DESA-INDIA, SRC-QUESTIONS
- AsOfDate: 2026-05-13

## Kategorie: Südkorea und Türkei: Demokratiekrisen als Kartenwissen

### Frage 58: In welchem Land liegt Seoul?
- QuestionID: `geo2026_058`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Asien
- Locations: Südkorea
- Options:
  - Südkorea
  - Japan
  - China
  - Thailand
- CorrectAnswer: Südkorea.
- Context: Südkorea war im Report über Kriegsrecht/Neuwahlen und im Alttest über Itaewon relevant.
- ImplementationHints: singleAnswer=KR
- RiskFlag: low
- Source: CARNEGIE-KOREA, SRC-QUESTIONS
- DoubleCheck: CARNEGIE-KOREA, SRC-QUESTIONS
- AsOfDate: 2026-05-13

### Frage 59: Welche Stadt ist die größte Stadt der Türkei und war 2025 wegen der Verhaftung ihres Bürgermeisters DJS-relevant?
- QuestionID: `geo2026_059`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Asien/Europa
- Locations: Istanbul
- Options:
  - Istanbul
  - Ankara
  - Izmir
  - Bursa
- CorrectAnswer: Istanbul.
- Context: Wichtig: Istanbul ist größte Stadt, Ankara ist Hauptstadt.
- ImplementationHints: singleAnswer=Istanbul
- RiskFlag: low
- Source: HRW-IMAMOGLU, PACE-IMAMOGLU
- DoubleCheck: HRW-IMAMOGLU, PACE-IMAMOGLU
- AsOfDate: 2026-05-13

### Frage 60: Ordne die Hauptstädte zu: Türkei und Südkorea.
- QuestionID: `geo2026_060`
- Type: matching
- Schwierigkeit: leicht
- Region: Asien/Europa
- Locations: Türkei, Südkorea, Ankara, Seoul
- CorrectAnswer: Türkei → Ankara; Südkorea → Seoul.
- Context: Verhindert die typische Istanbul/Ankara-Verwechslung und festigt Asienkartenwissen.
- ImplementationHints: matchingPairs
- RiskFlag: low
- Source: HRW-IMAMOGLU, CARNEGIE-KOREA
- DoubleCheck: HRW-IMAMOGLU, CARNEGIE-KOREA
- AsOfDate: 2026-05-13

## Kategorie: Island, Reykjanes und Naturgefahren

### Frage 61: In welchem Land liegt die Blaue Lagune, die wegen Erdbeben-/Vulkanaktivität zeitweise geschlossen wurde?
- QuestionID: `geo2026_061`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Europa
- Locations: Island
- Options:
  - Island
  - Neuseeland
  - Japan
  - Türkei
- CorrectAnswer: Island.
- Context: Alttest-Geografiefrage zu Naturgefahren; der Kontext bleibt prüfungsrelevant.
- ImplementationHints: singleAnswer=IS
- RiskFlag: low
- Source: ICELAND-GOV, SMITH-REYK
- DoubleCheck: ICELAND-GOV, SMITH-REYK
- AsOfDate: 2026-05-13

### Frage 62: Markiere die Reykjanes-Halbinsel im Südwesten Islands.
- QuestionID: `geo2026_062`
- Type: map-interactive
- Schwierigkeit: schwer
- Region: Europa
- Locations: Reykjanes Peninsula, Island
- CorrectAnswer: Reykjanes liegt im Südwesten Islands, nahe Keflavík/Grindavík und der Blauen Lagune.
- Context: Gute schwere Kartenfrage, weil sie nicht nur das Land, sondern eine Naturgefahrenregion abfragt.
- ImplementationHints: mapLayer=regionalPolygon; featureId=Reykjanes; toleranceKm=40
- RiskFlag: low
- Source: ICELAND-GOV, SMITH-REYK
- DoubleCheck: ICELAND-GOV, SMITH-REYK
- AsOfDate: 2026-05-13

### Frage 63: Welche zwei tektonischen Platten driften in Island auseinander?
- QuestionID: `geo2026_063`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa/Atlantik
- Locations: Nordamerikanische Platte, Eurasische Platte
- Options:
  - Nordamerikanische Platte
  - Eurasische Platte
  - Afrikanische Platte
  - Arabische Platte
- CorrectAnswer: Nordamerikanische und Eurasische Platte.
- Context: Geografische Besonderheit Islands: Mittelatlantischer Rücken, Vulkanismus, Erdbeben.
- ImplementationHints: multipleAnswers; exactSet=[NorthAmericanPlate,EurasianPlate]
- RiskFlag: low
- Source: ICELAND-GOV, SMITH-REYK
- DoubleCheck: ICELAND-GOV, SMITH-REYK
- AsOfDate: 2026-05-13

## Kategorie: Kanada-Waldbrände und transnationale Klimafolgen

### Frage 64: Waldbrände in welchem Land lösten 2023 Smog-Alarm bis nach New York aus?
- QuestionID: `geo2026_064`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Amerika
- Locations: Kanada
- Options:
  - Australien
  - Kanada
  - Brasilien
  - USA
- CorrectAnswer: Kanada.
- Context: Originalnaher DJS-Geografiestoff; zeigt, dass Klimaereignisse grenzüberschreitend wirken.
- ImplementationHints: singleAnswer=CA
- RiskFlag: low
- Source: SRC-QUESTIONS, WMO-GLOBAL-2025
- DoubleCheck: SRC-QUESTIONS, WMO-GLOBAL-2025
- AsOfDate: 2026-05-13

### Frage 65: Markiere Kanada und New York City, um die Transportstrecke des Rauchs zu visualisieren.
- QuestionID: `geo2026_065`
- Type: map-interactive
- Schwierigkeit: mittel
- Region: Amerika
- Locations: Kanada, New York City, USA
- CorrectAnswer: Kanada als Ursprungsland und New York City im Nordosten der USA markieren; keine exakte Rauchwolke nötig.
- Context: Gut für interaktive Karten: Ereignisland plus betroffener Ort.
- ImplementationHints: mapLayer=countryAndCity; requiredCountry=CA; requiredCity=NewYorkCity; noSmokeTrajectoryScoring=true
- RiskFlag: low
- Source: SRC-QUESTIONS, WMO-GLOBAL-2025
- DoubleCheck: SRC-QUESTIONS, WMO-GLOBAL-2025
- AsOfDate: 2026-05-13

### Frage 66: Welche US-Stadt wurde 2023 besonders sichtbar durch den orangefarbenen Himmel infolge kanadischer Waldbrandrauchwolken?
- QuestionID: `geo2026_066`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Amerika
- Locations: New York City
- Options:
  - New York City
  - Los Angeles
  - Miami
  - Seattle
- CorrectAnswer: New York City.
- Context: Medienbildstarkes Klimaereignis und typische DJS-Verknüpfung von Ereignis und Ort.
- ImplementationHints: singleAnswer=NewYorkCity
- RiskFlag: low
- Source: SRC-QUESTIONS, WMO-GLOBAL-2025
- DoubleCheck: SRC-QUESTIONS, WMO-GLOBAL-2025
- AsOfDate: 2026-05-13

## Kategorie: Lateinamerika: Ecuador, El Salvador und Brasilien

### Frage 67: In welchem Land wurde 2023 ein Präsidentschaftskandidat bei einer Wahlveranstaltung in Quito erschossen?
- QuestionID: `geo2026_067`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Amerika
- Locations: Ecuador
- Options:
  - Mexiko
  - Kolumbien
  - Ecuador
  - Peru
- CorrectAnswer: Ecuador.
- Context: Altteststoff; geografisch wichtig: Quito ist Hauptstadt Ecuadors, nicht Mexikos oder Kolumbiens.
- ImplementationHints: singleAnswer=EC
- RiskFlag: low
- Source: SRC-QUESTIONS, DJS
- DoubleCheck: SRC-QUESTIONS, DJS
- AsOfDate: 2026-05-13

### Frage 68: Welches Land führte 2021 Bitcoin als gesetzliches Zahlungsmittel ein?
- QuestionID: `geo2026_068`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Amerika
- Locations: El Salvador
- Options:
  - Panama
  - El Salvador
  - Honduras
  - Mexiko
- CorrectAnswer: El Salvador.
- Context: DJS-Altteststoff mit klarer Zentralamerika-Verortung.
- ImplementationHints: singleAnswer=SV
- RiskFlag: low
- Source: SRC-QUESTIONS, DJS
- DoubleCheck: SRC-QUESTIONS, DJS
- AsOfDate: 2026-05-13

### Frage 69: Ordne die Hauptstädte zu: Ecuador, El Salvador, Brasilien.
- QuestionID: `geo2026_069`
- Type: matching
- Schwierigkeit: mittel
- Region: Amerika
- Locations: Quito, San Salvador, Brasília
- CorrectAnswer: Ecuador → Quito; El Salvador → San Salvador; Brasilien → Brasília.
- Context: Verdichtet drei DJS-nahe Lateinamerika-Themen in einem Hauptstadt-Matching.
- ImplementationHints: matchingPairs; accepted=[Quito,San Salvador,Brasília,Brasilia]
- RiskFlag: low
- Source: SRC-QUESTIONS, UNFCCC-COP30
- DoubleCheck: SRC-QUESTIONS, UNFCCC-COP30
- AsOfDate: 2026-05-13

## Kategorie: Japan, Hiroshima und Nagasaki

### Frage 70: In welchen japanischen Städten wurden 2025 die 80. Jahrestage der Atombombenabwürfe begangen?
- QuestionID: `geo2026_070`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Asien
- Locations: Hiroshima, Nagasaki
- Options:
  - Hiroshima
  - Nagasaki
  - Tokio
  - Osaka
- CorrectAnswer: Hiroshima und Nagasaki.
- Context: Geschichte/Jahrestage sind DJS-relevant; geografisch eindeutige Städtefrage.
- ImplementationHints: multipleAnswers; exactSet=[Hiroshima,Nagasaki]
- RiskFlag: low
- Source: SRC-QUESTIONS, DJS
- DoubleCheck: SRC-QUESTIONS, DJS
- AsOfDate: 2026-05-13

### Frage 71: Auf welcher japanischen Hauptinsel liegt Hiroshima?
- QuestionID: `geo2026_071`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Asien
- Locations: Honshū/Honshu
- Options:
  - Honshū
  - Kyūshū
  - Hokkaidō
  - Shikoku
- CorrectAnswer: Honshū.
- Context: Schwere Geografievariante für Kandidat:innen, die über bloße Städtenamen hinausgehen.
- ImplementationHints: singleAnswer=Honshu; accepted=[Honshū,Honshu]
- RiskFlag: low
- Source: SRC-QUESTIONS, DJS
- DoubleCheck: SRC-QUESTIONS, DJS
- AsOfDate: 2026-05-13

### Frage 72: Auf welcher japanischen Hauptinsel liegt Nagasaki?
- QuestionID: `geo2026_072`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Asien
- Locations: Kyūshū/Kyushu
- Options:
  - Kyūshū
  - Honshū
  - Hokkaidō
  - Shikoku
- CorrectAnswer: Kyūshū.
- Context: Ergänzt Hiroshima/Honshū und verhindert reine Auswendiglernfrage.
- ImplementationHints: singleAnswer=Kyushu; accepted=[Kyūshū,Kyushu]
- RiskFlag: low
- Source: SRC-QUESTIONS, DJS
- DoubleCheck: SRC-QUESTIONS, DJS
- AsOfDate: 2026-05-13

## Kategorie: Ozeanien und Pazifik: Klimarisiken und Inselstaaten

### Frage 73: Welche dieser Staaten sind pazifische Inselstaaten beziehungsweise SIDS im Pazifik?
- QuestionID: `geo2026_073`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Ozeanien
- Locations: Fidschi, Kiribati, Tuvalu, Samoa
- Options:
  - Fidschi
  - Kiribati
  - Tuvalu
  - Samoa
  - Malta
  - Island
- CorrectAnswer: Fidschi, Kiribati, Tuvalu und Samoa.
- Context: Ozeanien muss im Fragenset abgedeckt sein; Klimarisiken kleiner Inselstaaten sind DJS-nah über Klima/Resilienz.
- ImplementationHints: multipleAnswers; exactSet=[FJ,KI,TV,WS]
- RiskFlag: low
- Source: UN-OHRLLS-SIDS, WORLD-BANK-PACIFIC
- DoubleCheck: UN-OHRLLS-SIDS, WORLD-BANK-PACIFIC
- AsOfDate: 2026-05-13

### Frage 74: Markiere Tuvalu im zentralen Pazifik.
- QuestionID: `geo2026_074`
- Type: map-interactive
- Schwierigkeit: schwer
- Region: Ozeanien
- Locations: Tuvalu
- CorrectAnswer: Tuvalu ist ein sehr kleiner pazifischer Inselstaat; Kartenvalidierung sollte großzügige Toleranz um den Inselstaat erlauben.
- Context: Klimawandel/Meeresspiegelanstieg: robuste Ozeanien-Kartenfrage mit hoher DJS-Nähe.
- ImplementationHints: mapLayer=islandStates; featureId=TV; toleranceKm=250; zoomHint=Pacific
- RiskFlag: medium
- Source: UN-OHRLLS-SIDS, WORLD-BANK-PACIFIC
- DoubleCheck: UN-OHRLLS-SIDS, WORLD-BANK-PACIFIC
- AsOfDate: 2026-05-13

### Frage 75: Welche Hauptstadt gehört zu Neuseeland?
- QuestionID: `geo2026_075`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Ozeanien
- Locations: Wellington
- Options:
  - Wellington
  - Auckland
  - Sydney
  - Canberra
- CorrectAnswer: Wellington.
- Context: Solides Ozeanien-Basiswissen; Auckland ist größte Stadt, aber nicht Hauptstadt.
- ImplementationHints: singleAnswer=Wellington
- RiskFlag: low
- Source: SRC-REPORT, DJS
- DoubleCheck: SRC-REPORT, DJS
- AsOfDate: 2026-05-13

## Kategorie: Sportereignisse und Austragungsorte

### Frage 76: Welche Stadt war Gastgeberin der Olympischen Sommerspiele 2024?
- QuestionID: `geo2026_076`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Europa
- Locations: Paris, Frankreich
- Options:
  - Paris
  - Los Angeles
  - Tokio
  - Brisbane
- CorrectAnswer: Paris.
- Context: Sport/Fototest ist laut Report ein Backlog-Thema; Austragungsorte sind typische DJS-Fragen.
- ImplementationHints: singleAnswer=Paris
- RiskFlag: low
- Source: IOC-PARIS-LA, SRC-REPORT
- DoubleCheck: IOC-PARIS-LA, SRC-REPORT
- AsOfDate: 2026-05-13

### Frage 77: Welche zwei Orte bilden den Namen der Olympischen Winterspiele 2026?
- QuestionID: `geo2026_077`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Europa
- Locations: Milano/Mailand und Cortina d’Ampezzo, Italien
- Options:
  - Milano/Mailand
  - Cortina d’Ampezzo
  - Turin
  - Innsbruck
  - Oslo
- CorrectAnswer: Milano/Mailand und Cortina d’Ampezzo.
- Context: Sportereignis plus Norditalien-Geografie.
- ImplementationHints: multipleAnswers; exactSet=[Milan,Cortina]; accepted=[Milano,Mailand,Milan,Cortina d'Ampezzo]
- RiskFlag: low
- Source: IOC-MILANO, SRC-REPORT
- DoubleCheck: IOC-MILANO, SRC-REPORT
- AsOfDate: 2026-05-13

### Frage 78: Welche australische Stadt ist Gastgeberin der Olympischen Sommerspiele 2032?
- QuestionID: `geo2026_078`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Ozeanien
- Locations: Brisbane, Australien
- Options:
  - Brisbane
  - Sydney
  - Melbourne
  - Perth
- CorrectAnswer: Brisbane.
- Context: Deckt Ozeanien über ein Sportthema ab und ist langfristig stabil.
- ImplementationHints: singleAnswer=Brisbane
- RiskFlag: low
- Source: IOC-BRISBANE, SRC-REPORT
- DoubleCheck: IOC-BRISBANE, SRC-REPORT
- AsOfDate: 2026-05-13

## Kategorie: Kultur, Restitution und koloniale Geografie

### Frage 79: An welches heutige Land gab Deutschland Benin-Bronzen zurück?
- QuestionID: `geo2026_079`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Afrika
- Locations: Nigeria
- Options:
  - Nigeria
  - Ghana
  - Kamerun
  - Äthiopien
- CorrectAnswer: Nigeria.
- Context: DJS-Altteststoff: Wichtig ist die Unterscheidung zwischen dem historischen Königreich Benin und dem heutigen Staat Benin.
- ImplementationHints: singleAnswer=NG
- RiskFlag: low
- Source: SRC-QUESTIONS, DJS
- DoubleCheck: SRC-QUESTIONS, DJS
- AsOfDate: 2026-05-13

### Frage 80: Markiere Nigeria in Westafrika.
- QuestionID: `geo2026_080`
- Type: map-interactive
- Schwierigkeit: leicht
- Region: Afrika
- Locations: Nigeria (NG)
- CorrectAnswer: Nigeria liegt in Westafrika am Golf von Guinea; Abuja ist Hauptstadt, Lagos größte Stadt.
- Context: Restitutionsdebatten sind Kultur/Politik, aber geografische Einordnung ist prüfungsrelevant.
- ImplementationHints: mapLayer=sovereignStates; featureId=NG
- RiskFlag: low
- Source: SRC-QUESTIONS, DJS
- DoubleCheck: SRC-QUESTIONS, DJS
- AsOfDate: 2026-05-13

### Frage 81: Was ist geografisch korrekt zum historischen Königreich Benin?
- QuestionID: `geo2026_081`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Afrika
- Locations: Es lag überwiegend im heutigen Nigeria, nicht im heutigen Staat Benin.
- Options:
  - Es lag überwiegend im heutigen Nigeria
  - Es war identisch mit dem heutigen Staat Benin
  - Es lag in Äthiopien
  - Es lag in Südafrika
- CorrectAnswer: Das historische Königreich Benin lag im Gebiet des heutigen südlichen Nigeria; der heutige Staat Benin ist etwas anderes.
- Context: Schwere Genauigkeitsfrage gegen eine sehr häufige Fehlannahme.
- ImplementationHints: singleAnswer=HistoricalBeninInModernNigeria
- RiskFlag: medium
- Source: SRC-QUESTIONS, DJS
- DoubleCheck: SRC-QUESTIONS, DJS
- AsOfDate: 2026-05-13

## Kategorie: Medienfreiheit, Desinformation und Orte der Berichterstattung

### Frage 82: Welche Konfliktregion ist im Report als zentrales Thema der Journalistensicherheit genannt?
- QuestionID: `geo2026_082`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Asien
- Locations: Palästina/Gaza
- Options:
  - Palästina/Gaza
  - Island
  - Luxemburg
  - Neuseeland
- CorrectAnswer: Palästina/Gaza.
- Context: Reporter ohne Grenzen und OCHA werden im Report als Quellenkontext für Journalistensicherheit und humanitäre Lage geführt.
- ImplementationHints: singleAnswer=PalestineGaza; label=conflictRegionNotState
- RiskFlag: high
- Source: RSF-PAL, OCHA-OPT, SRC-REPORT
- DoubleCheck: RSF-PAL, OCHA-OPT
- AsOfDate: 2026-05-13

### Frage 83: In welcher Stadt sitzen viele UN- und Menschenrechtsorganisationen, die für internationale Berichterstattung wichtig sind?
- QuestionID: `geo2026_083`
- Type: multiple-choice
- Schwierigkeit: leicht
- Region: Europa
- Locations: Genf
- Options:
  - Genf
  - Kopenhagen
  - Dublin
  - Warschau
- CorrectAnswer: Genf.
- Context: Medien-/Menschenrechtsberichte werden häufig über UN-Organisationen in Genf gerahmt.
- ImplementationHints: singleAnswer=Geneva
- RiskFlag: low
- Source: UN-GENEVA, WHO-PAN
- DoubleCheck: UN-GENEVA, WHO-PAN
- AsOfDate: 2026-05-13

### Frage 84: Ordne Institution und Ort zu: RSF, ICJ, WHO, EU-Kommission.
- QuestionID: `geo2026_084`
- Type: matching
- Schwierigkeit: schwer
- Region: Europa/Welt
- Locations: Paris, Den Haag, Genf, Brüssel
- CorrectAnswer: RSF → Paris; ICJ → Den Haag; WHO → Genf; EU-Kommission → Brüssel.
- Context: Verbindet Medienfreiheit, Recht, Gesundheit und EU-Politik mit Orten.
- ImplementationHints: matchingPairs; accepted=[Reporter ohne Grenzen/Paris]
- RiskFlag: low
- Source: RSF-PAL, ICJ, WHO-PAN, SRC-REPORT
- DoubleCheck: RSF-PAL, ICJ
- AsOfDate: 2026-05-13

## Kategorie: Aktive Konflikte: sichere Kartenlogik und Statusfallen

### Frage 85: Welche dieser Kartenfragen ist für eine DJS-App am sichersten formuliert?
- QuestionID: `geo2026_085`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Welt
- Locations: Ukraine/Gaza/Westbank/Crimea
- Options:
  - Markiere die Ukraine nach international anerkanntem Staatsgebiet
  - Markiere die aktuell russisch kontrollierten Gebiete ohne Datum
  - Markiere Palästina als normalen souveränen Staat ohne Hinweis
  - Markiere Saudi-Arabien als BRICS-Gründungsmitglied
- CorrectAnswer: „Markiere die Ukraine nach international anerkanntem Staatsgebiet“ ist sicherer als „Markiere die aktuell russisch kontrollierten Gebiete“.
- Context: Der Report verlangt bei Konflikten `as_of_date`, Quellenumfang und dynamischen Prüfstatus. Diese Meta-Frage schützt vor falscher Implementierung.
- ImplementationHints: singleAnswer=InternationallyRecognizedUkraine; metaQuestion=true
- RiskFlag: high
- Source: SRC-REPORT, SRC-CRITICAL
- DoubleCheck: SRC-REPORT, SRC-CRITICAL
- AsOfDate: 2026-05-13

### Frage 86: Welche Zusatzangabe ist bei Kartenfragen zu aktiven Kriegen zwingend?
- QuestionID: `geo2026_086`
- Type: multiple-choice
- Schwierigkeit: mittel
- Region: Welt
- Locations: as_of_date/last_checked/source_scope
- Options:
  - as_of_date/last_checked/source_scope
  - nur ein Emoji
  - nur Hauptstadt
  - keine Quelle
- CorrectAnswer: Ein Stichtag beziehungsweise `as_of_date`, `last_checked` und Quellenumfang.
- Context: Direkt aus der Reportlogik: dynamische Konflikte dürfen nicht zeitlos gespeichert werden.
- ImplementationHints: singleAnswer=asOfDateLastCheckedSourceScope; metaQuestion=true
- RiskFlag: low
- Source: SRC-REPORT, SRC-CRITICAL
- DoubleCheck: SRC-REPORT, SRC-CRITICAL
- AsOfDate: 2026-05-13

### Frage 87: Welche Antwort vermeidet eine Statusfalle bei Gaza?
- QuestionID: `geo2026_087`
- Type: multiple-choice
- Schwierigkeit: schwer
- Region: Asien
- Locations: Gaza als Gebiet/occupied Palestinian territory labeln
- Options:
  - Gaza als Gebiet/occupied Palestinian territory labeln
  - Gaza als EU-Staat labeln
  - Gaza als Hauptstadt Israels labeln
  - Gaza ohne Kontext als souveränen Staat labeln
- CorrectAnswer: Gaza als Gebiet beziehungsweise besetztes palästinensisches Gebiet labeln und nicht als normaler souveräner Staat behandeln.
- Context: Notwendig, damit der spätere Karten-Code keine politisch falschen Staatspolygone erzeugt.
- ImplementationHints: singleAnswer=TerritoryLabel; metaQuestion=true
- RiskFlag: high
- Source: OCHA-OPT, RSF-PAL, SRC-REPORT
- DoubleCheck: OCHA-OPT, RSF-PAL
- AsOfDate: 2026-05-13

## Kategorie: Text-Input-Sprint: Hauptstädte und präzise Ortsnamen

### Frage 88: Nenne die Hauptstadt der Ukraine.
- QuestionID: `geo2026_088`
- Type: text-input
- Schwierigkeit: leicht
- Region: Europa
- Locations: Ukraine, Kyjiw/Kiew
- CorrectAnswer: Kyjiw/Kiew.
- Context: Hauptstadtwissen zu einem DJS-Kernkonflikt; Schreibvarianten müssen akzeptiert werden.
- ImplementationHints: acceptedText=[Kyjiw,Kiew,Kyiv,Kiev]; caseInsensitive=true
- RiskFlag: medium
- Source: UK-UKR-TOP, UNHCR-UKR
- DoubleCheck: UK-UKR-TOP, UNHCR-UKR
- AsOfDate: 2026-05-13

### Frage 89: Nenne die Hauptstadt Litauens.
- QuestionID: `geo2026_089`
- Type: text-input
- Schwierigkeit: leicht
- Region: Europa
- Locations: Litauen, Vilnius
- CorrectAnswer: Vilnius.
- Context: Relevant zur Brigade Litauen und NATO-Ostflanke.
- ImplementationHints: acceptedText=[Vilnius,Wilna]; caseInsensitive=true
- RiskFlag: low
- Source: BW-LTU-1, BW-LTU-2
- DoubleCheck: BW-LTU-1, BW-LTU-2
- AsOfDate: 2026-05-13

### Frage 90: Nenne die Hauptstadt Sudans.
- QuestionID: `geo2026_090`
- Type: text-input
- Schwierigkeit: mittel
- Region: Afrika
- Locations: Sudan, Khartum/Khartoum
- CorrectAnswer: Khartum/Khartoum.
- Context: Humanitäre Krise plus Hauptstadtwissen.
- ImplementationHints: acceptedText=[Khartum,Khartoum]; caseInsensitive=true
- RiskFlag: low
- Source: OCHA-SUDAN, SRC-QUESTIONS
- DoubleCheck: OCHA-SUDAN, SRC-QUESTIONS
- AsOfDate: 2026-05-13

### Frage 91: Nenne die Hauptstadt Brasiliens.
- QuestionID: `geo2026_091`
- Type: text-input
- Schwierigkeit: leicht
- Region: Amerika
- Locations: Brasilien, Brasília
- CorrectAnswer: Brasília.
- Context: Verhindert Verwechslung mit Rio de Janeiro, São Paulo oder Belém/COP30.
- ImplementationHints: acceptedText=[Brasília,Brasilia]; caseInsensitive=true
- RiskFlag: low
- Source: UNFCCC-COP30, SRC-QUESTIONS
- DoubleCheck: UNFCCC-COP30, SRC-QUESTIONS
- AsOfDate: 2026-05-13

### Frage 92: Nenne die Hauptstadt Neuseelands.
- QuestionID: `geo2026_092`
- Type: text-input
- Schwierigkeit: leicht
- Region: Ozeanien
- Locations: Neuseeland, Wellington
- CorrectAnswer: Wellington.
- Context: Ozeanien-Basiswissen; Auckland ist die größte Stadt, aber nicht Hauptstadt.
- ImplementationHints: acceptedText=[Wellington]; caseInsensitive=true
- RiskFlag: low
- Source: SRC-REPORT, DJS
- DoubleCheck: SRC-REPORT, DJS
- AsOfDate: 2026-05-13

### Frage 93: Nenne die Stadt, in der sowohl ICJ als auch ICC sitzen.
- QuestionID: `geo2026_093`
- Type: text-input
- Schwierigkeit: mittel
- Region: Europa
- Locations: Den Haag, Niederlande
- CorrectAnswer: Den Haag/The Hague.
- Context: Internationale Gerichtsbarkeit ist DJS-relevant; Ortswissen statt reines Abkürzungswissen.
- ImplementationHints: acceptedText=[Den Haag,The Hague,'s-Gravenhage,s-Gravenhage]; caseInsensitive=true
- RiskFlag: low
- Source: ICJ, ICC
- DoubleCheck: ICJ, ICC
- AsOfDate: 2026-05-13

---

## Prüf- und Redaktionsnotizen

1. **Ukraine:** In der App nur international anerkannte Staatsgrenzen abfragen, nicht dynamische Kontrolllinien. Keine Krim-Frage ohne klare völkerrechtliche Statusnotiz.
2. **Gaza/Palästina:** Als Gebiet/occupied Palestinian territory modellieren. Keine Frage, die Staatlichkeit als unstrittigen Single-Choice-Fakt voraussetzt.
3. **BRICS:** Saudi-Arabien/Partnerstatus kann je nach Quelle und Zeitpunkt anders dargestellt sein. Für Quizbetrieb nur mit festem `as_of_date` und definierter Quelle nutzen.
4. **Fennoskandien/Regionen:** Bei Regionen mit variabler Definition Hinweise anzeigen oder nur Kernländer werten.
5. **Inselstaaten/Mikrostaaten:** Kartentoleranz großzügig setzen; bei Tuvalu/Vatikan nicht dieselben Pixelanforderungen wie bei Flächenstaaten.
6. **Kritische interne Fragen:** Alle aus `KRITISCHE_FRAGEN.md` markierten Inhalte nur korrigiert oder neu formuliert verwenden.

## Source Registry

- `SRC-REPORT` — Interne Recherchebasis 2025/2026: INHALT_Recherche-2025-2026.md
- `SRC-QUESTIONS` — Interne Fragensammlung: _ALLE_FRAGEN_UND_ANTWORTEN.md
- `SRC-CRITICAL` — Interne kritische Fragen / Korrekturhinweise: KRITISCHE_FRAGEN.md
- `DJS` — Deutsche Journalistenschule – Aufnahmeprüfungen: https://djs-online.de/bewerben/aufnahmepruefungen/
- `EU-MIG` — European Commission – Pact on Migration and Asylum: https://home-affairs.ec.europa.eu/policies/migration-and-asylum/pact-migration-and-asylum_en
- `EU-MIG-2026` — European Commission – Progress implementing Pact, application from 12 June 2026: https://home-affairs.ec.europa.eu/news/commission-reports-progress-implementing-pact-migration-and-asylum-2026-05-08_en
- `CONS-SCHENGEN` — Council of the EU – Schengen area explained: https://www.consilium.europa.eu/en/policies/schengen-area/
- `CONS-BG-RO` — Council of the EU – land border controls Bulgaria/Romania lifted from 1 Jan 2025: https://www.consilium.europa.eu/en/press/press-releases/2024/12/12/schengen-council-decides-to-lift-land-border-controls-with-bulgaria-and-romania/
- `CONS-RUS-SANC` — Council of the EU – Russia’s war against Ukraine: EU sanctions: https://www.consilium.europa.eu/en/policies/sanctions-against-russia/
- `NATO-UKR` — NATO – NATO’s support for Ukraine: https://www.nato.int/en/what-we-do/partnerships-and-cooperation/natos-support-for-ukraine
- `NATO-MEMBERS` — NATO – Member countries: https://www.nato.int/en/about-us/organization/nato-member-countries
- `BW-LTU-1` — Bundeswehr – Deutsche Panzerbrigade 45 in Litauen in Dienst gestellt: https://www.bundeswehr.de/de/organisation/heer/aktuelles/deutsche-panzerbrigade-45-litauen-indienststellung-5927738
- `BW-LTU-2` — Bundeswehr – Panzerbrigade 45: https://www.bundeswehr.de/de/organisation/heer/struktur/10-panzerdivision/panzerbrigade-45
- `UNHCR-UKR` — UNHCR Operational Data Portal – Ukraine Refugee Situation: https://data.unhcr.org/en/situations/ukraine
- `UK-UKR-TOP` — UK Permanent Committee on Geographical Names – Ukraine Toponymic Factfile: https://assets.publishing.service.gov.uk/media/68f0de991c9076042263ef60/Ukraine_Toponymic_Factfile.pdf
- `OCHA-OPT` — OCHA oPt – Humanitarian Situation Report: https://www.ochaopt.org/content/humanitarian-situation-report-1-may-2026
- `RSF-PAL` — Reporter ohne Grenzen – Palestine: https://rsf.org/en/country/palestine
- `OCHA-SUDAN` — OCHA – Sudan Humanitarian Needs and Response Plan 2026: https://www.unocha.org/publications/report/sudan/sudan-humanitarian-needs-and-response-plan-2026-april-2026
- `OCHA-DRC` — OCHA – Democratic Republic of the Congo: https://www.unocha.org/democratic-republic-congo
- `UN-DESA-INDIA` — UN DESA – India overtakes China as world’s most populous country: https://www.un.org/development/desa/pd/content/india-overtakes-china-world%E2%80%99s-most-populous-country
- `UN-DESA-INDIA2` — UN DESA – India to overtake China in April 2023: https://www.un.org/en/desa/india-overtake-china-world-most-populous-country-april-2023-united-nations-projects
- `UNFCCC-COP30` — UNFCCC – COP30 Belém: https://unfccc.int/cop30
- `UN-COP30` — United Nations – COP30 closes in Belém: https://www.un.org/en/climatechange/cop30
- `WMO-GLOBAL-2025` — WMO – State of the Global Climate 2025: https://wmo.int/publication-series/state-of-global-climate/state-of-global-climate-2025
- `WMO-EUROPE-2025` — WMO – European State of the Climate 2025: https://wmo.int/resources/publication-series/state-of-climate-europe/european-state-of-climate-2025
- `EC-CBAM` — European Commission – Carbon Border Adjustment Mechanism: https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en
- `EC-CBAM-2026` — European Commission – CBAM successfully entered into force on 1 Jan 2026: https://taxation-customs.ec.europa.eu/news/cbam-successfully-entered-force-1-january-2026-2026-01-14_en
- `EC-AI` — European Commission – AI Act: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- `EC-DATA` — European Commission – Data Act: https://commission.europa.eu/news-and-media/news/data-act-enters-force-what-it-means-you-2024-01-11_en
- `EC-EUDI` — European Commission – European Digital Identity: https://commission.europa.eu/topics/digital-economy-and-society/european-digital-identity_en
- `WHO-PAN` — WHO – WHO Pandemic Agreement: https://www.who.int/health-topics/who-pandemic-agreement
- `WHO-PABS` — WHO – Member States extend negotiations on PABS annex: https://www.who.int/news/item/01-05-2026-who-member-states-agree-to-extend-negotiations-on-pathogen-access-and-benefit-sharing-annex
- `WHO-MENA` — WHO – Conflict deepens health crisis across Middle East: https://www.who.int/news/item/11-03-2026-conflict-deepens-health-crisis-across-middle-east--who-says
- `ICJ` — International Court of Justice – official site: https://www.icj-cij.org/home
- `ICC` — International Criminal Court – how the Court works: https://www.icc-cpi.int/about/how-the-court-works
- `UNOV` — United Nations Office at Vienna: https://www.unov.org/unov/index.html
- `UN-GENEVA` — United Nations Geneva: https://www.ungeneva.org/en/about/organizations
- `VATICAN-FRANCIS` — Holy See Press Office – Declaration of the death of Pope Francis: https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2025/04/21/250421d.html
- `VATICAN-LEO` — Vatican News – Leo XIV is the new Pope: https://www.vaticannews.va/en/pope/news/2025-05/cardinal-elected-pope-papal-name.html
- `ICELAND-GOV` — Government of Iceland – Volcanic activity in Reykjanes: https://www.government.is/topics/public-safety-and-security/volcanic-activity-in-reykjanes/
- `SMITH-REYK` — Smithsonian Global Volcanism Program – Reykjanes: https://volcano.si.edu/volcano.cfm?vn=371020
- `ENTSOE-BLACKOUT` — ENTSO-E – 28 April 2025 Iberian blackout: https://www.entsoe.eu/publications/blackout/28-april-2025-iberian-blackout/
- `ACER-BLACKOUT` — ACER – Expert panel to investigate Portugal/Spain blackout: https://www.acer.europa.eu/news/expert-panel-investigate-blackout-portugal-and-spain
- `BRICS-2026` — BRICS India 2026 – About Us: https://www.brics2026.gov.in/about-us/
- `BRICS-BR` — BRICS Brazil – About the BRICS: https://brics.br/en/about-the-brics
- `UN-OHRLLS-SIDS` — UN-OHRLLS – List of Small Island Developing States: https://www.un.org/ohrlls/content/list-sids
- `WORLD-BANK-PACIFIC` — World Bank – Pacific atoll adaptation pathways: https://www.worldbank.org/en/news/press-release/2024/11/14/protect-accommodate-or-retreat-new-world-bank-research-outlines-adaptation-pathways-for-pacific-atoll-countries
- `IOC-PARIS-LA` — IOC – 2024/2028 Host City Election: https://www.olympics.com/ioc/2024-2028-host-city-election
- `IOC-MILANO` — IOC – Milano Cortina 2026: https://www.olympics.com/ioc/milano-cortina-2026
- `IOC-BRISBANE` — IOC – Brisbane 2032: https://www.olympics.com/ioc/brisbane-2032
- `HRW-IMAMOGLU` — Human Rights Watch – Türkiye: Istanbul Mayor Detained: https://www.hrw.org/news/2025/03/19/turkiye-istanbul-mayor-detained
- `PACE-IMAMOGLU` — Council of Europe PACE Resolution 2597 (2025) – arrest of the Mayor of Istanbul: https://internazionale.camera.it/sites/internazionale/files/atti_approv/Res.%202597%20%282025%29_EN.pdf
- `CARNEGIE-KOREA` — Carnegie – Yoon’s failed political coup and South Korea crisis: https://carnegieendowment.org/research/2024/12/yoons-failed-political-coup-and-south-koreas-mounting-crisis
