export default function Work() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Cases</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <article className="rounded-xl border p-5 bg-[hsl(var(--card))]">
          <h2 className="font-semibold">Decision Acceleration @ Enterprise</h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">
            Research-Systeme, die von Insights zu Entscheidungen führen – mit klaren Erfolgsmessungen.
          </p>
        </article>
        <article className="rounded-xl border p-5 bg-[hsl(var(--card))]">
          <h2 className="font-semibold">ResearchOps & Role Clarity</h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">
            Prozesse, Templates, Skill-Frameworks – Teams schneller und zielgerichteter machen.
          </p>
        </article>
      </div>
    </section>
  );
}
