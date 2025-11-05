import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { SectionHeading, Body } from "@/components/ui/Tokens";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import protoImg from "@/assets/images/projects/pricingtesting/protoype.png";

export default function PricingProcessSection() {
  return (
    <Section id="pricing-process" title="Approach & Testing Method" spacing="lg">
      <SectionIntro>
        We applied a semi-structured, task-based approach with hypotheses and open
        questions. The sessions were moderated and remote, combining summative and
        formative usability evaluation elements.
      </SectionIntro>

      <FadeIn delay={0.1}>
        <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-10 text-left">
          <div className="w-full md:w-1/2 space-y-4">
            <SectionHeading>Testing Setup</SectionHeading>
            <Body>
              Users were asked to complete tasks across multiple pricing components
              and share feedback on clarity, trust, and expectation fit. The prototype
              covered all relevant touchpoints — homepage, PLP, PDP, and cart.
            </Body>
            <Body>
              Participants: pet owners experienced in online shopping for pet
              supplies. The mix included new and returning customers across
              demographics.
            </Body>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={protoImg}
              alt="Prototype Overview"
              className="w-full max-w-3xl h-auto rounded-2xl shadow-md object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
