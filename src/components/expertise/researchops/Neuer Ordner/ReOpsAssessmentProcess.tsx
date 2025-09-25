export default function ReOpsAssessmentProcess() {
  const steps = [
    {
      title: "1. Kick-off & Alignment",
      desc: "Ziele, Scope und Stakeholder abgleichen. Sicherstellen, dass das Assessment die richtigen Fragen adressiert.",
    },
    {
      title: "2. Data Collection",
      desc: "Interviews, Surveys und Dokumenten-Review. Erfassen des aktuellen Status in den 6 Key Areas.",
    },
    {
      title: "3. Maturity Mapping",
      desc: "Einordnung auf der ReOps Maturity Matrix. Stärken, Schwächen und Gaps klar benennen.",
    },
    {
      title: "4. Recommendations",
      desc: "Konkrete Handlungsempfehlungen und Priorisierung nach Impact & Machbarkeit.",
    },
    {
      title: "5. Roadmap & Enablement",
      desc: "Maßnahmen in eine Roadmap überführen, Teams befähigen, Fortschritt messbar machen.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-5xl">
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-3 p-4 bg-white rounded-xl shadow-sm ring-1 ring-gray-200"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
              {i + 1}
            </div>
            <div className="font-medium">{s.title}</div>
            <div className="text-sm text-gray-600">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
