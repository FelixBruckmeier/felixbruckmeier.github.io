import { seo } from "@/data/seo";

/** 
 * Das Portrait NUR für Google SERP (nicht für Social Media).
 * Muss im public/ Ordner liegen.
 */
const PERSON_IMAGE = "https://felixbruckmeier.github.io/felix-bruckmeier.jpg";

export function createStructuredData(key: keyof typeof seo) {
  const item = seo[key];
  if (!item) return null;

  // Ohne OG image → kein JSON-LD
  if (!item.image) return null;

  // 🔹 Default: WebPage Schema (für alles außer Home, CV, Project/Expertise)
  const base = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: item.title,
    description: item.description,
    url: item.url,
    image: item.image, // ← OG-Image für Social Media (Banner)
  };

  // 🔹 Homepage → Website + Person
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
        jobTitle: "UX Research Lead",
        url: item.url,
        image: PERSON_IMAGE, // ← Portrait NUR für Google SERP
      },
    ];
  }

  // 🔹 CV → nur Person Schema
  if (key === "cv") {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Felix Bruckmeier",
      description: item.description,
      url: item.url,
      image: PERSON_IMAGE, // ← Portrait NUR für Google SERP
    };
  }

  // 🔹 Expertise- & Projektseiten → Article Schema
  if (key.startsWith("project_") || key.startsWith("expertise_")) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: item.title,
      description: item.description,
      image: item.image, // ← OG-Image bleibt Banner
      url: item.url,
      author: {
        "@type": "Person",
        name: "Felix Bruckmeier",
      },
    };
  }

  return base;
}
