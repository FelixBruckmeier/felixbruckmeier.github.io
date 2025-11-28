import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";  

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

      <SEOPage page="home" />

      <AboutSection />
      <MetricsSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
      <ContactFormSection />
    </PageLayout>
  );
}
