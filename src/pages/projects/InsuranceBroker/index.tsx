// src/pages/projects/InsuranceBroker/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage"; 
import SEOJsonLD from "@/components/common/SEOJsonLD"; // ⭐ JSON-LD hinzugefügt

import headerImg from "@/assets/images/projects/b2b2c/B2B2COptimization.jpg";

import {
  BrokerBLUFSection,
  BrokerProcessSection,
  BrokerImpactSection,
} from "@/components/sections/projects/swisslife";

/**
 * Insurance Broker Discovery Project Page
 * --------------------------------------------
 * Struktur identisch zu CarInsurance:
 * - Header mit Bild
 * - 3 inhaltliche Sektionen
 */
export default function InsuranceBrokerDiscovery() {
  return (
    <PageLayout
      title="Insurance Broker Discovery Research"
      intro="Understanding how insurance brokers navigate advisory workflows, uncovering friction points and opportunities for digital enablement through field interviews and synthesis workshops."
      headerImage={headerImg}
      width="wide"
    >

      {/* ⭐ SEO direkt nach PageLayout */}
      <SEOPage page="project_insuranceBroker" />

      {/* ⭐ Vollständiges JSON-LD für Live-Projektseite */}
      <SEOJsonLD page="project_insuranceBroker" />

      <BrokerBLUFSection />
      <BrokerProcessSection />
      <BrokerImpactSection />
    </PageLayout>
  );
}

