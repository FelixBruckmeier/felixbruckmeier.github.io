// src/pages/projects/UXPortfolio/index.tsx
import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/headers/home/headerhome.jpg"; // oder ein anderes Bild
import {
  UXPortfolioBLUFSection,
  UXPortfolioProcessSection,
  UXPortfolioDesignSystemSection,
  UXPortfolioImpactSection,
} from "@/components/sections/projects/UXPortfolio";

/**
 * UX Portfolio Project Page
 * --------------------------------------------
 * Treats the portfolio itself as a UX project with a design system.
 */
export default function UXPortfolioPage() {
  return (
    <PageLayout
      title="UX Portfolio & Design System"
      intro="How I turned my personal portfolio into a small product: structured around positioning, a lean design system, and a maintainable content model for projects and expertise."
      headerImage={headerImg}
      width="wide"
    >
      <UXPortfolioBLUFSection />
      <UXPortfolioProcessSection />
      <UXPortfolioDesignSystemSection />
      <UXPortfolioImpactSection />
    </PageLayout>
  );
}
