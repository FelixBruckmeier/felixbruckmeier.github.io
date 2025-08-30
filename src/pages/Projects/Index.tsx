
import de from "@/data/content.de.json";
import en from "@/data/content.en.json";
import { getLocale } from "@/lib/i18n";
import Tile from "@/components/Tile";

export default function ProjectsIndex() {
  const lang = getLocale();
  const t = lang === "de" ? de : en;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.projects.map((p: any) => (
          <Tile key={p.slug} title={p.title} subtitle={p.summary} to={`/projects/${p.slug}`} tags={p.tags} />
        ))}
      </div>
    </section>
  );
}
