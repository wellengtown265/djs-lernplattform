/**
 * Fokus 2025/2026 — Thematisches Vertiefungsmodul
 *
 * Kombiniert Quiz-Fragen, Bildertest und GeoQuiz zu
 * 8 thematischen Lernbereichen, die speziell für die
 * DJS-Prüfung 2026 relevant sind.
 *
 * Jede Themenkarte zeigt:
 *  - Name & Icon des Themas
 *  - Kurzbeschreibung
 *  - Anzahl verfügbarer Quiz-Fragen
 *  - Verlinkung zu Bildertest-Runden (📸)
 *  - Verlinkung zu GeoQuiz-Karten (🗺️)
 *  - Direktstart des thematischen Quiz
 */
import { useState, useMemo } from 'react';
import type { Question } from '../types';
import type { Page } from '../types';
import QuizMode from './QuizMode';
// useGameState-Return-Typ
type GameStateHook = ReturnType<typeof import('../hooks/useGameState').useGameState>;

// ─── Themen-Definitionen ──────────────────────────────────────────
interface FokusThema {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  tags: string[];        // welche tags in questions.json matchen
  bildertestRunden: string[];  // r01, r02, ...
  geoRefs: string[];     // kurze Beschreibung der Karte
  color: string;         // Akzentfarbe
  prüfungsrelevanz: 'sehr hoch' | 'hoch' | 'mittel';
}

const THEMEN: FokusThema[] = [
  {
    id: 'bundesregierung',
    emoji: '🏛️',
    title: 'Bundesregierung Merz',
    desc: 'Kanzlerwahl, Koalition, Minister:innen und erste Gesetze der CDU/CSU-SPD-Regierung ab Mai 2025.',
    tags: ['bundesregierung', 'merz', 'pistorius', 'wadephul', 'dobrindt', 'bas', 'bildertest-r01', 'kanzlerwahl', 'koalition'],
    bildertestRunden: ['r01'],
    geoRefs: ['Deutschland-Karte: Hauptstadt Berlin, Bundesregierung'],
    color: '#C8191A',
    prüfungsrelevanz: 'sehr hoch',
  },
  {
    id: 'afd-bfv',
    emoji: '⚖️',
    title: 'AfD & Verfassungsschutz',
    desc: 'BfV-Einstufung als „gesichert rechtsextremistisch", Eilverfahren Köln, Verbotsdebatte und COMPACT-Urteil.',
    tags: ['afd', 'bfv', 'verfassungsschutz', 'rechtsextremismus', 'bildertest-r02', 'compact', 'elsässer', 'weidel'],
    bildertestRunden: ['r02'],
    geoRefs: ['Deutschland-Karte: Köln (Verwaltungsgericht, BfV-Sitz)'],
    color: '#1d4ed8',
    prüfungsrelevanz: 'sehr hoch',
  },
  {
    id: 'migration',
    emoji: '🌍',
    title: 'Migration & GEAS',
    desc: 'Asylzahlen 2025, GEAS-Umsetzung, EU-Solidaritätspool, Dublin-Recht und verschärfte Grenzpolitik.',
    tags: ['geas', 'migration', 'asyl', 'bamf', 'dobrindt', 'dublin', 'eu', 'grenzkontrollen', 'relocation'],
    bildertestRunden: [],
    geoRefs: ['Europa-Karte: EU-Mitgliedstaaten, Frontstaaten', 'Deutschland: Grenzen, BAMF'],
    color: '#059669',
    prüfungsrelevanz: 'sehr hoch',
  },
  {
    id: 'nato-gipfel',
    emoji: '🛡️',
    title: 'NATO, G7 & Gipfeljahr 2025',
    desc: 'Den Haag Summit (5%-Ziel), G7 Kananaskis, EU-China-Gipfel und COP30 Belém — das Gipfeljahr 2025.',
    tags: ['nato', 'gipfel', 'den-haag', 'g7', 'kananaskis', 'eu-china', 'cop30', 'belem', 'rutte', 'verteidigungsausgaben', 'rearm-europe', 'safe'],
    bildertestRunden: ['r03'],
    geoRefs: ['Europa-Karte: NATO-Mitglieder, Ostflanke', 'Amerika-Karte: Kanada (G7), Brasilien (COP30)', 'Welt-Karte: NATO, G7, BRICS'],
    color: '#7c3aed',
    prüfungsrelevanz: 'sehr hoch',
  },
  {
    id: 'usa-trump',
    emoji: '🦅',
    title: 'USA, Trump II & Handelskrieg',
    desc: 'Liberation Day, Zölle, EU-US-Deal (15%), Signal-Chat-Skandal und DOGE. Trumps zweite Amtszeit.',
    tags: ['trump', 'usa', 'liberation-day', 'zölle', 'eu-us', 'vance', 'rubio', 'hegseth', 'signal-chat', 'powell', 'bildertest-r04', 'handelspolitik'],
    bildertestRunden: ['r04'],
    geoRefs: ['Amerika-Karte: USA, EU-Handelspartner'],
    color: '#b45309',
    prüfungsrelevanz: 'sehr hoch',
  },
  {
    id: 'konflikte',
    emoji: '🚨',
    title: 'Kriege & Konflikte 2025/26',
    desc: 'Ukraine, Gaza, Sudan, Kongo — Akteure, Karten und humanitäre Lage der wichtigsten Krisenregionen.',
    tags: ['ukraine', 'gaza', 'sudan', 'kongo', 'selenskyj', 'putin', 'netanjahu', 'bildertest-r05', 'bildertest-r06', 'geo-karte', 'burhan', 'm23', 'unrwa', 'icc'],
    bildertestRunden: ['r05', 'r06'],
    geoRefs: ['Europa-Karte: Ukraine', 'Asien/Nahost: Gaza, Israel', 'Afrika: Sudan, DR Kongo, Nigeria'],
    color: '#dc2626',
    prüfungsrelevanz: 'sehr hoch',
  },
  {
    id: 'digital-ki',
    emoji: '🤖',
    title: 'KI, DSA & Plattformregulierung',
    desc: 'EU AI Act, DSA/DMA-Bußgelder, AI Gigafactories, Jensen Huang, Sam Altman und BSI-Lagebericht 2025.',
    tags: ['ki', 'ai-act', 'dsa', 'dma', 'eu', 'digitalpolitik', 'nvidia', 'openai', 'bildertest-r07', 'huang', 'altman', 'tiktok', 'x', 'apple', 'meta', 'gigafactory'],
    bildertestRunden: ['r07'],
    geoRefs: [],
    color: '#0891b2',
    prüfungsrelevanz: 'hoch',
  },
  {
    id: 'kultur-medien',
    emoji: '🎭',
    title: 'Kultur, Preise & Medien',
    desc: 'Nobelpreise, Deutscher Buchpreis, Friedenspreis, ESC 2025, Berlinale 2026, Oscars 2026 und Pressefreiheit.',
    tags: ['nobelpreis', 'friedensnobelpreis', 'literatur', 'buchpreis', 'esc', 'berlinale', 'oscar', 'bildertest-r08', 'bildertest-r10', 'medien', 'krasznahorkai', 'machado', 'elmiger', 'schlögel', 'çatak', 'jj', 'wasted-love', 'film', 'journalismus'],
    bildertestRunden: ['r08', 'r10'],
    geoRefs: ['Europa: Basel (ESC-Finale)', 'Amerika: Los Angeles (Oscars)'],
    color: '#d97706',
    prüfungsrelevanz: 'hoch',
  },
  {
    id: 'sport',
    emoji: '⚽',
    title: 'Sport 2025/26',
    desc: 'Champions League, Women\'s EURO, Club World Cup, DFB-Pokal, Bundesliga, Formel 1 und Olympische Winterspiele Mailand 2026.',
    tags: ['sport', 'fußball', 'champions-league', 'bundesliga', 'dfb-pokal', 'club-world-cup', 'formel-1', 'olympia', 'em-2025', 'bildertest-r09', 'psg', 'chelsea', 'england', 'norris', 'mclaren', 'mailand', 'cortina', 'handball', 'wiegman', 'palmer'],
    bildertestRunden: ['r09'],
    geoRefs: ['Europa: Basel (Women\'s EURO)', 'Amerika: USA (Club World Cup, F1 Abu Dhabi)', 'Italien: Mailand/Cortina (Winterspiele 2026)'],
    color: '#16a34a',
    prüfungsrelevanz: 'hoch',
  },
];

// ─── Hilfsfunktionen ──────────────────────────────────────────────
function getThemaQuestions(thema: FokusThema, questions: Question[]): Question[] {
  const tagSet = new Set(thema.tags.map(t => t.toLowerCase()));
  return questions.filter(q => {
    if (q.year !== 2025 && q.year !== 2026) return false;
    const qTags = (q.tags || []).map((t: string) => t.toLowerCase());
    return qTags.some(t => tagSet.has(t));
  });
}

const PROB_COLOR: Record<string, string> = {
  'sehr hoch': '#10b981',
  'hoch': '#f59e0b',
  'mittel': '#6b7280',
};

// ─── Hauptkomponente ──────────────────────────────────────────────
interface Props {
  questions: Question[];
  gameState: GameStateHook;
  onNavigate: (page: Page, category?: string) => void;
  difficulty?: 'beginner' | 'pro';
}

export default function Fokus2026({ questions, gameState, onNavigate, difficulty = 'beginner' }: Props) {
  const [selectedThema, setSelectedThema] = useState<FokusThema | null>(null);
  const [mode, setMode] = useState<'overview' | 'quiz'>('overview');

  // Fragen pro Thema vorberechnen
  const fragenzahlen = useMemo(() => {
    const map: Record<string, number> = {};
    for (const thema of THEMEN) {
      map[thema.id] = getThemaQuestions(thema, questions).length;
    }
    return map;
  }, [questions]);

  // Gesamtzahl 2025/2026 Fragen
  const gesamt2526 = useMemo(() =>
    questions.filter(q => q.year === 2025 || q.year === 2026).length,
    [questions]
  );

  // Quiz-Modus für ausgewähltes Thema
  if (mode === 'quiz' && selectedThema) {
    const themaQuestions = getThemaQuestions(selectedThema, questions);
    return (
      <div>
        <button
          onClick={() => { setMode('overview'); setSelectedThema(null); }}
          style={{ fontSize: 13, color: '#94a3b8', marginBottom: 12, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          ← Zurück zu FOKUS 2025/26
        </button>
        <QuizMode
          questions={themaQuestions}
          categories={[]}
          gameState={gameState}
          filterCategory={null}
          onNavigate={onNavigate}
          difficulty={difficulty}
        />
      </div>
    );
  }

  // Übersicht
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', paddingBottom: 40 }}>

      {/* ── Hero ── */}
      <div style={{ textAlign: 'center', padding: '28px 16px 20px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#C8191A18', borderRadius: 999, padding: '4px 14px 4px 10px',
          border: '1px solid #C8191A44', marginBottom: 16,
        }}>
          <span style={{ fontSize: 18 }}>🎯</span>
          <span style={{ fontSize: 12, color: '#C8191A', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Fokus 2025/26
          </span>
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 30, color: '#f1f5f9', margin: '0 0 8px', fontWeight: 700,
        }}>
          Prüfungsthemen 2025/26
        </h1>
        <p style={{ color: '#64748b', fontSize: 14, margin: '0 0 16px', lineHeight: 1.6 }}>
          8 Themenbereiche · Verknüpft mit Bildertest 📸 und Karten 🗺️
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{
            background: '#1e293b', border: '1px solid #334155', borderRadius: 999,
            padding: '6px 16px', fontSize: 13, color: '#94a3b8',
          }}>
            <span style={{ color: '#f1f5f9', fontWeight: 700 }}>{gesamt2526}</span> Fragen aus 2025/26
          </div>
          <div style={{
            background: '#1e293b', border: '1px solid #334155', borderRadius: 999,
            padding: '6px 16px', fontSize: 13, color: '#94a3b8',
          }}>
            <span style={{ color: '#f1f5f9', fontWeight: 700 }}>10</span> Bildertest-Runden
          </div>
          <div style={{
            background: '#1e293b', border: '1px solid #334155', borderRadius: 999,
            padding: '6px 16px', fontSize: 13, color: '#94a3b8',
          }}>
            <span style={{ color: '#f1f5f9', fontWeight: 700 }}>7</span> Karten-Modi
          </div>
        </div>
      </div>

      {/* ── Themen-Grid ── */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {THEMEN.map(thema => {
          const nFragen = fragenzahlen[thema.id] || 0;
          const hasBildertest = thema.bildertestRunden.length > 0;
          const hasGeo = thema.geoRefs.length > 0;

          return (
            <div
              key={thema.id}
              style={{
                background: '#0f172a',
                border: `1px solid #1e293b`,
                borderRadius: 16,
                overflow: 'hidden',
              }}
            >
              {/* Farbbalken oben */}
              <div style={{ height: 3, background: thema.color }} />

              <div style={{ padding: '16px 18px' }}>
                {/* Header-Zeile */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 24 }}>{thema.emoji}</span>
                    <div>
                      <h3 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 16, color: '#f1f5f9', margin: 0, fontWeight: 700,
                      }}>
                        {thema.title}
                      </h3>
                      <span style={{
                        fontSize: 10, color: PROB_COLOR[thema.prüfungsrelevanz],
                        fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                      }}>
                        Prüfungsrelevanz: {thema.prüfungsrelevanz}
                      </span>
                    </div>
                  </div>
                  <span style={{
                    fontSize: 12, color: '#f1f5f9', fontWeight: 700, flexShrink: 0,
                    background: '#1e293b', borderRadius: 8, padding: '3px 10px',
                  }}>
                    {nFragen} Fragen
                  </span>
                </div>

                {/* Beschreibung */}
                <p style={{ fontSize: 13, color: '#64748b', margin: '0 0 12px', lineHeight: 1.5 }}>
                  {thema.desc}
                </p>

                {/* Module-Badges */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                  <span style={{
                    fontSize: 11, padding: '3px 10px', borderRadius: 999,
                    background: '#1e293b', color: '#94a3b8', border: '1px solid #334155',
                  }}>
                    🧠 Quiz
                  </span>
                  {hasBildertest && (
                    <span style={{
                      fontSize: 11, padding: '3px 10px', borderRadius: 999,
                      background: '#1e293b', color: '#f59e0b', border: '1px solid #78350f',
                    }}>
                      📸 Bildertest {thema.bildertestRunden.map(r => r.toUpperCase()).join(', ')}
                    </span>
                  )}
                  {hasGeo && (
                    <span style={{
                      fontSize: 11, padding: '3px 10px', borderRadius: 999,
                      background: '#1e293b', color: '#38bdf8', border: '1px solid #0c4a6e',
                    }}>
                      🗺️ Karten
                    </span>
                  )}
                </div>

                {/* Aktions-Buttons */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <button
                    onClick={() => {
                      setSelectedThema(thema);
                      setMode('quiz');
                    }}
                    disabled={nFragen === 0}
                    style={{
                      flex: 1, minWidth: 120,
                      padding: '10px 16px',
                      background: nFragen > 0 ? thema.color : '#1e293b',
                      border: 'none', borderRadius: 10,
                      color: '#fff', fontSize: 13, fontWeight: 700,
                      cursor: nFragen > 0 ? 'pointer' : 'not-allowed',
                      opacity: nFragen > 0 ? 1 : 0.4,
                    }}
                  >
                    ⚡ Quiz starten ({nFragen})
                  </button>

                  {hasBildertest && (
                    <button
                      onClick={() => onNavigate('bildertest')}
                      style={{
                        padding: '10px 14px',
                        background: '#1e293b', border: '1px solid #334155',
                        borderRadius: 10, color: '#f59e0b', fontSize: 12,
                        fontWeight: 600, cursor: 'pointer',
                      }}
                    >
                      📸 Bildertest
                    </button>
                  )}

                  {hasGeo && (
                    <button
                      onClick={() => onNavigate('geo')}
                      style={{
                        padding: '10px 14px',
                        background: '#1e293b', border: '1px solid #334155',
                        borderRadius: 10, color: '#38bdf8', fontSize: 12,
                        fontWeight: 600, cursor: 'pointer',
                      }}
                    >
                      🗺️ Karte
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Tipp-Box ── */}
      <div style={{
        margin: '24px 16px 0',
        padding: '14px 18px',
        background: '#C8191A10', border: '1px solid #C8191A33',
        borderRadius: 12,
      }}>
        <p style={{ fontSize: 12, color: '#fca5a5', margin: 0, lineHeight: 1.6 }}>
          <strong style={{ color: '#f87171' }}>💡 Tipp:</strong> Starte mit den Themen „Sehr hoch" — das sind garantiert Prüfungsthemen.
          Kombiniere Quiz (Fakten) + Bildertest (Gesichter erkennen) + Karten (Geografie) für maximale Vorbereitung.
          Prüfungsdatum: <strong style={{ color: '#f87171' }}>27. Juni 2026</strong>
        </p>
      </div>
    </div>
  );
}
