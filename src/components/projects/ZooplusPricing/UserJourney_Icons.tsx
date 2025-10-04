import React from "react";

export function IconHomepage() {
  return (
    <div className="flex justify-center">
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
        {/* Startseite-Rahmen */}
        <rect x="5" y="10" width="90" height="40" rx="6" fill="#F3F4F6" stroke="#374151" strokeWidth="2" />
        {/* Header-Balken */}
        <rect x="10" y="15" width="80" height="6" fill="#D1D5DB" />
        {/* Content-Block */}
        <rect x="10" y="25" width="50" height="20" fill="#E5E7EB" />
        {/* Lupe */}
        <circle cx="80" cy="35" r="7" stroke="#2563EB" strokeWidth="2" />
        <line x1="84" y1="39" x2="90" y2="45" stroke="#2563EB" strokeWidth="2" />
      </svg>
    </div>
  );
}

export function IconPLP() {
  return (
    <div className="flex justify-center">
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
        {/* Produktkarte 1 */}
        <rect x="10" y="15" width="30" height="30" rx="4" fill="#F3F4F6" stroke="#374151" strokeWidth="2" />
        <rect x="15" y="40" width="20" height="5" fill="#60A5FA" />
        {/* Produktkarte 2 */}
        <rect x="50" y="15" width="30" height="30" rx="4" fill="#F3F4F6" stroke="#374151" strokeWidth="2" />
        <rect x="55" y="40" width="20" height="5" fill="#2563EB" />
        {/* Vergleichspfeil */}
        <line x1="40" y1="30" x2="50" y2="30" stroke="#2563EB" strokeWidth="2" markerEnd="url(#arrow)" />
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#2563EB" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

export function IconPDP() {
  return (
    <div className="flex justify-center">
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
        {/* Produktdetailseite */}
        <rect x="10" y="10" width="80" height="40" rx="6" fill="#F3F4F6" stroke="#374151" strokeWidth="2" />
        {/* Produktbild */}
        <rect x="15" y="15" width="20" height="20" fill="#E5E7EB" />
        {/* Varianten-Liste */}
        <rect x="40" y="15" width="45" height="6" fill="#60A5FA" />
        <rect x="40" y="25" width="45" height="6" fill="#2563EB" />
        <rect x="40" y="35" width="45" height="6" fill="#93C5FD" />
      </svg>
    </div>
  );
}

export function IconCart() {
  return (
    <div className="flex justify-center">
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
        {/* Warenkorb */}
        <rect x="10" y="10" width="80" height="40" rx="6" fill="#F3F4F6" stroke="#374151" strokeWidth="2" />
        {/* Produktzeilen */}
        <rect x="15" y="15" width="70" height="6" fill="#E5E7EB" />
        <rect x="15" y="25" width="70" height="6" fill="#E5E7EB" />
        <rect x="15" y="35" width="70" height="6" fill="#E5E7EB" />
        {/* Preisangaben rechts */}
        <rect x="65" y="15" width="20" height="6" fill="#60A5FA" />
        <rect x="65" y="25" width="20" height="6" fill="#2563EB" />
        <rect x="65" y="35" width="20" height="6" fill="#93C5FD" />
      </svg>
    </div>
  );
}
