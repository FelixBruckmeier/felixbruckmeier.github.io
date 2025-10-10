// src/pages/expertise/StrategicUXResearch/index.tsx
import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/expertise/strategicuxresearch/strategicuxr.jpg"; // ✅ dein gewünschtes Bild

import {
  StrategicUXIntroSection,
  StrategicUXOKRSection,
  StrategicUXFrameworkSection,
  StrategicUXRITESection,
  StrategicUXValueSection,
} from "@/components/sections/expertise/strategicuxresearch";

/**
 * Strategic UX Research Page — mit Headerbild
 */
export default function StrategicUXResearchPage() {
  return (
    <PageLayout
      title="Strategic UX Research"
      intro="Turning UX Research from isolated insights into a strategic system that drives clarity, alignment, and confident decisions."
      headerImage={headerImg} // ✅ hier wird das Bild eingebunden
    >
      <StrategicUXIntroSection />
      <StrategicUXFrameworkSection />
      <StrategicUXRITESection />
      <StrategicUXOKRSection />
      <StrategicUXValueSection />
    </PageLayout>
  );
}
