// src/components/sections/expertise/TeamLeadership/skillassessment/SkillAssessmentIntroSection.tsx
import { useState } from "react";
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Body } from "@/components/ui/Tokens";
import { cn } from "@/lib/utils";
import { spacing, colors } from "@/lib/tokens";
import SkillmapForm from "@/assets/visuals/teamleadership/skillassessment/SkillmapForm";
import SkillmapChart from "@/assets/visuals/teamleadership/skillassessment/SkillmapChart";
import SkillmapLegend from "@/assets/visuals/teamleadership/skillassessment/SkillmapLegend";

/**
 * Skill Assessment – Intro + Interactive Section
 * Vereint Introtext, Formular & Chart in einer DS-konformen Section
 */
export default function SkillAssessmentIntroSection() {
  const [mapData, setMapData] = useState<any[]>([]);

  return (
    <Section id="skill-assessment-intro" title="Assess, Reflect, Grow" spacing="lg">
      {/* --- Intro Text --- */}
      <SectionIntro>
        The Skill Assessment helps you reflect on your current expertise across UX research
        and related disciplines. It provides a structured way to evaluate both your skill level
        and the relevance of each capability to your role — supporting transparent growth
        conversations and personal development planning.
      </SectionIntro>

      <Body className={cn(colors.muted.text, spacing.mt6)}>
        The method is based on the ResearchOps Community’s{" "}
        <strong>Skills & Themes Inventory</strong>, a framework designed to strengthen shared
        understanding and maturity in research operations.
      </Body>

      {/* --- Skill Form Section --- */}
      <div className={cn(spacing.mt12)}>
        <SkillmapForm onDataChange={setMapData} />
      </div>

      {/* --- Visualization --- */}
      {mapData.length > 0 && (
        <div className={cn("space-y-8", spacing.mt12)}>
          <SkillmapChart data={mapData} />
          <SkillmapLegend />
        </div>
      )}
    </Section>
  );
}
