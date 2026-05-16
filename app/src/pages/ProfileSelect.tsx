/**
 * ProfileSelect — V1.3 Profil-Auswahl
 *
 * Wird gezeigt:
 *   - immer beim ersten Start (keine Profile)
 *   - jederzeit über Settings → "Profil wechseln"
 *
 * Funktionen:
 *   - Bestehendes Profil wählen (+ Difficulty-Anzeige)
 *   - Neues Profil anlegen (Name + Emoji + Difficulty)
 *   - Profil löschen (mit Bestätigung)
 *   - max 4 Profile
 */
import { useState } from 'react';
import type { Difficulty, UserProfile } from '../types';
import { PROFILE_EMOJIS, MAX_PROFILES } from '../types';

interface Props {
  profiles: UserProfile[];
  canCreateMore: boolean;
  onSelect: (id: string) => void;
  onCreate: (name: string, emoji: string, difficulty: Difficulty) => void;
  onDelete: (id: string) => void;
  onCancel?: () => void; // shown only when at least 1 profile exists
}

export default function ProfileSelect({
  profiles, canCreateMore, onSelect, onCreate, onDelete, onCancel,
}: Props) {
  const [creating, setCreating] = useState(profiles.length === 0);
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState(PROFILE_EMOJIS[0]);
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [confirmingDelete, setConfirmingDelete] = useState<string | null>(null);

  const handleCreate = () => {
    const finalName = name.trim() || `Profil ${profiles.length + 1}`;
    onCreate(finalName, emoji, difficulty);
    setName(''); setEmoji(PROFILE_EMOJIS[0]); setDifficulty('beginner');
    setCreating(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <div className="text-5xl mb-2">👤</div>
          <h1 className="text-3xl font-serif text-gray-100">Wer trainiert heute?</h1>
          <p className="text-gray-400 text-sm mt-2">
            Jedes Profil hat eigenen Fortschritt — bis zu {MAX_PROFILES} Personen können sich diese App teilen.
          </p>
        </div>

        {/* Profile Grid */}
        {!creating && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profiles.map(p => (
                <div key={p.id} className="relative">
                  <button
                    onClick={() => onSelect(p.id)}
                    className="w-full text-left p-5 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-700 rounded-2xl transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{p.emoji}</div>
                      <div className="flex-1">
                        <div className="font-serif text-xl text-gray-100">{p.name}</div>
                        <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded-full ${
                            p.difficulty === 'pro'
                              ? 'bg-red-900/40 text-red-300'
                              : 'bg-emerald-900/40 text-emerald-300'
                          }`}>
                            {p.difficulty === 'pro' ? '🔥 PRO' : '🌱 Anfänger'}
                          </span>
                          <span>aktiv: {new Date(p.lastActiveAt).toLocaleDateString('de-DE')}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                  {/* Delete X */}
                  <button
                    onClick={() => setConfirmingDelete(p.id)}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-gray-800/80 hover:bg-red-900/60 text-gray-500 hover:text-red-300 text-sm"
                    title="Profil löschen"
                  >
                    ×
                  </button>
                </div>
              ))}

              {canCreateMore && (
                <button
                  onClick={() => setCreating(true)}
                  className="p-5 bg-gray-900/50 hover:bg-gray-900 border border-dashed border-gray-700 hover:border-red-700 rounded-2xl text-center transition-all"
                >
                  <div className="text-4xl mb-2">+</div>
                  <div className="text-gray-400 text-sm">Neues Profil anlegen</div>
                </button>
              )}
            </div>

            {onCancel && (
              <div className="text-center">
                <button onClick={onCancel} className="text-gray-500 hover:text-gray-300 text-sm">
                  ← Abbrechen
                </button>
              </div>
            )}
          </>
        )}

        {/* Create form */}
        {creating && (
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 space-y-5">
            <h2 className="font-serif text-xl text-gray-100">Neues Profil</h2>

            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400 block mb-1.5">Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="z. B. Raphael"
                maxLength={30}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-red-500"
                autoFocus
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400 block mb-1.5">Avatar</label>
              <div className="grid grid-cols-6 gap-2">
                {PROFILE_EMOJIS.map(e => (
                  <button
                    key={e}
                    onClick={() => setEmoji(e)}
                    className={`text-3xl p-2 rounded-lg border-2 transition-all ${
                      emoji === e
                        ? 'border-red-600 bg-red-900/30'
                        : 'border-gray-800 hover:border-gray-600 bg-gray-800/50'
                    }`}
                  >{e}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400 block mb-1.5">Schwierigkeit</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDifficulty('beginner')}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    difficulty === 'beginner'
                      ? 'border-emerald-600 bg-emerald-900/20'
                      : 'border-gray-800 hover:border-gray-600 bg-gray-800/50'
                  }`}
                >
                  <div className="text-lg mb-1">🌱 Anfänger</div>
                  <div className="text-xs text-gray-400">
                    Multiple Choice überall — auch bei Bild- und Geofragen. Mit Antwort­optionen.
                  </div>
                </button>
                <button
                  onClick={() => setDifficulty('pro')}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    difficulty === 'pro'
                      ? 'border-red-600 bg-red-900/20'
                      : 'border-gray-800 hover:border-gray-600 bg-gray-800/50'
                  }`}
                >
                  <div className="text-lg mb-1">🔥 Pro</div>
                  <div className="text-xs text-gray-400">
                    Freitext, Zuordnungen, harte Fragen — wie in der echten DJS-Prüfung.
                  </div>
                </button>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {profiles.length > 0 && (
                <button
                  onClick={() => setCreating(false)}
                  className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg"
                >Zurück</button>
              )}
              <button
                onClick={handleCreate}
                className="flex-1 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg font-medium"
              >Profil anlegen</button>
            </div>
          </div>
        )}

        {/* Confirm delete */}
        {confirmingDelete && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl p-6 max-w-sm space-y-4 border border-gray-800">
              <h3 className="font-serif text-xl text-gray-100">Profil wirklich löschen?</h3>
              <p className="text-sm text-gray-400">
                Aller Fortschritt dieses Profils wird unwiderruflich gelöscht.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setConfirmingDelete(null)}
                  className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg"
                >Abbrechen</button>
                <button
                  onClick={() => { onDelete(confirmingDelete); setConfirmingDelete(null); }}
                  className="flex-1 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg"
                >Löschen</button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center text-xs text-gray-600">
          BETA 1.3 · DJS Lernplattform
        </div>
      </div>
    </div>
  );
}
