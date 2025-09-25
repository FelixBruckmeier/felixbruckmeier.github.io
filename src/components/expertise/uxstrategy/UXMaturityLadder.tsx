// src/components/expertise/UXMaturityLadder.tsx
export default function UXMaturityLadder() {
  const levels = ["Foundational", "Emerging", "Integrated", "Strategic", "Visionary"];

  return (
    <div className="flex justify-center">
      <div className="grid gap-3">
        {levels.map((level, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              {i + 1}
            </div>
            <span className="font-medium">{level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
