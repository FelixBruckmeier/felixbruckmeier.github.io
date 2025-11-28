// src/pages/projects/ZooplusPricing/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";
import { Helmet } from "react-helmet-async";

import headerImg from "@/assets/images/projects/pricingtesting/PricingUsabilityTesting.jpg";

import {
  PricingBLUFSection,
  PricingUseCaseSection,
  PricingImpactSection,
} from "@/components/sections/projects/ZooplusPricing";

export default function PricingPage() {
  return (
    <PageLayout
      title="Pricing Usability Testing"
      intro="From hesitation to trust — clarifying how prices are perceived, understood, and believed."
      headerImage={headerImg}
      width="wide"
    >
      {/* ⭐ SEO */}
      <SEOPage page="project_pricing" />

      {/* ⭐ JSON-LD Case Study Structured Data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "name": "Zooplus – Pricing Usability Testing",
            "headline": "Pricing Usability Testing",
            "description":
              "A mixed-method UX research project uncovering how customers perceive pricing, understand product information, and build trust in the purchase decision.",
            "image":
              "https://felixbruckmeier.github.io/assets/images/projects/pricingtesting/PricingUsabilityTesting.jpg",
            "url":
              "https://felixbruckmeier.github.io/projects/zooplus-pricing",
            "author": {
              "@type": "Person",
              "name": "Felix Bruckmeier"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Felix Bruckmeier UX Research",
              "logo": {
                "@type": "ImageObject",
                "url": "https://felixbruckmeier.github.io/og-image.png"
              }
            },
            "datePublished": "2025-01-01"
          })}
        </script>
      </Helmet>

      <div className="space-y-28 md:space-y-36">
        <PricingBLUFSection />
        <PricingUseCaseSection />
        <PricingImpactSection />
      </div>
    </PageLayout>
  );
}
