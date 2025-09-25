import React from "react";

type KR = { id: string; text: string; fields: string[] };
type Obj = { id: string; title: string; krs: KR[]; companyRef: string };

const OBJS: Obj[] = [
  {
    id: "o1",
    title: "Research sichtbar & wirksam machen",
    companyRef: "Company Objective: Customer-centricity stärken",
    krs: [
      { id: "kr1", text: "Monatliche Readouts etabliert (≥80% Teilnahme)", fields: ["Insights Activation", "Alignment & Evangelization"] },
      { id: "kr2", text: "Repository live; 100% neue Studien dokumentiert", fields: ["Insights Activation", "Tools & Automation"] },
    ],
  },
  {
    id: "o2",
    title: "Prozessqualität & Durchsatz erhöhen",
    companyRef: "Company Objective: Time-to-Insight reduzieren",
    krs: [
      { id: "kr3", text: "Research-Cadence (2-wöchig) stabil", fields: ["Process & Scope"] },
      { id: "kr4", text: "Templates & Intake verkürzen Setup um 30%", fields: ["Tools & Automation", "Governance"] },
    ],
  },
  {
    id: "o3",
    title: "Compliance & Verantwortung klären",
    companyRef: "Company Objective: Risiko minimieren",
    krs: [
      { id: "kr5", text: "Consent/DSGVO-Prozess dokumentiert & genutzt", fields: ["Governance"] },
      { id: "kr6", text: "Rollenmodell + Champions aktiv", fields: ["Resources & Strategy", "Alignment & Evangelization"] },
    ],
  },
];

export default function OKRMap() {
  return (
    <div className="space-y-4">
      {OBJS.map((o) => (
        <div key={o.id} className="rounded-xl border border-border bg-background p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="font-semibold">{o.title}</h4>
              <p className="text-xs text-muted-foreground">{o.companyRef}</p>
            </div>
            <span className="rounded-full border border-border px-2 py-1 text-xs">Objective</span>
          </div>
          <ul className="mt-3 space-y-2">
            {o.krs.map((k) => (
              <li key={k.id} className="rounded-lg border border-border bg-white px-3 py-2 text-sm shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <span>• {k.text}</span>
                  <div className="flex flex-wrap gap-1">
                    {k.fields.map((f) => (
                      <span key={f} className="rounded-full border border-border px-2 py-0.5 text-[11px]">{f}</span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
