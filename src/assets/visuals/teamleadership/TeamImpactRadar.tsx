import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from "recharts";

const data = [
  { dimension: "Psychological Safety", value: 8 },
  { dimension: "Diversity", value: 7 },
  { dimension: "Research Impact", value: 9 },
  { dimension: "Clarity", value: 6 },
  { dimension: "Collaboration", value: 8 },
];

export default function TeamImpactRadar() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="dimension" />
          <PolarRadiusAxis angle={30} domain={[0, 10]} />
          <Radar
            name="Team Impact"
            dataKey="value"
            stroke="#2563eb"
            fill="#3b82f6"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
