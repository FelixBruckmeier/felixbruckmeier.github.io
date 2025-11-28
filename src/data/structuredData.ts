import { seo } from "@/data/seo";

export function createStructuredData(key: keyof typeof seo) {
  const item = seo[key];
  if (!item) return null;

  // WIP ohne image → niemals JSON-LD
  if (!item.image) return null;

  // Default WebPage
  const base = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: item.title,
    description: item.description,
    url: item.url,
    image: item.image,
  };

  // Homepage → Website + Person
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
        image: item.image,
      },
    ];
  }

  // CV → Person Schema
  if (key === "cv") {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Felix Bruckmeier",
      description: item.description,
      url: item.url,
      image: item.image,
    };
  }

  // Expertise + Projects → Article Schema
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

  // Default fallback
  return base;
}

