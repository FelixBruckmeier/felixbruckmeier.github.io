// src/components/sections/AboutSection.tsx
import Section from "@/components/ui/Section";
import Tile from "@/components/ui/Tile";
import { Subtitle, Body, IntroText } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";

export default function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <div className={`${layout.gridCols2} ${layout.gridGap} items-start`}>
        {/* Left Column: Sticky intro text below the navbar */}
        <div className={`${layout.stickyBelowNav} self-start`}>
          <IntroText>
            I am a UX Research Leader with a background in econometrics and
            product development. My work bridges qualitative depth and
            quantitative rigor, with a focus on ResearchOps, strategy alignment,
            and measurable impact.
          </IntroText>
        </div>

        {/* Right Column: Tiles (static) */}
        <div className={`grid ${layout.gridGap} items-stretch`}>
          <Tile variant="static" className={layout.fullHeight}>
            <Subtitle>Career Interests</Subtitle>
            <Body className={spacing.mt2}>
              Scaling ResearchOps, advancing UX maturity, integrating
              user-centered decision making.
            </Body>
          </Tile>

          <Tile variant="static" className={layout.fullHeight}>
            <Subtitle>Background</Subtitle>
            <Body className={spacing.mt2}>
              Master’s degree in Economics from Augsburg, 10+ years of
              experience in UX Research across industries.
            </Body>
          </Tile>

          <Tile variant="static" className={layout.fullHeight}>
            <Subtitle>Personal Note</Subtitle>
            <Body className={spacing.mt2}>
              I see research as both craft and strategy: repeatable, improvable,
              and essential for confident decisions.
            </Body>
          </Tile>
        </div>
      </div>
    </Section>
  );
}
