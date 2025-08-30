
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import CraftAndResearch from "./pages/CraftAndResearch";
import Contact from "./pages/Contact";
import ProjectsIndex from "./pages/Projects/Index";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import ExpertiseIndex from "./pages/Expertise/Index";
import UXStrategy from "./pages/Expertise/UXStrategy";
import ResearchOps from "./pages/Expertise/ResearchOps";
import ImpactMeasurement from "./pages/Expertise/ImpactMeasurement";
import TeamLeadership from "./pages/Expertise/TeamLeadership";
import StrategicUXResearch from "./pages/Expertise/StrategicUXResearch";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "expertise", element: <ExpertiseIndex /> },
      { path: "expertise/ux-strategy", element: <UXStrategy /> },
      { path: "expertise/research-ops", element: <ResearchOps /> },
      { path: "expertise/impact-measurement", element: <ImpactMeasurement /> },
      { path: "expertise/team-leadership", element: <TeamLeadership /> },
      { path: "expertise/strategic-ux-research", element: <StrategicUXResearch /> },
      { path: "projects", element: <ProjectsIndex /> },
      { path: "projects/:slug", element: <ProjectDetail /> },
      { path: "craft-and-research", element: <CraftAndResearch /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <div className="p-8">404 – Not found</div> }
    ]
  }
]);
