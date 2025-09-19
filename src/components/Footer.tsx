import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-border">
      <div className="container-responsive py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {year} Felix Bruckmeier — All rights reserved.
        </p>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            className="text-muted-foreground hover:text-foreground hover:underline"
            to="/imprint"
          >
            Imprint
          </Link>
          <Link
            className="text-muted-foreground hover:text-foreground hover:underline"
            to="/privacy"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
