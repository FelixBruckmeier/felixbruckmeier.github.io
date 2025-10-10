import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { Users, Target, Lightbulb } from "lucide-react";

export default function TeamLeadershipPhilosophySection() {
  const pillars = [
    {
      title: "Enablement over Control",
      text: "True leadership is not about managing every step — it's about creating structures where others can thrive, make decisions, and own outcomes.",
      icon: <Target className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Mentoring & Coaching",
      text: "Through 1:1 mentoring, peer learning, and role modeling, I help designers and researchers develop confidence, autonomy, and strategic thinking.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Culture of Excellence",
      text: "I foster a culture built on curiosity, collaboration, and craftsmanship — where quality is a shared value, not a top-down mandate.",
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <Section id="leadership-philosophy" title="My Leadership Philosophy" spacing="xl">
      <SectionIntro>
        For me, leadership is not control — it’s enablement. It’s about building
        environments where others can bring their best work, take ownership, and
        grow beyond what they thought possible.
      </SectionIntro>

      <div className={cn(layout.gridCols3, spacing.gap8, spacing.mt16)}>
        {pillars.map((p) => (
          <Tile key={p.title} variant="static" className="text-center">
            <div className="flex flex-col items-center">
              {p.icon}
              <Subtitle className={spacing.mt4}>{p.title}</Subtitle>
              <Body className={cn(colors.muted.text, spacing.mt2, "max-w-md mx-auto")}>
                {p.text}
              </Body>
            </div>
          </Tile>
        ))}
      </div>
    </Section>
  );
}
