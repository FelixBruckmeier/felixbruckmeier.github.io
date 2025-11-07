import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

// ✅ nutzt deine vorhandene Matrix-Komponente
import ResearchPrioritizationMatrix from "@/assets/visuals/uxstrategy/ResearchPrioritizationMatrix";

/**
 * Section: UX Research Prioritization
 * Storytelling + klare Framework-Einführung
 */
export default function Prioritization() {
  return (
    <Section
      id="research-prioritization"
      title="3. UX Research Prioritization"
      spacing="lg"
    >
      {/* --- Intro text --- */}
      <SectionIntro>
        Resource efficiency is a fundamental principle of sound business.
        No team has infinite time — which makes it essential to know{" "}
        <strong>when to go deep and when to move fast</strong>.
        <br />
        <br />
        I help teams prioritize their research by balancing effort and impact —
        deciding where deep exploration creates the most value and where quick
        validation is enough.
        <br />
        <br />
        This framework maps two key dimensions that guide every research decision:
        <br />
        <br />
        • <strong>Problem clarity</strong> — how well we understand what users need
        <br />
        • <strong>Risk of getting it wrong</strong> — how costly a wrong decision
        would be
        <br />
        <br />
        By combining these two perspectives, teams can match each research activity
        to its context — finding the right balance between{" "}
        <strong>impact, time, and confidence</strong>.
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

