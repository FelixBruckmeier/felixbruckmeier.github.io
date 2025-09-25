import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Measure = {
  id: string;
  label: string;
  dimension:
    | "governance"
    | "insights"
    | "process"
    | "tools"
    | "alignment"
    | "resources";
  impact: "low" | "high";
  effort: "low" | "high";
};

const DIMENSION_LABELS: Record<Measure["dimension"], string> = {
  governance: "Governance",
  insights: "Insights Activation",
  process: "Process & Scope",
  tools: "Tools & Automation",
  alignment: "Alignment & Evangelization",
  resources: "Resources & Strategy",
};

const COLORS: Record<Measure["dimension"], string> = {
  governance: "bg-blue-100 text-blue-800 border-blue-300",
  insights: "bg-green-100 text-green-800 border-green-300",
  process: "bg-purple-100 text-purple-800 border-purple-300",
  tools: "bg-orange-100 text-orange-800 border-orange-300",
  alignment: "bg-pink-100 text-pink-800 border-pink-300",
  resources: "bg-teal-100 text-teal-800 border-teal-300",
};

const MEASURES: Measure[] = [
  // Quick Wins
  { id: "m1", label: "Research-Kalender", dimension: "governance", impact: "high", effort: "low" },
  { id: "m2", label: "Intake Formular", dimension: "process", impact: "high", effort: "low" },
  { id: "m3", label: "Readout-Ritual", dimension: "alignment", impact: "high", effort: "low" },

  // Strategische Initiativen
  { id: "m4", label: "Repository + Taxonomie", dimension: "insights", impact: "high", effort: "high" },
  { id: "m5", label: "Automatisierung (Plan/Conduct/Report)", dimension: "tools", impact: "high", effort: "high" },
  { id: "m6", label: "Community of Practice", dimension: "resources", impact: "high", effort: "high" },

  // Nice-to-have
  { id: "m7", label: "Onboarding-Paket", dimension: "resources", impact: "low", effort: "low" },
  { id: "m8", label: "Einfache Wiki-Doku", dimension: "tools", impact: "low", effort: "low" },
  { id: "m9", label: "Research Champions identifizieren", dimension: "alignment", impact: "low", effort: "low" },

  // Später
  { id: "m10", label: "Komplexe Tool-Integrationen", dimension: "tools", impact: "low", effort: "high" },
  { id: "m11", label: "KI-Experimente ohne Use Case", dimension: "tools", impact: "low", effort: "high" },
  { id: "m12", label: "Brown-Bag Sessions allein", dimension: "alignment", impact: "low", effort: "high" },
];

function Quadrant({ measures }: { measures: Measure[] }) {
  return (
    <div className="relative p-3 min-h-[180px]">
      <div className="flex flex-wrap gap-2">
        {measures.map((m) => (
          <motion.span
            key={m.id}
            className={clsx(
              "px-2 py-1 text-xs rounded-full border shadow-sm",
              COLORS[m.dimension]
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {m.label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default function MeasuresMatrix() {
  const quickWins = MEASURES.filter((m) => m.impact === "high" && m.effort === "low");
  const strategic = MEASURES.filter((m) => m.impact === "high" && m.effort === "high");
  const niceLater = MEASURES.filter((m) => m.impact === "low" && m.effort === "low");
  const later = MEASURES.filter((m) => m.impact === "low" && m.effort === "high");

  return (
    <div className="space-y-6">
      <div className="relative w-[90%] mx-auto">
        {/* Achsen */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-border" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-border" />

        {/* Achsen Labels */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-muted-foreground">
          Impact
        </div>
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm font-medium text-muted-foreground">
          Effort
        </div>

        {/* Matrix */}
        <div className="grid grid-cols-2 grid-rows-2 gap-0 border border-border rounded-lg overflow-hidden">
          <div className="border-r border-b border-border p-2">
            <h4 className="text-xs font-semibold text-muted-foreground mb-1">
              Quick Wins
            </h4>
            <Quadrant measures={quickWins} />
          </div>
          <div className="border-b border-border p-2">
            <h4 className="text-xs font-semibold text-muted-foreground mb-1">
              Strategische Initiativen
            </h4>
            <Quadrant measures={strategic} />
          </div>
          <div className="border-r border-border p-2">
            <h4 className="text-xs font-semibold text-muted-foreground mb-1">
              Nice-to-have
            </h4>
            <Quadrant measures={niceLater} />
          </div>
          <div className="p-2">
            <h4 className="text-xs font-semibold text-muted-foreground mb-1">
              Später
            </h4>
            <Quadrant measures={later} />
          </div>
        </div>
      </div>

      {/* Legende */}
      <div>
        <h4 className="text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">
          ResearchOps-Dimensionen
        </h4>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          {Object.entries(DIMENSION_LABELS).map(([key, label]) => (
            <span
              key={key}
              className={clsx(
                "flex items-center gap-1 px-2 py-1 rounded-full border",
                COLORS[key as Measure["dimension"]]
              )}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
