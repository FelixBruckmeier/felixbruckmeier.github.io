// src/components/ui/Tile.tsx
import { cn } from "@/lib/utils";
import { colors, radii, transitions, spacing, hoverEffects } from "@/lib/tokens";
import { ArrowRight } from "lucide-react";

type TileProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "interactive" | "interactiveArrow" | "static" | "transparent";
};

export default function Tile({
  variant = "interactive",
  className,
  children,
  ...props
}: TileProps) {
  // 🧱 Basisstil für alle Tiles
  const baseStyles = cn(
    radii.lg,
    spacing.p6,
    transitions.default,
    "relative flex flex-col justify-between h-full space-y-2",
    className
  );

  // 🎨 Varianten – komplett ohne Border & Shadow
  const variantStyles =
    variant === "interactive"
      ? cn(
          colors.tile.bg,
          colors.tile.text,
          "will-change-transform cursor-pointer group",
          hoverEffects.smoothLift,
          "text-left"
        )
      : variant === "interactiveArrow"
      ? cn(
          colors.tile.bg,
          colors.tile.text,
          "will-change-transform cursor-pointer group",
          hoverEffects.smoothLift,
          "text-left"
        )
      : variant === "transparent"
      ? cn(
          "bg-[#F3F4F6]/80 dark:bg-[#1C1C1C]/80 text-foreground/90",
          "cursor-default transform-none transition-none",
          "text-center items-center space-y-3"
        )
      : variant === "static"
      ? cn(
          "bg-[#F3F4F6] dark:bg-[#1C1C1C] text-foreground/90",
          "cursor-default transition-none transform-none text-left"
        )
      : "";

  return (
    <div className={cn(baseStyles, variantStyles)} {...props}>
      <div className="flex-1">{children}</div>

      {variant === "interactiveArrow" && (
        <div className="mt-4 flex justify-end">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full 
                       bg-primary/10 text-primary dark:text-primary-foreground
                       transition-transform duration-200 
                       group-hover:translate-x-1 group-active:translate-x-1"
          >
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </div>
        </div>
      )}
    </div>
  );
}
