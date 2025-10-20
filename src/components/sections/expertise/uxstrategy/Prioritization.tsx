import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

// ✅ nutzt deine vorhandene Matrix-Komponente
import ResearchPrioritizationMatrix from "@/assets/visuals/uxstrategy/ResearchPrioritizationMatrix";

/**
 * Section: UX Research Prioritization
 * Shows matrix and explanatory framework intro.
 */

export default function Prioritization() {
  return (
    <Section id="research-prioritization" title="UX Research Prioritization" spacing="lg">
      {/* --- Intro text --- */}
      <SectionIntro>
        Modern product teams face the constant challenge of balancing speed with insight.{" "}
        This framework helps decide <strong>where to invest research effort</strong> — and when it’s acceptable to move fast and learn later.{" "}
        It maps two dimensions that drive research prioritization:
        <br />
        • <strong>Problem clarity</strong> — how well we understand what users need
        <br />
        • <strong>Risk of getting it wrong</strong> — how costly a mistake would be
        <br />
        <br />
        As a UX Researcher, my role is to <strong>help teams allocate research resources wisely</strong>, matching method depth to context.{" "}
        This ensures that every research activity delivers the right balance between learning value, time, and risk mitigation.
      </SectionIntro>

      {/* --- Centered matrix visual --- */}
      <div className={cn("flex justify-center mt-12 mb-8")}>
        <div className="w-full max-w-none flex justify-center">
          <ResearchPrioritizationMatrix />
        </div>
      </div>
    </Section>
  );
}
