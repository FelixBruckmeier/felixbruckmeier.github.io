
import { useEffect, useState } from "react";
import { getLocale, setLocale, Locale } from "@/lib/i18n";

export default function LanguageToggle() {
  const [lang, setLang] = useState<Locale>("de");
  useEffect(() => setLang(getLocale()), []);

  return (
    <button
      className="px-3 py-1 rounded-sm border hover:opacity-90 transition"
      aria-label="Language toggle"
      onClick={() => {
        const next = lang === "de" ? "en" : "de";
        setLocale(next);
        setLang(next);
      }}
    >
      {lang.toUpperCase()}
    </button>
  );
}
