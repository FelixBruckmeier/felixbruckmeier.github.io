// src/pages/expertise/UXStrategy/index.tsx
import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/expertise/uxstrategy/schach1.jpg";
import {
  ValueOfUXStrategy,
  VisionAlignment,
  DiscoveryDelivery,
  Prioritization,
} from "@/components/sections/expertise/uxstrategy";

/**
 * UX Strategy Page
 * --------------------------------------------
 * - Jetzt mit identischem Breitenverhalten wie Home
 * - Keine weiteren Code- oder Layoutänderungen
 */
export default function UXStrategyPage() {
  return (
    <PageLayout
      title="UX Strategy"
      intro="How evidence-based UX Research connects discovery, design, and delivery — enabling organizations to make confident, user-centered decisions."
      headerImage={headerImg}
      width="wide" // ✅ sorgt für denselben Container wie auf Home
    >
      <ValueOfUXStrategy />
      <VisionAlignment />
      <DiscoveryDelivery />
      <Prioritization />
    </PageLayout>
  );
}
