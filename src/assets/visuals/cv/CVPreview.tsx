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
  bullets?: string[];
};

const ROLES: Role[] = [
  {
    id: "exp-freelance",
    company: "Freelance",
    role: "UX Research Consultant",
    period: "2023 – present",
    tags: ["Consulting", "B2C", "ResearchOps"],
    bullets: [
      "Optimized UX and analytics for an Etsy based webshop → improved customer journey & conversion.",
      "Ran small scale user tests and experiments → informed product presentation & pricing.",
      "Scaled UX Research via ResearchOps (RITE, Office Hours, trainings) → 30% faster test cycles.",
      "Ran MaxDiff with 250+ users → data-driven prioritization of Workforce Management.",
    ],
  },
  {
    id: "exp-atoss",
    company: "ATOSS Software SE",
    role: "UX Research Lead",
    period: "January 2025 – May 2025",
    tags: ["Leadership", "Enterprise", "B2B"],
    bullets: [
      "Established ResearchOps structures (check-ins, lean UX & Agile UX framework) → expanded research coverage to 70% of projects.",
      "Delivered feature prioritization via Conjoint & surveys (>1,000 customers).",
      "Partnered with CX/Analytics → accelerated resolution of key pain points.",
      "Mentored teams in research → raised UX maturity across organization.",
    ],
  },
  {
    id: "exp-zooplus",
    company: "zooplus SE",
    role: "UX Research Lead",
    period: "July 2022 – December 2024",
    tags: ["Leadership", "E-commerce", "ResearchOps"],
    bullets: [
      "Led UX Research and Strategy initiatives across cross-functional teams.",
      "Established ResearchOps structures and workflows for scaling research.",
      "Delivered insights that shaped product and design roadmaps across cross-functional teams.",
    ],
  },
  {
    id: "exp-swisslife",
    company: "Swiss Life AG",
    role: "Senior UX Researcher",
    period: "May 2020 – June 2022",
    tags: ["Insurance", "B2B2C", "Quant"],
    bullets: [
      "Drove B2B2C research as Epic Owner in SAFe → informed 3 new product features.",
      "Facilitated 3+ stakeholder workshops → aligned on user-driven innovation.",
      "Advanced ResearchOps & DesignOps → UX maturity improved from Emerging.",
    ],
  },
  {
    id: "exp-kaiserxlabs",
    company: "Kaiser X Labs GmbH (Allianz)",
    role: "UX Researcher",
    period: "August 2018 – April 2020",
    tags: ["Insurance", "Quant", "Experiments"],
    bullets: [
      "Conducted mixed methods studies (interviews, surveys, MaxDiff) → clear feature prioritization.",
      "User research in an agile team in the Agile Training Center (ATC) of Allianz.",
      "Conducted mixed-method approach for a Robo Advisor (finance) to enter the German market → defined USP and prioritization.",
      "Contextual research with ADAC consultants → exposed flaws in legacy sales tool, enabled redesign.",
    ],
  },
  {
    id: "exp-empiriecom",
    company: "empiriecom GmbH & Co. KG",
    role: "Consultant, User-Centered Design",
    period: "February 2016 – July 2018",
    tags: ["E-commerce", "UX", "Quant"],
    bullets: [
      "Conducted A/B tests, e.g., evaluating a fit prediction algorithm and optimal display of payment methods.",
      "Led a project developing a Usability Index as a success KPI for online shops (factor analysis).",
      "Generated exploratory hypotheses across the entire customer journey through user labs and usability tests.",
      "Applied Kano analysis to measure the satisfaction impact of new web features and services.",
      "Analyzed the checkout flow using mouse tracking (form, funnel, and heatmap analysis) to identify friction points.",
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
              {r.bullets && r.bullets.length > 0 && (
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
              )}
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
