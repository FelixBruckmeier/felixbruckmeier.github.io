// src/components/ui/Tile.tsx
import { cn } from "@/lib/utils";
import { colors, radii, transitions, spacing, hoverEffects } from "@/lib/tokens";

type TileProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "interactive" | "static" | "inactive";
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
        "flex flex-col justify-start h-full text-left space-y-1", // ✅ Einheitlicher Abstand (Überschrift ↔ Text)
        variant === "interactive"
          ? cn("will-change-transform", hoverEffects.smoothLift, "cursor-pointer")
          : variant === "inactive"
          ? cn("opacity-70", "cursor-not-allowed", "transition-none", "transform-none")
          : cn("cursor-default", "transition-none", "transform-none"),
        className
      )}
      {...props}
    />
  );
}
