// src/components/sections/projects/CarInsurance/CarInsuranceBLUFSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function CarInsuranceBLUFSection() {
  const impact = [
    {
      value: "−40%",
      label: "Friction in key steps",
      desc: "Measured through rapid usability iterations",
    },
    {
      value: "↑ Confidence",
      label: "Advisor sentiment",
      desc: "Qualitative shifts post-rollout",
    },
    {
      value: "Reusable",
      label: "Design patterns",
      desc: "Guidelines adopted across modules",
    },
  ];

  return (
    <Section id="bluf" spacing="xl" title="Turning apologies into confidence">
      <SectionIntro>
        ADAC’s in-branch advisors use a digital tool to guide customers through complex car insurance options.
        Over the years, that tool had grown heavy — slowing down conversations and eroding trust.
        <br />
        <br />
        We redesigned the experience around clarity, timing, and reassurance — enabling advisors to focus on their customers, not their tools.
        <br />
        <br />
        <strong>My Role:</strong> UX Research — conducted <strong>contextual interviews</strong> in simulated advisory
        sessions, facilitated <strong>journey mapping</strong> and <strong>Grounded Theory synthesis</strong>, and led
        <strong> stakeholder workshops</strong> to align design and business priorities.
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
