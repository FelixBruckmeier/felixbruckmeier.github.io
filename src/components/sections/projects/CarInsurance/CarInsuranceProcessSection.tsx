// src/components/sections/projects/CarInsurance/CarInsuranceProcessSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { SectionHeading, Body, Subtitle } from "@/components/ui/Tokens";
import FadeIn from "@/components/ui/FadeIn";
import { Tile } from "@/components/ui";
import { spacing, layout } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { Eye, Zap, Compass, ShieldAlert, ThumbsUp } from "lucide-react";
import { useEffect } from "react";

// 📸 Image imports
import discoveryImg from "@/assets/images/projects/carinsurance/discovery.png";
import mappingImg from "@/assets/images/projects/carinsurance/mapping.jpg";
import journeyImg from "@/assets/images/projects/carinsurance/journey.png";
import wsImg from "@/assets/images/projects/carinsurance/ws.png";
import protoImg from "@/assets/images/projects/carinsurance/proto.png";
import testingImg from "@/assets/images/projects/carinsurance/testing.png";
import deliveryImg from "@/assets/images/projects/carinsurance/Untitled.png";

// ✅ Supports both: string URLs AND vite-imagetools outputs
type PictureLike = {
  sources?: Array<{
    srcset: string;
    type: string;
    sizes?: string;
  }>;
  img?: { src: string; width: number; height: number };
};

type ImgLike = string | PictureLike;

function toImgUrl(img?: ImgLike) {
  if (!img) return undefined;
  if (typeof img === "string") return img;
  return img.img?.src;
}

export default function CarInsuranceProcessSection() {
  const steps: Array<{
    title: string;
    caption: string;
    desc: React.ReactNode;
    img?: ImgLike;
  }> = [
    {
      title: "Discovery",
      caption: "Contextual interviews at ADAC branches",
      desc: (
        <>
          We conducted <strong>contextual interviews</strong> with advisors, simulating
          <strong> real customer consultations</strong> in a <strong>role-play setting</strong>.
          This method allowed us to understand how <strong>time pressure</strong>, <strong>unclear input fields</strong>,
          and <strong>system constraints</strong> influenced their decision-making and communication style.
          Rather than simply observing, we engaged in authentic advisory dialogues to uncover
          <strong> workflow interruptions</strong>, <strong>redundant inputs</strong>, and missing
          <strong> contextual guidance</strong> that caused hesitation and frustration. These insights became the
          foundation for understanding where <strong>friction originates</strong> and how <strong>interface clarity</strong>
          directly affects <strong>advisor confidence</strong> and <strong>customer trust</strong>.
        </>
      ),
      img: discoveryImg,
    },
    {
      title: "Define",
      caption: "Grounded Theory & Affinity Mapping",
      desc: (
        <>
          Using <b>Grounded Theory</b>, we synthesized hundreds of field notes into recurring <b>themes</b> and
          <b> behavioral patterns</b>. Through intensive <b>affinity mapping</b>, we grouped findings by frequency and impact,
          identifying clusters around <b>system usability</b>, <b>data entry complexity</b>, and <b>visual overload</b>.
          These patterns revealed deep structural issues: inconsistent terminology, lack of validation, and inefficient navigation.
          The resulting framework allowed us to create <b>clear problem statements</b>, prioritize <b>design opportunities</b>,
          and focus on high-impact areas that would most improve <b>advisor efficiency</b> and <b>user satisfaction</b>.
        </>
      ),
      img: mappingImg,
    },
    {
      title: "Journey Mapping",
      caption: "Understanding the counseling flow",
      desc: (
        <>
          By creating a detailed <b>journey map</b>, we visualized the full counseling process from both the advisor and customer
          perspectives. This map exposed <b>emotional highs</b>, <b>decision bottlenecks</b>, and moments of <b>disengagement</b>.
          It highlighted where <b>trust was built or lost</b>, and where <b>information density</b> overwhelmed the user.
          Through this visualization, we identified <b>key UX leverage points</b> — phases where design interventions could
          most effectively enhance clarity and flow. The journey map became a <b>shared alignment tool</b>, uniting design and
          business stakeholders around common priorities.
        </>
      ),
      img: journeyImg,
    },
    {
      title: "Stakeholder Workshop",
      caption: "Building shared understanding",
      desc: (
        <>
          We organized a <b>collaborative workshop</b> with stakeholders from <b>business, product, and IT</b>, creating an open space
          to review user insights and discuss their strategic relevance. By translating research data into <b>visual pain-point maps</b>,
          we helped decision-makers connect user struggles to measurable outcomes. The workshop produced <b>consensus on priorities</b>,
          established <b>shared ownership</b> of the problems, and laid the groundwork for <b>design principles</b> rooted in both
          user empathy and business goals. This alignment ensured that the next design phase started with <b>clarity and momentum</b>.
        </>
      ),
      img: wsImg,
    },
    {
      title: "Design Principles",
      caption: "Guiding clarity and confidence",
      desc: (
        <>
          From synthesis, we derived five <b>Design Principles</b> that guided every subsequent iteration.
        </>
      ),
    },
    {
      title: "Prototype",
      caption: "Bringing principles to life",
      desc: (
        <>
          Guided by the principles, we built an <b>interactive prototype</b> focusing on <b>adaptive field logic</b>,
          <b> contextual help</b>, and a <b>modern visual hierarchy</b>. Each design decision aimed to reduce
          <b> cognitive load</b> while maintaining task context. Real advisors participated in early validation sessions,
          helping us refine <b>microinteractions</b>, <b>error handling</b>, and <b>visual cues</b>. The prototype evolved
          through several quick iterations, resulting in an interface that was both <b>efficient</b> and
          <b> intuitively learnable</b> for first-time users.
        </>
      ),
      img: protoImg,
    },
    {
      title: "User Testing",
      caption: "Validating flow & confidence",
      desc: (
        <>
          Using the <b>RITE method</b>, we conducted rapid usability tests with live advisors to validate flow and comprehension.
          Each iteration targeted specific <b>interaction bottlenecks</b>, measuring changes in <b>task clarity</b>,
          <b> completion speed</b>, and <b>error recovery</b>. By combining <b>qualitative feedback</b> with performance metrics,
          we iteratively optimized navigation, visual hierarchy, and feedback timing. Over several rounds, user <b>confidence</b>
          and <b>satisfaction</b> increased significantly, proving the value of <b>continuous testing and iteration</b>.
        </>
      ),
      img: testingImg,
    },
    {
      title: "Delivery",
      caption: "From prototype to production",
      desc: (
        <>
          The final step translated the validated prototype into a <b>scalable UI system</b> and <b>pattern library</b>, ensuring
          <b> consistency</b> and <b>accessibility</b> across all advisor tools. Close collaboration with developers guaranteed
          <b> pixel-level fidelity</b> and adherence to <b>UX standards</b>. By embedding the new components into the design system,
          the project not only improved advisor experience but also provided <b>long-term efficiency</b> for ongoing development
          and maintenance — creating a solid foundation for <b>future enhancements</b>.
        </>
      ),
      img: deliveryImg,
    },
  ];

  // ✅ Debug: shows whether imports are strings or imagetools objects
  useEffect(() => {
    console.log("CarInsurance images:", {
      discoveryImg,
      mappingImg,
      journeyImg,
      wsImg,
      protoImg,
      testingImg,
      deliveryImg,
    });
    console.log("First step img raw:", steps[0]?.img);
    console.log("First step img url:", toImgUrl(steps[0]?.img));
  }, []);

  const PRINCIPLES = [
    { title: "Design for clarity", desc: "Reduce ambiguity to build trust. Make inputs, outcomes, and next steps unmistakably clear.", icon: Eye },
    { title: "Design for momentum", desc: "Streamline tasks without sacrificing understanding. Keep users moving with less cognitive load.", icon: Zap },
    { title: "Guide with structure", desc: "Expose progress, context, and what’s next. Orientation should be effortless at any point.", icon: Compass },
    { title: "Prevent accidental drop-offs", desc: "Make exits intentional and recovery obvious. Confirm risky actions and support graceful undo.", icon: ShieldAlert },
    { title: "Empower confidence", desc: "Use plain language, timely feedback, and validation so advisors feel assured and in control.", icon: ThumbsUp },
  ];

  return (
    <Section id="process" title="From Field Insights to Rollout" spacing="lg">
      <SectionIntro>
        A Design Thinking journey — from observation to measurable impact.
        Each phase provided actionable insights that shaped the next iteration.
      </SectionIntro>

      <div className={cn("flex flex-col space-y-40 md:space-y-52", spacing.mt12)}>
        {steps.map((step, i) => {
          const imgUrl = toImgUrl(step.img);

          return (
            <div key={i} className={cn("flex flex-col items-center text-center gap-14 md:gap-20")}>
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

              {step.title === "Design Principles" ? (
                <FadeIn delay={0.2}>
                  <div className={cn(layout.gridCols3, spacing.gap6, "w-full md:w-5/6")}>
                    {PRINCIPLES.map((p, j) => {
                      const Icon = p.icon;
                      return (
                        <Tile key={j} variant="static">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                            <Subtitle>{p.title}</Subtitle>
                          </div>
                          <Body className="text-muted-foreground">{p.desc}</Body>
                        </Tile>
                      );
                    })}
                  </div>
                </FadeIn>
              ) : (
                imgUrl && (
                  <FadeIn delay={0.2}>
                    <div className="w-full md:w-5/6 flex justify-center">
                      <img
                        src={imgUrl}
                        alt={step.title}
                        className="w-full h-auto max-w-5xl rounded-2xl shadow-md object-contain"
                        loading="lazy"
                      />
                    </div>
                  </FadeIn>
                )
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
