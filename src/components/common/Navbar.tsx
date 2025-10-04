// src/components/common/NavBar.tsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "@/components/common/ThemeToggle";
import LanguageToggle from "@/components/common/LanguageToggle";
import { typography, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

const NAV = ["about", "expertise", "projects", "cv", "craft", "contact"] as const;

const SUBNAV: Record<string, { id: string; labelKey: string; path: string }[]> = {
  projects: [
    { id: "car-insurance", labelKey: "projects.adac", path: "/projects/car-insurance" },
    { id: "zooplus-reops", labelKey: "projects.reops", path: "/projects/zooplus-reops" },
    { id: "swiss-life", labelKey: "projects.sl", path: "/projects/swiss-life-b2b2c" },
    { id: "zooplus-pricing", labelKey: "projects.pricing", path: "/projects/zooplus-pricing" },
    { id: "delete-case", labelKey: "projects.deleteCase", path: "/projects/delete-case" },
    { id: "atoss-reops", labelKey: "projects.atossReops", path: "/projects/atoss-reops" },
  ],
  expertise: [
    { id: "ux-strategy", labelKey: "expertise.uxStrategy", path: "/expertise/ux-strategy" },
    { id: "strategic-ux-research", labelKey: "expertise.strategicUxResearch", path: "/expertise/strategic-ux-research" },
    { id: "researchops", labelKey: "expertise.researchOps", path: "/expertise/researchops" },
    { id: "team-leadership", labelKey: "expertise.teamLeadership", path: "/expertise/team-leadership" },
    { id: "skills", labelKey: "expertise.skills", path: "/expertise/team-leadership/skills" },
    { id: "impact-measurement", labelKey: "expertise.impactMeasurement", path: "/expertise/impact-measurement" },
  ],
  cv: [{ id: "cv-full", labelKey: "nav.cvFull", path: "/cv" }],
};

export default function NavBar() {
  const { t } = useTranslation();
  const { pathname, hash } = useLocation();
  const onHome = pathname === "/";
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if (!onHome) return;
    const sections = NAV.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") || "";
            setActive(id);
            history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -50% 0px" }
    );
    sections.forEach((sec) => observerRef.current?.observe(sec));
    return () => observerRef.current?.disconnect();
  }, [onHome]);

  const hrefFor = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  useEffect(() => {
    setOpen(false);
  }, [hash, pathname]);

  return (
    <header className={cn("sticky top-0 z-50 backdrop-blur border-b", colors.border, colors.background.bg, colors.background.text)}>
      <nav className="container-responsive h-16 flex items-center justify-between">
        <Link
          to="/#header"
          className={cn("flex items-center gap-2", typography.small.font, typography.small.size, typography.small.weight, colors.foreground)}
        >
          <img src="/favicon.png" alt="FB logo" className="h-6 w-6 rounded-md" />
          <span>Felix Bruckmeier</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-4">
          {NAV.map((id) => (
            <li key={id} className="relative group">
              <a
                href={hrefFor(id)}
                aria-current={active === id ? "page" : undefined}
                className={cn(
                  "px-1 py-2 font-semibold transition-colors underline underline-offset-4 decoration-transparent",
                  typography.small.font,
                  typography.small.size,
                  typography.small.leading,
                  active === id
                    ? cn("text-foreground decoration-current")
                    : cn("text-muted-foreground hover:text-foreground hover:decoration-current")
                )}
              >
                {t(`nav.${id}`)}
              </a>
              {SUBNAV[id] && (
                <ul
                  className={cn(
                    "absolute left-0 top-full hidden group-hover:block shadow-lg rounded-md mt-1 py-2 w-56 border",
                    colors.border,
                    colors.background.bg
                  )}
                >
                  {SUBNAV[id].map((sub) => (
                    <li key={sub.id}>
                      <Link
                        to={sub.path}
                        className={cn(
                          "block px-4 py-2 transition",
                          typography.small.font,
                          typography.small.size,
                          colors.muted.text,
                          "hover:opacity-80"
                        )}
                      >
                        {t(sub.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="pl-2">
            <LanguageToggle />
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          aria-label="Open menu"
          className={cn("md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border", colors.border, colors.foreground)}
          onClick={() => setOpen((v) => !v)}
        >
          <div className={cn("transition-transform", open && "rotate-45")}>
            <div className="w-5 h-0.5 bg-current mb-1"></div>
            <div className={cn("w-5 h-0.5 bg-current", open && "opacity-0")}></div>
            <div className="w-5 h-0.5 bg-current mt-1"></div>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className={cn("md:hidden border-t", colors.border, colors.background.bg)}>
          <div className="container-responsive py-3 space-y-2">
            {NAV.map((id) => (
              <div key={id}>
                <a
                  href={hrefFor(id)}
                  className={cn("block py-2", typography.body.font, typography.body.size, colors.foreground)}
                >
                  {t(`nav.${id}`)}
                </a>
                {SUBNAV[id] && (
                  <div className="pl-4 space-y-1">
                    {SUBNAV[id].map((sub) => (
                      <Link
                        key={sub.id}
                        to={sub.path}
                        className={cn("block py-1", typography.small.font, typography.small.size, colors.muted.text)}
                      >
                        {t(sub.labelKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
