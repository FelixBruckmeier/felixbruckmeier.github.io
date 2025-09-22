import React from "react";
import { motion } from "framer-motion";

export default function PrototypeAnimation() {
  return (
    <div className="flex items-center justify-center gap-8 bg-gray-50 p-6 rounded-xl border">
      {/* Mock Desktop App */}
      <div className="w-80 h-56 bg-white rounded-lg shadow-md border flex flex-col">
        {/* Header */}
        <div className="h-6 bg-gray-200 rounded-t-lg flex items-center px-2">
          <div className="w-3 h-3 bg-red-400 rounded-full mr-1" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1" />
          <div className="w-3 h-3 bg-green-400 rounded-full" />
        </div>
        {/* Body */}
        <div className="flex-1 p-4 space-y-3">
          <motion.div
            className="h-6 bg-gray-100 rounded"
            animate={{ backgroundColor: ["#f3f4f6", "#bfdbfe", "#f3f4f6"] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <motion.div
            className="h-6 bg-gray-100 rounded w-2/3"
            animate={{ backgroundColor: ["#f3f4f6", "#bfdbfe", "#f3f4f6"] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          />
          <motion.button
            className="h-8 bg-blue-500 text-white rounded px-3"
            animate={{ scale: [1, 0.95, 1] }}
            transition={{ repeat: Infinity, duration: 3, delay: 2 }}
          >
            Submit
          </motion.button>
        </div>
      </div>

      {/* Figuren schematisch */}
      <div className="flex flex-col items-center space-y-6">
        {/* Interviewer */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <motion.div
            className="bg-gray-200 px-3 py-1 rounded-lg text-sm"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 6, delay: 0 }}
          >
            Can you explain this?
          </motion.div>
        </div>

        {/* Teilnehmer */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-400 rounded-full" />
          <motion.div
            className="bg-blue-100 px-3 py-1 rounded-lg text-sm"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 6, delay: 3 }}
          >
            I’d click here…
          </motion.div>
        </div>
      </div>
    </div>
  );
}
