import { useState, useEffect, useRef } from 'react';
import { alerts } from '../data/encounters';

/**
 * Bloomberg-style alert banner that slides in at the bottom periodically.
 */
export default function AlertBanner() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    /* Shuffle alerts */
    const shuffled = [...alerts].sort(() => Math.random() - 0.5);

    const showNext = () => {
      const msg = shuffled[indexRef.current % shuffled.length];
      indexRef.current++;
      setMessage(msg);
      setVisible(true);

      /* Auto-hide after 4 seconds */
      setTimeout(() => setVisible(false), 4000);
    };

    /* First alert after 15-25 seconds */
    const firstDelay = 15000 + Math.random() * 10000;
    const firstTimer = setTimeout(() => {
      showNext();
      /* Then every 20-40 seconds */
    }, firstDelay);

    const interval = setInterval(showNext, 20000 + Math.random() * 20000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[60] transition-transform duration-500 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-base-surface/95 border-t border-term-amber/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-1.5 flex items-center gap-3">
          <span className="text-term-amber text-[10px] font-semibold tracking-widest uppercase shrink-0 animate-pulse-slow">
            ▸ ALERT
          </span>
          <span className="text-[11px] text-txt-dim truncate">{message}</span>
          <button
            onClick={() => setVisible(false)}
            className="ml-auto text-[10px] text-txt-dim/30 hover:text-txt-dim transition-colors shrink-0"
          >
            [×]
          </button>
        </div>
      </div>
    </div>
  );
}
