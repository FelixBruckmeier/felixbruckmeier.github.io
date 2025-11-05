// src/pages/projects/CarInsurancePage.tsx
import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/projects/carinsurance/CarInsurance.png";
import {
  CarInsuranceBLUFSection,
  CarInsuranceProcessSection,
} from "@/components/sections/projects/CarInsurance";

/**
 * Car Insurance Project Page
 * --------------------------------------------
 * - Identisches Layoutverhalten wie andere Project Pages (z. B. ResearchOps)
 * - Keine zusätzliche Hero-Komponente, HeaderImage wird vom PageLayout behandelt
 */
export default function CarInsurancePage() {
  return (
    <PageLayout
      title="ADAC – Car Insurance Redesign"
      intro="From apologies to confidence — rebuilding trust in every conversation."
      headerImage={headerImg}
      width="wide" // ✅ Einheitliches Containerverhalten
    >
      <CarInsuranceBLUFSection />
      <CarInsuranceProcessSection />
    </PageLayout>
  );
}
