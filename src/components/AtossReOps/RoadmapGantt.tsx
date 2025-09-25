import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine } from "recharts";

// einfache Gantt: Start/Ende in Wochen
type Item = { name: string; start: number; end: number; track: "Discovery" | "Delivery" | "Scaling" };

const ITEMS: Item[] = [
  { name: "Stakeholder-Interviews", start: 1, end: 5, track: "Discovery" },
  { name: "Affinity Mapping", start: 3, end: 6, track: "Discovery" },
  { name: "Maturity Assessment", start: 5, end: 7, track: "Discovery" },
  { name: "Quick Wins (Templates, Cadence, Intake)", start: 7, end: 12, track: "Delivery" },
  { name: "Repository & Taxonomie", start: 8, end: 18, track: "Delivery" },
  { name: "Governance/DSGVO Prozess", start: 10, end: 20, track: "Delivery" },
  { name: "Readouts & Newsletter", start: 12, end: 52, track: "Scaling" },
  { name: "Champion-Netzwerk & Gilde", start: 16, end: 52, track: "Scaling" },
  { name: "Tool-Integrationen/Automatisierung", start: 20, end: 44, track: "Scaling" }
];

const data = ITEMS.map((it) => ({ name: it.name, start: it.start, dur: it.end - it.start, track: it.track }));
const TODAY_WEEK = 32;

export default function RoadmapGantt() {
  return (
    <div className="space-y-2">
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} layout="vertical" margin={{ top: 10, right: 16, bottom: 10, left: 160 }}>
          <XAxis type="number" domain={[0, 52]} tickLine={false} />
          <YAxis dataKey="name" type="category" width={160} tickLine={false} />
          <Tooltip
            formatter={(_val: any, name, props) => {
              if (name === "dur") {
                return [`Woche ${props.payload.start}–${props.payload.start + props.payload.dur}`, "Zeitfenster"];
              }
              return [null, null];
            }}
          />
          <Bar dataKey="start" stackId="g" fill="transparent" />
          <Bar dataKey="dur" stackId="g" radius={[4, 4, 4, 4]} />
          <ReferenceLine x={TODAY_WEEK} stroke="#111827" strokeDasharray="4 2" label={{ value: "Heute", position: "top" }} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-3 text-xs text-muted-foreground">
        <span className="rounded-full border border-border px-2 py-1">Discovery</span>
        <span className="rounded-full border border-border px-2 py-1">Delivery</span>
        <span className="rounded-full border border-border px-2 py-1">Scaling</span>
      </div>
    </div>
  );
}
