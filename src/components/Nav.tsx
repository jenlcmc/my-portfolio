import { useState, useEffect, useRef } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useWarp } from '../contexts/WarpContext';
import { useAchievements } from '../contexts/AchievementContext';
import ThemeSwitcher from './ThemeSwitcher';

const LINKS = [
  { label: 'home', target: 'hero' },
  { label: 'about', target: 'about' },
  { label: 'experience', target: 'experience' },
  { label: 'education', target: 'education' },
  { label: 'projects', target: 'projects' },
];

interface NavProps {
  onOpenTerminal: () => void;
  onOpenInventory: () => void;
  onTogglePanel: () => void;
  panelOpen: boolean;
}

export default function Nav({
  onOpenTerminal,
  onOpenInventory,
  onTogglePanel,
  panelOpen,
}: NavProps) {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const active = useActiveSection();
  const { triggerWarp } = useWarp();
  const { unlockedCount, total } = useAchievements();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 60);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

      if (e.key === 'i' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        onOpenInventory();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onOpenTerminal, onOpenInventory]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    triggerWarp();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
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

          {/* Desktop links + tools */}
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

            <span className="w-px h-4 bg-line/50 mx-1" />

            {/* Terminal */}
            <button
              onClick={onOpenTerminal}
              className="px-2 py-1 text-[10px] text-txt-dim/50 border border-line/50 rounded hover:text-term-green hover:border-term-green/30 transition-colors"
              aria-label="Open command terminal"
              title="Open terminal (~)"
            >
              &gt;_
            </button>

            {/* Inventory */}
            <button
              onClick={onOpenInventory}
              className="px-2 py-1 text-[10px] text-txt-dim/50 border border-line/50 rounded hover:text-term-amber hover:border-term-amber/30 transition-colors"
              aria-label="Open inventory"
              title="Inventory (Ctrl+I)"
            >
              INV
            </button>

            {/* Panel toggle */}
            <button
              onClick={onTogglePanel}
              className={`px-2 py-1 text-[10px] border border-line/50 rounded transition-colors ${
                panelOpen
                  ? 'text-term-cyan border-term-cyan/30 bg-term-cyan/5'
                  : 'text-txt-dim/50 hover:text-term-cyan hover:border-term-cyan/30'
              }`}
              aria-label="Toggle multi-panel view"
              title="Toggle panel view"
            >
              ⊞
            </button>

            {/* Theme switcher */}
            <ThemeSwitcher />

            {/* Achievement counter */}
            <span
              className="px-2 py-1 text-[10px] text-txt-dim/40 border border-line/30 rounded cursor-default"
              title="Achievements unlocked"
            >
              🏆 {unlockedCount}/{total}
            </span>
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
          <div className="border-t border-line bg-base-panel px-4 py-2 space-y-1 animate-fade-in sm:hidden">
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
            <div className="flex items-center gap-2 pt-2 border-t border-line/50">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenTerminal();
                }}
                className="px-3 py-2 text-xs text-txt-dim hover:text-term-green transition-colors rounded"
              >
                &gt;_ terminal
              </button>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenInventory();
                }}
                className="px-3 py-2 text-xs text-txt-dim hover:text-term-amber transition-colors rounded"
              >
                🎒 inventory
              </button>
              <ThemeSwitcher />
            </div>
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
