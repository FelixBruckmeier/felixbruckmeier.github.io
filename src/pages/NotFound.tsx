export default function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404 — Not Found</h1>
        <p className="mt-2 text-muted-foreground">
          Sorry, die Seite gibt’s nicht. Zurück zur Startseite?
        </p>
        <a
          href="/"
          className="btn mt-4 inline-flex"
        >
          Home
        </a>
      </div>
    </main>
  );
}
