import React from "react";

export default function Background() {
  return (
    <div className="w-full border border-border rounded-2xl p-6 bg-background shadow-sm space-y-4">
      <p className="text-muted-foreground">
        Wie arbeiten umsatzstarke Makler:innen tatsächlich – und wo entstehen Reibungen?
        Ziel war ein belastbares Bild der Arbeitsrealität, um Produkte & Services präzise dort
        zu verbessern, wo sie Wirkung entfalten.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 text-sm">
        <div className="p-4 border border-border rounded-lg bg-muted/30">
          <p className="font-medium">Fokus</p>
          <p className="text-muted-foreground">
            Beratung & Kundenbeziehung, Service-Erfahrungen, Tool-/Systemeinsatz, Dokumentation & Haftung,
            Weiterbildung und Zusammenarbeit.
          </p>
        </div>
        <div className="p-4 border border-border rounded-lg bg-muted/30">
          <p className="font-medium">Ergebnisrahmen</p>
          <p className="text-muted-foreground">
            Klar definierte Problemräume, priorisierte Ansatzpunkte, konkrete Outputs (Personas, Journey, Insights)
            und eine validierte Roadmap.
          </p>
        </div>
      </div>
    </div>
  );
}
