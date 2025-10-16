// src/components/layout/AppLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
