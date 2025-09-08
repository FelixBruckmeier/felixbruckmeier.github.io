import { useI18n } from "@/i18n";
export default function Impressum() {
  const { t } = useI18n();
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{t("imprint_title" as any)}</h1>
      <p>Angaben gemäß § 5 TMG … (Platzhalter)</p>
      <p className="mt-2">E-Mail: <a className="underline" href="mailto:felix.bruckmeier@example.com">felix.bruckmeier@example.com</a></p>
    </main>
  );
}
