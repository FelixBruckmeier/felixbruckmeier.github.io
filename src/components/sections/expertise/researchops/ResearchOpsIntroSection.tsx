// src/components/sections/expertise/researchops/ResearchOpsIntroSection.tsx
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
        Every team wants to make evidence-based decisions — from Product and UX to Marketing,
        Analytics, and Customer Service. Yet without shared systems, insights stay scattered,
        studies get repeated, and intuition fills the gaps.
        <br />
        <br />
        I’ve seen this slow down even the best organizations: knowledge lives in silos, and no one
        sees the full picture. Research happens everywhere — but without coordination, its impact
        fades across teams, channels, and strategy.
        <br />
        <br />
        <strong>ResearchOps</strong> changes that — creating the structure and culture that connect
        people, data, and decisions. It turns fragmented research into a cohesive, insight-driven
        ecosystem that powers clarity, alignment, and smarter outcomes across the business.
      </SectionIntro>
    </Section>
  );
}
