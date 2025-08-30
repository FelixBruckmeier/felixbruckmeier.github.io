import React from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import { getContent } from "../content/content";

export default function ExpertiseGrid() {
  const { language } = useLanguage();
  const items = getContent(language).expertise;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <article key={item.title} className="card p-5">
          <div className="text-3xl" aria-hidden>🔎</div>
          <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 opacity-80">{item.desc}</p>
        </article>
      ))}
    </div>
  );
}
