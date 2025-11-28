// src/pages/NotFound.tsx

import { Helmet } from "react-helmet-async";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { colors, spacing } from "@/lib/tokens";

export default function NotFound() {
  return (
    <>
      {/* ⭐ SEO für 404-Seiten */}
      <Helmet>
        <title>404 – Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className={cn("min-h-[60vh] grid place-items-center px-6", colors.background.text)}>
        <div className="text-center">
          <h1 className="text-3xl font-bold">404 — Not Found</h1>
          <p className={cn(spacing.mt2, colors.muted.text)}>
            Sorry, die Seite gibt’s nicht. Zurück zur Startseite?
          </p>
          <div className={spacing.mt4}>
            <Button asChild variant="secondary">
              <a href="/">Home</a>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
