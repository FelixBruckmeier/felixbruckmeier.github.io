// src/pages/Home.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";  
import SEOJsonLD from "@/components/common/SEOJsonLD";  // ⭐ JSON-LD hinzugefügt

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

      {/* ⭐ SEO: immer sofort nach PageLayout */}
      <SEOPage page="home" />
      <SEOJsonLD page="home" />

      <AboutSection />
      <MetricsSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
      <ContactFormSection />
    </PageLayout>
  );
}
