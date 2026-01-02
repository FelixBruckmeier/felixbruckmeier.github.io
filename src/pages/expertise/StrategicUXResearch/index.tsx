import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

// ✅ Header-Bild als picture (Full-Width Hero optimiert)
import headerImg from "@/assets/images/expertise/strategicuxresearch/strategicuxr.jpg?w=1920;2560&format=webp;jpg&q=80&as=picture";

import {
  StrategicUXIntroSection,
  StrategicUXFrameworkSection,
  StrategicUXRITESection,
  StrategicUXOKRSection,
} from "@/components/sections/expertise/strategicuxresearch";

export default function StrategicUXResearchPage() {
  return (
    <PageLayout
      title="Strategic UX Research"
      intro="Turning UX Research into a strategic system."
      headerImage={headerImg}
      width="wide"
    >
      <SEOPage page="expertise_strategicUXResearch" />

      <StrategicUXIntroSection />
      <StrategicUXFrameworkSection />
      <StrategicUXRITESection />
      <StrategicUXOKRSection />
    </PageLayout>
  );
}
