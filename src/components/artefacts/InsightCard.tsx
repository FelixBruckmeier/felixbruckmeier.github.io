import React from "react";

type InsightProps = {
  title: string;
  evidence: string;
  implication: string;
};

export default function InsightCard({ title, evidence, implication }: InsightProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-md space-y-4">
      <h4 className="text-lg font-bold text-blue-700">{title}</h4>
      <div>
        <p className="font-semibold text-gray-800">Evidence</p>
        <p className="text-sm text-gray-600">{evidence}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-800">Implication</p>
        <p className="text-sm text-gray-600">{implication}</p>
      </div>
    </div>
  );
}
