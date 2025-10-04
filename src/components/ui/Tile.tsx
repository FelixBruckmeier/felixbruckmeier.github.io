// src/components/ui/Tile.tsx
import { cn } from "@/lib/utils";
import { colors, radii, transitions, spacing, hoverEffects } from "@/lib/tokens";

type TileProps = React.HTMLAttributes<HTMLDivElement> & {
  /** interactive = Hover + Scale, static = keine Interaktion */
  variant?: "interactive" | "static";
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
          : cn(
              // komplett ruhig: keine Hover-/Transform-Effekte
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
