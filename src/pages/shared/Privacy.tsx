// src/pages/shared/Privacy.tsx

import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import SEOPage from "@/components/common/SEOPage";
import PrivacySection from "@/components/common/PrivacySection";

export default function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy">

      {/* ⭐ SEO – privacy page MUST be indexed + canonical */}
      <SEOPage 
        page="page_privacy" 
        url="https://felixbruckmeier.github.io/privacy"
      />

      {/* ⭐ Custom JSON-LD specifically for this page */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            "name": "Privacy Policy – Felix Bruckmeier",
            "url": "https://felixbruckmeier.github.io/privacy",
            "publisher": {
              "@type": "Person",
              "name": "Felix Bruckmeier",
              "url": "https://felixbruckmeier.github.io"
            }
          })}
        </script>
      </Helmet>

      <PrivacySection />
    </PageLayout>
  );
}
