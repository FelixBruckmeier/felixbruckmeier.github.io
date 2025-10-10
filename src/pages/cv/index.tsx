// src/pages/cv/index.tsx
import PageLayout from "@/components/layout/PageLayout";
import CVIntroSection from "@/components/sections/cv/CVIntroSection";
import ProfessionalExperienceSection from "@/components/sections/cv/ProfessionalExperienceSection";
import PersonalExperienceSection from "@/components/sections/cv/PersonalExperienceSection";

export default function CVPage() {
  return (
    <PageLayout
      title="Curriculum Vitae"
      intro="Highlights of my professional background and foundational experience."
    >
      <CVIntroSection />
      <ProfessionalExperienceSection />
      <PersonalExperienceSection />
    </PageLayout>
  );
}
