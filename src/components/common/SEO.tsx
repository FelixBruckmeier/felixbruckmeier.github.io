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
  const fullImage = image ?? "https://felixbruckmeier.github.io/og-image.png";

  const jsonLd = structuredKey
    ? createStructuredData(structuredKey as any)
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* OG */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
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
