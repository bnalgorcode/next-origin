'use client';

import { useState } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import GameTabButtons from "@/components/game-tab-buttons";
import CasinoGames from "@/components/casino-games";
import SlotGames from "@/components/slot-games";
import MiniGames from "@/components/mini-games";
import AccountModal from "@/components/account-modal";
import MyPageModal from "@/components/my-page-modal";

type GameCategory = 'casino' | 'slot' | 'mini';
type AccountTab = 'deposit' | 'withdraw' | 'point' | 'notice' | 'event';
type MyPageTab = 'profile' | 'letter' | 'qna' | 'history';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<GameCategory>('casino');
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [activeAccountTab, setActiveAccountTab] = useState<AccountTab>('deposit');
  const [isMyPageModalOpen, setIsMyPageModalOpen] = useState(false);
  const [activeMyPageTab, setActiveMyPageTab] = useState<MyPageTab>('profile');

  const handleModalOpen = (modalId: string, tab?: string) => {
    if (modalId === 'account-page' && tab) {
      const validTab = ['deposit', 'withdraw', 'point', 'notice', 'event'].includes(tab)
        ? (tab as AccountTab)
        : 'deposit';
      setActiveAccountTab(validTab);
      setIsAccountModalOpen(true);
    } else if (modalId === 'my-page' && tab) {
      const validTab = ['profile', 'letter', 'qna', 'history'].includes(tab)
        ? (tab as MyPageTab)
        : 'profile';
      setActiveMyPageTab(validTab);
      setIsMyPageModalOpen(true);
    }
  };

  const handleAccountModalClose = () => {
    setIsAccountModalOpen(false);
  };

  const handleAccountTabChange = (tab: AccountTab) => {
    setActiveAccountTab(tab);
  };

  const handleMyPageModalClose = () => {
    setIsMyPageModalOpen(false);
  };

  const handleMyPageTabChange = (tab: MyPageTab) => {
    setActiveMyPageTab(tab);
  };

  return (
    <>
      <Header onModalOpen={handleModalOpen} />
      
      {/* Game type tab section */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 max-w-full">
          <GameTabButtons 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="w-full mx-auto">
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

      {/* My Page Modal */}
      <MyPageModal
        isOpen={isMyPageModalOpen}
        activeTab={activeMyPageTab}
        onClose={handleMyPageModalClose}
        onTabChange={handleMyPageTabChange}
      />
    </>
  );
}
