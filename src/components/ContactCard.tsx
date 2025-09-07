export default function ContactCard() {
  return (
    <a
      href="mailto:felix.bruckmeier@proton.me?subject=Discovery%20Call"
      className="block rounded-2xl border border-border p-6 shadow hover:shadow-md transition-shadow"
    >
      <div className="font-semibold">Schedule a Discovery Call</div>
      <p className="mt-1 text-sm text-muted-foreground">
        I&apos;m eager to learn about your challenges and explore how my expertise in Strategic UX Research, ResearchOps, and UX Strategy can help. Let&apos;s connect!
      </p>
    </a>
  );
}
