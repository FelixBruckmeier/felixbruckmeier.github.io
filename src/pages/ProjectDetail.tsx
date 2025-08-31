
import { Link, useParams } from "react-router-dom";
const titles: Record<string, string> = {
  "car-insurance": "Car Insurance",
  "winning-ux-strategy": "A Winning UX Strategy",
  "pricing-rite": "Pricing Component RITE",
  "ux-method-cards": "UX Method Cards",
};
export default function ProjectDetail() {
  const { slug } = useParams();
  const title = titles[slug ?? ""] || "Project";
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Link to="/" className="underline">← Zurück zur Startseite</Link>
      <h1 className="text-3xl font-semibold mt-4">{title}</h1>
      <div className="mt-6 space-y-3">
        <p><strong>Context & Problem:</strong> Business-Kontext, Nutzerziele, Constraints.</p>
        <p><strong>Approach:</strong> Methoden, Teilnehmende, Artefakte, Iterationen (RITE).</p>
        <p><strong>Findings:</strong> Zentrale Insights, Zitate, unterstützende Daten.</p>
        <p><strong>Outcome & Impact:</strong> KPIs (HEART, Conversion, Churn), ROI-Hinweise.</p>
        <p><strong>Next Steps:</strong> Risiken, offene Fragen, Roadmap.</p>
      </div>
    </section>
  );
}
