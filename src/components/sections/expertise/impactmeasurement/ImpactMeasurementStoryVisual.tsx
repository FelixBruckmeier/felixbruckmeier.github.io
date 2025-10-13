// src/components/sections/expertise/impactmeasurement/ImpactMeasurementStoryVisual.tsx
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { spacing, layout, typography } from "@/lib/tokens";
import { Body, Subtitle } from "@/components/ui/Tokens";

// Visuals
import UXKPIConstructionVisual from "@/assets/visuals/impactmeasurement/UXKPIConstructionVisual";
import McKinseyDesignIndexVisual from "@/assets/visuals/impactmeasurement/McKinseyDesignIndexVisual";
import MeasurementGapVisual from "@/assets/visuals/impactmeasurement/MeasurementGapVisual";

export default function ImpactMeasurementStoryVisual() {
  return (
    <div className={cn(layout.flexCol, spacing.blockGapLg, "space-y-32 md:space-y-40")}>
      {/* 1️⃣ Problem */}
      <StoryItem
        visual={<UXKPIConstructionVisual />}
        title="1️⃣ Problem – Why the value of UX often remains invisible"
        text={
          <>
            Many organizations prioritize short-term KPIs such as <strong>conversion</strong>,{" "}
            <strong>efficiency</strong>, or <strong>revenue</strong>. Long-term value drivers like{" "}
            <strong>trust</strong>, <strong>satisfaction</strong>, and <strong>loyalty</strong> are
            rarely tracked systematically.
            <br />
            <br />
            As a result, UX is often perceived as a soft discipline — disconnected from business
            impact. Leadership may acknowledge its importance, yet UX KPIs rarely influence
            decision-making. The outcome: investments flow toward quick wins instead of
            sustainable customer relationships.
          </>
        }
      />

      {/* 2️⃣ Evidence */}
      <StoryItem
        visual={<McKinseyDesignIndexVisual />}
        title="2️⃣ Evidence – What McKinsey proves"
        text={
          <>
            McKinsey’s{" "}
            <a
              href="https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20design/our%20insights/the%20business%20value%20of%20design/the-business-value-of-design-full-report.ashx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              <em>Business Value of Design</em>
            </a>{" "}
            study empirically shows that companies with <strong>high design maturity</strong>
            outperform competitors by up to <strong>32% in revenue growth</strong> and{" "}
            <strong>56% in shareholder returns</strong>.
            <br />
            <br />
            Key success factors include <strong>analytic leadership</strong>,{" "}
            <strong>cross-functional collaboration</strong>, <strong>continuous learning</strong>,
            and a strong <strong>focus on user value</strong>. Still, translating design maturity
            into monetary metrics is challenging in many organizations.
          </>
        }
      />

      {/* 3️⃣ Challenge */}
      <StoryItem
        visual={<MeasurementGapVisual />}
        title="3️⃣ Challenge – Why measuring UX remains difficult"
        text={
          <>
            Measuring UX is inherently complex. Unlike sales or conversion rates, UX outcomes are{" "}
            <strong>indirect</strong> — a combination of <strong>quantitative</strong> and{" "}
            <strong>qualitative</strong> signals such as satisfaction, trust, and ease-of-use.
            <br />
            <br />
            Even when teams collect data, those signals live in different units: NPS, completion
            time, perceived confidence, etc. To act on them, organizations must{" "}
            <strong>normalize and translate</strong> those signals into a unified performance
            metric — a process that requires analytics, governance, and time.
            <br />
            <br />
            Frameworks like Google’s <strong>HEART model</strong> are suitable tools for this
            translation, but adopting them requires organizational maturity and leadership buy-in.
          </>
        }
      />

      {/* 4️⃣ Solution (integrated, full worked examples in English) */}
      <StoryItem
        title="4️⃣ Solution – My pragmatic approach"
        text={
          <>
            When a full measurement system is not yet in place — or leadership needs a clear,
            fundable argument — I make UX impact visible using simple financial logic. This
            pragmatic route complements later, more complete frameworks.
            <br />
            <br />
            <strong>Example 1 — CLTV impact through UX optimization</strong>
            <br />
            Assume — as McKinsey suggests — that roughly <strong>32% of customers</strong> do not
            return after a bad experience. With a user base of <strong>3.2 million</strong> and an
            average <strong>CLTV of €30</strong>, the potential annual revenue at risk is:
            <br />
            <br />
            <em>3,200,000 × 0.32 × €30 = €30,720,000</em>
            <br />
            <br />
            If targeted UX work can retain just <strong>10% of these at-risk customers</strong>, the
            recovered revenue would be:
            <br />
            <br />
            <em>€30,720,000 × 0.10 = €3,072,000</em>
            <br />
            <br />
            In short: a modest UX effect (10% retention of the at-risk cohort) yields over{" "}
            <strong>€3M per year</strong> — and that is before considering any marketing or sales
            costs.
            <br />
            <br />
            <strong>Example 2 — Usability improvement → efficiency gains</strong>
            <br />
            Consider an internal task that currently takes <strong>5m30s</strong> and is executed by{" "}
            <strong>400 employees</strong> on average <strong>3 times per day</strong>. After a UX
            redesign the task takes <strong>2m15s</strong>, saving <strong>3m15s</strong> per run.
            Annual saved time:
            <br />
            <br />
            <em>3.25 minutes × 3 × 400 employees × 220 workdays = 856,800 minutes</em>
            <br />
            ≈ <strong>14,280 hours / year</strong>
            <br />
            <br />
            At an average internal rate of <strong>€40 / hour</strong> this equals:
            <br />
            <br />
            <em>14,280 × €40 = €571,200</em>
            <br />
            <br />
            These two short, transparent calculations create fundable business cases that make UX
            a visible lever while the organization builds a comprehensive measurement system like
            HEART.
          </>
        }
      />
    </div>
  );
}

// ========================================
// 🎞️ StoryItem Component (Visual left / Text right)
// ========================================
const StoryItem = ({
  visual,
  title,
  text,
}: {
  visual?: React.ReactNode | null;
  title: string;
  text: React.ReactNode;
}) => (
  <motion.div
    className={cn("grid md:grid-cols-[1.2fr_1fr] gap-16 md:gap-24 items-center")}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.3 },
      },
    }}
  >
    {/* Left: Visual (optional) */}
    {visual && (
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
        }}
      >
        {visual}
      </motion.div>
    )}

    {/* Right: Text */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.2 },
        },
      }}
      className={cn(!visual && "md:col-span-2")}
    >
      <Subtitle className="mb-5">{title}</Subtitle>
      <Body className={cn(typography.body.size, typography.body.leading, spacing.stackLg)}>
        {text}
      </Body>
    </motion.div>
  </motion.div>
);
