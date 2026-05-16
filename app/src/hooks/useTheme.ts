/**
 * useTheme — Light/Dark/Auto Mode mit Persistenz.
 *
 * Schreibt `data-theme="light|dark"` auf <html>. Bei `auto` wird das Attribut
 * entfernt → design-system.css fällt auf `prefers-color-scheme` zurück.
 */

import { useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark' | 'auto';
const STORAGE_KEY = 'djs_theme';

function readStored(): ThemeMode {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'light' || v === 'dark' || v === 'auto') return v;
  } catch { /* ignore */ }
  return 'auto';
}

function apply(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === 'auto') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', mode);
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(() => readStored());

  useEffect(() => {
    apply(mode);
    try { localStorage.setItem(STORAGE_KEY, mode); } catch { /* ignore */ }
  }, [mode]);

  return { mode, setMode };
}
