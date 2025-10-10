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
      "Optimized UX & analytics for shop flows → better conversion.",
      "User tests/experiments → informed presentation & pricing.",
      "Scaled research cadence (RITE, office hours) → ~30% faster test cycles.",
      "MaxDiff (250+) → data-driven prioritization.",
    ],
  },
  {
    id: "exp-atoss",
    company: "ATOSS Software SE",
    role: "UX Research Lead",
    period: "Jan 2025 – May 2025",
    tags: ["Leadership", "Enterprise", "B2B"],
    bullets: [
      "Established lean research cadence → 70% project coverage.",
      "Conjoint & surveys (>1,000) → feature prioritization.",
      "Partnered with CX/Analytics; mentored cross-functional teams.",
    ],
  },
  {
    id: "exp-zooplus",
    company: "zooplus SE",
    role: "UX Research Lead",
    period: "Jul 2022 – Dec 2024",
    tags: ["Leadership", "E-commerce", "ResearchOps"],
    bullets: [
      "ResearchOps governance, templates & enablement at scale.",
      "Faster insight cycles; higher consistency across studies.",
    ],
  },
  {
    id: "exp-swisslife",
    company: "Swiss Life",
    role: "Senior UX Researcher",
    period: "May 2020 – Jun 2022",
    tags: ["Insurance", "B2B2C", "Quant"],
    bullets: [
      "B2B2C research (SAFe Epic Owner) → informed 3 new features.",
      "Stakeholder workshops; iterative validation (RITE).",
    ],
  },
  {
    id: "exp-kaiserxlabs",
    company: "Kaiser X Labs (Allianz)",
    role: "UX Researcher",
    period: "Aug 2018 – Apr 2020",
    tags: ["Insurance", "Quant", "Experiments"],
    bullets: [
      "Mixed methods (interviews, surveys, MaxDiff) → clear priorities.",
      "Contextual research (e.g., ADAC) → exposed redesign opportunities.",
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
        className={cn("relative border-l border-border", spacing.pl8, spacing.stackLg)}
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
