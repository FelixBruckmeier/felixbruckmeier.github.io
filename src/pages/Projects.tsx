import React from "react";
import { useI18n } from "../i18n";
import { Tile } from "../components/Tile";

export default function Projects() {
  const { t } = useI18n();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">{t("projects_title")}</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-6">{t("projects_intro")}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Tile title={t("project_adac")} img="https://placehold.co/800x450/png?text=ADAC+Car+Insurance" />
        <Tile title={t("project_strategy")} img="https://placehold.co/800x450/png?text=UX+Strategy" />
        <Tile title={t("project_zooplus_pricing")} img="https://placehold.co/800x450/png?text=zooplus+Pricing" />
        <Tile title={t("project_reops")} img="https://placehold.co/800x450/png?text=ResearchOps" />
        <Tile title={t("project_swisslife")} img="https://placehold.co/800x450/png?text=Swiss+Life+B2B2C" />
        <Tile title={t("project_methodcards")} img="https://placehold.co/800x450/png?text=UX+Method+Cards" />
      </div>
    </main>
  );
}
