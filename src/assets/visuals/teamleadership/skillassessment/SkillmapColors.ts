// src/assets/visuals/teamleadership/skillassessment/SkillmapColors.ts
import { notionHexMap } from "@/lib/tokens";

/**
 * SkillmapColors (Team Leadership / Skill Assessment)
 * -> Hex Strings für Flächen (bg) pro Theme
 *
 * Wenn du für Punkte/Lines die kräftige Farbe brauchst,
 * nimm notionHexMap.<color>.text statt .bg.
 */
export const themeColors: Record<string, string> = {
  "Coordination & Data Management": notionHexMap.gray.bg,
  "Evaluative Testing": notionHexMap.orange.bg,
  "Debrief & Analysis": notionHexMap.blue.bg,
  "Interview Planning & Execution": notionHexMap.green.bg,
  "Basic Quantitative Work": notionHexMap.yellow.bg,
  Synthesis: notionHexMap.purple.bg,
  "Stakeholder Engagement": notionHexMap.pink.bg,
  "Structured Modeling": notionHexMap.brown.bg,
  "Integration in Service Delivery": notionHexMap.default.bg,
  Broadcasting: notionHexMap.red.bg,
  "Business Alignment": notionHexMap.orange.bg,
  "Amplify the Practice": notionHexMap.purple.bg,
  "Strategic Direction": notionHexMap.blue.bg,
} as const;
