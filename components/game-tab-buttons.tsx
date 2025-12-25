'use client';

type GameCategory = 'casino' | 'slot' | 'mini';

interface GameTabButtonsProps {
  activeCategory: GameCategory;
  onCategoryChange: (category: GameCategory) => void;
}

export default function GameTabButtons({ activeCategory, onCategoryChange }: GameTabButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center mb-8">
      <div className="bg-[#021540] rounded-2xl p-[0.35em] text-base w-full flex gap-[0.12rem] md:w-auto md:text-2xl md:flex-row">
        <button
          onClick={() => onCategoryChange('casino')}
          className={`px-6 py-2 rounded-lg md:rounded-[1.15rem] font-black transition-all duration-300 flex-1 md:flex-none md:w-[200px] ${
            activeCategory === 'casino'
              ? 'bg-gradient-to-b from-[#33e1ea] via-[#b5f4fe] to-[#33e1ea] text-white'
              : 'bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] hover:text-[#b5f4fe]'
          }`}
          style={
            activeCategory === 'casino'
              ? { textShadow: '#2a0240 0 0 10px' }
              : undefined
          }
        >
          CASINO
        </button>
        <button
          onClick={() => onCategoryChange('slot')}
          className={`px-6 py-2 rounded-lg md:rounded-[1.15rem] font-black transition-all duration-300 flex-1 md:flex-none md:w-[200px] ${
            activeCategory === 'slot'
              ? 'bg-gradient-to-b from-[#33e1ea] via-[#b5f4fe] to-[#33e1ea] text-white'
              : 'bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] hover:text-[#b5f4fe]'
          }`}
          style={
            activeCategory === 'slot'
              ? { textShadow: '#2a0240 0 0 10px' }
              : undefined
          }
        >
          SLOT
        </button>
        <button
          onClick={() => onCategoryChange('mini')}
          className={`px-6 py-2 rounded-lg md:rounded-[1.15rem] font-black transition-all duration-300 flex-1 md:flex-none md:w-[200px] ${
            activeCategory === 'mini'
              ? 'bg-gradient-to-b from-[#33e1ea] via-[#b5f4fe] to-[#33e1ea] text-white'
              : 'bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] hover:text-[#b5f4fe]'
          }`}
          style={
            activeCategory === 'mini'
              ? { textShadow: '#2a0240 0 0 10px' }
              : undefined
          }
        >
          MINI
        </button>
      </div>
    </div>
  );
}

