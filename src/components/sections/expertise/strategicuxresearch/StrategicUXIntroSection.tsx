import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

/**
 * Section: Strategic UX Research — Making UX Strategy Work in Practice
 * Mit Icons im OKR-Stil (Emoji-basiert)
 */
export default function ValueOfStrategicUXResearch() {
  const tiles = [
    {
      icon: "🧭",
      title: "Planning Framework",
      text: "Research creates value only when it answers the right questions. I apply structured planning frameworks that link business intent, hypotheses, and methods — ensuring focus before execution and clarity after.",
    },
    {
      icon: "🔄",
      title: "Adaptive Methods",
      text: "Strategic research must fit different delivery models. From classic studies to agile loops, I tailor methods to context. Using the RITE process, for example, enables fast, iterative testing within agile environments.",
    },
    {
      icon: "📊",
      title: "Research OKRs as Business Link",
      text: "Research OKRs connect everyday learning with company objectives. They turn insights into measurable progress and ensure UX Research contributes directly to strategic outcomes.",
    },
  ];

  return (
    <Section
      id="value-research"
      title="Strategic UX Research — Making UX Strategy Work in Practice"
      spacing="lg"
    >
      {/* --- Storytelling Intro --- */}
      <SectionIntro>
        UX Strategy sets the vision — but it remains abstract until research
        brings it to life. That’s when the real work begins, and it’s no
        surprise that many organizations struggle to connect their strategy to
        real user insight and continuous learning.
        <br />
        <br />
        My approach to <strong>Strategic UX Research</strong> closes that gap.
        It turns strategy into an operational practice — one that adapts to
        different team setups, fuels iteration, and ties research outcomes
        directly to business goals. I focus on three areas that make UX Strategy
        truly work in practice.
      </SectionIntro>

      {/* --- Tiles with icons --- */}
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
