// src/components/sections/projects/UXPortfolio/UXPortfolioImpactSection.tsx

import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import Tile from "@/components/ui/Tile";
import { SectionHeading, Subtitle, Body } from "@/components/ui/Tokens";
import { colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function UXPortfolioImpactSection() {
  return (
    <Section
      id="ux-portfolio-impact"
      title="Impact — how this system makes my work faster and clearer"
      spacing="lg"
      borderTop
      borderBottom
    >
      <SectionIntro>
        This design system changed how I work on my portfolio. Instead of fixing
        individual pages, I can now shape the entire experience from a single
        place. The system gives me speed, clarity, and real long-term leverage.
      </SectionIntro>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        
        {/* TOKEN CONTROL */}
        <Tile variant="static" className="space-y-3">
          <Subtitle>Global control through tokens</Subtitle>
          <Body className={cn(colors.muted.text)}>
            With centrally managed tokens, I can adjust typography, spacing and
            color globally. One change cascades across all pages — something that
            previously required dozens of individual edits.
          </Body>
        </Tile>

        {/* CONSISTENCY */}
        <Tile variant="static" className="space-y-3">
          <Subtitle>Consistent storytelling</Subtitle>
          <Body className={cn(colors.muted.text)}>
            Every page follows the same narrative pattern. Readers immediately
            understand the structure, and I no longer have to manually enforce
            consistency — the system does it by design.
          </Body>
        </Tile>

        {/* SPEED */}
        <Tile variant="static" className="space-y-3">
          <Subtitle>Faster content creation</Subtitle>
          <Body className={cn(colors.muted.text)}>
            I can assemble new pages like building blocks: SectionIntro →
            Story → Impact. The system gives me the frame — I only fill in the
            content. This turns hours of layout work into minutes.
          </Body>
        </Tile>

        {/* SCALABILITY */}
        <Tile variant="static" className="space-y-3">
          <Subtitle>Built-in scalability</Subtitle>
          <Body className={cn(colors.muted.text)}>
            Whether I add one project or ten, the structure stays stable. The
            design system prevents layout drift and keeps the experience coherent
            over time.
          </Body>
        </Tile>

        {/* MY WORKING STYLE */}
        <Tile variant="static" className="space-y-3">
          <Subtitle>A reflection of how I work</Subtitle>
          <Body className={cn(colors.muted.text)}>
            This system expresses my way of working: clarity first, modular
            thinking, scalable decision-making. I build structures that make good
            choices easier — for myself and for others.
          </Body>
        </Tile>

      </div>
    </Section>
  );
}
