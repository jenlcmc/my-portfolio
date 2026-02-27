export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_scroll',
    title: 'First Steps',
    description: 'Scroll down for the first time',
    icon: '👣',
    rarity: 'common',
  },
  {
    id: 'terminal',
    title: 'Access Granted',
    description: 'Open the command terminal',
    icon: '💻',
    rarity: 'common',
  },
  {
    id: 'all_sections',
    title: 'Completionist',
    description: 'Visit every section',
    icon: '🗺️',
    rarity: 'rare',
  },
  {
    id: 'theme_change',
    title: 'Fashion Souls',
    description: 'Change the visual theme',
    icon: '🎨',
    rarity: 'common',
  },
  {
    id: 'konami',
    title: '↑↑↓↓←→←→BA',
    description: 'Enter the Konami code',
    icon: '🎮',
    rarity: 'legendary',
  },
  {
    id: 'encounter',
    title: 'Random Encounter',
    description: 'Survive a random encounter',
    icon: '⚔️',
    rarity: 'rare',
  },
  {
    id: 'inventory',
    title: 'Loot Goblin',
    description: 'Open the skill inventory',
    icon: '🎒',
    rarity: 'common',
  },
  {
    id: 'click_25',
    title: 'Mouse Crusader',
    description: 'Click 25 times',
    icon: '🖱️',
    rarity: 'rare',
  },
  {
    id: 'night_owl',
    title: 'Night Owl',
    description: 'Visit between midnight and 5am',
    icon: '🦉',
    rarity: 'epic',
  },
  {
    id: 'warp',
    title: 'Warp Speed',
    description: 'Use orbital navigation',
    icon: '🚀',
    rarity: 'rare',
  },
  {
    id: 'panel',
    title: 'Multitasker',
    description: 'Activate multi-panel view',
    icon: '📊',
    rarity: 'rare',
  },
  {
    id: 'ssh',
    title: 'Secure Channel',
    description: 'Follow an encrypted link',
    icon: '🔐',
    rarity: 'common',
  },
];

export const RARITY_COLOR: Record<Achievement['rarity'], string> = {
  common: 'text-txt-dim border-line',
  rare: 'text-term-cyan border-term-cyan/30',
  epic: 'text-purple-400 border-purple-400/30',
  legendary: 'text-term-amber border-term-amber/30',
};
