
import de from "@/data/content.de.json";
import en from "@/data/content.en.json";
import { getLocale } from "@/lib/i18n";

export default function CraftAndResearch() {
  const lang = getLocale();
  const t = lang === "de" ? de : en;
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Craft & Research</h1>
      <p className="max-w-3xl">{t.craft.analogy}</p>
      <h2 className="text-xl font-semibold mt-6">Gallery</h2>
      <ul className="mt-2 flex gap-2 flex-wrap">
        {t.craft.gallery.map((g: string) => <li key={g} className="px-3 py-1 border rounded-sm">{g}</li>)}
      </ul>
    </section>
  );
}
