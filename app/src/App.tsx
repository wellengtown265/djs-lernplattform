import { useState } from 'react';
import { useGameState } from './hooks/useGameState';
import { useProfiles } from './hooks/useProfiles';
import Dashboard from './pages/Dashboard';
import QuizMode from './pages/QuizMode';
import LearningMode from './pages/LearningMode';
import Statistics from './pages/Statistics';
import Navigation from './components/Navigation';
import IntroScreen from './components/IntroScreen';
import Intro, { isIntroComplete } from './pages/Intro';
import DJSQuiz from './pages/DJSQuiz';
import { BildertestMode } from './pages/BildertestMode';
import GeoQuiz from './pages/GeoQuiz';
import Fokus2026 from './pages/Fokus2026';
import ProfileSelect from './pages/ProfileSelect';
import type { Page } from './types';
import questionsData from './data/questions.json';
import categoriesData from './data/categories.json';
import type { Question, Category } from './types';

const questions = questionsData as Question[];
const categories = (categoriesData as { categories: Category[] }).categories;

export default function App() {
  const profiles = useProfiles();
  const [showIntro, setShowIntro] = useState(true);
  const [showFirstTimeIntro, setShowFirstTimeIntro] = useState(() => !isIntroComplete());
  const [showProfileSelect, setShowProfileSelect] = useState(false);
  const [page, setPage] = useState<Page>('dashboard');
  const [quizCategory, setQuizCategory] = useState<string | null>(null);
  const gameState = useGameState(profiles.activeId);

  // 1. First-Time Intro (Logo + Buttons)
  if (showFirstTimeIntro) {
    return (
      <Intro
        onStart={() => setShowFirstTimeIntro(false)}
        onJumpToModule={(mod) => {
          setShowFirstTimeIntro(false);
          if (mod === 'quiz') setPage('quiz');
          else if (mod === 'learn') setPage('learn');
          else if (mod === 'geo') setPage('geo');
          else if (mod === 'djs') setPage('djs');
          else setPage('dashboard');
        }}
      />
    );
  }

  // 2. Profile Selection (no active profile = must pick/create)
  if (!profiles.active || showProfileSelect) {
    return (
      <ProfileSelect
        profiles={profiles.profiles}
        canCreateMore={profiles.canCreateMore}
        onSelect={(id) => {
          profiles.switchTo(id);
          setShowProfileSelect(false);
        }}
        onCreate={(name, emoji, difficulty) => {
          profiles.create(name, emoji, difficulty);
          setShowProfileSelect(false);
        }}
        onDelete={(id) => profiles.remove(id)}
        onCancel={profiles.active ? () => setShowProfileSelect(false) : undefined}
      />
    );
  }

  const startQuiz = (category?: string) => {
    setQuizCategory(category || null);
    setPage('quiz');
  };

  const startLearn = (category?: string) => {
    setQuizCategory(category || null);
    setPage('learn');
  };

  const difficulty = profiles.active.difficulty;

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return (
          <Dashboard
            questions={questions}
            categories={categories}
            gameState={gameState}
            onStartQuiz={startQuiz}
            onStartLearn={startLearn}
            onNavigate={setPage}
          />
        );
      case 'quiz':
        return (
          <QuizMode
            questions={questions}
            categories={categories}
            gameState={gameState}
            filterCategory={quizCategory}
            onNavigate={setPage}
            difficulty={difficulty}
          />
        );
      case 'learn':
        return (
          <LearningMode
            questions={questions}
            categories={categories}
            gameState={gameState}
            filterCategory={quizCategory}
            onNavigate={setPage}
            difficulty={difficulty}
          />
        );
      case 'stats':
        return (
          <Statistics
            questions={questions}
            categories={categories}
            gameState={gameState}
            onResetProgress={gameState.resetProgress}
          />
        );
      case 'geo':
        return <GeoQuiz difficulty={difficulty} onBack={() => setPage('dashboard')} />;
      case 'djs':
        return <DJSQuiz onBack={() => setPage('dashboard')} />;
      case 'bildertest':
        return <BildertestMode difficulty={difficulty} />;
      case 'fokus':
        return (
          <Fokus2026
            questions={questions}
            gameState={gameState}
            onNavigate={setPage}
            difficulty={difficulty}
          />
        );
      case 'profiles':
        // sollte über showProfileSelect oben gefangen werden — Fallback:
        setShowProfileSelect(true);
        return null;
    }
  };

  return (
    <>
      {showIntro && <IntroScreen onEnter={() => setShowIntro(false)} />}
      <div
        style={{
          minHeight: '100vh',
          background: 'var(--color-bg)',
          color: 'var(--color-text)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navigation currentPage={page} onNavigate={setPage} gameState={gameState.state} />

        {/* Profile-Badge & Switcher (top-right corner) */}
        <button
          onClick={() => setShowProfileSelect(true)}
          title="Profil wechseln"
          style={{
            position: 'fixed', top: 10, right: 12, zIndex: 40,
            background: 'rgba(31, 41, 55, 0.85)',
            border: '1px solid #374151',
            borderRadius: 999,
            padding: '4px 10px 4px 6px',
            display: 'flex', alignItems: 'center', gap: 6,
            cursor: 'pointer', fontSize: 12, color: '#d1d5db',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ fontSize: 18 }}>{profiles.active.emoji}</span>
          <span style={{ fontWeight: 500 }}>{profiles.active.name}</span>
          <span style={{
            fontSize: 9, opacity: 0.7, marginLeft: 4,
            padding: '1px 5px', borderRadius: 4,
            background: difficulty === 'pro' ? '#7f1d1d' : '#064e3b',
          }}>{difficulty === 'pro' ? 'PRO' : 'ANF'}</span>
        </button>

        <main style={{ flex: 1, paddingBottom: 80 /* Platz für BottomNav */ }}>
          <div style={{ maxWidth: 768, margin: '0 auto', padding: 16 }}>
            {renderPage()}
          </div>
        </main>
      </div>
    </>
  );
}
