#!/usr/bin/env python3
"""
Session-Ende-Routine
====================
Wird vom Launcher ▶ Session-Ende.command aufgerufen.
Aktualisiert automatisch alle MD-Dateien, archiviert IMPORT, zeigt Quick-Stats.

Was passiert (in Reihenfolge):
1. IMPORT/ Inhalt nach _archive_imports/<DATUM>/ verschieben
2. ALLE_FRAGEN_UND_ANTWORTEN.md aus questions.json regenerieren
3. PROJEKT_STATUS.md aktualisieren (Versionsnummer, Datum, Stats)
4. CHANGELOG_FRAGEN.md prüfen (zeigt letzte 3 Einträge)
5. Lint laufen lassen → Output anzeigen
6. Quick-Stats in Konsole

Idempotent: kann beliebig oft laufen.
"""
import json
import os
import sys
import shutil
import subprocess
import datetime
from pathlib import Path
from collections import Counter

PROJ_DIR = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd()
APP_DIR = PROJ_DIR / "app"
IMPORT_DIR = PROJ_DIR / "IMPORT"
ARCHIVE_DIR = PROJ_DIR / "_archive_imports"
QUESTIONS_JSON = APP_DIR / "src" / "data" / "questions.json"
CATEGORIES_JSON = APP_DIR / "src" / "data" / "categories.json"
CHANGELOG_JSON = APP_DIR / "src" / "data" / "changelog.json"
NOW = datetime.datetime.now()
TODAY = NOW.strftime("%Y-%m-%d")
NOW_STR = NOW.strftime("%Y-%m-%d %H:%M")

# Status emoji
def ok(msg): print(f"  ✓ {msg}")
def info(msg): print(f"▶ {msg}")
def warn(msg): print(f"  ⚠ {msg}")
def err(msg): print(f"  ✗ {msg}")

# ─────────────────────────────────────────────────────────────────────────
# Step 1: Archive IMPORT
# ─────────────────────────────────────────────────────────────────────────
def archive_import():
    info("1/6  IMPORT-Ordner archivieren")
    if not IMPORT_DIR.exists():
        warn("Kein IMPORT-Ordner vorhanden — überspringen.")
        return
    # Check if empty
    contents = [p for p in IMPORT_DIR.iterdir() if not p.name.startswith('.')]
    if not contents:
        ok("IMPORT ist leer — nichts zu archivieren.")
        return
    # Move all to _archive_imports/<timestamp>/
    stamp = NOW.strftime("%Y-%m-%d_%H-%M")
    target = ARCHIVE_DIR / stamp
    target.mkdir(parents=True, exist_ok=True)
    moved = 0
    for item in contents:
        try:
            shutil.move(str(item), str(target / item.name))
            moved += 1
        except Exception as e:
            err(f"Konnte {item.name} nicht verschieben: {e}")
    ok(f"{moved} Element(e) nach _archive_imports/{stamp}/")

# ─────────────────────────────────────────────────────────────────────────
# Step 2: Regenerate ALLE_FRAGEN_UND_ANTWORTEN.md
# ─────────────────────────────────────────────────────────────────────────
def regenerate_alle_fragen():
    info("2/6  ALLE_FRAGEN_UND_ANTWORTEN.md regenerieren")
    if not QUESTIONS_JSON.exists():
        err(f"questions.json nicht gefunden: {QUESTIONS_JSON}")
        return None
    questions = json.loads(QUESTIONS_JSON.read_text(encoding="utf-8"))

    # Sort by category, then id
    by_cat: dict[str, list] = {}
    for q in questions:
        by_cat.setdefault(q.get("category", "Unbekannt"), []).append(q)

    # Order categories
    CAT_ORDER = ["Deutsche Politik", "Internationale Politik", "Wirtschaft & Finanzen",
                 "Gesellschaft & Recht", "Wissenschaft & Technik", "Sport",
                 "Kultur & Medien", "Geografie & Karten", "Bildertest"]
    ordered_cats = [c for c in CAT_ORDER if c in by_cat] + sorted(c for c in by_cat if c not in CAT_ORDER)

    lines = []
    lines.append(f"# Alle Fragen & Antworten — DJS Lernplattform")
    lines.append("")
    lines.append(f"**Auto-generiert:** {NOW_STR}")
    lines.append(f"**Quelle:** `app/src/data/questions.json`")
    lines.append(f"**Anzahl:** {len(questions)} Fragen gesamt")
    lines.append("")

    # Status breakdown
    status_count = Counter(q.get("reviewStatus", "ok") for q in questions)
    lines.append("## Status-Übersicht")
    lines.append("")
    lines.append("| Status | Anzahl |")
    lines.append("|---|---:|")
    for status, n in status_count.most_common():
        lines.append(f"| {status} | {n} |")
    lines.append("")

    # Inhaltsverzeichnis
    lines.append("## Inhaltsverzeichnis")
    lines.append("")
    for cat in ordered_cats:
        anchor = cat.lower().replace(' & ', '--').replace(' ', '-')
        lines.append(f"- [{cat} ({len(by_cat[cat])})](#{anchor})")
    lines.append("")
    lines.append("---")
    lines.append("")

    # Per Category
    for cat in ordered_cats:
        anchor = cat.lower().replace(' & ', '--').replace(' ', '-')
        lines.append(f"## {cat}")
        lines.append("")
        lines.append(f"{len(by_cat[cat])} Fragen")
        lines.append("")

        # Sort: ok first, then ungeprüft, then archive
        STATUS_ORDER = {'ok': 0, 'ok-präzisieren': 1, 'ungeprüft': 2, 'korrigieren': 3,
                        'umformulieren': 3, 'aktualisieren': 3, 'archiv-djs-alt': 9, 'archiv': 9}
        cat_qs = sorted(by_cat[cat], key=lambda q: (STATUS_ORDER.get(q.get('reviewStatus','ok'), 5), q.get('id','')))

        for i, q in enumerate(cat_qs, 1):
            status = q.get('reviewStatus', 'ok')
            status_badge = {
                'ok': '✅',
                'ok-präzisieren': '🔵',
                'ungeprüft': '🟡',
                'korrigieren': '🟠',
                'umformulieren': '🟠',
                'aktualisieren': '🟠',
                'archiv-djs-alt': '📦',
                'archiv': '📦',
                'streichen': '❌',
            }.get(status, '❓')

            lines.append(f"### {i}. {status_badge} {q.get('question','(keine Frage)')}")
            lines.append("")
            lines.append(f"- **ID:** `{q.get('id','?')}`  |  **Schwierigkeit:** {q.get('difficulty','?')}  |  **Typ:** {q.get('type','?')}  |  **Jahr:** {q.get('year','?')}")
            if status != 'ok':
                lines.append(f"- **Status:** `{status}`")
            answers = q.get('correctAnswers', [])
            if answers:
                ans_text = ' / '.join(str(a) for a in answers)
                lines.append(f"- **Antwort:** {ans_text}")
            options = q.get('options', [])
            if options:
                lines.append(f"- **Optionen:** {', '.join(str(o) for o in options[:6])}")
            expl = q.get('explanation', '').strip()
            if expl:
                lines.append(f"- **Erklärung:** {expl}")
            ctx = q.get('context', '').strip()
            if ctx:
                lines.append(f"- **Kontext:** {ctx}")
            if q.get('reviewNote'):
                lines.append(f"- **Review-Notiz:** _{q['reviewNote']}_")
            lines.append("")
        lines.append("---")
        lines.append("")

    out_path = PROJ_DIR / "ALLE_FRAGEN_UND_ANTWORTEN.md"
    out_path.write_text("\n".join(lines), encoding="utf-8")
    ok(f"{len(questions)} Fragen → {out_path.name} ({out_path.stat().st_size:,} bytes)")
    return questions, status_count

# ─────────────────────────────────────────────────────────────────────────
# Step 3: PROJEKT_STATUS.md aktualisieren
# ─────────────────────────────────────────────────────────────────────────
def update_projekt_status(questions, status_count):
    info("3/6  PROJEKT_STATUS.md aktualisieren")
    if not questions:
        warn("Keine Fragen geladen — Status übersprungen.")
        return

    # Get Bildertest count
    bildertest_path = APP_DIR / "src" / "data" / "bildertestRounds.json"
    bildertest_items = 0
    bildertest_rounds = 0
    if bildertest_path.exists():
        try:
            bt = json.loads(bildertest_path.read_text(encoding="utf-8"))
            rounds = bt.get("rounds", [])
            bildertest_rounds = len(rounds)
            bildertest_items = sum(len(r.get("items", [])) for r in rounds)
        except Exception:
            pass

    # Get version from package.json
    version = "?.?.?"
    pkg = APP_DIR / "package.json"
    if pkg.exists():
        try:
            v = json.loads(pkg.read_text(encoding="utf-8")).get("version")
            if v: version = v
        except Exception: pass

    # Tage bis Prüfung
    exam = datetime.date(2026, 6, 27)
    days_left = (exam - NOW.date()).days

    playable = status_count.get('ok', 0) + status_count.get('ok-präzisieren', 0) + status_count.get('ungeprüft', 0)
    blocked  = sum(n for s, n in status_count.items() if s in
                  ('korrigieren','umformulieren','aktualisieren','archiv','archiv-djs-alt','streichen'))

    lines = []
    lines.append("# 🎯 PROJEKT_STATUS")
    lines.append("")
    lines.append(f"**Letzte Aktualisierung:** {NOW_STR}")
    lines.append(f"**App-Version:** {version}")
    lines.append(f"**Prüfungsdatum:** 27. Juni 2026 (noch **{days_left} Tage**)")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 📊 Wo stehen wir?")
    lines.append("")
    lines.append("### Fragenpool")
    lines.append("")
    lines.append("| Status | Anzahl |")
    lines.append("|---|---:|")
    lines.append(f"| 🟢 **Im aktiven Pool (spielbar)** | **{playable}** |")
    lines.append(f"|    ✅ Freigegeben (`ok`) | {status_count.get('ok', 0)} |")
    lines.append(f"|    🟡 Ungeprüft (`ungeprüft`) | {status_count.get('ungeprüft', 0)} |")
    lines.append(f"|    🔵 Präzisieren (`ok-präzisieren`) | {status_count.get('ok-präzisieren', 0)} |")
    lines.append(f"| 📦 Archiviert / blockiert | {blocked} |")
    lines.append(f"|    📦 DJS-2025-Doppler (`archiv-djs-alt`) | {status_count.get('archiv-djs-alt', 0)} |")
    lines.append(f"|    🟠 Korrekturbedarf | {status_count.get('korrigieren',0)+status_count.get('umformulieren',0)+status_count.get('aktualisieren',0)} |")
    lines.append(f"| **Total** | **{sum(status_count.values())}** |")
    lines.append("")
    lines.append("### Bildertest")
    lines.append("")
    lines.append(f"- **{bildertest_rounds} Runden**, **{bildertest_items} Items** geladen")
    lines.append(f"- Bilder: alle noch Platzhalter (NEEDS_IMAGE_REVIEW)")
    lines.append("")

    # Kategorien-Verteilung
    cat_count = Counter(q.get('category', '?') for q in questions)
    lines.append("### Kategorien")
    lines.append("")
    lines.append("| Kategorie | Fragen |")
    lines.append("|---|---:|")
    for cat, n in cat_count.most_common():
        lines.append(f"| {cat} | {n} |")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 🛣️ Roadmap")
    lines.append("")
    lines.append("### V1.3 (heute, ✅ erledigt)")
    lines.append("- 202 neue Fragen importiert (Status `ungeprüft`)")
    lines.append("- 23 alte Fragen archiviert (DJS-2025-Doppler)")
    lines.append("- Bildertest-Modul gebaut (10 Runden / 120 Items, Bilder pending)")
    lines.append("- IMPORT-Workflow + Session-Ende-Automatik")
    lines.append("")
    lines.append("### V1.4 (nächste Sessions)")
    lines.append("- QA-Pass über 202 neue Fragen → Status `ungeprüft` → `ok`")
    lines.append("- Bildertest-Fotos lizenzfrei beschaffen (Wikimedia)")
    lines.append("- Geo-Quiz-Modul (von ChatGPT vorbereitet)")
    lines.append("- Historische Rubrik mit den 23 archivierten Fragen")
    lines.append("- `kurzantwort`-Type ggf. in QuizMode optimieren")
    lines.append("")
    lines.append("### V2.0 (vor Prüfung)")
    lines.append("- Letzte Aktualisierungsrunde (Juni 2026)")
    lines.append("- Vollständige Quellenverifikation")
    lines.append("- Highscore / Profil / Prüfungssimulation")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 📁 Wichtige Dateien (kurzer Klick-Guide)")
    lines.append("")
    lines.append("| Worauf klicken? | Was passiert? |")
    lines.append("|---|---|")
    lines.append("| `▶ DJS App starten.command` | Startet die App im Browser |")
    lines.append("| `▶ Session-Ende.command` | Räumt auf, aktualisiert MDs |")
    lines.append("| `LIES_MICH.md` | Anfänger-Übersicht, wie alles funktioniert |")
    lines.append("| `ALLE_FRAGEN_UND_ANTWORTEN.md` | Vollständige Fragen-Liste (auto-generiert) |")
    lines.append("| `CHANGELOG_FRAGEN_V1.3.md` | Was wurde wann warum geändert |")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("*Auto-generiert von session_end.py · nicht manuell editieren — Änderungen gehen verloren.*")

    out_path = PROJ_DIR / "PROJEKT_STATUS.md"
    out_path.write_text("\n".join(lines), encoding="utf-8")
    ok(f"PROJEKT_STATUS.md aktualisiert ({out_path.stat().st_size:,} bytes)")

# ─────────────────────────────────────────────────────────────────────────
# Step 4: Show CHANGELOG hints
# ─────────────────────────────────────────────────────────────────────────
def show_changelog():
    info("4/6  CHANGELOG-Überblick")
    if not CHANGELOG_JSON.exists():
        warn("changelog.json nicht gefunden — überspringen.")
        return
    log = json.loads(CHANGELOG_JSON.read_text(encoding="utf-8"))
    if not log:
        warn("Changelog leer.")
        return
    print(f"  → Letzte {min(3, len(log))} Einträge in app/src/data/changelog.json:")
    for entry in log[:3]:
        print(f"    • {entry.get('date','?')}  {entry.get('title','(ohne Titel)')}")

# ─────────────────────────────────────────────────────────────────────────
# Step 5: Lint
# ─────────────────────────────────────────────────────────────────────────
def run_lint():
    info("5/6  Lint laufen lassen")
    lint_script = APP_DIR / "scripts" / "lint-questions.mjs"
    if not lint_script.exists():
        warn("lint-questions.mjs nicht gefunden — überspringen.")
        return
    try:
        result = subprocess.run(
            ["npm", "run", "lint:questions"],
            cwd=str(APP_DIR), capture_output=True, text=True, timeout=60
        )
        # Show summary line(s)
        for line in (result.stdout + result.stderr).split('\n')[-25:]:
            line = line.strip()
            if line and not line.startswith('>') and not line.startswith('npm'):
                print(f"  {line}")
    except Exception as e:
        warn(f"Lint-Fehler: {e}")

# ─────────────────────────────────────────────────────────────────────────
# Step 6: Final stats
# ─────────────────────────────────────────────────────────────────────────
def show_final_stats(status_count):
    info("6/6  Fertig — Quick-Stats")
    total = sum(status_count.values())
    print(f"\n  📦 {total} Fragen gesamt")
    print(f"  🟢 {status_count.get('ok',0)+status_count.get('ok-präzisieren',0)+status_count.get('ungeprüft',0)} im aktiven Pool")
    print(f"  🟡 {status_count.get('ungeprüft',0)} noch ungeprüft (Aufgabe für nächste Session)")
    print(f"  📦 {status_count.get('archiv-djs-alt',0)} archiviert (DJS-2025-Doppler)")

# ─────────────────────────────────────────────────────────────────────────
def main():
    print(f"\n{'='*60}")
    print(f"  DJS Session-Ende — {NOW_STR}")
    print(f"{'='*60}\n")
    if not APP_DIR.exists():
        err(f"App-Ordner nicht gefunden: {APP_DIR}")
        sys.exit(1)

    archive_import()
    res = regenerate_alle_fragen()
    if res:
        questions, status_count = res
        update_projekt_status(questions, status_count)
    else:
        status_count = Counter()
    show_changelog()
    run_lint()
    show_final_stats(status_count)

    print(f"\n{'='*60}")
    print(f"  ✅ Session aufgeräumt — gute Nacht!")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    main()
