import SEO from "./SEO";
import { seo, SEOKey } from "@/data/seo";

export default function SEOPage({
  page,
  noindex,
}: {
  page: SEOKey;   // <-- einzig richtige Lösung
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
