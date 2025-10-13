import { motion } from "framer-motion";

/**
 * 🎯 VennDiagram (Delayed Sequential Animation)
 * ---------------------------------------------
 * - Startet ~1s nach Render
 * - Sequenziell: Human → Technical → Business → UX
 * - Langsam, weich, DS-Farben
 */
export default function VennDiagram() {
  const startDelay = 1.0; // globaler Start-Offset in Sekunden

  return (
    <div className="relative mx-auto flex justify-center items-center w-full max-w-[600px] sm:max-w-[700px] md:max-w-[800px] aspect-[6/5]">

      {/* 🟢 Human Desirability */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: startDelay + 0 }}
        className="absolute left-1/2 -translate-x-1/2 top-[14%] text-center text-xs sm:text-sm md:text-base font-semibold text-muted-foreground"
      >
        Human<br />Desirability
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: startDelay + 0.6, ease: 'easeInOut' }}
        className="absolute w-[55%] aspect-square rounded-full
                   bg-[#EEF3ED]/80 dark:bg-[#242B26]/60
                   left-1/2 -translate-x-1/2 top-[2%]
                   mix-blend-multiply"
      />

      {/* 🔵 Technical Feasibility */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: startDelay + 1.8 }}
        className="absolute left-[17%] bottom-[23%] text-center text-xs sm:text-sm md:text-base font-semibold text-muted-foreground"
      >
        Technical<br />Feasibility
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: startDelay + 2.4, ease: 'easeInOut' }}
        className="absolute w-[55%] aspect-square rounded-full
                   bg-[#E9F3F7]/80 dark:bg-[#1F282D]/60
                   left-[8%] bottom-[0%]
                   mix-blend-multiply"
      />

      {/* 🟣 Business Viability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: startDelay + 3.6 }}
        className="absolute right-[17%] bottom-[23%] text-center text-xs sm:text-sm md:text-base font-semibold text-muted-foreground"
      >
        Business<br />Viability
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: startDelay + 4.2, ease: 'easeInOut' }}
        className="absolute w-[55%] aspect-square rounded-full
                   bg-[#F6F3F8]/80 dark:bg-[#2A2430]/60
                   right-[8%] bottom-[0%]
                   mix-blend-multiply"
      />

      {/* UX Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: startDelay + 5.5, ease: 'easeInOut' }}
        className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 text-lg sm:text-xl md:text-2xl font-bold text-foreground"
      >
        UX
      </motion.div>
    </div>
  );
}
