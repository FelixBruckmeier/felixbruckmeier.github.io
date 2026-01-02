import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

// ✅ Header-Bild als picture (Full-Width Hero optimiert)
import headerImg from "@/assets/images/projects/kanostrategy/headerkano.jpg?w=1920;2560&format=webp;jpg&q=80&as=picture";

import {
  KanoBLUFSection,
  KanoProcessSection,
  KanoImpactSection,
} from "@/components/sections/projects/kanostrategy";

export default function KanoStrategyPage() {
  return (
    <PageLayout
      title="A Winning UX Strategy Using the Kano Model"
      intro="Turning scattered ideas into strategic clarity — identifying which features truly drive customer satisfaction."
      headerImage={headerImg}
      width="wide"
    >
      {/* ⭐ SEO (Meta, OG, Twitter, Canonical) */}
      <SEOPage page="project_kanostrategy" />

      <KanoBLUFSection />
      <KanoProcessSection />
      <KanoImpactSection />
    </PageLayout>
  );
}
