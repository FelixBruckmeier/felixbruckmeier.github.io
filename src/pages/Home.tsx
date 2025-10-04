// src/pages/Home.tsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// ✅ Sections (via index.ts)
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  CraftSection,
  ContactSection,
  CVSection,         // 👈 neu
  ExpertiseSection,  // 👈 neu
} from "@/components/sections";

// ✅ Tokens & Utils
import { colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <main className={cn("min-h-screen", colors.background.bg, colors.background.text)}>
      {/* Hero */}
      <HeroSection />

      {/* About */}
      <AboutSection />

      {/* Expertise */}
      <ExpertiseSection />

      {/* CV snapshot */}
      <CVSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Craft */}
      <CraftSection />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}
