// src/pages/projects/workshop/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";
import { Helmet } from "react-helmet-async";

import headerImg from "@/assets/images/projects/workshop/haderws.jpg";

import {
  WorkshopBLUFSection,
  WorkshopProcessSection,
} from "@/components/sections/projects/workshop";

/**
 * Team UX Research Culture Kickstart
 * --------------------------------------------
 * Co-creation workshop to align teams and drive UX Research Maturity.
 */
export default function WorkshopPage() {
  return (
    <PageLayout
      title="Team UX Research Culture Kickstart"
      intro="From assessment to alignment — co-creating actionable solutions to advance UX Research maturity."
      headerImage={headerImg}
      width="wide"
    >

      {/* ⭐ SEO */}
      <SEOPage page="project_workshop" />

      {/* ⭐ JSON-LD (Google Rich Snippet) */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "name": "Team UX Research Culture Kickstart – Case Study",
            "headline": "Team UX Research Culture Kickstart",
            "description":
              "A UX maturity workshop designed to create alignment, shared understanding, and actionable steps for improving UX Research processes across teams.",
            "image":
              "https://felixbruckmeier.github.io/assets/images/projects/workshop/haderws.jpg",
            "url":
              "https://felixbruckmeier.github.io/projects/workshop",
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

      <WorkshopBLUFSection />
      <WorkshopProcessSection />
    </PageLayout>
  );
}
