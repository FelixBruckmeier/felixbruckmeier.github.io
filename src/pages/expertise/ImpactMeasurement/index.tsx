// src/pages/expertise/ImpactMeasurement/index.tsx
import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/expertise/impactmeasurement/impact.jpg";
import {
  ImpactMeasurementIntroSection,
 ImpactMeasurementHeartSection,
  ImpactMeasurementBusinessSection,
  ImpactMeasurementResearchSection,
  ImpactMeasurementSummarySection,
} from "@/components/sections/expertise/impactmeasurement";

export default function ImpactMeasurementPage() {
  return (
    <PageLayout
      title="Impact Measurement"
      intro="Connecting UX outcomes with business, user, and research value."
      headerImage={headerImg} // ✅ Headerbild hinzugefügt
    >
      <ImpactMeasurementIntroSection />
 <ImpactMeasurementHeartSection />
      <ImpactMeasurementBusinessSection />
      <ImpactMeasurementResearchSection />
      <ImpactMeasurementSummarySection />
    </PageLayout>
  );
}
