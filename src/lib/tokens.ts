// ================================
// 🎨 COLORS
// ================================
export const palette = {
  notion: {
    default: { text: "text-[#4A4846] dark:text-[#D4D4D4]", bg: "bg-[#F7F7F7] dark:bg-[#191919]" },
    gray: { text: "text-[#4A4846] dark:text-[#D4D4D4]", bg: "bg-[#F1F1EF] dark:bg-[#252525]" },
    brown: { text: "text-[#976D57] dark:text-[#A27763]", bg: "bg-[#F3EEEE] dark:bg-[#2E2724]" },
    orange: { text: "text-[#CC782F] dark:text-[#CB7B37]", bg: "bg-[#F8ECDF] dark:bg-[#36291F]" },
    yellow: { text: "text-[#C29343] dark:text-[#C19138]", bg: "bg-[#FAF3DD] dark:bg-[#372E20]" },
    green: { text: "text-[#548164] dark:text-[#4F9768]", bg: "bg-[#EEF3ED] dark:bg-[#242B26]" },
    blue: { text: "text-[#487CA5] dark:text-[#447ACB]", bg: "bg-[#E9F3F7] dark:bg-[#1F282D]" },
    purple: { text: "text-[#8A67AB] dark:text-[#865DBB]", bg: "bg-[#F6F3F8] dark:bg-[#2A2430]" },
    pink: { text: "text-[#B35488] dark:text-[#BA4A78]", bg: "bg-[#F9F2F5] dark:bg-[#2E2328]" },
    red: { text: "text-[#C4554D] dark:text-[#BE524B]", bg: "bg-[#FAECEC] dark:bg-[#332523]" },
  },
} as const;

export const colors = {
  background: { bg: "bg-background", text: "text-foreground" },
  border: "border-border",
  primary: { bg: "bg-primary", text: "text-primary-foreground" },
  secondary: { bg: "bg-secondary", text: "text-secondary-foreground" },
  accent: { bg: "bg-accent", text: "text-accent-foreground" },
  muted: { bg: "bg-muted", text: "text-muted-foreground" },
  notion: palette.notion,
  tile: {
    bg: "bg-[#F9F9F9] dark:bg-[#1C1C1C]",
    text: "text-muted-foreground",
  },
  success: { bg: "bg-green-500", text: "text-green-50" },
  warning: { bg: "bg-yellow-500", text: "text-yellow-900" },
  error: { bg: "bg-red-500", text: "text-red-50" },
  info: { bg: "bg-blue-500", text: "text-blue-50" },
  overlay: { bg: "bg-black/50" },
  foreground: "text-foreground",
} as const;

export type NotionColor = keyof typeof palette.notion;

// ================================
// ✍️ TYPOGRAPHY
// ================================
export const typography = {
  hero: {
    font: "[font-family:var(--font-display)]",
    size: "text-5xl md:text-7xl",
    weight: "font-extrabold",
    tracking: "tracking-tight",
    leading: "leading-tight",
  },
  sectionTitle: {
    font: "[font-family:var(--font-display)]",
    size: "text-3xl md:text-5xl",
    weight: "font-bold",
    tracking: "tracking-tight",
    leading: "leading-snug",
  },
  sectionHeading: {
    font: "[font-family:var(--font-display)]",
    size: "text-2xl md:text-3xl",
    weight: "font-semibold",
    tracking: "tracking-tight",
    leading: "leading-snug",
    color: "text-foreground",
  },
  subtitle: {
    font: "[font-family:var(--font-sans)]",
    size: "text-lg",
    weight: "font-semibold",
    leading: "leading-relaxed",
    color: "text-foreground/90",
  },
  body: {
    font: "[font-family:var(--font-sans)]",
    size: "text-base md:text-lg",
    weight: "font-normal",
    leading: "leading-relaxed",
  },
  small: {
    font: "[font-family:var(--font-sans)]",
    size: "text-sm",
    weight: "font-medium",
    leading: "leading-normal",
    color: "text-muted-foreground",
  },
  tag: {
    font: "[font-family:var(--font-sans)]",
    size: "text-xs",
    weight: "font-medium",
    leading: "leading-tight",
  },
  caption: {
    font: "[font-family:var(--font-sans)]",
    size: "text-xs",
    weight: "font-normal",
    leading: "leading-snug",
    color: "text-muted-foreground",
  },
  quote: {
    font: "[font-family:var(--font-serif)]",
    size: "text-xl md:text-2xl",
    weight: "font-medium",
    leading: "leading-relaxed",
    color: "text-foreground italic",
  },
  code: {
    font: "font-mono",
    size: "text-sm",
    weight: "font-normal",
    leading: "leading-snug",
    color: "text-accent-foreground",
  },
  button: {
    font: "[font-family:var(--font-sans)]",
    size: "text-sm",
    weight: "font-medium",
    leading: "leading-normal",
  },
} as const;

// ================================
// 📖 SECTION INTRO
// ================================
export const sectionIntro = {
  default: "max-w-4xl",
  full: "max-w-none",
} as const;

// ================================
// 📐 SPACING & LAYOUT
// ================================
export const sectionSpacing = {
  sm: "py-8",
  md: "py-16",
  lg: "py-24",
  xl: "py-32",
} as const;

export const sectionInnerSpacing = {
  titleMargin: "mb-12",
  subtitleMargin: "mb-8",
} as const;

export const spacing = {
  mt2: "mt-2",
  mt3: "mt-3",
  mt4: "mt-4",
  mt5: "mt-5",
  mt6: "mt-6",
  mt8: "mt-8",
  mt10: "mt-10",
  mt12: "mt-12",
  mt14: "mt-14",
  mt16: "mt-16",
  mt20: "mt-20",
  mt24: "mt-24",
  mtLg: "mt-10",
  mb2: "mb-2",
  mb3: "mb-3",
  mb4: "mb-4",
  mb6: "mb-6",
  mb8: "mb-8",
  mb10: "mb-10",
  mb12: "mb-12",
  mb14: "mb-14",
  mb16: "mb-16",
  mb20: "mb-20",
  mb24: "mb-24",
  pt4: "pt-4",
  pt6: "pt-6",
  pb4: "pb-4",
  pb6: "pb-6",
  pl4: "pl-4",
  pl8: "pl-8",
  p3: "p-3",
  p4: "p-4",
  p6: "p-6",
  p8: "p-8",
  py4: "py-4",
  py8: "py-8",
  py12: "py-12",
  pxSection: "px-6 md:px-8",
  pxCard: "px-4 md:px-6",
  gap2: "gap-2",
  gap3: "gap-3",
  gap4: "gap-4",
  gap6: "gap-6",
  gap8: "gap-8",
  gap10: "gap-10",
  stackXs: "space-y-1",
  stackSm: "space-y-2",
  stackMd: "space-y-4",
  stackLg: "space-y-6",
  blockGapSm: "space-y-6",
  blockGapMd: "space-y-10",
  blockGapLg: "space-y-16",
} as const;

// ✅ layout mit dynamischer Breite (für 4K, WQHD usw.)
export const layout = {
  containerDynamic: "mx-auto w-full max-w-[1900px] px-[3vw]",
  containerNarrow: "mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8",
  containerDefault: "mx-auto max-w-[1280px] px-6 lg:px-8",
  containerWide: "mx-auto max-w-[1440px] px-8 lg:px-10",
  container: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",

  gridGap: spacing.gap6,
  gridCols2: "grid md:grid-cols-2",
  gridCols3: "grid sm:grid-cols-2 lg:grid-cols-3",
  gridCols4: "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  gridHero: "md:grid-cols-[1.1fr_0.9fr]",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
  flexColCenter: "flex flex-col items-center justify-center",
  flexCol: "flex flex-col",
  itemsStart: "items-start",
  textLeft: "text-left",
  block: "block",
  imageCover: "w-full max-h-40 object-cover",
  stickyBelowNav: "sticky top-24 md:top-28",
  stickyTop: "sticky top-0",
  fullWidth: "w-full",
  maxWidthText: "max-w-5xl mx-auto",
  fullHeight: "h-full",
  scrollOffset: "scroll-mt-36 md:scroll-mt-40",
} as const;

// ================================
// 🔺 RADII & SHADOWS
// ================================
export const radii = {
  none: "rounded-none",
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
  xxl: "rounded-3xl",
  full: "rounded-full",
} as const;

export const shadows = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  inner: "shadow-inner",
} as const;

// ================================
// 🔘 BUTTON VARIANTS + SIZES
// ================================
export const buttonVariants = {
  base: "inline-flex items-center justify-center rounded-3xl px-5 py-2.5 transition-colors duration-200",
  primary: "bg-primary text-primary-foreground hover:bg-neutral-900 dark:hover:bg-neutral-200",
  secondary:
    "bg-gray-100 dark:bg-neutral-900 border border-border text-foreground hover:bg-gray-200 dark:hover:bg-neutral-800",
  ghost: "text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  success: "bg-green-600 text-white hover:bg-green-700",
  link: "bg-transparent text-primary underline-offset-2 hover:underline",
  minimal: "bg-transparent text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-600",
} as const;

export const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
} as const;

// ================================
// 🟣 SKILLMAP SCALE (NEU)
// - Kreise wirklich rund (fixe w/h + aspect-square)
// - Kein Ruckeln: Border/Ring wird immer "reserviert"
// ================================
export const skillScale = {
  itemBase:
    "inline-flex items-center justify-center select-none " +
    "w-9 h-9 aspect-square rounded-full " +
    "text-sm font-medium " +
    "transition-[transform,background-color,color,border-color,box-shadow] duration-150 ease-out " +
    "[transform:translateZ(0)] [backface-visibility:hidden] will-change-transform " +
    // ✅ Reserviere 2px Border immer, damit nix springt
    "border-2 border-transparent",

  inactive: "bg-muted text-foreground/80 border-border/60 hover:bg-muted/70",

  active:
    "bg-primary text-primary-foreground border-primary " +
    "shadow-[0_0_0_3px_rgba(0,0,0,0.06)] dark:shadow-[0_0_0_3px_rgba(255,255,255,0.08)] ",

  // ✅ Optional: leichtes "press" ohne Layout shift
  pressed: "active:scale-[0.98]",
} as const;

// ================================
// 🖱 HOVER EFFECTS
// ================================
export const hoverEffects = {
  subtleOpacity: "transition-opacity duration-200 hover:opacity-80",
  lift: "transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.01]",
  bgAccent: "hover:bg-accent/80",
  scale: "transition-transform duration-200 hover:scale-105",
  rotate: "transition-transform duration-200 hover:rotate-6",
  slide: "transition-all duration-300 ease-in-out",

  smoothLift:
    "transition-transform duration-300 ease-out will-change-transform " +
    "[transform:translateZ(0)] [backface-visibility:hidden] " +
    "hover:scale-[1.05] hover:bg-neutral-200 dark:hover:bg-neutral-800",
} as const;

// ================================
// 🎬 TRANSITIONS
// ================================
export const transitions = {
  default: "transition duration-200 ease-in-out",
  shadow: "transition-shadow duration-200",
  opacity: "transition-opacity duration-200",
} as const;

// ================================
// 📊 Z-INDEX
// ================================
export const zIndex = {
  nav: "z-50",
  modal: "z-40",
  dropdown: "z-30",
  tooltip: "z-60",
  banner: "z-20",
  sticky: "z-10",
} as const;

// ================================
// ⚙️ ICON SIZES
// ================================
export const icon = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
} as const;

// ================================
// 🔷 REOPS COLOR MAPPING
// ================================
export const reopsColors = {
  governance: "#E8ECF7",
  knowledge: "#EAF7F1",
  participant: "#FFF3E6",
  tools: "#E9F2FF",
  enablement: "#F2F9E8",
  culture: "#F9E8EE",
} as const;

// ================================
// 🎨 NOTION HEX COLOR MAP
// ================================
export const notionHexMap = {
  default: { text: "#373530", bg: "#F7F7F7" },
  gray: { text: "#787774", bg: "#F1F1EF" },
  brown: { text: "#976D57", bg: "#F3EEEE" },
  orange: { text: "#CC782F", bg: "#F8ECDF" },
  yellow: { text: "#C29343", bg: "#FAF3DD" },
  green: { text: "#548164", bg: "#EEF3ED" },
  blue: { text: "#487CA5", bg: "#E9F3F7" },
  purple: { text: "#8A67AB", bg: "#F6F3F8" },
  pink: { text: "#B35488", bg: "#F9F2F5" },
  red: { text: "#C4554D", bg: "#FAECEC" },
} as const;

// ✅ FIX für Build: alter Import-Name weiter unterstützt
// (src/assets/.../SkillmapColors.ts importiert "notionHex")
export const notionHex = notionHexMap;

// ================================
// 📊 CHART TOKEN HELPERS
// ================================
export const chartTokens = {
  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontSize: { sm: 12, md: 16, lg: 20, xl: 24 },
  labelColor: notionHexMap.default.text,
  gridColor: "#E5E7EB",
  angleColor: "#E2E8F0",
};
