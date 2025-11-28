// src/pages/projects/ZooplusReOps/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

/**
 * ResearchOps & Agile UX – Work in Progress
 * --------------------------------------------
 * This page is still under construction and should NOT be indexed.
 */
export default function ZooplusReOpsPage() {
  return (
    <PageLayout
      title="ResearchOps & Agile UX"
      intro="Establishing structures for scalable, efficient UX Research. (Work in progress)"
      width="wide"
    >
      {/* ⭐ SEO – noindex, no canonical, no JSON-LD */}
      <SEOPage page="project_zooplusreops" noindex />

      {/* Minimal placeholder */}
      <div className="py-24 text-center text-muted-foreground">
        <h2 className="text-xl font-semibold mb-2">Work in progress</h2>
        <p>More content will follow soon.</p>
      </div>
    </PageLayout>
  );
}
