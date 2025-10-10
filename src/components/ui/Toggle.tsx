// src/components/ui/Toggle.tsx
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { Small } from "@/components/ui/Tokens";

interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
}

export function Toggle({ pressed, className, children, ...props }: ToggleProps) {
  return (
    <button
      aria-pressed={pressed}
      className={clsx(
        "px-3 py-1.5 rounded-lg transition",
        pressed
          ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
          : "border border-border hover:bg-muted/40",
        className
      )}
      {...props}
    >
      <Small>{children}</Small>
    </button>
  );
}
