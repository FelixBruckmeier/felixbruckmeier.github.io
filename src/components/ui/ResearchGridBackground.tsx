// src/components/ui/ResearchGridBackground.tsx
import { cn } from "@/lib/utils";
import { colors } from "@/lib/tokens";

interface ResearchGridBackgroundProps {
  className?: string;
}

export default function ResearchGridBackground({ className }: ResearchGridBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10",
        colors.tile.bg,   // ✅ nutzt jetzt das einheitliche Tile-Background
        className
      )}
    />
  );
}
