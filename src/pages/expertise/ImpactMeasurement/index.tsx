// src/pages/expertise/ImpactMeasurement/index.tsx
import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/expertise/impactmeasurement/impact.jpg";
import {
  ImpactMeasurementIntroSection,
  ImpactMeasurementResearchSection,
  ImpactMeasurementUXSection,
  ImpactMeasurementHeartSection,
  ImpactMeasurementSummarySection,
} from "@/components/sections/expertise/impactmeasurement";

/**
 * Impact Measurement Page
 * ----------------------------------------------------
 * Einheitliches Breitenverhalten wie Home
 */
export default function ImpactMeasurementPage() {
  return (
    <PageLayout
      title="Impact Measurement"
      intro="Measuring, proving, and communicating UX impact through metrics that connect user experience to business outcomes."
      headerImage={headerImg}
      width="wide" // ✅ identisch zu Home
    >
      <ImpactMeasurementIntroSection />
      <ImpactMeasurementResearchSection />
      <ImpactMeasurementUXSection />
      <ImpactMeasurementHeartSection />
      <ImpactMeasurementSummarySection />
    </PageLayout>
  );
}
