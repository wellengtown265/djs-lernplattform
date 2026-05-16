# 🚀 DEPLOY MASTER-PROMPT — DJS v2 Launch

**Ziel:** DJS-App in 30 Minuten online (Netlify oder Firebase)  
**Setup:** GitHub Repo → Build → Deploy  
**Status:** Stehende Version (202+ Fragen, GeoQuiz, Bildertest, Geo-Daten alle ready)

---

## 📋 PRE-DEPLOY CHECKLIST

```bash
# Lokal vor jedem Deploy checken:
cd /Users/ai_work/AI_WORKSPACE_2026/CLAUDE_CODE/DJS-Lernplattform/app

✅ npm run build → 0 errors (prüfen: ✓ built in X.XXs)
✅ npm run lint:questions → 0 errors (E1-E5 checks)
✅ git status → alles committed (keine unstaged changes)
✅ git log --oneline | head -3 → aktuelle commits sichtbar
✅ Alle Komponenten laden: MapDisplay, GeoQuiz, BildertestMode
✅ dist/ Ordner existiert & ist <5MB
```

---

## 🔧 OPTION A: NETLIFY (Recommended)

### 1️⃣ GITHUB SETUP (5 min)

```bash
# Im DJS-Projekt-Root (/DJS-Lernplattform)
git init                          # Falls noch nicht
git add -A
git commit -m "feat: DJS v2 ready for launch"
git branch -M main                # GitHub default branch
git remote add origin https://github.com/YOUR_USER/djs-lernplattform.git
git push -u origin main           # First time: create repo on github.com first!
```

**GitHub Repo erstellen:** https://github.com/new
- Name: `djs-lernplattform`
- Public (damit Netlify bauen kann)
- NO README (git wird überschreiben)

### 2️⃣ NETLIFY CONNECT (5 min)

```bash
# Option A: CLI (schnell)
npm install -g netlify-cli
netlify login                     # Browser-Auth
cd app                            # Important: im app/ Ordner!
netlify init                      # Guided setup

# Im Wizard:
  → "Connect to Git provider" → GitHub
  → Select repo: djs-lernplattform
  → Base directory: app
  → Build command: npm run build
  → Publish directory: dist
  → Create site
```

**ODER Option B: UI (slower)**
1. Gehe zu https://netlify.com → Sign up with GitHub
2. "New site from Git"
3. Wähle `djs-lernplattform` Repository
4. Build settings:
   - Base directory: `app`
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

### 3️⃣ CUSTOM DOMAIN (optional, 5 min)

```
Netlify Dashboard → Site settings → Domain management
→ "Add domain" oder "Change site name"
  djs-app.netlify.app (auto)
  ODER custom domain: djs.yourdomain.com (DNS setup nötig)
```

### ✅ LIVE CHECK
```
https://djs-app.netlify.app/
→ Sollte App mit Logo zeigen
→ Quiz klickbar?
→ GeoQuiz rendert?
→ Bildertest lädt Fotos?
```

---

## 🔥 OPTION B: FIREBASE HOSTING

### 1️⃣ FIREBASE SETUP (5 min)

```bash
# Install Tools
npm install -g firebase-tools
firebase login                    # Browser-Auth

# Im DJS-App-Root:
firebase init hosting

# Wizard:
  → Use existing project? → SELECT: djs-app (oder create neu)
  → Public directory? → dist
  → SPA (rewrite URLs)? → YES
  → Overwrite dist/index.html? → NO
  → Enable automatic builds from GitHub? → YES (optional)
```

### 2️⃣ KONFIGURIERE firebase.json

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### 3️⃣ BUILD & DEPLOY

```bash
cd app
npm run build                     # → dist/ erstellen

# From project root:
firebase deploy --only hosting    # → live!
```

### ✅ LIVE CHECK
```
https://djs-app.web.app/
→ Sollte App anzeigen
```

---

## 🔄 POST-DEPLOY WORKFLOW

### Jedes Mal wenn du updaten willst:

```bash
# 1. Code ändern (Desktop macht Features, Terminal validiert Data)

# 2. Build lokal testen
cd app && npm run build           # 0 errors?
npm run preview                   # Im Browser überprüfen

# 3. Commit
git add -A
git commit -m "feat: [description] — v2.1"

# 4. Push
git push origin main              # → Auto-deploy triggert (Netlify/Firebase)

# 5. Warte auf Deploy (Netlify: ~2min, Firebase: ~1min)
# Netlify: https://app.netlify.com/sites/djs-app → Deploys tab
# Firebase: firebase deploy --only hosting

# 6. Verify live
# Netlify: https://djs-app.netlify.app
# Firebase: https://djs-app.web.app
```

---

## 🎯 NETLIFY vs FIREBASE (Choice)

| Kriterium | Netlify | Firebase |
|---|---|---|
| **Geschwindigkeit** | ⚡ 2-3 min Build | ⚡ 1-2 min |
| **Auto-Deploy von GitHub** | ✅ Yes (free) | ✅ Yes (requires setup) |
| **Custom Domain** | ✅ Easy | ✅ Easy |
| **Serverless Functions** | ✅ (Edge Functions) | ✅ (Cloud Functions) |
| **Performance Monitoring** | ✅ Basic | ✅ Advanced |
| **Cost (ab >100 visits/tag)** | Free tier großzügig | Free tier auch ok |
| **Einfachheit für Anfänger** | ⭐⭐⭐⭐ | ⭐⭐⭐ |

**EMPFEHLUNG:** **NETLIFY** (schneller setup, besser für static sites)

---

## 🚨 TROUBLESHOOTING

### Build fehlt / 404

```bash
# Problem: dist/ nicht gebaut oder deploy zeigt wrong folder
# Fix:
cd app
npm run build
# Prüfe: ls dist/index.html → muss existieren!

# Netlify: Base directory = app (nicht root!)
# Firebase: public = dist (in firebase.json)
```

### Build hängt bei "computing gzip"

```
Warning: chunks > 500KB — normal für Vite.
Kein Problem für Demo!
Fix später: Dynamic imports in Geo/Bildertest.
```

### App startet, aber blank (white screen)

```
Problem: React nicht geladen / build korrupt
Debug:
  1. Browser DevTools → Console tab (errors?)
  2. Network tab → index.html 200? app.js 200?
  3. LocalStorage cleared? (localStorage.clear() in console)
  4. npm run preview lokal ok? (ja → deploy problem, nein → build problem)
```

### GitHub Repo nicht angebunden

```bash
# Prüfe:
git remote -v                     # muss origin anzeigen

# Falls nicht:
git remote add origin https://github.com/USER/djs-lernplattform.git
git push -u origin main
```

---

## ✨ FINAL CHECKLIST (vor Go-Live)

```
☐ npm run build = 0 errors
☐ npm run lint:questions = 0 errors
☐ GitHub repo public + latest code pushed
☐ Netlify/Firebase deployed (green checkmark)
☐ Live URL works (kein 404)
☐ Quiz clickable + Fragen laden
☐ GeoQuiz Karten rendern
☐ Bildertest Fotos sichtbar
☐ Stats tracken (XP, Badges)
☐ localStorage funktioniert (Logout & Reload = Progress da?)
☐ Performance: LCP <3s, CLS <0.1
☐ Mobile Test: App responsiv?
```

---

## 🎬 GO-LIVE PROTOCOL

**17. Mai 08:00 Uhr:**

```
1. Final Build:    npm run build        (5 min)
2. Deploy:         git push + netlify   (2 min auto-deploy)
3. Verify:         URL öffnen           (1 min)
4. Friends-Notify: "App is live!"       (1 min)
5. Friends Test:   First 30 users       (30 min)
6. Bug-Fix:        Falls nötig          (emergency)
7. Celebrate:      🎉                   (infinity)
```

---

## 📲 DEPLOYMENT URLS (Bookmarks)

```
Development:
  Local preview: npm run preview (http://localhost:4173)

Production:
  Netlify:   https://djs-app.netlify.app
  Firebase:  https://djs-app.web.app
  Custom:    https://djs.yourdomain.com (wenn configured)

Admin:
  Netlify:   https://app.netlify.com/sites/djs-app
  Firebase:  https://console.firebase.google.com/project/djs-app
  GitHub:    https://github.com/USER/djs-lernplattform
```

---

## 💡 PRO-TIPPS

1. **Vor Deploy testen:** `npm run preview` = exakte Production-Sim
2. **Incremental deploys:** Small commits → schneller feedback
3. **Monitoring:** Netlify Analytics / Firebase Crashlytics aktivieren
4. **Rollback:** Netlify: "Rollback Deploy" in UI, Firebase: `firebase hosting:channel:deploy...`
5. **Team:** GitHub → Settings → Collaborators → Friends hinzufügen (für später)

---

**Viel Erfolg beim Launch! 🚀**

*Created: 16. Mai 22:30*  
*Valid until: 17. Mai 09:00 (dann live)*
