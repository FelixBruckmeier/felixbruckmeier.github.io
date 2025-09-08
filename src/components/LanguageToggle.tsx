import React from "react";
import { useI18n } from "../i18n";

export const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useI18n();
  const flip = () => setLang(lang === "de" ? "en" : "de");

  return (
    <button
      onClick={flip}
      className="px-3 py-2 rounded-md border hover:opacity-90 transition text-sm"
      aria-label="Toggle language"
      title="Toggle language"
    >
      {lang.toUpperCase()}
    </button>
  );
};
