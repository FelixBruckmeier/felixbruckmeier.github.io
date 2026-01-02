// src/components/sections/projects/ZooplusPricing/PricingUseCaseSection.tsx
import { Section } from "@/components/ui";
import { SectionHeading, Body } from "@/components/ui/Tokens";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { spacing } from "@/lib/tokens";

// 📊 Visual Component Import
import VisAWI from "@/assets/visuals/projects/ZooplusPricing/VisAWI";

// 📸 Image Imports
import researchPlanImg from "@/assets/images/projects/pricingtesting/Research Plan.png";
import prototypeImg from "@/assets/images/projects/pricingtesting/protoype.png";
import journeyImg from "@/assets/images/projects/pricingtesting/journey.png";
import findingsImg from "@/assets/images/projects/pricingtesting/findings.png";

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

type Step = {
  title: string;
  caption: string;
  desc: React.ReactNode;
  img?: ImgLike;
  component?: React.ReactNode;
};

export function PricingUseCaseSection() {
  const steps: Step[] = [
    {
      title: "Context & Objective",
      caption: "Testing the redesigned pricing components across pages",
      desc: (
        <>
          As part of the <strong>homepage redesign</strong> and visual rebranding, the
          pricing components — such as{" "}
          <strong>discounts, color cues, and strikethrough prices</strong> — needed to
          be re-evaluated.
          <br />
          The goal was not only aesthetic consistency, but also a measurable{" "}
          <strong>improvement in user comprehension and trust</strong>. As{" "}
          <strong>UX Research Lead</strong>, I designed and facilitated this usability
          testing to ensure that design and UX performance aligned across product
          contexts.
        </>
      ),
      img: researchPlanImg,
    },
    {
      title: "Prototype & Testing Approach",
      caption: "Remote, semi-structured usability sessions",
      desc: (
        <>
          We tested <strong>several design variants</strong> of the pricing component
          in a <strong>remote moderated usability setting</strong>.
          <br />
          <strong>20 participants</strong> — all pet owners with online shopping
          experience — were asked to perform key purchase-related tasks across{" "}
          <strong>Homepage</strong>, <strong>PLP</strong>, <strong>PDP</strong>, and{" "}
          <strong>Cart</strong>. The session structure combined{" "}
          <strong>task performance</strong> and <strong>open reflection</strong> to
          surface both usability and perception issues.
        </>
      ),
      img: prototypeImg,
    },
    {
      title: "Key Findings",
      caption: "From visual trust to conversion clarity",
      desc: (
        <>
          The tests revealed that <strong>color hierarchy</strong> and{" "}
          <strong>discount visibility</strong> were central to trust. Users
          understood the pricing logic faster when{" "}
          <strong>crossed-out prices</strong> and <strong>percentage savings</strong>{" "}
          were visually grouped.
          <br />
          Ambiguities arose when discount badges competed with product imagery.
          Based on these insights, we redefined the pricing logic display to be{" "}
          <strong>consistent, legible, and emotionally confident</strong> across
          contexts.
        </>
      ),
      img: findingsImg,
    },
    {
      title: "User Journey (Pricing Display Perception)",
      caption: "How users perceived prices along their journey",
      desc: (
        <>
          The <strong>user journey</strong> showed how pricing perception evolved
          across touchpoints:
          <br />
          <strong>Homepage:</strong> Price as brand signal and entry point.
          <br />
          <strong>PLP:</strong> Price as comparison and decision filter.
          <br />
          <strong>PDP:</strong> Price as value judgment balancing quality, size, and
          discounts.
          <br />
          <strong>Cart:</strong> Price as confirmation and trust moment.
          <br />
          While initial impressions were positive,{" "}
          <strong>unclear price components</strong> (e.g., “subscription vs.
          promotion,” “per-unit vs. total”) caused hesitation —{" "}
          <strong>clarity and trust returned in the cart.</strong>
        </>
      ),
      img: journeyImg,
    },
    {
      title: "Quantitative Follow-Up",
      caption: "Assessing aesthetic appeal and trustworthiness (VisAWI)",
      desc: (
        <>
          To complement qualitative findings, we used the standardized{" "}
          <strong>VisAWI questionnaire</strong> to measure users’ perception of{" "}
          <strong>visual aesthetics, consistency, and clarity</strong>. This provided
          a benchmark for visual design quality — helping ensure that functional
          clarity aligned with brand expression.
        </>
      ),
      component: <VisAWI />,
    },
  ];

  return (
    <Section
      id="use-case"
      title="From Redesign Hypothesis to Validated Pricing Experience"
      spacing="lg"
    >
      <div className={cn("flex flex-col space-y-40 md:space-y-52", spacing.mt12)}>
        {steps.map((step, i) => {
          const url = imgUrl(step.img);

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

              {step.component ? (
                <FadeIn delay={0.2}>
                  <div className="w-full md:w-5/6 flex justify-center">
                    {step.component}
                  </div>
                </FadeIn>
              ) : url ? (
                <FadeIn delay={0.2}>
                  <div className="w-full md:w-5/6 flex justify-center">
                    <img
                      src={url}
                      alt={step.title}
                      className="w-full h-auto max-w-5xl rounded-2xl shadow-md object-contain"
                      loading="lazy"
                    />
                  </div>
                </FadeIn>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
