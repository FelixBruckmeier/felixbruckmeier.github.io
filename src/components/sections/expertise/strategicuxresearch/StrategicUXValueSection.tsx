import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

/**
 * Section: The Value of Strategic UX Research
 * DS-conform — unified tile style, no shadows or hover effects
 */
export default function StrategicUXValueSection() {
  return (
    <Section id="value" title="The Value of Strategic UX Research" spacing="lg" fullWidth>
      {/* --- Storytelling Intro --- */}
      <SectionIntro>
        <Subtitle className="mb-4">💡 Strategic UX Research as a Countermovement</Subtitle>

        <Body className={colors.muted.text}>
          In modern product development, speed has become a religion. Sprints follow sprints,
          backlogs grow, and features get launched — fast, efficiently, visibly. Everything seems
          optimized for progress.
          <br />
          <br />
          But when you pause for a moment, you realize: more output doesn’t mean more impact. Teams
          deliver before they understand. They optimize existing solutions instead of discovering new
          opportunities. They measure how fast they move, not whether they’re moving in the right
          direction. And research? Too often, it’s brought in at the end — to validate, not to
          question.
        </Body>

        <Subtitle className="mt-10 mb-3">⚙️ The Real Problem</Subtitle>
        <Body className={colors.muted.text}>
          When organizations optimize only for speed, they lose orientation. They react to
          short-term signals — stakeholder demands, KPIs, competitors — instead of building
          long-term understanding. That’s how products emerge that work, but don’t resonate.
          Experiences that are well-intentioned, but not relevant. And decisions that feel right, but
          don’t make a difference.
          <br />
          <br />
          This isn’t a lack of skill — it’s a lack of clarity. Because speed is only an advantage
          when you know where you’re going.
        </Body>

        <Subtitle className="mt-10 mb-3">🧭 Reframing Development Around Clarity</Subtitle>
        <Body className={colors.muted.text}>
          <strong>Strategic UX Research</strong> is the answer to this imbalance. It shifts the focus
          from “How fast can we deliver?” to “What can we learn before we deliver?” It helps
          organizations ask the right questions:
          <ul className="list-disc list-inside mt-4">
            <li>What decisions need to be made — and why?</li>
            <li>What knowledge do we lack to make them confidently?</li>
            <li>How can we learn before we invest?</li>
          </ul>
          <br />
          Research becomes more than a validation tool — it becomes a decision-making infrastructure.
          Not the rear-view mirror, but the navigation system.
        </Body>

        <Subtitle className="mt-10 mb-3">🚀 From Action to Intention</Subtitle>
        <Body className={colors.muted.text}>
          Strategic UX Research enables the shift from Feature Delivery to Strategic Discovery. It
          gives teams a compass to move with purpose:
          <ul className="list-disc list-inside mt-4">
            <li>Less activity, more intent.</li>
            <li>Less speed, more direction.</li>
            <li>Fewer opinions, more evidence.</li>
          </ul>
          <br />
          Every research effort becomes a driver of decisions — not just a generator of data. It
          connects business goals, user needs, and design decisions into one shared understanding —
          and that changes everything.
        </Body>

        <Subtitle className="mt-10 mb-3">🌱 The Outcome</Subtitle>
        <Body className={colors.muted.text}>
          Organizations that embrace Strategic UX Research don’t just develop products — they develop
          the ability to learn. They don’t invest in faster delivery, but in better decisions. And
          they create experiences that aren’t just used — but understood, desired, and remembered.
        </Body>
      </SectionIntro>

      {/* --- Value Tiles (DS conform) --- */}
      <div className={cn(layout.gridCols3, spacing.gap8, spacing.mt16)}>
        {[
          {
            title: "Alignment",
            text: "Every research effort ties directly to business OKRs and strategic goals — ensuring clarity, focus, and shared direction.",
          },
          {
            title: "Impact",
            text: "Research insights guide product and design decisions at every level — turning learning into measurable progress.",
          },
          {
            title: "Confidence",
            text: "Stakeholders trust research because it delivers evidence that drives better decisions, not just faster ones.",
          },
        ].map((item) => (
          <Tile
            key={item.title}
            variant="static"
            className={cn(colors.tile.bg, colors.tile.text, spacing.p6, "rounded-2xl")}
          >
            <Subtitle className={cn("mb-2 text-foreground")}>{item.title}</Subtitle>
            <Body className={cn(colors.muted.text, "leading-relaxed")}>{item.text}</Body>
          </Tile>
        ))}
      </div>

      {/* --- Closing Quote --- */}
      <div className={cn("text-center", spacing.mt16)}>
        <Subtitle className="italic">
          “Strategic UX Research turns motion into meaning — and progress into impact.”
        </Subtitle>
      </div>
    </Section>
  );
}
