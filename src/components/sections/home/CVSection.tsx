// src/components/sections/CVSection.tsx
import { Section } from "@/components/ui";
import CVPreview from "@/components/artefacts/CVPreview";
import { IntroText } from "@/components/ui/Tokens";

export default function CVSection() {
  return (
    <Section id="cv" title="CV snapshot" spacing="lg">
      <IntroText>A quick preview of my career journey.</IntroText>

      <CVPreview hideCTA /> {/* verhindert doppelte Links */}
    </Section>
  );
}
