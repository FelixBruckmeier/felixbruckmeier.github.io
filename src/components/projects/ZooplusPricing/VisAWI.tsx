import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { dimension: "Simplicity", score: 5.8, avg: 5.2 },
  { dimension: "Diversity", score: 4.9, avg: 4.8 },
  { dimension: "Craftsmanship", score: 5.6, avg: 5.0 },
  { dimension: "Colorfulness", score: 5.2, avg: 4.9 },
];

export default function VisAWI() {
  return (
    <div className="w-full border border-border rounded-2xl p-6 bg-background shadow-md">
      <h3 className="text-xl font-semibold mb-4">
        VisAWI Ergebnisse (Visual Aesthetics of Websites Inventory)
      </h3>
      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
        Vergleich der gemessenen Werte (zooplus Pricing Study) mit publizierten
        Referenzwerten für Web-Studien (VisAWI-S). Skala: 1 (gering) – 7 (hoch).
      </p>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 30 }}
          barCategoryGap="25%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis
            dataKey="dimension"
            tick={{ fontSize: 13, fontWeight: 500, fill: "#374151" }}
            interval={0}
            tickMargin={14}
            axisLine={{ stroke: "#E5E7EB" }}
            tickLine={false}
          />
          <YAxis
            domain={[1, 7]}
            ticks={[1, 2, 3, 4, 5, 6, 7]}
            axisLine={{ stroke: "#E5E7EB" }}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              fontSize: "13px",
            }}
            cursor={{ fill: "rgba(96,165,250,0.1)" }}
            formatter={(value: number) => value.toFixed(1)}
          />
          {/* Dein Wert */}
          <Bar
            dataKey="score"
            fill="#2563EB"
            radius={[6, 6, 0, 0]}
            maxBarSize={70}
          />
          {/* Referenzwert */}
          <Bar
            dataKey="avg"
            fill="#93C5FD"
            radius={[6, 6, 0, 0]}
            maxBarSize={70}
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Legende und Quelle unten */}
      <div className="mt-6 space-y-3 text-base">
        <p className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-[#2563EB] mr-2"></span>
          <span className="text-[#2563EB] font-medium">zooplus Pricing Study</span> – Ergebnisse aus der eigenen Studie.
        </p>
        <p className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-[#93C5FD] mr-2"></span>
          <span className="text-[#93C5FD] font-medium">Referenzwerte (VisAWI-S)</span> – publizierte Mittelwerte aus Web-Studien.
        </p>
        <p className="text-sm text-muted-foreground">
          Quelle:{" "}
          <a
            href="https://meinald.de/forschung/visawi/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            meinald.de/forschung/visawi
          </a>{" "}
          (Thielsch & Moshagen).
        </p>
      </div>
    </div>
  );
}
