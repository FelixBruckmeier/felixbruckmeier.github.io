export default function MaturityBar({ level }: { level: number }) {
  const stages = ["Foundational", "Emerging", "Integrated", "Optimized"];

  return (
    <div className="flex flex-col gap-1 w-full max-w-xs">
      <div className="flex gap-1">
        {stages.map((_, i) => (
          <div
            key={i}
            className={`h-3 flex-1 rounded-sm ${
              i <= level ? "bg-blue-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-600">
        {stages.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}
