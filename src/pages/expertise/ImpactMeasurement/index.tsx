import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/expertise/impactmeasurement/impact.jpg";
import {
  ImpactMeasurementIntroSection,
  ImpactMeasurementUXSection,        // ✅ ersetzt BusinessSection
  ImpactMeasurementHeartSection,
  ImpactMeasurementResearchSection,
  ImpactMeasurementSummarySection,
} from "@/components/sections/expertise/impactmeasurement";

export default function ImpactMeasurementPage() {
  return (
    <PageLayout
      title="Impact Measurement"
      intro="Connecting UX outcomes with business, user, and research value."
      headerImage={headerImg}
    >
      {/* 1️⃣ Intro */}
      <ImpactMeasurementIntroSection />

      {/* 2️⃣ Measuring UX Impact – with 1–4 + Pragmatic Approach */}
      <ImpactMeasurementUXSection />

      {/* 3️⃣ Measuring UX Outcomes – The HEART Framework */}
      <ImpactMeasurementHeartSection />

      {/* 4️⃣ Research Impact */}
      <ImpactMeasurementResearchSection />

      {/* 5️⃣ Summary */}
      <ImpactMeasurementSummarySection />
    </PageLayout>
  );
}
