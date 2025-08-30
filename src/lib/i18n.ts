
export type Locale = "de" | "en";

export function getLocale(): Locale {
  const url = new URL(window.location.href);
  const q = url.searchParams.get("lang");
  const saved = localStorage.getItem("lang") as Locale | null;
  const lang = (q as Locale) || saved || "de";
  return lang;
}

export function setLocale(lang: Locale) {
  localStorage.setItem("lang", lang);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url.toString());
  window.dispatchEvent(new Event("popstate"));
}
