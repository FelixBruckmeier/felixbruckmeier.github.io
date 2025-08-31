
import { Link, useParams } from "react-router-dom";
const titles: Record<string, string> = {
  "ux-strategy": "UX Strategy",
  "research-ops": "ResearchOps",
  "impact-measurement": "Impact Measurement",
  "team-leadership": "Team Leadership & Mentoring",
  "strategic-ux-research": "Strategic UX Research",
};
export default function ExpertiseDetail() {
  const { slug } = useParams();
  const title = titles[slug ?? ""] || "Expertise";
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Link to="/" className="underline">← Zurück zur Startseite</Link>
      <h1 className="text-3xl font-semibold mt-4">{title}</h1>
      <p className="mt-4 max-w-3xl">
        Hier kommt deine ausführliche Beschreibung zu <strong>{title}</strong> hin: Prinzipien, Prozesse,
        Artefakte, Beispiele, ROI-Kennzahlen, Diagramme. Ergänze Screenshots und Framework-Grafiken.
      </p>
    </section>
  );
}
