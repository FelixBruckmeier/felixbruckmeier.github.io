import Tile from "@/components/ui/Tile";
import { Body, Subtitle } from "@/components/ui/Tokens";
import { colors, layout, spacing, radii } from "@/lib/tokens";
import { themeColors } from "@/lib/SkillmapColors";

/**
 * Legend explaining the Skillmap visualization.
 * Shows color meaning, axis descriptions (in English), and interpretation below.
 */
export default function SkillmapLegend() {
  const legendItems = Object.entries(themeColors);

  return (
    <>
      {/* === Grey Box (Legend) === */}
      <Tile
        variant="static"
        className={`${layout.fullWidth} ${spacing.p8} ${radii.xl} ${colors.tile.bg} ${colors.tile.text}`}
      >
        <div className={`${layout.flexCol} ${spacing.blockGapMd}`}>
          <Subtitle>Legend & Axes</Subtitle>

          <Body className="text-muted-foreground max-w-text">
            The <strong>Skillmap</strong> shows the average of your self-assessment across key themes.
          </Body>

          {/* === Axis Explanation === */}
          <div className={`${layout.gridCols2} ${spacing.gap6} ${spacing.mt4}`}>
            <div>
              <Body>
                <strong>X-Axis: Skill Level</strong>
              </Body>
              <Body className="text-muted-foreground">
                How confident you feel in a specific theme — from{" "}
                <strong>0 (no experience)</strong> to <strong>4 (expert)</strong>.
              </Body>
            </div>

            <div>
              <Body>
                <strong>Y-Axis: Relevance</strong>
              </Body>
              <Body className="text-muted-foreground">
                How important this theme currently is in your role — from{" "}
                <strong>0 (not relevant)</strong> to <strong>5 (very high)</strong>.
              </Body>
            </div>
          </div>

          {/* === Color Legend === */}
          <div className={`${spacing.mt8}`}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
              {legendItems.map(([label, { hex }]) => (
                <div key={label} className={`${layout.flexBetween} ${colors.tile.text}`}>
                  <div className="flex items-center gap-3">
                    <span
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: hex }}
                    />
                    <Body>{label}</Body>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === Note === */}
          <div className={`${spacing.mt10} ${layout.flexColCenter}`}>
            <Body className="text-muted-foreground text-center max-w-text">
              Fields in the <strong>upper-right quadrant</strong> represent{" "}
              <strong>high skill</strong> and <strong>high relevance</strong> — your potential{" "}
              <em>impact areas</em>.
            </Body>
          </div>
        </div>
      </Tile>

      {/* === Interpretation (wie sonst auch: tile-look statt bg-white) === */}
      <div
        className={`${spacing.mt10} ${spacing.p8} ${radii.xl} ${colors.tile.bg} ${colors.tile.text} border border-border`}
      >
        <Subtitle>How to read the Skillmap</Subtitle>

        <Body className="text-muted-foreground max-w-text">
          The Skillmap represents a snapshot of your current research practice — a visual reflection of
          which skills you rely on most, and how confident you feel using them.
          <br />
          <br />
          As your work evolves, your map evolves too. Early in your career,{" "}
          <strong>methodological skills</strong> tend to rank higher in relevance, as they directly support
          hands-on research activities. Over time, as you gain mastery and experience, these skills often{" "}
          <strong>move rightward</strong> (higher skill) and <strong>downward</strong> (less central to daily work),
          while <strong>strategic and leadership skills</strong> rise in relevance.
          <br />
          <br />
          The map therefore not only highlights your <strong>current strengths</strong>, but also hints at
          your <strong>trajectory of growth</strong> — showing where your expertise is established, where it
          is developing, and where new opportunities for impact may emerge.
        </Body>

        <Body className="text-sm text-muted-foreground mt-4 italic">
          Tip: Revisit your map every few months to observe how your focus and skill relevance shift over
          time.
        </Body>

        {/* === External Reference === */}
        <Body className="text-sm text-muted-foreground mt-6">
          For a deeper dive into how the Skillmap framework was developed and how to use it in your own
          practice, visit{" "}
          <a
            href="https://www.researchskills.net/tool/skill-map"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            researchskills.net/tool/skill-map
          </a>
          .
        </Body>
      </div>
    </>
  );
}
