/**
 * DJS Design System — Spacing
 *
 * 8px-Base-Unit-System mit Abweichung bei 4 und 12 für Feintuning.
 * Werte sind als string mit "px"-Suffix, direkt einsetzbar in style={}.
 *
 * Beispiele:
 *  - spacing[2]  → 8px   (kleine Abstände innerhalb von Komponenten)
 *  - spacing[4]  → 16px  (Standard-Padding)
 *  - spacing[6]  → 24px  (Abstand zwischen Sektionen)
 *  - spacing[8]  → 32px  (große Section-Gaps)
 */

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

/** Numerische Werte (ohne "px") — nützlich für Berechnungen */
export const spacingNum = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
} as const;

export type Spacing = typeof spacing;
export type SpacingKey = keyof typeof spacing;
