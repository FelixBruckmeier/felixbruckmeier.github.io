import React from "react";

type Step = {
  phase: string;
  pain: string;
  opportunity: string;
};

type JourneyProps = {
  title: string;
  steps: Step[];
};

export default function JourneyPoster({ title, steps }: JourneyProps) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-lg space-y-8">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-xl border bg-gray-50 p-4"
          >
            <h4 className="font-semibold text-lg text-gray-800 mb-2">
              {s.phase}
            </h4>
            <div>
              <p className="text-red-600 font-medium">Pain:</p>
              <p className="text-sm text-gray-700 mb-2">{s.pain}</p>
              <p className="text-green-600 font-medium">Opportunity:</p>
              <p className="text-sm text-gray-700">{s.opportunity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
