import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { about, expertise, projects, craft, contact } from "./content/content";

export default function App() {
  useEffect(() => {
    const handler = (e: Event) => {
      const t = e.target as HTMLAnchorElement;
      if (t?.matches('a[href^="#"]')) {
        const id = t.getAttribute("href")!.slice(1);
        const el = document.getElementById(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Navbar />
      <main>
        <Hero />
        <Section id="about" title="About me" className="fade-in">
          <div className="prose max-w-none">
            <p className="text-lg">{about.intro}</p>
            <ul className="mt-4 list-disc pl-5 space-y-1">
              {about.pillars.map((p) => (
                <li key={p.title}><span className="font-semibold">{p.title}:</span> {p.desc}</li>
              ))}
            </ul>
            <h3 className="mt-6 text-xl font-semibold">Stations</h3>
            <ul className="mt-2 grid md:grid-cols-2 gap-3">
              {about.stations.map((s) => (
                <li key={s.org} className="p-4 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--card-border))] research-glow">
                  <div className="font-medium">{s.title}</div>
                  <div className="text-sm opacity-80">{s.org} · {s.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="expertise" title="My Expertise" className="slide-up">
          <div className="grid md:grid-cols-2 gap-4">
            {expertise.themes.map((t) => (
              <div key={t.title} className="p-5 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--card-border))] research-glow">
                <div className="text-lg font-semibold">{t.title}</div>
                <p className="mt-2 text-sm opacity-90">{t.desc}</p>
                {t.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-[hsl(var(--muted))]">{tag}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 gap-5">
            {projects.items.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </Section>

        <Section id="craft" title="Craft & Research">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--card-border))]">
              <h3 className="text-lg font-semibold">Holzhandwerk × UXR</h3>
              <p className="mt-2 opacity-90">{craft.analogy}</p>
              <ul className="mt-3 list-disc pl-5">
                {craft.gallery.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-[hsl(var(--card-secondary))] border border-[hsl(var(--card-border))]">
              <h3 className="text-lg font-semibold">Methoden & Ops</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {craft.methods.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--card-border))]">
            <p className="text-lg">{contact.invite}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {contact.links.map((l) => (
                <a key={l.label} href={l.href} className="px-4 py-2 rounded-lg bg-[hsl(var(--primary))] text-white hover:opacity-90 transition" target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
