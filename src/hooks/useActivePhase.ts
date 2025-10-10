import { useEffect, useState } from "react";

export function useActivePhase() {
  const [active, setActive] = useState<"discover" | "define" | "develop" | "deliver">("discover");

  useEffect(() => {
    const sections = ["discover", "define", "develop", "deliver"];

    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id as typeof active);
            }
          });
        },
        { threshold: 0.3 } // aktiv wenn mind. 30% sichtbar
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((o) => o?.disconnect());
    };
  }, []);

  return active;
}
