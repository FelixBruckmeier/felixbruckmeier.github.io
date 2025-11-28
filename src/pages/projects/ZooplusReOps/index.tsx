// src/pages/projects/ZooplusReOps/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

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

      {/* Minimaler Placeholder */}
      <div className="py-24 text-center text-muted-foreground">
        <h2 className="text-xl font-semibold mb-2">Work in progress</h2>
        <p>More content will follow soon.</p>
      </div>
    </PageLayout>
  );
}
