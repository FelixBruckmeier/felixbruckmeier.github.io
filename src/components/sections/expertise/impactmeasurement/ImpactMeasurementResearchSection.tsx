import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Body, Subtitle, Small } from "@/components/ui/Tokens";
import Tile from "@/components/ui/Tile";
import { cn } from "@/lib/utils";
import { colors, spacing, layout } from "@/lib/tokens";

/**
 * Research Impact Section – Proving Discovery Value
 * -------------------------------------------------
 * DS-konform: konsistente Abstände, einheitliches Grid, klare Typo.
 * Gleiche Tile-Optik & Rhythmus wie Business- und HEART-Sections.
 */

export default function ImpactMeasurementResearchSection() {
  return (
    <Section
      id="research-impact"
      title="Research Impact – Proving Discovery Value"
      spacing="md"
    >
      {/* Intro narrative */}
      <SectionIntro className="max-w-3xl leading-relaxed text-lg">
        Unlike usability improvements, discovery research doesn’t generate
        instant revenue. It builds <strong>understanding, alignment, and
        decision confidence</strong> — the foundation for creating the right
        product in the first place.
      </SectionIntro>

      <Body className={cn(colors.muted.text, spacing.mt6, "max-w-3xl")}>
        Because this impact is delayed and less tangible, it’s often harder to
        defend when priorities shift. I use structured methods to make it
        measurable — combining qualitative influence with organizational
        perception metrics like the{" "}
        <strong>Research Promoter Score (RPS)</strong> by{" "}
        <em>Frederik Bader</em>.
      </Body>

      {/* Why this matters */}
      <div className={cn(spacing.mt16, "space-y-3 max-w-3xl")}>
        <Subtitle>Why this matters</Subtitle>
        <Body className={colors.muted.text}>
          UX Research doesn’t produce profit directly — it produces
          <strong> knowledge and clarity</strong>. Over time, that shapes better
          strategies, reduces risk, and builds trust. Measuring this influence
          ensures Research gets the visibility and resources it deserves.
        </Body>
      </div>

      {/* Tile Grid */}
      <div
        className={cn(
          layout.gridCols3,
          spacing.gap10, // ↑ mehr Abstand zwischen Tiles
          spacing.mt16,
          spacing.mb16,
          "items-stretch"
        )}
      >
        {/* Tile 1 */}
        <Tile variant="inactive" className="h-full flex flex-col justify-between p-8">
          <div>
            <Subtitle>The RPS Principle</Subtitle>
            <Body className={cn(colors.muted.text, spacing.mt4)}>
              The <strong>Research Promoter Score (RPS)</strong> adapts the Net
              Promoter Score to UX Research. Stakeholders answer one key
              question:
            </Body>
            <Body className={cn(spacing.mt5)}>
              <em>“How likely would you recommend UX Research to your
              colleagues?”</em>
            </Body>
          </div>
          <Small className={cn(colors.muted.text, spacing.mt6, "block")}>
            RPS = % Promoters – % Detractors.  
            A simple, credible way to measure internal trust and influence.
          </Small>
        </Tile>

        {/* Tile 2 */}
        <Tile variant="inactive" className="h-full flex flex-col justify-between p-8">
          <div>
            <Subtitle>What it Measures</Subtitle>
            <Body className={cn(colors.muted.text, spacing.mt4)}>
              The RPS doesn’t measure usability — it tracks organizational
              maturity:
            </Body>
            <div className={cn("space-y-2", spacing.mt5)}>
              <Body>• Stakeholders <strong>trust</strong> UX Research</Body>
              <Body>• They <strong>involve</strong> it early</Body>
              <Body>• Insights <strong>shape</strong> decisions</Body>
            </div>
          </div>
          <Small className={cn(colors.muted.text, spacing.mt6, "block")}>
            Together these signals show how embedded and valued Research has
            become.
          </Small>
        </Tile>

        {/* Tile 3 */}
        <Tile variant="inactive" className="h-full flex flex-col justify-between p-8">
          <div>
            <Subtitle>How it’s Applied</Subtitle>
            <Body className={cn(colors.muted.text, spacing.mt4)}>
              I run lightweight, recurring surveys among core stakeholders:
            </Body>
            <div className={cn("space-y-2", spacing.mt5)}>
              <Body>• Quarterly pulse check (PM, Design, CX, Dev)</Body>
              <Body>• One question + optional “Why?”</Body>
              <Body>• Trend tracking over time</Body>
              <Body>• Enablement when trust declines</Body>
            </div>
          </div>
          <Small className={cn(colors.muted.text, spacing.mt6, "block")}>
            Simple, repeatable, and powerful to demonstrate long-term influence.
          </Small>
        </Tile>
      </div>

      {/* Closing Text */}
      <Body className={cn(colors.muted.text, spacing.mt16, "max-w-3xl")}>
        A rising RPS reflects a cultural shift —  
        UX Research evolves from a <em>cost center</em> to a{" "}
        <strong>strategic driver</strong> of clarity, confidence, and smarter
        decisions.
      </Body>

      <Small
        className={cn(colors.muted.text, spacing.mt10, "block text-right")}
      >
        Concept reference: Frederik Bader — Research Promoter Score (2020 ff.)
      </Small>
    </Section>
  );
}
