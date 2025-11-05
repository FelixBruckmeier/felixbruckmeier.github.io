import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";

export function PricingImpactSection() {
  return (
    <Section id="impact" spacing="xl" title="Impact and Learnings">
      <SectionIntro>
        The redesigned pricing components led to a measurable increase in
        <strong> user comprehension</strong> and <strong>perceived fairness</strong>.
        Key design patterns were integrated into the global design system,
        ensuring consistency across homepage, PLP, and PDP.
        <br />
        <br />
        Follow-up testing confirmed sustained <strong>trust and conversion</strong> improvements,
        validating that pricing transparency directly influences
        <strong> brand credibility</strong> in e-commerce.
      </SectionIntro>
    </Section>
  );
}
