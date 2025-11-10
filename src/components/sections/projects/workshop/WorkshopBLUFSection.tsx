// src/components/sections/projects/workshop/WorkshopBLUFSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { SectionHeading, Body, Subtitle } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function WorkshopBLUFSection() {
  const impact = [
    {
      value: "↑ Confidence",
      label: "Team alignment & ownership",
      desc: "Shared understanding of maturity and collaboration goals.",
    },
    {
      value: "56",
      label: "Ideas generated",
      desc: "Concrete, actionable solutions co-created by the UX Design team.",
    },
    {
      value: "9",
      label: "Initiatives prioritized",
      desc: "Selected for roadmap implementation and long-term impact.",
    },
  ];

  return (
    <Section
      id="bluf"
      spacing="xl"
      title="From insight to alignment — transforming UX Research Maturity together"
    >
      <SectionIntro>
        <Body>
          The <strong>UX Research Maturity Workshop</strong> transformed
          assessment insights into <strong>collective action</strong>. Through{" "}
          <strong>co-creation, prioritization,</strong> and{" "}
          <strong>alignment</strong>, the UX Design team shaped a shared roadmap
          for growing research maturity across the organization. What began as
          scattered observations evolved into a{" "}
          <strong>united, measurable, and people-driven strategy</strong> for
          progress.
        </Body>

        <div className={cn("space-y-4", spacing.mt10)}>
          <SectionHeading>Background</SectionHeading>
          <Body>
            Before the workshop, I conducted a comprehensive{" "}
            <strong>UX Research Maturity assessment</strong> across multiple
            teams and departments. The findings highlighted{" "}
            <strong>strong individual capabilities</strong> — but also{" "}
            <strong>fragmentation</strong> in processes, ownership, and
            collaboration. Each researcher and designer was doing valuable work,
            but without a shared <strong>framework</strong> or{" "}
            <strong>language</strong> to connect their efforts.
          </Body>
          <Body>
            To build meaningful progress, the team needed a{" "}
            <strong>structured moment to step back</strong>, reflect together,
            and co-design their next steps. The one-day workshop provided
            exactly that: a <strong>collaborative space</strong> for turning
            findings into <strong>actionable initiatives</strong> that everyone
            could stand behind.
          </Body>
        </div>

        <div className={cn("space-y-4", spacing.mt10)}>
          <SectionHeading>Why it mattered</SectionHeading>
          <Body>
            The workshop reframed maturity as a{" "}
            <strong>collective journey</strong> rather than an external
            evaluation. It shifted the focus from{" "}
            <strong>“where we stand”</strong> to{" "}
            <strong>“where we go next”</strong> — giving the team{" "}
            <strong>clarity, confidence, and shared momentum</strong>.
            Conversations that once felt abstract turned into{" "}
            <strong>tangible goals</strong> and <strong>concrete ownership</strong>.
          </Body>
          <Body>
            It also fostered <strong>empathy</strong> between design and
            research roles, showing how{" "}
            <strong>collaboration, governance, and communication</strong> shape
            the perception and impact of UX Research. Most importantly, it made
            maturity feel <strong>achievable</strong>.          </Body>
        </div>
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
