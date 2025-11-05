// src/components/common/ScrollToHash.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const scrollToTarget = () => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 80);
        }
      }
    };

    // reagiert auf Route-Wechsel UND Hash-Änderungen
    scrollToTarget();
    window.addEventListener("hashchange", scrollToTarget);

    return () => {
      window.removeEventListener("hashchange", scrollToTarget);
    };
  }, [location]);

  return null;
}
