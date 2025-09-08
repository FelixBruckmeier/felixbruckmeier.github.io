import { HashRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "./i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";

export default function App() {
  return (
    <HashRouter>
      <I18nProvider>
        <div className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/impressum" element={<Impressum />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </I18nProvider>
    </HashRouter>
  );
}
