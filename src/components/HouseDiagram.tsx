import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Einheitliche Kachelhöhe (Dach = 1x, Fundament = 0.5x)
const TILE_H = "176px";

export default function HouseDiagram() {
  const { t } = useTranslation();
  const pillars =
    (t("expertise.pillars", { returnObjects: true }) as Array<{ title: string; caption?: string }>) ?? [];

  // Robust: relative Routen, damit Basename/Deploy (z.B. GitHub Pages) korrekt funktionieren
  const routesByIndex = [
    "expertise/ux-strategy",
    "expertise/strategic-ux-research",
    "expertise/researchops",
    "expertise/team-leadership",
    "expertise/impact-measurement",
  ];

  return (
    <div className="w-full" style={{ ["--tile-h" as any]: TILE_H }}>
      {/* Roof (scharfes, gefülltes Dreieck – Höhe = Kachelhöhe) */}
      <div className="mx-auto max-w-6xl h-[var(--tile-h)]">
        <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none" aria-hidden>
          {/* Scharfes Dreieck (Polygon), keine Rundungen */}
          <polygon
            points="50,2 98,48 2,48"
            fill="currentColor"
            className="text-neutral-900 dark:text-white"
          />
          {/* Text mittig, kleiner als vorher */}
          <text
            x="50"
            y="28"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-white dark:fill-neutral-900"
            style={{ fontSize: "clamp(10px, 1.6vw, 16px)", fontWeight: 700 }}
          >
            {t("expertise.roof")}
          </text>
        </svg>
      </div>

      {/* Tiles */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {pillars.slice(0, 5).map((p, i) => {
          const to = routesByIndex[i] ?? "expertise";
          return (
            <Link
              key={i}
              to={to} // relative Pfade -> funktionieren mit BrowserRouter *und* Basename
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
                <div className="font-semibold leading-snug">{p.title}</div>
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
            text-center font-semibold
            border border-border
            bg-neutral-900 text-white
            dark:bg-white dark:text-neutral-900
          "
          style={{ height: "calc(var(--tile-h) / 2)", display: "grid", placeItems: "center" }}
        >
          <span className="px-4">
            {t("expertise.foundation")}
          </span>
        </div>
      </div>

      {/* Value Proposition */}
      <p className="mt-4 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
        {t("expertise.valueProp")}
      </p>
    </div>
  );
}
