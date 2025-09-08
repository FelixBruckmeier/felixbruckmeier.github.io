import React from "react";
import { useI18n } from "../i18n";
import { Link } from "react-router-dom";
import { Tile } from "../components/Tile";

export default function Home() {
  const { t } = useI18n();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div className="fade-in">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t("hero_title")}</h1>
          <p className="mt-3 text-[hsl(var(--muted-foreground))]">{t("hero_sub")}</p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[hsl(var(--primary))] text-white hover:opacity-90 transition"
            >
              {t("cta_contact")} →
            </Link>
          </div>
        </div>
        <div className="slide-up">
          <div className="rounded-xl border p-6 bg-[hsl(var(--card))]">
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Highlights</p>
            <ul className="space-y-2 text-sm">
              <li>• Decision acceleration & UX strategy</li>
              <li>• ResearchOps & DesignOps at scale</li>
              <li>• Mentorship, role clarity, skill frameworks</li>
              <li>• ROI/impact modeling (HEART, CLTV/churn)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">{t("projects_title")}</h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-6">{t("projects_intro")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Tile title={t("project_adac")} img="https://placehold.co/800x450/png?text=ADAC+Car+Insurance" href="/projects" />
          <Tile title={t("project_strategy")} img="https://placehold.co/800x450/png?text=UX+Strategy" href="/projects" />
          <Tile title={t("project_zooplus_pricing")} img="https://placehold.co/800x450/png?text=zooplus+Pricing" href="/projects" />
          <Tile title={t("project_reops")} img="https://placehold.co/800x450/png?text=ResearchOps" href="/projects" />
          <Tile title={t("project_swisslife")} img="https://placehold.co/800x450/png?text=Swiss+Life+B2B2C" href="/projects" />
          <Tile title={t("project_methodcards")} img="https://placehold.co/800x450/png?text=UX+Method+Cards" href="/projects" />
        </div>
      </section>
    </main>
  );
}
