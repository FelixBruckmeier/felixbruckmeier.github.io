// src/components/sections/home/MetricsSection.tsx
import Section from "@/components/ui/Section";
import Tile from "@/components/ui/Tile";
import FadeIn from "@/components/ui/FadeIn";
import { Body } from "@/components/ui/Tokens";
import { typography, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function MetricsSection() {
  const metrics = [
    {
      number: "10+",
      title: "Years Experience",
      desc: "UX strategy and UX Research leadership across teams",
    },
    {
      number: "25+",
      title: "Research Methods",
      desc: "Full spectrum of qualitative and quantitative methods",
    },
    {
      number: "5",
      title: "Industries",
      desc: "Cross-domain expertise from e-commerce to finance",
    },
    {
      number: "150+",
      title: "Studies Conducted",
      desc: "End-to-end UX Research across all product development phases",
    },
  ];

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] border-y border-border/10 bg-transparent md:bg-gray-100 md:dark:bg-neutral-900">
      <Section id="metrics" spacing="sm" center className="py-12 md:py-20">
        <div
          className={cn(
            // 🔹 1 Spalte Mobile, 2 Tablet, 4 Desktop
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center",
            spacing.gap6,
            spacing.mt4,
            "mx-auto max-w-screen-xl px-6"
          )}
        >
          {metrics.map((m, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.1}>
              <Tile variant="transparent" className="rounded-xl p-6">
                <div
                  className={cn(
                    typography.sectionHeading.font,
                    typography.sectionHeading.size,
                    typography.sectionHeading.weight,
                    typography.sectionHeading.tracking,
                    typography.sectionHeading.leading,
                    "text-foreground mb-2"
                  )}
                >
                  {m.number}
                </div>

                <Body className="font-semibold text-foreground mt-1">
                  {m.title}
                </Body>
                <Body className="text-muted-foreground mt-1">{m.desc}</Body>
              </Tile>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
