'use client';

import Image from 'next/image';

type GameCategory = 'casino' | 'slot' | 'mini';

interface GameTabButtonsProps {
  activeCategory: GameCategory;
  onCategoryChange: (category: GameCategory) => void;
}

export default function GameTabButtons({ activeCategory, onCategoryChange }: GameTabButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center mb-1">
      <div className="w-full md:flex md:justify-center md:items-center md:w-full md:gap-1">
        <div
          onClick={() => onCategoryChange('casino')}
          className={`transition-all duration-300 cursor-pointer rounded-lg md:rounded-none md:hover:scale-105 ${
            activeCategory === 'casino' ? 'active' : ''
          }`}
        >
          <Image
            src="/images/main/tab-casino.png"
            alt="Casino"
            sizes = "33vw"
            width = {33}
            height = {80}
            className="w-full max-w-full h-auto md:w-auto md:h-auto"
          />
        </div>
        <div
          onClick={() => onCategoryChange('slot')}
          className={`transition-all duration-300 cursor-pointer rounded-lg md:rounded-none md:hover:scale-105 ${
            activeCategory === 'slot' ? 'active' : ''
          }`}
        >
          <Image
            src="/images/main/tab-slot.png"
            alt="Slot"
            sizes = "33vw"
            width = {33}
            height = {80}
            className="w-full max-w-full h-auto md:w-auto md:h-auto"
          />
        </div>
        <div
          onClick={() => onCategoryChange('mini')}
          className={`transition-all duration-300 cursor-pointer rounded-lg md:rounded-none md:hover:scale-105 ${
            activeCategory === 'mini' ? 'active' : ''
          }`}
        >
          <Image
            src="/images/main/tab-mini.png"
            alt="Mini"
            sizes = "33vw"
            width = {33}
            height = {80}
            className="w-full max-w-full h-auto md:w-auto md:h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}

