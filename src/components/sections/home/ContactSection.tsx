import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";
import { spacing, colors, icon, hoverEffects, layout } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const { t } = useTranslation();
  const calendarUrl =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0oPGXHnWXdq3-zK6GQhHm2ESA4SVlsx5ziYevEBxKE7MXlGBWgUN9yuCUp9TsirOrT9kR459cC";

  const handleClick = () =>
    window.open(calendarUrl, "_blank", "noopener,noreferrer");

  return (
    <Section id="contact" title="Contact">
      {/* 🔹 Schmalere Inhaltsbreite */}
      <div
        className={cn(
          layout.containerNarrow,
          layout.flexColCenter,
          spacing.gap8,
          layout.maxWidthText
        )}
      >
        {/* === Klickbare Karte === */}
        <div
          onClick={handleClick}
          className={cn(
            "cursor-pointer w-full flex flex-col items-center text-center py-10 rounded-xl",
            hoverEffects.smoothLift,
            colors.tile.bg,
            colors.tile.text
          )}
        >
          {/* --- Rundes Icon --- */}
          <div
            className={cn(
              "flex items-center justify-center aspect-square w-20 rounded-full mb-6",
              colors.notion.blue.bg,
              colors.notion.blue.text
            )}
          >
            <Calendar className={cn(icon.lg)} />
          </div>

          {/* --- Titel & Beschreibung --- */}
          <h3 className="text-xl font-semibold text-foreground">
            {t("contact.title", "Book a Call")}
          </h3>
          <p className="text-muted-foreground mt-2 max-w-sm">
            {t("contact.cta", "Let’s talk about your UX Research challenge.")}
          </p>
        </div>

        {/* === Separater Button === */}
        <Button variant="secondary" size="lg" onClick={handleClick}>
          {t("contact.button", "Open Calendar")}
        </Button>
      </div>
    </Section>
  );
}
