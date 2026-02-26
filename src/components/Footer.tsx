import { useState, useEffect } from 'react';

export default function Footer() {
  const [visitors] = useState(() => Math.floor(Math.random() * 900 + 100));
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString());
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-line mt-16">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-txt-dim text-xs">
        <span>2025 Uyen Tran. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-txt-dim/30 text-[10px]">
            React + TS + Tailwind
          </span>
          <span className="text-[10px] text-txt-dim/30">{visitors} visitors</span>
          <span className="text-[10px] text-txt-dim/40 font-mono">{time}</span>
          <span className="flex items-center gap-1.5 text-[10px] text-txt-dim/40 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-term-green animate-pulse-slow" />
            transmission complete
          </span>
        </div>
      </div>
    </footer>
  );
}
