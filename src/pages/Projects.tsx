import Project from '../components/Prjs/Projects';
import ProjectData from '../components/Prjs/ProjectData';
import SectionWrapper from '../components/SectionWrapper';

const Projects = () => {
  return (
    <SectionWrapper id="projects" title="Quest Log" subtitle="$ cat /var/log/quests/active">
      <div className="mb-8">
        <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-cyan-400 font-mono text-sm">quest-log.sh</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-cyan-400 font-mono">$</span>
              <span className="text-white font-mono">
                ./load_quest_log.sh --player=V --class=Netrunner
              </span>
            </div>
            <div className="text-gray-400 font-mono text-sm">
              <span className="text-green-400">*</span> Loading adventurer&apos;s quest history...
            </div>
            <div className="text-gray-400 font-mono text-sm">
              <span className="text-blue-400">*</span> Scanning completed achievements and
              rewards...
            </div>
            <div className="text-cyan-400 font-mono text-sm">
              <span className="text-yellow-400">✓</span> Found {ProjectData.length} quests in
              database
            </div>
            <div className="text-cyan-200 font-mono text-sm">
              <span className="text-purple-400">⚔️</span> Quest Log ready. Choose your next
              adventure, V.
            </div>
          </div>
        </div>
      </div>

      <Project />
    </SectionWrapper>
  );
};

export default Projects;
