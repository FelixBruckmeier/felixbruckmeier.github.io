// src/pages/CV.tsx
import { H1, H2, H3, IntroText, Small } from "@/components/ui/Tokens";
import { layout, sectionSpacing, spacing, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function CV() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        className={cn(layout.container, sectionSpacing.lg, "border-b", colors.border)}
      >
        <H1>Curriculum Vitae</H1>
        <IntroText className="max-w-3xl">
          UX Research Leadership · Strategy · ResearchOps · Impact Measurement
        </IntroText>
      </section>

      <section
        className={cn(
          layout.container,
          sectionSpacing.md,
          "grid gap-12 md:grid-cols-[0.8fr_1.2fr]"
        )}
      >
        <aside className="space-y-10">
          <div>
            <H2>Strengths &amp; Focus</H2>
            <ul className={cn(spacing.mt3, spacing.stackSm)}>
              <Small>Approach: Asking the right questions, clarity in research</Small>
              <Small>Expertise: Mixed-methods, strategy alignment, ResearchOps</Small>
              <Small>Engagement: Empowering teams, stakeholder collaboration</Small>
            </ul>
          </div>

          <div>
            <H2>Tools</H2>
            <ul className={cn(spacing.mt3, spacing.stackSm)}>
              <Small>Testing: Maze, Lookback, UserZoom</Small>
              <Small>Design &amp; Collaboration: Figma, Miro, Jira, Confluence</Small>
              <Small>Survey &amp; Quant: Qualtrics, Alchemer, Excel, R, SPSS</Small>
            </ul>
          </div>

          <div>
            <H2>Education</H2>
            <ul className={cn(spacing.mt3, spacing.stackSm)}>
              <li>
                <strong>Master of Science in Economics</strong> <br />
                <Small>University of Regensburg, 2014</Small>
              </li>
              <li>
                <strong>Bachelor of Science in Economics</strong> <br />
                <Small>University of Regensburg, 2012</Small>
              </li>
            </ul>
          </div>

          <div>
            <H2>Supported by</H2>
            <ul className={cn(spacing.mt3, spacing.stackSm)}>
              <Small>ResearchOps Community</Small>
              <Small>Experience Leadership Club</Small>
            </ul>
          </div>
        </aside>

        <div className="space-y-12">
          <H2>Professional Experience</H2>

          <div>
            <H3>Lead UX Research (Freelance) — ATOSS · Jan 2025 – May 2025</H3>
            <ul className={cn(spacing.mt2, spacing.stackXs)}>
              <Small>Established research strategy and ResearchOps practices</Small>
              <Small>Ran discovery and usability studies across enterprise software</Small>
              <Small>Collaborated with product and design leadership on UX maturity</Small>
            </ul>
          </div>

          <div>
            <H3>Lead UX Research — zooplus · Jul 2022 – Dec 2024</H3>
            <ul className={cn(spacing.mt2, spacing.stackXs)}>
              <Small>Built and scaled ResearchOps framework and governance</Small>
              <Small>Conducted mixed-methods studies (conjoint, MaxDiff, usability)</Small>
              <Small>Led Communities of Practice and mentored junior researchers</Small>
              <Small>Aligned research roadmap with OKRs and product vision</Small>
            </ul>
          </div>

          <div>
            <H3>Senior UX Researcher — Swiss Life · May 2020 – Jun 2022</H3>
            <ul className={cn(spacing.mt2, spacing.stackXs)}>
              <Small>Planned and executed strategic research in B2B2C domain</Small>
              <Small>Delivered insights to de-risk product decisions</Small>
              <Small>Embedded user voice into strategy through qualitative &amp; quantitative methods</Small>
            </ul>
          </div>

          <div>
            <H3>UX Researcher — Kaiser X Labs (Allianz) · Aug 2018 – Apr 2020</H3>
            <ul className={cn(spacing.mt2, spacing.stackXs)}>
              <Small>Supported product teams with discovery and evaluative research</Small>
              <Small>Applied Design Thinking methods in innovation context</Small>
              <Small>Ran usability testing and interviews with cross-national participants</Small>
            </ul>
          </div>

          <div>
            <H3>UX Researcher — empiriecom (BAUR/OTTO Group) · Feb 2016 – Jul 2018</H3>
            <ul className={cn(spacing.mt2, spacing.stackXs)}>
              <Small>Delivered UX insights for e-commerce platforms</Small>
              <Small>Developed survey designs, user interviews, and analytics reports</Small>
              <Small>Collaborated with designers and PMs on product improvements</Small>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
