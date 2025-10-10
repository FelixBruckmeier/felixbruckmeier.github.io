import PageLayout from "@/components/layout/PageLayout";
import {
  SkillAssessmentIntroSection,
  SkillAssessmentSummarySection,
} from "@/components/sections/expertise/TeamLeadership/skillassessment";

/**
 * Skill Assessment Page
 * - Einheitlich mit allen anderen Expertise-Seiten
 * - Nutzt PageLayout für Titel & Introtext
 * - Sections sind DS-konform
 */
export default function SkillAssessmentPage() {
  return (
    <PageLayout
      title="Skill Assessment Center"
      intro="Reflect on your strengths, visualize growth paths, and understand your team's collective skill profile — not for competition, but for clarity and learning."
    >
      <SkillAssessmentIntroSection />
      <SkillAssessmentSummarySection />
    </PageLayout>
  );
}
