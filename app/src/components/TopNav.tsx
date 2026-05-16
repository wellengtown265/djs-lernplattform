/**
 * TopNav — Desktop-Navigation (≥ 768px), sticky, 64px hoch.
 *
 * Layout: [Logo] | Tabs (zentriert) | Settings (rechts)
 * Active-State: djsRed underline + bold.
 * Versteckt unter 768px via CSS (className `djs-topnav`).
 */

import { useState } from 'react';
import type { Page } from '../types';
import { NAV_ITEMS } from './navItems';
import { SettingsIcon } from './NavIcons';
import SettingsMenu from './SettingsMenu';
import { colors, spacing, typography } from '../design-system';

interface Props {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogoClick?: () => void;
}

export default function TopNav({ currentPage, onNavigate, onLogoClick }: Props) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <header
      className="djs-topnav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        height: 64,
        background: 'var(--color-bg-elevated)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        padding: `0 ${spacing[6]}`,
        gap: spacing[6],
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Logo */}
      <button
        onClick={onLogoClick}
        aria-label="Zur Startseite"
        style={{
          display: 'flex', alignItems: 'center', gap: spacing[3],
          background: 'none', border: 'none', padding: 0, cursor: 'pointer',
        }}
      >
        <img
          src="/djs-logo.jpg"
          alt=""
          style={{ width: 32, height: 32, borderRadius: 6, objectFit: 'cover' }}
        />
        <span style={{ ...typography.label, color: colors.djsRed }}>DJS 2026</span>
      </button>

      {/* Tabs */}
      <nav style={{ display: 'flex', gap: spacing[2], flex: 1, justifyContent: 'center' }}>
        {NAV_ITEMS.map(({ page, label, Icon }) => {
          const active = currentPage === page;
          return (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.color = colors.djsRed;
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.color = colors.neutral[600];
              }}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: spacing[2],
                padding: `${spacing[2]} ${spacing[4]}`,
                background: 'none',
                border: 'none',
                color: active ? colors.djsRed : colors.neutral[600],
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: active ? 700 : 500,
                cursor: 'pointer',
                transition: 'color 200ms var(--ease-smooth)',
              }}
            >
              <Icon size={18} />
              {label}
              {active && (
                <span
                  style={{
                    position: 'absolute',
                    left: spacing[4],
                    right: spacing[4],
                    bottom: -2,
                    height: 2,
                    background: colors.djsRed,
                    borderRadius: 1,
                  }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Settings */}
      <div style={{ position: 'relative' }}>
        <button
          aria-label="Einstellungen"
          onClick={() => setSettingsOpen((v) => !v)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 40, height: 40, borderRadius: 8,
            background: settingsOpen ? 'var(--color-bg)' : 'transparent',
            color: 'var(--color-text-muted)',
            border: '1px solid transparent',
            cursor: 'pointer',
            transition: 'all 200ms var(--ease-smooth)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = colors.djsRed; }}
          onMouseLeave={(e) => {
            if (!settingsOpen) e.currentTarget.style.color = colors.neutral[600];
          }}
        >
          <SettingsIcon size={20} />
        </button>
        <SettingsMenu
          open={settingsOpen}
          onClose={() => setSettingsOpen(false)}
          anchor="top-right"
        />
      </div>
    </header>
  );
}
