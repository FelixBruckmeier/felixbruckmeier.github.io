// src/components/ui/Tile.tsx
import { cn } from "@/lib/utils";
import { colors, radii, transitions, spacing, hoverEffects } from "@/lib/tokens";

type TileProps = React.HTMLAttributes<HTMLDivElement> & {
  /** interactive = Hover + Scale, static = keine Interaktion, inactive = ruhig + leicht ausgegraut */
  variant?: "interactive" | "static" | "inactive"; // ✅ erweitert
};

export default function Tile({
  variant = "interactive",
  className,
  ...props
}: TileProps) {
  return (
    <div
      className={cn(
        colors.tile.bg,
        colors.tile.text,
        radii.lg,
        spacing.p6,
        transitions.default,
        variant === "interactive"
          ? cn("will-change-transform", hoverEffects.smoothLift, "cursor-pointer")
          : variant === "inactive"
          ? cn(
              // ✅ leicht ausgegrauter, deaktivierter Zustand
              "opacity-70",
              "cursor-not-allowed",
              "transition-none",
              "transform-none"
            )
          : cn(
              // statisch, aber aktiv sichtbar
              "cursor-default",
              "transition-none",
              "transform-none"
            ),
        className
      )}
      {...props}
    />
  );
}
