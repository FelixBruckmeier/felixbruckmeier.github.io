// src/pages/expertise/TeamLeadership/index.tsx
import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/expertise/teamleadership/team.jpg";
import {
  TeamLeadershipPhilosophySection,
  TeamLeadershipRolesSection,
  TeamLeadershipRoleProfileSection,
  TeamLeadershipSkillsSection,
  TeamLeadershipImpactSection,
} from "@/components/sections/expertise/TeamLeadership";

/**
 * Team Leadership & Mentoring
 * Storytelling sequence:
 * 1️⃣ Philosophy → 2️⃣ Roles → 3️⃣ My Role Profile → 4️⃣ Skills → 5️⃣ Impact
 */
export default function TeamLeadershipPage() {
  return (
    <PageLayout
      title="Team Leadership & Mentoring"
      intro="Building high-performing UX teams through clarity, coaching, and a culture of trust."
      headerImage={headerImg} // ✅ Hintergrundbild eingebunden
      width="wide" // ✅ sorgt für denselben Container wie auf Home
    >
      <TeamLeadershipPhilosophySection />
      <TeamLeadershipRolesSection />
      <TeamLeadershipRoleProfileSection /> {/* 🕸️ Spider Chart + Text separat */}
      <TeamLeadershipSkillsSection />
      <TeamLeadershipImpactSection />
    </PageLayout>
  );
}
