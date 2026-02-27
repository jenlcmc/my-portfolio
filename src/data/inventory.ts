export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type ItemCategory = 'weapon' | 'armor' | 'consumable' | 'artifact';

export interface InventoryItem {
  name: string;
  category: ItemCategory;
  rarity: Rarity;
  level: number;
  description: string;
  icon: string;
}

export const inventory: InventoryItem[] = [
  /* ── WEAPONS (Languages) ── */
  {
    name: 'Python',
    category: 'weapon',
    rarity: 'legendary',
    level: 92,
    description: 'Ancient serpent staff. Deals massive damage to data problems.',
    icon: '🐍',
  },
  {
    name: 'TypeScript',
    category: 'weapon',
    rarity: 'legendary',
    level: 90,
    description: 'Typed-edge sword. Prevents runtime curses.',
    icon: '⚔️',
  },
  {
    name: 'Java',
    category: 'weapon',
    rarity: 'epic',
    level: 80,
    description: 'Caffeinated blade. Verbose but deadly.',
    icon: '☕',
  },
  {
    name: 'JavaScript',
    category: 'weapon',
    rarity: 'epic',
    level: 85,
    description: 'Prototype dagger. Quick and unpredictable.',
    icon: '🗡️',
  },
  {
    name: 'C++',
    category: 'weapon',
    rarity: 'rare',
    level: 65,
    description: 'Memory pointer lance. Powerful but dangerous.',
    icon: '🔧',
  },
  {
    name: 'SQL',
    category: 'weapon',
    rarity: 'rare',
    level: 70,
    description: 'Query scroll. Summons data from the void.',
    icon: '📜',
  },
  {
    name: 'HTML/CSS',
    category: 'weapon',
    rarity: 'uncommon',
    level: 90,
    description: 'Foundational binding spell. Shapes the visible world.',
    icon: '🌐',
  },
  {
    name: 'R',
    category: 'weapon',
    rarity: 'uncommon',
    level: 45,
    description: 'Statistical compass. Points toward significance.',
    icon: '📊',
  },

  /* ── ARMOR (Frameworks) ── */
  {
    name: 'React',
    category: 'armor',
    rarity: 'legendary',
    level: 93,
    description: 'Component shield. Re-renders reality at 60fps.',
    icon: '⚛️',
  },
  {
    name: 'Node.js',
    category: 'armor',
    rarity: 'epic',
    level: 82,
    description: 'Event loop armor. Handles async chaos.',
    icon: '💚',
  },
  {
    name: 'Tailwind CSS',
    category: 'armor',
    rarity: 'epic',
    level: 88,
    description: 'Utility cloak. 1000 classes of protection.',
    icon: '🎨',
  },
  {
    name: 'Spring Boot',
    category: 'armor',
    rarity: 'rare',
    level: 55,
    description: 'Java knight gauntlet. Enterprise-grade defense.',
    icon: '🛡️',
  },
  {
    name: 'Flask',
    category: 'armor',
    rarity: 'rare',
    level: 60,
    description: 'Lightweight tunic. Agile and minimal.',
    icon: '🧪',
  },
  {
    name: 'Next.js',
    category: 'armor',
    rarity: 'rare',
    level: 65,
    description: 'SSR helmet. Sees both server and client.',
    icon: '🔮',
  },
  {
    name: 'Angular',
    category: 'armor',
    rarity: 'rare',
    level: 70,
    description: 'Enterprise plate mail. Heavy but structured.',
    icon: '🔴',
  },
  {
    name: 'React Native',
    category: 'armor',
    rarity: 'rare',
    level: 60,
    description: 'Cross-realm armor. Works in any dimension.',
    icon: '📱',
  },

  /* ── CONSUMABLES (Tools) ── */
  {
    name: 'Git',
    category: 'consumable',
    rarity: 'epic',
    level: 90,
    description: 'Version potion. Rewind time itself.',
    icon: '🔄',
  },
  {
    name: 'Docker',
    category: 'consumable',
    rarity: 'rare',
    level: 72,
    description: 'Container flask. Portable environment brew.',
    icon: '🐋',
  },
  {
    name: 'AWS',
    category: 'consumable',
    rarity: 'epic',
    level: 75,
    description: 'Cloud elixir. Infinite scaling energy.',
    icon: '☁️',
  },
  {
    name: 'PostgreSQL',
    category: 'consumable',
    rarity: 'rare',
    level: 68,
    description: 'Relational brew. Structured data healing.',
    icon: '🐘',
  },
  {
    name: 'MongoDB',
    category: 'consumable',
    rarity: 'rare',
    level: 65,
    description: 'Document tonic. Schema-free restoration.',
    icon: '🍃',
  },
  {
    name: 'Linux',
    category: 'consumable',
    rarity: 'epic',
    level: 80,
    description: 'Penguin remedy. sudo make me_a_sandwich.',
    icon: '🐧',
  },

  /* ── ARTIFACTS (Domains) ── */
  {
    name: 'Machine Learning',
    category: 'artifact',
    rarity: 'epic',
    level: 78,
    description: 'Neural amulet. The machines are learning...',
    icon: '🧠',
  },
  {
    name: 'Cloud Computing',
    category: 'artifact',
    rarity: 'epic',
    level: 75,
    description: 'Sky crystal. Commands the infrastructure above.',
    icon: '🌩️',
  },
  {
    name: 'Data Analytics',
    category: 'artifact',
    rarity: 'rare',
    level: 72,
    description: 'Insight lens. Reveals patterns in chaos.',
    icon: '🔍',
  },
  {
    name: 'CI/CD',
    category: 'artifact',
    rarity: 'rare',
    level: 70,
    description: 'Pipeline ring. Automates the eternal cycle.',
    icon: '♾️',
  },
];

export const RARITY_BORDER: Record<Rarity, string> = {
  common: 'border-txt-dim/30',
  uncommon: 'border-term-green/40',
  rare: 'border-term-cyan/40',
  epic: 'border-purple-400/40',
  legendary: 'border-term-amber/40',
};

export const RARITY_TEXT: Record<Rarity, string> = {
  common: 'text-txt-dim',
  uncommon: 'text-term-green',
  rare: 'text-term-cyan',
  epic: 'text-purple-400',
  legendary: 'text-term-amber',
};

export const RARITY_GLOW: Record<Rarity, string> = {
  common: '',
  uncommon: 'shadow-[0_0_6px_rgba(0,204,136,0.15)]',
  rare: 'shadow-[0_0_6px_rgba(0,170,255,0.2)]',
  epic: 'shadow-[0_0_8px_rgba(168,85,247,0.2)]',
  legendary: 'shadow-[0_0_10px_rgba(255,170,0,0.25)]',
};

export const CATEGORY_LABEL: Record<ItemCategory, string> = {
  weapon: 'WEAPONS',
  armor: 'ARMOR',
  consumable: 'CONSUMABLES',
  artifact: 'ARTIFACTS',
};

export const CATEGORY_ICON: Record<ItemCategory, string> = {
  weapon: '⚔',
  armor: '🛡',
  consumable: '🧪',
  artifact: '✨',
};
