// src/components/sections/HeroSection.tsx
import { useTranslation } from "react-i18next";
import profileImg from "@/assets/profile-felix.png";
import headerHome from "@/assets/images/headers/home/headerhome.jpg";
import Button from "@/components/ui/Button";
import { H1, Body, MutedText } from "@/components/ui/Tokens";
import { colors, layout, spacing, radii, shadows, sectionSpacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="header"
      className={cn(
        "relative w-full overflow-hidden",
        layout.scrollOffset,
        sectionSpacing.lg
      )}
    >
      {/* --- Hintergrundbild über volle Breite --- */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${headerHome})`,
        }}
      />
      {/* --- Halbtransparentes Overlay --- */}
      <div className="absolute inset-0 bg-black/40" />

      {/* --- Inhalt --- */}
      <div
        className={cn(
          "relative z-10 grid items-center w-full min-h-[70vh]",
          layout.container,
          layout.gridHero,
          spacing.gap10
        )}
      >
        {/* --- Textseite --- */}
        <div className="text-white">
          <H1 className="drop-shadow-lg">Felix Bruckmeier</H1>

          <Body className={cn("text-neutral-200 mt-3 max-w-2xl")}>
            {t("hero.claim")}
          </Body>

          <Body className={cn("mt-6 max-w-2xl text-neutral-300")}>
            <MutedText>{t("hero.intro")}</MutedText>
          </Body>

          {/* --- Call-to-Actions --- */}
          <div className={cn("flex flex-wrap", spacing.gap4, spacing.pt6)}>
            <Button asChild to="/cv" variant="secondary" size="lg">
              View CV
            </Button>
            <Button asChild to="#projects" variant="secondary" size="lg">
              See Projects
            </Button>
            <Button asChild to="#expertise" variant="secondary" size="lg">
              Explore Expertise
            </Button>
          </div>
        </div>

        {/* --- Profilbild rechts --- */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src={profileImg}
            alt="Portrait of Felix Bruckmeier"
            className={cn(
              "w-full max-w-sm object-cover relative z-10",
              radii.xxl,
              shadows.lg,
              "border border-white/20"
            )}
          />
        </div>
      </div>
    </section>
  );
}
