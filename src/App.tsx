import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AppLayout from "@/AppLayout";
import Home from "@/pages/Home";
import CVPage from "@/pages/cv";

// 🔹 Temporäre Projekt-Hinweisseite
import PrivateProjects from "@/pages/projects/PrivateProjects";

// Expertise-Seiten
import UXStrategy from "@/pages/expertise/UXStrategy";
import StrategicUXResearch from "@/pages/expertise/StrategicUXResearch";
import ResearchOps from "@/pages/expertise/ResearchOps";
import TeamLeadership from "@/pages/expertise/TeamLeadership";
import ImpactMeasurement from "@/pages/expertise/ImpactMeasurement";
import SkillAssessmentPage from "@/pages/expertise/TeamLeadership/skillassessment";

// Footer-/Legal-Seiten
import Imprint from "@/pages/shared/Imprint";
import Privacy from "@/pages/shared/Privacy";

// 🔹 Scroll-to-top Component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* 🔹 Hauptseiten */}
          <Route index element={<Home />} />
          <Route path="cv" element={<CVPage />} />

          {/* 🔹 Projekt-Routen (aktuell gesperrt → Hinweisseite) */}
          <Route path="projects/*" element={<PrivateProjects />} />

          {/* 🔹 Expertise-Routen */}
          <Route path="expertise/ux-strategy" element={<UXStrategy />} />
          <Route
            path="expertise/strategic-ux-research"
            element={<StrategicUXResearch />}
          />
          <Route path="expertise/researchops" element={<ResearchOps />} />
          <Route path="expertise/team-leadership" element={<TeamLeadership />} />
          <Route
            path="expertise/team-leadership/skillassessment"
            element={<SkillAssessmentPage />}
          />
          <Route
            path="expertise/impact-measurement"
            element={<ImpactMeasurement />}
          />

          {/* 🔹 Footer-/Legal-Seiten */}
          <Route path="imprint" element={<Imprint />} />
          <Route path="privacy" element={<Privacy />} />

          {/* 🔹 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

