// src/components/ui/Badge.tsx
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { colors, radii, transitions, type NotionColor } from "@/lib/tokens";
import { TagText } from "@/components/ui/Tokens";

interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  variant?: "default" | "active";
  color?: NotionColor;
}

export default function Badge({
  variant = "default",
  color = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const set = colors.notion[color] ?? colors.notion.default;

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5",
        set.bg,
        set.text,
        radii.full,
        transitions.opacity,
        variant === "active" &&
          "outline outline-2 outline-offset-2 outline-current",
        className
      )}
      {...props}
    >
      <TagText>{children}</TagText>
    </span>
  );
}
