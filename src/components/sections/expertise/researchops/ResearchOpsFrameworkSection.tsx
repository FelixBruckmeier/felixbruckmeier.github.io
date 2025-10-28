import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import ReOpsWheel from "@/assets/visuals/researchops/ReOpsWheel";

/**
 * ResearchOps Framework Section
 * 100% DS-conform — relies fully on DS tokens
 */
export default function ResearchOpsFrameworkSection() {
  const tiles = [
    {
      title: "Governance & Standards",
      text: "I define clear processes, templates, and ethical guidelines that ensure quality and consistency across studies.",
    },
    {
      title: "Knowledge Management",
      text: "I build living research repositories that make insights discoverable and reusable across teams and projects.",
    },
    {
      title: "Participant Experience",
      text: "I design participant pipelines and consent flows that are respectful, compliant, and efficient.",
    },
    {
      title: "Tools & Infrastructure",
      text: "I evaluate, implement, and connect the right tools — from survey platforms to analysis systems.",
    },
    {
      title: "Enablement & Training",
      text: "I create playbooks, onboarding, and learning resources that empower everyone to do better research.",
    },
    {
      title: "Culture & Advocacy",
      text: "I help leaders and teams see research as a strategic asset — not a service. Visibility creates value.",
    },
  ];

  return (
    <Section id="reops-framework" title="My Approach to ResearchOps" spacing="lg">
      <SectionIntro>
        I help organizations design ResearchOps systems that free researchers from operational
        friction and connect insights directly to business impact.
      </SectionIntro>

      {/* Centered wheel */}
      <div className={cn("flex justify-center", spacing.mt10, spacing.mb12)}>
        <div className="w-full max-w-5xl">
          <ReOpsWheel />
        </div>
      </div>

      {/* DS Tiles */}
      <div className={cn(layout.gridCols3, spacing.gap8, spacing.mt12)}>
        {tiles.map((item) => (
          <Tile key={item.title} variant="static" className="rounded-2xl">
            <Subtitle>{item.title}</Subtitle>
            <Body>{item.text}</Body>
          </Tile>
        ))}
      </div>
    </Section>
  );
}
