import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = Array.from({ length: 21 }).map((_, i) => {
  // Zeitbudget Z von 0..100 (in Schritten)
  const x = i * 5; // %
  // Zwei hypothetische Nutzenfunktionen (abnehmender Grenznutzen)
  const qualA = 0.02 * x - 0.00012 * x * x + 2;     // bessere Service-/Systemqualität (A)
  const qualB = 0.018 * x - 0.00014 * x * x + 1.8;  // verschlechterte Rahmenbedingungen (B)
  return { x, qualA: Math.max(0, qualA), qualB: Math.max(0, qualB) };
});

export default function Model() {
  return (
    <div className="w-full border border-border rounded-2xl p-6 bg-background shadow-sm space-y-4">
      <p className="text-muted-foreground text-sm">
        Vereinfachtes Modell: Beratungsqualität entsteht aus dem Zeitbudget für Bestands- und Neukundenarbeit.
        Verschlechtert sich Service/Systemqualität, sinkt das effektive Budget—die erreichbare Beratungsqualität fällt (Kurve B).
      </p>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="x" tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#E5E7EB" }} label={{ value: "Zeitbudget Z (%)", position: "insideBottom", offset: -4 }} />
          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#E5E7EB" }} label={{ value: "Beratungsqualität", angle: -90, position: "insideLeft" }} />
          <Tooltip contentStyle={{ fontSize: 12 }} />
          <Line type="monotone" dataKey="qualA" stroke="#2563EB" strokeWidth={3} dot={false} name="A: gute Rahmenbedingungen" />
          <Line type="monotone" dataKey="qualB" stroke="#93C5FD" strokeWidth={3} dot={false} name="B: schlechtere Rahmenbedingungen" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
