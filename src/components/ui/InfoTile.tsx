// src/components/ui/InfoTile.tsx
import { ReactNode } from "react";
import Tile from "@/components/ui/Tile";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { cn } from "@/lib/utils";
import { colors, layout, spacing, radii } from "@/lib/tokens";
import { Link } from "react-router-dom";

type InfoTileProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  link?: string;
  className?: string;
};

export default function InfoTile({
  title,
  description,
  icon,
  image,
  link,
  className,
}: InfoTileProps) {
  const content = (
    <Tile
      className={cn(
        "cursor-pointer",
        layout.flexCol,
        layout.itemsStart,
        layout.textLeft,
        spacing.gap4,
        layout.fullHeight,
        className
      )}
    >
      {icon && (
        <div className={cn(spacing.p3, radii.full, colors.accent.bg)}>{icon}</div>
      )}
      {image && (
        <img
          src={image}
          alt={title}
          className={cn(layout.imageCover, radii.lg)}
        />
      )}

      <Subtitle>{title}</Subtitle>
      <Body className={colors.muted.text}>{description}</Body>
    </Tile>
  );

  if (link) {
    if (link.startsWith("http")) {
      return (
        <a href={link} target="_blank" rel="noopener" className={layout.block}>
          {content}
        </a>
      );
    }
    return (
      <Link to={link} className={layout.block}>
        {content}
      </Link>
    );
  }

  return content;
}
