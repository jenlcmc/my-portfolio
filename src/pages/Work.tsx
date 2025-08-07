import '../components/Works/Works.css';
import WorkExperience from '../components/Works/WorkExp';
import SectionWrapper from '../components/SectionWrapper';

const Work = () => {
  return (
    <SectionWrapper id="work" title="Career Git Log" subtitle="$ git log --oneline --graph --all">
      <div className="space-y-8">
        <div className="bg-terminal-surface/40 border border-terminal-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-terminal-accent font-mono text-sm">
              $ git log --oneline --author=&apos;Uyen Tran&apos;
            </span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <div className="text-terminal-primary">
              $ git log --graph --pretty=format:&apos;%h - %s (%cr) &lt;%an&gt;&apos;
            </div>
            <div className="text-terminal-text mt-1">Showing professional commit history...</div>
            <div className="text-terminal-muted text-xs">
              Total commits: 9 | Active branches: main, development
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-terminal-surface/30 border border-terminal-primary/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-terminal-primary font-mono">4+</div>
            <div className="text-sm text-terminal-muted font-mono">YEARS EXP</div>
          </div>
          <div className="bg-terminal-surface/30 border border-green-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400 font-mono">9</div>
            <div className="text-sm text-terminal-muted font-mono">POSITIONS</div>
          </div>
          <div className="bg-terminal-surface/30 border border-yellow-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400 font-mono">5</div>
            <div className="text-sm text-terminal-muted font-mono">COMPANIES</div>
          </div>
          <div className="bg-terminal-surface/30 border border-terminal-secondary/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-terminal-secondary font-mono">41+</div>
            <div className="text-sm text-terminal-muted font-mono">TECH STACK</div>
          </div>
        </div>

        <WorkExperience />
      </div>
    </SectionWrapper>
  );
};

export default Work;
