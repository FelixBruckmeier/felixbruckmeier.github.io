import { useState } from "react";

type Skill = {
  theme: string;
  skill: string;
};

const skills: Skill[] = [
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

const ratingScale = [
  { value: 0, label: "0 – Not aware / Not applicable" },
  { value: 1, label: "1 – Don’t understand yet" },
  { value: 2, label: "2 – Need more practice" },
  { value: 3, label: "3 – Can do by myself" },
  { value: 4, label: "4 – Can explain to others" },
];

export default function SkillAssessment() {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  const handleChange = (skill: string, value: number) => {
    setRatings({ ...ratings, [skill]: value });
  };

  return (
    <div className="flex flex-col gap-8">
      <p className="text-gray-700 max-w-3xl">
        Bitte bewerte deine Fähigkeiten auf einer Skala von 0–4. Dies hilft dir (und deinem Team),
        ein klares Bild deiner aktuellen Research-Skills zu bekommen und mögliche Entwicklungsfelder zu identifizieren.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left border-b">Theme</th>
              <th className="p-2 text-left border-b">Skill</th>
              {ratingScale.map((r) => (
                <th key={r.value} className="p-2 border-b text-center">
                  {r.value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {skills.map((s, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-gray-50">
                <td className="p-2 border-b">{s.theme}</td>
                <td className="p-2 border-b">{s.skill}</td>
                {ratingScale.map((r) => (
                  <td key={r.value} className="p-2 border-b text-center">
                    <input
                      type="radio"
                      name={`${s.theme}-${s.skill}`}
                      value={r.value}
                      checked={ratings[s.skill] === r.value}
                      onChange={() => handleChange(s.skill, r.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-gray-600 mt-4">
        Ratings Cheatsheet:
        <ul className="list-disc list-inside mt-2">
          {ratingScale.map((r) => (
            <li key={r.value}>{r.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
