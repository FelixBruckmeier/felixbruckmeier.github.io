// ===============================================
// 🧩 UI INDEX — Centralized Component Exports
// ===============================================

// 🎨 Typography, Colors & Spacing Tokens
export * from "./Tokens";

// 🧱 Core layout
export { default as Section } from "./Section";
export { default as SectionIntro } from "./SectionIntro";

// 🧰 Elements
export { default as Badge } from "./Badge";
export { default as Button } from "./Button";
export { default as InfoTile } from "./InfoTile";
export { default as Tag } from "./Tag";
export { default as Tile } from "./Tile";
export { default as TileImage } from "./TileImage";

// ⚙️ Interactivity & Motion
export { default as FadeIn } from "./FadeIn";
export { default as TextReveal } from "./TextReveal";
export { Toggle } from "./Toggle";

// 📂 Accordion (mehrere named exports)
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
