// src/components/sections/expertise/strategicuxresearch/StrategicUXFrameworkSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Subtitle, Body } from "@/components/ui/Tokens";
import Button from "@/components/ui/Button";

import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

// ✅ Illustrationen
import clarity from "@/assets/images/expertise/strategicuxresearch/1clarity.png";
import questions from "@/assets/images/expertise/strategicuxresearch/2questions.png";
import focus from "@/assets/images/expertise/strategicuxresearch/3focus.png";
import methods from "@/assets/images/expertise/strategicuxresearch/4methods.png";
import analysis from "@/assets/images/expertise/strategicuxresearch/5analysis.png";
import integration from "@/assets/images/expertise/strategicuxresearch/6present.png";

/* =========================================================
   Image helper – supports Vite + vite-imagetools
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

const story: Array<{
  title: string;
  subtitle: string;
  text: string;
  image: ImgLike;
  quote: string;
}> = [
  {
    title: "Clarity – Defining Purpose and Alignment",
    subtitle: "Understanding why the research exists.",
    text: "I start by clarifying why the research is needed and what decisions it should inform. This creates shared direction and prevents research from drifting into interesting but irrelevant areas.",
    image: clarity,
    quote: "“Without clarity, research lacks focus and impact.”",
  },
  {
    title: "Questions – Turning Uncertainty into Focus",
    subtitle: "From assumptions to direction.",
    text: "I translate challenges and assumptions into clear research questions. This step turns uncertainty into structure and ensures that every data point collected supports a real decision.",
    image: questions,
    quote: "“If you don’t know your questions, your answers won’t matter.”",
  },
  {
    title: "Refinement – Ensuring Relevance and Precision",
    subtitle: "Focusing on what truly matters.",
    text: "I refine and prioritize questions, define hypotheses, and decide which data is most valuable. Skipping this step often leads to research that is too broad or too shallow to produce actionable insights.",
    image: focus,
    quote: "“Focused research drives meaningful outcomes.”",
  },
  {
    title: "Methods – Choosing the Right Tools",
    subtitle: "Connecting questions to reality.",
    text: "I select the most suitable methods — from interviews to usability tests or analytics — based on the refined questions. Using the wrong method can lead to misleading results and reduce trust in research.",
    image: methods,
    quote: "“The right method turns curiosity into credible evidence.”",
  },
  {
    title: "Analysis & Synthesis – Turning Data into Insight",
    subtitle: "Making sense of what we’ve learned.",
    text: "I analyze and synthesize findings to uncover meaningful patterns and connections. Without synthesis, data stays fragmented and fails to inform design or strategy.",
    image: analysis,
    quote: "“Insight emerges when data meets interpretation.”",
  },
  {
    title: "Integration – Making Research Actionable",
    subtitle: "Ensuring impact beyond the report.",
    text: "I integrate findings into product decisions through collaboration, workshops, and reports. Research only creates value when it influences outcomes — otherwise, even great insights fade away.",
    image: integration,
    quote: "“Research has value only when it changes what we do.”",
  },
];

export default function StrategicUXFrameworkSection() {
  const [index, setIndex] = useState(0);
  const scene = story[index];

  const next = () => setIndex((i) => (i < story.length - 1 ? i + 1 : 0));
  const prev = () => setIndex((i) => (i > 0 ? i - 1 : story.length - 1));

  const sceneImgUrl = imgUrl(scene.image);

  return (
    <Section id="framework" title="My Research Planning Framework — Creating Clarity" spacing="lg">
      <SectionIntro>
        Solid UX Research starts with the right questions. My research planning framework, inspired by Erika Hall,
        helps teams move from assumptions to focus — defining what decisions need evidence and how to generate it.
        This ensures every study directly contributes to strategic intent.
      </SectionIntro>

      <div className={cn("flex flex-col items-center w-full", spacing.mtLg)}>
        {/* ✅ NO “tile/card” look: no shadow, no rounded wrapper */}
        <div className="w-full md:w-5/6 flex flex-col md:flex-row md:items-center gap-10 text-left">
          {/* IMAGE */}
          <div className="relative flex-1 w-full">
            <AnimatePresence mode="wait">
              {sceneImgUrl && (
                <motion.img
                  key={sceneImgUrl}
                  src={sceneImgUrl}
                  alt={scene.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-auto max-h-[65vh] object-contain rounded-2xl no-dark-filter"
                />
              )}
            </AnimatePresence>

            {/* Buttons unter dem Bild auf Mobile */}
            <div className="flex justify-center gap-4 mt-4 md:hidden">
              <Button variant="secondary" onClick={prev}>
                ← Previous
              </Button>
              <Button variant="primary" onClick={next}>
                Next →
              </Button>
            </div>
          </div>

          {/* TEXT */}
          <motion.div
            key={scene.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <Subtitle>{`${index + 1}. ${scene.title}`}</Subtitle>
            <Body className="italic text-[--color-muted] mb-2">{scene.subtitle}</Body>
            <Body className="max-w-prose mb-4">{scene.text}</Body>
            <Body className="italic text-[--color-foreground]">{scene.quote}</Body>
          </motion.div>
        </div>

        {/* Buttons unter Text für Desktop */}
        <div className="hidden md:flex justify-center gap-6 mt-10">
          <Button variant="secondary" onClick={prev}>
            ← Previous
          </Button>
          <Button variant="primary" onClick={next}>
            Next →
          </Button>
        </div>
      </div>
    </Section>
  );
}
