// src/lib/SkillmapColors.ts
import { colors } from "@/lib/tokens";

/**
 * Skillmap-Farben (Design-System-konform)
 * bg → blasse Variante (für Flächen / Legende)
 * strong → kräftige Variante (für Punkte im Chart)
 */
export const themeColors: Record<
  string,
  { bg: string; strong: string; hex: string }
> = {
  "Coordination & Data Management": {
    bg: colors.notion.gray.bg,
    strong: colors.notion.gray.text,
    hex: "#6B7280",
  },
  "Evaluative Testing": {
    bg: colors.notion.orange.bg,
    strong: colors.notion.orange.text,
    hex: "#F59E0B",
  },
  "Debrief & Analysis": {
    bg: colors.notion.brown.bg,
    strong: colors.notion.brown.text,
    hex: "#92400E",
  },
  "Interview Planning & Execution": {
    bg: colors.notion.blue.bg,
    strong: colors.notion.blue.text,
    hex: "#3B82F6",
  },
  "Basic Quantitative Work": {
    bg: colors.notion.yellow.bg,
    strong: colors.notion.yellow.text,
    hex: "#EAB308",
  },
  Synthesis: {
    bg: colors.notion.purple.bg,
    strong: colors.notion.purple.text,
    hex: "#8B5CF6",
  },
  "Stakeholder Engagement": {
    bg: colors.notion.pink.bg,
    strong: colors.notion.pink.text,
    hex: "#EC4899",
  },
  "Structured Modeling": {
    bg: colors.notion.green.bg,
    strong: colors.notion.green.text,
    hex: "#10B981",
  },
  "Integration in Service Delivery": {
    bg: colors.notion.default.bg,
    strong: colors.notion.default.text,
    hex: "#4B5563",
  },
  Broadcasting: {
    bg: colors.notion.red.bg,
    strong: colors.notion.red.text,
    hex: "#EF4444",
  },
  "Business Alignment": {
    bg: colors.notion.yellow.bg,
    strong: colors.notion.yellow.text,
    hex: "#EAB308",
  },
  "Amplify the Practice": {
    bg: colors.notion.purple.bg,
    strong: colors.notion.purple.text,
    hex: "#8B5CF6",
  },
  "Strategic Direction": {
    bg: colors.notion.orange.bg,
    strong: colors.notion.orange.text,
    hex: "#F59E0B",
  },
};
