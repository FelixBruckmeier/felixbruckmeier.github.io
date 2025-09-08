import { useI18n } from "@/i18n";
export default function Projects() {
  const { t } = useI18n();
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{t("projects_title" as any)}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a className="p-4 rounded-lg border hover:shadow-sm transition" href="#">ADAC Car Insurance</a>
        <a className="p-4 rounded-lg border hover:shadow-sm transition" href="#">zooplus ResearchOps</a>
        <a className="p-4 rounded-lg border hover:shadow-sm transition" href="#">Swiss Life B2B2C</a>
      </div>
    </main>
  );
}
