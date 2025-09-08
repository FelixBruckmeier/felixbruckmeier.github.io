import React from "react";

export const ThemeToggle: React.FC = () => {
  const [dark, setDark] = React.useState<boolean>(() =>
    document.documentElement.classList.contains("dark")
  );

  React.useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else if (stored === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-2 rounded-md border hover:opacity-90 transition text-sm"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};
