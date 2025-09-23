import React from "react";

const groups = [
  {
    title: "Kundenberatung",
    items: [
      "Beziehung als langfristiges Investment",
      "Spannung: ‚gut beraten‘ vs. ‚wirtschaftlich arbeiten‘",
      "Unsicherheit, ob sich hoher Aufwand rechnet",
    ],
  },
  {
    title: "Service",
    items: [
      "Verlässlichkeit ist erfolgskritisch",
      "Abhängigkeiten zu Versicherern als Risiko",
      "Transparente Statuskommunikation reduziert Nachfragen",
    ],
  },
  {
    title: "Beratungsgespräch",
    items: [
      "Kompetenz ist nicht ersetzbar",
      "Fokus statt Feature-Feuerwerk (‚weniger ist mehr‘)",
      "Chemie/Vertrauen entscheidet",
    ],
  },
  {
    title: "Tools & Systeme",
    items: [
      "Professionelles Auftreten braucht passende Tools",
      "Vergleichbarkeit & saubere Präsentation",
      "Medienbrüche abbauen",
    ],
  },
];

export default function Insights() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {groups.map((g) => (
        <div key={g.title} className="border border-border rounded-2xl p-5 bg-background shadow-sm">
          <h4 className="font-semibold mb-2">{g.title}</h4>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            {g.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
