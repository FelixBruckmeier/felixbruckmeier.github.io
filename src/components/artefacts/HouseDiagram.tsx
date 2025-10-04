
// src/components/artefacts/HouseDiagram.tsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Tile from "@/components/ui/Tile";
import { Subtitle, Body } from "@/components/ui/Tokens"; 
import { spacing, layout } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function HouseDiagram() {
  const { t } = useTranslation();

  const pillars =
    (t("expertise.pillars", { returnObjects: true }) as Array<{
      title: string;
      caption?: string;
    }>) ?? [];

  const routesByIndex = [
    "expertise/ux-strategy",
    "expertise/strategic-ux-research",
    "expertise/researchops",
    "expertise/team-leadership",
    "expertise/impact-measurement",
  ];

  return (
    <div className="w-full">
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-stretch",
          spacing.gap4
        )}
      >
        {pillars.slice(0, 5).map((p, i) => {
          const to = routesByIndex[i] ?? "expertise";
          return (
            <Link key={i} to={to} className={layout.block}>
              <Tile className={cn("h-full flex flex-col justify-between")}>
                <Subtitle>{p.title}</Subtitle>

                {p.caption && (
                  <Body className={cn(spacing.mt2, "text-muted-foreground")}>
                    {p.caption}
                  </Body>
                )}
              </Tile>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
