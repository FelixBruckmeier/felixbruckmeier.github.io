import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

import headerImg from "@/assets/images/projects/carinsurance/CarInsurance.png";

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
