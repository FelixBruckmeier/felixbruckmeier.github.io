import React from "react";

export default function KanoSummary() {
  return (
    <div className="w-full border border-border rounded-2xl p-6 bg-background shadow-sm">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 border border-border rounded-lg bg-white">
          <p className="text-sm font-medium mb-1">Must-be</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Transparente Statuskommunikation & verlässliche Erreichbarkeit</li>
            <li>Saubere, schnelle Dokumentation (Vorlagen/Checklisten)</li>
          </ul>
        </div>
        <div className="p-4 border border-border rounded-lg bg-white">
          <p className="text-sm font-medium mb-1">Performance</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Vergleichbarkeit & Präsentationsqualität von Angeboten</li>
            <li>Reibungsarme Anbindung an Versicherungssysteme</li>
          </ul>
        </div>
        <div className="p-4 border border-border rounded-lg bg-white">
          <p className="text-sm font-medium mb-1">Delighters</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Digitale Unterschrift & Status-Tracking</li>
            <li>Proaktive Hinweise/Benachrichtigungen (Self-Service)</li>
          </ul>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Hinweis: Zusammenfassung der Priorisierung aus der Kano-Validierung; konkrete Items und Werte liegen intern vor.
      </p>
    </div>
  );
}
