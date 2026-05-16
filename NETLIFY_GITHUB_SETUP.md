# 🔄 GitHub → Netlify Auto-Deploy Setup

## 1️⃣ GET NETLIFY TOKENS

### A. NETLIFY_AUTH_TOKEN
```bash
# Gehe zu: https://app.netlify.com/user/applications/personal-access-tokens
# Oder CLI:
netlify login
cat ~/.netlify/state.json | jq '.users.yourname.auth.token'  # Copy token
```

### B. NETLIFY_SITE_ID
```bash
# Gehe zu: https://app.netlify.com/sites/djs-app → Site settings
# Oder CLI:
netlify status
# Zeigt: site_name: djs-app, site_id: xxxxx-xxxxx

# Oder direkt in netlify.toml:
cat netlify.toml
# Findet: [build] netify_id: "xxxxx"
```

---

## 2️⃣ ADD SECRETS TO GITHUB

1. Gehe zu: **GitHub Repository → Settings → Secrets and variables → Actions**
2. **New repository secret:**
   - Name: `NETLIFY_AUTH_TOKEN`
   - Value: [token von Netlify pasted]
   - Click "Add secret"

3. **New repository secret #2:**
   - Name: `NETLIFY_SITE_ID`
   - Value: [site_id from netlify status]
   - Click "Add secret"

---

## 3️⃣ TEST WORKFLOW

```bash
# Push to main triggert automatisch:
git add .github/workflows/deploy.yml
git commit -m "ci: add Netlify auto-deploy"
git push origin main

# GitHub Actions laufen jetzt:
# → GitHub Repo → Actions tab → Deploy to Netlify
# → Grüner Haken = deployed ✅
# → Rotes X = failed ❌
```

---

## ✅ AFTER SETUP

**Jedes Mal wenn du `git push origin main` machst:**
1. GitHub Actions triggert automatisch
2. Build + Test läuft (3-5 min)
3. Netlify deployed automatisch
4. App live auf `djs-app.netlify.app` (kein manueller Klick nötig!)

---

## 🚨 IF DEPLOY FAILS

```
Check GitHub → Actions → Latest run → logs
Häufige Fehler:
  • npm ci fails → node_modules Problem
  • npm run build fails → TypeScript/Vite error
  • lint:questions fails → Frage-Struktur Problem
  • NETLIFY_AUTH_TOKEN wrong → Check secrets in Settings
```

---

## 💡 BONUS: Deploy Preview (für PRs)

Ändere `deploy --prod` zu `deploy` für Preview-URLs:
```yaml
args: deploy --dir=app/dist  # (kein --prod)
# → Jeder PR kriegt Preview-URL (z.B. djs-app--pr-5.netlify.app)
```

Hilfreich für Code-Review vor Merge!
