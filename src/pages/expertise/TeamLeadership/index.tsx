import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage"; 

import headerImg from "@/assets/images/expertise/teamleadership/team.jpg";

import {
  TeamLeadershipPhilosophySection,
  TeamLeadershipRoleProfileSection,
  TeamLeadershipSkillsSection,
} from "@/components/sections/expertise/TeamLeadership";

import UXRolesExplorer from "@/components/sections/expertise/TeamLeadership/UXRolesExplorer";

export default function TeamLeadershipPage() {
  return (
    <PageLayout
      title="Team Leadership & Mentoring"
      intro="Building high-performing UX teams."
      headerImage={headerImg}
      width="wide"
    >

      <SEOPage page="expertise_teamLeadership" />

      <TeamLeadershipPhilosophySection />
      <TeamLeadershipSkillsSection />
      <UXRolesExplorer />
      <TeamLeadershipRoleProfileSection />
    </PageLayout>
  );
}
