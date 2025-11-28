// src/pages/projects/CarInsurance/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

import headerImg from "@/assets/images/projects/carinsurance/CarInsurance.png";

import {
  CarInsuranceBLUFSection,
  CarInsuranceProcessSection,
} from "@/components/sections/projects/CarInsurance";

/**
 * Car Insurance Project Page
 * --------------------------------------------
 * - Konsistentes Layout
 * - SEO vollständig integriert (JSON-LD wird automatisch erzeugt)
 */
export default function CarInsurancePage() {
  return (
    <PageLayout
      title="ADAC – Car Insurance Redesign"
      intro="From apologies to confidence — rebuilding trust in every conversation."
      headerImage={headerImg}
      width="wide"
    >
      {/* ⭐ SEO (Meta, OG, Twitter, Canonical) */}
      <SEOPage 
        page="project_carInsurance"
        url="https://felixbruckmeier.github.io/projects/car-insurance"
      />

      <CarInsuranceBLUFSection />
      <CarInsuranceProcessSection />
    </PageLayout>
  );
}
