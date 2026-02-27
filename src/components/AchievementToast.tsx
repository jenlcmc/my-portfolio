import { useAchievements } from '../contexts/AchievementContext';
import { RARITY_COLOR, type Achievement } from '../data/achievements';

function Toast({ achievement }: { achievement: Achievement }) {
  const rarity = achievement.rarity;

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 border rounded bg-base-panel/95 backdrop-blur-md shadow-lg animate-achievement-in ${RARITY_COLOR[rarity]}`}
    >
      <span className="text-2xl">{achievement.icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-txt-dim/60 mb-0.5">
          Achievement Unlocked
        </div>
        <div className="text-sm font-medium text-txt-bright">{achievement.title}</div>
        <div className="text-[11px] text-txt-dim">{achievement.description}</div>
        <div className={`text-[9px] uppercase tracking-wider mt-0.5 ${RARITY_COLOR[rarity]}`}>
          [{rarity}]
        </div>
      </div>
    </div>
  );
}

export default function AchievementToast() {
  const { queue } = useAchievements();

  if (queue.length === 0) return null;

  return (
    <div className="fixed top-16 right-4 z-[85] flex flex-col gap-2 pointer-events-none">
      {queue.map((ach) => (
        <Toast key={ach.id} achievement={ach} />
      ))}
    </div>
  );
}
