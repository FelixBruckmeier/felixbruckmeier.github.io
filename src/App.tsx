import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/AppLayout";
import Home from "@/pages/Home";
import CV from "@/pages/CV";

// Projektseiten
import ADAC from "@/pages/projects/ADAC";
import CarInsurance from "@/pages/projects/CarInsurance";
import SwissLife from "@/pages/projects/SwissLife";
import ZooplusReOps from "@/pages/projects/ZooplusReOps";
import ZooplusPricing from "@/pages/projects/ZooplusPricing";
import PricingUsability from "@/pages/projects/PricingUsability";
import UXMethodCards from "@/pages/projects/UXMethodCards";
import WinningUXStrategy from "@/pages/projects/WinningUXStrategy";

// Optional: Falls du eine NotFound-Seite hast, kannst du sie hier aktivieren
// import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="cv" element={<CV />} />

        {/* Projekt-Routen */}
        <Route path="projects/adac" element={<ADAC />} />
        <Route path="projects/adac-car-insurance" element={<ADAC />} /> {/* Alias */}
        <Route path="projects/car-insurance" element={<CarInsurance />} />
        <Route path="projects/swiss-life" element={<SwissLife />} />
        <Route path="projects/zooplus-reops" element={<ZooplusReOps />} />
        <Route path="projects/zooplus-pricing" element={<ZooplusPricing />} />
        <Route path="projects/pricing-usability" element={<PricingUsability />} />
        <Route path="projects/ux-method-cards" element={<UXMethodCards />} />
        <Route path="projects/winning-ux-strategy" element={<WinningUXStrategy />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />

        {/* Wenn du NotFound nutzen willst:
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} /> */}
      </Route>
    </Routes>
  );
}
