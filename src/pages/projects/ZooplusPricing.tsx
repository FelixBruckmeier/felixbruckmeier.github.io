import React from "react";
import Background from "@/components/ZooplusPricing/Background";
import Methods from "@/components/ZooplusPricing/Methods";
import Hypotheses from "@/components/ZooplusPricing/Hypotheses";
import DiscussionGuide from "@/components/ZooplusPricing/DiscussionGuide";
import UserJourney_P from "@/components/ZooplusPricing/UserJourney_P";
import VisAWI from "@/components/ZooplusPricing/VisAWI";
import Heatmap from "@/components/ZooplusPricing/Heatmap";
import Findings from "@/components/ZooplusPricing/Findings";
import Impact from "@/components/ZooplusPricing/Impact";
import SectionIcon from "@/components/ZooplusPricing/SectionIcon";

const ZooplusPricing: React.FC = () => {
  return (
    <article className="container-responsive py-16 space-y-20">
      {/* Hero / Intro */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <SectionIcon name="title" />
          <h1 className="text-4xl font-bold">zooplus — Pricing Usability Testing</h1>
        </div>
        <p className="text-muted-foreground">
          Rolle: UX Research Lead (2023–2024) · Studientyp:{" "}
          <strong>Summative Usability Evaluation (vergleichend)</strong> mit
          formativen Elementen.
        </p>
        <p className="max-w-3xl text-base text-muted-foreground">
          Vergleichendes Usability Testing mehrerer Preisdarstellungsvarianten
          im Rahmen des Redesigns. Ziel: herausfinden, welche Darstellung
          Nutzer:innen am besten verstehen und der Preislogik am meisten vertrauen.
        </p>
      </section>

      {/* Projektüberblick */}
      <section className="space-y-12">
        <h2 className="flex items-center text-2xl font-semibold">
          <SectionIcon name="context" /> Kontext & Zielsetzung
        </h2>
        <Background />
      </section>

      {/* Vorgehen */}
      <section className="space-y-12">
        <h2 className="flex items-center text-2xl font-semibold">
          <SectionIcon name="methods" /> Vorgehen & Methoden
        </h2>
        <Methods />
        <Hypotheses />

        {/* Diskussionsleitfaden */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Diskussionsleitfaden</h3>
          <DiscussionGuide />
        </div>
      </section>

      {/* Outputs & Artefacts */}
      <section className="space-y-12">
        <h2 className="flex items-center text-2xl font-semibold">
          <SectionIcon name="journey" /> Outputs & Artefacts
        </h2>

        {/* Journey */}
        <div>
          <h3 className="text-xl font-semibold mb-3">User Journey (Pricing Perception)</h3>
          <p className="text-muted-foreground mb-4">
            Darstellung der Wahrnehmung entlang der Journey – von der Homepage über
            PLP und PDP bis zum Warenkorb. Zeigt, wo Preise verstanden werden und
            wo Missverständnisse entstehen.
          </p>
          <UserJourney_P />
        </div>

        {/* VisAWI */}
        <div>
          <h3 className="text-xl font-semibold mb-3">VisAWI Ergebnisse</h3>
          <p className="text-muted-foreground mb-4">
            Neben der funktionalen Prüfung wurde die visuelle Qualität bewertet.
            Dies dient als Rückversicherung, dass die getestete Variante auch
            ästhetisch konsistent und vertrauenswürdig wirkt.
          </p>
          <VisAWI />
        </div>

        {/* Heatmap */}
        <div>
          <h3 className="text-xl font-semibold mb-3">PDP-Heatmap (simuliert)</h3>
          <p className="text-muted-foreground mb-4">
            Die simulierte Heatmap zeigt, welche Bereiche auf der
            Produktdetailseite am stärksten fixiert wurden. Ziel war es zu prüfen,
            ob Preiskomponenten (Abo, Promo, durchgestrichene Preise) klar erfasst
            werden oder hinter Produktbildern zurücktreten.
          </p>
          <Heatmap />
        </div>
      </section>

      {/* Insights & Synthese */}
      <section className="space-y-12">
        <h2 className="flex items-center text-2xl font-semibold">
          <SectionIcon name="insights" /> Insights & Synthese
        </h2>
        <Findings />
      </section>

      {/* Impact & Nächste Schritte */}
      <section className="space-y-12">
        <h2 className="flex items-center text-2xl font-semibold">
          <SectionIcon name="impact" /> Impact & Nächste Schritte
        </h2>
        <Impact />
      </section>
    </article>
  );
};

export default ZooplusPricing;

