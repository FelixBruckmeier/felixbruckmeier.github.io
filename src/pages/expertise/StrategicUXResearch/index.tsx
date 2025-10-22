// src/pages/expertise/StrategicUXResearch/index.tsx
import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/expertise/strategicuxresearch/strategicuxr.jpg";

import {
  StrategicUXIntroSection,
  StrategicUXFrameworkSection,
  StrategicUXRITESection,
  StrategicUXOKRSection,
} from "@/components/sections/expertise/strategicuxresearch";

/**
 * Strategic UX Research Page
 * ----------------------------------------------
 * - exakt gleiches Breiten-/Layout-Verhalten wie Home
 * - PageLayout liefert nur Hero + Spacing, keine Begrenzung
 */
export default function StrategicUXResearchPage() {
  return (
    <PageLayout
      title="Strategic UX Research"
      intro="Turning UX Research from isolated insights into a strategic system that drives clarity, alignment, and confident decisions."
      headerImage={headerImg}
      width="wide" // ✅ sorgt für denselben Container wie auf Home
    >
      <StrategicUXIntroSection />
      <StrategicUXFrameworkSection />
      <StrategicUXRITESection />
      <StrategicUXOKRSection />
    </PageLayout>
  );
}
