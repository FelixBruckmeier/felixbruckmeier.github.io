/* eslint-disable react/no-unknown-property */
import { reopsColors } from "@/lib/tokens";

export type Area = {
  name: string;
  description: string;
  recommendation: string;
  color: string;
};

export type Stage = {
  level: "Foundational" | "Emerging" | "Integrated" | "Optimized";
  label: string;
  description: string;
  areas: Area[];
};

export const stages: Stage[] = [
  {
    level: "Foundational",
    label: "Stage 1",
    description:
      "At the Foundational stage, research is fragmented and ad-hoc. There are few roles, responsibilities, or consistent processes. Risks arise from the lack of governance, structure, and shared visibility.",
    areas: [
      {
        name: "Governance & Standards",
        description:
          "There are no consistent standards for ethics, privacy, or consent. Research is conducted without clear rules, which increases legal risks and reduces stakeholder trust.",
        recommendation:
          "Start small: create lightweight consent and privacy templates, define basic responsibilities, and raise awareness for ethical research. Small standards build trust and clarity.",
        color: reopsColors.governance,
      },
      {
        name: "People & Roles",
        description:
          "Research is driven by individuals. There’s no community, no onboarding, and limited shared knowledge. Work depends heavily on single experts.",
        recommendation:
          "Establish onboarding materials and small community formats like Lunch & Learn or internal meetups. The goal is to create a foundation for shared learning and collaboration.",
        color: reopsColors.knowledge,
      },
      {
        name: "Knowledge Management",
        description:
          "Insights are scattered across decks, docs, and personal drives. Findings are hard to find, disconnected, and rarely reused — knowledge gets lost quickly.",
        recommendation:
          "Create a single source of truth — even a simple shared folder or wiki. Ensure research is findable, documented, and accessible. That’s the first step toward reuse.",
        color: reopsColors.participant,
      },
      {
        name: "Tools & Infrastructure",
        description:
          "Teams use different tools, often with redundant licenses and no integration. This leads to inefficiency and higher costs.",
        recommendation:
          "Consolidate core tools and provide shared access. Centralize licenses to reduce costs and enable collaboration across teams.",
        color: reopsColors.tools,
      },
      {
        name: "Enablement & Training",
        description:
          "Processes are undocumented and inconsistent. There’s little shared understanding of what good research looks like.",
        recommendation:
          "Document a few repeatable workflows for recruiting, consent, or reporting. Consistency builds quality and trust.",
        color: reopsColors.enablement,
      },
      {
        name: "Culture & Advocacy",
        description:
          "Research has little visibility or influence. Stakeholders see it as tactical or optional rather than strategic.",
        recommendation:
          "Start showing value early — share small but concrete wins. Visibility is the first step toward credibility.",
        color: reopsColors.culture,
      },
    ],
  },
  {
    level: "Emerging",
    label: "Stage 2",
    description:
      "At the Emerging stage, research gains visibility. Roles and basic standards appear, and tools become more consistent. Research starts to influence — but not yet scale.",
    areas: [
      {
        name: "Governance & Standards",
        description:
          "Initial policies and ownership appear. Privacy and ethics are considered but not yet standardized.",
        recommendation:
          "Document existing policies and make them part of daily work. Assign clear ownership for governance — consistent accountability reduces risks.",
        color: reopsColors.governance,
      },
      {
        name: "People & Roles",
        description:
          "Communities of practice form, and training emerges. Roles are clearer, but learning remains optional.",
        recommendation:
          "Establish mentoring and promote UX literacy across functions. Broader research fluency reduces dependency on single experts.",
        color: reopsColors.knowledge,
      },
      {
        name: "Knowledge Management",
        description:
          "Repositories appear, giving partial visibility into insights. Structure and taxonomy are inconsistent.",
        recommendation:
          "Introduce metadata standards and tagging to improve findability. A repository must enable reuse, not just storage.",
        color: reopsColors.participant,
      },
      {
        name: "Tools & Infrastructure",
        description:
          "Shared tools are emerging, but integrations are missing — silos persist.",
        recommendation:
          "Define tool governance, security standards, and start integrating platforms to streamline research workflows.",
        color: reopsColors.tools,
      },
      {
        name: "Enablement & Training",
        description:
          "Researchers start collaborating and sharing methods, but operational guidance is still informal.",
        recommendation:
          "Create basic playbooks and operational templates for recurring tasks. Scale what works across teams.",
        color: reopsColors.enablement,
      },
      {
        name: "Culture & Advocacy",
        description:
          "Research becomes visible and starts connecting with business outcomes, but buy-in varies across departments.",
        recommendation:
          "Host research readouts and align findings to product or marketing KPIs. Relevance drives adoption.",
        color: reopsColors.culture,
      },
    ],
  },
  {
    level: "Integrated",
    label: "Stage 3",
    description:
      "At the Integrated stage, research is recognized as a strategic capability. Roles, tools, and processes are standardized across teams, creating efficiency and impact.",
    areas: [
      {
        name: "Governance & Standards",
        description:
          "Policies and ethical standards are well-defined and actively applied across teams.",
        recommendation:
          "Implement continuous improvement loops and audits to keep governance evolving with the organization.",
        color: reopsColors.governance,
      },
      {
        name: "People & Roles",
        description:
          "Clear career paths and ongoing development programs exist. Researchers are embedded in cross-functional teams.",
        recommendation:
          "Introduce certification and leadership programs to strengthen engagement and long-term growth.",
        color: reopsColors.knowledge,
      },
      {
        name: "Knowledge Management",
        description:
          "Centralized repositories are used daily. Insights are reused across teams and directly inform product and business decisions.",
        recommendation:
          "Automate tagging, reporting, and distribution of insights. Connect knowledge systems to product roadmaps.",
        color: reopsColors.participant,
      },
      {
        name: "Tools & Infrastructure",
        description:
          "Central toolchains are integrated and secure. Workflows are efficient and collaborative.",
        recommendation:
          "Evaluate scalability and new technologies regularly to maintain a future-proof tool ecosystem.",
        color: reopsColors.tools,
      },
      {
        name: "Enablement & Training",
        description:
          "Training and onboarding are structured and inclusive. ResearchOps roles support all teams.",
        recommendation:
          "Evolve enablement into continuous learning — shared documentation, advanced tool training, and data literacy.",
        color: reopsColors.enablement,
      },
      {
        name: "Culture & Advocacy",
        description:
          "Research is part of roadmaps and OKRs. Cross-functional collaboration is natural.",
        recommendation:
          "Embed research into strategy discussions and quarterly reviews. This cements its value at leadership level.",
        color: reopsColors.culture,
      },
    ],
  },
  {
    level: "Optimized",
    label: "Stage 4",
    description:
      "At the Optimized stage, research is fully embedded, continuously improved, and drives competitive advantage. ResearchOps is proactive and visionary.",
    areas: [
      {
        name: "Governance & Standards",
        description:
          "Governance is part of company culture. Standards evolve through active feedback and benchmarking.",
        recommendation:
          "Use peer reviews and external benchmarks to ensure governance remains adaptive and innovative.",
        color: reopsColors.governance,
      },
      {
        name: "People & Roles",
        description:
          "A strong, distributed research community exists. Leadership in research is visible internally and externally.",
        recommendation:
          "Promote thought leadership and external speaking opportunities to elevate credibility and attract talent.",
        color: reopsColors.knowledge,
      },
      {
        name: "Knowledge Management",
        description:
          "Repositories integrate predictive analytics and AI for trend detection and proactive decision support.",
        recommendation:
          "Leverage automation and data modeling to forecast user needs and influence long-term strategy.",
        color: reopsColors.participant,
      },
      {
        name: "Tools & Infrastructure",
        description:
          "Toolchains are global, automated, and adaptive. Efficiency and reliability are maximized.",
        recommendation:
          "Continuously pilot emerging technologies to ensure flexibility and innovation readiness.",
        color: reopsColors.tools,
      },
      {
        name: "Enablement & Training",
        description:
          "Learning is continuous, embedded in daily work, and supported by Ops leadership.",
        recommendation:
          "Establish global knowledge-sharing programs and rotational Ops roles to sustain expertise.",
        color: reopsColors.enablement,
      },
      {
        name: "Culture & Advocacy",
        description:
          "Research is a strategic driver for innovation and differentiation. The organization is insight-led by design.",
        recommendation:
          "Celebrate research impact widely — through stories, dashboards, and executive alignment. Culture is the flywheel.",
        color: reopsColors.culture,
      },
    ],
  },
];

