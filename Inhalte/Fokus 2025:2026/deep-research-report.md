# DATA_NEW_Quellentiefe

## Abdeckungsrahmen

Die Upload-Datei enthält 326 Fragen in acht Kategorien. Auffällig ist die hohe Zahl abgeleiteter Varianten: 202 Einträge sind als `ungeprüft` markiert, und viele dieser Fragen verweisen ausdrücklich auf eine `Ausgangskontext der Basisfrage`, also auf eine vorhandene Basis-ID. Darauf baut die Ergänzungsdatei unten auf: nicht Frage für Frage redundant, sondern quellenarchitektonisch entlang der Basisfragen und ihrer Themenkomplexe. Das folgt der Logik der Originaldatei und verändert sie nicht. fileciteturn2file0 fileciteturn7file3

Die unten stehende Fassung ist deshalb als **sekundäre, ergänzende Markdown-Datei** formuliert, die sich an die vorhandene Index-Logik anlehnt: Jede Quellenarchitektur ist einer oder mehreren Basis-IDs zugeordnet; alle Varianten mit identischem `Ausgangskontext` erben denselben Quellenblock. Sichtbar und sicher identifizierbar waren in der Datei unter anderem große 2025/2026-Cluster zu Bundestagswahl, Kanzlerwahl, Schuldenbremse/Sondervermögen, AfD/COMPACT, EU-Migrationspakt, AI Act, ePA, Gaza, Sportgroßereignissen sowie mehrere ältere Basisfragen aus Politik, Wirtschaft, Wissenschaft, Gesellschaft, Kultur und Medien. fileciteturn2file0 fileciteturn11file0 fileciteturn11file2 fileciteturn15file1

## Vererbungslogik

**Einfüge-Hinweis für die Datenbankpflege:**  
Jeder Block unten gilt jeweils für die genannten **Basis-IDs** und für **alle Varianten**, die in der Originaldatei mit `Ausgangskontext der Basisfrage \`[ID]\`` darauf verweisen. Diese Vererbungslogik ist in der Upload-Datei explizit sichtbar und sollte in `DATA_NEW_Quellentiefe` beibehalten werden. fileciteturn2file0 fileciteturn6file1

**Ready-to-paste-Markdown für die Ergänzungsdatei:**

```md
# DATA_NEW_Quellentiefe

**Ergänzt zu:** `ALLE_FRAGEN_UND_ANTWORTEN.md`
**Prinzip:** Basisfrage-first, Varianten erben Quellenblöcke
**Quellenarchitektur:** Stufe 1 Primärquellen / Stufe 2 Agentur-Rundfunk / Stufe 3 Qualitätsmedien
**Medienregel:** In Stufe 3 nur erlaubte Medienliste
**Linkpolitik:** Wo kein stabil verifizierter Artikel-Link gesetzt wird, steht ein präziser Suchstring

## Zuordnungskodex

- Gilt immer für die genannte **Basis-ID**
- Gilt automatisch auch für alle Varianten mit:
  - `Ausgangskontext der Basisfrage \`[Basis-ID]\``
- Keine Änderung an Fragetexten, IDs, Status, Review-Notizen oder Original-Indizierung

## Zeitraum 2018 bis 2024

### Thema: Jamaika-Abbruch und Lindner-Zitat
**Basis-ID(s):** `djs2018sc001`  
**Erbt auf Varianten:** alle Fragen mit Ausgangskontext `djs2018sc001`  
**Kurzbeschreibung:** Der Block sichert das Lindner-Zitat im Kontext der gescheiterten Jamaika-Sondierungen 2017/18 ab.

**STUFE 1 — PRIMÄRQUELLEN**
- FDP / Christian Lindner — Statements zum Abbruch der Jamaika-Sondierungen — 11/2017 — Suchstring: `site:fdp.de Lindner besser nicht regieren als falsch regieren November 2017`
- Deutscher Bundestag — Dokumente zur Regierungsbildung nach der Bundestagswahl 2017 — 2017/2018 — Suchstring: `site:bundestag.de Jamaika Sondierungen 2017 Bundestag`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Jamaica talks collapse Germany Lindner wrong to govern — 11/2017 — Suchstring: `site:reuters.com Germany Lindner wrong to govern Jamaica talks November 2017`
- Deutschlandfunk — Lindner zum Ende von Jamaika — 11/2017 — Suchstring: `site:deutschlandfunk.de Lindner Jamaika falsch regieren 2017`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Spiegel — Lindner / Jamaika-Abbruch — 11/2017 — Suchstring: `site:spiegel.de Lindner Jamaika falsch regieren 2017`
- Zeit — Analyse zum Ende von Jamaika — 11/2017 — Suchstring: `site:zeit.de Jamaika Lindner Analyse 2017`
- FAZ — Konsequenzen des Jamaika-Abbruchs — 11/2017 — Suchstring: `site:faz.net Jamaika Lindner Folgen 2017`
- SZ — Nacht des Abbruchs / Regierungsoptionen — 11/2017 — Suchstring: `site:sueddeutsche.de Jamaika Lindner 2017`

### Thema: Rohingya in Myanmar
**Basis-ID(s):** `djs2018sc003`  
**Erbt auf Varianten:** alle Fragen mit Ausgangskontext `djs2018sc003`  
**Kurzbeschreibung:** Sichert die UN-Einordnung und den Fluchtkontext seit 2017.

**STUFE 1 — PRIMÄRQUELLEN**
- UN Human Rights / UN Fact-Finding Mission — Berichte zu Myanmar und den Rohingya — 2017/2018 — Suchstring: `site:ohchr.org Rohingya Myanmar ethnic cleansing 2018`
- International Court of Justice — Gambia v. Myanmar — ab 2019 — Suchstring: `site:icj-cij.org Gambia Myanmar Rohingya case`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Rohingya exodus / UN ethnic cleansing — 2017/2018 — Suchstring: `site:reuters.com Rohingya ethnic cleansing UN Myanmar 2018`
- AP — Rohingya Myanmar UN — 2017/2018 — Suchstring: `site:apnews.com Rohingya Myanmar ethnic cleansing UN`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Guardian — Myanmar Rohingya ethnic cleansing analysis — 2018 — Suchstring: `site:theguardian.com Rohingya Myanmar ethnic cleansing analysis 2018`
- Economist — Myanmar Rohingya crisis — 2018/2019 — Suchstring: `site:economist.com Myanmar Rohingya 2018`
- Spiegel — Rohingya / Myanmar — 2018 — Suchstring: `site:spiegel.de Rohingya Myanmar 2018`
- Zeit — Völkermord-Debatte Myanmar — 2018/2019 — Suchstring: `site:zeit.de Myanmar Rohingya 2018`

### Thema: Brexit-Backstop und Nordirland
**Basis-ID(s):** `djs2019sc003`  
**Erbt auf Varianten:** alle Fragen mit Ausgangskontext `djs2019sc003`  
**Kurzbeschreibung:** Der Block erklärt den Backstop als Instrument gegen eine harte Grenze zwischen Irland und Nordirland.

**STUFE 1 — PRIMÄRQUELLEN**
- UK Government / EU Commission — Withdrawal Agreement / Protocol Ireland-Northern Ireland — 2018/2019 — Suchstring: `site:gov.uk Withdrawal Agreement backstop Northern Ireland 2019`
- EU-Kommission — Brexit documents on Ireland/Northern Ireland — 2018/2019 — Suchstring: `site:ec.europa.eu Brexit Ireland Northern Ireland backstop 2019`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Brexit backstop explained — 2019 — Suchstring: `site:reuters.com Brexit backstop explained 2019 Northern Ireland`
- Deutschlandfunk — Backstop Nordirland erklärt — 2019 — Suchstring: `site:deutschlandfunk.de Brexit Backstop Nordirland 2019`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Guardian — What is the backstop? — 2019 — Suchstring: `site:theguardian.com what is the backstop 2019 Northern Ireland`
- FT — Northern Ireland backstop explained — 2019 — Suchstring: `site:ft.com Northern Ireland backstop explained 2019`
- Economist — Brexit backstop and Irish border — 2019 — Suchstring: `site:economist.com Brexit backstop Irish border 2019`
- Zeit — Brexit / Nordirland-Grenze — 2019 — Suchstring: `site:zeit.de Brexit Backstop Nordirland 2019`

### Thema: Linke-Fraktion, BSW und Fraktionsverlust
**Basis-ID(s):** `djs2024sc004`  
**Erbt auf Varianten:** alle Fragen mit Ausgangskontext `djs2024sc004`  
**Kurzbeschreibung:** Sichert Auflösung der Linksfraktion nach Wagenknecht-Abspaltung und BSW-Gründung.

**STUFE 1 — PRIMÄRQUELLEN**
- Deutscher Bundestag — Regeln zu Fraktion und Gruppe — Suchstring: `site:bundestag.de Fraktion Gruppe Mindestzahl Bundestag`
- BSW / Parteigründung — 2024 — Suchstring: `BSW Parteigründung Januar 2024 offizielle Webseite`
- Die Linke — Stellungnahmen zum Fraktionsende — 2023 — Suchstring: `site:die-linke.de Fraktion Bundestag 2023 Wagenknecht`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Wagenknecht split / Linke faction dissolution — 2023/2024 — Suchstring: `site:reuters.com Wagenknecht Linke faction Bundestag 2023`
- Deutschlandfunk — Linke nur noch Gruppe — 2023/2024 — Suchstring: `site:deutschlandfunk.de Linke nur noch Gruppe Bundestag 2023`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Spiegel — Spaltung der Linken / Wagenknecht — 2023/2024 — Suchstring: `site:spiegel.de Wagenknecht Linke Fraktion 2023 2024`
- Zeit — BSW und Linke — 2023/2024 — Suchstring: `site:zeit.de BSW Linke Fraktion 2023 2024`
- FAZ — Fraktionsstatus der Linken — 2023 — Suchstring: `site:faz.net Linke Fraktion Gruppe Bundestag 2023`
- taz — Zerfall der Linken — 2023/2024 — Suchstring: `site:taz.de Linke Wagenknecht Fraktion 2023`

### Thema: Ampel-Konflikte um GEG und Kindergrundsicherung
**Basis-ID(s):** `djs2023mc003`  
**Erbt auf Varianten:** alle Fragen mit Ausgangskontext `djs2023mc003`  
**Kurzbeschreibung:** Quellenset zum zentralen Koalitionskonfliktfeld 2023.

**STUFE 1 — PRIMÄRQUELLEN**
- Bundesministerium für Wirtschaft und Klimaschutz — Gebäudeenergiegesetz / Referentenentwürfe — 2023 — Suchstring: `site:bmwk.de Gebäudeenergiegesetz 2023`
- Bundesministerium für Familie — Kindergrundsicherung — 2023 — Suchstring: `site:bmfsfj.de Kindergrundsicherung 2023`
- Bundesverfassungsgericht — Beschluss zum Gesetzgebungsverfahren beim GEG — 2023 — Suchstring: `site:bundesverfassungsgericht.de Gebäudeenergiegesetz 2023 einstweilige Anordnung`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Germany heating law coalition dispute — 2023 — Suchstring: `site:reuters.com Germany heating law coalition dispute 2023`
- Deutschlandfunk — Kindergrundsicherung Finanzierungsstreit — 2023 — Suchstring: `site:deutschlandfunk.de Kindergrundsicherung Konflikt FDP 2023`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Spiegel — Heizungsgesetz / Ampelkrise — 2023 — Suchstring: `site:spiegel.de Heizungsgesetz Ampel Streit 2023`
- Zeit — Kindergrundsicherung / Ampel — 2023 — Suchstring: `site:zeit.de Kindergrundsicherung Ampel 2023`
- SZ — GEG und Koalitionsmanagement — 2023 — Suchstring: `site:sueddeutsche.de GEG Ampel 2023`
- FAZ — Finanzierungsstreit in der Ampel — 2023 — Suchstring: `site:faz.net Kindergrundsicherung FDP 2023`

### Thema: Correctiv, Potsdam-Treffen und Remigrationsdebatte
**Basis-ID(s):** `djs2024sc001`  
**Erbt auf Varianten:** alle Fragen mit Ausgangskontext `djs2024sc001`  
**Kurzbeschreibung:** Dient der Absicherung der Rechercheherkunft und der anschließenden Debatte.

**STUFE 1 — PRIMÄRQUELLEN**
- Correctiv — Recherche zum Potsdamer Treffen — 2024 — Suchstring: `site:correctiv.org Potsdam Treffen Remigration 2024`
- ggf. Gerichtsdokumente / Unterlassungs- oder Gegendarstellungsverfahren — 2024 — Suchstring: `Potsdam Correctiv Gerichtsverfahren 2024`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Germany far-right remigration meeting Correctiv — 2024 — Suchstring: `site:reuters.com Germany remigration meeting Correctiv 2024`
- Deutschlandfunk — Correctiv Potsdam erklärt — 2024 — Suchstring: `site:deutschlandfunk.de Correctiv Potsdam Remigration 2024`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Spiegel — Correctiv / Potsdam / Folgen — 2024 — Suchstring: `site:spiegel.de Correctiv Potsdam Remigration 2024`
- Zeit — Einordnung Remigrationsdebatte — 2024 — Suchstring: `site:zeit.de Remigration Correctiv 2024`
- FAZ — Debatte um Correctiv-Recherche — 2024 — Suchstring: `site:faz.net Correctiv Potsdam 2024`
- taz — Proteste nach Potsdam-Recherche — 2024 — Suchstring: `site:taz.de Correctiv Potsdam Proteste 2024`

### Thema: Wirecard und FTX als Kontroll- und Regulierungsskandale
**Basis-ID(s):** `djs2022sc003`, `djs2023sc002`  
**Erbt auf Varianten:** alle Fragen mit Ausgangskontext dieser IDs  
**Kurzbeschreibung:** Kombiblock für Bilanzskandal, Wirtschaftsprüfung und Kryptokrise.

**STUFE 1 — PRIMÄRQUELLEN**
- Bundestag / Untersuchungsausschuss Wirecard — Suchstring: `site:bundestag.de Wirecard Untersuchungsausschuss`
- BaFin / BMJ / BMF — Reformen nach Wirecard — Suchstring: `site:bafin.de Wirecard Reformen`
- US Department of Justice / SDNY — United States v. Sam Bankman-Fried — Suchstring: `site:justice.gov Sam Bankman-Fried indictment`
- Bankruptcy Court / FTX — Suchstring: `FTX bankruptcy court docket`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Wirecard EY Germany scandal — Suchstring: `site:reuters.com Wirecard EY Germany scandal`
- Reuters — FTX collapse Sam Bankman-Fried conviction — Suchstring: `site:reuters.com FTX collapse Sam Bankman-Fried conviction`
- Deutschlandfunk — Wirecard / FTX Einordnung — Suchstring: `site:deutschlandfunk.de Wirecard FTX Einordnung`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- FT — FT-Wirecard-Recherchen — Suchstring: `site:ft.com Wirecard FT investigation`
- Handelsblatt — Wirecard-Aufarbeitung — Suchstring: `site:handelsblatt.com Wirecard EY Aufarbeitung`
- Economist — FTX and crypto regulation — Suchstring: `site:economist.com FTX crypto regulation`
- Spiegel — Wirecard / FTX Folgen — Suchstring: `site:spiegel.de Wirecard FTX 2023 2024`

### Thema: Medienethik, Plattformregulierung und Kulturdebatten
**Basis-ID(s):** `djs2018sc002`, `djs2018sc004`, `djs2019sc004`, `djs2019sc006`  
**Erbt auf Varianten:** alle mit diesen Ausgangskontexten  
**Kurzbeschreibung:** Block für NetzDG, Babylon Berlin, Relotius und Echo.

**STUFE 1 — PRIMÄRQUELLEN**
- BMJ — Netzwerkdurchsetzungsgesetz — Suchstring: `site:bmj.de Netzwerkdurchsetzungsgesetz`
- Spiegel — Dokumentation / interne Aufarbeitung Relotius — Suchstring: `site:spiegel.de Relotius Aufarbeitung`
- Bundesverband Musikindustrie / Echo-Ende — Suchstring: `Echo Musikpreis eingestellt 2018 offizielle Mitteilung`
- ARD / Sky / Beta Film — Babylon Berlin Produktionsinfos — Suchstring: `Babylon Berlin ARD Sky Beta Film Presse`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Germany NetzDG social media law — Suchstring: `site:reuters.com Germany NetzDG social media law 2017 2018`
- AP — Echo anti-Semitism / Kollegah Farid Bang — Suchstring: `site:apnews.com Echo award anti semitic lyrics Germany 2018`
- Deutschlandfunk — Relotius / Medienkritik — Suchstring: `site:deutschlandfunk.de Relotius Spiegel Moreno`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Spiegel — Relotius / Juan Moreno / Aufarbeitung — Suchstring: `site:spiegel.de Relotius Juan Moreno Jaegers Grenze`
- Zeit — NetzDG / Meinungsfreiheit — Suchstring: `site:zeit.de NetzDG Meinungsfreiheit`
- FAZ — Echo-Skandal / Antisemitismus — Suchstring: `site:faz.net Echo Kollegah Farid Bang 2018`
- SZ — Babylon Berlin / Produktionsökonomie — Suchstring: `site:sueddeutsche.de Babylon Berlin Produktion Sky ARD`

### Thema: Wissenschaft, Biotechnologie und Technologiekonflikt
**Basis-ID(s):** `djs2018sc005`, `djs2019sc005`, `djs2025sc001`  
**Erbt auf Varianten:** alle mit diesen Ausgangskontexten  
**Kurzbeschreibung:** Block für CRISPR-Cas9, Huawei/5G und Starliner/ISS.

**STUFE 1 — PRIMÄRQUELLEN**
- Nobel Prize — Chemistry Prize 2020 CRISPR — Suchstring: `site:nobelprize.org CRISPR Cas9 Doudna Charpentier`
- FDA / NIH / Nature-Material als Primär-/Forschungsanker — Suchstring: `CRISPR Cas9 original paper site:nature.com`
- US FCC / US Government — Huawei 5G restrictions — Suchstring: `site:fcc.gov Huawei national security 5G`
- NASA — Boeing Starliner / Wilmore Williams return — Suchstring: `site:nasa.gov Wilmore Williams return March 2025 Starliner`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Huawei 5G bans explained — Suchstring: `site:reuters.com Huawei 5G bans explained`
- Reuters — NASA astronauts return after Starliner trouble — Suchstring: `site:reuters.com Wilmore Williams return March 2025`
- Deutschlandfunk — CRISPR ethische Debatte — Suchstring: `site:deutschlandfunk.de CRISPR Cas9 Ethik`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Economist — CRISPR / gene editing — Suchstring: `site:economist.com CRISPR gene editing`
- Guardian — Huawei and 5G security debate — Suchstring: `site:theguardian.com Huawei 5G security debate`
- Spiegel — Starliner / Boeing / NASA — Suchstring: `site:spiegel.de Starliner Wilmore Williams 2025`
- Zeit — Gen-Schere und Ethik — Suchstring: `site:zeit.de CRISPR Ethik`

### Thema: Sprache, Klimaaktivismus und Restitution
**Basis-ID(s):** `djs2019sc001`, `djs2022sc004`, `djs2023sc005`, `djs2022sc006`  
**Erbt auf Varianten:** alle mit diesen Ausgangskontexten  
**Kurzbeschreibung:** Kombiblock für Greta-Thunberg-Zitat, Unwort-Debatten und Benin-Bronzen.

**STUFE 1 — PRIMÄRQUELLEN**
- World Economic Forum — Greta Thunberg Davos speech — Suchstring: `site:weforum.org Greta Thunberg our house is on fire Davos`
- Unwort des Jahres — offizielle Jury-Mitteilungen 2021/2022 — Suchstring: `site:unwortdesjahres.net Pushback Unwort 2021` / `site:unwortdesjahres.net Klimaterroristen Unwort 2022`
- Bundesregierung / Auswärtiges Amt / Stiftung Preußischer Kulturbesitz — Benin-Bronzen-Rückgabe — Suchstring: `site:auswaertiges-amt.de Benin Bronzen Nigeria 2022`

**STUFE 2 — AGENTUR / RUNDFUNK**
- AP / Reuters — Benin Bronzes returned to Nigeria — Suchstring: `site:apnews.com Benin Bronzes Nigeria Germany 2022`
- Deutschlandfunk — Unwort des Jahres / Sprache und Politik — Suchstring: `site:deutschlandfunk.de Unwort des Jahres Pushback Klimaterroristen`
- Reuters — Greta Davos house on fire — Suchstring: `site:reuters.com Greta our house is on fire Davos 2019`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Guardian — Greta Davos speech — Suchstring: `site:theguardian.com Greta our house is on fire Davos 2019`
- Zeit — Unwort des Jahres / Sprachkritik — Suchstring: `site:zeit.de Unwort des Jahres Pushback Klimaterroristen`
- Spiegel — Benin-Bronzen Restitution — Suchstring: `site:spiegel.de Benin Bronzen Nigeria 2022`
- FAZ — Restitutionsdebatte Benin-Bronzen — Suchstring: `site:faz.net Benin Bronzen Nigeria 2022`

### Thema: Mesut Özil, Rassismus und Nationalmannschaft
**Basis-ID(s):** `djs2019sc002`  
**Erbt auf Varianten:** alle mit Ausgangskontext `djs2019sc002`  
**Kurzbeschreibung:** Grundlage für Zitat, Rücktritt und anschließende Integrations- und Rassismusdebatte.

**STUFE 1 — PRIMÄRQUELLEN**
- Mesut Özil — Originalstatement / Social-Media-Post zum Rücktritt — 2018 — Suchstring: `Mesut Özil when we win I am German when we lose I am immigrant original statement`
- DFB — Reaktionen / Pressematerial — Suchstring: `site:dfb.de Özil Rücktritt 2018`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Ozil resignation racism Germany — 2018 — Suchstring: `site:reuters.com Ozil racism Germany resignation 2018`
- Deutschlandfunk — Özil-Rücktritt und Debatte — 2018/2019 — Suchstring: `site:deutschlandfunk.de Özil Rücktritt Rassismus`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Spiegel — Özil / Erdogan-Foto / DFB — Suchstring: `site:spiegel.de Özil Erdogan DFB 2018`
- Zeit — Rassismusdebatte nach Özil-Rücktritt — Suchstring: `site:zeit.de Özil Rassismus 2018`
- SZ — Nationalität, DFB, Integrationsdebatte — Suchstring: `site:sueddeutsche.de Özil DFB 2018`
- Guardian — Mesut Özil racism statement — Suchstring: `site:theguardian.com Mesut Ozil racism Germany 2018`

## Zeitraum 2025

### Thema: Bundestagswahl 2025, Koalitionsvertrag und Kanzlerwahl Merz
**Basis-ID(s):** `djs2025dp001`, `djs2025dp002`, `djs2025dp003`, `djs2025dp004`, `djs2025dp005`  
**Erbt auf Varianten:** alle mit Ausgangskontext dieser IDs  
**Kurzbeschreibung:** Kernblock zu Wahltermin, Wahlergebnis, Koalitionsvertrag „Verantwortung für Deutschland“ und Merz’ Wahl im zweiten Wahlgang.

**STUFE 1 — PRIMÄRQUELLEN**
- Die Bundeswahlleiterin — endgültiges Ergebnis der Bundestagswahl 2025 — 14.03.2025 — Suchstring: `site:bundeswahlleiterin.de Endgültiges Ergebnis Bundestagswahl 2025 14. März 2025`
- Deutscher Bundestag — Friedrich Merz mit 325 Stimmen zum Bundeskanzler gewählt — 06.05.2025 — Suchstring: `site:bundestag.de Friedrich Merz mit 325 Stimmen zum Bundeskanzler gewählt`
- CDU/CSU/SPD — Koalitionsvertrag „Verantwortung für Deutschland“ — 09.04.2025 / 05.05.2025 — Suchstring: `Verantwortung für Deutschland Koalitionsvertrag 2025 PDF`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Bundestagswahl 2025 / Koalitionsbildung — Suchstring: `site:reuters.com Germany election 2025 Merz coalition`
- Reuters — Conservative Merz elected German chancellor after initial debacle — 06.05.2025 — Suchstring: `site:reuters.com Conservative Merz elected German chancellor after initial debacle May 6 2025`
- AP — Conservative leader Merz overcomes historic defeat to become Germany's chancellor — 06.05.2025 — Suchstring: `site:apnews.com Merz overcomes historic defeat chancellor May 2025`
- Deutschlandfunk — Bundestagswahl 2025 / Regierungsbildung — Suchstring: `site:deutschlandfunk.de Bundestagswahl 2025 Regierungsbildung Merz`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Spiegel — Bundestagswahl 2025 / AfD / Merz — Suchstring: `site:spiegel.de Bundestagswahl 2025 Merz AfD`
- Zeit — Wahl- und Koalitionsanalyse — Suchstring: `site:zeit.de Bundestagswahl 2025 Analyse Merz Koalition`
- FAZ — Koalitionsvertrag / Wahlgang / Folgen — Suchstring: `site:faz.net Bundestagswahl 2025 Koalitionsvertrag Merz`
- SZ — Schwarz-Rot 2025 / Kanzlerwahl — Suchstring: `site:sueddeutsche.de Merz Kanzlerwahl 2025`
- Welt — Bundestag berät / Koalition / Wahl — Suchstring: `site:welt.de Bundestagswahl 2025 Merz Koalition`
- Guardian — Germany election aftermath / Merz — Suchstring: `site:theguardian.com Germany election Merz 2025`
- Politico — Germany coalition talks 2025 — Suchstring: `site:politico.eu Germany coalition talks 2025`

### Thema: Schuldenbremse, 500-Milliarden-Sondervermögen, Brigade Litauen, Verteidigungshaushalt 2026
**Basis-ID(s):** `djs2025dp006`, `djs2025dp007`, `djs2025dp008`, `djs2025dp009`  
**Erbt auf Varianten:** alle mit Ausgangskontext dieser IDs  
**Kurzbeschreibung:** Finanz- und sicherheitspolitischer Hauptblock der Zeitenwende-Architektur 2025/26.

**STUFE 1 — PRIMÄRQUELLEN**
- Deutscher Bundestag — Debatten/Beschlüsse zur Grundgesetzänderung und zum Sondervermögen — 03/2025 — Suchstring: `site:bundestag.de Schuldenbremse Sondervermögen 18. März 2025`
- Bundesrat — Zustimmung zur Grundgesetzänderung — 03/2025 — Suchstring: `site:bundesrat.de Schuldenbremse Sondervermögen März 2025`
- Bundeswehr / BMVg — Brigade Litauen / Aufstellungsappell — 05/2025 — Suchstring: `site:bmvg.de Brigade Litauen Aufstellungsappell 22. Mai 2025`
- Bundeshaushalt / BMF — Regierungsentwurf Verteidigung 2026 — Suchstring: `site:bundesfinanzministerium.de Haushalt 2026 Verteidigung`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Germany debt brake reform / infrastructure fund — Suchstring: `site:reuters.com Germany debt brake reform infrastructure fund March 2025`
- Deutschlandfunk — Schuldenpaket / Brigade Litauen / Verteidigungsausgaben — Suchstring: `site:deutschlandfunk.de Schuldenbremse Sondervermögen Brigade Litauen 2025`
- AP — Germany military spending / Merz fiscal shift — Suchstring: `site:apnews.com Germany military spending Merz 2025`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Spiegel — Schuldenpaket / historischer Bruch — Suchstring: `site:spiegel.de Schuldenbremse Sondervermögen März 2025`
- Zeit — Folgen des Finanzpakets — Suchstring: `site:zeit.de Sondervermögen Schuldenbremse Folgen 2025`
- FAZ — Verfassungs- und Finanzordnung 2025 — Suchstring: `site:faz.net Schuldenbremse Grundgesetzänderung 2025`
- Welt — Bundestag berät am 13. März und 18. März über Schuldenbremse und Sondervermögen — 06.03.2025 — Suchstring: `site:welt.de Bundestag berät am 13. März und 18. März über Schuldenbremse und Sondervermögen`
- Handelsblatt — Investitions- und Rüstungsfolgen — Suchstring: `site:handelsblatt.com Sondervermögen Verteidigungsausgaben 2025`
- FT — Germany fiscal U-turn / rearmament — Suchstring: `site:ft.com Germany debt brake rearmament 2025`
- Economist — Germany’s fiscal turn — Suchstring: `site:economist.com Germany debt brake 2025`

### Thema: AfD-Einstufung, Parteiverbot-Debatte und COMPACT
**Basis-ID(s):** `djs2025dp010`, `djs2025dp011`, `djs2025dp012`, `djs2025mc004`  
**Erbt auf Varianten:** alle mit Ausgangskontext dieser IDs  
**Kurzbeschreibung:** Juristisch-politischer Block zu Verfassungsschutz, Parteiverbot und Pressefreiheit/wehrhafter Demokratie.

**STUFE 1 — PRIMÄRQUELLEN**
- Bundesamt für Verfassungsschutz — AfD / gesichert rechtsextremistische Bestrebung — 02.05.2025 — Suchstring: `site:verfassungsschutz.de AfD gesichert rechtsextremistische Bestrebung 2. Mai 2025`
- Verwaltungsgericht Köln / ggf. VG-Entscheidungen — Stillhaltezusage / Eilverfahren — 2025/2026 — Suchstring: `VG Köln AfD Stillhaltezusage 2025`
- Bundesverwaltungsgericht — COMPACT-Urteil / Pressefreiheit-Vereinsrecht — 24.06.2025 — Suchstring: `site:bverwg.de COMPACT 24.06.2025`
- Grundgesetz Art. 21 und BVerfG-Infos — Parteiverbotsverfahren — Suchstring: `site:bundesverfassungsgericht.de Parteiverbot Art 21 GG`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Germany's domestic intelligence labels AfD extremist — 05/2025 — Suchstring: `site:reuters.com AfD extremist German domestic intelligence May 2025`
- Deutschlandfunk — AfD-Einstufung / Rechtsstreit — Suchstring: `site:deutschlandfunk.de AfD Einstufung Verfassungsschutz 2025`
- AP — German intelligence labels AfD extremist — Suchstring: `site:apnews.com AfD extremist German intelligence 2025`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Spiegel — AfD-Einstufung / Verbotsdebatte — Suchstring: `site:spiegel.de AfD gesichert rechtsextremistisch 2025`
- Zeit — Was ein AfD-Verbotsverfahren bedeuten würde — Suchstring: `site:zeit.de AfD Verbotsverfahren 2025`
- FAZ — Juristische Einordnung Verfassungsschutz / COMPACT — Suchstring: `site:faz.net AfD Verfassungsschutz COMPACT 2025`
- Welt — politische Reaktionen auf die Hochstufung — Suchstring: `site:welt.de AfD gesichert rechtsextremistisch Mai 2025`
- Guardian — Germany far right AfD extremist designation — Suchstring: `site:theguardian.com Germany AfD extremist designation 2025`
- Politico — AfD and German democracy / implications — Suchstring: `site:politico.eu AfD Germany extremist 2025`

### Thema: 80 Jahre Kriegsende, 35 Jahre Deutsche Einheit, Klimaziele 2030, ePA, Mindestlohn
**Basis-ID(s):** `djs2025dp013`, `djs2025dp014`, `djs2025dp015`, `djs2025gr001`, `djs2025sc002`, `djs2025sc003`  
**Erbt auf Varianten:** alle mit Ausgangskontext dieser IDs  
**Kurzbeschreibung:** Staatsgesellschaftlicher Block aus Erinnerung, Klimapolitik, Gesundheitsdigitalisierung und Arbeitsmarkt.

**STUFE 1 — PRIMÄRQUELLEN**
- Deutscher Bundestag — Gedenkstunde 8. Mai 2025 — Suchstring: `site:bundestag.de 8. Mai 2025 Gedenkstunde`
- Bundesregierung / Tag der Deutschen Einheit 2025 — Suchstring: `Tag der Deutschen Einheit 2025 offizielle Feierlichkeiten`
- Umweltbundesamt — Projektionsdaten / Emissionsdaten / Zielerreichung 2030 — Suchstring: `site:uba.de Projektionsdaten 2025 Klimaziele 2030 erreichbar`
- gematik / BMG — ePA-Rollout und Nutzungspflichten — Suchstring: `site:gematik.de ePA 1. Oktober 2025 Leistungserbringer`
- Mindestlohnkommission / BMAS — Mindestlohn 12,82 Euro ab 1. Januar 2025 — Suchstring: `site:bundesregierung.de Mindestlohn 12,82 1. Januar 2025`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Germany marks 80 years since WWII end — Suchstring: `site:reuters.com Germany 80 years end of World War II May 2025`
- Deutschlandfunk — UBA-Projektionen / ePA / Mindestlohn — Suchstring: `site:deutschlandfunk.de UBA Projektionen 2025 ePA Mindestlohn 12,82`
- AP — European commemorations / Germany unity anniversaries — Suchstring: `site:apnews.com Germany 80 years war end 2025`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Spiegel — 8. Mai 2025 / Erinnerungsdebatte — Suchstring: `site:spiegel.de 8. Mai 2025 Kriegsende Deutschland`
- Zeit — 35 Jahre Einheit / Ost-West-Bilanz — Suchstring: `site:zeit.de 35 Jahre Deutsche Einheit 2025`
- FAZ — UBA-Projektionen und Klimapolitik — Suchstring: `site:faz.net UBA Klimaziele 2030 2025`
- SZ — ePA / Datenschutz / Rollout — Suchstring: `site:sueddeutsche.de ePA Opt-out 2025`
- Handelsblatt — Mindestlohn 12,82 / ökonomische Folgen — Suchstring: `site:handelsblatt.com Mindestlohn 12,82 2025`

### Thema: Gaza und getötete Journalistinnen und Journalisten
**Basis-ID(s):** `djs2025sc009`  
**Erbt auf Varianten:** alle mit identischem Ausgangskontext  
**Kurzbeschreibung:** Quellensicherung für Pressefreiheit, Kriegsberichterstattung und Konfliktstatistik.

**STUFE 1 — PRIMÄRQUELLEN**
- Reporter ohne Grenzen — Zahlen und Dossiers zu getöteten Journalist:innen in Gaza — Suchstring: `site:rsf.org Gaza journalists killed 2025`
- CPJ — Journalists killed in Israel-Gaza war — Suchstring: `site:cpj.org Gaza journalists killed since October 7 2023`
- UN / OHCHR — Pressefreiheit / Schutz von Zivilisten / Gaza — Suchstring: `site:ohchr.org Gaza journalists access press freedom`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Gaza journalists killed / press access — Suchstring: `site:reuters.com Gaza journalists killed press access 2025`
- AP — Palestinian journalists in Gaza / casualty record — Suchstring: `site:apnews.com Gaza journalists killed 2025`
- Deutschlandfunk — Pressefreiheit im Krieg / Gaza — Suchstring: `site:deutschlandfunk.de Gaza Journalisten Pressefreiheit`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Guardian — Gaza is deadliest conflict for journalists — Suchstring: `site:theguardian.com Gaza journalists killed 2025`
- Spiegel — Gaza / Pressezugang / Kriegsberichterstattung — Suchstring: `site:spiegel.de Gaza Journalisten getötet 2025`
- Zeit — Berichterstattung aus Gaza / Zugang / Verifikation — Suchstring: `site:zeit.de Gaza Journalismus 2025`
- Economist — information war / Gaza reporting — Suchstring: `site:economist.com Gaza journalists access 2025`

## Zeitraum 2026

### Thema: EU-Migrationspakt, AI Act, Schengen, Europa-Tag und 2040-Klimaziel
**Basis-ID(s):** `djs2026eu001`, `djs2026eu002`, `djs2025eu008`, `djs2025eu009`, `djs2025eu010`  
**Erbt auf Varianten:** alle mit diesen Ausgangskontexten  
**Kurzbeschreibung:** Europapolitischer Block zu Rechtsanwendung, Integrationssymbolik und Klimagesetzgebung.

**STUFE 1 — PRIMÄRQUELLEN**
- EUR-Lex / EU Council — Pact on Migration and Asylum / application from 12 June 2026 — Suchstring: `site:eur-lex.europa.eu Pact on Migration and Asylum 12 June 2026`
- EUR-Lex / EU AI Act — full application from 2 August 2026 — Suchstring: `site:eur-lex.europa.eu AI Act 2 August 2026`
- Europäische Kommission — 2040 climate target minus 90 percent — Suchstring: `site:ec.europa.eu 2040 climate target minus 90 percent July 2025`
- EU Council — full Schengen accession Romania Bulgaria 1 January 2025 — Suchstring: `site:consilium.europa.eu Romania Bulgaria Schengen 1 January 2025`
- Europa.eu — Schuman Declaration 75 years / Europe Day 2025 — Suchstring: `site:europa.eu Schuman Declaration 75 years 2025`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — EU migration pact implementation 2026 — Suchstring: `site:reuters.com EU migration pact implementation 2026`
- Reuters — EU AI Act timeline / compliance — Suchstring: `site:reuters.com EU AI Act August 2026`
- Deutschlandfunk — Schengen / AI Act / EU-Migrationspakt — Suchstring: `site:deutschlandfunk.de EU AI Act Schengen Migrationspakt 2025 2026`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Politico — EU migration pact / implementation — Suchstring: `site:politico.eu migration pact implementation 2026`
- FT — EU AI Act / corporate compliance — Suchstring: `site:ft.com EU AI Act August 2026`
- Economist — EU border, asylum and AI regulation — Suchstring: `site:economist.com EU migration pact AI Act 2026`
- Guardian — Romania Bulgaria Schengen / Europe Day / climate target — Suchstring: `site:theguardian.com Romania Bulgaria Schengen 2025` / `site:theguardian.com EU 2040 climate target 2025`
- FAZ — Schengen / Migrationspakt / AI Act — Suchstring: `site:faz.net Schengen Rumänien Bulgarien AI Act 2025 2026`

### Thema: Sportgroßereignisse 2025/2026
**Basis-ID(s):** `djs2025sp001`, `djs2025sp002`, `djs2025sp003`, `djs2025sp004`, `djs2026sp001`, `djs2026sp002`, `djs2026sp003`  
**Erbt auf Varianten:** alle mit Ausgangskontext dieser IDs  
**Kurzbeschreibung:** Kompaktblock für Rhine-Ruhr 2025, Women's EURO 2025, Club World Cup 2025, WM 2026 und Milano Cortina 2026.

**STUFE 1 — PRIMÄRQUELLEN**
- Rhine-Ruhr 2025 / FISU — offizieller Eventkalender — Suchstring: `Rhine-Ruhr 2025 official dates venues`
- UEFA — Women's EURO 2025 Switzerland / Basel final — Suchstring: `site:uefa.com Women's EURO 2025 Basel final Switzerland`
- FIFA — Club World Cup 2025 / World Cup 2026 — Suchstring: `site:fifa.com Club World Cup 2025 14 June 13 July` / `site:fifa.com World Cup 2026 48 teams hosts`
- IOC / Milano Cortina 2026 — Suchstring: `site:olympics.com Milano Cortina 2026 dates`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — Women's EURO 2025 / Switzerland / Basel — Suchstring: `site:reuters.com Women's EURO 2025 Switzerland Basel`
- AP — World Cup 2026 48 teams / hosts — Suchstring: `site:apnews.com World Cup 2026 48 teams USA Canada Mexico`
- Deutschlandfunk — Club World Cup reform / Milano Cortina — Suchstring: `site:deutschlandfunk.de Club World Cup 2025 Milano Cortina 2026`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Guardian — Women's EURO 2025 / Basel — Suchstring: `site:theguardian.com Women's EURO 2025 Basel`
- FAZ — FISU / Ruhrgebiet / Berlin — Suchstring: `site:faz.net Rhine Ruhr 2025 FISU Berlin`
- Spiegel — Club World Cup reform / WM 2026 — Suchstring: `site:spiegel.de Club World Cup 2025 WM 2026`
- SZ — Milano Cortina und Wintersportpolitik — Suchstring: `site:sueddeutsche.de Milano Cortina 2026`

### Thema: Wirtschaftsdaten 2025/2026
**Basis-ID(s):** `djs2025wf001`, `djs2025wf002`, `djs2026wf002`, `djs2026wf003`  
**Erbt auf Varianten:** alle mit Ausgangskontext dieser IDs  
**Kurzbeschreibung:** Block für EZB-Einlagensatz, Eurostat-Wachstum, deutsche Konjunkturprognose und WTO-Handelswarnungen.

**STUFE 1 — PRIMÄRQUELLEN**
- EZB — deposit facility rate decisions 2025 — Suchstring: `site:ecb.europa.eu deposit facility rate June 2025`
- Eurostat — euro area GDP estimate 2025 — Suchstring: `site:ec.europa.eu/eurostat euro area GDP 2025 estimate`
- Bundesregierung / BMWK — Frühjahrs-/Jahresprojektion 2026 — Suchstring: `site:bmwk.de Konjunkturprognose 2026 0,5`
- WTO — trade outlook / tariff effects 2025 2026 — Suchstring: `site:wto.org trade outlook tariffs 2025 2026`

**STUFE 2 — AGENTUR / RUNDFUNK**
- Reuters — ECB rate cuts 2025 — Suchstring: `site:reuters.com ECB rate cuts June 2025 deposit facility 2.0`
- Reuters — Germany growth forecast 2026 0.5 — Suchstring: `site:reuters.com Germany growth forecast 2026 0.5 government`
- Reuters — WTO warns on trade hit from tariffs — Suchstring: `site:reuters.com WTO tariffs trade hit 2025 2026`
- Deutschlandfunk — EZB / Konjunktur / WTO — Suchstring: `site:deutschlandfunk.de EZB Zinsen WTO Konjunktur 2025 2026`

**STUFE 3 — JOURNALISTISCHE QUALITÄTSMEDIEN**
- Handelsblatt — EZB / Wachstum / deutsche Konjunktur — Suchstring: `site:handelsblatt.com EZB Eurostat Konjunkturprognose 2025 2026`
- FT — ECB rate cycle / euro area growth / tariff shock — Suchstring: `site:ft.com ECB rate cuts 2025 euro area growth tariffs`
- Economist — global trade and tariffs / WTO — Suchstring: `site:economist.com WTO tariffs 2025`
- Welt — deutsche Konjunkturprognose 2026 — Suchstring: `site:welt.de Konjunkturprognose Bundesregierung 2026 0,5`

## Recherchehinweise

- Wenn mehrere Varianten nur den Frageton ändern, wird **kein neuer Quellenblock** angelegt.
- Wenn eine Basisfrage ein festes Faktum prüft, reichen in Stufe 1 oft Normtext/Institution plus in Stufe 3 zwei hochwertige Einordnungen.
- Bei politisch umkämpften Themen immer mindestens eine juristische/offizielle Primärquelle und mindestens zwei multiperspektivische Medienquellen.
- Für 2025/2026 bevorzugt Aktualitätsrecherche; für 2018–2024 stärker erklärende Hintergrundquellen plus Primärdokumente.
```

## Zeitraum 2018 bis 2024

Die ältere Abdeckung unten ist bewusst **themenkomplexbasiert**: Sie übernimmt die Logik der Basisfragen aus der Upload-Datei und ordnet ihnen robuste Primär-, Agentur- und Qualitätsmedien-Suchblöcke zu. Das ist besonders sinnvoll, weil ältere Fragen in der Datei häufig in späteren, ungeprüften Varianten nochmals gespiegelt werden, etwa bei `djs2018sc001`, `djs2018sc003`, `djs2019sc003`, `djs2023mc003`, `djs2024sc004` oder `djs2024sc001`. fileciteturn2file0 fileciteturn8file3 fileciteturn11file1

Zu den klar sichtbar identifizierten Alt-Basisfragen gehören in der Datei unter anderem der Jamaika-Abbruch mit Lindners Satz, die Rohingya-Frage, der Brexit-Backstop, der Fraktionsverlust der Linken nach Wagenknecht/BSW, die Ampel-Konflikte um GEG und Kindergrundsicherung, die Correctiv-Potsdam-Recherche, Wirecard/EY, FTX, NetzDG, Babylon Berlin, Relotius, Echo, Greta Thunberg, die Unwörter „Pushback“ und „Klimaterroristen“, Benin-Bronzen, CRISPR, Huawei und die Özil-Debatte. Diese Themen sind im Markdown-Block oben bereits in verwertbare Quellenarchitekturen übersetzt. fileciteturn8file2 fileciteturn12file4 fileciteturn12file0 fileciteturn12file1 fileciteturn16file3 fileciteturn16file4 fileciteturn14file1

## Zeitraum 2025

Für 2025 priorisiert die Ergänzungsdatei die sichtbar zentralen Prüfungscluster der Originaldatei: die vorgezogene Bundestagswahl vom 23. Februar 2025, den Aufstieg von CDU/CSU zur stärksten Kraft, die AfD als zweitstärkste Kraft, den Koalitionsvertrag „Verantwortung für Deutschland“, die Kanzlerwahl von Friedrich Merz im **zweiten** Wahlgang am 6. Mai 2025, das Finanzpaket mit Reform der Schuldenbremse und 500-Milliarden-Sondervermögen, die sicherheitspolitische Verdichtung um Brigade Litauen und Verteidigungsausgaben, die AfD-Einstufung durch den Verfassungsschutz, den COMPACT-Fall, den 8. Mai 2025 als 80. Jahrestag des Kriegsendes, 35 Jahre Deutsche Einheit, UBA-Projektionen zu den Klimazielen sowie die Themen ePA, Mindestlohn und Gaza. fileciteturn2file0 fileciteturn11file3 fileciteturn11file2 citeturn1news0turn1news2turn3news1

Besonders hoch belastbar sind hier die Suchblöcke zur Kanzlerwahl und zum Finanzpaket, weil dafür neben den Dateien auch belastbare Agenturtreffer vorliegen: Reuters und AP berichten übereinstimmend, dass Merz erst nach einem historischen Fehlstart im ersten Durchgang im zweiten Wahlgang gewählt wurde; Reuters/WELT decken zudem das März-Paket aus Schuldenbremsenreform und 500-Milliarden-Sondervermögen ab. citeturn1news0turn1news2turn3news1turn3news2

## Zeitraum 2026

Für 2026 dominieren in der sichtbaren Dateilage vor allem EU- und Sportthemen: Anwendung des EU-Migrations- und Asylpakts ab 12. Juni 2026, volle Anwendbarkeit des AI Act ab 2. August 2026, die große Fußball-WM 2026 mit 48 Teams in USA/Kanada/Mexiko, Milano Cortina 2026 sowie wirtschaftsbezogene Basisfragen zu deutscher Konjunkturprognose und WTO-Handelswarnungen. Diese Themen sind im obigen Markdown ebenfalls als deduplizierte Themenblöcke hinterlegt. fileciteturn11file0 fileciteturn12file3 fileciteturn15file1

Ebenfalls sichtbar und daher integriert sind die 2025/2026-Sportkomplexe rund um Rhine-Ruhr 2025, die Women’s EURO 2025 in der Schweiz mit Finale in Basel sowie den reformierten Club World Cup 2025 in den USA. fileciteturn15file1 fileciteturn12file3

## Offene Punkte

Die Datei `ALLE_FRAGEN_UND_ANTWORTEN.md` ist sehr lang; in der Sitzung waren nur **Teilsegmente** und thematische Treffer sicher surfacbar. Deshalb ist die Fassung oben eine **hochkonfidente, sofort nutzbare Ergänzungsdatei für alle klar identifizierbaren Basisfragen und ihre Varianten**, aber noch nicht die letzte denkbare Vollabdeckung jedes einzelnen, in den nicht sichtbar gewordenen Dateibereichen verborgenen Basis-Blocks.

Praktisch heißt das: Die Struktur, der Kodex und die Vererbungslogik sind bereits passend zur Originaldatei gesetzt; für eine absolute Vollabdeckung müssten anschließend nur noch die bislang nicht sichtbar gewordenen Rest-Basisfragen nach exakt demselben Muster ergänzt werden. Die bestehende Ergänzung ist dafür bereits formatiert und anschlussfähig.