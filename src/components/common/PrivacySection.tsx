// src/components/sections/shared/PrivacySection.tsx
import Section from "@/components/ui/Section";
import Tile from "@/components/ui/Tile";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { Mail, Shield, Server, Eye } from "lucide-react";

export default function PrivacySection() {
  return (
    // Titel kommt vom PageLayout → hier ohne title
    <Section id="privacy" spacing="md" fullWidth={false}>
      <div className="grid gap-6 md:grid-cols-2">
        {/* General Info */}
        <Tile variant="static">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-muted-foreground" />
            <Subtitle>General Information</Subtitle>
          </div>
          <Body>
            This website is operated as a private, non-commercial portfolio
            project. No personal data is actively collected.
          </Body>
        </Tile>

        {/* Contact */}
        <Tile variant="static">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <Subtitle>Contact</Subtitle>
          </div>
          <Body>
            If you contact me by email, your data will be used solely to process
            your request.
          </Body>
          <Body className="mt-2">
            <a
              href="mailto:felixbruckmeier@googlemail.com"
              className="text-accent hover:underline"
            >
              felixbruckmeier@googlemail.com
            </a>
          </Body>
        </Tile>

        {/* Hosting */}
        <Tile variant="static">
          <div className="flex items-center gap-2 mb-3">
            <Server className="w-5 h-5 text-muted-foreground" />
            <Subtitle>Hosting</Subtitle>
          </div>
          <Body>
            This website is hosted on GitHub Pages. Technical information (such
            as IP address, browser type, operating system) may be logged
            automatically for delivery and security purposes.
          </Body>
          <Body className="mt-2">
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub Privacy Policy
            </a>
          </Body>
        </Tile>

        {/* No Tracking */}
        <Tile variant="static">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-5 h-5 text-muted-foreground" />
            <Subtitle>No Tracking</Subtitle>
          </div>
          <Body>
            This website does not use cookies, analytics tools, or tracking
            technologies.
          </Body>
        </Tile>
      </div>

      {/* Rights of Data Subjects */}
      <div className="mt-10">
        <Subtitle className="mb-3">Rights of Data Subjects</Subtitle>
        <Body>
          You have the right to request information about the personal data
          stored about you, as well as the right to correction, deletion, and
          restriction of processing in accordance with applicable data
          protection laws.
        </Body>
      </div>
    </Section>
  );
}
