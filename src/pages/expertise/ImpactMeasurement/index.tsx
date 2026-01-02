import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

// ✅ Header-Bild als picture (Full-Width Hero geeignet)
import headerImg from "@/assets/images/expertise/impactmeasurement/impact.jpg?w=1920;2560&format=webp;jpg&q=80&as=picture";

import {
  ImpactMeasurementIntroSection,
  ImpactMeasurementResearchSection,
  ImpactMeasurementUXSection,
  ImpactMeasurementHeartSection,
  ImpactMeasurementSummarySection,
} from "@/components/sections/expertise/impactmeasurement";

export default function ImpactMeasurementPage() {
  return (
    <PageLayout
      title="Impact Measurement"
      intro="Measuring, proving, and communicating UX impact."
      headerImage={headerImg}
      width="wide"
    >
      <SEOPage page="expertise_impactMeasurement" />

      <ImpactMeasurementIntroSection />
      <ImpactMeasurementResearchSection />
      <ImpactMeasurementUXSection />
      <ImpactMeasurementHeartSection />
      <ImpactMeasurementSummarySection />
    </PageLayout>
  );
}
