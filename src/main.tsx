
import { createRoot } from "react-dom/client";
import { StrictMode, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

function ThemeBoot() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved ?? (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);
  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeBoot />
    <RouterProvider router={router} />
  </StrictMode>
);
