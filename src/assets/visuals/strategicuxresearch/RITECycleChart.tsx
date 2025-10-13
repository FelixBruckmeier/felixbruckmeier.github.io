import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { typography } from "@/lib/tokens";

const phases = [
  {
    id: 0,
    label: "1. Prototype",
    description:
      "I usually start by helping the team turn early ideas into something testable — even if it’s rough. At this stage, my goal is not to validate, but to learn fast by giving people something tangible to react to. Without this step, discussions often stay conceptual, and decisions are driven more by opinion than by real user behavior.",
    fillLight: "#E9F3F7",
    text: "#447ACB",
    baseAngle: -90,
  },
  {
    id: 1,
    label: "2. Review",
    description:
      "Together with designers, developers, and sometimes product managers, I run quick usability sessions. We observe how users interact with the prototype, discuss pain points immediately, and align on what’s worth changing. Observing together is essential — it builds shared understanding and keeps feedback connected and actionable.",
    fillLight: "#FAF3DD",
    text: "#C19138",
    baseAngle: 30,
  },
  {
    id: 2,
    label: "3. Refine",
    description:
      "Right after each review, we apply small, focused changes and test again — often within the same day. This fast loop keeps momentum high and helps everyone see progress in real time. If iteration takes too long, insights lose momentum and the connection between research and design weakens.",
    fillLight: "#EEF3ED",
    text: "#4F9768",
    baseAngle: 150,
  },
];

export default function RITECycleChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [angleOffset, setAngleOffset] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [autoPause, setAutoPause] = useState(false);
  const requestRef = useRef<number>();
  const lastPauseTime = useRef<number>(0);

  const center = { x: 200, y: 200 };
  const radius = 135;
  const rotationSpeed = 15;
  const pauseDuration = 4000;

  useEffect(() => {
    const animate = (time: number) => {
      if (isRunning) {
        setAngleOffset((prev) => {
          if (autoPause) return prev;
          return (prev - rotationSpeed / 60) % 360;
        });
      }

      const normalized = ((angleOffset % 360) + 360) % 360;
      const nearStop = [0, 120, 240].some(
        (target) => Math.abs(normalized - target) < 2
      );

      if (
        isRunning &&
        !autoPause &&
        time - lastPauseTime.current > pauseDuration * 2 &&
        nearStop
      ) {
        setAutoPause(true);
        lastPauseTime.current = time;
        setTimeout(() => setAutoPause(false), pauseDuration);
      }

      const currentPhase =
        Math.floor(((450 - normalized) % 360) / 120) % phases.length;
      setActiveIndex(currentPhase);

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isRunning, autoPause, angleOffset]);

  return (
    <div className="relative flex flex-col justify-center items-center w-full">
      {/* --- Mobile: Button über Grafik --- */}
      <div className="block md:hidden mb-4">
        <button
          onClick={() => setIsRunning((prev) => !prev)}
          className={`px-5 py-2 rounded-lg transition font-medium ${
            isRunning
              ? "bg-muted text-foreground hover:bg-muted/80"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          {isRunning ? "Stop Rotation" : "Start Rotation"}
        </button>
      </div>

      {/* --- Grafik + Motto darunter + Text rechts --- */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20">
        {/* --- Grafik + Motto block --- */}
        <div className="flex flex-col items-center">
          {/* SVG Diagram (mobile zentriert) */}
          <svg
            viewBox="0 0 400 400"
            className="w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] mx-auto"
          >
            {/* Outer cycle */}
            <circle
              cx={center.x}
              cy={center.y}
              r={radius}
              stroke="#9CA3AF"
              strokeWidth="7"
              fill="none"
            />

            {/* RITE center */}
            <text
              x={center.x}
              y={center.y + 10}
              textAnchor="middle"
              className={`${typography.sectionTitle.font} ${typography.sectionTitle.size} ${typography.sectionTitle.weight}`}
              fill="#373530"
            >
              RITE
            </text>

            {/* Phase circles */}
            {phases.map((p) => {
              const angle = p.baseAngle + angleOffset;
              const rad = (angle * Math.PI) / 180;
              const x = center.x + radius * Math.cos(rad);
              const y = center.y + radius * Math.sin(rad);
              return (
                <g key={p.id}>
                  <circle cx={x} cy={y} r="59" fill={p.fillLight} />
                  <text
                    x={x}
                    y={y + 5}
                    textAnchor="middle"
                    className={`${typography.body.font} ${typography.body.weight} ${typography.body.size}`}
                    fill={p.text}
                  >
                    {p.label}
                  </text>
                </g>
              );
            })}

            {/* Tangential arrow */}
            {(() => {
              const arrowAngle = angleOffset - 30;
              const rad = (arrowAngle * Math.PI) / 180;
              const cx = center.x + radius * Math.cos(rad);
              const cy = center.y + radius * Math.sin(rad);
              const tx = Math.sin(rad);
              const ty = -Math.cos(rad);
              const arrowLength = 40;
              const arrowWidth = 22;
              const headX = cx + tx * arrowLength * 0.5;
              const headY = cy + ty * arrowLength * 0.5;
              const baseX = cx - tx * arrowLength * 0.5;
              const baseY = cy - ty * arrowLength * 0.5;
              const px = -Math.cos(rad);
              const py = -Math.sin(rad);
              const leftX = baseX + px * (arrowWidth / 2);
              const leftY = baseY + py * (arrowWidth / 2);
              const rightX = baseX - px * (arrowWidth / 2);
              const rightY = baseY - py * (arrowWidth / 2);
              return (
                <path
                  d={`M ${leftX},${leftY} L ${headX},${headY} L ${rightX},${rightY} Z`}
                  fill="#9CA3AF"
                />
              );
            })()}
          </svg>

          {/* Motto direkt unter Grafik */}
          <p
            className={`${typography.subtitle.font} italic text-center text-foreground mt-6 md:mt-8`}
          >
            “Test early. Fix fast. Learn continuously.”
          </p>
        </div>

        {/* Text rechts (Desktop only) */}
        <div className="max-w-md md:w-[340px] mt-[48px] md:mt-[64px] min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className={`${typography.subtitle.font} ${typography.subtitle.size} ${typography.subtitle.weight} mb-2`}
                style={{ color: phases[activeIndex].text }}
              >
                {phases[activeIndex].label}
              </h3>
              <p
                className={`${typography.body.font} ${typography.body.size} text-[--color-muted] leading-relaxed`}
              >
                {phases[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- Desktop: Button unter Grafik --- */}
      <div className="hidden md:block mt-6">
        <button
          onClick={() => setIsRunning((prev) => !prev)}
          className={`px-5 py-2 rounded-lg transition font-medium ${
            isRunning
              ? "bg-muted text-foreground hover:bg-muted/80"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          {isRunning ? "Stop Rotation" : "Start Rotation"}
        </button>
      </div>
    </div>
  );
}
