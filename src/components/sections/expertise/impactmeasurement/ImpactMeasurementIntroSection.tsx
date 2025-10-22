// src/components/sections/expertise/impactmeasurement/ImpactMeasurementIntroSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Body } from "@/components/ui/Tokens";
import { cn } from "@/lib/utils";
import { colors, spacing } from "@/lib/tokens";

/**
 * ImpactMeasurementIntroSection
 * ------------------------------
 * DS-konformer Einstieg: klare Typografie, saubere Abstände,
 * einheitliche Farb- und Layoutstruktur.
 */
export default function ImpactMeasurementIntroSection() {
  return (
    <Section id="impact-intro" title="Impact Measurement" spacing="lg">
      {/* Intro-Text */}
      <SectionIntro className="max-w-3xl leading-relaxed text-lg">
        Measuring and proving the business value of UX — because user experience is not a cost
        center, it’s a value driver.
      </SectionIntro>

      {/* Fließtext */}
      <Body className={cn(colors.muted.text, spacing.mt6, "max-w-3xl")}>
        Many organizations want to invest more in UX but struggle to justify resources.
        I help connect user experience improvements with measurable business and organizational
        outcomes — from reduced churn and higher CLTV to faster decision-making through better research.
      </Body>
    </Section>
  );
}
