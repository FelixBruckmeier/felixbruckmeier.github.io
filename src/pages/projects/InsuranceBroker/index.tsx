// src/pages/projects/InsuranceBroker/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

import headerImg from "@/assets/images/projects/b2b2c/B2B2COptimization.jpg";

import {
  BrokerBLUFSection,
  BrokerProcessSection,
  BrokerImpactSection,
} from "@/components/sections/projects/swisslife";

/**
 * Insurance Broker Discovery Project Page
 * --------------------------------------------
 * Standard Project Structure:
 * - Header image
 * - BLUF
 * - Process
 * - Impact
 */
export default function InsuranceBrokerDiscovery() {
  return (
    <PageLayout
      title="Insurance Broker Discovery Research"
      intro="Understanding how insurance brokers navigate advisory workflows, uncovering friction points and opportunities for digital enablement through field interviews and synthesis workshops."
      headerImage={headerImg}
      width="wide"
    >
      {/* ⭐ SEO */}
      <SEOPage page="project_insuranceBroker" />

      <BrokerBLUFSection />
      <BrokerProcessSection />
      <BrokerImpactSection />
    </PageLayout>
  );
}
