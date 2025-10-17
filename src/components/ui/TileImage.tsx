// src/components/ui/TileImage.tsx
import { cn } from "@/lib/utils";
import { transitions, hoverEffects, radii } from "@/lib/tokens";
import { ArrowRight } from "lucide-react";

type PictureSource = {
  srcset: string;
  type: string;
  sizes?: string;
};

type PictureObject = {
  img: { src: string; width: number; height: number };
  sources?: PictureSource[];
};

type TileImageProps = React.HTMLAttributes<HTMLDivElement> & {
  image: string | PictureObject;
  title?: string;
  caption?: string;
  variant?: "default" | "hoverLift";
};

export default function TileImage({
  image,
  title,
  caption,
  variant = "hoverLift",
  className,
  ...props
}: TileImageProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden aspect-[4/3]",
        radii.xl,
        transitions.default,
        variant === "hoverLift" && hoverEffects.smoothLift,
        className
      )}
      {...props}
    >
      {/* === Hintergrundbild (unterstützt imagetools picture oder normalen String) === */}
      <div className="absolute inset-0 bg-black">
        {typeof image === "string" ? (
          <img
            src={image}
            alt={title || ""}
            loading="lazy"
            className={cn(
              "absolute inset-0 w-full h-full object-cover object-center scale-[1.15]",
              "transition-transform duration-500 ease-out will-change-transform"
            )}
          />
        ) : (
          <picture className="absolute inset-0">
            {Array.isArray(image.sources) &&
              image.sources.map((source) => (
                <source key={source.srcset} {...source} />
              ))}
            <img
              src={image.img?.src || ""}
              alt={title || ""}
              width={image.img?.width}
              height={image.img?.height}
              loading="lazy"
              className={cn(
                "absolute inset-0 w-full h-full object-cover object-center scale-[1.15]",
                "transition-transform duration-500 ease-out will-change-transform"
              )}
            />
          </picture>
        )}
      </div>

      {/* === Overlay === */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-b from-black/55 via-black/45 to-black/60",
          "dark:from-black/60 dark:via-black/50 dark:to-black/70",
          "transition-opacity duration-300 group-hover:from-black/60 group-hover:to-black/70"
        )}
      />

      {/* === Text === */}
      <div
        className={cn(
          "relative z-10 flex flex-col h-full p-4",
          "justify-start md:justify-end"
        )}
      >
        {title && (
          <h3
            className={cn(
              "text-xl font-semibold mb-1 text-gray-50",
              "drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]"
            )}
          >
            {title}
          </h3>
        )}
        {caption && (
          <p
            className={cn(
              "text-base text-gray-100 leading-snug",
              "drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
            )}
          >
            {caption}
          </p>
        )}
      </div>

      {/* === Mobile CTA === */}
      <div
        className={cn(
          "absolute bottom-3 right-3 md:hidden z-20 flex items-center justify-center",
          "w-9 h-9 rounded-full backdrop-blur-sm pointer-events-none",
          "bg-white/80 text-gray-900 dark:bg-black/70 dark:text-gray-100",
          "shadow-md transition-transform duration-300 group-hover:scale-105"
        )}
      >
        <ArrowRight className="w-5 h-5" />
      </div>
    </div>
  );
}
