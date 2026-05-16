/**
 * MapDisplay — Kartenvisualisierung für GeoQuiz
 *
 * Unterstützt 6 Kartenmodi: deutschland, europa, welt, asien, afrika, ozeanien.
 * Vor der Auflösung: neutrale dunkle Karte.
 * Nach der Auflösung: korrekte Länder/Regionen in DJS-Rot hervorgehoben.
 */
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

export type MapMode = 'deutschland' | 'europa' | 'welt' | 'asien' | 'afrika' | 'ozeanien' | 'amerika';

interface Props {
  mode: MapMode;
  highlightCodes: string[];   // ISO alpha-2 (UA, DE) oder DE-Bundesland-Codes (DE-BB)
  revealed: boolean;
  specialNote?: string;       // Hinweis bei komplexen/umstrittenen Gebieten
}

// ISO alpha-2 → ISO numeric (für world-atlas countries-110m TopoJSON)
const ISO2_TO_NUM: Record<string, number> = {
  AD:20, AE:784, AF:4, AG:28, AL:8, AM:51, AO:24, AR:32, AT:40, AU:36,
  AZ:31, BA:70, BB:52, BD:50, BE:56, BF:854, BG:100, BH:48, BI:108, BJ:204,
  BN:96, BO:68, BR:76, BS:44, BT:64, BW:72, BY:112, BZ:84,
  CA:124, CD:180, CF:140, CG:178, CH:756, CI:384, CL:152, CM:120, CN:156, CO:170,
  CR:188, CU:192, CV:132, CY:196, CZ:203,
  DE:276, DJ:262, DK:208, DM:212, DO:214, DZ:12,
  EC:218, EE:233, EG:818, EH:732, ER:232, ES:724, ET:231,
  FI:246, FJ:242, FM:583, FR:250,
  GA:266, GB:826, GD:308, GE:268, GH:288, GM:270, GN:324, GQ:226, GR:300,
  GT:320, GW:624, GY:328,
  HN:340, HR:191, HT:332, HU:348,
  ID:360, IE:372, IL:376, IN:356, IQ:368, IR:364, IS:352, IT:380,
  JM:388, JO:400, JP:392,
  KE:404, KG:417, KH:116, KI:296, KM:174, KN:659, KP:408, KR:410, KW:414, KZ:398,
  LA:418, LB:422, LC:662, LI:438, LK:144, LR:430, LS:426, LT:440, LU:442, LV:428, LY:434,
  MA:504, MC:492, MD:498, ME:499, MG:450, MH:584, MK:807, ML:466, MM:104, MN:496,
  MR:478, MT:470, MU:480, MV:462, MW:454, MX:484, MY:458, MZ:508,
  NA:516, NE:562, NG:566, NI:558, NL:528, NO:578, NP:524, NR:520, NZ:554,
  OM:512,
  PA:591, PE:604, PG:598, PH:608, PK:586, PL:616, PS:275, PT:620, PW:585, PY:600,
  QA:634,
  RO:642, RS:688, RU:643, RW:646,
  SA:682, SB:90, SC:690, SD:729, SE:752, SG:702, SI:705, SK:703, SL:694, SM:674,
  SN:686, SO:706, SR:740, SS:728, ST:678, SV:222, SY:760, SZ:748,
  TD:148, TG:768, TH:764, TJ:762, TL:626, TM:795, TN:788, TO:776, TR:792,
  TT:780, TV:798, TZ:834,
  UA:804, UG:800, US:840, UY:858, UZ:860,
  VA:336, VC:670, VE:862, VN:704, VU:548,
  WS:882, YE:887,
  ZA:710, ZM:894, ZW:716,
};

// Projektionseinstellungen je Modus
const PROJECTION_CONFIGS: Record<MapMode, {
  center: [number, number];
  scale: number;
  width?: number;
  height?: number;
}> = {
  deutschland: { center: [10.5, 51.3],  scale: 3800, width: 600, height: 600 },
  europa:      { center: [15,   52],    scale: 680,  width: 800, height: 650 },
  welt:        { center: [0,    20],    scale: 130,  width: 800, height: 420 },
  asien:       { center: [95,   30],    scale: 380,  width: 800, height: 550 },
  afrika:      { center: [20,   2],     scale: 380,  width: 700, height: 650 },
  ozeanien:    { center: [165, -20],   scale: 450,  width: 800, height: 550 },
  amerika:     { center: [-75,  0],    scale: 280,  width: 700, height: 650 },
};

const GEO_URLS: Record<MapMode, string> = {
  deutschland: '/geo/deutschland-bundeslaender.json',
  europa:      '/geo/world-110m.json',
  welt:        '/geo/world-110m.json',
  asien:       '/geo/world-110m.json',
  afrika:      '/geo/world-110m.json',
  ozeanien:    '/geo/world-110m.json',
  amerika:     '/geo/world-110m.json',
};

function isCountryHighlighted(geoId: number | string, codes: string[]): boolean {
  const numId = Number(geoId);
  return codes.some(c => {
    const n = ISO2_TO_NUM[c.toUpperCase()];
    return n !== undefined && n === numId;
  });
}

function isStateHighlighted(stateId: string, codes: string[]): boolean {
  return codes.includes(stateId);
}

export default function MapDisplay({ mode, highlightCodes, revealed, specialNote }: Props) {
  const cfg = PROJECTION_CONFIGS[mode];
  const geoUrl = GEO_URLS[mode];
  const isDeutschland = mode === 'deutschland';

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: cfg.center, scale: cfg.scale }}
        width={cfg.width ?? 800}
        height={cfg.height ?? 500}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const highlighted = revealed && (
                isDeutschland
                  ? isStateHighlighted(geo.properties?.id ?? '', highlightCodes)
                  : isCountryHighlighted(geo.id, highlightCodes)
              );

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: highlighted ? '#C8191A' : (revealed ? '#111827' : '#1f2937'),
                      stroke: highlighted ? '#e53e3e' : '#374151',
                      strokeWidth: isDeutschland ? 0.6 : 0.4,
                      outline: 'none',
                      transition: 'fill 0.35s ease',
                    },
                    hover: {
                      fill: highlighted ? '#dc2626' : '#1f2937',
                      outline: 'none',
                    },
                    pressed: { outline: 'none' },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Vor Auflösung: Lupe-Overlay */}
      {!revealed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="bg-black/60 backdrop-blur-sm rounded-xl px-6 py-4 text-center border border-gray-700">
            <div className="text-3xl mb-1">🗺️</div>
            <div className="text-sm text-gray-300 font-medium">Wo liegt das?</div>
            <div className="text-xs text-gray-500 mt-1">Löse auf um die Antwort zu sehen</div>
          </div>
        </div>
      )}

      {/* Nach Auflösung: Legende */}
      {revealed && highlightCodes.length > 0 && (
        <div className="absolute bottom-2 left-2 flex items-center gap-2 bg-black/70 rounded-lg px-3 py-1.5 border border-gray-700">
          <div className="w-3 h-3 rounded-sm bg-djs-red flex-shrink-0" />
          <span className="text-xs text-gray-300">
            {highlightCodes.filter(c => !c.startsWith('DE-') || isDeutschland).join(' · ')}
          </span>
        </div>
      )}

      {/* Hinweis bei umstrittenen/komplexen Gebieten */}
      {revealed && specialNote && (
        <div className="absolute top-2 right-2 max-w-[60%] bg-amber-900/80 border border-amber-600 rounded-lg px-3 py-1.5">
          <p className="text-xs text-amber-200">⚠ {specialNote}</p>
        </div>
      )}
    </div>
  );
}
