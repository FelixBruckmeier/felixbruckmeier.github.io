import React from "react";

type Iteration = {
  version: string;
  learnings: string[];
};

type Props = {
  items: Iteration[];
};

export default function PrototypeTimeline({ items }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-lg space-y-8">
      <h3 className="text-2xl font-bold">Prototyping & Tests</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="rounded-xl border bg-gray-50 p-6 space-y-3">
            <h4 className="font-semibold text-blue-700">{it.version}</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {it.learnings.map((l, j) => (
                <li key={j}>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
