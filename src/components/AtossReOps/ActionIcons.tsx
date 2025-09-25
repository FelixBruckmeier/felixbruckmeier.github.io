import React from "react";

export function IconRealizeProblem() {
  return (
    <div className="flex justify-center">
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
        {/* Textfeld-Karte */}
        <rect x="5" y="15" width="60" height="30" rx="6" fill="#F3F4F6" stroke="#374151" strokeWidth="2" />
        <text x="15" y="35" fontSize="12" fill="#111827">Text...</text>
        {/* Alert-Badge */}
        <circle cx="65" cy="40" r="8" fill="#EF4444" />
        <text
          x="65"
          y="40"
          fontSize="12"
          fill="white"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="central"
        >
          !
        </text>
      </svg>
    </div>
  );
}

/** Workaround: Google-Suchleiste mit Lupe (größer, ohne Überschneidung) */
export function IconWorkaround() {
  return (
    <div className="flex justify-center">
      <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
        {/* Suchfeld */}
        <rect x="10" y="18" width="100" height="24" rx="12" fill="#FFFFFF" stroke="#374151" strokeWidth="2" />
        {/* Platzhalter-Text – beginnt links und endet deutlich vor der Lupe */}
        <text x="20" y="34" fontSize="12" fill="#9CA3AF">google search…</text>
        {/* Lupe rechts im Feld */}
        <circle cx="96" cy="30" r="7" stroke="#2563EB" strokeWidth="2" />
        <line x1="100" y1="34" x2="108" y2="42" stroke="#2563EB" strokeWidth="2" />
      </svg>
    </div>
  );
}

export function IconManualDelete() {
  return (
    <div className="flex justify-center">
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
        <rect x="5" y="15" width="70" height="30" rx="6" fill="#F3F4F6" stroke="#374151" strokeWidth="2" />
        <rect x="15" y="28" width="40" height="6" fill="#60A5FA" />
        <line x1="55" y1="25" x2="55" y2="45" stroke="#2563EB" strokeWidth="3" markerEnd="url(#arrow)" />
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#2563EB" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

export function IconEmptyField() {
  return (
    <div className="flex justify-center">
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
        {/* Gleiche Karte wie bei Icon 1 */}
        <rect x="5" y="15" width="60" height="30" rx="6" fill="#F3F4F6" stroke="#374151" strokeWidth="2" />
        <text x="15" y="35" fontSize="12" fill="#111827">Text...</text>
        {/* Grünes Success-Badge (zentrierter Haken) */}
        <circle cx="65" cy="40" r="8" fill="#22C55E" />
        <text
          x="65"
          y="40"
          fontSize="12"
          fill="white"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="central"
        >
          ✓
        </text>
      </svg>
    </div>
  );
}
