// src/assets/visuals/teamleadership/skillassessment/SkillmapChart.tsx
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import Tile from "@/components/ui/Tile";
import { Body, Subtitle } from "@/components/ui/Tokens";
import { colors, layout, radii, spacing } from "@/lib/tokens";
import { themeColors } from "@/lib/SkillmapColors";
import { useEffect, useState } from "react";

interface SkillmapChartProps {
  data: {
    theme: string;
    mastery: number;
    influence: number;
  }[];
}

/**
 * Responsive Skillmap Chart
 * - X = Skill Level (0–4)
 * - Y = Relevance (0–5)
 * - On smaller screens, height and spacing shrink dynamically
 */
export default function SkillmapChart({ data }: SkillmapChartProps) {
  const [chartHeight, setChartHeight] = useState(520);
  const [yTicks, setYTicks] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  // Dynamically adjust Y-axis visual spacing for screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartHeight(360);
        setYTicks([0, 1, 2, 3, 4, 5]);
      } else if (window.innerWidth < 1024) {
        setChartHeight(440);
        setYTicks([0, 1, 2, 3, 4, 5]);
      } else {
        setChartHeight(520);
        setYTicks([0, 1, 2, 3, 4, 5]); // same ticks, just more vertical space
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data || !data.length) return null;

  return (
    <Tile
      variant="static"
      className={`${layout.fullWidth} ${spacing.p8} ${radii.xl} ${colors.tile.bg} ${colors.tile.text} ${spacing.mb12}`}
    >
      <div className={`${layout.flexColCenter} ${spacing.blockGapMd}`}>
        <Subtitle>Skillmap Overview</Subtitle>
        <Body className="text-muted-foreground max-w-text text-center">
          Average scores per topic – plotted along{" "}
          <strong>Skill Level (X)</strong> and{" "}
          <strong>Relevance (Y)</strong> dimensions.
        </Body>
      </div>

      <div
        className={`${spacing.mt10} ${layout.fullWidth}`}
        style={{ height: chartHeight }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 30,
              right: 40,
              left: 50,
              bottom: 50,
            }}
          >
            {/* === Grid === */}
            <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" strokeWidth={1.2} />

            {/* === X-Axis === */}
            <XAxis
              type="number"
              dataKey="mastery"
              name="Skill Level"
              domain={[0, 4]}
              tickCount={5}
              tickLine={false}
              axisLine={{ stroke: "#9ca3af", strokeWidth: 1.5 }}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            >
              <Label
                value="Skill Level"
                offset={-25}
                position="insideBottom"
                style={{
                  fill: "#374151",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "var(--font-sans)",
                }}
              />
            </XAxis>

            {/* === Y-Axis === */}
            <YAxis
              type="number"
              dataKey="influence"
              name="Relevance"
              domain={[0, 5]}
              ticks={yTicks}
              tickLine={false}
              axisLine={{ stroke: "#9ca3af", strokeWidth: 1.5 }}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            >
              <Label
                value="Relevance"
                angle={-90}
                position="insideLeft"
                style={{
                  fill: "#374151",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "var(--font-sans)",
                }}
              />
            </YAxis>

            {/* === Tooltip === */}
            <Tooltip
              cursor={{ strokeDasharray: "3 3", strokeWidth: 1 }}
              contentStyle={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 8px rgba(0,0,0,0.06)",
                padding: "10px 14px",
              }}
              formatter={(value: unknown, name, props) => {
                const formatted =
                  typeof value === "number" ? value.toFixed(2) : String(value);
                const label =
                  name === "mastery"
                    ? "Skill Level"
                    : name === "influence"
                    ? "Relevance"
                    : props?.payload?.theme ?? "";
                return [formatted, label];
              }}
            />

            {/* === Points (theme colors) === */}
            {Object.entries(themeColors).map(([theme, colorSet]) => (
              <Scatter
                key={theme}
                name={theme}
                data={data.filter((d) => d.theme === theme)}
                fill={colorSet.hex}
                stroke={colorSet.hex}
                strokeWidth={1.5}
                r={8}
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </Tile>
  );
}
