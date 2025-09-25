import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Users,
  Boxes,
  TrendingUp,
  Network,
  Calendar,
  Award,
  Lightbulb,
} from "lucide-react";

import StakeholderGuide from "@/components/AtossReOps/StakeholderGuide";
import AffinityMap from "@/components/AtossReOps/AffinityMap";
import MaturityChart from "@/components/AtossReOps/MaturityChart";
import MeasuresMatrix from "@/components/AtossReOps/MeasuresMatrix";
import ResearchRoadmap from "@/components/AtossReOps/ResearchRoadmap";
import ImpactGrid from "@/components/AtossReOps/ImpactGrid";

export default function AtossReOps() {
  return (
    <div className="container-responsive py-16 space-y-40">
      {/* Header */}
      <header className="space-y-6">
        <h1 className="text-4xl font-bold">
          ATOSS – ResearchOps-Strategie: Vom Status Quo zur Umsetzung
        </h1>
        <p className="text-foreground max-w-3xl leading-relaxed">
          Ausgangslage: UX Research war bei ATOSS punktuell vorhanden, ohne klare
          Rollen, Prozesse oder Wissensmanagement. Mein Auftrag: ein{" "}
          <b>ResearchOps-Programm</b> aufzusetzen, das UX Research
          professionalisiert, skaliert und strategisch verankert.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "ResearchOps",
            "Assessment",
            "Governance",
            "Repository",
            "OKRs",
            "Roadmap",
          ].map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-full border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* 1) ResearchOps Maturity Assessment */}
      <section className="space-y-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <ClipboardList className="w-6 h-6 text-blue-500" />
          ResearchOps Maturity Assessment (Prozess)
        </h2>

        {/* 1.1 Interviews */}
        <div className="mt-20 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-500" />
            Stakeholder-Interviews – Analyse der aktuellen Situation
          </h3>
          <p className="text-foreground max-w-3xl leading-relaxed">
            <b>Warum:</b> Um ein umfassendes, <i>ungefiltertes</i> Bild aus
            erster Hand zu erhalten: Wie wird Research heute betrieben? Welche
            Probleme und Chancen sehen Teams &amp; Management?
          </p>
          <StakeholderGuide />
        </div>

        {/* 1.2 Analyse & Synthese */}
        <div className="mt-20 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Boxes className="w-5 h-5 text-blue-500" />
            Analyse &amp; Synthese – Affinity Map &amp; Cluster
          </h3>
          <p className="text-foreground max-w-3xl leading-relaxed">
            <b>Warum:</b> Erkenntnisse strukturieren, Muster und Abhängigkeiten
            sichtbar machen, Schwerpunkte setzen, Problemstellungen und Chancen
            herausarbeiten.
          </p>
          <AffinityMap />
        </div>

        {/* 1.3 Einordnung des Reifegrads */}
        <div className="mt-20 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            Einordnung des Reifegrads
          </h3>
          <p className="text-foreground max-w-3xl leading-relaxed">
            <b>Warum:</b> Objektive Standortbestimmung und Vergleichbarkeit.
            ATOSS lag zu Projektbeginn <b>zwischen Level 1 und 2</b> – Research
            existierte punktuell, war aber weder standardisiert noch skalierbar.
          </p>
          <MaturityChart currentLevel={1.6} targetLevel={3} />
        </div>
      </section>

      {/* 2) Maßnahmen-Framework & Priorisierung */}
      <section className="space-y-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Network className="w-6 h-6 text-blue-500" />
          Maßnahmen-Framework &amp; Priorisierung
        </h2>
        <p className="text-foreground max-w-3xl leading-relaxed">
          Aus der Einordnung im Framework lassen sich{" "}
          <b>passende Maßnahmen je Dimension</b> ableiten (Governance, Insights
          Activation, Process &amp; Scope, Tools &amp; Automation, Alignment
          &amp; Evangelization, Resources &amp; Strategy). Diese werden nach{" "}
          <i>Machbarkeit, Ressourcen und Wirkung</i> priorisiert und in einer
          2×2-Matrix (Impact/Effort) verortet.
        </p>
        <MeasuresMatrix />
      </section>

      {/* 3) ResearchOps Roadmap & strategische Integration */}
      <section className="space-y-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Calendar className="w-6 h-6 text-blue-500" />
          ResearchOps Roadmap &amp; strategische Integration
        </h2>
        <p className="text-foreground max-w-3xl leading-relaxed">
          Priorisierung und zeitliche Staffelung der wichtigsten Maßnahmen – was
          sofort beginnt, was als nächstes kommt, und welche Themen später
          adressiert werden.
        </p>
        <ResearchRoadmap />
      </section>

      {/* 4) Ergebnisse */}
      <section className="space-y-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Award className="w-6 h-6 text-blue-500" />
          Ergebnisse &amp; Impact
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
          <li>
            Transparenz über Reifegrad &amp; Handlungsfelder – fundierte
            Diskussion statt Bauchgefühl.
          </li>
          <li>
            Priorisierte Maßnahmenliste je Dimension – auf ATOSS zugeschnitten.
          </li>
          <li>
            Quick Wins: Research-Kalender, Templates, Repository-Struktur,
            Readout-Ritual.
          </li>
          <li>
            Strategische Sichtbarkeit: ReOps in OKRs integriert, klarer
            Wertbeitrag für Entscheidungen.
          </li>
          <li>
            Kultureller Wandel: von „UX macht Mockups“ → „Research treibt
            Strategie &amp; Priorisierung“.
          </li>
        </ul>
      </section>

      {/* 5) Meine Rolle & Qualitäten */}
      <section className="space-y-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-blue-500" />
          Meine Rolle &amp; Qualitäten
        </h2>
        <ImpactGrid
          items={[
            {
              title: "Systematisch & methodisch",
              desc: "Ich habe ResearchOps wie ein Research-Projekt aufgesetzt: Interviews → Analyse → Framework-Einordnung.",
            },
            {
              title: "Übersetzer zwischen Welten",
              desc: "Management, Produkt, Entwicklung und UX an einen Tisch gebracht – gemeinsames Bild und Commitment erzeugt.",
            },
            {
              title: "Strategisch denkend",
              desc: "Maßnahmen mit Unternehmens-OKRs verzahnt; Research als strategischen Enabler positioniert.",
            },
            {
              title: "Change Agent",
              desc: "Strukturen geschaffen, Kulturimpulse gesetzt und Wirkung schnell sichtbar gemacht (Quick Wins).",
            },
            {
              title: "Storytelling & Alignment",
              desc: "Komplexes in Frameworks, Roadmaps und Visuals übersetzt – Entscheidungen werden leichter.",
            },
          ]}
        />
      </section>

      {/* Abschlusslinie */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}
