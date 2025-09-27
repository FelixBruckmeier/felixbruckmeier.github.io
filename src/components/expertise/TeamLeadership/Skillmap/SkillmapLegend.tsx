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

export default function SkillmapLegend() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {Object.entries(themeColors).map(([theme, color]) => (
        <div key={theme} className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: color }}
          />
          <span className="text-sm">{theme}</span>
        </div>
      ))}
    </div>
  );
}
