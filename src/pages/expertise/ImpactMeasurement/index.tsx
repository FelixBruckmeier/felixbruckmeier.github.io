import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage"; 

import headerImg from "@/assets/images/expertise/impactmeasurement/impact.jpg";

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
