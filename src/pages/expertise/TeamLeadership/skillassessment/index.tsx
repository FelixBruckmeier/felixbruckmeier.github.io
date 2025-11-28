import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

import {
  SkillAssessmentIntroSection,
  SkillAssessmentSummarySection,
} from "@/components/sections/expertise/TeamLeadership/skillassessment";

export default function SkillAssessmentPage() {
  return (
    <PageLayout
      title="Skill Assessment Center"
      intro="Reflect on strengths and team capabilities."
    >

      <SEOPage page="expertise_teamLeadership_skillassessment" />

      <SkillAssessmentIntroSection />
      <SkillAssessmentSummarySection />
    </PageLayout>
  );
}
