import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

// ✅ Header-Bild als picture (Full-Width Hero optimiert)
import headerImg from "@/assets/images/projects/b2b2c/B2B2COptimization.jpg?w=1920;2560&format=webp;jpg&q=80&as=picture";

import {
  BrokerBLUFSection,
  BrokerProcessSection,
  BrokerImpactSection,
} from "@/components/sections/projects/swisslife";

export default function InsuranceBrokerDiscovery() {
  return (
    <PageLayout
      title="Insurance Broker Discovery Research"
      intro="Understanding advisory workflows and friction points."
      headerImage={headerImg}
      width="wide"
    >
      <SEOPage page="project_insuranceBroker" />

      <BrokerBLUFSection />
      <BrokerProcessSection />
      <BrokerImpactSection />
    </PageLayout>
  );
}
