// src/components/sections/expertise/impactmeasurement/ImpactMeasurementIntroSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import Tile from "@/components/ui/Tile";
import { Body, Subtitle } from "@/components/ui/Tokens";
import { cn } from "@/lib/utils";
import { colors, layout, spacing } from "@/lib/tokens";

/**
 * ImpactMeasurementIntroSection
 * ------------------------------
 * Storytelling-Einstieg + 3 Tiles (Awareness, Framework, Qualitative Impact)
 * Emoji-Icons im Stil der anderen Expertise-Sections
 */
export default function ImpactMeasurementIntroSection() {
  const tiles = [
    {
      icon: "👁️",
      title: "Building Awareness",
      text: "Making UX impact visible through simple cost-based calculations — e.g. quantifying savings from usability improvements.",
    },
    {
      icon: "📊",
      title: "Establishing a Framework",
      text: "Enabling continuous and systematic UX measurement using scalable models such as Google’s HEART framework.",
    },
    {
      icon: "📈",
      title: "Capturing Qualitative Impact",
      text: "Measuring the value of early discovery research through the Research Promoter Score (RPS) — making qualitative impact visible.",
    },
  ];

  return (
    <Section id="impact-intro" title="Impact Measurement" spacing="lg">
      {/* --- Storytelling Intro --- */}
      <SectionIntro className="max-w-3xl leading-relaxed text-lg">
        Many teams believe in UX but struggle to prove its impact. 
        When success isn’t visible, UX is easily deprioritized — or turns into what’s often called <strong>UX Theater</strong>.
      </SectionIntro>

      {/* --- Body Text --- */}
      <Body className={cn(colors.muted.text, spacing.mt6, "max-w-3xl")}>
        To prevent that, I help organizations make UX value tangible — 
        connecting user experience improvements to measurable business outcomes 
        and building structures that keep impact visible over time.
      </Body>

      {/* --- Three Tiles (with emoji icons) --- */}
      <div className={cn(layout.gridCols3, spacing.mt12, spacing.gap6)}>
        {tiles.map((tile, i) => (
          <Tile key={i} variant="static" className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <span>{tile.icon}</span>
              <Subtitle>{tile.title}</Subtitle>
            </div>
            <Body>{tile.text}</Body>
          </Tile>
        ))}
      </div>
    </Section>
  );
}
