// src/components/sections/ContactFormSection.tsx
import { useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { layout, spacing } from "@/lib/tokens";

export default function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meopygny", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error("Fehler beim Senden");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact-form"
            subtitle="Prefer writing over scheduling a call? Send me a message directly via this form."
      spacing="lg"
    >
      <div
        className={cn(
          layout.containerNarrow,
          layout.flexColCenter,
          spacing.gap8,
          layout.maxWidthText,
          "text-center"
        )}
      >
        {status === "success" ? (
          <div className="p-6 rounded-xl border border-green-400 bg-green-50 text-green-800 dark:bg-green-950 dark:border-green-600 dark:text-green-200">
            <p>✅ Thank you! Your message has been sent successfully.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl flex flex-col gap-6 text-left"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 transition resize-none"
              />
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                variant="secondary"  // 🔹 geändert von "primary" auf "secondary"
                size="lg"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600 text-center mt-2">
                ❌ Something went wrong. Please try again later.
              </p>
            )}
          </form>
        )}
      </div>
    </Section>
  );
}
