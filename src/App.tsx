import React, { useState, useEffect } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">Felix Bruckmeier — UXR Portfolio</div>
          <div className="flex items-center gap-3">
            <button onClick={() => setDark(!dark)} className="px-3 py-1.5 rounded-lg border hover:bg-zinc-50">
              {dark ? "Light" : "Dark"}
            </button>
            <a href="#projects" className="underline">Projekte</a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        <section className="grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Driving Vision & Growth with User Research</h1>
            <p className="text-lg text-black/70 dark:text-white/70">
              Strategy alignment • ResearchOps • Impact measurement • Team leadership.
            </p>
            <div className="flex gap-3">
              <a className="px-4 py-2 rounded-lg text-white" style={{background: "linear-gradient(135deg, hsl(219 85% 58%) 0%, hsl(262 70% 68%) 100%)"}} href="#projects">Projekte ansehen</a>
              <a className="px-4 py-2 rounded-lg border" href="#expertise">Expertise</a>
            </div>
          </div>
          <img src="/images/placeholder-hero.svg" alt="Hero" className="w-full h-auto rounded-xl shadow" />
        </section>

        <section id="expertise" className="space-y-4">
          <h2 className="text-2xl font-semibold">Expertise</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["UX Strategy","ResearchOps","Impact Measurement","Team Leadership","Strategic UX Research","RITE Method"].map((t) => (
              <article key={t} className="p-5 rounded-xl border bg-white shadow-sm">
                <h3 className="font-semibold mb-2">{t}</h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Platzhaltertext – ersetze später durch echte Inhalte.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-4">
          <h2 className="text-2xl font-semibold">Projekte</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {title:"ADAC Car Insurance", img:"/images/placeholder-1.svg"},
              {title:"zooplus ResearchOps", img:"/images/placeholder-2.svg"},
              {title:"Swiss Life B2B2C", img:"/images/placeholder-3.svg"},
              {title:"zooplus Pricing", img:"/images/placeholder-4.svg"},
            ].map((p) => (
              <article key={p.title} className="p-0 rounded-xl border overflow-hidden bg-white shadow-sm">
                <img src={p.img} alt={p.title} className="w-full aspect-video object-cover"/>
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-black/70 dark:text-white/70">Kurzbeschreibung als Platzhalter.</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-black/60 dark:text-white/60">
        © {new Date().getFullYear()} Felix Bruckmeier — UXR Portfolio
      </footer>
    </div>
  );
}
