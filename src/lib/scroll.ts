
/** Smooth scroll with easeInOutCubic, adjustable duration based on distance */
export function smoothScrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 72;
  const rect = el.getBoundingClientRect();
  const start = window.scrollY || window.pageYOffset;
  const target = rect.top + start - headerOffset;
  const distance = Math.abs(target - start);
  const duration = Math.min(900, Math.max(400, distance * 0.6));
  const startTime = performance.now();
  const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(progress);
    const current = start + (target - start) * eased;
    window.scrollTo(0, current);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
