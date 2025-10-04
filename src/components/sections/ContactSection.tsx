// src/components/sections/ContactSection.tsx
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";
import InfoTile from "@/components/ui/InfoTile";
import { layout, spacing, colors, icon } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const { t } = useTranslation();
  const calendarUrl =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0oPGXHnWXdq3-zK6GQhHm2ESA4SVlsx5ziYevEBxKE7MXlGBWgUN9yuCUp9TsirOrT9kR459cC";

  return (
    <Section id="contact" title="Contact">
      <div className={cn(layout.flexColCenter, spacing.gap6)}>
        {/* InfoTile nur informativ (kein Link mehr, sonst doppeltes <a>) */}
        <InfoTile
          title={t("contact.title", "Schedule a Discovery Call")}
          description={t(
            "contact.cta",
            "Book a time directly in my Google Calendar – quick and easy."
          )}
          icon={<Calendar className={cn(icon.lg, colors.accent.text)} />}
          className="items-center text-center"
        />

        {/* CTA Button ist der einzige Link */}
        <Button asChild variant="secondary" size="lg">
          <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
            {t("contact.button", "Open Calendar")}
          </a>
        </Button>
      </div>
    </Section>
  );
}
