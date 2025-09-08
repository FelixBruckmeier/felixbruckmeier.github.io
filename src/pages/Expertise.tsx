import { useI18n } from "@/i18n";
import HouseDiagram from "@/components/HouseDiagram";
export default function Expertise() {
  const { t } = useI18n();
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{t("expertise_title" as any)}</h1>
      <HouseDiagram />
    </main>
  );
}
