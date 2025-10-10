import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { buttonVariants, buttonSizes, typography } from "@/lib/tokens";

/**
 * Universelle Button-Komponente.
 * - `variant`: primary, secondary, ghost, ...
 * - `size`: sm, md, lg
 * - `asChild`: für Links (intern/extern)
 * - `to`: interner Pfad (#hash oder /route)
 * - `href`: externer oder statischer Link (z. B. https://... oder /downloads/...)
 * - `download`: Dateiname für Downloads
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  asChild?: boolean;
  to?: string;
  href?: string;
  download?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  asChild = false,
  to,
  href,
  download,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    buttonVariants.base,
    buttonVariants[variant],
    buttonSizes[size],
    typography.button.font,
    typography.button.weight,
    typography.button.leading,
    className
  );

  // 🔹 Externe oder statische Links (z. B. /downloads/CV.pdf)
  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        {...(download ? { download } : {})} // ✅ download-Attribut weitergeben
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  // 🔹 Interne Links (Router oder Hash)
  if (asChild && to) {
    if (to.startsWith("#")) {
      return (
        <a href={to} className={baseClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  // 🔹 Default → echter Button
  return (
    <button type="button" className={baseClasses} {...props}>
      {children}
    </button>
  );
}
