// src/components/sections/cv/CVIntroSection.tsx
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";

export default function CVIntroSection() {
  return (
    <Section id="cv-intro" title="About this CV" spacing="lg">
      <SectionIntro>
        A concise overview of my professional journey, skills, and education —
        highlighting how UX research, strategy, and leadership connect to
        create measurable impact in products and teams.
      </SectionIntro>
      <SectionIntro full>
        I combine a background in Human-Computer Interaction and organizational
        psychology with hands-on leadership in UX Research, enabling
        data-informed, human-centered decision making at scale.
      </SectionIntro>
    </Section>
  );
}
