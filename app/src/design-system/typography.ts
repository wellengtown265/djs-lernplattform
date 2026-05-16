/**
 * DJS Design System — Typography
 *
 * Schriftarten:
 *  - Headlines: Georgia (serif) — journalistischer, redaktioneller Look
 *  - Body:      Inter (sans)    — moderne Lesbarkeit
 *  - Mono:      Courier New     — Scores, Zahlen, technische Werte
 *
 * Verwendung in Komponenten:
 *   style={{ ...typography.h1 }}
 * oder als Tailwind-Plugin (siehe tailwind.config.js).
 */

export const fontFamilies = {
  serif: 'Georgia, "Times New Roman", serif',
  sans: 'Inter, system-ui, -apple-system, sans-serif',
  mono: '"Courier New", Courier, monospace',
} as const;

export const typography = {
  /** Hero/Page Title */
  h1: {
    fontFamily: fontFamilies.serif,
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: 1.2,
  },

  /** Section Title */
  h2: {
    fontFamily: fontFamilies.serif,
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: 1.25,
  },

  /** Subsection Title */
  h3: {
    fontFamily: fontFamilies.serif,
    fontSize: '28px',
    fontWeight: 600,
    lineHeight: 1.3,
  },

  /** Intro-Absätze, hervorgehobener Body-Text */
  bodyLarge: {
    fontFamily: fontFamilies.sans,
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.6,
  },

  /** Standard Body */
  body: {
    fontFamily: fontFamilies.sans,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
  },

  /** Hinweise, Captions, Meta-Info */
  bodySmall: {
    fontFamily: fontFamilies.sans,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
  },

  /** Form-Labels, kleine Überschriften, Kategorien */
  label: {
    fontFamily: fontFamilies.sans,
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },

  /** Scores, Zahlen, Streaks, Countdown */
  mono: {
    fontFamily: fontFamilies.mono,
    fontSize: '14px',
    fontWeight: 400,
  },
} as const;

export type Typography = typeof typography;
