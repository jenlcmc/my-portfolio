import { useState } from 'react';
import { useAchievements } from '../contexts/AchievementContext';
import {
  inventory,
  RARITY_BORDER,
  RARITY_TEXT,
  RARITY_GLOW,
  CATEGORY_LABEL,
  CATEGORY_ICON,
  type InventoryItem,
  type ItemCategory,
} from '../data/inventory';

const CATEGORIES: ItemCategory[] = ['weapon', 'armor', 'consumable', 'artifact'];

function ItemSlot({
  item,
  selected,
  onSelect,
}: {
  item: InventoryItem;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`relative flex flex-col items-center justify-center p-2 border rounded transition-all duration-200 cursor-pointer group ${
        RARITY_BORDER[item.rarity]
      } ${RARITY_GLOW[item.rarity]} ${
        selected
          ? 'bg-base-surface ring-1 ring-term-cyan/30 scale-[1.02]'
          : 'bg-base-panel/50 hover:bg-base-surface/80'
      }`}
      title={item.name}
    >
      <span className="text-lg leading-none">{item.icon}</span>
      <span className="text-[9px] text-txt-dim mt-1 truncate w-full text-center">{item.name}</span>
      <span className={`text-[8px] ${RARITY_TEXT[item.rarity]} uppercase`}>Lv.{item.level}</span>
    </button>
  );
}

function ItemDetail({ item }: { item: InventoryItem }) {
  const pct = item.level;
  return (
    <div className={`border rounded p-4 bg-base-surface/50 ${RARITY_BORDER[item.rarity]}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{item.icon}</span>
        <div>
          <h4 className={`text-sm font-medium ${RARITY_TEXT[item.rarity]}`}>{item.name}</h4>
          <span className={`text-[10px] uppercase tracking-wider ${RARITY_TEXT[item.rarity]}`}>
            [{item.rarity}] {item.category}
          </span>
        </div>
      </div>

      {/* Level bar */}
      <div className="mb-3">
        <div className="flex justify-between text-[10px] text-txt-dim/60 mb-1">
          <span>PROFICIENCY</span>
          <span>Lv. {item.level} / 99</span>
        </div>
        <div className="h-1.5 bg-base rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-term-green transition-all duration-1000"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Flavor text */}
      <p className="text-xs text-txt-dim italic leading-relaxed border-t border-line/30 pt-2">
        &ldquo;{item.description}&rdquo;
      </p>

      {/* Stats */}
      <div className="mt-2 grid grid-cols-2 gap-1 text-[10px] text-txt-dim/50">
        <span>
          Category: {CATEGORY_ICON[item.category]} {CATEGORY_LABEL[item.category]}
        </span>
        <span>Equipped: Yes</span>
      </div>
    </div>
  );
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function InventoryGrid({ open, onClose }: Props) {
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<ItemCategory>('weapon');
  const { unlock } = useAchievements();

  /* Unlock achievement on first open */
  if (open) unlock('inventory');

  const filteredItems = inventory.filter((i) => i.category === activeCategory);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-base/70 backdrop-blur-sm" onClick={onClose} />

      {/* Inventory panel */}
      <div className="relative w-full max-w-2xl mx-4 border border-line rounded bg-base-panel/95 backdrop-blur-md shadow-[0_0_40px_rgba(0,170,255,0.08)] animate-fade-in max-h-[80vh] overflow-hidden flex flex-col">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-line bg-base-surface/90 shrink-0">
          <span className="text-term-amber text-xs tracking-wider font-medium">🎒 INVENTORY</span>
          <span className="text-[10px] text-txt-dim/40 ml-2">
            {inventory.length} items equipped
          </span>
          <button
            onClick={onClose}
            className="ml-auto text-[10px] text-txt-dim/40 hover:text-txt-bright transition-colors"
          >
            [ESC] close
          </button>
        </div>

        <div className="flex flex-1 min-h-0">
          {/* Left: Category tabs + grid */}
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Category tabs */}
            <div className="flex gap-1 mb-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedItem(null);
                  }}
                  className={`px-3 py-1 text-[10px] uppercase tracking-wider rounded transition-colors ${
                    activeCategory === cat
                      ? 'text-term-green bg-term-green/10 border border-term-green/30'
                      : 'text-txt-dim border border-line hover:text-txt-bright'
                  }`}
                >
                  {CATEGORY_ICON[cat]} {CATEGORY_LABEL[cat]}
                </button>
              ))}
            </div>

            {/* Item grid */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {filteredItems.map((item) => (
                <ItemSlot
                  key={item.name}
                  item={item}
                  selected={selectedItem?.name === item.name}
                  onSelect={() => setSelectedItem(item)}
                />
              ))}
              {/* Empty slots */}
              {Array.from({ length: Math.max(0, 10 - filteredItems.length) }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="border border-line/20 rounded bg-base/30 p-2 flex items-center justify-center"
                >
                  <span className="text-[10px] text-txt-dim/20">---</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Item detail */}
          <div className="w-56 border-l border-line p-4 hidden sm:block overflow-y-auto">
            {selectedItem ? (
              <ItemDetail item={selectedItem} />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <span className="text-2xl mb-2">📦</span>
                <p className="text-[11px] text-txt-dim/40">Select an item to inspect</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="border-t border-line px-4 py-2 flex items-center gap-4 text-[10px] text-txt-dim/40 shrink-0">
          <span>Total items: {inventory.length}</span>
          <span>Legendary: {inventory.filter((i) => i.rarity === 'legendary').length}</span>
          <span>Epic: {inventory.filter((i) => i.rarity === 'epic').length}</span>
          <span className="ml-auto">Carry weight: {inventory.length}/50</span>
        </div>
      </div>
    </div>
  );
}
