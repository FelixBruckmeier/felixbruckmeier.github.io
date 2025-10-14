import Section from "@/components/ui/Section";
import Tile from "@/components/ui/Tile";
import FadeIn from "@/components/ui/FadeIn"; // 👈 hinzugefügt
import { IntroText, Subtitle, Body } from "@/components/ui/Tokens";
import { spacing, shadows, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import profileImg from "@/assets/profile-felix.png";

export default function AboutSection() {
  const metrics = [
    {
      number: "10+",
      title: "Years Experience",
      desc: "UX strategy and research leadership across teams",
      bg: colors.notion.blue.bg,
      text: colors.notion.blue.text,
    },
    {
      number: "25+",
      title: "Research Methods",
      desc: "Full spectrum of qualitative and quantitative approaches",
      bg: colors.notion.green.bg,
      text: colors.notion.green.text,
    },
    {
      number: "5",
      title: "Industries",
      desc: "Cross-domain expertise from e-commerce to finance",
      bg: colors.notion.yellow.bg,
      text: colors.notion.yellow.text,
    },
    {
      number: "200+",
      title: "Studies Conducted",
      desc: "End-to-end research across product development phases",
      bg: colors.notion.purple.bg,
      text: colors.notion.purple.text,
    },
  ];

  return (
    <Section id="about" title="About Me" center>
      {/* === Portrait centered === */}
      <div className={cn("flex flex-col items-center w-full", spacing.mt8, spacing.mb20)}>
        <FadeIn>
          <img
            src={profileImg}
            alt="Portrait of Felix Bruckmeier"
            className={cn(
              "w-3/4 md:w-[420px] aspect-[4/5] object-cover rounded-2xl shadow-lg",
              colors.border,
              shadows.md
            )}
          />
        </FadeIn>

        {/* Intro Text unter Bild mit sanftem Fade-In */}
        <FadeIn delay={0.2}>
          <IntroText
            className={cn(
              "text-center text-foreground/90 leading-relaxed mt-10 max-w-3xl",
              spacing.pxCard
            )}
          >
            I’m a UX Research Lead with 10+ years of experience bridging strategy,
            operations, and insight generation. My work combines qualitative depth,
            quantitative validation, and ResearchOps leadership to accelerate confident
            product decisions.
          </IntroText>
        </FadeIn>
      </div>

      {/* === Key Metrics (static Tiles mit Fade-In) === */}
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
                m.bg,
                m.text,
                "text-center border border-border/10",
                spacing.p6,
                shadows.sm,
                "rounded-xl"
              )}
            >
              <Subtitle className="text-primary font-bold">{m.number}</Subtitle>
              <Body className="font-semibold text-foreground mt-1">{m.title}</Body>
              <Body className={cn("text-muted-foreground mt-1")}>{m.desc}</Body>
            </Tile>
          </FadeIn>
        ))}
      </div>

      {/* === Quote / Philosophy Statement === */}
      <FadeIn delay={0.8}>
        <blockquote
          className={cn(
            "italic text-center text-muted-foreground",
            spacing.mt16,
            spacing.mb8,
            spacing.pxCard
          )}
        >
          “Good UX Research isn’t meant to scale — it’s meant to reveal what scaling hides.”
        </blockquote>
      </FadeIn>
    </Section>
  );
}
