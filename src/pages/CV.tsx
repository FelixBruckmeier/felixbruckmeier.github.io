export default function CV() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="container-responsive py-14 md:py-20 border-b border-border">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Curriculum Vitae
        </h1>
        <p className="mt-3 text-muted-foreground max-w-3xl">
          UX Research Leadership · Strategy · ResearchOps · Impact Measurement
        </p>
      </section>

      {/* Content Grid */}
      <section className="container-responsive py-12 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        {/* Sidebar */}
        <aside className="space-y-10">
          {/* Strengths */}
          <div>
            <h2 className="text-xl font-bold">Strengths & Focus</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm">
              <li>Approach: Asking the right questions, clarity in research</li>
              <li>Expertise: Mixed-methods, strategy alignment, ResearchOps</li>
              <li>Engagement: Empowering teams, stakeholder collaboration</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-xl font-bold">Tools</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm">
              <li>Testing: Maze, Lookback, UserZoom</li>
              <li>Design & Collaboration: Figma, Miro, Jira, Confluence</li>
              <li>Survey & Quant: Qualtrics, Alchemer, Excel, R, SPSS</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-bold">Education</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm">
              <li>
                <strong>Master of Science in Economics</strong>  
                University of Regensburg, 2014
              </li>
              <li>
                <strong>Bachelor of Science in Economics</strong>  
                University of Regensburg, 2012
              </li>
            </ul>
          </div>

          {/* Supported by */}
          <div>
            <h2 className="text-xl font-bold">Supported by</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm">
              <li>ResearchOps Community</li>
              <li>Experience Leadership Club</li>
            </ul>
          </div>
        </aside>

        {/* Experience */}
        <div className="space-y-12">
          <div>
            <h2 className="text-xl font-bold">Professional Experience</h2>
          </div>

          {/* ATOSS */}
          <div>
            <h3 className="font-semibold">
              Lead UX Research (Freelance) — ATOSS · Jan 2025 – May 2025
            </h3>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Established research strategy and ResearchOps practices</li>
              <li>Ran discovery and usability studies across enterprise software</li>
              <li>Collaborated with product and design leadership on UX maturity</li>
            </ul>
          </div>

          {/* zooplus */}
          <div>
            <h3 className="font-semibold">
              Lead UX Research — zooplus · Jul 2022 – Dec 2024
            </h3>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Built and scaled ResearchOps framework and governance</li>
              <li>Conducted mixed-methods studies (conjoint, MaxDiff, usability)</li>
              <li>Led Communities of Practice and mentored junior researchers</li>
              <li>Aligned research roadmap with OKRs and product vision</li>
            </ul>
          </div>

          {/* Swiss Life */}
          <div>
            <h3 className="font-semibold">
              Senior UX Researcher — Swiss Life · May 2020 – Jun 2022
            </h3>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Planned and executed strategic research in B2B2C domain</li>
              <li>Delivered insights to de-risk product decisions</li>
              <li>Embedded user voice into strategy through qualitative & quantitative methods</li>
            </ul>
          </div>

          {/* Kaiser X Labs */}
          <div>
            <h3 className="font-semibold">
              UX Researcher — Kaiser X Labs (Allianz) · Aug 2018 – Apr 2020
            </h3>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Supported product teams with discovery and evaluative research</li>
              <li>Applied Design Thinking methods in innovation context</li>
              <li>Ran usability testing and interviews with cross-national participants</li>
            </ul>
          </div>

          {/* empiriecom */}
          <div>
            <h3 className="font-semibold">
              UX Researcher — empiriecom (BAUR/OTTO Group) · Feb 2016 – Jul 2018
            </h3>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Delivered UX insights for e-commerce platforms</li>
              <li>Developed survey designs, user interviews, and analytics reports</li>
              <li>Collaborated with designers and PMs on product improvements</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
