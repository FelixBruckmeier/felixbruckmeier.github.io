import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { spacing, layout, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { stages } from "./reopsData";

/**
 * ResearchOps Maturity Timeline — DS-conform
 * ------------------------------------------------------------
 * ✅ No manual typography or margin classes
 * ✅ Uses only DS tokens for spacing and text
 */
export default function ResearchOpsMaturityTimeline() {
  return (
    <div className={cn("flex flex-col", "space-y-20 md:space-y-24 lg:space-y-28", spacing.mt10)}>
      {stages.map((stage) => (
        <div key={stage.level} className={cn("flex flex-col", "space-y-10 md:space-y-12")}>
          {/* === Stage Header === */}
          <div className="text-center max-w-4xl mx-auto">
            <Subtitle>{stage.label}: {stage.level}</Subtitle>
            <Body className={colors.muted.text}>
              {stage.description}
            </Body>
          </div>

          {/* === Stage Areas Grid === */}
          <div className={cn(layout.gridCols3, spacing.gap8, spacing.mt10)}>
            {stage.areas.map((area) => (
              <Tile
                key={area.name}
                variant="static"
                className={cn(spacing.p6, "flex flex-col justify-start text-left rounded-2xl")}
              >
                {/* === Area Title === */}
                <Subtitle>{area.name}</Subtitle>

                {/* === Area Description === */}
                <Body className={colors.muted.text}>
                  {area.description}
                </Body>

                {/* === Recommendation === */}
                <div className={cn("border-t border-border", spacing.pt4, spacing.mt6)}>
                  <Subtitle>Recommendation</Subtitle>
                  <Body className={colors.muted.text}>
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
