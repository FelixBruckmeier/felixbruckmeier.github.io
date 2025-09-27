import { Users, Lightbulb, Target } from "lucide-react";

export default function LeadershipPillars() {
  const pillars = [
    {
      title: "Enablement",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      text: "Ich schaffe Strukturen und Rahmenbedingungen, in denen Teams ihre Stärken entfalten können.",
    },
    {
      title: "Mentoring",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      text: "Durch Coaching und 1:1-Sessions unterstütze ich individuelle Entwicklung und kontinuierliches Lernen.",
    },
    {
      title: "Kultur",
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      text: "Ich fördere eine Kultur der Exzellenz, Offenheit und Zusammenarbeit – jeder Beitrag zählt.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {pillars.map((p, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center p-6 rounded-2xl shadow-sm bg-white"
        >
          {p.icon}
          <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
          <p className="mt-2 text-gray-600">{p.text}</p>
        </div>
      ))}
    </div>
  );
}
