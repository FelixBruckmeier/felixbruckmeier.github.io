import React from "react";

export default function Methods() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Forschungsdesign & Methoden</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="card p-4">Remote Usability Tests (GER)</div>
        <div className="card p-4">Vergleichende Evaluation mehrerer Pricing-Varianten</div>
        <div className="card p-4">
          Test in unterschiedlichen Kontexten (PDP, Mehrbildansicht, Recommendation Engine)
        </div>
        <div className="card p-4">
          Leitfadeninterviews zu Preiswahrnehmung, Klarheit & Vertrauen
        </div>
      </div>

      <div className="rounded-2xl border border-border p-4 bg-muted/40">
        <p className="text-sm text-muted-foreground">
          Studiencharakter: primär <strong>summativ</strong> (fertige Varianten wurden
          direkt geprüft), mit <strong>formativen Elementen</strong> (Ergebnisse flossen
          in Auswahl & Feinschliff der finalen Darstellung ein). Grundlage:
          Human-Centered Design (HCD) – reale Nutzungsszenarien, iterative Abwägung.
        </p>
      </div>
    </section>
  );
}
