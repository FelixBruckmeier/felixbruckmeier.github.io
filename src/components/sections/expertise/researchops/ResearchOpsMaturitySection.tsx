import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import ResearchOpsMaturityTimeline from "@/assets/visuals/researchops/ResearchOpsMaturityTimeline";

/**
 * ResearchOps Maturity Section
 * ------------------------------------------------------------
 * ✅ Full-width layout, DS compliant
 * ✅ Removed closing body text (per request)
 * ✅ Consistent vertical rhythm between timeline & next section
 */
export default function ResearchOpsMaturitySection() {
  return (
    <Section id="reops-maturity" title="Maturity & Growth" spacing="lg" fullWidth>
      {/* --- Intro text --- */}
      <SectionIntro>
        ResearchOps maturity grows as organizations evolve from uncoordinated efforts
        to a well-orchestrated ecosystem where insights drive confident decisions.
      </SectionIntro>

      {/* --- Full-width timeline visualization --- */}
      <div className={cn("w-full", spacing.mt12, spacing.mb20)}>
        <ResearchOpsMaturityTimeline />
      </div>
    </Section>
  );
}
