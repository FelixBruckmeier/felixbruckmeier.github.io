// src/pages/projects/UXPortfolio/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";
import { Helmet } from "react-helmet-async";

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
 * Now includes JSON-LD for rich search results.
 */
export default function UXPortfolioPage() {
  return (
    <PageLayout
      title="UX Portfolio & Design System"
      intro="How I turned my personal portfolio into a small product: structured around positioning, a lean design system, and a maintainable content model for projects and expertise."
      headerImage={headerImg}
      width="wide"
    >

      {/* ⭐ SEO */}
      <SEOPage page="project_uxPortfolio" />

      {/* ⭐ JSON-LD (Google Rich Result) */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "name": "UX Portfolio & Design System – Case Study",
            "description":
              "A UX case study describing the design system, IA, performance strategy and architecture behind the personal UX portfolio of Felix Bruckmeier.",
            "author": {
              "@type": "Person",
              "name": "Felix Bruckmeier",
            },
            "image": "https://felixbruckmeier.github.io/assets/images/projects/uxportfolio/cover.png",
            "url": "https://felixbruckmeier.github.io/projects/ux-portfolio",
            "headline": "UX Portfolio & Design System – Case Study",
            "datePublished": "2025-01-01",
            "publisher": {
              "@type": "Organization",
              "name": "Felix Bruckmeier UX Research",
              "logo": {
                "@type": "ImageObject",
                "url": "https://felixbruckmeier.github.io/og-image.png"
              }
            }
          })}
        </script>
      </Helmet>

      <UXPortfolioBLUFSection />
      <UXPortfolioProcessSection />
      <UXPortfolioDesignSystemSection />
      <UXPortfolioImpactSection />
    </PageLayout>
  );
}
