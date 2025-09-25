export default function HCDLifecycle() {
  const stepsDiscovery = [
    "Ask Questions",
    "Empathize",
    "Define Problem",
    "Ideate Solutions",
    "Define Concept",
  ];
  const stepsPrototyping = [
    "Design",
    "Validate",
    "Iterate",
    "Shippable Increment",
  ];
  const stepsOptimize = [
    "Monitor",
    "Visualize Data",
    "Validate Data",
    "Communicate",
  ];

  // Helper zum Rendern von Steps im Kreis
  const renderSteps = (cx: number, cy: number, r: number, steps: string[], color: string) =>
    steps.map((step, i) => {
      const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2; // Start oben
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      return (
        <text
          key={i}
          x={x}
          y={y}
          textAnchor="middle"
          className={`text-[10px] fill-${color}-700`}
        >
          {step}
        </text>
      );
    });

  return (
    <div className="w-full flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1400 800"
        className="w-full h-auto max-w-6xl"
      >
        {/* Titel */}
        <text x="700" y="40" textAnchor="middle" className="font-bold text-2xl fill-blue-600">
          Integrating HCD Across the Product Lifecycle
        </text>

        {/* Research Demand */}
        <text x="200" y="120" textAnchor="middle" className="fill-gray-700 font-semibold">
          New Research Demand
        </text>
        <line x1="100" y1="130" x2="300" y2="130" stroke="#9ca3af" strokeWidth="4" markerEnd="url(#arrow)" />

        {/* Demand Bubbles */}
        {["Accessibility", "Security", "BI Analytics"].map((label, i) => (
          <g key={i}>
            <circle cx={150 + i * 80} cy={90} r="30" fill="#bfdbfe" />
            <text x={150 + i * 80} y={95} textAnchor="middle" className="text-[10px] fill-blue-900">
              {label}
            </text>
          </g>
        ))}

        {/* Funnel */}
        <polygon
          points="400,200 600,200 550,350 450,350"
          fill="#e5e7eb"
          stroke="#6b7280"
          strokeWidth="2"
        />
        <text x="500" y="240" textAnchor="middle" className="font-semibold fill-gray-800">
          Research
        </text>
        <text x="500" y="260" textAnchor="middle" className="font-semibold fill-gray-800">
          Refinement
        </text>

        {/* Funnel Notes */}
        <text x="500" y="380" textAnchor="middle" className="text-xs fill-gray-600">
          Derive problems • Involve stakeholders • Refine questions
        </text>

        {/* User Research Circle */}
        <circle cx="750" cy="250" r="100" fill="none" stroke="#2563eb" strokeWidth="3" />
        <text x="750" y="250" textAnchor="middle" className="fill-blue-700 font-semibold">
          User Research
        </text>
        {renderSteps(750, 250, 120, stepsDiscovery, "blue")}

        {/* Lean UX Circle */}
        <circle cx="1000" cy="350" r="100" fill="none" stroke="#16a34a" strokeWidth="3" />
        <text x="1000" y="350" textAnchor="middle" className="fill-green-700 font-semibold">
          Lean UX
        </text>
        {renderSteps(1000, 350, 120, stepsPrototyping, "green")}

        {/* Data Analytics Circle */}
        <circle cx="1250" cy="250" r="100" fill="none" stroke="#9333ea" strokeWidth="3" />
        <text x="1250" y="250" textAnchor="middle" className="fill-purple-700 font-semibold">
          Data Analytics
        </text>
        {renderSteps(1250, 250, 120, stepsOptimize, "purple")}

        {/* Pfeile */}
        <line x1="850" y1="250" x2="900" y2="300" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="1100" y1="350" x2="1150" y2="300" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Marker für Pfeilspitzen */}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#6b7280" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
