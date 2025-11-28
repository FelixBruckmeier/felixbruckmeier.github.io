// src/pages/projects/DeleteCase/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";
import SEOJsonLD from "@/components/common/SEOJsonLD"; // ⭐ JSON-LD hinzugefügt

/**
 * Micro Interaction – Delete Case (WIP)
 * --------------------------------------------
 * Diese Seite ist noch nicht final und soll nicht indexiert werden.
 */
export default function DeleteCasePage() {
  return (
    <PageLayout
      title="Micro Interaction – Delete Case"
      intro="A small change with a massive cumulative impact. (Work in progress)"
      width="wide"
    >

      {/* ⭐ SEO – nicht indexieren */}
      <SEOPage page="project_deleteCase" noindex />

      {/* ⭐ JSON-LD – WIP: Nur minimale WebPage-Daten, kein Article */}
      <SEOJsonLD page="project_deleteCase" minimal />

      {/* Placeholder Inhalt */}
      <div className="py-24 text-center text-muted-foreground">
        <h2 className="text-xl font-semibold mb-2">Work in progress</h2>
        <p>More content will follow soon.</p>
      </div>
    </PageLayout>
  );
}
