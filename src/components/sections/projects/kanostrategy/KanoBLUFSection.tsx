// src/components/sections/projects/kanostrategy/KanoBLUFSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function KanoBLUFSection() {
  const impact = [
    {
      value: "16",
      label: "Features evaluated",
      desc: "Across multiple service categories",
    },
    {
      value: "↑ Confidence",
      label: "Stakeholder alignment",
      desc: "Shared understanding of user value and priorities",
    },
    {
      value: "→ Roadmap",
      label: "Strategy outcome",
      desc: "Directly linked to product prioritization",
    },
  ];

  return (
    <Section id="bluf" spacing="xl" title="From ideas to impact — the Kano Strategy">
      <SectionIntro>
        The Product Team wanted to strengthen customer loyalty through the app by introducing new
        services and features. However, from the vast pool of ideas, it was unclear which would truly
        matter from the customer's perspective.
        <br />
        <br />
        The Kano model ranks these features based on their satisfaction-driving potential — providing
        a framework that is both <strong>pragmatic and robust</strong>. The resulting prioritization,
        grounded in <strong>Kano categories</strong>, translates directly into a
        <strong> customer-centric Product Roadmap</strong>.
        <br />
        <br />
        <strong>My Role:</strong> UX Research &amp; Strategy — led the stakeholder workshop, designed
        the Kano survey, analyzed quantitative results, and delivered a
        <strong> customer-driven Product Roadmap</strong>.
      </SectionIntro>

      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt10)}>
        {impact.map((item, i) => (
          <Tile key={i} variant="static">
            <Subtitle>{item.value}</Subtitle>
            <Body className="font-medium">{item.label}</Body>
            <Body className="text-sm text-muted-foreground mt-1">{item.desc}</Body>
          </Tile>
        ))}
      </div>
    </Section>
  );
}
