import { Routes, Route } from "react-router-dom";
import AppLayout from "@/AppLayout";
import Home from "@/pages/Home";
import CV from "@/pages/CV";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
      </Route>
    </Routes>
  );
}
