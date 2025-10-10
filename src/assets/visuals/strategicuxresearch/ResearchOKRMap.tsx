// src/components/expertise/strategicuxresearch/ResearchOKRMap.tsx

/* eslint-disable react/no-unknown-property */
export default function ResearchOKRMap() {
  return (
    <div className="flex justify-center">
      <svg
        viewBox="0 0 500 400"
        width="100%"
        height="auto"
        className="max-w-2xl"
      >
        {/* Axes */}
        <line x1="50" y1="350" x2="450" y2="350" stroke="black" strokeWidth="2" />
        <line x1="50" y1="50" x2="50" y2="350" stroke="black" strokeWidth="2" />

        {/* Labels */}
        <text x="250" y="390" textAnchor="middle" className="text-sm fill-black">
          Business Goals Alignment →
        </text>
        <text
          x="15"
          y="200"
          textAnchor="middle"
          transform="rotate(-90, 15, 200)"
          className="text-sm fill-black"
        >
          User Needs Alignment ↑
        </text>

        {/* Quadrants */}
        <rect x="50" y="50" width="200" height="150" fill="#E0F2FE" />
        <rect x="250" y="50" width="200" height="150" fill="#FEE2E2" />
        <rect x="50" y="200" width="200" height="150" fill="#FEF9C3" />
        <rect x="250" y="200" width="200" height="150" fill="#DCFCE7" />

        {/* Quadrant labels */}
        <text x="150" y="125" textAnchor="middle" className="text-xs fill-black">
          Low Business / High User
        </text>
        <text x="350" y="125" textAnchor="middle" className="text-xs fill-black">
          High Business / High User
        </text>
        <text x="150" y="275" textAnchor="middle" className="text-xs fill-black">
          Low Business / Low User
        </text>
        <text x="350" y="275" textAnchor="middle" className="text-xs fill-black">
          High Business / Low User
        </text>
      </svg>
    </div>
  );
}
