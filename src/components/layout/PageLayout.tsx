import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { layout, sectionSpacing, typography } from "@/lib/tokens";

interface PageLayoutProps {
  title?: string;
  intro?: string;
  headerImage?: string; // Hintergrundbild
  children: ReactNode;
}

export default function PageLayout({
  title,
  intro,
  headerImage,
  children,
}: PageLayoutProps) {
  return (
    <main className="flex flex-col items-stretch text-left">
      {/* ===== HERO-BEREICH MIT HINTERGRUNDBILD ===== */}
      {headerImage && (
        <section
          className={cn(
            "relative w-full min-h-[50vh] flex flex-col justify-center items-center text-center text-white overflow-hidden"
          )}
        >
          {/* Hintergrundbild */}
          <img
            src={headerImage}
            alt=""
            data-hero
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Halbtransparenter Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Text-Content */}
          <div className="relative z-10 max-w-3xl px-6">
            {title && (
              <h1
                className={cn(
                  typography.hero.font,
                  typography.hero.size,
                  typography.hero.weight,
                  typography.hero.leading,
                  "text-white drop-shadow-lg"
                )}
              >
                {title}
              </h1>
            )}

            {intro && (
              <p
                className={cn(
                  typography.body.font,
                  typography.body.size,
                  "mt-6 text-gray-200 leading-relaxed drop-shadow-md"
                )}
              >
                {intro}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ===== SEITENINHALT ===== */}
      <div className={cn(layout.container, sectionSpacing.lg, "space-y-32")}>
        {children}
      </div>
    </main>
  );
}
