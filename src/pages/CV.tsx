import { useI18n } from "@/i18n";
export default function CV() {
  const { t } = useI18n();
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{t("cv_title")}</h1>
      <a href="/assets/CV_Felix_Bruckmeier.pdf" className="underline">PDF öffnen</a>
    </main>
  );
}
