// src/components/sections/expertise/uxstrategy/Prioritization.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

// ✅ nutzt deine vorhandene Matrix-Komponente
import ResearchPrioritizationMatrix from "@/assets/visuals/uxstrategy/ResearchPrioritizationMatrix";

/**
 * Section: UX Research Prioritization
 * Uses the existing 3×3 (or 2×2) matrix visual and aligns explanatory text below it.
 */

export default function Prioritization() {
  return (
    <Section id="research-prioritization" title="UX Research Prioritization" spacing="lg">
      {/* --- Intro text --- */}
      <SectionIntro>
        Not every research question deserves the same depth.  
        Prioritization balances <strong>knowledge about the customer</strong> and  
        <strong>risk of getting it wrong</strong>.
      </SectionIntro>

      {/* --- Centered matrix visual --- */}
      <div className={cn("flex justify-center mt-12 mb-8")}>
        <div className="w-full max-w-4xl flex justify-center">
          <ResearchPrioritizationMatrix />
        </div>
      </div>

      {/* --- Explanatory text (below, left-aligned) --- */}
      <div
        className={cn(
          layout.container,
          "max-w-3xl mx-auto text-left",
          spacing.mt8
        )}
      >
        <Body>
          I apply a <strong>prioritization framework</strong> that maps initiatives 
          along two axes: <em>risk of getting it wrong</em> and 
          <em>knowledge about the user</em>.  
          <br />
          <br />
          <strong>High risk & low knowledge</strong> areas require 
          foundational research to uncover user context and reduce uncertainty.  
          <br />
          <strong>High knowledge & low risk</strong> areas benefit from 
          lightweight validation and optimization.  
          <br />
          <br />
          This approach ensures research investment scales with 
          strategic impact — aligning depth of inquiry with 
          decision confidence and business value.
        </Body>
      </div>
    </Section>
  );
}
