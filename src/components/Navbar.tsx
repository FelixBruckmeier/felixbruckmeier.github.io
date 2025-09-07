export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur border-b border-border">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <span className="font-semibold">Felix Bruckmeier</span>
        <span className="text-sm text-muted-foreground">UX Research</span>
      </nav>
    </header>
  );
}
