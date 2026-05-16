#!/bin/bash
# ▶ DJS App starten — Doppelklick zum Starten

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$SCRIPT_DIR/app"

clear
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         DJS Lernplattform — Dev Server starten                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "📂 App-Verzeichnis: $APP_DIR"

cd "$APP_DIR" || { echo "✗ Kann nicht in App-Ordner wechseln"; exit 1; }

# Node-Check
if ! command -v npm > /dev/null; then
    echo ""
    echo "✗ npm nicht gefunden! Bitte Node.js installieren: https://nodejs.org/de/download"
    echo ""
    read -p "Drücke Enter zum Schließen…"
    exit 1
fi

# Zombie-Prozesse auf Vite-Ports killen (5173–5180)
echo ""
echo "▶ Alte Dev-Server beenden, falls noch was läuft …"
for PORT in 5173 5174 5175 5176; do
    PIDS=$(lsof -ti :$PORT 2>/dev/null)
    if [ -n "$PIDS" ]; then
        echo "  🪦 Killing PID(s) auf :$PORT — $PIDS"
        echo "$PIDS" | xargs kill -9 2>/dev/null
    fi
done
sleep 1

# Install if needed
if [ ! -d "node_modules" ]; then
    echo ""
    echo "▶ node_modules fehlen — Installation läuft (1–3 Min) …"
    npm install
fi

# Quick lint
if [ -f "scripts/lint-questions.mjs" ]; then
    echo ""
    echo "▶ Schnell-Check der Fragen …"
    npm run lint:questions 2>&1 | tail -10
fi

echo ""
echo "▶ Starte Dev-Server auf :5173 …"
echo "   → Browser öffnet sich gleich auf http://localhost:5173"
echo "   → Mit Ctrl+C beenden"
echo ""
sleep 1

# Auto-open browser sobald Server antwortet
(
    for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
        sleep 1
        if curl -s -o /dev/null -w "%{http_code}" http://localhost:5173 2>/dev/null | grep -q 200; then
            open "http://localhost:5173"
            exit 0
        fi
    done
    open "http://localhost:5173"  # Fallback
) &

npm run dev -- --port 5173
