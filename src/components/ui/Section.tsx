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
  border?: boolean;
  spacing?: keyof typeof sectionSpacing;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  center = false,
  border = true,
  spacing = "md",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        layout.scrollOffset,                 // ⬅️ hier statt "scroll-mt-24"
        border && cn("border-t", colors.border),
        className
      )}
    >
      <div
        className={cn(
          layout.container,
          sectionSpacing[spacing],
          center ? "text-center" : "text-left"
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

        <div>{children}</div>
      </div>
    </section>
  );
}
