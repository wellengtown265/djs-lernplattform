/**
 * BottomNav — Mobile-Navigation (< 768px), fixed bottom, 64px + safe-area.
 *
 * Active-State: djsRed background mit rounded-top + bold Label.
 * Icons 28px, Labels klein darunter. Slide-up beim Mount (300ms).
 * Versteckt ab 768px via CSS (className `djs-bottomnav`).
 */

import type { Page } from '../types';
import { NAV_ITEMS } from './navItems';
import { colors, spacing, typography } from '../design-system';

interface Props {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function BottomNav({ currentPage, onNavigate }: Props) {
  return (
    <nav
      className="djs-bottomnav djs-anim-slide-up"
      style={{
        position: 'fixed',
        left: 0, right: 0, bottom: 0,
        zIndex: 40,
        background: 'var(--color-bg-elevated)',
        borderTop: '1px solid var(--color-border)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.04)',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: 64,
          maxWidth: 640,
          margin: '0 auto',
        }}
      >
        {NAV_ITEMS.map(({ page, label, Icon }) => {
          const active = currentPage === page;
          return (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              aria-label={label}
              aria-current={active ? 'page' : undefined}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                padding: `${spacing[1]} 0`,
                margin: spacing[1],
                background: active ? `${colors.djsRed}14` : 'transparent', // 8% red tint
                color: active ? colors.djsRed : colors.neutral[600],
                border: 'none',
                borderRadius: '12px 12px 8px 8px',
                cursor: 'pointer',
                transition: 'background 200ms var(--ease-smooth), color 200ms var(--ease-smooth)',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <Icon size={28} />
              <span
                style={{
                  ...typography.label,
                  fontSize: 10,
                  letterSpacing: '0.3px',
                  fontWeight: active ? 700 : 600,
                  color: 'inherit',
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
