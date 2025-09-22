import React from "react";

type PersonaProps = {
  name: string;
  role: string;
  age: number;
  location: string;
  goals: string[];
  pains: string[];
  needs: string[];
};

export default function PersonaCard({
  name,
  role,
  age,
  location,
  goals,
  pains,
  needs,
}: PersonaProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">
        {role} · {age} · {location}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold mb-2 text-blue-600">🎯 Goals</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {goals.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-red-600">⚡ Pain Points</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {pains.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-green-600">✅ Needs</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {needs.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
