
import { useEffect, useState } from "react";
import de from "@/data/content.de.json";
import en from "@/data/content.en.json";
import { getLocale } from "@/lib/i18n";

export default function Hero() {
  const [lang, setLang] = useState(getLocale());
  useEffect(() => {
    const onPop = () => setLang(getLocale());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const t = lang === "de" ? de.home : en.home;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40" style={{background: "var(--gradient-secondary)"}}/>
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">{t.tagline}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">{t.value}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {t.focus.map(item => (
            <span key={item} className="px-3 py-1 rounded-sm border bg-card">{item}</span>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <a href="/assets/CV_Felix_Bruckmeier.pdf" className="px-4 py-2 rounded-sm bg-primary text-white">CV Download</a>
          <a href="/contact" className="px-4 py-2 rounded-sm border">Contact</a>
        </div>
      </div>
    </section>
  );
}
