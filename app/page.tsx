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
import LoginModal from "@/components/login-modal";
import Jackpot from "@/components/jackpot";

type GameCategory = 'casino' | 'slot' | 'mini';
type AccountTab = 'deposit' | 'withdraw' | 'point' | 'notice' | 'event';
type MyPageTab = 'profile' | 'letter' | 'qna' | 'history';
type LoginTab = 'login' | 'register' | 'consult';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<GameCategory>('casino');
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [activeAccountTab, setActiveAccountTab] = useState<AccountTab>('deposit');
  const [isMyPageModalOpen, setIsMyPageModalOpen] = useState(false);
  const [activeMyPageTab, setActiveMyPageTab] = useState<MyPageTab>('profile');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeLoginTab, setActiveLoginTab] = useState<LoginTab>('login');

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
    } else if (modalId === 'login') {
      
      setActiveLoginTab('login');
      setIsLoginModalOpen(true);
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

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginTabChange = (tab: LoginTab) => {
    setActiveLoginTab(tab);
  };

  return (
    <>
      <Header onModalOpen={handleModalOpen} />
      
      {/* Jackpot section */}
      <Jackpot />
      
      {/* Game type tab section */}
      <section className="pb-8 bg-[#0f1012]">
          <GameTabButtons 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        <div className="sm:px-4 md:px-10 lg:px-15 mx-auto">
          

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

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        activeTab={activeLoginTab}
        onClose={handleLoginModalClose}
        onTabChange={handleLoginTabChange}
      />
    </>
  );
}
