import { useState } from "react";
import SkillProgressionMap from "./SkillProgressionMap";
import SkillRadarChart from "./SkillRadarChart";

const skills = [
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
  // … alle weiteren Skills
];

export default function SkillAssessment() {
  const [ratings, setRatings] = useState<{ [skill: string]: number }>({});
  const [showMap, setShowMap] = useState(false);

  const handleRatingChange = (skill: string, value: number) => {
    setRatings((prev) => ({ ...prev, [skill]: value }));
  };

  const prepareThemeData = () => {
    const themeGroups: { [theme: string]: number[] } = {};

    skills.forEach(({ theme, skill }) => {
      const value = ratings[skill];
      if (value !== undefined) {
        if (!themeGroups[theme]) themeGroups[theme] = [];
        themeGroups[theme].push(value);
      }
    });

    // Impact-Vorgabe pro Theme
    const themeImpact: { [theme: string]: number } = {
      "Coordination & Data Management": 60,
      "Evaluative Testing": 70,
      "Debrief & Analysis": 80,
      "Interview Planning & Execution": 75,
      "Synthesis": 85,
      "Stakeholder Engagement": 90,
      "Broadcasting": 95,
      "Integration in Service Delivery": 85,
      "Business Alignment": 90,
      "Amplify the Practice": 88,
      "Strategic Direction": 92,
    };

    return Object.entries(themeGroups).map(([theme, values]) => {
      const mastery =
        values.reduce((sum, v) => sum + v, 0) / values.length;
      return {
        theme,
        skill: `${values.length} Skills`,
        mastery: parseFloat(mastery.toFixed(2)),
        impact: themeImpact[theme] || 50,
      };
    });
  };

  const mapData = prepareThemeData();

  return (
    <div className="flex flex-col gap-12">
      {/* Skill Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left">Theme</th>
              <th className="px-3 py-2 text-left">Skill</th>
              <th className="px-3 py-2">Rating (0–4)</th>
            </tr>
          </thead>
          <tbody>
            {skills.map(({ theme, skill }) => (
              <tr key={skill} className="border-t">
                <td className="px-3 py-2">{theme}</td>
                <td className="px-3 py-2">{skill}</td>
                <td className="px-3 py-2 text-center">
                  <select
                    value={ratings[skill] ?? ""}
                    onChange={(e) =>
                      handleRatingChange(skill, parseInt(e.target.value))
                    }
                    className="border rounded px-2 py-1"
                  >
                    <option value="">-</option>
                    <option value={0}>0 – Not aware</option>
                    <option value={1}>1 – Don’t understand yet</option>
                    <option value={2}>2 – Need more practice</option>
                    <option value={3}>3 – Can do by myself</option>
                    <option value={4}>4 – Can explain to others</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button */}
      <button
        onClick={() => setShowMap(true)}
        className="self-start bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Generate Skill Map
      </button>

      {/* Charts */}
      {showMap && (
        <div className="flex flex-col gap-16">
          <SkillProgressionMap data={mapData} />
          <SkillRadarChart data={mapData} />
        </div>
      )}
    </div>
  );
}
