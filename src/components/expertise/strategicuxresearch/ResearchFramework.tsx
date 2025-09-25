// src/components/expertise/strategicuxresearch/ResearchFramework.tsx

const phases = [
  { title: "Clarity", emoji: "🧐" },
  { title: "Questions", emoji: "❓" },
  { title: "Refinement", emoji: "✨" },
  { title: "Methods", emoji: "🛠️" },
  { title: "Analysis", emoji: "🔍" },
  { title: "Integration", emoji: "🧩" },
];

export default function ResearchFramework() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0 max-w-5xl">
        {phases.map((phase, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
              {phase.emoji}
            </div>
            <p className="mt-2 text-sm font-medium">{phase.title}</p>
            {i < phases.length - 1 && (
              <div className="hidden md:block w-12 border-t-2 border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
