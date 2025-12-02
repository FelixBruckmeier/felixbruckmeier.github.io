import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import CVPreview from "@/assets/visuals/cv/CVPreview";
import { spacing } from "@/lib/tokens";

export default function ProfessionalExperienceSection() {
  return (
    <Section
      id="professional-experience"
      title="Professional Experience"
      spacing="lg"
    >
      <SectionIntro>
        An overview of my professional path — leading UX research initiatives,
        building ResearchOps systems, and driving evidence-based product decisions.
      </SectionIntro>

      <CVPreview hideCTA />

      {/* spacing after content – optional */}
      <div className={spacing.mt10} />
    </Section>
  );
}
