import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { cn } from "@/lib/utils";
import { spacing, layout, colors } from "@/lib/tokens";
import { Body, Subtitle } from "@/components/ui/Tokens";
import HeartFramework from "@/assets/visuals/impactmeasurement/HeartFramework";

/**
 * ImpactMeasurementHeartSection
 * -----------------------------
 * Focused on conceptual framework (Google HEART).
 * DS-conform and management-focused.
 */

export default function ImpactMeasurementHeartSection() {
  return (
    <Section
      id="impact-heart"
      title="Measuring UX Outcomes – The HEART Framework"
      spacing="md"
    >
      {/* Intro text */}
      <SectionIntro className="max-w-3xl leading-relaxed text-lg">
        In many organizations, only what can be measured is considered valuable.
        That mindset systematically disadvantages user experience — because
        trust, satisfaction, and long-term engagement are rarely captured in
        standard KPIs.
      </SectionIntro>

      <Body className={cn(colors.muted.text, "max-w-3xl", spacing.mt6)}>
        As a <strong>UX Research Lead</strong>, I address this gap by
        implementing the <strong>Google HEART Framework</strong> — a structured
        model that translates user experience into measurable,
        management-relevant outcomes.
      </Body>

      {/* Visual */}
      <div className={cn("flex justify-center", spacing.mt10, spacing.mb12)}>
        <HeartFramework />
      </div>

      {/* Dimension description */}
      <Body className={cn("max-w-3xl", spacing.mb8, "leading-relaxed")}>
        The framework breaks UX into five key dimensions:
      </Body>

      <div
        className={cn(
          layout.flexCol,
          spacing.stackSm,
          "max-w-3xl text-lg leading-relaxed"
        )}
      >
        <p>
          <strong>Happiness</strong> – user satisfaction and perceived value
        </p>
        <p>
          <strong>Engagement</strong> – depth and frequency of interaction
        </p>
        <p>
          <strong>Adoption</strong> – onboarding and activation of new users
        </p>
        <p>
          <strong>Retention</strong> – long-term loyalty and continued usage
        </p>
        <p>
          <strong>Task Success</strong> – efficiency and goal completion
        </p>
      </div>

      <Body className={cn(colors.muted.text, "max-w-3xl", spacing.mt10)}>
        For each dimension, I work with cross-functional teams to define{" "}
        <strong>Goals → Signals → Metrics</strong>. This process translates broad
        ambitions into measurable outcomes. For example:
      </Body>

      <Body className={cn("max-w-3xl italic", spacing.mt4)}>
        <strong>Goal:</strong> Improve task success in the onboarding flow
        <br />
        <strong>Signal:</strong> Fewer users drop off before completing the first setup
        <br />
        <strong>Metric:</strong> Reduce onboarding drop-off rate from 30 % to 15 % within one quarter
      </Body>

      <Body className={cn(colors.muted.text, "max-w-3xl", spacing.mt10)}>
        By standardizing these definitions across teams, UX becomes part of the
        organization’s <strong>performance logic</strong> — measurable,
        comparable, and aligned with product and business strategy.
      </Body>

      <Body className={cn(colors.muted.text, "max-w-3xl", spacing.mt6)}>
        This framework enables leadership to see UX not as an aesthetic
        investment, but as a{" "}
        <strong>strategic indicator of sustainable value creation</strong>,
        connecting qualitative insights with quantitative validation.
      </Body>
    </Section>
  );
}
