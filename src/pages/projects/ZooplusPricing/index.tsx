import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/projects/pricingtesting/PricingUsabilityTesting.jpg";
import {
  PricingBLUFSection,
  PricingUseCaseSection,
  PricingImpactSection,
} from "@/components/sections/projects/ZooplusPricing";

export default function PricingPage() {
  return (
    <PageLayout
      title="zooplus — Pricing Usability Testing"
      intro="From hesitation to trust — clarifying how prices are perceived, understood, and believed."
      headerImage={headerImg}
      width="wide"
    >
      <div className="space-y-28 md:space-y-36">
        <PricingBLUFSection />
        <PricingUseCaseSection />
        <PricingImpactSection />
      </div>
    </PageLayout>
  );
}
