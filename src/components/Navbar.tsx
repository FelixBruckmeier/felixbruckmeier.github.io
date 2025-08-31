
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { smoothScrollToId } from "../lib/scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function goSection(id: string) {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => smoothScrollToId(id), 50);
    } else {
      smoothScrollToId(id);
    }
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur bg-[hsl(var(--background))]/80">
      <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-3 items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/logo.svg" alt="Logo" className="h-6 w-6" />
        </Link>
        <Link to="/" className="justify-self-center md:justify-self-start md:col-start-1 md:col-span-1 font-semibold tracking-tight">
          Felix Bruckmeier
        </Link>
        <div className="justify-self-end md:hidden">
          <button className="px-3 py-1 rounded-sm border" aria-expanded={open} onClick={() => setOpen(s => !s)}>Menu</button>
        </div>
        <nav className="hidden md:flex col-start-2 col-span-2 items-center justify-end gap-6 text-sm">
          <button onClick={() => goSection('about')} className="opacity-80 hover:opacity-100">About</button>
          <button onClick={() => goSection('expertise')} className="opacity-80 hover:opacity-100">Expertise</button>
          <button onClick={() => goSection('projects')} className="opacity-80 hover:opacity-100">Projects</button>
          <button onClick={() => goSection('contact')} className="opacity-80 hover:opacity-100">Contact</button>
        </nav>
        {open && (
          <div className="col-span-3 md:hidden border-t mt-3">
            <ul className="py-3 space-y-2">
              <li><button className="w-full text-left px-1 py-1" onClick={() => goSection('about')}>About</button></li>
              <li><button className="w-full text-left px-1 py-1" onClick={() => goSection('expertise')}>Expertise</button></li>
              <li><button className="w-full text-left px-1 py-1" onClick={() => goSection('projects')}>Projects</button></li>
              <li><button className="w-full text-left px-1 py-1" onClick={() => goSection('contact')}>Contact</button></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
