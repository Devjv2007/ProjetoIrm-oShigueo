import { useEffect, useRef, useState } from 'react';

export function useReveal(options: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.unobserve(entry.target);
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, visible };
}
