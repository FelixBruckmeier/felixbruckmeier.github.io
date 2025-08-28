import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#craft", label: "Craft" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={
      `sticky top-0 z-50 transition ${scrolled ? "bg-[hsl(var(--background))]/80 backdrop-blur border-b border-[hsl(var(--border))]" : "bg-transparent"}`
    }>
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold">Felix Bruckmeier</a>
        <ul className="flex gap-4">
          {links.map(l => (
            <li key={l.href}><a className="hover:text-[hsl(var(--primary))]" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
