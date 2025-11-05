// src/components/sections/projects/InsuranceBroker/brokerBLUFSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function BrokerBLUFSection() {
  const highlights = [
    {
      value: "Advisor Journey",
      label: "Mapped process",
      desc: "Visualized the full advisory process — from discovery to closing, focusing on trust, timing, and hand-offs to shape the product strategy.",
    },
    {
      value: "11 Insights",
      label: "Grounded Theory clusters",
      desc: "Extracted needs, motivations, and pain points based on contextual fieldwork following grounded theory techniques.",
    },
    {
      value: "Prioritized",
      label: "Usage requirements",
      desc: "Ranked list of broker-critical needs, defining what to address first to unlock efficiency and adoption in the following roadmap.",
    },
  ];

  return (
    <Section id="bluf" spacing="xl" title="From Fragmentation to Flow">
      <SectionIntro>
        Insurance brokers navigate complex advisory workflows shaped by personal trust, fragmented tools, and client-specific routines.
        <br />
        <br />
        Our goal was to uncover how digital solutions can meaningfully support these analog-heavy processes without disrupting the human connection at their core.
        <br />
        <br />
        <strong>My Role:</strong> UX Research — conducted <strong>contextual interviews</strong> and <strong>field observations</strong>, facilitated <strong>Grounded Theory synthesis</strong>, and prioritized broker needs to inform design and strategy.
      </SectionIntro>

      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt10)}>
        {highlights.map((item, i) => (
          <Tile key={i} variant="static">
            <Subtitle>{item.value}</Subtitle>
            <Body className="font-medium">{item.label}</Body>
            <Body className="text-sm text-muted-foreground mt-1">
              {item.desc}
            </Body>
          </Tile>
        ))}
      </div>
    </Section>
  );
}

export default BrokerBLUFSection;
