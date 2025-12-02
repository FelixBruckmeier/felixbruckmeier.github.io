// src/components/sections/projects/UXPortfolio/UXPortfolioProcessSection.tsx

import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import { SectionHeading, Subtitle, Body } from "@/components/ui/Tokens";
import { colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function UXPortfolioProcessSection() {
  return (
    <Section
      id="ux-portfolio-process"
      title="Process — how I turned scattered attempts into a coherent system"
      spacing="lg"
      borderTop
    >
      <SectionIntro>
        I didn’t start with a strong portfolio. My first version was a simple
        Google Sites page — quick to build, but extremely limiting. It didn’t
        represent my work, my thinking, or the level of craft I expect from
        myself as a UX Researcher.
      </SectionIntro>

      <div className="max-w-3xl space-y-12">

        {/* 1 — Realizing the limitations */}
        <div className="space-y-2">
          <Subtitle>1. Realizing the limitations</Subtitle>
          <Body className={cn(colors.muted.text)}>
            After a few months, I hit clear boundaries: the layout felt rigid,
            the structure didn’t scale, and the whole thing looked far less
            professional than I wanted. It became obvious that the tool was
            holding me back.
          </Body>
        </div>

        {/* 2 — Committing to rebuild */}
        <div className="space-y-2">
          <Subtitle>2. Committing to build it properly</Subtitle>
          <Body className={cn(colors.muted.text)}>
            So I made a decision: I would design and build my own portfolio from
            scratch — on GitHub, in real code, with my own design system. No
            templates, no shortcuts.
          </Body>
        </div>

        {/* 3 — Iteration */}
        <div className="space-y-2">
          <Subtitle>3. Learning through iteration</Subtitle>
          <Body className={cn(colors.muted.text)}>
            The first attempts were rough. But after two intense weeks and more
            than a hundred iterations, the structure finally clicked. I ended up
            with a system that was clear, consistent, modular, and aligned with
            how I approach UX.
          </Body>
        </div>

        {/* 4 — Scalable foundation */}
        <div className="space-y-2">
          <Subtitle>4. Creating a scalable foundation</Subtitle>
          <Body className={cn(colors.muted.text)}>
            The new system now lets me add content almost like building blocks,
            keep every page consistent by design, and update typography, spacing
            or color globally through tokens. It no longer feels like maintaining
            a website — it feels like working with a product.
          </Body>
        </div>

        {/* 5 — Personal growth */}
        <div className="space-y-2">
          <Subtitle>5. Growing as a maker</Subtitle>
          <Body className={cn(colors.muted.text)}>
            I never saw myself as a programmer — but working with code, tokens,
            and design systems has become something I genuinely enjoy. This
            portfolio grows with me — and that’s exactly how it should be.
          </Body>
        </div>

      </div>
    </Section>
  );
}
