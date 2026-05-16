/**
 * DJS Design System — Public API
 *
 * Single Import-Punkt für alle Design-Tokens:
 *   import { colors, typography, spacing, animations } from '@/design-system';
 */

export { colors } from './colors';
export type { Colors } from './colors';

export { typography, fontFamilies } from './typography';
export type { Typography } from './typography';

export { spacing, spacingNum } from './spacing';
export type { Spacing, SpacingKey } from './spacing';

export { animations, easings, durations, keyframes } from './animations';
export type { Animations } from './animations';

export { lightTheme, darkTheme } from './cssVariables';
export type { ThemeVars } from './cssVariables';
