
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12 text-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <p>© {new Date().getFullYear()} Felix Bruckmeier — UXR Portfolio</p>
        <div className="flex gap-4">
          <Link to="/impressum" className="underline">Impressum</Link>
        </div>
      </div>
    </footer>
  );
}
