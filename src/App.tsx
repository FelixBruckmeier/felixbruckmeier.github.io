import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Expertise from "@/pages/Expertise";
import Projects from "@/pages/Projects";
import CV from "@/pages/CV";
import Impressum from "@/pages/Impressum";
import { I18nProvider } from "@/i18n";

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <div className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </div>
      </I18nProvider>
    </BrowserRouter>
  );
}
