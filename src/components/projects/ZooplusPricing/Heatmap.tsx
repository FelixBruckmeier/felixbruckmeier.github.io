import React, { useEffect, useRef } from "react";

export default function Heatmap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const spots = [
      { x: 350, y: 140, r: 50 },  // Preisbereich
      { x: 150, y: 120, r: 70 },  // Produktbild
      { x: 360, y: 230, r: 40 },  // CTA
      { x: 260, y: 330, r: 80 },  // Beschreibung
    ];

    const colors = [
      { color: "rgba(59,10,145,0.3)", offset: 120 },
      { color: "rgba(37,99,235,0.25)", offset: 90 },
      { color: "rgba(34,197,94,0.25)", offset: 70 },
      { color: "rgba(253,224,71,0.3)", offset: 50 },
      { color: "rgba(249,115,22,0.35)", offset: 30 },
      { color: "rgba(220,38,38,0.4)", offset: 15 },
    ];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    spots.forEach((spot) => {
      colors.forEach((layer) => {
        const radius = spot.r + layer.offset;
        const gradient = ctx.createRadialGradient(
          spot.x, spot.y, 0, spot.x, spot.y, radius
        );
        gradient.addColorStop(0, layer.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(spot.x, spot.y, radius, 0, 2 * Math.PI);
        ctx.fill();
      });
    });
  }, []);

  return (
    <div className="w-full border border-border rounded-2xl p-6 bg-background shadow-md">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Heatmap links */}
        <div className="relative w-full md:w-2/3 max-w-2xl border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <div className="px-4 py-2 bg-muted/40 border-b border-gray-200 text-sm font-medium">
            PDP-Heatmap (Beispiel, simuliert)
          </div>

          {/* Mockup PDP */}
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="h-40 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center text-gray-400">
              Produktbild
            </div>
            <div className="flex flex-col space-y-3">
              <div className="h-6 w-3/4 bg-gray-100 rounded"></div>
              <div className="h-5 w-1/2 bg-gray-100 rounded"></div>
              <div className="h-16 w-full bg-gray-100 rounded"></div>
              <button className="px-4 py-2 bg-gray-200 rounded-md w-32 text-gray-500">
                CTA-Button
              </button>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="h-16 w-full bg-gray-100 rounded"></div>
          </div>

          {/* Heatmap Overlay */}
          <canvas
            ref={canvasRef}
            width={600}
            height={450}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />
        </div>

        {/* Ergebnis rechts */}
        <div className="md:w-1/3 space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Ergebnis: Der Preisbereich stand im Zentrum der Aufmerksamkeit,
            dennoch gab es Missverständnisse bei einzelnen Preiskomponenten.
            Produktbilder dominierten den Ersteindruck, während CTA und
            Beschreibung zwar wahrgenommen, aber weniger intensiv betrachtet wurden.
          </p>
        </div>
      </div>
    </div>
  );
}
