import { useState, useRef, useEffect } from "react";
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import LeadershipFrameworkVisual from "@/assets/visuals/teamleadership/LeadershipFrameworkVisual";
import Button from "@/components/ui/Button";
import { Target, Users, Lightbulb } from "lucide-react";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/tokens";

// ✅ Eigene minimalistische gefüllte SVG-Icons (neutral schwarz/weiß, theme-abhängig)
const IconPlay = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 3.5v17l14-8.5-14-8.5z" />
  </svg>
);
const IconPause = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
  </svg>
);
const IconForward = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4v16l8-8-8-8zm8 0v16l8-8-8-8z" />
  </svg>
);
const IconBack = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4v16l-8-8 8-8zm-8 0v16l-8-8 8-8z" />
  </svg>
);

export default function TeamLeadershipPhilosophySection() {
  const PHASE_COUNT = 3;
  const DURATION = 8000;
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const startRef = useRef(performance.now());
  const elapsedRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const tick = (time: number) => {
      const elapsed = elapsedRef.current + (time - startRef.current);
      const total = PHASE_COUNT * DURATION;
      const mod = ((elapsed % total) + total) % total;
      const current = Math.floor(mod / DURATION);
      const prog = (mod % DURATION) / DURATION;

      setPhase(current);
      setProgress(prog);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [isPlaying]);

  const clampPhase = (n: number) => ((n % PHASE_COUNT) + PHASE_COUNT) % PHASE_COUNT;
  const safePhase = clampPhase(phase);

  const fadeOpacity =
    progress < 0.1 ? progress / 0.1 : progress > 0.9 ? 1 - (progress - 0.9) / 0.1 : 1;

  const texts = [
    {
      title: "Enablement over Control",
      body:
        "True leadership is not about managing every step — it's about creating structures where others can thrive, make decisions, and own outcomes.",
      icon: Target,
    },
    {
      title: "Mentoring & Coaching",
      body:
        "Through 1:1 mentoring, peer learning, and role modeling, I help designers and researchers develop confidence, autonomy, and strategic thinking.",
      icon: Users,
    },
    {
      title: "Culture of Excellence",
      body:
        "I foster a culture built on curiosity, collaboration, and craftsmanship — where quality is a shared value, not a top-down mandate.",
      icon: Lightbulb,
    },
  ];
  const text = texts[safePhase];
  const Icon = text.icon;

  const changePhase = (dir: number) => {
    const next = clampPhase(safePhase + dir);
    setPhase(next);
    setProgress(0.5);
    elapsedRef.current = next * DURATION;

    if (isPlaying) {
      startRef.current = performance.now();
    } else {
      requestAnimationFrame(() => setProgress(0.5));
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      elapsedRef.current += performance.now() - startRef.current;
      setIsPlaying(false);
    } else {
      startRef.current = performance.now();
      setIsPlaying(true);
    }
  };

  return (
    <Section id="leadership-philosophy" title="My Leadership Philosophy" spacing="lg">
      <SectionIntro>
        I believe good leadership doesn’t need much, quite the opposite. It’s about returning to a
        few essential principles. It doesn’t require complex models or frameworks, but genuine
        collaboration, something we all carry within us.<br />
        <br />
        For me, leadership is about enablement, creating structure and trust that give people the
        space to do their best work. When ownership replaces oversight, teams grow naturally and
        often go beyond what anyone expected.
      </SectionIntro>

      <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-14 w-full max-w-[1200px] mx-auto px-4">
        {/* === Diagramm === */}
        <div className="relative flex justify-center items-center w-full max-w-[720px] aspect-[6/5]">
          <LeadershipFrameworkVisual activeIndex={safePhase} />
        </div>

        {/* === Textbereich === */}
        <div className="relative w-full lg:w-[440px] flex flex-col items-center lg:items-start justify-center text-center lg:text-left min-h-[300px]">
          <div
            key={text.title}
            style={{ opacity: fadeOpacity, transition: "opacity 0s linear" }}
            className="max-w-[440px]"
          >
            {/* === Icon vor Überschrift === */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Icon className="w-5 h-5 text-muted-foreground" />
              <Subtitle>{text.title}</Subtitle>
            </div>
            <Body className={cn(colors.muted.text, "text-base md:text-lg leading-relaxed mt-2")}>
              {text.body}
            </Body>
          </div>

          {/* === Desktop Buttons === */}
          <div className="hidden md:flex items-center justify-center lg:justify-start gap-3 mt-10 absolute bottom-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0">
            <Button variant="secondary" size="md" onClick={() => changePhase(-1)}>
              <IconBack />
            </Button>
            <Button variant="secondary" size="md" onClick={togglePlay}>
              {isPlaying ? <IconPause /> : <IconPlay />}
            </Button>
            <Button variant="secondary" size="md" onClick={() => changePhase(1)}>
              <IconForward />
            </Button>
          </div>
        </div>
      </div>

      {/* === Mobile Buttons === */}
      <div className="flex md:hidden items-center justify-center gap-3 mt-8">
        <Button variant="secondary" size="md" onClick={() => changePhase(-1)}>
          <IconBack />
        </Button>
        <Button variant="secondary" size="md" onClick={togglePlay}>
          {isPlaying ? <IconPause /> : <IconPlay />}
        </Button>
        <Button variant="secondary" size="md" onClick={() => changePhase(1)}>
          <IconForward />
        </Button>
      </div>
    </Section>
  );
}
