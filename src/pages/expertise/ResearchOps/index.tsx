import { ArrowRight } from "lucide-react";
import Section from "@/components/expertise/Section";
import InfoCard from "@/components/expertise/InfoCard";
import ReOpsWheel from "@/components/expertise/researchops/ReOpsWheel";
import ResearchOpsMaturityTimeline from "@/components/expertise/researchops/ResearchOpsMaturityTimeline";

export default function ResearchOps() {
  return (
    <div className="flex flex-col gap-20 px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-6">ResearchOps</h1>
        <h2 className="text-xl text-muted-foreground mb-8">
          Scaling Research, Empowering Teams
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          ResearchOps ist das Betriebssystem für User Research. 
          Es schafft Strukturen und Standards, die Forschung effizient, nachhaltig 
          und wirkungsvoll machen. So wird Research zu einem strategischen Partner, 
          der den Wert von Insights im gesamten Unternehmen sichtbar und nutzbar macht.
        </p>
      </section>

      {/* Warum */}
      <Section title="Why ResearchOps?">
        <p className="max-w-3xl">
          ResearchOps etabliert Standards, Infrastruktur und Kultur, die Forschung 
          skalierbar, reproduzierbar und messbar machen. Dadurch können Research-Teams 
          ihre volle Wirkung entfalten und Unternehmen profitieren von konsistenten, 
          qualitativ hochwertigen Insights.
        </p>
      </Section>

      {/* Wheel */}
      <Section title="The 6 Key Areas of ResearchOps">
        <p className="mb-6 max-w-3xl">
          Das ReOps Maturity Modell beschreibt sechs Bereiche, die zusammen ein 
          Framework für Research Excellence bilden. Fällt ein Bereich aus, leidet 
          die gesamte Wertschöpfung.
        </p>
        <ReOpsWheel />
      </Section>

      {/* Timeline */}
      <Section title="ResearchOps Maturity Timeline">
        <p className="mb-6 max-w-3xl">
          Die ReOps-Reife entwickelt sich in vier Stufen:{" "}
          <strong>Foundational</strong>, <strong>Emerging</strong>,{" "}
          <strong>Integrated</strong> und <strong>Optimized</strong>.  
          Jede Stufe umfasst alle sechs Key Areas und zeigt, wie Organisationen 
          ihre ResearchOps schrittweise professionalisieren und skalieren können.
        </p>
        <ResearchOpsMaturityTimeline />
      </Section>

      {/* Outcomes */}
      <Section title="The Value of ResearchOps">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard title="Efficiency">
            Weniger Admin, mehr Zeit für echte Forschung.
          </InfoCard>
          <InfoCard title="Consistency">
            Einheitliche Standards und Qualität über Projekte hinweg.
          </InfoCard>
          <InfoCard title="Impact">
            Insights werden auffindbar, teilbar und strategisch nutzbar.
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
