import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/expertise/uxstrategy/schach1.jpg";
import {
  VisionAlignment,
  DiscoveryDelivery,
  Prioritization,
  ValueOfUXStrategy,
} from "@/components/sections/expertise/uxstrategy";

export default function UXStrategyPage() {
  return (
    <PageLayout
      title="UX Strategy"
      intro="How evidence-based UX Research connects discovery, design, and delivery — enabling organizations to make confident, user-centered decisions."
      headerImage={headerImg} // ✅ Schach-Bild bleibt
    >
      <VisionAlignment />
      <DiscoveryDelivery />
      <Prioritization />
      <ValueOfUXStrategy />
    </PageLayout>
  );
}
