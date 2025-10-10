import React from "react";
import { ResponsiveContainer, LineChart, Line } from "recharts";

// Touchpoints
const stages = [
  {
    key: "tp1",
    label: "Kundenanliegen verstehen",
    action: "Bedarf klären: Fahrzeug, Zweck, grobe Tarifrichtung (Basis vs. Premium).",
  },
  {
    key: "tp2",
    label: "Informationseingabe",
    action: "Alle Daten ins Tool eintragen (Fahrzeug, Kunde, Details).",
  },
  {
    key: "tp3",
    label: "Ergebnisseite besprechen",
    action: "Tarifvorschlag mit dem Kunden durchgehen.",
  },
  {
    key: "tp4",
    label: "Anpassungen",
    action: "Eingaben ändern, um Tarif neu zu berechnen.",
  },
  {
    key: "tp5",
    label: "Vertragsabschluss",
    action: "Kunde wählt Tarif, Vertrag wird abgeschlossen.",
  },
];

// Emotions-Kurve (1=negativ, 2=neutral, 3=positiv)
const emotions = [
  { value: 3, emoji: "🙂" }, // Einstieg positiv
  { value: 1, emoji: "😠" }, // Eingabe frustrierend
  { value: 2, emoji: "😐" }, // Ergebnisse schwer erklärbar
  { value: 1, emoji: "😤" }, // Anpassungen mühsam
  { value: 3, emoji: "🎉" }, // Abschluss positiv
];

export default function JourneyMap_Car() {
  return (
    <div className="w-full overflow-x-auto border border-border rounded-2xl p-4 bg-background shadow-sm">
      {/* Desktop-Version */}
      <div className="hidden md:block">
        <table className="min-w-full text-sm text-center rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-muted/40">
              <th className="border border-border p-3 w-32"></th>
              {stages.map((s) => (
                <th
                  key={s.key}
                  className="border border-border p-3 font-semibold"
                >
                  {s.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Actions */}
            <tr>
              <td className="border border-border font-medium p-3">Actions</td>
              {stages.map((s) => (
                <td key={s.key} className="border border-border p-3 align-top">
                  <p>{s.action}</p>
                </td>
              ))}
            </tr>

            {/* Emotions */}
            <tr>
              <td className="border border-border font-medium p-3">Emotions</td>
              <td colSpan={stages.length} className="border border-border p-3">
                <div className="h-40 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={emotions.map((e, i) => ({ idx: i, value: e.value }))}
                    >
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#2563EB"
                        strokeWidth={3}
                        dot={{ r: 0 }}
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  {/* Smileys exakt auf Linie platzieren */}
                  <div className="absolute inset-0 grid grid-cols-5">
                    {emotions.map((e, i) => (
                      <div
                        key={i}
                        className="flex justify-center"
                        style={{
                          transform: `translateY(${(3 - e.value) * 25}px)`,
                        }}
                      >
                        <span className="text-2xl">{e.emoji}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </td>
            </tr>

            {/* Pain Points */}
            <tr>
              <td className="border border-border font-medium p-3">Pain Points</td>
              {stages.map((s, i) => (
                <td key={s.key} className="border border-border p-3 align-top">
                  {i === 0 && "Keine großen Probleme."}
                  {i === 1 &&
                    "Starres Abfragen aller Felder, unklare Eingaben, Dauer zu lang."}
                  {i === 2 &&
                    "Schwer erklärbar, welche Eingabe welchen Preis beeinflusst."}
                  {i === 3 &&
                    "Umständliches Zurückspringen im Tool, Prozess neu durchlaufen."}
                  {i === 4 && "Kaum Probleme, Abschluss meist erfolgreich."}
                </td>
              ))}
            </tr>

            {/* Opportunities */}
            <tr>
              <td className="border border-border font-medium p-3">Opportunities</td>
              {stages.map((s, i) => (
                <td key={s.key} className="border border-border p-3 align-top">
                  {i === 0 && "Strukturierte Gesprächsleitfäden für neue Berater:innen."}
                  {i === 1 && "Adaptive Abkürzungen, Pre-Fill, Klartext statt Fachjargon."}
                  {i === 2 &&
                    "Transparente Preislogik, visuelle Hervorhebung relevanter Eingaben."}
                  {i === 3 &&
                    "Flexible Änderungen, direkter Einfluss auf Tarif sichtbar."}
                  {i === 4 &&
                    "Positives Erlebnis nutzen, Zusatzfeatures anbieten."}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile-Version */}
      <div className="md:hidden space-y-6">
        {stages.map((s, i) => (
          <div
            key={s.key}
            className="border border-border rounded-2xl p-4 space-y-3"
          >
            {/* Nummerierter Kreis + Überschrift */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold">{s.label}</h3>
            </div>

            <div>
              <p className="font-medium">Actions</p>
              <span>{s.action}</span>
            </div>
            <div>
              <p className="font-medium">Emotions</p>
              <span className="text-2xl">{emotions[i].emoji}</span>
            </div>
            <div>
              <p className="font-medium">Pain Points</p>
              <p className="text-sm text-muted-foreground">
                {i === 0 && "Keine großen Probleme."}
                {i === 1 &&
                  "Starres Abfragen, unklare Felder, sehr zeitaufwendig."}
                {i === 2 &&
                  "Unklare Preislogik, schwer für Kunden verständlich."}
                {i === 3 &&
                  "Umständliches Zurückspringen, Prozess neu starten nötig."}
                {i === 4 && "Kaum Probleme beim Abschluss."}
              </p>
            </div>
            <div>
              <p className="font-medium">Opportunities</p>
              <p className="text-sm text-muted-foreground">
                {i === 0 && "Gesprächsleitfäden für neue Berater:innen."}
                {i === 1 &&
                  "Adaptive Eingaben, Pre-Fill Felder, klare Sprache."}
                {i === 2 &&
                  "Bessere Preislogik visualisieren, Transparenz schaffen."}
                {i === 3 &&
                  "Flexible Eingabeänderungen ermöglichen."}
                {i === 4 && "Positive Abschlussmomente verstärken."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
