export default function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Felix Bruckmeier</p>
        <nav className="flex items-center gap-4">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="/assets/CV_Felix_Bruckmeier.pdf" className="hover:underline">CV</a>
        </nav>
      </div>
    </footer>
  );
}
