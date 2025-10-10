import { Section } from "@/components/ui";
import { Body, Subtitle } from "@/components/ui/Tokens";
import Tile from "@/components/ui/Tile";
import Button from "@/components/ui/Button";
import { colors, spacing, layout } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function TeamLeadershipSkillsSection() {
  return (
    <Section id="leadership-skills" title="Skills & Growth Mapping" spacing="xl">
      <div className={cn(layout.gridCols3, spacing.gap8, spacing.mb16, "items-stretch")}>
        {[
          {
            title: "Skill Baseline",
            text: "Establish a shared understanding of current skill levels across UX disciplines — from research and design to facilitation and strategy.",
          },
          {
            title: "Growth Mapping",
            text: "Use competency matrices and peer discussions to visualize growth areas and align personal goals with organizational objectives.",
          },
          {
            title: "Continuous Development",
            text: "Combine structured feedback with coaching and mentoring to foster self-driven growth and maturity over time.",
          },
        ].map((item) => (
          <Tile
            key={item.title}
            variant="inactive"
            className={cn("flex flex-col justify-start h-full", spacing.p8)}
          >
            <Subtitle className={spacing.mb3}>{item.title}</Subtitle>
            <Body className={colors.muted.text}>{item.text}</Body>
          </Tile>
        ))}
      </div>

      <div className={cn("flex justify-center", spacing.mt12)}>
        <Button
          asChild
          variant="primary"
          size="lg"
          to="/expertise/team-leadership/skillassessment"
        >
          Go to Skill Assessment Center
        </Button>
      </div>
    </Section>
  );
}
