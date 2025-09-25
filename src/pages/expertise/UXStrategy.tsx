import { ArrowRight } from "lucide-react";
import Section from "@/components/expertise/Section";
import InfoCard from "@/components/expertise/InfoCard";
import HCDLifecycle from "@/components/expertise/uxstrategy/HCDLifecycle";
import UXResearchMatrix from "@/components/expertise/uxstrategy/UXResearchMatrix";

export default function UXStrategy() {
  return (
    <div className="flex flex-col gap-20 px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-6">UX Strategy</h1>
        <h2 className="text-xl text-muted-foreground mb-8">
          Translating Insights into Innovation
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          UX Strategy verbindet Business-Ziele, Nutzerbedürfnisse und technologische 
          Machbarkeit zu einer klaren, skalierbaren Roadmap. Sie sorgt dafür, 
          dass Unternehmen nicht nur <em>die richtigen Dinge</em> entwickeln, 
          sondern diese auch <em>richtig umsetzen</em>.
        </p>
      </section>

      {/* Warum */}
      <Section title="Why UX Strategy Matters">
        <p className="max-w-3xl">
          Ohne eine robuste UX-Strategie bleibt User Research oft isoliert. 
          Ich entwickle klare, umsetzbare Blueprints, die Stakeholder-Ziele 
          mit echten User Needs verbinden. Jede Produktentscheidung basiert 
          damit auf einer gemeinsamen Vision und einem tiefen Verständnis der Customer Journey.
        </p>
      </Section>

      {/* Vision */}
      <Section title="Vision & Alignment">
        <p className="max-w-3xl">
          Eine UX-Vision gibt Richtung, Priorität und Orientierung. 
          Sie verbindet Business KPIs mit UX North Star Metrics und 
          stellt sicher, dass Produktteams auf ein gemeinsames Ziel hinarbeiten. 
          Durch Alignment-Workshops mit Stakeholdern übersetze ich strategische 
          Ziele in konkrete Nutzerziele.
        </p>
      </Section>

      {/* Portfolio */}
      <Section title="Portfolio & Roadmapping">
        <p className="max-w-3xl">
          UX Strategy bedeutet auch, Ressourcen und Initiativen bewusst zu priorisieren. 
          Ich integriere UX-Aktivitäten in Produkt-Roadmaps, bewerte Themen nach 
          Business Impact und User Value und helfe Teams, Kapazitäten gezielt einzusetzen.
        </p>
      </Section>

      {/* Design Principles */}
      <Section title="Design Principles & Guardrails">
        <p className="max-w-3xl">
          Klar formulierte Designprinzipien sorgen für Konsistenz, 
          Orientierung und Qualität. Accessibility, Simplicity und 
          Ethical UX sind für mich unverhandelbare Eckpfeiler, die 
          jede Produktentscheidung begleiten.
        </p>
      </Section>

      {/* Framework */}
      <Section title="From Discovery to Delivery">
        <p className="mb-6 max-w-3xl">
          Inspiriert von Human-Centered Design verzahne ich UX Research über den 
          gesamten Produktlebenszyklus – von Discovery über Delivery bis 
          zur Optimierung. So entsteht ein kontinuierlicher Kreislauf 
          aus Insights, Design und Business Impact.
        </p>

        {/* Lifecycle Grafik (SVG) */}
        <div className="my-12">
          <HCDLifecycle />
        </div>
      </Section>

      {/* Matrix */}
      <Section title="UX Research Prioritization Matrix">
        <p className="mb-6 max-w-3xl">
          Um Research effektiv einzusetzen, nutze ich eine 3×3 Priorisierungsmatrix. 
          Sie balanciert das <strong>Risiko einer falschen Entscheidung</strong> 
          und die <strong>Knowledge Gaps über den Kunden</strong> – und sorgt dafür, 
          dass Teams wissen, wann leichteres Benchmarking reicht oder tiefes 
          ethnografisches Research nötig ist.
        </p>
        <UXResearchMatrix />
      </Section>

      {/* Integration */}
      <Section title="Integration of Business & Tech">
        <p className="max-w-3xl">
          UX Strategy verbindet nicht nur Research und Design, 
          sondern integriert KPIs, Business Objectives und technische 
          Roadmaps. So entsteht eine Brücke zwischen CXOs, Product Ownern, 
          Engineering und Design, die nachhaltigen Wert schafft.
        </p>
      </Section>

      {/* Maturity */}
      <Section title="UX Maturity & Culture">
        <p className="max-w-3xl">
          Reife UX-Organisationen sehen Research nicht als Support, 
          sondern als strategischen Partner. Ich nutze Maturity-Modelle 
          und gezielte Change-Ansätze, um UX Literacy im gesamten Unternehmen 
          zu fördern – vom Onboarding neuer Mitarbeiter bis zu 
          cross-funktionalen Evangelization-Programmen.
        </p>
      </Section>

      {/* Sustainability */}
      <Section title="Sustainability & Ethics">
        <p className="max-w-3xl">
          Zukunftsfähige UX-Strategien berücksichtigen Nachhaltigkeit, 
          Barrierefreiheit und Ethik. Ich integriere Responsible Design 
          und AI Ethics in die UX Roadmap, damit Innovation nicht nur 
          effizient, sondern auch verantwortungsvoll entsteht.
        </p>
      </Section>

      {/* Outcomes */}
      <Section title="The Value of UX Strategy">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard title="Alignment">
            Gemeinsame Vision für Stakeholder und Teams.
          </InfoCard>
          <InfoCard title="Impact">
            Research und Design führen nachweislich zu Business-Erfolg.
          </InfoCard>
          <InfoCard title="Sustainability">
            Langanhaltendes Wachstum durch eine UX-getriebene Kultur.
          </InfoCard>
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
