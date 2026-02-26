import { useState, useCallback } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Starfield from './components/Starfield';
import Ticker from './components/Ticker';
import BootSequence from './components/BootSequence';
import CommandTerminal from './components/CommandTerminal';
import ClickSparks from './components/ClickSparks';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import { useKonamiCode } from './hooks/useKonamiCode';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const konami = useKonamiCode();

  const onBootComplete = useCallback(() => setBooted(true), []);
  const openTerminal = useCallback(() => setTerminalOpen(true), []);
  const closeTerminal = useCallback(() => setTerminalOpen(false), []);

  return (
    <>
      {/* Boot sequence */}
      {!booted && <BootSequence onComplete={onBootComplete} />}

      <div
        className={`min-h-screen bg-base text-txt font-mono scan-line ${
          konami ? 'glitch-active crt-overlay' : ''
        }`}
      >
        <Starfield />
        <ClickSparks />

        <div className="relative z-10 grid-overlay min-h-screen">
          {/* Bloomberg-style ticker */}
          <div className="fixed top-12 left-0 right-0 z-40">
            <Ticker />
          </div>

          <Nav onOpenTerminal={openTerminal} />

          <main className="max-w-5xl mx-auto px-4 pt-28 pb-8">
            <Hero />
            <About />
            <Experience />
            <Education />
            <Projects />
          </main>

          <Footer />
        </div>

        {/* Command terminal overlay */}
        <CommandTerminal open={terminalOpen} onClose={closeTerminal} />

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
