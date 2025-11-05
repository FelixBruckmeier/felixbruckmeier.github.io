import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import CVPreview from "@/assets/visuals/cv/CVPreview";
import Button from "@/components/ui/Button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
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

      {/* === Download CV Button === */}
      <div className={cn("flex justify-center", spacing.mt10)}>
        <Button
          variant="secondary"
          size="lg"
          href="/downloads/CV_Felix_Bruckmeier.pdf"
          download="Felix_Bruckmeier_CV.pdf"
        >
          <Download className="h-5 w-5 mr-2" />
          Download CV (PDF)
        </Button>
      </div>
    </Section>
  );
}
