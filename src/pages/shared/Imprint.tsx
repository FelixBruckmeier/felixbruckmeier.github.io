// src/pages/shared/Imprint.tsx

import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";
import ImprintSection from "@/components/common/ImprintSection";
import { Helmet } from "react-helmet-async";

export default function ImprintPage() {
  return (
    <PageLayout title="Imprint">

      {/* ⭐ SEO – soll indexiert werden */}
      <SEOPage page="page_imprint" />

      {/* ⭐ JSON-LD für Impressum / Website-Betreiber */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Imprint – Felix Bruckmeier",
            "url": "https://felixbruckmeier.github.io/imprint",
            "areaServed": "Worldwide",
            "provider": {
              "@type": "Person",
              "name": "Felix Bruckmeier",
              "jobTitle": "Senior UX Researcher",
              "url": "https://felixbruckmeier.github.io/",
              "image": "https://felixbruckmeier.github.io/og-image.png"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Felix Bruckmeier UX Research",
              "logo": {
                "@type": "ImageObject",
                "url": "https://felixbruckmeier.github.io/og-image.png"
              }
            }
          })}
        </script>
      </Helmet>

      <ImprintSection />
    </PageLayout>
  );
}
