// src/data/structuredData.ts

import { seo } from "@/data/seo";

export function createStructuredData(key: keyof typeof seo) {
  const item = seo[key];
  if (!item) return null;

  // ❌ Für WIP-Pages KEIN JSON-LD
  if (key.startsWith("project_") && !item.image) return null;

  const base = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: item.title,
    description: item.description,
    url: item.url,
  };

  // Homepage → Organisation + WebSite
  if (key === "home") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: item.title,
        url: item.url,
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Felix Bruckmeier",
        jobTitle: "Senior UX Researcher",
        url: item.url,
      },
    ];
  }

  // CV → Person
  if (key === "cv") {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Felix Bruckmeier",
      description: item.description,
      url: item.url,
    };
  }

  // Articles → Projekte + Expertise
  if (key.startsWith("project_") || key.startsWith("expertise_")) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: item.title,
      description: item.description,
      image: item.image,
      url: item.url,
      author: {
        "@type": "Person",
        name: "Felix Bruckmeier",
      },
    };
  }

  // Imprint & Privacy → WebPage
  return base;
}
