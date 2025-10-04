import React from "react";

type RoadmapItem = {
  title: string;
  desc?: string;
};

const COLUMNS: { title: string; items: RoadmapItem[] }[] = [
  {
    title: "Now",
    items: [
      {
        title: "Research-Kalender",
        desc: "Einfacher Überblick über alle laufenden und geplanten Studien."
      },
      {
        title: "Intake-Formular",
        desc: "Strukturierte Erfassung des Research-Bedarfs."
      },
      {
        title: "Readout-Ritual",
        desc: "Regelmäßige Sessions, um Insights zu teilen."
      }
    ]
  },
  {
    title: "Next",
    items: [
      {
        title: "Community of Practice",
        desc: "Forschende befähigen, Standards verbreiten."
      },
      {
        title: "Repository-Struktur",
        desc: "Systematische Ablage & Wiederverwendbarkeit von Insights."
      },
      {
        title: "Tool-Integration",
        desc: "Research-Tools in bestehende Systeme einbinden."
      }
    ]
  },
  {
    title: "Later",
    items: [
      {
        title: "Research-OKRs",
        desc: "Messbare Ziele definieren & mit Unternehmens-OKRs verknüpfen."
      },
      {
        title: "Automatisierung",
        desc: "Teilnehmer-Recruiting & Reporting effizienter machen."
      },
      {
        title: "Langfristige Strategie",
        desc: "Vision & KPIs für ResearchOps entwickeln."
      }
    ]
  }
];

export default function ResearchRoadmap() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {COLUMNS.map((col) => (
        <div
          key={col.title}
          className="border border-border rounded-2xl p-5 bg-background shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-3">{col.title}</h3>
          <ul className="space-y-3">
            {col.items.map((item) => (
              <li
                key={item.title}
                className="p-3 border border-border rounded-md bg-white dark:bg-neutral-900"
              >
                <span className="font-medium text-sm">{item.title}</span>
                {item.desc && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
