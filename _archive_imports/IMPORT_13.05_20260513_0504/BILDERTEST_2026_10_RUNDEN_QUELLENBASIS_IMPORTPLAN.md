# BILDERTEST 2026 – 10 Quizrunden / Seed-Datenbasis

**Stand:** 2026-05-13

**Status:** breite Seed-Recherche, nicht finale Bild-/Lizenzfreigabe.

## Transparenz

- Dies ist eine breite Kandidaten- und Quellenbasis, kein final rechtlich/faktisch freigegebener Bildbestand.
- Jedes Foto muss vor Nutzung einzeln auf Lizenz, Fotograf, Quelle und Bearbeitungsrechte geprüft werden.
- Agenturfotos von Reuters/AP/Getty/dpa sind als Faktenquelle hilfreich, aber nicht automatisch als App-Bild nutzbar.
- Der echte DJS-Zeitraum ist rund Ende Juni 2025 bis Ende Juni 2026. Da heute 2026-05-13 ist, braucht die App kurz vor Prüfung noch einen Juni-Update-Durchlauf.
- Einige absolute Kernthemen wie Merz-Kanzlerwahl liegen knapp vor dem strengen 12-Monatsfenster, bleiben aber wegen Amts-/Kontextrelevanz als Kandidaten enthalten.

## Einfache Bildstrategie für Wibe-Coding

1. In der App zunächst nur Platzhalter und `image.searchQueries` nutzen.
2. Bilder manuell oder später per kleinem Script aus Wikimedia Commons/official media suchen.
3. Erst wenn Lizenz/Fotograf/Quelle geprüft sind, lokale Datei in `public/bildertest/2026/...jpg` speichern.
4. In der App immer Credit unter dem Bild anzeigen: `Foto: Name / Quelle / Lizenz`.
5. Keine Agenturfotos direkt kopieren. Reuters/AP/dpa/Getty sind Quellen für Fakten, nicht automatisch Bildquellen.


## Geeignete Bildquellen

- **Wikimedia Commons:** Best first stop for freely reusable portraits/event photos; check exact file license and attribution.  
  https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia
- **EU Audiovisual Service:** Strong for EU officials/events; check reuse/credit line on asset page.  
  https://audiovisual.ec.europa.eu/
- **Bundesregierung/BPA press photos:** Good for current German government, but usually only for current journalistic-editorial reporting; not blanket CC.  
  https://www.bundesregierung.de/breg-de/mediathek/pressefotos/nutzungsbedingungen-bilder
- **Bundestag Bilddatenbank:** Good for Bundestag/Abgeordnete, but check restrictions; social-media/commercial/wahlkampf restrictions may apply.  
  https://www.bundestag.de/dokumente/parlamentsarchiv/bildnutz-244932
- **NATO media:** Good for NATO secretary general/events; cite/source NATO and avoid promotional/commercial uses.  
  https://www.nato.int/en/about-us/official-texts-and-resources/use-of-nato-content-and-brand
- **U.S. Government / White House photos via Commons:** Many official U.S. federal works are public domain; still verify per file.  
  https://commons.wikimedia.org/wiki/File:The_White_House_-_54410412866.jpg

## Rundenübersicht


### r01 – Deutsche Bundesregierung & Machtwechsel

**Fokus:** Amt, Gesicht, Ministerium, Regierungsstart 2025/26  
**Mix:** 8 Personen / 4 Ereignis- oder Objektbilder

| ID | Typ | Antwort | Schwierigkeit | Wahrscheinlichkeit | Kurzkontext |
|---|---|---|---|---|---|
| `bt26-r01-01` | person | Friedrich Merz | leicht | sehr hoch | Bundeskanzler seit 6. Mai 2025; im ersten Wahlgang gescheitert, dann im zweiten Wahlgang gewählt. |
| `bt26-r01-02` | person | Lars Klingbeil | mittel | hoch | SPD-Spitzenpolitiker, Vizekanzler/Finanzressort und zentrale Figur der schwarz-roten Koalition. |
| `bt26-r01-03` | person | Katherina Reiche | mittel | hoch | CDU-Politikerin und Bundeswirtschaftsministerin; wichtig für Energie-, Industrie- und Standortpolitik. |
| `bt26-r01-04` | person | Alexander Dobrindt | mittel | hoch | CSU-Politiker; als Innenminister relevant für Migration, Sicherheit und Verfassungsschutzdebatten. |
| `bt26-r01-05` | person | Karin Prien | mittel | mittel | Bundesministerin für Bildung, Familie, Senioren, Frauen und Jugend; Bildung/Familie als gesellschaftspolitische Querschnittsthemen. |
| `bt26-r01-06` | person | Bärbel Bas | mittel | mittel | SPD-Politikerin; zuvor Bundestagspräsidentin, danach prominente Regierungsfunktion in der schwarz-roten Bundesregierung. |
| `bt26-r01-07` | person | Johann Wadephul | schwer | mittel | CDU-Außenpolitiker; als Außenminister/außenpolitische Spitzenfigur wichtig für Ukraine, EU und NATO. |
| `bt26-r01-08` | person | Boris Pistorius | leicht | hoch | Verteidigungspolitiker; zentrale Figur bei Bundeswehr, Ukraine-Hilfe, Wehrdienst und Litauen-Brigade. |
| `bt26-r01-09` | event | Kanzlerwahl im Bundestag 2025 | mittel | hoch | Friedrich Merz scheiterte zunächst im ersten Wahlgang und wurde erst im zweiten Wahlgang zum Bundeskanzler gewählt. |
| `bt26-r01-10` | event | Bundeskabinett Merz | leicht | hoch | Das Bundeskabinett der schwarz-roten Bundesregierung unter Friedrich Merz. |
| `bt26-r01-11` | event | Sondervermögen Infrastruktur und Klimaneutralität | schwer | mittel | 2025 beschloss Deutschland ein Sondervermögen von bis zu 500 Milliarden Euro für Infrastruktur und Klimaneutralität. |
| `bt26-r01-12` | event | Brigade Litauen der Bundeswehr | mittel | hoch | Dauerhafte Stationierung einer deutschen Brigade in Litauen als Zeichen der NATO-Ostflankenverteidigung. |

### r02 – Demokratie, Rechtsextremismus & Rechtsstaat

**Fokus:** Bilder, bei denen Name + juristische Einordnung zählen  
**Mix:** 8 Personen / 4 Ereignis- oder Objektbilder

| ID | Typ | Antwort | Schwierigkeit | Wahrscheinlichkeit | Kurzkontext |
|---|---|---|---|---|---|
| `bt26-r02-01` | person | Alice Weidel | leicht | hoch | AfD-Bundessprecherin und zentrale Figur bei Debatten über Verfassungsschutz, Parteiensystem und Rechtsextremismus. |
| `bt26-r02-02` | person | Tino Chrupalla | mittel | mittel | AfD-Bundessprecher; zusammen mit Alice Weidel regelmäßig in Berichten über AfD und Verfassungsschutz. |
| `bt26-r02-03` | person | Sahra Wagenknecht | leicht | hoch | Gründerin/führende Figur des BSW; relevant für Koalitionsbildung, Ostdeutschland und neue Parteistrukturen. |
| `bt26-r02-04` | person | Heidi Reichinnek | mittel | mittel | Linke-Politikerin mit hoher Social-Media-Sichtbarkeit; geeignet für junge politische Kommunikation und Linke-Aufschwung-Fragen. |
| `bt26-r02-05` | person | Jürgen Elsässer | schwer | hoch | Chefredakteur/Verleger von COMPACT; das Bundesverwaltungsgericht hob 2025 das COMPACT-Verbot auf. |
| `bt26-r02-06` | person | Ekrem İmamoğlu | mittel | hoch | Istanbuler Oppositionspolitiker; seine Inhaftierung 2025 löste große Proteste gegen Erdoğan aus. |
| `bt26-r02-07` | person | Yoon Suk Yeol | schwer | mittel | Südkoreas Präsident, der Ende 2024 kurzzeitig Kriegsrecht ausrief; 2025/26 weiterhin juristisch-politisch relevant. |
| `bt26-r02-08` | person | Gisèle Pelicot | mittel | mittel | Französin, deren öffentlich geführter Prozess zu sexualisierter Gewalt Debatten über Scham, Täter und Öffentlichkeit auslöste. |
| `bt26-r02-09` | event | COMPACT-Urteil des Bundesverwaltungsgerichts | schwer | hoch | Das Bundesverwaltungsgericht hob am 24. Juni 2025 das COMPACT-Verbot als rechtswidrig auf. |
| `bt26-r02-10` | event | AfD und Verfassungsschutz | mittel | hoch | Die Einstufung/Beobachtung der AfD durch den Verfassungsschutz und die juristischen Folgen waren 2025/26 Dauerthema. |
| `bt26-r02-11` | event | Türkei-Proteste nach İmamoğlu-Verhaftung | mittel | hoch | Proteste gegen die Inhaftierung des Istanbuler Bürgermeisters und Erdoğan-Rivalen Ekrem İmamoğlu. |
| `bt26-r02-12` | event | Südkorea-Kriegsrecht-Krise | schwer | mittel | Das Parlament stoppte Ende 2024 Yoons Kriegsrecht; die Krise blieb 2025/26 ein Lehrstück institutioneller Resilienz. |

### r03 – EU, NATO & europäische Sicherheit

**Fokus:** Institutionen erkennen: Kommission, Rat, NATO, EU-Außenpolitik  
**Mix:** 8 Personen / 4 Ereignis- oder Objektbilder

| ID | Typ | Antwort | Schwierigkeit | Wahrscheinlichkeit | Kurzkontext |
|---|---|---|---|---|---|
| `bt26-r03-01` | person | Ursula von der Leyen | leicht | hoch | Präsidentin der Europäischen Kommission; zentral bei Clean Industrial Deal, Verteidigung, Ukraine und Demokratiepaketen. |
| `bt26-r03-02` | person | Kaja Kallas | leicht | sehr hoch | Hohe Vertreterin der EU für Außen- und Sicherheitspolitik und Vizepräsidentin der Kommission. |
| `bt26-r03-03` | person | António Costa | mittel | hoch | Präsident des Europäischen Rates seit Dezember 2024; leitet Gipfel der Staats- und Regierungschefs. |
| `bt26-r03-04` | person | Roberta Metsola | mittel | mittel | Präsidentin des Europäischen Parlaments; wichtig zur Unterscheidung der EU-Institutionen. |
| `bt26-r03-05` | person | Mark Rutte | leicht | hoch | NATO-Generalsekretär; relevant für Verteidigungsausgaben, Trump, Ukraine und NATO-Gipfel. |
| `bt26-r03-06` | person | Andrius Kubilius | schwer | mittel | EU-Kommissar für Verteidigung und Raumfahrt; Schlüsselfigur für europäische Aufrüstung/Industriepolitik. |
| `bt26-r03-07` | person | Michael McGrath | schwer | mittel | EU-Kommissar für Demokratie, Justiz und Rechtsstaatlichkeit; verbunden mit dem European Democracy Shield. |
| `bt26-r03-08` | person | Henna Virkkunen | schwer | mittel | Exekutiv-Vizepräsidentin der EU-Kommission für Tech-Souveränität/Sicherheit/Demokratie; relevant für AI Act/DSA-Fragen. |
| `bt26-r03-09` | event | ReArm Europe / Readiness 2030 | mittel | hoch | EU-Weißbuch und ReArm-Europe-Plan vom 19. März 2025 zur Stärkung europäischer Verteidigungsbereitschaft. |
| `bt26-r03-10` | event | SAFE – Security Action for Europe | schwer | hoch | EU-Finanzinstrument mit bis zu 150 Milliarden Euro Darlehen für Verteidigungsinvestitionen. |
| `bt26-r03-11` | event | European Democracy Shield | mittel | mittel | Die EU-Kommission stellte im November 2025 den European Democracy Shield vor. |
| `bt26-r03-12` | event | NATO-Gipfel Den Haag 2025 | mittel | hoch | NATO-Gipfel 2025 in Den Haag; Verteidigungsausgaben, Trump, Rutte und Ukraine als zentrale Themen. |

### r04 – USA, Trump II & Tech-Macht

**Fokus:** US-Gesichter und ikonische politische Bilder  
**Mix:** 8 Personen / 4 Ereignis- oder Objektbilder

| ID | Typ | Antwort | Schwierigkeit | Wahrscheinlichkeit | Kurzkontext |
|---|---|---|---|---|---|
| `bt26-r04-01` | person | Donald Trump | leicht | sehr hoch | 47. Präsident der USA; Zölle, Migration, NATO, Ukraine und Kulturkampf dominieren die Schlagzeilen. |
| `bt26-r04-02` | person | J. D. Vance | mittel | hoch | US-Vizepräsident; sichtbar in Debatten über Ukraine, Kulturkampf und Signal-Chat-Kontext. |
| `bt26-r04-03` | person | Marco Rubio | mittel | hoch | US-Außenminister; wichtig für Ukraine, Nahost, Lateinamerika und transatlantische Beziehungen. |
| `bt26-r04-04` | person | Pete Hegseth | mittel | hoch | US-Verteidigungsminister; zentral im Signal-Chat-Skandal um Angriffspläne gegen Huthi-Ziele im Jemen. |
| `bt26-r04-05` | person | Jeffrey Goldberg | mittel | hoch | Chefredakteur von The Atlantic; versehentlich in Signal-Chat mit US-Angriffsplänen aufgenommen. |
| `bt26-r04-06` | person | Elon Musk | leicht | hoch | Tesla/X/SpaceX-Chef; stark mit Trump-Administration, DOGE und Plattform-/Machtfragen verbunden. |
| `bt26-r04-07` | person | Cory Booker | mittel | mittel | Demokratischer Senator; hielt 2025 eine 25-Stunden-Rede gegen Trump und brach den Senatsrekord. |
| `bt26-r04-08` | person | Jerome Powell | mittel | mittel | Fed-Chef; zentrale Figur bei Zinsen, Inflation und Konflikten zwischen Notenbank und US-Regierung. |
| `bt26-r04-09` | event | Trump-Vereidigung 2025 | leicht | mittel | Trumps zweite Vereidigung am 20. Januar 2025; auffällig waren Tech-Milliardäre und neue Machtachsen. |
| `bt26-r04-10` | event | Reciprocal Tariffs / Liberation Day | mittel | hoch | Trump kündigte am 2. April 2025 globale reciprocal tariffs an und nannte den Tag Liberation Day. |
| `bt26-r04-11` | event | Signal-Chat-Skandal | mittel | hoch | US-Spitzenbeamte diskutierten militärische Angriffspläne in einem Signal-Chat, in dem Jeffrey Goldberg mitlas. |
| `bt26-r04-12` | event | Trump-Zölle und globaler Handelskrieg | schwer | mittel | US-Zölle lösten 2025/26 globale Gegenreaktionen, Vorzieheffekte und Handelsunsicherheit aus. |

### r05 – Kriege, Konflikte & Diplomatie

**Fokus:** Ukraine, Gaza, Russland, Nahost – Personen plus Bildkontexte  
**Mix:** 8 Personen / 4 Ereignis- oder Objektbilder

| ID | Typ | Antwort | Schwierigkeit | Wahrscheinlichkeit | Kurzkontext |
|---|---|---|---|---|---|
| `bt26-r05-01` | person | Wolodymyr Selenskyj | leicht | sehr hoch | Präsident der Ukraine; steht für Krieg, Friedensverhandlungen, EU-/NATO-Unterstützung und Wiederaufbau. |
| `bt26-r05-02` | person | Wladimir Putin | leicht | hoch | Russischer Präsident; verantwortlich für Russlands Angriffskrieg gegen die Ukraine und geopolitische Eskalationen. |
| `bt26-r05-03` | person | Benjamin Netanjahu | leicht | hoch | Israels Premierminister; zentral im Gaza-Krieg, bei Protesten in Israel und ICC-/Völkerrechtsdebatten. |
| `bt26-r05-04` | person | Karim Khan | schwer | mittel | Chefankläger des Internationalen Strafgerichtshofs; relevant bei Haftbefehlen und internationalen Strafverfahren. |
| `bt26-r05-05` | person | António Guterres | mittel | hoch | UN-Generalsekretär; zentrale Stimme zu Gaza, Ukraine, Sudan, Klima und UN-Reform. |
| `bt26-r05-06` | person | Volker Türk | schwer | mittel | UN-Hochkommissar für Menschenrechte; spricht regelmäßig zu Sudan, Gaza, Ukraine und Menschenrechtsverletzungen. |
| `bt26-r05-07` | person | Philippe Lazzarini | schwer | mittel | UNRWA-Chef; zentral in Debatten um humanitäre Hilfe und Politik im Gazastreifen. |
| `bt26-r05-08` | person | Steve Witkoff | schwer | mittel | US-Sondergesandter/Trump-Vertrauter in außenpolitischen Verhandlungen; mögliches Bildertest-Gesicht für Nahost/Ukraine-Diplomatie. |
| `bt26-r05-09` | event | Gaza-Krieg und tote Journalistinnen/Journalisten | mittel | hoch | Der Krieg in Gaza gilt als einer der tödlichsten Konflikte für Medienschaffende; CPJ meldete 2025 Rekordzahlen. |
| `bt26-r05-10` | event | Ukraine-Friedens- und Sicherheitsgespräche | mittel | hoch | Verhandlungen und Sicherheitsgarantien für die Ukraine blieben 2025/26 ein zentrales Weltpolitikthema. |
| `bt26-r05-11` | event | EU-Sanktionen gegen Russland | schwer | mittel | Die EU setzte 2025/26 ihre Sanktionspolitik gegen Russland fort; wichtig sind Paketnummern, Datum und Schattenflotte. |
| `bt26-r05-12` | event | ICC/ICJ Den Haag | schwer | mittel | ICC und ICJ sitzen beide in Den Haag, haben aber unterschiedliche Aufgaben: Einzelpersonen vs. Staatenstreitigkeiten. |

### r06 – Humanitäre Krisen & Globaler Süden

**Fokus:** Unterberichtete Konflikte, Nobelpreis, Lateinamerika  
**Mix:** 8 Personen / 4 Ereignis- oder Objektbilder

| ID | Typ | Antwort | Schwierigkeit | Wahrscheinlichkeit | Kurzkontext |
|---|---|---|---|---|---|
| `bt26-r06-01` | person | Abdel Fattah al-Burhan | schwer | mittel | Sudans Armeechef und zentraler Akteur im Krieg gegen die RSF. |
| `bt26-r06-02` | person | Mohamed Hamdan Dagalo (Hemedti) | schwer | mittel | Chef der Rapid Support Forces (RSF); zentraler Kriegsakteur im Sudan-Konflikt. |
| `bt26-r06-03` | person | Félix Tshisekedi | mittel | mittel | Präsident der Demokratischen Republik Kongo; M23-Konflikt und Goma/Bukavu prägen die Lage. |
| `bt26-r06-04` | person | Paul Kagame | mittel | mittel | Präsident Ruandas; Ruanda wird international im Zusammenhang mit Unterstützung für M23 genannt. |
| `bt26-r06-05` | person | Corneille Nangaa | schwer | niedrig | Früherer Wahlkommissionschef der DR Kongo, nun mit der Congo River Alliance/M23 verbunden. |
| `bt26-r06-06` | person | María Corina Machado | mittel | hoch | Venezolanische Oppositionsführerin; Friedensnobelpreis 2025 für Einsatz für demokratische Rechte. |
| `bt26-r06-07` | person | Nayib Bukele | mittel | mittel | Präsident El Salvadors; bekannt für Anti-Gang-Politik, autoritären Kurs und Bitcoin-Experiment. |
| `bt26-r06-08` | person | Daniel Noboa | mittel | mittel | Präsident Ecuadors; Drogengewalt, Ausnahmezustände und Sicherheitskrise prägen die Politik. |
| `bt26-r06-09` | event | Sudan-Konferenz in Berlin 2026 | mittel | hoch | Deutschland richtete im April 2026 eine internationale Sudan-Konferenz aus; Sudan gilt als größte humanitäre Krise der Gegenwart. |
| `bt26-r06-10` | event | M23 in Goma / Ostkongo | mittel | hoch | Rwanda-gestützte M23-Rebellen nahmen 2025 Goma ein; der Konflikt verschärfte die humanitäre Krise im Ostkongo. |
| `bt26-r06-11` | event | Friedensnobelpreis 2025 | leicht | hoch | Der Friedensnobelpreis 2025 ging an María Corina Machado für ihren Einsatz für Demokratie in Venezuela. |
| `bt26-r06-12` | event | Haiti-Krise / Ganggewalt | schwer | niedrig | Die Sicherheits- und Staatskrise in Haiti blieb 2025/26 ein unterberichtetes internationales Thema. |

### r07 – Wirtschaft, KI & Plattformmacht

**Fokus:** Gesichter von Geld, Daten, Chips und Regulierung  
**Mix:** 8 Personen / 4 Ereignis- oder Objektbilder

| ID | Typ | Antwort | Schwierigkeit | Wahrscheinlichkeit | Kurzkontext |
|---|---|---|---|---|---|
| `bt26-r07-01` | person | Christine Lagarde | leicht | hoch | Präsidentin der Europäischen Zentralbank; Zinsen, Inflation und Eurozone sind klassische Wirtschaftsfragen. |
| `bt26-r07-02` | person | Kristalina Georgieva | mittel | mittel | Chefin des Internationalen Währungsfonds; Weltwirtschaftsprognosen und Finanzstabilität. |
| `bt26-r07-03` | person | Ngozi Okonjo-Iweala | mittel | mittel | Generaldirektorin der WTO; Welthandel, Zölle und Handelsstreitigkeiten. |
| `bt26-r07-04` | person | Jensen Huang | leicht | hoch | Nvidia-Chef; ikonisches Gesicht des KI-Chip-Booms. |
| `bt26-r07-05` | person | Sam Altman | leicht | hoch | OpenAI-Chef; zentrale Figur bei generativer KI, Regulierung und Tech-Politik. |
| `bt26-r07-06` | person | Sundar Pichai | mittel | mittel | CEO von Google/Alphabet; relevant für KI, Suche, Regulierung und Plattformmacht. |
| `bt26-r07-07` | person | Tim Cook | mittel | mittel | Apple-CEO; relevant bei Plattformregulierung, Lieferketten, China/USA und KI-Strategien. |
| `bt26-r07-08` | person | Demis Hassabis | schwer | niedrig | Google-DeepMind-Chef und KI-Forscher; relevant für KI, Wissenschaft und Nobel-/Forschungsbezüge. |
| `bt26-r07-09` | event | EU AI Act – neue Anwendungsstufen | mittel | hoch | 2025 traten weitere Anwendungsstufen des EU AI Act in Kraft; relevant für verbotene Praktiken und GPAI-Regeln. |
| `bt26-r07-10` | event | Clean Industrial Deal | mittel | mittel | Der Clean Industrial Deal verbindet Klimaschutz, Wettbewerbsfähigkeit und Industriepolitik. |
| `bt26-r07-11` | event | EZB-Zinswende | mittel | mittel | Nach der Inflationswelle senkte/hielt die EZB 2025/26 Zinsen im Spannungsfeld von Inflation und Konjunktur. |
| `bt26-r07-12` | event | Chip- und KI-Boom | mittel | hoch | KI-Infrastruktur und Chipabhängigkeit wurden 2025/26 zu wirtschafts- und geopolitischen Schlüsselfragen. |

### r08 – Kultur, Medien & Preise

**Fokus:** Nobel, Oscars, Berlinale, Literatur und Medienmomente  
**Mix:** 8 Personen / 4 Ereignis- oder Objektbilder

| ID | Typ | Antwort | Schwierigkeit | Wahrscheinlichkeit | Kurzkontext |
|---|---|---|---|---|---|
| `bt26-r08-01` | person | László Krasznahorkai | schwer | hoch | Ungarischer Schriftsteller; Literaturnobelpreis 2025. |
| `bt26-r08-02` | person | Paul Thomas Anderson | mittel | mittel | Regisseur/Produzent von One Battle After Another, dem Oscar-Best-Picture-Gewinner 2026. |
| `bt26-r08-03` | person | Conan O'Brien | mittel | mittel | Moderator der Oscars 2026; wurde außerdem für 2027 erneut angekündigt. |
| `bt26-r08-04` | person | İlker Çatak | mittel | hoch | Regisseur von Gelbe Briefe / Yellow Letters; gewann den Goldenen Bären 2026. |
| `bt26-r08-05` | person | Sandra Hüller | leicht | mittel | Deutsche Schauspielerin; international sichtbare Filmfigur und 2026 Berlinale-preisrelevant. |
| `bt26-r08-06` | person | Jafar Panahi | schwer | mittel | Iranischer Regisseur; Cannes-/Kino-Kontext, politisch verfolgter Filmemacher. |
| `bt26-r08-07` | person | Arundhati Roy | schwer | niedrig | Indische Schriftstellerin und Aktivistin; sichtbar bei Debatten über Kunst, Politik und Protest. |
| `bt26-r08-08` | person | Maria Ressa | mittel | niedrig | Nobelpreisträgerin und Journalistin; Symbolfigur für Pressefreiheit und Plattform-/Desinformationsdebatten. |
| `bt26-r08-09` | event | Oscars 2026 – Best Picture | mittel | hoch | One Battle After Another gewann bei den 98. Academy Awards den Oscar für Best Picture. |
| `bt26-r08-10` | event | Berlinale 2026 – Goldener Bär | mittel | hoch | Gelbe Briefe / Yellow Letters von İlker Çatak gewann den Goldenen Bären. |
| `bt26-r08-11` | event | Literaturnobelpreis 2025 | mittel | hoch | Der Literaturnobelpreis 2025 ging an László Krasznahorkai. |
| `bt26-r08-12` | event | Pressefreiheit und Desinformation | schwer | mittel | Pressefreiheit, KI-Desinformation und Plattformmacht blieben 2025/26 DJS-nahe Medienthemen. |

### r09 – Sport 2025/26

**Fokus:** Fußball, Olympia, deutsche Medaillen und Funktionäre  
**Mix:** 8 Personen / 4 Ereignis- oder Objektbilder

| ID | Typ | Antwort | Schwierigkeit | Wahrscheinlichkeit | Kurzkontext |
|---|---|---|---|---|---|
| `bt26-r09-01` | person | Sarina Wiegman | mittel | hoch | Trainerin der englischen Lionesses; England gewann die Women's EURO 2025. |
| `bt26-r09-02` | person | Chloe Kelly | mittel | mittel | Englische Fußballerin; erzielte im EM-Finale 2025 den entscheidenden Elfmeter. |
| `bt26-r09-03` | person | Hannah Hampton | schwer | mittel | Torhüterin Englands; wichtige Paraden im Elfmeterschießen gegen Spanien. |
| `bt26-r09-04` | person | Aitana Bonmatí | mittel | mittel | Spanische Weltklassespielerin; Spanien stand im Women's-EURO-Finale 2025. |
| `bt26-r09-05` | person | Cole Palmer | mittel | hoch | Chelsea-Spieler; zwei Tore und Assist im 3:0-Finale gegen PSG beim FIFA Club World Cup 2025. |
| `bt26-r09-06` | person | Reece James | mittel | mittel | Chelsea-Kapitän; hob die Club-WM-Trophäe 2025 nach dem Sieg gegen PSG. |
| `bt26-r09-07` | person | Johannes Lochner | mittel | mittel | Deutscher Bobpilot; gewann bei Milano Cortina 2026 Gold im Viererbob. |
| `bt26-r09-08` | person | Tobias Wendl und Tobias Arlt | schwer | mittel | Deutsche Rennrodler; Teil deutscher Goldmomente bei Milano Cortina 2026 im Team-Relay-Kontext. |
| `bt26-r09-09` | event | UEFA Women's EURO 2025 Finale | leicht | hoch | England besiegte Spanien im Finale in Basel nach Elfmeterschießen und verteidigte den EM-Titel. |
| `bt26-r09-10` | event | FIFA Club World Cup 2025 Finale | leicht | hoch | Chelsea gewann die neue Club-WM im 32-Teams-Format durch ein 3:0 gegen PSG. |
| `bt26-r09-11` | event | Milano Cortina 2026 | leicht | hoch | Olympische Winterspiele 2026 in Mailand/Cortina; wichtig für deutsche Medaillen und Wintersportbilder. |
| `bt26-r09-12` | event | WM 2026 Vorbereitung | leicht | mittel | Die Fußball-WM 2026 findet erstmals mit 48 Teams in USA, Kanada und Mexiko statt. |

### r10 – Klima, Wissenschaft, Gesundheit & Ereignisbilder

**Fokus:** Personen hinter Klima/WHO/Wissenschaft plus ikonische Orts-/Objektbilder  
**Mix:** 8 Personen / 4 Ereignis- oder Objektbilder

| ID | Typ | Antwort | Schwierigkeit | Wahrscheinlichkeit | Kurzkontext |
|---|---|---|---|---|---|
| `bt26-r10-01` | person | Simon Stiell | schwer | mittel | UNFCCC-Exekutivsekretär; wichtiges Gesicht bei UN-Klimakonferenzen wie COP30. |
| `bt26-r10-02` | person | Luiz Inácio Lula da Silva | leicht | hoch | Brasiliens Präsident; Gastgeberland der COP30 und Symbolfigur für Amazonas-/Klimapolitik. |
| `bt26-r10-03` | person | Marina Silva | mittel | mittel | Brasiliens Umweltministerin; international bekannt für Waldschutz und Amazonaspolitik. |
| `bt26-r10-04` | person | Tedros Adhanom Ghebreyesus | mittel | hoch | WHO-Generaldirektor; relevant beim Pandemieabkommen der Weltgesundheitsversammlung 2025. |
| `bt26-r10-05` | person | Jim Skea | schwer | mittel | Vorsitzender des IPCC/Weltklimarats; Gesicht für Klimawissenschaft und 1,5-Grad-Debatten. |
| `bt26-r10-06` | person | Fatih Birol | mittel | mittel | Chef der Internationalen Energieagentur; wichtig bei Energieprognosen, Öl/Gas und Energiewende. |
| `bt26-r10-07` | person | Suni Williams | mittel | mittel | NASA-Astronautin; ihr verlängerter ISS-Aufenthalt nach Problemen mit Boeings Starliner war 2025 ein großes Raumfahrtthema. |
| `bt26-r10-08` | person | Butch Wilmore | mittel | mittel | NASA-Astronaut; gemeinsam mit Suni Williams deutlich länger als geplant auf der ISS. |
| `bt26-r10-09` | event | COP30 in Belém | leicht | hoch | COP30 fand 2025 in Belém, Brasilien, statt; symbolisch wichtig wegen Amazonas/Klimaschutz. |
| `bt26-r10-10` | event | 80 Jahre Hiroshima und Nagasaki | leicht | hoch | 2025 jährten sich die Atombombenabwürfe auf Hiroshima und Nagasaki zum 80. Mal. |
| `bt26-r10-11` | event | A23a-Eisberg | mittel | mittel | Der riesige Eisberg A23a war 2025/26 immer wieder in Nachrichten und NASA/ESA-Bildern präsent. |
| `bt26-r10-12` | event | WHO-Pandemieabkommen | mittel | mittel | Die Weltgesundheitsversammlung nahm 2025 das WHO-Pandemieabkommen an. |

## Claude-Code-Auftrag für v1.3

```md
TASK: Bildertest-Foundation v1.3 einbauen

1. Lege `src/types-bildertest.ts` an mit Interfaces `BildertestItem`, `BildertestRound`, `BildertestImageMeta`.
2. Kopiere `BILDERTEST_2026_SEED_10_RUNDEN.json` nach `src/data/bildertestRounds.json`.
3. Baue eine neue Page `BildertestMode.tsx`.
4. Startscreen: 10 Rundenkarten anzeigen. Jede Runde zeigt Personen-/Ereignis-Mix, Schwierigkeit und Anzahl Items.
5. Quizcard:
   - zeigt Bildplatzhalter, solange `image.status !== READY`
   - zeigt Prompt
   - Eingabe: Freitext `Wer/was ist zu sehen?`
   - Button `Auflösen`
   - Danach: correctAnswer, roleOrShortLabel, newsContext, Quellen, alternativePrompts
6. Auswertung low-level halten: zunächst Selbstkontrolle mit Buttons `gewusst`, `halb gewusst`, `nicht gewusst`.
7. Lokaler Fortschritt in localStorage: pro Item Status und Wiederholungsdatum speichern.
8. Navigation um neuen Tab `Bildertest` ergänzen; bestehendes Hauptquiz nicht anfassen.
9. Unter jedem Bild Credit anzeigen, sobald Foto eingebaut ist.
10. Keine automatischen Bilddownloads ohne Lizenzprüfung erzwingen.
```


## JSON-Importhinweis
Die vollständigen Seed-Daten liegen in `BILDERTEST_2026_SEED_10_RUNDEN.json`. Dieses MD ist die redaktionelle Übersicht; die JSON-Datei ist für Code/Import gedacht.
