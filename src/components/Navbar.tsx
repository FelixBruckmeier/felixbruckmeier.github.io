
import { Link, NavLink } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/expertise", label: "Expertise" },
  { to: "/projects", label: "Projects" },
  { to: "/craft-and-research", label: "Craft & Research" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link to="/" className="font-semibold">Felix Bruckmeier</Link>

        <button className="ml-auto md:hidden px-3 py-1 border rounded-sm"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav">
          Menu
        </button>

        <ul className="hidden md:flex items-center gap-4 ml-auto">
          {nav.map(item => (
            <li key={item.to}>
              <NavLink to={item.to} className={({isActive}) => isActive ? "underline" : "hover:opacity-80"}>{item.label}</NavLink>
            </li>
          ))}
          <li><LanguageToggle/></li>
          <li><ThemeToggle/></li>
        </ul>
      </nav>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t">
          <ul className="px-4 py-3 flex flex-col gap-2">
            {nav.map(item => (
              <li key={item.to}>
                <NavLink to={item.to} onClick={()=>setOpen(false)} className="block py-1">{item.label}</NavLink>
              </li>
            ))}
            <li className="flex gap-2">
              <LanguageToggle/>
              <ThemeToggle/>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
