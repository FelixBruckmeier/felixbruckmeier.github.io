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
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, children, variant = "default", title, subtitle, ...props }, ref) => {
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

  const content = (
    <>
      {title && (
        <AccordionTrigger className={cn("flex flex-col items-start w-full gap-2")}>
          <Subtitle>{title}</Subtitle>
          {subtitle && <Body className={colors.muted.text}>{subtitle}</Body>}
        </AccordionTrigger>
      )}
      {children}
    </>
  );

  return (
    <AccordionPrimitive.Item ref={ref} className={baseClasses} {...props}>
      {timelineDot}
      {variant === "default" ? (
        content
      ) : (
        <Tile
          className={cn(
            "w-full text-left border-none",
            colors.tile.bg,   // ✅ Designsystem-Hintergrundgrau
            colors.tile.text  // ✅ Designsystem-Textfarbe
          )}
        >
          {content}
        </Tile>
      )}
    </AccordionPrimitive.Item>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between text-left [&[data-state=open]>svg]:rotate-180]",
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
      {children}
      <ChevronDown
        className={cn(
          icon.md,
          "shrink-0 transition-transform duration-200",
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
    <Body className={cn(spacing.pb4, "pt-0 text-left", className)}>{children}</Body>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
