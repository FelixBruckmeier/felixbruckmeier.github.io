import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import VennDiagram from "@/assets/visuals/uxstrategy/VennDiagram";

export default function VisionAlignment() {
  return (
    <Section id="vision-alignment" title="Vision & Alignment" spacing="lg">
      <SectionIntro>
        If you will, user experience is what we’re able to offer when user needs, technical feasibility, and business goals are carefully aligned.
As a UX Research Lead, I support this process on a strategic level — helping teams find common ground for better decisions.
      </SectionIntro>

      <div className={cn("flex justify-center", spacing.mt12)}>
        <VennDiagram />
      </div>
    </Section>
  );
}
