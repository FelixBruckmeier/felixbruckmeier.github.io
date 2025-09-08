import React from "react";

type TileProps = {
  title: string;
  subtitle?: string;
  href?: string;
  img?: string;
};

export const Tile: React.FC<TileProps> = ({ title, subtitle, href, img }) => {
  const content = (
    <div className="rounded-lg overflow-hidden border research-glow bg-[hsl(var(--card))]">
      {img && (
        <div className="aspect-[16/9] bg-[hsl(var(--muted))]">
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">{subtitle}</p>}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:no-underline">
        {content}
      </a>
    );
  }
  return content;
};
