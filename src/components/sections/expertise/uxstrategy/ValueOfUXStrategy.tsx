import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

/**
 * Section: The Purpose of UX Strategy (Storytelling + concise Tiles version)
 * Mit Icons im OKR-Stil
 */
export default function ValueOfUXStrategy() {
  const tiles = [
    {
      icon: "🎯",
      title: "Shared Vision",
      text: "Aligning user needs, business goals, and technical feasibility to create a common understanding of value and direction.",
    },
    {
      icon: "🔍",
      title: "Continuous Research",
      text: "Building systems that connect discovery, prototyping, and optimization — making learning a constant driver of better decisions.",
    },
    {
      icon: "⚖️",
      title: "Setting Priorities",
      text: "Helping teams decide where deep exploration is needed and where quick feedback is enough — balancing impact, time, and confidence.",
    },
  ];

  return (
    <Section id="value" title="The Purpose of UX Strategy" spacing="lg">
      {/* --- Storytelling Intro --- */}
      <SectionIntro>
        Many teams work with great dedication – but without shared direction.
        Research, design, and business often move in parallel:
        insights fade, decisions rely on assumptions,
        and speed replaces focus.
        <br />
        <br />
        <strong>UX Strategy</strong> brings these strands together.
        It clarifies where teams are heading, what they’re learning,
        and how research drives impact.
        My work focuses on three levers that turn activity into alignment.
      </SectionIntro>

      {/* --- Tiles --- */}
      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt12)}>
        {tiles.map((item) => (
          <Tile
            key={item.title}
            variant="static"
            className={cn(
              spacing.p6,
              "flex flex-col justify-start text-left rounded-2xl shadow-sm"
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              <span>{item.icon}</span>
              <Subtitle>{item.title}</Subtitle>
            </div>
            <Body className="leading-relaxed">{item.text}</Body>
          </Tile>
        ))}
      </div>
    </Section>
  );
}
