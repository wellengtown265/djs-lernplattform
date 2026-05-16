/**
 * BildertestMode — v2 (Mai 2026)
 *
 * - Startscreen: 10 Rundenkarten mit Vorschaubildern, Statistik, schönem Dark-UI
 * - In einer Runde: Sequenz von 12 BildertestCard (v2 mit echten Fotos)
 * - Round-Summary mit Trefferquote und Empfehlung
 */
import React, { useMemo, useState } from 'react';
import bildertestData from '../data/bildertestRounds.json';
import type { BildertestRound } from '../types-bildertest';
import type { Difficulty } from '../types';
import { BildertestCard } from '../components/BildertestCard';
import { useBildertestState } from '../hooks/useBildertestState';

const ROUNDS: BildertestRound[] = (bildertestData as any).rounds as BildertestRound[];

interface Props { difficulty?: Difficulty }

export function BildertestMode({ difficulty = 'beginner' }: Props = {}) {
  const [view, setView] = useState<'start' | 'round' | 'summary'>('start');
  const [activeRoundId, setActiveRoundId] = useState<string | null>(null);
  const [itemIdx, setItemIdx] = useState(0);
  const { state, rateItem, setLastRound, getRoundStats } = useBildertestState();

  const activeRound = useMemo(
    () => ROUNDS.find(r => r.id === activeRoundId),
    [activeRoundId]
  );

  const totalItems = ROUNDS.reduce((s, r) => s + r.items.length, 0);
  const totalDone = Object.keys(state.items).length;

  function startRound(roundId: string) {
    setActiveRoundId(roundId);
    setLastRound(roundId);
    setItemIdx(0);
    setView('round');
  }

  function handleNext() {
    if (!activeRound) return;
    if (itemIdx + 1 >= activeRound.items.length) {
      setView('summary');
    } else {
      setItemIdx(itemIdx + 1);
    }
  }

  function backToStart() {
    setView('start');
    setActiveRoundId(null);
    setItemIdx(0);
  }

  // ─────────────── START VIEW ───────────────
  if (view === 'start') {
    return (
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '24px 16px 40px' }}>

        {/* ── Hero ── */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>📸</div>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 34, color: '#f1f5f9', margin: '0 0 8px', fontWeight: 700,
          }}>
            Bildertest
          </h1>
          <p style={{ color: '#64748b', fontSize: 14, margin: '0 0 16px', lineHeight: 1.6 }}>
            Personen &amp; Ereignisse der letzten 12 Monate — 10 Runden à 12 Bilder
          </p>

          {/* Gesamtfortschritt */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: '#1e293b', borderRadius: 999, padding: '8px 20px',
            border: '1px solid #334155',
          }}>
            <span style={{ fontSize: 13, color: '#94a3b8' }}>Gesamt</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>{totalDone}</span>
            <span style={{ color: '#475569' }}>/</span>
            <span style={{ fontSize: 13, color: '#64748b' }}>{totalItems}</span>
            <div style={{ width: 80, height: 4, background: '#334155', borderRadius: 999 }}>
              <div style={{
                height: '100%', borderRadius: 999,
                background: 'linear-gradient(90deg, #C8191A, #ef4444)',
                width: `${Math.round(totalDone / totalItems * 100)}%`,
                transition: 'width 0.4s',
              }} />
            </div>
          </div>
        </div>

        {/* ── Runden-Grid ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {ROUNDS.map((round, idx) => {
            const stats = getRoundStats(round.items.map(i => i.id));
            const personCount = round.items.filter(i => i.itemType === 'person').length;
            const eventCount  = round.items.length - personCount;
            // Vorschaubild: erstes Item mit echtem Bild
            const previewItem = round.items.find(
              i => i.image?.status === 'READY' && i.image?.localPath
            );

            return (
              <button
                key={round.id}
                onClick={() => startRound(round.id)}
                style={{
                  display: 'flex', alignItems: 'stretch', gap: 0,
                  background: '#0f172a',
                  border: '1px solid #1e293b',
                  borderRadius: 16,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  textAlign: 'left',
                  width: '100%',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#C8191A66';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px rgba(200,25,26,0.15)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#1e293b';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                }}
              >
                {/* Vorschaubild */}
                <div style={{
                  width: 90, flexShrink: 0,
                  background: '#020617',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {previewItem ? (
                    <img
                      src={previewItem.image.localPath}
                      alt=""
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'center top',
                        display: 'block',
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%', height: '100%', minHeight: 80,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 28, opacity: 0.2,
                    }}>
                      📸
                    </div>
                  )}
                  {/* Rundenummer */}
                  <div style={{
                    position: 'absolute', top: 6, left: 6,
                    background: 'rgba(0,0,0,0.75)',
                    borderRadius: 6, padding: '2px 7px',
                    fontSize: 10, color: '#94a3b8', fontWeight: 700, fontFamily: 'monospace',
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Info */}
                <div style={{ flex: 1, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                    <h3 style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 15, color: '#f1f5f9', margin: 0, lineHeight: 1.3,
                    }}>
                      {round.title}
                    </h3>
                    {stats.done > 0 && (
                      <span style={{
                        fontSize: 11, color: '#10b981', flexShrink: 0,
                        background: '#064e3b33', borderRadius: 6, padding: '2px 8px',
                        fontWeight: 700,
                      }}>
                        {stats.percentDone}%
                      </span>
                    )}
                  </div>

                  <p style={{
                    fontSize: 12, color: '#64748b', margin: 0, lineHeight: 1.4,
                    display: '-webkit-box', WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  } as React.CSSProperties}>
                    {round.focus}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 11, color: '#475569' }}>
                      👤 {personCount} Personen · 🎬 {eventCount} Ereignisse
                    </span>
                    <span style={{ fontSize: 11, color: '#475569' }}>
                      {stats.done}/{stats.total}
                    </span>
                  </div>

                  {/* Fortschrittsbalken */}
                  <div style={{ height: 3, background: '#1e293b', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', borderRadius: 999,
                      background: stats.percentDone === 100
                        ? '#10b981'
                        : 'linear-gradient(90deg, #C8191A, #ef4444)',
                      width: `${stats.percentDone}%`,
                      transition: 'width 0.4s',
                    }} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p style={{ textAlign: 'center', fontSize: 12, color: '#334155', marginTop: 24 }}>
          Bilder: Wikimedia Commons (CC BY-SA / Public Domain) · Stand: 2026-05-16
        </p>
      </div>
    );
  }

  // ─────────────── ROUND VIEW ───────────────
  if (view === 'round' && activeRound) {
    const item = activeRound.items[itemIdx];
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <button
          onClick={backToStart}
          className="text-sm text-gray-400 hover:text-gray-200 mb-4"
        >
          ← Zurück zur Rundenübersicht
        </button>
        <div className="mb-4 text-xs uppercase tracking-wider text-gray-500">
          {activeRound.id} · {activeRound.title}
        </div>
        <BildertestCard
          item={item}
          index={itemIdx}
          total={activeRound.items.length}
          onRate={(r) => rateItem(item.id, r)}
          onNext={handleNext}
          isLast={itemIdx + 1 >= activeRound.items.length}
          difficulty={difficulty}
        />
      </div>
    );
  }

  // ─────────────── SUMMARY VIEW ───────────────
  if (view === 'summary' && activeRound) {
    const ids = activeRound.items.map(i => i.id);
    const stats = getRoundStats(ids);
    const ratedItems = ids.map(id => state.items[id]).filter(Boolean);
    const correctPct = ratedItems.length ? Math.round(stats.correct / ratedItems.length * 100) : 0;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <div className="text-5xl mb-3">🏁</div>
        <h2 className="text-3xl font-serif text-gray-100 mb-2">Runde beendet</h2>
        <p className="text-gray-400 mb-8">{activeRound.title}</p>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-semibold text-emerald-400">{stats.correct}</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Gewusst</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-semibold text-amber-400">{stats.half}</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Halb</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-semibold text-gray-400">
              {ratedItems.length - stats.correct - stats.half}
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Nicht</div>
          </div>
        </div>

        <div className="text-sm text-gray-400 mb-8">
          Trefferquote: <span className="text-gray-200 font-semibold">{correctPct}%</span>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={backToStart}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg"
          >
            Andere Runde
          </button>
          <button
            onClick={() => startRound(activeRound.id)}
            className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg"
          >
            Nochmal
          </button>
        </div>
      </div>
    );
  }

  return null;
}
