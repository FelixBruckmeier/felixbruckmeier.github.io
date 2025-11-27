// src/components/sections/projects/UXPortfolio/UXPortfolioImpactSection.tsx
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import Tile from "@/components/ui/Tile";
import { SectionHeading, Subtitle, Body } from "@/components/ui/Tokens";
import { colors } from "@/lib/tokens";

const IMPACT_METRICS = [
  {
    label: "New project setup",
    before: "1–2 hours",
    after: "15–20 minutes",
    note: "Using Section + Tile patterns and existing routes.",
  },
  {
    label: "Design tweaks across pages",
    before: "Edit many components",
    after: "Change tokens.ts once",
    note: "Typography, spacing, and colors centralized.",
  },
  {
    label: "Perceived clarity",
    before: "Mixed layouts, unclear hierarchy",
    after: "Consistent structure across Home, Expertise, Projects, CV",
    note: "Feedback from peers & hiring managers.",
  },
];

export function UXPortfolioImpactSection() {
  return (
    <Section
      id="ux-portfolio-impact"
      title="Impact — clarity for readers, leverage for future me"
      spacing="lg"
      borderTop
      borderBottom
    >
      <SectionIntro>
        The concrete output is “just” a portfolio. The actual value is a small
        system: every new project or expertise page can be added quickly without
        re-inventing layout, spacing, or interaction patterns. This reduces
        friction to update the portfolio and keeps the narrative coherent over
        time.
      </SectionIntro>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
        {/* LEFT: Metrics & concrete outcomes */}
        <div className="space-y-8">
          <SectionHeading>
            Tangible impact on maintainability and storytelling
          </SectionHeading>

          <Tile variant="static" className="space-y-4">
            <Subtitle>System-level impact</Subtitle>
            <Body className={colors.muted.text}>
              The design system turned the portfolio from a frozen snapshot into
              a living artefact. It’s now:
            </Body>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>fast to extend when new projects or topics emerge,</li>
              <li>coherent in how stories are structured and titled, and</li>
              <li>representative of how I think about UX as a system.</li>
            </ul>
          </Tile>

          <Tile variant="static" className="space-y-4">
            <Subtitle>Before / after for core tasks</Subtitle>
            <div className="space-y-3">
              {IMPACT_METRICS.map((m) => (
                <div key={m.label} className="border-b border-border/40 pb-3 last:border-b-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-medium text-foreground">
                      {m.label}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground flex flex-wrap gap-4">
                    <span>
                      <strong>Before:</strong> {m.before}
                    </span>
                    <span>
                      <strong>After:</strong> {m.after}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{m.note}</p>
                </div>
              ))}
            </div>
          </Tile>
        </div>

        {/* RIGHT: Reflection */}
        <div className="space-y-6">
          <Tile variant="static" className="space-y-3">
            <Subtitle>What this shows about my practice</Subtitle>
            <Body className={colors.muted.text}>
              This project is a concrete example of how I approach UX Research
              leadership:
            </Body>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Start with purpose & audience, not components.</li>
              <li>Design structures that make good decisions easier.</li>
              <li>Invest in small systems that pay off over many iterations.</li>
            </ul>
          </Tile>

          <Tile variant="static" className="space-y-3">
            <Subtitle>Next steps</Subtitle>
            <Body className={colors.muted.text}>
              The system is intentionally lightweight. Future iterations can add
              small utilities (e.g. more chart primitives, richer timelines)
              without breaking the existing content model. The “UX portfolio”
              case study itself will evolve as the design system grows.
            </Body>
          </Tile>
        </div>
      </div>
    </Section>
  );
}
