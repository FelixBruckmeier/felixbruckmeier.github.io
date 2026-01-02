// src/components/sections/projects/InsuranceBroker/brokerProcessSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { SectionHeading, Body } from "@/components/ui/Tokens";
import FadeIn from "@/components/ui/FadeIn";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

// 📸 Images
import wallImg from "@/assets/images/projects/b2b2c/analyewall.png";
import artefact1Img from "@/assets/images/projects/b2b2c/artefakt1.png";
import artefact2Img from "@/assets/images/projects/b2b2c/artefakt2.png";
import journeyImg from "@/assets/images/projects/b2b2c/beratungsjourney.png";
import locationsImg from "@/assets/images/projects/b2b2c/locations.png";
import needsImg from "@/assets/images/projects/b2b2c/nutzungsanforderungen.png";
import dgImg from "@/assets/images/projects/b2b2c/dg.png";

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

export default function BrokerProcessSection() {
  const steps: Array<{
    title: string;
    caption: string;
    desc: React.ReactNode;
    img?: ImgLike;
  }> = [
    {
      title: "Contextual Interviews",
      caption: "Real advisory conversations in broker environments",
      desc: (
        <>
          We conducted <strong>contextual interviews</strong> with brokers in their daily
          environments, focusing on <strong>how tools, timings, and terms</strong> shape
          the advisory flow. Instead of abstract opinions, we captured the
          <strong> live constraints</strong> and the <strong>language</strong> brokers
          actually use to explain products and value.
        </>
      ),
      img: locationsImg,
    },
    {
      title: "Discussion Guide (before synthesis)",
      caption: "Structured prompts to probe needs, language, and constraints",
      desc: (
        <>
          We prepared a <strong>discussion guide</strong> to consistently explore
          <strong> needs</strong>, <strong>motivations</strong>, and <strong>pain points</strong>
          across interviews — ensuring comparable depth while leaving room for contextual probing.
        </>
      ),
      img: dgImg,
    },
    {
      title: "Synthesis (Grounded Theory)",
      caption: "From notes to themes, from themes to opportunity areas",
      desc: (
        <>
          We coded and clustered observations into <strong>recurring themes</strong>:
          context gaps, hand-off friction, data duplication, and unclear eligibility cues.
          The outcome was an <strong>opportunity map</strong> that ranked where clarity and
          confidence could be improved first.
        </>
      ),
      img: wallImg,
    },
    {
      title: "Journey Mapping",
      caption: "Advisor–customer journey with trust & timing markers",
      desc: (
        <>
          We mapped the <strong>end-to-end advisory journey</strong> — first contact,
          scoping, product exploration, decision, and closing — highlighting where
          <strong> trust is gained or lost</strong>. The map exposed
          <strong> decision bottlenecks</strong> and where context must be surfaced just-in-time.
        </>
      ),
      img: journeyImg,
    },
    {
      title: "Broker Needs & Constraints",
      caption: "What must be true for smooth advisory sessions",
      desc: (
        <>
          We distilled <strong>broker-critical needs</strong>: transparent prerequisites,
          <strong> one-source-of-truth inputs</strong>, and language aligned to how brokers
          explain risk and value. This became the baseline for scoping content and UI changes.
        </>
      ),
      img: needsImg,
    },
    {
      title: "Artifacts & Decision Support",
      caption: "Visual models that scale alignment",
      desc: (
        <>
          To move from research to action, we packaged outputs into
          <strong> actionable artifacts</strong>: problem statements, risk/clarity matrix,
          and decision guardrails. These keep design and business aligned in delivery.
        </>
      ),
      img: artefact1Img,
    },
    {
      title: "Prioritization & Next Steps",
      caption: "High-impact fixes first; scalable later",
      desc: (
        <>
          We prioritized opportunities by <strong>broker impact × implementation effort</strong>.
          Near-term: unify prerequisites & eligibility language; reduce duplicate inputs.
          Mid-term: embed <strong>contextual cues</strong> and <strong>explainers</strong> at decision points.
        </>
      ),
      img: artefact2Img,
    },
  ];

  return (
    <Section id="process" title="From field insight to actionable change" spacing="lg">
      <SectionIntro>
        A discovery stream designed to turn real advisory constraints into a shared,
        prioritized roadmap — so brokers can focus on people, not on fighting their tools.
      </SectionIntro>

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

              {url && (
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
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
