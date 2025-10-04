import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PrototypeAnimationDetailed() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [selectedInsurance, setSelectedInsurance] = useState<string | null>(null);

  const cursorControls = useAnimation();

  // Ablaufsteuerung
  useEffect(() => {
    const runSequence = async () => {
      // Reset
      setSelectedVehicle(null);
      setSelectedInsurance(null);

      // Cursor sichtbar machen
      await cursorControls.start({ opacity: 1, x: 20, y: 40, transition: { duration: 0 } });

      // Step 1: zu Motorrad fahren
      await cursorControls.start({ x: 120, y: 40, transition: { duration: 1.5 } });
      setSelectedVehicle("Motorrad");

      // Klick-Animation
      await cursorControls.start({ scale: 1.3, transition: { duration: 0.2 } });
      await cursorControls.start({ scale: 1, transition: { duration: 0.2 } });

      // Step 2: zu Haftpflicht fahren
      await cursorControls.start({ x: 40, y: 120, transition: { duration: 1.5 } });
      setSelectedInsurance("Haftpflicht");

      await cursorControls.start({ scale: 1.3, transition: { duration: 0.2 } });
      await cursorControls.start({ scale: 1, transition: { duration: 0.2 } });

      // Step 3: zum Button fahren
      await cursorControls.start({ x: 160, y: 200, transition: { duration: 1.5 } });

      await cursorControls.start({ scale: 1.3, transition: { duration: 0.2 } });
      await cursorControls.start({ scale: 1, transition: { duration: 0.2 } });

      // Kurze Pause
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Wiederholen
      runSequence();
    };

    runSequence();
  }, [cursorControls]);

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 bg-gray-50 p-6 rounded-xl border shadow-sm">
      {/* Formular */}
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-md border p-6 space-y-6 overflow-hidden">
        {/* Fahrzeugtyp */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fahrzeugtyp</label>
          <div className="flex gap-2">
            {["PKW", "Motorrad", "Wohnmobil"].map((type) => (
              <div
                key={type}
                className={`px-3 py-1 rounded-md text-sm border transition-colors ${
                  selectedVehicle === type
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-gray-100 border-gray-300"
                }`}
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* Versicherung */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Versicherung</label>
          <div className="flex gap-2">
            {["Haftpflicht", "Teilkasko", "Vollkasko"].map((type) => (
              <div
                key={type}
                className={`px-3 py-1 rounded-md text-sm border transition-colors ${
                  selectedInsurance === type
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-gray-100 border-gray-300"
                }`}
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          className={`mt-4 px-4 py-2 rounded transition-colors ${
            selectedVehicle && selectedInsurance
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
        >
          Weiter
        </button>

        {/* Cursor als SVG */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="absolute w-6 h-6 fill-black"
          initial={{ opacity: 0 }}
          animate={cursorControls}
        >
          <path d="M3 2L21 12L13 14L15 22L7 10L3 2Z" />
        </motion.svg>
      </div>

      {/* Figuren & Sprechblasen */}
      <div className="flex flex-col items-start space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
          <motion.div
            className="bg-gray-200 px-3 py-1 rounded-lg text-sm shadow-sm"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 6, delay: 0 }}
          >
            Welchen Fahrzeugtyp haben Sie?
          </motion.div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gray-400 rounded-full" />
          <motion.div
            className="bg-blue-100 px-3 py-1 rounded-lg text-sm shadow-sm"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 6, delay: 1.5 }}
          >
            Ich würde Motorrad wählen.
          </motion.div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
          <motion.div
            className="bg-gray-200 px-3 py-1 rounded-lg text-sm shadow-sm"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 6, delay: 3 }}
          >
            Und welche Versicherungsart bevorzugen Sie?
          </motion.div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gray-400 rounded-full" />
          <motion.div
            className="bg-blue-100 px-3 py-1 rounded-lg text-sm shadow-sm"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 6, delay: 4.5 }}
          >
            Eine Haftpflicht.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
