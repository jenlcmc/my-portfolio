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

const STATUS_GLOW: Record<Project['status'], string> = {
  active: 'hover:border-term-green/60 hover:shadow-[0_0_12px_rgba(0,255,65,0.08)]',
  'in-progress': 'hover:border-term-amber/60 hover:shadow-[0_0_12px_rgba(255,176,0,0.08)]',
  complete: 'hover:border-line/60',
};

function ImageThumbnail({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  if (errored) return null;

  return (
    <div className="relative -mx-4 -mt-4 mb-3 overflow-hidden border-b border-line/40">
      {!loaded && (
        <div className="h-28 flex items-center justify-center bg-surface/30">
          <span className="text-[10px] text-txt-dim/30 animate-pulse font-mono">loading preview...</span>
        </div>
      )}
      <div className={`relative transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0 h-0'}`}>
        <img
          src={src}
          alt={`${title} screenshot`}
          className="w-full h-32 object-cover object-top"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,0,0,0.06)_3px,rgba(0,0,0,0.06)_4px)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/60" />
      </div>
    </div>
  );
}

function QuestCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`border rounded p-4 transition-all duration-300 cursor-pointer group ${STATUS_COLOR[project.status]} ${STATUS_GLOW[project.status]} ${expanded ? 'ring-1 ring-term-green/20' : ''}`}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') setExpanded(!expanded);
      }}
    >
      {/* Image thumbnail — always visible */}
      {project.image && <ImageThumbnail src={project.image} title={project.title} />}

      {/* Quest header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[10px] font-mono text-txt-dim/40 shrink-0">
            #{String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-sm text-txt-bright font-medium leading-snug group-hover:text-term-cyan transition-colors glitch-hover truncate">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {project.status === 'active' && (
            <span className="w-1.5 h-1.5 rounded-full bg-term-green animate-pulse-slow" />
          )}
          {project.status === 'in-progress' && (
            <span className="w-1.5 h-1.5 rounded-full bg-term-amber animate-pulse-slow" />
          )}
          <span className="text-[10px] uppercase tracking-wider whitespace-nowrap">
            [{STATUS_ICON[project.status]}] {STATUS_LABEL[project.status]}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className={`text-xs text-txt-dim leading-relaxed mt-2 ${expanded ? '' : 'line-clamp-2'}`}>
        {project.description}
      </p>

      {/* Expanded details */}
      {expanded && (
        <div className="mt-3 animate-fade-in space-y-3">
          {/* Tech stack */}
          <div>
            <span className="text-[9px] uppercase tracking-widest text-txt-dim/40 block mb-1.5">stack</span>
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
          </div>

          {/* Link */}
          {project.github && project.github !== 'coming soon' && (
            <SSHLink
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-txt-dim hover:text-term-cyan transition-colors"
            >
              <span className="text-term-green">&gt;</span> view source --&gt;
            </SSHLink>
          )}
          {project.github === 'coming soon' && (
            <span className="text-[10px] text-txt-dim/40 font-mono">// source: coming soon</span>
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
