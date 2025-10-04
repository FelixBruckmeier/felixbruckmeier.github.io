// src/pages/expertise/ux-strategy/index.tsx
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui";
import InfoCard from "@/components/expertise/InfoCard";
import HCDLifecycle from "@/components/expertise/uxstrategy/HCDLifecycle";
import UXResearchMatrix from "@/components/expertise/uxstrategy/UXResearchMatrix";
import { H2, Subtitle, IntroText, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";

export default function UXStrategy() {
  return (
    <div className="flex flex-col gap-20 px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
      {/* Page Intro */}
      <Section spacing="lg" center>
        <H2 className={spacing.mb4}>UX Strategy</H2>
        <Subtitle className={spacing.mb6}>
          Translating Insights into Innovation
        </Subtitle>
        <IntroText className={layout.maxWidthText}>
          UX Strategy verbindet Business-Ziele, Nutzerbedürfnisse und technologische
          Machbarkeit zu einer klaren, skalierbaren Roadmap. Sie sorgt dafür,
          dass Unternehmen nicht nur <em>die richtigen Dinge</em> entwickeln,
          sondern diese auch <em>richtig umsetzen</em>.
        </IntroText>
      </Section>

      {/* Warum */}
      <Section title="Why UX Strategy Matters">
        <Body className={layout.maxWidthText}>
          Ohne eine robuste UX-Strategie bleibt User Research oft isoliert. 
          Ich entwickle klare, umsetzbare Blueprints, die Stakeholder-Ziele 
          mit echten User Needs verbinden. Jede Produktentscheidung basiert 
          damit auf einer gemeinsamen Vision und einem tiefen Verständnis der Customer Journey.
        </Body>
      </Section>

      {/* Vision */}
      <Section title="Vision & Alignment">
        <Body className={layout.maxWidthText}>
          Eine UX-Vision gibt Richtung, Priorität und Orientierung. 
          Sie verbindet Business KPIs mit UX North Star Metrics und 
          stellt sicher, dass Produktteams auf ein gemeinsames Ziel hinarbeiten.
        </Body>
      </Section>

      {/* Framework */}
      <Section title="From Discovery to Delivery">
        <IntroText>
          Inspiriert von Human-Centered Design verzahne ich UX Research über den 
          gesamten Produktlebenszyklus – von Discovery über Delivery bis 
          zur Optimierung. So entsteht ein kontinuierlicher Kreislauf 
          aus Insights, Design und Business Impact.
        </IntroText>

        <div className="my-12">
          <HCDLifecycle />
        </div>
      </Section>

      {/* Matrix */}
      <Section title="UX Research Prioritization Matrix">
        <IntroText>
          Um Research effektiv einzusetzen, nutze ich eine 3×3 Priorisierungsmatrix. 
          Sie balanciert das <strong>Risiko einer falschen Entscheidung</strong> 
          und die <strong>Knowledge Gaps über den Kunden</strong>.
        </IntroText>
        <UXResearchMatrix />
      </Section>

      {/* Outcomes */}
      <Section title="The Value of UX Strategy">
        <div className={`${layout.gridCols3} ${layout.gridGap}`}>
          <InfoCard title="Alignment">Gemeinsame Vision für Stakeholder und Teams.</InfoCard>
          <InfoCard title="Impact">Research und Design führen nachweislich zu Business-Erfolg.</InfoCard>
          <InfoCard title="Sustainability">Langanhaltendes Wachstum durch eine UX-getriebene Kultur.</InfoCard>
        </div>
      </Section>

      {/* Call to Action */}
      <Section center>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-lg font-medium text-blue-600 hover:underline"
        >
          Get in touch <ArrowRight size={18} />
        </a>
      </Section>
    </div>
  );
}
