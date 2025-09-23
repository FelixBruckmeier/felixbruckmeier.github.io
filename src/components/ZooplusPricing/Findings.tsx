import React from "react";

export default function Findings() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Ergebnisse & Insights</h2>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="rounded-xl border p-4 bg-white">
          <h3 className="font-semibold text-blue-700 mb-2">Wahrnehmung & Klarheit</h3>
          <p className="text-sm text-gray-700">
            Klarere und modernere Preiswahrnehmung bei den favorisierten Varianten, jedoch
            Unsicherheiten bei Zusatzkosten / Bedingungen (z. B. Versand, Services).
          </p>
        </div>
        <div className="rounded-xl border p-4 bg-white">
          <h3 className="font-semibold text-blue-700 mb-2">Interaktion</h3>
          <p className="text-sm text-gray-700">
            Gesamthaft gute Bedienbarkeit. Irritationen: uneinheitliche Tooltips,
            redundante Formulierungen, ablenkende Sekundärinfos in bestimmten Kontexten.
          </p>
        </div>
        <div className="rounded-xl border p-4 bg-white">
          <h3 className="font-semibold text-blue-700 mb-2">Vergleichsfähigkeit</h3>
          <p className="text-sm text-gray-700">
            Eine kompakte Vergleichsansicht mit 3–4 differenzierenden Merkmalen half
            Nutzer:innen, schneller zu wählen. Zu viele Details verlangsamen Entscheidungen.
          </p>
        </div>
        <div className="rounded-xl border p-4 bg-white">
          <h3 className="font-semibold text-blue-700 mb-2">Vertrauen</h3>
          <p className="text-sm text-gray-700">
            Transparente Preislogik und klare Kommunikation von Zusatzkosten steigerten
            Vertrauen und reduzierten Rückfragen.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Empfohlene Maßnahmen</h3>
        <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Klartext statt Fachjargon; präzise Label für Preisbestandteile.</li>
          <li>Hervorhebung der wichtigsten Kostenpunkte; Einheitlichkeit bei Tooltips.</li>
          <li>Vergleichsmodus (3–4 Merkmale) statt langer Fließtexte.</li>
          <li>Empfohlene Option visuell deutlich markieren („Best Choice“).</li>
        </ul>
      </div>
    </section>
  );
}
