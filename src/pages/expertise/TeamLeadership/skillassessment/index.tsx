// src/pages/expertise/TeamLeadership/skillassessment/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

import {
  SkillAssessmentIntroSection,
  SkillAssessmentSummarySection,
} from "@/components/sections/expertise/TeamLeadership/skillassessment";

/**
 * Skill Assessment Page
 * - Einheitlich mit allen anderen Expertise-Seiten
 * - Mit SEO-Integration über SEOPage + JSON-LD
 */
export default function SkillAssessmentPage() {
  return (
    <PageLayout
      title="Skill Assessment Center"
      intro="Reflect on your strengths, visualize growth paths, and understand your team's collective skill profile — not for competition, but for clarity and learning."
    >

      {/* ⭐ SEO – indexiert, sichtbar */}
      <SEOPage page="expertise_teamLeadership_skillassessment" />


      <SkillAssessmentIntroSection />
      <SkillAssessmentSummarySection />
    </PageLayout>
  );
}
