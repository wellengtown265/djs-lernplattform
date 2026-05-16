import { useState } from 'react';
import type { Question, Category } from '../types';
import type { useGameState } from '../hooks/useGameState';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getQualityStats } from '../lib/quality';
import changelogData from '../data/changelog.json';


// DJS-V1.3-PATCH: 'ungeprüft' counts via byStatus['ungeprüft'] available since v1.3
interface ChangelogEntry {
  date: string;
  title: string;
  count: number;
  changes: { category: string; text: string }[];
}
const CHANGELOG = changelogData as ChangelogEntry[];

const STATUS_LABEL: Record<string, { label: string; color: string }> = {
  ok:                { label: 'Freigegeben',       color: '#10B981' },
  'ok-präzisieren':  { label: 'OK, präzisieren',   color: '#34D399' },
  korrigieren:       { label: 'Zu korrigieren',    color: '#EF4444' },
  umformulieren:     { label: 'Umformulieren',     color: '#F59E0B' },
  aktualisieren:     { label: 'Aktualisieren',     color: '#FB923C' },
  archiv:            { label: 'Archiv',            color: '#6B7280' },
  streichen:         { label: 'Zu streichen',      color: '#7F1D1D' },
};

function formatDateDE(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
}

interface Props {
  questions: Question[];
  categories: Category[];
  gameState: ReturnType<typeof useGameState>;
  onResetProgress: () => void;
}

export default function Statistics({ questions, categories, gameState, onResetProgress }: Props) {
  const { state, getCompletionByCategory } = gameState;
  const catProgress = getCompletionByCategory(questions);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showAllChangelog, setShowAllChangelog] = useState(false);

  // Qualitäts-Stats berechnen
  const qs = getQualityStats(questions);
  const sourcePct = qs.total > 0 ? Math.round((qs.withSourceUrl / qs.total) * 100) : 0;
  const latestUpdate = CHANGELOG[0];

  const chartData = categories.map(cat => {
    const cp = catProgress[cat.name] || { total: 0, answered: 0, correct: 0 };
    return {
      name: cat.icon + ' ' + cat.name.split(' ')[0],
      Richtig: cp.correct,
      Falsch: cp.answered - cp.correct,
    };
  });

  const totalAnswered = Object.keys(state.progress).length;
  const totalCorrect = Object.values(state.progress).filter(p => p.timesCorrect > p.timesWrong).length;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const weakCategories = categories.filter(cat => {
    const cp = catProgress[cat.name];
    if (!cp || cp.answered === 0) return false;
    return (cp.correct / cp.answered) < 0.6;
  });

  return (
    <div className="p-4 pt-6 space-y-4">
      <h1 className="font-serif text-2xl font-black text-white">Statistiken</h1>

      {/* Key stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <div className="text-3xl font-black text-djs-red">{accuracy}%</div>
          <div className="text-xs text-gray-500 mt-1">Gesamtgenauigkeit</div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <div className="text-3xl font-black text-blue-400">{state.xp.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">XP gesamt</div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <div className="text-3xl font-black text-amber-400">🔥 {state.streak}</div>
          <div className="text-xs text-gray-500 mt-1">Tage Streak</div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <div className="text-3xl font-black text-emerald-400">{totalAnswered}</div>
          <div className="text-xs text-gray-500 mt-1">Fragen beantwortet</div>
        </div>
      </div>

      {/* Weak categories warning */}
      {weakCategories.length > 0 && (
        <div className="bg-red-950/40 rounded-2xl p-4 border border-red-800/40">
          <h2 className="font-semibold text-red-400 mb-2">⚠️ Schwache Bereiche</h2>
          <div className="space-y-1">
            {weakCategories.map(cat => {
              const cp = catProgress[cat.name];
              return (
                <div key={cat.id} className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">{cat.icon} {cat.name}</span>
                  <span className="text-red-400 font-medium">
                    {Math.round((cp.correct / cp.answered) * 100)}% richtig
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Category bar chart */}
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <h2 className="font-semibold text-white mb-4">Fortschritt nach Kategorie</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" tick={{ fill: '#6B7280', fontSize: 10 }} />
            <YAxis tick={{ fill: '#6B7280', fontSize: 10 }} />
            <Tooltip contentStyle={{ background: '#1F2937', border: '1px solid #374151', borderRadius: 8 }} />
            <Bar dataKey="Richtig" fill="#10B981" radius={[4,4,0,0]} />
            <Bar dataKey="Falsch" fill="#EF4444" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* All categories detail */}
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <h2 className="font-semibold text-white mb-3">Detailansicht</h2>
        <div className="space-y-3">
          {categories.map(cat => {
            const cp = catProgress[cat.name] || { total: 0, answered: 0, correct: 0 };
            const pct = cp.total ? Math.round((cp.answered / cp.total) * 100) : 0;
            const acc = cp.answered ? Math.round((cp.correct / cp.answered) * 100) : 0;
            return (
              <div key={cat.id} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{cat.icon} {cat.name}</span>
                  <div className="flex gap-3 text-xs">
                    <span className="text-gray-500">{cp.answered}/{cp.total}</span>
                    {cp.answered > 0 && (
                      <span className={acc >= 70 ? 'text-emerald-400' : acc >= 50 ? 'text-amber-400' : 'text-red-400'}>
                        {acc}%
                      </span>
                    )}
                  </div>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: cat.color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fragen-Qualität */}
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-white">🔍 Fragen-Qualität</h2>
          <span className="text-xs text-gray-500">{qs.total} Fragen</span>
        </div>

        {/* Spielbar vs. geblockt — Hero-Zahl */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center">
            <div className="text-2xl font-black text-emerald-400">{qs.playable}</div>
            <div className="text-xs text-gray-500 mt-0.5">Freigegeben</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-black ${qs.blocked > 0 ? 'text-amber-400' : 'text-gray-500'}`}>
              {qs.blocked}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">Geflaggt</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-blue-400">{qs.withSourceUrl}</div>
            <div className="text-xs text-gray-500 mt-0.5">Mit Quelle</div>
          </div>
        </div>

        {/* Quellen-Coverage */}
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">Quellen-URL hinterlegt</span>
            <span className="text-gray-500">{qs.withSourceUrl} / {qs.total} ({sourcePct}%)</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${sourcePct}%`,
                backgroundColor: sourcePct >= 80 ? '#10B981' : sourcePct >= 50 ? '#F59E0B' : '#EF4444',
              }}
            />
          </div>
        </div>

        {/* Status-Verteilung */}
        <div className="space-y-1.5">
          <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">Status-Verteilung</div>
          {Object.entries(qs.byStatus)
            .sort((a, b) => b[1] - a[1])
            .map(([status, n]) => {
              const meta = STATUS_LABEL[status] ?? { label: status, color: '#737373' };
              return (
                <div key={status} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: meta.color }} />
                    <span className="text-gray-300">{meta.label}</span>
                  </div>
                  <span className="text-gray-500 tabular-nums">{n}</span>
                </div>
              );
            })}
        </div>

        {qs.blocked === 0 && (
          <div className="mt-3 pt-3 border-t border-gray-800">
            <p className="text-xs text-emerald-400/80">
              ✓ Alle Fragen freigegeben — keine geblockten Inhalte im Pool.
            </p>
          </div>
        )}
        {qs.withoutSourceUrl > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-800">
            <p className="text-xs text-amber-400/80">
              ⚠ {qs.withoutSourceUrl} Fragen ohne Quellen-URL — Aufgabe für nächsten Pass.
            </p>
          </div>
        )}
      </div>

      {/* Letzte Updates */}
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-white">📝 Letzte Updates</h2>
          {CHANGELOG.length > 1 && (
            <button
              onClick={() => setShowAllChangelog(v => !v)}
              className="text-xs text-djs-red hover:underline"
            >
              {showAllChangelog ? 'weniger zeigen' : `alle ${CHANGELOG.length} zeigen`}
            </button>
          )}
        </div>

        {!latestUpdate ? (
          <p className="text-sm text-gray-500">Noch keine dokumentierten Updates.</p>
        ) : (
          <div className="space-y-3">
            {(showAllChangelog ? CHANGELOG : [latestUpdate]).map((entry, idx) => (
              <div key={entry.date + idx} className="border-l-2 border-djs-red pl-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-medium text-gray-200">{entry.title}</span>
                  <span className="text-xs text-gray-500 tabular-nums whitespace-nowrap">
                    {formatDateDE(entry.date)}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  {entry.count} {entry.count === 1 ? 'Änderung' : 'Änderungen'}
                </p>
                {showAllChangelog && entry.changes.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {entry.changes.slice(0, 5).map((c, i) => (
                      <li key={i} className="text-xs text-gray-400">
                        <span className="text-gray-600">·</span> {c.text}
                      </li>
                    ))}
                    {entry.changes.length > 5 && (
                      <li className="text-xs text-gray-600 italic">
                        … und {entry.changes.length - 5} weitere
                      </li>
                    )}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-3 pt-3 border-t border-gray-800">
          <p className="text-xs text-gray-600">
            Vollständiges Audit-Log: <span className="font-mono text-gray-500">CHANGELOG_FRAGEN.md</span> im Projektordner
          </p>
        </div>
      </div>

      {/* Admin / Reset */}
      <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
        <h2 className="font-semibold text-white mb-3">⚙️ Einstellungen</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Version</span>
            <span className="text-gray-500">V1.1 (QA-Pass)</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Fragen geladen</span>
            <span className="text-gray-500">{questions.length}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Letzte Korrektur</span>
            <span className="text-gray-500">{latestUpdate ? formatDateDE(latestUpdate.date) : '—'}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Prüfungsdatum</span>
            <span className="text-djs-red font-medium">27.06.2026</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-800">
          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-red-400 text-sm font-semibold rounded-xl transition-colors"
            >
              🗑️ Fortschritt zurücksetzen
            </button>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-gray-400 text-center">Wirklich alles löschen?</p>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => { onResetProgress(); setShowResetConfirm(false); }} className="py-2 bg-red-600 text-white text-sm font-bold rounded-xl">Ja, löschen</button>
                <button onClick={() => setShowResetConfirm(false)} className="py-2 bg-gray-700 text-white text-sm rounded-xl">Abbrechen</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
