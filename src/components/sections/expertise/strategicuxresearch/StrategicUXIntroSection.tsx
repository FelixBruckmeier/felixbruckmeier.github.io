// src/components/sections/expertise/strategicux/StrategicUXIntroSection.tsx
import { Section } from "@/components/ui";
import { Body } from "@/components/ui/Tokens";
import { colors, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function StrategicUXIntroSection() {
  return (
    <Section
      id="intro"
      title="Strategic UX Research — How I Turn UX Strategy into Action"
      spacing="lg"
    >
      <div className={cn("flex flex-col gap-6")}>
        <Body className="text-foreground text-lg font-semibold">
          Turning UX Research from isolated insights into a system that drives clarity,
          alignment, and confident decisions.
        </Body>

        <Body className={cn(colors.muted.text, spacing.mt4, "max-w-prose")}>
          Where UX Strategy connects vision, process, and prioritization, Strategic UX Research
          brings it to life — operationalizing clarity, iteration, and measurable impact across
          the entire product lifecycle. Without a strategic approach, research remains tactical
          and isolated. By linking insights to company OKRs, research becomes a driver of
          alignment, innovation, and growth.
        </Body>
      </div>
    </Section>
  );
}
