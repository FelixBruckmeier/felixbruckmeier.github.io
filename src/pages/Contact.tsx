// src/pages/Contact.tsx
import { H1, IntroText } from "@/components/ui/Tokens";
import Button from "@/components/ui/Button";
import { layout, sectionSpacing, spacing } from "@/lib/tokens";

export default function Contact() {
  return (
    <main className={`${layout.container} ${sectionSpacing.lg} ${spacing.stackMd}`}>
      <H1>Contact</H1>
      <IntroText>
        Happy to connect. Reach out via email or LinkedIn.
      </IntroText>
      <div className="flex gap-3">
        <Button asChild variant="minimal">
          <a href="mailto:felix.bruckmeier@gmail.com">Email</a>
        </Button>
        <Button asChild variant="minimal">
          <a
            href="https://www.linkedin.com/in/felix-bruckmeier"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </Button>
      </div>
    </main>
  );
}
