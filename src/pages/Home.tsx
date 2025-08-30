
import Hero from "@/components/Hero";
import de from "@/data/content.de.json";
import en from "@/data/content.en.json";
import { getLocale } from "@/lib/i18n";
import Tile from "@/components/Tile";

export default function Home() {
  const lang = getLocale();
  const t = lang === "de" ? de : en;

  return (
    <div>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Expertise</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.expertise.themes.map((th: any) => (
            <Tile key={th.slug} title={th.title} subtitle={th.summary} to={`/expertise/${th.slug}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.projects.map((p: any) => (
            <Tile key={p.slug} title={p.title} subtitle={p.summary} to={`/projects/${p.slug}`} tags={p.tags} />
          ))}
        </div>
      </section>
    </div>
  );
}
