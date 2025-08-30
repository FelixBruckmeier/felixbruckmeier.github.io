
import de from "../../data/content.de.json";
import en from "../../data/content.en.json";
import { getLocale } from "@/lib/i18n";
import Tile from "@/components/Tile";

export default function ExpertiseIndex() {
  const lang = getLocale();
  const t = lang === "de" ? de : en;
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Expertise</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.expertise.themes.map((th: any) => (
          <Tile key={th.slug} title={th.title} subtitle={th.summary} to={`/expertise/${th.slug}`} />
        ))}
      </div>
    </section>
  );
}
