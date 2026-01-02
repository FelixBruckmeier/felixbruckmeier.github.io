import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

// ✅ Header-Bild als picture (Full-Width Hero optimiert)
import headerImg from "@/assets/images/expertise/uxstrategy/schach1.jpg?w=1920;2560&format=webp;jpg&q=80&as=picture";

import {
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

      <VisionAlignment />
      <DiscoveryDelivery />
      <Prioritization />
    </PageLayout>
  );
}
