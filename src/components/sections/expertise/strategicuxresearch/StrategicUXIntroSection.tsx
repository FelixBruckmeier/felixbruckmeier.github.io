import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Body } from "@/components/ui/Tokens";
import { colors, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function StrategicUXIntroSection() {
  return (
    <Section id="intro" title="Why Strategic UX Research" spacing="lg">
      <SectionIntro>
        Strategic UX Research goes beyond usability studies — it connects research to business
        outcomes, guiding teams to make confident, user-centered, and impactful decisions.
      </SectionIntro>

      <Body className={cn(colors.muted.text, spacing.mt6)}>
        Without a strategic approach, research remains tactical and isolated. By linking insights
        to company OKRs, research becomes a driver of alignment, innovation, and growth.
      </Body>
    </Section>
  );
}
