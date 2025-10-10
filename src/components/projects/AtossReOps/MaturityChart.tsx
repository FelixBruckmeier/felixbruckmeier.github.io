import React, { useEffect, useState } from "react";
import clsx from "clsx";

type MaturityChartProps = {
  currentLevel: number;
  targetLevel: number;
  stepWidth?: number;
  stepHeight?: number;
  stepOffsetY?: number;
};

const LEVELS = [
  { num: 1, label: "Ad-hoc", desc: "Research zufällig & unsystematisch" },
  { num: 2, label: "Emerging", desc: "Einzelne Aktivitäten, noch nicht verankert" },
  { num: 3, label: "Operationalized", desc: "Standardisierte Prozesse, erste Skalierung" },
  { num: 4, label: "Strategic", desc: "Research als fester Teil der Produktstrategie" },
  { num: 5, label: "Embedded", desc: "Ganzheitlich integriert & optimiert" },
];

export default function MaturityChart({
  currentLevel,
  targetLevel,
  stepWidth = 220,
  stepHeight = 60,
  stepOffsetY = 70,
}: MaturityChartProps) {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const stepOffsetX =
    containerWidth > 0
      ? Math.min(160, Math.max(0, (containerWidth - stepWidth) / (LEVELS.length + 1)))
      : 0;

  const totalHeight = stepHeight + (LEVELS.length - 1) * stepOffsetY;
  const containerHeight = 400;
  const verticalStart = (containerHeight - totalHeight) / 2;

  const totalWidth = stepWidth + (LEVELS.length - 1) * stepOffsetX;
  const horizontalStart = (containerWidth - totalWidth) / 2;

  return (
    <div className="w-full space-y-4">
      {/* Überschrift */}
      <h3 className="text-xl font-semibold text-center">
        ResearchOps Maturity Model
      </h3>

      {/* Treppen-Diagramm */}
      <div ref={containerRef} className="relative w-full h-[400px]">
        {LEVELS.map((lvl, i) => {
          const isCurrent = currentLevel === lvl.num;
          const isTarget = targetLevel === lvl.num;

          return (
            <div
              key={lvl.num}
              className={clsx(
                "absolute rounded-md shadow-md border border-border bg-neutral-50 dark:bg-neutral-800 p-3 flex flex-col justify-center text-center transition-colors",
                isCurrent && "bg-blue-100 dark:bg-blue-900/40 border-blue-400",
                isTarget && "bg-green-100 dark:bg-green-900/40 border-green-400"
              )}
              style={{
                width: `${stepWidth}px`,
                height: `${stepHeight}px`,
                left: `${horizontalStart + i * stepOffsetX}px`,
                bottom: `${verticalStart + i * stepOffsetY}px`,
              }}
            >
              <span className="font-semibold text-sm">
                {lvl.num}. {lvl.label}
              </span>
              <span className="text-xs text-muted-foreground">{lvl.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
