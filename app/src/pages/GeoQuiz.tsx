/**
 * GeoQuiz — V1.4
 *
 * Alle 93 Geo-Fragen spielbar:
 *   multiple-choice  → Antwortbuttons
 *   text-input       → Freitexteingabe
 *   matching         → Zuordnungs-UI (Pairs reveal nach Auflösung)
 *   map-interactive  → Karte mit Highlight-Auflösung (MapDisplay)
 *
 * Anfänger-Modus: text-input + matching → MC-Buttons mit Optionen.
 * Pro-Modus: Freitext für alle Typen.
 */
import { useState, useMemo } from 'react';
import geoData from '../data/geoQuestions.json';
import type { Difficulty } from '../types';
import MapDisplay, { type MapMode } from '../components/MapDisplay';

// ─── Typen ──────────────────────────────────────────────────────────────────

interface GeoQuestion {
  id: string;
  category: string;
  prompt: string;
  type: 'multiple-choice' | 'text-input' | 'matching' | 'map-interactive';
  difficulty: string;
  region: string;
  locations?: string[];
  options: string[];
  correctAnswer: string;
  context: string;
  riskFlag?: string;
  implementationHints?: string;
  asOfDate?: string;
}

// ─── Hilfsfunktionen ────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Extrahiert Highlight-Codes (ISO alpha-2 oder DE-XX) aus locations + implementationHints */
function extractHighlightCodes(q: GeoQuestion): string[] {
  const codes: string[] = [];

  // Aus locations-Array: "Brandenburg (DE-BB)" → "DE-BB", "Ukraine (UA)" → "UA"
  (q.locations ?? []).forEach(loc => {
    const m = loc.match(/\(([A-Z]{2}(?:-[A-Z0-9]+)?)\)/);
    if (m) codes.push(m[1]);
  });

  const hints = q.implementationHints ?? '';

  // acceptedFeatureIds=[DE-BB,DE-SN,DE-TH] oder featureIds=[ES,IT,GR]
  const listM = hints.match(/(?:acceptedFeatureIds|featureIds)=\[([^\]]+)\]/);
  if (listM) listM[1].split(',').forEach(c => codes.push(c.trim()));

  // featureId=UA (single)
  const singleM = hints.match(/featureId=([A-Z]{2,3}(?:-[A-Z0-9]+)?)/);
  if (singleM) codes.push(singleM[1]);

  // featurePair=[US,MX]
  const pairM = hints.match(/featurePair=\[([^\]]+)\]/);
  if (pairM) pairM[1].split(',').forEach(c => codes.push(c.trim()));

  // requiredCountry=CA
  const reqM = hints.match(/requiredCountry=([A-Z]{2})/);
  if (reqM) codes.push(reqM[1]);

  // required=[ES,PT]
  const reqListM = hints.match(/required=\[([^\]]+)\]/);
  if (reqListM) reqListM[1].split(',').forEach(c => codes.push(c.trim()));

  return [...new Set(codes)];
}

/** Bestimmt den Kartenmodus aus region + implementationHints */
function getMapMode(q: GeoQuestion): MapMode {
  const hints = q.implementationHints ?? '';
  if (hints.includes('adminLevel=DE-Bundesland')) return 'deutschland';
  switch (q.region) {
    case 'Europa':   return 'europa';
    case 'Amerika':  return 'amerika';
    case 'Asien':    return 'asien';
    case 'Afrika':   return 'afrika';
    case 'Ozeanien': return 'ozeanien';
    default:         return 'welt';
  }
}

/** Gibt einen Hinweis für politisch/geographisch komplexe Fragen zurück */
function getSpecialNote(q: GeoQuestion): string | undefined {
  const hints = q.implementationHints ?? '';
  if (hints.includes('doNotUseCurrentControlLine')) return 'Karte zeigt völkerrechtlich anerkannte Grenzen, keine Frontlinien.';
  if (hints.includes('notContinuousTerritory')) return 'Das Gebiet ist nicht geografisch zusammenhängend.';
  if (hints.includes('disputedBoundaries')) return 'Grenzverlauf politisch umstritten — Darstellung vereinfacht.';
  if (hints.includes('toleranceKm')) return 'Lage vereinfacht — exakte Position kleinräumig.';
  return undefined;
}

/** Parst Matching-Antwort: "A → X; B → Y" → Paare */
function parseMatchingPairs(answer: string): { left: string; right: string }[] {
  return answer.split(';').map(s => {
    const parts = s.split(/→|->/).map(p => p.trim());
    return { left: parts[0] ?? '', right: parts[1] ?? '' };
  }).filter(p => p.left && p.right);
}

// ─── Unterkomponenten ───────────────────────────────────────────────────────

/** Matching-UI: zeigt Paare nach Auflösung, davor nur die linke Seite */
function MatchingCard({
  q,
  revealed,
  onReveal,
}: {
  q: GeoQuestion;
  revealed: boolean;
  onReveal: () => void;
}) {
  const pairs = useMemo(() => parseMatchingPairs(q.correctAnswer), [q.correctAnswer]);
  const [selected, setSelected] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const rights = useMemo(() => shuffle(pairs.map(p => p.right)), [q.id]);

  const handleLeft = (left: string) => {
    if (revealed) return;
    setSelected(left);
  };

  const handleRight = (right: string) => {
    if (revealed || !selected) return;
    setMatches(m => ({ ...m, [selected]: right }));
    setSelected(null);
  };

  if (revealed) {
    return (
      <div className="space-y-2">
        {pairs.map((p, i) => (
          <div key={i} className="flex items-center gap-3 bg-gray-800/60 rounded-lg px-4 py-2.5">
            <span className="text-gray-200 font-medium min-w-0 flex-1">{p.left}</span>
            <span className="text-emerald-500 font-bold">→</span>
            <span className="text-emerald-300 min-w-0 flex-1 text-right">{p.right}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {pairs.map((p, i) => (
            <button
              key={i}
              onClick={() => handleLeft(p.left)}
              className={`w-full px-3 py-2.5 text-left rounded-lg border-2 transition-all text-sm ${
                selected === p.left
                  ? 'border-djs-red bg-red-900/20 text-gray-100'
                  : matches[p.left]
                  ? 'border-emerald-600 bg-emerald-900/20 text-gray-200'
                  : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-500'
              }`}
            >
              {p.left}
              {matches[p.left] && (
                <span className="text-emerald-400 ml-1 text-xs">→ {matches[p.left]}</span>
              )}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {rights.map((r, i) => {
            const isMatched = Object.values(matches).includes(r);
            return (
              <button
                key={i}
                onClick={() => handleRight(r)}
                disabled={isMatched}
                className={`w-full px-3 py-2.5 text-left rounded-lg border-2 transition-all text-sm ${
                  isMatched
                    ? 'border-emerald-600/40 bg-emerald-900/10 text-gray-500 opacity-50'
                    : selected
                    ? 'border-blue-600 bg-blue-900/20 text-gray-200 hover:border-blue-400'
                    : 'border-gray-700 bg-gray-800 text-gray-300'
                }`}
              >
                {r}
              </button>
            );
          })}
        </div>
      </div>
      <button
        onClick={onReveal}
        className="w-full py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
      >
        Auflösen
      </button>
    </div>
  );
}

// ─── Hauptkomponente ────────────────────────────────────────────────────────

interface Props {
  difficulty?: Difficulty;
  onBack: () => void;
}

const ALL_QUESTIONS = (geoData as any).questions as GeoQuestion[];

// Kategoriefarben
const CATEGORY_COLORS: Record<string, string> = {
  Deutschland: '#3b82f6',
  Ukraine: '#fbbf24',
  EU: '#60a5fa',
  NATO: '#818cf8',
  Gaza: '#f97316',
  Sudan: '#a78bfa',
  Kongo: '#34d399',
  Klima: '#10b981',
};

function getCategoryColor(cat: string): string {
  for (const [key, color] of Object.entries(CATEGORY_COLORS)) {
    if (cat.includes(key)) return color;
  }
  return '#6b7280';
}

export default function GeoQuiz({ difficulty = 'beginner', onBack }: Props) {
  const queue = useMemo(() => shuffle(ALL_QUESTIONS).slice(0, 20), []);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  if (queue.length === 0) {
    return (
      <div className="p-6 text-center text-gray-300">
        <p>Keine Fragen gefunden.</p>
        <button onClick={onBack} className="mt-4 px-4 py-2 bg-gray-800 rounded">← Zurück</button>
      </div>
    );
  }

  // Abschluss-Bildschirm
  if (idx >= queue.length) {
    const pct = answeredCount ? Math.round(correctCount / answeredCount * 100) : 0;
    return (
      <div className="p-6 text-center space-y-4 max-w-md mx-auto">
        <div className="text-5xl">🌍</div>
        <h2 className="font-serif text-2xl text-gray-100">Geo-Runde beendet!</h2>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-2">
          <div className="text-4xl font-bold text-djs-red">{pct}%</div>
          <div className="text-gray-400">{correctCount} von {answeredCount} richtig</div>
          <div className="text-xs text-gray-600 mt-2">
            {ALL_QUESTIONS.length} Fragen verfügbar · {queue.length} gespielt
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => { window.location.reload(); }}
            className="py-3 bg-djs-red text-white rounded-xl font-bold"
          >
            Neue Runde
          </button>
          <button onClick={onBack} className="py-3 bg-gray-800 text-white rounded-xl font-bold">
            Dashboard
          </button>
        </div>
      </div>
    );
  }

  const q = queue[idx];
  const isMapType = q.type === 'map-interactive';
  const isMatchingType = q.type === 'matching';
  const isMC = !isMapType && !isMatchingType && q.options && q.options.length > 0;
  const isText = !isMapType && !isMatchingType && !isMC;

  // Im Anfänger-Modus: text-input → MC wenn genug andere Antworten generierbar
  const useMCFallback = difficulty === 'beginner' && isText;

  const highlightCodes = isMapType ? extractHighlightCodes(q) : [];
  const mapMode = isMapType ? getMapMode(q) : 'welt';
  const specialNote = isMapType ? getSpecialNote(q) : undefined;

  const handleMCPick = (opt: string) => {
    if (revealed) return;
    setPicked(opt);
    const correct = q.correctAnswer.toLowerCase().includes(opt.toLowerCase()) ||
                    opt.toLowerCase().includes(q.correctAnswer.toLowerCase().split(/[;.]/)[0].trim());
    setRevealed(true);
    setAnsweredCount(c => c + 1);
    if (correct) setCorrectCount(c => c + 1);
  };

  const handleTextSubmit = () => {
    if (revealed || !inputValue.trim()) return;
    setRevealed(true);
    setAnsweredCount(c => c + 1);
    const u = inputValue.toLowerCase().trim();
    const a = q.correctAnswer.toLowerCase().split(/[;.]/)[0].trim();
    if (a.includes(u) || u.includes(a)) setCorrectCount(c => c + 1);
  };

  const handleReveal = () => {
    setRevealed(true);
    setAnsweredCount(c => c + 1);
  };

  const handleNext = () => {
    setIdx(i => i + 1);
    setRevealed(false);
    setPicked(null);
    setInputValue('');
  };

  const catColor = getCategoryColor(q.category);

  return (
    <div className="space-y-4 pb-8 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center pt-2">
        <button onClick={onBack} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
          ← Zurück
        </button>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-blue-900/40 text-blue-300 text-xs rounded-full font-medium">
            🌍 GEO
          </span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
            difficulty === 'pro' ? 'bg-red-900/40 text-red-300' : 'bg-emerald-900/40 text-emerald-300'
          }`}>
            {difficulty === 'pro' ? '🔥 PRO' : '🌱 ANF'}
          </span>
          <span className="text-sm text-gray-500">{idx + 1}/{queue.length}</span>
        </div>
      </div>

      {/* Fortschrittsbalken */}
      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all"
          style={{ width: `${((idx + 1) / queue.length) * 100}%` }}
        />
      </div>

      {/* Kategorie + Metadaten */}
      <div className="flex items-center gap-2 text-xs flex-wrap">
        <span className="font-medium truncate max-w-xs" style={{ color: catColor }}>
          {q.category}
        </span>
        <span className="text-gray-600">·</span>
        <span className="text-gray-500">{q.region}</span>
        <span className={`ml-auto px-2 py-0.5 rounded-full text-[10px] ${
          q.difficulty === 'leicht' ? 'bg-emerald-900 text-emerald-400' :
          q.difficulty === 'schwer' ? 'bg-red-900 text-red-400' :
          'bg-amber-900 text-amber-400'
        }`}>{q.difficulty}</span>
        <span className={`px-2 py-0.5 rounded-full text-[10px] ${
          q.type === 'map-interactive' ? 'bg-blue-900/50 text-blue-300' :
          q.type === 'matching'        ? 'bg-purple-900/50 text-purple-300' :
          q.type === 'multiple-choice' ? 'bg-gray-800 text-gray-400' :
          'bg-gray-800 text-gray-400'
        }`}>{q.type}</span>
      </div>

      {/* Karte (nur bei map-interactive) */}
      {isMapType && (
        <MapDisplay
          mode={mapMode}
          highlightCodes={highlightCodes}
          revealed={revealed}
          specialNote={specialNote}
        />
      )}

      {/* Frage */}
      <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
        <p className="font-serif text-lg font-bold text-white leading-snug">{q.prompt}</p>
      </div>

      {/* ── Eingabe-Phase ── */}

      {/* Multiple-Choice */}
      {!revealed && isMC && (
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleMCPick(opt)}
              className="w-full px-4 py-3 text-left rounded-lg border-2 bg-gray-800 border-gray-700 hover:border-gray-500 text-gray-200 transition-all"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* Matching */}
      {!revealed && isMatchingType && (
        <MatchingCard q={q} revealed={false} onReveal={handleReveal} />
      )}

      {/* Freitext / map-interactive vor Auflösung */}
      {!revealed && (isText || useMCFallback || isMapType) && (
        <div className="space-y-2">
          {!isMapType && (
            <>
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Deine Antwort…"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-blue-500"
                onKeyDown={e => { if (e.key === 'Enter') handleTextSubmit(); }}
                autoFocus
              />
            </>
          )}
          <button
            onClick={isMapType ? handleReveal : handleTextSubmit}
            className="w-full py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            {isMapType ? '🗺️ Antwort auf Karte anzeigen' : 'Auflösen'}
          </button>
        </div>
      )}

      {/* ── Auflösungs-Phase ── */}
      {revealed && (
        <div className="space-y-3">
          {/* MC-Auswertung */}
          {isMC && (
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                const isCorrect = q.correctAnswer.toLowerCase().includes(opt.toLowerCase());
                const isPicked = picked === opt;
                let cls = 'bg-gray-800/50 border-gray-700 text-gray-500';
                if (isCorrect) cls = 'bg-emerald-900/30 border-emerald-600 text-emerald-100';
                else if (isPicked) cls = 'bg-red-900/30 border-red-600 text-red-100';
                return (
                  <div key={i} className={`px-4 py-3 rounded-lg border-2 text-sm ${cls}`}>
                    {opt}
                  </div>
                );
              })}
            </div>
          )}

          {/* Matching reveal */}
          {isMatchingType && <MatchingCard q={q} revealed={true} onReveal={handleReveal} />}

          {/* Freitext-Tipp */}
          {inputValue && isText && (
            <div className="text-sm text-gray-400">
              Dein Tipp: <span className="text-gray-200">{inputValue}</span>
            </div>
          )}

          {/* Antwort-Box */}
          <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
            <div className="text-xs uppercase tracking-wider text-blue-400 mb-1">Richtige Antwort</div>
            <div className="text-gray-100 leading-relaxed">{q.correctAnswer}</div>
          </div>

          {/* Kontext */}
          {q.context && (
            <div className="bg-gray-800/50 rounded-lg p-4 text-sm text-gray-300 leading-relaxed">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">DJS-Kontext</div>
              {q.context}
            </div>
          )}

          {/* Risiko-Hinweis */}
          {q.riskFlag === 'high' && (
            <div className="bg-amber-900/20 border-l-4 border-amber-600 p-3 text-sm text-amber-200">
              ⚠ Politisch komplexes Thema — Stand: {q.asOfDate ?? (geoData as any).createdAt}.
            </div>
          )}

          {/* Selbstbewertung (map-interactive + text-input) */}
          {(isMapType || isText || isMatchingType) && (
            <div className="grid grid-cols-3 gap-2">
              {(['Nicht gewusst', 'Halb', 'Gewusst'] as const).map(label => (
                <button
                  key={label}
                  onClick={handleNext}
                  className={`py-2.5 rounded-lg text-sm border transition-colors ${
                    label === 'Nicht gewusst' ? 'bg-gray-800 hover:bg-red-900/30 border-gray-700 hover:border-red-600 text-gray-200' :
                    label === 'Halb'          ? 'bg-gray-800 hover:bg-amber-900/30 border-gray-700 hover:border-amber-600 text-gray-200' :
                                               'bg-gray-800 hover:bg-emerald-900/30 border-gray-700 hover:border-emerald-600 text-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Weiter für MC */}
          {isMC && (
            <button
              onClick={handleNext}
              className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
            >
              {idx + 1 >= queue.length ? 'Runde beenden →' : 'Nächste →'}
            </button>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="text-center text-xs text-gray-600 pt-2">
        {ALL_QUESTIONS.length} Fragen verfügbar · {queue.filter(q => q.type === 'map-interactive').length} Karten-Fragen in dieser Runde
      </div>
    </div>
  );
}
