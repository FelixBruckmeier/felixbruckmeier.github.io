import React from "react";

type Quadrant = {
  id: string;
  level: "Minimum" | "Light" | "Medium" | "Heavy";
  examples: string[];
  highlight?: boolean;
};

const MATRIX: Quadrant[][] = [
  [
    {
      id: "q1",
      level: "Medium",
      examples: ["Usability Tests", "Guerrilla Testing", "Workshop Facilitation"],
    },
    {
      id: "q2",
      level: "Heavy",
      examples: ["Contextual Inquiry", "Service On-/Offsite"],
    },
    {
      id: "q3",
      level: "Heavy",
      examples: ["Behavior Change", "Design Innovation", "Design Thinking"],
      highlight: true,
    },
  ],
  [
    {
      id: "q4",
      level: "Light",
      examples: ["Benchmarking", "Desktop Research"],
    },
    {
      id: "q5",
      level: "Medium",
      examples: ["Usability Tests", "Workshop Facilitation"],
    },
    {
      id: "q6",
      level: "Heavy",
      examples: ["Field Studies", "Contextual Inquiry"],
    },
  ],
  [
    {
      id: "q7",
      level: "Minimum",
      examples: ["A/B Testing", "Best Practices", "Fix Later"],
    },
    {
      id: "q8",
      level: "Light",
      examples: ["Benchmarking", "Desktop Research"],
    },
    {
      id: "q9",
      level: "Medium",
      examples: ["Usability Tests", "Guerrilla Testing", "Workshop Facilitation"],
    },
  ],
];

function getBgColor(q: Quadrant) {
  if (q.highlight) return "bg-purple-100 text-purple-900";
  switch (q.level) {
    case "Minimum":
      return "bg-blue-100 text-blue-900";
    case "Medium":
      return "bg-orange-100 text-orange-900";
    case "Heavy":
      return "bg-red-100 text-red-900";
    case "Light":
      return "bg-neutral-50 text-gray-700";
    default:
      return "bg-white text-gray-700";
  }
}

export default function UXResearchMatrix() {
  return (
    <div className="flex flex-col items-center">
      {/* Wrapper für Y-Achse + Matrix */}
      <div className="flex items-center">
        {/* Y-Achse Beschriftung */}
        <div className="text-base font-medium text-gray-700 transform -rotate-90 whitespace-nowrap mr-6">
          Knowledge about Customer
        </div>

        {/* Matrix */}
        <div className="relative w-full max-w-3xl aspect-square">
          <div className="grid grid-cols-3 grid-rows-3 w-full h-full border border-gray-300 divide-x divide-y divide-gray-300">
            {MATRIX.map((row) =>
              row.map((q) => (
                <div
                  key={q.id}
                  className={`${getBgColor(
                    q
                  )} p-4 flex flex-col items-start justify-start`}
                >
                  <div className="font-semibold text-base mb-1">
                    UX Research {q.level}
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-base">
                    {q.examples.map((ex, idx) => (
                      <li key={idx}>{ex}</li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* X-Achse Beschriftung */}
      <div className="mt-4 text-base font-medium text-gray-700">
        Risk of Getting it Wrong
      </div>
    </div>
  );
}
