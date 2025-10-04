import React from "react";

export default function DiscussionGuide() {
  return (
    <div className="w-full border border-border rounded-2xl p-6 bg-background shadow-md">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Linker Block: Überblick */}
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg bg-muted/30">
            <h4 className="font-semibold">Einstieg</h4>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              <li>Begrüßung & Aufklärung (Ziel, Datenschutz, Incentive)</li>
              <li>Warming-Up: Shopping-Erfahrungen allgemein</li>
            </ul>
          </div>
          <div className="p-4 border border-border rounded-lg bg-muted/30">
            <h4 className="font-semibold">Kernfragen</h4>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              <li>Preisinformationen finden & verstehen</li>
              <li>Unklarheiten & Stolpersteine</li>
              <li>Vertrauen in Preisangaben</li>
            </ul>
          </div>
          <div className="p-4 border border-border rounded-lg bg-muted/30">
            <h4 className="font-semibold">Abschluss</h4>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              <li>Gesamteindruck der Preisdarstellung</li>
              <li>Verbesserungsvorschläge</li>
            </ul>
          </div>
        </div>

        {/* Rechter Block: Beispiel-Ausschnitt wie im echten Usability-Test */}
        <div className="relative p-6 border border-dashed border-border rounded-lg bg-white shadow-inner">
          <div className="absolute -top-4 left-6 px-2 bg-background text-xs font-semibold uppercase text-muted-foreground">
            Beispielausschnitt
          </div>

          <div className="space-y-5 text-sm">
            {/* Task Nummerierung */}
            <div>
              <p className="font-semibold text-blue-600">Task 3:</p>
              <p className="text-muted-foreground">
                Vergleichen Sie zwei Produktvarianten und entscheiden Sie, welche
                Sie bevorzugen würden – und warum.
              </p>
            </div>

            {/* Erfolgskriterien */}
            <div>
              <p className="font-medium">Erfolgskriterien:</p>
              <ul className="space-y-1 mt-1">
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Findet beide Varianten selbstständig</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Kann Unterschiede korrekt beschreiben</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Trifft eine begründete Auswahl</span>
                </li>
              </ul>
            </div>

            {/* Follow-up Fragen */}
            <div>
              <p className="font-medium">Eventuelle Nachfragen:</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Was hat Ihre Entscheidung beeinflusst?</li>
                <li>Gab es Punkte, die unklar oder verwirrend waren?</li>
                <li>
                  Würden Sie diese Darstellung auch in einer Kaufsituation verstehen?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
