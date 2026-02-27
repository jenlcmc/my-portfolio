import { useState, useCallback, type ReactNode, type AnchorHTMLAttributes } from 'react';
import { useAchievements } from '../contexts/AchievementContext';

interface SSHLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> {
  href: string;
  children: ReactNode;
}

const SSH_STEPS = [
  { text: '> ssh connect ', delay: 0 },
  { text: 'Resolving host... OK', delay: 150 },
  { text: 'Encrypting channel... [████████████] ', delay: 350 },
  { text: 'Connection established. Redirecting...', delay: 700 },
];

/**
 * Drop-in <a> replacement that shows a brief SSH connection
 * animation before opening the link.
 */
export default function SSHLink({ href, children, ...props }: SSHLinkProps) {
  const [connecting, setConnecting] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const { unlock } = useAchievements();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (connecting) return;

      setConnecting(true);
      setLines([]);
      unlock('ssh');

      const host = new URL(href, window.location.href).hostname;

      for (const step of SSH_STEPS) {
        setTimeout(() => {
          const text = step.text === '> ssh connect ' ? `> ssh connect ${host}` : step.text;
          setLines((prev) => [...prev, text]);
        }, step.delay);
      }

      /* Open the link and clean up */
      setTimeout(() => {
        window.open(href, '_blank', 'noopener,noreferrer');
        setConnecting(false);
        setLines([]);
      }, 1100);
    },
    [href, connecting, unlock],
  );

  return (
    <>
      <a {...props} href={href} onClick={handleClick} style={{ cursor: 'pointer' }}>
        {children}
      </a>

      {connecting && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[99] bg-base-panel/95 border border-term-green/30 rounded px-4 py-3 backdrop-blur-md shadow-lg animate-fade-in min-w-[320px]">
          <pre className="text-[11px] text-term-green font-mono leading-relaxed">
            {lines.map((line, i) => (
              <div key={i} className="animate-fade-in">
                {line}
              </div>
            ))}
            <span className="animate-pulse">_</span>
          </pre>
        </div>
      )}
    </>
  );
}
