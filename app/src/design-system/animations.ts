/**
 * DJS Design System — Animations
 *
 * Einheitliche Easing-Curves und Durations für alle Transitions.
 *
 * Verwendung als CSS-Wert:
 *   style={{ transition: `opacity ${animations.fadeIn}` }}
 *
 * Für komplexere Keyframe-Animationen siehe ./animations.css.
 */

export const easings = {
  /** Material-Standard — natürliche, ruhige Bewegung */
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  /** Leichter Overshoot — fühlt sich "lebendig" an */
  springy: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  /** Linear für Pulse-/Loop-Animationen */
  linear: 'cubic-bezier(0, 0, 1, 1)',
  /** Starker Bounce — Celebration-Feedback */
  bounce: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
} as const;

export const durations = {
  fast: '150ms',
  base: '300ms',
  slow: '400ms',
  celebration: '600ms',
} as const;

export const animations = {
  /** Standard Ein-/Ausblenden */
  fadeIn: `${easings.smooth} ${durations.base}`,

  /** Slide-up beim Erscheinen — z. B. Modals, Cards */
  slideUp: `${easings.springy} ${durations.slow}`,

  /** Endlos pulsierend — z. B. Live-Indicator, Streak-Glow */
  pulse: `${easings.linear} 2s infinite`,

  /** Bounce für positives Feedback — z. B. Badge-Unlock, Korrekt-Animation */
  bounce: `${easings.bounce} ${durations.celebration}`,
} as const;

/** Keyframe-Namen (matched mit animations.css) */
export const keyframes = {
  fadeIn: 'djs-fade-in',
  slideUp: 'djs-slide-up',
  pulse: 'djs-pulse',
  bounce: 'djs-bounce',
} as const;

export type Animations = typeof animations;
