import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

// ✅ Header-Bild als picture (Full-Width Hero optimiert)
import headerImg from "@/assets/images/projects/carinsurance/CarInsurance.png?w=1920;2560&format=webp;jpg&q=80&as=picture";

import {
  CarInsuranceBLUFSection,
  CarInsuranceProcessSection,
} from "@/components/sections/projects/CarInsurance";

export default function CarInsurancePage() {
  return (
    <PageLayout
      title="ADAC – Car Insurance Redesign"
      intro="From apologies to confidence."
      headerImage={headerImg}
      width="wide"
    >
      <SEOPage page="project_carInsurance" />

      <CarInsuranceBLUFSection />
      <CarInsuranceProcessSection />
    </PageLayout>
  );
}
