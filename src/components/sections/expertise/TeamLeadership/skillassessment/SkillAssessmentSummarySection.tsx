import { Section } from "@/components/ui";
import { Body } from "@/components/ui/Tokens";
import { cn } from "@/lib/utils";
import { colors, spacing } from "@/lib/tokens";

/**
 * SkillAssessmentSummarySection
 * ------------------------------
 * DS-conform closing section for reflection & purpose
 */

export default function SkillAssessmentSummarySection() {
  return (
    <Section id="skill-assessment-summary" borderTop spacing="md">
      <Body className={cn(colors.muted.text, "max-w-3xl mx-auto text-center", spacing.mt6)}>
        Skill Assessment isn’t about evaluation — it’s about growth.
        Use it to visualize your trajectory, identify focus areas, and align your
        professional development with team and business needs.
      </Body>
    </Section>
  );
}
