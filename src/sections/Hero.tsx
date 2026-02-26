import { useState, useEffect } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import Section from '../components/Section';

const GREETINGS = [
  'Hello, World!',
  'Hola, Mundo!',
  'Bonjour, le Monde!',
  'Xin chao, The Gioi!',
  'console.log("Hello!");',
  'print("Hello!")',
  'System.out.println("Hello!");',
  'std::cout << "Hello!";',
  'fmt.Println("Hello!")',
  'puts "Hello!"',
];

function StatusBar() {
  const [uptime, setUptime] = useState(0);
  const [ping, setPing] = useState(12);

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
      setPing(Math.floor(Math.random() * 20 + 5));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');
  const h = pad(Math.floor(uptime / 3600));
  const m = pad(Math.floor((uptime % 3600) / 60));
  const s = pad(uptime % 60);

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-txt-dim/60 uppercase tracking-widest mt-10 border-t border-line pt-4">
      <span className="flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-term-green animate-pulse-slow" />
        systems online
      </span>
      <span>
        uptime {h}:{m}:{s}
      </span>
      <span>loc: earth</span>
      <span className="hidden sm:inline">ping: {ping}ms</span>
      <span className="hidden sm:inline text-term-green/50">signal: strong</span>
    </div>
  );
}

function DataLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 text-xs">
      <span className="text-txt-dim/40">{label}:</span>
      <span className="text-txt-dim">{value}</span>
    </div>
  );
}

export default function Hero() {
  const greeting = useTypingEffect(GREETINGS, 80, 40, 2500);

  return (
    <Section id="hero" label="~/home">
      <div className="py-8 sm:py-14">
        <p className="text-term-green text-sm mb-4 tracking-wide">
          <span className="text-txt-dim/40 mr-2">&gt;</span>
          <span>{greeting}</span>
          <span className="cursor-blink ml-0.5">_</span>
        </p>

        <h1 className="text-3xl sm:text-5xl font-bold text-txt-bright leading-tight glitch-hover inline-block">
          Uyen Tran
        </h1>

        <p className="mt-3 text-lg sm:text-xl text-txt-dim">
          Software Engineer <span className="text-line">/</span> CS Graduate Student
        </p>

        {/* Quick data panel */}
        <div className="mt-6 p-3 border border-line/50 rounded bg-base-surface/30 inline-block">
          <DataLine label="class" value="Full-Stack Engineer" />
          <DataLine label="level" value="Graduate Student" />
          <DataLine label="location" value="Las Vegas, NV" />
          <DataLine label="status" value="Available for opportunities" />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/jenlcmc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-txt-dim border border-line rounded hover:text-term-cyan hover:border-term-cyan/30 transition-all card-hover"
            aria-label="GitHub profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            github
          </a>

          <a
            href="https://www.linkedin.com/in/uyentran04/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-txt-dim border border-line rounded hover:text-term-cyan hover:border-term-cyan/30 transition-all card-hover"
            aria-label="LinkedIn profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            linkedin
          </a>

          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-txt-dim/40 border border-line/30 rounded">
            <kbd className="px-1 border border-line rounded text-[10px]">~</kbd>
            terminal
          </span>
        </div>

        <StatusBar />
      </div>
    </Section>
  );
}
