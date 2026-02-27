import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';
import { ACHIEVEMENTS, type Achievement } from '../data/achievements';

interface AchievementState {
  unlocked: Set<string>;
  queue: Achievement[];
  unlock: (id: string) => void;
  isUnlocked: (id: string) => boolean;
  unlockedCount: number;
  total: number;
  allAchievements: Achievement[];
}

const AchievementContext = createContext<AchievementState>({
  unlocked: new Set(),
  queue: [],
  unlock: () => {},
  isUnlocked: () => false,
  unlockedCount: 0,
  total: ACHIEVEMENTS.length,
  allAchievements: ACHIEVEMENTS,
});

export function AchievementProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem('portfolio-achievements');
      return stored ? new Set(JSON.parse(stored) as string[]) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  const [queue, setQueue] = useState<Achievement[]>([]);
  const clickCount = useRef(0);

  /* persist on change */
  useEffect(() => {
    localStorage.setItem('portfolio-achievements', JSON.stringify([...unlocked]));
  }, [unlocked]);

  const unlock = useCallback(
    (id: string) => {
      if (unlocked.has(id)) return;
      const ach = ACHIEVEMENTS.find((a) => a.id === id);
      if (!ach) return;
      setUnlocked((prev) => new Set([...prev, id]));
      setQueue((prev) => [...prev, ach]);
      /* auto-remove from queue after 4s for the toast */
      setTimeout(() => {
        setQueue((prev) => prev.filter((a) => a.id !== id));
      }, 4000);
    },
    [unlocked],
  );

  const isUnlocked = useCallback((id: string) => unlocked.has(id), [unlocked]);

  /* ── Auto-detecting achievements ── */

  /* Night owl: visiting between midnight and 5am */
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 5) unlock('night_owl');
  }, [unlock]);

  /* First scroll */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        unlock('first_scroll');
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [unlock]);

  /* Click counter */
  useEffect(() => {
    const onClick = () => {
      clickCount.current++;
      if (clickCount.current >= 25) unlock('click_25');
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [unlock]);

  /* All sections visited */
  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'education', 'projects'];
    const visited = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visited.add(entry.target.id);
        }
        if (sections.every((s) => visited.has(s))) {
          unlock('all_sections');
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    /* Wait for DOM to be ready */
    const timer = setTimeout(() => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [unlock]);

  return (
    <AchievementContext.Provider
      value={{
        unlocked,
        queue,
        unlock,
        isUnlocked,
        unlockedCount: unlocked.size,
        total: ACHIEVEMENTS.length,
        allAchievements: ACHIEVEMENTS,
      }}
    >
      {children}
    </AchievementContext.Provider>
  );
}

export const useAchievements = () => useContext(AchievementContext);
