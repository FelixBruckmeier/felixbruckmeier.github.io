/* eslint-disable react/no-unknown-property */
export type Area = {
  name: string;
  description: string;
  recommendation: string;
  color: string;
};

export type Stage = {
  level: "Foundational" | "Emerging" | "Integrated" | "Optimized";
  label: string;
  description: string;
  areas: Area[];
};

export const stages: Stage[] = [
  {
    level: "Foundational",
    label: "Stage 1",
    description:
      "In der Foundational-Stufe ist Research stark fragmentiert und basiert auf Ad-hoc-Initiativen. Es gibt kaum Rollen, keine klaren Verantwortlichkeiten und keine konsistenten Prozesse. Risiken entstehen durch fehlende Governance und mangelnde Infrastruktur. Research wird zwar durchgeführt, hat aber noch wenig Sichtbarkeit oder nachhaltigen Impact.",
    areas: [
      {
        name: "Governance",
        description:
          "Es existieren keine konsistenten Standards für Datenschutz, Einwilligung oder Ethik. Research wird ohne klare Regeln durchgeführt, wodurch rechtliche Risiken entstehen und das Vertrauen von Nutzern und Stakeholdern geschwächt wird. Es fehlt ein gemeinsames Verständnis dafür, warum Governance wichtig ist.",
        recommendation:
          "Beginne mit der Einführung einfacher, dokumentierter Richtlinien für Consent und Datenschutz. Kläre Verantwortlichkeiten und etabliere erste Bewusstseinsbildung für ethisches Research. Schon kleine Standards schaffen Transparenz und minimieren Risiken.",
        color: "#E8ECF7",
      },
      {
        name: "People",
        description:
          "Research wird überwiegend von Einzelpersonen getragen. Es gibt keine Community, keine klaren Rollen und kein systematisches Onboarding. Wissen hängt stark von einzelnen Personen ab, wodurch Abhängigkeiten entstehen.",
        recommendation:
          "Baue erste Schulungsangebote oder Onboarding-Materialien auf. Fördere den Austausch durch kleine Formate wie Lunch & Learn oder Communities of Practice. Ziel ist es, eine erste Basis für gemeinsames Lernen zu schaffen.",
        color: "#EAF7F1",
      },
      {
        name: "Knowledge Management",
        description:
          "Research-Ergebnisse liegen verstreut in Präsentationen, Dokumenten oder persönlichen Dateien. Insights sind schwer auffindbar, wenig zugänglich und oft nicht wiederverwendbar. Dadurch geht Wissen schnell verloren.",
        recommendation:
          "Führe eine erste zentrale Ablage ein, z. B. ein Repository oder Wiki. Stelle sicher, dass Studien und Ergebnisse zumindest auffindbar und zugänglich sind. So legst du die Grundlage für langfristige Wiederverwendbarkeit.",
        color: "#FFF3E6",
      },
      {
        name: "Tools & Infrastructure",
        description:
          "Es werden verschiedene Tools genutzt, die individuell von einzelnen Teams beschafft wurden. Es gibt keine Standards, keine zentralen Lizenzen und keine Integration. Dadurch entstehen hohe Kosten und ineffiziente Workflows.",
        recommendation:
          "Beginne mit der Konsolidierung der wichtigsten Tools. Stelle zentrale Lizenzen bereit, um Kosten zu senken und Zugang für alle zu ermöglichen. Erste gemeinsame Standards erleichtern die Zusammenarbeit.",
        color: "#E9F2FF",
      },
      {
        name: "Process & Scope",
        description:
          "Prozesse sind nicht definiert, Research erfolgt ad-hoc. Recruiting, Einwilligung und Auswertung laufen unkoordiniert, was zu Reibungsverlusten führt. Scope und Mehrwert von Research sind nicht klar.",
        recommendation:
          "Definiere einfache, wiederholbare Workflows für Kernaufgaben wie Recruiting und Consent. Dokumentiere diese, um Transparenz und Wiederholbarkeit zu schaffen. So entsteht die Basis für standardisierte Prozesse.",
        color: "#FFF3E6",
      },
      {
        name: "Organizational Alignment",
        description:
          "Research ist im Unternehmen weitgehend unsichtbar und wird isoliert betrieben. Stakeholder sehen Research oft nicht als wertvollen Beitrag. Ergebnisse haben wenig Einfluss auf Entscheidungen.",
        recommendation:
          "Starte mit Stakeholder-Interviews und biete erste Readouts an. Zeige auf, welchen konkreten Mehrwert Research schaffen kann. Sichtbarkeit ist der erste Schritt zu mehr Akzeptanz und Einfluss.",
        color: "#F9E8EE",
      },
    ],
  },
  {
    level: "Emerging",
    label: "Stage 2",
    description:
      "In der Emerging-Stufe wird Research sichtbarer. Erste Rollen entstehen, grundlegende Standards und Policies werden eingeführt. Tools werden vereinheitlicht und erste Prozesse etabliert. Research gewinnt an Relevanz, bleibt aber oft noch punktuell und unsystematisch.",
    areas: [
      {
        name: "Governance",
        description:
          "Erste Policies entstehen, Verantwortlichkeiten sind sichtbar. Datenschutz und Consent werden zunehmend berücksichtigt, allerdings noch nicht einheitlich umgesetzt.",
        recommendation:
          "Dokumentiere bestehende Standards und verankere sie im Alltag. Sorge dafür, dass klare Verantwortlichkeiten für Governance existieren. Ein systematischer Ansatz reduziert Risiken und schafft Vertrauen.",
        color: "#E8ECF7",
      },
      {
        name: "People",
        description:
          "Eine erste Community of Practice bildet sich, und es gibt vereinzelte Trainingsangebote. Rollenprofile werden klarer, doch Weiterbildung bleibt optional.",
        recommendation:
          "Baue Mentoring-Programme auf und fördere UX Literacy im gesamten Unternehmen. Ziel ist, Research-Kompetenz breiter zu verankern und Abhängigkeiten von Einzelpersonen zu verringern.",
        color: "#EAF7F1",
      },
      {
        name: "Knowledge Management",
        description:
          "Repositories entstehen, die einen ersten Überblick über Insights geben. Standards für Struktur und Ablage fehlen jedoch, sodass die Nutzbarkeit eingeschränkt bleibt.",
        recommendation:
          "Führe Metadaten-Standards ein und verbessere die Suchbarkeit. Ein Repository muss nicht nur speichern, sondern auch Zugänglichkeit und Wiederverwendung fördern.",
        color: "#FFF3E6",
      },
      {
        name: "Tools & Infrastructure",
        description:
          "Einheitliche Toolsets entstehen, die von mehreren Teams genutzt werden. Integration zwischen Tools fehlt jedoch, was Silos schafft.",
        recommendation:
          "Definiere Tool-Governance und implementiere Sicherheitsstandards. Beginne mit der Integration, um Doppelarbeit zu vermeiden und Workflows zu vereinfachen.",
        color: "#E9F2FF",
      },
      {
        name: "Process & Scope",
        description:
          "Basis-Workflows sind dokumentiert, und erste ResearchOps-Rollen entstehen. Prozesse gelten jedoch oft nur für bestimmte Teams oder Projekte.",
        recommendation:
          "Skaliere Workflows auf komplexere Methoden wie Diary Studies oder internationale Tests. Erweitere die Standards, damit sie teamübergreifend nutzbar sind.",
        color: "#FFF3E6",
      },
      {
        name: "Organizational Alignment",
        description:
          "Research wird zunehmend sichtbar, Cross-Team-Kollaboration beginnt. Stakeholder sind interessiert, doch Research ist noch kein zentraler Bestandteil strategischer Entscheidungen.",
        recommendation:
          "Führe regelmäßige Reviews mit Stakeholdern ein. Passe Research-Readouts stärker an Business-Ziele an, um Wirkung und Relevanz zu steigern.",
        color: "#F9E8EE",
      },
    ],
  },
  {
    level: "Integrated",
    label: "Stage 3",
    description:
      "In der Integrated-Stufe ist Research etabliert und methodisch vielfältig. Rollen, Prozesse und Tools sind teamübergreifend integriert. Research hat eine feste Rolle in Projekten und beeinflusst zunehmend Entscheidungen. Knowledge Management wird professionalisiert.",
    areas: [
      {
        name: "Governance",
        description:
          "Policies und Standards sind dokumentiert und werden verbindlich eingehalten. Datenschutz, Legal und Compliance sind aktiv eingebunden.",
        recommendation:
          "Führe Qualitätssicherungssysteme und Audits ein, um Standards kontinuierlich zu überprüfen. Nutze Feedback-Loops, um Governance dynamisch weiterzuentwickeln.",
        color: "#E8ECF7",
      },
      {
        name: "People",
        description:
          "Researcher haben klare Rollen und sind in Teams integriert. Weiterbildung ist etabliert, und es gibt Programme zur Förderung von Research-Skills.",
        recommendation:
          "Definiere Karrierepfade und biete Zertifizierungen an. Damit stärkst du Motivation und bindest Talente langfristig.",
        color: "#EAF7F1",
      },
      {
        name: "Knowledge Management",
        description:
          "Ein Repository ist etabliert und wird aktiv genutzt. Insights werden systematisch geteilt und fließen in Projekte ein.",
        recommendation:
          "Automatisiere Prozesse wie Tagging und Reporting. Integriere Insights direkt in Produktentscheidungen, um strategische Wirkung zu erzielen.",
        color: "#FFF3E6",
      },
      {
        name: "Tools & Infrastructure",
        description:
          "Zentralisierte Toolchains sind vorhanden und teamübergreifend integriert. Workflows sind effizienter und konsistenter.",
        recommendation:
          "Prüfe regelmäßig die Skalierbarkeit und evaluiere Automatisierungspotenziale. So bleibt die Toolchain zukunftsfähig.",
        color: "#E9F2FF",
      },
      {
        name: "Process & Scope",
        description:
          "Standardisierte und skalierbare Workflows existieren. Research-Prozesse sind teamübergreifend anerkannt und integriert.",
        recommendation:
          "Baue Prozesse für internationale Studien und Mixed-Methods aus. So erweiterst du die Wirkung von Research auf globaler Ebene.",
        color: "#FFF3E6",
      },
      {
        name: "Organizational Alignment",
        description:
          "Research ist Teil von Roadmaps und OKRs. Stakeholder beziehen Research systematisch in Entscheidungen ein.",
        recommendation:
          "Verankere Research in strategischen Unternehmenszielen und fördere cross-funktionale Programme. Damit wird Research zu einem festen Bestandteil der Produktstrategie.",
        color: "#F9E8EE",
      },
    ],
  },
  {
    level: "Optimized",
    label: "Stage 4",
    description:
      "In der Optimized-Stufe ist Research strategisch verankert. Prozesse, Tools und Strukturen sind skalierbar und kontinuierlich optimiert. Research liefert nicht nur Insights, sondern wird aktiv als Wettbewerbsvorteil genutzt. Eine starke Research-Kultur ist im gesamten Unternehmen etabliert.",
    areas: [
      {
        name: "Governance",
        description:
          "Governance ist vollständig etabliert und Teil der Unternehmenskultur. Standards werden regelmäßig überprüft und weiterentwickelt.",
        recommendation:
          "Nutze Benchmarks und Best Practices, um Governance kontinuierlich zu verbessern. Etabliere Feedback-Loops, die Lernen und Innovation fördern.",
        color: "#E8ECF7",
      },
      {
        name: "People",
        description:
          "Die Research-Community ist stark und breit aufgestellt. Research wird als strategische Kompetenz verstanden, Leadership ist sichtbar.",
        recommendation:
          "Fördere Thought Leadership und externe Beiträge, um die Position der Organisation im Markt zu stärken. Nutze interne Role Models, um Kultur und Motivation zu sichern.",
        color: "#EAF7F1",
      },
      {
        name: "Knowledge Management",
        description:
          "Das Repository ist voll integriert und liefert strategische Insights. Research-Ergebnisse treiben aktiv Unternehmensentscheidungen.",
        recommendation:
          "Nutze AI und Predictive Analytics, um aus Insights frühzeitige Trends abzuleiten. Stärke den strategischen Einfluss durch datengetriebene Prognosen.",
        color: "#FFF3E6",
      },
      {
        name: "Tools & Infrastructure",
        description:
          "Toolchains sind global standardisiert und stark automatisiert. Effizienz und Konsistenz sind auf höchstem Niveau.",
        recommendation:
          "Integriere kontinuierlich neue Technologien wie AI oder Automatisierung. Nutze Innovation, um die Toolchain flexibel und leistungsfähig zu halten.",
        color: "#E9F2FF",
      },
      {
        name: "Process & Scope",
        description:
          "Research-Prozesse sind global konsistent und kontinuierlich optimiert. Innovation wird aktiv integriert.",
        recommendation:
          "Sichere Skalierung und laufende Prozessverbesserung. Stelle sicher, dass Research weltweit als Hebel für Innovation genutzt wird.",
        color: "#FFF3E6",
      },
      {
        name: "Organizational Alignment",
        description:
          "Research ist fester Bestandteil der Unternehmensstrategie und wird als Wettbewerbsvorteil genutzt. Kultur und Prozesse sind langfristig etabliert.",
        recommendation:
          "Positioniere Research als Kernbestandteil der Unternehmensführung. Nutze Research als Treiber für nachhaltiges Wachstum und Innovation.",
        color: "#F9E8EE",
      },
    ],
  },
];
