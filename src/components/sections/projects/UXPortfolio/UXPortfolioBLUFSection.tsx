// src/components/sections/projects/UXPortfolio/UXPortfolioBLUFSection.tsx

import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function UXPortfolioBLUFSection() {
  return (
    <Section
      id="ux-portfolio-bluf"
      title="A portfolio that finally reflects how I think and work"
      spacing="lg"
    >
      <SectionIntro>
        For years, I didn’t have a portfolio that truly represented me. The
        tools I used — especially Google Sites — limited how I could structure,
        explain, and frame my work. It felt fragmented, inconsistent, and far
        below the standard I expect from myself as a UX Researcher.
      </SectionIntro>

      <div className="max-w-3xl space-y-10">

        <div className="space-y-3">
          <Subtitle>The turning point</Subtitle>
          <Body className={cn(colors.muted.text)}>
            I decided to build a new portfolio entirely from scratch — in code,
            with my own design system, and with the same clarity and strategic
            thinking I bring into my projects. No templates. No quick fixes.
          </Body>
        </div>

        <div className="space-y-3">
          <Subtitle>What I built</Subtitle>
          <Body className={cn(colors.muted.text)}>
            This portfolio is not just a collection of pages. It’s a structured
            system: token-driven, modular, scalable, and designed for narrative
            clarity. Every page follows the same storytelling logic, and every
            design decision can be changed globally.
          </Body>
        </div>

        <div className="space-y-3">
          <Subtitle>Why it matters</Subtitle>
          <Body className={cn(colors.muted.text)}>
            This site shows my work — but more importantly, it shows my way of
            working: clear priorities, thoughtful structure, and design decisions
            that scale. It reflects the same principles I apply in UX Strategy
            and ResearchOps.
          </Body>
        </div>

      </div>
    </Section>
  );
}
