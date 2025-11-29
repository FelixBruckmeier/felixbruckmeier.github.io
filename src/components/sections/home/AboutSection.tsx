import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/tokens";
import { motion } from "framer-motion";

import profileImg from "@/assets/images/home/pb.png";

export default function AboutSection() {
  return (
    <Section id="about" borderBottom>

      {/* Invisible SEO-H1 */}
      <h1 className="sr-only">
        Felix Bruckmeier – UX Research Lead & ResearchOps Specialist
      </h1>

      <div
        className={cn(
          "flex flex-col md:grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
        )}
      >
        {/* === TEXT-BEREICH === */}
        <div className="text-block order-1 md:col-start-1 flex flex-col">

          {/* ⭐ Modern Smooth Line Reveal Headline ⭐ */}
          <FadeIn delay={0.05}>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
                }
              }}
              className="text-left text-foreground font-bold text-5xl mb-8 relative overflow-hidden"
            >
              <span className="relative inline-block">
                Hello!

                {/* Smooth mask wipe */}
                <motion.span
                  initial={{ x: "0%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="absolute left-0 top-0 bottom-0 w-full bg-background"
                />
              </span>
            </motion.h2>
          </FadeIn>

          {/* Mobile (kurz) */}
          <FadeIn delay={0.25}>
            <p className="text-left text-foreground font-semibold text-lg mb-4 md:hidden">
              I’m a UX Research Lead focused on understanding user needs and shaping
              evidence-based decisions. I support teams through ResearchOps and UX strategy.
            </p>
          </FadeIn>

          {/* Desktop (ausführlicher) */}
          <FadeIn delay={0.25}>
            <p className="hidden md:block text-left text-foreground font-semibold text-lg mb-4">
              I’m a UX Research Lead focused on understanding user needs and shaping
              evidence-based product decisions. I support teams with clear structures
              and scalable practices through ResearchOps and UX strategy.
            </p>
          </FadeIn>

          {/* CTA Desktop */}
          <div className="hidden md:flex flex-wrap gap-4 w-full mt-8">
            <FadeIn delay={0.65}>
              <Button asChild variant="secondary" size="lg">
                <a href="#projects">See Projects ↓</a>
              </Button>
            </FadeIn>

            <FadeIn delay={0.75}>
              <Button asChild variant="secondary" size="lg">
                <a href="#expertise">Explore Expertise ↓</a>
              </Button>
            </FadeIn>

            <FadeIn delay={0.85}>
              <Button asChild variant="secondary" size="lg">
                <a href="/cv">View CV →</a>
              </Button>
            </FadeIn>
          </div>
        </div>

        {/* === BILD-BEREICH === */}
        <div className="image-block order-2 md:col-start-2">
          <FadeIn delay={0.2}>
            <img
              src={profileImg}
              alt="Portrait of Felix Bruckmeier – UX Research Lead"
              loading="lazy"
              className={cn(
                "rounded-2xl shadow-lg mx-auto w-[70%] md:w-[80%] object-cover object-[center_20%] aspect-[4/5]",
                colors.border
              )}
            />
          </FadeIn>
        </div>

        {/* CTA Mobile */}
        <div className="order-3 md:hidden flex flex-wrap gap-4 mt-8 w-full">
          <FadeIn delay={0.65}>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href="#projects">See Projects ↓</a>
            </Button>
          </FadeIn>

          <FadeIn delay={0.75}>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href="#expertise">Explore Expertise ↓</a>
            </Button>
          </FadeIn>

          <FadeIn delay={0.85}>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href="/cv">View CV →</a>
            </Button>
          </FadeIn>
        </div>
      </div>

      {/* Zitat */}
      <FadeIn delay={1.0}>
        <blockquote className="mt-12 text-center text-muted-foreground italic text-sm md:text-base">
          “UX Research is not for perfectionists. We strive for something better than
          perfection — something real.”
        </blockquote>
      </FadeIn>

    </Section>
  );
}
