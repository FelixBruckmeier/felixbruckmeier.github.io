import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import ResearchInPD from "@/assets/visuals/uxstrategy/ResearchinPD";

/**
 * Section: From Discovery to Delivery
 * Storytelling-Version mit Refinement Funnel Erklärung
 */
export default function DiscoveryDelivery() {
  return (
    <Section
      id="discovery-delivery"
      title="2. From Discovery to Delivery — Turning UX Research into a Continuous, Structured Practice"
      spacing="lg"
    >
      <SectionIntro>
        User-centered development is not a static process — it’s a{" "}
        <strong>continuous cycle of learning</strong>.
        Questions, ideas, and assumptions constantly emerge from business goals,
        design sprints, analytics dashboards, and user feedback. Without structure,
        these inputs compete for attention, and the connection between research,
        design, and data begins to fragment.
        <br />
        <br />
        That’s why I designed the{" "}
        <strong>UX Research Refinement Funnel</strong> — a framework to{" "}
        <strong>turn demand into direction</strong>.
      </SectionIntro>

      <div className={cn("w-full flex justify-center", spacing.mt12, spacing.mb16)}>
        <div className="w-full max-w-6xl">
          <ResearchInPD />
        </div>
      </div>

      <SectionIntro>
        New opportunities, hypotheses, and signals from ongoing{" "}
        <strong>User Research</strong>, <strong>Lean UX</strong>, and{" "}
        <strong>Data Analytics</strong> flow into a shared funnel. There, they’re
        refined, prioritized, and guided into the right process stream:
        <br />
        <br />
        <ul className="list-disc list-inside">
          <li>
            <strong>Discovery → User Research:</strong> exploring user needs, pain
            points, and early concepts.
          </li>
          <li>
            <strong>Prototyping → Lean UX:</strong> designing, testing, and iterating
            solutions in short, agile cycles.
          </li>
          <li>
            <strong>Optimization → Data Analytics:</strong> validating live
            performance and uncovering next improvement opportunities.
          </li>
        </ul>
        <br />
        Each stream connects back into the others, creating a{" "}
        <strong>continuous loop of learning</strong>, where insights feed progress —
        and progress generates new questions.
        <br />
        <br />
        But building such a system isn’t a solo effort.
        I see it as a <strong>team exercise</strong> — bringing researchers, designers,
        product managers, and analysts together to establish a shared rhythm of
        learning. My role as a <strong>UX Researcher</strong> is to{" "}
        <strong>enable teams</strong> to structure their work this way: to connect
        discovery with delivery, to integrate UX into agile practice, and to make
        sure that evidence and empathy drive every product decision.
      </SectionIntro>
    </Section>
  );
}
