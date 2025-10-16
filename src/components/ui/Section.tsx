// src/components/ui/Section.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  sectionSpacing,
  sectionInnerSpacing,
  typography,
  colors,
} from "@/lib/tokens";

/**
 * 💠 Section Component
 * -----------------------------------------------------
 * Einheitliche Breite & Ränder für alle Inhaltsbereiche
 * Dynamisch (ca. 94 vw, max. 1900 px)
 * Headerbilder in PageLayout bleiben unberührt
 */

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  center?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  border?: boolean;
  compact?: boolean;
  spacing?: keyof typeof sectionSpacing;
  className?: string;
  fullWidth?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  center = false,
  borderTop = false,
  borderBottom = false,
  border = false,
  compact = false,
  spacing = "md",
  className,
  fullWidth = false,
}: SectionProps) {
  // ✅ Dynamische Container-Breite, identisch zu Navbar/Footer
  const containerClass = fullWidth
    ? "w-full"
    : "mx-auto w-full max-w-[1900px] px-[3vw]";

  return (
    <section
      id={id}
      className={cn(
        borderTop && "border-t border-border/20",
        borderBottom && "border-b border-border/20",
        border && "border-y border-border/20",
        sectionSpacing[spacing],
        compact && "py-4",
        "w-full",
        className
      )}
    >
      <div className={cn(containerClass, center && "text-center")}>
        {title && (
          <h2
            className={cn(
              typography.sectionTitle.font,
              typography.sectionTitle.size,
              typography.sectionTitle.weight,
              typography.sectionTitle.tracking,
              typography.sectionTitle.leading,
              sectionInnerSpacing.titleMargin
            )}
          >
            {title}
          </h2>
        )}

        {subtitle && (
          <p
            className={cn(
              typography.subtitle.font,
              typography.subtitle.size,
              typography.subtitle.weight,
              typography.subtitle.leading,
              typography.subtitle.color,
              sectionInnerSpacing.subtitleMargin,
              center && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        )}

        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}
