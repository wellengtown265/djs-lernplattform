#!/bin/bash
# ▶ Session-Ende
# Aktualisiert alle MDs, archiviert IMPORT, zeigt Status.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJ_DIR="$SCRIPT_DIR"
APP_DIR="$PROJ_DIR/app"

clear
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║              DJS Session-Ende — Aufräumen & Status            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

cd "$PROJ_DIR" || { echo "✗ Pfadfehler"; exit 1; }

# Run session_end.py if available
SE_SCRIPT="$APP_DIR/scripts/session_end.py"
if [ -f "$SE_SCRIPT" ]; then
    python3 "$SE_SCRIPT" "$PROJ_DIR"
else
    echo "⚠ session_end.py nicht gefunden in $APP_DIR/scripts/"
    echo "  → Bitte erst install.sh durchlaufen lassen."
fi

echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
read -p "Drücke Enter zum Schließen …"
