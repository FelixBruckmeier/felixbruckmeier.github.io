// src/components/common/NavBar.tsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "@/components/common/ThemeToggle";
import { typography, colors, transitions, spacing } from "@/lib/tokens";
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

  // Smooth scrolling globally
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  // Track active section on homepage
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

  // 🧭 Scroll to hash after route change (reliable)
  useEffect(() => {
    if (onHome && hash) {
      const targetId = hash.replace("#", "");
      const tryScroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };
      let attempts = 0;
      const interval = setInterval(() => {
        if (tryScroll() || attempts++ > 20) clearInterval(interval);
      }, 50);
    }
  }, [onHome, hash]);

  // Navigation click handler (from subpages)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!onHome) {
      e.preventDefault();
      window.location.assign(`/#${id}`);
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur border-b",
        colors.border,
        colors.background.bg,
        colors.background.text
      )}
    >
      <nav className="container-responsive h-16 flex items-center justify-between">
        {/* ✅ Logo + Name */}
        <Link
          to="/#header"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className={cn(
            "flex items-center gap-3",
            typography.subtitle.font,
            typography.subtitle.size,
            "font-semibold",
            typography.subtitle.leading,
            colors.foreground
          )}
        >
          <img src={logo} alt="Felix Bruckmeier Logo" className="h-8 w-8 object-contain rounded-md" />
          <span>Felix Bruckmeier</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV.map((id) => (
            <li key={id} className="relative group">
              {id === "cv" ? (
                <Link
                  to="/cv"
                  className={cn(
                    "px-1 py-2 font-semibold underline underline-offset-4 decoration-transparent",
                    transitions.default,
                    typography.body.font,
                    typography.body.size,
                    typography.body.leading,
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
                    "px-1 py-2 font-semibold underline underline-offset-4 decoration-transparent",
                    transitions.default,
                    typography.body.font,
                    typography.body.size,
                    typography.body.leading,
                    active === id
                      ? "text-foreground decoration-current"
                      : "text-muted-foreground hover:text-foreground hover:decoration-current"
                  )}
                >
                  {t(`nav.${id}`)}
                </a>
              )}

              {/* Dropdowns */}
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
          <li className={spacing.pl4}><ThemeToggle /></li>
        </ul>

        {/* === Mobile Burger Toggle === */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border transition-colors",
            colors.border,
            colors.foreground
          )}
        >
          <div className={cn("transition-transform duration-300", open && "rotate-45")}>
            <div className="w-5 h-0.5 bg-current mb-1"></div>
            <div className={cn("w-5 h-0.5 bg-current", open && "opacity-0")}></div>
            <div className="w-5 h-0.5 bg-current mt-1"></div>
          </div>
        </button>
      </nav>

      {/* === Mobile Menu === */}
      {open && (
        <div className={cn("md:hidden border-t", colors.border, colors.background.bg)}>
          <div className="container-responsive py-3 space-y-2">
            {NAV.map((id) => (
              <div key={id}>
                {id === "cv" ? (
                  <Link
                    to="/cv"
                    className={cn(
                      "block py-2 font-medium",
                      typography.body.font,
                      typography.body.size,
                      colors.foreground
                    )}
                  >
                    {t(`nav.${id}`)}
                  </Link>
                ) : (
                  <a
                    href={hrefFor(id)}
                    onClick={(e) => handleNavClick(e, id)}
                    className={cn(
                      "block py-2 font-medium",
                      typography.body.font,
                      typography.body.size,
                      colors.foreground
                    )}
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
                        className={cn(
                          "block py-1",
                          typography.small.font,
                          typography.small.size,
                          "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {t(sub.titleKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
