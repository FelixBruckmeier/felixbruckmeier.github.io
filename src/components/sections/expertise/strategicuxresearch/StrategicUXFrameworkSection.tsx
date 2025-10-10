import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Subtitle, Body } from "@/components/ui/Tokens";
import Button from "@/components/ui/Button";
import { spacing, layout, radii, shadows } from "@/lib/tokens";
import { cn } from "@/lib/utils";

// Illustrationen
import clarity from "@/assets/images/expertise/strategicuxresearch/1clarity.png";
import questions from "@/assets/images/expertise/strategicuxresearch/2questions.png";
import focus from "@/assets/images/expertise/strategicuxresearch/3focus.png";
import methods from "@/assets/images/expertise/strategicuxresearch/4methods.png";
import analysis from "@/assets/images/expertise/strategicuxresearch/5analysis.png";
import integration from "@/assets/images/expertise/strategicuxresearch/6present.png";

const story = [
  {
    title: "Clarity – Finding the Why",
    subtitle: "Before diving into data, the team faces uncertainty.",
    text: "A cluttered meeting room. Sticky notes everywhere. People talk past each other. In the middle, the researcher pauses and asks the key question: ‘What problem are we really trying to solve?’",
    image: clarity,
    quote: "“Before we research, we must understand why we research.”",
  },
  {
    title: "Questions – Opening the Door",
    subtitle: "From confusion to curiosity.",
    text: "The team covers a wall with questions: Why aren’t customers returning? What confuses them? Which decision will this research support? The chaos starts to take shape.",
    image: questions,
    quote: "“The right questions open the door to understanding.”",
  },
  {
    title: "Refinement – Sharpening Focus",
    subtitle: "The turning point toward clarity.",
    text: "Not every question deserves an answer now. The team decides what really matters. They strike through noise, highlight the essential, and define a single, focused hypothesis.",
    image: focus,
    quote: "“Focus creates clarity — prioritize what truly matters.”",
  },
  {
    title: "Methods – The Fieldwork Begins",
    subtitle: "Theory meets the real world.",
    text: "Interviews, shadowing, quick tests. The researcher steps out of the office, listens, observes, and learns. Small insights reveal big truths.",
    image: methods,
    quote: "“Methods are our tools to uncover meaningful insights.”",
  },
  {
    title: "Analysis & Synthesis – Connecting the Dots",
    subtitle: "Making sense of it all.",
    text: "Walls fill with quotes, observations, and patterns. Suddenly, the team sees the story behind the data — the ‘why’ behind behavior. A collective ‘aha!’ moment.",
    image: analysis,
    quote: "“Data becomes insight when we connect the dots.”",
  },
  {
    title: "Integration – Making It Matter",
    subtitle: "Turning insights into action.",
    text: "The research findings guide new design decisions. Stakeholders nod, prototypes improve, and users smile in the next test. On the wall: a new note — ‘What do we need to learn next?’",
    image: integration,
    quote: "“Research never ends — it transforms into new thinking.”",
  },
];

export default function StrategicUXFrameworkSection() {
  const [index, setIndex] = useState(0);
  const scene = story[index];

  const next = () => setIndex((i) => (i < story.length - 1 ? i + 1 : 0));
  const prev = () => setIndex((i) => (i > 0 ? i - 1 : story.length - 1));

  return (
    <Section id="framework" title="My Research Planning Framework" spacing="lg" fullWidth>
      <SectionIntro>
        Based on Erika Hall’s principles, this six-phase framework comes to life through
        the story of a researcher navigating uncertainty, curiosity, and clarity — showing
        how design research connects insight to real impact.
      </SectionIntro>

      <div className={cn("flex flex-col items-center w-full", spacing.mtLg)}>
        <div
          className={cn(
            "relative w-full flex flex-col md:flex-row md:items-center gap-8",
            layout.container,
            radii.xxl,
            shadows.lg,
            "pb-12 md:pb-0" // mehr Platz unten auf Mobile
          )}
        >
          {/* IMAGE */}
          <div className="relative flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={scene.image}
                src={scene.image}
                alt={scene.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
                className="w-full h-auto max-h-[65vh] object-contain rounded-2xl"
              />
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
            className={cn("flex-1 text-left md:pl-8")}
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
