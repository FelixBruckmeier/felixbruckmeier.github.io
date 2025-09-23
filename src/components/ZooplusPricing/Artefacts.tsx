import React from "react";

export default function Artefacts() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Artefakte</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border p-6 bg-white shadow-sm space-y-2">
          <h3 className="font-semibold">MaxDiff Survey (n=120)</h3>
          <p className="text-sm text-muted-foreground">
            Nutzer:innen priorisierten Pricing-Komponenten nach Relevanz. 
            Ergebnis: Rabatte & Gesamtpreis wurden als wichtigster Faktor gewählt, 
            während Details wie Basispreis oder Kilopreis weniger Gewicht hatten.
          </p>
        </div>

        <div className="rounded-xl border p-6 bg-white shadow-sm space-y-2">
          <h3 className="font-semibold">Eye-Tracking Heatmap</h3>
          <p className="text-sm text-muted-foreground">
            Heatmaps zeigten, dass Nutzer:innen den Gesamtpreis und 
            Rabatt-Informationen stark fokussierten. Zusatzinfos wie 
            „UVP“ oder „ab“-Preise wurden oft übersehen oder falsch interpretiert.
          </p>
        </div>

        <div className="rounded-xl border p-6 bg-white shadow-sm space-y-2">
          <h3 className="font-semibold">Visual Summary</h3>
          <p className="text-sm text-muted-foreground">
            Zusammenfassung der zentralen Ergebnisse: 
            Preislogik muss transparenter kommuniziert werden, 
            „Best Choice“-Hervorhebung wird als Entscheidungshilfe geschätzt, 
            Tooltips müssen klarer gestaltet werden.
          </p>
        </div>
      </div>
    </section>
  );
}
