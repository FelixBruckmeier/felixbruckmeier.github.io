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
}) {
  const isObject = typeof image === "object" && image?.img?.src;

  return (
    <div
      className={cn(
        "group relative overflow-hidden aspect-[4/3]",
        radii.xl,
        transitions.default,

        // 🔥 Die BOX skaliert wieder – genau wie vorher
        hoverEffects.smoothLift,

        className
      )}
      {...props}
    >
      {/* === IMAGE-LAYER (skaliert NICHT mit der Box!) === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isObject ? (
          <picture className="absolute inset-0">
            {Array.isArray(image.sources) &&
              image.sources.map((s) => <source key={s.srcset} {...s} />)}
            <img
              src={image.img.src}
              alt={title || ""}
              className="w-full h-full object-cover object-center 
                         scale-[1.15] 
                         transition-transform duration-500 ease-out"
            />
          </picture>
        ) : (
          <img
            src={image}
            alt={title || ""}
            className="absolute inset-0 w-full h-full object-cover object-center 
                       scale-[1.15] 
                       transition-transform duration-500 ease-out"
            loading="lazy"
          />
        )}
      </div>

      {/* === DARK OVERLAY === */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/60 pointer-events-none" />

      {/* === TEXT-LAYER (bleibt 100% scharf, skaliert NIE) === */}
      <div
        className="
          relative z-20 flex flex-col h-full p-4 justify-end select-none 
          transform-none will-change-auto
        "
      >
        {title && (
          <h3 className="text-xl font-semibold mb-1 text-gray-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
            {title}
          </h3>
        )}
        {caption && (
          <p className="text-base text-gray-100 leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            {caption}
          </p>
        )}
      </div>

      {/* === MOBILE ARROW === */}
      <div
        className="absolute bottom-3 right-3 md:hidden z-20 
                   w-9 h-9 rounded-full backdrop-blur-sm pointer-events-none
                   bg-white/80 text-gray-900 dark:bg-black/70 dark:text-gray-100"
      >
        <ArrowRight className="w-5 h-5" />
      </div>
    </div>
  );
}
