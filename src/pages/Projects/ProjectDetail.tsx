
import { useParams } from "react-router-dom";
import de from "@/data/content.de.json";
import en from "@/data/content.en.json";
import { getLocale } from "@/lib/i18n";

export default function ProjectDetail() {
  const { slug } = useParams();
  const lang = getLocale();
  const t = lang === "de" ? de : en;
  const project = t.projects.find((p: any) => p.slug === slug);

  if (!project) {
    return <section className="mx-auto max-w-6xl px-4 py-12">Project not found.</section>
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{project.title}</h1>
      <p className="mt-2 max-w-2xl">{project.summary}</p>
      {project.tags?.length ? (
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.tags.map((t: string) => <span key={t} className="px-2 py-1 border rounded-sm text-xs">{t}</span>)}
        </div>
      ): null}

      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Case Study Outline</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>Context & Problem:</strong> Business context, user goals, constraints.</li>
          <li><strong>Approach:</strong> Methods, participants, artifacts, iterations (RITE).</li>
          <li><strong>Findings:</strong> Key insights supported by data; quotes/metrics.</li>
          <li><strong>Outcome & Impact:</strong> KPIs (HEART, conversion, churn), ROI indication.</li>
          <li><strong>Next Steps:</strong> Risks, open questions, roadmap.</li>
        </ol>
      </div>
    </section>
  );
}
