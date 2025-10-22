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
    <Section id="research-prioritization" title="3. UX Research Prioritization" spacing="lg">
      {/* --- Intro text --- */}
      <SectionIntro>
        No team has infinite time. UX Strategy means also knowing when to go deep and when to move fast.
I guide teams in prioritizing research based on two key dimensions:

Problem clarity — how well we understand user needs

Risk of getting it wrong — how costly a wrong decision would be

This ensures that every research effort matches context, balancing impact, time, and confidence.
         <br />It maps two dimensions that drive research prioritization: <br />
        <br />
        • <strong>Problem clarity</strong> — how well we understand what users need
        <br />
        • <strong>Risk of getting it wrong</strong> — how costly a mistake would be
        <br />
        <br />
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
