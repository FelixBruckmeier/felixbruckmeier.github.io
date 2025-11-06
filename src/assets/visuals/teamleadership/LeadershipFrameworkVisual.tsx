import React, { useEffect, useState } from "react";
import { Users, Target, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { colors, spacing } from "@/lib/tokens";
import { Subtitle, Body } from "@/components/ui/Tokens";

export default function LeadershipFrameworkVisual({
  activeIndex = 0,
}: {
  activeIndex?: number;
}) {
  const [isDark, setIsDark] = useState(false);

  // === Dark Mode Detection ===
  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() =>
      setIsDark(root.classList.contains("dark"))
    );
    setIsDark(root.classList.contains("dark"));
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const side = 90;
  const height = (Math.sqrt(3) / 2) * side;

  const top = { x: 50, y: 50 - height / 2 };
  const left = { x: 50 - side / 2, y: 50 + height / 2 };
  const right = { x: 50 + side / 2, y: 50 + height / 2 };

  const centroid = {
    x: (top.x + left.x + right.x) / 3,
    y: (top.y + left.y + right.y) / 3,
  };

  // === Farben ===
  const baseColors = isDark
    ? {
        enablement: "#1a1418",
        mentoring: "#11191d",
        culture: "#1d1710",
      }
    : {
        enablement: "#F9F3F8",
        mentoring: "#EEF7FB",
        culture: "#FFF9EC",
      };

  // === Kräftigeres Highlight im Light Mode ===
  const highlightColors = isDark
    ? {
        enablement: "#6a5077",
        mentoring: "#5b6c48",
        culture: "#7d604a",
      }
    : {
        enablement: "#D6AFD2", // stärkerer, aber noch harmonischer Ton
        mentoring: "#A6D2E6",
        culture: "#FFD68A",
      };

  const principles = [
    {
      title: "Enablement over Control",
      desc: "Structures create autonomy & ownership.",
      icon: Target,
      x: top.x,
      y: top.y,
      color: baseColors.enablement,
      highlight: highlightColors.enablement,
    },
    {
      title: "Mentoring & Coaching",
      desc: "Guidance builds confidence and strategy.",
      icon: Users,
      x: left.x,
      y: left.y,
      color: baseColors.mentoring,
      highlight: highlightColors.mentoring,
    },
    {
      title: "Culture of Excellence",
      desc: "Collective standards ensure lasting quality.",
      icon: Lightbulb,
      x: right.x,
      y: right.y,
      color: baseColors.culture,
      highlight: highlightColors.culture,
    },
  ];

  return (
    <div
      className={cn(
        spacing.mt6,
        "relative flex justify-center items-center w-full overflow-x-visible px-6 sm:px-8 md:px-10"
      )}
    >
      <div className="relative aspect-square w-full max-w-[480px] sm:max-w-[560px] md:max-w-[620px]">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* === Triangle === */}
          <path
            d={`M ${top.x} ${top.y} L ${left.x} ${left.y} L ${right.x} ${right.y} Z`}
            className="fill-none stroke-muted-foreground/40"
            strokeWidth={0.8}
          />

          {/* === Center Label === */}
          <text
            x={centroid.x}
            y={centroid.y - 1.5}
            textAnchor="middle"
            className="fill-foreground font-semibold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5px, 1.3vw, 5px)",
            }}
          >
            Empowerment
          </text>
          <text
            x={centroid.x}
            y={centroid.y + 3.5}
            textAnchor="middle"
            className={cn(colors.muted.text)}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2px, 1vw, 3px)",
            }}
          >
            structure • growth • culture
          </text>

          {/* === Verbindungspunkte === */}
          {principles.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={1.2}
              className="fill-muted-foreground/60"
            />
          ))}
        </svg>

        {/* === Boxen === */}
        {principles.map(({ title, desc, x, y, color, highlight }, i) => {
          const isActive = activeIndex === i;
          return (
            <div
              key={i}
              className={cn(
                "absolute text-center transition-colors duration-500 rounded-lg",
                "p-[0.65rem] sm:p-3 bg-opacity-90"
              )}
              style={{
                width: "clamp(110px, 26vw, 190px)",
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                backgroundColor: isActive ? highlight : color,
              }}
            >
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <Subtitle className="text-foreground">{title}</Subtitle>
                <Body className={cn(colors.muted.text)}>{desc}</Body>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
