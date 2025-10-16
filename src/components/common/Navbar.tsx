import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "@/components/common/ThemeToggle";
import { typography } from "@/lib/tokens";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  link?: string;
  children?: { id: string; label: string }[];
};

const NAV: NavItem[] = [
  {
    id: "expertise",
    children: [
      { id: "expertise/ux-strategy", label: "UX Strategy" },
      { id: "expertise/strategic-ux-research", label: "Strategic UX Research" },
      { id: "expertise/researchops", label: "ResearchOps" },
      { id: "expertise/team-leadership", label: "Team Leadership" },
      { id: "expertise/impact-measurement", label: "Impact Measurement" },
    ],
  },
  {
    id: "projects",
    children: [
      { id: "projects/adac-car-insurance", label: "ADAC Car Insurance" },
      { id: "projects/zooplus-researchops", label: "zooplus ResearchOps" },
      { id: "projects/zooplus-pricing", label: "zooplus Pricing" },
      { id: "projects/swisslife-b2b2c", label: "Swiss Life B2B2C" },
    ],
  },
  { id: "cv", link: "/cv" },
  { id: "contact" },
];

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
    const sections = NAV.flatMap((nav) =>
      [nav.id, ...(nav.children?.map((c) => c.id) ?? [])]
        .map((id) => document.getElementById(id))
        .filter(Boolean)
    ) as HTMLElement[];
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
    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, [onHome]);

  const hrefFor = (nav: NavItem) =>
    nav.link ?? (nav.id.includes("/") ? `/${nav.id}` : `/#${nav.id}`);

  useEffect(() => setActive(hash.replace("#", "")), [hash]);
  useEffect(() => setOpen(false), [hash, pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, nav: NavItem) => {
    if (!onHome && !nav.link && !nav.id.includes("/")) {
      e.preventDefault();
      window.location.assign(`/#${nav.id}`);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
        <nav className="mx-auto w-full max-w-[1900px] px-[3vw] flex h-20 items-center justify-between">
          {/* === Logo === */}
          <Link
            to="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex flex-col items-start text-foreground"
          >
            <span className="text-2xl font-bold leading-tight">Felix</span>
            <span className="text-2xl font-bold leading-tight">Bruckmeier</span>
            <div className="mt-1 w-full border-b border-border" />
          </Link>

          {/* === Desktop Navigation === */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV.map((nav) => (
              <li key={nav.id} className="relative group">
                <a
                  href={hrefFor(nav)}
                  onClick={(e) => handleNavClick(e, nav)}
                  aria-current={active === nav.id ? "page" : undefined}
                  className={cn(
                    typography.subtitle.font,
                    typography.subtitle.size,
                    typography.subtitle.weight,
                    "underline underline-offset-4 decoration-transparent transition",
                    active === nav.id
                      ? "text-primary decoration-current"
                      : "text-muted-foreground hover:text-foreground hover:decoration-current"
                  )}
                >
                  {t(`nav.${nav.id}`, nav.id.charAt(0).toUpperCase() + nav.id.slice(1))}
                </a>

                {/* === Dropdown (bleibt offen bei Hover) === */}
                {nav.children && (
                  <ul
                    className="absolute left-0 top-full hidden group-hover:flex flex-col bg-background border border-border rounded-lg shadow-lg min-w-[220px] py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  >
                    {nav.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          to={`/${child.id}`}
                          className={cn(
                            typography.subtitle.font,
                            "block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* === Mobile === */}
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

        {/* === Mobile Menü === */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out border-t border-border bg-background/95 backdrop-blur-sm",
            open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="mx-auto w-full max-w-[1900px] px-[3vw] py-3 space-y-2">
            {NAV.map((nav) => (
              <div key={nav.id}>
                <a
                  href={hrefFor(nav)}
                  onClick={(e) => handleNavClick(e, nav)}
                  className={cn(
                    typography.subtitle.font,
                    typography.subtitle.size,
                    typography.subtitle.weight,
                    "block py-2 text-foreground"
                  )}
                >
                  {t(`nav.${nav.id}`, nav.id.charAt(0).toUpperCase() + nav.id.slice(1))}
                </a>
                {nav.children && (
                  <div className="ml-4 space-y-1">
                    {nav.children.map((child) => (
                      <Link
                        key={child.id}
                        to={`/${child.id}`}
                        className={cn(
                          typography.subtitle.font,
                          "block py-1 text-sm text-muted-foreground hover:text-foreground transition"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
      <div className="h-20" />
    </>
  );
}
