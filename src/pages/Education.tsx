import '../components/Education/Education.css';
import SectionWrapper from '../components/SectionWrapper';
import { TimeLineData, TimelineDataGrad } from '../components/Education/TimelineData';

const Education = () => {
  const renderStatusDot = (color: string, animate = false) => (
    <div className={`w-3 h-3 rounded-full ${color} ${animate ? 'animate-pulse' : ''}`} />
  );

  const renderMissionCard = (title: string, status: string, missionId: string, color: string) => (
    <div className={`bg-black/90 border border-${color}-500 rounded-lg p-3 sm:p-4 relative`}>
      <div className={`absolute top-0 left-0 w-full h-1 bg-${color}-500`} />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <div className="flex items-center gap-3">
          <div
            className={`w-4 h-4 bg-${color}-500 rounded ${status === 'IN PROGRESS' ? 'animate-pulse' : ''}`}
          />
          <h3 className="text-lg sm:text-xl font-bold text-white font-mono">{title}</h3>
          <div
            className={`text-xs bg-${color}-500/20 text-${color}-400 px-2 py-1 rounded border border-${color}-500/50 font-mono`}
          >
            {status}
          </div>
        </div>
        <div className="text-left sm:text-right">
          <div className={`text-xs text-${color}-400 font-mono`}>MISSION ID</div>
          <div className={`text-sm text-${color}-300 font-mono`}>{missionId}</div>
        </div>
      </div>
    </div>
  );

  const renderStatCard = (value: string, label: string, status: string, color: string) => (
    <div className={`bg-black/90 border border-${color}-500 rounded p-3 text-center relative`}>
      <div className={`absolute top-0 left-0 w-full h-1 bg-${color}-500`} />
      <div className={`text-xl sm:text-2xl font-bold text-${color}-400 font-mono`}>{value}</div>
      <div className={`text-xs text-${color}-300 font-mono`}>{label}</div>
      <div className={`text-xs text-${color}-400 font-mono mt-1`}>{status}</div>
    </div>
  );

  const renderCourseList = (courses: string[], color: string) => (
    <div className="space-y-1">
      {courses.map((course, courseIndex) => (
        <div key={courseIndex} className="flex items-center gap-2">
          <div className={`w-2 h-2 bg-${color}-500 rounded-full`} />
          <span className={`text-xs text-${color}-200 font-mono`}>{course}</span>
        </div>
      ))}
    </div>
  );

  return (
    <SectionWrapper id="education" title="Tactical Command Center" subtitle="~/mission-control">
      <div className="space-y-4 sm:space-y-6 px-4">
        {/* HUD Header */}
        <div className="bg-black/95 border border-cyan-400 rounded-lg p-3 sm:p-4 relative">
          <div className="absolute inset-0 bg-cyan-400/5" />
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex gap-2">
                  {renderStatusDot('bg-red-500', true)}
                  {renderStatusDot('bg-yellow-500')}
                  {renderStatusDot('bg-green-500')}
                </div>
                <span className="font-mono text-sm text-cyan-400">TACTICAL_HUD.exe</span>
                <div className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded border border-cyan-400/50 font-mono">
                  ACTIVE
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-xs text-cyan-400 font-mono">MISSION STATUS</div>
                <div className="text-sm text-green-400 font-mono font-bold">OPERATIONAL</div>
              </div>
            </div>
            <div className="font-mono text-sm">
              <div className="text-cyan-400">$ ./tactical_status.sh</div>
              <div className="text-yellow-400 mt-1">Loading tactical data...</div>
            </div>
          </div>
        </div>

        {/* Current Mission */}
        {renderMissionCard('ACTIVE MISSION', 'IN PROGRESS', 'MS-2024-001', 'blue')}

        <div className="bg-black/90 border border-blue-500 rounded-lg p-3 sm:p-4 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
            {renderStatCard('3.8', 'MISSION RATING', 'EXCELLENT', 'blue')}
            {renderStatCard('9', 'OBJECTIVES COMPLETED', '30% PROGRESS', 'blue')}
            {renderStatCard('30', 'CREDITS REMAINING', 'EST. 2 YEARS', 'blue')}
          </div>

          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-semibold text-white">
              🎯 Mission: Master of Science in Computer Science
            </h4>
            <p className="text-blue-300 font-mono text-sm">
              📍 Deployment Zone: University of Nevada, Las Vegas
            </p>

            {/* Objectives */}
            <div className="mt-4">
              <h5 className="text-sm font-bold text-blue-400 font-mono mb-2">
                MISSION OBJECTIVES:
              </h5>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {TimelineDataGrad.map((timeLine, index) => (
                  <div
                    key={index}
                    className="bg-black/60 border border-blue-500/50 rounded p-2 sm:p-3"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
                    <div className="text-sm font-bold text-blue-400 font-mono mb-2 flex items-center gap-2">
                      <span className="text-yellow-400">⚡</span>
                      {timeLine.year}
                    </div>
                    {renderCourseList(timeLine.courses, 'blue')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievement */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-black/90 border-2 border-green-500 rounded-lg px-4 sm:px-6 py-3 relative">
            <div className="absolute inset-0 bg-green-500/5" />
            <div className="relative flex items-center gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl">🏆</span>
              <div className="text-center">
                <div className="font-mono text-green-400 font-bold text-base sm:text-lg">
                  MISSION COMPLETE: BACHELOR&apos;S DEGREE
                </div>
                <div className="text-yellow-400 text-xs sm:text-sm font-mono">
                  ACHIEVEMENT UNLOCKED
                </div>
              </div>
              <span className="text-2xl sm:text-3xl">🎖️</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {renderStatCard('3.90', 'COMBAT RATING', 'OUTSTANDING', 'green')}
          {renderStatCard('120+', 'OBJECTIVES COMPLETED', '100% SUCCESS', 'green')}
          {renderStatCard('MAGNA', 'CUM LAUDE', 'DISTINGUISHED', 'yellow')}
          {renderStatCard('2024', 'MISSION DATE', 'SUCCESSFUL', 'green')}
        </div>

        {/* Completed Mission */}
        {renderMissionCard(
          'MISSION COMPLETE ✓',
          'SUCCESSFUL EXTRACTION 2024',
          'BS-2024-001',
          'green',
        )}

        <div className="bg-black/90 border border-green-500 rounded-lg p-3 sm:p-4 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />

          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-semibold text-white">
              🎯 Completed Mission: Bachelor of Science in Computer Science
            </h4>
            <p className="text-yellow-400 font-mono font-semibold text-sm">
              🎖️ Distinguished Service Medal: Magna Cum Laude (Combat Rating: 3.90)
            </p>
            <p className="text-green-300 font-mono text-sm">
              📍 Mission Zone: University of Nevada, Las Vegas + Mathematics Specialization
            </p>

            {/* Timeline */}
            <div className="mt-4">
              <h5 className="text-sm font-bold text-green-400 font-mono mb-3">MISSION TIMELINE:</h5>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {TimeLineData.map((timeLine, index) => (
                  <div
                    key={index}
                    className="bg-black/60 border border-green-500/50 rounded p-2 sm:p-3"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                    <div className="text-sm font-bold text-green-400 font-mono mb-2 flex items-center gap-2">
                      <span className="text-yellow-400">📅</span>
                      {timeLine.year}
                    </div>
                    {renderCourseList(timeLine.courses, 'green')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Terminal */}
        <div className="bg-black/95 border border-cyan-400 rounded-lg p-3 sm:p-4 relative">
          <div className="absolute inset-0 bg-cyan-400/5" />
          <div className="relative">
            <div className="font-mono text-sm space-y-2">
              <div className="text-cyan-400">$ mission_summary --status</div>
              <div className="text-green-400">
                ✓ Bachelor&apos;s degree mission completed successfully!
              </div>
              <div className="text-blue-400">⚡ Master&apos;s degree mission in progress...</div>
              <div className="text-yellow-400">🎯 Next objective: Graduate degree completion</div>
              <div className="text-cyan-400 mt-2">
                $ echo &quot;Ready for next deployment!&quot;
              </div>
              <div className="text-white">Ready for next deployment!</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
