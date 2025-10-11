// src/components/common/NavBar.tsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "@/components/common/ThemeToggle";
import { typography, colors, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-uxr.png";

const NAV = ["about", "expertise", "projects", "cv", "contact"] as const;

const SUBNAV: Record<string, { id: string; titleKey: string; path: string }[]> = {
  projects: [
    { id: "car-insurance", titleKey: "projects.carInsurance.title", path: "/projects/car-insurance" },
    { id: "zooplus-reops", titleKey: "projects.reopsAgileUX.title", path: "/projects/zooplus-reops" },
    { id: "swiss-life", titleKey: "projects.b2b2c.title", path: "/projects/swiss-life-b2b2c" },
    { id: "zooplus-pricing", titleKey: "projects.pricing.title", path: "/projects/zooplus-pricing" },
    { id: "delete-case", titleKey: "projects.deleteCase.title", path: "/projects/delete-case" },
    { id: "atoss-reops", titleKey: "projects.atossReops.title", path: "/projects/atoss-reops" },
  ],
  expertise: [
    { id: "ux-strategy", titleKey: "expertise.uxStrategy", path: "/expertise/ux-strategy" },
    { id: "strategic-ux-research", titleKey: "expertise.strategicUxResearch", path: "/expertise/strategic-ux-research" },
    { id: "researchops", titleKey: "expertise.researchOps", path: "/expertise/researchops" },
    { id: "team-leadership", titleKey: "expertise.teamLeadership", path: "/expertise/team-leadership" },
    { id: "impact-measurement", titleKey: "expertise.impactMeasurement", path: "/expertise/impact-measurement" },
  ],
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

  const hrefFor = (id: string) => `/#${id}`;
  useEffect(() => setActive(hash.replace("#", "")), [hash]);
  useEffect(() => setOpen(false), [hash, pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!onHome) {
      e.preventDefault();
      window.location.assign(`/#${id}`);
    }
  };

  return (
    <>
      {/* === Fixed Sticky Header === */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] border-b border-border backdrop-blur-md bg-background/95 supports-[backdrop-filter]:bg-background/80"
        )}
      >
        <nav className="container-responsive h-16 flex items-center justify-between">
          {/* === Logo + Name === */}
          <Link
            to="/#header"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={cn(
              "flex items-center gap-3 font-semibold text-foreground",
              typography.subtitle.font,
              typography.subtitle.size
            )}
          >
            <img src={logo} alt="Felix Bruckmeier Logo" className="h-8 w-8 object-contain rounded-md" />
            <span>Felix Bruckmeier</span>
          </Link>

          {/* === Desktop Navigation === */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV.map((id) => (
              <li key={id} className="relative group">
                {id === "cv" ? (
                  <Link
                    to="/cv"
                    className={cn(
                      "px-1 py-2 font-semibold underline underline-offset-4 decoration-transparent transition",
                      pathname === "/cv"
                        ? "text-foreground decoration-current"
                        : "text-muted-foreground hover:text-foreground hover:decoration-current"
                    )}
                  >
                    {t(`nav.${id}`)}
                  </Link>
                ) : (
                  <a
                    href={hrefFor(id)}
                    onClick={(e) => handleNavClick(e, id)}
                    aria-current={active === id ? "page" : undefined}
                    className={cn(
                      "px-1 py-2 font-semibold underline underline-offset-4 decoration-transparent transition",
                      active === id
                        ? "text-foreground decoration-current"
                        : "text-muted-foreground hover:text-foreground hover:decoration-current"
                    )}
                  >
                    {t(`nav.${id}`)}
                  </a>
                )}

                {/* === Dropdowns === */}
                {SUBNAV[id] && (
                  <ul
                    className={cn(
                      "absolute left-0 top-full hidden group-hover:block shadow-lg rounded-md mt-1 py-2 w-64 border bg-background",
                      colors.border
                    )}
                  >
                    {SUBNAV[id].map((sub) => (
                      <li key={sub.id}>
                        <Link
                          to={sub.path}
                          className={cn(
                            "block px-4 py-2 hover:bg-muted transition",
                            typography.body.font,
                            typography.body.size,
                            "font-medium text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {t(sub.titleKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className={spacing.pl4}>
              <ThemeToggle />
            </li>
          </ul>

          {/* === Mobile Right Controls === */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border text-foreground transition"
            >
              <div className={cn("transition-transform duration-300", open && "rotate-45")}>
                <div className="w-5 h-0.5 bg-current mb-1"></div>
                <div className={cn("w-5 h-0.5 bg-current", open && "opacity-0")}></div>
                <div className="w-5 h-0.5 bg-current mt-1"></div>
              </div>
            </button>
          </div>
        </nav>

        {/* === Mobile Menu === */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out border-t border-border bg-background/95 backdrop-blur-sm",
            open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container-responsive py-3 space-y-2">
            {NAV.map((id) => (
              <div key={id}>
                {id === "cv" ? (
                  <Link to="/cv" className="block py-2 font-medium text-foreground">
                    {t(`nav.${id}`)}
                  </Link>
                ) : (
                  <a
                    href={hrefFor(id)}
                    onClick={(e) => handleNavClick(e, id)}
                    className="block py-2 font-medium text-foreground"
                  >
                    {t(`nav.${id}`)}
                  </a>
                )}
                {SUBNAV[id] && (
                  <div className="pl-4 space-y-1">
                    {SUBNAV[id].map((sub) => (
                      <Link
                        key={sub.id}
                        to={sub.path}
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {t(sub.titleKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Spacer to offset fixed header */}
      <div className="h-16" />
    </>
  );
}
