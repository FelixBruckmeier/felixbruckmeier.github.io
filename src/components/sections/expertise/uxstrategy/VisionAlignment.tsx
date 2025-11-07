import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import VennDiagram from "@/assets/visuals/uxstrategy/VennDiagram";

export default function VisionAlignment() {
  return (
    <Section id="vision-alignment" title="1. Vision & Alignment — Creating the Big Picture" spacing="lg">
     <SectionIntro>
  Every strategy begins with alignment. But alignment doesn’t just happen — it’s
  built through <strong>communication</strong>.
  <br /><br />
  In most companies, <strong>business</strong> and <strong>technology</strong> speak their own
  languages, while the <strong>user’s voice</strong> often goes unheard.
  <strong> As UX professionals, we become that voice</strong> — translating needs into
  stories that make sense to both sides.
  <br /><br />
  And when those stories connect, something powerful happens:
  <strong> teams start moving in the same direction</strong>, guided by a shared,
  <strong> user-centered vision.</strong>
</SectionIntro>


      <div className={cn("flex justify-center", spacing.mt12)}>
        <VennDiagram />
      </div>
    </Section>
  );
}
