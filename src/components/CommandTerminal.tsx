import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme, THEME_META, type ThemeName } from '../contexts/ThemeContext';
import { useAchievements } from '../contexts/AchievementContext';
import { useWarp } from '../contexts/WarpContext';
import { RARITY_COLOR } from '../data/achievements';

interface CommandTerminalProps {
  open: boolean;
  onClose: () => void;
  onOpenInventory: () => void;
  onTogglePanel: () => void;
}

interface HistoryEntry {
  input: string;
  output: string[];
}

const SECTION_IDS = ['hero', 'about', 'experience', 'education', 'projects'];

const HELP_TEXT = [
  'Available commands:',
  '',
  '  help              -- show this help',
  '  goto <section>    -- warp to section',
  '  ls                -- list sections',
  '  whoami            -- about me',
  '  skills            -- list skills',
  '  status            -- system status',
  '  cat resume        -- open resume link',
  '  neofetch          -- system info',
  '  achievements      -- list achievements',
  '  inventory         -- open inventory',
  '  theme [name]      -- view or switch theme',
  '  panel             -- toggle side panel',
  '  clear             -- clear terminal',
  '  exit / q          -- close terminal',
  '',
  'Sections: hero, about, experience, education, projects',
];

const NEOFETCH_TEMPLATE = [
  '        ╭──────────╮',
  '        │  uyen@dev │',
  '        ╰──────────╯',
  '   ██╗   ██╗╔╦╗      OS: Portfolio v3.0',
  '   ██║   ██║ ║║      Shell: React 18 + TS',
  '   ██║   ██║ ║║      Theme: {{THEME}}',
  '   ╚██████╔╝ ║║      WM: Vite + Tailwind',
  '    ╚═════╝ ╚╩╝      Uptime: since 2020',
  '                      Packages: minimal',
  '                      Resolution: responsive',
  '                      Terminal: JetBrains Mono',
];

const SKILLS_TEXT = [
  '┌─ Languages ──────────────────────────┐',
  '│ Python  Java  TypeScript  C++  SQL   │',
  '│ JavaScript  HTML/CSS  R              │',
  '├─ Frameworks ─────────────────────────┤',
  '│ React  Node.js  Spring Boot  Flask   │',
  '│ Tailwind CSS  Next.js                │',
  '├─ Tools ──────────────────────────────┤',
  '│ Git  Docker  AWS  PostgreSQL         │',
  '│ MongoDB  Linux  Jira  Figma          │',
  '├─ Domains ────────────────────────────┤',
  '│ SWE  Cloud  ML  Data  CI/CD   │',
  '└───────────────────────────────────────┘',
];

export default function CommandTerminal({
  open,
  onClose,
  onOpenInventory,
  onTogglePanel,
}: CommandTerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { allAchievements, isUnlocked, unlockedCount, total } = useAchievements();
  const { triggerWarp } = useWarp();

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Scroll to bottom on new output
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  const executeCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();
      const parts = trimmed.split(/\s+/);
      const command = parts[0];
      const args = parts.slice(1);
      let output: string[] = [];

      switch (command) {
        case '':
          break;

        case 'help':
        case '?':
          output = HELP_TEXT;
          break;

        case 'goto':
        case 'cd': {
          const target = args[0]?.replace('~/', '').replace('/', '');
          if (target && SECTION_IDS.includes(target)) {
            triggerWarp();
            output = [`⚡ Warping to ${target}...`];
            setTimeout(() => {
              document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
              onClose();
            }, 400);
          } else {
            output = [`Error: section "${args[0] || ''}" not found.`, 'Try: ls'];
          }
          break;
        }

        case 'ls':
        case 'dir':
          output = [
            'drwxr-xr-x  uyen  ~/hero',
            'drwxr-xr-x  uyen  ~/about',
            'drwxr-xr-x  uyen  ~/experience',
            'drwxr-xr-x  uyen  ~/education',
            'drwxr-xr-x  uyen  ~/projects',
          ];
          break;

        case 'whoami':
          output = [
            'Uyen Tran',
            'Software Engineer / CS Graduate Student',
            'Location: Earth',
            'Status: Online',
          ];
          break;

        case 'skills':
          output = SKILLS_TEXT;
          break;

        case 'status':
          output = [
            `Time: ${new Date().toLocaleTimeString()}`,
            `Date: ${new Date().toLocaleDateString()}`,
            'CPU: Overclocked',
            'RAM: Sufficient',
            'Network: Connected',
            'Mood: Productive',
          ];
          break;

        case 'cat':
          if (args[0] === 'resume') {
            output = ['Opening resume... (feature coming soon)'];
          } else {
            output = [`cat: ${args[0] || ''}: No such file`];
          }
          break;

        case 'neofetch':
          output = NEOFETCH_TEMPLATE.map((l) => l.replace('{{THEME}}', THEME_META[theme].label));
          break;

        case 'clear':
          setHistory([]);
          return;

        case 'exit':
        case 'q':
        case 'quit':
          onClose();
          return;

        case 'sudo':
          output = ['Nice try. Access denied.'];
          break;

        case 'rm':
          output = ['Permission denied: cannot delete portfolio.'];
          break;

        case 'hack':
          output = [
            'Initiating hack sequence...',
            '████████████████████ 100%',
            'Just kidding. That is not how it works.',
          ];
          break;

        case 'hello':
        case 'hi':
          output = ['Hey there. Type "help" to see what I can do.'];
          break;

        case 'achievements': {
          output = [
            `Achievements: ${unlockedCount}/${total}`,
            '',
            ...allAchievements.map((a) => {
              const status = isUnlocked(a.id) ? '✓' : '✗';
              return `  ${status} ${a.icon} ${a.title} [${a.rarity}] -- ${a.description}`;
            }),
          ];
          break;
        }

        case 'inventory':
          output = ['Opening inventory...'];
          onOpenInventory();
          setTimeout(onClose, 300);
          break;

        case 'theme': {
          if (args[0]) {
            const target = args[0] as ThemeName;
            if (target in THEME_META) {
              setTheme(target);
              output = [`Theme switched to ${THEME_META[target].label}`];
            } else {
              output = [
                `Unknown theme: "${args[0]}"`,
                `Available: ${Object.keys(THEME_META).join(', ')}`,
              ];
            }
          } else {
            output = [
              `Current theme: ${THEME_META[theme].label}`,
              '',
              ...Object.entries(THEME_META).map(
                ([key, val]) =>
                  `  ${key === theme ? '▸' : ' '} ${key.padEnd(12)} ${val.description}`,
              ),
              '',
              'Usage: theme <name>',
            ];
          }
          break;
        }

        case 'panel':
          onTogglePanel();
          output = ['Toggling side panel...'];
          break;

        default:
          output = [`Command not found: ${command}`, 'Type "help" for available commands.'];
      }

      setHistory((prev) => [...prev, { input: cmd, output }]);
      setCmdHistory((prev) => [cmd, ...prev]);
      setHistoryIdx(-1);
    },
    [
      onClose,
      triggerWarp,
      theme,
      setTheme,
      allAchievements,
      isUnlocked,
      unlockedCount,
      total,
      onOpenInventory,
      onTogglePanel,
    ],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
        setHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx]);
      } else {
        setHistoryIdx(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Auto-complete section names
      const parts = input.trim().split(/\s+/);
      if (parts.length === 2 && (parts[0] === 'goto' || parts[0] === 'cd')) {
        const partial = parts[1].toLowerCase();
        const match = SECTION_IDS.find((s) => s.startsWith(partial));
        if (match) setInput(`${parts[0]} ${match}`);
      }
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-base/70 backdrop-blur-sm" onClick={onClose} />

      {/* Terminal window */}
      <div className="relative w-full max-w-2xl mx-4 border border-term-green/40 rounded bg-base-panel/95 backdrop-blur-md shadow-[0_0_40px_rgba(0,204,136,0.1)] animate-fade-in">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-term-green/20 bg-base-surface/90">
          <span className="block w-2.5 h-2.5 rounded-full bg-term-green/60" />
          <span className="text-term-green text-xs tracking-wider">TERMINAL</span>
          <span className="ml-auto text-[10px] text-txt-dim/40">press ESC to close</span>
        </div>

        {/* Output area */}
        <div ref={scrollRef} className="p-4 max-h-[50vh] overflow-y-auto">
          {/* Welcome message */}
          {history.length === 0 && (
            <div className="text-txt-dim text-xs mb-2">
              <p>Welcome to the command terminal.</p>
              <p>
                Type <span className="text-term-green">help</span> to see available commands.
              </p>
            </div>
          )}

          {/* History */}
          {history.map((entry, i) => (
            <div key={i} className="mb-2">
              <div className="flex items-center gap-1 text-xs">
                <span className="text-term-green">uyen@dev</span>
                <span className="text-txt-dim">:</span>
                <span className="text-term-cyan">~</span>
                <span className="text-txt-dim">$</span>
                <span className="text-txt ml-1">{entry.input}</span>
              </div>
              {entry.output.map((line, j) => (
                <pre key={j} className="text-xs text-txt-dim/80 whitespace-pre font-mono">
                  {line || '\u00A0'}
                </pre>
              ))}
            </div>
          ))}

          {/* Input */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-term-green">uyen@dev</span>
            <span className="text-txt-dim">:</span>
            <span className="text-term-cyan">~</span>
            <span className="text-txt-dim">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-txt text-xs outline-none ml-1 caret-term-green"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
