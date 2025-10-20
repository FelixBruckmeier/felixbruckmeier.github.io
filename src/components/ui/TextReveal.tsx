// src/components/ui/TextReveal.tsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  children: string;
  delay?: number;
  variant?: "word";
  stagger?: number;
  duration?: number;
  ease?: "linear" | "easeOut" | "easeInOut";
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

  // Text in Wörter + Leerzeichen aufteilen
  const textParts = variant === "word" ? children.split(/(\s+)/) : [children];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay, staggerChildren: stagger },
    },
  };

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
            display: part.trim() ? "inline-block" : "inline",
            whiteSpace: "pre-wrap",
          }}
        >
          {part}
        </motion.span>
      ))}
    </motion.div>
  );
}

