import React from "react";
import { motion } from "framer-motion";

type Phase = "discover" | "define" | "develop" | "deliver";

type Props = {
  active: Phase;
};

export default function DoubleDiamond({ active }: Props) {
  const phases: { key: Phase; label: string }[] = [
    { key: "discover", label: "Discover" },
    { key: "define", label: "Define" },
    { key: "develop", label: "Develop" },
    { key: "deliver", label: "Deliver" },
  ];

  return (
    <div className="relative w-full my-12 md:my-32">
      {/* Balken als Trennlinie */}
      <div className="absolute top-1/2 left-0 w-full h-20 md:h-32 bg-gray-100 rounded-md -translate-y-1/2" />

      {/* Diamonds */}
      <div className="flex justify-between items-center relative px-6 md:px-16">
        {phases.map((p) => {
          const isActive = active === p.key;
          return (
            <motion.div
              key={p.key}
              className="w-14 h-14 md:w-20 md:h-20 rotate-45 flex items-center justify-center border-2 shadow-sm rounded-md"
              animate={{
                backgroundColor: isActive ? "#2563EB" : "#E5E7EB", // grau wenn inaktiv
                borderColor: isActive ? "#2563EB" : "#D1D5DB",
                scale: isActive ? 1.15 : 1,
              }}
              transition={{
                duration: 0.5,
                delay: isActive ? 0.15 : 0, // Verzögerung nur beim Aktivieren
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <span
                className={`rotate-[-45deg] font-medium ${
                  isActive ? "text-white" : "text-gray-600"
                } text-xs md:text-sm`}
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
