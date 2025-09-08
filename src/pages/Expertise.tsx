import React from "react";
import { useI18n } from "../i18n";

export default function Expertise() {
  const { t } = useI18n();
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">{t("expertise_title")}</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-6">{t("expertise_summary")}</p>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="UX Strategy" body={t("expertise_item_strategy")} />
        <Card title="ResearchOps" body={t("expertise_item_reops")} />
        <Card title="Impact" body={t("expertise_item_impact")} />
        <Card title="Leadership" body={t("expertise_item_lead")} />
        <Card title="Strategic Research" body={t("expertise_item_research")} />
      </div>
    </main>
  );
}

const Card: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <div className="rounded-lg border p-5 bg-[hsl(var(--card))] research-glow">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-[hsl(var(--muted-foreground))]">{body}</p>
  </div>
);
