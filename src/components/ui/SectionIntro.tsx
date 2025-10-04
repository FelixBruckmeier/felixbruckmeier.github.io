// src/components/ui/SectionIntro.tsx
import { ReactNode } from "react";
import { Body, MutedText } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionIntro({ children, className }: SectionIntroProps) {
  return (
    <Body className={cn(layout.maxWidthText, spacing.mb6, className)}>
      <MutedText>{children}</MutedText>
    </Body>
  );
}
