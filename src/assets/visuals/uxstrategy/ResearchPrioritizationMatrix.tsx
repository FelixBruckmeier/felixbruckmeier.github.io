/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notionHexMap } from "@/lib/tokens";
import Button from "@/components/ui/Button";
import { Rewind, FastForward, Play, Pause } from "lucide-react";

export default function ResearchPrioritizationMatrix() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkDark = () => document.documentElement.classList.contains("dark");
    setIsDarkMode(checkDark());
    const observer = new MutationObserver(() => setIsDarkMode(checkDark()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => setIndex((i) => (i + 1) % texts.length), 5000);
    } else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [isPlaying]);

  const texts = [
  {
    title: "Research Heavy",
    body:
      "When problem clarity is low but the risk of getting it wrong is high, my role as UX Lead is to initiate deep generative research — defining direction through contextual inquiry, JTBD interviews, and diary studies. This ensures that product decisions are grounded in user reality before we invest in solutions.",
  },
  {
    title: "Design Heavy",
    body:
      "When both clarity and risk are high, I guide the team toward iterative prototyping and evaluative testing. My focus here is on reducing design risk and ensuring that solutions are validated early with representative users before development resources are committed.",
  },
  {
    title: "Research Light",
    body:
      "When risk and clarity are both low, I advocate for lightweight exploration — quick user touchpoints and directional feedback that maintain momentum without over-investing. The goal is to stay user-informed while keeping the product team agile.",
  },
  {
    title: "Ship It & Measure",
    body:
      "When clarity and risk are low, I enable the team to launch confidently and learn post-release. In this context, my role shifts toward defining measurement frameworks — connecting A/B testing, behavioral analytics, and feedback loops to inform future iterations.",
  },
];


  const fadeCycle = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 } };

  const W = 620, H = 620;
  const M_LEFT = 110, M_RIGHT = 40, M_TOP = 40, M_BOTTOM = 110;
  const plotX = M_LEFT, plotY = M_TOP;
  const plotW = W - M_LEFT - M_RIGHT, plotH = H - M_TOP - M_BOTTOM;
  const size = Math.min(plotW, plotH);
  const px0 = plotX, py0 = plotY, px1 = plotX + size, py1 = plotY + size;
  const cx = (px0 + px1) / 2, cy = (py0 + py1) / 2;
  const xAxisY = py1, yAxisX = px0, AR = 8;

  const colors = {
    designHeavy: isDarkMode ? "#2A2430" : notionHexMap.purple.bg,
    researchHeavy: isDarkMode ? "#372E20" : notionHexMap.yellow.bg,
    researchLight: isDarkMode ? "#1F282D" : notionHexMap.blue.bg,
    shipMeasure: isDarkMode ? "#242B26" : notionHexMap.green.bg,
  };

  const highlight = {
    designHeavy: isDarkMode ? "#865DBB" : notionHexMap.purple.text,
    researchHeavy: isDarkMode ? "#C19138" : notionHexMap.yellow.text,
    researchLight: isDarkMode ? "#447ACB" : notionHexMap.blue.text,
    shipMeasure: isDarkMode ? "#4F9768" : notionHexMap.green.text,
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-20 w-full max-w-[1400px] mx-auto px-4">
      <div className="w-full max-w-[560px] flex-shrink-0">
        <svg viewBox={`0 0 ${W} ${H}`} className="matrix-svg w-full h-auto" aria-labelledby="title desc" role="img">
          <title id="title">UX Research Prioritization Matrix</title>

          {/* === Quadranten (wie besprochen) === */}
          <motion.rect x={px0} y={py0} width={size / 2} height={size / 2}
            fill={colors.shipMeasure}
            animate={{ fill: index === 3 ? highlight.shipMeasure : colors.shipMeasure }}
            transition={{ duration: 0.5 }} />
          <motion.rect x={cx} y={py0} width={size / 2} height={size / 2}
            fill={colors.designHeavy}
            animate={{ fill: index === 1 ? highlight.designHeavy : colors.designHeavy }}
            transition={{ duration: 0.5 }} />
          <motion.rect x={px0} y={cy} width={size / 2} height={size / 2}
            fill={colors.researchLight}
            animate={{ fill: index === 2 ? highlight.researchLight : colors.researchLight }}
            transition={{ duration: 0.5 }} />
          <motion.rect x={cx} y={cy} width={size / 2} height={size / 2}
            fill={colors.researchHeavy}
            animate={{ fill: index === 0 ? highlight.researchHeavy : colors.researchHeavy }}
            transition={{ duration: 0.5 }} />

          {/* === Linien === */}
          <g stroke="currentColor" className="text-neutral-300 dark:text-neutral-700">
            <rect x={px0} y={py0} width={size} height={size} fill="none" strokeWidth="1.5" />
            <line x1={cx} y1={py0} x2={cx} y2={py1} strokeWidth="1" />
            <line x1={px0} y1={cy} x2={px1} y2={cy} strokeWidth="1" />
          </g>

          {/* === Achsenbeschriftungen (wiederhergestellt) === */}
          <g className="text-muted-foreground dark:fill-white">
            <line x1={px0} y1={xAxisY} x2={px1} y2={xAxisY} stroke="currentColor" strokeWidth="1.5" />
            <path d={`M ${px1 + AR} ${xAxisY} l ${-AR} ${-AR / 2} l 0 ${AR} z`} fill="currentColor" />
            <text x={px0} y={xAxisY + 40} textAnchor="start" className="text-lg">Low</text>
            <text x={px1} y={xAxisY + 40} textAnchor="end" className="text-lg">High</text>
            <text x={cx} y={xAxisY + 40} textAnchor="middle" className="font-semibold text-xl">Risk of getting it wrong</text>

            <line x1={yAxisX} y1={py1} x2={yAxisX} y2={py0} stroke="currentColor" strokeWidth="1.5" />
            <path d={`M ${yAxisX} ${py0 - AR} l ${-AR / 2} ${AR} l ${AR} 0 z`} fill="currentColor" />
            <text transform={`translate(${yAxisX - 32}, ${cy + size / 2 - 40}) rotate(-90)`} textAnchor="middle" className="text-lg">Low</text>
            <text transform={`translate(${yAxisX - 32}, ${cy - size / 2 + 45}) rotate(-90)`} textAnchor="middle" className="text-lg">High</text>
            <text transform={`translate(${yAxisX - 45}, ${cy}) rotate(-90)`} textAnchor="middle" className="font-semibold text-xl">Problem clarity</text>
          </g>

          {/* === Beschriftungen in Quadranten === */}
          <g className="text-foreground text-[15px] leading-tight dark:fill-white">
            {/* oben links → Ship It & Measure */}
            <text x={(px0 + cx) / 2} y={(py0 + cy) / 2 - 8} textAnchor="middle" className="font-semibold">Ship It & Measure</text>
            <text x={(px0 + cx) / 2} y={(py0 + cy) / 2 + 10} textAnchor="middle" className="text-foreground/70">A/B Testing</text>
            <text x={(px0 + cx) / 2} y={(py0 + cy) / 2 + 28} textAnchor="middle" className="text-foreground/70">Behavioral Analysis</text>

            {/* oben rechts → Design Heavy */}
            <text x={(cx + px1) / 2} y={(py0 + cy) / 2 - 8} textAnchor="middle" className="font-semibold">Design Heavy</text>
            <text x={(cx + px1) / 2} y={(py0 + cy) / 2 + 10} textAnchor="middle" className="text-foreground/70">Iterative Design</text>
            <text x={(cx + px1) / 2} y={(py0 + cy) / 2 + 28} textAnchor="middle" className="text-foreground/70">Prototype Tests</text>
            <text x={(cx + px1) / 2} y={(py0 + cy) / 2 + 46} textAnchor="middle" className="text-foreground/70">Comprehension Tests</text>

            {/* unten links → Research Light */}
            <text x={(px0 + cx) / 2} y={(cy + py1) / 2 - 8} textAnchor="middle" className="font-semibold">Research Light</text>
            <text x={(px0 + cx) / 2} y={(cy + py1) / 2 + 12} textAnchor="middle" className="text-foreground/70">Semi-Structured Interviews</text>

            {/* unten rechts → Research Heavy */}
            <text x={(cx + px1) / 2} y={(cy + py1) / 2 - 8} textAnchor="middle" className="font-semibold">Research Heavy</text>
            <text x={(cx + px1) / 2} y={(cy + py1) / 2 + 10} textAnchor="middle" className="text-foreground/70">JTBD Interviews</text>
            <text x={(cx + px1) / 2} y={(cy + py1) / 2 + 28} textAnchor="middle" className="text-foreground/70">Contextual Inquiry</text>
            <text x={(cx + px1) / 2} y={(cy + py1) / 2 + 46} textAnchor="middle" className="text-foreground/70">Diary Studies</text>
          </g>
        </svg>

        {/* === Buttons & Text unverändert === */}
        <div className="flex lg:hidden justify-center items-center gap-3 mt-6">
          <Button variant="secondary" onClick={() => setIndex((index - 1 + texts.length) % texts.length)}><Rewind className="w-5 h-5" /></Button>
          <Button variant="secondary" onClick={() => setIsPlaying((p) => !p)}>{isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}</Button>
          <Button variant="secondary" onClick={() => setIndex((index + 1) % texts.length)}><FastForward className="w-5 h-5" /></Button>
        </div>

        <div className="block lg:hidden text-base md:text-lg text-muted-foreground mt-6">
          <AnimatePresence mode="wait">
            <motion.div key={index} variants={fadeCycle} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
              <h4 className="font-semibold text-foreground mb-3">{texts[index].title}</h4>
              <p className="leading-relaxed">{texts[index].body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* === Desktop Textblock === */}
      <div className="hidden lg:flex relative w-full max-w-[900px] text-base md:text-lg text-muted-foreground lg:pr-4 flex-col justify-between">
        <div className="relative h-[220px] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={index} variants={fadeCycle} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }} className="absolute inset-0">
              <h4 className="font-semibold text-foreground mb-3">{texts[index].title}</h4>
              <p className="leading-relaxed">{texts[index].body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center items-center gap-3 mt-12">
          <Button variant="secondary" onClick={() => setIndex((index - 1 + texts.length) % texts.length)}><Rewind className="w-5 h-5" /></Button>
          <Button variant="secondary" onClick={() => setIsPlaying((p) => !p)}>{isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}</Button>
          <Button variant="secondary" onClick={() => setIndex((index + 1) % texts.length)}><FastForward className="w-5 h-5" /></Button>
        </div>
      </div>
    </div>
  );
}
