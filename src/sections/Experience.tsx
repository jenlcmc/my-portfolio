import { useState } from 'react';
import Section from '../components/Section';
import DecryptText from '../components/DecryptText';
import { experiences, type Experience } from '../data/experience';

const STATUS_CLASS = {
  active: 'text-term-green border-term-green/30 bg-term-green/5',
  complete: 'text-txt-dim border-line bg-transparent',
};

function MissionCard({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(false);
  const missionNum = String(index + 1).padStart(3, '0');
  const status = exp.current ? 'active' : 'complete';

  return (
    <div className="relative pl-8 pb-6 last:pb-0 mission-line">
      {/* Timeline dot */}
      <span
        className={`absolute left-[-4px] top-2 w-3 h-3 rounded-full border-2 transition-all z-10 ${
          exp.current
            ? 'bg-term-green border-term-green animate-pulse-slow shadow-[0_0_8px_rgb(var(--c-term-green)/0.4)]'
            : 'bg-base-panel border-line'
        }`}
        aria-hidden="true"
      />

      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
        aria-expanded={open}
      >
        {/* Mission header */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] text-txt-dim/30 font-mono">MISSION {missionNum}</span>
          <span
            className={`px-2 py-0.5 text-[9px] uppercase tracking-wider rounded border ${STATUS_CLASS[status]}`}
          >
            {exp.current ? '▸ ACTIVE' : '✓ COMPLETE'}
          </span>
        </div>

        {/* Title and company */}
        <h3 className="text-sm text-txt-bright font-medium group-hover:text-term-cyan transition-colors glitch-hover leading-snug">
          {exp.title}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 mt-0.5">
          <span className="text-xs text-txt-dim">
            <span className="text-txt-dim/40">CODENAME:</span> {exp.company}
          </span>
          <span className="hidden sm:inline text-txt-dim/20">|</span>
          <span className="text-xs text-txt-dim">
            <span className="text-txt-dim/40">DURATION:</span> {exp.period}
          </span>
        </div>

        {/* XP bar */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 h-1 bg-base-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-term-green rounded-full xp-fill"
              style={{ width: `${Math.round((exp.tech.length / 10) * 100)}%` }}
            />
          </div>
          <span className="text-[9px] text-txt-dim/50 font-mono">{exp.tech.length} SKILLS</span>
        </div>

        <span className="text-[10px] text-txt-dim/30 mt-1 inline-block">
          {open ? '[-] collapse mission brief' : '[+] view mission brief'}
        </span>
      </button>

      {/* Expanded mission details */}
      {open && (
        <div className="mt-3 space-y-3 animate-fade-in pl-2 border-l border-term-green/10">
          {/* Mission brief */}
          <div>
            <div className="text-[10px] text-txt-dim/40 uppercase tracking-widest mb-1">
              Mission Brief
            </div>
            <ul className="space-y-1">
              {exp.description.map((item, i) => (
                <li key={i} className="text-xs text-txt-dim pl-3 relative leading-relaxed">
                  <span className="absolute left-0 text-term-green/40">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <div className="text-[10px] text-txt-dim/40 uppercase tracking-widest mb-1">
              Equipment Used
            </div>
            <div className="flex flex-wrap gap-1.5">
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
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const activeCount = experiences.filter((e) => e.current).length;

  return (
    <Section id="experience" label="~/experience">
      {/* Mission log header */}
      <div className="flex items-center gap-3 mb-5 text-[10px] text-txt-dim/60 uppercase tracking-widest">
        <span>
          <DecryptText text="Mission Log" speed={40} />
        </span>
        <span className="flex-1 border-t border-line/50" />
        <span>{experiences.length} missions</span>
        <span className="text-term-green">{activeCount} active</span>
      </div>

      <div className="ml-1">
        {experiences.map((exp, i) => (
          <MissionCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </Section>
  );
}
