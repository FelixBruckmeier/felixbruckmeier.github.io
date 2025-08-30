import React, { ReactNode } from "react";

export default function Section({ id, title, children, className }: { id: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`section-pad ${className ?? ""}`}>
      <div className="container-site px-4">
        <h2 className="section-title text-3xl md:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
