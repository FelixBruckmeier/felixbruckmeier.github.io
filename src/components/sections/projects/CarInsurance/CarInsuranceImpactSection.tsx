import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function CarInsuranceImpactSection() {
  const impact = [
    {
      title: "−40%",
      desc: "Less friction in critical steps — measured via RITE usability rounds.",
    },
    {
      title: "↑ Confidence",
      desc: "Qualitative uplift in advisor assurance and user satisfaction.",
    },
    {
      title: "Scalable System",
      desc: "Reusable design patterns implemented across insurance modules.",
    },
  ];

  return (
    <Section id="impact" title="Impact Snapshot" spacing="xl">
      <SectionIntro>
        Through rapid iterations and close collaboration with advisors, we improved speed, trust,
        and conversation quality — setting a new design standard for insurance consultations.
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
