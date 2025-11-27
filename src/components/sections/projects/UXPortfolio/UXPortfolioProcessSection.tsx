// src/components/sections/projects/UXPortfolio/UXPortfolioProcessSection.tsx
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import Tile from "@/components/ui/Tile";
import { SectionHeading, Subtitle, Body } from "@/components/ui/Tokens";
import { colors, spacing } from "@/lib/tokens";

type Phase = {
  id: string;
  label: string;
  title: string;
  question: string;
  activities: string[];
  artifacts: string[];
};

const PHASES: Phase[] = [
  {
    id: "discover",
    label: "01",
    title: "Positioning & constraints",
    question: "What should this portfolio signal in the first 10 seconds?",
    activities: [
      "Audit of previous portfolio versions and recruiter feedback",
      "Clarified target audience: design leadership, research leaders, product",
      "Defined 'non-goals' (no blog, no generic UX 101 content)",
    ],
    artifacts: [
      "Positioning statement & headline options",
      "List of must-have and nice-to-have sections",
    ],
  },
  {
    id: "define",
    label: "02",
    title: "Information architecture & routing",
    question: "How do projects, expertise, and CV fit together?",
    activities: [
      "Mapped core stories: UX Strategy, ResearchOps, Leadership, Impact",
      "Separated 'expertise' (how I think) and 'projects' (how I execute)",
      "Defined URL structure and route patterns (e.g. /expertise/... /projects/...)",
    ],
    artifacts: [
      "Site map & navigation model",
      "Route configuration in React Router",
    ],
  },
  {
    id: "design-system",
    label: "03",
    title: "Design system & layout primitives",
    question: "How can I make future content consistent by design?",
    activities: [
      "Extracted typography, colors, spacing, layout into tokens.ts",
      "Created generic Section, SectionIntro, Tile, Button, Tag, Badge components",
      "Defined content patterns for BLUF, process, and impact sections",
    ],
    artifacts: [
      "Design tokens file (colors, typography, spacing, radii)",
      "Reusable UI primitives (Section, Tile, Tokens, Button, TileImage, ...)",
    ],
  },
  {
    id: "implement",
    label: "04",
    title: "Implementation & content migration",
    question: "How do we avoid a tangle of one-off layouts?",
    activities: [
      "Rebuilt Home, Expertise, Projects, and CV pages using the DS components",
      "Refactored older sections into Section + Tile + SectionIntro patterns",
      "Set up i18n structure for EN/DE navigation and copy",
    ],
    artifacts: [
      "PageLayout as shared shell (hero + content spacing)",
      "Content components per page (e.g. CarInsuranceBLUFSection, etc.)",
    ],
  },
  {
    id: "iterate",
    label: "05",
    title: "Polish, performance & maintainability",
    question: "What makes this portfolio pleasant to maintain over time?",
    activities: [
      "Optimized images via vite-imagetools and simple picture usage",
      "Tuned typographic rhythm and vertical spacing via tokens",
      "Reduced CSS to Tailwind utilities + design tokens; no custom chaos",
    ],
    artifacts: [
      "Consistent spacing scale across pages",
      "Lean CSS, clear TypeScript structures, and minimal config friction",
    ],
  },
];

export function UXPortfolioProcessSection() {
  return (
    <Section
      id="ux-portfolio-process"
      title="Process — from a messy playground to a product-ready system"
      spacing="lg"
      borderTop
    >
      <SectionIntro>
        The portfolio evolved from a collection of one-off experiments into a
        structured system. The key decision was to treat it like a product:
        start with positioning, design the information architecture, then build
        a design system that makes every new page easier and more consistent.
      </SectionIntro>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] items-start">
        {/* LEFT: Narrative */}
        <div className="space-y-8">
          <SectionHeading>
            Phases & decisions that shaped the system
          </SectionHeading>
          <Body className={colors.muted.text}>
            Each phase had one driving question and clear trade-offs. Instead of
            over-engineering a full-blown DS, I focused on the smallest set of
            primitives that:
          </Body>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>keep the reading experience calm and focused,</li>
            <li>avoid layout drift between pages, and</li>
            <li>allow experiments without breaking the overall structure.</li>
          </ul>
        </div>

        {/* RIGHT: Phases as tiles */}
        <div className="space-y-6">
          {PHASES.map((phase) => (
            <Tile key={phase.id} variant="static" className="space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <Subtitle>{phase.title}</Subtitle>
                <span className="text-xs font-mono text-muted-foreground">
                  {phase.label}
                </span>
              </div>

              <Body className="text-sm text-muted-foreground">
                <strong className="font-medium">Guiding question:</strong>{" "}
                {phase.question}
              </Body>

              <div className="grid gap-2 md:grid-cols-2">
                <div>
                  <Body className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    Activities
                  </Body>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                    {phase.activities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Body className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    Artefacts
                  </Body>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-sm text-muted-foreground">
                    {phase.artifacts.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Tile>
          ))}
        </div>
      </div>
    </Section>
  );
}
