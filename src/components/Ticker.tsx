import { useState, useEffect, useRef } from 'react';

interface TickerItem {
  label: string;
  value: number;
  delta: number;
}

const SKILLS = [
  'REACT',
  'PYTHON',
  'TYPESCRIPT',
  'AWS',
  'DOCKER',
  'NODE',
  'JAVA',
  'LINUX',
  'GIT',
  'SQL',
  'TAILWIND',
  'FLASK',
  'MONGO',
  'CPP',
  'NEXT',
];

function generateItems(): TickerItem[] {
  return SKILLS.map((label) => ({
    label,
    value: Math.floor(Math.random() * 500 + 100),
    delta: parseFloat((Math.random() * 10 - 3).toFixed(2)),
  }));
}

export default function Ticker() {
  const [items, setItems] = useState<TickerItem[]>(generateItems);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);

  // Randomize deltas every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => ({
          ...item,
          delta: parseFloat((Math.random() * 10 - 3).toFixed(2)),
          value: Math.max(10, item.value + Math.floor(Math.random() * 20 - 8)),
        })),
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll animation
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5;
    const animate = () => {
      posRef.current += speed;
      const contentWidth = el.scrollWidth / 2;
      if (posRef.current >= contentWidth) {
        posRef.current = 0;
      }
      el.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [items]);

  const renderItem = (item: TickerItem, i: number) => {
    const up = item.delta >= 0;
    return (
      <span key={i} className="inline-flex items-center gap-1.5 mx-4 whitespace-nowrap">
        <span className="text-txt-bright font-medium">{item.label}</span>
        <span className="text-txt-dim">{item.value}</span>
        <span className={up ? 'text-term-green' : 'text-term-red'}>
          {up ? '+' : ''}
          {item.delta}%
        </span>
      </span>
    );
  };

  return (
    <div className="overflow-hidden border-b border-line bg-base-panel/60 backdrop-blur-sm">
      <div className="py-1 text-[10px] tracking-wider font-mono">
        <div ref={scrollRef} className="inline-flex will-change-transform">
          {/* Duplicate for seamless loop */}
          {items.map((item, i) => renderItem(item, i))}
          {items.map((item, i) => renderItem(item, i + items.length))}
        </div>
      </div>
    </div>
  );
}
