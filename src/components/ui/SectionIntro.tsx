// src/components/ui/SectionIntro.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  typography,
  colors,
  sectionIntro,
  sectionInnerSpacing,
  spacing,
} from "@/lib/tokens";

interface SectionIntroProps {
  children: ReactNode;
  center?: boolean;
  maxWidth?: "default" | "full";
  className?: string;
  full?: boolean; // ✅ hinzugefügt, um Build-Error zu beheben
}

/**
 * SectionIntro
 * -------------
 * Einheitliche Typografie & Breite für alle Intro-Texte.
 * - Bündig mit Section-Titel (Padding kommt aus Section.tsx)
 * - Standardbreite: 75 % des Containers (max-w-4xl)
 * - Optional: `full` erzwingt volle Breite (setzt maxWidth auf "full")
 */
export default function SectionIntro({
  children,
  center = false,
  maxWidth = "default",
  className,
  full = false, // ✅ neues optionales Prop
}: SectionIntroProps) {
  const effectiveWidth = full ? "full" : maxWidth;

  return (
    <div
      data-section-intro
      className={cn(
        sectionIntro[effectiveWidth], // max-w-4xl oder volle Breite
        typography.body.font,
        typography.body.size,
        typography.body.leading,
        colors.foreground,
        spacing.mb8,
        sectionInnerSpacing.subtitleMargin,
        center && "text-center mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
