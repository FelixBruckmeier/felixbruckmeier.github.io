
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <button
      aria-label="Theme toggle"
      className="px-3 py-1 rounded-sm border hover:opacity-90 transition"
      onClick={() => {
        const next = !isDark;
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
        setIsDark(next);
      }}
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
