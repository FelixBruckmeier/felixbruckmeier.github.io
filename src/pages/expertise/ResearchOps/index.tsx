// src/pages/expertise/ResearchOps/index.tsx
import PageLayout from "@/components/layout/PageLayout";
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
 * - Jetzt identisches Breitenverhalten wie Home
 * - Keine weiteren Änderungen am Layout
 */
export default function ResearchOpsPage() {
  return (
    <PageLayout
      title="ResearchOps"
      intro="Building the systems, culture, and clarity that make research scalable — and strategic."
      headerImage={headerImg}
      width="wide" // ✅ sorgt für denselben Container wie auf Home
    >
      <ResearchOpsIntroSection />
      <ResearchOpsFrameworkSection />
      <ResearchOpsMaturitySection />
      <ResearchOpsValueSection />
      <ResearchOpsLeadershipSection />
    </PageLayout>
  );
}
