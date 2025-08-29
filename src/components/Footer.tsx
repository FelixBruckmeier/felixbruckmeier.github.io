import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[hsl(var(--border))]">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm opacity-80 flex flex-wrap gap-3 items-center justify-between">
        <span>© {new Date().getFullYear()} Felix Bruckmeier</span>
        <a className="hover:text-[hsl(var(--primary))]" href="#top">Back to top</a>
      </div>
    </footer>
  );
}
