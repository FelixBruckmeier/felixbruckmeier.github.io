import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkshopAnimation_Car() {
  const [phase, setPhase] = useState<"affinity" | "journey">("affinity");

  // Wechsel alle 10 Sekunden
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev === "affinity" ? "journey" : "affinity"));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const affinityClusters = [
    {
      title: "Pain Points",
      notes: [
        { text: "Formulare zu lang", prio: 1 },
        { text: "Unklare Felder", prio: 3 },
        { text: "Kunde wird verwirrt", prio: 5 },
      ],
      color: "#FECACA", // rot
    },
    {
      title: "Needs",
      notes: [
        { text: "Schneller Abschluss", prio: 2 },
        { text: "Transparenz", prio: 4 },
        { text: "Einfache Sprache", prio: null },
      ],
      color: "#BBF7D0", // grün
    },
    {
      title: "Ideen",
      notes: [
        { text: "Adaptive Eingabe", prio: null },
        { text: "Tooltips", prio: null },
        { text: "Online-Verfügbarkeit", prio: null },
      ],
      color: "#FEF08A", // gelb
    },
  ];

  const journeySteps = [
    {
      step: "Kundenanliegen verstehen",
      pain: "Berater muss alles manuell abfragen",
      opp: "Frühe Orientierung, adaptive Fragen",
      pos: { top: "10%", left: "10%" },
    },
    {
      step: "Eingabe im Tool",
      pain: "Alle Felder zwingend, auch irrelevante",
      opp: "Autom. Vorauswahl, Pflichtfelder reduzieren",
      pos: { top: "30%", left: "55%" }, // höher gesetzt
    },
    {
      step: "Tarif-Besprechung",
      pain: "Schwer erklärbare Fachbegriffe",
      opp: "Einfache Sprache, visuelle Vergleichshilfe",
      pos: { top: "70%", left: "20%" },
    },
    {
      step: "Abschluss",
      pain: "Umständliche Anpassungen im Tool",
      opp: "Flexible Nachbearbeitung ohne Neustart",
      pos: { top: "65%", left: "70%" },
    },
  ];

  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <div className="relative w-full max-w-4xl h-96 border rounded-xl bg-white shadow-lg overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Affinity Map */}
          {phase === "affinity" && (
            <motion.div
              key="affinity"
              className="w-full h-full p-6 grid grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {affinityClusters.map((cluster, i) => (
                <div key={i} className="flex flex-col items-start space-y-2">
                  <h4 className="text-sm font-semibold">{cluster.title}</h4>
                  {cluster.notes.map((note, j) => (
                    <motion.div
                      key={j}
                      className="relative w-32 h-16 rounded-md shadow-sm flex items-center text-xs text-center px-2"
                      style={{ backgroundColor: cluster.color }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: j * 0.3 }}
                    >
                      {note.text}
                      {/* Prio Tags 1–5 */}
                      {note.prio && (
                        <motion.div
                          className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: j * 0.3 + 0.6 }}
                        >
                          Prio {note.prio}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          )}

          {/* Journey Map */}
          {phase === "journey" && (
            <motion.div
              key="journey"
              className="w-full h-full relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {journeySteps.map((s, i) => (
                <motion.div
                  key={i}
                  className="absolute flex flex-col space-y-2"
                  style={{ top: s.pos.top, left: s.pos.left }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.5 }}
                >
                  {/* Step */}
                  <div className="w-48 h-12 bg-blue-100 rounded-md shadow flex items-center text-center font-medium px-2">
                    {s.step}
                  </div>
                  {/* Pain & Opportunity */}
                  <div className="flex space-x-2">
                    <div className="w-36 h-10 bg-red-100 rounded-md shadow text-[11px] flex items-center text-center px-2">
                      ❌ {s.pain}
                    </div>
                    <div className="w-36 h-10 bg-green-100 rounded-md shadow text-[11px] flex items-center text-center px-2">
                      ✅ {s.opp}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-sm text-gray-500 text-center max-w-lg">
        Workshop-Artefakte: Affinity Maps mit Clustern & Priorisierung (1–5)
        sowie eine Customer Journey mit Pain Points & Opportunities.
      </p>
    </div>
  );
}
