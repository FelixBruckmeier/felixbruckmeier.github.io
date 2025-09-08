import { useTranslation } from "react-i18next";
export default function LangToggle() {
  const { i18n } = useTranslation();
  const curr = i18n.language.startsWith("de") ? "de" : "en";
  const next = curr === "de" ? "en" : "de";
  return <button aria-label="Toggle language" onClick={()=>i18n.changeLanguage(next)} className="rounded-md border border-neutral-300 dark:border-neutral-700 px-2 py-1 text-xs">{curr.toUpperCase()}</button>;
}
