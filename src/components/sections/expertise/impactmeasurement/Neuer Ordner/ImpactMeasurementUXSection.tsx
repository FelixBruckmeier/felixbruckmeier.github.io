import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import ImpactMeasurementStoryVisual from "@/components/sections/expertise/impactmeasurement/ImpactMeasurementStoryVisual";

export default function ImpactMeasurementUXSection() {
  return (
    <Section
      id="impact-ux"
      title="How I Measure and Communicate UX Impact"
      spacing="md"
      compact={false}
    >
      <SectionIntro className="max-w-3xl leading-relaxed text-lg mb-12">
        Measuring UX impact means making the value of design visible — beyond
        aesthetics or usability. The following narrative illustrates why UX
        performance often stays invisible, what McKinsey’s research reveals, and
        how I translate it into a measurable, pragmatic approach.
      </SectionIntro>

      <ImpactMeasurementStoryVisual />
    </Section>
  );
}
