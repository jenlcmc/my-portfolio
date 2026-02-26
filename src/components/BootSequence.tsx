import { useState, useEffect, useCallback } from 'react';

const BOOT_LINES = [
  { text: 'BIOS v3.7.1 -- Cyberdeck Systems Inc.', delay: 0 },
  { text: 'Memory Test... 32768 MB OK', delay: 200 },
  { text: 'Initializing neural interface...', delay: 400 },
  { text: 'Loading kernel modules [████████████████] OK', delay: 700 },
  { text: 'Mounting /dev/portfolio...', delay: 900 },
  { text: 'Starting network daemon... connected', delay: 1100 },
  { text: 'Authenticating user: uyen@dev', delay: 1300 },
  { text: 'Access level: ROOT', delay: 1500 },
  { text: 'Loading profile data...', delay: 1700 },
  { text: '', delay: 1900 },
  { text: '  ██╗   ██╗██╗   ██╗███████╗███╗   ██╗', delay: 2000 },
  { text: '  ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║', delay: 2050 },
  { text: '  ██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║', delay: 2100 },
  { text: '  ██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║', delay: 2150 },
  { text: '  ╚██████╔╝   ██║   ███████╗██║ ╚████║', delay: 2200 },
  { text: '   ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝', delay: 2250 },
  { text: '', delay: 2300 },
  { text: 'System ready. Launching interface...', delay: 2600 },
];

interface Props {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: Props) {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [skipVisible, setSkipVisible] = useState(false);

  const skip = useCallback(() => {
    setDone(true);
    setTimeout(onComplete, 300);
  }, [onComplete]);

  useEffect(() => {
    // Show skip hint after 500ms
    const skipTimer = setTimeout(() => setSkipVisible(true), 500);

    const timers: ReturnType<typeof setTimeout>[] = [];

    for (const { text, delay } of BOOT_LINES) {
      timers.push(
        setTimeout(() => {
          setLines((prev) => [...prev, text]);
        }, delay),
      );
    }

    // Auto-complete
    timers.push(
      setTimeout(() => {
        setDone(true);
        setTimeout(onComplete, 400);
      }, 3200),
    );

    return () => {
      clearTimeout(skipTimer);
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  // Skip on any key or click
  useEffect(() => {
    const handler = () => skip();
    window.addEventListener('keydown', handler);
    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      window.removeEventListener('click', handler);
    };
  }, [skip]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-base flex items-center justify-center transition-opacity duration-400 ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-2xl px-6">
        <pre className="text-term-green text-[11px] sm:text-xs leading-relaxed font-mono whitespace-pre overflow-hidden">
          {lines.map((line, i) => (
            <div key={i} className="animate-fade-in">
              {line || '\u00A0'}
            </div>
          ))}
          <span className="animate-pulse">_</span>
        </pre>
        {skipVisible && !done && (
          <p className="text-txt-dim/30 text-[10px] mt-6 text-center tracking-widest uppercase">
            press any key to skip
          </p>
        )}
      </div>
    </div>
  );
}
