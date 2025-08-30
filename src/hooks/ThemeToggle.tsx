import React from "react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-md border border-[hsl(var(--border))] px-3 py-1 text-sm hover:bg-[hsl(var(--muted))]"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <span className="hidden sm:inline">{theme === "dark" ? "Dark" : "Light"}</span>
      <span aria-hidden="true">{theme === "dark" ? "🌙" : "☀️"}</span>
    </button>
  );
}
