import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage"; 

import headerImg from "@/assets/images/expertise/researchops/plant.jpg";

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
