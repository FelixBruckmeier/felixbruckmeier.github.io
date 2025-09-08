import { useI18n } from "@/i18n";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <button
      aria-label="Toggle language"
      onClick={() => setLang(lang === "de" ? "en" : "de")}
      className="px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
    >
      {lang === "de" ? "DE" : "EN"}
    </button>
  );
}
