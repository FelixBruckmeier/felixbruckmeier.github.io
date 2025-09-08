export default function CV() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold">CV</h1>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">Full résumé (embedded PDF) and quick facts.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <object data="/Felix_Bruckmeier_CV.pdf" type="application/pdf" width="100%" height="800px">
              <p className="p-4">Your browser can't display PDFs. <a className="underline" href="/Felix_Bruckmeier_CV.pdf" target="_blank" rel="noopener">Open the PDF</a>.</p>
            </object>
          </div>
          <aside className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
            <h2 className="font-semibold mb-3">Snapshot</h2>
            <ul className="space-y-2 text-sm">
              <li>Lead / Director UX Research</li>
              <li>ResearchOps setup & scaling</li>
              <li>OKR-linked research roadmaps</li>
              <li>Coaching & enablement</li>
            </ul>
            <a href="/Felix_Bruckmeier_CV.pdf" target="_blank" rel="noopener" className="mt-4 inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold border border-neutral-300 dark:border-neutral-700">Download PDF</a>
          </aside>
        </div>
      </section>
    </main>
  );
}
