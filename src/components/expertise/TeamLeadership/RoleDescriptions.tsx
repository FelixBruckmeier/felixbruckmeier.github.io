// src/components/expertise/TeamLeadership/RoleDescriptions.tsx

type RoleDescription = {
  role: string;
  description: string;
};

const roleDescriptions: RoleDescription[] = [
  {
    role: "UX Researcher",
    description:
      "Verantwortlich für Planung, Durchführung und Auswertung von Research. Liefert die Evidenz für nutzerzentrierte Entscheidungen.",
  },
  {
    role: "UX Strategist",
    description:
      "Verbindet Business-Ziele mit Nutzerbedürfnissen. Entwickelt Strategien für UX, Research und Design im Unternehmen.",
  },
  {
    role: "UX Manager",
    description:
      "Leitet und entwickelt Teams, etabliert Prozesse und Strukturen für UX-Exzellenz.",
  },
  {
    role: "Journey Manager",
    description:
      "Macht Customer- und User-Journeys transparent, moderiert Verbesserungen und sorgt für konsistente Erlebnisse.",
  },
  {
    role: "Service Designer",
    description:
      "Gestaltet und optimiert Services über alle Touchpoints hinweg – mit Fokus auf Nutzerbedürfnisse und Business Value.",
  },
  {
    role: "UX Architect",
    description:
      "Strukturiert Informationsarchitekturen, Prozesse und Interaktionen. Sichert die Konsistenz komplexer Systeme.",
  },
  {
    role: "Requirements Engineer",
    description:
      "Ermittelt und dokumentiert Anforderungen. Übersetzt Business- und Nutzerbedürfnisse in klare Vorgaben.",
  },
  {
    role: "Interaction Designer",
    description:
      "Konzipiert und gestaltet Interaktionen zwischen Mensch und System. Schafft intuitive und effektive User Flows.",
  },
  {
    role: "UI / Visual Designer",
    description:
      "Verantwortlich für das visuelle Design, Ästhetik und Markenfit. Erstellt Mockups, Styleguides und Designsysteme.",
  },
  {
    role: "UI Developer",
    description:
      "Setzt UI-Design technisch um. Gewährleistet saubere, responsive und barrierefreie Implementierungen.",
  },
  {
    role: "Accessibility Specialist",
    description:
      "Sorgt dafür, dass digitale Produkte für alle nutzbar sind – insbesondere für Menschen mit Behinderungen.",
  },
  {
    role: "UX Writer",
    description:
      "Findet die richtigen Worte im Interface. Unterstützt Nutzer durch klare, präzise und hilfreiche Texte.",
  },
];

export default function RoleDescriptions() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {roleDescriptions.map((r) => (
        <div
          key={r.role}
          className="p-4 rounded-xl bg-slate-50 ring-1 ring-slate-200 shadow-sm"
        >
          <h3 className="font-semibold text-slate-800 mb-1">{r.role}</h3>
          <p className="text-slate-600 text-sm">{r.description}</p>
        </div>
      ))}
    </div>
  );
}

