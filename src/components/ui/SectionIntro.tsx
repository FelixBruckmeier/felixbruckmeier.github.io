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
}

/**
 * SectionIntro
 * -------------
 * Einheitliche Typografie & Breite für alle Intro-Texte.
 * - Bündig mit Section-Titel (Padding kommt aus Section.tsx)
 * - Standardbreite: 75 % des Containers (max-w-4xl)
 */
export default function SectionIntro({
  children,
  center = false,
  maxWidth = "default",
  className,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        sectionIntro[maxWidth],               // max-w-4xl (75 %)
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
