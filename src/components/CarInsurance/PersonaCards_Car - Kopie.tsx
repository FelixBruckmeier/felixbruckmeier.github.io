import React from "react";

type Persona = {
  name: string;
  role: string;
  goals: string[];
  pains: string[];
};

type Props = {
  personas: Persona[];
};

export default function PersonaCards({ personas }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {personas.map((p, i) => (
        <div
          key={i}
          className="rounded-2xl border bg-white p-6 shadow-md space-y-4"
        >
          <h3 className="text-xl font-semibold">{p.name}</h3>
          <p className="text-sm text-muted-foreground">{p.role}</p>
          <div>
            <h4 className="font-semibold text-blue-600">🎯 Goals</h4>
            <ul className="list-disc list-inside text-sm">
              {p.goals.map((g, j) => (
                <li key={j}>{g}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-600">⚡ Pain Points</h4>
            <ul className="list-disc list-inside text-sm">
              {p.pains.map((pain, j) => (
                <li key={j}>{pain}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
