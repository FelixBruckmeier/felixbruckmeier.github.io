// src/components/seo/SEOPage.tsx
import SEO from "./SEO";
import { seo, SEOKey } from "@/data/seo";

export default function SEOPage({
  page,
  noindex = false,
}: {
  page: SEOKey;
  noindex?: boolean;
}) {
  return (
    <SEO
      {...seo[page]}
      noindex={noindex}
      structuredKey={noindex ? undefined : page}
    />
  );
}
