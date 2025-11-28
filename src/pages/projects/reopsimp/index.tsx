// src/pages/projects/reopsimp/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

/**
 * ResearchOps Implementation – Work in Progress
 * --------------------------------------------
 * Diese Seite ist im Aufbau und wird NICHT indexiert.
 * Sie dient nur als Platzhalter für Locked / WIP Projekte.
 */
export default function ReOpsImplementationPage() {
  return (
    <PageLayout
      title="ResearchOps Implementation"
      intro="Establishing scalable ResearchOps foundations — governance, tooling, workflows and enablement. (Work in progress)"
      width="wide"
    >

      {/* ⭐ SEO – existiert, aber wird NICHT indexiert */}
      <SEOPage page="project_reopsimplementation" noindex />

      {/* Minimaler Placeholder */}
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
