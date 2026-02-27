import { useState } from 'react';
import { useTheme, THEME_META, type ThemeName } from '../contexts/ThemeContext';
import { useAchievements } from '../contexts/AchievementContext';

const THEMES: ThemeName[] = ['cyberdeck', 'matrix', 'cyberpunk', 'bloomberg', 'deepspace'];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { unlock } = useAchievements();
  const [open, setOpen] = useState(false);

  const handleSelect = (t: ThemeName) => {
    if (t !== theme) {
      setTheme(t);
      unlock('theme_change');
    }
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-2 py-1 text-[10px] text-txt-dim/50 border border-line/50 rounded hover:text-term-green hover:border-term-green/30 transition-colors uppercase tracking-wider"
        aria-label="Change theme"
        title="Change theme"
      >
        THM
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-[70]" onClick={() => setOpen(false)} />

          <div className="absolute right-0 top-8 z-[71] w-48 border border-line rounded bg-base-panel/95 backdrop-blur-md shadow-lg animate-fade-in">
            <div className="px-3 py-2 border-b border-line text-[10px] text-txt-dim/60 uppercase tracking-widest">
              Select Theme
            </div>
            {THEMES.map((t) => {
              const meta = THEME_META[t];
              const active = t === theme;
              return (
                <button
                  key={t}
                  onClick={() => handleSelect(t)}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2 transition-colors ${
                    active
                      ? 'text-term-green bg-term-green/10'
                      : 'text-txt-dim hover:text-txt-bright hover:bg-line/30'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: meta.accent }}
                  />
                  <span className="font-medium">{meta.label}</span>
                  <span className="ml-auto text-[9px] text-txt-dim/40">{meta.description}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
