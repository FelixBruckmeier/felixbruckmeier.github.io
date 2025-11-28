// src/pages/projects/workshop/index.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";

import headerImg from "@/assets/images/projects/workshop/haderws.jpg";

import {
  WorkshopBLUFSection,
  WorkshopProcessSection,
} from "@/components/sections/projects/workshop";

/**
 * Team UX Research Culture Kickstart
 * --------------------------------------------
 * Co-creation workshop to align teams and drive UX Research Maturity.
 * JSON-LD is automatically handled by SEOPage.
 */
export default function WorkshopPage() {
  return (
    <PageLayout
      title="Team UX Research Culture Kickstart"
      intro="From assessment to alignment — co-creating actionable solutions to advance UX Research maturity."
      headerImage={headerImg}
      width="wide"
    >

      {/* ⭐ SEO (Meta, OG, Twitter, Canonical, JSON-LD) */}
      <SEOPage page="project_workshop" />

      <WorkshopBLUFSection />
      <WorkshopProcessSection />
    </PageLayout>
  );
}
