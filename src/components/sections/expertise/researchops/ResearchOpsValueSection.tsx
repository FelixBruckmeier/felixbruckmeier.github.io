import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

/**
 * Section: The Value of ResearchOps
 * DS-conform: Uses global color + typography tokens from Tile + Tokens
 * Mit Icons im OKR-Stil
 */
export default function ResearchOpsValueSection() {
  const tiles = [
    {
      icon: "⚡",
      title: "Efficiency",
      text: "Researchers spend more time on discovery and less on logistics — delivering insights faster.",
    },
    {
      icon: "📋",
      title: "Consistency",
      text: "Every study meets the same ethical, methodological, and quality standards across teams and markets.",
    },
    {
      icon: "🎯",
      title: "Impact",
      text: "Insights are visible, trusted, and actionable — shaping product and business decisions with confidence.",
    },
  ];

  return (
    <Section id="reops-value" title="The Value of ResearchOps" spacing="lg">
      <SectionIntro>
        ResearchOps is not just about process — it’s about{" "}
        <strong>amplifying the value of research</strong>. Here’s what happens when it works:
      </SectionIntro>

      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt12)}>
        {tiles.map((item) => (
          <Tile
            key={item.title}
            variant="static"
            className={cn("h-full", spacing.p6, "flex flex-col justify-start")}
          >
            <div className="flex items-center gap-2 mb-2">
              <span>{item.icon}</span>
              <Subtitle>{item.title}</Subtitle>
            </div>
            <Body className="text-muted-foreground leading-relaxed">{item.text}</Body>
          </Tile>
        ))}
      </div>
    </Section>
  );
}
