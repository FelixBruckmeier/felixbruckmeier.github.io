// src/components/ui/Section.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  sectionSpacing,
  sectionInnerSpacing,
  typography,
  colors,
  layout,
} from "@/lib/tokens";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  center?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  border?: boolean;     // optional für z. B. Footer-Trennlinie
  compact?: boolean;    // kompakter Modus (z. B. für Impact-Tiles)
  spacing?: keyof typeof sectionSpacing;
  className?: string;
  fullWidth?: boolean;  // ⬅ volle Breite standardmäßig aktiviert
}

/**
 * 💠 Unified Section Component (Design System)
 * --------------------------------------------
 * - Standardmäßig volle Breite
 * - Optionaler Container-Modus via fullWidth={false}
 * - Einheitliche Typo, Abstände und Border-Behandlung
 */
export default function Section({
  id,
  title,
  subtitle,
  children,
  center = false,
  borderTop = false,
  borderBottom = false,
  border = false,        // ⚙️ kein Border mehr per Default
  compact = false,
  spacing = "md",
  className,
  fullWidth = true,      // ✅ volle Breite ist Standard
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        layout.scrollOffset,
        borderTop && "border-t border-border/20",
        borderBottom && "border-b border-border/20",
        border && "border-y border-border/20",
        sectionSpacing[spacing],
        compact && "py-4",
        "w-full",
        className
      )}
    >
      <div
        className={cn(
          fullWidth ? "w-full px-0" : layout.container,
          center ? "text-center mx-auto" : "text-left"
        )}
      >
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

