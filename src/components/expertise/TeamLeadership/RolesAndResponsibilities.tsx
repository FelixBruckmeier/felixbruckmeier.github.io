import React from "react";
import RolesViz, { RoleItem } from "./RolesViz"; // Import deiner Rollenrad/Wolke-Komponente
import Section from "@/components/expertise/Section";
import InfoCard from "@/components/expertise/InfoCard";

// Rollen-Daten mit Gewichten (anpassbar)
const MY_ROLES: RoleItem[] = [
  { name: "UX Researcher", group: "Research", weight: 28 },
  { name: "CX Analyst", group: "Research", weight: 16 },
  { name: "Journey Manager", group: "Research", weight: 12 },

  { name: "UX Designer", group: "Design", weight: 10 },
  { name: "Interaction Designer", group: "Design", weight: 6 },
  { name: "Service Designer", group: "Design", weight: 8 },
  { name: "UI / Visual Designer", group: "Design", weight: 4 },

  { name: "UX Manager", group: "Strategie & Management", weight: 16 },
  { name: "UX Strategist", group: "Strategie & Management", weight: 14 },
  { name: "Design Manager", group: "Strategie & Management", weight: 10 },
  { name: "Requirements Engineer", group: "Strategie & Management", weight: 6 },

  { name: "Accessibility Specialist", group: "Spezialisiert", weight: 6 },
  { name: "UX Writer", group: "Spezialisiert", weight: 4 },
  { name: "UI Developer", group: "Spezialisiert", weight: 4 },
  { name: "UX Architect", group: "Spezialisiert", weight: 6 },
];

// Kurzbeschreibung pro Rolle (aus deinem Dokument gekürzt)
const ROLE_SUMMARIES: Record<string, string> = {
  "UX Researcher":
    "Analysiert Bedürfnisse, Kontexte und Erwartungen der Nutzer, führt Studien durch und übersetzt Erkenntnisse in Insights für Produktentscheidungen.",
  "CX Analyst":
    "Misst und analysiert Kundenerfahrungen über alle Touchpoints hinweg, identifiziert Pain Points und unterstützt die Entwicklung von Verbesserungen.",
  "Journey Manager":
    "Macht Customer- und User-Journeys transparent, identifiziert Verbesserungspotenziale und baut Brücken zwischen Organisationseinheiten.",
  "UX Designer":
    "Konzipiert und gestaltet Interfaces und Interaktionen, um intuitive und effiziente Nutzererlebnisse sicherzustellen.",
  "Interaction Designer":
    "Gestaltet die Interaktion zwischen Mensch und digitalem Produkt – Fokus auf Prozesse, Dialoge und Animationen.",
  "Service Designer":
    "Analysiert Nutzerbedürfnisse und entwirft Services und Journeys, die konsistente Erlebnisse ermöglichen.",
  "UI / Visual Designer":
    "Verantwortlich für visuelles und ästhetisches Design digitaler Interfaces, abgestimmt auf Markenbotschaften und Nutzerpräferenzen.",
  "UX Manager":
    "Organisiert Strukturen, Prozesse und Teams, etabliert UX-Strategien und fördert eine nutzerzentrierte Kultur.",
  "UX Strategist":
    "Berät und befähigt Unternehmen, UX-Strategien mit Business-Zielen zu verbinden und UX in Entscheidungsprozesse einzubetten.",
  "Design Manager":
    "Verantwortet die Designqualität, Konsistenz über Touchpoints hinweg und entwickelt Designstrategien.",
  "Requirements Engineer":
    "Ermittelt, spezifiziert und verwaltet Anforderungen an Produkte basierend auf Kunden- und Nutzerbedürfnissen.",
  "Accessibility Specialist":
    "Sorgt für barrierefreie digitale Produkte, führt Accessibility-Tests durch und schult Teams in inklusivem Design.",
  "UX Writer":
    "Entwickelt klare und konsistente Texte in Interfaces, die Nutzer leiten und ein positives Erlebnis ermöglichen.",
  "UI Developer":
    "Setzt UI-Designs technisch um, entwickelt interaktive Elemente und stellt sicher, dass Standards wie Responsiveness und Accessibility eingehalten werden.",
  "UX Architect":
    "Gestaltet die UX auf konzeptioneller und strategischer Ebene, entwickelt Journeys, Konzepte und Designprozesse.",
};

export default function RolesAndResponsibilities() {
  return (
    <Section title="Rollen & Verantwortlichkeiten">
      {/* Meine Perspektive */}
      <p className="max-w-3xl mb-8 text-slate-700">
        Jobrollen im CX- und UX-Bereich sind für mich keine starren Schubladen,
        sondern dynamische Profile. Je nach Unternehmensgröße, Reifegrad und
        Kontext übernehme ich **mehrere Rollen parallel**: manchmal stärker
        operativ im Research, manchmal strategisch als Manager oder Enabler.{" "}
        <br />
        Statt mich starr als „Researcher“ oder „UX Manager“ zu labeln, kombiniere
        ich situativ Kompetenzen und Verantwortlichkeiten – vom
        evidenzbasierten Research über Design bis hin zu Strategie &
        Enablement. So entsteht messbarer Impact dort, wo er gebraucht wird.
      </p>

      {/* Rollenrad / Rollenwolke */}
      <div className="mb-12">
        <RolesViz
          roles={MY_ROLES}
          initialView="wheel"
          title="Mein Rollenprofil"
          subtitle="Ich kombiniere Rollen situativ – je nach Auftrag, Kontext und Teamstruktur."
          note="Die Segmentgröße (Rad) bzw. Schriftgröße (Wolke) spiegelt wider, wie häufig/zentral ich diese Rolle übernehme."
        />
      </div>

      {/* Kurzbeschreibungen */}
      <div className="grid md:grid-cols-2 gap-6">
        {MY_ROLES.map((role) => (
          <InfoCard key={role.name} title={role.name}>
            {ROLE_SUMMARIES[role.name]}
          </InfoCard>
        ))}
      </div>
    </Section>
  );
}

