# BILDERTEST 2026 – Quellen & Bildquellen für Code

**Stand:** 13. Mai 2026
**Basis:** `BILDERTEST_2026_SEED_10_RUNDEN.json`
**Ziel:** Arbeitsdatei für Claude Code / App-v1.3: pro Bildertest-Item eine inhaltliche Quellenbasis und direkte Bildquellen-Recherchelinks.

---

## 0. Wichtige Transparenz

- Diese Datei liefert **Faktquellen** und **lizenzorientierte Bildquellen-Kandidaten**, aber ersetzt keine finale Bildrechteprüfung.
- **Wikimedia Commons** ist die beste erste Anlaufstelle, weil fast alle Inhalte frei weiterverwendbar sind, aber nur unter den Bedingungen der konkreten Datei: Autor, Lizenz, Lizenzlink und ggf. Share-Alike müssen übernommen werden.
- Die Links `commonsSearchUrl` und `commonsApiUrl` sind absichtlich direkte Arbeitslinks für Code/Claude Code. Sie liefern Kandidaten; die App darf ein Bild erst übernehmen, wenn eine konkrete File-Seite samt Lizenz/Urheber gespeichert wurde.
- **Nicht automatisch nutzen:** Reuters/AP/dpa/Getty/AFP/BBC/Tagesschau-Fotos. Diese sind oft gute Faktquellen, aber normalerweise nicht frei als App-Bild nutzbar.
- **Offizielle Regierungs-/Institutionenbilder** sind nicht automatisch frei. Bundesregierung, Bundestag, NATO, EU, UN, NASA, White House usw. jeweils einzeln prüfen.

---

## 1. Empfohlener Low-Level-Workflow für dich / Claude Code

1. Für jedes Item zuerst `commonsSearchUrl` öffnen.
2. Geeignetes Bild wählen: klare Person/erkennbares Ereignis, nicht zu alt, nicht irreführend.
3. File-Seite öffnen und prüfen: Lizenz, Autor/Fotograf, Quelle, Bearbeitungsrechte, Namensnennung.
4. Wenn okay: Bild lokal speichern unter `localPathSuggestion`.
5. In der finalen JSON später ergänzen: `imageUrl`, `imageFilePage`, `imageCredit`, `imageLicense`, `imageLicenseUrl`, `imageAuthor`, `imageSourceStatus: VERIFIED_FREE_OR_PD`.
6. Wenn keine freie Quelle gefunden wird: Platzhalterbild nutzen und Item als `NO_FREE_IMAGE_YET` markieren.

### Code-Hinweis: Wikimedia API

Die `commonsApiUrl` kann Claude Code/fetch nutzen. Wichtig ist `iiprop=url|extmetadata`, weil darüber Bild-URL, Lizenz, Autor, Credit und Lizenzlink ausgelesen werden können.

```ts
type VerifiedImage = {
  imageUrl: string;
  imageFilePage: string;
  imageCredit: string;
  imageAuthor: string;
  imageLicense: string;
  imageLicenseUrl: string;
  imageSourceStatus: "VERIFIED_FREE_OR_PD" | "NO_FREE_IMAGE_YET" | "NEEDS_MANUAL_REVIEW";
};
```

---

## 2. Direkte Projektanweisung für Claude Code

```md
TASK: Bildertest-Quellen- und Bildworkflow vorbereiten

1. Lege eine neue Datei `app/src/data/bildertestImageSources.json` an.
2. Überführe die unten stehenden Items in JSON-Struktur.
3. Nutze `commonsApiUrl`, um pro Item 3–5 Bildkandidaten aus Wikimedia Commons abzurufen.
4. Zeige in einem internen Review-Screen pro Kandidat: Thumbnail, FilePage, Author, License, Credit, LicenseUrl.
5. Kein Bild automatisch als final übernehmen.
6. Erst nach manueller Bestätigung lokal speichern in `app/public/bildertest/2026/...`.
7. Falls keine freie Quelle gefunden wird: Item behalten, aber `imageSourceStatus = "NO_FREE_IMAGE_YET"`.
```

---

## R01 – Deutsche Bundesregierung & Machtwechsel

**Fokus:** Amt, Gesicht, Ministerium, Regierungsstart 2025/26

### bt26-r01-01 — Friedrich Merz

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `sehr hoch`
- **Frage/Prompt:** Wer ist das – und was war am Start seiner Kanzlerschaft historisch ungewöhnlich?
- **Richtige Antwort:** Friedrich Merz
- **Akzeptierte Antworten:** Friedrich Merz
- **Rolle/Label:** Bundeskanzler
- **Kontext:** Bundeskanzler seit 6. Mai 2025; im ersten Wahlgang gescheitert, dann im zweiten Wahlgang gewählt.
- **Zeitraum/Datum:** 6. Mai 2025
- **Kategorie:** Deutsche Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundestag.de/dokumente/textarchiv/2025/kw19-de-kanzlerwahl-1062470
2. https://www.bundestag.de/dokumente/textarchiv/2025/kw19-de-kanzlerwahl-vereidigung-1063890
3. https://www.reuters.com/world/europe/merz-elected-german-chancellor-after-initial-shock-defeat-2025-05-06/
4. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
5. https://www.bundestag.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Friedrich Merz`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Friedrich+Merz&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Friedrich%20Merz&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Friedrich+Merz
- `openverseSearchUrl`: https://openverse.org/search/image?q=Friedrich+Merz
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `localPathSuggestion`: `/bildertest/2026/r01/friedrich-merz.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r01-02 — Lars Klingbeil

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welche Doppelrolle prägt seine Sichtbarkeit in der Regierung?
- **Richtige Antwort:** Lars Klingbeil
- **Akzeptierte Antworten:** Lars Klingbeil
- **Rolle/Label:** SPD-Spitzenpolitiker / Regierungsmitglied
- **Kontext:** SPD-Spitzenpolitiker, Vizekanzler/Finanzressort und zentrale Figur der schwarz-roten Koalition.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Deutsche Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
2. https://www.bundestag.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Lars Klingbeil`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Lars+Klingbeil&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Lars%20Klingbeil&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Lars+Klingbeil
- `openverseSearchUrl`: https://openverse.org/search/image?q=Lars+Klingbeil
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `localPathSuggestion`: `/bildertest/2026/r01/lars-klingbeil.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r01-03 — Katherina Reiche

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welches Schlüsselministerium übernahm sie 2025?
- **Richtige Antwort:** Katherina Reiche
- **Akzeptierte Antworten:** Katherina Reiche
- **Rolle/Label:** Bundeswirtschaftsministerin
- **Kontext:** CDU-Politikerin und Bundeswirtschaftsministerin; wichtig für Energie-, Industrie- und Standortpolitik.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Deutsche Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
2. https://www.bundestag.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Katherina Reiche`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Katherina+Reiche&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Katherina%20Reiche&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Katherina+Reiche
- `openverseSearchUrl`: https://openverse.org/search/image?q=Katherina+Reiche
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `localPathSuggestion`: `/bildertest/2026/r01/katherina-reiche.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r01-04 — Alexander Dobrindt

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und mit welchem Ressort ist er 2025/26 verbunden?
- **Richtige Antwort:** Alexander Dobrindt
- **Akzeptierte Antworten:** Alexander Dobrindt
- **Rolle/Label:** Bundesinnenminister
- **Kontext:** CSU-Politiker; als Innenminister relevant für Migration, Sicherheit und Verfassungsschutzdebatten.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Deutsche Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
2. https://www.bundestag.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Alexander Dobrindt`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Alexander+Dobrindt&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Alexander%20Dobrindt&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Alexander+Dobrindt
- `openverseSearchUrl`: https://openverse.org/search/image?q=Alexander+Dobrindt
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `localPathSuggestion`: `/bildertest/2026/r01/alexander-dobrindt.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r01-05 — Karin Prien

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum ist ihr Ressort für DJS-Themen interessant?
- **Richtige Antwort:** Karin Prien
- **Akzeptierte Antworten:** Karin Prien
- **Rolle/Label:** Bundesministerin Bildung/Familie
- **Kontext:** Bundesministerin für Bildung, Familie, Senioren, Frauen und Jugend; Bildung/Familie als gesellschaftspolitische Querschnittsthemen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Deutsche Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
2. https://www.bundestag.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Karin Prien`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Karin+Prien&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Karin%20Prien&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Karin+Prien
- `openverseSearchUrl`: https://openverse.org/search/image?q=Karin+Prien
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `localPathSuggestion`: `/bildertest/2026/r01/karin-prien.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r01-06 — Bärbel Bas

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welche Rolle hatte sie vor der Bundesregierung?
- **Richtige Antwort:** Bärbel Bas
- **Akzeptierte Antworten:** Bärbel Bas
- **Rolle/Label:** SPD-Politikerin / frühere Bundestagspräsidentin
- **Kontext:** SPD-Politikerin; zuvor Bundestagspräsidentin, danach prominente Regierungsfunktion in der schwarz-roten Bundesregierung.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Deutsche Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
2. https://www.bundestag.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Bärbel Bas`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=B%C3%A4rbel+Bas&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=B%C3%A4rbel%20Bas&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=B%C3%A4rbel+Bas
- `openverseSearchUrl`: https://openverse.org/search/image?q=B%C3%A4rbel+Bas
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `localPathSuggestion`: `/bildertest/2026/r01/b-rbel-bas.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r01-07 — Johann Wadephul

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum gehört er in eine Außenpolitik-Runde?
- **Richtige Antwort:** Johann Wadephul
- **Akzeptierte Antworten:** Johann Wadephul
- **Rolle/Label:** Außenpolitik / Bundesregierung
- **Kontext:** CDU-Außenpolitiker; als Außenminister/außenpolitische Spitzenfigur wichtig für Ukraine, EU und NATO.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Deutsche Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
2. https://www.bundestag.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Johann Wadephul`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Johann+Wadephul&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Johann%20Wadephul&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Johann+Wadephul
- `openverseSearchUrl`: https://openverse.org/search/image?q=Johann+Wadephul
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `localPathSuggestion`: `/bildertest/2026/r01/johann-wadephul.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r01-08 — Boris Pistorius

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und warum blieb er auch nach dem Regierungswechsel relevant?
- **Richtige Antwort:** Boris Pistorius
- **Akzeptierte Antworten:** Boris Pistorius
- **Rolle/Label:** Verteidigungspolitiker
- **Kontext:** Verteidigungspolitiker; zentrale Figur bei Bundeswehr, Ukraine-Hilfe, Wehrdienst und Litauen-Brigade.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Deutsche Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
2. https://www.bundestag.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Boris Pistorius`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Boris+Pistorius&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Boris%20Pistorius&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Boris+Pistorius
- `openverseSearchUrl`: https://openverse.org/search/image?q=Boris+Pistorius
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `localPathSuggestion`: `/bildertest/2026/r01/boris-pistorius.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r01-09 — Kanzlerwahl im Bundestag 2025

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welches politische Ereignis zeigt dieses Bild – und warum war es historisch?
- **Richtige Antwort:** Kanzlerwahl im Bundestag 2025
- **Akzeptierte Antworten:** Kanzlerwahl im Bundestag 2025
- **Rolle/Label:** 
- **Kontext:** Friedrich Merz scheiterte zunächst im ersten Wahlgang und wurde erst im zweiten Wahlgang zum Bundeskanzler gewählt.
- **Zeitraum/Datum:** 6. Mai 2025
- **Kategorie:** Deutsche Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundestag.de/dokumente/textarchiv/2025/kw19-de-kanzlerwahl-1062470
2. https://www.bundestag.de/resource/blob/1065078/amtpr21002.pdf
3. https://www.reuters.com/world/europe/merz-elected-german-chancellor-after-initial-shock-defeat-2025-05-06/
4. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
5. https://www.bundestag.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Friedrich Merz Kanzlerwahl Bundestag 6 Mai 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Friedrich+Merz+Kanzlerwahl+Bundestag+6+Mai+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Friedrich%20Merz%20Kanzlerwahl%20Bundestag%206%20Mai%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Friedrich+Merz+Kanzlerwahl+Bundestag+6+Mai+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Friedrich+Merz+Kanzlerwahl+Bundestag+6+Mai+2025
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `localPathSuggestion`: `/bildertest/2026/r01/kanzlerwahl-im-bundestag-2025.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r01-10 — Bundeskabinett Merz

- **Typ:** `event`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Was zeigt dieses Gruppenfoto – und welche Koalition steht dahinter?
- **Richtige Antwort:** Bundeskabinett Merz
- **Akzeptierte Antworten:** Bundeskabinett Merz
- **Rolle/Label:** 
- **Kontext:** Das Bundeskabinett der schwarz-roten Bundesregierung unter Friedrich Merz.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Deutsche Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
2. https://www.bundestag.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Bundeskabinett Merz 2025 Gruppenfoto`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Bundeskabinett+Merz+2025+Gruppenfoto&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Bundeskabinett%20Merz%202025%20Gruppenfoto&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Bundeskabinett+Merz+2025+Gruppenfoto
- `openverseSearchUrl`: https://openverse.org/search/image?q=Bundeskabinett+Merz+2025+Gruppenfoto
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `localPathSuggestion`: `/bildertest/2026/r01/bundeskabinett-merz.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r01-11 — Sondervermögen Infrastruktur und Klimaneutralität

- **Typ:** `event`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wofür steht dieses politische Bild/Symbol – und welche Größenordnung war zentral?
- **Richtige Antwort:** Sondervermögen Infrastruktur und Klimaneutralität
- **Akzeptierte Antworten:** Sondervermögen Infrastruktur und Klimaneutralität
- **Rolle/Label:** 
- **Kontext:** 2025 beschloss Deutschland ein Sondervermögen von bis zu 500 Milliarden Euro für Infrastruktur und Klimaneutralität.
- **Zeitraum/Datum:** März 2025
- **Kategorie:** Deutsche Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundestag.de/presse/hib/kurzmeldungen-1057342
2. https://www.bundestag.de/dokumente/textarchiv/sondervermoegen-doku-1106000
3. https://www.bundestag.de/
4. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Sondervermögen Infrastruktur Klimaneutralität Bundestag 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Sonderverm%C3%B6gen+Infrastruktur+Klimaneutralit%C3%A4t+Bundestag+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Sonderverm%C3%B6gen%20Infrastruktur%20Klimaneutralit%C3%A4t%20Bundestag%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Sonderverm%C3%B6gen+Infrastruktur+Klimaneutralit%C3%A4t+Bundestag+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Sonderverm%C3%B6gen+Infrastruktur+Klimaneutralit%C3%A4t+Bundestag+2025
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `localPathSuggestion`: `/bildertest/2026/r01/sonderverm-gen-infrastruktur-und-klimaneutralit-t.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r01-12 — Brigade Litauen der Bundeswehr

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Was zeigt dieses militärpolitische Ereignis – und warum ist es historisch?
- **Richtige Antwort:** Brigade Litauen der Bundeswehr
- **Akzeptierte Antworten:** Brigade Litauen der Bundeswehr
- **Rolle/Label:** 
- **Kontext:** Dauerhafte Stationierung einer deutschen Brigade in Litauen als Zeichen der NATO-Ostflankenverteidigung.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Sicherheitspolitik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bundeswehr.de/de/organisation/heer/struktur/10-panzerdivision/panzerbrigade-45
2. https://www.bundeswehr.de/de/mediathek/aufstellungsappell-panzerbrigade-45-litauen-5944022
3. https://www.bundeswehr.de/
4. https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
5. https://www.bundestag.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Panzerbrigade 45 Litauen Aufstellungsappell Vilnius 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Panzerbrigade+45+Litauen+Aufstellungsappell+Vilnius+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Panzerbrigade%2045%20Litauen%20Aufstellungsappell%20Vilnius%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Panzerbrigade+45+Litauen+Aufstellungsappell+Vilnius+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Panzerbrigade+45+Litauen+Aufstellungsappell+Vilnius+2025
- `officialImageHint`: https://www.bundesregierung.de/breg-de/bundesregierung/bundeskabinett
- `officialImageHint`: https://www.bundeswehr.de/de/mediathek/aufstellungsappell-panzerbrigade-45-litauen-5944022
- `localPathSuggestion`: `/bildertest/2026/r01/brigade-litauen-der-bundeswehr.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

## R02 – Demokratie, Rechtsextremismus & Rechtsstaat

**Fokus:** Bilder, bei denen Name + juristische Einordnung zählen

### bt26-r02-01 — Alice Weidel

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und in welchem Parteikontext taucht sie 2025/26 ständig auf?
- **Richtige Antwort:** Alice Weidel
- **Akzeptierte Antworten:** Alice Weidel
- **Rolle/Label:** AfD-Bundessprecherin
- **Kontext:** AfD-Bundessprecherin und zentrale Figur bei Debatten über Verfassungsschutz, Parteiensystem und Rechtsextremismus.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Demokratie/Recht

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.afd.de/
2. https://www.bverwg.de/
3. https://www.verfassungsschutz.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Alice Weidel`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Alice+Weidel&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Alice%20Weidel&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Alice+Weidel
- `openverseSearchUrl`: https://openverse.org/search/image?q=Alice+Weidel
- `localPathSuggestion`: `/bildertest/2026/r02/alice-weidel.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r02-02 — Tino Chrupalla

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und mit welcher Partei ist er verbunden?
- **Richtige Antwort:** Tino Chrupalla
- **Akzeptierte Antworten:** Tino Chrupalla
- **Rolle/Label:** AfD-Bundessprecher
- **Kontext:** AfD-Bundessprecher; zusammen mit Alice Weidel regelmäßig in Berichten über AfD und Verfassungsschutz.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Demokratie/Recht

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.afd.de/
2. https://www.bverwg.de/
3. https://www.verfassungsschutz.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Tino Chrupalla`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Tino+Chrupalla&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Tino%20Chrupalla&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Tino+Chrupalla
- `openverseSearchUrl`: https://openverse.org/search/image?q=Tino+Chrupalla
- `localPathSuggestion`: `/bildertest/2026/r02/tino-chrupalla.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r02-03 — Sahra Wagenknecht

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und warum blieb ihr Bündnis 2025/26 relevant?
- **Richtige Antwort:** Sahra Wagenknecht
- **Akzeptierte Antworten:** Sahra Wagenknecht
- **Rolle/Label:** BSW-Politikerin
- **Kontext:** Gründerin/führende Figur des BSW; relevant für Koalitionsbildung, Ostdeutschland und neue Parteistrukturen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Parteien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://bsw-vg.de/
2. https://www.bverwg.de/
3. https://www.verfassungsschutz.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Sahra Wagenknecht`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Sahra+Wagenknecht&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Sahra%20Wagenknecht&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Sahra+Wagenknecht
- `openverseSearchUrl`: https://openverse.org/search/image?q=Sahra+Wagenknecht
- `localPathSuggestion`: `/bildertest/2026/r02/sahra-wagenknecht.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r02-04 — Heidi Reichinnek

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und wofür steht sie im Parteienspektrum?
- **Richtige Antwort:** Heidi Reichinnek
- **Akzeptierte Antworten:** Heidi Reichinnek
- **Rolle/Label:** Die Linke / politische Kommunikation
- **Kontext:** Linke-Politikerin mit hoher Social-Media-Sichtbarkeit; geeignet für junge politische Kommunikation und Linke-Aufschwung-Fragen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Parteien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.die-linke.de/
2. https://www.bverwg.de/
3. https://www.verfassungsschutz.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Heidi Reichinnek`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Heidi+Reichinnek&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Heidi%20Reichinnek&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Heidi+Reichinnek
- `openverseSearchUrl`: https://openverse.org/search/image?q=Heidi+Reichinnek
- `localPathSuggestion`: `/bildertest/2026/r02/heidi-reichinnek.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r02-05 — Jürgen Elsässer

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welches Verfahren machte ihn 2025 wieder relevant?
- **Richtige Antwort:** Jürgen Elsässer
- **Akzeptierte Antworten:** Jürgen Elsässer
- **Rolle/Label:** COMPACT-Verleger
- **Kontext:** Chefredakteur/Verleger von COMPACT; das Bundesverwaltungsgericht hob 2025 das COMPACT-Verbot auf.
- **Zeitraum/Datum:** 24. Juni 2025
- **Kategorie:** Medien/Recht

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bverwg.de/de/pm/2025/48
2. https://www.bverwg.de/
3. https://www.verfassungsschutz.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Jürgen Elsässer`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=J%C3%BCrgen+Els%C3%A4sser&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=J%C3%BCrgen%20Els%C3%A4sser&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=J%C3%BCrgen+Els%C3%A4sser
- `openverseSearchUrl`: https://openverse.org/search/image?q=J%C3%BCrgen+Els%C3%A4sser
- `localPathSuggestion`: `/bildertest/2026/r02/j-rgen-els-sser.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r02-06 — Ekrem İmamoğlu

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und warum löste seine Verhaftung Proteste aus?
- **Richtige Antwort:** Ekrem İmamoğlu
- **Akzeptierte Antworten:** Ekrem İmamoğlu
- **Rolle/Label:** Istanbul/CHP-Opposition
- **Kontext:** Istanbuler Oppositionspolitiker; seine Inhaftierung 2025 löste große Proteste gegen Erdoğan aus.
- **Zeitraum/Datum:** März 2025
- **Kategorie:** Internationale Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/middle-east/turkey-jails-istanbul-mayor-before-trial-stoking-opposition-2025-03-23/
2. https://www.bverwg.de/
3. https://www.verfassungsschutz.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Ekrem İmamoğlu`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Ekrem+%C4%B0mamo%C4%9Flu&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Ekrem%20%C4%B0mamo%C4%9Flu&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Ekrem+%C4%B0mamo%C4%9Flu
- `openverseSearchUrl`: https://openverse.org/search/image?q=Ekrem+%C4%B0mamo%C4%9Flu
- `localPathSuggestion`: `/bildertest/2026/r02/ekrem-i-mamo-lu.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r02-07 — Yoon Suk Yeol

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und mit welchem Demokratie-Schock wird er verbunden?
- **Richtige Antwort:** Yoon Suk Yeol
- **Akzeptierte Antworten:** Yoon Suk Yeol
- **Rolle/Label:** Südkorea / Kriegsrecht
- **Kontext:** Südkoreas Präsident, der Ende 2024 kurzzeitig Kriegsrecht ausrief; 2025/26 weiterhin juristisch-politisch relevant.
- **Zeitraum/Datum:** 2024/25
- **Kategorie:** Internationale Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/
2. https://www.bverwg.de/
3. https://www.verfassungsschutz.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Yoon Suk Yeol`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Yoon+Suk+Yeol&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Yoon%20Suk%20Yeol&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Yoon+Suk+Yeol
- `openverseSearchUrl`: https://openverse.org/search/image?q=Yoon+Suk+Yeol
- `localPathSuggestion`: `/bildertest/2026/r02/yoon-suk-yeol.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r02-08 — Gisèle Pelicot

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum wurde ihr Prozess europaweit zum Symbol?
- **Richtige Antwort:** Gisèle Pelicot
- **Akzeptierte Antworten:** Gisèle Pelicot
- **Rolle/Label:** Pelicot-Prozess / sexualisierte Gewalt
- **Kontext:** Französin, deren öffentlich geführter Prozess zu sexualisierter Gewalt Debatten über Scham, Täter und Öffentlichkeit auslöste.
- **Zeitraum/Datum:** 2024/25
- **Kategorie:** Gesellschaft/Recht

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bbc.com/news/topics/cn5r655kyvlt
2. https://www.bverwg.de/
3. https://www.verfassungsschutz.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Gisèle Pelicot`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Gis%C3%A8le+Pelicot&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Gis%C3%A8le%20Pelicot&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Gis%C3%A8le+Pelicot
- `openverseSearchUrl`: https://openverse.org/search/image?q=Gis%C3%A8le+Pelicot
- `localPathSuggestion`: `/bildertest/2026/r02/gis-le-pelicot.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r02-09 — COMPACT-Urteil des Bundesverwaltungsgerichts

- **Typ:** `event`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welches medienrechtliche Ereignis zeigt dieses Bild – und was entschied das Gericht?
- **Richtige Antwort:** COMPACT-Urteil des Bundesverwaltungsgerichts
- **Akzeptierte Antworten:** COMPACT-Urteil des Bundesverwaltungsgerichts
- **Rolle/Label:** 
- **Kontext:** Das Bundesverwaltungsgericht hob am 24. Juni 2025 das COMPACT-Verbot als rechtswidrig auf.
- **Zeitraum/Datum:** 24. Juni 2025
- **Kategorie:** Medien/Recht

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bverwg.de/de/pm/2025/48
2. https://www.bverwg.de/
3. https://www.verfassungsschutz.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `COMPACT Magazin Bundesverwaltungsgericht 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=COMPACT+Magazin+Bundesverwaltungsgericht+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=COMPACT%20Magazin%20Bundesverwaltungsgericht%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=COMPACT+Magazin+Bundesverwaltungsgericht+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=COMPACT+Magazin+Bundesverwaltungsgericht+2025
- `localPathSuggestion`: `/bildertest/2026/r02/compact-urteil-des-bundesverwaltungsgerichts.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r02-10 — AfD und Verfassungsschutz

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welche politische Debatte könnte dieses Bild symbolisieren?
- **Richtige Antwort:** AfD und Verfassungsschutz
- **Akzeptierte Antworten:** AfD und Verfassungsschutz
- **Rolle/Label:** 
- **Kontext:** Die Einstufung/Beobachtung der AfD durch den Verfassungsschutz und die juristischen Folgen waren 2025/26 Dauerthema.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Demokratie/Recht

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.verfassungsschutz.de/
2. https://www.bverwg.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `AfD Verfassungsschutz 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=AfD+Verfassungsschutz+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=AfD%20Verfassungsschutz%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=AfD+Verfassungsschutz+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=AfD+Verfassungsschutz+2025
- `localPathSuggestion`: `/bildertest/2026/r02/afd-und-verfassungsschutz.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r02-11 — Türkei-Proteste nach İmamoğlu-Verhaftung

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Was ist hier zu sehen – und welcher politische Konflikt steckt dahinter?
- **Richtige Antwort:** Türkei-Proteste nach İmamoğlu-Verhaftung
- **Akzeptierte Antworten:** Türkei-Proteste nach İmamoğlu-Verhaftung
- **Rolle/Label:** 
- **Kontext:** Proteste gegen die Inhaftierung des Istanbuler Bürgermeisters und Erdoğan-Rivalen Ekrem İmamoğlu.
- **Zeitraum/Datum:** März 2025
- **Kategorie:** Internationale Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/middle-east/turkey-jails-istanbul-mayor-before-trial-stoking-opposition-2025-03-23/
2. https://www.bverwg.de/
3. https://www.verfassungsschutz.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Ekrem Imamoglu protests Istanbul 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Ekrem+Imamoglu+protests+Istanbul+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Ekrem%20Imamoglu%20protests%20Istanbul%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Ekrem+Imamoglu+protests+Istanbul+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Ekrem+Imamoglu+protests+Istanbul+2025
- `localPathSuggestion`: `/bildertest/2026/r02/t-rkei-proteste-nach-i-mamo-lu-verhaftung.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r02-12 — Südkorea-Kriegsrecht-Krise

- **Typ:** `event`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Welches demokratische Krisenereignis könnte dieses Parlamentsbild zeigen?
- **Richtige Antwort:** Südkorea-Kriegsrecht-Krise
- **Akzeptierte Antworten:** Südkorea-Kriegsrecht-Krise
- **Rolle/Label:** 
- **Kontext:** Das Parlament stoppte Ende 2024 Yoons Kriegsrecht; die Krise blieb 2025/26 ein Lehrstück institutioneller Resilienz.
- **Zeitraum/Datum:** 2024/25
- **Kategorie:** Internationale Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.bbc.com/news/topics/c302m85q5vnt
2. https://www.bverwg.de/
3. https://www.verfassungsschutz.de/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Yoon Suk Yeol martial law South Korea 2024 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Yoon+Suk+Yeol+martial+law+South+Korea+2024+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Yoon%20Suk%20Yeol%20martial%20law%20South%20Korea%202024%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Yoon+Suk+Yeol+martial+law+South+Korea+2024+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Yoon+Suk+Yeol+martial+law+South+Korea+2024+2025
- `localPathSuggestion`: `/bildertest/2026/r02/s-dkorea-kriegsrecht-krise.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

## R03 – EU, NATO & europäische Sicherheit

**Fokus:** Institutionen erkennen: Kommission, Rat, NATO, EU-Außenpolitik

### bt26-r03-01 — Ursula von der Leyen

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welche Institution führt sie?
- **Richtige Antwort:** Ursula von der Leyen
- **Akzeptierte Antworten:** Ursula von der Leyen
- **Rolle/Label:** EU-Kommissionspräsidentin
- **Kontext:** Präsidentin der Europäischen Kommission; zentral bei Clean Industrial Deal, Verteidigung, Ukraine und Demokratiepaketen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://commission.europa.eu/
2. https://www.consilium.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Ursula von der Leyen`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Ursula+von+der+Leyen&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Ursula%20von%20der%20Leyen&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Ursula+von+der+Leyen
- `openverseSearchUrl`: https://openverse.org/search/image?q=Ursula+von+der+Leyen
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=Ursula+von+der+Leyen
- `localPathSuggestion`: `/bildertest/2026/r03/ursula-von-der-leyen.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r03-02 — Kaja Kallas

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `sehr hoch`
- **Frage/Prompt:** Wer ist das – und welches EU-Amt hat sie seit Dezember 2024?
- **Richtige Antwort:** Kaja Kallas
- **Akzeptierte Antworten:** Kaja Kallas
- **Rolle/Label:** EU-Außenbeauftragte
- **Kontext:** Hohe Vertreterin der EU für Außen- und Sicherheitspolitik und Vizepräsidentin der Kommission.
- **Zeitraum/Datum:** seit 1. Dezember 2024
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://commission.europa.eu/about/organisation/college-commissioners/kaja-kallas_en
2. https://commission.europa.eu/
3. https://www.consilium.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Kaja Kallas`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Kaja+Kallas&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Kaja%20Kallas&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Kaja+Kallas
- `openverseSearchUrl`: https://openverse.org/search/image?q=Kaja+Kallas
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=Kaja+Kallas
- `localPathSuggestion`: `/bildertest/2026/r03/kaja-kallas.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r03-03 — António Costa

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welche EU-Institution leitet er?
- **Richtige Antwort:** António Costa
- **Akzeptierte Antworten:** António Costa
- **Rolle/Label:** Präsident des Europäischen Rates
- **Kontext:** Präsident des Europäischen Rates seit Dezember 2024; leitet Gipfel der Staats- und Regierungschefs.
- **Zeitraum/Datum:** seit 1. Dezember 2024
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.consilium.europa.eu/
2. https://commission.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `António Costa`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Ant%C3%B3nio+Costa&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Ant%C3%B3nio%20Costa&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Ant%C3%B3nio+Costa
- `openverseSearchUrl`: https://openverse.org/search/image?q=Ant%C3%B3nio+Costa
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=Ant%C3%B3nio+Costa
- `localPathSuggestion`: `/bildertest/2026/r03/ant-nio-costa.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r03-04 — Roberta Metsola

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welches EU-Organ repräsentiert sie?
- **Richtige Antwort:** Roberta Metsola
- **Akzeptierte Antworten:** Roberta Metsola
- **Rolle/Label:** Präsidentin des Europäischen Parlaments
- **Kontext:** Präsidentin des Europäischen Parlaments; wichtig zur Unterscheidung der EU-Institutionen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.europarl.europa.eu/
2. https://commission.europa.eu/
3. https://www.consilium.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Roberta Metsola`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Roberta+Metsola&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Roberta%20Metsola&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Roberta+Metsola
- `openverseSearchUrl`: https://openverse.org/search/image?q=Roberta+Metsola
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=Roberta+Metsola
- `localPathSuggestion`: `/bildertest/2026/r03/roberta-metsola.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r03-05 — Mark Rutte

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welche Rolle spielt er seit 2024 für Europa?
- **Richtige Antwort:** Mark Rutte
- **Akzeptierte Antworten:** Mark Rutte
- **Rolle/Label:** NATO-Generalsekretär
- **Kontext:** NATO-Generalsekretär; relevant für Verteidigungsausgaben, Trump, Ukraine und NATO-Gipfel.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.nato.int/
2. https://commission.europa.eu/
3. https://www.consilium.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Mark Rutte`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Mark+Rutte&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Mark%20Rutte&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Mark+Rutte
- `openverseSearchUrl`: https://openverse.org/search/image?q=Mark+Rutte
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=Mark+Rutte
- `officialImageHint`: https://www.nato.int/cps/en/natohq/photos.htm
- `localPathSuggestion`: `/bildertest/2026/r03/mark-rutte.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r03-06 — Andrius Kubilius

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum passt er zu ReArm Europe?
- **Richtige Antwort:** Andrius Kubilius
- **Akzeptierte Antworten:** Andrius Kubilius
- **Rolle/Label:** EU-Kommissar Verteidigung/Raumfahrt
- **Kontext:** EU-Kommissar für Verteidigung und Raumfahrt; Schlüsselfigur für europäische Aufrüstung/Industriepolitik.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://commission.europa.eu/
2. https://www.consilium.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Andrius Kubilius`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Andrius+Kubilius&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Andrius%20Kubilius&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Andrius+Kubilius
- `openverseSearchUrl`: https://openverse.org/search/image?q=Andrius+Kubilius
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=Andrius+Kubilius
- `localPathSuggestion`: `/bildertest/2026/r03/andrius-kubilius.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r03-07 — Michael McGrath

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welches Demokratiepaket gehört zu seinem Ressort?
- **Richtige Antwort:** Michael McGrath
- **Akzeptierte Antworten:** Michael McGrath
- **Rolle/Label:** EU-Kommissar Demokratie/Justiz
- **Kontext:** EU-Kommissar für Demokratie, Justiz und Rechtsstaatlichkeit; verbunden mit dem European Democracy Shield.
- **Zeitraum/Datum:** November 2025
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://commission.europa.eu/news-and-media/news/stronger-measures-protect-our-democracy-and-civil-society-2025-11-12_en
2. https://commission.europa.eu/
3. https://www.consilium.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Michael McGrath`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Michael+McGrath&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Michael%20McGrath&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Michael+McGrath
- `openverseSearchUrl`: https://openverse.org/search/image?q=Michael+McGrath
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=Michael+McGrath
- `localPathSuggestion`: `/bildertest/2026/r03/michael-mcgrath.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r03-08 — Henna Virkkunen

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum ist sie für KI/Plattformpolitik relevant?
- **Richtige Antwort:** Henna Virkkunen
- **Akzeptierte Antworten:** Henna Virkkunen
- **Rolle/Label:** EU-Kommission / Digitalpolitik
- **Kontext:** Exekutiv-Vizepräsidentin der EU-Kommission für Tech-Souveränität/Sicherheit/Demokratie; relevant für AI Act/DSA-Fragen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://commission.europa.eu/
2. https://www.consilium.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Henna Virkkunen`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Henna+Virkkunen&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Henna%20Virkkunen&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Henna+Virkkunen
- `openverseSearchUrl`: https://openverse.org/search/image?q=Henna+Virkkunen
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=Henna+Virkkunen
- `localPathSuggestion`: `/bildertest/2026/r03/henna-virkkunen.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r03-09 — ReArm Europe / Readiness 2030

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welches EU-Programm könnte dieses Bild von Verteidigungspolitik zeigen?
- **Richtige Antwort:** ReArm Europe / Readiness 2030
- **Akzeptierte Antworten:** ReArm Europe / Readiness 2030
- **Rolle/Label:** 
- **Kontext:** EU-Weißbuch und ReArm-Europe-Plan vom 19. März 2025 zur Stärkung europäischer Verteidigungsbereitschaft.
- **Zeitraum/Datum:** 19. März 2025
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://defence-industry-space.ec.europa.eu/eu-defence-industry/white-paper-european-defence-readiness-2030_en
2. https://commission.europa.eu/
3. https://www.consilium.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `ReArm Europe Readiness 2030 European Commission`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=ReArm+Europe+Readiness+2030+European+Commission&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=ReArm%20Europe%20Readiness%202030%20European%20Commission&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=ReArm+Europe+Readiness+2030+European+Commission
- `openverseSearchUrl`: https://openverse.org/search/image?q=ReArm+Europe+Readiness+2030+European+Commission
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=ReArm+Europe+%2F+Readiness+2030
- `localPathSuggestion`: `/bildertest/2026/r03/rearm-europe-readiness-2030.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r03-10 — SAFE – Security Action for Europe

- **Typ:** `event`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wofür steht SAFE im EU-Verteidigungskontext?
- **Richtige Antwort:** SAFE – Security Action for Europe
- **Akzeptierte Antworten:** SAFE – Security Action for Europe
- **Rolle/Label:** 
- **Kontext:** EU-Finanzinstrument mit bis zu 150 Milliarden Euro Darlehen für Verteidigungsinvestitionen.
- **Zeitraum/Datum:** 2025
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://defence-industry-space.ec.europa.eu/eu-defence-industry/safe-security-action-europe_en
2. https://commission.europa.eu/
3. https://www.consilium.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `SAFE Security Action for Europe European Union`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=SAFE+Security+Action+for+Europe+European+Union&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=SAFE%20Security%20Action%20for%20Europe%20European%20Union&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=SAFE+Security+Action+for+Europe+European+Union
- `openverseSearchUrl`: https://openverse.org/search/image?q=SAFE+Security+Action+for+Europe+European+Union
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=SAFE+%E2%80%93+Security+Action+for+Europe
- `localPathSuggestion`: `/bildertest/2026/r03/safe-security-action-for-europe.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r03-11 — European Democracy Shield

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Welches EU-Paket gegen Desinformation und Einflussnahme ist gemeint?
- **Richtige Antwort:** European Democracy Shield
- **Akzeptierte Antworten:** European Democracy Shield
- **Rolle/Label:** 
- **Kontext:** Die EU-Kommission stellte im November 2025 den European Democracy Shield vor.
- **Zeitraum/Datum:** 12. November 2025
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://commission.europa.eu/news-and-media/news/stronger-measures-protect-our-democracy-and-civil-society-2025-11-12_en
2. https://commission.europa.eu/
3. https://www.consilium.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `European Democracy Shield European Commission 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=European+Democracy+Shield+European+Commission+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=European%20Democracy%20Shield%20European%20Commission%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=European+Democracy+Shield+European+Commission+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=European+Democracy+Shield+European+Commission+2025
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=European+Democracy+Shield
- `localPathSuggestion`: `/bildertest/2026/r03/european-democracy-shield.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r03-12 — NATO-Gipfel Den Haag 2025

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welches Bündnisereignis passt zu diesem Gruppenbild?
- **Richtige Antwort:** NATO-Gipfel Den Haag 2025
- **Akzeptierte Antworten:** NATO-Gipfel Den Haag 2025
- **Rolle/Label:** 
- **Kontext:** NATO-Gipfel 2025 in Den Haag; Verteidigungsausgaben, Trump, Rutte und Ukraine als zentrale Themen.
- **Zeitraum/Datum:** Juni 2025
- **Kategorie:** EU/NATO

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.nato.int/
2. https://commission.europa.eu/
3. https://www.consilium.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `NATO Summit The Hague 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=NATO+Summit+The+Hague+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=NATO%20Summit%20The%20Hague%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=NATO+Summit+The+Hague+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=NATO+Summit+The+Hague+2025
- `officialImageHint`: https://audiovisual.ec.europa.eu/en/search?query=NATO-Gipfel+Den+Haag+2025
- `officialImageHint`: https://www.nato.int/cps/en/natohq/photos.htm
- `localPathSuggestion`: `/bildertest/2026/r03/nato-gipfel-den-haag-2025.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

## R04 – USA, Trump II & Tech-Macht

**Fokus:** US-Gesichter und ikonische politische Bilder

### bt26-r04-01 — Donald Trump

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `sehr hoch`
- **Frage/Prompt:** Wer ist das – und welche zweite Amtszeit prägt die Weltpolitik 2025/26?
- **Richtige Antwort:** Donald Trump
- **Akzeptierte Antworten:** Donald Trump
- **Rolle/Label:** US-Präsident
- **Kontext:** 47. Präsident der USA; Zölle, Migration, NATO, Ukraine und Kulturkampf dominieren die Schlagzeilen.
- **Zeitraum/Datum:** seit 20. Januar 2025
- **Kategorie:** USA

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/us/trump-unveils-global-reciprocal-tariffs-2025-04-02/
2. https://www.whitehouse.gov/
3. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Donald Trump`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Donald+Trump&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Donald%20Trump&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Donald+Trump
- `openverseSearchUrl`: https://openverse.org/search/image?q=Donald+Trump
- `officialImageHint`: https://www.whitehouse.gov/?s=Donald+Trump
- `localPathSuggestion`: `/bildertest/2026/r04/donald-trump.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r04-02 — J. D. Vance

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welches Amt bekleidet er in der Trump-Regierung?
- **Richtige Antwort:** J. D. Vance
- **Akzeptierte Antworten:** J. D. Vance
- **Rolle/Label:** US-Vizepräsident
- **Kontext:** US-Vizepräsident; sichtbar in Debatten über Ukraine, Kulturkampf und Signal-Chat-Kontext.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** USA

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.whitehouse.gov/
2. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `J. D. Vance`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=J.+D.+Vance&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=J.%20D.%20Vance&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=J.+D.+Vance
- `openverseSearchUrl`: https://openverse.org/search/image?q=J.+D.+Vance
- `officialImageHint`: https://www.whitehouse.gov/?s=J.+D.+Vance
- `localPathSuggestion`: `/bildertest/2026/r04/j-d-vance.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r04-03 — Marco Rubio

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und warum taucht er außenpolitisch ständig auf?
- **Richtige Antwort:** Marco Rubio
- **Akzeptierte Antworten:** Marco Rubio
- **Rolle/Label:** US-Außenminister
- **Kontext:** US-Außenminister; wichtig für Ukraine, Nahost, Lateinamerika und transatlantische Beziehungen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** USA

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.state.gov/
2. https://www.whitehouse.gov/
3. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Marco Rubio`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Marco+Rubio&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Marco%20Rubio&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Marco+Rubio
- `openverseSearchUrl`: https://openverse.org/search/image?q=Marco+Rubio
- `officialImageHint`: https://www.whitehouse.gov/?s=Marco+Rubio
- `localPathSuggestion`: `/bildertest/2026/r04/marco-rubio.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r04-04 — Pete Hegseth

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und mit welchem Kommunikationsskandal wurde er verbunden?
- **Richtige Antwort:** Pete Hegseth
- **Akzeptierte Antworten:** Pete Hegseth
- **Rolle/Label:** US-Verteidigungsminister
- **Kontext:** US-Verteidigungsminister; zentral im Signal-Chat-Skandal um Angriffspläne gegen Huthi-Ziele im Jemen.
- **Zeitraum/Datum:** März/April 2025
- **Kategorie:** USA/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://apnews.com/article/hegseth-atlantic-war-plans-signal-yemen-houthis-c0addd08c627ab01a37ea63621cb695e
2. https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/
3. https://www.whitehouse.gov/
4. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Pete Hegseth`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Pete+Hegseth&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Pete%20Hegseth&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Pete+Hegseth
- `openverseSearchUrl`: https://openverse.org/search/image?q=Pete+Hegseth
- `officialImageHint`: https://www.whitehouse.gov/?s=Pete+Hegseth
- `localPathSuggestion`: `/bildertest/2026/r04/pete-hegseth.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r04-05 — Jeffrey Goldberg

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und warum wurde er selbst Teil einer politischen Geschichte?
- **Richtige Antwort:** Jeffrey Goldberg
- **Akzeptierte Antworten:** Jeffrey Goldberg
- **Rolle/Label:** Chefredakteur The Atlantic
- **Kontext:** Chefredakteur von The Atlantic; versehentlich in Signal-Chat mit US-Angriffsplänen aufgenommen.
- **Zeitraum/Datum:** März 2025
- **Kategorie:** USA/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/
2. https://www.whitehouse.gov/
3. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Jeffrey Goldberg`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Jeffrey+Goldberg&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Jeffrey%20Goldberg&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Jeffrey+Goldberg
- `openverseSearchUrl`: https://openverse.org/search/image?q=Jeffrey+Goldberg
- `officialImageHint`: https://www.whitehouse.gov/?s=Jeffrey+Goldberg
- `localPathSuggestion`: `/bildertest/2026/r04/jeffrey-goldberg.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r04-06 — Elon Musk

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und warum ist er 2025/26 politisch noch stärker als nur Tech-Unternehmer?
- **Richtige Antwort:** Elon Musk
- **Akzeptierte Antworten:** Elon Musk
- **Rolle/Label:** Tech-Unternehmer / politische Rolle
- **Kontext:** Tesla/X/SpaceX-Chef; stark mit Trump-Administration, DOGE und Plattform-/Machtfragen verbunden.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** USA/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/
2. https://www.whitehouse.gov/
3. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Elon Musk`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Elon+Musk&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Elon%20Musk&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Elon+Musk
- `openverseSearchUrl`: https://openverse.org/search/image?q=Elon+Musk
- `officialImageHint`: https://www.whitehouse.gov/?s=Elon+Musk
- `localPathSuggestion`: `/bildertest/2026/r04/elon-musk.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r04-07 — Cory Booker

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welchen Rekord stellte er im US-Senat auf?
- **Richtige Antwort:** Cory Booker
- **Akzeptierte Antworten:** Cory Booker
- **Rolle/Label:** US-Senator
- **Kontext:** Demokratischer Senator; hielt 2025 eine 25-Stunden-Rede gegen Trump und brach den Senatsrekord.
- **Zeitraum/Datum:** 31. März/1. April 2025
- **Kategorie:** USA

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.booker.senate.gov/senator-bookers-marathon-speech
2. https://www.whitehouse.gov/
3. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Cory Booker`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Cory+Booker&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Cory%20Booker&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Cory+Booker
- `openverseSearchUrl`: https://openverse.org/search/image?q=Cory+Booker
- `officialImageHint`: https://www.whitehouse.gov/?s=Cory+Booker
- `localPathSuggestion`: `/bildertest/2026/r04/cory-booker.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r04-08 — Jerome Powell

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum ist er ein klassisches Wirtschafts-Bildertest-Gesicht?
- **Richtige Antwort:** Jerome Powell
- **Akzeptierte Antworten:** Jerome Powell
- **Rolle/Label:** Fed-Vorsitzender
- **Kontext:** Fed-Chef; zentrale Figur bei Zinsen, Inflation und Konflikten zwischen Notenbank und US-Regierung.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** USA/Wirtschaft

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.federalreserve.gov/
2. https://www.whitehouse.gov/
3. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Jerome Powell`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Jerome+Powell&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Jerome%20Powell&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Jerome+Powell
- `openverseSearchUrl`: https://openverse.org/search/image?q=Jerome+Powell
- `officialImageHint`: https://www.whitehouse.gov/?s=Jerome+Powell
- `localPathSuggestion`: `/bildertest/2026/r04/jerome-powell.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r04-09 — Trump-Vereidigung 2025

- **Typ:** `event`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Was zeigt dieses Bild – und warum war die Sitzordnung besonders beachtet?
- **Richtige Antwort:** Trump-Vereidigung 2025
- **Akzeptierte Antworten:** Trump-Vereidigung 2025
- **Rolle/Label:** 
- **Kontext:** Trumps zweite Vereidigung am 20. Januar 2025; auffällig waren Tech-Milliardäre und neue Machtachsen.
- **Zeitraum/Datum:** 20. Januar 2025
- **Kategorie:** USA

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.whitehouse.gov/
2. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Donald Trump inauguration 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Donald+Trump+inauguration+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Donald%20Trump%20inauguration%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Donald+Trump+inauguration+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Donald+Trump+inauguration+2025
- `officialImageHint`: https://www.whitehouse.gov/?s=Trump-Vereidigung+2025
- `localPathSuggestion`: `/bildertest/2026/r04/trump-vereidigung-2025.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r04-10 — Reciprocal Tariffs / Liberation Day

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welches wirtschaftspolitische Ereignis zeigt ein Zolltafel-Bild?
- **Richtige Antwort:** Reciprocal Tariffs / Liberation Day
- **Akzeptierte Antworten:** Reciprocal Tariffs / Liberation Day
- **Rolle/Label:** 
- **Kontext:** Trump kündigte am 2. April 2025 globale reciprocal tariffs an und nannte den Tag Liberation Day.
- **Zeitraum/Datum:** 2. April 2025
- **Kategorie:** USA/Wirtschaft

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/us/trump-unveils-global-reciprocal-tariffs-2025-04-02/
2. https://www.whitehouse.gov/
3. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Trump reciprocal tariffs liberation day 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Trump+reciprocal+tariffs+liberation+day+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Trump%20reciprocal%20tariffs%20liberation%20day%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Trump+reciprocal+tariffs+liberation+day+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Trump+reciprocal+tariffs+liberation+day+2025
- `officialImageHint`: https://www.whitehouse.gov/?s=Reciprocal+Tariffs+%2F+Liberation+Day
- `localPathSuggestion`: `/bildertest/2026/r04/reciprocal-tariffs-liberation-day.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r04-11 — Signal-Chat-Skandal

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Was ist mit diesem Screenshot-/Messenger-Bild gemeint?
- **Richtige Antwort:** Signal-Chat-Skandal
- **Akzeptierte Antworten:** Signal-Chat-Skandal
- **Rolle/Label:** 
- **Kontext:** US-Spitzenbeamte diskutierten militärische Angriffspläne in einem Signal-Chat, in dem Jeffrey Goldberg mitlas.
- **Zeitraum/Datum:** März 2025
- **Kategorie:** USA/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/
2. https://apnews.com/article/hegseth-atlantic-war-plans-signal-yemen-houthis-c0addd08c627ab01a37ea63621cb695e
3. https://www.whitehouse.gov/
4. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Signal chat war plans Jeffrey Goldberg 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Signal+chat+war+plans+Jeffrey+Goldberg+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Signal%20chat%20war%20plans%20Jeffrey%20Goldberg%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Signal+chat+war+plans+Jeffrey+Goldberg+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Signal+chat+war+plans+Jeffrey+Goldberg+2025
- `officialImageHint`: https://www.whitehouse.gov/?s=Signal-Chat-Skandal
- `localPathSuggestion`: `/bildertest/2026/r04/signal-chat-skandal.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r04-12 — Trump-Zölle und globaler Handelskrieg

- **Typ:** `event`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Was könnte ein Containerhafen-/Zollbild in dieser Runde abfragen?
- **Richtige Antwort:** Trump-Zölle und globaler Handelskrieg
- **Akzeptierte Antworten:** Trump-Zölle und globaler Handelskrieg
- **Rolle/Label:** 
- **Kontext:** US-Zölle lösten 2025/26 globale Gegenreaktionen, Vorzieheffekte und Handelsunsicherheit aus.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** USA/Wirtschaft

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/us/trump-unveils-global-reciprocal-tariffs-2025-04-02/
2. https://www.whitehouse.gov/
3. https://www.reuters.com/world/us/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Trump tariffs trade war 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Trump+tariffs+trade+war+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Trump%20tariffs%20trade%20war%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Trump+tariffs+trade+war+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Trump+tariffs+trade+war+2025
- `officialImageHint`: https://www.whitehouse.gov/?s=Trump-Z%C3%B6lle+und+globaler+Handelskrieg
- `localPathSuggestion`: `/bildertest/2026/r04/trump-z-lle-und-globaler-handelskrieg.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

## R05 – Kriege, Konflikte & Diplomatie

**Fokus:** Ukraine, Gaza, Russland, Nahost – Personen plus Bildkontexte

### bt26-r05-01 — Wolodymyr Selenskyj

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `sehr hoch`
- **Frage/Prompt:** Wer ist das – und warum bleibt er 2025/26 zentral für Europa?
- **Richtige Antwort:** Wolodymyr Selenskyj
- **Akzeptierte Antworten:** Wolodymyr Selenskyj
- **Rolle/Label:** Präsident der Ukraine
- **Kontext:** Präsident der Ukraine; steht für Krieg, Friedensverhandlungen, EU-/NATO-Unterstützung und Wiederaufbau.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Kriege/Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.president.gov.ua/en
2. https://www.un.org/sg/en
3. https://www.icc-cpi.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Wolodymyr Selenskyj`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Wolodymyr+Selenskyj&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Wolodymyr%20Selenskyj&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Wolodymyr+Selenskyj
- `openverseSearchUrl`: https://openverse.org/search/image?q=Wolodymyr+Selenskyj
- `officialImageHint`: https://media.un.org/en/search?query=Wolodymyr+Selenskyj
- `localPathSuggestion`: `/bildertest/2026/r05/wolodymyr-selenskyj.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r05-02 — Wladimir Putin

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und mit welchem Krieg ist er zentral verbunden?
- **Richtige Antwort:** Wladimir Putin
- **Akzeptierte Antworten:** Wladimir Putin
- **Rolle/Label:** Präsident Russlands
- **Kontext:** Russischer Präsident; verantwortlich für Russlands Angriffskrieg gegen die Ukraine und geopolitische Eskalationen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Kriege/Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/europe/
2. https://www.un.org/sg/en
3. https://www.icc-cpi.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Wladimir Putin`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Wladimir+Putin&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Wladimir%20Putin&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Wladimir+Putin
- `openverseSearchUrl`: https://openverse.org/search/image?q=Wladimir+Putin
- `officialImageHint`: https://media.un.org/en/search?query=Wladimir+Putin
- `localPathSuggestion`: `/bildertest/2026/r05/wladimir-putin.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r05-03 — Benjamin Netanjahu

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und warum steht er zugleich innen- und völkerrechtlich unter Druck?
- **Richtige Antwort:** Benjamin Netanjahu
- **Akzeptierte Antworten:** Benjamin Netanjahu
- **Rolle/Label:** Premierminister Israels
- **Kontext:** Israels Premierminister; zentral im Gaza-Krieg, bei Protesten in Israel und ICC-/Völkerrechtsdebatten.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Kriege/Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.icc-cpi.int/
2. https://www.un.org/sg/en

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Benjamin Netanjahu`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Benjamin+Netanjahu&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Benjamin%20Netanjahu&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Benjamin+Netanjahu
- `openverseSearchUrl`: https://openverse.org/search/image?q=Benjamin+Netanjahu
- `officialImageHint`: https://media.un.org/en/search?query=Benjamin+Netanjahu
- `localPathSuggestion`: `/bildertest/2026/r05/benjamin-netanjahu.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r05-04 — Karim Khan

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und für welche Institution steht er?
- **Richtige Antwort:** Karim Khan
- **Akzeptierte Antworten:** Karim Khan
- **Rolle/Label:** ICC-Chefankläger
- **Kontext:** Chefankläger des Internationalen Strafgerichtshofs; relevant bei Haftbefehlen und internationalen Strafverfahren.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Recht/Justiz

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.icc-cpi.int/
2. https://www.un.org/sg/en

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Karim Khan`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Karim+Khan&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Karim%20Khan&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Karim+Khan
- `openverseSearchUrl`: https://openverse.org/search/image?q=Karim+Khan
- `officialImageHint`: https://media.un.org/en/search?query=Karim+Khan
- `localPathSuggestion`: `/bildertest/2026/r05/karim-khan.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r05-05 — António Guterres

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und warum taucht sein Gesicht in Krisenberichten auf?
- **Richtige Antwort:** António Guterres
- **Akzeptierte Antworten:** António Guterres
- **Rolle/Label:** UN-Generalsekretär
- **Kontext:** UN-Generalsekretär; zentrale Stimme zu Gaza, Ukraine, Sudan, Klima und UN-Reform.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** UN/Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.un.org/sg/en
2. https://www.icc-cpi.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `António Guterres`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Ant%C3%B3nio+Guterres&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Ant%C3%B3nio%20Guterres&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Ant%C3%B3nio+Guterres
- `openverseSearchUrl`: https://openverse.org/search/image?q=Ant%C3%B3nio+Guterres
- `officialImageHint`: https://media.un.org/en/search?query=Ant%C3%B3nio+Guterres
- `localPathSuggestion`: `/bildertest/2026/r05/ant-nio-guterres.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r05-06 — Volker Türk

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und in welchem Menschenrechtskontext ist er relevant?
- **Richtige Antwort:** Volker Türk
- **Akzeptierte Antworten:** Volker Türk
- **Rolle/Label:** UN-Hochkommissar für Menschenrechte
- **Kontext:** UN-Hochkommissar für Menschenrechte; spricht regelmäßig zu Sudan, Gaza, Ukraine und Menschenrechtsverletzungen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** UN/Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.ohchr.org/
2. https://www.un.org/sg/en
3. https://www.icc-cpi.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Volker Türk`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Volker+T%C3%BCrk&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Volker%20T%C3%BCrk&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Volker+T%C3%BCrk
- `openverseSearchUrl`: https://openverse.org/search/image?q=Volker+T%C3%BCrk
- `officialImageHint`: https://media.un.org/en/search?query=Volker+T%C3%BCrk
- `localPathSuggestion`: `/bildertest/2026/r05/volker-t-rk.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r05-07 — Philippe Lazzarini

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und mit welcher UN-Organisation wird er verbunden?
- **Richtige Antwort:** Philippe Lazzarini
- **Akzeptierte Antworten:** Philippe Lazzarini
- **Rolle/Label:** UNRWA-Generalkommissar
- **Kontext:** UNRWA-Chef; zentral in Debatten um humanitäre Hilfe und Politik im Gazastreifen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** UN/Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.unrwa.org/
2. https://www.un.org/sg/en
3. https://www.icc-cpi.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Philippe Lazzarini`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Philippe+Lazzarini&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Philippe%20Lazzarini&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Philippe+Lazzarini
- `openverseSearchUrl`: https://openverse.org/search/image?q=Philippe+Lazzarini
- `officialImageHint`: https://media.un.org/en/search?query=Philippe+Lazzarini
- `localPathSuggestion`: `/bildertest/2026/r05/philippe-lazzarini.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r05-08 — Steve Witkoff

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum taucht er in US-Diplomatie-Nachrichten auf?
- **Richtige Antwort:** Steve Witkoff
- **Akzeptierte Antworten:** Steve Witkoff
- **Rolle/Label:** US-Sondergesandter
- **Kontext:** US-Sondergesandter/Trump-Vertrauter in außenpolitischen Verhandlungen; mögliches Bildertest-Gesicht für Nahost/Ukraine-Diplomatie.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** USA/Diplomatie

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/
2. https://www.un.org/sg/en
3. https://www.icc-cpi.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Steve Witkoff`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Steve+Witkoff&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Steve%20Witkoff&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Steve+Witkoff
- `openverseSearchUrl`: https://openverse.org/search/image?q=Steve+Witkoff
- `officialImageHint`: https://media.un.org/en/search?query=Steve+Witkoff
- `localPathSuggestion`: `/bildertest/2026/r05/steve-witkoff.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r05-09 — Gaza-Krieg und tote Journalistinnen/Journalisten

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Was würde ein Pressewesten-/Kamera-Bild in Gaza abfragen?
- **Richtige Antwort:** Gaza-Krieg und tote Journalistinnen/Journalisten
- **Akzeptierte Antworten:** Gaza-Krieg und tote Journalistinnen/Journalisten
- **Rolle/Label:** 
- **Kontext:** Der Krieg in Gaza gilt als einer der tödlichsten Konflikte für Medienschaffende; CPJ meldete 2025 Rekordzahlen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Medien/Krieg

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://cpj.org/special-reports/record-129-press-members-killed-in-2025-israel-responsible-for-2-of-3-of-deaths/
2. https://www.un.org/sg/en
3. https://www.icc-cpi.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Gaza journalists killed press freedom 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Gaza+journalists+killed+press+freedom+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Gaza%20journalists%20killed%20press%20freedom%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Gaza+journalists+killed+press+freedom+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Gaza+journalists+killed+press+freedom+2025
- `officialImageHint`: https://media.un.org/en/search?query=Gaza-Krieg+und+tote+Journalistinnen%2FJournalisten
- `localPathSuggestion`: `/bildertest/2026/r05/gaza-krieg-und-tote-journalistinnen-journalisten.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r05-10 — Ukraine-Friedens- und Sicherheitsgespräche

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welches Thema könnte ein Gipfelbild mit Selenskyj/Trump/EU zeigen?
- **Richtige Antwort:** Ukraine-Friedens- und Sicherheitsgespräche
- **Akzeptierte Antworten:** Ukraine-Friedens- und Sicherheitsgespräche
- **Rolle/Label:** 
- **Kontext:** Verhandlungen und Sicherheitsgarantien für die Ukraine blieben 2025/26 ein zentrales Weltpolitikthema.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Kriege/Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/europe/
2. https://www.un.org/sg/en
3. https://www.icc-cpi.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Ukraine peace talks 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Ukraine+peace+talks+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Ukraine%20peace%20talks%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Ukraine+peace+talks+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Ukraine+peace+talks+2025
- `officialImageHint`: https://media.un.org/en/search?query=Ukraine-Friedens-+und+Sicherheitsgespr%C3%A4che
- `localPathSuggestion`: `/bildertest/2026/r05/ukraine-friedens-und-sicherheitsgespr-che.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r05-11 — EU-Sanktionen gegen Russland

- **Typ:** `event`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Was könnte ein EU-Rats-/Sanktionsbild abfragen?
- **Richtige Antwort:** EU-Sanktionen gegen Russland
- **Akzeptierte Antworten:** EU-Sanktionen gegen Russland
- **Rolle/Label:** 
- **Kontext:** Die EU setzte 2025/26 ihre Sanktionspolitik gegen Russland fort; wichtig sind Paketnummern, Datum und Schattenflotte.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** EU/Außenpolitik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.consilium.europa.eu/en/policies/sanctions-against-russia/
2. https://www.un.org/sg/en
3. https://www.icc-cpi.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `EU sanctions Russia 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=EU+sanctions+Russia+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=EU%20sanctions%20Russia%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=EU+sanctions+Russia+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=EU+sanctions+Russia+2025
- `officialImageHint`: https://media.un.org/en/search?query=EU-Sanktionen+gegen+Russland
- `localPathSuggestion`: `/bildertest/2026/r05/eu-sanktionen-gegen-russland.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r05-12 — ICC/ICJ Den Haag

- **Typ:** `event`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Welches internationale Gericht könnte dieses Gebäude/Bild zeigen?
- **Richtige Antwort:** ICC/ICJ Den Haag
- **Akzeptierte Antworten:** ICC/ICJ Den Haag
- **Rolle/Label:** 
- **Kontext:** ICC und ICJ sitzen beide in Den Haag, haben aber unterschiedliche Aufgaben: Einzelpersonen vs. Staatenstreitigkeiten.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Recht/Justiz

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.icc-cpi.int/
2. https://www.icj-cij.org/
3. https://www.un.org/sg/en

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `International Criminal Court International Court of Justice The Hague`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=International+Criminal+Court+International+Court+of+Justice+The+Hague&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=International%20Criminal%20Court%20International%20Court%20of%20Justice%20The%20Hague&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=International+Criminal+Court+International+Court+of+Justice+The+Hague
- `openverseSearchUrl`: https://openverse.org/search/image?q=International+Criminal+Court+International+Court+of+Justice+The+Hague
- `officialImageHint`: https://media.un.org/en/search?query=ICC%2FICJ+Den+Haag
- `localPathSuggestion`: `/bildertest/2026/r05/icc-icj-den-haag.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

## R06 – Humanitäre Krisen & Globaler Süden

**Fokus:** Unterberichtete Konflikte, Nobelpreis, Lateinamerika

### bt26-r06-01 — Abdel Fattah al-Burhan

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und mit welchem Bürgerkrieg ist er verbunden?
- **Richtige Antwort:** Abdel Fattah al-Burhan
- **Akzeptierte Antworten:** Abdel Fattah al-Burhan
- **Rolle/Label:** Sudans Armeechef
- **Kontext:** Sudans Armeechef und zentraler Akteur im Krieg gegen die RSF.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Humanitäre Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.unocha.org/publications/report/sudan/sudan-humanitarian-needs-and-response-plan-2026-april-2026
2. https://www.auswaertiges-amt.de/en/aussenpolitik/laenderinformationen/sudan-node/sudan-conference-2766818
3. https://www.unocha.org/
4. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Abdel Fattah al-Burhan`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Abdel+Fattah+al-Burhan&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Abdel%20Fattah%20al-Burhan&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Abdel+Fattah+al-Burhan
- `openverseSearchUrl`: https://openverse.org/search/image?q=Abdel+Fattah+al-Burhan
- `officialImageHint`: https://media.un.org/en/search?query=Abdel+Fattah+al-Burhan
- `localPathSuggestion`: `/bildertest/2026/r06/abdel-fattah-al-burhan.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r06-02 — Mohamed Hamdan Dagalo (Hemedti)

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welche Miliz führt er?
- **Richtige Antwort:** Mohamed Hamdan Dagalo (Hemedti)
- **Akzeptierte Antworten:** Mohamed Hamdan Dagalo (Hemedti)
- **Rolle/Label:** RSF-Anführer
- **Kontext:** Chef der Rapid Support Forces (RSF); zentraler Kriegsakteur im Sudan-Konflikt.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Humanitäre Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.unocha.org/publications/report/sudan/sudan-humanitarian-needs-and-response-plan-2026-april-2026
2. https://www.unocha.org/
3. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Mohamed Hamdan Dagalo (Hemedti)`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Mohamed+Hamdan+Dagalo+%28Hemedti%29&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Mohamed%20Hamdan%20Dagalo%20%28Hemedti%29&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Mohamed+Hamdan+Dagalo+%28Hemedti%29
- `openverseSearchUrl`: https://openverse.org/search/image?q=Mohamed+Hamdan+Dagalo+%28Hemedti%29
- `officialImageHint`: https://media.un.org/en/search?query=Mohamed+Hamdan+Dagalo+%28Hemedti%29
- `localPathSuggestion`: `/bildertest/2026/r06/mohamed-hamdan-dagalo-hemedti.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r06-03 — Félix Tshisekedi

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und mit welchem Konflikt im Osten seines Landes ist er verbunden?
- **Richtige Antwort:** Félix Tshisekedi
- **Akzeptierte Antworten:** Félix Tshisekedi
- **Rolle/Label:** Präsident der DR Kongo
- **Kontext:** Präsident der Demokratischen Republik Kongo; M23-Konflikt und Goma/Bukavu prägen die Lage.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Humanitäre Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/africa/rebels-enter-centre-congos-goma-after-claiming-capture-city-2025-01-27/
2. https://www.unocha.org/
3. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Félix Tshisekedi`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=F%C3%A9lix+Tshisekedi&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=F%C3%A9lix%20Tshisekedi&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=F%C3%A9lix+Tshisekedi
- `openverseSearchUrl`: https://openverse.org/search/image?q=F%C3%A9lix+Tshisekedi
- `officialImageHint`: https://media.un.org/en/search?query=F%C3%A9lix+Tshisekedi
- `localPathSuggestion`: `/bildertest/2026/r06/f-lix-tshisekedi.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r06-04 — Paul Kagame

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum fällt sein Name im Kontext M23/DR Kongo?
- **Richtige Antwort:** Paul Kagame
- **Akzeptierte Antworten:** Paul Kagame
- **Rolle/Label:** Präsident Ruandas
- **Kontext:** Präsident Ruandas; Ruanda wird international im Zusammenhang mit Unterstützung für M23 genannt.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Humanitäre Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/africa/rebels-enter-centre-congos-goma-after-claiming-capture-city-2025-01-27/
2. https://www.unocha.org/
3. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Paul Kagame`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Paul+Kagame&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Paul%20Kagame&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Paul+Kagame
- `openverseSearchUrl`: https://openverse.org/search/image?q=Paul+Kagame
- `officialImageHint`: https://media.un.org/en/search?query=Paul+Kagame
- `localPathSuggestion`: `/bildertest/2026/r06/paul-kagame.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r06-05 — Corneille Nangaa

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `niedrig`
- **Frage/Prompt:** Wer ist das – und welche Rolle spielt er im Ostkongo-Konflikt?
- **Richtige Antwort:** Corneille Nangaa
- **Akzeptierte Antworten:** Corneille Nangaa
- **Rolle/Label:** Congo River Alliance / M23-Umfeld
- **Kontext:** Früherer Wahlkommissionschef der DR Kongo, nun mit der Congo River Alliance/M23 verbunden.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Humanitäre Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/africa/rebels-enter-centre-congos-goma-after-claiming-capture-city-2025-01-27/
2. https://www.unocha.org/
3. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Corneille Nangaa`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Corneille+Nangaa&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Corneille%20Nangaa&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Corneille+Nangaa
- `openverseSearchUrl`: https://openverse.org/search/image?q=Corneille+Nangaa
- `officialImageHint`: https://media.un.org/en/search?query=Corneille+Nangaa
- `localPathSuggestion`: `/bildertest/2026/r06/corneille-nangaa.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r06-06 — María Corina Machado

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welchen Preis erhielt sie 2025?
- **Richtige Antwort:** María Corina Machado
- **Akzeptierte Antworten:** María Corina Machado
- **Rolle/Label:** Friedensnobelpreisträgerin 2025
- **Kontext:** Venezolanische Oppositionsführerin; Friedensnobelpreis 2025 für Einsatz für demokratische Rechte.
- **Zeitraum/Datum:** Oktober 2025
- **Kategorie:** Internationale Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.nobelprize.org/prizes/peace/2025/summary/
2. https://www.unocha.org/
3. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `María Corina Machado`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Mar%C3%ADa+Corina+Machado&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Mar%C3%ADa%20Corina%20Machado&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Mar%C3%ADa+Corina+Machado
- `openverseSearchUrl`: https://openverse.org/search/image?q=Mar%C3%ADa+Corina+Machado
- `officialImageHint`: https://media.un.org/en/search?query=Mar%C3%ADa+Corina+Machado
- `localPathSuggestion`: `/bildertest/2026/r06/mar-a-corina-machado.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r06-07 — Nayib Bukele

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum bleibt er ein kontroverses Bildertest-Gesicht?
- **Richtige Antwort:** Nayib Bukele
- **Akzeptierte Antworten:** Nayib Bukele
- **Rolle/Label:** Präsident El Salvadors
- **Kontext:** Präsident El Salvadors; bekannt für Anti-Gang-Politik, autoritären Kurs und Bitcoin-Experiment.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Internationale Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/americas/
2. https://www.unocha.org/
3. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Nayib Bukele`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Nayib+Bukele&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Nayib%20Bukele&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Nayib+Bukele
- `openverseSearchUrl`: https://openverse.org/search/image?q=Nayib+Bukele
- `officialImageHint`: https://media.un.org/en/search?query=Nayib+Bukele
- `localPathSuggestion`: `/bildertest/2026/r06/nayib-bukele.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r06-08 — Daniel Noboa

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welches Sicherheitsproblem prägt sein Land?
- **Richtige Antwort:** Daniel Noboa
- **Akzeptierte Antworten:** Daniel Noboa
- **Rolle/Label:** Präsident Ecuadors
- **Kontext:** Präsident Ecuadors; Drogengewalt, Ausnahmezustände und Sicherheitskrise prägen die Politik.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Internationale Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/americas/
2. https://www.unocha.org/
3. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Daniel Noboa`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Daniel+Noboa&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Daniel%20Noboa&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Daniel+Noboa
- `openverseSearchUrl`: https://openverse.org/search/image?q=Daniel+Noboa
- `officialImageHint`: https://media.un.org/en/search?query=Daniel+Noboa
- `localPathSuggestion`: `/bildertest/2026/r06/daniel-noboa.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r06-09 — Sudan-Konferenz in Berlin 2026

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Was zeigt dieses Diplomatie-/Konferenzbild?
- **Richtige Antwort:** Sudan-Konferenz in Berlin 2026
- **Akzeptierte Antworten:** Sudan-Konferenz in Berlin 2026
- **Rolle/Label:** 
- **Kontext:** Deutschland richtete im April 2026 eine internationale Sudan-Konferenz aus; Sudan gilt als größte humanitäre Krise der Gegenwart.
- **Zeitraum/Datum:** 15. April 2026
- **Kategorie:** Humanitäre Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.auswaertiges-amt.de/en/aussenpolitik/laenderinformationen/sudan-node/sudan-conference-2766818
2. https://www.unocha.org/publications/report/sudan/sudan-humanitarian-needs-and-response-plan-2026-april-2026
3. https://www.unocha.org/
4. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Sudan humanitarian conference Berlin 2026`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Sudan+humanitarian+conference+Berlin+2026&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Sudan%20humanitarian%20conference%20Berlin%202026&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Sudan+humanitarian+conference+Berlin+2026
- `openverseSearchUrl`: https://openverse.org/search/image?q=Sudan+humanitarian+conference+Berlin+2026
- `officialImageHint`: https://media.un.org/en/search?query=Sudan-Konferenz+in+Berlin+2026
- `localPathSuggestion`: `/bildertest/2026/r06/sudan-konferenz-in-berlin-2026.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r06-10 — M23 in Goma / Ostkongo

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welcher unterberichtete Konflikt könnte dieses Stadt-/Fluchtbild zeigen?
- **Richtige Antwort:** M23 in Goma / Ostkongo
- **Akzeptierte Antworten:** M23 in Goma / Ostkongo
- **Rolle/Label:** 
- **Kontext:** Rwanda-gestützte M23-Rebellen nahmen 2025 Goma ein; der Konflikt verschärfte die humanitäre Krise im Ostkongo.
- **Zeitraum/Datum:** Januar 2025 ff.
- **Kategorie:** Humanitäre Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/world/africa/rebels-enter-centre-congos-goma-after-claiming-capture-city-2025-01-27/
2. https://www.unocha.org/
3. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `M23 Goma eastern Congo 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=M23+Goma+eastern+Congo+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=M23%20Goma%20eastern%20Congo%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=M23+Goma+eastern+Congo+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=M23+Goma+eastern+Congo+2025
- `officialImageHint`: https://media.un.org/en/search?query=M23+in+Goma+%2F+Ostkongo
- `localPathSuggestion`: `/bildertest/2026/r06/m23-in-goma-ostkongo.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r06-11 — Friedensnobelpreis 2025

- **Typ:** `event`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welches internationale Preisereignis ist gemeint?
- **Richtige Antwort:** Friedensnobelpreis 2025
- **Akzeptierte Antworten:** Friedensnobelpreis 2025
- **Rolle/Label:** 
- **Kontext:** Der Friedensnobelpreis 2025 ging an María Corina Machado für ihren Einsatz für Demokratie in Venezuela.
- **Zeitraum/Datum:** 10. Oktober 2025
- **Kategorie:** Internationale Politik

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.nobelprize.org/prizes/peace/2025/summary/
2. https://www.unocha.org/
3. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Nobel Peace Prize 2025 ceremony`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Nobel+Peace+Prize+2025+ceremony&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Nobel%20Peace%20Prize%202025%20ceremony&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Nobel+Peace+Prize+2025+ceremony
- `openverseSearchUrl`: https://openverse.org/search/image?q=Nobel+Peace+Prize+2025+ceremony
- `officialImageHint`: https://media.un.org/en/search?query=Friedensnobelpreis+2025
- `localPathSuggestion`: `/bildertest/2026/r06/friedensnobelpreis-2025.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r06-12 — Haiti-Krise / Ganggewalt

- **Typ:** `event`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `niedrig`
- **Frage/Prompt:** Was könnte ein Bild aus Port-au-Prince im Bildertest abfragen?
- **Richtige Antwort:** Haiti-Krise / Ganggewalt
- **Akzeptierte Antworten:** Haiti-Krise / Ganggewalt
- **Rolle/Label:** 
- **Kontext:** Die Sicherheits- und Staatskrise in Haiti blieb 2025/26 ein unterberichtetes internationales Thema.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Humanitäre Krisen

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.un.org/
2. https://www.unocha.org/
3. https://www.nobelprize.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Haiti gang violence 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Haiti+gang+violence+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Haiti%20gang%20violence%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Haiti+gang+violence+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Haiti+gang+violence+2025
- `officialImageHint`: https://media.un.org/en/search?query=Haiti-Krise+%2F+Ganggewalt
- `localPathSuggestion`: `/bildertest/2026/r06/haiti-krise-ganggewalt.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

## R07 – Wirtschaft, KI & Plattformmacht

**Fokus:** Gesichter von Geld, Daten, Chips und Regulierung

### bt26-r07-01 — Christine Lagarde

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welche Institution führt sie?
- **Richtige Antwort:** Christine Lagarde
- **Akzeptierte Antworten:** Christine Lagarde
- **Rolle/Label:** EZB-Präsidentin
- **Kontext:** Präsidentin der Europäischen Zentralbank; Zinsen, Inflation und Eurozone sind klassische Wirtschaftsfragen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.ecb.europa.eu/
2. https://www.imf.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Christine Lagarde`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Christine+Lagarde&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Christine%20Lagarde&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Christine+Lagarde
- `openverseSearchUrl`: https://openverse.org/search/image?q=Christine+Lagarde
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Christine+Lagarde&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/christine-lagarde.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r07-02 — Kristalina Georgieva

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und für welche Organisation steht sie?
- **Richtige Antwort:** Kristalina Georgieva
- **Akzeptierte Antworten:** Kristalina Georgieva
- **Rolle/Label:** IWF-Chefin
- **Kontext:** Chefin des Internationalen Währungsfonds; Weltwirtschaftsprognosen und Finanzstabilität.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.imf.org/
2. https://www.ecb.europa.eu/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Kristalina Georgieva`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Kristalina+Georgieva&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Kristalina%20Georgieva&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Kristalina+Georgieva
- `openverseSearchUrl`: https://openverse.org/search/image?q=Kristalina+Georgieva
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Kristalina+Georgieva&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/kristalina-georgieva.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r07-03 — Ngozi Okonjo-Iweala

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welche Organisation leitet sie?
- **Richtige Antwort:** Ngozi Okonjo-Iweala
- **Akzeptierte Antworten:** Ngozi Okonjo-Iweala
- **Rolle/Label:** WTO-Generaldirektorin
- **Kontext:** Generaldirektorin der WTO; Welthandel, Zölle und Handelsstreitigkeiten.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.wto.org/
2. https://www.ecb.europa.eu/
3. https://www.imf.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Ngozi Okonjo-Iweala`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Ngozi+Okonjo-Iweala&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Ngozi%20Okonjo-Iweala&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Ngozi+Okonjo-Iweala
- `openverseSearchUrl`: https://openverse.org/search/image?q=Ngozi+Okonjo-Iweala
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Ngozi+Okonjo-Iweala&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/ngozi-okonjo-iweala.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r07-04 — Jensen Huang

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und warum war er für KI-Boom und Chips zentral?
- **Richtige Antwort:** Jensen Huang
- **Akzeptierte Antworten:** Jensen Huang
- **Rolle/Label:** Nvidia-CEO
- **Kontext:** Nvidia-Chef; ikonisches Gesicht des KI-Chip-Booms.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.nvidia.com/
2. https://www.ecb.europa.eu/
3. https://www.imf.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Jensen Huang`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Jensen+Huang&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Jensen%20Huang&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Jensen+Huang
- `openverseSearchUrl`: https://openverse.org/search/image?q=Jensen+Huang
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Jensen+Huang&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/jensen-huang.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r07-05 — Sam Altman

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und mit welchem Unternehmen ist er verbunden?
- **Richtige Antwort:** Sam Altman
- **Akzeptierte Antworten:** Sam Altman
- **Rolle/Label:** OpenAI-CEO
- **Kontext:** OpenAI-Chef; zentrale Figur bei generativer KI, Regulierung und Tech-Politik.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://openai.com/
2. https://www.ecb.europa.eu/
3. https://www.imf.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Sam Altman`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Sam+Altman&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Sam%20Altman&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Sam+Altman
- `openverseSearchUrl`: https://openverse.org/search/image?q=Sam+Altman
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Sam+Altman&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/sam-altman.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r07-06 — Sundar Pichai

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welchen Tech-Konzern führt er?
- **Richtige Antwort:** Sundar Pichai
- **Akzeptierte Antworten:** Sundar Pichai
- **Rolle/Label:** Google/Alphabet-CEO
- **Kontext:** CEO von Google/Alphabet; relevant für KI, Suche, Regulierung und Plattformmacht.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://abc.xyz/
2. https://www.ecb.europa.eu/
3. https://www.imf.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Sundar Pichai`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Sundar+Pichai&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Sundar%20Pichai&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Sundar+Pichai
- `openverseSearchUrl`: https://openverse.org/search/image?q=Sundar+Pichai
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Sundar+Pichai&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/sundar-pichai.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r07-07 — Tim Cook

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum taucht Apple im Politik-/Tech-Kontext auf?
- **Richtige Antwort:** Tim Cook
- **Akzeptierte Antworten:** Tim Cook
- **Rolle/Label:** Apple-CEO
- **Kontext:** Apple-CEO; relevant bei Plattformregulierung, Lieferketten, China/USA und KI-Strategien.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.apple.com/newsroom/
2. https://www.ecb.europa.eu/
3. https://www.imf.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Tim Cook`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Tim+Cook&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Tim%20Cook&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Tim+Cook
- `openverseSearchUrl`: https://openverse.org/search/image?q=Tim+Cook
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Tim+Cook&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/tim-cook.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r07-08 — Demis Hassabis

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `niedrig`
- **Frage/Prompt:** Wer ist das – und warum ist er ein Wissenschaft/Tech-Gesicht?
- **Richtige Antwort:** Demis Hassabis
- **Akzeptierte Antworten:** Demis Hassabis
- **Rolle/Label:** Google DeepMind
- **Kontext:** Google-DeepMind-Chef und KI-Forscher; relevant für KI, Wissenschaft und Nobel-/Forschungsbezüge.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://deepmind.google/
2. https://www.ecb.europa.eu/
3. https://www.imf.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Demis Hassabis`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Demis+Hassabis&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Demis%20Hassabis&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Demis+Hassabis
- `openverseSearchUrl`: https://openverse.org/search/image?q=Demis+Hassabis
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Demis+Hassabis&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/demis-hassabis.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r07-09 — EU AI Act – neue Anwendungsstufen

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Was könnte ein KI-Regulierungsbild abfragen?
- **Richtige Antwort:** EU AI Act – neue Anwendungsstufen
- **Akzeptierte Antworten:** EU AI Act – neue Anwendungsstufen
- **Rolle/Label:** 
- **Kontext:** 2025 traten weitere Anwendungsstufen des EU AI Act in Kraft; relevant für verbotene Praktiken und GPAI-Regeln.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
2. https://digital-strategy.ec.europa.eu/
3. https://www.ecb.europa.eu/
4. https://www.imf.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `EU AI Act 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=EU+AI+Act+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=EU%20AI%20Act%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=EU+AI+Act+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=EU+AI+Act+2025
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=EU+AI+Act+%E2%80%93+neue+Anwendungsstufen&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/eu-ai-act-neue-anwendungsstufen.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r07-10 — Clean Industrial Deal

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Welches EU-Industrieprojekt ist gemeint?
- **Richtige Antwort:** Clean Industrial Deal
- **Akzeptierte Antworten:** Clean Industrial Deal
- **Rolle/Label:** 
- **Kontext:** Der Clean Industrial Deal verbindet Klimaschutz, Wettbewerbsfähigkeit und Industriepolitik.
- **Zeitraum/Datum:** 26. Februar 2025
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://commission.europa.eu/
2. https://www.ecb.europa.eu/
3. https://www.imf.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Clean Industrial Deal European Commission 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Clean+Industrial+Deal+European+Commission+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Clean%20Industrial%20Deal%20European%20Commission%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Clean+Industrial+Deal+European+Commission+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Clean+Industrial+Deal+European+Commission+2025
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Clean+Industrial+Deal&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/clean-industrial-deal.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r07-11 — EZB-Zinswende

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Was könnte ein EZB-Gebäude-/Lagarde-Bild abfragen?
- **Richtige Antwort:** EZB-Zinswende
- **Akzeptierte Antworten:** EZB-Zinswende
- **Rolle/Label:** 
- **Kontext:** Nach der Inflationswelle senkte/hielt die EZB 2025/26 Zinsen im Spannungsfeld von Inflation und Konjunktur.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.ecb.europa.eu/press/pr/date/html/index.en.html
2. https://www.ecb.europa.eu/
3. https://www.imf.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `European Central Bank interest rates 2025 Lagarde`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=European+Central+Bank+interest+rates+2025+Lagarde&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=European%20Central%20Bank%20interest%20rates%202025%20Lagarde&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=European+Central+Bank+interest+rates+2025+Lagarde
- `openverseSearchUrl`: https://openverse.org/search/image?q=European+Central+Bank+interest+rates+2025+Lagarde
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=EZB-Zinswende&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/ezb-zinswende.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r07-12 — Chip- und KI-Boom

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Was könnte ein Nvidia-Chip-/GPU-Bild abfragen?
- **Richtige Antwort:** Chip- und KI-Boom
- **Akzeptierte Antworten:** Chip- und KI-Boom
- **Rolle/Label:** 
- **Kontext:** KI-Infrastruktur und Chipabhängigkeit wurden 2025/26 zu wirtschafts- und geopolitischen Schlüsselfragen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wirtschaft/Tech

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.nvidia.com/
2. https://www.ecb.europa.eu/
3. https://www.imf.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Nvidia AI chip boom Jensen Huang 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Nvidia+AI+chip+boom+Jensen+Huang+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Nvidia%20AI%20chip%20boom%20Jensen%20Huang%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Nvidia+AI+chip+boom+Jensen+Huang+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Nvidia+AI+chip+boom+Jensen+Huang+2025
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Chip-+und+KI-Boom&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r07/chip-und-ki-boom.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

## R08 – Kultur, Medien & Preise

**Fokus:** Nobel, Oscars, Berlinale, Literatur und Medienmomente

### bt26-r08-01 — László Krasznahorkai

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welchen Preis erhielt er 2025?
- **Richtige Antwort:** László Krasznahorkai
- **Akzeptierte Antworten:** László Krasznahorkai
- **Rolle/Label:** Literaturnobelpreisträger 2025
- **Kontext:** Ungarischer Schriftsteller; Literaturnobelpreis 2025.
- **Zeitraum/Datum:** Oktober 2025
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.nobelprize.org/prizes/literature/2025/summary/
2. https://www.nobelprize.org/
3. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `László Krasznahorkai`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=L%C3%A1szl%C3%B3+Krasznahorkai&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=L%C3%A1szl%C3%B3%20Krasznahorkai&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=L%C3%A1szl%C3%B3+Krasznahorkai
- `openverseSearchUrl`: https://openverse.org/search/image?q=L%C3%A1szl%C3%B3+Krasznahorkai
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=L%C3%A1szl%C3%B3+Krasznahorkai&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/l-szl-krasznahorkai.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r08-02 — Paul Thomas Anderson

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum war er 2026 Oscar-relevant?
- **Richtige Antwort:** Paul Thomas Anderson
- **Akzeptierte Antworten:** Paul Thomas Anderson
- **Rolle/Label:** Regisseur
- **Kontext:** Regisseur/Produzent von One Battle After Another, dem Oscar-Best-Picture-Gewinner 2026.
- **Zeitraum/Datum:** März 2026
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.oscars.org/oscars/ceremonies/2026
2. https://www.nobelprize.org/
3. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Paul Thomas Anderson`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Paul+Thomas+Anderson&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Paul%20Thomas%20Anderson&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Paul+Thomas+Anderson
- `openverseSearchUrl`: https://openverse.org/search/image?q=Paul+Thomas+Anderson
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Paul+Thomas+Anderson&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/paul-thomas-anderson.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r08-03 — Conan O'Brien

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welches globale Medienereignis moderierte er?
- **Richtige Antwort:** Conan O'Brien
- **Akzeptierte Antworten:** Conan O'Brien
- **Rolle/Label:** Oscar-Host
- **Kontext:** Moderator der Oscars 2026; wurde außerdem für 2027 erneut angekündigt.
- **Zeitraum/Datum:** März 2026
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.oscars.org/oscars/ceremonies/2026
2. https://www.nobelprize.org/
3. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Conan O'Brien`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Conan+O%27Brien&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Conan%20O%27Brien&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Conan+O%27Brien
- `openverseSearchUrl`: https://openverse.org/search/image?q=Conan+O%27Brien
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Conan+O%27Brien&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/conan-o-brien.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r08-04 — İlker Çatak

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welchen Berlinale-Erfolg erzielte er 2026?
- **Richtige Antwort:** İlker Çatak
- **Akzeptierte Antworten:** İlker Çatak
- **Rolle/Label:** Regisseur / Goldener Bär 2026
- **Kontext:** Regisseur von Gelbe Briefe / Yellow Letters; gewann den Goldenen Bären 2026.
- **Zeitraum/Datum:** Februar 2026
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.berlinale.de/en/archive/awards-juries/awards.html
2. https://www.nobelprize.org/
3. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `İlker Çatak`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=%C4%B0lker+%C3%87atak&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=%C4%B0lker%20%C3%87atak&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=%C4%B0lker+%C3%87atak
- `openverseSearchUrl`: https://openverse.org/search/image?q=%C4%B0lker+%C3%87atak
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=%C4%B0lker+%C3%87atak&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/i-lker-atak.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r08-05 — Sandra Hüller

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum bleibt sie als Kultur-Bildertest-Gesicht relevant?
- **Richtige Antwort:** Sandra Hüller
- **Akzeptierte Antworten:** Sandra Hüller
- **Rolle/Label:** Schauspielerin
- **Kontext:** Deutsche Schauspielerin; international sichtbare Filmfigur und 2026 Berlinale-preisrelevant.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.berlinale.de/en/archive/awards-juries/awards.html
2. https://www.nobelprize.org/
3. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Sandra Hüller`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Sandra+H%C3%BCller&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Sandra%20H%C3%BCller&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Sandra+H%C3%BCller
- `openverseSearchUrl`: https://openverse.org/search/image?q=Sandra+H%C3%BCller
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Sandra+H%C3%BCller&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/sandra-h-ller.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r08-06 — Jafar Panahi

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum ist er politisch-kulturell relevant?
- **Richtige Antwort:** Jafar Panahi
- **Akzeptierte Antworten:** Jafar Panahi
- **Rolle/Label:** Regisseur
- **Kontext:** Iranischer Regisseur; Cannes-/Kino-Kontext, politisch verfolgter Filmemacher.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.festival-cannes.com/
2. https://www.nobelprize.org/
3. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Jafar Panahi`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Jafar+Panahi&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Jafar%20Panahi&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Jafar+Panahi
- `openverseSearchUrl`: https://openverse.org/search/image?q=Jafar+Panahi
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Jafar+Panahi&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/jafar-panahi.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r08-07 — Arundhati Roy

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `niedrig`
- **Frage/Prompt:** Wer ist das – und warum könnte sie im Kultur-/Politik-Kontext auftauchen?
- **Richtige Antwort:** Arundhati Roy
- **Akzeptierte Antworten:** Arundhati Roy
- **Rolle/Label:** Schriftstellerin/Aktivistin
- **Kontext:** Indische Schriftstellerin und Aktivistin; sichtbar bei Debatten über Kunst, Politik und Protest.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.theguardian.com/
2. https://www.nobelprize.org/
3. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Arundhati Roy`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Arundhati+Roy&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Arundhati%20Roy&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Arundhati+Roy
- `openverseSearchUrl`: https://openverse.org/search/image?q=Arundhati+Roy
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Arundhati+Roy&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/arundhati-roy.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r08-08 — Maria Ressa

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `niedrig`
- **Frage/Prompt:** Wer ist das – und warum ist sie für Journalismusfreiheit relevant?
- **Richtige Antwort:** Maria Ressa
- **Akzeptierte Antworten:** Maria Ressa
- **Rolle/Label:** Journalistin / Pressefreiheit
- **Kontext:** Nobelpreisträgerin und Journalistin; Symbolfigur für Pressefreiheit und Plattform-/Desinformationsdebatten.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.rappler.com/
2. https://www.nobelprize.org/
3. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Maria Ressa`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Maria+Ressa&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Maria%20Ressa&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Maria+Ressa
- `openverseSearchUrl`: https://openverse.org/search/image?q=Maria+Ressa
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Maria+Ressa&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/maria-ressa.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r08-09 — Oscars 2026 – Best Picture

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welcher Film gewann 2026 den Oscar für den besten Film?
- **Richtige Antwort:** Oscars 2026 – Best Picture
- **Akzeptierte Antworten:** Oscars 2026 – Best Picture
- **Rolle/Label:** 
- **Kontext:** One Battle After Another gewann bei den 98. Academy Awards den Oscar für Best Picture.
- **Zeitraum/Datum:** 15. März 2026
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.oscars.org/oscars/ceremonies/2026
2. https://www.nobelprize.org/
3. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Oscars 2026 best picture winner`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Oscars+2026+best+picture+winner&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Oscars%202026%20best%20picture%20winner&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Oscars+2026+best+picture+winner
- `openverseSearchUrl`: https://openverse.org/search/image?q=Oscars+2026+best+picture+winner
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Oscars+2026+%E2%80%93+Best+Picture&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/oscars-2026-best-picture.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r08-10 — Berlinale 2026 – Goldener Bär

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welcher Film gewann den Goldenen Bären 2026?
- **Richtige Antwort:** Berlinale 2026 – Goldener Bär
- **Akzeptierte Antworten:** Berlinale 2026 – Goldener Bär
- **Rolle/Label:** 
- **Kontext:** Gelbe Briefe / Yellow Letters von İlker Çatak gewann den Goldenen Bären.
- **Zeitraum/Datum:** 21. Februar 2026
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.berlinale.de/en/archive/awards-juries/awards.html
2. https://www.nobelprize.org/
3. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Berlinale 2026 Golden Bear winner`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Berlinale+2026+Golden+Bear+winner&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Berlinale%202026%20Golden%20Bear%20winner&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Berlinale+2026+Golden+Bear+winner
- `openverseSearchUrl`: https://openverse.org/search/image?q=Berlinale+2026+Golden+Bear+winner
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Berlinale+2026+%E2%80%93+Goldener+B%C3%A4r&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/berlinale-2026-goldener-b-r.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r08-11 — Literaturnobelpreis 2025

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welches Literaturereignis zeigt dieses Nobelpreis-Bild?
- **Richtige Antwort:** Literaturnobelpreis 2025
- **Akzeptierte Antworten:** Literaturnobelpreis 2025
- **Rolle/Label:** 
- **Kontext:** Der Literaturnobelpreis 2025 ging an László Krasznahorkai.
- **Zeitraum/Datum:** Oktober 2025
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.nobelprize.org/prizes/literature/2025/summary/
2. https://www.nobelprize.org/
3. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Nobel Prize in Literature 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Nobel+Prize+in+Literature+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Nobel%20Prize%20in%20Literature%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Nobel+Prize+in+Literature+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Nobel+Prize+in+Literature+2025
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Literaturnobelpreis+2025&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/literaturnobelpreis-2025.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r08-12 — Pressefreiheit und Desinformation

- **Typ:** `event`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Was könnte ein Bild von Journalisten/Plattformen hier abfragen?
- **Richtige Antwort:** Pressefreiheit und Desinformation
- **Akzeptierte Antworten:** Pressefreiheit und Desinformation
- **Rolle/Label:** 
- **Kontext:** Pressefreiheit, KI-Desinformation und Plattformmacht blieben 2025/26 DJS-nahe Medienthemen.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Kultur/Medien

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://rsf.org/
2. https://cpj.org/
3. https://www.nobelprize.org/
4. https://www.oscars.org/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `press freedom disinformation 2025 Maria Ressa`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=press+freedom+disinformation+2025+Maria+Ressa&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=press%20freedom%20disinformation%202025%20Maria%20Ressa&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=press+freedom+disinformation+2025+Maria+Ressa
- `openverseSearchUrl`: https://openverse.org/search/image?q=press+freedom+disinformation+2025+Maria+Ressa
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Pressefreiheit+und+Desinformation&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r08/pressefreiheit-und-desinformation.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

## R09 – Sport 2025/26

**Fokus:** Fußball, Olympia, deutsche Medaillen und Funktionäre

### bt26-r09-01 — Sarina Wiegman

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welche Mannschaft führte sie 2025 zum EM-Titel?
- **Richtige Antwort:** Sarina Wiegman
- **Akzeptierte Antworten:** Sarina Wiegman
- **Rolle/Label:** Trainerin England Frauen
- **Kontext:** Trainerin der englischen Lionesses; England gewann die Women's EURO 2025.
- **Zeitraum/Datum:** Juli 2025
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.uefa.com/womenseuro/news/029b-1e56a4b43051-3ec6381b01f6-1000--england-1-1-spain-aet-3-1-pens-highlights-lionesses-win-wo/
2. https://www.uefa.com/womenseuro/
3. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Sarina Wiegman`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Sarina+Wiegman&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Sarina%20Wiegman&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Sarina+Wiegman
- `openverseSearchUrl`: https://openverse.org/search/image?q=Sarina+Wiegman
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Sarina+Wiegman&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/sarina-wiegman.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r09-02 — Chloe Kelly

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum wurde sie erneut zur englischen EM-Heldin?
- **Richtige Antwort:** Chloe Kelly
- **Akzeptierte Antworten:** Chloe Kelly
- **Rolle/Label:** England-Fußballerin
- **Kontext:** Englische Fußballerin; erzielte im EM-Finale 2025 den entscheidenden Elfmeter.
- **Zeitraum/Datum:** 27. Juli 2025
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.uefa.com/womenseuro/news/029b-1e56a4b43051-3ec6381b01f6-1000--england-1-1-spain-aet-3-1-pens-highlights-lionesses-win-wo/
2. https://www.uefa.com/womenseuro/
3. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Chloe Kelly`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Chloe+Kelly&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Chloe%20Kelly&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Chloe+Kelly
- `openverseSearchUrl`: https://openverse.org/search/image?q=Chloe+Kelly
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Chloe+Kelly&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/chloe-kelly.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r09-03 — Hannah Hampton

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welche Rolle spielte sie im Women's-EURO-Finale?
- **Richtige Antwort:** Hannah Hampton
- **Akzeptierte Antworten:** Hannah Hampton
- **Rolle/Label:** England-Torhüterin
- **Kontext:** Torhüterin Englands; wichtige Paraden im Elfmeterschießen gegen Spanien.
- **Zeitraum/Datum:** 27. Juli 2025
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.uefa.com/womenseuro/news/029b-1e56a4b43051-3ec6381b01f6-1000--england-1-1-spain-aet-3-1-pens-highlights-lionesses-win-wo/
2. https://www.uefa.com/womenseuro/
3. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Hannah Hampton`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Hannah+Hampton&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Hannah%20Hampton&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Hannah+Hampton
- `openverseSearchUrl`: https://openverse.org/search/image?q=Hannah+Hampton
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Hannah+Hampton&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/hannah-hampton.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r09-04 — Aitana Bonmatí

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum wäre sie trotz Finalniederlage ein Bildertest-Gesicht?
- **Richtige Antwort:** Aitana Bonmatí
- **Akzeptierte Antworten:** Aitana Bonmatí
- **Rolle/Label:** Spanische Fußballerin
- **Kontext:** Spanische Weltklassespielerin; Spanien stand im Women's-EURO-Finale 2025.
- **Zeitraum/Datum:** Juli 2025
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.uefa.com/womenseuro/news/029b-1e56a4b43051-3ec6381b01f6-1000--england-1-1-spain-aet-3-1-pens-highlights-lionesses-win-wo/
2. https://www.uefa.com/womenseuro/
3. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Aitana Bonmatí`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Aitana+Bonmat%C3%AD&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Aitana%20Bonmat%C3%AD&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Aitana+Bonmat%C3%AD
- `openverseSearchUrl`: https://openverse.org/search/image?q=Aitana+Bonmat%C3%AD
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Aitana+Bonmat%C3%AD&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/aitana-bonmat.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r09-05 — Cole Palmer

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welches Club-WM-Finale prägte er 2025?
- **Richtige Antwort:** Cole Palmer
- **Akzeptierte Antworten:** Cole Palmer
- **Rolle/Label:** Chelsea-Fußballer
- **Kontext:** Chelsea-Spieler; zwei Tore und Assist im 3:0-Finale gegen PSG beim FIFA Club World Cup 2025.
- **Zeitraum/Datum:** 13. Juli 2025
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.fifa.com/en/tournaments/mens/club-world-cup/usa-2025/articles/chelsea-paris-saint-germain-highlights-match-report
2. https://www.uefa.com/womenseuro/
3. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Cole Palmer`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Cole+Palmer&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Cole%20Palmer&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Cole+Palmer
- `openverseSearchUrl`: https://openverse.org/search/image?q=Cole+Palmer
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Cole+Palmer&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/cole-palmer.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r09-06 — Reece James

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welches Trophäenbild könnte mit ihm verbunden sein?
- **Richtige Antwort:** Reece James
- **Akzeptierte Antworten:** Reece James
- **Rolle/Label:** Chelsea-Kapitän
- **Kontext:** Chelsea-Kapitän; hob die Club-WM-Trophäe 2025 nach dem Sieg gegen PSG.
- **Zeitraum/Datum:** 13. Juli 2025
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.fifa.com/en/tournaments/mens/club-world-cup/usa-2025/articles/chelsea-paris-saint-germain-highlights-match-report
2. https://www.uefa.com/womenseuro/
3. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Reece James`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Reece+James&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Reece%20James&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Reece+James
- `openverseSearchUrl`: https://openverse.org/search/image?q=Reece+James
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Reece+James&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/reece-james.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r09-07 — Johannes Lochner

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welchen Olympiaerfolg erzielte er 2026?
- **Richtige Antwort:** Johannes Lochner
- **Akzeptierte Antworten:** Johannes Lochner
- **Rolle/Label:** Bobpilot
- **Kontext:** Deutscher Bobpilot; gewann bei Milano Cortina 2026 Gold im Viererbob.
- **Zeitraum/Datum:** Februar 2026
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.reuters.com/sports/bobsleigh-lochner-wins-four-man-second-gold-2026-02-22/
2. https://www.olympics.com/en/milano-cortina-2026/medals/medallists/ger
3. https://www.uefa.com/womenseuro/
4. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Johannes Lochner`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Johannes+Lochner&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Johannes%20Lochner&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Johannes+Lochner
- `openverseSearchUrl`: https://openverse.org/search/image?q=Johannes+Lochner
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Johannes+Lochner&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/johannes-lochner.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r09-08 — Tobias Wendl und Tobias Arlt

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer sind diese beiden – und warum sind sie im Rodeln ikonisch?
- **Richtige Antwort:** Tobias Wendl und Tobias Arlt
- **Akzeptierte Antworten:** Tobias Wendl und Tobias Arlt
- **Rolle/Label:** Rennrodler
- **Kontext:** Deutsche Rennrodler; Teil deutscher Goldmomente bei Milano Cortina 2026 im Team-Relay-Kontext.
- **Zeitraum/Datum:** Februar 2026
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.olympics.com/en/milano-cortina-2026/news/winter-olympics-2026-germany-slide-to-luge-team-relay-gold-in-new-track-record
2. https://www.uefa.com/womenseuro/
3. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Tobias Wendl und Tobias Arlt`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Tobias+Wendl+und+Tobias+Arlt&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Tobias%20Wendl%20und%20Tobias%20Arlt&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Tobias+Wendl+und+Tobias+Arlt
- `openverseSearchUrl`: https://openverse.org/search/image?q=Tobias+Wendl+und+Tobias+Arlt
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Tobias+Wendl+und+Tobias+Arlt&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/tobias-wendl-und-tobias-arlt.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r09-09 — UEFA Women's EURO 2025 Finale

- **Typ:** `event`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Was zeigt dieses Fußballbild – und wer gewann?
- **Richtige Antwort:** UEFA Women's EURO 2025 Finale
- **Akzeptierte Antworten:** UEFA Women's EURO 2025 Finale
- **Rolle/Label:** 
- **Kontext:** England besiegte Spanien im Finale in Basel nach Elfmeterschießen und verteidigte den EM-Titel.
- **Zeitraum/Datum:** 27. Juli 2025
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.uefa.com/womenseuro/
2. https://www.uefa.com/womenseuro/news/029b-1e56a4b43051-3ec6381b01f6-1000--england-1-1-spain-aet-3-1-pens-highlights-lionesses-win-wo/
3. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `UEFA Women Euro 2025 final England Spain Basel`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=UEFA+Women+Euro+2025+final+England+Spain+Basel&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=UEFA%20Women%20Euro%202025%20final%20England%20Spain%20Basel&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=UEFA+Women+Euro+2025+final+England+Spain+Basel
- `openverseSearchUrl`: https://openverse.org/search/image?q=UEFA+Women+Euro+2025+final+England+Spain+Basel
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=UEFA+Women%27s+EURO+2025+Finale&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/uefa-women-s-euro-2025-finale.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r09-10 — FIFA Club World Cup 2025 Finale

- **Typ:** `event`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Was zeigt dieses Trophäenbild – und wer gewann?
- **Richtige Antwort:** FIFA Club World Cup 2025 Finale
- **Akzeptierte Antworten:** FIFA Club World Cup 2025 Finale
- **Rolle/Label:** 
- **Kontext:** Chelsea gewann die neue Club-WM im 32-Teams-Format durch ein 3:0 gegen PSG.
- **Zeitraum/Datum:** 13. Juli 2025
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.fifa.com/en/tournaments/mens/club-world-cup/usa-2025
2. https://www.fifa.com/en/tournaments/mens/club-world-cup/usa-2025/articles/chelsea-paris-saint-germain-highlights-match-report
3. https://www.uefa.com/womenseuro/
4. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `FIFA Club World Cup 2025 final Chelsea PSG`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=FIFA+Club+World+Cup+2025+final+Chelsea+PSG&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=FIFA%20Club%20World%20Cup%202025%20final%20Chelsea%20PSG&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=FIFA+Club+World+Cup+2025+final+Chelsea+PSG
- `openverseSearchUrl`: https://openverse.org/search/image?q=FIFA+Club+World+Cup+2025+final+Chelsea+PSG
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=FIFA+Club+World+Cup+2025+Finale&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/fifa-club-world-cup-2025-finale.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r09-11 — Milano Cortina 2026

- **Typ:** `event`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welches Wintersport-Großereignis ist gemeint?
- **Richtige Antwort:** Milano Cortina 2026
- **Akzeptierte Antworten:** Milano Cortina 2026
- **Rolle/Label:** 
- **Kontext:** Olympische Winterspiele 2026 in Mailand/Cortina; wichtig für deutsche Medaillen und Wintersportbilder.
- **Zeitraum/Datum:** 6.–22. Februar 2026
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.olympics.com/en/milano-cortina-2026/
2. https://www.olympics.com/en/milano-cortina-2026/medals/medallists/ger
3. https://www.uefa.com/womenseuro/
4. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Milano Cortina 2026 opening ceremony`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Milano+Cortina+2026+opening+ceremony&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Milano%20Cortina%202026%20opening%20ceremony&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Milano+Cortina+2026+opening+ceremony
- `openverseSearchUrl`: https://openverse.org/search/image?q=Milano+Cortina+2026+opening+ceremony
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Milano+Cortina+2026&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/milano-cortina-2026.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r09-12 — WM 2026 Vorbereitung

- **Typ:** `event`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Was könnte ein Stadion-/Logo-Bild mit USA/Kanada/Mexiko abfragen?
- **Richtige Antwort:** WM 2026 Vorbereitung
- **Akzeptierte Antworten:** WM 2026 Vorbereitung
- **Rolle/Label:** 
- **Kontext:** Die Fußball-WM 2026 findet erstmals mit 48 Teams in USA, Kanada und Mexiko statt.
- **Zeitraum/Datum:** 2026
- **Kategorie:** Sport

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026
2. https://www.uefa.com/womenseuro/
3. https://www.fifa.com/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `FIFA World Cup 2026 host cities`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=FIFA+World+Cup+2026+host+cities&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=FIFA%20World%20Cup%202026%20host%20cities&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=FIFA+World+Cup+2026+host+cities
- `openverseSearchUrl`: https://openverse.org/search/image?q=FIFA+World+Cup+2026+host+cities
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=WM+2026+Vorbereitung&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r09/wm-2026-vorbereitung.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

## R10 – Klima, Wissenschaft, Gesundheit & Ereignisbilder

**Fokus:** Personen hinter Klima/WHO/Wissenschaft plus ikonische Orts-/Objektbilder

### bt26-r10-01 — Simon Stiell

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und welche Klimaverhandlungen repräsentiert er?
- **Richtige Antwort:** Simon Stiell
- **Akzeptierte Antworten:** Simon Stiell
- **Rolle/Label:** UNFCCC-Chef
- **Kontext:** UNFCCC-Exekutivsekretär; wichtiges Gesicht bei UN-Klimakonferenzen wie COP30.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wissenschaft/Klima

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://unfccc.int/
2. https://unfccc.int/cop30
3. https://www.who.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Simon Stiell`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Simon+Stiell&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Simon%20Stiell&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Simon+Stiell
- `openverseSearchUrl`: https://openverse.org/search/image?q=Simon+Stiell
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Simon+Stiell&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/simon-stiell.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r10-02 — Luiz Inácio Lula da Silva

- **Typ:** `person`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und warum war er im COP30-Kontext wichtig?
- **Richtige Antwort:** Luiz Inácio Lula da Silva
- **Akzeptierte Antworten:** Luiz Inácio Lula da Silva
- **Rolle/Label:** Präsident Brasiliens
- **Kontext:** Brasiliens Präsident; Gastgeberland der COP30 und Symbolfigur für Amazonas-/Klimapolitik.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wissenschaft/Klima

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.gov.br/planalto/
2. https://unfccc.int/cop30
3. https://www.who.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Luiz Inácio Lula da Silva`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Luiz+In%C3%A1cio+Lula+da+Silva&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Luiz%20In%C3%A1cio%20Lula%20da%20Silva&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Luiz+In%C3%A1cio+Lula+da+Silva
- `openverseSearchUrl`: https://openverse.org/search/image?q=Luiz+In%C3%A1cio+Lula+da+Silva
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Luiz+In%C3%A1cio+Lula+da+Silva&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/luiz-in-cio-lula-da-silva.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r10-03 — Marina Silva

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum passt sie zu Amazonas- und Klimapolitik?
- **Richtige Antwort:** Marina Silva
- **Akzeptierte Antworten:** Marina Silva
- **Rolle/Label:** Umweltministerin Brasilien
- **Kontext:** Brasiliens Umweltministerin; international bekannt für Waldschutz und Amazonaspolitik.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wissenschaft/Klima

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.gov.br/mma/
2. https://unfccc.int/cop30
3. https://www.who.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Marina Silva`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Marina+Silva&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Marina%20Silva&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Marina+Silva
- `openverseSearchUrl`: https://openverse.org/search/image?q=Marina+Silva
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Marina+Silva&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/marina-silva.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r10-04 — Tedros Adhanom Ghebreyesus

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Wer ist das – und welches globale Gesundheitsabkommen passt zu ihm?
- **Richtige Antwort:** Tedros Adhanom Ghebreyesus
- **Akzeptierte Antworten:** Tedros Adhanom Ghebreyesus
- **Rolle/Label:** WHO-Generaldirektor
- **Kontext:** WHO-Generaldirektor; relevant beim Pandemieabkommen der Weltgesundheitsversammlung 2025.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Gesundheit/UN

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.who.int/
2. https://unfccc.int/cop30

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Tedros Adhanom Ghebreyesus`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Tedros+Adhanom+Ghebreyesus&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Tedros%20Adhanom%20Ghebreyesus&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Tedros+Adhanom+Ghebreyesus
- `openverseSearchUrl`: https://openverse.org/search/image?q=Tedros+Adhanom+Ghebreyesus
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Tedros+Adhanom+Ghebreyesus&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/tedros-adhanom-ghebreyesus.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r10-05 — Jim Skea

- **Typ:** `person`
- **Schwierigkeit:** `schwer`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und für welches wissenschaftliche Gremium steht er?
- **Richtige Antwort:** Jim Skea
- **Akzeptierte Antworten:** Jim Skea
- **Rolle/Label:** IPCC-Vorsitzender
- **Kontext:** Vorsitzender des IPCC/Weltklimarats; Gesicht für Klimawissenschaft und 1,5-Grad-Debatten.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wissenschaft/Klima

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.ipcc.ch/
2. https://unfccc.int/cop30
3. https://www.who.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Jim Skea`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Jim+Skea&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Jim%20Skea&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Jim+Skea
- `openverseSearchUrl`: https://openverse.org/search/image?q=Jim+Skea
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Jim+Skea&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/jim-skea.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r10-06 — Fatih Birol

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum ist er für Energiejournalismus relevant?
- **Richtige Antwort:** Fatih Birol
- **Akzeptierte Antworten:** Fatih Birol
- **Rolle/Label:** IEA-Exekutivdirektor
- **Kontext:** Chef der Internationalen Energieagentur; wichtig bei Energieprognosen, Öl/Gas und Energiewende.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wissenschaft/Klima

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.iea.org/
2. https://unfccc.int/cop30
3. https://www.who.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Fatih Birol`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Fatih+Birol&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Fatih%20Birol&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Fatih+Birol
- `openverseSearchUrl`: https://openverse.org/search/image?q=Fatih+Birol
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Fatih+Birol&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/fatih-birol.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r10-07 — Suni Williams

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und warum wurde sie durch die Starliner-Mission bekannt?
- **Richtige Antwort:** Suni Williams
- **Akzeptierte Antworten:** Suni Williams
- **Rolle/Label:** NASA-Astronautin
- **Kontext:** NASA-Astronautin; ihr verlängerter ISS-Aufenthalt nach Problemen mit Boeings Starliner war 2025 ein großes Raumfahrtthema.
- **Zeitraum/Datum:** 2025
- **Kategorie:** Wissenschaft/Raumfahrt

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.nasa.gov/
2. https://unfccc.int/cop30
3. https://www.who.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Suni Williams`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Suni+Williams&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Suni%20Williams&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Suni+Williams
- `openverseSearchUrl`: https://openverse.org/search/image?q=Suni+Williams
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Suni+Williams&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/suni-williams.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r10-08 — Butch Wilmore

- **Typ:** `person`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Wer ist das – und mit welchem Raumfahrtproblem ist er verbunden?
- **Richtige Antwort:** Butch Wilmore
- **Akzeptierte Antworten:** Butch Wilmore
- **Rolle/Label:** NASA-Astronaut
- **Kontext:** NASA-Astronaut; gemeinsam mit Suni Williams deutlich länger als geplant auf der ISS.
- **Zeitraum/Datum:** 2025
- **Kategorie:** Wissenschaft/Raumfahrt

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.nasa.gov/
2. https://unfccc.int/cop30
3. https://www.who.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Butch Wilmore`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Butch+Wilmore&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Butch%20Wilmore&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Butch+Wilmore
- `openverseSearchUrl`: https://openverse.org/search/image?q=Butch+Wilmore
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=Butch+Wilmore&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/butch-wilmore.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r10-09 — COP30 in Belém

- **Typ:** `event`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welche Klimakonferenz fand 2025 in dieser Amazonas-Stadt statt?
- **Richtige Antwort:** COP30 in Belém
- **Akzeptierte Antworten:** COP30 in Belém
- **Rolle/Label:** 
- **Kontext:** COP30 fand 2025 in Belém, Brasilien, statt; symbolisch wichtig wegen Amazonas/Klimaschutz.
- **Zeitraum/Datum:** November 2025
- **Kategorie:** Ereignisse/Orte

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://unfccc.int/cop30
2. https://cop30.br/en
3. https://www.who.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `COP30 Belem Brazil 2025 conference`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=COP30+Belem+Brazil+2025+conference&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=COP30%20Belem%20Brazil%202025%20conference&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=COP30+Belem+Brazil+2025+conference
- `openverseSearchUrl`: https://openverse.org/search/image?q=COP30+Belem+Brazil+2025+conference
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=COP30+in+Bel%C3%A9m&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/cop30-in-bel-m.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r10-10 — 80 Jahre Hiroshima und Nagasaki

- **Typ:** `event`
- **Schwierigkeit:** `leicht`
- **DJS-Wahrscheinlichkeit:** `hoch`
- **Frage/Prompt:** Welche japanischen Städte stehen für dieses Gedenkbild?
- **Richtige Antwort:** 80 Jahre Hiroshima und Nagasaki
- **Akzeptierte Antworten:** 80 Jahre Hiroshima und Nagasaki
- **Rolle/Label:** 
- **Kontext:** 2025 jährten sich die Atombombenabwürfe auf Hiroshima und Nagasaki zum 80. Mal.
- **Zeitraum/Datum:** 6./9. August 2025
- **Kategorie:** Ereignisse/Orte

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.un.org/
2. https://www.city.hiroshima.lg.jp/
3. https://unfccc.int/cop30
4. https://www.who.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `Hiroshima Nagasaki 80th anniversary 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=Hiroshima+Nagasaki+80th+anniversary+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=Hiroshima%20Nagasaki%2080th%20anniversary%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=Hiroshima+Nagasaki+80th+anniversary+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=Hiroshima+Nagasaki+80th+anniversary+2025
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=80+Jahre+Hiroshima+und+Nagasaki&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/80-jahre-hiroshima-und-nagasaki.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r10-11 — A23a-Eisberg

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Was könnte ein Satelliten-/Eisbergbild im Test meinen?
- **Richtige Antwort:** A23a-Eisberg
- **Akzeptierte Antworten:** A23a-Eisberg
- **Rolle/Label:** 
- **Kontext:** Der riesige Eisberg A23a war 2025/26 immer wieder in Nachrichten und NASA/ESA-Bildern präsent.
- **Zeitraum/Datum:** 2025/26
- **Kategorie:** Wissenschaft/Klima

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://earthobservatory.nasa.gov/
2. https://unfccc.int/cop30
3. https://www.who.int/

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `A23a iceberg 2025`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=A23a+iceberg+2025&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=A23a%20iceberg%202025&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=A23a+iceberg+2025
- `openverseSearchUrl`: https://openverse.org/search/image?q=A23a+iceberg+2025
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=A23a-Eisberg&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/a23a-eisberg.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

### bt26-r10-12 — WHO-Pandemieabkommen

- **Typ:** `event`
- **Schwierigkeit:** `mittel`
- **DJS-Wahrscheinlichkeit:** `mittel`
- **Frage/Prompt:** Welches globale Gesundheitsereignis könnte ein WHO-Saalbild zeigen?
- **Richtige Antwort:** WHO-Pandemieabkommen
- **Akzeptierte Antworten:** WHO-Pandemieabkommen
- **Rolle/Label:** 
- **Kontext:** Die Weltgesundheitsversammlung nahm 2025 das WHO-Pandemieabkommen an.
- **Zeitraum/Datum:** 20. Mai 2025
- **Kategorie:** Gesundheit/UN

**A) Inhaltliche Quellen für Frage/Antwort:**
1. https://www.who.int/
2. https://unfccc.int/cop30

**B) Lizenzfreie/freie Bildquellen-Kandidaten für Code:**
- `imageQuery`: `WHO pandemic agreement 2025 World Health Assembly`
- `commonsSearchUrl`: https://commons.wikimedia.org/w/index.php?search=WHO+pandemic+agreement+2025+World+Health+Assembly&title=Special:MediaSearch&type=image
- `commonsApiUrl`: https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=WHO%20pandemic%20agreement%202025%20World%20Health%20Assembly&gsrlimit=5&prop=imageinfo&iiprop=url%7Cextmetadata&format=json&origin=*
- `wikipediaSearchUrl`: https://de.wikipedia.org/w/index.php?search=WHO+pandemic+agreement+2025+World+Health+Assembly
- `openverseSearchUrl`: https://openverse.org/search/image?q=WHO+pandemic+agreement+2025+World+Health+Assembly
- `officialImageHint`: https://commons.wikimedia.org/w/index.php?search=WHO-Pandemieabkommen&title=Special:MediaSearch&type=image
- `localPathSuggestion`: `/bildertest/2026/r10/who-pandemieabkommen.jpg`
- `imageLicenseStatus`: `CANDIDATE_ONLY__MUST_VERIFY_FILE_LICENSE`
- **Code-Notiz:** Erst konkrete Commons-File-Seite wählen, dann `extmetadata` speichern. Kein Agenturfoto und kein Social-Media-Screenshot ohne Rechte.

---

## 3. Qualitätscheck vor Import

- Jede inhaltliche Antwort braucht mindestens eine Primärquelle oder etablierte Nachrichtenquelle.
- Jede Bilddatei braucht konkrete FilePage, Autor, Lizenz, Lizenz-URL, Credit-Zeile.
- Eventbilder nur nutzen, wenn sie wirklich das abgefragte Ereignis zeigen oder als Symbolbild eindeutig markiert sind.
- Bei lebenden Personen keine KI-generierten Porträts verwenden.
- Bei Kriegs-/Gewalt-/Katastrophenbildern auf Würde, Kontext und Triggerwirkung achten; für DJS-Training reichen oft neutrale Symbolbilder, Orte, Institutionen oder Pressekonferenzbilder.
