/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { typography } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { notionHexMap } from "@/lib/tokens";

const columns = ["Goals", "Signals", "Metrics"];

// 🎨 DS-konforme Farben + Originaltexte
const categories = [
  {
    name: "Happiness",
    tone: notionHexMap.blue,
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
    tone: notionHexMap.purple,
    values: {
      Goals: "Ensure users interact with the solution regularly and actively.",
      Signals: "High usage frequency.",
      Metrics: "DAU (Daily Active Users), MAU (Monthly Active Users).",
    },
  },
  {
    name: "Adoption",
    tone: notionHexMap.brown,
    values: {
      Goals:
        "New users should integrate the solution into their processes quickly and sustainably.",
      Signals: "Increasing number of new active users.",
      Metrics: "MAU (Monthly Active Users).",
    },
  },
  {
    name: "Retention",
    tone: notionHexMap.green,
    values: {
      Goals: "Ensure long-term usage of the solution.",
      Signals: "Users return and continue using the solution over time.",
      Metrics: "Stickiness (DAU/MAU Ratio).",
    },
  },
  {
    name: "Task Success",
    tone: notionHexMap.yellow,
    values: {
      Goals: "Users should be able to complete their tasks efficiently.",
      Signals: "Users successfully accomplish their tasks.",
      Metrics:
        "SUS (System Usability Scale), CSAT (Customer Satisfaction Score).",
    },
  },
];

export default function HeartFramework() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const headerBg = "var(--color-muted)";
  const cellBg = "var(--color-card)";
  const borderColor = "var(--color-border)";
  const textColor = "var(--color-foreground)";
  const subText = "var(--color-muted-foreground)";

  return (
    <div className="w-full max-w-7xl mx-auto mt-8 px-2 transition-colors duration-300">
      {/* ===== DESKTOP ===== */}
      <motion.div
        className="hidden md:grid gap-2"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div></div>

        {/* Kopfzeile */}
        {columns.map((col, i) => (
          <motion.div
            key={col}
            className={cn(
              "rounded-md p-4 text-center font-semibold border",
              typography.body.font,
              typography.body.size
            )}
            style={{
              backgroundColor: headerBg,
              borderColor,
              color: textColor,
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2 + i * 0.2, duration: 0.5 },
              },
            }}
          >
            {col}
          </motion.div>
        ))}

        {/* Zeilen */}
        {categories.map((cat, rowIndex) => {
          const baseDelay = 0.4 + rowIndex * 0.2;
          const accentBg = isDark ? cat.tone.text + "40" : cat.tone.bg;
          const accentText = isDark ? cat.tone.bg : cat.tone.text;

          return (
            <React.Fragment key={cat.name}>
              {/* Kategorie */}
              <motion.div
                className={cn(
                  "font-semibold rounded-md p-4 text-center flex items-center justify-center border",
                  typography.subtitle.font,
                  typography.subtitle.size
                )}
                style={{
                  backgroundColor: accentBg,
                  borderColor,
                  color: accentText,
                }}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: baseDelay, duration: 0.5 },
                  },
                }}
              >
                {cat.name}
              </motion.div>

              {/* Werte */}
              {columns.map((col, colIndex) => (
                <motion.div
                  key={`${cat.name}-${col}`}
                  className={cn(
                    "rounded-md p-4 border leading-relaxed",
                    typography.body.font,
                    typography.body.size
                  )}
                  style={{
                    backgroundColor: cellBg,
                    borderColor,
                    color: textColor,
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: baseDelay + 0.2 + colIndex * 0.2,
                        duration: 0.5,
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

      {/* ===== MOBILE ===== */}
      <div className="flex flex-col gap-6 md:hidden mt-6">
        {categories.map((cat, i) => {
          const accentBg = isDark ? cat.tone.text + "40" : cat.tone.bg;
          const accentText = isDark ? cat.tone.bg : cat.tone.text;
          return (
            <motion.div
              key={cat.name}
              className="rounded-xl overflow-hidden border transition-colors duration-300"
              style={{ borderColor }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.2, duration: 0.6 },
                },
              }}
            >
              {/* Kategorie-Header */}
              <div
                className={cn(
                  "px-4 py-3 font-semibold",
                  typography.subtitle.font,
                  typography.subtitle.size
                )}
                style={{
                  backgroundColor: accentBg,
                  color: accentText,
                }}
              >
                {cat.name}
              </div>

              {/* Inhalte */}
              <div
                className={cn(
                  "p-4 space-y-3 border-t leading-relaxed",
                  typography.body.font,
                  typography.body.size
                )}
                style={{
                  backgroundColor: cellBg,
                  borderColor,
                  color: textColor,
                }}
              >
                {columns.map((col) => (
                  <div key={`${cat.name}-${col}`}>
                    <div
                      className={cn(
                        "font-medium mb-1",
                        typography.small.font,
                        typography.small.size
                      )}
                      style={{ color: subText }}
                    >
                      {col}
                    </div>
                    {cat.values[col]}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
