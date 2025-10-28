import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import Tile from "@/components/ui/Tile";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

/**
 * Section: UX Research OKRs
 * 100% DS-konform, statische Tiles, einheitliche Typografie
 */
export default function StrategicUXOKRSection() {
  const tiles = [
    {
      level: "Level 1",
      title: "Supports – Aligning with OKRs",
      text: "UX Research aligns with existing company OKRs, validating assumptions and supporting ongoing initiatives.",
      icon: "🧩",
    },
    {
      level: "Level 2",
      title: "Influences – Informing OKRs",
      text: "Research insights begin to inform goal-setting and define measurable impact, bridging user value and business metrics.",
      icon: "🎯",
    },
    {
      level: "Level 3",
      title: "Defines – Driving OKRs",
      text: "UX Research drives strategic priorities. Objectives are grounded in user evidence and organizational learning.",
      icon: "🚀",
    },
  ];

  return (
    <Section
      id="okr"
      title="UX Research OKRs — Linking Research to Business Strategy"
      spacing="lg"
    >
      <SectionIntro>
        Strategic UX Research doesn’t end with insight — it connects learning to direction.
        UX Research OKRs link research efforts directly to company strategy, ensuring that
        what teams discover also shapes what the organization pursues.
        <div className="my-6"></div>
        Instead of existing as a side activity, research becomes part of how strategic priorities
        are defined, measured, and evolved.
        <div className="my-6"></div>
        By aligning learning goals with business objectives, I turn UX Research into a steering
        mechanism — one that helps organizations see user evidence not as validation, but as
        orientation. At this level, research informs not just how we build, but why.
        <div className="my-6"></div>
        One might ask — isn’t that too good to be true?
        <div className="my-6"></div>
        And yes, UX as a leading force within business strategy doesn’t happen overnight.
        It’s a gradual, sometimes rocky journey — one that’s best understood in levels:
      </SectionIntro>

      {/* === Tile Grid === */}
      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt12)}>
        {tiles.map((item) => (
          <Tile key={item.title} variant="static" className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <span>{item.icon}</span>
              <Subtitle>{item.level}</Subtitle>
            </div>

            <Subtitle>{item.title}</Subtitle>
            <Body>{item.text}</Body>
          </Tile>
        ))}
      </div>

      {/* === Outro Text === */}
      <div className={cn(spacing.mt16)}>
        <Subtitle>From Alignment to Leadership</Subtitle>
        <Body>
          Having UX Research OKRs is good — but even better is when UX Research itself contributes
          directly to defining company OKRs. That’s when research moves beyond validation to become
          a strategic driver — ensuring that what the organization measures truly reflects what
          users value.
        </Body>
      </div>
    </Section>
  );
}
