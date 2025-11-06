// src/components/sections/strategicuxresearch/StrategicUXRITESection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import Tile from "@/components/ui/Tile";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import RITECycleChart from "@/assets/visuals/strategicuxresearch/RITECycleChart";

/**
 * Section: Rapid Iterative Testing & Evaluation (RITE)
 * DS-konform — einheitliche Typografie, Spacing, Icons und Tile-Struktur
 */
export default function StrategicUXRITESection() {
  const tiles = [
    {
      icon: "⚡",
      title: "Speed – Iterating Immediately",
      text: "Design changes are applied immediately — minimizing time between discovery and validation.",
    },
    {
      icon: "🤝",
      title: "Collaboration – Shared Observation",
      text: "Researchers, designers, and developers observe together — fostering shared understanding and faster iteration.",
    },
    {
      icon: "💡",
      title: "Learning – Continuous Discovery",
      text: "Each round builds insight and confidence, turning testing into a continuous learning process.",
    },
    {
      icon: "🚀",
      title: "Impact – Early Resolution",
      text: "Usability issues are solved early, saving up to 60% of design and development time.",
    },
    {
      icon: "🔄",
      title: "Adaptability – Real-Time Feedback",
      text: "Works even with incomplete requirements — feedback uncovers new needs early and reduces change requests.",
    },
    {
      icon: "📣",
      title: "Advocacy – Visible Research",
      text: "Visible, team-based testing promotes UX awareness and strengthens research credibility across the organization.",
    },
  ];

  return (
    <Section id="rite" title="Rapid Iterative Testing & Evaluation (RITE)" spacing="lg">
      <SectionIntro>
        <strong>RITE</strong> is a pragmatic approach to usability testing that blends speed with
        learning — making it particularly well-suited for Agile UX environments.
        Instead of waiting until a study ends, teams iterate as soon as issues appear — often after
        just a few participants. Each round feeds directly into the next, turning research into a
        fast cycle of discovery, design, and validation.
        <div className={spacing.mt6}></div>
        In the context of Strategic UX Research, RITE operationalizes UX Strategy: it transforms
        research from isolated checkpoints into a living feedback loop. This approach brings the
        strategic principle of continuous learning to life — bridging the gap between discovery and
        delivery through shared understanding and real-time improvement.
      </SectionIntro>

      {/* --- Animated RITE Cycle --- */}
      <div className={cn("flex justify-center w-full", spacing.mt16, spacing.mb16)}>
        <div className="w-full max-w-4xl flex justify-center">
          <RITECycleChart />
        </div>
      </div>

      {/* --- Key Benefits --- */}
      <Subtitle>Key Benefits</Subtitle>

      <div className={cn(layout.gridCols3, spacing.gap6, spacing.mt12)}>
        {tiles.map((item) => (
          <Tile key={item.title} variant="static" className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <span>{item.icon}</span>
              <Subtitle>{item.title}</Subtitle>
            </div>
            <Body className="leading-relaxed">{item.text}</Body>
          </Tile>
        ))}
      </div>

      {/* --- Critical Reflection --- */}
      <div className={cn(spacing.mt16)}>
        <Subtitle>Critical Reflection</Subtitle>
        <Body>
          RITE isn’t meant to deliver perfect data; it’s meant to drive progress. In areas like
          healthcare, safety-critical systems, or regulated industries, strict methodological
          control is essential — and RITE wouldn’t be the right choice. But in many organizations,
          especially where UX Research is still evolving, it’s often more valuable to encourage
          participation, curiosity, and shared ownership than to insist on perfection.
          <br />
          <br />
          In my own RITE practice, I often mix and match fast methods — hallway or guerrilla
          testing, AI-based eye-tracking analysis, expert reviews, and more — sometimes even running
          them in parallel. This keeps the process quick and adaptive, while still ensuring that
          insights stay grounded in real user behavior.
          <br />
          <br />
          Putting too much emphasis on rigor too early can make UX Research seem theoretical or
          rigid. Used with awareness, RITE helps strike the right balance between learning fast and
          learning well.
        </Body>
      </div>
    </Section>
  );
}
