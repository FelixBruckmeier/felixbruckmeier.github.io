
import Hero from "../components/Hero";
import Tile from "../components/Tile";

const expertise = [
  { slug: "ux-strategy", title: "UX Strategy", subtitle: "Discovery → Prototyping → Analytics. Priorisierung via Risiko × Wissen." },
  { slug: "research-ops", title: "ResearchOps", subtitle: "Governance, Tools & Automation, Insights Activation, Alignment." },
  { slug: "impact-measurement", title: "Impact Measurement", subtitle: "ROI-Modelle (CLTV/Churn), HEART KPIs, Experiment-Design." },
  { slug: "team-leadership", title: "Team Leadership", subtitle: "Rollen- & Skill-Frameworks, Mentoring, Communities of Practice." },
  { slug: "strategic-ux-research", title: "Strategic UXR", subtitle: "OKRs, Research Planning (Erika Hall), RITE-Methode." },
];

const projects = [
  { slug: "car-insurance", title: "Car Insurance", subtitle: "Segmentierung & Entscheidungsfaktoren, Prototyp-Validierung.", tags: ["Discovery", "Pricing", "Claims"] },
  { slug: "winning-ux-strategy", title: "A Winning UX Strategy", subtitle: "Unternehmensweite UX-Strategie & OKR-Ausrichtung.", tags: ["Strategy", "OKRs"] },
  { slug: "pricing-rite", title: "Pricing Component RITE", subtitle: "RITE-Testing mit messbaren Verbesserungen.", tags: ["Usability", "RITE"] },
  { slug: "ux-method-cards", title: "UX Method Cards", subtitle: "Enablement für Teams: Methoden, Aufwand, Deliverables.", tags: ["Enablement"] },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="about" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">About me</h2>
        <p className="mt-4 max-w-3xl opacity-90">
          Von Ökonometrie zu UX Research: datengetrieben, nutzerzentriert, wirkungsorientiert.
          Ich baue ResearchOps, richte Teams strategisch aus und mache Wirkung messbar.
        </p>
      </section>
      <section id="expertise" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Expertise</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertise.map((e) => (<Tile key={e.slug} title={e.title} subtitle={e.subtitle} to={`/expertise/${e.slug}`} />))}
        </div>
      </section>
      <section id="projects" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (<Tile key={p.slug} title={p.title} subtitle={p.subtitle} to={`/projects/${p.slug}`} tags={p.tags} />))}
        </div>
      </section>
      <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <p className="mt-4 max-w-3xl opacity-90">Lass uns sprechen – buche einen kurzen Discovery-Call oder schreib mir direkt.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="mailto:felix.bruckmeier@example.com" className="underline">E‑Mail</a>
          <a href="https://www.linkedin.com/in/felixbruckmeier" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
          <a href="/assets/CV_Felix_Bruckmeier.pdf" className="underline">CV</a>
        </div>
      </section>
    </div>
  );
}
