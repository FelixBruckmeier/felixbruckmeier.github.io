import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "../i18n";

export default function Navbar() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-medium">
          <img src="/assets/logo.svg" alt="Logo" className="h-6 w-6 rounded" />
          <span className="text-sm sm:text-base">Felix Bruckmeier</span>
        </a>
        <div className="hidden md:flex items-center gap-3">
          <a className="px-3 py-1 rounded-md text-sm hover:bg-muted" href="#about">{t("about_title")}</a>
          <a className="px-3 py-1 rounded-md text-sm hover:bg-muted" href="#expertise">{t("expertise_title")}</a>
          <a className="px-3 py-1 rounded-md text-sm hover:bg-muted" href="#projects">{t("projects_title")}</a>
          <a className="px-3 py-1 rounded-md text-sm hover:bg-muted" href="#cv">{t("cv_title")}</a>
          <Link className="px-3 py-1 rounded-md text-sm hover:bg-muted" to="/impressum">{t("nav_imprint")}</Link>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
      <div className="md:hidden border-t border-border">
        <div className="flex overflow-x-auto gap-2 px-4 py-2">
          <a className="px-3 py-1 rounded-full text-xs border border-border" href="#about">{t("about_title")}</a>
          <a className="px-3 py-1 rounded-full text-xs border border-border" href="#expertise">{t("expertise_title")}</a>
          <a className="px-3 py-1 rounded-full text-xs border border-border" href="#projects">{t("projects_title")}</a>
          <a className="px-3 py-1 rounded-full text-xs border border-border" href="#cv">{t("cv_title")}</a>
          <Link className="px-3 py-1 rounded-full text-xs border border-border" to="/impressum">{t("nav_imprint")}</Link>
        </div>
      </div>
    </header>
  );
}
