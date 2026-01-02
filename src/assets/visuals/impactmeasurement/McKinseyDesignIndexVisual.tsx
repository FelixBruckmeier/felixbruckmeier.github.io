// src/assets/visuals/impactmeasurement/McKinseyDesignIndexVisual.tsx
import React from "react";
import { colors, shadows } from "@/lib/tokens";

export default function McKinseyDesignIndexVisual() {
  return (
    <div
      className={`${colors.background.bg} ${colors.background.text} w-full max-w-5xl mx-auto rounded-2xl ${shadows.md} border ${colors.border} p-6 md:p-10 text-center`}
    >
      {/* Header */}
      <h3 className="text-lg md:text-xl font-semibold mb-6 text-foreground">
        Business Value of Design (Illustrative)
      </h3>

      {/* Chart */}
      <svg
        viewBox="0 0 600 260"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Axes */}
        <line
          x1="100"
          y1="220"
          x2="520"
          y2="220"
          stroke="#E5E7EB"
          strokeWidth="1.5"
        />
        <line
          x1="100"
          y1="40"
          x2="100"
          y2="220"
          stroke="#E5E7EB"
          strokeWidth="1.5"
        />

        {/* Bars — Industry Average (gray) */}
        <rect x="160" y="140" width="80" height="80" rx="6" fill="#F1F1EF" />
        <rect x="400" y="120" width="80" height="100" rx="6" fill="#F1F1EF" />

        {/* Bars — Design-Mature Companies (blue, DS colors) */}
        <rect
          x="260"
          y="70"
          width="80"
          height="150"
          rx="6"
          fill="#E9F3F7"
          stroke="#487CA5"
          strokeWidth="2"
        />
        <rect
          x="500"
          y="50"
          width="80"
          height="170"
          rx="6"
          fill="#E9F3F7"
          stroke="#487CA5"
          strokeWidth="2"
        />

        {/* Labels */}
        <text x="180" y="240" fontSize="14" fill="#787774">
          Revenue Growth
        </text>
        <text x="430" y="240" fontSize="14" fill="#787774">
          Shareholder Return
        </text>

        {/* Values — now centered inside bars */}
        <text
          x="300"
          y="150"
          fontSize="16"
          fill="#487CA5"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          +32%
        </text>
        <text
          x="540"
          y="135"
          fontSize="16"
          fill="#487CA5"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          +56%
        </text>

        {/* Legend */}
        <rect
          x="150"
          y="20"
          width="14"
          height="14"
          rx="2"
          fill="#E9F3F7"
          stroke="#487CA5"
          strokeWidth="1"
        />
        <text x="170" y="32" fontSize="13" fill="#373530">
          Design-mature companies
        </text>

        <rect x="350" y="20" width="14" height="14" rx="2" fill="#F1F1EF" />
        <text x="370" y="32" fontSize="13" fill="#373530">
          Industry average
        </text>
      </svg>

      {/* Source */}
      <p className="text-xs text-muted-foreground mt-5">
        Source:{" "}
        <a
          href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-business-value-of-design"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground transition-colors"
        >
          McKinsey &amp; Company, “The Business Value of Design” (2018)
        </a>
      </p>
    </div>
  );
}

