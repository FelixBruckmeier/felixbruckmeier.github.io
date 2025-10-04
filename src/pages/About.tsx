// src/pages/About.tsx
import Section from "@/components/ui/Section";
import Tile from "@/components/ui/Tile";
import { IntroText, Subtitle, Body } from "@/components/ui/Tokens";
import { layout, sectionInnerSpacing } from "@/lib/tokens";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Intro */}
      <Section id="about" title="About Me">
        <IntroText className="max-w-3xl">
          I am a UX Research Leader with a background in econometrics and
          product development. My work bridges qualitative depth and
          quantitative rigor, with a focus on ResearchOps, strategy alignment,
          and measurable impact.
        </IntroText>
      </Section>

      {/* Kacheln (static) */}
      <Section id="about-tiles" border={false}>
        <div className={`grid ${layout.gridCols3} ${layout.gridGap}`}>
          <Tile variant="static">
            <Subtitle>Career Interests</Subtitle>
            <Body className={sectionInnerSpacing.subtitleMargin}>
              Scaling ResearchOps, advancing UX maturity, integrating
              user-centered decision making.
            </Body>
          </Tile>

          <Tile variant="static">
            <Subtitle>Background</Subtitle>
            <Body className={sectionInnerSpacing.subtitleMargin}>
              Master’s degree in Economics from Augsburg, 10+ years of
              experience in UX Research across industries.
            </Body>
          </Tile>

          <Tile variant="static">
            <Subtitle>Personal Note</Subtitle>
            <Body className={sectionInnerSpacing.subtitleMargin}>
              I see research as both <strong>craft and strategy</strong>:
              repeatable, improvable, and essential for confident decisions.
            </Body>
          </Tile>
        </div>
      </Section>
    </main>
  );
}
