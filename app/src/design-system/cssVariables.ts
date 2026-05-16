/**
 * DJS Design System — CSS Variables & Dark Mode
 *
 * Erzeugt CSS Custom Properties aus den Design-Tokens.
 * Dark Mode wird automatisch via `prefers-color-scheme` aktiviert,
 * kann aber mit `<html data-theme="dark">` manuell überschrieben werden.
 *
 * In Komponenten verwendet:
 *   color: 'var(--color-text)'
 *   background: 'var(--color-bg)'
 */

import { colors } from './colors';

/** Light Theme — Default */
export const lightTheme = {
  '--color-bg': colors.neutral[50],
  '--color-bg-elevated': '#FFFFFF',
  '--color-text': colors.textDark,
  '--color-text-muted': colors.neutral[600],
  '--color-border': colors.neutral[200],
  '--color-primary': colors.djsRed,
  '--color-primary-text': colors.textLight,
  '--color-accent': colors.accentGold,
  '--color-success': colors.feedback.success,
  '--color-warning': colors.feedback.warning,
  '--color-error': colors.feedback.error,
} as const;

/** Dark Theme */
export const darkTheme = {
  '--color-bg': colors.neutral[900],
  '--color-bg-elevated': colors.neutral[800],
  '--color-text': colors.neutral[50],
  '--color-text-muted': colors.neutral[400],
  '--color-border': colors.neutral[700],
  '--color-primary': colors.djsRed,
  '--color-primary-text': colors.textLight,
  '--color-accent': colors.accentGold,
  '--color-success': colors.feedback.success,
  '--color-warning': colors.feedback.warning,
  '--color-error': colors.feedback.error,
} as const;

export type ThemeVars = typeof lightTheme;
