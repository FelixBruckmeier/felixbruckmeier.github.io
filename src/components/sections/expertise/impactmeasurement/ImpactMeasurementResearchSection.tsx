// src/components/sections/expertise/impactmeasurement/ImpactMeasurementResearchSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Body, Subtitle, Small } from "@/components/ui/Tokens";
import Tile from "@/components/ui/Tile";
import { cn } from "@/lib/utils";
import { colors, spacing, layout } from "@/lib/tokens";

/**
 * Research Impact Section – Proving Discovery Value
 * -------------------------------------------------
 * DS-conform: consistent spacing, unified grid, clear typography.
 */

export default function ImpactMeasurementResearchSection() {
  return (
    <Section id="research-impact" title="Research Impact – Proving Discovery Value" spacing="md">
      {/* Intro narrative */}
      <SectionIntro className="max-w-3xl leading-relaxed text-lg">
        Unlike usability improvements, discovery research doesn’t generate instant revenue.
        It builds <strong>understanding, alignment, and decision confidence</strong> — the
        foundation for building the right product.
      </SectionIntro>

      <Body className={cn(colors.muted.text, spacing.mt6, "max-w-3xl")}>
        Because research impact is often delayed and less tangible, it is harder to defend when
        priorities shift. I make that influence visible through structured methods that combine
        qualitative insight with organizational perception metrics such as the{" "}
        <strong>Research Promoter Score (RPS)</strong>.
      </Body>

      {/* Why this matters */}
      <div className={cn(spacing.mt16, "space-y-3 max-w-3xl")}>
        <Subtitle>Why this matters</Subtitle>
        <Body className={colors.muted.text}>
          UX Research doesn't produce immediate profit — it produces <strong>knowledge and clarity</strong>.
          Over time this reduces risk, accelerates better product decisions, and builds internal trust.
          Measuring research influence ensures it receives the attention and resources it deserves.
        </Body>
      </div>

      {/* Tile Grid */}
      <div
        className={cn(
          layout.gridCols3,
          spacing.gap10,
          spacing.mt16,
          spacing.mb16,
          "items-stretch"
        )}
      >
        <Tile variant="inactive" className="h-full flex flex-col justify-between p-8">
          <div>
            <Subtitle>The RPS principle</Subtitle>
            <Body className={cn(colors.muted.text, spacing.mt4)}>
              The <strong>Research Promoter Score (RPS)</strong> adapts the Net Promoter Score
              concept for UX Research: stakeholders answer one core question.
            </Body>
            <Body className={cn(spacing.mt5)}>
              <em>“How likely would you recommend UX Research to your colleagues?”</em>
            </Body>
          </div>
          <Small className={cn(colors.muted.text, spacing.mt6, "block")}>
            RPS = % Promoters − % Detractors: a simple, credible measure of internal trust and influence.
          </Small>
        </Tile>

        <Tile variant="inactive" className="h-full flex flex-col justify-between p-8">
          <div>
            <Subtitle>What it measures</Subtitle>
            <Body className={cn(colors.muted.text, spacing.mt4)}>
              RPS does not measure usability; it measures organizational maturity and the degree to which
              research is embedded in decision-making.
            </Body>
            <div className={cn("space-y-2", spacing.mt5)}>
              <Body>• Stakeholders <strong>trust</strong> UX Research</Body>
              <Body>• They <strong>involve</strong> it early</Body>
              <Body>• Insights <strong>shape</strong> decisions</Body>
            </div>
          </div>
          <Small className={cn(colors.muted.text, spacing.mt6, "block")}>
            These signals together show how embedded and valued Research is across the organization.
          </Small>
        </Tile>

        <Tile variant="inactive" className="h-full flex flex-col justify-between p-8">
          <div>
            <Subtitle>How it's applied</Subtitle>
            <Body className={cn(colors.muted.text, spacing.mt4)}>
              I run lightweight, recurring surveys among core stakeholders to track RPS and related signals:
            </Body>
            <div className={cn("space-y-2", spacing.mt5)}>
              <Body>• Quarterly pulse (PM, Design, CX, Dev)</Body>
              <Body>• Single question + optional “Why?”</Body>
              <Body>• Trend tracking and alerting</Body>
              <Body>• Targeted enablement when trust dips</Body>
            </div>
          </div>
          <Small className={cn(colors.muted.text, spacing.mt6, "block")}>
            Simple, repeatable, and powerful — it demonstrates long-term influence and builds the case for research.
          </Small>
        </Tile>
      </div>

      {/* Closing text */}
      <Body className={cn(colors.muted.text, spacing.mt16, "max-w-3xl")}>
        A rising RPS reflects a cultural shift — UX Research moves from a <em>cost center</em> to a{" "}
        <strong>strategic driver</strong> of clarity, confidence, and smarter decisions.
      </Body>

      <Small className={cn(colors.muted.text, spacing.mt10, "block text-right")}>
        Concept reference: Frederik Bader — Research Promoter Score (2020+)
      </Small>
    </Section>
  );
}
