// src/pages/projects/UXPortfolio/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

import headerImg from "@/assets/images/headers/home/headerhome.jpg";

import {
  UXPortfolioBLUFSection,
  UXPortfolioProcessSection,
  UXPortfolioDesignSystemSection,
  UXPortfolioImpactSection,
} from "@/components/sections/projects/UXPortfolio";

/**
 * UX Portfolio Project Page
 * --------------------------------------------
 * Treated as a case study with design system documentation.
 * JSON-LD is now handled automatically via SEOPage.
 */
export default function UXPortfolioPage() {
  return (
    <PageLayout
      title="UX Portfolio & Design System"
      intro="How I turned my personal portfolio into a small product: structured around positioning, a lean design system, and a maintainable content model for projects and expertise."
      headerImage={headerImg}
      width="wide"
    >

      {/* ⭐ SEO – structured data included automatically */}
      <SEOPage page="project_uxPortfolio" />

      <UXPortfolioBLUFSection />
      <UXPortfolioProcessSection />
      <UXPortfolioDesignSystemSection />
      <UXPortfolioImpactSection />
    </PageLayout>
  );
}
