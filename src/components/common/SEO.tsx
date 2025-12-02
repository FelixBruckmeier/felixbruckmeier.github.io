// src/components/seo/SEO.tsx
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
  noindex = false,
  structuredKey,
}: SEOProps) {
  const fullImage =
    image ?? "https://felixbruckmeier.github.io/og-image.png";

  const jsonLd =
    !noindex && structuredKey
      ? createStructuredData(structuredKey as any)
      : null;

  return (
    <Helmet>
      {/* BASIC SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* CANONICAL */}
      {url && !noindex && <link rel="canonical" href={url} />}

      {/* ROBOTS */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Felix Bruckmeier – UX Research & Strategy" />
      <meta property="og:locale" content="en_US" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@FelixBruckmeier" />

      {/* STRUCTURED DATA */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
