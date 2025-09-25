import React from "react";

const GUIDE = [
  {
    title: "Aktuelles Vorgehen",
    questions: [
      "Wie wird UX Research aktuell in Projekten eingebunden?",
      "Welche Personen/Rollen sind beteiligt?",
    ],
    followUps: [
      "Gab es Hürden oder Erfolgsfaktoren?",
      "Wie werden Ergebnisse weitergegeben?",
    ],
  },
  {
    title: "Wahrnehmung & Nutzung",
    questions: [
      "Wie hilfreich sind Research-Ergebnisse für Ihre Arbeit?",
      "Wo fehlen Ihnen Informationen oder Insights?",
    ],
    followUps: [
      "Gibt es Beispiele für besonders wertvolle Erkenntnisse?",
      "Welche Lücken empfinden Sie als kritisch?",
    ],
  },
  {
    title: "Wünsche & Chancen",
    questions: [
      "Welche Unterstützung durch Research würden Sie sich wünschen?",
      "Welche Themen sollten unbedingt erforscht werden?",
    ],
    followUps: [
      "Welche Formate/Prozesse würden helfen?",
      "Wie kann ResearchOps Sie entlasten?",
    ],
  },
];

export default function StakeholderGuide() {
  return (
    <div className="space-y-5">
      <h4 className="text-lg font-semibold">Diskussionsleitfaden</h4>
      {GUIDE.map((block, i) => (
        <div
          key={i}
          className="border border-border rounded-lg p-4 shadow-sm bg-neutral-50 dark:bg-neutral-800"
        >
          <h5 className="font-medium mb-2">{block.title}</h5>
          <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
            {block.questions.map((q, j) => (
              <li key={j}>{q}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-muted-foreground italic">
            Mögliche Nachfragen: {block.followUps.join(" · ")}
          </p>
        </div>
      ))}
    </div>
  );
}
