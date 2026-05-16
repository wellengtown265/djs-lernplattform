/**
 * SettingsMenu — kleines Popover mit Theme-Switch.
 *
 * Wird vom Top- oder Bottom-Nav-Settings-Icon getriggert. Bei Klick außerhalb
 * oder ESC schließt es sich.
 */

import { useEffect, useRef } from 'react';
import { useTheme, ThemeMode } from '../hooks/useTheme';
import { colors, spacing, typography } from '../design-system';

interface Props {
  open: boolean;
  onClose: () => void;
  /** Anchor-Position: bottom-right oder top-right */
  anchor?: 'top-right' | 'bottom-right';
}

export default function SettingsMenu({ open, onClose, anchor = 'top-right' }: Props) {
  const { mode, setMode } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const position: React.CSSProperties = anchor === 'top-right'
    ? { top: 56, right: spacing[4] }
    : { bottom: 72, right: spacing[4] };

  const modes: { id: ThemeMode; label: string }[] = [
    { id: 'auto',  label: 'Auto' },
    { id: 'light', label: 'Hell' },
    { id: 'dark',  label: 'Dunkel' },
  ];

  return (
    <div
      ref={ref}
      role="dialog"
      style={{
        position: 'fixed',
        ...position,
        zIndex: 60,
        width: 220,
        background: 'var(--color-bg-elevated)',
        color: 'var(--color-text)',
        border: '1px solid var(--color-border)',
        borderRadius: 12,
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        padding: spacing[4],
        animation: 'djs-fade-in 200ms var(--ease-smooth) both',
      }}
    >
      <p style={{ ...typography.label, color: 'var(--color-text-muted)', margin: 0, marginBottom: spacing[3] }}>
        Erscheinungsbild
      </p>
      <div style={{ display: 'flex', gap: spacing[2] }}>
        {modes.map((m) => {
          const active = mode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              style={{
                flex: 1,
                padding: `${spacing[2]} ${spacing[3]}`,
                background: active ? colors.djsRed : 'transparent',
                color: active ? colors.textLight : 'var(--color-text)',
                border: `1px solid ${active ? colors.djsRed : 'var(--color-border)'}`,
                borderRadius: 8,
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--duration-fast) var(--ease-smooth)',
              }}
            >
              {m.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
