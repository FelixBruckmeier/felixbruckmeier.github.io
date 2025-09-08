import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(stored ? stored === "dark" : prefers);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) { root.classList.add("dark"); localStorage.setItem("theme","dark"); }
    else { root.classList.remove("dark"); localStorage.setItem("theme","light"); }
  }, [dark]);
  return <button aria-label="Toggle theme" onClick={()=>setDark(v=>!v)} className="rounded-md border border-neutral-300 dark:border-neutral-700 px-2 py-1 text-xs">{dark?"Light":"Dark"}</button>;
}
