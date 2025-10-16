import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { layout, sectionSpacing, typography } from "@/lib/tokens";

interface PageLayoutProps {
  title?: string;
  intro?: string;
  headerImage?: string;
  children: ReactNode;
  width?: "narrow" | "default" | "wide"; // 🔹 Breitenoption
}

export default function PageLayout({
  title,
  intro,
  headerImage,
  children,
  width = "default",
}: PageLayoutProps) {
  // Dynamische Breitensteuerung über Tokens
  const containerClass =
    width === "narrow"
      ? layout.containerNarrow
      : width === "wide"
      ? layout.containerWide
      : layout.containerDefault;

  return (
    <main className="flex flex-col items-stretch text-left">
      {/* ===== HERO ===== */}
      {headerImage && (
        <section className="relative w-full flex flex-col justify-center items-center text-center text-white overflow-hidden min-h-[50vh]">
          <img
            src={headerImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />

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

      {/* ===== CONTENT ===== */}
      <div className={cn(containerClass, sectionSpacing.lg, "space-y-32")}>
        {children}
      </div>
    </main>
  );
}
