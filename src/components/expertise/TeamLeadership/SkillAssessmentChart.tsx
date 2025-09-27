"use client";

import { useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type Skill = {
  theme: string;
  skill: string;
  x: number; // Level of mastery (0–4, inkl. Kommastellen)
  y: number; // Impact (1–10, inkl. Kommastellen)
};

const themeColors: Record<string, string> = {
  "Coordination & Data Management": "#1E40AF", // Indigo-800
  "Evaluative Testing": "#15803D", // Green-700
  "Debrief & Analysis": "#B91C1C", // Red-700
  "Interview Planning & Execution": "#6D28D9", // Violet-700
  "Basic Quantitative Work": "#0E7490", // Cyan-700
  "Synthesis": "#B45309", // Amber-700
  "Stakeholder Engagement": "#7C3AED", // Purple-700
  "Structured Modeling": "#9D174D", // Rose-800
  "Integration in Service Delivery": "#115E59", // Teal-800
  "Broadcasting": "#881337", // Red-900
  "Business Alignment": "#1E3A8A", // Blue-900
  "Amplify the Practice": "#166534", // Green-800
  "Strategic Direction": "#92400E", // Orange-800
};

const skills: { theme: string; skill: string }[] = [
  { theme: "Coordination & Data Management", skill: "Data Capture" },
  { theme: "Coordination & Data Management", skill: "Well-Managed Data" },
  { theme: "Evaluative Testing", skill: "Heuristic Analysis" },
  { theme: "Evaluative Testing", skill: "Usability Test" },
  { theme: "Evaluative Testing", skill: "Information Architecture Study" },
  { theme: "Evaluative Testing", skill: "Concept Test" },
  { theme: "Evaluative Testing", skill: "Bug & Defect Tracking" },
  { theme: "Debrief & Analysis", skill: "Interview Debrief" },
  { theme: "Debrief & Analysis", skill: "Video Analysis" },
  { theme: "Debrief & Analysis", skill: "Affinity Map" },
  { theme: "Debrief & Analysis", skill: "Data Wall" },
  { theme: "Interview Planning & Execution", skill: "Study Plan" },
  { theme: "Interview Planning & Execution", skill: "Participant Segments & Screening" },
  { theme: "Interview Planning & Execution", skill: "User Interview" },
  { theme: "Interview Planning & Execution", skill: "Field Interview" },
  { theme: "Interview Planning & Execution", skill: "Experience Sample / Diary Study" },
  { theme: "Interview Planning & Execution", skill: "Interview Protocol" },
  { theme: "Basic Quantitative Work", skill: "Surveys & Questionnaires" },
  { theme: "Basic Quantitative Work", skill: "Exploratory Quantitative Analysis" },
  { theme: "Basic Quantitative Work", skill: "Product Analytics" },
  { theme: "Synthesis", skill: "Exploratory Research" },
  { theme: "Synthesis", skill: "Exploratory Qualitative Analysis" },
  { theme: "Synthesis", skill: "Journey Map" },
  { theme: "Synthesis", skill: "Sensemaking Workshop" },
  { theme: "Synthesis", skill: "Conceptual Model" },
  { theme: "Stakeholder Engagement", skill: "Stakeholder Interview" },
  { theme: "Stakeholder Engagement", skill: "Stakeholder Assumption Workshop" },
  { theme: "Structured Modeling", skill: "Service Blueprint" },
  { theme: "Structured Modeling", skill: "User Personas" },
  { theme: "Structured Modeling", skill: "Jobs to be Done" },
  { theme: "Interview Planning & Execution", skill: "Actionable Research Question" },
  { theme: "Integration in Service Delivery", skill: "Research-Driven Design Project" },
  { theme: "Broadcasting", skill: "Effective Reporting" },
  { theme: "Broadcasting", skill: "Research Evangelization" },
  { theme: "Integration in Service Delivery", skill: "A/B Test" },
  { theme: "Integration in Service Delivery", skill: "Beta Test" },
  { theme: "Integration in Service Delivery", skill: "Development Cycle Coupling" },
  { theme: "Integration in Service Delivery", skill: "Design Sprint" },
  { theme: "Integration in Service Delivery", skill: "Cadenced User Studies" },
  { theme: "Business Alignment", skill: "Customer Advisory Council" },
  { theme: "Business Alignment", skill: "Front-Line Collaboration" },
  { theme: "Amplify the Practice", skill: "Research Training" },
  { theme: "Amplify the Practice", skill: "Public Project Index" },
  { theme: "Strategic Direction", skill: "Product Roadmap" },
  { theme: "Strategic Direction", skill: "User Needs Inception" },
  { theme: "Strategic Direction", skill: "Product & Design Strategy" },
];

export default function SkillAssessmentChart() {
  const [data, setData] = useState<Skill[]>([]);

  const handleChange = (
    theme: string,
    skill: string,
    field: "x" | "y",
    value: string
  ) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;

    setData((prev) => {
      const updated = [...prev];
      const index = updated.findIndex((s) => s.skill === skill);
      if (index > -1) {
        updated[index] = { ...updated[index], [field]: numValue };
      } else {
        updated.push({ theme, skill, x: 0, y: 1, [field]: numValue });
      }
      return updated;
    });
  };

  const themeAverages = Object.keys(themeColors).map((theme) => {
    const themeSkills = data.filter((s) => s.theme === theme);
    if (themeSkills.length === 0) return null;
    return {
      theme,
      x:
        themeSkills.reduce((sum, s) => sum + s.x, 0) / themeSkills.length,
      y:
        themeSkills.reduce((sum, s) => sum + s.y, 0) / themeSkills.length,
    };
  }).filter(Boolean);

  return (
    <div className="flex flex-col gap-12">
      {/* Eingabetabelle */}
      <div className="overflow-x-auto">
        {Object.keys(themeColors).map((theme) => (
          <div key={theme} className="mb-6">
            <h3 className="font-semibold mb-2">{theme}</h3>
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1 text-left">Skill</th>
                  <th className="border px-2 py-1 text-center">Level (0–4)</th>
                  <th className="border px-2 py-1 text-center">Impact (1–10)</th>
                </tr>
              </thead>
              <tbody>
                {skills
                  .filter((s) => s.theme === theme)
                  .map((s) => (
                    <tr key={s.skill}>
                      <td className="border px-2 py-1">{s.skill}</td>
                      <td className="border px-2 py-1 text-center">
                        <input
                          type="number"
                          step="0.1"
                          min="0"
                          max="4"
                          onChange={(e) =>
                            handleChange(s.theme, s.skill, "x", e.target.value)
                          }
                          className="w-20 border rounded px-1"
                        />
                      </td>
                      <td className="border px-2 py-1 text-center">
                        <input
                          type="number"
                          step="0.1"
                          min="1"
                          max="10"
                          onChange={(e) =>
                            handleChange(s.theme, s.skill, "y", e.target.value)
                          }
                          className="w-20 border rounded px-1"
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="w-full h-96">
        <ResponsiveContainer>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid stroke="#E5E7EB" />
            <XAxis
              type="number"
              dataKey="x"
              name="Level of Mastery"
              domain={[0, 4]}
              tickCount={9}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Impact"
              domain={[1, 10]}
              tickCount={10}
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              formatter={(val, name, props) => [
                (val as number).toFixed(1),
                props.payload.theme,
              ]}
            />
            <Legend />
            {themeAverages.map((t) => (
              <Scatter
                key={t!.theme}
                name={t!.theme}
                data={[t!]}
                fill={themeColors[t!.theme]}
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
