import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const themeColors: { [key: string]: string } = {
  "Coordination & Data Management": "#1E88E5",
  "Evaluative Testing": "#43A047",
  "Debrief & Analysis": "#FB8C00",
  "Interview Planning & Execution": "#8E24AA",
  "Basic Quantitative Work": "#00ACC1",
  "Synthesis": "#F4511E",
  "Stakeholder Engagement": "#3949AB",
  "Structured Modeling": "#7CB342",
  "Integration in Service Delivery": "#FDD835",
  "Broadcasting": "#6D4C41",
  "Business Alignment": "#00897B",
  "Amplify the Practice": "#C2185B",
  "Strategic Direction": "#5E35B1",
};

export default function SkillmapChart({ data }: { data: any[] }) {
  return (
    <div className="h-[600px] w-full">
      <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 40, bottom: 20, left: 20 }}>
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey="mastery"
            domain={[0, 4]}
            tickCount={9}
            label={{ value: "Level of Mastery (0–4)", position: "bottom" }}
          />
          <YAxis
            type="number"
            dataKey="influence"
            domain={[0, 10]}
            tickCount={11}
            label={{
              value: "Einfluss im Unternehmen",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          {data.map((entry) => (
            <Scatter
              key={entry.theme}
              name={entry.theme}
              data={[entry]}
              fill={themeColors[entry.theme] || "#8884d8"}
              shape="circle"
            >
              <LabelList dataKey="theme" position="top" />
            </Scatter>
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
