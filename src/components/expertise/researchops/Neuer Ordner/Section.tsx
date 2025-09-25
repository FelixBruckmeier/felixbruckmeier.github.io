import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  children: ReactNode;
  center?: boolean;
}

export default function Section({ title, children, center = false }: SectionProps) {
  return (
    <section className={`flex flex-col gap-6 ${center ? "text-center" : "text-left"}`}>
      {title && <h3 className="text-2xl font-semibold">{title}</h3>}
      <div>{children}</div>
    </section>
  );
}
