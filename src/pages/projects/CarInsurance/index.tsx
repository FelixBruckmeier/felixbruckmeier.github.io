// src/pages/projects/CarInsurance/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";
import SEOJsonLD from "@/components/common/SEOJsonLD"; // ⭐ JSON-LD hinzugefügt

import headerImg from "@/assets/images/projects/carinsurance/CarInsurance.png";

import {
  CarInsuranceBLUFSection,
  CarInsuranceProcessSection,
} from "@/components/sections/projects/CarInsurance";

/**
 * Car Insurance Project Page
 * --------------------------------------------
 * - Konsistentes Layout
 * - SEO + JSON-LD vollständig integriert
 */
export default function CarInsurancePage() {
  return (
    <PageLayout
      title="ADAC – Car Insurance Redesign"
      intro="From apologies to confidence — rebuilding trust in every conversation."
      headerImage={headerImg}
      width="wide"
    >

      {/* ⭐ SEO direkt nach PageLayout */}
      <SEOPage page="project_carInsurance" />

      {/* ⭐ JSON-LD (Article + WebPage + Breadcrumbs) */}
      <SEOJsonLD page="project_carInsurance" />

      <CarInsuranceBLUFSection />
      <CarInsuranceProcessSection />
    </PageLayout>
  );
}
