// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import "@/i18n";
import "./index.css";

/* GitHub Pages 404 Redirect → ursprünglichen Pfad wiederherstellen */
const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");
  // Wichtig: vor dem ersten Render, damit BrowserRouter direkt die richtige URL nimmt
  const url = new URL(redirect, window.location.origin);
  window.history.replaceState(null, "", url.pathname + url.search);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);
