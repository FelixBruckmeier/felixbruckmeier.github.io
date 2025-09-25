/* eslint-disable react/no-unknown-property */
import ReOpsWheel from "@/components/expertise/researchops/ReOpsWheel";

export default function ReOpsOverview() {
  return (
    <div className="w-full rounded-2xl bg-white/60 ring-1 ring-gray-200 p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: 6 Key Areas Wheel */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-900">6 Key Areas (Framework)</h3>
          <p className="text-sm text-gray-600 max-w-prose">
            Die sechs Dimensionen bilden das Betriebssystem für Research: von Ethik & Compliance
            über Infrastruktur und Workflows bis zur Aktivierung von Insights, kultureller
            Verankerung und strategischem Ressourcen-Management.
          </p>
          <ReOpsWheel />
        </div>

        {/* Right: Assessment Process (compact timeline) */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Maturity Assessment (Prozess)</h3>
          <p className="text-sm text-gray-600 max-w-prose">
            Strukturierter 5-Schritte-Prozess, um den Reifegrad je Area zu erheben
            und priorisierte Maßnahmen abzuleiten.
          </p>

          <AssessmentMiniTimeline />

          {/* Mini-Legende */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <LegendItem i={1} title="Kick-off & Alignment" />
            <LegendItem i={2} title="Data Collection" />
            <LegendItem i={3} title="Maturity Mapping" />
            <LegendItem i={4} title="Recommendations" />
            <LegendItem i={5} title="Roadmap & Enablement" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AssessmentMiniTimeline() {
  // visuell kompakt: horizontale, verbundene Steps
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 900 140"
        className="min-w-[560px] w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Linie */}
        <line x1="60" y1="70" x2="840" y2="70" stroke="#D1D5DB" strokeWidth="3" />

        {[
          { x: 60,  label: "1" },
          { x: 255, label: "2" },
          { x: 450, label: "3" },
          { x: 645, label: "4" },
          { x: 840, label: "5" },
        ].map(({ x, label }, idx) => (
          <g key={idx} transform={`translate(${x}, 70)`}>
            <circle r="16" fill="#2563EB" stroke="white" strokeWidth="3" />
            <text
              y="4"
              textAnchor="middle"
              fontSize="12"
              fontWeight={600}
              fill="white"
            >
              {label}
            </text>
          </g>
        ))}

        {/* Labels unter den Steps */}
        {[
          { x: 60,  t1: "Kick-off", t2: "& Alignment" },
          { x: 255, t1: "Data",    t2: "Collection" },
          { x: 450, t1: "Maturity",t2: "Mapping" },
          { x: 645, t1: "Recommen-",t2: "dations" },
          { x: 840, t1: "Roadmap &",t2: "Enablement" },
        ].map(({ x, t1, t2 }, idx) => (
          <g key={idx} transform={`translate(${x}, 104)`}>
            <text textAnchor="middle" fontSize="12" fill="#111827">{t1}</text>
            <text y="16" textAnchor="middle" fontSize="12" fill="#111827">{t2}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function LegendItem({ i, title }: { i: number; title: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white ring-1 ring-gray-200">
      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center">
        {i}
      </div>
      <div className="text-sm font-medium text-gray-900">{title}</div>
    </div>
  );
}
