// src/components/sections/projects/ZooplusPricing/PricingBLUFSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function PricingBLUFSection() {
  const impact = [
    {
      value: "↑ Clarity",
      label: "Pricing perception",
      desc: "Users better understood the relation between prices and offers",
    },
    {
      value: "−35%",
      label: "Cognitive effort",
      desc: "Measured reduction in time to interpret pricing elements",
    },
    {
      value: "↑ Trust",
      label: "Brand sentiment",
      desc: "More positive perception across all pricing touchpoints",
    },
  ];

  return (
    <Section id="bluf" spacing="xl" title="From hesitation to trust">
      <SectionIntro>
        As part of the <strong>zooplus rebranding and homepage redesign</strong>,
        the pricing component was re-evaluated to ensure that price presentation —
        including discounts, color, and strike prices — is both visually consistent
        and cognitively clear across pages and components.
        <br />
        <br />
        <strong>My Role:</strong> UX Research Lead — planned and conducted
        <strong> remote moderated usability tests</strong> (20 participants),
        analyzed behavioral and emotional responses, and derived actionable
        design recommendations supported by <strong>VisAWI aesthetic evaluation</strong>.
      </SectionIntro>

      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt10)}>
        {impact.map((item, i) => (
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
