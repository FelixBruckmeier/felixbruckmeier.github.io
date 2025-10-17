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
          // Mobile: Text → Bild → CTA
          // Desktop: Text + CTA links, Bild rechts
          "flex flex-col md:grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
        )}
      >
        {/* === Text-Bereich (inkl. Desktop-CTA) === */}
        <div className="text-block order-1 md:order-1 md:col-start-1 flex flex-col">
          <FadeIn delay={0.1}>
            <TextReveal
              variant="word"
              stagger={0.08}
              duration={0.9}
              delay={0.1}
              ease="easeInOut"
              className="text-left text-foreground font-bold text-5xl mb-8"
            >
              Hello!
            </TextReveal>
          </FadeIn>

          <FadeIn delay={1.2}>
            <TextReveal
              variant="word"
              stagger={0.08}
              duration={0.8}
              delay={0.15}
              ease="easeInOut"
              className="text-left text-foreground font-semibold text-lg mb-4"
            >
              I’m a UX Research Lead passionate about connecting strategy, insight, and execution.
            </TextReveal>
          </FadeIn>

          <FadeIn delay={2.4}>
            <TextReveal
              variant="word"
              stagger={0.08}
              duration={0.8}
              delay={0.2}
              ease="easeInOut"
              className="text-left text-muted-foreground leading-relaxed max-w-prose"
            >
              My work bridges business goals and user needs through mixed-method research and scalable ResearchOps.
              By combining qualitative depth and quantitative validation, I enable teams to make confident,
              user-centered decisions.
            </TextReveal>
          </FadeIn>

          {/* === CTA nur auf Desktop sichtbar === */}
          <div className="hidden md:flex flex-wrap gap-4 w-full mt-8">
            <FadeIn delay={3.6}>
              <Button asChild variant="secondary" size="lg">
                <a href="#projects">See Projects ↓</a>
              </Button>
            </FadeIn>

            <FadeIn delay={3.8}>
              <Button asChild variant="secondary" size="lg">
                <a href="#expertise">Explore Expertise ↓</a>
              </Button>
            </FadeIn>

            <FadeIn delay={4.0}>
              <Button asChild variant="secondary" size="lg">
                <a href="/cv">View CV →</a>
              </Button>
            </FadeIn>
          </div>
        </div>

        {/* === Bild-Bereich === */}
        <div className="image-block order-2 md:order-2 md:col-start-2">
          <FadeIn delay={0.8}>
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

        {/* === CTA nur auf Mobile sichtbar – jetzt unterhalb des Bildes === */}
        <div className="order-3 md:hidden flex flex-wrap gap-4 mt-8 w-full">
          <FadeIn delay={3.6}>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href="#projects">See Projects ↓</a>
            </Button>
          </FadeIn>

          <FadeIn delay={3.8}>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href="#expertise">Explore Expertise ↓</a>
            </Button>
          </FadeIn>

          <FadeIn delay={4.0}>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href="/cv">View CV →</a>
            </Button>
          </FadeIn>
        </div>
      </div>

      {/* === Quote unterhalb der Section === */}
      <FadeIn delay={4.4}>
        <p className="mt-12 text-center text-muted-foreground italic text-sm md:text-base">
          “UX Research is not for perfectionists. We strive for something better than perfection — something real.”
         
        </p>
      </FadeIn>
    </Section>
  );
}
