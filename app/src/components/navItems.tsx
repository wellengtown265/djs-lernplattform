/**
 * Zentrale Definition aller Nav-Einträge (Top + Bottom teilen sich diese).
 * Reihenfolge entspricht v1.2-Spec: Lernen, Quiz, Geo, DJS, Stats.
 */

import type { Page } from '../types';
import {
  LearnIcon, QuizIcon, GeoIcon, DjsIcon, StatsIcon, BildertestIcon, FokusIcon
} from './NavIcons';

export interface NavItem {
  page: Page;
  label: string;
  Icon: (props: { size?: number }) => JSX.Element;
}

export const NAV_ITEMS: NavItem[] = [
  { page: 'learn',      label: 'Lernen',     Icon: LearnIcon     },
  { page: 'quiz',       label: 'Quiz',       Icon: QuizIcon      },
  { page: 'fokus',      label: 'Fokus',      Icon: FokusIcon     },
  { page: 'geo',        label: 'Geo',        Icon: GeoIcon       },
  { page: 'bildertest', label: 'Bildertest', Icon: BildertestIcon },
  { page: 'stats',      label: 'Stats',      Icon: StatsIcon     },
];
