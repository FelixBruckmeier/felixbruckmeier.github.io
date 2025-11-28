import { Helmet } from "react-helmet-async";
import { createStructuredData } from "@/data/structuredData";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  noindex?: boolean;
  structuredKey?: string;
}

// src/components/common/SEO.tsx
export default function SEO({
  title,
  description,
  image,
  url,
  noindex,
  structuredKey,
}: SEOProps) {
  const fullImage = image ?? "https://felixbruckmeier.github.io/og-image.png";
  const jsonLd = structuredKey ? createStructuredData(structuredKey as any) : null;

  return (
    <Helmet>
      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      {/* ✅ Änderung: keine Canonical, wenn noindex true */}
      {url && !noindex && <link rel="canonical" href={url} />}

      {/* Robots (Noindex) */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
