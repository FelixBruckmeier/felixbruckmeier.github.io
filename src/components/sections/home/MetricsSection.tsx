import { useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import Tile from "@/components/ui/Tile";
import FadeIn from "@/components/ui/FadeIn";
import { Body } from "@/components/ui/Tokens";
import { typography, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function MetricsSection() {
  const metrics = [
    {
      number: 10,
      suffix: "+",
      title: "Years Experience",
      desc: "UX strategy and research leadership across teams",
    },
    {
      number: 25,
      suffix: "+",
      title: "Research Methods",
      desc: "Full spectrum of qualitative and quantitative approaches",
    },
    {
      number: 5,
      suffix: "",
      title: "Industries",
      desc: "Cross-domain expertise from e-commerce to finance",
    },
    {
      number: 150,
      suffix: "+",
      title: "Studies Conducted",
      desc: "End-to-end research across product development phases",
    },
  ];

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] border-y border-border/10 bg-transparent md:bg-gray-100 md:dark:bg-neutral-900">
      <Section id="metrics" spacing="sm" center className="py-12 md:py-20">
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center",
            spacing.gap6,
            spacing.mt4,
            "mx-auto max-w-screen-xl px-6"
          )}
        >
          {metrics.map((m, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.1}>
              <Tile variant="transparent" className="rounded-xl p-6">
                <AnimatedNumber target={m.number} suffix={m.suffix} />

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

/**
 * 🔢 Kleine Komponente für animiertes Hochzählen (ohne Buildfehler)
 */
function AnimatedNumber({ target, suffix }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // langsamer zählen (2 Sekunden)
    const stepTime = 20;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setValue(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span
      className={cn(
        typography.sectionHeading.font,
        typography.sectionHeading.size,
        typography.sectionHeading.weight,
        typography.sectionHeading.tracking,
        typography.sectionHeading.leading,
        "text-foreground mb-2 block"
      )}
    >
      {value}
      {suffix}
    </span>
  );
}
