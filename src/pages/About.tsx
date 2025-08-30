
import de from "@/data/content.de.json";
import en from "@/data/content.en.json";
import { getLocale } from "@/lib/i18n";

export default function About() {
  const lang = getLocale();
  const t = lang === "de" ? de : en;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">About</h1>
      <p className="max-w-2xl">{t.about.journey}</p>

      <h2 className="text-xl font-semibold mt-8">Pillars</h2>
      <ul className="list-disc ml-6 mt-2">
        {t.about.pillars.map((p: string) => <li key={p}>{p}</li>)}
      </ul>

      <h2 className="text-xl font-semibold mt-8">Roles</h2>
      <ul className="mt-2 space-y-1">
        {t.about.roles.map((r: any) => (
          <li key={r.title} className="border p-3 rounded-sm bg-card">
            <strong>{r.title}</strong> — <span className="text-sm">{r.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
