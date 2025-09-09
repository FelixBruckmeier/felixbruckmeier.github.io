export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          UX Research Director – Wirkung vor Output
        </h1>
        <p className="mt-3 text-[hsl(var(--muted-foreground))]">
          Entscheidungen beschleunigen, Strategie schärfen, ResearchOps skalieren, Teams befähigen.
        </p>
        <a href="/about" className="inline-block mt-6 px-4 py-2 rounded bg-[hsl(var(--primary))] text-white hover:opacity-90">
          Mehr erfahren →
        </a>
      </div>
      <div className="rounded-xl border p-6 bg-[hsl(var(--card))]">
        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Highlights</p>
        <ul className="space-y-2 text-sm">
          <li>• Decision acceleration & UX strategy</li>
          <li>• ResearchOps & DesignOps at scale</li>
          <li>• Mentorship, Role Clarity, Skill Frameworks</li>
          <li>• ROI/Impact Modeling (HEART, CLTV/Churn)</li>
        </ul>
      </div>
    </section>
  );
}
