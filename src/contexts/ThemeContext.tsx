import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type ThemeName = 'cyberdeck' | 'matrix' | 'cyberpunk' | 'bloomberg' | 'deepspace';

export interface ThemeMeta {
  label: string;
  description: string;
  accent: string;
}

export const THEME_META: Record<ThemeName, ThemeMeta> = {
  cyberdeck: { label: 'CYBERDECK', description: 'Default hacker terminal', accent: '#00cc88' },
  matrix: { label: 'MATRIX', description: 'Follow the white rabbit', accent: '#00ff41' },
  cyberpunk: { label: 'CYBERPUNK', description: 'Night City neon', accent: '#ff2d6f' },
  bloomberg: { label: 'BLOOMBERG', description: 'Financial terminal', accent: '#ff8800' },
  deepspace: { label: 'DEEP SPACE', description: 'Orbital station', accent: '#7b68ee' },
};

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'cyberdeck',
  setTheme: () => {},
  cycleTheme: () => {},
});

const THEMES: ThemeName[] = ['cyberdeck', 'matrix', 'cyberpunk', 'bloomberg', 'deepspace'];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    try {
      const stored = localStorage.getItem('portfolio-theme') as ThemeName;
      return THEMES.includes(stored) ? stored : 'cyberdeck';
    } catch {
      return 'cyberdeck';
    }
  });

  const setTheme = (t: ThemeName) => {
    setThemeState(t);
  };

  const cycleTheme = () => {
    const idx = THEMES.indexOf(theme);
    setThemeState(THEMES[(idx + 1) % THEMES.length]);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
