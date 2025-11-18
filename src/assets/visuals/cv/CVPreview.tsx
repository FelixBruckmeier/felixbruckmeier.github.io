// src/components/sections/cv/CVPreview.tsx
import React, { useMemo, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import Badge from "@/components/ui/Badge";
import { typography, colors, spacing } from "@/lib/tokens";
import { tagColorMap } from "@/lib/tagColors";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type Role = {
  id: string;
  company: string;
  role: string;
  period: string;
  tags: string[];
  summary?: string;
  bullets?: string[];
  sections?: { title: string; bullets: string[] }[];
};

const ROLES: Role[] = [
  {
    id: "exp-freelance",
    company: "Freelance",
    role: "UX Research Consultant",
    period: "2023 – present",
    tags: ["Consulting", "B2C", "ResearchOps"],
    summary:
      "Leading UX Research initiatives for small businesses and online shops, focusing on optimizing customer journeys and enabling data-driven improvements.",
    bullets: [
      "Optimized UX and analytics for an Etsy based webshop → improved customer journey & conversion.",
      "Ran small scale user tests and experiments → informed product presentation & pricing.",
    ],
  },

  {
    id: "exp-atoss",
    company: "ATOSS Software SE",
    role: "UX Research Lead",
    period: "January 2025 – May 2025",
    tags: ["Leadership", "Enterprise", "B2B"],
    summary:
      "Focused on scaling UX Research and embedding user-centered practices across agile product and design teams.",
    bullets: [
      "Conducted a comprehensive ResearchOps assessment, developed solutions, prioritized them, and created an implementation roadmap.",
      "Evaluated design concepts using a quantitative survey (preference modeling), enabling key design decisions.",
      "Uncovered key user requirements for creating and customizing dashboards, shaping the direction of a new workforce management feature.",
      "Mentored teams in UX Research to strengthen research capabilities and decision-making.",
    ],
  },

  {
    id: "exp-zooplus",
    company: "zooplus SE",
    role: "UX Research Lead",
    period: "July 2022 – December 2024",
    tags: ["Leadership", "E-commerce", "ResearchOps"],
    summary:
      "Focused on establishing and scaling UX Research and ResearchOps practices to support zooplus’ transition into a marketplace ecosystem.",
    sections: [
      {
        title: "ResearchOps – Standardizing & Scaling UX Research",
        bullets: [
          "Built and led a company-wide ResearchOps program, defining structures, processes, and governance to scale UX Research.",
          "Introduced the RITE process and made rapid, iterative testing a core practice across design teams.",
          "Implemented a UX Research OKR framework and developed ROI models (including CLTV-based calculations).",
          "Oversaw operational governance including tooling, GDPR, budgeting, licensing, and training.",
          "Initiated a UX Research Maturity Assessment to guide long-term development.",
        ],
      },
      {
        title: "UXR Democratization & Capability Building",
        bullets: [
          "Founded and led the ‘Mouseflower’ Research Community of Practice to build behavioral analytics skills.",
          "Launched UX Office Hours and a company-wide enablement program to democratize research.",
          "Introduced new research tools and AI-supported methods and adapted a ResearchOps skills framework.",
          "Increased UX visibility through a methods card set and cross-team enablement.",
        ],
      },
      {
        title: "Agile UX & Strategic Collaboration",
        bullets: [
          "Integrated UCD and UX Research into agile workflows at initiative, epic, and team level.",
          "Expanded methodological diversity with agile-friendly approaches such as hallway tests, heuristic reviews, RITE, and surveys.",
          "Supported strategic prioritization through Kano analyses, WSJF input, and research-driven decision frameworks.",
          "Developed leadership-oriented measurement models to demonstrate research impact.",
        ],
      },
      {
        title: "Key Strategic Initiatives",
        bullets: [
          "Zootracker — Led quantitative concept evaluation to guide design direction.",
          "Navigation Redesign — Drove discovery research, usability testing, and eye-tracking validation.",
          "Marketplace — Led summative testing and a Kano analysis to inform the Marketplace strategy.",
          "Puppy Club — Conducted user research and supported prototyping for early product definition.",
        ],
      },
    ],
  },

  {
    id: "exp-swisslife",
    company: "Swiss Life AG",
    role: "Senior UX Researcher",
    period: "May 2020 – June 2022",
    tags: ["Insurance", "B2B2C", "Quant"],
    summary:
      "Led the establishment of a centralized UX Research function, driving strategic research initiatives across B2B2C insurance ecosystems.",
    bullets: [
      "Guided the development of an occupational disability insurance bundle through focus groups, Conjoint analysis, and iterative concept creation.",
      "Identified core needs and pain points of insurance brokers during the digitalization of internal and external tools; prioritized measures and created a user-value-oriented roadmap.",
      "Facilitated ideation and co-creation workshops to develop new advisor support tools.",
      "Managed research tools (Mouseflow, Lamapoll, Matomo) and created shared knowledge bases and templates.",
      "Conducted evaluative usability tests for existing tools and drove UX improvements.",
      "Embedded Human-Centered Design into the organization’s transition to SAFe.",
      "Implemented scalable ResearchOps structures across Sales, Customer Support, and CX.",
    ],
  },

  {
    id: "exp-kaiserxlabs",
    company: "Kaiser X Labs GmbH (Allianz)",
    role: "UX Researcher",
    period: "August 2018 – April 2020",
    tags: ["Insurance", "Quant", "Experiments"],
    summary:
      "Focused on understanding user behavior and translating insights into data-driven product and service improvements.",
    bullets: [
      "Evaluated services and features of a new Service Hub using Kano analysis and developed a strategic UX roadmap.",
      "Iteratively developed a new concept for insurance information letters using formative and summative usability testing.",
      "Provided methodological guidance on A/B tests, hypothesis design, insights interpretation, and decision-making.",
      "Led a fintech robo-advisor research initiative, conducting MaxDiff and survey studies to identify segment needs and define USPs for market entry.",
    ],
  },

  {
    id: "exp-empiriecom",
    company: "empiriecom GmbH & Co. KG",
    role: "Consultant, User-Centered Design",
    period: "February 2016 – July 2018",
    tags: ["E-commerce", "UX", "Quant"],
    summary:
      "Drove experimentation and quantitative UX insights to continuously improve e-commerce conversion and overall UX performance.",
    bullets: [
      "Conducted A/B tests evaluating fit prognosis algorithms and optimizing payment method presentation.",
      "Developed a usability index (KPI) using factor analysis to measure UX performance in online shops.",
      "Generated exploratory hypotheses across the customer journey via user labs, usability tests, and behavioral insights.",
      "Performed Kano analyses to assess satisfaction impact of new features and services.",
      "Analyzed mouse tracking data (funnels, heatmaps) to identify friction points and usability issues.",
    ],
  },
];

const allTags = Array.from(new Set(ROLES.flatMap((r) => r.tags))).sort();

export default function CVPreview({ hideCTA = false }: { hideCTA?: boolean }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return ROLES.filter(
      (r) =>
        selected.size === 0 ||
        Array.from(selected).some((tag) => r.tags.includes(tag))
    );
  }, [selected]);

  const allIds = filtered.map((r) => r.id);
  const allOpen = openItems.length === allIds.length;

  const toggleTag = (tag: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
  };

  const clearFilters = () => setSelected(new Set());
  const handleExpandCollapse = () => setOpenItems(allOpen ? [] : allIds);

  return (
    <div>
      <p
        className={cn(
          spacing.mb6,
          typography.body.font,
          typography.body.size,
          typography.body.leading,
          colors.muted.text
        )}
      >
        Browse my experience by tags
      </p>

      <div
        className={cn(
          spacing.mb6,
          "flex flex-col md:flex-row md:justify-between md:items-start",
          spacing.gap4
        )}
      >
        <div className={cn("flex flex-wrap md:flex-1", spacing.gap2)}>
          {allTags.map((tag) => (
            <Tag
              key={tag}
              active={selected.has(tag)}
              onClick={() => toggleTag(tag)}
              color={tagColorMap[tag] ?? "default"}
            >
              {tag}
            </Tag>
          ))}
        </div>

        <div className={cn("flex flex-col items-end", spacing.gap2)}>
          <Button variant="secondary" size="sm" onClick={handleExpandCollapse}>
            {allOpen ? "Collapse all" : "Expand all"}
          </Button>
          {selected.size > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear
            </Button>
          )}
        </div>
      </div>

      <Accordion
        type="multiple"
        value={openItems}
        onValueChange={(vals) => setOpenItems(vals)}
        className={cn(
          "relative border-l border-border",
          spacing.pl8,
          spacing.stackLg
        )}
      >
        {filtered.map((r) => (
          <AccordionItem
            key={r.id}
            value={r.id}
            variant="timeline"
            title={r.company}
            subtitle={`${r.role} · ${r.period}`}
          >
            <AccordionContent>
              {r.summary && (
                <p className="mb-4 text-muted-foreground">{r.summary}</p>
              )}

              {r.sections ? (
                r.sections.map((section, i) => (
                  <div key={i} className="mb-4">
                    <p className="font-bold mt-4 mb-2">{section.title}</p>
                    <ul className="list-disc list-inside pl-4 space-y-1 text-muted-foreground">
                      {section.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : r.bullets ? (
                <ul
                  className={cn(
                    spacing.stackSm,
                    "list-disc list-inside",
                    spacing.pl4,
                    typography.body.font,
                    typography.body.size,
                    typography.body.leading,
                    colors.muted.text
                  )}
                >
                  {r.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              ) : null}

              <div className={cn(spacing.mt3, "flex flex-wrap", spacing.gap2)}>
                {r.tags.map((tag) => (
                  <Badge key={tag} color={tagColorMap[tag] ?? "default"}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}

        {filtered.length === 0 && (
          <div className={cn(typography.small.size, colors.muted.text)}>
            No results. Try removing some tags.
          </div>
        )}
      </Accordion>

      {!hideCTA && (
        <div className={spacing.pt4}>
          <Button asChild variant="secondary" size="md">
            <Link to="/cv">See full CV</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
