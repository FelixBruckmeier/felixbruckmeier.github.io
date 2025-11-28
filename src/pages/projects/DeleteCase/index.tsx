import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

/**
 * Micro Interaction – Delete Case (WIP)
 * --------------------------------------------
 * This page is not final and must NOT be indexed.
 * → noindex = true prevents canonical + JSON-LD
 */
export default function DeleteCasePage() {
  return (
    <PageLayout
      title="Micro Interaction – Delete Case"
      intro="A small change with a massive cumulative impact. (Work in progress)"
      width="wide"
    >
      {/* ⭐ SEO – noindex → no canonical, no JSON-LD */}
      <SEOPage page="project_deleteCase" noindex />

      {/* Placeholder content */}
      <div className="py-24 text-center text-muted-foreground">
        <h2 className="text-xl font-semibold mb-2">Work in progress</h2>
        <p>More content will follow soon.</p>
      </div>
    </PageLayout>
  );
}
