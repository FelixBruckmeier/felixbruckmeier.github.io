import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Measure = { id: string; title: string; explain?: string; cluster: string; prio: "Quick Win" | "Mid-term" | "Continuous" };

const CLUSTERS = [
  "Governance",
  "Insights Activation",
  "Process & Scope",
  "Tools & Automation",
  "Alignment & Evangelization",
  "Resources & Strategy",
] as const;

const MEASURES: Measure[] = [
  { id: "m1", title: "Consent/DSGVO-Prozess", explain: "Standardformulare, Aufbewahrung, Verantwortlichkeiten", cluster: "Governance", prio: "Mid-term" },
  { id: "m2", title: "Rollen/Verantwortlichkeiten", explain: "UX/TPM/Consultants klären, RACI", cluster: "Governance", prio: "Mid-term" },
  { id: "m3", title: "Repository + Taxonomie", explain: "Zentrale Ablage, Tagging, Findability", cluster: "Insights Activation", prio: "Mid-term" },
  { id: "m4", title: "Readouts & Newsletter", explain: "Monatliche Sessions, Storytelling, Highlights", cluster: "Alignment & Evangelization", prio: "Continuous" },
  { id: "m5", title: "Research-Kalender/Cadence", explain: "Planbarkeit, Regelmäßigkeit, Sichtbarkeit", cluster: "Process & Scope", prio: "Quick Win" },
  { id: "m6", title: "Intake-Formular", explain: "Triage, Erwartungen, Ressourcen", cluster: "Process & Scope", prio: "Quick Win" },
  { id: "m7", title: "Templates & Checklisten", explain: "Recruiting, Leitfäden, Consent, Readout", cluster: "Tools & Automation", prio: "Quick Win" },
  { id: "m8", title: "Figma Library", explain: "Research-Komponenten, Stimuli, Handouts", cluster: "Tools & Automation", prio: "Mid-term" },
  { id: "m9", title: "Champion-Netzwerk & Gilde", explain: "Multiplikatoren, Peer-Review, Community", cluster: "Resources & Strategy", prio: "Continuous" },
  { id: "m10", title: "OKRs für ReOps", explain: "Ziele/KRs, Erfolg messbar machen", cluster: "Resources & Strategy", prio: "Mid-term" },
  { id: "m11", title: "Dashboard/Wiki", explain: "Kanban, Status, Doku zentral", cluster: "Insights Activation", prio: "Quick Win" },
  { id: "m12", title: "Automatisierung", explain: "Tool-Integrationen, Reduktion Handarbeit", cluster: "Tools & Automation", prio: "Mid-term" },
];

export default function MeasuresCluster() {
  const [active, setActive] = useState<typeof CLUSTERS[number] | null>(null);
  const grouped = (c: string) => MEASURES.filter((m) => m.cluster === c);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CLUSTERS.map((c, idx) => (
          <motion.button
            key={c}
            onClick={() => setActive(active === c ? null : c)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className={`relative rounded-full border border-border px-4 py-3 text-sm text-left hover:shadow 
              ${active === c ? "bg-blue-50 border-blue-300" : "bg-background"}`}
          >
            <div className="font-semibold">{c}</div>
            <div className="text-xs text-muted-foreground">{grouped(c).length} Maßnahmen</div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mt-5 rounded-xl border border-border bg-muted/20 p-4"
          >
            <h4 className="font-semibold mb-2">{active}: ausgewählte Maßnahmen</h4>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              {grouped(active).map((m) => (
                <li key={m.id} className="rounded-lg border border-border bg-white px-3 py-2 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <span>• {m.title}</span>
                    <span className="rounded-full border border-border px-2 py-0.5 text-[11px]">{m.prio}</span>
                  </div>
                  {m.explain && <div className="text-xs text-muted-foreground mt-1">{m.explain}</div>}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-3">
              Priorisierung nach Machbarkeit, Ressourcen und Wirkung (Quick Wins · Mid-term · Continuous).
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
