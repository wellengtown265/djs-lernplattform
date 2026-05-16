# NEU_QUIZ_DATEN_2025_2026_PRO.md

**Stand:** 2026-05-13  
**Scope:** Produktionsdatei für Quiz-/Lernplattform, Schwerpunkt Mai 2025 bis Mai 2026.  
**Arbeitsregel:** Wikipedia ist vollständig ausgeschlossen; Reuters ist als erlaubter Media-Check aufgenommen.

## 1. Harte Quellenpolicy V2.0

Jeder Faktenblock und jede Frage bekommt mindestens zwei Belege. Produktionsfähig sind nur diese Muster:

- `1x PRIMARY + 1x ALLOWED_MEDIA`
- `2x ALLOWED_MEDIA`

Primärquellen sind offizielle Stellen, Gesetzestexte, Parlamente, Gerichte, Ministerien, EU-/UN-/WHO-/IOC-/UEFA-/FIFA-Quellen, Statistikämter oder vergleichbare Institutionen. Erlaubte Medien sind ausschließlich: ARD, ZDF, Deutschlandfunk, dpa, Reuters, AFP, t-online, heise, kicker, Tagesspiegel, WELT, taz, DIE ZEIT, DER SPIEGEL, Süddeutsche Zeitung, NYT, CNN, BBC.

**Wikipedia-Regel:** Wikipedia wird niemals im finalen Quellenkatalog geführt und niemals später im Quiz verlinkt. Wenn Wikipedia bei einer Recherche auftaucht, darf sie nur als Wegweiser zu Primärquellen dienen.

## 2. Direkt implementiertes Datenmodell

```ts
type Evidence = {
  minimumEvidenceRequired: 2;
  requiredPattern: "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA";
  status: "complete" | "needs_media_check" | "needs_better_media_check";
  sourceRefs: string[];
  sourceTierSummary: { hasPrimary: boolean; allowedMediaCount: number };
  wikipediaUsed: false;
  contextUsableForHint: boolean;
};

type QuestionV2 = {
  id: string;
  clusterId: string;
  category: string;
  type: "singlechoice" | "multiplechoice" | "matching" | "kurzantwort";
  question: string;
  options?: string[] | string;
  answer: string | string[] | Record<string,string>;
  answerAliases?: string[];
  difficulty?: "leicht" | "mittel" | "schwer";
  timeScope: { rangeStart: "2025-05-01"; rangeEnd: "2026-05-31"; eventDate?: string; classification: string; note?: string };
  learningContext: string;
  evidence: Evidence;
  sourceRisk: "low" | "medium" | "high";
  productionStatus: "ready" | "ready_with_volatile_legal_or_policy_note" | "context_only_unless_user_allows_pre_may_2025_anchor" | "needs_media_check" | "needs_better_media_check";
};
```

## 3. Cluster-Quellenstatus

| clusterId | Cluster | Quellenstatus | Primär | Media | Fragen |
|---|---|---|---|---|---|
| btw2025_regierungsbildung | Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag | READY | 3 | 2 | 15 |
| gg_svik_verteidigung_2025_2026 | Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026 | READY | 4 | 3 | 10 |
| afd_compact_wehrhafte_demokratie_2025_2026 | Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie | READY | 4 | 3 | 10 |
| eu_defence_sanctions_ai_asylum_democracy_2025_2026 | EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield | READY | 7 | 4 | 23 |
| eu_climate_schengen_schuman_ukraine_2025_2026 | EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung | READY | 5 | 2 | 11 |
| international_events_2025_2026 | USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen | READY | 11 | 6 | 27 |
| wirtschaft_gesundheit_energie_kultur_2025_2026 | Mindestlohn, ePA, iberischer Blackout, Kultur-/Medienkorrekturen | READY | 3 | 7 | 6 |
| sport_weuro_2025 | UEFA Women’s EURO 2025 | READY | 1 | 1 | 4 |
| sport_milano_cortina_2026 | Olympische und Paralympische Winterspiele 2026 | READY | 2 | 3 | 4 |
| sport_club_world_cup_2025 | FIFA Club World Cup 2025 | READY | 1 | 1 | 4 |
| sport_champions_league_2025 | UEFA Champions League Finale 2025 | READY | 1 | 1 | 2 |
| kultur_eurovision_2025 | Eurovision Song Contest 2025 | READY | 1 | 1 | 4 |
| who_pandemic_agreement_2025 | WHO-Pandemieabkommen 2025 | READY | 1 | 1 | 3 |
| eu_ukraine_loan_2026 | EU-Unterstützungskredit Ukraine 2026/2027 | READY | 1 | 1 | 3 |
| energie_iberian_blackout_2025_2026 | Iberischer Blackout und ENTSO-E-Bericht | READY | 1 | 1 | 3 |
| gesundheit_epa_2025 | Elektronische Patientenakte ePA | READY | 1 | 2 | 3 |
| wirtschaft_mindestlohn_2025_2026 | Mindestlohn 2025/2026 | READY | 1 | 1 | 2 |

## 4. Release-Blocker / Nacharbeit

Keine harten Release-Blocker in den neu geprüften Kernclustern.

**Hinweis zu Kontextankern:** Einige Bestandsfragen beziehen sich auf vor Mai 2025 liegende Ereignisse, sind aber Teil der bisherigen 2025/2026-Lerncluster. Sie sind im Manifest als `CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026` gekennzeichnet und sollten nur aktiv bleiben, wenn diese Anker für das Verständnis der Mai-2025-bis-Mai-2026-Cluster ausdrücklich gewünscht sind.

## 5. Maschinenlesbares Manifest

```json
{
  "generatedAt": "2026-05-13",
  "fileName": "NEU_QUIZ_DATEN_2025_2026_PRO.md",
  "sourceFile": "CHECK_ALLE_FRAGEN_ANTWORTEN_V1.3 BETA.md + QUIZ_DATEN_2025_2026_PRO.md",
  "scope": "Nur Mai 2025 bis Mai 2026 für neue Fragen; ältere Anker im Bestand sind als CONTEXT_ANCHOR_OUT_OF_SCOPE markiert.",
  "sourcePolicy": {
    "version": "2.0_STRICT_DOUBLE_EVIDENCE",
    "minimumEvidencePerQuestion": 2,
    "acceptedPatterns": [
      "1x PRIMARY + 1x ALLOWED_MEDIA",
      "2x ALLOWED_MEDIA"
    ],
    "preferredPattern": "1x PRIMARY + 1x ALLOWED_MEDIA",
    "allowedMedia": [
      "ARD",
      "ZDF",
      "Deutschlandfunk",
      "dpa",
      "Reuters",
      "AFP",
      "t-online",
      "heise",
      "kicker",
      "Tagesspiegel",
      "WELT",
      "taz",
      "DIE ZEIT",
      "DER SPIEGEL",
      "Süddeutsche Zeitung",
      "NYT",
      "CNN",
      "BBC"
    ],
    "wikipediaPolicy": "NIEMALS als finale Quelle. Wikipedia höchstens als Recherchepfad zu legitimen Originalquellen; nicht im Quellenkatalog und nicht im Quiz verlinken.",
    "reuters": "Reuters ist ausdrücklich erlaubt."
  },
  "counts": {
    "existingScopedQuestionsChecked": 102,
    "newQuestionsAdded": 32,
    "existingClusters": 7,
    "newClusters": 10,
    "sourceCatalogEntries": 78
  },
  "dataModel": {
    "questionFields": [
      "id",
      "clusterId",
      "category",
      "type",
      "question",
      "options",
      "answer",
      "answerAliases",
      "difficulty",
      "timeScope",
      "learningContext",
      "evidence",
      "sourceRisk",
      "productionStatus",
      "reviewNote"
    ],
    "evidenceFields": [
      "minimumEvidenceRequired",
      "requiredPattern",
      "status",
      "sourceRefs",
      "sourceTierSummary",
      "wikipediaUsed",
      "contextUsableForHint"
    ],
    "sourceFields": [
      "tier",
      "publisher",
      "title",
      "url",
      "checkedAt",
      "supports"
    ]
  },
  "verifiedClusters": [
    {
      "clusterId": "btw2025_regierungsbildung",
      "name": "Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag",
      "timeScope": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum.",
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
      "coreFacts": [
        "23.02.2025 Bundestagswahl",
        "CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft",
        "Koalitionsvertrag Verantwortung für Deutschland",
        "06.05.2025 Merz im zweiten Wahlgang gewählt"
      ],
      "sourceRefs": [
        "SRC_BWL_2025_FINAL",
        "SRC_REUTERS_BTW2025",
        "SRC_BUNDESTAG_MERZ_2025",
        "SRC_REUTERS_MERZ_2025",
        "SRC_BREG_KOALITION_2025"
      ]
    },
    {
      "clusterId": "gg_svik_verteidigung_2025_2026",
      "name": "Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026",
      "timeScope": "Gesetzgebung 2025 und Haushalts-/Finanzdaten 2026 im Kernzeitraum.",
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
      "coreFacts": [
        "SVIK 500 Milliarden Euro",
        "Grundgesetzänderung Art. 109/115/143h",
        "Verteidigungsausgaben 2026 insgesamt 108,2 Mrd. Euro = 82,69 + 25,51 Mrd."
      ],
      "sourceRefs": [
        "SRC_BMF_SVIK_2025",
        "SRC_SVIKG_2025",
        "SRC_BUNDESTAG_GG_2025",
        "SRC_DLF_SCHULDENBREMSE_2025",
        "SRC_REUTERS_DEBT_2025",
        "SRC_BUNDESTAG_DEFENCE_2026",
        "SRC_REUTERS_DEFENCE_2026"
      ]
    },
    {
      "clusterId": "afd_compact_wehrhafte_demokratie_2025_2026",
      "name": "Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie",
      "timeScope": "BfV-Einstufung und COMPACT-Urteil im Kernzeitraum; Rechtsstand dynamisch bis Mai 2026.",
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
      "coreFacts": [
        "02.05.2025 BfV-Einstufung AfD historisch",
        "08.05.2025 Stillhaltezusage VG Köln",
        "24.06.2025 BVerwG hebt COMPACT-Verbot auf",
        "Parteiverbot: Bundestag/Bundesrat/Bundesregierung können Antrag stellen"
      ],
      "sourceRefs": [
        "SRC_VG_KOELN_AFD_2025",
        "SRC_REUTERS_AFD_2025",
        "SRC_DLF_AFD_2025",
        "SRC_BVERWG_COMPACT_2025",
        "SRC_DLF_AFD_VERBOT_2026",
        "SRC_BVERFGG_PARTEIVERBOT",
        "SRC_BWL_PARTEIVERBOT"
      ]
    },
    {
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "name": "EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield",
      "timeScope": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten.",
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
      "coreFacts": [
        "SAFE 150 Mrd. Euro",
        "17. Russland-Sanktionspaket 20.05.2025",
        "AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen",
        "EU-Asylpakt Anwendung 12.06.2026",
        "European Democracy Shield"
      ],
      "sourceRefs": [
        "SRC_COUNCIL_SAFE_2025",
        "SRC_REUTERS_SAFE_2025",
        "SRC_COUNCIL_RUSSIA_16_2025",
        "SRC_COUNCIL_RUSSIA_17_2025",
        "SRC_EU_AI_ACT_FAQ",
        "SRC_EU_AI_ACT_PAGE",
        "SRC_REUTERS_AI_2026",
        "SRC_EU_MIGRATION_2026",
        "SRC_DLF_ASYL_2026",
        "SRC_REUTERS_MIGRATION_2025",
        "SRC_EU_DEMOCRACY_SHIELD"
      ]
    },
    {
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "name": "EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung",
      "timeScope": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker.",
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
      "coreFacts": [
        "EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990",
        "Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025",
        "75 Jahre Schuman-Erklärung am 09.05.2025",
        "90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
      ],
      "sourceRefs": [
        "SRC_EU_CLIMATE_2040",
        "SRC_REUTERS_CLIMATE_2025",
        "SRC_COUNCIL_SCHENGEN_BG_RO",
        "SRC_EU_SCHENGEN_BG_RO",
        "SRC_EU_SCHUMAN_75",
        "SRC_COUNCIL_UKRAINE_90BN",
        "SRC_REUTERS_UKRAINE_90BN"
      ]
    },
    {
      "clusterId": "international_events_2025_2026",
      "name": "USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen",
      "timeScope": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten.",
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
      "coreFacts": [
        "Leo XIV. am 08.05.2025",
        "WHO-Pandemieabkommen 20.05.2025",
        "COP30 Belém 10.–21.11.2025",
        "UN80-Gedenktreffen 22.09.2025",
        "Sudan 2026 größte humanitäre Krise"
      ],
      "sourceRefs": [
        "SRC_WHITEHOUSE_TRUMP_2025",
        "SRC_FEDREG_RECIPROCAL_TARIFFS",
        "SRC_REUTERS_TARIFFS_2025",
        "SRC_VATICAN_FRANCIS_2025",
        "SRC_VATICAN_LEO_XIV_2025",
        "SRC_REUTERS_LEO_XIV_2025",
        "SRC_WHO_PANDEMIC_2025",
        "SRC_REUTERS_WHO_PANDEMIC_2025",
        "SRC_UNFCCC_COP30_2025",
        "SRC_REUTERS_COP30_2025",
        "SRC_UNFCCC_NDC_30",
        "SRC_UN80_2025",
        "SRC_DLF_UN80_2025",
        "SRC_UNESCO_UNDP_AI_ELECTIONS",
        "SRC_UNDP_AI_ELECTIONS",
        "SRC_UN_SUDAN_2026",
        "SRC_REUTERS_SUDAN_2025"
      ]
    },
    {
      "clusterId": "wirtschaft_gesundheit_energie_kultur_2025_2026",
      "name": "Mindestlohn, ePA, iberischer Blackout, Kultur-/Medienkorrekturen",
      "timeScope": "Mai 2025 bis Mai 2026 plus wenige ältere Kulturkorrekturen als Katalogbereinigung.",
      "ids": [
        "djs2025sc002",
        "djs2025sc003",
        "djs2025sc008",
        "djs2026mc-neu-146",
        "djs2026mc-neu-148",
        "djs2026mc-neu-150"
      ],
      "coreFacts": [
        "Mindestlohn 12,82 Euro ab 01.01.2025",
        "ePA bundesweit ab 29.04.2025 und verpflichtende Befüllung ab 01.10.2025",
        "Iberischer Blackout 28.04.2025; finaler ENTSO-E-Bericht 20.03.2026",
        "Kulturantworten korrigiert: Arc de Triomphe, Jaegers Grenze, Echo"
      ],
      "sourceRefs": [
        "SRC_BMAS_MINDESTLOHN_2025",
        "SRC_DLF_MINDESTLOHN_2025",
        "SRC_BMG_EPA_2025",
        "SRC_HEISE_EPA_2025",
        "SRC_HEISE_EPA_ROLLOUT",
        "SRC_ENTSOE_BLACKOUT_2026",
        "SRC_REUTERS_BLACKOUT_2026",
        "SRC_TAGESSPIEGEL_ARC_2021",
        "SRC_SPIEGEL_RELOTIUS_2018",
        "SRC_DLF_ECHO_2018"
      ]
    }
  ],
  "newClusters": [
    {
      "clusterId": "sport_weuro_2025",
      "name": "UEFA Women’s EURO 2025",
      "why": "Sport war unterrepräsentiert; dieses Cluster liefert Land, Stadt, Zeitraum, Finale, Sieger, Ergebnis.",
      "sourceRefs": [
        "SRC_UEFA_WEURO_2025",
        "SRC_REUTERS_WEURO_2025"
      ]
    },
    {
      "clusterId": "sport_milano_cortina_2026",
      "name": "Olympische und Paralympische Winterspiele 2026",
      "why": "Großevent im Kernzeitraum; starke Datums-, Orts-, Disziplinen- und Abkürzungsfragen.",
      "sourceRefs": [
        "SRC_IOC_MILANO_2026",
        "SRC_MILANO_CORTINA_2026",
        "SRC_REUTERS_MILANO_2026",
        "SRC_REUTERS_SKIMO_2026",
        "SRC_REUTERS_PARALYMPICS_2026"
      ]
    },
    {
      "clusterId": "sport_club_world_cup_2025",
      "name": "FIFA Club World Cup 2025",
      "why": "Neue 32-Team-Klub-WM; sehr gut für Ergebnis-, Vereins-, Stadion- und Geografiefragen.",
      "sourceRefs": [
        "SRC_FIFA_CWC_2025",
        "SRC_REUTERS_CWC_2025"
      ]
    },
    {
      "clusterId": "sport_champions_league_2025",
      "name": "UEFA Champions League Finale 2025",
      "why": "Im Zeitraum ab Mai 2025; Quelle noch media-seitig nachzuschärfen.",
      "sourceRefs": [
        "SRC_UEFA_UCL_2025",
        "SRC_REUTERS_UCL_2025"
      ]
    },
    {
      "clusterId": "kultur_eurovision_2025",
      "name": "Eurovision Song Contest 2025",
      "why": "Kultur/Medien + Geografie + Namen + Punkte; gut belegbar.",
      "sourceRefs": [
        "SRC_EUROVISION_2025",
        "SRC_REUTERS_EUROVISION_2025"
      ]
    },
    {
      "clusterId": "who_pandemic_agreement_2025",
      "name": "WHO-Pandemieabkommen 2025",
      "why": "Internationale Politik/Gesundheit; Datum, Institution, Abkürzung PABS.",
      "sourceRefs": [
        "SRC_WHO_PANDEMIC_2025",
        "SRC_REUTERS_WHO_PANDEMIC_2025"
      ]
    },
    {
      "clusterId": "eu_ukraine_loan_2026",
      "name": "EU-Unterstützungskredit Ukraine 2026/2027",
      "why": "EU-Finanzen/Ukraine; 90 Mrd. Euro, Datum, Zeitraum.",
      "sourceRefs": [
        "SRC_COUNCIL_UKRAINE_90BN",
        "SRC_REUTERS_UKRAINE_90BN"
      ]
    },
    {
      "clusterId": "energie_iberian_blackout_2025_2026",
      "name": "Iberischer Blackout und ENTSO-E-Bericht",
      "why": "Technik/Energie; Ursache und Bericht statt nur Länderfrage.",
      "sourceRefs": [
        "SRC_ENTSOE_BLACKOUT_2026",
        "SRC_REUTERS_BLACKOUT_2026"
      ]
    },
    {
      "clusterId": "gesundheit_epa_2025",
      "name": "Elektronische Patientenakte ePA",
      "why": "Abkürzung, Rollout, Pflichtdatum; gut für Wissensvernetzung.",
      "sourceRefs": [
        "SRC_BMG_EPA_2025",
        "SRC_HEISE_EPA_2025",
        "SRC_HEISE_EPA_ROLLOUT"
      ]
    },
    {
      "clusterId": "wirtschaft_mindestlohn_2025_2026",
      "name": "Mindestlohn 2025/2026",
      "why": "Zahlen- und Stichtagswissen; leicht variierbar.",
      "sourceRefs": [
        "SRC_BMAS_MINDESTLOHN_2025",
        "SRC_DLF_MINDESTLOHN_2025"
      ]
    }
  ],
  "sourceCatalog": {
    "SRC_BWL_2025_FINAL": {
      "tier": "PRIMARY",
      "publisher": "Bundeswahlleiterin",
      "title": "Endgültiges Ergebnis der Bundestagswahl 2025",
      "url": "https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "Wahltag 23.02.2025",
        "Wahlbeteiligung 82,5 %",
        "CDU/CSU stärkste Kraft",
        "AfD zweitstärkste Kraft"
      ]
    },
    "SRC_REUTERS_BTW2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "German election result / CDU-CSU win, AfD second, SPD slump",
      "url": "https://www.reuters.com/graphics/GERMANY-ELECTION/RESULTS/lgpdwkqjzvo/",
      "checkedAt": "2026-05-13",
      "supports": [
        "CDU/CSU gewinnt Bundestagswahl 2025",
        "AfD zweitstärkste Kraft",
        "SPD historisch schwach"
      ]
    },
    "SRC_BUNDESTAG_MERZ_2025": {
      "tier": "PRIMARY",
      "publisher": "Deutscher Bundestag",
      "title": "Friedrich Merz im zweiten Wahlgang zum Bundeskanzler gewählt",
      "url": "https://www.bundestag.de/dokumente/textarchiv/2025/kw19-de-kanzlerwahl-1062470",
      "checkedAt": "2026-05-13",
      "supports": [
        "6. Mai 2025",
        "zweiter Wahlgang",
        "325 von 618 Stimmen",
        "Kanzlermehrheit 316"
      ]
    },
    "SRC_REUTERS_MERZ_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Merz elected German chancellor after second vote",
      "url": "https://www.reuters.com/world/europe/merz-fails-be-elected-chancellor-by-german-parliament-2025-05-06/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Merz scheitert im ersten Wahlgang",
        "zweiter Wahlgang erfolgreich",
        "325 Stimmen"
      ]
    },
    "SRC_BREG_KOALITION_2025": {
      "tier": "PRIMARY",
      "publisher": "Bundesregierung",
      "title": "Koalitionsvertrag 2025: Verantwortung für Deutschland",
      "url": "https://www.bundesregierung.de/breg-de/aktuelles/koalitionsvertrag-2025-2340970",
      "checkedAt": "2026-05-13",
      "supports": [
        "Titel Verantwortung für Deutschland",
        "Vorstellung 09.04.2025",
        "Unterzeichnung 05.05.2025"
      ]
    },
    "SRC_BMF_SVIK_2025": {
      "tier": "PRIMARY",
      "publisher": "Bundesfinanzministerium",
      "title": "Sondervermögen Infrastruktur und Klimaneutralität",
      "url": "https://www.bundesfinanzministerium.de/Content/DE/FAQ/sondervermoegen-infrastruktur-klimaneutralitaet.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "Sondervermögen Infrastruktur und Klimaneutralität",
        "500 Milliarden Euro",
        "Investitionsoffensive"
      ]
    },
    "SRC_SVIKG_2025": {
      "tier": "PRIMARY",
      "publisher": "Gesetze im Internet / BMJ",
      "title": "Gesetz zur Errichtung eines Sondervermögens Infrastruktur und Klimaneutralität",
      "url": "https://www.gesetze-im-internet.de/svikg/BJNR0E60A0025.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "SVIKG",
        "Kreditermächtigung bis 500 Milliarden Euro"
      ]
    },
    "SRC_BUNDESTAG_GG_2025": {
      "tier": "PRIMARY",
      "publisher": "Deutscher Bundestag",
      "title": "Bundestag beschließt Grundgesetzänderung zu Verteidigung und Infrastruktur",
      "url": "https://www.bundestag.de/dokumente/textarchiv/2025/kw12-de-sondersitzung-1056916",
      "checkedAt": "2026-05-13",
      "supports": [
        "Schuldenbremse Art. 109/115 GG",
        "Sondervermögen 500 Milliarden",
        "Verteidigungsausgaben oberhalb Schwelle ausgenommen"
      ]
    },
    "SRC_DLF_SCHULDENBREMSE_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Deutschlandfunk",
      "title": "Schuldenbremse und Sondervermögen: Was beschlossen wurde",
      "url": "https://www.deutschlandfunk.de/deutschland-bundeswehr-infrastruktur-schuldenbremse-sondervermoegen-102.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "Einordnung Schuldenbremse",
        "Sondervermögen 500 Milliarden",
        "Verteidigungsausgaben"
      ]
    },
    "SRC_REUTERS_DEBT_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "German upper house OKs debt reform and half-trillion fund",
      "url": "https://www.reuters.com/world/europe/german-upper-house-parliament-oks-debt-reform-half-trillion-fund-2025-03-21/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Bundesrat bestätigt Reform",
        "500-Milliarden-Euro-Fonds",
        "Schuldenbremse-Änderung"
      ]
    },
    "SRC_BUNDESTAG_DEFENCE_2026": {
      "tier": "PRIMARY",
      "publisher": "Deutscher Bundestag",
      "title": "Etat 2026: Verteidigungsausgaben von 108 Milliarden Euro",
      "url": "https://www.bundestag.de/presse/hib/kurzmeldungen-1106068",
      "checkedAt": "2026-05-13",
      "supports": [
        "108,2 Milliarden Euro Verteidigungsausgaben 2026",
        "82,69 Milliarden Einzelplan 14",
        "25,51 Milliarden Sondervermögen Bundeswehr"
      ]
    },
    "SRC_BREG_DEFENCE_2026": {
      "tier": "PRIMARY",
      "publisher": "Bundesregierung",
      "title": "Bundeshaushalt 2026: Investitionen für die Zukunft",
      "url": "https://www.bundesregierung.de/breg-de/aktuelles/bundeshaushalt-2026-2374030",
      "checkedAt": "2026-05-13",
      "supports": [
        "Verteidigungsetat 82,7 Milliarden",
        "25,5 Milliarden Sonderetat Bundeswehr"
      ]
    },
    "SRC_REUTERS_DEFENCE_2026": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Highlights of Germany’s 2026 budget",
      "url": "https://www.reuters.com/business/highlights-germanys-2026-budget-2025-11-28/",
      "checkedAt": "2026-05-13",
      "supports": [
        "core defence 82.7 billion",
        "total defence funding 108.2 billion"
      ]
    },
    "SRC_VG_KOELN_AFD_2025": {
      "tier": "PRIMARY",
      "publisher": "Verwaltungsgericht Köln",
      "title": "Stillhaltezusage des BfV im Eilverfahren AfD",
      "url": "https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/05_08052025/index.php",
      "checkedAt": "2026-05-13",
      "supports": [
        "8. Mai 2025 Stillhaltezusage",
        "BfV setzt öffentliche Einstufung vorläufig aus",
        "2. Mai 2025 Pressemitteilung entfernt"
      ]
    },
    "SRC_REUTERS_AFD_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "German spy agency ranks far-right AfD as extremist",
      "url": "https://www.reuters.com/world/europe/german-spy-agency-ranks-far-right-afd-extremist-2025-05-02/",
      "checkedAt": "2026-05-13",
      "supports": [
        "2. Mai 2025 Einstufung der AfD als extremistisch",
        "BfV-Begründung laut Bericht"
      ]
    },
    "SRC_DLF_AFD_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Deutschlandfunk",
      "title": "Verfassungsschutz stuft gesamte AfD als gesichert rechtsextremistisch ein",
      "url": "https://www.deutschlandfunk.de/verfassungsschutz-stuft-gesamte-afd-als-gesichert-rechtsextremistisch-ein-102.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "gesichert rechtsextremistische Bestrebung",
        "2. Mai 2025",
        "Einordnung Beobachtungsbefugnisse"
      ]
    },
    "SRC_BVERWG_COMPACT_2025": {
      "tier": "PRIMARY",
      "publisher": "Bundesverwaltungsgericht",
      "title": "Verbot der COMPACT-Magazin GmbH rechtswidrig",
      "url": "https://www.bverwg.de/240625U6A4.24.0",
      "checkedAt": "2026-05-13",
      "supports": [
        "24. Juni 2025",
        "COMPACT-Verbot rechtswidrig",
        "Art. 5 GG",
        "Art. 9 Abs. 2 GG / Vereinsrecht"
      ]
    },
    "SRC_DLF_AFD_VERBOT_2026": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Deutschlandfunk",
      "title": "AfD-Verbotsverfahren: Was spricht dafür und was dagegen?",
      "url": "https://www.deutschlandfunk.de/afd-verbot-102.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "wehrhafte Demokratie",
        "Parteiverbot als Mittel",
        "aktueller Rechtsstand AfD 2026"
      ]
    },
    "SRC_BVERFGG_PARTEIVERBOT": {
      "tier": "PRIMARY",
      "publisher": "Gesetze im Internet / BMJ",
      "title": "§ 43 BVerfGG: Antrag auf Erklärung der Verfassungswidrigkeit einer Partei",
      "url": "https://www.gesetze-im-internet.de/bverfgg/__43.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "Antragsberechtigt: Bundestag, Bundesrat, Bundesregierung",
        "Landesregierung bei Landespartei"
      ]
    },
    "SRC_BWL_PARTEIVERBOT": {
      "tier": "PRIMARY",
      "publisher": "Bundeswahlleiterin",
      "title": "Glossar: Parteiverbot",
      "url": "https://www.bundeswahlleiterin.de/service/glossar/p/parteiverbot.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "Bundesverfassungsgericht entscheidet",
        "Antrag Bundestag/Bundesrat/Bundesregierung"
      ]
    },
    "SRC_COUNCIL_SAFE_2025": {
      "tier": "PRIMARY",
      "publisher": "Rat der Europäischen Union",
      "title": "SAFE: Council adopts €150 billion boost for joint procurement",
      "url": "https://www.consilium.europa.eu/en/press/press-releases/2025/05/27/safe-council-adopts-150-billion-boost-for-joint-procurement-on-european-security-and-defence/",
      "checkedAt": "2026-05-13",
      "supports": [
        "SAFE",
        "Security Action for Europe",
        "150 Milliarden Euro",
        "27. Mai 2025",
        "ReArm Europe/Readiness 2030"
      ]
    },
    "SRC_REUTERS_SAFE_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "EU ministers approve new €150 billion arms fund",
      "url": "https://www.reuters.com/business/aerospace-defense/eu-ministers-approve-new-150-bln-euro-arms-fund-2025-05-27/",
      "checkedAt": "2026-05-13",
      "supports": [
        "EU-Verteidigungsfonds SAFE",
        "150 Milliarden Euro",
        "27. Mai 2025"
      ]
    },
    "SRC_COUNCIL_RUSSIA_16_2025": {
      "tier": "PRIMARY",
      "publisher": "Rat der Europäischen Union",
      "title": "16th package of sanctions against Russia",
      "url": "https://www.consilium.europa.eu/en/press/press-releases/2025/02/24/russia-s-war-of-aggression-against-ukraine-eu-adopts-16th-package-of-economic-and-individual-measures/",
      "checkedAt": "2026-05-13",
      "supports": [
        "16. Sanktionspaket",
        "24. Februar 2025"
      ]
    },
    "SRC_COUNCIL_RUSSIA_17_2025": {
      "tier": "PRIMARY",
      "publisher": "Rat der Europäischen Union",
      "title": "17th package of sanctions against Russia",
      "url": "https://www.consilium.europa.eu/en/press/press-releases/2025/05/20/russia-s-war-of-aggression-against-ukraine-eu-adopts-17th-package-of-economic-and-individual-measures/",
      "checkedAt": "2026-05-13",
      "supports": [
        "17. Sanktionspaket",
        "20. Mai 2025"
      ]
    },
    "SRC_EU_AI_ACT_FAQ": {
      "tier": "PRIMARY",
      "publisher": "Europäische Kommission",
      "title": "Navigating the AI Act: FAQ",
      "url": "https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act",
      "checkedAt": "2026-05-13",
      "supports": [
        "Verbote ab 2. Februar 2025",
        "GPAI ab 2. August 2025",
        "grundsätzliche Anwendung ab 2. August 2026",
        "Ausnahmen bis 2027"
      ]
    },
    "SRC_EU_AI_ACT_PAGE": {
      "tier": "PRIMARY",
      "publisher": "Europäische Kommission",
      "title": "AI Act regulatory framework",
      "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
      "checkedAt": "2026-05-13",
      "supports": [
        "AI Act in Kraft 1. August 2024",
        "voll anwendbar grundsätzlich 2. August 2026 mit Ausnahmen",
        "Verbote ab 2. Februar 2025"
      ]
    },
    "SRC_REUTERS_AI_2026": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "EU countries and lawmakers strike provisional deal on watered-down AI rules",
      "url": "https://www.reuters.com/world/eu-countries-lawmakers-strike-provisional-deal-watered-down-ai-rules-2026-05-07/",
      "checkedAt": "2026-05-13",
      "supports": [
        "AI Act Hochrisiko-Regeln politisch volatil",
        "Fristverschiebung/Omnibus-Debatte 2026"
      ]
    },
    "SRC_EU_MIGRATION_2026": {
      "tier": "PRIMARY",
      "publisher": "Europäische Kommission",
      "title": "Commission reports on progress in implementing the Pact on Migration and Asylum",
      "url": "https://home-affairs.ec.europa.eu/news/commission-reports-progress-implementing-pact-migration-and-asylum-2026-05-08_en",
      "checkedAt": "2026-05-13",
      "supports": [
        "Pact entry into application 12 June 2026",
        "3 Milliarden Euro Unterstützung",
        "Bericht vom 8. Mai 2026"
      ]
    },
    "SRC_DLF_ASYL_2026": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Deutschlandfunk",
      "title": "Bundestag beschließt verschärfte Asylregeln für Deutschland",
      "url": "https://www.deutschlandfunk.de/bundestag-beschliesst-verschaerfte-asylregeln-fuer-deutschland-100.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "EU-Asylregeln sollen am 12. Juni 2026 in Kraft treten",
        "Umsetzung in Deutschland",
        "Grenzverfahren/Sekundärmigrationszentren"
      ]
    },
    "SRC_REUTERS_MIGRATION_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "EU countries agree positions on new asylum, migrant returns policy",
      "url": "https://www.reuters.com/world/americas/eu-countries-agree-positions-new-asylum-migrant-returns-policy-2025-12-08/",
      "checkedAt": "2026-05-13",
      "supports": [
        "2026 solidarity pool",
        "21.000 relocations oder 420 Millionen Euro",
        "Migrations-/Asylreform-Kontext"
      ]
    },
    "SRC_EU_DEMOCRACY_SHIELD": {
      "tier": "PRIMARY",
      "publisher": "Europäische Kommission",
      "title": "European Democracy Shield",
      "url": "https://commission.europa.eu/topics/democracy/european-democracy-shield_en",
      "checkedAt": "2026-05-13",
      "supports": [
        "European Democracy Shield",
        "Schutz demokratischer Prozesse",
        "Desinformation und ausländische Einflussnahme"
      ]
    },
    "SRC_EU_CLIMATE_2040": {
      "tier": "PRIMARY",
      "publisher": "Europäische Kommission",
      "title": "2040 climate target / European Climate Law amendment",
      "url": "https://climate.ec.europa.eu/eu-action/european-climate-law/2040-climate-target_en",
      "checkedAt": "2026-05-13",
      "supports": [
        "90 % Netto-THG-Reduktion gegenüber 1990 bis 2040",
        "Vorschlag Juli 2025",
        "spätere Gesetzgebungsentwicklung"
      ]
    },
    "SRC_REUTERS_CLIMATE_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "EU Commission proposes 90% emissions cut target for 2040",
      "url": "https://www.reuters.com/sustainability/climate-energy/eu-commission-proposes-90-emissions-cut-target-2040-2025-07-02/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Kommissionsvorschlag Juli 2025",
        "90 % Ziel bis 2040",
        "Flexibilitäten/Kohlenstoffgutschriften"
      ]
    },
    "SRC_COUNCIL_SCHENGEN_BG_RO": {
      "tier": "PRIMARY",
      "publisher": "Rat der Europäischen Union",
      "title": "Council decides to lift land border controls with Bulgaria and Romania",
      "url": "https://www.consilium.europa.eu/en/press/press-releases/2024/12/12/council-decides-to-lift-land-border-controls-with-bulgaria-and-romania/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Rumänien und Bulgarien",
        "Landgrenzkontrollen ab 1. Januar 2025 aufgehoben",
        "vollständiger Schengen-Beitritt"
      ]
    },
    "SRC_EU_SCHENGEN_BG_RO": {
      "tier": "PRIMARY",
      "publisher": "Europäische Kommission",
      "title": "Bulgaria and Romania join the Schengen area fully",
      "url": "https://home-affairs.ec.europa.eu/news/bulgaria-and-romania-join-schengen-area-fully-2025-01-01_en",
      "checkedAt": "2026-05-13",
      "supports": [
        "1. Januar 2025",
        "Rumänien und Bulgarien vollständig im Schengen-Raum"
      ]
    },
    "SRC_COUNCIL_UKRAINE_90BN": {
      "tier": "PRIMARY",
      "publisher": "Rat der Europäischen Union",
      "title": "Council finalises €90 billion loan for Ukraine",
      "url": "https://www.consilium.europa.eu/en/press/press-releases/2026/04/23/council-finalises-90-billion-loan-for-ukraine/",
      "checkedAt": "2026-05-13",
      "supports": [
        "90 Milliarden Euro Unterstützungskredit",
        "2026/2027",
        "finalisiert 23. April 2026",
        "im Dezember 2025 beschlossen/vereinbart"
      ]
    },
    "SRC_REUTERS_UKRAINE_90BN": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "EU envoys agree details of €90 billion loan for Ukraine",
      "url": "https://www.reuters.com/world/eu-envoys-agree-details-90-bln-euro-loan-ukraine-2026-02-04/",
      "checkedAt": "2026-05-13",
      "supports": [
        "90 Milliarden Euro EU-Kredit",
        "Ukraine 2026/2027",
        "Details des Darlehenspakets"
      ]
    },
    "SRC_EU_SCHUMAN_75": {
      "tier": "PRIMARY",
      "publisher": "Europäische Union",
      "title": "Europe Day 2025 / 75 years of the Schuman Declaration",
      "url": "https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en",
      "checkedAt": "2026-05-13",
      "supports": [
        "Schuman-Erklärung 9. Mai 1950",
        "75 Jahre am 9. Mai 2025"
      ]
    },
    "SRC_WHITEHOUSE_TRUMP_2025": {
      "tier": "PRIMARY",
      "publisher": "White House",
      "title": "Swearing-In Ceremony of Donald J. Trump as 47th President",
      "url": "https://www.whitehouse.gov/articles/2025/01/swearing-in-ceremony-of-donald-j-trump-47th-president-of-the-united-states/",
      "checkedAt": "2026-05-13",
      "supports": [
        "20. Januar 2025",
        "47. Präsident der USA"
      ]
    },
    "SRC_FEDREG_RECIPROCAL_TARIFFS": {
      "tier": "PRIMARY",
      "publisher": "Federal Register",
      "title": "Executive Order 14257: Regulating Imports With a Reciprocal Tariff",
      "url": "https://www.federalregister.gov/documents/2025/04/07/2025-06063/regulating-imports-with-a-reciprocal-tariff-to-rectify-trade-practices-that-contribute-to-large-and",
      "checkedAt": "2026-05-13",
      "supports": [
        "2. April 2025",
        "Reciprocal Tariff",
        "Executive Order 14257"
      ]
    },
    "SRC_REUTERS_TARIFFS_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Trump unveils global reciprocal tariffs on Liberation Day",
      "url": "https://www.reuters.com/world/us/trump-announce-reciprocal-tariffs-liberation-day-event-2025-04-02/",
      "checkedAt": "2026-05-13",
      "supports": [
        "2. April 2025",
        "Reciprocal tariffs",
        "Liberation Day"
      ]
    },
    "SRC_VATICAN_FRANCIS_2025": {
      "tier": "PRIMARY",
      "publisher": "Vatican News",
      "title": "Pope Francis has died on Easter Monday aged 88",
      "url": "https://www.vaticannews.va/en/pope/news/2025-04/pope-francis-dies-on-easter-monday-aged-88.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "Papst Franziskus gestorben 21. April 2025",
        "Jorge Mario Bergoglio",
        "Vatikan"
      ]
    },
    "SRC_VATICAN_LEO_XIV_2025": {
      "tier": "PRIMARY",
      "publisher": "Vatican News",
      "title": "Cardinal Robert Francis Prevost elected Pope Leo XIV",
      "url": "https://www.vaticannews.va/en/pope/news/2025-05/cardinal-robert-francis-prevost-elected-pope-leo-xiv.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "Robert Francis Prevost",
        "Leo XIV.",
        "8. Mai 2025",
        "erster US-amerikanischer Papst"
      ]
    },
    "SRC_REUTERS_LEO_XIV_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Cardinal Prevost elected first US pope, taking name Leo XIV",
      "url": "https://www.reuters.com/world/europe/cardinals-elect-new-pope-second-day-conclave-2025-05-08/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Leo XIV.",
        "Robert Prevost",
        "8. Mai 2025",
        "erster US-Papst"
      ]
    },
    "SRC_WHO_PANDEMIC_2025": {
      "tier": "PRIMARY",
      "publisher": "World Health Organization",
      "title": "World Health Assembly adopts historic Pandemic Agreement",
      "url": "https://www.who.int/news/item/20-05-2025-world-health-assembly-adopts-historic-pandemic-agreement-to-make-the-world-more-equitable-and-safer-from-future-pandemics",
      "checkedAt": "2026-05-13",
      "supports": [
        "20. Mai 2025",
        "WHA78",
        "Pandemieabkommen per Konsens angenommen",
        "PABS-Anhang als nächster Schritt"
      ]
    },
    "SRC_REUTERS_WHO_PANDEMIC_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Landmark global pandemic agreement adopted by WHO members",
      "url": "https://www.gmanetwork.com/news/topstories/world/946746/landmark-global-pandemic-agreement-adopted-by-who-members/story/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Reuters-Bericht zur Annahme des WHO-Pandemieabkommens",
        "20. Mai 2025",
        "124 Ja-Stimmen im Ausschuss"
      ]
    },
    "SRC_UNFCCC_COP30_2025": {
      "tier": "PRIMARY",
      "publisher": "UNFCCC",
      "title": "UN Climate Change Conference COP30, Belém, Brazil",
      "url": "https://unfccc.int/cop30",
      "checkedAt": "2026-05-13",
      "supports": [
        "COP30 in Belém, Brasilien",
        "10.–21. November 2025"
      ]
    },
    "SRC_REUTERS_COP30_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "COP30 / Brazil and Belém coverage",
      "url": "https://www.reuters.com/sustainability/climate-energy/brazil-lays-out-cop30-climate-agenda-amazon-city-belem-2025-03-10/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Belém als COP30-Ort",
        "Brasilien/Amazonas-Kontext",
        "Klimakonferenz 2025"
      ]
    },
    "SRC_UNFCCC_NDC_30": {
      "tier": "PRIMARY",
      "publisher": "UN Climate Change",
      "title": "NDC 3.0 / Nationally Determined Contributions",
      "url": "https://unfccc.int/process-and-meetings/the-paris-agreement/nationally-determined-contributions-ndcs",
      "checkedAt": "2026-05-13",
      "supports": [
        "NDCs",
        "nationale Klimaschutzbeiträge",
        "dritte Runde / NDC 3.0"
      ]
    },
    "SRC_UN80_2025": {
      "tier": "PRIMARY",
      "publisher": "United Nations",
      "title": "High-level meeting to commemorate the eightieth anniversary of the United Nations",
      "url": "https://www.un.org/pga/80/2025/09/19/high-level-meeting-to-commemorate-the-eightieth-anniversary-of-the-united-nations/",
      "checkedAt": "2026-05-13",
      "supports": [
        "22. September 2025",
        "UN80 high-level meeting",
        "UN-Hauptquartier New York"
      ]
    },
    "SRC_DLF_UN80_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Deutschlandfunk",
      "title": "New York: 80 Jahre UNO, mit Reden Baerbock und Guterres",
      "url": "https://www.deutschlandfunk.de/new-york-80-jahre-uno-mit-reden-baerbock-und-guterres-100.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "22. September 2025",
        "80 Jahre UNO in New York",
        "Baerbock/Guterres"
      ]
    },
    "SRC_UNESCO_UNDP_AI_ELECTIONS": {
      "tier": "PRIMARY",
      "publisher": "UNESCO",
      "title": "UNESCO and UNDP Issue Brief on AI, Freedom of Expression and Elections",
      "url": "https://www.unesco.org/en/articles/new-unesco-undp-issue-brief-highlights-ais-risks-freedom-expression-and-elections-and-proposes",
      "checkedAt": "2026-05-13",
      "supports": [
        "UNESCO und UNDP",
        "Issue Brief 2025",
        "KI-Risiken für Wahlen und Meinungsfreiheit"
      ]
    },
    "SRC_UNDP_AI_ELECTIONS": {
      "tier": "PRIMARY",
      "publisher": "UNDP",
      "title": "Freedom of Expression, Artificial Intelligence and Elections",
      "url": "https://www.undp.org/publications/freedom-expression-artificial-intelligence-and-elections",
      "checkedAt": "2026-05-13",
      "supports": [
        "UNDP-Veröffentlichung",
        "19. Mai 2025",
        "KI, Meinungsfreiheit und Wahlen"
      ]
    },
    "SRC_UN_SUDAN_2026": {
      "tier": "PRIMARY",
      "publisher": "United Nations / OCHA context",
      "title": "Sudan: world’s largest humanitarian and displacement crisis",
      "url": "https://news.un.org/en/story/2026/04/1162151",
      "checkedAt": "2026-05-13",
      "supports": [
        "Sudan 2026",
        "weltgrößte humanitäre Krise",
        "nahezu 34 Millionen Menschen benötigen Hilfe"
      ]
    },
    "SRC_REUTERS_SUDAN_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Sudan tops IRC crises watchlist",
      "url": "https://www.reuters.com/world/africa/sudan-tops-irc-crises-watchlist-second-year-2024-12-11/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Sudan als größte/führende humanitäre Krise im Krisenranking",
        "Kontext 2025/2026"
      ]
    },
    "SRC_BMAS_MINDESTLOHN_2025": {
      "tier": "PRIMARY",
      "publisher": "Bundesministerium für Arbeit und Soziales",
      "title": "Mindestlohn: gesetzliche Werte 2025/2026/2027",
      "url": "https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Mindestlohn/mindestlohn.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "12,82 Euro ab 1. Januar 2025",
        "13,90 Euro ab 1. Januar 2026",
        "14,60 Euro ab 1. Januar 2027"
      ]
    },
    "SRC_DLF_MINDESTLOHN_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Deutschlandfunk",
      "title": "Mindestlohn: Wie hoch muss er sein und wer legt das fest?",
      "url": "https://www.deutschlandfunk.de/mindestlohn-erhoehung-mindestlohnkommission-100.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "Mindestlohn 12,82 Euro seit 1. Januar 2025",
        "Einordnung Mindestlohnkommission"
      ]
    },
    "SRC_BMG_EPA_2025": {
      "tier": "PRIMARY",
      "publisher": "Bundesministerium für Gesundheit",
      "title": "Elektronische Patientenakte für alle",
      "url": "https://www.bundesgesundheitsministerium.de/epa-fuer-alle",
      "checkedAt": "2026-05-13",
      "supports": [
        "ePA",
        "bundesweiter Rollout 29. April 2025",
        "Pflichtnutzung/Befüllung ab 1. Oktober 2025",
        "Opt-out-Prinzip"
      ]
    },
    "SRC_HEISE_EPA_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "heise",
      "title": "Elektronische Patientenakte wird für Ärzte und Apotheker verpflichtend",
      "url": "https://www.heise.de/news/E-Patientenakte-Befuellungspflicht-fuer-Aerzte-Buendnis-erinnert-an-Widerspruch-10673290.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "ePA verpflichtend ab 1. Oktober 2025",
        "Ärzte/Psychotherapeuten/Apotheken",
        "Opt-out-Hinweis"
      ]
    },
    "SRC_HEISE_EPA_ROLLOUT": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "heise",
      "title": "Elektronische Patientenakte kommt ab 29. April flächendeckend",
      "url": "https://www.heise.de/news/Elektronische-Patientenakte-kommt-ab-29-April-flaechendeckend-10353138.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "bundesweiter ePA-Rollout ab 29. April 2025",
        "Sicherheitsfragen",
        "Widerspruchsrate"
      ]
    },
    "SRC_ENTSOE_BLACKOUT_2026": {
      "tier": "PRIMARY",
      "publisher": "ENTSO-E",
      "title": "Final Report on the 28 April 2025 Iberian Blackout",
      "url": "https://www.entsoe.eu/news/2026/03/20/entso-e-publishes-final-report-on-the-28-april-2025-iberian-blackout/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Blackout 28. April 2025",
        "Spanien und Portugal",
        "Final Report 20. März 2026",
        "Oszillationen/Spannung/Blindleistung/Generatorabschaltungen"
      ]
    },
    "SRC_REUTERS_BLACKOUT_2026": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Spain watchdog highlights voltage instability after 2025 blackout",
      "url": "https://www.reuters.com/business/energy/spains-grid-watchdog-calls-stronger-links-after-blackout-probe-2026-03-20/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Iberischer Blackout 2025",
        "Spannungsinstabilität",
        "Regulierungs-/Netzstabilitätsfragen"
      ]
    },
    "SRC_UEFA_WEURO_2025": {
      "tier": "PRIMARY",
      "publisher": "UEFA",
      "title": "UEFA Women’s EURO 2025: Switzerland, dates, final",
      "url": "https://www.uefa.com/womenseuro/news/029b-1df31b6d1ed3-5b00b4ec0f36-1000--women-s-euro-2025-all-you-need-to-know/",
      "checkedAt": "2026-05-13",
      "supports": [
        "2.–27. Juli 2025",
        "Schweiz",
        "Finale Basel",
        "England Sieger gegen Spanien nach Elfmeterschießen"
      ]
    },
    "SRC_REUTERS_WEURO_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Women’s EURO 2025 final / England beat Spain",
      "url": "https://www.reuters.com/sports/soccer/england-beat-spain-penalties-win-womens-euro-2025-07-27/",
      "checkedAt": "2026-05-13",
      "supports": [
        "England gewinnt Women’s EURO 2025",
        "Finale gegen Spanien",
        "Elfmeterschießen"
      ]
    },
    "SRC_IOC_MILANO_2026": {
      "tier": "PRIMARY",
      "publisher": "IOC",
      "title": "Milano Cortina 2026 Olympic Winter Games dates",
      "url": "https://olympics.com/en/olympic-games/milano-cortina-2026",
      "checkedAt": "2026-05-13",
      "supports": [
        "Olympische Winterspiele 6.–22. Februar 2026",
        "Milano Cortina 2026",
        "Italien"
      ]
    },
    "SRC_MILANO_CORTINA_2026": {
      "tier": "PRIMARY",
      "publisher": "Milano Cortina 2026",
      "title": "Games facts and figures",
      "url": "https://milanocortina2026.olympics.com/en/games-facts-and-figures",
      "checkedAt": "2026-05-13",
      "supports": [
        "über 3.500 Athletinnen und Athleten",
        "93 Länder",
        "16 olympische Disziplinen",
        "Ski mountaineering Debüt",
        "Paralympics 6.–15. März 2026"
      ]
    },
    "SRC_REUTERS_MILANO_2026": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Milano Cortina 2026 opening ceremony / Games coverage",
      "url": "https://www.reuters.com/sports/olympics/milan-cortina-games-open-glitzy-ceremony-san-siro-2026-02-06/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Eröffnung am 6. Februar 2026",
        "San Siro/Mailand",
        "Winterspiele 2026"
      ]
    },
    "SRC_REUTERS_SKIMO_2026": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Oldest winter sport SkiMo finally joins Games, with a twist",
      "url": "https://www.reuters.com/sports/oldest-winter-sport-skimo-finally-joins-games-with-twist-2026-01-22/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Ski mountaineering/SkiMo Olympic debut",
        "Milano Cortina 2026",
        "sprint-focused Olympic debut"
      ]
    },
    "SRC_REUTERS_PARALYMPICS_2026": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters Agency",
      "title": "Reuters Winter Olympics and Paralympics 2026 coverage dates",
      "url": "https://reutersagency.com/winter-olympics-2026",
      "checkedAt": "2026-05-13",
      "supports": [
        "Olympic Games 6–22 February 2026",
        "Paralympic Games 6–15 March 2026"
      ]
    },
    "SRC_FIFA_CWC_2025": {
      "tier": "PRIMARY",
      "publisher": "FIFA",
      "title": "FIFA Club World Cup 2025 Final: Chelsea beat PSG",
      "url": "https://www.fifa.com/en/tournaments/mens/club-world-cup/usa-2025/articles/chelsea-paris-saint-germain-final-report",
      "checkedAt": "2026-05-13",
      "supports": [
        "Chelsea gewinnt Finale 3:0 gegen PSG",
        "13. Juli 2025",
        "MetLife Stadium",
        "32 Teams"
      ]
    },
    "SRC_REUTERS_CWC_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Chelsea crush PSG to win Club World Cup final",
      "url": "https://www.reuters.com/sports/soccer/chelsea-crush-psg-3-0-win-club-world-cup-final-2025-07-13/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Chelsea 3:0 PSG",
        "Cole Palmer",
        "Club World Cup final 2025"
      ]
    },
    "SRC_UEFA_UCL_2025": {
      "tier": "PRIMARY",
      "publisher": "UEFA",
      "title": "UEFA Champions League final 2025: Paris Saint-Germain 5-0 Inter",
      "url": "https://www.uefa.com/uefachampionsleague/news/0299-1df55ceff1a3-56fd6505c3fa-1000--paris-5-0-inter-parisians-make-history-with-first-champions-league-title/",
      "checkedAt": "2026-05-13",
      "supports": [
        "31. Mai 2025",
        "PSG gewinnt Champions League",
        "5:0 gegen Inter",
        "München"
      ]
    },
    "SRC_REUTERS_UCL_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Doué dazzles as PSG humble Inter 5-0 to win first European Cup",
      "url": "https://www.reuters.com/sports/soccer/doue-dazzles-psg-humble-inter-5-0-win-champions-league-final-2025-05-31/",
      "checkedAt": "2026-05-13",
      "supports": [
        "PSG 5:0 Inter",
        "31. Mai 2025",
        "Champions-League-Finale in München",
        "erster PSG-Titel"
      ]
    },
    "SRC_EUROVISION_2025": {
      "tier": "PRIMARY",
      "publisher": "Eurovision Song Contest / EBU",
      "title": "Austria’s JJ wins the Eurovision Song Contest 2025",
      "url": "https://www.eurovision.com/stories/austrias-jj-wins-the-eurovision-song-contest-2025/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Austria/JJ gewinnt Eurovision 2025",
        "Wasted Love",
        "436 Punkte",
        "Basel/St. Jakobshalle",
        "18. Mai 2025 Veröffentlichung nach Finale"
      ]
    },
    "SRC_REUTERS_EUROVISION_2025": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Reuters",
      "title": "Austria wins third Eurovision crown with JJ’s song Wasted Love",
      "url": "https://www.reuters.com/lifestyle/swedens-sauna-song-is-hot-favourite-swiss-eurovision-2025-05-17/",
      "checkedAt": "2026-05-13",
      "supports": [
        "Austria wins Eurovision 2025",
        "JJ / Wasted Love",
        "Basel",
        "Israel second"
      ]
    },
    "SRC_TAGESSPIEGEL_ARC_2021": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Tagesspiegel",
      "title": "Arc de Triomphe in Paris wird verhüllt: Christos letztes Werk",
      "url": "https://www.tagesspiegel.de/kultur/christos-letztes-werk--posthum-5120674.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "Arc de Triomphe verhüllt 2021",
        "Christo/Jeanne-Claude",
        "18. September bis 3. Oktober 2021"
      ]
    },
    "SRC_SPIEGEL_RELOTIUS_2018": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "DER SPIEGEL",
      "title": "Fall Claas Relotius: Antworten auf die wichtigsten Fragen",
      "url": "https://www.spiegel.de/kultur/gesellschaft/fall-claas-relotius-antworten-auf-die-wichtigsten-fragen-a-1244568.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "Jaegers Grenze",
        "Juan Moreno deckte Unstimmigkeiten auf",
        "Relotius-Fälschungsskandal"
      ]
    },
    "SRC_DLF_ECHO_2018": {
      "tier": "ALLOWED_MEDIA",
      "publisher": "Deutschlandfunk",
      "title": "Jurymitglied zum Ende des Echo: Die Entscheidung ist richtig",
      "url": "https://www.deutschlandfunk.de/jurymitglied-zum-ende-des-echo-die-entscheidung-ist-richtig-100.html",
      "checkedAt": "2026-05-13",
      "supports": [
        "Echo-Musikpreis abgeschafft",
        "Kontroverse Kollegah/Farid Bang",
        "antisemitisch kritisierte Zeilen"
      ]
    }
  },
  "existingQuestions2025_2026": [
    {
      "id": "djs2025dp001",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "An welchem Datum fand die Bundestagswahl 2025 statt?",
      "options": "23. Januar 2025, 23. Februar 2025, 9. März 2025, 14. April 2025",
      "answer": "23. Februar 2025",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2025dp002",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "Welche Partei wurde bei der Bundestagswahl 2025 stärkste Kraft?",
      "options": "SPD, AfD, CDU/CSU, Grüne",
      "answer": "CDU/CSU",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2025dp003",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "Welche Partei wurde bei der Bundestagswahl 2025 zweitstärkste Kraft?",
      "options": "SPD, AfD, Grüne, FDP",
      "answer": "AfD",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2025dp004",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "Wie lautet der Titel des Koalitionsvertrags, den CDU/CSU und SPD 2025 unterzeichnet haben?",
      "options": "Aufbruch für Deutschland, Verantwortung für Deutschland, Zusammenhalt und Stärke, Erneuerung und Stabilität",
      "answer": "Verantwortung für Deutschland",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2025dp005",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "In welchem Wahlgang wurde Friedrich Merz am 6. Mai 2025 zum Bundeskanzler gewählt?",
      "options": "Ersten Wahlgang, Zweiten Wahlgang, Dritten Wahlgang, Vierten Wahlgang",
      "answer": "Zweiten Wahlgang",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2025dp006",
      "clusterId": "gg_svik_verteidigung_2025_2026",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "Wie hoch ist das 2025 beschlossene Sondervermögen für Infrastruktur und Klimaneutralität?",
      "options": "200 Milliarden Euro, 350 Milliarden Euro, 500 Milliarden Euro, 800 Milliarden Euro",
      "answer": "500 Milliarden Euro",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Gesetzgebung 2025 und Haushalts-/Finanzdaten 2026 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMF_SVIK_2025",
          "SRC_SVIKG_2025",
          "SRC_BUNDESTAG_GG_2025",
          "SRC_DLF_SCHULDENBREMSE_2025",
          "SRC_REUTERS_DEBT_2025",
          "SRC_BUNDESTAG_DEFENCE_2026",
          "SRC_REUTERS_DEFENCE_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026. Kernfakten: SVIK 500 Milliarden Euro; Grundgesetzänderung Art. 109/115/143h; Verteidigungsausgaben 2026 insgesamt 108,2 Mrd. Euro = 82,69 + 25,51 Mrd."
    },
    {
      "id": "djs2025dp007",
      "clusterId": "gg_svik_verteidigung_2025_2026",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "Welche verfassungsrechtliche Regelung wurde im März 2025 reformiert, um mehr Spielraum für Verteidigung und Investitionen zu schaffen?",
      "options": "Finanzverfassung, Schuldenbremse, Haushaltsgrundsätzegesetz, Stabilitäts- und Wachstumspakt",
      "answer": "Schuldenbremse",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Gesetzgebung 2025 und Haushalts-/Finanzdaten 2026 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMF_SVIK_2025",
          "SRC_SVIKG_2025",
          "SRC_BUNDESTAG_GG_2025",
          "SRC_DLF_SCHULDENBREMSE_2025",
          "SRC_REUTERS_DEBT_2025",
          "SRC_BUNDESTAG_DEFENCE_2026",
          "SRC_REUTERS_DEFENCE_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026. Kernfakten: SVIK 500 Milliarden Euro; Grundgesetzänderung Art. 109/115/143h; Verteidigungsausgaben 2026 insgesamt 108,2 Mrd. Euro = 82,69 + 25,51 Mrd."
    },
    {
      "id": "djs2025dp008",
      "clusterId": "gg_svik_verteidigung_2025_2026",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "In welchem Land stationiert Deutschland die Brigade Litauen mit rund 5.000 Soldatinnen und Soldaten?",
      "options": "Polen, Estland, Litauen, Lettland",
      "answer": "Litauen",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Gesetzgebung 2025 und Haushalts-/Finanzdaten 2026 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMF_SVIK_2025",
          "SRC_SVIKG_2025",
          "SRC_BUNDESTAG_GG_2025",
          "SRC_DLF_SCHULDENBREMSE_2025",
          "SRC_REUTERS_DEBT_2025",
          "SRC_BUNDESTAG_DEFENCE_2026",
          "SRC_REUTERS_DEFENCE_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026. Kernfakten: SVIK 500 Milliarden Euro; Grundgesetzänderung Art. 109/115/143h; Verteidigungsausgaben 2026 insgesamt 108,2 Mrd. Euro = 82,69 + 25,51 Mrd."
    },
    {
      "id": "djs2025dp009",
      "clusterId": "gg_svik_verteidigung_2025_2026",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "Wie hoch sind die geplanten deutschen Verteidigungsausgaben im Haushalt 2026?",
      "options": "72,4 Milliarden Euro, 88,5 Milliarden Euro, 108,2 Milliarden Euro, 120,0 Milliarden Euro",
      "answer": "108,2 Milliarden Euro",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Gesetzgebung 2025 und Haushalts-/Finanzdaten 2026 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMF_SVIK_2025",
          "SRC_SVIKG_2025",
          "SRC_BUNDESTAG_GG_2025",
          "SRC_DLF_SCHULDENBREMSE_2025",
          "SRC_REUTERS_DEBT_2025",
          "SRC_BUNDESTAG_DEFENCE_2026",
          "SRC_REUTERS_DEFENCE_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026. Kernfakten: SVIK 500 Milliarden Euro; Grundgesetzänderung Art. 109/115/143h; Verteidigungsausgaben 2026 insgesamt 108,2 Mrd. Euro = 82,69 + 25,51 Mrd."
    },
    {
      "id": "djs2025dp010",
      "clusterId": "afd_compact_wehrhafte_demokratie_2025_2026",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "Als was stufte das Bundesamt für Verfassungsschutz die AfD am 2. Mai 2025 ein?",
      "options": "Verdachtsfall Rechtsextremismus, Gesichert rechtsextremistische Bestrebung, Beobachtungsobjekt, Extremistische Organisation",
      "answer": "Gesichert rechtsextremistische Bestrebung",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "fix": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "finalVersion": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "BfV-Einstufung und COMPACT-Urteil im Kernzeitraum; Rechtsstand dynamisch bis Mai 2026."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_VG_KOELN_AFD_2025",
          "SRC_REUTERS_AFD_2025",
          "SRC_DLF_AFD_2025",
          "SRC_BVERWG_COMPACT_2025",
          "SRC_DLF_AFD_VERBOT_2026",
          "SRC_BVERFGG_PARTEIVERBOT",
          "SRC_BWL_PARTEIVERBOT"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "ready_with_volatile_legal_or_policy_note",
      "learningContext": "Cluster: Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie. Kernfakten: 02.05.2025 BfV-Einstufung AfD historisch; 08.05.2025 Stillhaltezusage VG Köln; 24.06.2025 BVerwG hebt COMPACT-Verbot auf; Parteiverbot: Bundestag/Bundesrat/Bundesregierung können Antrag stellen"
    },
    {
      "id": "djs2025dp011",
      "clusterId": "afd_compact_wehrhafte_demokratie_2025_2026",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "Welches Gericht hob 2025 das Verbot des COMPACT-Magazins auf und machte den Fall damit zum Schlüsselthema für Pressefreiheit und wehrhafte Demokratie?",
      "options": "Bundesverfassungsgericht, Bundesgerichtshof, Bundesverwaltungsgericht, Oberverwaltungsgericht NRW",
      "answer": "Bundesverwaltungsgericht",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "BfV-Einstufung und COMPACT-Urteil im Kernzeitraum; Rechtsstand dynamisch bis Mai 2026."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_VG_KOELN_AFD_2025",
          "SRC_REUTERS_AFD_2025",
          "SRC_DLF_AFD_2025",
          "SRC_BVERWG_COMPACT_2025",
          "SRC_DLF_AFD_VERBOT_2026",
          "SRC_BVERFGG_PARTEIVERBOT",
          "SRC_BWL_PARTEIVERBOT"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie. Kernfakten: 02.05.2025 BfV-Einstufung AfD historisch; 08.05.2025 Stillhaltezusage VG Köln; 24.06.2025 BVerwG hebt COMPACT-Verbot auf; Parteiverbot: Bundestag/Bundesrat/Bundesregierung können Antrag stellen"
    },
    {
      "id": "djs2025dp012",
      "clusterId": "afd_compact_wehrhafte_demokratie_2025_2026",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "Welche zwei Rechtsgüter stehen im Fall des COMPACT-Magazin-Verbots besonders im Konflikt?",
      "options": "Pressefreiheit, Religionsfreiheit, Wehrhafte Demokratie, Eigentumsrecht",
      "answer": "Pressefreiheit / Wehrhafte Demokratie",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "BfV-Einstufung und COMPACT-Urteil im Kernzeitraum; Rechtsstand dynamisch bis Mai 2026."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_VG_KOELN_AFD_2025",
          "SRC_REUTERS_AFD_2025",
          "SRC_DLF_AFD_2025",
          "SRC_BVERWG_COMPACT_2025",
          "SRC_DLF_AFD_VERBOT_2026",
          "SRC_BVERFGG_PARTEIVERBOT",
          "SRC_BWL_PARTEIVERBOT"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie. Kernfakten: 02.05.2025 BfV-Einstufung AfD historisch; 08.05.2025 Stillhaltezusage VG Köln; 24.06.2025 BVerwG hebt COMPACT-Verbot auf; Parteiverbot: Bundestag/Bundesrat/Bundesregierung können Antrag stellen"
    },
    {
      "id": "djs2025eu001",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Wie heißt der EU-Verteidigungsplan, der am 19. März 2025 vorgestellt wurde?",
      "options": "EU Defence 2030, ReArm Europe/Readiness 2030, European Shield 2030, NATO Plus 2030",
      "answer": "ReArm Europe/Readiness 2030",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2025eu002",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welches Finanzinstrument ist der erste Pfeiler des EU-Plans ReArm Europe/Readiness 2030?",
      "options": "ESM, SURE, SAFE, NextGenerationEU",
      "answer": "SAFE",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2025eu003",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welches EU-Sanktionspaket gegen Russland wurde am 24. Februar 2025 beschlossen?",
      "options": "14. Paket, 15. Paket, 16. Paket, 17. Paket",
      "answer": "16. Paket",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2025eu004",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "An welchem Datum beschloss die EU das 17. Sanktionspaket gegen Russland?",
      "options": "24. Februar 2025, 9. April 2025, 20. Mai 2025, 15. Juni 2025",
      "answer": "20. Mai 2025",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2025eu007",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Wie heißt das EU-Paket gegen Desinformation und ausländische Einflussnahme, das im November 2025 vorgestellt wurde?",
      "options": "Digital Democracy Act, European Democracy Shield, Information Integrity Framework, DSA Democracy Package",
      "answer": "European Democracy Shield",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2025eu008",
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welches 2040-Klimaziel schlug die EU-Kommission im Juli 2025 für das überarbeitete EU-Klimagesetz vor?",
      "options": "Minus 70 Prozent Netto-THG gegenüber 1990, Minus 80 Prozent Netto-THG gegenüber 1990, Minus 90 Prozent Netto-THG gegenüber 1990, Klimaneutralität bereits 2040",
      "answer": "Minus 90 Prozent Netto-THG gegenüber 1990",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "finalVersion": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EU_CLIMATE_2040",
          "SRC_REUTERS_CLIMATE_2025",
          "SRC_COUNCIL_SCHENGEN_BG_RO",
          "SRC_EU_SCHENGEN_BG_RO",
          "SRC_EU_SCHUMAN_75",
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung. Kernfakten: EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990; Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025; 75 Jahre Schuman-Erklärung am 09.05.2025; 90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
    },
    {
      "id": "djs2025eu009",
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welche zwei Länder wurden ab 1. Januar 2025 vollständig Teil des Schengen-Raums?",
      "options": "Rumänien, Serbien, Bulgarien, Albanien",
      "answer": "Rumänien / Bulgarien",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EU_CLIMATE_2040",
          "SRC_REUTERS_CLIMATE_2025",
          "SRC_COUNCIL_SCHENGEN_BG_RO",
          "SRC_EU_SCHENGEN_BG_RO",
          "SRC_EU_SCHUMAN_75",
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung. Kernfakten: EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990; Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025; 75 Jahre Schuman-Erklärung am 09.05.2025; 90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
    },
    {
      "id": "djs2025eu010",
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welches Jubiläum der Schuman-Erklärung wurde am Europa-Tag, dem 9. Mai 2025, gefeiert?",
      "options": "60 Jahre, 70 Jahre, 75 Jahre, 80 Jahre",
      "answer": "75 Jahre",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EU_CLIMATE_2040",
          "SRC_REUTERS_CLIMATE_2025",
          "SRC_COUNCIL_SCHENGEN_BG_RO",
          "SRC_EU_SCHENGEN_BG_RO",
          "SRC_EU_SCHUMAN_75",
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung. Kernfakten: EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990; Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025; 75 Jahre Schuman-Erklärung am 09.05.2025; 90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
    },
    {
      "id": "djs2025eu013",
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Wie hoch ist das Gesamtvolumen der EU Ukraine Facility, die der Ukraine bis 2027 finanzielle Unterstützung sichert?",
      "options": "20 Milliarden Euro, 50 Milliarden Euro, 90 Milliarden Euro, 150 Milliarden Euro",
      "answer": "50 Milliarden Euro",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EU_CLIMATE_2040",
          "SRC_REUTERS_CLIMATE_2025",
          "SRC_COUNCIL_SCHENGEN_BG_RO",
          "SRC_EU_SCHENGEN_BG_RO",
          "SRC_EU_SCHUMAN_75",
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung. Kernfakten: EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990; Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025; 75 Jahre Schuman-Erklärung am 09.05.2025; 90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
    },
    {
      "id": "djs2025eu014",
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welches zusätzliche EU-Finanzinstrument für die Ukraine wurde im Dezember 2025 beschlossen und im April 2026 legislativ finalisiert?",
      "options": "Ein Hilfspaket von 20 Milliarden Euro für humanitäre Hilfe, Ein Unterstützungskredit von 90 Milliarden Euro für 2026/27, Eine Erhöhung der Ukraine Facility auf 75 Milliarden Euro, Ein Rüstungskredit von 50 Milliarden Euro über die EIB",
      "answer": "Ein Unterstützungskredit von 90 Milliarden Euro für 2026/27",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EU_CLIMATE_2040",
          "SRC_REUTERS_CLIMATE_2025",
          "SRC_COUNCIL_SCHENGEN_BG_RO",
          "SRC_EU_SCHENGEN_BG_RO",
          "SRC_EU_SCHUMAN_75",
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung. Kernfakten: EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990; Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025; 75 Jahre Schuman-Erklärung am 09.05.2025; 90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
    },
    {
      "id": "djs2025ip001",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "An welchem Datum wurde Donald Trump als 47. Präsident der USA vereidigt?",
      "options": "6. Januar 2025, 20. Januar 2025, 1. Februar 2025, 20. März 2025",
      "answer": "20. Januar 2025",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip002",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Wie nennt sich die am 2. April 2025 von Trump erlassene Zollanordnung?",
      "options": "America First Tariffs, Reciprocal Tariffs, Fair Trade Executive Order, Protectionist Trade Act",
      "answer": "Reciprocal Tariffs",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip003",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Wann starb Papst Franziskus?",
      "options": "8. April 2025, 21. April 2025, 8. Mai 2025, 26. April 2025",
      "answer": "21. April 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Zu „Argentinien“ korrigieren.",
      "finalVersion": "Zu „Argentinien“ korrigieren.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip004",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welchen Papstnamen nahm Robert Francis Prevost nach seiner Wahl am 8. Mai 2025 an?",
      "options": "Franziskus II., Johannes XXIV., Leo XIV., Benedikt XVII.",
      "answer": "Leo XIV.",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip005",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "An welchem Datum nahm die Weltgesundheitsversammlung das WHO-Pandemieabkommen an?",
      "options": "8. Mai 2025, 20. Mai 2025, 1. Juni 2025, 12. Juni 2025",
      "answer": "20. Mai 2025",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip006",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "In welcher Stadt fand die UN-Klimakonferenz COP30 statt?",
      "options": "Bogotá, Nairobi, Belém, Jakarta",
      "answer": "Belém",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Tippfehler korrigieren.",
      "finalVersion": "Tippfehler korrigieren.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip007",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Wie werden die 2025 fälligen nationalen Klimapläne der UN-Mitgliedstaaten abgekürzt?",
      "options": "NAP 3.0, NDC 3.0, NCP 3.0, GHG 3.0",
      "answer": "NDC 3.0",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip008",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Wann fand das hochrangige Gedenktreffen anlässlich des 80. Jahrestags der Vereinten Nationen statt?",
      "options": "22. Juni 2025, 22. August 2025, 22. September 2025, 22. Oktober 2025",
      "answer": "22. September 2025",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip010",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welcher Staat verhängte am 6. Februar 2025 Sanktionen gegen den Internationalen Strafgerichtshof (ICC)?",
      "options": "Russland, China, USA, Israel",
      "answer": "USA",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip011",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Was ist der Unterschied zwischen ICC und ICJ?",
      "options": "ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Streitigkeiten zwischen Staaten, ICC = Handelsgerichtshof; ICJ = Menschenrechtsgericht, Beide sind identisch, nur unterschiedliche Abkürzungen, ICC = UN-Gericht; ICJ = NATO-Gericht",
      "answer": "ICC = Strafgerichtshof für Einzelpersonen; ICJ = Gerichtshof für Streitigkeiten zwischen Staaten",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip012",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welcher Konflikt gilt laut OCHA als die weltweit größte humanitäre Notlage im Jahr 2026?",
      "options": "Ukraine, Gaza/Westbank, Sudan, DR Kongo",
      "answer": "Sudan",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip013",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welche zwei UN-Organisationen warnten 2025 gemeinsam vor KI-Risiken für Wahlen und Meinungsfreiheit?",
      "options": "WHO und UNICEF, UNESCO und UNDP, UNHCR und OCHA, FAO und ILO",
      "answer": "UNESCO und UNDP",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Erklärung sprachlich auf „Issue Brief“ ändern.",
      "finalVersion": "Erklärung sprachlich auf „Issue Brief“ ändern.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025ip014",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "In welchem Land spricht OCHA 2025/26 von einer eskalierenden Gewaltsituation im Osten des Landes, die oft als 'unterberichteter Konflikt' gilt?",
      "options": "Äthiopien, Demokratische Republik Kongo, Mali, Mosambik",
      "answer": "Demokratische Republik Kongo",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2025mc004",
      "clusterId": "afd_compact_wehrhafte_demokratie_2025_2026",
      "category": "Deutsche Politik",
      "type": "multiplechoice",
      "question": "Wer könnte ein AfD-Verbotsverfahren anstrengen? (Mehrere Antworten möglich)",
      "options": "Bundespräsident, Bundesrat, Bundestag, Bundesregierung, Bundesverfassungsgericht",
      "answer": "Bundesrat / Bundestag / Bundesregierung",
      "qaStatus": "OK",
      "priority": "NIEDRIG",
      "fix": "Keine inhaltliche Änderung nötig. Quelle im Datenmodell ergänzen.",
      "finalVersion": "Original kann bleiben.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "BfV-Einstufung und COMPACT-Urteil im Kernzeitraum; Rechtsstand dynamisch bis Mai 2026."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_VG_KOELN_AFD_2025",
          "SRC_REUTERS_AFD_2025",
          "SRC_DLF_AFD_2025",
          "SRC_BVERWG_COMPACT_2025",
          "SRC_DLF_AFD_VERBOT_2026",
          "SRC_BVERFGG_PARTEIVERBOT",
          "SRC_BWL_PARTEIVERBOT"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie. Kernfakten: 02.05.2025 BfV-Einstufung AfD historisch; 08.05.2025 Stillhaltezusage VG Köln; 24.06.2025 BVerwG hebt COMPACT-Verbot auf; Parteiverbot: Bundestag/Bundesrat/Bundesregierung können Antrag stellen"
    },
    {
      "id": "djs2025sc002",
      "clusterId": "wirtschaft_gesundheit_energie_kultur_2025_2026",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "Auf welchen Betrag stieg der deutsche Mindeststundenlohn zum 1. Januar 2025?",
      "options": "12,41 Euro, 12,82 Euro, 13,10 Euro, 14,00 Euro",
      "answer": "12,82 Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Mai 2025 bis Mai 2026 plus wenige ältere Kulturkorrekturen als Katalogbereinigung."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMAS_MINDESTLOHN_2025",
          "SRC_DLF_MINDESTLOHN_2025",
          "SRC_BMG_EPA_2025",
          "SRC_HEISE_EPA_2025",
          "SRC_HEISE_EPA_ROLLOUT",
          "SRC_ENTSOE_BLACKOUT_2026",
          "SRC_REUTERS_BLACKOUT_2026",
          "SRC_TAGESSPIEGEL_ARC_2021",
          "SRC_SPIEGEL_RELOTIUS_2018",
          "SRC_DLF_ECHO_2018"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 7
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: Mindestlohn, ePA, iberischer Blackout, Kultur-/Medienkorrekturen. Kernfakten: Mindestlohn 12,82 Euro ab 01.01.2025; ePA bundesweit ab 29.04.2025 und verpflichtende Befüllung ab 01.10.2025; Iberischer Blackout 28.04.2025; finaler ENTSO-E-Bericht 20.03.2026; Kulturantworten korrigiert: Arc de Triomphe, Jaegers Grenze, Echo"
    },
    {
      "id": "djs2025sc003",
      "clusterId": "wirtschaft_gesundheit_energie_kultur_2025_2026",
      "category": "Deutsche Politik",
      "type": "singlechoice",
      "question": "Wofür steht die Abkürzung ePA?",
      "options": "Elektronische Polizeiakte, Elektronische Patientenakte, Elektronisches Prüfungsamt, Erweiterte Personalausweis-App",
      "answer": "Elektronische Patientenakte",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 plus wenige ältere Kulturkorrekturen als Katalogbereinigung."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMAS_MINDESTLOHN_2025",
          "SRC_DLF_MINDESTLOHN_2025",
          "SRC_BMG_EPA_2025",
          "SRC_HEISE_EPA_2025",
          "SRC_HEISE_EPA_ROLLOUT",
          "SRC_ENTSOE_BLACKOUT_2026",
          "SRC_REUTERS_BLACKOUT_2026",
          "SRC_TAGESSPIEGEL_ARC_2021",
          "SRC_SPIEGEL_RELOTIUS_2018",
          "SRC_DLF_ECHO_2018"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 7
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Mindestlohn, ePA, iberischer Blackout, Kultur-/Medienkorrekturen. Kernfakten: Mindestlohn 12,82 Euro ab 01.01.2025; ePA bundesweit ab 29.04.2025 und verpflichtende Befüllung ab 01.10.2025; Iberischer Blackout 28.04.2025; finaler ENTSO-E-Bericht 20.03.2026; Kulturantworten korrigiert: Arc de Triomphe, Jaegers Grenze, Echo"
    },
    {
      "id": "djs2025sc008",
      "clusterId": "wirtschaft_gesundheit_energie_kultur_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "In welchen Ländern führte ein Blackout im April 2025 fast einen ganzen Tag lang zu massivem Stromausfall?",
      "options": "Frankreich und Belgien, Spanien und Portugal, Italien und Griechenland, Deutschland und Österreich",
      "answer": "Spanien und Portugal",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "fix": "Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück.",
      "finalVersion": "Erklärung ergänzen: Untersuchungen führten den iberischen Blackout auf ein Zusammenspiel aus Oszillationen, Spannungs-/Blindleistungsproblemen, Generatorabschaltungen und Netzstabilisierung zurück.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 plus wenige ältere Kulturkorrekturen als Katalogbereinigung."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMAS_MINDESTLOHN_2025",
          "SRC_DLF_MINDESTLOHN_2025",
          "SRC_BMG_EPA_2025",
          "SRC_HEISE_EPA_2025",
          "SRC_HEISE_EPA_ROLLOUT",
          "SRC_ENTSOE_BLACKOUT_2026",
          "SRC_REUTERS_BLACKOUT_2026",
          "SRC_TAGESSPIEGEL_ARC_2021",
          "SRC_SPIEGEL_RELOTIUS_2018",
          "SRC_DLF_ECHO_2018"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 7
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "ready_with_volatile_legal_or_policy_note",
      "learningContext": "Cluster: Mindestlohn, ePA, iberischer Blackout, Kultur-/Medienkorrekturen. Kernfakten: Mindestlohn 12,82 Euro ab 01.01.2025; ePA bundesweit ab 29.04.2025 und verpflichtende Befüllung ab 01.10.2025; Iberischer Blackout 28.04.2025; finaler ENTSO-E-Bericht 20.03.2026; Kulturantworten korrigiert: Arc de Triomphe, Jaegers Grenze, Echo"
    },
    {
      "id": "djs2026dp-neu-007",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "An welchem Tag wurde nach dem Bruch der Ampelkoalition der 21. Deutsche Bundestag gewählt?",
      "options": "—",
      "answer": "23. Februar 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2026dp-neu-008",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Die vorgezogene Bundestagswahl nach Vertrauensfrage und Auflösung des Bundestags fiel auf welches Datum?",
      "options": "—",
      "answer": "23. Februar 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2026dp-neu-009",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Welche Parteiengemeinschaft lag bei der Bundestagswahl 2025 vor AfD und SPD auf Platz eins?",
      "options": "—",
      "answer": "CDU/CSU",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2026dp-neu-010",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Aus der vorgezogenen Bundestagswahl 2025 ging welche politische Kraft als stärkste hervor?",
      "options": "—",
      "answer": "CDU/CSU",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2026dp-neu-011",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Welche Partei erreichte bei der Bundestagswahl 2025 den zweiten Platz hinter CDU/CSU?",
      "options": "—",
      "answer": "AfD",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2026dp-neu-012",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Das beste Bundestagswahlergebnis ihrer Geschichte machte welche Partei 2025 zur zweitstärksten Kraft?",
      "options": "—",
      "answer": "AfD",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2026dp-neu-013",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Wie lautete der programmatische Titel des Koalitionsvertrags von CDU/CSU und SPD im Jahr 2025?",
      "options": "—",
      "answer": "Verantwortung für Deutschland",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2026dp-neu-014",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Unter welchem Titel stellten Union und SPD 2025 ihren Regierungsvertrag vor?",
      "options": "—",
      "answer": "Verantwortung für Deutschland",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2026dp-neu-015",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "In welchem Wahlgang erhielt Friedrich Merz am 6. Mai 2025 die Kanzlermehrheit?",
      "options": "—",
      "answer": "Zweiter Wahlgang",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2026dp-neu-016",
      "clusterId": "btw2025_regierungsbildung",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Der erste Wahlgang scheiterte, erst danach wurde Merz gewählt: Welcher Wahlgang war entscheidend?",
      "options": "—",
      "answer": "Zweiter Wahlgang",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Teilweise Kontextanker vor Mai 2025; Kanzlerwahl und Unterzeichnung Mai 2025 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BWL_2025_FINAL",
          "SRC_REUTERS_BTW2025",
          "SRC_BUNDESTAG_MERZ_2025",
          "SRC_REUTERS_MERZ_2025",
          "SRC_BREG_KOALITION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Bundestagswahl 2025, Regierungsbildung, Kanzlerwahl, Koalitionsvertrag. Kernfakten: 23.02.2025 Bundestagswahl; CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft; Koalitionsvertrag Verantwortung für Deutschland; 06.05.2025 Merz im zweiten Wahlgang gewählt"
    },
    {
      "id": "djs2026dp-neu-017",
      "clusterId": "gg_svik_verteidigung_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Welches Volumen hat das 2025 beschlossene Sondervermögen für Infrastruktur und Klimaneutralität?",
      "options": "—",
      "answer": "500 Milliarden Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Gesetzgebung 2025 und Haushalts-/Finanzdaten 2026 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMF_SVIK_2025",
          "SRC_SVIKG_2025",
          "SRC_BUNDESTAG_GG_2025",
          "SRC_DLF_SCHULDENBREMSE_2025",
          "SRC_REUTERS_DEBT_2025",
          "SRC_BUNDESTAG_DEFENCE_2026",
          "SRC_REUTERS_DEFENCE_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026. Kernfakten: SVIK 500 Milliarden Euro; Grundgesetzänderung Art. 109/115/143h; Verteidigungsausgaben 2026 insgesamt 108,2 Mrd. Euro = 82,69 + 25,51 Mrd."
    },
    {
      "id": "djs2026dp-neu-018",
      "clusterId": "gg_svik_verteidigung_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Die Investitionsoffensive für marode Infrastruktur und Klimaneutralität wurde 2025 auf welchen Höchstbetrag angelegt?",
      "options": "—",
      "answer": "500 Milliarden Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Gesetzgebung 2025 und Haushalts-/Finanzdaten 2026 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMF_SVIK_2025",
          "SRC_SVIKG_2025",
          "SRC_BUNDESTAG_GG_2025",
          "SRC_DLF_SCHULDENBREMSE_2025",
          "SRC_REUTERS_DEBT_2025",
          "SRC_BUNDESTAG_DEFENCE_2026",
          "SRC_REUTERS_DEFENCE_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026. Kernfakten: SVIK 500 Milliarden Euro; Grundgesetzänderung Art. 109/115/143h; Verteidigungsausgaben 2026 insgesamt 108,2 Mrd. Euro = 82,69 + 25,51 Mrd."
    },
    {
      "id": "djs2026dp-neu-019",
      "clusterId": "gg_svik_verteidigung_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Welche im Grundgesetz verankerte Fiskalregel wurde 2025 für Verteidigung und Investitionen gelockert?",
      "options": "—",
      "answer": "Schuldenbremse",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Gesetzgebung 2025 und Haushalts-/Finanzdaten 2026 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMF_SVIK_2025",
          "SRC_SVIKG_2025",
          "SRC_BUNDESTAG_GG_2025",
          "SRC_DLF_SCHULDENBREMSE_2025",
          "SRC_REUTERS_DEBT_2025",
          "SRC_BUNDESTAG_DEFENCE_2026",
          "SRC_REUTERS_DEFENCE_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026. Kernfakten: SVIK 500 Milliarden Euro; Grundgesetzänderung Art. 109/115/143h; Verteidigungsausgaben 2026 insgesamt 108,2 Mrd. Euro = 82,69 + 25,51 Mrd."
    },
    {
      "id": "djs2026dp-neu-020",
      "clusterId": "gg_svik_verteidigung_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Die Grundgesetzänderung im März 2025 betraf welches zentrale Instrument deutscher Haushaltspolitik?",
      "options": "—",
      "answer": "Schuldenbremse",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Gesetzgebung 2025 und Haushalts-/Finanzdaten 2026 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMF_SVIK_2025",
          "SRC_SVIKG_2025",
          "SRC_BUNDESTAG_GG_2025",
          "SRC_DLF_SCHULDENBREMSE_2025",
          "SRC_REUTERS_DEBT_2025",
          "SRC_BUNDESTAG_DEFENCE_2026",
          "SRC_REUTERS_DEFENCE_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026. Kernfakten: SVIK 500 Milliarden Euro; Grundgesetzänderung Art. 109/115/143h; Verteidigungsausgaben 2026 insgesamt 108,2 Mrd. Euro = 82,69 + 25,51 Mrd."
    },
    {
      "id": "djs2026dp-neu-021",
      "clusterId": "gg_svik_verteidigung_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Auf welchen Betrag sollten die deutschen Verteidigungsausgaben im Haushalt 2026 steigen?",
      "options": "—",
      "answer": "108,2 Milliarden Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Gesetzgebung 2025 und Haushalts-/Finanzdaten 2026 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMF_SVIK_2025",
          "SRC_SVIKG_2025",
          "SRC_BUNDESTAG_GG_2025",
          "SRC_DLF_SCHULDENBREMSE_2025",
          "SRC_REUTERS_DEBT_2025",
          "SRC_BUNDESTAG_DEFENCE_2026",
          "SRC_REUTERS_DEFENCE_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026. Kernfakten: SVIK 500 Milliarden Euro; Grundgesetzänderung Art. 109/115/143h; Verteidigungsausgaben 2026 insgesamt 108,2 Mrd. Euro = 82,69 + 25,51 Mrd."
    },
    {
      "id": "djs2026dp-neu-022",
      "clusterId": "gg_svik_verteidigung_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Die Zeitenwende schlug sich im Haushalt 2026 in welcher geplanten Verteidigungsausgaben-Summe nieder?",
      "options": "—",
      "answer": "108,2 Milliarden Euro",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Gesetzgebung 2025 und Haushalts-/Finanzdaten 2026 im Kernzeitraum."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMF_SVIK_2025",
          "SRC_SVIKG_2025",
          "SRC_BUNDESTAG_GG_2025",
          "SRC_DLF_SCHULDENBREMSE_2025",
          "SRC_REUTERS_DEBT_2025",
          "SRC_BUNDESTAG_DEFENCE_2026",
          "SRC_REUTERS_DEFENCE_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Schuldenbremse, Sondervermögen Infrastruktur/Klimaneutralität, Verteidigungsausgaben 2026. Kernfakten: SVIK 500 Milliarden Euro; Grundgesetzänderung Art. 109/115/143h; Verteidigungsausgaben 2026 insgesamt 108,2 Mrd. Euro = 82,69 + 25,51 Mrd."
    },
    {
      "id": "djs2026dp-neu-023",
      "clusterId": "afd_compact_wehrhafte_demokratie_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Welche Beobachtungsstufe verwendete das Bundesamt für Verfassungsschutz 2025 für die AfD?",
      "options": "—",
      "answer": "Gesichert rechtsextremistische Bestrebung",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "fix": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "finalVersion": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "BfV-Einstufung und COMPACT-Urteil im Kernzeitraum; Rechtsstand dynamisch bis Mai 2026."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_VG_KOELN_AFD_2025",
          "SRC_REUTERS_AFD_2025",
          "SRC_DLF_AFD_2025",
          "SRC_BVERWG_COMPACT_2025",
          "SRC_DLF_AFD_VERBOT_2026",
          "SRC_BVERFGG_PARTEIVERBOT",
          "SRC_BWL_PARTEIVERBOT"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "ready_with_volatile_legal_or_policy_note",
      "learningContext": "Cluster: Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie. Kernfakten: 02.05.2025 BfV-Einstufung AfD historisch; 08.05.2025 Stillhaltezusage VG Köln; 24.06.2025 BVerwG hebt COMPACT-Verbot auf; Parteiverbot: Bundestag/Bundesrat/Bundesregierung können Antrag stellen"
    },
    {
      "id": "djs2026dp-neu-024",
      "clusterId": "afd_compact_wehrhafte_demokratie_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Wie lautet der präzise verfassungsschutzrechtliche Begriff für die AfD-Einstufung vom 2. Mai 2025?",
      "options": "—",
      "answer": "Gesichert rechtsextremistische Bestrebung",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "fix": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "finalVersion": "Frage als historische Datumsfrage belassen, aber Erklärung ergänzen: „Stand Mai 2026 ist die Einstufung gerichtlich umstritten; im Eilverfahren vor dem VG Köln wurde die öffentliche Hochstufung begrenzt/gestoppt.“",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "BfV-Einstufung und COMPACT-Urteil im Kernzeitraum; Rechtsstand dynamisch bis Mai 2026."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_VG_KOELN_AFD_2025",
          "SRC_REUTERS_AFD_2025",
          "SRC_DLF_AFD_2025",
          "SRC_BVERWG_COMPACT_2025",
          "SRC_DLF_AFD_VERBOT_2026",
          "SRC_BVERFGG_PARTEIVERBOT",
          "SRC_BWL_PARTEIVERBOT"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "ready_with_volatile_legal_or_policy_note",
      "learningContext": "Cluster: Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie. Kernfakten: 02.05.2025 BfV-Einstufung AfD historisch; 08.05.2025 Stillhaltezusage VG Köln; 24.06.2025 BVerwG hebt COMPACT-Verbot auf; Parteiverbot: Bundestag/Bundesrat/Bundesregierung können Antrag stellen"
    },
    {
      "id": "djs2026dp-neu-025",
      "clusterId": "afd_compact_wehrhafte_demokratie_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Welches Gericht war für das Hauptverfahren um das COMPACT-Verbot zentral?",
      "options": "—",
      "answer": "Bundesverwaltungsgericht",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "BfV-Einstufung und COMPACT-Urteil im Kernzeitraum; Rechtsstand dynamisch bis Mai 2026."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_VG_KOELN_AFD_2025",
          "SRC_REUTERS_AFD_2025",
          "SRC_DLF_AFD_2025",
          "SRC_BVERWG_COMPACT_2025",
          "SRC_DLF_AFD_VERBOT_2026",
          "SRC_BVERFGG_PARTEIVERBOT",
          "SRC_BWL_PARTEIVERBOT"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie. Kernfakten: 02.05.2025 BfV-Einstufung AfD historisch; 08.05.2025 Stillhaltezusage VG Köln; 24.06.2025 BVerwG hebt COMPACT-Verbot auf; Parteiverbot: Bundestag/Bundesrat/Bundesregierung können Antrag stellen"
    },
    {
      "id": "djs2026dp-neu-026",
      "clusterId": "afd_compact_wehrhafte_demokratie_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Der Streit um Vereinsverbot und Pressefreiheit bei COMPACT lag 2025 vor welchem obersten Bundesgericht?",
      "options": "—",
      "answer": "Bundesverwaltungsgericht",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "BfV-Einstufung und COMPACT-Urteil im Kernzeitraum; Rechtsstand dynamisch bis Mai 2026."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_VG_KOELN_AFD_2025",
          "SRC_REUTERS_AFD_2025",
          "SRC_DLF_AFD_2025",
          "SRC_BVERWG_COMPACT_2025",
          "SRC_DLF_AFD_VERBOT_2026",
          "SRC_BVERFGG_PARTEIVERBOT",
          "SRC_BWL_PARTEIVERBOT"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie. Kernfakten: 02.05.2025 BfV-Einstufung AfD historisch; 08.05.2025 Stillhaltezusage VG Köln; 24.06.2025 BVerwG hebt COMPACT-Verbot auf; Parteiverbot: Bundestag/Bundesrat/Bundesregierung können Antrag stellen"
    },
    {
      "id": "djs2026dp-neu-027",
      "clusterId": "afd_compact_wehrhafte_demokratie_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Welche beiden Prinzipien standen beim COMPACT-Verbot besonders gegeneinander?",
      "options": "—",
      "answer": "Pressefreiheit und wehrhafte Demokratie",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "BfV-Einstufung und COMPACT-Urteil im Kernzeitraum; Rechtsstand dynamisch bis Mai 2026."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_VG_KOELN_AFD_2025",
          "SRC_REUTERS_AFD_2025",
          "SRC_DLF_AFD_2025",
          "SRC_BVERWG_COMPACT_2025",
          "SRC_DLF_AFD_VERBOT_2026",
          "SRC_BVERFGG_PARTEIVERBOT",
          "SRC_BWL_PARTEIVERBOT"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie. Kernfakten: 02.05.2025 BfV-Einstufung AfD historisch; 08.05.2025 Stillhaltezusage VG Köln; 24.06.2025 BVerwG hebt COMPACT-Verbot auf; Parteiverbot: Bundestag/Bundesrat/Bundesregierung können Antrag stellen"
    },
    {
      "id": "djs2026dp-neu-028",
      "clusterId": "afd_compact_wehrhafte_demokratie_2025_2026",
      "category": "Deutsche Politik",
      "type": "kurzantwort",
      "question": "Der COMPACT-Fall wurde zum Testfall zwischen Art. 5 GG und welchem demokratischen Schutzkonzept?",
      "options": "—",
      "answer": "wehrhafte Demokratie",
      "qaStatus": "OK_NACH_KORREKTUR",
      "priority": "HOCH",
      "fix": "Antwort auf „wehrhafte Demokratie“ verkürzen.",
      "finalVersion": "Frage: „Der COMPACT-Fall wurde zum Testfall zwischen Art. 5 GG und welchem demokratischen Schutzkonzept?“ Antwort: „wehrhafte Demokratie“.",
      "productionNote": "Antwortfeld verkürzt; Art. 5 GG deckt Presse-/Meinungsfreiheit bereits ab.",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "BfV-Einstufung und COMPACT-Urteil im Kernzeitraum; Rechtsstand dynamisch bis Mai 2026."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_VG_KOELN_AFD_2025",
          "SRC_REUTERS_AFD_2025",
          "SRC_DLF_AFD_2025",
          "SRC_BVERWG_COMPACT_2025",
          "SRC_DLF_AFD_VERBOT_2026",
          "SRC_BVERFGG_PARTEIVERBOT",
          "SRC_BWL_PARTEIVERBOT"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 3
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Verfassungsschutz/AfD, Parteiverbot, COMPACT und wehrhafte Demokratie. Kernfakten: 02.05.2025 BfV-Einstufung AfD historisch; 08.05.2025 Stillhaltezusage VG Köln; 24.06.2025 BVerwG hebt COMPACT-Verbot auf; Parteiverbot: Bundestag/Bundesrat/Bundesregierung können Antrag stellen"
    },
    {
      "id": "djs2026eu001",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Ab welchem Datum beginnt die Anwendung des EU-Migrations- und Asylpakts?",
      "options": "1. Januar 2026, 23. Februar 2026, 12. Juni 2026, 2. August 2026",
      "answer": "12. Juni 2026",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code klar als „archiveOnly“/„historicalDjs“ kennzeichnen und aus aktivem Lernmodus ausschließen, falls nicht ausdrücklich gewünscht.",
      "finalVersion": "Frage im Archiv behalten; bei Reaktivierung Stichtag und Quelle ergänzen.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026eu002",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Ab welchem Datum soll der EU AI Act vollständig anwendbar sein?",
      "options": "2. Februar 2026, 12. Juni 2026, 2. August 2026, 1. Januar 2027",
      "answer": "2. August 2026",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "fix": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "finalVersion": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "ready_with_volatile_legal_or_policy_note",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-079",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Wie heißt der 2025 vorgestellte EU-Verteidigungsplan zur Stärkung der Einsatzbereitschaft?",
      "options": "—",
      "answer": "ReArm Europe/Readiness 2030",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-080",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Unter welchem Namen bündelte die EU-Kommission 2025 ihr Weißbuch zur europäischen Verteidigung?",
      "options": "—",
      "answer": "ReArm Europe/Readiness 2030",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-081",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Welches Finanzinstrument bildet den ersten Pfeiler von ReArm Europe/Readiness 2030?",
      "options": "—",
      "answer": "SAFE",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-082",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Die EU-Darlehen für gemeinsame Verteidigungsbeschaffung laufen unter welcher Abkürzung?",
      "options": "—",
      "answer": "SAFE",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-083",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Welches EU-Sanktionspaket gegen Russland wurde am dritten Jahrestag des Angriffs auf die Ukraine beschlossen?",
      "options": "—",
      "answer": "16. Paket",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-084",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Am 24. Februar 2025 verabschiedete die EU welches nummerierte Russland-Sanktionspaket?",
      "options": "—",
      "answer": "16. Paket",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-085",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "An welchem Datum beschloss die EU ihr 17. Sanktionspaket gegen Russland?",
      "options": "—",
      "answer": "20. Mai 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-086",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Das 17. Russland-Sanktionspaket der EU folgte im Mai 2025: an welchem Tag?",
      "options": "—",
      "answer": "20. Mai 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-089",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Ab welchem Datum soll der EU-Migrations- und Asylpakt vollständig angewendet werden?",
      "options": "—",
      "answer": "12. Juni 2026",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-090",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Die praktische Anwendung der großen EU-Asylreform beginnt an welchem Tag im Juni 2026?",
      "options": "—",
      "answer": "12. Juni 2026",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-091",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Ab wann greifen im EU AI Act die Verbote für unzulässige KI-Praktiken?",
      "options": "—",
      "answer": "2. Februar 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-092",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Social Scoring und bestimmte biometrische Echtzeitüberwachung sind nach dem AI Act ab welchem Datum verboten?",
      "options": "—",
      "answer": "2. Februar 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-093",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Ab welchem Datum soll der EU AI Act grundsätzlich vollständig anwendbar sein?",
      "options": "—",
      "answer": "2. August 2026",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "fix": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "finalVersion": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "ready_with_volatile_legal_or_policy_note",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-094",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Die gestaffelte Umsetzung des AI Act erreicht ihre Gesamtgeltung an welchem Datum?",
      "options": "—",
      "answer": "2. August 2026",
      "qaStatus": "AKTUALISIEREN",
      "priority": "MITTEL",
      "fix": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "finalVersion": "Formulierung ändern zu: „grundsätzlich ab 2. August 2026 anwendbar, mit Ausnahmen/gestaffelten Sonderfristen; aktuelle EU-Omnibus-/AI-Act-Updates prüfen.“",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "ready_with_volatile_legal_or_policy_note",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-095",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Wie nennt die EU ihr 2025 vorgestelltes Paket gegen Desinformation und ausländische Einflussnahme?",
      "options": "—",
      "answer": "European Democracy Shield",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-096",
      "clusterId": "eu_defence_sanctions_ai_asylum_democracy_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Der Schutz demokratischer Prozesse vor Einflussoperationen firmiert bei der EU unter welchem englischen Namen?",
      "options": "—",
      "answer": "European Democracy Shield",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026; einige AI-Act-Anker Februar/August 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_SAFE_2025",
          "SRC_REUTERS_SAFE_2025",
          "SRC_COUNCIL_RUSSIA_16_2025",
          "SRC_COUNCIL_RUSSIA_17_2025",
          "SRC_EU_AI_ACT_FAQ",
          "SRC_EU_AI_ACT_PAGE",
          "SRC_REUTERS_AI_2026",
          "SRC_EU_MIGRATION_2026",
          "SRC_DLF_ASYL_2026",
          "SRC_REUTERS_MIGRATION_2025",
          "SRC_EU_DEMOCRACY_SHIELD"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 4
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Verteidigung, Russland-Sanktionen, AI Act, Asylpakt, Democracy Shield. Kernfakten: SAFE 150 Mrd. Euro; 17. Russland-Sanktionspaket 20.05.2025; AI-Act Verbote ab 02.02.2025, Grundanwendung 02.08.2026 mit Ausnahmen; EU-Asylpakt Anwendung 12.06.2026"
    },
    {
      "id": "djs2026ip-neu-097",
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Welches 2040-Klimaziel schlug die EU-Kommission 2025 für das Klimagesetz vor?",
      "options": "—",
      "answer": "Minus 90 Prozent Netto-THG gegenüber 1990",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "finalVersion": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EU_CLIMATE_2040",
          "SRC_REUTERS_CLIMATE_2025",
          "SRC_COUNCIL_SCHENGEN_BG_RO",
          "SRC_EU_SCHENGEN_BG_RO",
          "SRC_EU_SCHUMAN_75",
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung. Kernfakten: EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990; Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025; 75 Jahre Schuman-Erklärung am 09.05.2025; 90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
    },
    {
      "id": "djs2026ip-neu-098",
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Auf welchen Netto-Reduktionswert gegenüber 1990 soll die EU bis 2040 zusteuern?",
      "options": "—",
      "answer": "Minus 90 Prozent Netto-THG gegenüber 1990",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "finalVersion": "Zeitstand ergänzen: „Vorschlag der Kommission im Juli 2025; später im Gesetzgebungsverfahren/als Ziel weiter konkretisiert.“",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EU_CLIMATE_2040",
          "SRC_REUTERS_CLIMATE_2025",
          "SRC_COUNCIL_SCHENGEN_BG_RO",
          "SRC_EU_SCHENGEN_BG_RO",
          "SRC_EU_SCHUMAN_75",
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung. Kernfakten: EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990; Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025; 75 Jahre Schuman-Erklärung am 09.05.2025; 90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
    },
    {
      "id": "djs2026ip-neu-099",
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Welche zwei Länder wurden am 1. Januar 2025 vollständig in den Schengen-Raum integriert?",
      "options": "—",
      "answer": "Rumänien und Bulgarien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EU_CLIMATE_2040",
          "SRC_REUTERS_CLIMATE_2025",
          "SRC_COUNCIL_SCHENGEN_BG_RO",
          "SRC_EU_SCHENGEN_BG_RO",
          "SRC_EU_SCHUMAN_75",
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung. Kernfakten: EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990; Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025; 75 Jahre Schuman-Erklärung am 09.05.2025; 90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
    },
    {
      "id": "djs2026ip-neu-100",
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Für welche beiden EU-Staaten entfielen Anfang 2025 auch die Landgrenzkontrollen im Schengen-System?",
      "options": "—",
      "answer": "Rumänien und Bulgarien",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EU_CLIMATE_2040",
          "SRC_REUTERS_CLIMATE_2025",
          "SRC_COUNCIL_SCHENGEN_BG_RO",
          "SRC_EU_SCHENGEN_BG_RO",
          "SRC_EU_SCHUMAN_75",
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung. Kernfakten: EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990; Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025; 75 Jahre Schuman-Erklärung am 09.05.2025; 90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
    },
    {
      "id": "djs2026ip-neu-101",
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Welches Jubiläum der Schuman-Erklärung wurde am Europa-Tag 2025 gefeiert?",
      "options": "—",
      "answer": "75 Jahre",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EU_CLIMATE_2040",
          "SRC_REUTERS_CLIMATE_2025",
          "SRC_COUNCIL_SCHENGEN_BG_RO",
          "SRC_EU_SCHENGEN_BG_RO",
          "SRC_EU_SCHUMAN_75",
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung. Kernfakten: EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990; Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025; 75 Jahre Schuman-Erklärung am 09.05.2025; 90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
    },
    {
      "id": "djs2026ip-neu-102",
      "clusterId": "eu_climate_schengen_schuman_ukraine_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Der 9. Mai 2025 erinnerte an wie viele Jahre europäische Integration seit Robert Schumans Erklärung?",
      "options": "—",
      "answer": "75 Jahre",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 mit Schengen-Kontext 01.01.2025 als Anker."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EU_CLIMATE_2040",
          "SRC_REUTERS_CLIMATE_2025",
          "SRC_COUNCIL_SCHENGEN_BG_RO",
          "SRC_EU_SCHENGEN_BG_RO",
          "SRC_EU_SCHUMAN_75",
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 2
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: EU-Klima 2040, Schengen, Schuman-Jubiläum, Ukraine-Finanzierung. Kernfakten: EU 2040 Ziel: minus 90 % Netto-THG ggü. 1990; Rumänien/Bulgarien voll im Schengen-Raum ab 01.01.2025; 75 Jahre Schuman-Erklärung am 09.05.2025; 90 Mrd. Euro Ukraine-Kredit finalisiert 23.04.2026"
    },
    {
      "id": "djs2026ip-neu-107",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Unter welchem Namen verkündete Trump am 2. April 2025 seine Gegenzollpolitik?",
      "options": "—",
      "answer": "Reciprocal Tariffs",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-108",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Die von Trump als „Liberation Day“ inszenierte Zollanordnung wurde wie bezeichnet?",
      "options": "—",
      "answer": "Reciprocal Tariffs",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-109",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "An welchem Datum starb Papst Franziskus im Vatikan?",
      "options": "—",
      "answer": "21. April 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-110",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Der Tod von Jorge Mario Bergoglio löste 2025 das Konklave aus: an welchem Tag starb er?",
      "options": "—",
      "answer": "21. April 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "CONTEXT_ANCHOR_OUT_OF_SCOPE_MAY2025_MAY2026",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "medium",
      "productionStatus": "context_only_unless_user_allows_pre_may_2025_anchor",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-111",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Welchen Papstnamen wählte Robert Francis Prevost nach seiner Wahl?",
      "options": "—",
      "answer": "Leo XIV.",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-112",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Der erste US-amerikanische Papst trat 2025 unter welchem Namen auf?",
      "options": "—",
      "answer": "Leo XIV.",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-113",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Wann nahm die Weltgesundheitsversammlung das WHO-Pandemieabkommen an?",
      "options": "—",
      "answer": "20. Mai 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-114",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Das erste globale Pandemieabkommen wurde bei der WHO an welchem Datum beschlossen?",
      "options": "—",
      "answer": "20. Mai 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-115",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "In welcher brasilianischen Stadt fand die COP30 statt?",
      "options": "—",
      "answer": "Belém",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-116",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Die Klimakonferenz 2025 wurde symbolisch in der Nähe des Amazonas ausgerichtet: in welcher Stadt?",
      "options": "—",
      "answer": "Belém",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-117",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Wie lautet die Abkürzung für die 2025 fällige dritte Runde nationaler Klimaschutzbeiträge?",
      "options": "—",
      "answer": "NDC 3.0",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-118",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Die neuen Klimapläne im Pariser Abkommen werden als welche Version der NDCs bezeichnet?",
      "options": "—",
      "answer": "NDC 3.0",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-119",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Wann fand das hochrangige UN80-Gedenktreffen in New York statt?",
      "options": "—",
      "answer": "22. September 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026ip-neu-120",
      "clusterId": "international_events_2025_2026",
      "category": "Internationale Politik",
      "type": "kurzantwort",
      "question": "Das Jubiläumstreffen zum 80. Geburtstag der Vereinten Nationen lag an welchem Datum der UN-Generalversammlung?",
      "options": "—",
      "answer": "22. September 2025",
      "qaStatus": "OK_MIT_HINWEIS",
      "priority": "NIEDRIG",
      "fix": "Im Code als Variantencluster zur Basisfrage führen; Alias-Antworten definieren; Erklärung aus Basisfrage oder eigener Kurz-Erklärung generieren.",
      "finalVersion": "Finale Version kann bleiben, sofern die App Kurzantwort-Aliasse und Cluster-Rotation unterstützt.",
      "productionNote": "",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Überwiegend Mai 2025 bis Mai 2026; Trump-/Zoll-Anker Januar/April 2025 als Kontextdaten."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHITEHOUSE_TRUMP_2025",
          "SRC_FEDREG_RECIPROCAL_TARIFFS",
          "SRC_REUTERS_TARIFFS_2025",
          "SRC_VATICAN_FRANCIS_2025",
          "SRC_VATICAN_LEO_XIV_2025",
          "SRC_REUTERS_LEO_XIV_2025",
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025",
          "SRC_UNFCCC_COP30_2025",
          "SRC_REUTERS_COP30_2025",
          "SRC_UNFCCC_NDC_30",
          "SRC_UN80_2025",
          "SRC_DLF_UN80_2025",
          "SRC_UNESCO_UNDP_AI_ELECTIONS",
          "SRC_UNDP_AI_ELECTIONS",
          "SRC_UN_SUDAN_2026",
          "SRC_REUTERS_SUDAN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 6
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: USA, Vatikan, WHO, COP30, UN80, KI/Wahlen, humanitäre Krisen. Kernfakten: Leo XIV. am 08.05.2025; WHO-Pandemieabkommen 20.05.2025; COP30 Belém 10.–21.11.2025; UN80-Gedenktreffen 22.09.2025"
    },
    {
      "id": "djs2026mc-neu-146",
      "clusterId": "wirtschaft_gesundheit_energie_kultur_2025_2026",
      "category": "Kultur & Medien",
      "type": "kurzantwort",
      "question": "Das Pariser Monument, das 2021 temporär verhüllt wurde, war welches Bauwerk?",
      "options": "—",
      "answer": "Arc de Triomphe",
      "qaStatus": "OK_NACH_KORREKTUR",
      "priority": "HOCH",
      "fix": "Antwort auf „Arc de Triomphe“ ändern.",
      "finalVersion": "Antwort: „Arc de Triomphe“.",
      "productionNote": "Gefragt ist das Bauwerk, nicht der Projektname.",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 plus wenige ältere Kulturkorrekturen als Katalogbereinigung."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMAS_MINDESTLOHN_2025",
          "SRC_DLF_MINDESTLOHN_2025",
          "SRC_BMG_EPA_2025",
          "SRC_HEISE_EPA_2025",
          "SRC_HEISE_EPA_ROLLOUT",
          "SRC_ENTSOE_BLACKOUT_2026",
          "SRC_REUTERS_BLACKOUT_2026",
          "SRC_TAGESSPIEGEL_ARC_2021",
          "SRC_SPIEGEL_RELOTIUS_2018",
          "SRC_DLF_ECHO_2018"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 7
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Mindestlohn, ePA, iberischer Blackout, Kultur-/Medienkorrekturen. Kernfakten: Mindestlohn 12,82 Euro ab 01.01.2025; ePA bundesweit ab 29.04.2025 und verpflichtende Befüllung ab 01.10.2025; Iberischer Blackout 28.04.2025; finaler ENTSO-E-Bericht 20.03.2026; Kulturantworten korrigiert: Arc de Triomphe, Jaegers Grenze, Echo"
    },
    {
      "id": "djs2026mc-neu-148",
      "clusterId": "wirtschaft_gesundheit_energie_kultur_2025_2026",
      "category": "Kultur & Medien",
      "type": "kurzantwort",
      "question": "Juan Moreno enttarnte Fälschungen seines Kollegen bei welcher Reportage?",
      "options": "—",
      "answer": "Jaegers Grenze",
      "qaStatus": "OK_NACH_KORREKTUR",
      "priority": "HOCH",
      "fix": "Antwort auf „Jaegers Grenze“ ändern.",
      "finalVersion": "Antwort: „Jaegers Grenze“.",
      "productionNote": "Gefragt ist der Reportagetitel.",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 plus wenige ältere Kulturkorrekturen als Katalogbereinigung."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMAS_MINDESTLOHN_2025",
          "SRC_DLF_MINDESTLOHN_2025",
          "SRC_BMG_EPA_2025",
          "SRC_HEISE_EPA_2025",
          "SRC_HEISE_EPA_ROLLOUT",
          "SRC_ENTSOE_BLACKOUT_2026",
          "SRC_REUTERS_BLACKOUT_2026",
          "SRC_TAGESSPIEGEL_ARC_2021",
          "SRC_SPIEGEL_RELOTIUS_2018",
          "SRC_DLF_ECHO_2018"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 7
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Mindestlohn, ePA, iberischer Blackout, Kultur-/Medienkorrekturen. Kernfakten: Mindestlohn 12,82 Euro ab 01.01.2025; ePA bundesweit ab 29.04.2025 und verpflichtende Befüllung ab 01.10.2025; Iberischer Blackout 28.04.2025; finaler ENTSO-E-Bericht 20.03.2026; Kulturantworten korrigiert: Arc de Triomphe, Jaegers Grenze, Echo"
    },
    {
      "id": "djs2026mc-neu-150",
      "clusterId": "wirtschaft_gesundheit_energie_kultur_2025_2026",
      "category": "Kultur & Medien",
      "type": "kurzantwort",
      "question": "Die Auszeichnung eines Rap-Albums mit antisemitisch kritisierten Zeilen führte zum Ende welchen Musikpreises?",
      "options": "—",
      "answer": "Echo-Musikpreis",
      "qaStatus": "OK_NACH_KORREKTUR",
      "priority": "HOCH",
      "fix": "Antwort auf „Echo“ bzw. „Echo-Musikpreis“ ändern.",
      "finalVersion": "Antwort: „Echo“ bzw. „Echo-Musikpreis“.",
      "productionNote": "Gefragt ist der Preisname.",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "classification": "IN_SCOPE_OR_CLUSTER_RELEVANT",
        "note": "Mai 2025 bis Mai 2026 plus wenige ältere Kulturkorrekturen als Katalogbereinigung."
      },
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMAS_MINDESTLOHN_2025",
          "SRC_DLF_MINDESTLOHN_2025",
          "SRC_BMG_EPA_2025",
          "SRC_HEISE_EPA_2025",
          "SRC_HEISE_EPA_ROLLOUT",
          "SRC_ENTSOE_BLACKOUT_2026",
          "SRC_REUTERS_BLACKOUT_2026",
          "SRC_TAGESSPIEGEL_ARC_2021",
          "SRC_SPIEGEL_RELOTIUS_2018",
          "SRC_DLF_ECHO_2018"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 7
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready",
      "learningContext": "Cluster: Mindestlohn, ePA, iberischer Blackout, Kultur-/Medienkorrekturen. Kernfakten: Mindestlohn 12,82 Euro ab 01.01.2025; ePA bundesweit ab 29.04.2025 und verpflichtende Befüllung ab 01.10.2025; Iberischer Blackout 28.04.2025; finaler ENTSO-E-Bericht 20.03.2026; Kulturantworten korrigiert: Arc de Triomphe, Jaegers Grenze, Echo"
    }
  ],
  "newQuestions": [
    {
      "id": "new2025sport_weuro_001",
      "clusterId": "sport_weuro_2025",
      "category": "Sport",
      "type": "singlechoice",
      "question": "In welchem Land fand die UEFA Women’s EURO 2025 statt?",
      "options": [
        "Deutschland",
        "Schweiz",
        "England",
        "Spanien"
      ],
      "answer": "Schweiz",
      "answerAliases": [
        "Schweiz"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-07-02",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Die Women’s EURO 2025 war ein starkes Sport-Cluster: Ort, Zeitraum, Finalstadt und Sieger lassen sich variieren.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_UEFA_WEURO_2025",
          "SRC_REUTERS_WEURO_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025sport_weuro_002",
      "clusterId": "sport_weuro_2025",
      "category": "Sport",
      "type": "singlechoice",
      "question": "In welcher Stadt wurde das Finale der UEFA Women’s EURO 2025 ausgetragen?",
      "options": [
        "Zürich",
        "Basel",
        "Bern",
        "Genf"
      ],
      "answer": "Basel",
      "answerAliases": [
        "Basel"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-07-27",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Finalort und Stadion sind prüfungsrelevante Details, weil sie Geografie und Sport verbinden.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_UEFA_WEURO_2025",
          "SRC_REUTERS_WEURO_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025sport_weuro_003",
      "clusterId": "sport_weuro_2025",
      "category": "Sport",
      "type": "singlechoice",
      "question": "Welche Nationalmannschaft gewann die UEFA Women’s EURO 2025?",
      "options": [
        "Spanien",
        "Deutschland",
        "England",
        "Schweden"
      ],
      "answer": "England",
      "answerAliases": [
        "England"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-07-27",
        "classification": "IN_SCOPE"
      },
      "learningContext": "England gewann das Finale gegen Spanien nach Elfmeterschießen.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_UEFA_WEURO_2025",
          "SRC_REUTERS_WEURO_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025sport_weuro_004",
      "clusterId": "sport_weuro_2025",
      "category": "Sport",
      "type": "singlechoice",
      "question": "Wie wurde das Finale der Women’s EURO 2025 zwischen England und Spanien entschieden?",
      "options": [
        "durch Golden Goal",
        "im Elfmeterschießen",
        "durch Wiederholungsspiel",
        "durch Losentscheid"
      ],
      "answer": "Im Elfmeterschießen",
      "answerAliases": [
        "Im Elfmeterschießen"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-07-27",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Diese Variante prüft den Spielverlauf statt nur den Sieger.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_UEFA_WEURO_2025",
          "SRC_REUTERS_WEURO_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2026sport_olympia_001",
      "clusterId": "sport_milano_cortina_2026",
      "category": "Sport",
      "type": "singlechoice",
      "question": "In welchem Land fanden die Olympischen Winterspiele 2026 statt?",
      "options": [
        "Österreich",
        "Italien",
        "Schweiz",
        "Frankreich"
      ],
      "answer": "Italien",
      "answerAliases": [
        "Italien"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2026-02-06",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Milano Cortina 2026 verbindet Sport, Geografie und Datumswissen.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_IOC_MILANO_2026",
          "SRC_REUTERS_MILANO_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2026sport_olympia_002",
      "clusterId": "sport_milano_cortina_2026",
      "category": "Sport",
      "type": "singlechoice",
      "question": "Von wann bis wann liefen die Olympischen Winterspiele Milano Cortina 2026?",
      "options": [
        "1. bis 17. Februar 2026",
        "6. bis 22. Februar 2026",
        "9. bis 25. Februar 2026",
        "6. bis 15. März 2026"
      ],
      "answer": "6. bis 22. Februar 2026",
      "answerAliases": [
        "6. bis 22. Februar 2026"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2026-02-06",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Datumsfrage für die exakte Einordnung im Prüfzeitraum.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_IOC_MILANO_2026",
          "SRC_REUTERS_MILANO_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2026sport_olympia_003",
      "clusterId": "sport_milano_cortina_2026",
      "category": "Sport",
      "type": "singlechoice",
      "question": "Welche Sportart feierte bei Milano Cortina 2026 ihr olympisches Debüt?",
      "options": [
        "Padel",
        "Ski mountaineering / Skibergsteigen",
        "Cricket",
        "Beachhandball"
      ],
      "answer": "Ski mountaineering / Skibergsteigen",
      "answerAliases": [
        "Ski mountaineering / Skibergsteigen"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2026-02-06",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Abkürzungen und neue Disziplinen sind gute Vertiefungsfragen.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_MILANO_CORTINA_2026",
          "SRC_REUTERS_SKIMO_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2026sport_para_001",
      "clusterId": "sport_milano_cortina_2026",
      "category": "Sport",
      "type": "singlechoice",
      "question": "Von wann bis wann fanden die Paralympischen Winterspiele Milano Cortina 2026 statt?",
      "options": [
        "6. bis 15. März 2026",
        "6. bis 22. Februar 2026",
        "15. bis 25. März 2026",
        "1. bis 10. März 2026"
      ],
      "answer": "6. bis 15. März 2026",
      "answerAliases": [
        "6. bis 15. März 2026"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2026-03-06",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Paralympics nicht vergessen: gleicher Megaevent-Komplex, andere Daten.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_MILANO_CORTINA_2026",
          "SRC_REUTERS_SKIMO_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025sport_cwc_001",
      "clusterId": "sport_club_world_cup_2025",
      "category": "Sport",
      "type": "singlechoice",
      "question": "Welcher Verein gewann die FIFA Club World Cup 2025?",
      "options": [
        "Paris Saint-Germain",
        "Chelsea FC",
        "Real Madrid",
        "Manchester City"
      ],
      "answer": "Chelsea FC",
      "answerAliases": [
        "Chelsea FC"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-07-13",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Die neue 32-Team-Klub-WM ist ein großes Sportthema im Zeitraum.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_FIFA_CWC_2025",
          "SRC_REUTERS_CWC_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025sport_cwc_002",
      "clusterId": "sport_club_world_cup_2025",
      "category": "Sport",
      "type": "singlechoice",
      "question": "Gegen welchen Verein gewann Chelsea das Finale der FIFA Club World Cup 2025?",
      "options": [
        "Inter Mailand",
        "Paris Saint-Germain",
        "Bayern München",
        "Fluminense"
      ],
      "answer": "Paris Saint-Germain",
      "answerAliases": [
        "Paris Saint-Germain"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-07-13",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Finalgegner als Namens-/Sportwissen.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_FIFA_CWC_2025",
          "SRC_REUTERS_CWC_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025sport_cwc_003",
      "clusterId": "sport_club_world_cup_2025",
      "category": "Sport",
      "type": "singlechoice",
      "question": "In welchem Stadion fand das Finale der FIFA Club World Cup 2025 statt?",
      "options": [
        "Wembley Stadium",
        "MetLife Stadium",
        "Rose Bowl",
        "Allianz Arena"
      ],
      "answer": "MetLife Stadium",
      "answerAliases": [
        "MetLife Stadium"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-07-13",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Geografie/Stadionwissen als zusätzliche Tiefe.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_FIFA_CWC_2025",
          "SRC_REUTERS_CWC_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025sport_cwc_004",
      "clusterId": "sport_club_world_cup_2025",
      "category": "Sport",
      "type": "singlechoice",
      "question": "Mit welchem Ergebnis gewann Chelsea das Finale der FIFA Club World Cup 2025 gegen PSG?",
      "options": [
        "1:0",
        "2:1",
        "3:0",
        "4:2"
      ],
      "answer": "3:0",
      "answerAliases": [
        "3:0"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-07-13",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Ergebnisfrage mit eindeutigem Zahlenfakt.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_FIFA_CWC_2025",
          "SRC_REUTERS_CWC_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025sport_ucl_001",
      "clusterId": "sport_champions_league_2025",
      "category": "Sport",
      "type": "singlechoice",
      "question": "Welcher Verein gewann die UEFA Champions League 2024/25?",
      "options": [
        "Inter Mailand",
        "Paris Saint-Germain",
        "Real Madrid",
        "Manchester City"
      ],
      "answer": "Paris Saint-Germain",
      "answerAliases": [
        "Paris Saint-Germain"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-05-31",
        "classification": "IN_SCOPE"
      },
      "learningContext": "PSG gewann am 31. Mai 2025 in München erstmals die Champions League; Reuters-CWC-Quelle dient hier nur als Media-Backup für PSG-/2025-Sportkontext, für Produktion besser noch Kicker/Reuters-UCL ergänzen.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_UEFA_UCL_2025",
          "SRC_REUTERS_UCL_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025sport_ucl_002",
      "clusterId": "sport_champions_league_2025",
      "category": "Sport",
      "type": "singlechoice",
      "question": "Mit welchem Ergebnis gewann Paris Saint-Germain das Champions-League-Finale 2025 gegen Inter?",
      "options": [
        "2:0",
        "3:1",
        "5:0",
        "1:1 nach Elfmeterschießen"
      ],
      "answer": "5:0",
      "answerAliases": [
        "5:0"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-05-31",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Zahlen- und Finalwissen. Für endgültige Produktion noch zweiter passgenauer Media-Beleg empfohlen.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_UEFA_UCL_2025",
          "SRC_REUTERS_UCL_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025kultur_eurovision_001",
      "clusterId": "kultur_eurovision_2025",
      "category": "Kultur & Medien",
      "type": "singlechoice",
      "question": "In welcher Schweizer Stadt fand der Eurovision Song Contest 2025 statt?",
      "options": [
        "Zürich",
        "Basel",
        "Genf",
        "Bern"
      ],
      "answer": "Basel",
      "answerAliases": [
        "Basel"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-05-17",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Eurovision eignet sich für Kultur, Geografie, Namen und Punkte.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EUROVISION_2025",
          "SRC_REUTERS_EUROVISION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025kultur_eurovision_002",
      "clusterId": "kultur_eurovision_2025",
      "category": "Kultur & Medien",
      "type": "singlechoice",
      "question": "Welches Land gewann den Eurovision Song Contest 2025?",
      "options": [
        "Schweiz",
        "Österreich",
        "Israel",
        "Schweden"
      ],
      "answer": "Österreich",
      "answerAliases": [
        "Österreich"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-05-17",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Österreich gewann mit JJ und Wasted Love.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EUROVISION_2025",
          "SRC_REUTERS_EUROVISION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025kultur_eurovision_003",
      "clusterId": "kultur_eurovision_2025",
      "category": "Kultur & Medien",
      "type": "singlechoice",
      "question": "Wie heißt der österreichische Eurovision-Sieger 2025 mit Künstlernamen?",
      "options": [
        "JJ",
        "Nemo",
        "Loreen",
        "Slimane"
      ],
      "answer": "JJ",
      "answerAliases": [
        "JJ"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-05-17",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Namen/Abkürzungen: JJ = Johannes Pietsch.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EUROVISION_2025",
          "SRC_REUTERS_EUROVISION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025kultur_eurovision_004",
      "clusterId": "kultur_eurovision_2025",
      "category": "Kultur & Medien",
      "type": "singlechoice",
      "question": "Mit welchem Lied gewann JJ den Eurovision Song Contest 2025?",
      "options": [
        "The Code",
        "Wasted Love",
        "New Day Will Rise",
        "Tattoo"
      ],
      "answer": "Wasted Love",
      "answerAliases": [
        "Wasted Love"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-05-17",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Songtitel als Kernfakt.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_EUROVISION_2025",
          "SRC_REUTERS_EUROVISION_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025who_001",
      "clusterId": "who_pandemic_agreement_2025",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "An welchem Datum nahm die Weltgesundheitsversammlung das WHO-Pandemieabkommen an?",
      "options": [
        "8. Mai 2025",
        "20. Mai 2025",
        "1. Juni 2025",
        "12. Juni 2025"
      ],
      "answer": "20. Mai 2025",
      "answerAliases": [
        "20. Mai 2025"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-05-20",
        "classification": "IN_SCOPE"
      },
      "learningContext": "WHO-Cluster: Datum, Institution, Rechtsstatus und PABS-Anhang.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025who_002",
      "clusterId": "who_pandemic_agreement_2025",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welche WHO-Versammlung nahm 2025 das Pandemieabkommen an?",
      "options": [
        "G20-Gipfel",
        "78. Weltgesundheitsversammlung / WHA78",
        "UN-Sicherheitsrat",
        "WTO-Ministerkonferenz"
      ],
      "answer": "78. Weltgesundheitsversammlung / WHA78",
      "answerAliases": [
        "78. Weltgesundheitsversammlung / WHA78"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-05-20",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Abkürzung WHA und Institution werden abgefragt.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025who_003",
      "clusterId": "who_pandemic_agreement_2025",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Welche Abkürzung steht beim WHO-Pandemieabkommen für den noch auszuhandelnden Pathogen-Access-and-Benefit-Sharing-Anhang?",
      "options": [
        "NDC",
        "PABS",
        "SAFE",
        "DSA"
      ],
      "answer": "PABS",
      "answerAliases": [
        "PABS"
      ],
      "difficulty": "schwer",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-05-20",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Abkürzungswissen für höhere Fragentiefe.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_WHO_PANDEMIC_2025",
          "SRC_REUTERS_WHO_PANDEMIC_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2026eu_ukraine_001",
      "clusterId": "eu_ukraine_loan_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Wie hoch ist der zusätzliche EU-Unterstützungskredit für die Ukraine, der 2026 legislativ finalisiert wurde?",
      "options": [
        "20 Milliarden Euro",
        "50 Milliarden Euro",
        "90 Milliarden Euro",
        "150 Milliarden Euro"
      ],
      "answer": "90 Milliarden Euro",
      "answerAliases": [
        "90 Milliarden Euro"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2026-04-23",
        "classification": "IN_SCOPE"
      },
      "learningContext": "EU-Finanzdaten: Volumen, Zeitraum, Beschlusskette.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2026eu_ukraine_002",
      "clusterId": "eu_ukraine_loan_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "Für welchen Zeitraum soll der EU-Unterstützungskredit über 90 Milliarden Euro der Ukraine helfen?",
      "options": [
        "2025/2026",
        "2026/2027",
        "2027/2028",
        "bis 2030"
      ],
      "answer": "2026/2027",
      "answerAliases": [
        "2026/2027"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2026-04-23",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Zeitraum als Vertiefung.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2026eu_ukraine_003",
      "clusterId": "eu_ukraine_loan_2026",
      "category": "Internationale Politik",
      "type": "singlechoice",
      "question": "An welchem Datum finalisierte der Rat der EU den 90-Milliarden-Euro-Kredit für die Ukraine?",
      "options": [
        "4. Februar 2026",
        "23. April 2026",
        "8. Mai 2026",
        "12. Juni 2026"
      ],
      "answer": "23. April 2026",
      "answerAliases": [
        "23. April 2026"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2026-04-23",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Exaktes Datum im Kernzeitraum.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_COUNCIL_UKRAINE_90BN",
          "SRC_REUTERS_UKRAINE_90BN"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025energy_blackout_001",
      "clusterId": "energie_iberian_blackout_2025_2026",
      "category": "Wissenschaft & Technik",
      "type": "singlechoice",
      "question": "Welche zwei Länder waren vom großen iberischen Blackout am 28. April 2025 besonders betroffen?",
      "options": [
        "Frankreich und Belgien",
        "Spanien und Portugal",
        "Italien und Griechenland",
        "Deutschland und Österreich"
      ],
      "answer": "Spanien und Portugal",
      "answerAliases": [
        "Spanien und Portugal"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-04-28",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Technik/Energie-Cluster: Ereignis, Länder, Ursache, Bericht.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_ENTSOE_BLACKOUT_2026",
          "SRC_REUTERS_BLACKOUT_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2026energy_blackout_002",
      "clusterId": "energie_iberian_blackout_2025_2026",
      "category": "Wissenschaft & Technik",
      "type": "singlechoice",
      "question": "Welche europäische Netzorganisation veröffentlichte 2026 den Abschlussbericht zum iberischen Blackout?",
      "options": [
        "ACER",
        "ENTSO-E",
        "Europol",
        "Eurostat"
      ],
      "answer": "ENTSO-E",
      "answerAliases": [
        "ENTSO-E"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2026-03-20",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Abkürzung/Institutionenwissen.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_ENTSOE_BLACKOUT_2026",
          "SRC_REUTERS_BLACKOUT_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2026energy_blackout_003",
      "clusterId": "energie_iberian_blackout_2025_2026",
      "category": "Wissenschaft & Technik",
      "type": "singlechoice",
      "question": "Welche technische Problemlage gehörte laut ENTSO-E zu den Ursachen des iberischen Blackouts?",
      "options": [
        "Wassermangel in Stauseen",
        "Spannungs- und Blindleistungsprobleme",
        "Meteoriteneinschlag",
        "Cyberangriff als gesicherte Ursache"
      ],
      "answer": "Spannungs- und Blindleistungsprobleme",
      "answerAliases": [
        "Spannungs- und Blindleistungsprobleme"
      ],
      "difficulty": "schwer",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2026-03-20",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Ursachenfrage jenseits von „wo war es?“.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_ENTSOE_BLACKOUT_2026",
          "SRC_REUTERS_BLACKOUT_2026"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025epa_001",
      "clusterId": "gesundheit_epa_2025",
      "category": "Wissenschaft & Technik",
      "type": "singlechoice",
      "question": "Wofür steht die Abkürzung ePA im deutschen Gesundheitswesen?",
      "options": [
        "elektronische Patientenakte",
        "europäischer Personalausweis",
        "erweiterte Pflegeabrechnung",
        "elektronische Praxisaufsicht"
      ],
      "answer": "elektronische Patientenakte",
      "answerAliases": [
        "elektronische Patientenakte"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-04-29",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Abkürzungsfrage mit hoher Alltagsrelevanz.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMG_EPA_2025",
          "SRC_HEISE_EPA_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025epa_002",
      "clusterId": "gesundheit_epa_2025",
      "category": "Wissenschaft & Technik",
      "type": "singlechoice",
      "question": "Ab welchem Datum sollte die elektronische Patientenakte 2025 bundesweit ausgerollt werden?",
      "options": [
        "15. Januar 2025",
        "29. April 2025",
        "1. Oktober 2025",
        "1. Januar 2026"
      ],
      "answer": "29. April 2025",
      "answerAliases": [
        "29. April 2025"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-04-29",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Datumsfrage im Gesundheits-/Digitalisierungscluster.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMG_EPA_2025",
          "SRC_HEISE_EPA_ROLLOUT"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025epa_003",
      "clusterId": "gesundheit_epa_2025",
      "category": "Wissenschaft & Technik",
      "type": "singlechoice",
      "question": "Ab welchem Datum wurde die Befüllung der ePA für Leistungserbringer verpflichtend?",
      "options": [
        "29. April 2025",
        "1. Juli 2025",
        "1. Oktober 2025",
        "1. Januar 2026"
      ],
      "answer": "1. Oktober 2025",
      "answerAliases": [
        "1. Oktober 2025"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-10-01",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Rechts-/Umsetzungsdatum als Vertiefung.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMG_EPA_2025",
          "SRC_HEISE_EPA_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2025wirtschaft_minlohn_001",
      "clusterId": "wirtschaft_mindestlohn_2025_2026",
      "category": "Wirtschaft & Finanzen",
      "type": "singlechoice",
      "question": "Wie hoch war der gesetzliche Mindestlohn in Deutschland ab dem 1. Januar 2025?",
      "options": [
        "12,41 Euro",
        "12,82 Euro",
        "13,90 Euro",
        "14,60 Euro"
      ],
      "answer": "12,82 Euro",
      "answerAliases": [
        "12,82 Euro"
      ],
      "difficulty": "leicht",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2025-01-01",
        "classification": "IN_SCOPE"
      },
      "learningContext": "Basiszahl mit Stichtag.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMAS_MINDESTLOHN_2025",
          "SRC_DLF_MINDESTLOHN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    },
    {
      "id": "new2026wirtschaft_minlohn_002",
      "clusterId": "wirtschaft_mindestlohn_2025_2026",
      "category": "Wirtschaft & Finanzen",
      "type": "singlechoice",
      "question": "Auf welchen Betrag stieg der gesetzliche Mindestlohn in Deutschland zum 1. Januar 2026?",
      "options": [
        "12,82 Euro",
        "13,50 Euro",
        "13,90 Euro",
        "14,60 Euro"
      ],
      "answer": "13,90 Euro",
      "answerAliases": [
        "13,90 Euro"
      ],
      "difficulty": "mittel",
      "timeScope": {
        "rangeStart": "2025-05-01",
        "rangeEnd": "2026-05-31",
        "eventDate": "2026-01-01",
        "classification": "IN_SCOPE"
      },
      "learningContext": "2026-Zahl als Aktualisierungsfrage.",
      "evidence": {
        "minimumEvidenceRequired": 2,
        "requiredPattern": "PRIMARY_PLUS_ALLOWED_MEDIA_OR_TWO_ALLOWED_MEDIA",
        "status": "complete",
        "sourceRefs": [
          "SRC_BMAS_MINDESTLOHN_2025",
          "SRC_DLF_MINDESTLOHN_2025"
        ],
        "sourceTierSummary": {
          "hasPrimary": true,
          "allowedMediaCount": 1
        },
        "wikipediaUsed": false,
        "contextUsableForHint": true
      },
      "sourceRisk": "low",
      "productionStatus": "ready"
    }
  ],
  "releaseBlockers": [],
  "hardCorrectionsApplied": {
    "djs2026dp-neu-028": {
      "answer": "wehrhafte Demokratie",
      "finalVersion": "Frage: „Der COMPACT-Fall wurde zum Testfall zwischen Art. 5 GG und welchem demokratischen Schutzkonzept?“ Antwort: „wehrhafte Demokratie“.",
      "productionNote": "Antwortfeld verkürzt; Art. 5 GG deckt Presse-/Meinungsfreiheit bereits ab."
    },
    "djs2026ip-neu-060": {
      "answer": "Vereinigte Arabische Emirate",
      "finalVersion": "Antwort: „Vereinigte Arabische Emirate“.",
      "productionNote": "Antwortfeld auf das gefragte Golf-Land verkürzt."
    },
    "djs2026ip-neu-076": {
      "answer": "Nordirland",
      "finalVersion": "Antwort: „Nordirland“.",
      "productionNote": "Gefragt ist der britische Landesteil, nicht die zu verhindernde harte Grenze."
    },
    "djs2026ip-neu-104": {
      "answer": "Hohe Vertreterin der EU für Außen- und Sicherheitspolitik",
      "finalVersion": "Antwort: „Hohe Vertreterin der EU für Außen- und Sicherheitspolitik“.",
      "productionNote": "Gefragt ist das Amt, nicht die Person Kaja Kallas."
    },
    "djs2026ip-neu-106": {
      "answer": "Europäischer Rat",
      "finalVersion": "Antwort: „Europäischer Rat“.",
      "productionNote": "Gefragt ist die EU-Institution, nicht die Person António Costa."
    },
    "djs2026mc-neu-146": {
      "answer": "Arc de Triomphe",
      "finalVersion": "Antwort: „Arc de Triomphe“.",
      "productionNote": "Gefragt ist das Bauwerk, nicht der Projektname."
    },
    "djs2026mc-neu-148": {
      "answer": "Jaegers Grenze",
      "finalVersion": "Antwort: „Jaegers Grenze“.",
      "productionNote": "Gefragt ist der Reportagetitel."
    },
    "djs2026mc-neu-150": {
      "answer": "Echo-Musikpreis",
      "finalVersion": "Antwort: „Echo“ bzw. „Echo-Musikpreis“.",
      "productionNote": "Gefragt ist der Preisname."
    }
  }
}
```

## 6. Quellenmatrix als Lesefassung

### `SRC_BWL_2025_FINAL`
- **Tier:** `PRIMARY`
- **Publisher:** Bundeswahlleiterin
- **Titel:** Endgültiges Ergebnis der Bundestagswahl 2025
- **URL:** https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html
- **Geprüft am:** 2026-05-13
- **Belegt:** Wahltag 23.02.2025, Wahlbeteiligung 82,5 %, CDU/CSU stärkste Kraft, AfD zweitstärkste Kraft

### `SRC_REUTERS_BTW2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** German election result / CDU-CSU win, AfD second, SPD slump
- **URL:** https://www.reuters.com/graphics/GERMANY-ELECTION/RESULTS/lgpdwkqjzvo/
- **Geprüft am:** 2026-05-13
- **Belegt:** CDU/CSU gewinnt Bundestagswahl 2025, AfD zweitstärkste Kraft, SPD historisch schwach

### `SRC_BUNDESTAG_MERZ_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Deutscher Bundestag
- **Titel:** Friedrich Merz im zweiten Wahlgang zum Bundeskanzler gewählt
- **URL:** https://www.bundestag.de/dokumente/textarchiv/2025/kw19-de-kanzlerwahl-1062470
- **Geprüft am:** 2026-05-13
- **Belegt:** 6. Mai 2025, zweiter Wahlgang, 325 von 618 Stimmen, Kanzlermehrheit 316

### `SRC_REUTERS_MERZ_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Merz elected German chancellor after second vote
- **URL:** https://www.reuters.com/world/europe/merz-fails-be-elected-chancellor-by-german-parliament-2025-05-06/
- **Geprüft am:** 2026-05-13
- **Belegt:** Merz scheitert im ersten Wahlgang, zweiter Wahlgang erfolgreich, 325 Stimmen

### `SRC_BREG_KOALITION_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Bundesregierung
- **Titel:** Koalitionsvertrag 2025: Verantwortung für Deutschland
- **URL:** https://www.bundesregierung.de/breg-de/aktuelles/koalitionsvertrag-2025-2340970
- **Geprüft am:** 2026-05-13
- **Belegt:** Titel Verantwortung für Deutschland, Vorstellung 09.04.2025, Unterzeichnung 05.05.2025

### `SRC_BMF_SVIK_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Bundesfinanzministerium
- **Titel:** Sondervermögen Infrastruktur und Klimaneutralität
- **URL:** https://www.bundesfinanzministerium.de/Content/DE/FAQ/sondervermoegen-infrastruktur-klimaneutralitaet.html
- **Geprüft am:** 2026-05-13
- **Belegt:** Sondervermögen Infrastruktur und Klimaneutralität, 500 Milliarden Euro, Investitionsoffensive

### `SRC_SVIKG_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Gesetze im Internet / BMJ
- **Titel:** Gesetz zur Errichtung eines Sondervermögens Infrastruktur und Klimaneutralität
- **URL:** https://www.gesetze-im-internet.de/svikg/BJNR0E60A0025.html
- **Geprüft am:** 2026-05-13
- **Belegt:** SVIKG, Kreditermächtigung bis 500 Milliarden Euro

### `SRC_BUNDESTAG_GG_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Deutscher Bundestag
- **Titel:** Bundestag beschließt Grundgesetzänderung zu Verteidigung und Infrastruktur
- **URL:** https://www.bundestag.de/dokumente/textarchiv/2025/kw12-de-sondersitzung-1056916
- **Geprüft am:** 2026-05-13
- **Belegt:** Schuldenbremse Art. 109/115 GG, Sondervermögen 500 Milliarden, Verteidigungsausgaben oberhalb Schwelle ausgenommen

### `SRC_DLF_SCHULDENBREMSE_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Deutschlandfunk
- **Titel:** Schuldenbremse und Sondervermögen: Was beschlossen wurde
- **URL:** https://www.deutschlandfunk.de/deutschland-bundeswehr-infrastruktur-schuldenbremse-sondervermoegen-102.html
- **Geprüft am:** 2026-05-13
- **Belegt:** Einordnung Schuldenbremse, Sondervermögen 500 Milliarden, Verteidigungsausgaben

### `SRC_REUTERS_DEBT_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** German upper house OKs debt reform and half-trillion fund
- **URL:** https://www.reuters.com/world/europe/german-upper-house-parliament-oks-debt-reform-half-trillion-fund-2025-03-21/
- **Geprüft am:** 2026-05-13
- **Belegt:** Bundesrat bestätigt Reform, 500-Milliarden-Euro-Fonds, Schuldenbremse-Änderung

### `SRC_BUNDESTAG_DEFENCE_2026`
- **Tier:** `PRIMARY`
- **Publisher:** Deutscher Bundestag
- **Titel:** Etat 2026: Verteidigungsausgaben von 108 Milliarden Euro
- **URL:** https://www.bundestag.de/presse/hib/kurzmeldungen-1106068
- **Geprüft am:** 2026-05-13
- **Belegt:** 108,2 Milliarden Euro Verteidigungsausgaben 2026, 82,69 Milliarden Einzelplan 14, 25,51 Milliarden Sondervermögen Bundeswehr

### `SRC_BREG_DEFENCE_2026`
- **Tier:** `PRIMARY`
- **Publisher:** Bundesregierung
- **Titel:** Bundeshaushalt 2026: Investitionen für die Zukunft
- **URL:** https://www.bundesregierung.de/breg-de/aktuelles/bundeshaushalt-2026-2374030
- **Geprüft am:** 2026-05-13
- **Belegt:** Verteidigungsetat 82,7 Milliarden, 25,5 Milliarden Sonderetat Bundeswehr

### `SRC_REUTERS_DEFENCE_2026`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Highlights of Germany’s 2026 budget
- **URL:** https://www.reuters.com/business/highlights-germanys-2026-budget-2025-11-28/
- **Geprüft am:** 2026-05-13
- **Belegt:** core defence 82.7 billion, total defence funding 108.2 billion

### `SRC_VG_KOELN_AFD_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Verwaltungsgericht Köln
- **Titel:** Stillhaltezusage des BfV im Eilverfahren AfD
- **URL:** https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/05_08052025/index.php
- **Geprüft am:** 2026-05-13
- **Belegt:** 8. Mai 2025 Stillhaltezusage, BfV setzt öffentliche Einstufung vorläufig aus, 2. Mai 2025 Pressemitteilung entfernt

### `SRC_REUTERS_AFD_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** German spy agency ranks far-right AfD as extremist
- **URL:** https://www.reuters.com/world/europe/german-spy-agency-ranks-far-right-afd-extremist-2025-05-02/
- **Geprüft am:** 2026-05-13
- **Belegt:** 2. Mai 2025 Einstufung der AfD als extremistisch, BfV-Begründung laut Bericht

### `SRC_DLF_AFD_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Deutschlandfunk
- **Titel:** Verfassungsschutz stuft gesamte AfD als gesichert rechtsextremistisch ein
- **URL:** https://www.deutschlandfunk.de/verfassungsschutz-stuft-gesamte-afd-als-gesichert-rechtsextremistisch-ein-102.html
- **Geprüft am:** 2026-05-13
- **Belegt:** gesichert rechtsextremistische Bestrebung, 2. Mai 2025, Einordnung Beobachtungsbefugnisse

### `SRC_BVERWG_COMPACT_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Bundesverwaltungsgericht
- **Titel:** Verbot der COMPACT-Magazin GmbH rechtswidrig
- **URL:** https://www.bverwg.de/240625U6A4.24.0
- **Geprüft am:** 2026-05-13
- **Belegt:** 24. Juni 2025, COMPACT-Verbot rechtswidrig, Art. 5 GG, Art. 9 Abs. 2 GG / Vereinsrecht

### `SRC_DLF_AFD_VERBOT_2026`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Deutschlandfunk
- **Titel:** AfD-Verbotsverfahren: Was spricht dafür und was dagegen?
- **URL:** https://www.deutschlandfunk.de/afd-verbot-102.html
- **Geprüft am:** 2026-05-13
- **Belegt:** wehrhafte Demokratie, Parteiverbot als Mittel, aktueller Rechtsstand AfD 2026

### `SRC_BVERFGG_PARTEIVERBOT`
- **Tier:** `PRIMARY`
- **Publisher:** Gesetze im Internet / BMJ
- **Titel:** § 43 BVerfGG: Antrag auf Erklärung der Verfassungswidrigkeit einer Partei
- **URL:** https://www.gesetze-im-internet.de/bverfgg/__43.html
- **Geprüft am:** 2026-05-13
- **Belegt:** Antragsberechtigt: Bundestag, Bundesrat, Bundesregierung, Landesregierung bei Landespartei

### `SRC_BWL_PARTEIVERBOT`
- **Tier:** `PRIMARY`
- **Publisher:** Bundeswahlleiterin
- **Titel:** Glossar: Parteiverbot
- **URL:** https://www.bundeswahlleiterin.de/service/glossar/p/parteiverbot.html
- **Geprüft am:** 2026-05-13
- **Belegt:** Bundesverfassungsgericht entscheidet, Antrag Bundestag/Bundesrat/Bundesregierung

### `SRC_COUNCIL_SAFE_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Rat der Europäischen Union
- **Titel:** SAFE: Council adopts €150 billion boost for joint procurement
- **URL:** https://www.consilium.europa.eu/en/press/press-releases/2025/05/27/safe-council-adopts-150-billion-boost-for-joint-procurement-on-european-security-and-defence/
- **Geprüft am:** 2026-05-13
- **Belegt:** SAFE, Security Action for Europe, 150 Milliarden Euro, 27. Mai 2025, ReArm Europe/Readiness 2030

### `SRC_REUTERS_SAFE_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** EU ministers approve new €150 billion arms fund
- **URL:** https://www.reuters.com/business/aerospace-defense/eu-ministers-approve-new-150-bln-euro-arms-fund-2025-05-27/
- **Geprüft am:** 2026-05-13
- **Belegt:** EU-Verteidigungsfonds SAFE, 150 Milliarden Euro, 27. Mai 2025

### `SRC_COUNCIL_RUSSIA_16_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Rat der Europäischen Union
- **Titel:** 16th package of sanctions against Russia
- **URL:** https://www.consilium.europa.eu/en/press/press-releases/2025/02/24/russia-s-war-of-aggression-against-ukraine-eu-adopts-16th-package-of-economic-and-individual-measures/
- **Geprüft am:** 2026-05-13
- **Belegt:** 16. Sanktionspaket, 24. Februar 2025

### `SRC_COUNCIL_RUSSIA_17_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Rat der Europäischen Union
- **Titel:** 17th package of sanctions against Russia
- **URL:** https://www.consilium.europa.eu/en/press/press-releases/2025/05/20/russia-s-war-of-aggression-against-ukraine-eu-adopts-17th-package-of-economic-and-individual-measures/
- **Geprüft am:** 2026-05-13
- **Belegt:** 17. Sanktionspaket, 20. Mai 2025

### `SRC_EU_AI_ACT_FAQ`
- **Tier:** `PRIMARY`
- **Publisher:** Europäische Kommission
- **Titel:** Navigating the AI Act: FAQ
- **URL:** https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act
- **Geprüft am:** 2026-05-13
- **Belegt:** Verbote ab 2. Februar 2025, GPAI ab 2. August 2025, grundsätzliche Anwendung ab 2. August 2026, Ausnahmen bis 2027

### `SRC_EU_AI_ACT_PAGE`
- **Tier:** `PRIMARY`
- **Publisher:** Europäische Kommission
- **Titel:** AI Act regulatory framework
- **URL:** https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- **Geprüft am:** 2026-05-13
- **Belegt:** AI Act in Kraft 1. August 2024, voll anwendbar grundsätzlich 2. August 2026 mit Ausnahmen, Verbote ab 2. Februar 2025

### `SRC_REUTERS_AI_2026`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** EU countries and lawmakers strike provisional deal on watered-down AI rules
- **URL:** https://www.reuters.com/world/eu-countries-lawmakers-strike-provisional-deal-watered-down-ai-rules-2026-05-07/
- **Geprüft am:** 2026-05-13
- **Belegt:** AI Act Hochrisiko-Regeln politisch volatil, Fristverschiebung/Omnibus-Debatte 2026

### `SRC_EU_MIGRATION_2026`
- **Tier:** `PRIMARY`
- **Publisher:** Europäische Kommission
- **Titel:** Commission reports on progress in implementing the Pact on Migration and Asylum
- **URL:** https://home-affairs.ec.europa.eu/news/commission-reports-progress-implementing-pact-migration-and-asylum-2026-05-08_en
- **Geprüft am:** 2026-05-13
- **Belegt:** Pact entry into application 12 June 2026, 3 Milliarden Euro Unterstützung, Bericht vom 8. Mai 2026

### `SRC_DLF_ASYL_2026`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Deutschlandfunk
- **Titel:** Bundestag beschließt verschärfte Asylregeln für Deutschland
- **URL:** https://www.deutschlandfunk.de/bundestag-beschliesst-verschaerfte-asylregeln-fuer-deutschland-100.html
- **Geprüft am:** 2026-05-13
- **Belegt:** EU-Asylregeln sollen am 12. Juni 2026 in Kraft treten, Umsetzung in Deutschland, Grenzverfahren/Sekundärmigrationszentren

### `SRC_REUTERS_MIGRATION_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** EU countries agree positions on new asylum, migrant returns policy
- **URL:** https://www.reuters.com/world/americas/eu-countries-agree-positions-new-asylum-migrant-returns-policy-2025-12-08/
- **Geprüft am:** 2026-05-13
- **Belegt:** 2026 solidarity pool, 21.000 relocations oder 420 Millionen Euro, Migrations-/Asylreform-Kontext

### `SRC_EU_DEMOCRACY_SHIELD`
- **Tier:** `PRIMARY`
- **Publisher:** Europäische Kommission
- **Titel:** European Democracy Shield
- **URL:** https://commission.europa.eu/topics/democracy/european-democracy-shield_en
- **Geprüft am:** 2026-05-13
- **Belegt:** European Democracy Shield, Schutz demokratischer Prozesse, Desinformation und ausländische Einflussnahme

### `SRC_EU_CLIMATE_2040`
- **Tier:** `PRIMARY`
- **Publisher:** Europäische Kommission
- **Titel:** 2040 climate target / European Climate Law amendment
- **URL:** https://climate.ec.europa.eu/eu-action/european-climate-law/2040-climate-target_en
- **Geprüft am:** 2026-05-13
- **Belegt:** 90 % Netto-THG-Reduktion gegenüber 1990 bis 2040, Vorschlag Juli 2025, spätere Gesetzgebungsentwicklung

### `SRC_REUTERS_CLIMATE_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** EU Commission proposes 90% emissions cut target for 2040
- **URL:** https://www.reuters.com/sustainability/climate-energy/eu-commission-proposes-90-emissions-cut-target-2040-2025-07-02/
- **Geprüft am:** 2026-05-13
- **Belegt:** Kommissionsvorschlag Juli 2025, 90 % Ziel bis 2040, Flexibilitäten/Kohlenstoffgutschriften

### `SRC_COUNCIL_SCHENGEN_BG_RO`
- **Tier:** `PRIMARY`
- **Publisher:** Rat der Europäischen Union
- **Titel:** Council decides to lift land border controls with Bulgaria and Romania
- **URL:** https://www.consilium.europa.eu/en/press/press-releases/2024/12/12/council-decides-to-lift-land-border-controls-with-bulgaria-and-romania/
- **Geprüft am:** 2026-05-13
- **Belegt:** Rumänien und Bulgarien, Landgrenzkontrollen ab 1. Januar 2025 aufgehoben, vollständiger Schengen-Beitritt

### `SRC_EU_SCHENGEN_BG_RO`
- **Tier:** `PRIMARY`
- **Publisher:** Europäische Kommission
- **Titel:** Bulgaria and Romania join the Schengen area fully
- **URL:** https://home-affairs.ec.europa.eu/news/bulgaria-and-romania-join-schengen-area-fully-2025-01-01_en
- **Geprüft am:** 2026-05-13
- **Belegt:** 1. Januar 2025, Rumänien und Bulgarien vollständig im Schengen-Raum

### `SRC_COUNCIL_UKRAINE_90BN`
- **Tier:** `PRIMARY`
- **Publisher:** Rat der Europäischen Union
- **Titel:** Council finalises €90 billion loan for Ukraine
- **URL:** https://www.consilium.europa.eu/en/press/press-releases/2026/04/23/council-finalises-90-billion-loan-for-ukraine/
- **Geprüft am:** 2026-05-13
- **Belegt:** 90 Milliarden Euro Unterstützungskredit, 2026/2027, finalisiert 23. April 2026, im Dezember 2025 beschlossen/vereinbart

### `SRC_REUTERS_UKRAINE_90BN`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** EU envoys agree details of €90 billion loan for Ukraine
- **URL:** https://www.reuters.com/world/eu-envoys-agree-details-90-bln-euro-loan-ukraine-2026-02-04/
- **Geprüft am:** 2026-05-13
- **Belegt:** 90 Milliarden Euro EU-Kredit, Ukraine 2026/2027, Details des Darlehenspakets

### `SRC_EU_SCHUMAN_75`
- **Tier:** `PRIMARY`
- **Publisher:** Europäische Union
- **Titel:** Europe Day 2025 / 75 years of the Schuman Declaration
- **URL:** https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en
- **Geprüft am:** 2026-05-13
- **Belegt:** Schuman-Erklärung 9. Mai 1950, 75 Jahre am 9. Mai 2025

### `SRC_WHITEHOUSE_TRUMP_2025`
- **Tier:** `PRIMARY`
- **Publisher:** White House
- **Titel:** Swearing-In Ceremony of Donald J. Trump as 47th President
- **URL:** https://www.whitehouse.gov/articles/2025/01/swearing-in-ceremony-of-donald-j-trump-47th-president-of-the-united-states/
- **Geprüft am:** 2026-05-13
- **Belegt:** 20. Januar 2025, 47. Präsident der USA

### `SRC_FEDREG_RECIPROCAL_TARIFFS`
- **Tier:** `PRIMARY`
- **Publisher:** Federal Register
- **Titel:** Executive Order 14257: Regulating Imports With a Reciprocal Tariff
- **URL:** https://www.federalregister.gov/documents/2025/04/07/2025-06063/regulating-imports-with-a-reciprocal-tariff-to-rectify-trade-practices-that-contribute-to-large-and
- **Geprüft am:** 2026-05-13
- **Belegt:** 2. April 2025, Reciprocal Tariff, Executive Order 14257

### `SRC_REUTERS_TARIFFS_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Trump unveils global reciprocal tariffs on Liberation Day
- **URL:** https://www.reuters.com/world/us/trump-announce-reciprocal-tariffs-liberation-day-event-2025-04-02/
- **Geprüft am:** 2026-05-13
- **Belegt:** 2. April 2025, Reciprocal tariffs, Liberation Day

### `SRC_VATICAN_FRANCIS_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Vatican News
- **Titel:** Pope Francis has died on Easter Monday aged 88
- **URL:** https://www.vaticannews.va/en/pope/news/2025-04/pope-francis-dies-on-easter-monday-aged-88.html
- **Geprüft am:** 2026-05-13
- **Belegt:** Papst Franziskus gestorben 21. April 2025, Jorge Mario Bergoglio, Vatikan

### `SRC_VATICAN_LEO_XIV_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Vatican News
- **Titel:** Cardinal Robert Francis Prevost elected Pope Leo XIV
- **URL:** https://www.vaticannews.va/en/pope/news/2025-05/cardinal-robert-francis-prevost-elected-pope-leo-xiv.html
- **Geprüft am:** 2026-05-13
- **Belegt:** Robert Francis Prevost, Leo XIV., 8. Mai 2025, erster US-amerikanischer Papst

### `SRC_REUTERS_LEO_XIV_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Cardinal Prevost elected first US pope, taking name Leo XIV
- **URL:** https://www.reuters.com/world/europe/cardinals-elect-new-pope-second-day-conclave-2025-05-08/
- **Geprüft am:** 2026-05-13
- **Belegt:** Leo XIV., Robert Prevost, 8. Mai 2025, erster US-Papst

### `SRC_WHO_PANDEMIC_2025`
- **Tier:** `PRIMARY`
- **Publisher:** World Health Organization
- **Titel:** World Health Assembly adopts historic Pandemic Agreement
- **URL:** https://www.who.int/news/item/20-05-2025-world-health-assembly-adopts-historic-pandemic-agreement-to-make-the-world-more-equitable-and-safer-from-future-pandemics
- **Geprüft am:** 2026-05-13
- **Belegt:** 20. Mai 2025, WHA78, Pandemieabkommen per Konsens angenommen, PABS-Anhang als nächster Schritt

### `SRC_REUTERS_WHO_PANDEMIC_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Landmark global pandemic agreement adopted by WHO members
- **URL:** https://www.gmanetwork.com/news/topstories/world/946746/landmark-global-pandemic-agreement-adopted-by-who-members/story/
- **Geprüft am:** 2026-05-13
- **Belegt:** Reuters-Bericht zur Annahme des WHO-Pandemieabkommens, 20. Mai 2025, 124 Ja-Stimmen im Ausschuss

### `SRC_UNFCCC_COP30_2025`
- **Tier:** `PRIMARY`
- **Publisher:** UNFCCC
- **Titel:** UN Climate Change Conference COP30, Belém, Brazil
- **URL:** https://unfccc.int/cop30
- **Geprüft am:** 2026-05-13
- **Belegt:** COP30 in Belém, Brasilien, 10.–21. November 2025

### `SRC_REUTERS_COP30_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** COP30 / Brazil and Belém coverage
- **URL:** https://www.reuters.com/sustainability/climate-energy/brazil-lays-out-cop30-climate-agenda-amazon-city-belem-2025-03-10/
- **Geprüft am:** 2026-05-13
- **Belegt:** Belém als COP30-Ort, Brasilien/Amazonas-Kontext, Klimakonferenz 2025

### `SRC_UNFCCC_NDC_30`
- **Tier:** `PRIMARY`
- **Publisher:** UN Climate Change
- **Titel:** NDC 3.0 / Nationally Determined Contributions
- **URL:** https://unfccc.int/process-and-meetings/the-paris-agreement/nationally-determined-contributions-ndcs
- **Geprüft am:** 2026-05-13
- **Belegt:** NDCs, nationale Klimaschutzbeiträge, dritte Runde / NDC 3.0

### `SRC_UN80_2025`
- **Tier:** `PRIMARY`
- **Publisher:** United Nations
- **Titel:** High-level meeting to commemorate the eightieth anniversary of the United Nations
- **URL:** https://www.un.org/pga/80/2025/09/19/high-level-meeting-to-commemorate-the-eightieth-anniversary-of-the-united-nations/
- **Geprüft am:** 2026-05-13
- **Belegt:** 22. September 2025, UN80 high-level meeting, UN-Hauptquartier New York

### `SRC_DLF_UN80_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Deutschlandfunk
- **Titel:** New York: 80 Jahre UNO, mit Reden Baerbock und Guterres
- **URL:** https://www.deutschlandfunk.de/new-york-80-jahre-uno-mit-reden-baerbock-und-guterres-100.html
- **Geprüft am:** 2026-05-13
- **Belegt:** 22. September 2025, 80 Jahre UNO in New York, Baerbock/Guterres

### `SRC_UNESCO_UNDP_AI_ELECTIONS`
- **Tier:** `PRIMARY`
- **Publisher:** UNESCO
- **Titel:** UNESCO and UNDP Issue Brief on AI, Freedom of Expression and Elections
- **URL:** https://www.unesco.org/en/articles/new-unesco-undp-issue-brief-highlights-ais-risks-freedom-expression-and-elections-and-proposes
- **Geprüft am:** 2026-05-13
- **Belegt:** UNESCO und UNDP, Issue Brief 2025, KI-Risiken für Wahlen und Meinungsfreiheit

### `SRC_UNDP_AI_ELECTIONS`
- **Tier:** `PRIMARY`
- **Publisher:** UNDP
- **Titel:** Freedom of Expression, Artificial Intelligence and Elections
- **URL:** https://www.undp.org/publications/freedom-expression-artificial-intelligence-and-elections
- **Geprüft am:** 2026-05-13
- **Belegt:** UNDP-Veröffentlichung, 19. Mai 2025, KI, Meinungsfreiheit und Wahlen

### `SRC_UN_SUDAN_2026`
- **Tier:** `PRIMARY`
- **Publisher:** United Nations / OCHA context
- **Titel:** Sudan: world’s largest humanitarian and displacement crisis
- **URL:** https://news.un.org/en/story/2026/04/1162151
- **Geprüft am:** 2026-05-13
- **Belegt:** Sudan 2026, weltgrößte humanitäre Krise, nahezu 34 Millionen Menschen benötigen Hilfe

### `SRC_REUTERS_SUDAN_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Sudan tops IRC crises watchlist
- **URL:** https://www.reuters.com/world/africa/sudan-tops-irc-crises-watchlist-second-year-2024-12-11/
- **Geprüft am:** 2026-05-13
- **Belegt:** Sudan als größte/führende humanitäre Krise im Krisenranking, Kontext 2025/2026

### `SRC_BMAS_MINDESTLOHN_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Bundesministerium für Arbeit und Soziales
- **Titel:** Mindestlohn: gesetzliche Werte 2025/2026/2027
- **URL:** https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Mindestlohn/mindestlohn.html
- **Geprüft am:** 2026-05-13
- **Belegt:** 12,82 Euro ab 1. Januar 2025, 13,90 Euro ab 1. Januar 2026, 14,60 Euro ab 1. Januar 2027

### `SRC_DLF_MINDESTLOHN_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Deutschlandfunk
- **Titel:** Mindestlohn: Wie hoch muss er sein und wer legt das fest?
- **URL:** https://www.deutschlandfunk.de/mindestlohn-erhoehung-mindestlohnkommission-100.html
- **Geprüft am:** 2026-05-13
- **Belegt:** Mindestlohn 12,82 Euro seit 1. Januar 2025, Einordnung Mindestlohnkommission

### `SRC_BMG_EPA_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Bundesministerium für Gesundheit
- **Titel:** Elektronische Patientenakte für alle
- **URL:** https://www.bundesgesundheitsministerium.de/epa-fuer-alle
- **Geprüft am:** 2026-05-13
- **Belegt:** ePA, bundesweiter Rollout 29. April 2025, Pflichtnutzung/Befüllung ab 1. Oktober 2025, Opt-out-Prinzip

### `SRC_HEISE_EPA_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** heise
- **Titel:** Elektronische Patientenakte wird für Ärzte und Apotheker verpflichtend
- **URL:** https://www.heise.de/news/E-Patientenakte-Befuellungspflicht-fuer-Aerzte-Buendnis-erinnert-an-Widerspruch-10673290.html
- **Geprüft am:** 2026-05-13
- **Belegt:** ePA verpflichtend ab 1. Oktober 2025, Ärzte/Psychotherapeuten/Apotheken, Opt-out-Hinweis

### `SRC_HEISE_EPA_ROLLOUT`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** heise
- **Titel:** Elektronische Patientenakte kommt ab 29. April flächendeckend
- **URL:** https://www.heise.de/news/Elektronische-Patientenakte-kommt-ab-29-April-flaechendeckend-10353138.html
- **Geprüft am:** 2026-05-13
- **Belegt:** bundesweiter ePA-Rollout ab 29. April 2025, Sicherheitsfragen, Widerspruchsrate

### `SRC_ENTSOE_BLACKOUT_2026`
- **Tier:** `PRIMARY`
- **Publisher:** ENTSO-E
- **Titel:** Final Report on the 28 April 2025 Iberian Blackout
- **URL:** https://www.entsoe.eu/news/2026/03/20/entso-e-publishes-final-report-on-the-28-april-2025-iberian-blackout/
- **Geprüft am:** 2026-05-13
- **Belegt:** Blackout 28. April 2025, Spanien und Portugal, Final Report 20. März 2026, Oszillationen/Spannung/Blindleistung/Generatorabschaltungen

### `SRC_REUTERS_BLACKOUT_2026`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Spain watchdog highlights voltage instability after 2025 blackout
- **URL:** https://www.reuters.com/business/energy/spains-grid-watchdog-calls-stronger-links-after-blackout-probe-2026-03-20/
- **Geprüft am:** 2026-05-13
- **Belegt:** Iberischer Blackout 2025, Spannungsinstabilität, Regulierungs-/Netzstabilitätsfragen

### `SRC_UEFA_WEURO_2025`
- **Tier:** `PRIMARY`
- **Publisher:** UEFA
- **Titel:** UEFA Women’s EURO 2025: Switzerland, dates, final
- **URL:** https://www.uefa.com/womenseuro/news/029b-1df31b6d1ed3-5b00b4ec0f36-1000--women-s-euro-2025-all-you-need-to-know/
- **Geprüft am:** 2026-05-13
- **Belegt:** 2.–27. Juli 2025, Schweiz, Finale Basel, England Sieger gegen Spanien nach Elfmeterschießen

### `SRC_REUTERS_WEURO_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Women’s EURO 2025 final / England beat Spain
- **URL:** https://www.reuters.com/sports/soccer/england-beat-spain-penalties-win-womens-euro-2025-07-27/
- **Geprüft am:** 2026-05-13
- **Belegt:** England gewinnt Women’s EURO 2025, Finale gegen Spanien, Elfmeterschießen

### `SRC_IOC_MILANO_2026`
- **Tier:** `PRIMARY`
- **Publisher:** IOC
- **Titel:** Milano Cortina 2026 Olympic Winter Games dates
- **URL:** https://olympics.com/en/olympic-games/milano-cortina-2026
- **Geprüft am:** 2026-05-13
- **Belegt:** Olympische Winterspiele 6.–22. Februar 2026, Milano Cortina 2026, Italien

### `SRC_MILANO_CORTINA_2026`
- **Tier:** `PRIMARY`
- **Publisher:** Milano Cortina 2026
- **Titel:** Games facts and figures
- **URL:** https://milanocortina2026.olympics.com/en/games-facts-and-figures
- **Geprüft am:** 2026-05-13
- **Belegt:** über 3.500 Athletinnen und Athleten, 93 Länder, 16 olympische Disziplinen, Ski mountaineering Debüt, Paralympics 6.–15. März 2026

### `SRC_REUTERS_MILANO_2026`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Milano Cortina 2026 opening ceremony / Games coverage
- **URL:** https://www.reuters.com/sports/olympics/milan-cortina-games-open-glitzy-ceremony-san-siro-2026-02-06/
- **Geprüft am:** 2026-05-13
- **Belegt:** Eröffnung am 6. Februar 2026, San Siro/Mailand, Winterspiele 2026

### `SRC_REUTERS_SKIMO_2026`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Oldest winter sport SkiMo finally joins Games, with a twist
- **URL:** https://www.reuters.com/sports/oldest-winter-sport-skimo-finally-joins-games-with-twist-2026-01-22/
- **Geprüft am:** 2026-05-13
- **Belegt:** Ski mountaineering/SkiMo Olympic debut, Milano Cortina 2026, sprint-focused Olympic debut

### `SRC_REUTERS_PARALYMPICS_2026`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters Agency
- **Titel:** Reuters Winter Olympics and Paralympics 2026 coverage dates
- **URL:** https://reutersagency.com/winter-olympics-2026
- **Geprüft am:** 2026-05-13
- **Belegt:** Olympic Games 6–22 February 2026, Paralympic Games 6–15 March 2026

### `SRC_FIFA_CWC_2025`
- **Tier:** `PRIMARY`
- **Publisher:** FIFA
- **Titel:** FIFA Club World Cup 2025 Final: Chelsea beat PSG
- **URL:** https://www.fifa.com/en/tournaments/mens/club-world-cup/usa-2025/articles/chelsea-paris-saint-germain-final-report
- **Geprüft am:** 2026-05-13
- **Belegt:** Chelsea gewinnt Finale 3:0 gegen PSG, 13. Juli 2025, MetLife Stadium, 32 Teams

### `SRC_REUTERS_CWC_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Chelsea crush PSG to win Club World Cup final
- **URL:** https://www.reuters.com/sports/soccer/chelsea-crush-psg-3-0-win-club-world-cup-final-2025-07-13/
- **Geprüft am:** 2026-05-13
- **Belegt:** Chelsea 3:0 PSG, Cole Palmer, Club World Cup final 2025

### `SRC_UEFA_UCL_2025`
- **Tier:** `PRIMARY`
- **Publisher:** UEFA
- **Titel:** UEFA Champions League final 2025: Paris Saint-Germain 5-0 Inter
- **URL:** https://www.uefa.com/uefachampionsleague/news/0299-1df55ceff1a3-56fd6505c3fa-1000--paris-5-0-inter-parisians-make-history-with-first-champions-league-title/
- **Geprüft am:** 2026-05-13
- **Belegt:** 31. Mai 2025, PSG gewinnt Champions League, 5:0 gegen Inter, München

### `SRC_REUTERS_UCL_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Doué dazzles as PSG humble Inter 5-0 to win first European Cup
- **URL:** https://www.reuters.com/sports/soccer/doue-dazzles-psg-humble-inter-5-0-win-champions-league-final-2025-05-31/
- **Geprüft am:** 2026-05-13
- **Belegt:** PSG 5:0 Inter, 31. Mai 2025, Champions-League-Finale in München, erster PSG-Titel

### `SRC_EUROVISION_2025`
- **Tier:** `PRIMARY`
- **Publisher:** Eurovision Song Contest / EBU
- **Titel:** Austria’s JJ wins the Eurovision Song Contest 2025
- **URL:** https://www.eurovision.com/stories/austrias-jj-wins-the-eurovision-song-contest-2025/
- **Geprüft am:** 2026-05-13
- **Belegt:** Austria/JJ gewinnt Eurovision 2025, Wasted Love, 436 Punkte, Basel/St. Jakobshalle, 18. Mai 2025 Veröffentlichung nach Finale

### `SRC_REUTERS_EUROVISION_2025`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Reuters
- **Titel:** Austria wins third Eurovision crown with JJ’s song Wasted Love
- **URL:** https://www.reuters.com/lifestyle/swedens-sauna-song-is-hot-favourite-swiss-eurovision-2025-05-17/
- **Geprüft am:** 2026-05-13
- **Belegt:** Austria wins Eurovision 2025, JJ / Wasted Love, Basel, Israel second

### `SRC_TAGESSPIEGEL_ARC_2021`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Tagesspiegel
- **Titel:** Arc de Triomphe in Paris wird verhüllt: Christos letztes Werk
- **URL:** https://www.tagesspiegel.de/kultur/christos-letztes-werk--posthum-5120674.html
- **Geprüft am:** 2026-05-13
- **Belegt:** Arc de Triomphe verhüllt 2021, Christo/Jeanne-Claude, 18. September bis 3. Oktober 2021

### `SRC_SPIEGEL_RELOTIUS_2018`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** DER SPIEGEL
- **Titel:** Fall Claas Relotius: Antworten auf die wichtigsten Fragen
- **URL:** https://www.spiegel.de/kultur/gesellschaft/fall-claas-relotius-antworten-auf-die-wichtigsten-fragen-a-1244568.html
- **Geprüft am:** 2026-05-13
- **Belegt:** Jaegers Grenze, Juan Moreno deckte Unstimmigkeiten auf, Relotius-Fälschungsskandal

### `SRC_DLF_ECHO_2018`
- **Tier:** `ALLOWED_MEDIA`
- **Publisher:** Deutschlandfunk
- **Titel:** Jurymitglied zum Ende des Echo: Die Entscheidung ist richtig
- **URL:** https://www.deutschlandfunk.de/jurymitglied-zum-ende-des-echo-die-entscheidung-ist-richtig-100.html
- **Geprüft am:** 2026-05-13
- **Belegt:** Echo-Musikpreis abgeschafft, Kontroverse Kollegah/Farid Bang, antisemitisch kritisierte Zeilen

## 7. Vollständiger Rohcheck-Anhang

Der ursprüngliche QA-Rohcheck bleibt im Anhang erhalten, aber die neue Produktionslogik oben überschreibt seine alte Quellenbewertung. Insbesondere gilt: alte Quellenhinweise ohne konkrete, erlaubte Doppelfundierung sind nicht mehr produktionsfähig.

```markdown
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
**Prüfung:** Inhaltlich als Variantenfrage plausibel. Kein Doppelfehler: Die Variante ist gewollt. Strukturell  braucht sie aber eine echte Quellen-/Basisreferenz statt generischer Import-Erklärung.  
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

```