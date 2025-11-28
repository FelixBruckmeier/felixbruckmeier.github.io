// src/pages/expertise/UXStrategy/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage"; 
import SEOJsonLD from "@/components/common/SEOJsonLD"; // ⭐ JSON-LD ergänzt

import headerImg from "@/assets/images/expertise/uxstrategy/schach1.jpg";

import {
  ValueOfUXStrategy,
  VisionAlignment,
  DiscoveryDelivery,
  Prioritization,
} from "@/components/sections/expertise/uxstrategy";

/**
 * UX Strategy Page
 * --------------------------------------------
 * - Identisches Breitenverhalten wie Home
 * - JSON-LD + SEO optimiert
 */
export default function UXStrategyPage() {
  return (
    <PageLayout
      title="UX Strategy"
      intro="How evidence-based UX Research connects discovery, design, and delivery — enabling organizations to make confident, user-centered decisions."
      headerImage={headerImg}
      width="wide"
    >

      {/* ⭐ SEO direkt nach PageLayout */}
      <SEOPage page="expertise_uxStrategy" />

      {/* ⭐ JSON-LD structured data für Google */}
      <SEOJsonLD page="expertise_uxStrategy" />

      <ValueOfUXStrategy />
      <VisionAlignment />
      <DiscoveryDelivery />
      <Prioritization />
    </PageLayout>
  );
}
