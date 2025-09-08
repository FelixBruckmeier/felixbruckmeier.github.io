import React from "react";
import { useI18n } from "../i18n";

export default function Contact() {
  const { t } = useI18n();
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">{t("contact_title")}</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-6">{t("contact_body")}</p>

      <div className="space-y-2">
        <a
          href="mailto:felix.bruckmeier@example.com"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-[hsl(var(--muted))] transition"
        >
          ✉️ Email
        </a>
        <a
          href="https://www.linkedin.com/in/felixbruckmeier"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-[hsl(var(--muted))] transition"
        >
          🔗 LinkedIn
        </a>
      </div>
    </main>
  );
}
