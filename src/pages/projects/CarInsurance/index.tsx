import React from "react";
// ✅ DoubleDiamond aus artefacts laden
import DoubleDiamond from "@/components/artefacts/DoubleDiamond";

// ✅ Projekt-spezifische Komponenten liegen in projects/CarInsurance
import JourneyMap_Car from "@/components/projects/CarInsurance/JourneyMap_Car";
import BeforeAfter_Car from "@/components/projects/CarInsurance/BeforeAfter_Car";
import ImpactGrid_Car from "@/components/projects/CarInsurance/ImpactGrid_Car";
import PrototypeAnimationDetailed from "@/components/projects/CarInsurance/PrototypeAnimationDetailed";
import WorkshopAnimation_Car from "@/components/projects/CarInsurance/WorkshopAnimation_Car";

import { useActivePhase } from "@/hooks/useActivePhase";

export default function CarInsurance() {
  const activePhase = useActivePhase();

  return (
    <div className="container-responsive py-16 space-y-40">
      {/* Header */}
      <header className="space-y-6">
        <h1 className="text-4xl font-bold">
          🚗 ADAC – Enhancing the Performance of Insurance Advisors
        </h1>
        <p className="text-foreground max-w-3xl leading-relaxed">
          We collaborated with ADAC to modernize their outdated Kfz insurance
          advisory software, focusing on usability, efficiency, and user trust.
        </p>
      </header>

      {/* Kontext & Herausforderung */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">📌 Kontext & Herausforderung</h2>
        <p className="text-foreground leading-relaxed">
          ADAC advisors in branches used an outdated tool to guide customers
          through Kfz insurance consultations. This led to long, intransparent
          sessions, unclear form fields, and high cognitive load in busy branch
          environments.
        </p>
      </section>

      {/* Einführung ins Vorgehen */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          🌍 Produktentwicklung mit Design Thinking: Ein ganzheitlicher Ansatz
        </h2>
        <p className="text-foreground max-w-3xl leading-relaxed">
          The Design Thinking process is a flexible, iterative, user-centric
          framework to tackle complex challenges through deep user understanding
          and continuous prototyping. In our case, we follow the Double Diamond
          model: exploring the problem space (Discover & Define) and iterating
          in the solution space (Develop & Deliver).
        </p>
      </section>

      {/* Sticky DoubleDiamond – nur Desktop */}
      <div className="hidden md:block sticky top-22 z-40 bg-white shadow-md">
        <DoubleDiamond active={activePhase} />
      </div>

      {/* Discover */}
      <section id="discover" className="space-y-10">
        <div className="md:hidden mb-6">
          <DoubleDiamond active="discover" />
        </div>

        <h2 className="text-2xl font-semibold">🔍 Discover – Research Approach</h2>

        {/* Methodik */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Methodik: Kontextuelle Interviews</h3>
          <p className="text-foreground leading-relaxed">
            Um den realen Beratungskontext zu verstehen, führten wir deutschlandweit
            kontextuelle Interviews direkt in ADAC-Filialen durch. Dabei nahmen wir an
            echten Beratungsgesprächen teil, beobachteten die Nutzung der bestehenden
            Software und hielten detaillierte Notizen fest. Jedes Interview dauerte
            zwischen 90 und 120 Minuten und folgte einem strukturierten Leitfaden.
          </p>
          <p className="text-foreground leading-relaxed">
            Ziel war es, die alltäglichen Arbeitsbedingungen der Beraterinnen und Berater
            abzubilden – inklusive Zeitdruck, Kundenerwartungen und den Herausforderungen
            einer oft unruhigen Filialumgebung.
          </p>
        </div>

        {/* Leitfragen */}
        <div className="space-y-6 mt-8">
          <h3 className="text-xl font-semibold">Leitfragen</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Wie navigieren Berater:innen Kunden Schritt für Schritt durch das Tool?</li>
            <li>Welche Aufgaben und Eingaben sind für den Abschluss einer Kfz-Versicherung kritisch?</li>
            <li>Wo treten Reibungen, Missverständnisse oder Verzögerungen auf?</li>
            <li>Wie wirkt sich die Umgebung (Lautstärke, Zeitdruck) auf das Gespräch aus?</li>
            <li>Welche Strategien wenden Berater:innen an, um Probleme im Gespräch zu umgehen?</li>
          </ul>
        </div>
      </section>

      {/* Define */}
      <section id="define" className="space-y-10">
        <div className="md:hidden mb-6">
          <DoubleDiamond active="define" />
        </div>
        <h2 className="text-2xl font-semibold">🗺 Define Phase</h2>
        <p className="text-foreground leading-relaxed">
          From the research data we synthesized personas and created a detailed
          Counseling Journey Map to visualize advisor workflows, pain points,
          and opportunities.
        </p>
        <JourneyMap_Car />
      </section>

      {/* Develop */}
      <section id="develop" className="space-y-10">
        <div className="md:hidden mb-6">
          <DoubleDiamond active="develop" />
        </div>
        <h2 className="text-2xl font-semibold">🎨 Develop – From Insights to Design</h2>

        {/* Workshops */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Stakeholder Workshops</h3>
          <p className="text-foreground leading-relaxed">
            We ran workshops with ADAC stakeholders to ensure transparency,
            share research findings, answer questions, and prioritize key
            opportunities. This created strong alignment across teams.
          </p>
          <WorkshopAnimation_Car />
        </div>

        {/* Design Principles */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Design Principles</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Pre-fill fields to reduce manual input</li>
            <li>Support orientation with clear navigation</li>
            <li>Reduce complexity of forms and workflows</li>
            <li>Minimize drop-offs with smooth, intuitive flows</li>
          </ul>
        </div>

        {/* Prototyping */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Prototyping</h3>
          <p className="text-foreground leading-relaxed">
            We iteratively moved from low-fidelity wireframes to interactive
            click dummies, validating each step with ADAC advisors through
            usability tests. Feedback guided refinements in navigation,
            language, and structure.
          </p>
          <PrototypeAnimationDetailed />
        </div>
      </section>

      {/* Deliver */}
      <section id="deliver" className="space-y-10">
        <div className="md:hidden mb-6">
          <DoubleDiamond active="deliver" />
        </div>

        <h2 className="text-2xl font-semibold">📈 Deliver & Impact</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Advisor Confidence mit Before/After */}
          <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-blue-700 mb-2">
              🧑‍💻 Advisor Confidence
            </h4>
            <div className="text-sm text-foreground space-y-4">
              <p>Klare Masken, weniger Blind-Eingaben.</p>
              <BeforeAfter_Car
                before={[
                  "Starre Fragebögen – alle Felder zwingend auszufüllen",
                  "Unklare Fachbegriffe",
                  "Langsame, fehleranfällige Navigation",
                ]}
                after={[
                  "Adaptiver Ablauf – kontextsensitive Fragen",
                  "Einfache, verständliche Sprache",
                  "Vereinfachte Navigation mit klaren Schritten",
                ]}
              />
            </div>
          </div>

          {/* Drei kompaktere Impacts */}
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-blue-700 mb-2">
                ⏱ Gesprächsdauer
              </h4>
              <p className="text-sm text-foreground">
                Reduziert von 60–90 Minuten auf 30–45 Minuten.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-blue-700 mb-2">
                🤝 Kundenzufriedenheit
              </h4>
              <p className="text-sm text-foreground">
                Transparente Beratung, höheres Vertrauen.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-blue-700 mb-2">🌐 Innovation</h4>
              <p className="text-sm text-foreground">
                Versicherungsrechner nun auch online für Privatpersonen
                verfügbar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link */}
      <footer className="pt-12">
        <a
          href="https://www.adac.de/produkte/versicherungen/kfz-versicherungen/"
          className="underline text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live: ADAC Kfz-Versicherung
        </a>
      </footer>
    </div>
  );
}
