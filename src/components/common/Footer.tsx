import { Link } from "react-router-dom";
import Section from "@/components/ui/Section";
import { typography, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t", colors.border)}>
      <Section
        id="footer"
        border={false}
        spacing="sm"
        className="py-6"
        fullWidth={false} // 👈 sorgt für gleichen Einzug wie Navbar
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
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

          {/* Footer Links */}
          <nav
            className={cn(
              "flex items-center gap-4",
              typography.small.font,
              typography.small.size,
              typography.small.leading
            )}
          >
            <Link
              className={cn(
                colors.muted.text,
                "hover:underline hover:opacity-80"
              )}
              to="/imprint"
            >
              Imprint
            </Link>
            <Link
              className={cn(
                colors.muted.text,
                "hover:underline hover:opacity-80"
              )}
              to="/privacy"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </Section>
    </footer>
  );
}
