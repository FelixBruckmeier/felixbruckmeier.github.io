// src/components/sections/home/AboutSection.tsx
import Section from "@/components/ui/Section";
import Tile from "@/components/ui/Tile";
import { Subtitle, Body, IntroText } from "@/components/ui/Tokens";
import { layout, spacing, radii, shadows, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import profileImg from "@/assets/profile-felix.png";

export default function AboutSection() {
  return (
    <Section id="about" title="About Me" center>
      {/* === Portrait & Intro === */}
      <div
        className={cn(
          "flex flex-col items-center text-center mx-auto",
          spacing.mt8,
          spacing.mb12
        )}
      >
        <img
          src={profileImg}
          alt="Portrait of Felix Bruckmeier"
          className={cn(
            "w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-background shadow-lg",
            colors.border,
            shadows.md
          )}
        />

        <IntroText
          className={cn(
            "max-w-2xl mt-8 text-foreground/90 leading-relaxed",
            spacing.pxCard
          )}
        >
          I am a UX Research Leader with a background in econometrics and
          product development. My work bridges qualitative depth and
          quantitative rigor, with a focus on ResearchOps, strategy alignment,
          and measurable impact.
        </IntroText>
      </div>

      {/* === 3 Tiles === */}
      <div
        className={cn(
          layout.gridCols3,
          layout.gridGap,
          "text-left justify-items-stretch"
        )}
      >
        <Tile variant="static" className="h-full">
          <Subtitle>Career Interests</Subtitle>
          <Body className={spacing.mt2}>
            Scaling ResearchOps, advancing UX maturity, and integrating
            user-centered decision making.
          </Body>
        </Tile>

        <Tile variant="static" className="h-full">
          <Subtitle>Background</Subtitle>
          <Body className={spacing.mt2}>
            Master’s degree in Economics from Augsburg, with 10+ years of
            experience in UX Research across industries.
          </Body>
        </Tile>

        <Tile variant="static" className="h-full">
          <Subtitle>Personal Note</Subtitle>
          <Body className={spacing.mt2}>
            I see research as both craft and strategy — repeatable, improvable,
            and essential for confident decisions.
          </Body>
        </Tile>
      </div>
    </Section>
  );
}

