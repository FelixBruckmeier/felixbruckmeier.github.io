// src/components/sections/expertise/impactmeasurement/PragmaticApproachSection.tsx

import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { Body, Subtitle } from "@/components/ui/Tokens";
import { cn } from "@/lib/utils";
import { spacing, typography } from "@/lib/tokens";
import { motion } from "framer-motion";

export default function PragmaticApproachSection() {
  return (
    <Section id="pragmatic-approach" title="My Pragmatic Approach to This Problem" spacing="lg">
      <SectionIntro>
        When a full measurement system is not yet in place — or leadership needs a clear,
        fundable argument — I make UX impact visible using simple financial logic.
        This pragmatic route complements later, more complete frameworks.
      </SectionIntro>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.33, 1.02, 0.68, 1] }}
        className={cn("space-y-16", spacing.mt12)}
      >
        {/* Example 1 */}
        <div>
          <Subtitle className="mb-3">Example 1 – CLTV Impact through UX Optimization</Subtitle>
          <Body className="text-muted-foreground">
            Assuming — as McKinsey shows — that around <strong>32 % of customers</strong> do not
            return after a bad experience, poor UX has a measurable price. With a user base of
            <strong> 3.2 million</strong> and an average
            <strong> Customer Lifetime Value of €30</strong>, the potential annual revenue at risk is
            significant. Retaining just <strong>10 % of these customers</strong> through better UX
            already adds about <strong>€10 million per year</strong>.
          </Body>
        </div>

        {/* Example 2 */}
        <div>
          <Subtitle className="mb-3">Example 2 – Usability Improvement and Efficiency Gains</Subtitle>
          <Body className="text-muted-foreground">
            Similar effects occur in internal processes. Fixing a
            <strong> usability issue in an internal tool</strong> can cut task time from
            <strong> 5 min 30 sec to 2 min 15 sec</strong>. Across thousands of tasks monthly, that
            translates into major <strong>time and cost savings</strong>, directly reflected in
            <strong> lower personnel costs and higher productivity</strong>.
          </Body>
        </div>
      </motion.div>
    </Section>
  );
}
