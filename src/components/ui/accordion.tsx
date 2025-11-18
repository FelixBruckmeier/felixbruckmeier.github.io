// src/components/ui/accordion.tsx
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import Tile from "@/components/ui/Tile";
import {
  typography,
  colors,
  radii,
  transitions,
  icon,
  spacing,
} from "@/lib/tokens";
import { Subtitle, Body } from "@/components/ui/Tokens";

const Accordion = AccordionPrimitive.Root;

interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  variant?: "default" | "tile" | "timeline";
  title?: string;
  subtitle?: string;
  summary?: string; // <----- NEU
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, children, variant = "default", title, subtitle, summary, ...props }, ref) => {
  const timelineDot =
    variant === "timeline" ? (
      <span
        className={cn(
          "absolute left-0 top-6 -translate-x-1/2 h-2.5 w-2.5",
          radii.full,
          colors.muted.text
        )}
      />
    ) : null;

  const baseClasses = cn(
    "border-b",
    variant === "timeline" && cn("relative pl-6 border-none"),
    variant === "tile" && "border-none",
    className
  );

  return (
    <AccordionPrimitive.Item ref={ref} className={baseClasses} {...props}>
      {timelineDot}
      {variant === "default" ? (
        <>
          <AccordionTrigger title={title} subtitle={subtitle} summary={summary} />
          {children}
        </>
      ) : (
        <Tile
          className={cn(
            "w-full text-left border-none",
            colors.tile.bg,
            colors.tile.text
          )}
        >
          <AccordionTrigger title={title} subtitle={subtitle} summary={summary} />
          {children}
        </Tile>
      )}
    </AccordionPrimitive.Item>
  );
});
AccordionItem.displayName = "AccordionItem";

interface TriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  title?: string;
  subtitle?: string;
  summary?: string;
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  TriggerProps
>(({ className, children, title, subtitle, summary, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-col items-start w-full gap-1 text-left [&[data-state=open]>svg]:rotate-180] relative",
        spacing.py4,
        transitions.default,
        typography.small.font,
        typography.small.size,
        typography.small.weight,
        typography.small.leading,
        className
      )}
      {...props}
    >
      {/* TITLE */}
      {title && <Subtitle>{title}</Subtitle>}

      {/* SUBTITLE */}
      {subtitle && (
        <Body className={colors.muted.text}>{subtitle}</Body>
      )}

      {/* SUMMARY — wird IMMER angezeigt (collapsed UND expanded) */}
      {summary && (
        <Body className={cn(colors.muted.text, "text-sm mt-1")}>
          {summary}
        </Body>
      )}

      {/* ICON */}
      <ChevronDown
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-200",
          icon.md,
          colors.muted.text
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    )}
    {...props}
  >
    <Body className={cn(spacing.pb4, "pt-0 text-left", className)}>
      {children}
    </Body>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
