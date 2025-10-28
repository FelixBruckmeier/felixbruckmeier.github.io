import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Body } from "@/components/ui/Tokens";
import Button from "@/components/ui/Button";
import { colors, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function TeamLeadershipSkillsSection() {
  return (
    <Section id="leadership-skills" title="Skills & Growth Mapping" spacing="xl">
      <SectionIntro>
        When talented UX professionals aren’t supported in their development,
        they can’t grow in the way they — and the organization — need. Over time,
        this leads to frustration or stagnation. Some of the best people eventually
        move on, simply because they find better opportunities to evolve elsewhere.
      </SectionIntro>

      <Body className={cn(colors.muted.text, spacing.mt8, "space-y-4")}>
        <p>
          To counter this, I believe it’s crucial to provide a clear, structured,
          and long-term approach to professional growth — one that helps people
          see their potential, understand where they are, and feel supported along
          the way.
        </p>

        <p>
          That’s why I apply the{" "}
          <strong>Skill Development framework from the ResearchOps Community</strong>{" "}
          — a model that turns growth into a shared, transparent, and ongoing
          process that helps teams mature together.
        </p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Skill Baseline</strong> – Establish a shared understanding of
            current skill levels across UX disciplines — from research and design
            to facilitation and strategy.
          </li>
          <li>
            <strong>Growth Mapping</strong> – Use competency matrices and peer
            discussions to visualize growth areas and align personal goals with
            organizational objectives.
          </li>
          <li>
            <strong>Continuous Development</strong> – Combine structured feedback
            with coaching and mentoring to foster self-driven growth and maturity
            over time.
          </li>
        </ul>

        <p>
          Because when people have clarity about their development and feel
          genuinely supported, they don’t just grow — they stay, contribute, and
          help the organization mature with them.
        </p>
      </Body>

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
