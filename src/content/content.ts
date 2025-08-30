export type NavLink = { href: string; label: string };
export type HeroContent = {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  focus: string[];
};
export type ExpertiseItem = { title: string; desc: string };
export type Project = { title: string; summary: string; tags: string[]; link?: string };
export type Translations = {
  nav: { links: NavLink[] };
  hero: HeroContent;
  sections: { expertise: string; projects: string; contact: string };
  expertise: ExpertiseItem[];
  projects: Project[];
};

export const translations: Record<"en" | "de", Translations> = {
  en: {
    nav: {
      links: [
        { href: "#expertise", label: "Expertise" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
      ]
    },
    hero: {
      badge: "UX Research & Design",
      title: "Research that drives confident product moves.",
      subtitle: "From discovery to validation: I help teams de-risk ideas and improve UX quality with mixed-methods research.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact",
      focus: ["Interviews", "Surveys", "Usability Tests", "Prototyping", "Product Strategy"]
    },
    sections: {
      expertise: "Expertise",
      projects: "Projects",
      contact: "Contact"
    },
    expertise: [
      { title: "Discovery Interviews", desc: "Jobs-to-be-done, unmet needs, opportunity sizing." },
      { title: "Surveys", desc: "Segmentation, sizing, triangulation with qual insights." },
      { title: "Usability Tests", desc: "Moderated/remote tests, accessibility, quality gates." },
      { title: "Prototyping", desc: "Low→high fidelity prototypes to evaluate solutions." },
      { title: "Experimentation", desc: "Concept tests, smoke tests, A/B – from signal to rollout." },
      { title: "Insight Communication", desc: "Short artifacts, prioritization, PM/Design partnership." }
    ],
    projects: [
      { title: "Checkout Usability Study", summary: "Reduced drop-off by 14% via moderated tests and quick iteration.", tags: ["Usability", "E‑commerce", "Figma"], link: "#" },
      { title: "Onboarding Research", summary: "Interview + survey triangulation prioritized onboarding improvements.", tags: ["Interviews", "Survey"], link: "#" },
      { title: "Pricing Experiment", summary: "Mixed-methods + A/B test led to +9% trial signups.", tags: ["Experiment", "Analytics"], link: "#" },
      { title: "Mobile Navigation", summary: "Card sorting + tree tests improved findability by 23%.", tags: ["IA", "Card Sort"], link: "#" },
      { title: "Support Center", summary: "Search logs + interviews cut time-to-answer by 30%.", tags: ["Search", "Content"], link: "#" },
      { title: "Dashboard UX", summary: "Task analysis simplified workflows for core personas.", tags: ["Workflows", "Personas"], link: "#" }
    ]
  },
  de: {
    nav: {
      links: [
        { href: "#expertise", label: "Expertise" },
        { href: "#projects", label: "Projekte" },
        { href: "#contact", label: "Kontakt" }
      ]
    },
    hero: {
      badge: "UX Research & Design",
      title: "Research für sichere Produkt-Entscheidungen.",
      subtitle: "Von Discovery bis Validierung: Mixed-Methods-Research, das Risiken senkt und UX-Qualität hebt.",
      ctaPrimary: "Projekte ansehen",
      ctaSecondary: "Kontakt",
      focus: ["Interviews", "Umfragen", "Usability-Tests", "Prototyping", "Produktstrategie"]
    },
    sections: {
      expertise: "Expertise",
      projects: "Projekte",
      contact: "Kontakt"
    },
    expertise: [
      { title: "Discovery-Interviews", desc: "Jobs-to-be-done, Needs, Opportunity-Sizing." },
      { title: "Umfragen", desc: "Segmentierung, Sizing, Triangulation mit qualitativen Insights." },
      { title: "Usability-Tests", desc: "Moderiert/remote, Accessibility, Quality-Gates." },
      { title: "Prototyping", desc: "Low→High-Fidelity-Prototypen für Evaluation." },
      { title: "Experimente", desc: "Concept Tests, Smoke Tests, A/B – vom Signal zum Rollout." },
      { title: "Insights kommunizieren", desc: "Kurze Artefakte, Priorisierung, enge PM/Design-Partnerschaft." }
    ],
    projects: [
      { title: "Checkout-Usability", summary: "14% weniger Abbrüche durch moderierte Tests und schnelle Iteration.", tags: ["Usability", "E‑Commerce", "Figma"], link: "#" },
      { title: "Onboarding-Research", summary: "Interviews + Umfrage priorisierten Onboarding-Verbesserungen.", tags: ["Interviews", "Umfrage"], link: "#" },
      { title: "Pricing-Experiment", summary: "Mixed-Methods + A/B führten zu +9% Trial-Signups.", tags: ["Experiment", "Analytics"], link: "#" },
      { title: "Mobile Navigation", summary: "Card Sorting + Tree Tests steigerten Findbarkeit um 23%.", tags: ["IA", "Card Sort"], link: "#" },
      { title: "Support Center", summary: "Search-Logs + Interviews reduzierten Time-to-Answer um 30%.", tags: ["Search", "Content"], link: "#" },
      { title: "Dashboard-UX", summary: "Task-Analyse vereinfachte Workflows für Kern-Personas.", tags: ["Workflows", "Personas"], link: "#" }
    ]
  }
};

export function getContent(lang: "en" | "de") {
  return translations[lang];
}
