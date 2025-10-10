import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

/**
 * Section: The Value of UX Strategy
 * DS-konform mit zentralem Farbmanagement
 */
export default function ValueOfUXStrategy() {
  return (
    <Section id="value" title="The Value of UX Strategy" spacing="lg" fullWidth>
      {/* --- Storytelling Intro --- */}
      <SectionIntro>
        In today’s product culture, speed often replaces clarity.
        Teams ship fast — but rarely stop to ask whether they’re moving in the right direction.
        <br />
        <br />
        <strong>UX Strategy</strong> reframes development around learning and alignment instead of
        output — helping organizations make decisions with purpose, not just momentum.
        It turns design and research into a shared language for confident, evidence-based progress.
      </SectionIntro>

      {/* --- Value Tiles --- */}
      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt12)}>
        {[
          {
            title: "Alignment",
            text: "Every strategic decision connects business goals, user needs, and design intent — creating shared direction across teams.",
          },
          {
            title: "Impact",
            text: "Insights and frameworks guide priorities at every level — ensuring that effort turns into meaningful business and user outcomes.",
          },
          {
            title: "Confidence",
            text: "Stakeholders trust UX because it delivers measurable value and supports decisions with clarity and evidence.",
          },
        ].map((item) => (
          <Tile
            key={item.title}
            variant="static"
            className={cn(
              spacing.p6,
              "flex flex-col justify-start text-left rounded-2xl shadow-sm"
            )}
          >
            {/* Subtitles und Body greifen automatisch auf Tokens zu */}
            <Subtitle className={spacing.mb2}>{item.title}</Subtitle>
            <Body className="leading-relaxed">{item.text}</Body>
          </Tile>
        ))}
      </div>

      {/* --- Closing Quote --- */}
      <div className={cn("text-center", spacing.mt12)}>
        <Subtitle className="italic">
          “UX Strategy turns motion into meaning — and progress into impact.”
        </Subtitle>
      </div>
    </Section>
  );
}
