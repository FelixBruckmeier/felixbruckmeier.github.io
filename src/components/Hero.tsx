
import { smoothScrollToId } from "../lib/scroll";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70" style={{ background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)" }} />
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-wider opacity-70">UX Research · Strategy · ResearchOps</p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mt-2">
            Entscheidungen beschleunigen – mit klaren Insights, starken Roadmaps und skalierbaren ResearchOps.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl opacity-90">
            Ich helfe Teams, schneller die richtigen Produktentscheidungen zu treffen – evidenzbasiert, messbar, nutzerzentriert.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => smoothScrollToId('expertise')} className="px-4 py-2 rounded-sm bg-[hsl(var(--primary))] text-white shadow-md hover:shadow-lg transition">Expertise</button>
            <button onClick={() => smoothScrollToId('projects')} className="px-4 py-2 rounded-sm border">Meine Projekte</button>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {["Strategy & Roadmaps", "ResearchOps & DesignOps", "Mentoring & Leadership", "UXR als Business-Partner"].map((chip) => (
              <span key={chip} className="px-3 py-1 text-sm rounded-sm border bg-[hsl(var(--card))]">{chip}</span>
            ))}
          </div>
        </div>
        <div className="justify-self-center">
          <img src="/assets/profile.jpg" alt="Profilbild" className="h-48 w-48 md:h-64 md:w-64 rounded-xl object-cover border shadow-md" />
        </div>
      </div>
    </section>
  );
}
