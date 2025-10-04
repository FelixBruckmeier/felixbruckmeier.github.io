import React from "react";

type Cluster = {
  title: string;
  count: number;
  color: string;
  items: string[];
};

const CLUSTERS: Cluster[] = [
  {
    title: "Governance",
    count: 6,
    color: "bg-blue-100 border-blue-300 dark:bg-blue-900/30 dark:border-blue-600",
    items: [
      "Fehlende Standards für Research-Prozesse",
      "Keine klare Verantwortlichkeit für ResearchOps",
      "Uneinheitliche Dokumentation",
    ],
  },
  {
    title: "Process",
    count: 5,
    color: "bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-600",
    items: [
      "Kein einheitlicher Research-Prozess",
      "Forschung ad-hoc, nicht planbar",
      "Fehlende Integration in Sprint-Planung",
    ],
  },
  {
    title: "Tools",
    count: 4,
    color: "bg-yellow-100 border-yellow-300 dark:bg-yellow-900/30 dark:border-yellow-600",
    items: [
      "Unklare Tool-Landschaft",
      "Fehlende zentrale Ablage für Ergebnisse",
    ],
  },
  {
    title: "Culture",
    count: 3,
    color: "bg-purple-100 border-purple-300 dark:bg-purple-900/30 dark:border-purple-600",
    items: [
      "UX Research wird nicht strategisch gesehen",
      "Geringe Awareness im Management",
    ],
  },
  {
    title: "Roles",
    count: 2,
    color: "bg-pink-100 border-pink-300 dark:bg-pink-900/30 dark:border-pink-600",
    items: [
      "Kein dedizierter ResearchOps-Verantwortlicher",
      "Research wird nebenbei erledigt",
    ],
  },
];

export default function AffinityMap() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {CLUSTERS.map((cluster) => (
        <div
          key={cluster.title}
          className={`rounded-xl border p-4 shadow-sm ${cluster.color}`}
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold">{cluster.title}</h4>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/60 dark:bg-black/40">
              {cluster.count}
            </span>
          </div>
          <ul className="text-sm list-disc pl-4 space-y-1">
            {cluster.items.map((item, i) => (
              <li key={i} className="text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
