// src/components/sections/HeroSection.tsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import profileImg from "@/assets/profile-felix.png";
import Button from "@/components/ui/Button";
import ResearchGridBackground from "@/components/ui/ResearchGridBackground";

// 👉 Token-Komponenten & Utilities
import { H1, Body, MutedText } from "@/components/ui/Tokens";
import {
  colors,
  layout,
  spacing,
  radii,
  shadows,
  sectionSpacing,
} from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="header"
      className={cn(
        "relative overflow-hidden", // Utility ok
        layout.scrollOffset,        // ✅ ersetzt scroll-mt-24
        sectionSpacing.lg           // ✅ zentrales Section-Spacing
      )}
    >
      {/* Hintergrund-Muster */}
      <ResearchGridBackground className="opacity-50" />

      {/* Inhalt im Container */}
      <div
        className={cn(
          layout.container,
          "grid items-center relative z-10",
          spacing.gap10,
          layout.gridHero // ✅ Hero-Grid über Tokens
        )}
      >
        {/* Left: Text */}
        <div>
          <H1>Felix Bruckmeier</H1>

          <Body className={spacing.mt3}>{t("hero.claim")}</Body>

          <Body className={cn(spacing.mt6, "max-w-2xl")}>
            <MutedText>{t("hero.intro")}</MutedText>
          </Body>

          {/* Call-to-Actions */}
          <div className={cn("flex flex-wrap", spacing.gap4, spacing.pt6)}>
            <Button asChild variant="secondary" size="lg">
              <Link to="/cv">View CV</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#projects">See Projects</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#expertise">Explore Expertise</a>
            </Button>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="flex justify-center md:justify-end">
          <img
            src={profileImg}
            alt="Portrait of Felix Bruckmeier"
            className={cn(
              "w-full max-w-sm object-cover",
              radii.xxl,     // ✅ große Rundung
              shadows.lg,    // ✅ Schatten
              colors.border, // ✅ Border-Farbe
              "border"       // ✅ Linie
            )}
          />
        </div>
      </div>
    </section>
  );
}
