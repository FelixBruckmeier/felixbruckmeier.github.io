// src/components/sections/projects/UXPortfolio/UXPortfolioDesignSystemSection.tsx

import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import FadeIn from "@/components/ui/FadeIn";
import { SectionHeading, Body } from "@/components/ui/Tokens";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

// EXISTING
import structureImg from "@/assets/images/projects/uxportfolio/structure.png";

// NEW
import spacingImg from "@/assets/images/projects/uxportfolio/spacing.png";
import sectionImg from "@/assets/images/projects/uxportfolio/section.png";

/* =========================================================
   Image helper – supports Vite + vite-imagetools outputs
   ========================================================= */
type PictureLike = {
  sources?: Array<{
    srcset: string;
    type: string;
    sizes?: string;
  }>;
  img?: { src: string; width: number; height: number };
};

type ImgLike = string | PictureLike;

function imgUrl(img?: ImgLike): string | undefined {
  if (!img) return undefined;
  return typeof img === "string" ? img : img.img?.src;
}

/* ---------------------------- UI COMPONENT PREVIEW ---------------------------- */

function UIComponentPreview() {
  return (
    <div className="flex flex-col gap-8 p-10 bg-gray-50 rounded-2xl border shadow-sm w-full max-w-3xl">
      {/* Tile */}
      <div className="border rounded-xl p-6 bg-white shadow-sm">
        <h3 className="text-sm font-medium opacity-80 mb-2">Tile Component</h3>
        <p className="text-sm opacity-80">
          Dummy text — example tile from the design system.
        </p>
      </div>

      {/* Tag + Badge */}
      <div className="flex gap-3 items-center">
        <span className="px-3 py-[2px] text-xs rounded-md bg-gray-100 text-gray-700 border border-gray-200">
          ResearchOps
        </span>

        <span className="px-2 py-[1px] text-xs rounded-sm bg-green-100 text-green-800 border border-green-200">
          Success
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 items-center">
        <button className="px-4 py-2 text-sm rounded-md bg-white border shadow-sm hover:bg-gray-100">
          Primary Button
        </button>

        <button className="px-4 py-2 text-sm rounded-md bg-white border shadow-sm hover:bg-gray-100">
          Secondary
        </button>

        {/* Round icon button */}
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border shadow-sm hover:bg-gray-100 text-lg">
          ⭐
        </button>
      </div>
    </div>
  );
}

/* ---------------------------- PLACEHOLDERS ---------------------------- */

const placeholders: Record<string, ImgLike> = {
  colors: "https://via.placeholder.com/1200x700?text=Color+Tokens",
  typography: "https://via.placeholder.com/1200x700?text=Typography+Scale",
  spacing: spacingImg,
  components: "https://via.placeholder.com/1200x700?text=UI+Components",
  section: sectionImg,
  structure: "https://via.placeholder.com/1200x700?text=Folder+Structure",
  best: "https://via.placeholder.com/1200x700?text=Design+System+Principles",
};

type Step = {
  title: string;
  caption: string;
  desc: React.ReactNode;
  img?: ImgLike | null;
  preview?: React.ReactNode;
};

/* ---------------------------- SECTION COMPONENT ---------------------------- */

export function UXPortfolioDesignSystemSection() {
  const steps: Step[] = [
    {
      title: "Tokens — the foundation of visual consistency",
      caption: "Color system, spacing scale, radii & shadows",
      desc: (
        <>
          My entire visual language lives in a single place:
          <code> tokens.ts</code>.
          <br />
          <br />
          I maintain:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Colors:</strong> background/foreground, semantic palette,
              Notion-inspired tags
            </li>
            <li>
              <strong>Status colors:</strong> success, warning, error, info
            </li>
            <li>
              <strong>Radii:</strong> from subtle rounding up to full pills
            </li>
            <li>
              <strong>Shadows:</strong> sm → xl for depth hierarchy
            </li>
            <li>
              <strong>Z-index map:</strong> nav, overlays, tooltips
            </li>
          </ul>
          One update cascades across the entire site — no visual drift.
        </>
      ),
      img: null,
    },
    {
      title: "Typography — a scale built for clarity & rhythm",
      caption: "Headings, Body, Caption, TagText",
      desc: (
        <>
          I created a token-driven type scale that keeps the reading rhythm calm
          across pages.
          <br />
          <br />
          Components include:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>H1 / Hero</strong> – homepage, large moments
            </li>
            <li>
              <strong>H2 / SectionHeading</strong> – narrative structure
            </li>
            <li>
              <strong>Subtitle</strong> – supportive second level
            </li>
            <li>
              <strong>Body</strong> – all normal text
            </li>
            <li>
              <strong>Small / Caption</strong> – meta & footnotes
            </li>
            <li>
              <strong>Code</strong> – monospace for technical details
            </li>
          </ul>
          Every text element is a component — no raw &lt;p&gt; styling.
        </>
      ),
      img: null,
    },
    {
      title: "Spacing & Layout — predictable structure everywhere",
      caption: "Section spacing, grids, container rules",
      img: placeholders.spacing,
      desc: (
        <>
          All spacing follows a tokenized scale. I don’t use mt-6, p-4 or random
          Tailwind values.
          <br />
          <br />
          The system defines:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Section spacing:</strong> sm, md, lg, xl
            </li>
            <li>
              <strong>Inner spacing:</strong> titleMargin, subtitleMargin
            </li>
            <li>
              <strong>Grid primitives:</strong> 2, 3, 4 column grids
            </li>
            <li>
              <strong>Layout helpers:</strong> flexCenter, flexBetween, stickyTop
            </li>
            <li>
              <strong>maxWidthText:</strong> keeps reading lines readable
            </li>
          </ul>
          This enforces breathing room and narrative clarity.
        </>
      ),
    },
    {
      title: "UI Components — small pieces that scale the experience",
      caption: "Tile, Tag, Badge, Buttons — rendered live",
      img: null,
      preview: <UIComponentPreview />,
      desc: (
        <>
          These primitives are intentionally minimal but meaningful. They are
          reused across the entire portfolio to keep structure and style
          consistent.
        </>
      ),
    },
    {
      title: "Sections — how the site tells a coherent story",
      caption: "Section, SectionIntro, PageLayout",
      img: placeholders.section,
      desc: (
        <>
          The site uses a small set of narrative primitives:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Section</strong> – spacing, anchors, and width rules
            </li>
            <li>
              <strong>SectionIntro</strong> – standard intro pattern
            </li>
            <li>
              <strong>PageLayout</strong> – global shell per page
            </li>
          </ul>
          New pages are built like chapters in the same book — with a shared
          rhythm.
        </>
      ),
    },
    {
      title: "Code Architecture — the system behind the system",
      caption: "Actual folder structure used in this portfolio",
      img: structureImg,
      desc: (
        <>
          My codebase is structured like a real, scalable product. Every folder
          has a single responsibility and mirrors how the design system is built:
          clear, layered, and intentionally minimal.
          <br />
          <br />
          Key principles:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>assets/</strong> – images, diagrams, visuals
            </li>
            <li>
              <strong>components/</strong> – reusable UI, sections, project modules
            </li>
            <li>
              <strong>components/ui</strong> – core design-system primitives
            </li>
            <li>
              <strong>data/</strong> – skills, SEO metadata, structured content
            </li>
            <li>
              <strong>hooks/</strong> – custom behaviour (active phase, theme, scroll)
            </li>
            <li>
              <strong>lib/</strong> – tokens, utilities, tag colors
            </li>
            <li>
              <strong>locales/</strong> – EN/DE translation files
            </li>
            <li>
              <strong>pages/</strong> – routing; each page composes sections
            </li>
          </ul>
          The diagram shows the actual structure from my repo — the backbone that
          keeps the design system maintainable.
        </>
      ),
    },
  ];

  return (
    <Section
      id="ux-portfolio-design-system"
      title="Design System — to keep my portfolio consistent and scalable"
      spacing="lg"
      borderTop
    >
      <SectionIntro>
        This portfolio didn’t just need styling — it needed structure.
        <br />
        I built a small but highly opinionated design system that reflects how I
        work: clarity, hierarchy, intentional decisions and long-term
        maintainability.
        <br />
        Below is the full system that powers every page.
      </SectionIntro>

      <div className={cn("flex flex-col space-y-40 md:space-y-52", spacing.mt12)}>
        {steps.map((step, i) => {
          const url = imgUrl(step.img ?? undefined);

          return (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-14 md:gap-20 w-full"
            >
              <FadeIn delay={i * 0.1}>
                <div
                  className={cn(
                    "w-full md:w-3/4 flex flex-col md:flex-row items-start text-left gap-10",
                    i % 2 === 1 && "md:flex-row-reverse"
                  )}
                >
                  <div className="w-full md:w-1/2 space-y-4">
                    <SectionHeading>{step.title}</SectionHeading>
                    <Body>{step.desc}</Body>
                  </div>

                  <div className="w-full md:w-1/2 flex items-center justify-center">
                    <p className="italic text-sm opacity-70">{step.caption}</p>
                  </div>
                </div>
              </FadeIn>

              {(step.preview || url) && (
                <FadeIn delay={0.15}>
                  <div className="w-full md:w-5/6 flex justify-center">
                    {step.preview ? (
                      step.preview
                    ) : (
                      <img
                        src={url}
                        alt={step.title}
                        loading="lazy"
                        className="w-full h-auto max-w-5xl rounded-2xl shadow-md object-contain"
                      />
                    )}
                  </div>
                </FadeIn>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

