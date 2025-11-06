import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import ResearchInPD from "@/assets/visuals/uxstrategy/ResearchinPD";

/**
 * Section: From Discovery to Delivery
 * DS-konform — einheitliche Typografie, spacing und tile padding
 * Mit Icons im OKR-Stil
 */
export default function DiscoveryDelivery() {
  const tiles = [
    {
      icon: "🔍",
      title: "Discovery",
      text: "Exploring user needs, motivations, and market opportunities through contextual inquiry and generative research. Insights inform early strategy and opportunity framing.",
    },
    {
      icon: "🧪",
      title: "Prototyping",
      text: "Translating findings into testable concepts. I enable teams to validate assumptions quickly and iterate towards solutions that balance impact, feasibility, and usability.",
    },
    {
      icon: "📈",
      title: "Optimize",
      text: "Embedding measurement and continuous evaluation into the product loop. Research evolves from validation to a self-sustaining learning system.",
    },
  ];

  return (
    <Section
      id="discovery-delivery"
      title="2. From Discovery to Delivery — Making Research Continuous"
      spacing="lg"
    >
      <SectionIntro>
        UX is not static — it’s a continuous learning process.
        I design research systems that connect discovery, prototyping, and optimization.
        Whether exploring unmet needs, testing prototypes, or measuring live experiences,
        I ensure that every phase of the product lifecycle builds on evidence, not assumption.
      </SectionIntro>

      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt8)}>
        {tiles.map((item) => (
          <Tile
            key={item.title}
            variant="static"
            className={cn(
              spacing.p6,
              "flex flex-col justify-start text-left rounded-2xl shadow-sm"
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              <span>{item.icon}</span>
              <Subtitle>{item.title}</Subtitle>
            </div>
            <Body className="leading-relaxed">{item.text}</Body>
          </Tile>
        ))}
      </div>

      <div className={cn("w-full flex justify-center", spacing.mt20)}>
        <div className="w-full max-w-6xl">
          <ResearchInPD />
        </div>
      </div>
    </Section>
  );
}
