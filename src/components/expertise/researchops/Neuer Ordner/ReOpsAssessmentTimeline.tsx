/* eslint-disable react/no-unknown-property */
export default function ReOpsAssessmentTimeline() {
  const steps = [
    {
      title: "Kick-off & Alignment",
      desc: "Ziele, Scope und Stakeholder abgleichen, um sicherzustellen, dass das Assessment die richtigen Fragen adressiert.",
    },
    {
      title: "Data Collection",
      desc: "Interviews, Surveys und Dokumenten-Review. Erfassen des Status quo in allen 6 Key Areas.",
    },
    {
      title: "Maturity Mapping",
      desc: "Einordnung auf der ReOps Maturity Matrix. Stärken, Schwächen und Gaps sichtbar machen.",
    },
    {
      title: "Recommendations",
      desc: "Handlungsempfehlungen und Priorisierung nach Impact & Machbarkeit entwickeln.",
    },
    {
      title: "Roadmap & Enablement",
      desc: "Maßnahmen in eine Roadmap überführen und Teams befähigen, Fortschritt messbar machen.",
    },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2" />
      <div className="flex flex-col gap-12">
        {steps.map((s, i) => (
          <div key={i} className="relative flex items-center w-full">
            <div
              className={`flex-1 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
            <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md z-10" />
            <div className="flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
