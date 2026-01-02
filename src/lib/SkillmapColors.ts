// src/lib/SkillmapColors.ts
import { colors } from "@/lib/tokens";

/**
 * Skillmap-Farben
 * bg     → Flächen / Legende
 * strong → Punkte / Marker
 * hex    → Charts / externe Libs
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

  // 🟡 bleibt GELB
  "Basic Quantitative Work": {
    bg: colors.notion.yellow.bg,
    strong: colors.notion.yellow.text,
    hex: "#EAB308",
  },

  // 🟣
  Synthesis: {
    bg: colors.notion.purple.bg,
    strong: colors.notion.purple.text,
    hex: "#8B5CF6",
  },

  // 🌸
  "Stakeholder Engagement": {
    bg: colors.notion.pink.bg,
    strong: colors.notion.pink.text,
    hex: "#EC4899",
  },

  // 🟢
  "Structured Modeling": {
    bg: colors.notion.green.bg,
    strong: colors.notion.green.text,
    hex: "#10B981",
  },

  // ⚪ neutral
  "Integration in Service Delivery": {
    bg: colors.notion.default.bg,
    strong: colors.notion.default.text,
    hex: "#4B5563",
  },

  // 🔴
  Broadcasting: {
    bg: colors.notion.red.bg,
    strong: colors.notion.red.text,
    hex: "#EF4444",
  },

  // 🟢🟡 FIX: war gelb → jetzt **sage / mint**
  "Business Alignment": {
    bg: "bg-[#E6F4EA] dark:bg-[#1F2D25]",
    strong: "text-[#2F6F44] dark:text-[#8FD3A8]",
    hex: "#6FCF97",
  },

  // 🔵🟣 Fix: nicht gleich wie Synthesis
  "Amplify the Practice": {
    bg: "bg-[#EEF2FF] dark:bg-[#1E2238]",
    strong: "text-[#4F46E5] dark:text-[#A5B4FC]",
    hex: "#6366F1",
  },

  // 🟠 bleibt Orange, aber dunkler
  "Strategic Direction": {
    bg: "bg-[#FFF1E6] dark:bg-[#2A2018]",
    strong: "text-[#B45309] dark:text-[#FDBA74]",
    hex: "#FB923C",
  },
};
