export default function ReOpsDeepDives() {
  const areas = [
    {
      title: "1. Governance",
      text: "Ethische und rechtliche Leitplanken: Consent-Management, Datenschutz, klare Verantwortlichkeiten. Governance sichert Vertrauen bei Nutzern und Stakeholdern und verhindert Risiken.",
      level: 2,
    },
    {
      title: "2. Tools & Infrastructure",
      text: "Zentrale Plattformen, Repository-Systeme und standardisierte Tools schaffen Effizienz und Konsistenz. Ohne Infrastruktur bleibt Research fragmentiert.",
      level: 1,
    },
    {
      title: "3. Process & Scope",
      text: "Von Ad-hoc-Prozessen hin zu klar definierten Workflows. Recruiting, Scheduling und Reporting werden systematisiert und skalierbar.",
      level: 1,
    },
    {
      title: "4. Knowledge & Insight Management",
      text: "Insights auffindbar, teilbar und wiederverwendbar machen. ReOps sorgt für zentrale Repositories und Standards in der Dokumentation.",
      level: 2,
    },
    {
      title: "5. Organizational Alignment & Evangelization",
      text: "Research sichtbar machen, Literacy fördern und bereichsübergreifende Zusammenarbeit stärken. ReOps etabliert Research als strategischen Partner.",
      level: 1,
    },
    {
      title: "6. Resource & Strategic Management",
      text: "Ressourcenplanung, Priorisierung und strategische Steuerung von Research-Initiativen. ReOps unterstützt bei Roadmaps und OKRs.",
      level: 2,
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {areas.map((a, i) => (
        <div key={i} className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">{a.title}</h3>
          <p className="text-gray-700 max-w-3xl">{a.text}</p>
          {/* MaturityBar entfernt – kann später neu gebaut werden */}
        </div>
      ))}
    </div>
  );
}
