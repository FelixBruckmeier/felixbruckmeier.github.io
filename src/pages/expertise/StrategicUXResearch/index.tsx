// src/pages/expertise/StrategicUXResearch/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage"; 

import headerImg from "@/assets/images/expertise/strategicuxresearch/strategicuxr.jpg";

import {
  StrategicUXIntroSection,
  StrategicUXFrameworkSection,
  StrategicUXRITESection,
  StrategicUXOKRSection,
} from "@/components/sections/expertise/strategicuxresearch";

/**
 * Strategic UX Research Page
 * ----------------------------------------------
 * - Gleiches Breiten-/Layout wie Home
 */
export default function StrategicUXResearchPage() {
  return (
    <PageLayout
      title="Strategic UX Research"
      intro="Turning UX Research from isolated insights into a strategic system that drives clarity, alignment, and confident decisions."
      headerImage={headerImg}
      width="wide"
    >

      {/* ⭐ SEO (Meta, OG, Twitter, Canonical) */}
      <SEOPage 
        page="expertise_strategicUXResearch"
        url="https://felixbruckmeier.github.io/expertise/strategic-ux-research"
      />

      <StrategicUXIntroSection />
      <StrategicUXFrameworkSection />
      <StrategicUXRITESection />
      <StrategicUXOKRSection />
    </PageLayout>
  );
}
