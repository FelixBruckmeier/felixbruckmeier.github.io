// src/components/common/ScrollToHash.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // kurze Verzögerung, damit DOM sicher aufgebaut ist
      }
    }
  }, [location]);

  return null;
}
