// src/components/ui/TileImage.tsx
import { cn } from "@/lib/utils";
import { transitions, hoverEffects, radii } from "@/lib/tokens";
import { ArrowRight } from "lucide-react";

export default function TileImage({
  image,
  title,
  caption,
  className,
  ...props
}: any) {
  const isObject = typeof image === "object" && image?.img?.src;

  return (
    <div
      className={cn(
        "group relative overflow-hidden aspect-[4/3]",
        radii.xl,
        transitions.default,
        hoverEffects.smoothLift,
        className
      )}
      {...props}
    >
      {/* === IMAGE-LAYER === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isObject ? (
          <picture className="absolute inset-0">
            {Array.isArray(image.sources) &&
              image.sources.map((s: any) => <source key={s.srcset} {...s} />)}
            <img
              src={image.img.src}
              alt={title || ""}
              className="w-full h-full object-cover object-center scale-[1.15] transition-transform duration-500 ease-out"
              loading="lazy"
              decoding="async"
            />
          </picture>
        ) : (
          <img
            src={image}
            alt={title || ""}
            className="absolute inset-0 w-full h-full object-cover object-center scale-[1.15] transition-transform duration-500 ease-out"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      {/* === OVERLAY === */}
      {/* Light: etwas weicher, Dark: stärker — Text bleibt immer weiß */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none",
          "bg-gradient-to-b from-black/35 via-black/25 to-black/55",
          "dark:from-black/45 dark:via-black/35 dark:to-black/60"
        )}
      />

      {/* === TEXT-LAYER === */}
      <div className="relative z-20 flex flex-col h-full p-4 justify-end select-none">
        {title && (
          <h3 className="text-xl font-semibold mb-1 text-white/85
                         drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            {title}
          </h3>
        )}
        {caption && (
          <p className="text-base text-white/85 leading-snug
                        drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
            {caption}
          </p>
        )}
      </div>

      {/* === MOBILE ARROW === */}
      <div
        className="absolute bottom-3 right-3 md:hidden z-20 w-9 h-9 rounded-full backdrop-blur-sm pointer-events-none
                   bg-white/80 text-gray-900 dark:bg-black/70 dark:text-gray-100
                   flex items-center justify-center"
        aria-hidden="true"
      >
        <ArrowRight className="w-5 h-5 translate-x-[0.5px]" />
      </div>
    </div>
  );
}
