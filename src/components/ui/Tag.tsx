// src/components/ui/Tag.tsx
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { colors, radii, transitions, type NotionColor } from "@/lib/tokens";
import { TagText } from "@/components/ui/Tokens";

interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  color?: NotionColor;
}

export default function Tag({
  active = false,
  color = "default",
  className,
  children,
  ...props
}: TagProps) {
  const set = colors.notion[color] ?? colors.notion.default;

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center px-3 py-1.5",
        set.bg,
        set.text,
        radii.full,
        transitions.opacity,
        active
          ? "outline outline-2 outline-offset-2 outline-current"
          : "hover:opacity-80",
        className
      )}
      {...props}
    >
      <TagText>{children}</TagText>
    </button>
  );
}
