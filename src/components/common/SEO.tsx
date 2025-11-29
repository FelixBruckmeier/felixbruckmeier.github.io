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

export default function SEO({
  title,
  description,
  image,
  url,
  noindex,
  structuredKey,
}: SEOProps) {
  // OG fallback image → Social Banner
  const fullImage = image ?? "https://felixbruckmeier.github.io/og-image.png";

  // Structured Data (Person/Article/WebPage …)
  const jsonLd = structuredKey ? createStructuredData(structuredKey as any) : null;

  return (
    <Helmet>
      {/* SEO Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      {url && !noindex && <link rel="canonical" href={url} />}

      {/* Robots */}
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

      {/* JSON-LD */}

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
