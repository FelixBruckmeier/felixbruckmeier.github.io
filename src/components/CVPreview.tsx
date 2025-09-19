import React, { useEffect, useMemo, useRef, useState } from "react";

type Role = {
  id: string;              // für Deep Links (#exp-...)
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

const allTags = Array.from(new Set(ROLES.flatMap(r => r.tags))).sort();

export default function CVPreview() {
  // ausgewählte Tags (ODER-Logik)
  const [selected, setSelected] = useState<Set<string>>(new Set());

  // welche Details sind offen?
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const detailsRefs = useRef<Map<string, HTMLDetailsElement>>(new Map());
  const summaryRefs = useRef<Map<string, HTMLElement>>(new Map());
  const listRef = useRef<HTMLOListElement | null>(null);

  const filtered = useMemo(() => {
    // ODER-Logik: passt, wenn kein Filter aktiv ODER mind. ein Tag matcht
    return ROLES.filter((r) => selected.size === 0 || Array.from(selected).some(tag => r.tags.includes(tag)));
  }, [selected]);

  // ist für die gefilterten Einträge alles geöffnet?
  const allOpen = useMemo(() => filtered.length > 0 && filtered.every(r => openIds.has(r.id)), [filtered, openIds]);

  // Deep-link: #exp-zooplus etc.
  useEffect(() => {
    const id = location.hash?.replace("#", "");
    if (!id) return;
    const el = detailsRefs.current.get(id);
    if (el) {
      el.open = true;
      setOpenIds(prev => new Set(prev).add(id));
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 10);
    }
  }, []);

  // Arrow key navigation (optional, nice to have)
  const handleKeyNav = (e: React.KeyboardEvent) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const ids = filtered.map(r => r.id);
    const currentIndex = ids.findIndex(id => summaryRefs.current.get(id) === document.activeElement);
    const focusAt = (idx: number) => summaryRefs.current.get(ids[idx])?.focus();
    if (e.key === "Home") return focusAt(0);
    if (e.key === "End") return focusAt(ids.length - 1);
    if (currentIndex === -1) return focusAt(0);
    if (e.key === "ArrowDown" && currentIndex < ids.length - 1) focusAt(currentIndex + 1);
    if (e.key === "ArrowUp" && currentIndex > 0) focusAt(currentIndex - 1);
  };

  const toggleTag = (tag: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag); else next.add(tag);
      return next;
    });
  };

  const clearFilters = () => setSelected(new Set());

  const setAllOpenState = (open: boolean) => {
    filtered.forEach(r => {
      const d = detailsRefs.current.get(r.id);
      if (d) d.open = open;
    });
    setOpenIds(prev => {
      const next = new Set(prev);
      filtered.forEach(r => (open ? next.add(r.id) : next.delete(r.id)));
      return next;
    });
  };

  const onToggle = (id: string, isOpen: boolean) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (isOpen) next.add(id); else next.delete(id);
      return next;
    });
    if (isOpen) history.replaceState(null, "", `#${id}`);
    else if (location.hash === `#${id}`) history.replaceState(null, "", " ");
  };

  return (
    <section id="cv" className="scroll-mt-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container-responsive py-12">
        <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">CV snapshot</h2>
            <p className="mt-2 text-muted-foreground max-w-3xl">
              Filter by tags. Tip: use <span className="font-mono">↑/↓</span> to move, <span className="font-mono">Enter</span> to open.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAllOpenState(!allOpen)}
              className="rounded-xl border border-neutral-300 dark:border-neutral-700 px-3 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
              title={allOpen ? "Collapse all" : "Expand all"}
            >
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
            {selected.size > 0 && (
              <button
                onClick={clearFilters}
                className="rounded-xl border border-neutral-300 dark:border-neutral-700 px-3 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
                title="Clear filters"
              >
                Clear
              </button>
            )}
          </div>
        </header>

        {/* Tag Filter (ODER-Logik) */}
        <div className="mb-5 flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const active = selected.has(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`rounded-full border px-3 py-1.5 text-xs transition
                ${active
                    ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
                    : "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                }`}
                aria-pressed={active}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <ol
          ref={listRef}
          className="relative border-l border-neutral-200 dark:border-neutral-800 pl-6 space-y-5"
          onKeyDown={handleKeyNav}
        >
          {filtered.map((r) => (
            <li key={r.id} className="relative">
              <span
                className="absolute -left-[9px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600"
                aria-hidden
              />
              <details
                ref={(el) => { if (el) detailsRefs.current.set(r.id, el); }}
                id={r.id}
                className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/60 backdrop-blur transition"
                onToggle={(e) => onToggle(r.id, (e.target as HTMLDetailsElement).open)}
              >
                <summary
                  ref={(el) => { if (el) summaryRefs.current.set(r.id, el); }}
                  className="list-none cursor-pointer px-4 py-3 flex items-center justify-between gap-4 outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 rounded-xl"
                  tabIndex={0}
                >
                  <div className="min-w-0">
                    <div className="font-semibold truncate">{r.company}</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-300 truncate">
                      {r.role} · {r.period}
                    </div>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {r.tags.map(t => (
                        <span key={t} className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-2 py-0.5 text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 transition group-open:rotate-180" aria-hidden title="Toggle details">
                    ▾
                  </div>
                </summary>

                {r.bullets && r.bullets.length > 0 && (
                  <div className="px-4 pb-4">
                    <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                      {r.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span aria-hidden>•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </details>
            </li>
          ))}

          {filtered.length === 0 && (
            <li className="text-sm text-neutral-600 dark:text-neutral-300">
              No results. Try removing some tags.
            </li>
          )}
        </ol>

        <div className="mt-6">
          <a
            href="/cv"
            className="inline-flex items-center rounded-2xl px-5 py-3 text-sm font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            See full CV
          </a>
        </div>
      </div>
    </section>
  );
}
