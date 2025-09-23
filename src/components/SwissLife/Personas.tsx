import React from "react";

type Persona = {
  name: string;
  title: string;
  traits: string[];
  needs: string[];
  quote?: string;
};

const personas: Persona[] = [
  {
    name: "Thomas",
    title: "Der Veteran (52)",
    traits: ["gründlich", "vertrauensbasiert", "risikoavers"],
    needs: ["verlässliche Zusammenarbeit", "alles aus einer Hand", "geringer Doku-Overhead"],
    quote: "Ehrliche, saubere Beratung—aber bitte ohne Papierkrieg."
  },
  {
    name: "Markus",
    title: "Der Geschäftsmann (42)",
    traits: ["strukturiert", "effizienzgetrieben", "zahlenaffin"],
    needs: ["klare Vergleichbarkeit", "professionelles Auftreten", "skalierbare Prozesse"],
    quote: "Gute Vorbereitung spart 50% der Gesprächszeit."
  },
  {
    name: "Stefan",
    title: "Der Idealist (38)",
    traits: ["kundennahe Betreuung", "Empfehlungsfokus", "Einzelkämpfer"],
    needs: ["intuitive Tools", "schnelle Servicewege", "verlässliche Doku-Hilfen"],
    quote: "Empfehlungen sind meine Währung—dafür muss alles sitzen."
  }
];

export default function Personas() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {personas.map((p) => (
        <div key={p.name} className="border border-border rounded-2xl p-5 bg-background shadow-sm space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">Persona</p>
            <h4 className="font-semibold">{p.title}</h4>
          </div>
          <div>
            <p className="text-sm font-medium">Charakteristika</p>
            <p className="text-sm text-muted-foreground">{p.traits.join(" • ")}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Bedarfe</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {p.needs.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>
          {p.quote && <p className="text-sm italic text-muted-foreground">„{p.quote}“</p>}
        </div>
      ))}
    </div>
  );
}
