/**
 * Navigation — Wrapper, schaltet automatisch zwischen TopNav (≥768px)
 * und BottomNav (<768px). Die Sichtbarkeit wird über CSS-Media-Queries
 * in design-system.css gesteuert — kein Layout-Flash beim Resize.
 *
 * Die `gameState`-Prop wird hier nicht mehr verwendet (Streak/XP zieht jetzt
 * in den StreakCounter im Header der jeweiligen Page) — bleibt aber als
 * optionaler Prop erhalten, um bestehende Aufrufe nicht zu brechen.
 */

import type { Page, GameState } from '../types';
import TopNav from './TopNav';
import BottomNav from './BottomNav';

interface Props {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  /** Optional, derzeit nicht in der Nav verwendet */
  gameState?: GameState;
}

export default function Navigation({ currentPage, onNavigate }: Props) {
  return (
    <>
      <TopNav
        currentPage={currentPage}
        onNavigate={onNavigate}
        onLogoClick={() => onNavigate('dashboard')}
      />
      <BottomNav currentPage={currentPage} onNavigate={onNavigate} />
    </>
  );
}
