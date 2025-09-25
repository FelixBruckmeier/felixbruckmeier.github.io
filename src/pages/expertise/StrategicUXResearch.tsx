// src/pages/expertise/StrategicUXResearch.tsx

import { ArrowRight } from "lucide-react";
import Section from "@/components/expertise/Section";
import InfoCard from "@/components/expertise/InfoCard";

// Neue spezifische Komponenten für diese Seite
import ResearchOKRMap from "@/components/expertise/strategicuxresearch/ResearchOKRMap";
import ResearchFramework from "@/components/expertise/strategicuxresearch/ResearchFramework";
import RITECycle from "@/components/expertise/strategicuxresearch/RITECycle";

export default function StrategicUXResearch() {
  return (
    <div className="flex flex-col gap-20 px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-6">Strategic UX Research</h1>
        <h2 className="text-xl text-muted-foreground mb-8">
          Aligning Research with Business Goals
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Strategic UX Research goes beyond usability studies. It ensures that 
          research is directly tied to business outcomes, guiding product teams 
          to make decisions that deliver both <em>user value</em> and 
          <em> business impact</em>.
        </p>
      </section>

      {/* Why */}
      <Section title="Why Strategic UX Research Matters">
        <p className="max-w-3xl">
          Without a strategic approach, research remains tactical and isolated. 
          I ensure every study is tied to company OKRs, making research a driver 
          of innovation, alignment, and sustainable growth.
        </p>
      </Section>

      {/* UX Research OKRs */}
      <Section title="UX Research OKRs: Bridging Users & Business">
        <p className="mb-6 max-w-3xl">
          By creating UX Research OKRs, I connect user insights directly to 
          organizational priorities. This creates focus, demonstrates impact, 
          and ensures strategic alignment across teams.
        </p>
        <ResearchOKRMap />
      </Section>

      {/* Framework */}
      <Section title="My Research Planning Framework">
        <p className="mb-6 max-w-3xl">
          Based on Erika Hall’s principles, I use a six-phase framework to 
          ensure clarity, focus, and integration of research into strategy.
        </p>
        <ResearchFramework />
      </Section>

      {/* RITE */}
      <Section title="Rapid Iterative Testing (RITE)">
        <p className="mb-6 max-w-3xl">
          To stay agile, I use RITE cycles: rapid, continuous testing with 
          immediate adjustments. This reduces risk, accelerates time-to-market, 
          and increases stakeholder confidence.
        </p>
        <RITECycle />
      </Section>

      {/* Outcomes */}
      <Section title="The Value of Strategic UX Research">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard title="Alignment">
            Every research effort is tied directly to business OKRs.
          </InfoCard>
          <InfoCard title="Impact">
            Research insights drive strategic product and design decisions.
          </InfoCard>
          <InfoCard title="Confidence">
            Stakeholders trust research because it shows measurable value.
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
