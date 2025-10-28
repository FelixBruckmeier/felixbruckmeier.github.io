import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";

/**
 * ResearchOps Intro Section
 * Storytelling-based intro: context, problem, and transformation.
 * DS-conform: unified typography, spacing, and color through SectionIntro.
 */
export default function ResearchOpsIntroSection() {
  return (
    <Section
      id="why-researchops"
      title="When Research Doesn’t Scale"
      spacing="lg"
      borderTop={false}
    >
      <SectionIntro>
       Every team wants to make evidence-based decisions — from Product and UX to Marketing, Analytics, and Customer Service. Yet without shared systems, insights remain scattered, studies are repeated, and intuition fills the gaps.
<br />
        <br />
I’ve seen this in many forms: knowledge locked in silos, with no one seeing the full picture. Research happens everywhere — but without coordination, its impact fades across teams, channels, and strategies. Teams invest in expensive, sometimes redundant tools, yet results — and even usage — often go unshared.
<br />
        <br />
 <strong>ResearchOps </strong> changes that. It builds the structure and culture that connect people, data, and decisions. It transforms fragmented efforts into a cohesive, insight-driven ecosystem that drives clarity, alignment, and smarter outcomes across the organization.
      </SectionIntro>
    </Section>
  );
}
