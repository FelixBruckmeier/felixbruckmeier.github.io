import React from "react";

export default function Background() {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Kontext & Herausforderung</h2>
      <p className="text-muted-foreground">
        Im Zuge des Redesigns von zooplus wurden wir beauftragt, die
        Preisdarstellung auf der Website zu überarbeiten. Die bisherige
        Pricing-Komponente wurde von Nutzer:innen teilweise als unklar und
        schwer verständlich empfunden.
      </p>
      <p className="text-muted-foreground">
        Wichtig: Es handelte sich nicht um eine offene Exploration, sondern um
        ein <strong>vergleichendes Usability Testing</strong>. Mehrere bereits
        ausgearbeitete Varianten der Preisdarstellung wurden konkret
        gegeneinander geprüft, um festzustellen, welche Lösung aus
        Kundensicht am besten funktioniert.
      </p>
      <p className="text-muted-foreground">
        Getestet wurde in realen Nutzungskontexten der Seite, u. a. auf
        Produktdetailseiten, in der Mehrbildansicht sowie in Recommendation
        Engines. Ziel: eine Preisdarstellung, die schneller verstanden wird,
        Vertrauen stärkt und Entscheidungen erleichtert.
      </p>
    </section>
  );
}
