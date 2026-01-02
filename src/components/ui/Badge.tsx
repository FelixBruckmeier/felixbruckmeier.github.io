// src/components/ui/Badge.tsx
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { colors, radii, transitions, type NotionColor } from "@/lib/tokens";
import { TagText } from "@/components/ui/Tokens";

interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  variant?: "default" | "active";
  color?: NotionColor;

  /**
   * pill  = bisheriges Verhalten (Tags, Labels)
   * circle = echte Kreise (Mastery / Relevance)
   */
  shape?: "pill" | "circle";

  /**
   * nur für circle relevant
   */
  size?: "sm" | "md" | "lg";
}

const circleSizes = {
  sm: "w-8 h-8 text-xs",
  md: "w-9 h-9 text-sm",
  lg: "w-10 h-10 text-base",
} as const;

export default function Badge({
  variant = "default",
  color = "default",
  shape = "pill",
  size = "md",
  className,
  children,
  ...props
}: BadgeProps) {
  const set = colors.notion[color] ?? colors.notion.default;
  const isCircle = shape === "circle";

  return (
    <span
      className={cn(
        // base
        "inline-flex items-center justify-center select-none",
        transitions.opacity,

        // shape
        isCircle
          ? cn(
              radii.full,
              circleSizes[size],
              "shrink-0",
              "border border-border", // immer da → kein Jitter
              "transition-transform duration-150 ease-out",
              "[transform:translateZ(0)] [backface-visibility:hidden] will-change-transform",
              "hover:scale-[1.03] active:scale-[0.97]"
            )
          : cn(
              "px-3 py-1.5",
              radii.full
            ),

        // colors
        set.bg,
        set.text,

        // active state
        variant === "active" &&
          (isCircle
            ? "bg-accent text-accent-foreground border-transparent"
            : "outline outline-2 outline-offset-2 outline-current"),

        className
      )}
      {...props}
    >
      {isCircle ? children : <TagText>{children}</TagText>}
    </span>
  );
}
