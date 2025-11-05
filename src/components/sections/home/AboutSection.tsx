// src/components/sections/home/AboutSection.tsx
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import TextReveal from "@/components/ui/TextReveal";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/tokens";
import profileImg from "@/assets/profile-felix.png";

export default function AboutSection() {
  return (
    <Section id="about" borderBottom>
      <div
        className={cn(
          "flex flex-col md:grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
        )}
      >
        {/* === Text-Bereich === */}
        <div className="text-block order-1 md:order-1 md:col-start-1 flex flex-col">
          <FadeIn delay={0.1}>
            <TextReveal
              variant="word"
              stagger={0.04}
              duration={0.45}
              ease="easeOut"
              className="text-left text-foreground font-bold text-5xl mb-8"
            >
              Hello!
            </TextReveal>
          </FadeIn>

          <FadeIn delay={0.25}>
            <TextReveal
              variant="word"
              stagger={0.04}
              duration={0.4}
              ease="easeOut"
              className="text-left text-foreground font-semibold text-lg mb-4"
            >
              I’m a UX Research Lead focused on grounding decisions in evidence.
            </TextReveal>
          </FadeIn>

          <FadeIn delay={0.35}>
            <TextReveal
              variant="word"
              stagger={0.04}
              duration={0.45}
              ease="easeOut"
              className="text-left text-muted-foreground leading-relaxed max-w-prose"
            >
              I support teams in shaping meaningful strategies.
              Most of my work happens in the space between what people need and what businesses can deliver — a space that’s often messy and full of trade-offs. I navigate ambiguity, conflicting priorities, and incomplete data, translating them into clarity, direction, and meaningful change.
            </TextReveal>
          </FadeIn>

          {/* === CTA (Desktop) === */}
          <div className="hidden md:flex flex-wrap gap-4 w-full mt-8">
            <FadeIn delay={0.45}>
              <Button asChild variant="secondary" size="lg">
                <a href="#projects">See Projects ↓</a>
              </Button>
            </FadeIn>

            <FadeIn delay={0.55}>
              <Button asChild variant="secondary" size="lg">
                <a href="#expertise">Explore Expertise ↓</a>
              </Button>
            </FadeIn>

            <FadeIn delay={0.65}>
              <Button asChild variant="secondary" size="lg">
                <a href="/cv">View CV →</a>
              </Button>
            </FadeIn>
          </div>
        </div>

        {/* === Bild-Bereich === */}
        <div className="image-block order-2 md:order-2 md:col-start-2">
          <FadeIn delay={0.25}>
            <img
              src={profileImg}
              alt="Portrait of Felix Bruckmeier"
              className={cn(
                "rounded-2xl shadow-lg mx-auto w-[70%] md:w-[80%] object-cover aspect-[4/5]",
                colors.border
              )}
            />
          </FadeIn>
        </div>

        {/* === CTA Mobile === */}
        <div className="order-3 md:hidden flex flex-wrap gap-4 mt-8 w-full">
          <FadeIn delay={0.45}>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href="#projects">See Projects ↓</a>
            </Button>
          </FadeIn>

          <FadeIn delay={0.55}>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href="#expertise">Explore Expertise ↓</a>
            </Button>
          </FadeIn>

          <FadeIn delay={0.65}>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href="/cv">View CV →</a>
            </Button>
          </FadeIn>
        </div>
      </div>

      {/* === Quote === */}
      <FadeIn delay={0.75}>
        <p className="mt-12 text-center text-muted-foreground italic text-sm md:text-base">
          “UX Research is not for perfectionists. We strive for something better than perfection — something real.”
        </p>
      </FadeIn>
    </Section>
  );
}
