import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";   // ⭐ NEU
import App from "@/App";
import "@/i18n";
import "./index.css";

const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");
  const url = new URL(redirect, window.location.origin);
  window.history.replaceState(null, "", url.pathname + url.search);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>        {/* ⭐ Helmet Provider Wrapper */}
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
