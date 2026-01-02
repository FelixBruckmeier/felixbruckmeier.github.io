// src/components/sections/projects/kanostrategy/KanoProcessSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { SectionHeading, Body } from "@/components/ui/Tokens";
import FadeIn from "@/components/ui/FadeIn";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

// 🖼️ Bilder & GIFs
import shwsImg from "@/assets/images/projects/kanostrategy/shws.png";
import kanoTechniqueImg from "@/assets/images/projects/kanostrategy/kanotechnik.png";
import analysisImg from "@/assets/images/projects/kanostrategy/analysis.png";
import resultsImg from "@/assets/images/projects/kanostrategy/results.png";

// 🎞️ Alle Prototyping-GIFs
import gif1 from "@/assets/images/projects/kanostrategy/A56UN3iVPsZzo6kW.gif";
import gif2 from "@/assets/images/projects/kanostrategy/c0R243Jnkygm1KGf.gif";
import gif3 from "@/assets/images/projects/kanostrategy/DYD9Z208m0c0QhPr.gif";
import gif4 from "@/assets/images/projects/kanostrategy/eC5IqXMpwn1uyeWQ.gif";
import gif5 from "@/assets/images/projects/kanostrategy/fTFVmLhQ4e7tR6uR.gif";
import gif6 from "@/assets/images/projects/kanostrategy/kDBRa28BbXdwTi8F.gif";
import gif7 from "@/assets/images/projects/kanostrategy/NrwM2G5C5puInENi.gif";
import gif8 from "@/assets/images/projects/kanostrategy/PuqbnZ6OMY5NWXKZ.gif";
import gif9 from "@/assets/images/projects/kanostrategy/wAqf8jxzWy6I7hwZ.gif";
import gif10 from "@/assets/images/projects/kanostrategy/Xi7pzlYCdiztglmX.gif";

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

export default function KanoProcessSection() {
  const PROTOTYPE_GIFS: ImgLike[] = [
    gif1,
    gif2,
    gif3,
    gif4,
    gif5,
    gif6,
    gif7,
    gif8,
    gif9,
    gif10,
  ];

  return (
    <Section id="process" title="From Stakeholder Alignment to Kano-Backed Strategy" spacing="lg">
      <SectionIntro>
        A focused, evidence-based journey — from <strong>shared understanding</strong> to{" "}
        <strong>data-backed prioritization</strong>.
        <br />
        Each phase contributed to <strong>strategic clarity</strong> and a{" "}
        <strong>customer-centered roadmap</strong>.
      </SectionIntro>

      <div className={cn("flex flex-col space-y-40 md:space-y-52", spacing.mt12)}>
        {/* 1) Stakeholder Workshop */}
        <div className="flex flex-col items-center text-center gap-14 md:gap-20 w-full">
          <FadeIn>
            <div className="w-full md:w-3/4 flex flex-col md:flex-row items-start text-left gap-10">
              <div className="w-full md:w-1/2 space-y-4">
                <SectionHeading>Stakeholder Workshop</SectionHeading>
                <Body>
                  We kicked off with a <strong>collaborative workshop</strong> to collect ideas,
                  cluster similar solutions, and align on a shortlist of{" "}
                  <strong>~16 key services and features</strong> for evaluation.
                  <br />
                  The session fostered <strong>shared ownership</strong> of the challenge and
                  clarified <strong>success criteria</strong> across business, product, and UX.
                </Body>
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <p className="italic text-sm opacity-70">Co-creation for clarity & focus</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="w-full md:w-5/6 flex justify-center">
              <img
                src={imgUrl(shwsImg)}
                alt="Stakeholder workshop board"
                className="w-full h-auto max-w-5xl rounded-2xl shadow-md object-contain"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* 2) Prototyping & Design */}
        <div className="flex flex-col items-center text-center gap-14 md:gap-20 w-full">
          <FadeIn>
            <div className="w-full md:w-3/4 flex flex-col md:flex-row-reverse items-start text-left gap-10">
              <div className="w-full md:w-1/2 space-y-4">
                <SectionHeading>Prototyping & Design</SectionHeading>
                <Body>
                  To ensure respondents understood each idea equally, we created{" "}
                  <strong>lightweight animated prototypes</strong>.
                  <br />
                  Short <strong>GIFs visualized value and interaction</strong>, reducing ambiguity
                  and making evaluation faster and more reliable.
                </Body>
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <p className="italic text-sm opacity-70">Lightweight demos for crisp evaluation</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="w-full md:w-5/6">
              <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", spacing.gap6)}>
                {PROTOTYPE_GIFS.map((img, idx) => {
                  const url = imgUrl(img);
                  return (
                    <div key={idx} className="rounded-2xl overflow-hidden border border-border bg-muted/30">
                      {url && (
                        <img
                          src={url}
                          alt={`Prototype demo ${idx + 1}`}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 3) Kano-specific Survey */}
        <div className="flex flex-col items-center text-center gap-14 md:gap-20 w-full">
          <FadeIn>
            <div className="w-full md:w-3/4 flex flex-col md:flex-row items-start text-left gap-10">
              <div className="w-full md:w-1/2 space-y-4">
                <SectionHeading>Kano-specific Survey</SectionHeading>
                <Body>
                  Each feature was rated using the paired Kano questions — one for{" "}
                  <strong>presence</strong> and one for <strong>absence</strong>.
                  <br />
                  This revealed whether users saw it as <strong>Must-be (M)</strong>,{" "}
                  <strong>Performance (O)</strong>, <strong>Attractive (A)</strong>, or{" "}
                  <strong>Indifferent (I)</strong>.
                  <br />
                  The result: a <strong>quantitative hierarchy of satisfaction impact</strong> —
                  the foundation for strategic prioritization.
                </Body>
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <p className="italic text-sm opacity-70">Paired questions for clear categorization</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="w-full md:w-5/6 flex justify-center">
              <img
                src={imgUrl(kanoTechniqueImg)}
                alt="Kano survey technique and feature list example"
                className="w-full h-auto max-w-5xl rounded-2xl shadow-md object-contain"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* 4) Data Analysis & Scoring */}
        <div className="flex flex-col items-center text-center gap-14 md:gap-20 w-full">
          <FadeIn>
            <div className="w-full md:w-3/4 flex flex-col md:flex-row-reverse items-start text-left gap-10">
              <div className="w-full md:w-1/2 space-y-4">
                <SectionHeading>Data Analysis & Scoring</SectionHeading>
                <Body>
                  We applied both <strong>discrete</strong> and <strong>continuous</strong> scoring
                  to triangulate results.
                  <br />
                  This produced a <strong>more reliable categorization</strong> and highlighted
                  potential <strong>trade-offs between satisfaction and risk</strong>.
                </Body>
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <p className="italic text-sm opacity-70">Discrete × continuous for confidence</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="w-full md:w-5/6 flex justify-center">
              <img
                src={imgUrl(analysisImg)}
                alt="Comparative analysis of Kano scoring methods"
                className="w-full h-auto max-w-5xl rounded-2xl shadow-md object-contain"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* 5) Results */}
        <div className="flex flex-col items-center text-center gap-14 md:gap-20 w-full">
          <FadeIn>
            <div className="w-full md:w-3/4 flex flex-col md:flex-row items-start text-left gap-10">
              <div className="w-full md:w-1/2 space-y-4">
                <SectionHeading>Results</SectionHeading>
                <Body>
                  The final visualization positioned features across Kano quadrants, clarifying where
                  to invest first:
                  <br />
                  focus on <strong>Must-be</strong> essentials, drive growth with{" "}
                  <strong>Performance</strong> factors, and add <strong>Attractive</strong>{" "}
                  delighters to stand out.
                  <br />
                  <strong>Indifferent</strong> items were de-prioritized — a{" "}
                  <strong>clear, data-grounded strategy</strong>.
                </Body>
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <p className="italic text-sm opacity-70">Prioritize M &gt; O &gt; A &gt; I</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="w-full md:w-5/6 flex justify-center">
              <img
                src={imgUrl(resultsImg)}
                alt="Kano results with features in quadrants"
                className="w-full h-auto max-w-5xl rounded-2xl shadow-md object-contain"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
