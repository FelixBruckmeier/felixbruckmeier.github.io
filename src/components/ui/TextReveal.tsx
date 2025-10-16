// src/components/ui/TextReveal.tsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  children: string;
  delay?: number;
  variant?: "word"; // fest auf Wortweise
  stagger?: number; // ⏱ Abstand zwischen Wörtern
  duration?: number; // ⏱ Dauer pro Wort
  ease?: "linear" | "easeOut" | "easeInOut"; // 🎨 Art der Bewegung
  className?: string;
};

export default function TextReveal({
  children,
  delay = 0,
  variant = "word",
  stagger = 0.04,
  duration = 0.3,
  ease = "easeOut",
  className,
}: TextRevealProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Text in Wörter (inkl. Leerzeichen) aufteilen
  const textParts = children.split(/(\s+)/);

  // Container-Animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: stagger,
      },
    },
  };

  // Einzelne Wörter
  const child = {
    hidden: { opacity: 0, x: 8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, ease },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className={cn("inline-block leading-relaxed", className)}
    >
      {textParts.map((part, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {part}
        </motion.span>
      ))}
    </motion.div>
  );
}

