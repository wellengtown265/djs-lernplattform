# CHANGELOG_FRAGEN.md

## 2026-05-13 — Erstkorrektur nach KORREKTUR_FRAGEN_V1.md

Alle 19 geflaggten Fragen wurden auf Basis von KORREKTUR_FRAGEN_V1.md und Cross-Check über offizielle Quellen / etablierte Medien (Bundeswahlleiterin, NASA, BVerwG, US DOJ, ZDF, Tagesschau, Duden, Salesforce, EEAS u. a.) auto-korrigiert. Alle berührten Fragen tragen nun `reviewStatus: "ok"`, ein `reviewNote` mit Kurzangabe der Änderung und `asOfDate: "2026-05-13"`.

### Auto-korrigiert (A) — 19 Fragen

- **F114 / djs2025sc001** — Rückkehr Wilmore/Williams auf 18. März 2025 (statt Februar 2025); NASA-Quelle ergänzt. Quelle: https://www.nasa.gov/blogs/spacestation/2025/03/18/dragon-undocks-with-spacex-crew-9-members-for-return-to-earth/
- **F29 / djs2025mc001** — Frage mit festem Zeitfenster (Dez 2024–Apr 2025); Vancouver auf Lapu-Lapu-Day-Festival 26.04.2025 korrigiert; Mannheim als Amokfahrt 03.03.2025 präzisiert.
- **F30 / djs2025mc002** — Antwortschlüssel um „Wokeness“ und „Klimakleber“ erweitert (laut Duden-Pressemitteilung 2024 Neuaufnahmen). Quelle: https://www.duden.de/presse/Der-neue-Duden-ist-da
- **F115 / djs2025mc003** — Slack korrekt Salesforce zugeordnet (nicht Microsoft); Zoom als US-Unternehmen präzisiert. Quelle: https://www.salesforce.com/news/press-releases/2021/07/21/slack-acquisition-completed/
- **F39 / djs2025sc007** — İmamoğlu-Vorwürfe korrigiert auf Korruption und Terrorismus (vorher fälschlich „Beleidigung Wahlbehörde“).
- **F105 / djs2025match002** — Widerspruch „BIP 0,2 Prozent“ vs. „zweites Rezessionsjahr“ aufgelöst; nun als schwache Erholung formuliert.
- **F4 / djs2025match004** — Brandenburg → SPD-CDU (nach Bruch SPD-BSW Anfang 2026); Sachsen als CDU-SPD-Minderheitsregierung; Hamburg an Bürgerschaftswahl 2025 angepasst; Fragetext erweitert auf „2024/2025 bis Frühjahr 2026“. Quellen: https://www.zdfheute.de/politik/deutschland/brandenburg-spd-cdu-koalitionsvertrag-bsw-100.html , https://www.zdf.de/nachrichten/politik/deutschland/sachsen-koalition-einigung-cdu-spd-100.html , https://de.wikipedia.org/wiki/B%C3%BCrgerschaftswahl_in_Hamburg_2025
- **F43 / djs2024sc005** — Korrekte Antwort 80 (Kandidaturankündigung 25.04.2023, Biden Jahrgang 20.11.1942) statt zuvor 81. Quelle: https://www.whitehouse.gov/briefing-room/statements-releases/2023/04/25/statement-from-president-joe-biden-on-his-reelection-campaign/
- **F106 / djs2023sc002** — Verurteilung zu 25 Jahren erfolgte März 2024 (nicht 2023); Schuldspruch 2023. Quelle: https://www.justice.gov/archives/opa/pr/samuel-bankman-fried-sentenced-25-years-his-orchestration-multiple-fraudulent-schemes
- **F90 / djs2023mc001** — Widerspruch Pfirsichbäume vs. Sonnenblumen aufgelöst; Erklärung benennt nun beide Van-Gogh-Fälle (Courtauld London Juni 2022 / National Gallery).
- **F91 / djs2022sc001** — Emmy-Aussage korrigiert: Squid Game war erste nicht-englischsprachige Serie, die für Outstanding Drama Series nominiert wurde (nicht Gewinnerin); gewann Emmys u. a. für Regie und Hauptdarsteller.
- **F107 / djs2022sc003** — Jan Marsalek korrekt als Wirecard-Vorstand/COO bezeichnet (nicht Chefbuchhalter).
- **F94 / djs2019sc006** — Echo wurde vom Bundesverband Musikindustrie (BVMI) beendet (nicht vom Deutschen Musikrat).
- **F8 / djs2025dp001** — Wahlbeteiligung auf 82,5 Prozent korrigiert (statt „rund 84 Prozent“); Parteien im Bundestag korrekt aufgezählt (SPD, CDU, CSU, Grüne, AfD, Linke, SSW; FDP und BSW gescheitert). Quelle: https://www.bundeswahlleiterin.de/bundestagswahlen/2025/ergebnisse/bund-99.html
- **F9 / djs2025dp002** — FDP scheiterte an Fünf-Prozent-Hürde (nicht knapp darüber); Linke zog mit 8,8 Prozent ein (nicht nur über Direktmandate); Prozentzahlen 28,5/20,8/16,4/11,6/8,8 ergänzt.
- **F16 / djs2025dp009** — Falsche 3,5-Prozent-BIP-Behauptung gestrichen; 3,5 Prozent als späteres NATO-Ziel korrekt eingeordnet. Quelle: https://www.bundestag.de/presse/hib/kurzmeldungen-1106068
- **F18 / djs2025dp011** — Frage und Erklärung an das BVerwG-Urteil vom 24.06.2025 angepasst (Verbot aufgehoben, nicht bestätigt). Quelle: https://www.bverwg.de/de/pm/2025/48
- **F19 / djs2025dp012** — Erklärung an das aufgehobene COMPACT-Verbot angepasst (BVerwG, 24.06.2025).
- **F66 / djs2025eu011** — Falsche Behauptung „erste Frau in dieser Rolle“ entfernt; Vorgängerinnen Catherine Ashton (2009–2014) und Federica Mogherini (2014–2019) ergänzt.

### Vorschläge zur Korrektur (B)

Keine. Alle 19 Fragen ließen sich auf Basis der eindeutigen Faktenbefunde direkt auto-korrigieren.

---

### Lint-Ergebnis nach Korrektur

- **0 Errors**
- 72 Warnings (51× fehlende URL bei nicht-betroffenen Altfragen, 2× relative Zeitangabe in F47/F118-ähnlichen Fragen, 19× W4 „Status ok trotz reviewNote“ — letzteres ist erwartet, da die Notes die durchgeführten Korrekturen dokumentieren).
- 79 Infos (z. B. leere `relatedQuestions`) — nicht blockierend.

### reviewStatus-Verteilung

| Status | Vorher | Nachher |
|---|---|---|
| (unset → ok) | 104 | 104 |
| `ok` | 0 | 19 |
| `ok-präzisieren` | 1 | 1 |
| `korrigieren` | 18 | 0 |
| `aktualisieren` | 1 | 0 |

### Offene Fälle / Hinweise

- Keine widersprüchlichen Web-Quellen festgestellt. Alle 19 Korrekturen sind durch offizielle Quellen abgedeckt.
- Die W4-Warnings des Linters sind erwartet und sollten beim nächsten Reviewsdurchgang ggf. durch ein neues Status-Label wie `ok-korrigiert` ersetzt werden, falls eine Unterscheidung gewünscht ist.
- F47 (`djs?` Regierungswechsel) und F118 (Mondlandungen 12 Monate) bleiben separate W2-Lint-Warnungen; sie waren nicht Teil der 19 Pflichtfälle.
