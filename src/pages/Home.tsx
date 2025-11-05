// src/pages/Home.tsx
import PageLayout from "@/components/layout/PageLayout";

import {
  AboutSection,
  ExpertiseSection,
  ProjectsSection,
  ContactSection,
  ContactFormSection, 
} from "@/components/sections/home";

import MetricsSection from "@/components/sections/home/MetricsSection";

export default function Home() {
  return (
    <PageLayout>
      <AboutSection />
      <MetricsSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
      <ContactFormSection />
    </PageLayout>
  );
}
