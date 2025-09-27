import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Skill = {
  theme: string;
  skill: string;
  mastery: number;
  impact: number;
};

type Props = {
  data: Skill[];
};

export default function SkillProgressionMap({ data }: Props) {
  return (
    <div className="w-full h-[500px] bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
      <h3 className="text-xl font-semibold mb-4">Skill Progression Map</h3>
      <p className="text-sm text-gray-600 mb-6 max-w-3xl">
        Darstellung von Skill-Mastery (0–4) kombiniert mit Impact. Hilft,
        Entwicklungsfelder im Team sichtbar zu machen.
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <PolarRadiusAxis domain={[0, 4]} tickCount={5} />
          <Tooltip />
          <Radar
            name="Mastery"
            dataKey="mastery"
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.5}
          />
          <Radar
            name="Impact"
            dataKey="impact"
            stroke="#F59E0B"
            fill="#F59E0B"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
