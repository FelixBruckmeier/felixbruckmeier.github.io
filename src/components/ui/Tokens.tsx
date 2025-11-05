import { cn } from "@/lib/utils";
import {
  typography,
  colors,
  radii,
  transitions,
  spacing,
  sectionIntro,
  buttonVariants,
} from "@/lib/tokens";
import { ReactNode } from "react";

/**
 * TYPOGRAPHY
 */
export function H1({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h1
      className={cn(
        typography.hero.font,
        typography.hero.size,
        typography.hero.weight,
        typography.hero.tracking,
        typography.hero.leading,
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        typography.sectionTitle.font,
        typography.sectionTitle.size,
        typography.sectionTitle.weight,
        typography.sectionTitle.tracking,
        typography.sectionTitle.leading,
        className
      )}
    >
      {children}
    </h2>
  );
}

// ✅ Alias für H2 – kompatibel mit bisherigen Imports (z. B. Title)
export const Title = H2;

// ✅ H3 nutzt subtitle-Typografie (muted)
export function H3({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h3
      className={cn(
        typography.subtitle.font,
        typography.subtitle.size,
        typography.subtitle.weight,
        typography.subtitle.leading,
        typography.subtitle.color,
        className
      )}
    >
      {children}
    </h3>
  );
}

// 🆕 SectionHeading – nutzt sectionHeading aus typography
export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        typography.sectionHeading.font,
        typography.sectionHeading.size,
        typography.sectionHeading.weight,
        typography.sectionHeading.tracking,
        typography.sectionHeading.leading,
        typography.sectionHeading.color,
        className
      )}
    >
      {children}
    </h3>
  );
}

export function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        typography.body.font,
        typography.body.size,
        typography.body.weight,
        typography.body.leading,
        className
      )}
    >
      {children}
    </p>
  );
}

export function Small({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <small
      className={cn(
        typography.small.font,
        typography.small.size,
        typography.small.weight,
        typography.small.leading,
        typography.small.color,
        className
      )}
    >
      {children}
    </small>
  );
}

export function Subtitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h4
      className={cn(
        typography.subtitle.font,
        typography.subtitle.size,
        typography.subtitle.weight,
        typography.subtitle.leading,
        typography.subtitle.color,
        className
      )}
    >
      {children}
    </h4>
  );
}

// 🆕 Quote-Komponente – DS-konform, ohne Balken
export function Quote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <blockquote
      className={cn(
        typography.quote.font,
        typography.quote.size,
        typography.quote.weight,
        typography.quote.leading,
        "italic text-foreground/90",
        className
      )}
    >
      {children}
    </blockquote>
  );
}

/**
 * INTRO TEXT
 */
export function IntroText({
  children,
  className = "",
  full = false,
}: {
  children: ReactNode;
  className?: string;
  full?: boolean;
}) {
  return (
    <p
      className={cn(
        typography.body.font,
        typography.body.size,
        typography.body.weight,
        typography.body.leading,
        colors.muted.text,
        full ? sectionIntro.full : sectionIntro.default,
        spacing.mb6,
        className
      )}
    >
      {children}
    </p>
  );
}

/**
 * COLORS
 */
export function BgPrimary({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn(colors.primary.bg, colors.primary.text, className)}>{children}</div>;
}

export function BgSecondary({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn(colors.secondary.bg, colors.secondary.text, className)}>{children}</div>;
}

export function BgAccent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn(colors.accent.bg, colors.accent.text, className)}>{children}</div>;
}

/**
 * ✅ MutedText (Fix für SkillmapForm)
 */
export function MutedText({
  children,
  className = "",
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <span className={cn(colors.muted.text, className)} title={title}>
      {children}
    </span>
  );
}

export function TagText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        typography.tag.font,
        typography.tag.size,
        typography.tag.weight,
        typography.tag.leading,
        className
      )}
    >
      {children}
    </span>
  );
}

/**
 * BUTTONS
 */
export function ButtonBase({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <button className={cn(buttonVariants.base, className)}>{children}</button>;
}

export function ButtonPrimary({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <button className={cn(buttonVariants.base, buttonVariants.primary, className)}>{children}</button>;
}

export function ButtonSecondary({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <button className={cn(buttonVariants.base, buttonVariants.secondary, className)}>{children}</button>;
}

export function ButtonGhost({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <button className={cn(buttonVariants.base, buttonVariants.ghost, className)}>{children}</button>;
}

/**
 * CARDS / CONTAINERS
 */
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn(radii.lg, className)}>{children}</div>;
}
