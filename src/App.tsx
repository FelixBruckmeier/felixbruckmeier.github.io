import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/AppLayout";
import Home from "@/pages/Home";
import CV from "@/pages/CV";

// Projektseiten
import CarInsurance from "@/pages/projects/CarInsurance";
import SwissLife from "@/pages/projects/SwissLife";
import ZooplusReOps from "@/pages/projects/ZooplusReOps";
import ZooplusPricing from "@/pages/projects/ZooplusPricing";
import UXMethodCards from "@/pages/projects/UXMethodCards";
import WinningUXStrategy from "@/pages/projects/WinningUXStrategy";
import DeleteCase from "@/pages/projects/DeleteCase";
import AtossReOps from "@/pages/projects/AtossReOps";

// Expertise-Seiten
import UXStrategy from "@/pages/expertise/UXStrategy";
import StrategicUXResearch from "@/pages/expertise/StrategicUXResearch";
import ResearchOps from "@/pages/expertise/ResearchOps";
import TeamLeadership from "@/pages/expertise/TeamLeadership";
import ImpactMeasurement from "@/pages/expertise/ImpactMeasurement";
import Skillmap from "@/pages/expertise/Skillmap"; // 👈 NEU hinzugefügt

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="cv" element={<CV />} />

        {/* Projekt-Routen */}
        <Route path="projects/car-insurance" element={<CarInsurance />} />
        <Route path="projects/swiss-life-b2b2c" element={<SwissLife />} />
        <Route path="projects/zooplus-reops" element={<ZooplusReOps />} />
        <Route path="projects/zooplus-pricing" element={<ZooplusPricing />} />
        <Route path="projects/ux-method-cards" element={<UXMethodCards />} />
        <Route path="projects/winning-ux-strategy" element={<WinningUXStrategy />} />
        <Route path="projects/delete-case" element={<DeleteCase />} />
        <Route path="projects/atoss-reops" element={<AtossReOps />} />

        {/* Expertise-Routen */}
        <Route path="expertise/ux-strategy" element={<UXStrategy />} />
        <Route path="expertise/strategic-ux-research" element={<StrategicUXResearch />} />
        <Route path="expertise/researchops" element={<ResearchOps />} />
        <Route path="expertise/team-leadership" element={<TeamLeadership />} />
        <Route path="expertise/impact-measurement" element={<ImpactMeasurement />} />
        <Route path="expertise/skillmap" element={<Skillmap />} /> {/* 👈 NEU */}

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
