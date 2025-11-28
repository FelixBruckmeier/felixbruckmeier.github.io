// src/pages/projects/reopsimp/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

/**
 * ResearchOps Implementation – Work in Progress
 * --------------------------------------------
 * This page is under construction and should NOT be indexed.
 * It serves as a placeholder for locked / WIP projects.
 */
export default function ReOpsImplementationPage() {
  return (
    <PageLayout
      title="ResearchOps Implementation"
      intro="Establishing scalable ResearchOps foundations — governance, tooling, workflows and enablement. (Work in progress)"
      width="wide"
    >

      {/* ⭐ SEO – noindex, no canonical, no JSON-LD */}
      <SEOPage page="project_reopsimplementation" noindex />

      {/* Minimal placeholder */}
      <div className="py-24 text-center text-muted-foreground">
        <h2 className="text-xl font-semibold mb-3">Work in progress</h2>
        <p className="max-w-xl mx-auto">
          This project page is currently being prepared.
          More content and visual assets will follow soon.
        </p>
      </div>
    </PageLayout>
  );
}
