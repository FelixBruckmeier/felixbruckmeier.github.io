// src/components/ui/Button.tsx
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
import { buttonVariants, buttonSizes, typography } from "@/lib/tokens";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  asChild?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  asChild,
  ...props
}: ButtonProps) {
  const Comp: any = asChild ? "a" : "button";

  return (
    <Comp
      className={cn(
        buttonVariants.base,
        buttonVariants[variant],
        buttonSizes[size],
        typography.button.font,
        typography.button.weight,
        typography.button.leading,
        className
      )}
      {...props}
    />
  );
}
