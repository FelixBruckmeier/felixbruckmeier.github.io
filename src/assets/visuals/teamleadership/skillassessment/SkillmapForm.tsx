import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import jsPDF from "jspdf";
import { Subtitle, MutedText } from "@/components/ui/Tokens";
import Button from "@/components/ui/Button"; // ✅ default import statt { Button }
import { cn } from "@/lib/utils";

const roleProfiles: Record<string, string[]> = {
  Junior: [
    "Coordination & Data Management",
    "Evaluative Testing",
    "Debrief & Analysis",
    "Interview Planning & Execution",
    "Basic Quantitative Work",
    "Synthesis",
    "Stakeholder Engagement",
  ],
  "Mid-Level": [
    "Coordination & Data Management",
    "Evaluative Testing",
    "Debrief & Analysis",
    "Interview Planning & Execution",
    "Basic Quantitative Work",
    "Synthesis",
    "Stakeholder Engagement",
    "Structured Modeling",
    "Integration in Service Delivery",
  ],
  Senior: [
    "Coordination & Data Management",
    "Evaluative Testing",
    "Debrief & Analysis",
    "Interview Planning & Execution",
    "Basic Quantitative Work",
    "Synthesis",
    "Stakeholder Engagement",
    "Structured Modeling",
    "Integration in Service Delivery",
    "Broadcasting",
    "Business Alignment",
  ],
  Lead: [
    "Coordination & Data Management",
    "Evaluative Testing",
    "Debrief & Analysis",
    "Interview Planning & Execution",
    "Basic Quantitative Work",
    "Synthesis",
    "Stakeholder Engagement",
    "Structured Modeling",
    "Integration in Service Delivery",
    "Broadcasting",
    "Business Alignment",
    "Amplify the Practice",
    "Strategic Direction",
  ],
  Custom: [],
};

const themes: Record<string, { name: string; description: string }[]> = {
  "Coordination & Data Management": [
    { name: "Data Capture", description: "Systematically record, document, and structure data." },
    { name: "Well-Managed Data", description: "Organize raw data clearly to ensure transparency and reusability." },
  ],
  "Evaluative Testing": [
    { name: "Heuristic Analysis", description: "Evaluate interfaces based on established heuristics." },
    { name: "Usability Test", description: "Conduct targeted tests to identify usability issues and problems." },
    { name: "Information Architecture Study", description: "Investigate the structure and navigation of content." },
    { name: "Concept Test", description: "Validate ideas and prototypes with users early on." },
    { name: "Bug & Defect Tracking", description: "Document and track usability issues and defects." },
  ],
  "Debrief & Analysis": [
    { name: "Interview Debrief", description: "Share and capture insights after user interviews." },
    { name: "Video Analysis", description: "Systematically analyze video recordings." },
    { name: "Affinity Map", description: "Cluster results to reveal patterns and themes." },
    { name: "Data Wall", description: "Use visual data points to collaboratively synthesize findings." },
  ],
  "Interview Planning & Execution": [
    { name: "Study Plan", description: "Plan and document the goals and structure of a study." },
    { name: "Participant Segments & Screening", description: "Define target audiences and select suitable participants." },
    { name: "User Interview", description: "Conduct interviews to understand user needs." },
    { name: "Field Interview", description: "Conduct interviews in real-world usage contexts." },
    { name: "Experience Sample / Diary Study", description: "Run longitudinal studies where users record their experiences." },
    { name: "Interview Protocol", description: "Develop and apply an interview guide." },
    { name: "Actionable Research Question", description: "Formulate research questions that lead to concrete actions." },
  ],
  "Basic Quantitative Work": [
    { name: "Surveys & Questionnaires", description: "Develop and analyze questionnaires." },
    { name: "Exploratory Quantitative Analysis", description: "Explore metrics and numbers to identify patterns." },
    { name: "Product Analytics", description: "Analyze product usage data to understand behavior." },
  ],
  Synthesis: [
    { name: "Exploratory Research", description: "Investigate new topics to identify opportunities." },
    { name: "Exploratory Qualitative Analysis", description: "Interpret qualitative data to derive insights." },
    { name: "Journey Map", description: "Visualize experiences along the customer journey." },
    { name: "Sensemaking Workshop", description: "Reflect on data as a team to identify key patterns." },
    { name: "Conceptual Model", description: "Develop abstract models to explain complex systems." },
  ],
  "Stakeholder Engagement": [
    { name: "Stakeholder Interview", description: "Interview stakeholders to clarify assumptions and goals." },
    { name: "Stakeholder Assumption Workshop", description: "Collaboratively review and challenge assumptions." },
  ],
  "Structured Modeling": [
    { name: "Service Blueprint", description: "Visualize service processes and touchpoints." },
    { name: "User Personas", description: "Create user archetypes to represent key needs." },
    { name: "Jobs to be Done", description: "Analyze the ‘jobs’ users want to accomplish with a product." },
  ],
  "Integration in Service Delivery": [
    { name: "Research-Driven Design Project", description: "Use research insights to guide design decisions." },
    { name: "A/B Test", description: "Test and compare product variants." },
    { name: "Beta Test", description: "Test a product with real users before release." },
    { name: "Development Cycle Coupling", description: "Integrate research into agile development cycles." },
    { name: "Design Sprint", description: "Combine rapid innovation cycles with user feedback." },
    { name: "Cadenced User Studies", description: "Conduct recurring user studies regularly." },
  ],
  Broadcasting: [
    { name: "Effective Reporting", description: "Communicate findings clearly and persuasively." },
    { name: "Research Evangelization", description: "Make research visible and advocate its value." },
  ],
  "Business Alignment": [
    { name: "Customer Advisory Council", description: "Engage customers regularly to ensure feedback." },
    { name: "Front-Line Collaboration", description: "Collaborate with support or sales to gather insights." },
  ],
  "Amplify the Practice": [
    { name: "Research Training", description: "Train teams and colleagues in research methods." },
    { name: "Public Project Index", description: "Provide a central overview of research projects." },
  ],
  "Strategic Direction": [
    { name: "Product Roadmap", description: "Integrate research into long-term product planning." },
    { name: "User Needs Inception", description: "Capture fundamental user needs early on." },
    { name: "Product & Design Strategy", description: "Translate research findings into strategic direction." },
  ],
};

export default function SkillmapForm({ onDataChange }: { onDataChange: (data: any[]) => void }) {
  const [ratings, setRatings] = useState<{ [key: string]: { mastery: number | null; relevance: number | null } }>({});
  const [openSkill, setOpenSkill] = useState<string | null>(null);
  const [role, setRole] = useState<string>("");
  const [aggregatedData, setAggregatedData] = useState<any[] | null>(null);

  const masteryScale = [0, 1, 2, 3, 4];
  const relevanceScale = [0, 1, 2, 3, 4, 5];

  const handleChange = (skill: string, type: "mastery" | "relevance", value: number) => {
    setRatings((prev) => ({
      ...prev,
      [skill]: { ...prev[skill], [type]: value },
    }));
  };

  const generateMap = () => {
    const requiredThemes = role === "Custom" ? Object.keys(themes) : roleProfiles[role];
    const aggregated = requiredThemes.map((theme) => {
      const skills = themes[theme] || [];
      const avgMastery =
        skills.filter((s) => ratings[s.name]?.mastery !== null).reduce((sum, s) => sum + (ratings[s.name]?.mastery || 0), 0) /
        skills.length;
      const avgRelevance =
        skills.filter((s) => ratings[s.name]?.relevance !== null).reduce((sum, s) => sum + (ratings[s.name]?.relevance || 0), 0) /
        skills.length;
      return { theme, mastery: avgMastery || 0, influence: avgRelevance || 0 };
    });
    setAggregatedData(aggregated);
    onDataChange(aggregated);
  };

  const downloadPDF = () => {
    if (!aggregatedData) return;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Skillmap Results", 14, 20);
    doc.setFontSize(12);
    doc.text(`Role: ${role}`, 14, 30);
    let y = 40;
    doc.setFont("helvetica", "bold");
    doc.text("Theme", 14, y);
    doc.text("Mastery", 100, y);
    doc.text("Relevance", 150, y);
    doc.setFont("helvetica", "normal");
    y += 10;
    aggregatedData.forEach((d) => {
      doc.text(d.theme, 14, y);
      doc.text(d.mastery.toFixed(2), 100, y);
      doc.text(d.influence.toFixed(2), 150, y);
      y += 10;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });
    doc.save("skillmap.pdf");
  };

  return (
    <div className="space-y-8 px-4 sm:px-6 md:px-0 md:mx-auto md:max-w-4xl">
      <div className="mb-6 space-y-2">
        <label className="block font-medium">Please select your role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} className="border rounded-lg px-3 py-2">
          <option value="">-- Select role --</option>
          {Object.keys(roleProfiles).map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {role && (
        <p className="text-gray-700 mt-4">
          Please rate the following skills and topic areas: <br />
          <strong>Mastery:</strong> 0 = no experience, 1 = basic, 2 = guided, 3 = independent, 4 = expert. <br />
          <strong>Relevance:</strong> 0 = not relevant, 5 = highly relevant to your current role or tasks.
        </p>
      )}

      {role &&
        (role === "Custom"
          ? Object.entries(themes)
          : Object.entries(themes).filter(([theme]) => roleProfiles[role].includes(theme))
        ).map(([theme, skills]) => (
          <div key={theme} className="space-y-6 md:px-0 px-2">
            <Subtitle className="mb-1">{theme}</Subtitle>

            <div className="hidden md:grid grid-cols-2 gap-8 w-2/3 ml-auto mb-2">
              <div className="text-center text-sm font-medium text-gray-600">Mastery</div>
              <div className="text-center text-sm font-medium text-gray-600">Relevance</div>
            </div>

            {skills.map((skill) => (
              <div key={skill.name} className="pb-4">
                <div
                  className="flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer gap-4"
                  onClick={() => setOpenSkill(openSkill === skill.name ? null : skill.name)}
                >
                  <div className="flex items-center justify-between w-full md:w-1/3">
                    <MutedText className="font-medium truncate" title={skill.name}>
                      {skill.name}
                    </MutedText>
                    {openSkill === skill.name ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
                    <div className="flex flex-col items-center w-full">
                      <span className="text-xs text-gray-500 md:hidden mb-1">Mastery</span>
                      <div className="flex gap-2 justify-center w-full flex-nowrap overflow-x-hidden">
                        {masteryScale.map((val) => (
                          <Button
                            key={val}
                            variant={ratings[skill.name]?.mastery === val ? "primary" : "secondary"}
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleChange(skill.name, "mastery", val);
                            }}
                          >
                            {val}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-center w-full">
                      <span className="text-xs text-gray-500 md:hidden mb-1">Relevance</span>
                      <div className="flex gap-2 justify-center w-full flex-nowrap overflow-x-hidden">
                        {relevanceScale.map((val) => (
                          <Button
                            key={val}
                            variant={ratings[skill.name]?.relevance === val ? "primary" : "secondary"}
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleChange(skill.name, "relevance", val);
                            }}
                          >
                            {val}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={cn(
                    "transition-all duration-300 overflow-hidden",
                    openSkill === skill.name ? "max-h-40 mt-2" : "max-h-0"
                  )}
                >
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}

      {role && (
        <div className="flex justify-center mt-8 gap-4">
          <Button variant="primary" onClick={generateMap} disabled={!role}>
            Generate Skillmap
          </Button>
          {aggregatedData && (
            <Button variant="secondary" onClick={downloadPDF}>
              Download as PDF
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
