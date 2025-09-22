import React from "react";

type PersonaProps = {
  name: string;
  role: string;
  age: number;
  location: string;
  quote: string;
  goals: string[];
  pains: string[];
  needs: string[];
};

const PersonaPoster: React.FC<PersonaProps> = ({
  name,
  role,
  age,
  location,
  quote,
  goals,
  pains,
  needs,
}) => {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-lg max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
          Foto
        </div>
        {/* Basics */}
        <div className="flex-1 space-y-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-gray-600">
            {role} · {age} Jahre · {location}
          </p>
          <blockquote className="italic text-blue-700 border-l-4 border-blue-400 pl-4 mt-4">
            „{quote}“
          </blockquote>
        </div>
      </div>

      {/* Details */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <h4 className="font-semibold text-blue-700 mb-2">🎯 Goals</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {goals.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 rounded-xl p-4 border border-red-100">
          <h4 className="font-semibold text-red-700 mb-2">⚡ Pain Points</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {pains.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="bg-green-50 rounded-xl p-4 border border-green-100">
          <h4 className="font-semibold text-green-700 mb-2">✅ Needs</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {needs.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonaPoster;
