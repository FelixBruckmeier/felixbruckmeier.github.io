import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import jsPDF from "jspdf";
import { Subtitle, MutedText } from "@/components/ui/Tokens"; 
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
  Individuell: [],
};

const themes: Record<string, { name: string; description: string }[]> = {
  "Coordination & Data Management": [
    { name: "Data Capture", description: "Daten systematisch erfassen, dokumentieren und strukturieren." },
    { name: "Well-Managed Data", description: "Rohdaten klar organisieren, sodass sie nachvollziehbar und wiederverwendbar bleiben." },
  ],
  "Evaluative Testing": [
    { name: "Heuristic Analysis", description: "Interface anhand etablierter Heuristiken bewerten." },
    { name: "Usability Test", description: "Gezielte Tests, um Nutzerfreundlichkeit und Probleme zu erkennen." },
    { name: "Information Architecture Study", description: "Struktur und Navigation von Inhalten untersuchen." },
    { name: "Concept Test", description: "Ideen und Prototypen frühzeitig mit Nutzern validieren." },
    { name: "Bug & Defect Tracking", description: "Nutzungsprobleme und Fehler dokumentieren und nachverfolgen." },
  ],
  "Debrief & Analysis": [
    { name: "Interview Debrief", description: "Nach Interviews Erkenntnisse austauschen und sichern." },
    { name: "Video Analysis", description: "Videoaufzeichnungen systematisch analysieren." },
    { name: "Affinity Map", description: "Ergebnisse clustern, um Muster und Themen sichtbar zu machen." },
    { name: "Data Wall", description: "Visuelle Datenpunkte zur gemeinsamen Synthese im Team nutzen." },
  ],
  "Interview Planning & Execution": [
    { name: "Study Plan", description: "Ablauf und Ziele einer Studie planen und dokumentieren." },
    { name: "Participant Segments & Screening", description: "Zielgruppen definieren und passende Teilnehmer auswählen." },
    { name: "User Interview", description: "Gespräche führen, um Einblicke in Nutzerbedürfnisse zu gewinnen." },
    { name: "Field Interview", description: "Interviews im Nutzungskontext durchführen." },
    { name: "Experience Sample / Diary Study", description: "Langfristige Studien, in denen Nutzer ihre Erlebnisse festhalten." },
    { name: "Interview Protocol", description: "Leitfaden für Interviews entwickeln und einsetzen." },
    { name: "Actionable Research Question", description: "Forschungsfragen formulieren, die konkrete Handlungen ermöglichen." },
  ],
  "Basic Quantitative Work": [
    { name: "Surveys & Questionnaires", description: "Fragebögen entwickeln und auswerten." },
    { name: "Exploratory Quantitative Analysis", description: "Zahlen und Metriken untersuchen, um Muster zu erkennen." },
    { name: "Product Analytics", description: "Nutzungsdaten analysieren, um Verhalten zu verstehen." },
  ],
  Synthesis: [
    { name: "Exploratory Research", description: "Neue Themenbereiche untersuchen, um Chancen zu identifizieren." },
    { name: "Exploratory Qualitative Analysis", description: "Qualitative Daten interpretieren und in Erkenntnisse überführen." },
    { name: "Journey Map", description: "Erfahrungen entlang der Customer Journey visualisieren." },
    { name: "Sensemaking Workshop", description: "Im Team Daten reflektieren und Muster ableiten." },
    { name: "Conceptual Model", description: "Abstrakte Modelle entwickeln, um komplexe Systeme zu erklären." },
  ],
  "Stakeholder Engagement": [
    { name: "Stakeholder Interview", description: "Interviews mit Stakeholdern zur Klärung von Annahmen und Zielen." },
    { name: "Stakeholder Assumption Workshop", description: "Workshops, um Hypothesen und Annahmen gemeinsam zu prüfen." },
  ],
  "Structured Modeling": [
    { name: "Service Blueprint", description: "Darstellung von Abläufen und Berührungspunkten einer Dienstleistung." },
    { name: "User Personas", description: "Typische Nutzerprofile erstellen, um Bedürfnisse zu repräsentieren." },
    { name: "Jobs to be Done", description: "Analyse der ‚Aufgaben‘, die Nutzer mit Produkten lösen wollen." },
  ],
  "Integration in Service Delivery": [
    { name: "Research-Driven Design Project", description: "Designentscheidungen durch Forschungsergebnisse leiten." },
    { name: "A/B Test", description: "Varianten von Produkten testen und vergleichen." },
    { name: "Beta Test", description: "Produkt vor Veröffentlichung mit realen Nutzern testen." },
    { name: "Development Cycle Coupling", description: "Research in agile Entwicklungszyklen integrieren." },
    { name: "Design Sprint", description: "Kurze Innovationszyklen mit Nutzerfeedback verbinden." },
    { name: "Cadenced User Studies", description: "Regelmäßig wiederkehrende Nutzerstudien durchführen." },
  ],
  Broadcasting: [
    { name: "Effective Reporting", description: "Ergebnisse klar und überzeugend kommunizieren." },
    { name: "Research Evangelization", description: "Research sichtbar machen und für dessen Wert werben." },
  ],
  "Business Alignment": [
    { name: "Customer Advisory Council", description: "Kunden regelmäßig einbeziehen, um Feedback zu sichern." },
    { name: "Front-Line Collaboration", description: "Mit Kundensupport oder Vertrieb zusammenarbeiten, um Insights zu gewinnen." },
  ],
  "Amplify the Practice": [
    { name: "Research Training", description: "Teams und Kollegen in Research-Methoden schulen." },
    { name: "Public Project Index", description: "Zentrale Übersicht über Forschungsprojekte bereitstellen." },
  ],
  "Strategic Direction": [
    { name: "Product Roadmap", description: "Forschung in langfristige Produktplanung einbringen." },
    { name: "User Needs Inception", description: "Grundlegende Nutzerbedürfnisse frühzeitig erfassen." },
    { name: "Product & Design Strategy", description: "Forschungsergebnisse in strategische Ausrichtungen übersetzen." },
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

  // ✅ Nur noch Rollenpflicht, keine Pflicht zur Bewertung
  const isComplete = () => !!role;

  const generateMap = () => {
    const requiredThemes = role === "Individuell" ? Object.keys(themes) : roleProfiles[role];
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
    doc.text("Skillmap Ergebnis", 14, 20);
    doc.setFontSize(12);
    doc.text(`Rolle: ${role}`, 14, 30);
    let y = 40;
    doc.setFont("helvetica", "bold");
    doc.text("Thema", 14, y);
    doc.text("Mastery", 100, y);
    doc.text("Relevanz", 150, y);
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
      {/* Rollen-Auswahl */}
      <div className="mb-6 space-y-2">
        <label className="block font-medium">Bitte wähle deine Rolle:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} className="border rounded-lg px-3 py-2">
          <option value="">-- Rolle auswählen --</option>
          {Object.keys(roleProfiles).map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Erklärung */}
      {role && (
        <p className="text-gray-700 mt-4">
          Bitte bewerten Sie die folgenden Skills und Aufgabengebiete: <br />
          <strong>Mastery:</strong> 0 = keine Kenntnisse, 1 = Grundkenntnisse, 2 = arbeitet unter Anleitung, 3 = selbstständig, 4 = Experte. <br />
          <strong>Relevanz:</strong> 0 = nicht relevant, 5 = sehr hohe Relevanz für Ihre Rolle/Aufgaben.
        </p>
      )}

      {/* Skills */}
      {role &&
        (role === "Individuell" ? Object.entries(themes) : Object.entries(themes).filter(([theme]) => roleProfiles[role].includes(theme))).map(([theme, skills]) => (
          <div key={theme} className="space-y-6 md:px-0 px-2">
            <Subtitle className="mb-1">{theme}</Subtitle>

            {/* Labels Desktop */}
            <div className="hidden md:grid grid-cols-2 gap-8 w-2/3 ml-auto mb-2">
              <div className="text-center text-sm font-medium text-gray-600">Mastery</div>
              <div className="text-center text-sm font-medium text-gray-600">Relevanz</div>
            </div>

            {skills.map((skill) => (
              <div key={skill.name} className="pb-4">
                <div
                  className="flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer gap-4"
                  onClick={() => setOpenSkill(openSkill === skill.name ? null : skill.name)}
                >
                  <div className="flex items-center justify-between w-full md:w-1/3">
                    <MutedText className="font-medium truncate" title={skill.name}>{skill.name}</MutedText>
                    {openSkill === skill.name ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
                    {/* Mastery */}
                    <div className="flex flex-col items-center w-full">
                      <span className="text-xs text-gray-500 md:hidden mb-1">Mastery</span>
                      <div className="flex gap-2 justify-center w-full flex-nowrap overflow-x-hidden">
                        {masteryScale.map((val) => (
                          <button
                            key={val}
                            type="button"
                            onClick={(e) => { e.stopPropagation(); handleChange(skill.name, "mastery", val); }}
                            className={`px-3 py-1 rounded-lg border text-sm whitespace-nowrap ${
                              ratings[skill.name]?.mastery === val ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                          >{val}</button>
                        ))}
                      </div>
                    </div>

                    {/* Relevanz */}
                    <div className="flex flex-col items-center w-full">
                      <span className="text-xs text-gray-500 md:hidden mb-1">Relevanz</span>
                      <div className="flex gap-2 justify-center w-full flex-nowrap overflow-x-hidden">
                        {relevanceScale.map((val) => (
                          <button
                            key={val}
                            type="button"
                            onClick={(e) => { e.stopPropagation(); handleChange(skill.name, "relevance", val); }}
                            className={`px-3 py-1 rounded-lg border text-sm whitespace-nowrap ${
                              ratings[skill.name]?.relevance === val ? "bg-green-600 text-white border-green-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                          >{val}</button>
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

      {/* Buttons */}
      {role && (
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={generateMap}
            disabled={!role}
            className={`px-6 py-3 rounded-xl font-medium transition ${
              role ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Map erstellen
          </button>

          {aggregatedData && (
            <button
              onClick={downloadPDF}
              className="px-6 py-3 rounded-xl font-medium bg-green-600 text-white hover:bg-green-700 transition"
            >
              Download PDF
            </button>
          )}
        </div>
      )}
    </div>
  );
}
