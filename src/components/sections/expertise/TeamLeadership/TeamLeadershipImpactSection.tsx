import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function TeamLeadershipImpactSection() {
  return (
    <Section id="leadership-impact" title="The Impact of Empowered Leadership" spacing="xl">
      <SectionIntro>
        When leadership scales, UX evolves from isolated craft to strategic
        driver. The result is an organization that learns continuously and moves
        confidently toward its vision.
      </SectionIntro>

      <div className={cn(layout.gridCols3, spacing.gap8, spacing.mt16)}>
        {[
          {
            title: "Empowered Teams",
            text: "Autonomous researchers and designers who deliver outcomes, not outputs.",
          },
          {
            title: "Shared Ownership",
            text: "Cross-functional alignment between Product, Design, and Engineering.",
          },
          {
            title: "Sustained Excellence",
            text: "A culture of feedback, reflection, and continuous improvement.",
          },
        ].map((impact) => (
          <Tile
            key={impact.title}
            variant="static"
            className={cn("flex flex-col justify-start text-left", spacing.p8)}
          >
            <Subtitle>{impact.title}</Subtitle>
            <Body className={cn(colors.muted.text, spacing.mt2)}>{impact.text}</Body>
          </Tile>
        ))}
      </div>
    </Section>
  );
}
