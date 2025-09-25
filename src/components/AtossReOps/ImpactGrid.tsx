import React from "react";

type Item = { title: string; desc: string };
export default function ImpactGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl border border-border bg-background p-5 shadow-sm">
          <h4 className="font-semibold">{it.title}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}
