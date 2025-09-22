import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

const NAV = ["about","expertise","projects","cv","craft","contact"] as const;

const SUBNAV: Record<string, { id: string; labelKey: string; path: string }[]> = {
  projects: [
    { id: "car-insurance", labelKey: "projects.adac", path: "/projects/car-insurance" },
    { id: "zooplus-reops", labelKey: "projects.reops", path: "/projects/zooplus-reops" },
    { id: "swiss-life", labelKey: "projects.sl", path: "/projects/swiss-life-b2b2c" },
    { id: "zooplus-pricing", labelKey: "projects.pricing", path: "/projects/zooplus-pricing" },
    { id: "delete-case", labelKey: "projects.deleteCase", path: "/projects/delete-case" }, // 👈 neu
  ],
  expertise: [
    { id: "ux-strategy", labelKey: "expertise.uxStrategy", path: "/expertise/ux-strategy" },
    { id: "strategic-ux-research", labelKey: "expertise.strategicUxResearch", path: "/expertise/strategic-ux-research" },
    { id: "researchops", labelKey: "expertise.researchOps", path: "/expertise/researchops" },
    { id: "team-leadership", labelKey: "expertise.teamLeadership", path: "/expertise/team-leadership" },
    { id: "impact-measurement", labelKey: "expertise.impactMeasurement", path: "/expertise/impact-measurement" },
  ],
  cv: [
    { id: "cv-full", labelKey: "nav.cvFull", path: "/cv" }
  ]
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
    return () => { document.documentElement.style.scrollBehavior = prev; };
  }, []);

  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if (!onHome) return;
    const sections = NAV.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id") || "";
          setActive(id);
          history.replaceState(null, "", `#${id}`);
        }
      });
    }, { threshold: 0.5, rootMargin: "-20% 0px -50% 0px" });
    sections.forEach(sec => observerRef.current?.observe(sec));
    return () => observerRef.current?.disconnect();
  }, [onHome]);

  const hrefFor = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  useEffect(() => { setOpen(false); }, [hash, pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-[var(--color-bg-dark)]/80 backdrop-blur">
      <nav className="container-responsive h-16 flex items-center justify-between">
        <Link
          to="/#header"
          className="flex items-center gap-2 font-bold text-sm md:text-base
                     text-neutral-800 dark:text-neutral-200"
        >
          <img src="/favicon.png" alt="FB logo" className="h-6 w-6 rounded-md" />
          <span>Felix Bruckmeier</span>
        </Link>

        <ul className="hidden md:flex items-center gap-4 text-sm">
          {NAV.map((id) => (
            <li key={id} className="relative group">
              <a
                href={hrefFor(id)}
                aria-current={active === id ? "page" : undefined}
                className={`px-1 py-2 ${active === id ? "font-semibold underline underline-offset-4" : ""} 
                            text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white`}
              >
                {t(`nav.${id}`)}
              </a>
              {SUBNAV[id] && (
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-neutral-900 shadow-lg rounded-md mt-1 py-2 w-56 border border-border">
                  {SUBNAV[id].map((sub) => (
                    <li key={sub.id}>
                      <Link
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      >
                        {t(sub.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="pl-2"><LanguageToggle /></li>
          <li><ThemeToggle /></li>
        </ul>

        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-neutral-300 dark:border-neutral-700
                     text-neutral-800 dark:text-neutral-200"
          onClick={() => setOpen(v=>!v)}
        >
          <div className={`transition-transform ${open ? "rotate-45" : ""}`}>
            <div className="w-5 h-0.5 bg-current mb-1"></div>
            <div className={`w-5 h-0.5 bg-current ${open ? "opacity-0" : ""}`}></div>
            <div className="w-5 h-0.5 bg-current mt-1"></div>
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[var(--color-bg-dark)]">
          <div className="container-responsive py-3 space-y-2">
            {NAV.map((id) => (
              <div key={id}>
                <a href={hrefFor(id)} className="block py-2 text-neutral-800 dark:text-neutral-200">{t(`nav.${id}`)}</a>
                {SUBNAV[id] && (
                  <div className="pl-4 space-y-1">
                    {SUBNAV[id].map((sub) => (
                      <Link
                        key={sub.id}
                        to={sub.path}
                        className="block py-1 text-sm text-neutral-700 dark:text-neutral-300"
                      >
                        {t(sub.labelKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-2"><LanguageToggle /><ThemeToggle /></div>
          </div>
        </div>
      )}
    </header>
  );
}
