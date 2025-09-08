import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "de";
type Dict = Record<string, { en: string; de: string }>;

const dict: Dict = {
  nav_home: { en: "Home", de: "Start" },
  nav_about: { en: "About me", de: "Über mich" },
  nav_expertise: { en: "Expertise", de: "Expertise" },
  nav_projects: { en: "Projects", de: "Projekte" },
  nav_cv: { en: "CV", de: "Lebenslauf" },
  nav_imprint: { en: "Imprint", de: "Impressum" },
  hero_title: { en: "UX Research Portfolio", de: "UX Research Portfolio" },
  hero_sub: { en: "Decision acceleration • Strategy • ResearchOps", de: "Decision Acceleration • Strategie • ResearchOps" },
  about_title: { en: "About me", de: "Über mich" },
  expertise_title: { en: "Expertise", de: "Expertise" },
  projects_title: { en: "Projects", de: "Projekte" },
  cv_title: { en: "Curriculum Vitae", de: "Lebenslauf" },
  imprint_title: { en: "Imprint", de: "Impressum" }
};

type Ctx = { lang: Lang; t: (k: keyof typeof dict | string) => string; setLang:(l:Lang)=>void };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("de");
  const t: Ctx["t"] = (k) => (dict as any)[k]?.[lang] ?? String(k);
  return <I18nCtx.Provider value={{ lang, t, setLang }}>{children}</I18nCtx.Provider>;
}
export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
