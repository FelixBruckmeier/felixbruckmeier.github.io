import React from "react";

const steps = [
  {
    no: "1",
    title: "Discover",
    bullets: [
      "Kontext-Interviews vor Ort (Maklerbüros)",
      "Arbeitsrealität & Hürden im Alltag verstehen",
      "Erste Hypothesen & Themenfelder sammeln",
    ],
  },
  {
    no: "2",
    title: "Define",
    bullets: [
      "Infinity Map & Clustering (Grounded Theory light)",
      "Themen bündeln, Muster erkennen",
      "Problemräume & Ziele schärfen",
    ],
  },
  {
    no: "3",
    title: "Ideate",
    bullets: [
      "Ansatzpunkte für Tools & Services",
      "Skizzen, Abläufe, Checklisten-Entwürfe",
      "‚Weniger ist mehr‘ als Leitlinie",
    ],
  },
  {
    no: "4",
    title: "Validate",
    bullets: [
      "Abgleich mit Makler:innen",
      "Kano-Umfrage zur Priorisierung",
      "Quali-Insights quantitativ abgesichert",
    ],
  },
  {
    no: "5",
    title: "Decide",
    bullets: [
      "Roadmap nach Wert/Umsetzbarkeit",
      "Quick Wins vs. größere Initiativen",
      "Messbare nächste Schritte definieren",
    ],
  },
];

export default function DesignThinking() {
  return (
    <div className="grid md:grid-cols-5 gap-4">
      {steps.map((s) => (
        <div key={s.no} className="border border-border rounded-2xl p-5 bg-background shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white grid place-items-center font-semibold">
              {s.no}
            </div>
            <h4 className="font-semibold">{s.title}</h4>
          </div>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            {s.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
