import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";

export function PricingFindingsSection() {
  return (
    <Section id="findings" spacing="xl" title="Key Insights">
      <SectionIntro>
        Users clearly prefer pricing formats that <strong>reduce visual clutter</strong> and
        <strong> express savings transparently</strong>. Strike-through prices work only when
        the <strong>reference price is clearly labeled</strong> (e.g. “RRP”).
        <br />
        <br />
        Subscription prices were accepted when the <strong>benefit was explicit</strong>
        (“Save 5% every month”) and placed next to the one-time price.
        Overemphasis on discounts, however, <strong>reduced credibility</strong>.
      </SectionIntro>
    </Section>
  );
}
