import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useI18n } from "../i18n";

export const Navbar: React.FC = () => {
  const { t } = useI18n();
  const [open, setOpen] = React.useState(false);
  const navItem = "px-3 py-2 rounded-md hover:bg-[hsl(var(--muted))] transition text-sm";
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-[hsl(var(--background))]/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">Felix Bruckmeier</Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navItem} onClick={close}>{t("nav_home")}</NavLink>
            <NavLink to="/about" className={navItem} onClick={close}>{t("nav_about")}</NavLink>
            <NavLink to="/expertise" className={navItem} onClick={close}>{t("nav_expertise")}</NavLink>
            <NavLink to="/projects" className={navItem} onClick={close}>{t("nav_projects")}</NavLink>
            <NavLink to="/craft" className={navItem} onClick={close}>{t("nav_craft")}</NavLink>
            <NavLink to="/contact" className={navItem} onClick={close}>{t("nav_contact")}</NavLink>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <button
            className="md:hidden p-2 border rounded-md"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-[hsl(var(--background))]">
          <div className="px-4 py-2 flex flex-col gap-1">
            <NavLink to="/" className={navItem} onClick={close}>{t("nav_home")}</NavLink>
            <NavLink to="/about" className={navItem} onClick={close}>{t("nav_about")}</NavLink>
            <NavLink to="/expertise" className={navItem} onClick={close}>{t("nav_expertise")}</NavLink>
            <NavLink to="/projects" className={navItem} onClick={close}>{t("nav_projects")}</NavLink>
            <NavLink to="/craft" className={navItem} onClick={close}>{t("nav_craft")}</NavLink>
            <NavLink to="/contact" className={navItem} onClick={close}>{t("nav_contact")}</NavLink>
            <div className
