// src/pages/expertise/ResearchOps/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage"; 
import SEOJsonLD from "@/components/common/SEOJsonLD"; // ⭐ JSON-LD ergänzt

import headerImg from "@/assets/images/expertise/researchops/plant.jpg";

import {
  ResearchOpsIntroSection,
  ResearchOpsFrameworkSection,
  ResearchOpsMaturitySection,
  ResearchOpsValueSection,
  ResearchOpsLeadershipSection,
} from "@/components/sections/expertise/researchops";

/**
 * ResearchOps Page
 * --------------------------------------------
 * - Identisches Breitenverhalten wie Home
 */
export default function ResearchOpsPage() {
  return (
    <PageLayout
      title="ResearchOps"
      intro="Building the systems, culture, and clarity that make research scalable — and strategic."
      headerImage={headerImg}
      width="wide"
    >

      {/* ⭐ SEO direkt nach PageLayout */}
      <SEOPage page="expertise_researchOps" />

      {/* ⭐ JSON-LD strukturiere Daten für Google */}
      <SEOJsonLD page="expertise_researchOps" />

      <ResearchOpsIntroSection />
      <ResearchOpsFrameworkSection />
      <ResearchOpsMaturitySection />
      <ResearchOpsValueSection />
      <ResearchOpsLeadershipSection />
    </PageLayout>
  );
}
