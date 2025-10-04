import React, { ReactNode } from "react";

type Metric = {
  label: string;
  description: ReactNode; // <-- erlaubt Texte ODER Komponenten
};

type Props = {
  metrics: Metric[];
};

export default function ImpactGrid_Car({ metrics }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
        >
          <h4 className="font-semibold text-blue-700 mb-2">{m.label}</h4>
          <div className="text-sm text-gray-600 space-y-4">{m.description}</div>
        </div>
      ))}
    </div>
  );
}
