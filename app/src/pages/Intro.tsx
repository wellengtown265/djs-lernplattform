/**
 * Intro — First-Time Landing
 *
 * Wird nur beim allerersten Besuch gezeigt. Setzt `intro_completed` in
 * localStorage; danach geht App.tsx direkt zum Dashboard.
 *
 * Animationen: fadeIn + slideUp staggered, max ~1.2s total.
 * Responsiv: Mobile (stacked, 24px padding) → Desktop (48px padding).
 * Dark Mode: automatisch via CSS-Variablen aus design-system.css.
 */

import { useEffect, useState } from 'react';
import { colors, spacing, typography } from '../design-system';

const STORAGE_KEY = 'intro_completed';

export function markIntroComplete() {
  try {
    localStorage.setItem(STORAGE_KEY, 'true');
  } catch {
    /* localStorage disabled — silently ignore */
  }
}

export function isIntroComplete(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

type ModuleId = 'quiz' | 'learn' | 'geo' | 'djs';

interface Props {
  onStart: () => void;
  onJumpToModule?: (module: ModuleId) => void;
}

const MODULES: { id: ModuleId; label: string; hint: string }[] = [
  { id: 'quiz',  label: 'QUIZ',   hint: 'Multiple-Choice' },
  { id: 'learn', label: 'LERNEN', hint: 'Karteikarten + Kontext' },
  { id: 'geo',   label: 'GEO',    hint: 'Karten-Quiz' },
  { id: 'djs',   label: 'DJS',    hint: 'Echte Prüfungsfragen' },
];

export default function Intro({ onStart, onJumpToModule }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 50);
    return () => window.clearTimeout(t);
  }, []);

  const handleStart = () => {
    markIntroComplete();
    onStart();
  };

  const handleModule = (mod: ModuleId) => {
    markIntroComplete();
    onJumpToModule?.(mod);
  };

  // Staggered animation: jeder Block bekommt eine eigene delay
  const stagger = (index: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 400ms var(--ease-smooth) ${index * 100}ms, transform 400ms var(--ease-springy) ${index * 100}ms`,
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `var(--space-12) var(--space-6)`,
        background: 'var(--color-bg)',
        color: 'var(--color-text)',
        position: 'relative',
      }}
    >
      {/* BETA Badge */}
      <div style={{
        position: 'absolute', top: 16, right: 16,
        padding: '4px 10px', borderRadius: 999,
        background: 'rgba(146, 64, 14, 0.25)',
        border: '1px solid rgba(180, 83, 9, 0.5)',
        color: '#fcd34d',
        fontSize: 11, fontFamily: 'monospace',
        letterSpacing: '0.1em', textTransform: 'uppercase',
      }}>BETA 1.3</div>

      <div
        style={{
          width: '100%',
          maxWidth: '640px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: spacing[8],
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <div style={stagger(0)}>
          <img
            src="/djs-logo.jpg"
            alt="Deutsche Journalistenschule"
            style={{
              width: 120,
              height: 120,
              borderRadius: 12,
              objectFit: 'cover',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            }}
          />
        </div>

        {/* Title */}
        <div style={stagger(1)}>
          <h1
            style={{
              ...typography.h1,
              color: colors.djsRed,
              margin: 0,
              letterSpacing: '-0.5px',
            }}
          >
            AUFNAHMEPRÜFUNG<br />
            VORBEREITUNG 2025/2026
          </h1>
          <p
            style={{
              ...typography.bodyLarge,
              color: 'var(--color-text-muted)',
              marginTop: spacing[4],
              marginBottom: 0,
            }}
          >
            Trainiere 25/26er Themen für deine DJS-Prüfung.
          </p>
        </div>

        {/* Primary CTA */}
        <div style={{ ...stagger(2), width: '100%', maxWidth: 360 }}>
          <button
            onClick={handleStart}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(196,30,58,0.32)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            style={{
              width: '100%',
              height: 48,
              background: colors.djsRed,
              color: colors.textLight,
              border: 'none',
              borderRadius: 12,
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: '0.5px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'box-shadow var(--duration-base) var(--ease-smooth), transform var(--duration-base) var(--ease-smooth)',
              cursor: 'pointer',
            }}
          >
            START TRAINIEREN
          </button>
        </div>

        {/* Module-Vorschau */}
        <div style={{ ...stagger(3), width: '100%' }}>
          <p
            style={{
              ...typography.bodySmall,
              color: 'var(--color-text-muted)',
              marginBottom: spacing[3],
            }}
          >
            oder durchsuche Module …
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: spacing[3],
              width: '100%',
            }}
          >
            {MODULES.map((m) => (
              <button
                key={m.id}
                onClick={() => handleModule(m.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.djsRed;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                style={{
                  padding: `${spacing[3]} ${spacing[4]}`,
                  background: 'var(--color-bg-elevated)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 12,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  alignItems: 'center',
                  transition: 'border-color var(--duration-base) var(--ease-smooth), transform var(--duration-base) var(--ease-smooth), box-shadow var(--duration-base) var(--ease-smooth)',
                }}
              >
                <span style={{ ...typography.label, color: colors.djsRed }}>{m.label}</span>
                <span style={{ ...typography.bodySmall, color: 'var(--color-text-muted)' }}>
                  {m.hint}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={stagger(4)}>
          <p
            style={{
              ...typography.label,
              color: 'var(--color-text-muted)',
              marginTop: spacing[8],
              marginBottom: 0,
            }}
          >
            Made for DJS 2025
          </p>
        </div>
      </div>
    </div>
  );
}
