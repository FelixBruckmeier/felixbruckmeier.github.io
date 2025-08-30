
import de from "@/data/content.de.json";
import en from "@/data/content.en.json";
import { getLocale } from "@/lib/i18n";

export default function Contact() {
  const lang = getLocale();
  const t = lang === "de" ? de : en;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <p className="max-w-2xl">{t.contact.cta}</p>
      <div className="mt-6 flex gap-4">
        <a className="underline" href={t.contact.email}>E‑Mail</a>
        <a className="underline" href={t.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
