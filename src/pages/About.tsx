//import React from "react";
import '../styles/index.css';
import '../components/About/About.css';
import SectionWrapper from '../components/SectionWrapper';

const LinkedInIconURL =
  'https://icons.iconarchive.com/icons/arturo-wibawa/akar/256/linkedin-box-icon.png';
const GitHubIconURL =
  'https://icons.iconarchive.com/icons/simpleicons-team/simple/256/github-icon.png';

const About = () => {
  return (
    <SectionWrapper id="about" title="Character Sheet" subtitle="~/whoami">
      <div className="max-w-6xl mx-auto px-4">
        {/* RPG Character Interface */}
        <div className="bg-black/80 border-2 border-amber-500/50 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 sm:gap-4">
            {/* Character Portrait & Basic Stats */}
            <div className="xl:col-span-1">
              <div className="bg-black/60 border border-amber-500/30 rounded p-2 sm:p-3 mb-3">
                <div className="text-center">
                  <div className="relative group mb-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <img
                      src="https://github.com/jenlcmc/my-portfolio/raw/main/public/UT_Draw.png"
                      alt="Character Portrait"
                      className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full border-2 border-amber-500/50 transition-all duration-300 hover:scale-105 hover:border-amber-400"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-amber-400 mb-1">Uyen Tran</h2>
                  <p className="text-amber-200 text-xs font-mono mb-2">Netrunner / Code Mage</p>
                  <div className="flex justify-center space-x-2">
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded border border-green-500/30">
                      Lv.42
                    </span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                      CS Student
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Stats */}
              <div className="bg-black/60 border border-amber-500/30 rounded p-2 sm:p-3 mb-3">
                <h3 className="text-sm font-bold text-amber-400 mb-2 flex items-center">
                  <span className="mr-1">⚔️</span>
                  Core Stats
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-200 text-xs">Intelligence</span>
                    <div className="flex items-center">
                      <div className="w-12 sm:w-16 h-1.5 bg-gray-700 rounded-full mr-2">
                        <div className="w-10 sm:w-14 h-1.5 bg-blue-500 rounded-full" />
                      </div>
                      <span className="text-blue-400 text-xs">85</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-200 text-xs">Problem Solving</span>
                    <div className="flex items-center">
                      <div className="w-12 sm:w-16 h-1.5 bg-gray-700 rounded-full mr-2">
                        <div className="w-11 sm:w-15 h-1.5 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-green-400 text-xs">92</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-200 text-xs">Creativity</span>
                    <div className="flex items-center">
                      <div className="w-12 sm:w-16 h-1.5 bg-gray-700 rounded-full mr-2">
                        <div className="w-9 sm:w-12 h-1.5 bg-purple-500 rounded-full" />
                      </div>
                      <span className="text-purple-400 text-xs">78</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-200 text-xs">Adaptability</span>
                    <div className="flex items-center">
                      <div className="w-12 sm:w-16 h-1.5 bg-gray-700 rounded-full mr-2">
                        <div className="w-10 sm:w-13 h-1.5 bg-orange-500 rounded-full" />
                      </div>
                      <span className="text-orange-400 text-xs">83</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-200 text-xs">Communication</span>
                    <div className="flex items-center">
                      <div className="w-12 sm:w-16 h-1.5 bg-gray-700 rounded-full mr-2">
                        <div className="w-8 sm:w-11 h-1.5 bg-cyan-500 rounded-full" />
                      </div>
                      <span className="text-cyan-400 text-xs">76</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-200 text-xs">Leadership</span>
                    <div className="flex items-center">
                      <div className="w-12 sm:w-16 h-1.5 bg-gray-700 rounded-full mr-2">
                        <div className="w-7 sm:w-10 h-1.5 bg-red-500 rounded-full" />
                      </div>
                      <span className="text-red-400 text-xs">70</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Abilities */}
            <div className="xl:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-full">
                {/* Combat Skills */}
                <div className="bg-black/60 border border-amber-500/30 rounded p-2 sm:p-3">
                  <h3 className="text-sm font-bold text-amber-400 mb-2 flex items-center">
                    <span className="mr-1">🗡️</span>
                    Combat Skills
                  </h3>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-yellow-400 mr-1 flex-shrink-0">⚡</span>
                        <span className="text-amber-200 truncate">TypeScript/JS</span>
                      </div>
                      <span className="px-1 py-0.5 bg-yellow-500/20 text-yellow-300 rounded border border-yellow-500/30 text-xs flex-shrink-0 ml-2">
                        Expert
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-green-400 mr-1 flex-shrink-0">🐍</span>
                        <span className="text-amber-200 truncate">Python</span>
                      </div>
                      <span className="px-1 py-0.5 bg-green-500/20 text-green-300 rounded border border-green-500/30 text-xs flex-shrink-0 ml-2">
                        Advanced
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-blue-400 mr-1 flex-shrink-0">⚛️</span>
                        <span className="text-amber-200 truncate">React/Next.js</span>
                      </div>
                      <span className="px-1 py-0.5 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30 text-xs flex-shrink-0 ml-2">
                        Advanced
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-red-400 mr-1 flex-shrink-0">⚙️</span>
                        <span className="text-amber-200 truncate">C++</span>
                      </div>
                      <span className="px-1 py-0.5 bg-red-500/20 text-red-300 rounded border border-red-500/30 text-xs flex-shrink-0 ml-2">
                        Intermediate
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-blue-400 mr-1 flex-shrink-0">🔧</span>
                        <span className="text-amber-200 truncate">C</span>
                      </div>
                      <span className="px-1 py-0.5 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30 text-xs flex-shrink-0 ml-2">
                        Intermediate
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-purple-400 mr-1 flex-shrink-0">💎</span>
                        <span className="text-amber-200 truncate">SQL</span>
                      </div>
                      <span className="px-1 py-0.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30 text-xs flex-shrink-0 ml-2">
                        Intermediate
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-orange-400 mr-1 flex-shrink-0">🎨</span>
                        <span className="text-amber-200 truncate">HTML/CSS</span>
                      </div>
                      <span className="px-1 py-0.5 bg-orange-500/20 text-orange-300 rounded border border-orange-500/30 text-xs flex-shrink-0 ml-2">
                        Advanced
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-cyan-400 mr-1 flex-shrink-0">🐘</span>
                        <span className="text-amber-200 truncate">Java</span>
                      </div>
                      <span className="px-1 py-0.5 bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30 text-xs flex-shrink-0 ml-2">
                        Beginner
                      </span>
                    </div>
                  </div>
                </div>

                {/* Magic Skills */}
                <div className="bg-black/60 border border-amber-500/30 rounded p-2 sm:p-3">
                  <h3 className="text-sm font-bold text-amber-400 mb-2 flex items-center">
                    <span className="mr-1">🔮</span>
                    Magic Skills
                  </h3>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-purple-400 mr-1 flex-shrink-0">🤖</span>
                        <span className="text-amber-200 truncate">Machine Learning</span>
                      </div>
                      <span className="px-1 py-0.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30 text-xs flex-shrink-0 ml-2">
                        Learning
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-cyan-400 mr-1 flex-shrink-0">📊</span>
                        <span className="text-amber-200 truncate">Data Science</span>
                      </div>
                      <span className="px-1 py-0.5 bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30 text-xs flex-shrink-0 ml-2">
                        Intermediate
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-orange-400 mr-1 flex-shrink-0">☁️</span>
                        <span className="text-amber-200 truncate">AWS/Cloud</span>
                      </div>
                      <span className="px-1 py-0.5 bg-orange-500/20 text-orange-300 rounded border border-orange-500/30 text-xs flex-shrink-0 ml-2">
                        Beginner
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-blue-400 mr-1 flex-shrink-0">🔧</span>
                        <span className="text-amber-200 truncate">DevOps</span>
                      </div>
                      <span className="px-1 py-0.5 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30 text-xs flex-shrink-0 ml-2">
                        Learning
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-yellow-400 mr-1 flex-shrink-0">⚡</span>
                        <span className="text-amber-200 truncate">Git/GitHub</span>
                      </div>
                      <span className="px-1 py-0.5 bg-yellow-500/20 text-yellow-300 rounded border border-yellow-500/30 text-xs flex-shrink-0 ml-2">
                        Advanced
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-red-400 mr-1 flex-shrink-0">🎯</span>
                        <span className="text-amber-200 truncate">Agile/Scrum</span>
                      </div>
                      <span className="px-1 py-0.5 bg-red-500/20 text-red-300 rounded border border-red-500/30 text-xs flex-shrink-0 ml-2">
                        Intermediate
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-black/40 border border-amber-500/20 rounded text-xs">
                      <div className="flex items-center min-w-0">
                        <span className="text-indigo-400 mr-1 flex-shrink-0">📱</span>
                        <span className="text-amber-200 truncate">Mobile Dev</span>
                      </div>
                      <span className="px-1 py-0.5 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30 text-xs flex-shrink-0 ml-2">
                        Beginner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Character Lore & Contact */}
            <div className="xl:col-span-1">
              <div className="bg-black/60 border border-amber-500/30 rounded p-2 sm:p-3 mb-3">
                <h3 className="text-sm font-bold text-amber-400 mb-2 flex items-center">
                  <span className="mr-1">📜</span>
                  Character Lore
                </h3>
                <div className="space-y-2">
                  <div className="bg-black/40 border border-amber-500/20 rounded p-2">
                    <h4 className="text-amber-300 font-semibold mb-1 text-xs">Background</h4>
                    <p className="text-amber-200 text-xs leading-relaxed">
                      Recent CS graduate and MSCS student at UNLV. 2.5 years as TA/GTA, guiding
                      apprentices through C++ and bridging students and faculty.
                    </p>
                  </div>
                  <div className="bg-black/40 border border-amber-500/20 rounded p-2">
                    <h4 className="text-amber-300 font-semibold mb-1 text-xs">Quest Experience</h4>
                    <p className="text-amber-200 text-xs leading-relaxed">
                      DOE contractor experience on national projects. Studies span Data Science,
                      Algorithms, ML, and Software Design. Currently Student System Engineer at UNLV
                      and Project Engineer for civic education startup.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact & Social Links */}
              <div className="bg-black/60 border border-amber-500/30 rounded p-2 sm:p-3">
                <h3 className="text-sm font-bold text-amber-400 mb-2 flex items-center">
                  <span className="mr-1">📬</span>
                  Contact Links
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://www.linkedin.com/in/uyen-tran-b174a61ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 bg-blue-600/20 border border-blue-500/50 rounded hover:bg-blue-600/30 transition-all duration-200 group"
                  >
                    <img
                      src={LinkedInIconURL}
                      alt="LinkedIn"
                      className="w-4 h-4 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-blue-300 text-xs">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/jenlcmc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 bg-gray-600/20 border border-gray-500/50 rounded hover:bg-gray-600/30 transition-all duration-200 group"
                  >
                    <img
                      src={GitHubIconURL}
                      alt="GitHub"
                      className="w-4 h-4 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-gray-300 text-xs">GitHub</span>
                  </a>
                  <div className="flex items-center gap-2 p-2 bg-green-600/20 border border-green-500/50 rounded">
                    <span className="text-green-400 text-xs">📧</span>
                    <span className="text-green-300 text-xs">Create issue/PR on GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
