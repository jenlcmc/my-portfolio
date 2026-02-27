import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { AchievementProvider } from './contexts/AchievementContext';
import { WarpProvider } from './contexts/WarpContext';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AchievementProvider>
        <WarpProvider>
          <App />
        </WarpProvider>
      </AchievementProvider>
    </ThemeProvider>
  </StrictMode>,
);
