// src/components/layout/AppLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar"; // ✅ korrigierter Importname
import Footer from "@/components/common/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* === Navigation (mit Burger-Menü) === */}
      <Navbar />

      {/* === Seiteninhalt === */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* === Footer === */}
      <Footer />
    </div>
  );
}
