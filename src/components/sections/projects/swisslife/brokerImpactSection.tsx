// src/components/sections/projects/InsuranceBroker/brokerImpactSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function BrokerImpactSection() {
  const wins = [
    {
      k: "Clarity at decision points",
      d: "Eligibility, prerequisites, and ‘what’s next’ clarified where trust is at stake.",
    },
    {
      k: "Less duplicate inputs",
      d: "Lean path for recurring tasks; data reuse guided by broker flow.",
    },
    {
      k: "Common language",
      d: "Terminology aligned to how brokers explain risk, value, and fit.",
    },
  ];

  return (
    <Section id="impact" spacing="lg" title="Impact & what changed">
      <SectionIntro>
        The discovery didn’t stop at insights — it changed decisions. We turned broker-validated
        needs into delivery guardrails that keep teams aligned while they ship.
      </SectionIntro>

      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt10)}>
        {wins.map((w, i) => (
          <Tile key={i} variant="static">
            <Subtitle>{w.k}</Subtitle>
            <Body className="text-muted-foreground mt-1">{w.d}</Body>
          </Tile>
        ))}
      </div>
    </Section>
  );
}

