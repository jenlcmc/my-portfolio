import { useEffect, useState, useRef } from 'react';

const SECTION_IDS = ['hero', 'about', 'experience', 'education', 'projects'];

/**
 * Track which section is currently in the viewport.
 * Returns the id of the most visible section.
 */
export function useActiveSection(): string {
  const [active, setActive] = useState('hero');
  const ratioMap = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratioMap.current.set(entry.target.id, entry.intersectionRatio);
        }

        let maxRatio = 0;
        let maxId = 'hero';
        for (const [id, ratio] of ratioMap.current) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        }
        setActive(maxId);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return active;
}
