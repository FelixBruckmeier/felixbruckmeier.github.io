import { Link } from "react-router-dom";
import Section from "@/components/ui/Section";
import { typography, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t border-border")}>
      {/* ✅ Section übernimmt bereits die einheitliche Breite */}
      <Section id="footer" spacing="sm" className="py-6" fullWidth>
        <div className="mx-auto w-full max-w-[1900px] px-[3vw] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className={cn(
              typography.small.font,
              typography.small.size,
              typography.small.weight,
              typography.small.leading,
              colors.muted.text
            )}
          >
            © {year} Felix Bruckmeier — All rights reserved.
          </p>

          <nav
            className={cn(
              "flex items-center gap-4",
              typography.small.font,
              typography.small.size,
              typography.small.leading
            )}
          >
            <Link
              to="/imprint"
              className={cn(colors.muted.text, "hover:underline hover:opacity-80")}
            >
              Imprint
            </Link>
            <Link
              to="/privacy"
              className={cn(colors.muted.text, "hover:underline hover:opacity-80")}
            >
              Privacy
            </Link>
          </nav>
        </div>
      </Section>
    </footer>
  );
}
