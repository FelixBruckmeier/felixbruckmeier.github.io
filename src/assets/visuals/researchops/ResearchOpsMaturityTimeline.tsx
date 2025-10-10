import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { spacing, layout, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { stages } from "./reopsData";

/**
 * ResearchOps Maturity Timeline — DS-conform
 * ------------------------------------------------------------
 * ✅ No shadows, hover, or custom background colors
 * ✅ Uses only DS tokens for spacing, text, and tile colors
 * ✅ Fully consistent with other sections
 */
export default function ResearchOpsMaturityTimeline() {
  return (
    <div className={cn("flex flex-col", "space-y-20 md:space-y-24 lg:space-y-28", spacing.mt10)}>
      {stages.map((stage) => (
        <div key={stage.level} className={cn("flex flex-col", "space-y-10 md:space-y-12")}>
          {/* === Stage Header === */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-foreground text-2xl sm:text-3xl font-semibold mb-3">
              {stage.label}: {stage.level}
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {stage.description}
            </p>
          </div>

          {/* === Stage Areas Grid === */}
          <div className={cn(layout.gridCols3, spacing.gap8, spacing.mt10)}>
            {stage.areas.map((area) => (
              <Tile
                key={area.name}
                variant="static"
                className={cn(
                  colors.tile.bg,
                  colors.tile.text,
                  spacing.p6,
                  "flex flex-col justify-start text-left rounded-2xl"
                )}
              >
                {/* === Area Title === */}
                <Subtitle className={cn("mb-2 text-foreground text-base sm:text-lg font-semibold")}>
                  {area.name}
                </Subtitle>

                {/* === Area Description === */}
                <Body className={cn(colors.muted.text, "text-sm sm:text-base leading-relaxed")}>
                  {area.description}
                </Body>

                {/* === Recommendation === */}
                <div className={cn(spacing.mt4, "border-t border-border pt-4")}>
                  <Subtitle className="text-foreground text-base sm:text-lg font-semibold">
                    Recommendation
                  </Subtitle>
                  <Body className={cn(colors.muted.text, "text-sm sm:text-base leading-relaxed mt-1")}>
                    {area.recommendation}
                  </Body>
                </div>
              </Tile>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

