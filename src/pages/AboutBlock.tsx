import { t } from "../i18n";

export default function AboutBlock() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">{t("about.title")}</h2>
      <p className="mt-4 text-muted-foreground">{t("about.copy")}</p>
      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        <div className="rounded-2xl border border-border p-4">
          <div className="text-sm font-medium">{t("about.pillars")}</div>
          <ul className="mt-2 text-sm text-muted-foreground space-y-1">
            <li>• {t("about.pillars.empowerment")}</li>
            <li>• {t("about.pillars.impact")}</li>
            <li>• {t("about.pillars.learning")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
