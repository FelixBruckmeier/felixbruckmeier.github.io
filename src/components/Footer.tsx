
export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between">
        <p>© {new Date().getFullYear()} Felix Bruckmeier — UXR Portfolio</p>
        <div className="flex gap-4">
          <a href="/assets/CV_Felix_Bruckmeier.pdf" className="underline">CV Download</a>
          <a href="mailto:felix.bruckmeier@example.com" className="underline">E‑Mail</a>
          <a href="https://www.linkedin.com/in/felixbruckmeier" className="underline" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
