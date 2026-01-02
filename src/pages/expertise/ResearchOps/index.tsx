import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

// ✅ Header-Bild als picture (Full-Width Hero optimiert)
import headerImg from "@/assets/images/expertise/researchops/plant.jpg?w=1920;2560&format=webp;jpg&q=80&as=picture";

import {
  ResearchOpsIntroSection,
  ResearchOpsFrameworkSection,
  ResearchOpsMaturitySection,
  ResearchOpsValueSection,
  ResearchOpsLeadershipSection,
} from "@/components/sections/expertise/researchops";

export default function ResearchOpsPage() {
  return (
    <PageLayout
      title="ResearchOps"
      intro="Building the systems that make research scalable."
      headerImage={headerImg}
      width="wide"
    >
      <SEOPage page="expertise_researchOps" />

      <ResearchOpsIntroSection />
      <ResearchOpsFrameworkSection />
      <ResearchOpsMaturitySection />
      <ResearchOpsValueSection />
      <ResearchOpsLeadershipSection />
    </PageLayout>
  );
}
