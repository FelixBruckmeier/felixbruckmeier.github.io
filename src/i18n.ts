// src/i18n.ts
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import de from "@/locales/de.json";
import en from "@/locales/en.json";

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: { de: { translation: de }, en: { translation: en } },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export type Lang = "de" | "en";
export const useI18n = () => {
  const { t, i18n } = useTranslation();
  const lang: Lang = i18n.language?.startsWith("de") ? "de" : "en";
  const setLang = (l: Lang) => i18n.changeLanguage(l);
  return { t, i18n, lang, setLang };
};

export default i18n;
