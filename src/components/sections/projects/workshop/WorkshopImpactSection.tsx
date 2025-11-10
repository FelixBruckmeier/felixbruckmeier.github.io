// src/components/sections/projects/workshop/WorkshopImpactSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";

export default function WorkshopImpactSection() {
  return (
    <Section
      id="workshop-impact"
      title="From shared understanding to actionable outcomes"
      spacing="lg"
    >
      <SectionIntro>
        <p>
          The workshop not only produced a prioritized list of concrete initiatives
          but also strengthened collaboration and commitment within the UX Design team.
          Participants gained a deeper understanding of UX Research challenges,
          took ownership of solutions, and aligned around a shared maturity vision.
        </p>
      </SectionIntro>

      <ul className="mt-8 space-y-3 text-base text-muted-foreground list-disc list-inside">
        <li>
          Established a shared understanding of UX Research challenges and maturity gaps
        </li>
        <li>Defined and prioritized actionable goals and initiatives</li>
        <li>Strengthened collaboration, communication, and team ownership</li>
        <li>Created a roadmap for implementing ResearchOps improvements</li>
        <li>Set the foundation for sustained UX Research Maturity growth</li>
      </ul>
    </Section>
  );
}
