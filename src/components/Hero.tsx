import React from "react";
import { hero } from "../content/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full px-3 py-1 text-xs bg-[hsl(var(--muted))]">
            {hero.badge}
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            {hero.title}
          </h1>
          <p className="mt-4 text-lg opacity-90">{hero.subtitle}</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-2 rounded-lg bg-[hsl(var(--primary))] text-white hover:opacity-90 transition">View Projects</a>
            <a href="#contact" className="px-5 py-2 rounded-lg border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] transition">Contact Me</a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm opacity-80">
            {hero.focus.map(f => <li key={f} className="px-2 py-1 rounded bg-[hsl(var(--background-secondary))]">{f}</li>)}
          </ul>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70" style={{ background: "var(--gradient-secondary)" }} />
    </section>
  );
}
