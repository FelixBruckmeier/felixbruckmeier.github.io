// src/components/sections/projects/UXPortfolio/UXPortfolioDesignSystemSection.tsx
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import Tile from "@/components/ui/Tile";

// ❗ FIX: Code entfernt – existiert nicht in Tokens.tsx
import { SectionHeading, Subtitle, Body } from "@/components/ui/Tokens";

import { colors, spacing, layout } from "@/lib/tokens";

export function UXPortfolioDesignSystemSection() {
  return (
    <Section
      id="ux-portfolio-design-system"
      title="Design system — small but opinionated"
      spacing="lg"
      borderTop
    >
      <SectionIntro>
        The system is intentionally small. Instead of hundreds of components, it
        defines a few strong primitives that encode layout, hierarchy, and
        rhythm: <strong>tokens</strong> for visual decisions and{" "}
        <strong>Section-level components</strong> for narrative structure.
        Everything else is composed from these.
      </SectionIntro>

      <div className="space-y-12">
        {/* 1. Tokens */}
        <div className="grid gap-8 lg:grid-cols-3 items-start">
          <div className="lg:col-span-1">
            <SectionHeading>1. Tokens.ts</SectionHeading>
            <Body className={colors.muted.text}>
              The <code>tokens.ts</code> file centralises the visual language:
              colors, typography scales, spacing, radii, and hover behaviours.
              It acts as a bridge between Tailwind utilities and design intent.
            </Body>
          </div>
          <div className="lg:col-span-2 grid gap-6 md:grid-cols-2">
            <Tile variant="static">
              <Subtitle>Colors</Subtitle>
              <Body className={colors.muted.text}>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <code>colors.background</code>, <code>colors.primary</code>,{" "}
                    <code>colors.accent</code> map to CSS variables in{" "}
                    <code>index.css</code>.
                  </li>
                  <li>
                    Notion-like color set in{" "}
                    <code>palette.notion</code> for tags, badges, and charts.
                  </li>
                  <li>
                    Dark mode handled purely via class and CSS variables –
                    components just consume tokens.
                  </li>
                </ul>
              </Body>
            </Tile>

            <Tile variant="static">
              <Subtitle>Typography & spacing</Subtitle>
              <Body className={colors.muted.text}>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <code>typography.hero</code>,{" "}
                    <code>sectionTitle</code>, <code>body</code>,{" "}
                    <code>small</code> define scale & leading.
                  </li>
                  <li>
                    <code>sectionSpacing</code> and <code>spacing.*</code> keep
                    vertical rhythm consistent across pages.
                  </li>
                  <li>
                    Layout helpers (e.g.{" "}
                    <code>layout.containerDynamic</code>) avoid ad-hoc
                    max-widths scattered in components.
                  </li>
                </ul>
              </Body>
            </Tile>
          </div>
        </div>

        {/* 2. Layout primitives */}
        <div className="grid gap-8 lg:grid-cols-3 items-start">
          <div className="lg:col-span-1">
            <SectionHeading>2. Layout primitives</SectionHeading>
            <Body className={colors.muted.text}>
              Layout components like <code>PageLayout</code> and{" "}
              <code>Section</code> encode how content should breathe. They
              remove layout decisions from case study content, so each project
              focuses on story instead of CSS.
            </Body>
          </div>
          <div className="lg:col-span-2 grid gap-6 md:grid-cols-2">
            <Tile variant="static">
              <Subtitle>PageLayout</Subtitle>
              <Body className={colors.muted.text}>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Optional hero with background image + overlay</li>
                  <li>
                    Consistent spacing between sections via{" "}
                    <code>sectionSpacing.lg</code>
                  </li>
                  <li>
                    Content width not hard-coded – each <code>Section</code>{" "}
                    decides whether it’s full-width or constrained
                  </li>
                </ul>
              </Body>
            </Tile>

            <Tile variant="static">
              <Subtitle>Section & SectionIntro</Subtitle>
              <Body className={colors.muted.text}>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <code>&lt;Section&gt;</code> standardises container width,
                    padding, border options, and scroll offset for anchors.
                  </li>
                  <li>
                    <code>SectionIntro</code> provides intro copy with proper
                    width and typographic style.
                  </li>
                  <li>
                    All project content is built as combinations of these
                    primitives.
                  </li>
                </ul>
              </Body>
            </Tile>
          </div>
        </div>

        {/* 3. UI elements */}
        <div className="grid gap-8 lg:grid-cols-3 items-start">
          <div className="lg:col-span-1">
            <SectionHeading>3. UI elements</SectionHeading>
            <Body className={colors.muted.text}>
              Components in <code>components/ui</code> are intentionally small
              and composable. They cover just enough to express hierarchy,
              emphasis, and relationships without becoming heavy.
            </Body>
          </div>

          <div className="lg:col-span-2 grid gap-6 md:grid-cols-2">
            <Tile variant="static">
              <Subtitle>Tiles, Tags, Badges</Subtitle>
              <Body className={colors.muted.text}>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <code>Tile</code> handles surface style & hover behaviour.
                  </li>
                  <li>
                    <code>Tag</code> + <code>Badge</code> use Notion palette for
                    semantic meaning.
                  </li>
                  <li>Used to denote methods, roles, and themes.</li>
                </ul>
              </Body>
            </Tile>

            <Tile variant="static">
              <Subtitle>Typography components</Subtitle>
              <Body className={colors.muted.text}>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <code>H1</code>, <code>SectionHeading</code>,{" "}
                    <code>Body</code>, <code>Small</code>, <code>Quote</code>{" "}
                    wrap token typography.
                  </li>
                  <li>
                    Refactoring type scale becomes a single change in{" "}
                    <code>tokens.ts</code>.
                  </li>
                </ul>
              </Body>
            </Tile>
          </div>
        </div>

        {/* 4. Behaviour & theming */}
        <div className="grid gap-8 lg:grid-cols-3 items-start">
          <div className="lg:col-span-1">
            <SectionHeading>4. Behaviour & theming</SectionHeading>
            <Body className={colors.muted.text}>
              Behaviour lives in lightweight hooks. Dark mode and scroll handling
              are treated as system-level concerns.
            </Body>
          </div>

          <div className="lg:col-span-2 grid gap-6 md:grid-cols-2">
            <Tile variant="static">
              <Subtitle>ThemeToggle & dark mode</Subtitle>
              <Body className={colors.muted.text}>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Theme stored in localStorage.</li>
                  <li>Dark mode uses CSS variables.</li>
                  <li>Images slightly darkened for contrast.</li>
                </ul>
              </Body>
            </Tile>

            <Tile variant="static">
              <Subtitle>Navigation & scrolling</Subtitle>
              <Body className={colors.muted.text}>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Navbar tracks active section via IntersectionObserver.
                  </li>
                  <li>Hash navigation respects fixed header via scroll-margin.</li>
                  <li>Smooth scrolling for anchors.</li>
                </ul>
              </Body>
            </Tile>
          </div>
        </div>
      </div>
    </Section>
  );
}
