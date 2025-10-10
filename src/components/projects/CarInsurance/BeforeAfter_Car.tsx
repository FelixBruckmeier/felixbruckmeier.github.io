import React from "react";

type Props = {
  before: string[];
  after: string[];
};

export default function BeforeAfter({ before, after }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl border bg-red-50 p-6 shadow-sm">
        <h4 className="font-semibold text-red-700 mb-3">Before</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {before.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border bg-green-50 p-6 shadow-sm">
        <h4 className="font-semibold text-green-700 mb-3">After</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {after.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
