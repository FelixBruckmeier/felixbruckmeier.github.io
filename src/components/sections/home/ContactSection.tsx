// src/components/sections/ContactSection.tsx
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";
import InfoTile from "@/components/ui/InfoTile";
import { layout, spacing, colors, icon, hoverEffects } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const { t } = useTranslation();
  const calendarUrl =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0oPGXHnWXdq3-zK6GQhHm2ESA4SVlsx5ziYevEBxKE7MXlGBWgUN9yuCUp9TsirOrT9kR459cC";

  const handleClick = () =>
    window.open(calendarUrl, "_blank", "noopener,noreferrer");

  return (
    <Section id="contact" title="Contact">
      <div className={cn(layout.flexColCenter, spacing.gap6)}>
        {/* Ganze Kachel klickbar */}
        <div
          onClick={handleClick}
          className={cn(
            "cursor-pointer w-full max-w-2xl",
            hoverEffects.smoothLift
          )}
        >
          <InfoTile
            title={t("contact.title", "Schedule a Discovery Call")}
            description={t(
              "contact.cta",
              "Book a time directly in my Google Calendar – quick and easy."
            )}
            icon={<Calendar className={cn(icon.lg, colors.accent.text)} />}
            className="items-center text-center"
          />
        </div>

        {/* Button unten bleibt zusätzlich */}
        <Button variant="secondary" size="lg" onClick={handleClick}>
          {t("contact.button", "Open Calendar")}
        </Button>
      </div>
    </Section>
  );
}
