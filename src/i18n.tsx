import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "de" | "en";

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const dict = {
  de: {
    nav_home: "Home",
    nav_about: "Über mich",
    nav_expertise: "Expertise",
    nav_projects: "Projekte",
    nav_craft: "Handwerk & Research",
    nav_contact: "Kontakt",

    hero_title: "UX Research Director – Wirkung vor Output",
    hero_sub: "Entscheidungen beschleunigen, Strategie schärfen, ResearchOps skalieren, Teams befähigen.",
    cta_contact: "Kennenlernen buchen",

    // Sections (aus deinem gespeicherten Inhalt)
    about_title: "Über mich",
    about_body:
      "Von der Ökonometrie zum UX Research: Empowerment, Wirkung, kontinuierliches Lernen. Stationen: ATOSS (UXR Lead 01/2025–05/2025), zooplus (UXR Lead 07/2022–12/2024), Swiss Life (Sr UXR 05/2020–06/2022), Kaiser X Labs (08/2018–04/2020), empiriecom (02/2016–07/2018).",

    expertise_title: "Meine Expertise",
    expertise_summary:
      "Driving Vision and Growth: Strategie-Alignment, Übersetzen von Needs → Produktstrategien, Prozesse & Tooling, Teamführung & Mentoring, ROI-Nachweis.",
    expertise_items_title: "Fokusthemen",
    expertise_item_strategy: "UX Strategy (Double Diamond, Discovery → Prototyping → Analytics; 2×2 Priorisierung nach Risiko/Wissen)",
    expertise_item_reops: "ResearchOps (Maturity Matrix, Governance, Insights Activation, Process & Scope, Tools & Automation, Alignment, Resource & Strategy)",
    expertise_item_impact: "Impact Measurement (CLTV/Churn-Modell, HEART)",
    expertise_item_lead: "Team Leadership & Mentoring (Rollen-/Skill-Frameworks, Development Pfade)",
    expertise_item_research: "Strategic UX Research (OKRs, Erika Hall inspiriert, RITE-Methode)",

    projects_title: "Projekte (Auswahl)",
    projects_intro: "Kuratiertes Portfolio mit kurzen Zusammenfassungen.",
    project_adac: "ADAC Kfz-Versicherung",
    project_strategy: "A Winning UX Strategy",
    project_zooplus_pricing: "zooplus – Pricing Usability Test",
    project_reops: "zooplus – ResearchOps",
    project_swisslife: "Swiss Life – B2B2C",
    project_methodcards: "UX Method Cards",

    craft_title: "Handwerk & Research",
    craft_body:
      "Ich arbeite gerne mit den Händen: Tische, Betten, Couchtisch, Schwert & Schild etc. – dieselbe Präzision und Lernschleifen übertrage ich auf UXR.",

    contact_title: "Kontakt",
    contact_body:
      "Lass uns sprechen: Buche gerne einen kurzen Kennenlern-Call. Alternativ per LinkedIn oder E-Mail.",
    contact_cta: "Kontakt aufnehmen",

    footer_rights: "© " + new Date().getFullYear() + " Felix Bruckmeier. Alle Rechte vorbehalten.",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_expertise: "Expertise",
    nav_projects: "Projects",
    nav_craft: "Craft & Research",
    nav_contact: "Contact",

    hero_title: "UX Research Director – Impact over Output",
    hero_sub: "Accelerate decisions, sharpen strategy, scale ResearchOps, empower teams.",
    cta_contact: "Book a discovery call",

    about_title: "About me",
    about_body:
      "From econometrics to UX Research: empowerment, impact, continuous learning. Roles: ATOSS (UXR Lead 01/2025–05/2025), zooplus (UXR Lead 07/2022–12/2024), Swiss Life (Sr UXR 05/2020–06/2022), Kaiser X Labs (08/2018–04/2020), empiriecom (02/2016–07/2018).",

    expertise_title: "My Expertise",
    expertise_summary:
      "Driving Vision and Growth: strategy alignment, translating needs → product strategies, process & tooling, team leadership & mentoring, proving ROI.",
    expertise_items_title: "Focus areas",
    expertise_item_strategy: "UX Strategy (Double Diamond, Discovery → Prototyping → Analytics; 2×2 prioritization risk/knowledge)",
    expertise_item_reops: "ResearchOps (Maturity Matrix, Governance, Insights Activation, Process & Scope, Tools & Automation, Alignment, Resource & Strategy)",
    expertise_item_impact: "Impact Measurement (CLTV/churn model, HEART)",
    expertise_item_lead: "Team Leadership & Mentoring (role/skill frameworks, development paths)",
    expertise_item_research: "Strategic UX Research (OKRs, Erika Hall-inspired, RITE method)",

    projects_title: "Projects (selected)",
    projects_intro: "Curated portfolio with summaries.",
    project_adac: "ADAC Car Insurance",
    project_strategy: "A Winning UX Strategy",
    project_zooplus_pricing: "zooplus – Pricing Usability Test",
    project_reops: "zooplus – ResearchOps",
    project_swisslife: "Swiss Life – B2B2C",
    project_methodcards: "UX Method Cards",

    craft_title: "Craft & Research",
    craft_body:
      "I love working with my hands: tables, beds, a coffee table, sword & shield, etc. I carry the same precision and learning loops into UXR.",

    contact_title: "Contact",
    contact_body:
      "Let’s talk: book a quick discovery call, or reach me via LinkedIn or email.",
    contact_cta: "Get in touch",

    footer_rights: "© " + new Date().getFullYear() + " Felix Bruckmeier. All rights reserved.",
  },
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "de");
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => {
    const d = dict[lang];
    return (key: string) => d[key] ?? key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
