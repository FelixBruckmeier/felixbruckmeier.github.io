// src/pages/expertise/TeamLeadership/index.tsx
import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/expertise/teamleadership/team.jpg";
import {
  TeamLeadershipPhilosophySection,
  TeamLeadershipRoleProfileSection,
  TeamLeadershipSkillsSection,
} from "@/components/sections/expertise/TeamLeadership";
import UXRolesExplorer from "@/components/sections/expertise/TeamLeadership/UXRolesExplorer";

/**
 * Team Leadership & Mentoring
 * Storytelling sequence:
 * 1️⃣ Philosophy → 2️⃣ Roles → 3️⃣ UX Roles Explorer → 4️⃣ My Role Profile → 5️⃣ Skills → 6️⃣ Impact
 */
export default function TeamLeadershipPage() {
  return (
    <PageLayout
      title="Team Leadership & Mentoring"
      intro="Building high-performing UX teams through clarity, coaching, and a culture of trust."
      headerImage={headerImg}
      width="wide"
    >
      <TeamLeadershipPhilosophySection />
<TeamLeadershipSkillsSection />
      <UXRolesExplorer />
      <TeamLeadershipRoleProfileSection />
    </PageLayout>
  );
}
