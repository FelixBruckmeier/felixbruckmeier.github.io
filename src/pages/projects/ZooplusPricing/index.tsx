// src/pages/projects/ZooplusPricing/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

import headerImg from "@/assets/images/projects/pricingtesting/PricingUsabilityTesting.jpg";

import {
  PricingBLUFSection,
  PricingUseCaseSection,
  PricingImpactSection,
} from "@/components/sections/projects/ZooplusPricing";

/**
 * Pricing Usability Testing Case Study
 * --------------------------------------------
 * JSON-LD + Metadata are automatically handled by SEOPage.
 */
export default function PricingPage() {
  return (
    <PageLayout
      title="Pricing Usability Testing"
      intro="From hesitation to trust — clarifying how prices are perceived, understood, and believed."
      headerImage={headerImg}
      width="wide"
    >
      {/* ⭐ SEO – auto JSON-LD + canonical */}
      <SEOPage
        page="project_pricing"
        url="https://felixbruckmeier.github.io/projects/zooplus-pricing"
      />

      <div className="space-y-28 md:space-y-36">
        <PricingBLUFSection />
        <PricingUseCaseSection />
        <PricingImpactSection />
      </div>
    </PageLayout>
  );
}
