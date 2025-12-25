'use client';

import { useState } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import GameTabButtons from "@/components/game-tab-buttons";
import CasinoGames from "@/components/casino-games";
import SlotGames from "@/components/slot-games";
import MiniGames from "@/components/mini-games";
import AccountModal from "@/components/account-modal";

type GameCategory = 'casino' | 'slot' | 'mini';
type AccountTab = 'deposit' | 'withdraw' | 'point' | 'notice' | 'event';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<GameCategory>('casino');
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [activeAccountTab, setActiveAccountTab] = useState<AccountTab>('deposit');

  const handleModalOpen = (modalId: string, tab?: string) => {
    if (modalId === 'account-page' && tab) {
      const validTab = ['deposit', 'withdraw', 'point', 'notice', 'event'].includes(tab)
        ? (tab as AccountTab)
        : 'deposit';
      setActiveAccountTab(validTab);
      setIsAccountModalOpen(true);
    }
  };

  const handleAccountModalClose = () => {
    setIsAccountModalOpen(false);
  };

  const handleAccountTabChange = (tab: AccountTab) => {
    setActiveAccountTab(tab);
  };

  return (
    <>
      <Header onModalOpen={handleModalOpen} />
      
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

      {/* Account Modal */}
      <AccountModal
        isOpen={isAccountModalOpen}
        activeTab={activeAccountTab}
        onClose={handleAccountModalClose}
        onTabChange={handleAccountTabChange}
      />
    </>
  );
}
