import { useI18n } from "@/i18n";
export default function About() {
  const { t } = useI18n();
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{t("about_title")}</h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        Weg: Ökonometrie → UXR. Schwerpunkte: Strategie-Alignment, Insights-Aktivierung, ResearchOps Skalierung, Coaching & Mentoring.
      </p>
    </main>
  );
}
