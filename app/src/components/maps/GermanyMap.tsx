/**
 * GermanyMap — Klickbare SVG-Karte der 16 deutschen Bundesländer
 *
 * Props:
 *  correctIds  — ISO-Codes der korrekten Antwort(en), z.B. ["DE-BB", "DE-SN"]
 *  onSelect    — callback(featureId, isCorrect)
 *  revealed    — zeigt Lösung (grün/rot)
 *
 * Features:
 *  - Hover-Highlighting
 *  - Multi-Select (mehrere Länder auswählen)
 *  - Korrekte Grenzen (vereinfacht, aber erkennbar)
 *  - Responsive SVG (viewBox basiert)
 */

import { useState } from 'react';

export interface GermanyFeature {
  id: string;    // DE-BY, DE-NW, ...
  name: string;  // Bayern, Nordrhein-Westfalen, ...
  path: string;  // SVG path data
  labelX: number;
  labelY: number;
}

// Vereinfachte SVG-Pfade der 16 Bundesländer
// ViewBox: 0 0 520 640 (Deutschland ~6.8°-15.0°E, 47.3°-55.1°N)
// Projektion: x=(lon-6.8)/8.2*520, y=(55.1-lat)/7.8*640
const BUNDESLAENDER: GermanyFeature[] = [
  {
    id: 'DE-SH', name: 'Schleswig-Holstein',
    path: 'M 195 20 L 270 18 L 285 35 L 310 28 L 318 45 L 305 58 L 275 65 L 250 78 L 225 72 L 205 58 L 190 42 Z',
    labelX: 255, labelY: 48,
  },
  {
    id: 'DE-HH', name: 'Hamburg',
    path: 'M 225 72 L 255 70 L 262 80 L 252 90 L 232 88 L 222 80 Z',
    labelX: 243, labelY: 81,
  },
  {
    id: 'DE-MV', name: 'Mecklenburg-Vorpommern',
    path: 'M 230 20 L 340 15 L 420 22 L 435 42 L 415 60 L 390 68 L 355 72 L 320 68 L 290 72 L 265 68 L 250 58 L 260 42 Z',
    labelX: 340, labelY: 46,
  },
  {
    id: 'DE-HB', name: 'Bremen',
    path: 'M 182 110 L 195 106 L 200 116 L 195 124 L 182 122 Z',
    labelX: 191, labelY: 116,
  },
  {
    id: 'DE-NI', name: 'Niedersachsen',
    path: 'M 100 80 L 225 72 L 262 80 L 270 100 L 255 115 L 265 130 L 250 148 L 220 158 L 185 165 L 155 155 L 120 158 L 88 148 L 72 130 L 68 108 Z',
    labelX: 168, labelY: 128,
  },
  {
    id: 'DE-BB', name: 'Brandenburg',
    path: 'M 305 75 L 365 70 L 410 78 L 425 95 L 428 118 L 415 138 L 395 150 L 365 158 L 340 160 L 315 155 L 295 140 L 292 118 L 300 98 Z',
    labelX: 360, labelY: 118,
  },
  {
    id: 'DE-BE', name: 'Berlin',
    path: 'M 348 108 L 365 106 L 368 120 L 358 128 L 344 125 L 342 112 Z',
    labelX: 356, labelY: 118,
  },
  {
    id: 'DE-NW', name: 'Nordrhein-Westfalen',
    path: 'M 55 125 L 100 115 L 130 108 L 155 115 L 165 130 L 160 148 L 148 165 L 128 178 L 100 182 L 72 178 L 48 165 L 38 148 L 42 132 Z',
    labelX: 100, labelY: 152,
  },
  {
    id: 'DE-ST', name: 'Sachsen-Anhalt',
    path: 'M 250 148 L 295 140 L 315 155 L 318 175 L 308 192 L 285 200 L 260 202 L 238 195 L 225 178 L 228 162 Z',
    labelX: 275, labelY: 175,
  },
  {
    id: 'DE-SN', name: 'Sachsen',
    path: 'M 315 155 L 365 158 L 395 150 L 418 160 L 422 178 L 408 195 L 380 205 L 352 208 L 325 200 L 308 192 L 318 175 Z',
    labelX: 368, labelY: 180,
  },
  {
    id: 'DE-HE', name: 'Hessen',
    path: 'M 128 178 L 155 165 L 185 165 L 220 178 L 225 198 L 215 218 L 195 230 L 170 235 L 145 228 L 125 215 L 118 198 Z',
    labelX: 172, labelY: 205,
  },
  {
    id: 'DE-TH', name: 'Thüringen',
    path: 'M 225 178 L 260 175 L 285 180 L 308 192 L 308 210 L 295 225 L 272 232 L 248 230 L 228 218 L 218 205 Z',
    labelX: 268, labelY: 210,
  },
  {
    id: 'DE-RP', name: 'Rheinland-Pfalz',
    path: 'M 48 200 L 80 185 L 110 188 L 125 198 L 128 218 L 118 235 L 98 248 L 72 252 L 48 245 L 35 228 L 32 212 Z',
    labelX: 82, labelY: 222,
  },
  {
    id: 'DE-SL', name: 'Saarland',
    path: 'M 68 255 L 95 248 L 108 258 L 105 272 L 88 278 L 68 270 Z',
    labelX: 88, labelY: 265,
  },
  {
    id: 'DE-BW', name: 'Baden-Württemberg',
    path: 'M 98 248 L 128 235 L 158 238 L 192 232 L 215 242 L 228 262 L 232 290 L 218 318 L 195 335 L 168 342 L 138 338 L 112 325 L 92 305 L 82 280 L 82 260 Z',
    labelX: 160, labelY: 295,
  },
  {
    id: 'DE-BY', name: 'Bayern',
    path: 'M 215 218 L 248 212 L 272 218 L 295 212 L 325 200 L 358 208 L 390 215 L 415 228 L 428 252 L 425 285 L 412 318 L 390 342 L 362 358 L 325 368 L 292 368 L 260 355 L 235 338 L 218 318 L 228 290 L 225 262 Z',
    labelX: 325, labelY: 298,
  },
];

// Mapping: Location-Name → Feature-ID
export const GERMANY_LOCATION_MAP: Record<string, string> = {
  'Brandenburg (DE-BB)': 'DE-BB',
  'Brandenburg': 'DE-BB',
  'DE-BB': 'DE-BB',
  'Sachsen (DE-SN)': 'DE-SN',
  'Sachsen': 'DE-SN',
  'DE-SN': 'DE-SN',
  'Thüringen (DE-TH)': 'DE-TH',
  'Thüringen': 'DE-TH',
  'DE-TH': 'DE-TH',
  'Bayern (DE-BY)': 'DE-BY',
  'Bayern': 'DE-BY',
  'DE-BY': 'DE-BY',
  'Nordrhein-Westfalen': 'DE-NW',
  'NRW': 'DE-NW',
  'Ruhrgebiet': 'DE-NW',
  'Ruhrgebiet, Nordrhein-Westfalen, Deutschland': 'DE-NW',
  'Berlin': 'DE-BE',
  'DE-BE': 'DE-BE',
  'Hamburg': 'DE-HH',
  'DE-HH': 'DE-HH',
  'Bayern (DE-BY), Österreich (AT)': 'DE-BY',
  'Deutschland (DE)': 'ALL',
};

interface Props {
  correctLocations: string[];   // aus question.locations
  revealed: boolean;
  onSelect?: (featureId: string, isCorrect: boolean) => void;
  multiSelect?: boolean;
}

export function GermanyMap({ correctLocations, revealed, onSelect, multiSelect = false }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  // Korrekte Feature-IDs berechnen
  const correctIds = new Set<string>();
  for (const loc of correctLocations) {
    const mapped = GERMANY_LOCATION_MAP[loc];
    if (mapped && mapped !== 'ALL') correctIds.add(mapped);
    else if (!mapped) {
      // Direkter ID-Match versuchen
      const bl = BUNDESLAENDER.find(b => b.id === loc || b.name === loc);
      if (bl) correctIds.add(bl.id);
    }
  }

  const handleClick = (feature: GermanyFeature) => {
    if (revealed) return;
    const isCorrect = correctIds.has(feature.id);
    if (multiSelect) {
      setSelected(prev => {
        const next = new Set(prev);
        if (next.has(feature.id)) next.delete(feature.id);
        else next.add(feature.id);
        return next;
      });
    } else {
      setSelected(new Set([feature.id]));
    }
    onSelect?.(feature.id, isCorrect);
  };

  const getColor = (feature: GermanyFeature) => {
    const isCorrect = correctIds.has(feature.id);
    const isSelected = selected.has(feature.id);
    const isHovered = hovered === feature.id;

    if (revealed) {
      if (isCorrect) return '#064e3b'; // dunkelgrün
      if (isSelected && !isCorrect) return '#7f1d1d'; // dunkelrot
      return '#1f2937'; // grau
    }
    if (isSelected) return '#1e3a5f'; // blau
    if (isHovered) return '#374151'; // hell-grau
    return '#1f2937'; // dunkel-grau
  };

  const getStroke = (feature: GermanyFeature) => {
    const isCorrect = correctIds.has(feature.id);
    const isSelected = selected.has(feature.id);
    if (revealed && isCorrect) return '#10b981';
    if (revealed && isSelected) return '#ef4444';
    if (selected.has(feature.id)) return '#3b82f6';
    return '#374151';
  };

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 520 400"
        className="w-full h-auto"
        style={{ maxHeight: 420 }}
      >
        {/* Hintergrund */}
        <rect width="520" height="400" fill="#111827" rx="8" />

        {/* Bundesländer */}
        {BUNDESLAENDER.map(feature => (
          <g key={feature.id} onClick={() => handleClick(feature)}
            style={{ cursor: revealed ? 'default' : 'pointer' }}>
            <path
              d={feature.path}
              fill={getColor(feature)}
              stroke={getStroke(feature)}
              strokeWidth={hovered === feature.id ? 2 : 1}
              style={{ transition: 'fill 0.2s, stroke 0.2s' }}
              onMouseEnter={() => setHovered(feature.id)}
              onMouseLeave={() => setHovered(null)}
            />
            {/* Label — nur bei größeren Ländern oder wenn gerade gehovered */}
            {(feature.id === 'DE-BY' || feature.id === 'DE-NW' || feature.id === 'DE-NI' ||
              feature.id === 'DE-BW' || feature.id === 'DE-MV' || feature.id === 'DE-BB' ||
              feature.id === 'DE-SN' || feature.id === 'DE-TH' || feature.id === 'DE-HE' ||
              feature.id === 'DE-ST' || hovered === feature.id || selected.has(feature.id) ||
              (revealed && correctIds.has(feature.id))) && (
              <text
                x={feature.labelX}
                y={feature.labelY}
                textAnchor="middle"
                fontSize={feature.id === 'DE-BY' || feature.id === 'DE-NW' ? 10 : 8}
                fill={
                  revealed && correctIds.has(feature.id) ? '#6ee7b7' :
                  revealed && selected.has(feature.id) ? '#fca5a5' :
                  selected.has(feature.id) ? '#93c5fd' :
                  hovered === feature.id ? '#f9fafb' : '#9ca3af'
                }
                style={{ userSelect: 'none', pointerEvents: 'none', fontFamily: 'sans-serif' }}
              >
                {feature.name}
              </text>
            )}
          </g>
        ))}

        {/* Tooltip bei Hover */}
        {hovered && !revealed && (
          <g>
            <rect x="8" y="370" width="200" height="22" rx="4" fill="#374151" opacity="0.9" />
            <text x="16" y="385" fontSize="11" fill="#f9fafb" style={{ fontFamily: 'sans-serif' }}>
              {BUNDESLAENDER.find(b => b.id === hovered)?.name}
            </text>
          </g>
        )}

        {/* Revealed: Erklärung */}
        {revealed && correctIds.size > 0 && (
          <g>
            <rect x="8" y="370" width="504" height="22" rx="4" fill="#064e3b" opacity="0.8" />
            <text x="16" y="385" fontSize="10" fill="#6ee7b7" style={{ fontFamily: 'sans-serif' }}>
              ✓ Richtig: {Array.from(correctIds).map(id => BUNDESLAENDER.find(b => b.id === id)?.name).join(', ')}
            </text>
          </g>
        )}
      </svg>

      {/* Legende unter der Karte */}
      {!revealed && (
        <div className="flex gap-4 justify-center mt-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded" style={{ background: '#1e3a5f', border: '1px solid #3b82f6' }} />
            Ausgewählt
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded" style={{ background: '#374151' }} />
            Klicken zum Wählen
          </span>
        </div>
      )}
    </div>
  );
}
