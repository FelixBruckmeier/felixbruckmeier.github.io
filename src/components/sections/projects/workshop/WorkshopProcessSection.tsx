// src/components/sections/projects/workshop/WorkshopProcessSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { SectionHeading, Body } from "@/components/ui/Tokens";
import FadeIn from "@/components/ui/FadeIn";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

// 📸 Explicit image imports
import img1_welcome from "@/assets/images/projects/workshop/1welcome.png";
import img2_agenda from "@/assets/images/projects/workshop/2agenda.png";

import img3_1 from "@/assets/images/projects/workshop/3_1agendaproblem.png";
import img3_2 from "@/assets/images/projects/workshop/3_2problemstatement.png";
import img3_3 from "@/assets/images/projects/workshop/3_3problemgroupwork.png";

import img4_1 from "@/assets/images/projects/workshop/4_1goaldefinitionagenda.png";
import img4_2 from "@/assets/images/projects/workshop/4_2goaldefgroupwork.png";
import img4_3 from "@/assets/images/projects/workshop/4_3goaldefgroupwork2.png";

import img5_1 from "@/assets/images/projects/workshop/5_1goalprioagenda.png";
import img5_2 from "@/assets/images/projects/workshop/5_2goalpriogroupwork.png";
import img5_3 from "@/assets/images/projects/workshop/5_3goalgripboard.png";
import img5_break from "@/assets/images/projects/workshop/5_break.png";

import img6_1 from "@/assets/images/projects/workshop/6_1ideateagenda.png";
import img6_2 from "@/assets/images/projects/workshop/6_2ideagroupwork.png";
import img6_3 from "@/assets/images/projects/workshop/6_3ideagroupwork2.png";

import img7_1 from "@/assets/images/projects/workshop/7_1selectsolutionagenda.png";
import img7_2 from "@/assets/images/projects/workshop/7_2selecsolutionboard.png";
import img7_3 from "@/assets/images/projects/workshop/7_3selectsolutiongroup.png";

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

export default function WorkshopProcessSection() {
  const steps: Array<{
    title: string;
    caption?: string;
    desc: React.ReactNode;
    imgs?: ImgLike[];
    reverse?: boolean;
  }> = [
    {
      title: "Welcome & Overview",
      caption: "Setting the tone and purpose",
      desc: (
        <>
          We began with a short <strong>welcome</strong> and a clear narrative of{" "}
          <strong>why we were there</strong> — to take collective ownership of{" "}
          <strong>UX Research Maturity</strong> and shape its evolution together. I
          introduced the <strong>structure of the day</strong>, illustrating how
          each phase would build on the previous one — from{" "}
          <strong>understanding challenges</strong> to developing,{" "}
          <strong>prioritizing</strong>, and selecting actionable solutions.
        </>
      ),
      imgs: [img1_welcome],
      reverse: false,
    },
    {
      title: "Workshop Agenda",
      caption: "Establishing clarity and alignment",
      desc: (
        <>
          Before diving into the exercises, we reviewed the <strong>agenda</strong>.
          The goal was <strong>transparency and alignment</strong> — everyone should
          know exactly where we were heading.{" "}
          <strong>
            Problem → Goals → Prioritization → Ideation → Solution Selection
          </strong>
          : a simple but powerful flow that guided our collaboration. We clarified{" "}
          <strong>expectations, timeboxes, and roles</strong> to make the day feel
          structured yet creative.
        </>
      ),
      imgs: [img2_agenda],
      reverse: true,
    },
    {
      title: "Problem Understanding",
      caption: "Exploring the current pain points",
      desc: (
        <>
          The first phase focused on creating a <strong>shared understanding</strong>{" "}
          of the current <strong>problems</strong> surfaced during the assessment.
          Through <strong>open discussion</strong> and visual mapping, we sharpened{" "}
          <strong>problem statements</strong>, uncovering <strong>root causes</strong>{" "}
          and hidden dependencies. Seeing everyone nod in recognition — realizing
          they had been facing the same challenges — was a powerful moment of{" "}
          <strong>alignment and empathy</strong>.
        </>
      ),
      imgs: [img3_1, img3_2, img3_3],
      reverse: false,
    },
    {
      title: "Goal Definition",
      caption: "Turning insights into direction",
      desc: (
        <>
          Once we had a clear picture of the challenges, we shifted the energy
          toward possibility. Each group translated their{" "}
          <strong>pain points into goals</strong> and{" "}
          <strong>desired outcomes</strong> — what success would look like if these
          issues were resolved. This phase turned{" "}
          <strong>frustration into constructive energy</strong>, transforming
          barriers into opportunity statements.
        </>
      ),
      imgs: [img4_1, img4_2, img4_3],
      reverse: true,
    },
    {
      title: "Goal Prioritization",
      caption: "Focusing on what matters most",
      desc: (
        <>
          Not every goal could be tackled at once. Together, we prioritized them
          using a simple <strong>Impact × Feasibility matrix</strong>. The
          discussion revealed shared priorities — moments where{" "}
          <strong>individual perspectives converged</strong> into a collective
          sense of “this is where we start.” These decisions gave the upcoming{" "}
          <strong>ideation phase a sharp and motivating focus</strong>.
        </>
      ),
      imgs: [img5_1, img5_2, img5_3, img5_break],
      reverse: false,
    },
    {
      title: "Ideation",
      caption: "Generating ideas together",
      desc: (
        <>
          With focus established, the energy shifted again — this time toward{" "}
          <strong>creativity and collaboration</strong>. In small groups,
          participants brainstormed solutions for the top-priority goals,
          sketching, debating, and building on each other’s ideas. The walls
          quickly filled with colorful notes, ranging from <strong>quick wins</strong>{" "}
          to long-term structural improvements. The excitement made it clear:{" "}
          <strong>the team was co-creating its own future</strong>.
        </>
      ),
      imgs: [img6_1, img6_2, img6_3],
      reverse: true,
    },
    {
      title: "Solution Selection",
      caption: "From many ideas to actionable focus",
      desc: (
        <>
          In the final phase, teams <strong>clustered and evaluated</strong> their
          ideas based on <strong>value</strong> and <strong>feasibility</strong>.
          Together, we refined them into a concise list of{" "}
          <strong>prioritized initiatives</strong> — each with clear{" "}
          <strong>ownership and next steps</strong>. What began as abstract
          discussions ended as a <strong>concrete roadmap for progress</strong>.
          The session closed with visible pride — everyone could see how their
          input had shaped the plan.
        </>
      ),
      imgs: [img7_1, img7_2, img7_3],
      reverse: false,
    },
  ];

  return (
    <Section id="workshop-process" title="From Problems to Prioritized Solutions" spacing="lg">
      <SectionIntro>
        The workshop followed a <strong>design-thinking rhythm</strong> — moving
        from <strong>understanding to creation</strong>. Each phase built on the
        previous one, turning <strong>research insights into collaboration</strong>,
        and collaboration into <strong>actionable outcomes</strong>. By the end,
        the team had not only a set of <strong>solutions</strong>, but also a
        stronger sense of <strong>shared ownership and momentum</strong>.
      </SectionIntro>

      <div className={cn("flex flex-col space-y-40 md:space-y-52", spacing.mt12)}>
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-14 md:gap-20 w-full">
            <FadeIn delay={i * 0.08}>
              <div
                className={cn(
                  "w-full md:w-3/4 flex flex-col md:flex-row items-start text-left gap-10",
                  step.reverse && "md:flex-row-reverse"
                )}
              >
                <div className="w-full md:w-1/2 space-y-4">
                  <SectionHeading>{step.title}</SectionHeading>
                  <Body>{step.desc}</Body>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  {step.caption && <p className="italic text-sm opacity-70">{step.caption}</p>}
                </div>
              </div>
            </FadeIn>

            {step.imgs?.length ? (
              <FadeIn delay={0.15}>
                <div className="w-full md:w-5/6">
                  <div className={cn("grid grid-cols-1 sm:grid-cols-2", spacing.gap6)}>
                    {step.imgs.map((img, idx) => {
                      const url = imgUrl(img);
                      return (
                        <div key={idx} className="w-full">
                          {url && (
                            <img
                              src={url}
                              alt={`${step.title} ${idx + 1}`}
                              className="w-full h-auto rounded-2xl shadow-md object-contain border border-border"
                              loading="lazy"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
