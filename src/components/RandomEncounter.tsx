import { useState, useEffect, useCallback, useRef } from 'react';
import { useAchievements } from '../contexts/AchievementContext';
import { encounters, type Encounter } from '../data/encounters';

/**
 * Periodic random encounter popup with gaming references.
 * Appears every 45-90s with a 35% chance per check.
 */
export default function RandomEncounter() {
  const [active, setActive] = useState<Encounter | null>(null);
  const { unlock } = useAchievements();
  const shownRef = useRef(new Set<number>());
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const spawn = useCallback(() => {
    /* Don't spawn if page is hidden */
    if (document.hidden) return;
    /* Don't spawn if one is already active */
    if (active) return;
    /* 35% chance per tick */
    if (Math.random() > 0.35) return;

    /* Pick a random encounter we haven't shown recently */
    let idx: number;
    let attempts = 0;
    do {
      idx = Math.floor(Math.random() * encounters.length);
      attempts++;
    } while (shownRef.current.has(idx) && attempts < 10);

    shownRef.current.add(idx);
    /* Reset memory after showing half the encounters */
    if (shownRef.current.size > encounters.length / 2) {
      shownRef.current.clear();
    }

    setActive(encounters[idx]);
    unlock('encounter');
  }, [active, unlock]);

  useEffect(() => {
    /* First encounter after 30-60s, then check every 45-90s */
    const firstDelay = 30000 + Math.random() * 30000;
    const firstTimer = setTimeout(() => {
      spawn();
      timerRef.current = setInterval(spawn, 45000 + Math.random() * 45000);
    }, firstDelay);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(timerRef.current);
    };
  }, [spawn]);

  const dismiss = () => setActive(null);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center pointer-events-none">
      <div
        className={`pointer-events-auto max-w-md mx-4 border border-term-amber/40 rounded bg-base-panel/95 backdrop-blur-md shadow-[0_0_30px_rgba(255,170,0,0.1)] animate-encounter-in ${
          active.effect === 'glitch' ? 'animate-glitch-once' : ''
        } ${active.effect === 'shake' ? 'animate-shake' : ''} ${
          active.effect === 'flash' ? 'animate-flash' : ''
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-term-amber/20 bg-term-amber/5">
          <span className="text-term-amber text-xs font-medium tracking-wider">
            ⚔️ RANDOM ENCOUNTER
          </span>
          <span className="ml-auto text-[9px] text-txt-dim/30">{active.game}</span>
        </div>

        {/* Quote */}
        <div className="p-4">
          <p className="text-sm text-txt-bright leading-relaxed italic">
            &ldquo;{active.quote}&rdquo;
          </p>
          {active.character && (
            <p className="text-[11px] text-txt-dim mt-2">— {active.character}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 px-4 py-2 border-t border-line/30">
          <button
            onClick={dismiss}
            className="px-3 py-1 text-[10px] text-txt-dim border border-line rounded hover:text-txt-bright hover:border-line-active transition-colors uppercase tracking-wider"
          >
            Dismiss
          </button>
          {active.action && (
            <button
              onClick={dismiss}
              className="px-3 py-1 text-[10px] text-term-green border border-term-green/30 rounded hover:bg-term-green/10 transition-colors uppercase tracking-wider"
            >
              {active.action}
            </button>
          )}
          <span className="ml-auto text-[9px] text-txt-dim/20 uppercase tracking-widest">
            [{active.game}]
          </span>
        </div>
      </div>
    </div>
  );
}
