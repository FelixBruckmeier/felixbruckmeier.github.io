import en from "./en.json";
import de from "./de.json";

type Dict = Record<string, any>;
const EN = en as Dict;
const DE = de as Dict;

let current: "en" | "de" = (localStorage.getItem("lang") as "en" | "de") || "en";

export function t(key: string): string {
  const dict = current === "de" ? DE : EN;
  const val = (dict as any)[key];
  return typeof val === "string" ? val : key;
}

export function setLang(next: "en" | "de") {
  current = next;
  localStorage.setItem("lang", next);
  window.dispatchEvent(new Event("i18n-rerender"));
}

window.addEventListener("lang-changed", (e: any) => {
  setLang(e?.detail === "de" ? "de" : "en");
});
