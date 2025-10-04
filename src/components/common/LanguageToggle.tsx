import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const curr = i18n.language.startsWith("de") ? "de" : "en";
  const next = curr === "de" ? "en" : "de";
  return (
    <button
      className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700
                 hover:bg-muted transition text-sm
                 text-neutral-700 dark:text-neutral-300"
      onClick={() => i18n.changeLanguage(next)}
      aria-label="Toggle language"
      title={curr === "de" ? "Switch to English" : "Auf Deutsch umschalten"}
    >
      {curr.toUpperCase()}
    </button>
  );
}
