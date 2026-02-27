import { useState } from 'react';
import Section from '../components/Section';
import SSHLink from '../components/SSHLink';
import { projects, type Project } from '../data/projects';

const STATUS_LABEL: Record<Project['status'], string> = {
  active: 'ACTIVE QUEST',
  'in-progress': 'SIDE QUEST',
  complete: 'COMPLETED',
};

const STATUS_ICON: Record<Project['status'], string> = {
  active: '>>',
  'in-progress': '~>',
  complete: 'OK',
};

const STATUS_COLOR: Record<Project['status'], string> = {
  active: 'text-term-green border-term-green/30 bg-term-green/5',
  'in-progress': 'text-term-amber border-term-amber/30 bg-term-amber/5',
  complete: 'text-txt-dim border-line bg-transparent',
};

function QuestCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`border rounded p-4 transition-all duration-300 cursor-pointer group ${
        STATUS_COLOR[project.status]
      } ${expanded ? 'ring-1 ring-term-green/20' : ''}`}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') setExpanded(!expanded);
      }}
    >
      {/* Quest header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-txt-dim/40">
            #{String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-sm text-txt-bright font-medium leading-snug group-hover:text-term-cyan transition-colors glitch-hover">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {project.status === 'active' && (
            <span className="w-1.5 h-1.5 rounded-full bg-term-green animate-pulse-slow" />
          )}
          <span className="text-[10px] uppercase tracking-wider whitespace-nowrap">
            [{STATUS_ICON[project.status]}] {STATUS_LABEL[project.status]}
          </span>
        </div>
      </div>

      {/* Description - always visible but truncated unless expanded */}
      <p className={`text-xs text-txt-dim leading-relaxed mt-2 ${expanded ? '' : 'line-clamp-2'}`}>
        {project.description}
      </p>

      {/* Expanded details */}
      {expanded && (
        <div className="mt-3 animate-fade-in">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] text-term-cyan bg-term-cyan/10 rounded border border-term-cyan/20"
              >
                {t}
              </span>
            ))}
          </div>
          {project.github && (
            <SSHLink
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-txt-dim hover:text-term-cyan transition-colors mt-3"
            >
              <span className="text-term-green">&gt;</span> view source --&gt;
            </SSHLink>
          )}
        </div>
      )}

      {/* Expand hint */}
      <span className="text-[10px] text-txt-dim/30 mt-2 block">
        {expanded ? '[-] collapse' : '[+] expand quest details'}
      </span>
    </div>
  );
}

export default function Projects() {
  const active = projects.filter((p) => p.status === 'active' || p.status === 'in-progress');
  const complete = projects.filter((p) => p.status === 'complete');

  return (
    <Section id="projects" label="~/projects">
      {/* Quest log header */}
      <div className="flex items-center gap-3 mb-4 text-[10px] text-txt-dim/60 uppercase tracking-widest">
        <span>Quest Log</span>
        <span className="flex-1 border-t border-line/50" />
        <span>{projects.length} entries</span>
      </div>

      {/* Active / In-progress quests */}
      {active.length > 0 && (
        <div className="mb-6">
          <h3 className="text-term-green text-[10px] uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-term-green animate-pulse-slow" />
            Active Quests
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {active.map((project, i) => (
              <QuestCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* Completed quests */}
      <div>
        <h3 className="text-txt-dim text-[10px] uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-txt-dim/40" />
          Completed Quests ({complete.length})
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {complete.map((project, i) => (
            <QuestCard key={project.title} project={project} index={active.length + i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
