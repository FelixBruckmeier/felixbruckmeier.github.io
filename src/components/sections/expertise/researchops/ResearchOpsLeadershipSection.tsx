// src/components/sections/expertise/researchops/ResearchOpsLeadershipSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

/**
 * ResearchOps Leadership Section — DS-conform + full-width
 * ------------------------------------------------------------
 * ✅ unified with ValueSection visual style
 * ✅ uses global tile + typography tokens
 * ✅ consistent vertical rhythm and color handling
 */
export default function ResearchOpsLeadershipSection() {
  const tiles = [
    {
      title: "System Thinking",
      text: "I map the ecosystem of people, tools, and processes to remove friction and increase research velocity.",
    },
    {
      title: "Cross-Functional Alignment",
      text: "I partner with Product, Design, and Data to make research a shared responsibility — not a siloed function.",
    },
    {
      title: "Culture Building",
      text: "I turn ResearchOps into a mindset — a way for teams to learn continuously, measure impact, and grow together.",
    },
  ];

  return (
    <Section
      id="reops-leadership"
      title="What's my job here?"
      spacing="lg"
      fullWidth
      borderTop={false}
    >
      {/* --- Intro Text --- */}
      <SectionIntro>
        Scaling research isn’t just about adding processes — it’s about{" "}
        <strong>creating clarity and connection between vision and execution.</strong> As a UX
        Research Lead, I help organizations turn operational chaos into a confident, insight-driven
        rhythm — building systems and culture that let teams move faster, collaborate deeper, and
        make better decisions with evidence.
      </SectionIntro>

      {/* --- DS-Conform Tile Grid --- */}
      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt10, spacing.mb20)}>
        {tiles.map((item) => (
          <Tile key={item.title} variant="static" className={cn("h-full", spacing.p6)}>
            <Subtitle className={cn("mb-3 text-foreground")}>{item.title}</Subtitle>
            <Body className="text-muted-foreground">{item.text}</Body>
          </Tile>
        ))}
      </div>

      {/* --- Closing Statement --- */}
      <div className={cn("text-center", spacing.mt8)}>
        <Body className={cn("text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto")}>
          The result: a research organization that operates with purpose, earns leadership trust,
          and drives meaningful impact at every level of the business.
        </Body>
      </div>
    </Section>
  );
}
