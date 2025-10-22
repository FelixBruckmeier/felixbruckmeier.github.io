import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import VennDiagram from "@/assets/visuals/uxstrategy/VennDiagram";

export default function VisionAlignment() {
  return (
    <Section id="vision-alignment" title="1. Vision & Alignment — Creating the Big Picture" spacing="lg">
      <SectionIntro>
       Every strategy begins with alignment.
I help teams to connect user needs, technical feasibility, and business goals — building a shared understanding of what value means for both users and the organization.
I turn fragmented perspectives into a common narrative that guides product vision and strategic decisions.
      </SectionIntro>

      <div className={cn("flex justify-center", spacing.mt12)}>
        <VennDiagram />
      </div>
    </Section>
  );
}
