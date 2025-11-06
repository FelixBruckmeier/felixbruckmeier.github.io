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
 * DS-konform: Einheitliche Tile-Typografie, standardisiertes Padding, kein lokales Spacing.
 */

export default function ImpactMeasurementResearchSection() {
  const tiles = [
    {
      icon: "🧭",
      title: "The RPS Principle",
      text1:
        "The Research Promoter Score (RPS) adapts the Net Promoter Score concept for UX Research: stakeholders answer one core question.",
      text2: "“How likely would you recommend UX Research to your colleagues?”",
      footer:
        "RPS = % Promoters − % Detractors: a simple, credible measure of internal trust and influence.",
    },
    {
      icon: "📊",
      title: "What It Measures",
      text1:
        "RPS does not measure usability; it measures organizational maturity and the degree to which research is embedded in decision-making.",
      list: [
        "Stakeholders trust UX Research",
        "They involve it early",
        "Insights shape decisions",
      ],
      footer:
        "These signals together show how embedded and valued Research is across the organization.",
    },
    {
      icon: "📈",
      title: "How It's Applied",
      text1:
        "I run lightweight, recurring surveys among core stakeholders to track RPS and related signals:",
      list: [
        "Quarterly pulse (PM, Design, CX, Dev)",
        "Single question + optional “Why?”",
        "Trend tracking and alerting",
        "Targeted enablement when trust dips",
      ],
      footer:
        "Simple, repeatable, and powerful — it demonstrates long-term influence and builds the case for research.",
    },
  ];

  return (
    <Section id="research-impact" title="Research Impact – Proving Discovery Value" spacing="lg">
      {/* --- Intro narrative --- */}
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

      {/* --- Why this matters --- */}
      <div className={cn(spacing.mt16, "space-y-3 max-w-3xl")}>
        <Subtitle>Why this matters</Subtitle>
        <Body className={colors.muted.text}>
          UX Research doesn’t produce immediate profit — it produces <strong>knowledge and clarity</strong>.
          Over time this reduces risk, accelerates better product decisions, and builds internal trust.
          Measuring research influence ensures it receives the attention and resources it deserves.
        </Body>
      </div>

      {/* --- Tile Grid (DS-konform) --- */}
      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt12)}>
        {tiles.map((tile, i) => (
          <Tile key={i} variant="static" className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <span>{tile.icon}</span>
              <Subtitle>{tile.title}</Subtitle>
            </div>

            <Body>{tile.text1}</Body>

            {tile.text2 && (
              <Body className={cn("italic mt-4")}>{tile.text2}</Body>
            )}

            {tile.list && (
              <div className="mt-4 space-y-1">
                {tile.list.map((li, j) => (
                  <Body key={j}>• {li}</Body>
                ))}
              </div>
            )}

            <Small className="mt-6 text-muted-foreground">{tile.footer}</Small>
          </Tile>
        ))}
      </div>

      {/* --- Closing text --- */}
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
