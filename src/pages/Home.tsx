// src/pages/Home.tsx
import PageLayout from "@/components/layout/PageLayout";

// 🔹 Startseiten-Sections
import {
  AboutSection,
  ExpertiseSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections/home";

// 🔹 KPI-Section
import MetricsSection from "@/components/sections/home/MetricsSection";

export default function Home() {
  return (
    <PageLayout>
      {/* ===== About Section (Intro mit Portrait + Buttons) ===== */}
      <AboutSection />

      {/* ===== KPI-Section ===== */}
      <MetricsSection />

      {/* ===== Expertise Section ===== */}
      <ExpertiseSection />

      {/* ===== Projects Section ===== */}
      <ProjectsSection />

      {/* ===== Kontakt Section ===== */}
      <ContactSection />
    </PageLayout>
  );
}
