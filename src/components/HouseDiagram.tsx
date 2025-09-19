import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Einheitliche Kachelhöhe (Dach = 1x, Fundament = 0.5x)
const TILE_H = "176px";

export default function HouseDiagram() {
  const { t } = useTranslation();
  const pillars =
    (t("expertise.pillars", { returnObjects: true }) as Array<{ title: string; caption?: string }>) ?? [];

  const routesByIndex = [
    "expertise/ux-strategy",
    "expertise/strategic-ux-research",
    "expertise/researchops",
    "expertise/team-leadership",
    "expertise/impact-measurement",
  ];

  return (
    <div className="w-full" style={{ ["--tile-h" as any]: TILE_H }}>
      {/* Roof */}
      <div className="relative mx-auto max-w-6xl h-[var(--tile-h)]">
        <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none" aria-hidden>
          <polygon
            points="50,2 98,48 2,48"
            fill="currentColor"
            className="text-neutral-900 dark:text-white"
          />
        </svg>
        {/* Overlay-Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-base font-semibold text-white dark:text-neutral-900">
            {t("expertise.roof")}
          </span>
        </div>
      </div>

      {/* Tiles */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {pillars.slice(0, 5).map((p, i) => {
          const to = routesByIndex[i] ?? "expertise";
          return (
            <Link
              key={i}
              to={to}
              className="block focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 rounded-2xl"
            >
              <div
                className="
                  h-full min-h-[var(--tile-h)]
                  rounded-2xl border border-border
                  p-4 shadow-sm hover:shadow-md transition-shadow
                  bg-white text-neutral-900
                  dark:bg-neutral-950 dark:text-neutral-100
                "
              >
                <div className="text-base font-semibold leading-snug">{p.title}</div>
                {p.caption ? (
                  <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {p.caption}
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Foundation (halbe Kachelhöhe) */}
      <div className="mt-6">
        <div
          className="
            mx-auto max-w-6xl
            rounded-full
            text-center border border-border
            bg-neutral-900 text-white
            dark:bg-white dark:text-neutral-900
            text-base font-semibold
          "
          style={{
            height: "calc(var(--tile-h) / 2)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <span className="px-4">{t("expertise.foundation")}</span>
        </div>
      </div>

      {/* Value Proposition */}
      <p className="mt-4 text-center text-base font-semibold text-muted-foreground max-w-3xl mx-auto">
        {t("expertise.valueProp")}
      </p>
    </div>
  );
}
