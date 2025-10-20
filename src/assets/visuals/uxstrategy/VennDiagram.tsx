import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { Rewind, FastForward, Play, Pause } from "lucide-react";

export default function VennDiagram() {
  const PHASE_COUNT = 4;
  const DURATION = 8000;
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const startRef = useRef(performance.now());
  const elapsedRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // === Dark Mode Detection ===
  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() =>
      setIsDark(root.classList.contains("dark"))
    );
    setIsDark(root.classList.contains("dark"));
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // === Animation Loop ===
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

  // === Helpers ===
  const clampPhase = (n: number) => ((n % PHASE_COUNT) + PHASE_COUNT) % PHASE_COUNT;
  const safePhase = clampPhase(phase);

  const getOpacity = (t: number) => {
    if (t < 0.0625) return t / 0.0625;
    if (t > 0.9375) return 1 - (t - 0.9375) / 0.0625;
    return 1;
  };
  const fadeOpacity = getOpacity(progress);

  // === Phase Texts ===
  const phaseTexts = [
    {
      title: "Human × Business — Turning empathy into measurable impact",
      body:
        "I reveal where user needs and business value meet. Grounding strategy in evidence helps teams replace assumptions with clarity — turning empathy into measurable impact.",
    },
    {
      title: "Human × Technology — Aligning behavior with feasibility",
      body:
        "I connect how people think and act with how systems are built. Early collaboration with engineering ensures we create what truly matters — aligning feasibility with human intent.",
    },
    {
      title: "Technology × Business — Balancing innovation and practicality",
      body:
        "I bring structure to trade-offs. Research clarifies how technology can serve strategy — helping teams make confident, evidence-based decisions that scale.",
    },
    {
      title: "At the center — UX Research",
      body:
        "Creating shared clarity from complexity. As a UX Research Lead, I turn complexity into shared understanding — connecting people, technology, and strategy to enable purposeful, human-centered design.",
    },
  ];
  const text = phaseTexts[safePhase];

  // === Controls ===
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

  // === Colors ===
  const baseColors = isDark
    ? {
        H: "#1a1418",
        T: "#11191d",
        B: "#1d1710",
      }
    : {
        H: "#F3E6EF",
        T: "#E6F3FA",
        B: "#FFF4D9",
      };

  const mixColors = isDark
    ? {
        HB: "#a87b57",
        HT: "#8a6fa0",
        TB: "#72855d",
        CENTER: "#695a51",
      }
    : {
        HB: "#e89b6b",
        HT: "#b983df",
        TB: "#a7d37e",
        CENTER: "#cbb7a5",
      };

  const blendMode = isDark ? "screen" : "multiply";

  // === Render ===
  return (
    <div className="relative flex flex-col items-center justify-center gap-10 w-full max-w-[1200px] mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-14 w-full">
        {/* === Diagram === */}
        <div className="relative flex justify-center items-center w-full max-w-[720px] aspect-[6/5]">
          <svg viewBox="0 0 720 640" className="w-full h-full">
            <defs>
              <circle id="H" cx="360" cy="220" r="170" />
              <circle id="T" cx="260" cy="390" r="170" />
              <circle id="B" cx="460" cy="390" r="170" />
              <clipPath id="clipH"><use href="#H" /></clipPath>
              <clipPath id="clipT"><use href="#T" /></clipPath>
              <clipPath id="clipB"><use href="#B" /></clipPath>
              <mask id="maskHB"><rect width="100%" height="100%" fill="white" /><g clipPath="url(#clipT)"><rect width="100%" height="100%" fill="black" /></g></mask>
              <mask id="maskHT"><rect width="100%" height="100%" fill="white" /><g clipPath="url(#clipB)"><rect width="100%" height="100%" fill="black" /></g></mask>
              <mask id="maskTB"><rect width="100%" height="100%" fill="white" /><g clipPath="url(#clipH)"><rect width="100%" height="100%" fill="black" /></g></mask>
            </defs>

            {/* === Base Circles === */}
            <use href="#H" fill={baseColors.H} fillOpacity="0.85" style={{ mixBlendMode: blendMode }} />
            <use href="#T" fill={baseColors.T} fillOpacity="0.85" style={{ mixBlendMode: blendMode }} />
            <use href="#B" fill={baseColors.B} fillOpacity="0.85" style={{ mixBlendMode: blendMode }} />

            {/* === Highlights === */}
            <g style={{ opacity: fadeOpacity, mixBlendMode: blendMode }}>
              {safePhase === 0 && (
                <g clipPath="url(#clipH)" mask="url(#maskHB)">
                  <use href="#B" fill={mixColors.HB} fillOpacity="0.92" />
                </g>
              )}
              {safePhase === 1 && (
                <g clipPath="url(#clipH)" mask="url(#maskHT)">
                  <use href="#T" fill={mixColors.HT} fillOpacity="0.92" />
                </g>
              )}
              {safePhase === 2 && (
                <g clipPath="url(#clipT)" mask="url(#maskTB)">
                  <use href="#B" fill={mixColors.TB} fillOpacity="0.90" />
                </g>
              )}
              {safePhase === 3 && (
                <g clipPath="url(#clipH)">
                  <g clipPath="url(#clipT)">
                    <use href="#B" fill={mixColors.CENTER} fillOpacity="0.88" />
                  </g>
                </g>
              )}
            </g>
          </svg>

          {/* === Labels === */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[12%] text-center text-sm md:text-base font-semibold text-muted-foreground">
            Human<br />Desirability
          </div>
          <div className="absolute left-[20%] bottom-[20%] text-center text-sm md:text-base font-semibold text-muted-foreground"
               style={{ transform: "translateY(-0.9em)" }}>
            Technology<br />Feasibility
          </div>
          <div className="absolute right-[20%] bottom-[20%] text-center text-sm md:text-base font-semibold text-muted-foreground"
               style={{ transform: "translateY(-0.9em)" }}>
            Business<br />Viability
          </div>

          {/* === Center UX === */}
          <motion.div
            animate={{ scale: safePhase === 3 ? 1.08 : 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[50%] top-[52%] -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl font-bold text-foreground"
          >
            UX
          </motion.div>
        </div>

        {/* === Text (DS-aligned) === */}
        <div className="relative w-full lg:w-[440px] flex items-center justify-center lg:justify-start text-center lg:text-left min-h-[260px]">
          <div
            key={safePhase}
            style={{ opacity: fadeOpacity, transition: "opacity 0s linear" }}
            className="max-w-[440px]"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              {text.title}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {text.body}
            </p>
          </div>
        </div>
      </div>

      {/* === Controls === */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <Button variant="secondary" size="md" onClick={() => changePhase(-1)}>
          <Rewind className="w-5 h-5" />
        </Button>
        <Button variant="secondary" size="md" onClick={togglePlay}>
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        <Button variant="secondary" size="md" onClick={() => changePhase(1)}>
          <FastForward className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
