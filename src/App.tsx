import { BrowserRouter, Routes, Route, useLocation, useEffect } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ExpertiseDetail from "@/pages/ExpertiseDetail";
import ProjectDetail from "@/pages/ProjectDetail";
import Impressum from "@/pages/Impressum";
import { smoothScrollToId } from "@/lib/scroll";

function HashScroller() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => smoothScrollToId(id), 20);
    }
  }, [location]);
  return null;
}

function Shell() {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Navbar />
      <main className="flex-1">
        <HashScroller />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise/:slug" element={<ExpertiseDetail />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="*" element={<div className='p-8'>404 — Not found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
