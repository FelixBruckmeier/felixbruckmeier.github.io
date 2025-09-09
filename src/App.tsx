import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

export default function App() {
  const LinkCls = ({ isActive }: { isActive: boolean }) =>
    "px-3 py-2 rounded " + (isActive ? "bg-[hsl(var(--muted))]" : "hover:bg-[hsl(var(--muted))]");

  return (
    <BrowserRouter>
      <header className="border-b bg-[hsl(var(--background))]">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <NavLink to="/" className="font-semibold">Felix Bruckmeier</NavLink>
          <nav className="flex gap-1 text-sm">
            <NavLink to="/" className={({isActive}) => LinkCls({isActive})}>Home</NavLink>
            <NavLink to="/work" className={({isActive}) => LinkCls({isActive})}>Cases</NavLink>
            <NavLink to="/about" className={({isActive}) => LinkCls({isActive})}>Über mich</NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[hsl(var(--muted-foreground))]">
          © {new Date().getFullYear()} Felix Bruckmeier — UXR Portfolio
        </div>
      </footer>
    </BrowserRouter>
  );
}
