// src/pages/projects/ZooplusReOps/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";
import { Helmet } from "react-helmet-async";

/**
 * ResearchOps & Agile UX – Work in Progress
 * --------------------------------------------
 * Diese Seite ist noch nicht final und wird nicht indexiert.
 */
export default function ZooplusReOpsPage() {
  return (
    <PageLayout
      title="ResearchOps & Agile UX"
      intro="Establishing structures for scalable, efficient UX Research. (Work in progress)"
      width="wide"
    >
      {/* ⭐ SEO – nicht indexieren */}
      <SEOPage page="project_zooplusreops" noindex />

      {/* ⭐ JSON-LD — WIP Case Study */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "name": "ResearchOps & Agile UX – Zooplus",
            "headline": "ResearchOps & Agile UX – Work in Progress",
            "description":
              "Early-stage ResearchOps and Agile UX enablement work conducted at Zooplus. (Work in progress)",
            "image":
              "https://felixbruckmeier.github.io/assets/images/projects/reopsagile/ResearchOpsAgileUX.jpg",
            "url": "https://felixbruckmeier.github.io/projects/zooplus-reops",
            "author": {
              "@type": "Person",
              "name": "Felix Bruckmeier"
            },
            "isAccessibleForFree": false,
            "publisher": {
              "@type": "Organization",
              "name": "Felix Bruckmeier UX Research",
              "logo": {
                "@type": "ImageObject",
                "url": "https://felixbruckmeier.github.io/og-image.png"
              }
            },
            "potentialAction": {
              "@type": "ReadAction",
              "target": "https://felixbruckmeier.github.io/projects/zooplus-reops"
            }
          })}
        </script>
      </Helmet>

      {/* Minimaler Placeholder */}
      <div className="py-24 text-center text-muted-foreground">
        <h2 className="text-xl font-semibold mb-2">Work in progress</h2>
        <p>More content will follow soon.</p>
      </div>
    </PageLayout>
  );
}
