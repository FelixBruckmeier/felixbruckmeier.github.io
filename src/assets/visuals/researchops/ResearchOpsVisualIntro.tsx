import { cn } from "@/lib/utils";
import { typography, colors } from "@/lib/tokens";

/**
 * ResearchOpsVisualIntro
 * A short storytelling visual block introducing the purpose of ResearchOps.
 */

export default function ResearchOpsVisualIntro() {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-center w-full max-w-3xl mx-auto py-12"
      )}
    >
      <div className="rounded-full bg-accent/10 w-48 h-48 flex items-center justify-center mb-8 shadow-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-accent-foreground"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>

      <h3
        className={cn(
          typography.sectionTitle.font,
          typography.sectionTitle.size,
          typography.sectionTitle.weight,
          "mb-4"
        )}
      >
        From Chaos to Clarity
      </h3>

      <p
        className={cn(
          typography.body.font,
          colors.muted.text,
          "max-w-2xl text-center"
        )}
      >
        ResearchOps turns scattered efforts into a structured, strategic engine for insight.
        By aligning people, processes, and tools, organizations move from reactive research
        to a state of clarity — where insights flow freely and decisions are confident.
      </p>
    </div>
  );
}
