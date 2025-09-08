import React from "react";
import { useI18n } from "../i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">{t("about_title")}</h1>
      <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
        {t("about_body")}
      </p>
    </main>
  );
}
