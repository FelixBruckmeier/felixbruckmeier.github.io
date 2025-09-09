export default function App() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <section className="rounded-2xl border border-border p-6 bg-background">
        <h1 className="text-2xl font-semibold">UXR Portfolio</h1>
        <p className="mt-2 opacity-80">
          Wenn diese Karte abgerundet und mit Rahmen/Farben erscheint, ist Tailwind v4 aktiv.
        </p>

        <div className="mt-4 flex items-center gap-3">
          <button className="rounded-xl border border-border px-4 py-2 hover:opacity-80">
            Test-Button
          </button>
          <span className="text-sm opacity-70">bg-background / text-foreground / border-border sind gemappt.</span>
        </div>
      </section>
    </main>
  );
}
