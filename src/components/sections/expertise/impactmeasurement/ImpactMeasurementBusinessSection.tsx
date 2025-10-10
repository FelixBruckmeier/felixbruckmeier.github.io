import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Body, Subtitle } from "@/components/ui/Tokens";
import Tile from "@/components/ui/Tile"; // ✅ DS-konformer Default Import
import { cn } from "@/lib/utils";
import { spacing, layout, colors } from "@/lib/tokens";
import CostOfUX from "@/assets/visuals/impactmeasurement/CostOfUX";

/**
 * ImpactMeasurementBusinessSection
 * --------------------------------
 * DS-conform section for “Cost of Poor UX”
 * - Storytelling through three inactive Tiles: Problem → Solution → Impact
 * - Inline SVG visual below (CostOfUX)
 */

export default function ImpactMeasurementBusinessSection() {
  return (
    <Section
      id="impact-business"
      title="Business Impact – The Cost of Poor UX"
      spacing="md"
      compact
    >
      {/* Intro */}
      <SectionIntro className="max-w-3xl leading-relaxed text-lg">
        Poor usability isn’t just a bad experience — it’s a business risk.
        By uncovering the hidden costs of friction and inefficiency, UX Research
        translates user experience into measurable business outcomes.
      </SectionIntro>

      {/* DS-conform Tile Grid */}
      <div
        className={cn(
          layout.gridCols3,
          spacing.gap8,
          spacing.mt12,
          spacing.mb12,
          "items-stretch"
        )}
      >
        {/* Problem */}
        <Tile variant="inactive" className="flex flex-col justify-start h-full p-6">
          <Subtitle className="mb-3">Problem</Subtitle>
          <Body className={cn(spacing.stackMd)}>
            The value of UX is often invisible — because good design prevents
            problems before they happen. Without visible ROI, organizations
            underinvest in UX, treating it as a cost center. Meanwhile, poor UX
            silently drives churn, support costs, and lost productivity.
          </Body>
        </Tile>

        {/* Solution */}
        <Tile variant="inactive" className="flex flex-col justify-start h-full p-6">
          <Subtitle className="mb-3">Solution</Subtitle>
          <Body className={cn(spacing.stackMd)}>
            By estimating the <strong>Cost of Poor UX</strong>, we make UX
            value tangible. For example: if 10% of users churn due to
            frustrating UX, and each has a yearly <strong>CLTV of €30</strong>,
            improving usability to retain those users directly recovers that
            revenue. UX becomes measurable — and fundable.
          </Body>
        </Tile>

        {/* Impact */}
        <Tile variant="inactive" className="flex flex-col justify-start h-full p-6">
          <Subtitle className="mb-3">Impact</Subtitle>
          <Body className={cn(spacing.stackMd)}>
            Connecting <strong>churn, CLTV,</strong> and <strong>retention</strong>{" "}
            reframes UX from an expense to an investment. Better usability not
            only reduces waste and errors — it protects and grows revenue.
            That’s how UX turns business clarity into profit.
          </Body>
        </Tile>
      </div>

      {/* Hinweistext unter den Tiles */}
      <Body
        className={cn(
          colors.muted.text,
          "max-w-3xl",
          spacing.mt6,
          spacing.mb12
        )}
      >
        All values are based on estimations. Still, as this simple example
        shows, it’s an effective way to demonstrate the <strong>value of UX</strong>{" "}
        — by quantifying avoided costs and recovered revenue.
      </Body>

      {/* SVG Visual */}
      <div className={cn(spacing.mt8, spacing.mb16)}>
        <CostOfUX />
      </div>
    </Section>
  );
}

