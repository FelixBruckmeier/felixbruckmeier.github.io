export const jsonld = {
  home: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Felix Bruckmeier",
    jobTitle: "Senior UX Researcher",
    url: seo.url,
    image: seo.image,
    sameAs: [
      "https://www.linkedin.com/in/felix-bruckmeier/",
      "https://github.com/felixbruckmeier"
    ],
  }),

  cv: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: seo.title,
    description: seo.description,
    url: seo.url,
  }),

  // ---- Expertise Root Pages ----
  expertise_impactMeasurement: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: seo.title,
    description: seo.description,
    url: seo.url,
  }),

  expertise_researchOps: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: seo.title,
    description: seo.description,
    url: seo.url,
  }),

  expertise_strategicUXResearch: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: seo.title,
    description: seo.description,
    url: seo.url,
  }),

  expertise_teamLeadership: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: seo.title,
    description: seo.description,
    url: seo.url,
  }),

  expertise_uxStrategy: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: seo.title,
    description: seo.description,
    url: seo.url,
  }),

  // ---- Team Leadership Subpage ----
  expertise_teamLeadership_skillassessment: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: seo.title,
    description: seo.description,
    url: seo.url,
  }),

  // ---- Projects Live ----
  project_carInsurance: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: seo.title,
    description: seo.description,
    url: seo.url,
    image: seo.image,
  }),

  project_insuranceBroker: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: seo.title,
    description: seo.description,
    url: seo.url,
    image: seo.image,
  }),

  project_pricing: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: seo.title,
    description: seo.description,
    url: seo.url,
    image: seo.image,
  }),

  project_uxPortfolio: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: seo.title,
    description: seo.description,
    url: seo.url,
    image: seo.image,
  }),

  project_workshop: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: seo.title,
    description: seo.description,
    url: seo.url,
    image: seo.image,
  }),

  project_kanostrategy: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: seo.title,
    description: seo.description,
    url: seo.url,
    image: seo.image,
  }),

  // ---- WIP Projects (Noindex — JSON-LD trotzdem korrekt) ----
  project_deleteCase: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: seo.title,
    description: seo.description,
    url: seo.url,
  }),

  project_reopsimplementation: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: seo.title,
    description: seo.description,
    url: seo.url,
    image: seo.image,
  }),

  project_zooplusreops: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: seo.title,
    description: seo.description,
    url: seo.url,
    image: seo.image,
  }),

  // ---- Legal ----
  page_imprint: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.title,
    description: seo.description,
    url: seo.url,
  }),

  page_privacy: (seo: any) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.title,
    description: seo.description,
    url: seo.url,
  }),
} as const;

export type JSONLDKey = keyof typeof jsonld;
