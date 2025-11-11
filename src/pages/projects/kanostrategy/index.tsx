import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/projects/kanostrategy/headerkano.jpg";
import {
  KanoBLUFSection,
  KanoProcessSection,
  KanoImpactSection,
} from "@/components/sections/projects/kanostrategy";

/**
 * Kano Strategy Project Page
 * --------------------------------------------
 * - Same layout pattern as CarInsurance
 * - Header image handled by PageLayout
 */
export default function KanoStrategyPage() {
  return (
    <PageLayout
      title="A Winning UX Strategy Using the Kano Model"
      intro="Turning scattered ideas into strategic clarity — identifying which features truly drive customer satisfaction."
      headerImage={headerImg}
      width="wide"
    >
      <KanoBLUFSection />
      <KanoProcessSection />
      <KanoImpactSection />
    </PageLayout>
  );
}
