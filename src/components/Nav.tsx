import { useState, useEffect, useRef } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

const LINKS = [
  { label: 'home', target: 'hero' },
  { label: 'about', target: 'about' },
  { label: 'experience', target: 'experience' },
  { label: 'education', target: 'education' },
  { label: 'projects', target: 'projects' },
];

interface NavProps {
  onOpenTerminal: () => void;
}

export default function Nav({ onOpenTerminal }: NavProps) {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 60);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keyboard shortcuts: / = mobile menu, ` or Ctrl+K = terminal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setMobileOpen((prev) => !prev);
      }

      if (e.key === '`' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        onOpenTerminal();
      }

      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        onOpenTerminal();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onOpenTerminal]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="backdrop-blur-md bg-base/80 border-b border-line">
        <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="text-term-green text-sm font-semibold tracking-tight hover:text-term-cyan transition-colors glow-hover"
            aria-label="Scroll to top"
          >
            uyen@dev ~
          </button>

          {/* Current section indicator */}
          <span className="hidden md:inline text-[10px] text-txt-dim/60 tracking-widest uppercase">
            sector: {active}
          </span>

          {/* Desktop links */}
          <div className="hidden sm:flex gap-1 items-center">
            {LINKS.map(({ label, target }) => (
              <button
                key={target}
                onClick={() => scrollTo(target)}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  active === target
                    ? 'text-term-green bg-term-green/10'
                    : 'text-txt-dim hover:text-txt-bright hover:bg-line/50'
                }`}
              >
                {label}
              </button>
            ))}
            {/* Terminal button */}
            <button
              onClick={onOpenTerminal}
              className="ml-2 px-2 py-1 text-[10px] text-txt-dim/50 border border-line/50 rounded hover:text-term-green hover:border-term-green/30 transition-colors"
              aria-label="Open command terminal"
              title="Open terminal (~)"
            >
              &gt;_
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="sm:hidden px-2 py-1 text-xs text-txt-dim hover:text-txt-bright transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? '[close]' : '[menu]'}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="border-t border-line bg-base-panel px-4 py-2 space-y-1 animate-fade-in">
            {LINKS.map(({ label, target }) => (
              <button
                key={target}
                onClick={() => scrollTo(target)}
                className={`block w-full text-left px-3 py-2 text-xs rounded transition-colors ${
                  active === target
                    ? 'text-term-green bg-term-green/10'
                    : 'text-txt-dim hover:text-txt-bright hover:bg-line/50'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenTerminal();
              }}
              className="block w-full text-left px-3 py-2 text-xs text-txt-dim hover:text-term-green transition-colors rounded"
            >
              &gt;_ terminal
            </button>
            <p className="text-[10px] text-txt-dim/40 text-center pt-1">
              <kbd className="px-1 border border-line rounded text-txt-dim">/</kbd> menu{' '}
              <kbd className="px-1 border border-line rounded text-txt-dim">`</kbd> terminal
            </p>
          </div>
        )}
      </div>
    </nav>
  );
}
