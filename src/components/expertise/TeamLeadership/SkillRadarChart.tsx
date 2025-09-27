import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Props = {
  data: { theme: string; mastery: number }[];
};

export default function SkillRadarChart({ data }: Props) {
  return (
    <div className="w-full h-[500px] bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
      <h3 className="text-xl font-semibold mb-4">Skill Profile (Radar)</h3>
      <p className="text-sm text-gray-600 mb-6 max-w-3xl">
        Die Radar-Darstellung zeigt die relative Stärke deiner Skill-Themes
        (0–4). So siehst du schnell, welche Bereiche ausgebaut werden können.
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="theme" />
          <PolarRadiusAxis domain={[0, 4]} tickCount={5} />
          <Tooltip />
          <Radar
            name="Mastery"
            dataKey="mastery"
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
