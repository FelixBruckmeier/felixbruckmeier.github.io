import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

import headerImg from "@/assets/images/projects/b2b2c/B2B2COptimization.jpg";

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
