// src/pages/projects/UXPortfolio/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

// ✅ richtiges Header-Bild (Portfolio Cover)
import headerImg from "@/assets/images/projects/uxportfolio/cover.png";

import {
  UXPortfolioBLUFSection,
  UXPortfolioDesignSystemSection,
  UXPortfolioImpactSection,
} from "@/components/sections/projects/UXPortfolio";

/**
 * Design System - Portfolio Project Page
 * --------------------------------------------
 * Case study with design system documentation.
 * JSON-LD handled automatically via SEOPage.
 */
export default function UXPortfolioPage() {
  return (
    <PageLayout
      title="Design System – UX Portfolio"
      intro="How I turned my personal portfolio into a small product: structured around positioning, a lean design system, and a maintainable content model for projects and expertise."
      headerImage={headerImg}
      width="wide"
    >
      {/* SEO – structured data + canonical */}
      <SEOPage page="project_uxPortfolio" />

      <UXPortfolioBLUFSection />
      <UXPortfolioDesignSystemSection />
      <UXPortfolioImpactSection />
    </PageLayout>
  );
}
