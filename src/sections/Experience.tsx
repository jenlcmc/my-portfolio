import { useState } from 'react';
import Section from '../components/Section';
import { experiences, type Experience } from '../data/experience';

function XPBar({ level, max }: { level: number; max: number }) {
  const pct = Math.round((level / max) * 100);
  return (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex-1 h-1 bg-base-surface rounded-full overflow-hidden">
        <div className="h-full bg-term-green rounded-full xp-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-[9px] text-txt-dim/50 font-mono">{pct}%</span>
    </div>
  );
}

function Row({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative pl-6 pb-6 last:pb-0">
      {/* timeline line */}
      <span className="absolute left-0 top-0 bottom-0 w-px bg-line" aria-hidden="true" />
      {/* dot with data-stream glow for current */}
      <span
        className={`absolute left-[-3.5px] top-1.5 w-2 h-2 rounded-full border-2 transition-all ${
          exp.current
            ? 'bg-term-green border-term-green animate-pulse-slow shadow-[0_0_6px_rgba(0,204,136,0.4)]'
            : 'bg-base-panel border-line'
        }`}
        aria-hidden="true"
      />

      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left group ${open ? 'achievement-unlock' : ''}`}
        aria-expanded={open}
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
          <h3 className="text-sm text-txt-bright font-medium group-hover:text-term-cyan transition-colors glitch-hover">
            <span className="text-txt-dim/30 text-[10px] mr-2 font-normal">
              [{String(index + 1).padStart(2, '0')}]
            </span>
            {exp.title}
            <span className="text-txt-dim font-normal"> @ {exp.company}</span>
          </h3>
          <div className="flex items-center gap-2">
            {exp.current && (
              <span className="text-[10px] text-term-green uppercase tracking-wider flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-term-green animate-pulse-slow" />
                active
              </span>
            )}
            <span className="text-xs text-txt-dim whitespace-nowrap">{exp.period}</span>
          </div>
        </div>

        {/* XP bar based on tech count as proxy */}
        <XPBar level={exp.tech.length} max={10} />

        <span className="text-[10px] text-txt-dim/40 mt-1 inline-block">
          {open ? '[-] collapse' : '[+] view achievement details'}
        </span>
      </button>

      {open && (
        <div className="mt-3 space-y-2 animate-fade-in pl-2 border-l border-term-green/10">
          <ul className="space-y-1">
            {exp.description.map((item, i) => (
              <li key={i} className="text-xs text-txt-dim pl-3 relative">
                <span className="absolute left-0 text-term-green/40">&gt;</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] text-term-cyan bg-term-cyan/10 rounded border border-term-cyan/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const currentCount = experiences.filter((e) => e.current).length;

  return (
    <Section id="experience" label="~/experience">
      {/* Header bar */}
      <div className="flex items-center gap-3 mb-4 text-[10px] text-txt-dim/60 uppercase tracking-widest">
        <span>Achievement Log</span>
        <span className="flex-1 border-t border-line/50" />
        <span>{experiences.length} unlocked</span>
        <span className="text-term-green">{currentCount} active</span>
      </div>

      <div className="ml-1">
        {experiences.map((exp, i) => (
          <Row key={i} exp={exp} index={i} />
        ))}
      </div>
    </Section>
  );
}
