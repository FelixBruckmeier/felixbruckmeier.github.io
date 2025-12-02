// src/components/sections/cv/CVIntroSection.tsx

import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import type { FC } from "react";

const introParagraphs = [
  {
    content:
      "A concise overview of my professional journey, skills, and education — highlighting how UX research, strategy, and leadership connect to create measurable impact in products and teams.",
  },
  {
    content:
      "I combine a background in Human-Computer Interaction and economics with hands-on leadership in UX Research, enabling data-informed, human-centered decision making at scale.",
    full: true,
  },
];

const CVIntroSection: FC = () => {
  return (
    <Section id="cv-intro" title="About this CV" spacing="lg">
      {introParagraphs.map(({ content, full }, index) => (
        <SectionIntro key={index} full={full}>
          {content}
        </SectionIntro>
      ))}
    </Section>
  );
};

export default CVIntroSection;
