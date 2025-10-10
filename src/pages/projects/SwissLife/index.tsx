import React from "react";
import { useActivePhase } from "@/hooks/useActivePhase";

// Artefakte
import DoubleDiamond from "@/components/artefacts/DoubleDiamond";

// Projekt-spezifische Bausteine
import Background from "@/components/projects/SwissLife/Background";
import Methods from "@/components/projects/SwissLife/Methods";
import Insights from "@/components/projects/SwissLife/Insights";
import Personas from "@/components/projects/SwissLife/Personas";
import Journey from "@/components/projects/SwissLife/Journey";
import Model from "@/components/projects/SwissLife/Model";
import Impact from "@/components/projects/SwissLife/Impact";

const SwissLife: React.FC = () => {
  const activePhase = useActivePhase();

  return (
    <article className="container-responsive py-16 space-y-40">
      {/* Hero */}
      <header className="space-y-6">
        <h1 className="text-4xl font-bold">Swiss Life — B2B2C UX Research (Makler:innen)</h1>
        <p className="text-foreground max-w-3xl leading-relaxed">
          Kontextuelle Interviews & Feldbesuche, Synthese mit Clustern (Grounded Theory),
          Priorisierung per Kano — als Design-Thinking Use Case entlang des Double Diamond.
        </p>
      </header>

      {/* Kontext & Zielsetzung */}
      <section className="space-y-6" id="context">
        <h2 className="text-2xl font-semibold">Kontext & Zielsetzung</h2>
        <Background />
      </section>

      {/* Vorgehen */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Vorgehen im Design-Thinking-Rahmen</h2>
        <p className="text-foreground max-w-3xl leading-relaxed">
          Double Diamond: Problemraum (Discover/Define) → Lösungsraum (Develop/Deliver).
          So kombinieren wir tiefes Prozessverständnis mit priorisierten Maßnahmen.
        </p>
      </section>

      {/* Sticky DoubleDiamond */}
      <div className="hidden md:block sticky top-20 z-40">
        <DoubleDiamond active={activePhase} />
      </div>

      {/* Discover */}
      <section id="discover" className="space-y-10 scroll-mt-28">
        <div className="md:hidden mb-6">
          <DoubleDiamond active="discover" />
        </div>
        <h2 className="text-2xl font-semibold">Discover — Kontextuelle Interviews & Feldbesuche</h2>
        <Methods />
      </section>

      {/* Define */}
      <section id="define" className="space-y-10 scroll-mt-28">
        <div className="md:hidden mb-6">
          <DoubleDiamond active="define" />
        </div>
        <h2 className="text-2xl font-semibold">Define — Synthese & Priorisierung</h2>
        <Insights />
        <Model />
      </section>

      {/* Develop */}
      <section id="develop" className="space-y-10 scroll-mt-28">
        <div className="md:hidden mb-6">
          <DoubleDiamond active="develop" />
        </div>
        <h2 className="text-2xl font-semibold">Develop — Artefakte & Modelle</h2>
        <div className="space-y-10">
          <Personas />
          <Journey />
        </div>
      </section>

      {/* Deliver */}
      <section id="deliver" className="space-y-10 scroll-mt-28">
        <div className="md:hidden mb-6">
          <DoubleDiamond active="deliver" />
        </div>
        <h2 className="text-2xl font-semibold">Deliver — Impact & Nächste Schritte</h2>
        <Impact />
      </section>
    </article>
  );
};

export default SwissLife;
