import React from "react";
import { motion } from "framer-motion";

type Phase = "discover" | "define" | "develop" | "deliver";

type Props = {
  active: Phase;
  /** Optional: kompaktere Darstellung ohne das globale Default zu ändern */
  size?: "lg" | "md" | "sm";
};

const PRESETS = {
  lg: {
    bar: "h-20 md:h-32",
    diamond: "w-14 h-14 md:w-20 md:h-20",
    text: "text-xs md:text-sm",
    margin: "my-12 md:my-32",
    px: "px-6 md:px-16",
  },
  md: {
    bar: "h-12 md:h-20",
    diamond: "w-12 h-12 md:w-16 md:h-16",
    text: "text-[11px] md:text-xs",
    margin: "my-10 md:my-24",
    px: "px-6 md:px-12",
  },
  sm: {
    bar: "h-8 md:h-12",
    diamond: "w-10 h-10 md:w-12 md:h-12",
    text: "text-[10px] md:text-[11px]",
    margin: "my-8 md:my-16",
    px: "px-5 md:px-10",
  },
} as const;

export default function DoubleDiamond({ active, size = "lg" }: Props) {
  const phases: { key: Phase; label: string }[] = [
    { key: "discover", label: "Discover" },
    { key: "define", label: "Define" },
    { key: "develop", label: "Develop" },
    { key: "deliver", label: "Deliver" },
  ];

  const preset = PRESETS[size];

  return (
    <div className={`relative w-full ${preset.margin}`}>
      {/* Balken als Trennlinie */}
      <div
        className={`absolute top-1/2 left-0 w-full ${preset.bar} bg-gray-100 rounded-md -translate-y-1/2`}
      />

      {/* Diamonds */}
      <div className={`flex justify-between items-center relative ${preset.px}`}>
        {phases.map((p) => {
          const isActive = active === p.key;
          return (
            <motion.div
              key={p.key}
              className={`${preset.diamond} rotate-45 flex items-center justify-center border-2 shadow-sm rounded-md`}
              animate={{
                backgroundColor: isActive ? "#2563EB" : "#E5E7EB",
                borderColor: isActive ? "#2563EB" : "#D1D5DB",
                scale: isActive ? 1.15 : 1,
              }}
              transition={{
                duration: 0.5,
                delay: isActive ? 0.15 : 0,
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <span
                className={`rotate-[-45deg] font-medium ${
                  isActive ? "text-white" : "text-gray-600"
                } ${preset.text}`}
              >
                {p.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
