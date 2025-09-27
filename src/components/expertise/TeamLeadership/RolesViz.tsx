import React, { useMemo, useState } from "react";

/**
 * Rollen-Datentyp
 */
export type RoleItem = {
  name: string;
  group: "Research" | "Design" | "Strategie & Management" | "Spezialisiert";
  weight: number; // 0..100 – wie präsent/zentral die Rolle bei dir ist
};

/**
 * Default-Daten – gern anpassen
 * Tipp: Gewichte grob nach aktueller Relevanz setzen (Summe muss nicht 100 sein).
 */
const DEFAULT_ROLES: RoleItem[] = [
  // Research
  { name: "UX Researcher", group: "Research", weight: 32 },
  { name: "CX Analyst", group: "Research", weight: 12 },

  // Design
  { name: "UX Designer", group: "Design", weight: 10 },
  { name: "Service Designer", group: "Design", weight: 8 },
  { name: "Interaction Designer", group: "Design", weight: 6 },

  // Strategie & Management
  { name: "UX Strategist", group: "Strategie & Management", weight: 18 },
  { name: "UX Manager", group: "Strategie & Management", weight: 16 },
  { name: "Design Manager", group: "Strategie & Management", weight: 10 },

  // Spezialisiert
  { name: "Accessibility Specialist", group: "Spezialisiert", weight: 4 },
  { name: "UX Writer", group: "Spezialisiert", weight: 4 },
  { name: "UI Developer", group: "Spezialisiert", weight: 4 },
];

/**
 * Farbpalette pro Gruppe (dunkel + hell für Hover/Legende)
 */
const GROUP_COLORS: Record<
  RoleItem["group"],
  { base: string; light: string; ring: string }
> = {
  "Research": { base: "#2563eb", light: "#93c5fd", ring: "#1d4ed8" },                // blau
  "Design": { base: "#10b981", light: "#6ee7b7", ring: "#059669" },                  // grün
  "Strategie & Management": { base: "#f59e0b", light: "#fcd34d", ring: "#d97706" },  // amber
  "Spezialisiert": { base: "#8b5cf6", light: "#c4b5fd", ring: "#7c3aed" },           // violet
};

/**
 * Hilfsfunktionen für das Donut-/Segment-Chart (SVG-Arcs)
 */
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  startAngle: number,
  endAngle: number
) {
  const startOuter = polarToCartesian(cx, cy, rOuter, endAngle);
  const endOuter = polarToCartesian(cx, cy, rOuter, startAngle);
  const startInner = polarToCartesian(cx, cy, rInner, endAngle);
  const endInner = polarToCartesian(cx, cy, rInner, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  // Pfad: äußerer Bogen -> radial nach innen -> innerer Bogen -> radial nach außen
  const d = [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArcFlag} 0 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${rInner} ${rInner} 0 ${largeArcFlag} 1 ${startInner.x} ${startInner.y}`,
    "Z",
  ].join(" ");

  return d;
}

/**
 * Rollenrad (Donut mit Segmenten)
 */
function RolesWheel({
  roles,
  size = 420,
  innerRadius = 120,
  outerRadius = 200,
}: {
  roles: RoleItem[];
  size?: number;
  innerRadius?: number;
  outerRadius?: number;
}) {
  const center = size / 2;

  const total = useMemo(
    () => roles.reduce((acc, r) => acc + Math.max(r.weight, 0), 0) || 1,
    [roles]
  );

  let currentAngle = 0;

  const segments = roles.map((r) => {
    const sweep = (Math.max(r.weight, 0) / total) * 360;
    const start = currentAngle;
    const end = currentAngle + sweep;
    currentAngle = end;

    return {
      role: r,
      start,
      end,
      path: describeArc(center, center, innerRadius, outerRadius, start, end),
      labelAngle: start + sweep / 2,
    };
  });

  return (
    <div className="w-full flex flex-col items-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-sm"
      >
        {/* Hintergrund-Kreis */}
        <circle
          cx={center}
          cy={center}
          r={outerRadius}
          fill="#f8fafc"
          stroke="#e2e8f0"
        />
        {/* Segmente */}
        {segments.map((seg, idx) => {
          const color = GROUP_COLORS[seg.role.group].base;
          const labelPos = polarToCartesian(center, center, (innerRadius + outerRadius) / 2, seg.labelAngle);

          return (
            <g key={idx}>
              <path
                d={seg.path}
                fill={color}
                opacity={0.9}
                stroke={GROUP_COLORS[seg.role.group].ring}
                strokeWidth={1}
                className="transition-opacity hover:opacity-100"
              />
              {/* Label nur rendern, wenn Segment groß genug */}
              {seg.end - seg.start > 10 && (
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={12}
                  fill="white"
                  style={{ pointerEvents: "none" }}
                >
                  {seg.role.name}
                </text>
              )}
            </g>
          );
        })}

        {/* Innerer Kreis (Loch) */}
        <circle cx={center} cy={center} r={innerRadius - 1} fill="white" />
        <text
          x={center}
          y={center - 4}
          textAnchor="middle"
          className="fill-slate-700"
          fontSize={14}
          fontWeight={600}
        >
          Rollenrad
        </text>
        <text
          x={center}
          y={center + 14}
          textAnchor="middle"
          className="fill-slate-500"
          fontSize={11}
        >
          situative Ausprägung
        </text>
      </svg>

      {/* Legende */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl">
        {Object.entries(GROUP_COLORS).map(([group, c]) => (
          <div key={group} className="flex items-center gap-2">
            <span
              className="inline-block w-3.5 h-3.5 rounded-sm ring-1"
              style={{ background: c.base, boxShadow: `0 0 0 1px ${c.ring} inset` }}
            />
            <span className="text-sm text-slate-700">{group}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Rollenwolke (Wortwolke nach Gewicht, gruppenfarbig)
 */
function RolesCloud({ roles }: { roles: RoleItem[] }) {
  // Gewicht auf Schriftgröße mappen
  const minWeight = Math.min(...roles.map((r) => r.weight));
  const maxWeight = Math.max(...roles.map((r) => r.weight));
  const scale = (w: number) => {
    if (maxWeight === minWeight) return 16;
    // 14..28 px
    return 14 + ((w - minWeight) / (maxWeight - minWeight)) * 14;
  };

  return (
    <div className="w-full p-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200">
      <div className="flex flex-wrap gap-3">
        {roles.map((r, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-lg"
            style={{
              fontSize: `${scale(r.weight)}px`,
              background: GROUP_COLORS[r.group].light,
              color: "#0f172a",
            }}
            title={`${r.name} • ${r.group}`}
          >
            {r.name}
          </span>
        ))}
      </div>
      {/* Legende */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(GROUP_COLORS).map(([group, c]) => (
          <div key={group} className="flex items-center gap-2">
            <span
              className="inline-block w-3.5 h-3.5 rounded-sm ring-1"
              style={{ background: c.light, boxShadow: `0 0 0 1px ${c.ring} inset` }}
            />
            <span className="text-sm text-slate-700">{group}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Umschaltbare Gesamtkomponente
 */
export default function RolesViz({
  roles = DEFAULT_ROLES,
  initialView = "wheel",
  title = "Rollen & Verantwortlichkeiten",
  subtitle = "Ich kombiniere Rollen situativ – je nach Aufgabe, Kontext und Teamstruktur.",
  note = "Die Segmentgröße (Rad) bzw. Schriftgröße (Wolke) spiegelt wider, wie häufig/zentral ich diese Rolle übernehme.",
}: {
  roles?: RoleItem[];
  initialView?: "wheel" | "cloud";
  title?: string;
  subtitle?: string;
  note?: string;
}) {
  const [view, setView] = useState<"wheel" | "cloud">(initialView);

  // Nach Gewicht sortieren, damit die Darstellung konsistent bleibt
  const sorted = useMemo(
    () =>
      [...roles].sort((a, b) => {
        // leichte Gruppierung nach Gruppe, dann Gewicht
        const g = a.group.localeCompare(b.group);
        return g !== 0 ? g : b.weight - a.weight;
      }),
    [roles]
  );

  return (
    <section className="w-full">
      <header className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>
        <p className="text-slate-500 text-sm mt-1">{note}</p>
      </header>

      {/* Toggle */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-xl overflow-hidden ring-1 ring-slate-200">
          <button
            onClick={() => setView("wheel")}
            className={`px-4 py-2 text-sm font-medium ${
              view === "wheel" ? "bg-slate-900 text-white" : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Rollenrad
          </button>
          <button
            onClick={() => setView("cloud")}
            className={`px-4 py-2 text-sm font-medium ${
              view === "cloud" ? "bg-slate-900 text-white" : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Rollenwolke
          </button>
        </div>
      </div>

      {/* Viz */}
      <div className="flex justify-center">
        {view === "wheel" ? (
          <RolesWheel roles={sorted} />
        ) : (
          <div className="max-w-4xl w-full">
            <RolesCloud roles={sorted} />
          </div>
        )}
      </div>

      {/* Kontext-Claim – deine Perspektive */}
      <div className="mt-8 max-w-3xl mx-auto text-center text-slate-700">
        <p>
          Je nach Auftrag, Unternehmensreife und Team-Setup übernehme ich eine oder mehrere dieser Rollen parallel.
          Statt mich starr als „Researcher“ oder „UX Manager“ zu labeln, kombiniere ich bewusst – vom
          evidenzbasierten Research über konzeptionelles Design bis hin zu Strategie & Enablement.
          So entsteht messbarer Impact dort, wo er gebraucht wird.
        </p>
      </div>
    </section>
  );
}
