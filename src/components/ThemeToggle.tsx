import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark(v => !v)}
      className="px-3 py-1 rounded-full border border-border text-sm hover:bg-muted dark:hover:bg-neutral-800 transition"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
