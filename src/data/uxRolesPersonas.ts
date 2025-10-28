// src/data/uxRolesPersonas.ts

// ✅ Import images for all roles
import accessibilityspecialist from "@/assets/images/expertise/teamleadership/personas/accessibilityspecialist.png";
import cxanalyst from "@/assets/images/expertise/teamleadership/personas/cxanalyst.png";
import designmanager from "@/assets/images/expertise/teamleadership/personas/designmanager.png";
import journeymanager from "@/assets/images/expertise/teamleadership/personas/journeymanager.png";
import requirementsengineer from "@/assets/images/expertise/teamleadership/personas/requirementsengineer.png";
import servicedesigner from "@/assets/images/expertise/teamleadership/personas/servicedesigner.png";
import uideveloper from "@/assets/images/expertise/teamleadership/personas/uideveloper.png";
import uivisualdesigner from "@/assets/images/expertise/teamleadership/personas/uivisualdesigner.png";
import uxarchitect from "@/assets/images/expertise/teamleadership/personas/uxarchitect.png";
import uxdesigner from "@/assets/images/expertise/teamleadership/personas/uxdesigner.png";
import uxmanager from "@/assets/images/expertise/teamleadership/personas/uxmanager.png";
import uxresearcher from "@/assets/images/expertise/teamleadership/personas/uxresearcher.png";
import uxstrategist from "@/assets/images/expertise/teamleadership/personas/uxstrategist.png";
import uxwriter from "@/assets/images/expertise/teamleadership/personas/uxwriter.png";
import interactiondesigner from "@/assets/images/expertise/teamleadership/personas/interactiondesigner.png";



export const UX_ROLES_PERSONAS = {
  AccessibilitySpecialist: {
    id: "AccessibilitySpecialist",
    name: "Ava Reach",
    role: "Accessibility Specialist",
    imgSrc: accessibilityspecialist,
    quote:
      "Accessibility is not an add-on — it’s the foundation of inclusive design.",
    description:
      "Ensures digital products are accessible and usable for all users, particularly those with disabilities. Translates accessibility standards into actionable design and development practices.",
    skills: [
      "Accessibility Testing (WCAG, EN 301 549)",
      "Assistive Technology Expertise",
      "Inclusive Design",
      "Collaboration with Developers",
    ],
    responsibilities: [
      "Assess accessibility of digital products",
      "Support teams in implementing accessible solutions",
      "Train colleagues on accessibility best practices",
      "Advocate inclusion and awareness company-wide",
    ],
    needs:
      "Early involvement in product discussions to ensure accessibility is considered from the start. Requires clear internal standards and collaboration between design, dev, and QA teams.",
    painPoints:
      "Accessibility often treated as a late-stage fix or low priority. Lacks structured processes and tools for continuous accessibility testing.",
    challenges:
      "Scaling accessibility knowledge across large teams and ensuring design systems evolve with accessibility in mind.",
  },

  CXAnalyst: {
    id: "CXAnalyst",
    name: "Noah Trace",
    role: "CX Analyst",
    imgSrc: cxanalyst,
    quote:
      "Every metric tells a story — my job is to turn data into empathy and action.",
    description:
      "Measures and analyzes customer experiences across touchpoints to identify friction and improvement opportunities. Bridges qualitative and quantitative signals to build holistic understanding.",
    skills: [
      "Data Analysis & Visualization",
      "Customer Journey Measurement",
      "Survey Design & NPS",
      "Cross-Department Collaboration",
    ],
    responsibilities: [
      "Collect and analyze feedback from touchpoints",
      "Identify experience gaps and opportunities",
      "Develop dashboards and CX metrics",
      "Collaborate with Journey Managers and UX teams",
    ],
    needs:
      "Reliable access to customer data and consistent KPI definitions across teams. Seeks early collaboration with product managers to connect insights to strategy.",
    painPoints:
      "Fragmented data ownership and siloed tools make it hard to form a complete view. Insights often underutilized due to unclear accountability.",
    challenges:
      "Translating data findings into prioritized actions that resonate with both business and design teams.",
  },

  DesignManager: {
    id: "DesignManager",
    name: "Clara Guide",
    role: "Design Manager",
    imgSrc: designmanager,
    quote:
      "Good design leadership means creating the conditions for others to succeed.",
    description:
      "Leads and develops design teams, ensuring design quality, process maturity, and alignment with business strategy. Balances creative freedom with consistency and execution.",
    skills: [
      "Design Strategy & Leadership",
      "Process Management",
      "Team Coaching & Mentoring",
      "Stakeholder Management",
    ],
    responsibilities: [
      "Coordinate design activities across teams",
      "Develop design strategies and guidelines",
      "Ensure consistency across products and channels",
      "Mentor designers and foster creative excellence",
    ],
    needs:
      "Strong executive sponsorship for design strategy and the autonomy to shape processes. Needs structured career paths to retain and grow design talent.",
    painPoints:
      "Pressure to deliver short-term results can limit focus on long-term design quality. Struggles with uneven stakeholder understanding of design value.",
    challenges:
      "Maintaining consistency and morale in distributed teams while scaling impact across multiple initiatives.",
  },

  InteractionDesigner: {
    id: "InteractionDesigner",
    name: "Theo Flux",
    role: "Interaction Designer",
    imgSrc: interactiondesigner,
    quote:
      "Interaction design is the art of making technology feel natural and effortless.",
    description:
      "Designs digital interactions that make complex systems intuitive. Translates user flows and mental models into smooth, meaningful interactions that enhance usability.",
    skills: [
      "Information Architecture",
      "Interaction Patterns & Animation",
      "Prototyping & Wireframing",
      "Usability Testing",
    ],
    responsibilities: [
      "Create user flows and interaction concepts",
      "Collaborate with designers and developers",
      "Ensure intuitive, accessible interactions",
      "Validate designs through testing and iteration",
    ],
    needs:
      "Clear problem framing and early exposure to user research insights. Benefits from cross-functional critique and shared design standards.",
    painPoints:
      "Ambiguous requirements and limited time for iteration reduce design depth. Handoff between design and dev often introduces inconsistencies.",
    challenges:
      "Maintaining innovation within structured design systems and ensuring transitions feel seamless across contexts.",
  },

  JourneyManager: {
    id: "JourneyManager",
    name: "Mara Path",
    role: "Journey Manager",
    imgSrc: journeymanager,
    quote:
      "A journey is only as strong as its weakest touchpoint — that’s where improvement begins.",
    description:
      "Connects data, research, and operations to visualize and improve end-to-end user and customer journeys. Advocates cross-team accountability for experience outcomes.",
    skills: [
      "Journey Mapping & Blueprinting",
      "Cross-Team Facilitation",
      "Process Analysis",
      "CX Measurement",
    ],
    responsibilities: [
      "Visualize and manage journeys across touchpoints",
      "Identify friction and improvement opportunities",
      "Align stakeholders on journey priorities",
      "Monitor journey metrics and satisfaction levels",
    ],
    needs:
      "Access to unified CX data and sponsorship to coordinate improvements across silos. Requires collaboration with product, service, and analytics teams.",
    painPoints:
      "Journey ownership often fragmented, making systemic improvements difficult. Limited visibility into post-launch results.",
    challenges:
      "Maintaining journey alignment when teams focus narrowly on local KPIs rather than shared experience outcomes.",
  },

  RequirementsEngineer: {
    id: "RequirementsEngineer",
    name: "Elias Logic",
    role: "Requirements Engineer",
    imgSrc: requirementsengineer,
    quote:
      "Clarity is my currency — I make sure user needs become actionable requirements.",
    description:
      "Bridges product vision, user goals, and technical feasibility. Creates transparent documentation that drives shared understanding and effective prioritization.",
    skills: [
      "Requirements Specification (UML, BPMN)",
      "Stakeholder Management",
      "Documentation & Transparency",
      "Backlog Management",
    ],
    responsibilities: [
      "Gather and specify requirements from stakeholders",
      "Translate research insights into user stories",
      "Support backlog prioritization and validation",
      "Ensure traceability from need to implementation",
    ],
    needs:
      "Direct collaboration with UX researchers to translate insights accurately. Needs a clear feedback loop between requirements and delivered outcomes.",
    painPoints:
      "Frequent changes to business priorities disrupt requirements clarity. Documentation often deprioritized under delivery pressure.",
    challenges:
      "Maintaining alignment between evolving user needs and rapidly changing technical roadmaps.",
  },

  ServiceDesigner: {
    id: "ServiceDesigner",
    name: "Elise Bridge",
    role: "Service Designer",
    imgSrc: servicedesigner,
    quote:
      "Designing services means designing relationships — between people, systems, and value.",
    description:
      "Improves how people experience services by aligning frontstage and backstage processes. Ensures coherent experiences across digital and human touchpoints.",
    skills: [
      "Service Blueprinting",
      "Journey Mapping",
      "Prototyping & Testing",
      "Workshop Facilitation",
    ],
    responsibilities: [
      "Analyze user needs and service processes",
      "Develop service concepts and blueprints",
      "Test and iterate service improvements",
      "Facilitate collaboration across departments",
    ],
    needs:
      "Visibility into internal processes and data to connect touchpoints effectively. Needs leadership support to address cross-departmental friction.",
    painPoints:
      "Service ownership often unclear, slowing implementation of improvements. Limited understanding of service design in product-focused teams.",
    challenges:
      "Turning holistic service concepts into tangible, actionable changes in complex organizations.",
  },

  VisualDesigner: {
    id: "VisualDesigner",
    name: "Fiona Hue",
    role: "UI / Visual Designer",
    imgSrc: uivisualdesigner,
    quote:
      "Visual design isn’t decoration — it’s storytelling through color, type, and rhythm.",
    description:
      "Shapes visual systems and interfaces that communicate clearly and feel consistent across platforms. Blends aesthetic craft with functional clarity.",
    skills: [
      "Visual Design & Layout",
      "Typography & Color Theory",
      "Design Systems",
      "Accessibility Awareness",
    ],
    responsibilities: [
      "Create and refine visual interfaces and elements",
      "Collaborate with UX Designers and Developers",
      "Maintain style guides and design systems",
      "Ensure consistency with brand identity",
    ],
    needs:
      "Clear brand guidelines and consistent feedback from stakeholders. Appreciates collaboration with writers and motion designers for cohesive storytelling.",
    painPoints:
      "Design critique often focuses on taste rather than intent. Inconsistent use of design tokens across platforms causes rework.",
    challenges:
      "Preserving creative expression while scaling a unified design language across diverse products.",
  },

  UIDeveloper: {
    id: "UIDeveloper",
    name: "Max Forge",
    role: "UI Developer",
    imgSrc: uideveloper,
    quote:
      "I turn pixels into performance — bridging design vision and code reality.",
    description:
      "Implements user interfaces that are performant, accessible, and maintainable. Works closely with design teams to bring prototypes to production fidelity.",
    skills: [
      "Frontend Development (HTML, CSS, JS)",
      "Accessibility Implementation",
      "Responsive Design",
      "Code Optimization",
    ],
    responsibilities: [
      "Translate designs into functional interfaces",
      "Ensure accessibility and responsiveness",
      "Collaborate with UX and Product teams",
      "Optimize performance and maintain UI consistency",
    ],
    needs:
      "Early access to design specifications and reusable component libraries. Needs collaboration tools that streamline handoffs and feedback cycles.",
    painPoints:
      "Last-minute design changes and inconsistent documentation cause rework. Balancing visual precision with technical constraints is demanding.",
    challenges:
      "Maintaining scalability and accessibility while meeting tight release schedules.",
  },

  UXArchitect: {
    id: "UXArchitect",
    name: "Nora Frame",
    role: "UX Architect",
    imgSrc: uxarchitect,
    quote:
      "I connect dots — from research to structure to meaningful experience.",
    description:
      "Designs holistic experience architectures across systems, ensuring coherence and usability. Aligns interaction frameworks with business and technical strategy.",
    skills: [
      "Information Architecture",
      "Interaction Frameworks",
      "Prototyping",
      "UX Evaluation",
    ],
    responsibilities: [
      "Define experience structures and flows",
      "Collaborate across UX, Dev, and PM",
      "Ensure cross-platform coherence",
      "Integrate UX strategy with design execution",
    ],
    needs:
      "Cross-disciplinary collaboration and visibility into technical constraints. Requires clear ownership of the overall user experience structure.",
    painPoints:
      "Fragmented design ownership across products leads to inconsistent journeys. Architectural documentation often undervalued.",
    challenges:
      "Balancing innovation with scalability in complex, multi-system environments.",
  },

  UXDesigner: {
    id: "UXDesigner",
    name: "Lina Flow",
    role: "UX Designer",
    imgSrc: uxdesigner,
    quote: "Design is how empathy becomes tangible.",
    description:
      "Creates intuitive digital experiences by combining research insights, design systems, and business context. Ensures usability, accessibility, and emotional resonance.",
    skills: [
      "Prototyping & Interaction Design",
      "Information Architecture",
      "Design Systems",
      "User Testing",
    ],
    responsibilities: [
      "Design and iterate on user flows and interfaces",
      "Collaborate with researchers, PMs, and devs",
      "Ensure accessibility and consistency across screens",
      "Contribute to design system evolution",
    ],
    needs:
      "Access to user insights early in the process and shared understanding of product goals. Values iterative feedback from both users and peers.",
    painPoints:
      "Competing priorities and changing requirements disrupt design continuity. Limited user exposure in some development cycles.",
    challenges:
      "Balancing design quality, speed, and stakeholder expectations in agile teams.",
  },

  UXManager: {
    id: "UXManager",
    name: "Julian North",
    role: "UX Manager",
    imgSrc: uxmanager,
    quote:
      "My job is to turn UX from a craft into an organizational capability.",
    description:
      "Builds and scales UX as a strategic discipline. Defines processes, grows teams, and ensures UX maturity across the organization through structure and culture.",
    skills: [
      "Leadership & Coaching",
      "UX Strategy & Governance",
      "Process Management",
      "Stakeholder Alignment",
    ],
    responsibilities: [
      "Establish UX vision and processes",
      "Develop and mentor UX teams",
      "Advocate user-centered decision-making",
      "Measure and communicate UX impact",
    ],
    needs:
      "Strong executive sponsorship and clear KPIs that demonstrate UX impact. Needs room to invest in team development and ResearchOps foundations.",
    painPoints:
      "UX maturity varies widely across departments, leading to inconsistent expectations. Leadership alignment often depends on individual advocates.",
    challenges:
      "Embedding UX as a measurable, strategic function without losing creative culture.",
  },

  UXResearcher: {
    id: "UXResearcher",
    name: "Rhea Insight",
    role: "UX Researcher",
    imgSrc: uxresearcher,
    quote:
      "I turn user behavior into clarity — transforming questions into confident product decisions.",
    description:
      "Explores user needs, motivations, and contexts through mixed-method research. Translates findings into insights that inform product and strategic decisions.",
    skills: [
      "User Interviews & Testing",
      "Data Analysis & Synthesis",
      "ResearchOps",
      "Insight Storytelling",
    ],
    responsibilities: [
      "Plan and execute research studies",
      "Translate findings into design recommendations",
      "Collaborate across disciplines for evidence-based design",
      "Maintain repositories and templates",
    ],
    needs:
      "Early involvement in product discussions and clear research questions. Requires transparency about how insights influence decisions.",
    painPoints:
      "Tight timelines often limit the depth of exploration. Insights can lose impact without clear ownership in the product process.",
    challenges:
      "Balancing methodological rigor with speed while maintaining influence on design and strategy.",
  },

  UXStrategist: {
    id: "UXStrategist",
    name: "Eli Vision",
    role: "UX Strategist",
    imgSrc: uxstrategist,
    quote:
      "Strategy connects user value with business outcomes — that’s where UX proves its worth.",
    description:
      "Defines how UX drives measurable impact. Connects insights, metrics, and design strategy to guide long-term product vision and portfolio priorities.",
    skills: [
      "UX Strategy & Roadmapping",
      "Workshop Facilitation",
      "Metrics & KPIs",
      "Stakeholder Management",
    ],
    responsibilities: [
      "Develop UX strategies and frameworks",
      "Facilitate workshops to align vision",
      "Connect UX outcomes with business goals",
      "Evaluate maturity and recommend improvements",
    ],
    needs:
      "Access to leadership and decision data to connect UX work to measurable outcomes. Needs organizational readiness for evidence-based strategy.",
    painPoints:
      "Difficulty proving ROI of UX due to disconnected measurement frameworks. Strategic alignment often fades during delivery phases.",
    challenges:
      "Translating long-term UX vision into actionable steps in fast-moving, execution-driven environments.",
  },

  UXWriter: {
    id: "UXWriter",
    name: "Maya Lex",
    role: "UX Writer",
    imgSrc: uxwriter,
    quote:
      "Words are design elements — every sentence shapes the user’s experience.",
    description:
      "Crafts clear, inclusive language that helps users understand, navigate, and succeed within digital products. Aligns content strategy with design intent and accessibility.",
    skills: [
      "Microcopy & UX Writing",
      "Content Strategy",
      "Localization & Accessibility",
      "Voice & Tone",
    ],
    responsibilities: [
      "Write clear and inclusive interface copy",
      "Collaborate with designers and PMs",
      "Maintain and evolve content guidelines",
      "Ensure consistency across touchpoints",
    ],
    needs:
      "Early collaboration in design cycles to align voice and UX intent. Requires a shared language system and documentation standards.",
    painPoints:
      "Being included too late limits the ability to shape tone and clarity. Content work often underestimated compared to visual design.",
    challenges:
      "Advocating for language as part of UX strategy while managing consistency across products and locales.",
  },
};
