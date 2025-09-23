import React from "react";
import DoubleDiamond from "@/components/DoubleDiamond";
import { useActivePhase } from "@/hooks/useActivePhase";

// SwissLife-spezifische Bausteine
import Background from "@/components/SwissLife/Background";
import Methods from "@/components/SwissLife/Methods";
import Insights from "@/components/SwissLife/Insights";
import Personas from "@/components/SwissLife/Personas";
import Journey from "@/components/SwissLife/Journey";
import Model from "@/components/SwissLife/Model";
import Impact from "@/components/SwissLife/Impact";

const SwissLife: React.FC = () => {
  // identisch zum Muster in CarInsurance: Hook bestimmt aktive Phase per Scroll
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

      {/* Vorgehen (Info) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Vorgehen im Design-Thinking-Rahmen</h2>
        <p className="text-foreground max-w-3xl leading-relaxed">
          Double Diamond: Problemraum (Discover/Define) → Lösungsraum (Develop/Deliver).
          So kombinieren wir tiefes Prozessverständnis mit priorisierten Maßnahmen.
        </p>
      </section>

      {/* Sticky DoubleDiamond – wie in CarInsurance: KEINE Box / KEIN bg / KEIN border */}
      <div className="hidden md:block sticky top-20 z-40">
        <DoubleDiamond active={activePhase} />
      </div>

      {/* DISCOVER */}
      <section id="discover" className="space-y-10 scroll-mt-28">
        {/* Mobile: schmaler Diamond */}
        <div className="md:hidden mb-6">
          <DoubleDiamond active="discover" />
        </div>
        <h2 className="text-2xl font-semibold">Discover — Kontextuelle Interviews & Feldbesuche</h2>
        <Methods />
      </section>

      {/* DEFINE */}
      <section id="define" className="space-y-10 scroll-mt-28">
        <div className="md:hidden mb-6">
          <DoubleDiamond active="define" />
        </div>
        <h2 className="text-2xl font-semibold">Define — Synthese & Priorisierung</h2>
        <Insights />
        <Model />
      </section>

      {/* DEVELOP */}
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

      {/* DELIVER */}
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
