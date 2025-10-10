import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Body, Subtitle } from "@/components/ui/Tokens";
import { colors, spacing, layout, typography } from "@/lib/tokens"; // ← ✅ typography hinzugefügt
import { cn } from "@/lib/utils";

// 🎨 Lokale Gruppenfarben (bewusst außerhalb des DS)
const groupColors = {
  Research: "text-blue-600",
  Design: "text-emerald-600",
  "Strategy & Management": "text-amber-600",
  Specialized: "text-purple-600",
};

// 📄 Gruppenbeschreibungen
const groupDescriptions = {
  Research:
    "Understanding users and contexts: discovering needs, validating hypotheses, and translating findings into evidence-based insights.",
  Design:
    "Designing and improving services, interfaces, and interactions that are consistent, usable, and human-centered.",
  "Strategy & Management":
    "Building structures, aligning UX with business goals, and scaling design maturity through leadership and clarity.",
  Specialized:
    "Specific expertise applied contextually — accessibility, content strategy, and technical implementation as key complements.",
};

// 🧱 Rollen-Daten
const roles = {
  Research: [
    {
      title: "UX Researcher",
      text: "Explores user needs, tests prototypes, and translates data into actionable insights for evidence-based product decisions.",
    },
    {
      title: "CX Analyst",
      text: "Measures and analyzes customer experience across touchpoints and drives improvements based on data.",
    },
  ],
  Design: [
    {
      title: "Service Designer",
      text: "Creates and refines services, builds service blueprints and journeys, and tests concepts with users.",
    },
    {
      title: "Interaction Designer",
      text: "Designs interactions between people and systems — defining flows, animations, and interface logic.",
    },
    {
      title: "UI / Visual Designer",
      text: "Responsible for visual design, layout, iconography, and brand consistency across digital products.",
    },
  ],
  "Strategy & Management": [
    {
      title: "UX Manager",
      text: "Organizes UX processes, manages teams, anchors UX strategies, and measures business impact.",
    },
    {
      title: "UX Strategist",
      text: "Connects business goals with UX, develops strategies and roadmaps, and advises stakeholders on management level.",
    },
    {
      title: "Journey Manager",
      text: "Makes user journeys transparent, identifies pain points, and connects teams to ensure seamless experiences.",
    },
    {
      title: "UX Architect",
      text: "Shapes the overall experience, establishes human-centered design processes, and mentors teams methodically.",
    },
    {
      title: "Requirements Engineer",
      text: "Collects and translates user needs into actionable backlog items and verifies delivery quality.",
    },
  ],
  Specialized: [
    {
      title: "Accessibility Specialist",
      text: "Makes products inclusive, tests accessibility, and supports teams in implementing accessible solutions.",
    },
    {
      title: "UX Writer",
      text: "Writes clear, human-centered content and develops content strategies across the user journey.",
    },
    {
      title: "UI Developer",
      text: "Implements interfaces technically, ensures responsiveness, accessibility, and front-end quality.",
    },
  ],
};

export default function TeamLeadershipRolesSection() {
  return (
    <Section id="leadership-roles" title="Roles & Versatility" spacing="xl">
      {/* Intro */}
      <SectionIntro>
        UX roles can often appear fuzzy — a “strategist” in one company may be
        a “research lead” in another. My leadership approach brings clarity by
        defining responsibilities, competencies, and collaboration patterns.
      </SectionIntro>

      {/* Grouped Role Cards */}
      <div className={cn(spacing.mt20, "space-y-20")}>
        {Object.entries(roles).map(([group, items]) => (
          <div key={group}>
            <h3
              className={cn(
                typography.subtitle.font,
                typography.subtitle.size,
                typography.subtitle.weight,
                typography.subtitle.leading,
                groupColors[group as keyof typeof groupColors],
                spacing.mb4
              )}
            >
              {group}
            </h3>

            <Body className={cn(colors.muted.text, "max-w-5xl", spacing.mb8)}>
              {groupDescriptions[group as keyof typeof groupDescriptions]}
            </Body>

            <div className={cn(layout.gridCols2, spacing.gap8)}>
              {items.map((r) => (
                <div
                  key={r.title}
                  className={cn(
                    colors.tile.bg,
                    colors.tile.text,
                    spacing.p8,
                    "rounded-2xl flex flex-col justify-start h-full"
                  )}
                >
                  <Subtitle>{r.title}</Subtitle>
                  <Body className={cn(colors.muted.text, spacing.mt2)}>
                    {r.text}
                  </Body>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
