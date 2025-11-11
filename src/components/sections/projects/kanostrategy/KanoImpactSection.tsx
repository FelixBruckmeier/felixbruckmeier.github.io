import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function KanoImpactSection() {
  const impact = [
    {
      title: "M > O > A > I",
      desc: "A clear, evidence-based hierarchy for feature prioritization.",
    },
    {
      title: "Customer-Centric Roadmap",
      desc: "Shifted internal discussion from assumptions to measurable user value.",
    },
    {
      title: "Strategic Confidence",
      desc: "Data-driven clarity guided investment decisions and alignment.",
    },
  ];

  return (
    <Section id="impact" title="Impact Snapshot" spacing="xl">
      <SectionIntro>
        The Kano study delivered a quantifiable foundation for product strategy —
        identifying which features truly matter to users, and which don’t.
      </SectionIntro>

      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt12)}>
        {impact.map((item, i) => (
          <Tile key={i} variant="static">
            <Subtitle>{item.title}</Subtitle>
            <Body className="text-muted-foreground mt-2">{item.desc}</Body>
          </Tile>
        ))}
      </div>
    </Section>
  );
}
