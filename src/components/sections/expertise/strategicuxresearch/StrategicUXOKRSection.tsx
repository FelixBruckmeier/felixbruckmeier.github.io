import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import Tile from "@/components/ui/Tile";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

/**
 * Section: UX Research OKRs
 * DS-konform, statische Tiles, linksbündig
 */
export default function StrategicUXOKRSection() {
  const tiles = [
    {
      level: "Level 1",
      title: "Supports – Aligning with OKRs",
      text: "UX Research aligns with existing company OKRs, validating assumptions and supporting ongoing initiatives.",
      icon: "🧩",
    },
    {
      level: "Level 2",
      title: "Influences – Informing OKRs",
      text: "Research insights begin to inform goal-setting and define measurable impact, bridging user value and business metrics.",
      icon: "🎯",
    },
    {
      level: "Level 3",
      title: "Defines – Driving OKRs",
      text: "UX Research drives strategic priorities. Objectives are grounded in user evidence and organizational learning.",
      icon: "🚀",
    },
  ];

  return (
    <Section
      id="okr"
      title="UX Research OKRs: Bridging Users & Business"
      spacing="lg"
    >
      {/* --- Intro --- */}
      <SectionIntro>
        UX Research OKRs connect user insights directly to organizational priorities —
        creating focus, measurable impact, and shared alignment across teams.
        <br />
        <br />
        While many organizations define ambitious goals, user needs are often underrepresented.
        UX Research bridges that gap — ensuring that objectives are grounded in real evidence,
        not assumptions.
      </SectionIntro>

      {/* --- Tile Grid --- */}
      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt12)}>
        {tiles.map((item) => (
          <Tile
            key={item.title}
            variant="static"
            className={cn(
              "h-full flex flex-col justify-start items-start",
              spacing.p6
            )}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{item.icon}</span>
              <Subtitle className="text-foreground">{item.level}</Subtitle>
            </div>

            <Body className="font-semibold text-foreground mb-2">
              {item.title}
            </Body>
            <Body className={cn(colors.muted.text, "leading-relaxed")}>
              {item.text}
            </Body>
          </Tile>
        ))}
      </div>

      {/* --- Outro Text (jetzt bündig links) --- */}
      <div className={cn(spacing.mt16)}>
        <Subtitle className="text-foreground mb-4">
          From Alignment to Leadership
        </Subtitle>
        <Body className={cn(colors.muted.text, "leading-relaxed")}>
          Having UX Research OKRs is good — but even better is when UX Research itself
          contributes directly to defining company OKRs. That’s when research moves beyond
          validation to become a strategic driver — ensuring that what the organization
          measures truly reflects what users value.
        </Body>
      </div>
    </Section>
  );
}
