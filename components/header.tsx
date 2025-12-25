'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  onModalOpen?: (modalId: string, tab?: string) => void;
}

export default function Header({ onModalOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleModalClick = (modalId: string, tab?: string) => {
    if (onModalOpen) {
      onModalOpen(modalId, tab);
    }
  };

  return (
    <>
    <header className="z-50 shadow-md transition-all duration-300 bg-transparent pt-4 md:pt-[15px]">
      <div className="container mx-auto px-4">
        {/* Top info bar */}
        <div className="flex flex-wrap justify-end items-center gap-4 text-white font-medium text-[13px] lg:text-[19px] lg:font-bold gap-y-0">
          <Image 
            src="/images/level/lv10.png" 
            alt="Level" 
            width={24} 
            height={24}
            className="h-6 object-cover"
          />
          <span 
            onClick={() => handleModalClick('my-page', 'profile')}
            className="cursor-pointer"
          >
            aaabbb11
          </span>
          <span 
            onClick={() => handleModalClick('account-page', 'deposit')}
            className="cursor-pointer"
          >
            Balance<span className="text-[#33e1ea]"> $97,000</span> <i className="fa fa-refresh"></i>
          </span>
          <span 
            onClick={() => handleModalClick('account-page', 'point')}
            className="cursor-pointer"
          >
            Points<span className="text-[#33e1ea]"> 80,000</span>P
          </span>
          <span 
            onClick={() => handleModalClick('account-page', 'withdraw')}
            className="cursor-pointer"
          >
            Comps<span className="text-[#33e1ea]"> $100,000</span>
          </span>
        </div>

        {/* Main header content */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <a href="#" className="flex items-center">
              <Image 
                src="/images/main/logo2.png" 
                alt="ToTo Club Logo" 
                width={200}
                height={100}
                className="w-[40%] h-auto md:h-[100px] md:w-auto"
                priority
              />
            </a>
          </div>

          {/* PC menu */}
          <nav className="hidden md:flex">
            <button 
              onClick={() => handleModalClick('account-page', 'deposit')}
              className="text-xl font-black mx-4 transition-all duration-300 hover:text-[#b5f4fe]"
            >
              Deposit
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'withdraw')}
              className="text-xl font-black mx-4 transition-all duration-300 hover:text-[#b5f4fe]"
            >
              Withdraw
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'point')}
              className="text-xl font-black mx-4 transition-all duration-300 hover:text-[#b5f4fe]"
            >
              Point
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'notice')}
              className="text-xl font-black mx-4 transition-all duration-300 hover:text-[#b5f4fe]"
            >
              Notice
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'event')}
              className="text-xl font-black mx-4 transition-all duration-300 hover:text-[#b5f4fe]"
            >
              Event
            </button>
          </nav>

          {/* PC buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={() => handleModalClick('login', 'login')}
              className="border-2 border-[#33e1ea] px-6 py-3 rounded-sm font-black text-[#33e1ea] transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d] hover:text-white"
            >
              Login
            </button>
            <button 
              onClick={() => handleModalClick('register', 'register')}
              className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-6 py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d]"
            >
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <i className="fa fa-bars text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? '' : 'hidden'} border-gray-800`} style={{
          backgroundImage: 'url(/images/bg/modal-bg2.png)',
          backgroundSize: '100% auto',
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'center top'
        }}>
          <div className="flex space-x-3 pt-2 border-t border-gray-800">
            <button 
              onClick={() => handleModalClick('login', 'login')}
              className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-6 py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d]"
            >
              Login
            </button>
            <button 
              onClick={() => handleModalClick('register', 'register')}
              className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-6 py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d]"
            >
              Register
            </button>
            <button className="flex-1 border-2 border-[#33e1ea] px-6 py-3 rounded-sm font-black text-[#33e1ea] transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d] hover:text-white">
              Logout
            </button>
          </div>
          <div className="container mx-auto grid grid-cols-2 px-4 py-3 gap-3">
            <button 
              onClick={() => handleModalClick('my-page', 'profile')}
              className="w-full text-center py-5 px-2 bg-black/40"
            >
              My page
            </button>
            <button 
              onClick={() => handleModalClick('my-page', 'letter')}
              className="w-full text-center py-5 px-2 bg-black/40"
            >
              Letter
            </button>
            <button 
              onClick={() => handleModalClick('my-page', 'qna')}
              className="w-full text-center py-5 px-2 bg-black/40"
            >
              QNA
            </button>
            <button 
              onClick={() => handleModalClick('my-page', 'history')}
              className="w-full text-center py-5 px-2 bg-black/40"
            >
              History
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'deposit')}
              className="w-full text-center py-5 px-2 bg-black/40"
            >
              Deposit
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'withdraw')}
              className="w-full text-center py-5 px-2 bg-black/40"
            >
              Withdraw
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'point')}
              className="w-full text-center py-5 px-2 bg-black/40"
            >
              Point
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'notice')}
              className="w-full text-center py-5 px-2 bg-black/40"
            >
              Notice
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'event')}
              className="w-full text-center py-5 px-2 bg-black/40"
            >
              Event
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Banner pic */}
    <section className="w-full relative overflow-hidden">
      <Image 
        src="/images/main/banner2.png" 
        alt="Banner" 
        width={1920}
        height={400}
        className="w-full object-cover"
        priority
      />
    </section>
    </>
  );
}

