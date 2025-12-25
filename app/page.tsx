'use client';

import { useState } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import GameTabButtons from "@/components/game-tab-buttons";
import CasinoGames from "@/components/casino-games";
import SlotGames from "@/components/slot-games";
import MiniGames from "@/components/mini-games";

type GameCategory = 'casino' | 'slot' | 'mini';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<GameCategory>('casino');

  return (
    <>
      <Header />
      
      {/* Game type tab section */}
      <section className="py-8">
        <div className="container mx-auto px-1 lg:px-5">
          <GameTabButtons 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="min-w-[1200px] w-full mx-auto">
            {activeCategory === 'casino' && <CasinoGames />}
            {activeCategory === 'slot' && <SlotGames />}
            {activeCategory === 'mini' && <MiniGames />}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
