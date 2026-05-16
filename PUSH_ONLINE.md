# 🚀 PUSH ONLINE — 17. Mai 2026

**Status:** Desktop baut. Terminal wartet. Freunde brauchen dich.

---

## 📍 TIMELINE (REAL)

| Zeit | Was | Wer | Status |
|------|-----|-----|--------|
| **16. Mai 23:00** | 🎯 Desktop startet Fragen-Batch | Desktop | ⏳ IN PROGRESS |
| **16. Mai 04:00** | ✅ 120-150 Fragen fertig | Desktop | ⏳ |
| **16. Mai 04:30** | ✅ Merge & Lint | Terminal | ⏳ |
| **16. Mai 05:00** | ✅ GeoQuiz + Bildertest poliert | Desktop | ⏳ |
| **16. Mai 06:00** | ✅ npm run build (0 errors) | Terminal | ⏳ |
| **16. Mai 06:30** | ✅ Full-Stack-Test | Both | ⏳ |
| **16. Mai 07:30** | 🚀 Deploy zu Vercel/Server | Ops | ⏳ |
| **17. Mai 08:00** | 🎉 LIVE | All | ⏳ |
| **17. Mai 08:30** | 👯 Friends starten | Friends | 🎯 |

---

## ✅ IMMEDIATE TODO

### Desktop-Shift (bis 17. Mai 04:00)
```
□ Öffne MASTER-PROMPT_FOKUS-2025-2026-FRAGENUPDATE.md
□ Nimm dir 2-3 Themenkomplexe (z.B. AfD, Haushalt, Migration)
□ 40-50 Fragen pro Theme (leicht:mittel:schwer = 60:30:10)
□ Jede Frage: Struktur, Erklärung (min. 150 Wörter), Quelle
□ npm run lint:questions (muss 0 Fehler sein)
□ Commit: "feat(questions): add FOKUS batch 1/3"
→ Fertig 02:30-03:00 (dann 1-2h Puffer)
```

### Terminal-Shift (parallel, starts after Desktop)
```
□ questions.json Merge (ist vorbereit)
□ Fixer: 12 map-interactive Geo-Fragen ohne Highlight-Codes
□ validate_data.mjs nochmal laufen → Report
□ npm run build → Screenshot der success-Message
□ Bereit für Deploy bis 07:30
```

### Dev-Team (Desktop)
```
□ GeoQuiz.tsx: alle 4 Modi funktionieren?
□ BildertestMode.tsx: 10 Runden, Stats anzeigen
□ MapDisplay: render test (Deutschland + World)
□ App.tsx: alle Seiten-Routes functional
□ Browser-Test: Quiz → Learn → Geo → Bildertest durchspielen
□ npm run build 0 errors
```

---

## 🎯 WIN-CONDITION

**Freunde können um 08:30 spielen und sagen: "Das ist sick!"**

- ✅ 320+ Fragen (202 + 120 neu)
- ✅ Geo-Quiz mit Karten
- ✅ Bildertest mit echten Fotos
- ✅ Stats & Fortschritt tracken
- ✅ Smooth Performance
- ✅ No 404s, no crashes

---

## 💪 PACING-TIPPS

**Desktop (Fragen schnell schreiben):**
- Nutze Template (copy-paste structure)
- Schreib Frage + Antwort FIRST (30s)
- Dann Explanation + Context (2min)
- Quelle checken (dpa, Reuters, Bundesregierung) (1min)
- Total: ~4-5min pro Frage wenn in Rhythm

**Terminal (Daten validieren):**
- Automatische Checks laufen (validate_data.mjs)
- Nur Fehler fixen, nicht perfectionism
- Focus: Duplicates, broken URLs, missing fields

**Ops (Deploy):**
- Vercel setup bereits? (Check: repo connected)
- Build hooks aktiv?
- Env vars set? (falls nötig)

---

## 🚨 IF SHIT HITS THE FAN

| Problem | Quick Fix | Fallback |
|---|---|---|
| Desktop zu slow | 2 Personen = 2h statt 4h | Starte mit 80 Fragen, v1.4 += Rest |
| Build fails | Check TypeScript errors, npm install | Redeploy previous stable |
| Geo-Komponente broken | MapDisplay fallback (static image) | Skip Geo für MVP, add später |
| Deploy hangs | Rollback to staging | Netlify statt Vercel |
| Friends report bugs | Quick-fix & redeploy (15min) | Known bugs list + v1.1 patch |

---

## 📲 SIGNAL PLAN

- **Checkpoint 1 (16. Mai 03:00):** Desktop = 100 Fragen done? → Terminal startet Merge
- **Checkpoint 2 (16. Mai 05:00):** Build erfolgreich? → Green light für Deploy
- **Checkpoint 3 (16. Mai 07:30):** Deploy live? → Smoke test mit Friends
- **Checkpoint 4 (17. Mai 08:00):** 🎉 Ready for launch?

---

## 🎬 CUT!

**Das ist dein Moment. Ihr habt 10 Stunden. Lasst euch nicht ablenken.**

**Ziel: 17. Mai 09:00 Uhr, deine Freunde öffnen die App und sagen: "Wow, wie schnell habt ihr das gemacht?"**

**Let's go! 🚀**

---

*Created: 16. Mai 22:30*  
*Target: 17. Mai 08:30*  
*Buffer: 10 Stunden*
