# Quellenkonzept: 3-Ebenen-Modell für DJS-Fragen 2025–2026

## 1. Dreiklang-Struktur

Jede Faktenfrage wird durch eine **dreistufige Quellenprüfung** verifiziert:

### Ebene 1: Primärquellen (Beweis)
**Amtliche/institutionelle Originalquellen** — diese sind *authoritative*, nicht verhandelbar.

| Kategorie | Beispiele | Nutzen |
|-----------|----------|--------|
| **Gesetzgebung** | Bundestagsdrucksachen, Gesetzblattentwürfe, verabschiedete Gesetze | Exakte Wortlaute, Datum Verabschiedung |
| **Gerichte** | BVerfG-Pressemitteilungen (PM-Nr.), Urteilstext, Verkündungsdatum | Urteilsbegründung, genaues Datum |
| **Behörden/Statistik** | Destatis-PM, Bundeswahlleiter-PM, BA-Monatsbericht, Zentralbank-PM | Offizielle Zahlen, Veröffentlichungsdatum |
| **Internationale Org.** | EU-Kommission (Press Release), EZB-Beschluss, WHO-Statement, NATO-Erklärung | Verbindliche Entscheidungen, Zeitstempel |

**Regel:** Jede faktische Aussage (Zahl, Datum, Entscheidung) hat eine Primärquelle oder wird nicht gefragt.

---

### Ebene 2: Institutionelle Quellen (Kontext & Erklärung)
**Sekundäre, aber hochrelevante Institutionen** — Journalismus mit Ressourcen und Fact-Checking-Standards.

| Kategorie | Medium | Besonderheit |
|-----------|--------|-------------|
| **Bundesländer/Kommunen** | Landtags-PM, Stadtratsberichte | Für regionale Spezialfragen |
| **Rundfunk öffentlich** | ARD, ZDF, Deutschlandfunk (Nachrichten) | Redaktionelle Standards, tägl. Aktualisierung |
| **Nachrichtenagenturen** | dpa, Reuters, AP | Multiplex-Verteilung, hochfreqeunt verifiziert |
| **Print-Qualitätsmedien (Leitmedien)** | FAZ, Zeit, Spiegel, Welt, SZ | Recherchestab, Lektorat, Quellenangabe |
| **Spezialmedien** | Handelsblatt (Wirtschaft), Süddeutsche (Investigativ) | Branchenexpertise |

**Regel:** Eine Primärquelle + mind. **eine** Institution aus Ebene 2 = sichere Faktenlage. Ausnahmen: Wenn Primärquelle unmittelbar aus dem Fachmedium zitiert wird (z.B. Statistik-AM direkt im ZDF-Text).

---

### Ebene 3: Journalistische Quellen (Vertrauensbasis)
**Etablierte, reputation-getestete Medien** — für Nachverfolgung, Interpretation, Kontroversen.

#### 🇩🇪 Deutschsprachig (Hard News / Factual Standard)
- **Spiegel** (Investigation, Politik, Wirtschaft)
- **Die Welt** (Politik, Wirtschaft, konservativ-perspektiv)
- **Die Zeit** (Politik, Gesellschaft, Feuilleton)
- **Süddeutsche Zeitung** (Investigativ, Landespolitik, München-Hub)
- **FAZ** (Wirtschaft, Politik, bürgerlich-konservativ)
- **taz** (Linke Perspektive, gesellschaftlich)
- **Deutschlandfunk** (Radio-Journalismus, Hörfunk-Standards)
- **ARD/ZDF** (Öffentlich-rechtliche Fernseh-Standards)
- **dpa** (Agentur, distribuiert an 90 % der dt. Medien)

#### 🌍 International (für deutsche Außenpolitik, EU, Global)
- **Reuters** (Agentur, neutral, hochfrequent)
- **Associated Press (AP)** (Agentur, USA-fokus, global)
- **Guardian** (UK-liberal, international Investigativ)
- **Financial Times** (Wirtschaft, Premium)
- **Economist** (Politische Analyse)
- **Politico** (EU-Fokus, spezialisiert)

#### ⛔ Nicht als Primärquellen für Fragen
- **Blogs, Substack, Newsletter** (keine Redaktion)
- **Social Media (Twitter, TikTok)** (keine Fact-Checking-Pipeline)
- **Wikipedia** (Derivativ, kann aber auf gute Quellen linken)
- **Einzelne Influencer/Blogger**
- **Randmedien ohne Fact-Checking-Stab**

---

## 2. Praktischer Workflow für Fragenentwicklung

### A. Fakt recherchieren
1. **Primärquelle finden:** Bundestag-PM? Bundeswahlleiter-Statement? Destatis-Pressemitteilung?
2. **Datum notieren:** Exakt (Tag.Monat.Jahr) oder nur Monat/Jahr?
3. **Zahl/Name/Status:** Was ist die prüfbare Faktum?

### B. Mit Ebene-2-Medium bestätigen
1. **mindestens ein Medium aus Ebene 2 lesen** (z.B. Reuters-Artikel zu derselben Primärquelle)
2. **Abweichungen prüfen:** Gibt es unterschiedliche Zahlenangaben?
3. **Kontext notieren:** Was schreibt das Medium zu den Hintergründen?

### C. Frage formulieren
**Regel:** Frage zielt auf die **Primärquelle**, nicht auf die Ebene-2-Interpretation.

❌ Falsch: "Wie bewertet der Spiegel die Koalitionsverhandlungen?"  
✅ Richtig: "Mit wieviel % der Mitgliederstimmen billigte die SPD den Koalitionsvertrag 2025?"

### D. Quellenblock in Frage eintragen
```markdown
**Frage:** Mit wieviel % der Mitgliederstimmen billigte die SPD den Koalitionsvertrag 2025?
**Antwort:** 84 % (bei 56 % Beteiligung)
**Primärquelle:** SPD-Parteiinformation, 30.4.2025
**Bestätigung:** Reuters-Bericht 30.4.2025; ZDF-Artikel 30.4.2025
**Tags:** #Koalition #2025 #Bundestag
```

---

## 3. Qualitätsregeln für Quellenangabe

| Regel | Grund | Beispiel |
|-------|-------|---------|
| **Exaktes Datum** | Faktenprüfung im Zeitverlauf | ✅ "30.4.2025" ❌ "April 2025" |
| **Medium + Datum** | Nachverfolgung möglich | ✅ "Reuters, 30.4.2025" ❌ "Reuters" |
| **Zahl = Primärquelle** | Keine Interpretationsketten | ✅ "Destatis PM 16.1.2026: Inflation 2,2 %" ❌ "Der Spiegel berichtet von Inflation" |
| **Link, wenn möglich** | Lesbar machen | URL zu PM oder Artikel (wenn noch online) |
| **Status-Label** | Volatile Themen kennzeichnen | "🔴 *as of 15.5.2026*" für Gaza-Zahlen, AfD/BfV, Ukraine |

---

## 4. Themengebiete & Leitmedien pro Rubrik

| Thema | Lead-Ebene-2-Medium | Spezialist |
|-------|---------------------|-----------|
| **Politik/Wahlen/Bundestag** | dpa, Reuters, ZDF | Spiegel, Welt, Zeit |
| **Gerichte/Recht** | BVerfG-PM, BMJ | Süddeutsche (Rama), taz, FAZ |
| **Wirtschaft/Arbeitsmarkt** | Destatis, BA-PM, BMF | Handelsblatt, FAZ, Reuters |
| **Finanzen/EZB/Börse** | EZB-PM, Bundesbank | FT, Reuters, FAZ |
| **EU/International** | EU-Kommission, Reuters | Politico, Guardian, AP |
| **Klima/Umwelt** | Umweltbundesamt, WHO | Guardian, Reuters, Politico |
| **Technologie/KI** | BMI-Statement, EU-Kommission | Politico, FT, Economist |
| **Gesellschaft/Kultur** | Statistisches Bundesamt | Zeit, Spiegel, taz |

---

## 5. Fehlerprävention — Checkliste vor Frage-Go-Live

- [ ] **Primärquelle vorhanden & verlinkt?**
- [ ] **Datum geprüft?** (nicht "ca.", nicht "vermutlich")
- [ ] **Zahl in mindestens 2 Quellen bestätigt?** (Primär + Ebene-2)
- [ ] **Frage zielt auf Faktum, nicht Interpretation?**
- [ ] **Keine Aktualitätsabhängigkeit?** (Wenn "aktuelle Lage" — Status-Datum setzen)
- [ ] **Sprache präzise?** (keine vagen Wörter wie "sorgt für Diskussion")
- [ ] **Link testet noch?** (URLs vergehen schnell)

---

## 6. Digitale Verwaltung: Quellenregister

Für jede Frage ein Eintrag im Register:

```
ID | Frage-Kurztitel | Primärquelle | Ebene-2-Bestätigung | Datum | Tags | Status
---|---|---|---|---|---|---
Q001 | SPD-Mitgliedervotum Koalition 2025 | SPD-Info 30.4.25 | Reuters, ZDF | 30.4.2025 | #Koalition #Abstimmung | ✅ Live
Q002 | Mindestlohn 2026 | Bundesregierung PM | dpa, FAZ | 1.1.2026 | #Wirtschaft #Arbeitsmarkt | ✅ Live
Q003 | BVerfG Soli-Urteil | BVerfG PM 30/2025 | Spiegel, Zeit | 26.3.2025 | #Steuern #Recht | ✅ Live
```

Dieses Register ermöglicht:
- **Duplicate-Check** (gibt es die Frage schon?)
- **Quellenablauf-Monitoring** (welche URLs sind down?)
- **Medien-Audit** (welche Medien nutzen wir häufig?)

---

## 7. Exception: Volatile oder umstrittene Themen

Für Themen mit **täglichen Änderungen** oder **politischen Streitigkeiten** (z.B. Gaza, Ukraine, AfD/BfV):

- **as_of-Datum setzen** (z.B. "Stand 15.5.2026")
- **Status kennzeichnen:** 🔴 Laufend / ⚠️ Streitig / ✅ Abgeschlossen
- **Mehrere Quellen-Perspektiven:** "Nach Aussage X … (Quelle A); nach Aussage Y … (Quelle B)"
- **Nicht in Basis-Pool aufnehmen**, eher als "Kontextfrage" mit Hinweis "Dieser Sachverhalt ist volatil"

---

## Zusammenfassung

**Das Dreiklang-Modell arbeitet so:**
1. **Primär** = Beweis (Fakten sind hier nicht verhandelbar)
2. **Institutionell** = Bestätigung (breite Verifizierung durch etablierte Journalismus)
3. **Journalistisch** = Vertrauensbasis (wer darf zitiert werden?)

**Für DJS-Fragen gilt:**
- Jede Zahl/Datum/Name hat eine Primärquelle.
- Mindestens ein Ebene-2-Medium bestätigt.
- Frage stellt nur Fakten, keine Interpretationen.
- Status und Volatilität sind dokumentiert.

**Resultat:** Quellen sind transparent, nachprüfbar und zukunftssicher.
