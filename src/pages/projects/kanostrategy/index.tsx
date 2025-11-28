// src/pages/projects/kanostrategy/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

import headerImg from "@/assets/images/projects/kanostrategy/headerkano.jpg";

import {
  KanoBLUFSection,
  KanoProcessSection,
  KanoImpactSection,
} from "@/components/sections/projects/kanostrategy";

/**
 * Kano Strategy Project Page
 * --------------------------------------------
 * - Clean page structure
 * - Automatic SEO + JSON-LD
 */
export default function KanoStrategyPage() {
  return (
    <PageLayout
      title="A Winning UX Strategy Using the Kano Model"
      intro="Turning scattered ideas into strategic clarity — identifying which features truly drive customer satisfaction."
      headerImage={headerImg}
      width="wide"
    >
      {/* ⭐ SEO */}
      <SEOPage page="project_kanostrategy" />

      <KanoBLUFSection />
      <KanoProcessSection />
      <KanoImpactSection />
    </PageLayout>
  );
}
