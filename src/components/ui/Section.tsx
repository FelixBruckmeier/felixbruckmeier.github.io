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
  border?: boolean;     // ✅ neu (für Footer usw.)
  compact?: boolean;    // ✅ neu (für ImpactMeasurement)
  spacing?: keyof typeof sectionSpacing;
  className?: string;
  fullWidth?: boolean;
}

/**
 * 🔧 Unified Section Component (Design System)
 * --------------------------------------------
 * - Standard: volle Breite (fullWidth = true)
 * - Optionaler Container-Modus via fullWidth={false}
 * - Titel und Inhalte automatisch bündig
 */
export default function Section({
  id,
  title,
  subtitle,
  children,
  center = false,
  borderTop = false,
  borderBottom = false,
  border = true,
  compact = false,
  spacing = "md",
  className,
  fullWidth = true, // ✅ Standard jetzt volle Breite
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        layout.scrollOffset,
        borderTop && "border-t",
        borderBottom && "border-b",
        border && colors.border,
        sectionSpacing[spacing],
        compact && "py-4", // ✅ kompakter Modus
        "w-full",
        className
      )}
    >
      <div
        className={cn(
          fullWidth ? "w-full" : layout.container, // ⬅ Container nur bei false
          center ? "text-center mx-auto" : "text-left"
        )}
      >
        {/* --- Titel (bündig mit Inhalt) --- */}
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

        {/* --- Untertitel optional --- */}
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

        {/* --- Inhalt (z. B. SectionIntro, Tiles etc.) --- */}
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}

