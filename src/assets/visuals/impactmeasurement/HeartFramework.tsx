/* eslint-disable react/no-unknown-property */
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/lib/tokens";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Happiness",
    color: "bg-[#3B82F6]",
    values: {
      Goals:
        "Increase user satisfaction with usability and the value of the solution.",
      Signals: "Users provide positive feedback on their experience.",
      Metrics:
        "NPS (Net Promoter Score), SUS (System Usability Scale), CSAT (Customer Satisfaction Score).",
    },
  },
  {
    name: "Engagement",
    color: "bg-[#8B5CF6]",
    values: {
      Goals: "Ensure users interact with the solution regularly and actively.",
      Signals: "High usage frequency.",
      Metrics: "DAU (Daily Active Users), MAU (Monthly Active Users).",
    },
  },
  {
    name: "Adoption",
    color: "bg-[#EF4444]",
    values: {
      Goals:
        "New users should integrate the solution into their processes quickly and sustainably.",
      Signals: "Increasing number of new active users.",
      Metrics: "MAU (Monthly Active Users).",
    },
  },
  {
    name: "Retention",
    color: "bg-[#F59E0B]",
    values: {
      Goals: "Ensure long-term usage of the solution.",
      Signals: "Users return and continue using the solution over time.",
      Metrics: "Stickiness (DAU/MAU Ratio).",
    },
  },
  {
    name: "Task Success",
    color: "bg-[#EAB308]",
    values: {
      Goals: "Users should be able to complete their tasks efficiently.",
      Signals: "Users successfully accomplish their tasks.",
      Metrics:
        "SUS (System Usability Scale), CSAT (Customer Satisfaction Score).",
    },
  },
];

const columns = ["Goals", "Signals", "Metrics"];

export default function HeartFramework() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8 px-2">
      {/* ===== DESKTOP LAYOUT ===== */}
      <motion.div
        className="hidden md:grid gap-2"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Leere Ecke */}
        <div></div>

        {/* Kopfzeile */}
        {columns.map((col, i) => (
          <motion.div
            key={col}
            className={cn(
              "rounded-md p-4 text-center text-white font-semibold",
              typography.body.font,
              typography.body.size
            )}
            style={{ backgroundColor: "#474747" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4 + i * 0.3,
                  duration: 0.8,
                  ease: [0.33, 1.02, 0.68, 1],
                },
              },
            }}
          >
            {col}
          </motion.div>
        ))}

        {/* Zeilen */}
        {categories.map((cat, rowIndex) => {
          const baseDelay = 1 + rowIndex * 0.5;
          return (
            <React.Fragment key={cat.name}>
              <motion.div
                className={cn(
                  `${cat.color} text-white font-semibold rounded-md p-4 text-center flex items-center justify-center`,
                  typography.subtitle.font,
                  typography.subtitle.size
                )}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: baseDelay,
                      duration: 0.8,
                      ease: [0.33, 1.02, 0.68, 1],
                    },
                  },
                }}
              >
                {cat.name}
              </motion.div>

              {columns.map((col, colIndex) => (
                <motion.div
                  key={`${cat.name}-${col}`}
                  className={cn(
                    "rounded-md p-4 leading-relaxed text-white",
                    typography.body.font,
                    typography.body.size
                  )}
                  style={{ backgroundColor: "#767676" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: baseDelay + 0.3 + colIndex * 0.3,
                        duration: 0.8,
                        ease: [0.33, 1.02, 0.68, 1],
                      },
                    },
                  }}
                >
                  <div
                    className={cn(
                      "font-medium text-gray-200 mb-1",
                      typography.small.font,
                      typography.small.size
                    )}
                  >
                    {col}
                  </div>
                  {cat.values[col]}
                </motion.div>
              ))}
            </React.Fragment>
          );
        })}
      </motion.div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="flex flex-col gap-6 md:hidden mt-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            className="rounded-xl overflow-hidden shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.5,
                  duration: 0.9,
                  ease: [0.33, 1.02, 0.68, 1],
                },
              },
            }}
          >
            {/* Kategorie-Titel */}
            <div
              className={cn(
                `${cat.color} text-white px-4 py-3 font-semibold`,
                typography.subtitle.font,
                typography.subtitle.size
              )}
            >
              {cat.name}
            </div>

            {/* Inhalte */}
            <div
              className={cn(
                "bg-[#767676] text-white p-4 space-y-3 leading-relaxed",
                typography.body.font,
                typography.body.size
              )}
            >
              {columns.map((col) => (
                <div key={`${cat.name}-${col}`}>
                  <div
                    className={cn(
                      "font-medium text-gray-200 mb-1",
                      typography.small.font,
                      typography.small.size
                    )}
                  >
                    {col}
                  </div>
                  {cat.values[col]}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

