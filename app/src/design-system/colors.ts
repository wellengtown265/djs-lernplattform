/**
 * DJS Design System — Colors
 *
 * Single source of truth für alle Farben in der App.
 * Import: `import { colors } from '@/design-system/colors'`
 *
 * Dark Mode wird über CSS-Variablen (siehe ./cssVariables.ts) gesteuert.
 */

export const colors = {
  /** Primary brand color — CTAs, Highlights, aktive States */
  djsRed: '#C41E3A',

  /** Haupttext auf hellem Hintergrund (Headlines, Body) */
  textDark: '#1A1A1A',

  /** Text auf djsRed-Hintergrund oder dunklen Flächen */
  textLight: '#FFFFFF',

  /** Akzentfarbe für Badges, Achievements, Goldmedaillen */
  accentGold: '#D4AF37',

  /** Neutrale Graustufen — von hellem Background (50) zu dunklem Text (900) */
  neutral: {
    50: '#F9F9F9',
    100: '#F3F3F3',
    200: '#E8E8E8',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  /** Feedback-Farben für Status-Indikatoren (Toast, Validation, etc.) */
  feedback: {
    success: '#047857',
    warning: '#EA580C',
    error: '#DC2626',
  },
} as const;

export type Colors = typeof colors;
