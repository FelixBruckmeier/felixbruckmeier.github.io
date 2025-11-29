import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import TextReveal from "@/components/ui/TextReveal";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/tokens";

import profileImg from "@/assets/images/home/pb.png";

export default function AboutSection() {
  return (
    <Section id="about" borderBottom>

      {/* Invisibles SEO-H1 */}
      <h1 className="sr-only">
        Felix Bruckmeier – UX Research Lead & ResearchOps Specialist
      </h1>

      <div
        className={cn(
          "flex flex-col md:grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
        )}
      >
        {/* === TEXT-BEREICH === */}
        <div className="text-block order-1 md:order-1 md:col-start-1 flex flex-col">

          {/* Headline */}
          <FadeIn delay={0.05}>
            <TextReveal
              variant="word"
              stagger={0.05}
              duration={0.6}
              delay={0.05}
              ease="easeInOut"
              as="h2"
              className="text-left text-foreground font-bold text-5xl mb-8"
            >
              Hello!
            </TextReveal>
          </FadeIn>

          {/* Mobile (kurz) */}
          <FadeIn delay={0.25}>
            <p className="text-left text-foreground font-semibold text-lg mb-4 md:hidden">
              I’m a UX Research Lead focused on understanding user needs and shaping evidence-based decisions. I support teams through ResearchOps and UX strategy.
            </p>
          </FadeIn>

          {/* Desktop (ausführlicher) */}
          <FadeIn delay={0.25}>
            <p className="hidden md:block text-left text-foreground font-semibold text-lg mb-4">
             I’m a UX Research Lead focused on understanding user needs and shaping evidence-based product decisions. I support teams with clear structures and scalable practices through ResearchOps and UX strategy.
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
        <div className="image-block order-2 md:order-2 md:col-start-2">
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

        {/* === CTA Mobile === */}
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

      {/* === ZITAT === */}
      <FadeIn delay={1.0}>
        <blockquote className="mt-12 text-center text-muted-foreground italic text-sm md:text-base">
          “UX Research is not for perfectionists. We strive for something better than
          perfection — something real.”
        </blockquote>
      </FadeIn>

    </Section>
  );
}
