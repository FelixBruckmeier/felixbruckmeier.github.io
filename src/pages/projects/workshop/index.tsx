import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/projects/workshop/haderws.jpg";
import {
  WorkshopBLUFSection,
  WorkshopProcessSection,
  WorkshopImpactSection,
} from "@/components/sections/projects/workshop";

/**
 * Team UX Research Culture Kickstart
 * --------------------------------------------
 * Co-creation workshop to align teams and drive UX Research Maturity.
 */
export default function WorkshopPage() {
  return (
    <PageLayout
      title="Team UX Research Culture Kickstart"
      intro="From assessment to alignment — co-creating actionable solutions to advance UX Research maturity."
      headerImage={headerImg}
      width="wide"
    >
      <WorkshopBLUFSection />
      <WorkshopProcessSection />
      <WorkshopImpactSection />
    </PageLayout>
  );
}
