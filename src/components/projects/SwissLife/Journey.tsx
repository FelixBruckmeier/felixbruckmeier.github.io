import React from "react";

const phases = [
  { key: "1", label: "Ansprache", action: "Kontakt initiieren, Vertrauen aufbauen" },
  { key: "2", label: "Kennenlernen", action: "Bedarf & Ziele klären" },
  { key: "3", label: "Datenerfassung", action: "Daten & Nachweise sammeln, dokumentieren" },
  { key: "4", label: "Produkterstellung", action: "Angebote/Varianten vorbereiten" },
  { key: "5", label: "Beratung", action: "Optionen erklären, Risiken & Nutzen abwägen" },
  { key: "6", label: "Abschluss", action: "Entscheidung, Vertrag, Formalia" },
  { key: "7", label: "Datenpflege", action: "Nachbetreuung, Anpassungen, Servicefälle" },
];

const pains = [
  "Aufwand, unklare Zuständigkeiten",
  "Divergierende Erwartungen",
  "Hoher Doku-Aufwand & Haftungsangst",
  "Intransparente Vergleichbarkeit",
  "‚Weniger ist mehr‘ schwer durchzuhalten",
  "Formalia & Medienbrüche",
  "Servicezeiten, Rückfragen, Nachträge"
];

const opps = [
  "Klarer Pitch & Materialien",
  "Gesprächsleitfäden & Erwartungsmanagement",
  "Doku-Hilfen, Vorlagen, Checklisten",
  "Vergleichstools & Präsentationsqualität",
  "Visualisierte Preis-/Leistungslogik",
  "Digitale Unterschrift, Status-Tracking",
  "Proaktive Service-SLAs & Self-Service"
];

export default function Journey() {
  return (
    <div className="w-full overflow-x-auto border border-border rounded-2xl p-4 bg-background shadow-sm">
      <table className="min-w-full text-sm text-center rounded-2xl overflow-hidden">
        <thead>
          <tr className="bg-muted/40">
            <th className="border border-border p-3 w-36"></th>
            {phases.map((s) => (
              <th key={s.key} className="border border-border p-3 font-semibold">{s.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-border font-medium p-3">Actions</td>
            {phases.map((s) => (
              <td key={s.key} className="border border-border p-3 align-top">
                <p>{s.action}</p>
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-border font-medium p-3">Pain Points</td>
            {pains.map((txt, i) => (
              <td key={i} className="border border-border p-3 align-top text-muted-foreground">{txt}</td>
            ))}
          </tr>
          <tr>
            <td className="border border-border font-medium p-3">Opportunities</td>
            {opps.map((txt, i) => (
              <td key={i} className="border border-border p-3 align-top text-muted-foreground">{txt}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
