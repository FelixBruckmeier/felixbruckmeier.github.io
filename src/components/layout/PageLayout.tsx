// src/components/layout/PageLayout.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { sectionSpacing, typography } from "@/lib/tokens";

type PictureLike = {
  sources?: Array<{
    srcset: string;
    type: string;
    sizes?: string;
  }>;
  img?: { src: string; width: number; height: number };
};

interface PageLayoutProps {
  title?: string;
  intro?: string;
  headerImage?: string | PictureLike; // ✅ beides möglich
  children: ReactNode;
  width?: "narrow" | "default" | "wide"; // bleibt für Kompatibilität, wird aber nicht mehr genutzt
}

function getHeaderUrl(headerImage?: string | PictureLike) {
  if (!headerImage) return undefined;
  if (typeof headerImage === "string") return headerImage;
  if (typeof headerImage === "object" && headerImage?.img?.src) return headerImage.img.src;
  return undefined;
}

export default function PageLayout({
  title,
  intro,
  headerImage,
  children,
}: PageLayoutProps) {
  const headerUrl = getHeaderUrl(headerImage);

  return (
    <main className="flex flex-col items-stretch text-left">
      {/* ===== HERO ===== */}
      {headerUrl && (
        <section
          className="relative w-full flex flex-col justify-center items-center text-center text-white overflow-hidden h-[60vh] bg-black/30"
          style={{
            backgroundImage: `url(${headerUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            transition: "background-size 0.6s ease-in-out",
          }}
        >
          {/* Overlay für bessere Lesbarkeit */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Titel & Intro zentral positioniert */}
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
      <div className={cn(sectionSpacing.lg, "space-y-32")}>{children}</div>
    </main>
  );
}
