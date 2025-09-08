import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "@/i18n";
import { useEffect } from "react";

const tabs = [
  { to: "/", key: "nav_home" },
  { to: "/#about", key: "nav_about" },
  { to: "/#expertise", key: "nav_expertise" },
  { to: "/#projects", key: "nav_projects" },
  { to: "/#cv", key: "nav_cv" },
  { to: "/impressum", key: "nav_imprint" }
] as const;

export default function Navbar() {
  const { t } = useI18n();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-medium">
          <img src="/assets/logo.svg" alt="Logo" className="h-6 w-6 rounded" />
          <span className="text-sm sm:text-base">Felix Bruckmeier</span>
        </Link>

        <div className="hidden md:flex items-center gap-3">
          {tabs.map(tab => (
            <Link key={tab.key} to={tab.to} className="px-3 py-1 rounded-md text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              {t(tab.key as any)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile tabs */}
      <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex overflow-x-auto gap-2 px-4 py-2">
          {tabs.map(tab => (
            <Link key={tab.key} to={tab.to} className="px-3 py-1 rounded-full text-xs border border-neutral-300 dark:border-neutral-700">
              {t(tab.key as any)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
