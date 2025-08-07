import { useState } from 'react';
import ProjectData from './ProjectData';
import './Prj.css';

const Project = () => {
  const [selectedQuest, setSelectedQuest] = useState<number | null>(null);

  // Calculate quest stats
  const totalQuests = ProjectData.length;
  const completedQuests = ProjectData.filter((project) => project.status === 'COMPLETED').length;
  const legendaryQuests = ProjectData.filter((project) => project.status === 'LEGENDARY').length;
  const inProgressQuests = ProjectData.filter((project) => project.status === 'IN PROGRESS').length;

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LEGENDARY':
        return 'text-yellow-400';
      case 'COMPLETED':
        return 'text-green-400';
      case 'IN PROGRESS':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'LEGENDARY':
        return 'text-purple-400';
      case 'EPIC':
        return 'text-red-400';
      case 'RARE':
        return 'text-blue-400';
      case 'COMMON':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  // Get quest type icon
  const getQuestTypeIcon = (questType: string) => {
    switch (questType) {
      case 'MAIN QUEST':
        return '⚔️';
      case 'SIDE QUEST':
        return '📜';
      case 'COLLECTION QUEST':
        return '📚';
      case 'MAGIC QUEST':
        return '🔮';
      case 'GROUP QUEST':
        return '👥';
      case 'ANALYSIS QUEST':
        return '🔍';
      case 'RESEARCH QUEST':
        return '📊';
      case 'GAMING QUEST':
        return '🎮';
      case 'UTILITY QUEST':
        return '🛠️';
      case 'CRYPTOGRAPHY QUEST':
        return '🔐';
      case 'PUZZLE QUEST':
        return '🧩';
      default:
        return '❓';
    }
  };

  return (
    <div className="space-y-6">
      {/* Quest Log Header */}
      <div className="bg-black/60 border border-cyan-500/50 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">📜</div>
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 font-mono">QUEST LOG</h2>
              <p className="text-cyan-200 font-mono text-sm">
                Adventurer&apos;s Chronicle - V&apos;s Journey
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-cyan-400 font-mono text-sm">NETRUNNER V</div>
            <div className="text-cyan-200 font-mono text-xs">Level 42</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-cyan-400 font-mono">{totalQuests}</div>
            <div className="text-xs text-cyan-200 font-mono">TOTAL QUESTS</div>
          </div>
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-green-400 font-mono">{completedQuests}</div>
            <div className="text-xs text-green-200 font-mono">COMPLETED</div>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-yellow-400 font-mono">{legendaryQuests}</div>
            <div className="text-xs text-yellow-200 font-mono">LEGENDARY</div>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-blue-400 font-mono">{inProgressQuests}</div>
            <div className="text-xs text-blue-200 font-mono">IN PROGRESS</div>
          </div>
        </div>
      </div>

      {/* Quest Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectData.map((project, index) => (
          <div
            key={index}
            className="group bg-black/40 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/70 transition-all duration-200 cursor-pointer"
            onClick={() => setSelectedQuest(selectedQuest === index ? null : index)}
          >
            {/* Quest Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{getQuestTypeIcon(project.questType)}</span>
                <div>
                  <h3 className="text-white font-mono font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span
                      className={`text-xs font-mono px-2 py-1 rounded ${getStatusColor(project.status)} bg-opacity-20`}
                    >
                      {project.status}
                    </span>
                    <span
                      className={`text-xs font-mono px-2 py-1 rounded ${getDifficultyColor(project.difficulty)} bg-opacity-20`}
                    >
                      {project.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-cyan-500 group-hover:text-cyan-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* Quest Lore */}
            <p className="text-cyan-200 text-sm mb-4 italic leading-relaxed">{project.lore}</p>

            {/* Quest Rewards Preview */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.rewards.slice(0, 3).map((reward, rewardIndex) => (
                <span
                  key={rewardIndex}
                  className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded font-mono hover:bg-yellow-500/30 transition-colors"
                >
                  {reward}
                </span>
              ))}
              {project.rewards.length > 3 && (
                <span className="text-cyan-500 text-xs font-mono">
                  +{project.rewards.length - 3} more rewards
                </span>
              )}
            </div>

            {/* Quest Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-cyan-300 font-mono">
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span>{project.questType}</span>
                </span>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-cyan-400 hover:text-white transition-colors text-sm font-mono"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Claim Reward</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* Expanded Quest Details */}
            {selectedQuest === index && (
              <div className="mt-6 pt-6 border-t border-cyan-500/30">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cyan-400 font-mono text-sm mb-2">📖 Quest Description:</h4>
                    <p className="text-cyan-200 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="text-cyan-400 font-mono text-sm mb-2">⚔️ Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full font-mono hover:bg-cyan-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-cyan-400 font-mono text-sm mb-2">🏆 All Rewards:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.rewards.map((reward, rewardIndex) => (
                        <span
                          key={rewardIndex}
                          className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full font-mono hover:bg-yellow-500/30 transition-colors"
                        >
                          {reward}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500/30 transition-colors font-mono text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>View Quest Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
