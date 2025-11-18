// src/App.tsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AppLayout from "@/AppLayout";
import Home from "@/pages/Home";
import CVPage from "@/pages/cv";

// 🔹 Projektseiten
import CarInsurance from "@/pages/projects/CarInsurance";
import ZooplusReOps from "@/pages/projects/ZooplusReOps";
import ZooplusPricing from "@/pages/projects/ZooplusPricing";
import InsuranceBrokerDiscovery from "@/pages/projects/InsuranceBroker";
import WorkshopPage from "@/pages/projects/workshop";
import KanoStrategyPage from "@/pages/projects/kanostrategy"; // ✅ NEU hinzugefügt

// 🔹 Expertise-Seiten
import UXStrategy from "@/pages/expertise/UXStrategy";
import StrategicUXResearch from "@/pages/expertise/StrategicUXResearch";
import ResearchOps from "@/pages/expertise/ResearchOps";
import TeamLeadership from "@/pages/expertise/TeamLeadership";
import ImpactMeasurement from "@/pages/expertise/ImpactMeasurement";
import SkillAssessmentPage from "@/pages/expertise/TeamLeadership/skillassessment";

// 🔹 Footer-/Legal-Seiten
import Imprint from "@/pages/shared/Imprint";
import Privacy from "@/pages/shared/Privacy";

/** ScrollToTop */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/** ScrollToHash */
function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
    }
  }, [location]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* 🔹 Hauptseiten */}
          <Route index element={<Home />} />
          <Route path="cv" element={<CVPage />} />

          {/* 🔹 Projektseiten */}
          <Route path="projects/car-insurance" element={<CarInsurance />} />
          <Route path="projects/zooplus-reops" element={<ZooplusReOps />} />
          <Route path="projects/zooplus-pricing" element={<ZooplusPricing />} />
          <Route
            path="projects/insurance-broker-discovery"
            element={<InsuranceBrokerDiscovery />}
          />
          
          <Route path="projects/workshop" element={<WorkshopPage />} />
          <Route
            path="projects/kanostrategy"
            element={<KanoStrategyPage />}
          /> {/* ✅ NEU */}
          <Route path="projects" element={<Navigate to="/" replace />} />

          {/* 🔹 Expertise-Seiten */}
          <Route path="expertise/ux-strategy" element={<UXStrategy />} />
          <Route
            path="expertise/strategic-ux-research"
            element={<StrategicUXResearch />}
          />
          <Route path="expertise/researchops" element={<ResearchOps />} />
          <Route
            path="expertise/team-leadership"
            element={<TeamLeadership />}
          />
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
