import React from "react";

export default function Methods() {
  return (
    <div className="w-full border border-border rounded-2xl p-6 bg-background shadow-sm space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-4 border border-border rounded-lg bg-muted/30">
          <p className="text-sm text-muted-foreground">Stichprobe</p>
          <p className="font-semibold">Kontext-Interviews (7)</p>
          <p className="text-sm text-muted-foreground">GF & Mitarbeitende, Mix nach Größe/Region (~90′)</p>
        </div>
        <div className="p-4 border border-border rounded-lg bg-muted/30">
          <p className="text-sm text-muted-foreground">Feldzeit</p>
          <p className="font-semibold">18.–21. Aug 2020</p>
          <p className="text-sm text-muted-foreground">vor Ort & remote</p>
        </div>
        <div className="p-4 border border-border rounded-lg bg-muted/30">
          <p className="text-sm text-muted-foreground">Auswertung</p>
          <p className="font-semibold">Grounded Theory (light)</p>
          <p className="text-sm text-muted-foreground">Infinity Map, Clustering, Themenpriorisierung</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border border-border rounded-lg bg-white">
          <p className="font-medium mb-2">Leitfragen (Auszug)</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Wie laufen Beratung & Nachbetreuung ab – wo hakt es?</li>
            <li>Welche Service- und Systemabhängigkeiten bremsen?</li>
            <li>Wie hoch ist der Doku-/Haftungsaufwand im Alltag?</li>
            <li>Welche Tools wirken nach außen „professionell“?</li>
          </ul>
        </div>
        <div className="p-4 border border-border rounded-lg bg-white">
          <p className="font-medium mb-2">Validierung</p>
          <p className="text-sm text-muted-foreground">
            Priorisierung per Kano-Umfrage: Must-be/Performance/Delighters → Qualitäts-Insights
            quantitativ abgesichert und in Roadmap überführt.
          </p>
        </div>
      </div>
    </div>
  );
}
