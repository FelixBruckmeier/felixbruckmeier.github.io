import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CVPage from "./pages/CVPage";
import ADAC from "./pages/projects/ADAC";
import ZooplusReOps from "./pages/projects/ZooplusReOps";
import SwissLife from "./pages/projects/SwissLife";
import ZooplusPricing from "./pages/projects/ZooplusPricing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/project/adac" element={<ADAC />} />
      <Route path="/project/zooplus-reops" element={<ZooplusReOps />} />
      <Route path="/project/swisslife" element={<SwissLife />} />
      <Route path="/project/zooplus-pricing" element={<ZooplusPricing />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
