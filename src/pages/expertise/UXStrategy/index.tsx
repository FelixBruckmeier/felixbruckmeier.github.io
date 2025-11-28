import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage"; 

import headerImg from "@/assets/images/expertise/uxstrategy/schach1.jpg";

import {
  ValueOfUXStrategy,
  VisionAlignment,
  DiscoveryDelivery,
  Prioritization,
} from "@/components/sections/expertise/uxstrategy";

export default function UXStrategyPage() {
  return (
    <PageLayout
      title="UX Strategy"
      intro="How evidence-based UX Research informs decisions."
      headerImage={headerImg}
      width="wide"
    >

      <SEOPage page="expertise_uxStrategy" />

      <ValueOfUXStrategy />
      <VisionAlignment />
      <DiscoveryDelivery />
      <Prioritization />
    </PageLayout>
  );
}
