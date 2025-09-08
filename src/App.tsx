import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./i18n";
import { Navbar } from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Projects from "./pages/Projects";
import Craft from "./pages/Craft";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter basename="/">
        <div className="min-h-dvh flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/craft" element={<Craft />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <footer className="border-t mt-10">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[hsl(var(--muted-foreground))]">
              <p>© {new Date().getFullYear()} Felix Bruckmeier — UXR Portfolio</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}
