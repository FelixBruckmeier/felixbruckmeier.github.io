import React from "react";

type Metric = {
  label: string;
  description: string;
};

type Props = {
  metrics: Metric[];
};

export default function ImpactGrid({ metrics }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
        >
          <h4 className="font-semibold text-blue-700 mb-2">{m.label}</h4>
          <p className="text-sm text-gray-600">{m.description}</p>
        </div>
      ))}
    </div>
  );
}
