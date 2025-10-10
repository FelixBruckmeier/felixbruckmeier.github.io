import Section from "@/components/ui/Section";
import Tile from "@/components/ui/Tile";
import { typography } from "@/lib/tokens";
import { User, Mail, Info } from "lucide-react";

export default function ImprintSection() {
  return (
    // Kein title mehr → PageLayout zeigt "Imprint"
    <Section id="imprint" spacing="md" fullWidth={false}>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Responsible */}
        <Tile variant="static">
          <div className="flex items-center gap-2 mb-3">
            <User className="w-5 h-5 text-muted-foreground" />
            <h3
              className={`${typography.subtitle.size} ${typography.subtitle.weight}`}
            >
              Responsible for this Website
            </h3>
          </div>
          <p className={`${typography.body.size} ${typography.body.leading}`}>
            Felix Bruckmeier
            <br />
            Munich, Germany
          </p>
        </Tile>

        {/* Contact */}
        <Tile variant="static">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <h3
              className={`${typography.subtitle.size} ${typography.subtitle.weight}`}
            >
              Contact
            </h3>
          </div>
          <p className={`${typography.body.size} ${typography.body.leading}`}>
            <a
              href="mailto:felixbruckmeier@googlemail.com"
              className="text-accent hover:underline"
            >
              felixbruckmeier@googlemail.com
            </a>
          </p>
        </Tile>

        {/* Legal Note */}
        <Tile variant="static" className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-muted-foreground" />
            <h3
              className={`${typography.subtitle.size} ${typography.subtitle.weight}`}
            >
              Legal Notice
            </h3>
          </div>
          <p className={`${typography.body.size} ${typography.body.leading}`}>
            This website is a private, non-commercial portfolio project. It is
            not intended for business purposes, but serves solely to present
            selected work and expertise.
          </p>
        </Tile>
      </div>
    </Section>
  );
}
