export default function CV() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container-responsive py-10">
        <h1 className="text-3xl font-extrabold">CV</h1>
        <p className="mt-2 text-muted-foreground">Full résumé (embedded PDF) and quick facts.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-border overflow-hidden">
            <object data="/Felix_Bruckmeier_CV.pdf" type="application/pdf" width="100%" height="800px">
              <p className="p-4">
                Your browser can't display PDFs.{" "}
                <a className="underline" href="/Felix_Bruckmeier_CV.pdf" target="_blank" rel="noopener">
                  Open the PDF
                </a>.
              </p>
            </object>
          </div>
          <aside className="rounded-2xl border border-border p-5">
            <h2 className="font-semibold mb-3">Snapshot</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lead / Director UX Research</li>
              <li>ResearchOps setup & scaling</li>
              <li>OKR-linked research roadmaps</li>
              <li>Coaching & enablement</li>
            </ul>
            <a
              href="/Felix_Bruckmeier_CV.pdf"
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold border border-border hover:bg-muted"
            >
              Download PDF
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
