import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import Tile from "@/components/ui/Tile";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing, colors, shadows } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import VennDiagram from "@/assets/visuals/uxstrategy/VennDiagram";

/**
 * Section: Vision & Alignment
 * DS-conform — matches typography, spacing, and tile style across UX pages
 */
export default function VisionAlignment() {
  const tiles = [
    {
      title: "Business Viability",
      text: "Ensuring research outcomes connect directly to measurable business impact — translating user understanding into growth and strategic clarity.",
      bg: colors.notion.yellow.bg,
      textColor: colors.notion.yellow.text,
    },
    {
      title: "Technology Feasibility",
      text: "Partnering with engineering early to align desirability with feasibility — ensuring that user insights inform technical direction, not react to it.",
      bg: colors.notion.blue.bg,
      textColor: colors.notion.blue.text,
    },
    {
      title: "Human Desirability",
      text: "Grounding all product decisions in empathy, behavior, and cultural context — to deliver solutions that feel intuitive, inclusive, and meaningful.",
      bg: colors.notion.pink.bg,
      textColor: colors.notion.pink.text,
    },
  ];

  return (
    <Section id="vision-alignment" title="Vision & Alignment" spacing="lg">
      {/* --- Intro Text --- */}
      <SectionIntro>
        UX sits at the intersection of <strong>business</strong>,{" "}
        <strong>technology</strong>, and <strong>human experience</strong> — 
        aligning user needs with strategic goals and technical feasibility.
      </SectionIntro>

      {/* --- Centered Venn Diagram --- */}
      <div
        className={cn(
          "flex justify-center items-center mx-auto w-full",
          spacing.mt12,
          spacing.mb12
        )}
      >
        <div className="w-full max-w-3xl flex justify-center">
          <VennDiagram />
        </div>
      </div>

      {/* --- Supporting Tiles (statisch, DS-konform, mit Farbcode) --- */}
      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt12)}>
        {tiles.map((item) => (
          <Tile
            key={item.title}
            variant="static"
            className={cn(
              item.bg,
              item.textColor,
              "h-full text-left border border-border/10 rounded-xl",
              spacing.p6,
              shadows.sm
            )}
          >
            <Subtitle className={cn("mb-3 text-foreground")}>{item.title}</Subtitle>
            <Body className={cn(colors.muted.text, "leading-relaxed")}>
              {item.text}
            </Body>
          </Tile>
        ))}
      </div>
    </Section>
  );
}
