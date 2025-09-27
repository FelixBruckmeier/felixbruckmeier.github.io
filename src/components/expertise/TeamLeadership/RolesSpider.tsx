import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type Role = {
  name: string;
  group: "Research" | "Design" | "Strategie & Management" | "Spezialisiert";
  value: number;
  description: string;
};

const roles: Role[] = [
  { name: "UX Researcher", group: "Research", value: 5, description: "Ich erforsche Bedürfnisse, teste Prototypen und übersetze Daten in Insights für evidenzbasierte Produktentscheidungen." },
  { name: "CX Analyst", group: "Research", value: 5, description: "Ich messe und analysiere Customer Experience über Touchpoints hinweg und leite datenbasierte Verbesserungen ab." },

  { name: "Service Designer", group: "Design", value: 5, description: "Ich entwickle und verbessere Services, kreiere Service Blueprints und Journeys und teste Konzepte nutzerzentriert." },
  { name: "Interaction Designer", group: "Design", value: 2.5, description: "Ich gestalte Interaktionen zwischen Mensch und System, entwerfe Abläufe, Animationen und Interface-Logik." },
  { name: "UI / Visual Designer", group: "Design", value: 1.5, description: "Ich verantworte die visuelle Gestaltung digitaler Produkte, Icons, Layouts und sorge für Marken-Konsistenz." },

  { name: "UX Manager", group: "Strategie & Management", value: 5, description: "Ich organisiere UX-Prozesse, manage Teams, verankere UX-Strategien und messe den Business-Impact." },
  { name: "UX Strategist", group: "Strategie & Management", value: 5, description: "Ich verbinde Business-Ziele mit UX, entwickle Strategien und Roadmaps und berate Stakeholder auf Management-Level." },
  { name: "Journey Manager", group: "Strategie & Management", value: 5, description: "Ich mache Journeys transparent, identifiziere Pain Points und verbinde Teams für nahtlose Kundenerlebnisse." },
  { name: "UX Architect", group: "Strategie & Management", value: 4, description: "Ich konzipiere die User Experience, etabliere Prozesse für Human-Centered Design und begleite Teams methodisch." },
  { name: "Requirements Engineer", group: "Strategie & Management", value: 4, description: "Ich erhebe, spezifiziere und verwalte Anforderungen, übersetze Nutzerbedürfnisse in Backlog-Items und überprüfe Umsetzung." },

  { name: "Accessibility Specialist", group: "Spezialisiert", value: 3.5, description: "Ich mache digitale Produkte für alle zugänglich, teste Barrierefreiheit und unterstütze Teams bei inklusiver Umsetzung." },
  { name: "UX Writer", group: "Spezialisiert", value: 3, description: "Ich schreibe klare, nutzerzentrierte Texte und entwickle Content-Strategien entlang der Journey." },
  { name: "UI Developer", group: "Spezialisiert", value: 1, description: "Ich setze Interfaces technisch um, sorge für Responsivität, Barrierefreiheit und technische Qualität." },
];

const groupColors: Record<Role["group"], string> = {
  Research: "rgba(37, 99, 235, 0.6)",
  Design: "rgba(16, 185, 129, 0.6)",
  "Strategie & Management": "rgba(245, 158, 11, 0.6)",
  Spezialisiert: "rgba(139, 92, 246, 0.6)",
};

// Gruppenerklärungen
const groupDescriptions: Record<Role["group"], string> = {
  Research:
    "Hier liegt mein Fokus auf Nutzer- und Kundenverständnis: Bedürfnisse erforschen, Kontexte analysieren, Hypothesen validieren und datenbasierte Insights liefern.",
  Design:
    "Gestalterische und konzeptionelle Verantwortung: Services, Interaktionen und visuelle Elemente entwickeln, die konsistent und nutzerzentriert wirken.",
  "Strategie & Management":
    "Führung, Steuerung und strategische Ausrichtung: Rollen, in denen ich Strukturen aufbaue, Teams enable, Prioritäten setze und UX mit Business verbinde.",
  Spezialisiert:
    "Spezielle Expertisen, die gezielt eingesetzt werden: Barrierefreiheit, Content-Strategie, technisches UI-Development – wichtige Ergänzungen je nach Kontext.",
};

export default function RolesSpider() {
  // Sortieren alphabetisch innerhalb der Gruppen
  const groups: (Role["group"])[] = ["Research", "Design", "Strategie & Management", "Spezialisiert"];
  const groupedRoles = groups.map((g) => ({
    group: g,
    roles: roles.filter((r) => r.group === g).sort((a, b) => a.name.localeCompare(b.name)),
  }));

  const data = {
    labels: roles.map((r) => r.name),
    datasets: [
      {
        label: "Meine Rollen",
        data: roles.map((r) => r.value),
        backgroundColor: "rgba(59,130,246,0.2)",
        borderColor: "rgba(59,130,246,1)",
        borderWidth: 2,
        pointBackgroundColor: roles.map((r) => groupColors[r.group]),
        pointRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { color: "#cbd5e1", lineWidth: 1 },
        grid: { color: "#e2e8f0" },
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: { stepSize: 1, backdropColor: "transparent", color: "#475569" },
        pointLabels: { color: "#1e293b", font: { size: 12, weight: "600" } },
      },
    },
    plugins: { legend: { display: false } },
  };

  return (
    <div className="space-y-12">
      {/* Chart */}
      <div className="w-full h-[600px]">
        <Radar data={data} options={options} />
      </div>

      {/* Rollenbeschreibungen nach Gruppen */}
      <div className="space-y-12">
        {groupedRoles.map((g) => (
          <div key={g.group}>
            <h2
              className="text-xl font-bold mb-2"
              style={{ color: groupColors[g.group] }}
            >
              {g.group}
            </h2>
            <p className="text-slate-600 mb-4">{groupDescriptions[g.group]}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {g.roles.map((r) => (
                <div
                  key={r.name}
                  className="p-4 rounded-xl shadow-sm border bg-white hover:shadow-md transition"
                >
                  <h3
                    className="font-semibold text-lg mb-2 flex items-center gap-2"
                    style={{ color: groupColors[r.group] }}
                  >
                    {r.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
