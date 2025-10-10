/* eslint-disable react/no-unknown-property */
import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Happiness",
    color: "bg-[#3B82F6]", // DS Blue
    values: {
      Goals:
        "Increase user satisfaction with usability and the value of the solution",
      Signals: "Users provide positive feedback on their experience",
      Metrics:
        "NPS (Net Promoter Score), SUS (System Usability Scale), CSAT (Customer Satisfaction Score)",
    },
  },
  {
    name: "Engagement",
    color: "bg-[#8B5CF6]", // DS Purple
    values: {
      Goals: "Ensure users interact with the solution regularly and actively",
      Signals: "High usage frequency",
      Metrics: "DAU (Daily Active Users), MAU (Monthly Active Users)",
    },
  },
  {
    name: "Adoption",
    color: "bg-[#EF4444]", // DS Red
    values: {
      Goals:
        "New users should integrate the solution into their processes quickly and sustainably",
      Signals: "Increasing number of new active users",
      Metrics: "MAU (Monthly Active Users)",
    },
  },
  {
    name: "Retention",
    color: "bg-[#F59E0B]", // DS Orange
    values: {
      Goals: "Ensure long-term usage of the solution",
      Signals: "Users return and continue using the solution over time",
      Metrics: "Stickiness (DAU/MAU Ratio)",
    },
  },
  {
    name: "Task Success",
    color: "bg-[#EAB308]", // DS Yellow
    values: {
      Goals: "Users should be able to complete their tasks efficiently",
      Signals: "Users successfully accomplish their tasks",
      Metrics:
        "SUS (System Usability Scale), CSAT (Customer Satisfaction Score)",
    },
  },
];

const columns = ["Goals", "Signals", "Metrics"];

export default function HeartFramework() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8 px-2">
      <motion.div
        className="grid gap-2"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Leere Zelle oben links */}
        <div></div>

        {/* Kopfzeile: Goals / Signals / Metrics */}
        {columns.map((col, i) => (
          <motion.div
            key={col}
            className="text-white text-lg md:text-xl font-semibold rounded-md p-4 text-center"
            style={{ backgroundColor: "#474747" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 3.8 + i * 0.4, // leicht verzögert
                  duration: 1.2,
                  ease: [0.33, 1.02, 0.68, 1],
                },
              },
            }}
          >
            {col}
          </motion.div>
        ))}

        {/* Zeilen: Happiness → Task Success */}
        {categories.map((cat, rowIndex) => {
          const baseDelay = rowIndex * 0.6;
          return (
            <React.Fragment key={cat.name}>
              {/* Kategorie-Zelle */}
              <motion.div
                className={`${cat.color} text-white text-lg md:text-xl font-semibold rounded-md p-4 text-center flex items-center justify-center`}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: baseDelay,
                      duration: 1.0,
                      ease: [0.33, 1.02, 0.68, 1],
                    },
                  },
                }}
              >
                {cat.name}
              </motion.div>

              {/* Werte-Zellen */}
              {columns.map((col, colIndex) => (
                <motion.div
                  key={`${cat.name}-${col}`}
                  className="rounded-md p-4 text-sm leading-relaxed text-white"
                  style={{ backgroundColor: "#767676" }}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay:
                          6.5 + // längere Pause nach Header
                          rowIndex * 0.6 +
                          colIndex * 0.4,
                        duration: 1.2,
                        ease: [0.33, 1.02, 0.68, 1],
                      },
                    },
                  }}
                >
                  {cat.values[col]}
                </motion.div>
              ))}
            </React.Fragment>
          );
        })}
      </motion.div>
    </div>
  );
}
