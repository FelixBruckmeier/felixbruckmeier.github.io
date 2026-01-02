// src/pages/projects/ZooplusPricing/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

// ✅ Header-Bild als picture (Full-Width Hero optimiert)
import headerImg from "@/assets/images/projects/pricingtesting/PricingUsabilityTesting.jpg?w=1920;2560&format=webp;jpg&q=80&as=picture";

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
      <SEOPage page="project_pricing" />

      <div className="space-y-28 md:space-y-36">
        <PricingBLUFSection />
        <PricingUseCaseSection />
        <PricingImpactSection />
      </div>
    </PageLayout>
  );
}
