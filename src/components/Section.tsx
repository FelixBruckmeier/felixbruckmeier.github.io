import React, { ReactNode } from "react";

export default function Section({
  id, title, className, children,
}: { id: string; title: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 ${className ?? ""}`}>
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
