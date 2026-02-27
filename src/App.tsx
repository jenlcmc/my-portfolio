import { useState, useCallback } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Starfield from './components/Starfield';
import Ticker from './components/Ticker';
import BootSequence from './components/BootSequence';
import CommandTerminal from './components/CommandTerminal';
import ClickSparks from './components/ClickSparks';
import InventoryGrid from './components/InventoryGrid';
import RandomEncounter from './components/RandomEncounter';
import AlertBanner from './components/AlertBanner';
import OrbitalNav from './components/OrbitalNav';
import AchievementToast from './components/AchievementToast';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import { useKonamiCode } from './hooks/useKonamiCode';
import { useWarp } from './contexts/WarpContext';
import { useAchievements } from './contexts/AchievementContext';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const konami = useKonamiCode();
  const { warping } = useWarp();
  const { unlock } = useAchievements();

  const onBootComplete = useCallback(() => setBooted(true), []);
  const openTerminal = useCallback(() => {
    setTerminalOpen(true);
    unlock('terminal');
  }, [unlock]);
  const closeTerminal = useCallback(() => setTerminalOpen(false), []);
  const openInventory = useCallback(() => setInventoryOpen(true), []);
  const closeInventory = useCallback(() => setInventoryOpen(false), []);
  const togglePanel = useCallback(() => setPanelOpen((p) => !p), []);

  /* Ctrl+I to toggle inventory */
  // useEffect for keyboard shortcut is handled in Nav

  /* Konami code unlocks an achievement */
  if (konami) unlock('konami');

  return (
    <>
      {/* Boot sequence */}
      {!booted && <BootSequence onComplete={onBootComplete} />}

      <div
        className={`min-h-screen bg-base text-txt font-mono scan-line transition-colors duration-500 ${
          konami ? 'glitch-active crt-overlay' : ''
        } ${panelOpen ? 'panel-active' : ''}`}
      >
        <Starfield />
        <ClickSparks />

        <div className="relative z-10 grid-overlay min-h-screen">
          {/* Bloomberg-style ticker */}
          <div className="fixed top-12 left-0 right-0 z-40">
            <Ticker />
          </div>

          <Nav
            onOpenTerminal={openTerminal}
            onOpenInventory={openInventory}
            onTogglePanel={togglePanel}
            panelOpen={panelOpen}
          />

          <main className="main-content max-w-5xl mx-auto px-4 pt-28 pb-8">
            <Hero />
            <About />
            <Experience />
            <Education />
            <Projects />
          </main>

          <Footer />
        </div>

        {/* Multi-panel sidebar */}
        {panelOpen && (
          <div className="panel-sidebar fixed top-12 right-0 w-80 h-[calc(100vh-3rem)] bg-base-panel/95 backdrop-blur-md border-l border-line z-50 overflow-y-auto p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-term-green text-xs uppercase tracking-wider">Side Panel</span>
              <button onClick={togglePanel} className="text-txt-dim hover:text-term-green text-xs">
                [CLOSE]
              </button>
            </div>
            <div className="text-xs text-txt-dim space-y-3">
              <p className="text-term-green/80 border-b border-line pb-2">Quick Actions</p>
              <button
                onClick={openTerminal}
                className="block w-full text-left px-2 py-1.5 hover:bg-base-surface/50 rounded text-txt-dim hover:text-term-green transition-colors"
              >
                &gt; Open Terminal
              </button>
              <button
                onClick={openInventory}
                className="block w-full text-left px-2 py-1.5 hover:bg-base-surface/50 rounded text-txt-dim hover:text-term-green transition-colors"
              >
                &gt; Open Inventory
              </button>
              <div className="border-t border-line pt-3 mt-3">
                <p className="text-term-green/80 mb-2">Sections</p>
                {['hero', 'about', 'experience', 'education', 'projects'].map((id) => (
                  <button
                    key={id}
                    onClick={() =>
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="block w-full text-left px-2 py-1 hover:bg-base-surface/50 rounded text-txt-dim hover:text-term-green transition-colors"
                  >
                    ~/{id}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Command terminal overlay */}
        <CommandTerminal
          open={terminalOpen}
          onClose={closeTerminal}
          onOpenInventory={openInventory}
          onTogglePanel={togglePanel}
        />

        {/* Inventory modal */}
        <InventoryGrid open={inventoryOpen} onClose={closeInventory} />

        {/* Random encounters & alerts */}
        <RandomEncounter />
        <AlertBanner />

        {/* Orbital navigation */}
        <OrbitalNav />

        {/* Achievement toasts */}
        <AchievementToast />

        {/* Warp flash overlay */}
        {warping && <div className="warp-flash fixed inset-0 z-[100] pointer-events-none" />}

        {/* Konami code notification */}
        {konami && (
          <div className="fixed bottom-6 right-6 z-[95] px-4 py-2 border border-term-green rounded bg-base-panel/90 backdrop-blur-sm text-term-green text-xs animate-fade-in">
            CHEAT CODE ACTIVATED -- CRT MODE
          </div>
        )}
      </div>
    </>
  );
}
