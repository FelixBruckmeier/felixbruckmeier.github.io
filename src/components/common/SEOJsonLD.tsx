import { Helmet } from "react-helmet-async";
import { seo } from "@/data/seo";
import { jsonld, JSONLDKey } from "@/data/jsonld";

export default function SEOJsonLD({ page }: { page: JSONLDKey }) {
  const seoData = seo[page];
  const json = jsonld[page](seoData);

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(json)}
      </script>
    </Helmet>
  );
}
