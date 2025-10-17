// src/components/sections/home/AboutSection.tsx
import Section from "@/components/ui/Section";
import Tile from "@/components/ui/Tile";
import FadeIn from "@/components/ui/FadeIn";
import TextReveal from "@/components/ui/TextReveal";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { spacing, shadows, colors, layout } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profileImg from "@/assets/profile-felix.png";
import { useEffect } from "react";

export default function AboutSection() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Scrollfunktion (funktioniert auch nach Navigation)
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Wenn URL z. B. /#projects → beim Laden scrollen
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToId(id), 100);
    }
  }, [location]);

  const metrics = [
    { number: "10+", title: "Years Experience", desc: "UX strategy and research leadership across teams" },
    { number: "25+", title: "Research Methods", desc: "Full spectrum of qualitative and quantitative approaches" },
    { number: "5", title: "Industries", desc: "Cross-domain expertise from e-commerce to finance" },
    { number: "200+", title: "Studies Conducted", desc: "End-to-end research across product development phases" },
  ];

  return (
    <Section id="about" title="About Me" center>
      <div className={cn("flex flex-col items-center w-full", spacing.mt8, spacing.mb20)}>
        <FadeIn>
          <div className="flex justify-center w-full">
            <img
              src={profileImg}
              alt="Portrait of Felix Bruckmeier"
              className={cn(
                "w-[40%] max-w-[200px] md:max-w-[260px] aspect-[4/5] object-cover rounded-2xl shadow-lg mx-auto",
                colors.border,
                shadows.md
              )}
            />
          </div>
        </FadeIn>

        <TextReveal
          variant="word"
          delay={0.2}
          className={cn(
            "text-center text-foreground/90 leading-relaxed mt-10 text-lg tracking-wide",
            layout.maxWidthText
          )}
        >
          I’m a UX Research Lead with 10+ years of experience bridging strategy,
          operations, and insight generation. My work combines qualitative depth,
          quantitative validation, and ResearchOps leadership to accelerate confident
          product decisions.
        </TextReveal>

        {/* === CTA Buttons === */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button
            onClick={() => scrollToId("expertise")}
            className="btn btn-primary"
          >
            Explore Expertise ↓
          </button>
          <button
            onClick={() => scrollToId("projects")}
            className="btn btn-secondary"
          >
            See Projects ↓
          </button>
          <Link to="/cv" className="btn btn-ghost">
            View CV →
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-4 w-full",
          spacing.gap6,
          spacing.mt20
        )}
      >
        {metrics.map((m, i) => (
          <FadeIn key={i} delay={0.3 + i * 0.1}>
            <Tile
              variant="static"
              className={cn(
                colors.tile.bg,
                colors.tile.text,
                "text-center border border-border/10",
                spacing.p6,
                shadows.sm,
                "rounded-xl"
              )}
            >
              <Subtitle className="font-bold">{m.number}</Subtitle>
              <Body className="font-semibold text-foreground mt-1">{m.title}</Body>
              <Body className="text-muted-foreground mt-1">{m.desc}</Body>
            </Tile>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.8}>
        <blockquote
          className={cn(
            "italic text-center text-muted-foreground",
            spacing.mt16,
            spacing.mb8,
            layout.maxWidthText
          )}
        >
          “Good UX Research isn’t meant to scale — it’s meant to reveal what scaling hides.”
        </blockquote>
      </FadeIn>
    </Section>
  );
}
