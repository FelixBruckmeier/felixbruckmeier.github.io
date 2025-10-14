import Section from "@/components/ui/Section";
import Tile from "@/components/ui/Tile";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { User, Mail, Info } from "lucide-react";

export default function ImprintSection() {
  return (
    <Section id="imprint" spacing="md" fullWidth={false} title="Imprint">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Responsible */}
        <Tile variant="static">
          <div className="flex items-center gap-2 mb-3">
            <User className="w-5 h-5 text-muted-foreground" />
            <Subtitle>Responsible for this Website</Subtitle>
          </div>
          <Body>
            Felix Bruckmeier
            <br />
            Munich, Germany
          </Body>
        </Tile>

        {/* Contact */}
        <Tile variant="static">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <Subtitle>Contact</Subtitle>
          </div>
          <Body>
            <a
              href="mailto:felixbruckmeier@googlemail.com"
              className="text-accent hover:underline"
            >
              felixbruckmeier@googlemail.com
            </a>
          </Body>
        </Tile>

        {/* Legal Note */}
        <Tile variant="static" className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-muted-foreground" />
            <Subtitle>Legal Notice</Subtitle>
          </div>
          <Body>
            This website is a private, non-commercial portfolio project. It is
            not intended for business purposes, but serves solely to present
            selected work and expertise.
          </Body>
        </Tile>
      </div>
    </Section>
  );
}
