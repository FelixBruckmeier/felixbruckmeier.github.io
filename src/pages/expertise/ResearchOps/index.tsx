// src/pages/expertise/ResearchOps/index.tsx
import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/expertise/researchops/plant.jpg";
import {
  ResearchOpsIntroSection,
  ResearchOpsFrameworkSection,
  ResearchOpsMaturitySection,
  ResearchOpsValueSection,
  ResearchOpsLeadershipSection,
} from "@/components/sections/expertise/researchops";

/**
 * ResearchOps Page
 * --------------------------------------------
 * - Nutzt das einheitliche PageLayout (zentriert, konsistenter Rhythmus)
 * - Jede Section ist DS-konform (Section + SectionIntro etc.)
 * - Kein eigenes Styling oder Padding hier notwendig
 */
export default function ResearchOpsPage() {
  return (
    <PageLayout
      title="ResearchOps"
      intro="Building the systems, culture, and clarity that make research scalable — and strategic."
      headerImage={headerImg} // ✅ Headerbild hinzugefügt
    >
      {/* === 1️⃣ Problem & Kontext === */}
      <ResearchOpsIntroSection />

      {/* === 2️⃣ Framework / Struktur === */}
      <ResearchOpsFrameworkSection />

      {/* === 3️⃣ Maturity & Growth === */}
      <ResearchOpsMaturitySection />

      {/* === 4️⃣ Business Value === */}
      <ResearchOpsValueSection />

      {/* === 5️⃣ Leadership & Enablement === */}
      <ResearchOpsLeadershipSection />
    </PageLayout>
  );
}
