import Skillmap from "@/components/expertise/TeamLeadership/Skillmap";

export default function SkillmapPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Skill Assessment</h1>
        <h2 className="text-xl text-muted-foreground mb-8">
          Selbsteinschätzung deiner UX Research Skills
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Dieses Assessment basiert auf dem{" "}
          <a
            href="https://www.researchskills.net/skills"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Skill Framework der ResearchOps Community
          </a>
          .
        </p>
      </section>

      {/* Skillmap Component */}
      <Skillmap />
    </div>
  );
}
