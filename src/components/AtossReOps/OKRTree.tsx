import React from "react";
import { motion } from "framer-motion";

type KR = { id: string; text: string };
type ReOpsObj = { id: string; title: string; krs: KR[] };
type UXObj = { id: string; title: string; reops: ReOpsObj[] };
type CompanyObj = { id: string; title: string; ux: UXObj[] };

const DATA: CompanyObj[] = [
  {
    id: "c1",
    title: "Company Objective: Kundenzentrierung stärken",
    ux: [
      {
        id: "ux1",
        title: "UX Objective: User Research sichtbar & wirksam machen",
        reops: [
          {
            id: "r1",
            title: "ResearchOps Objective: Framework etablieren",
            krs: [
              { id: "kr1", text: "Repository live, 100% neue Studien dokumentiert" },
              { id: "kr2", text: "≥ 80% Teilnahme an monatlichen Readouts" },
              { id: "kr3", text: "Consent/DSGVO-Prozess verbindlich eingeführt" },
              { id: "kr4", text: "Champions-Netzwerk aktiv in 3 Teams" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "c2",
    title: "Company Objective: Mitarbeiterbindung & Kompetenzaufbau fördern",
    ux: [
      {
        id: "ux2",
        title: "UX Objective: Nutzerzentriertes Denken in allen Teams verankern",
        reops: [
          {
            id: "r2",
            title: "ResearchOps Objective: Teams befähigen & Fehlentwicklungen vermeiden",
            krs: [
              { id: "kr5", text: "3 funktionsübergreifende Research-Trainings pro Quartal" },
              { id: "kr6", text: "≥ 60% der Produktteams haben einen Research Champion" },
              { id: "kr7", text: "Fehler-/Rework-Kosten um ≥ 20% reduziert" },
              { id: "kr8", text: "Research in 100% der Sprints bei Neuentwicklungen integriert" },
            ],
          },
        ],
      },
    ],
  },
];

export default function OKRTree() {
  return (
    <div className="relative space-y-8">
      {DATA.map((company, i) => (
        <motion.div
          key={company.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="space-y-6"
        >
          {/* Company Objective */}
          <div className="rounded-lg border border-blue-300 bg-blue-50 p-4 shadow-sm">
            <h3 className="font-semibold text-blue-800">{company.title}</h3>
          </div>

          {company.ux.map((ux) => (
            <div key={ux.id} className="ml-6 space-y-4">
              {/* UX Objective */}
              <div className="rounded-lg border border-green-300 bg-green-50 p-3 shadow-sm">
                <h4 className="font-semibold text-green-800">{ux.title}</h4>
              </div>

              {ux.reops.map((r) => (
                <div key={r.id} className="ml-6 space-y-2">
                  {/* ReOps Objective */}
                  <div className="rounded-lg border border-purple-300 bg-purple-50 p-3 shadow-sm">
                    <h5 className="font-semibold text-purple-800">{r.title}</h5>
                  </div>

                  {/* Key Results */}
                  <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                    {r.krs.map((kr) => (
                      <li key={kr.id}>{kr.text}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      ))}

      <p className="text-xs text-muted-foreground mt-4">
        Darstellung: Company Objectives (blau) → UX Objectives (grün) → ResearchOps Objectives (violett) → Key Results (grau).
      </p>
    </div>
  );
}
