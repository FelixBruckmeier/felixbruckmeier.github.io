import { Outlet } from "react-router-dom";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
