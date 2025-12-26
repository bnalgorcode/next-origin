'use client';

import Image from 'next/image';
import { useState } from 'react';
import LoginModal from './login-modal';
import RegisterModal from './register-modal';

interface HeaderProps {
  onModalOpen?: (modalId: string, tab?: string) => void;
}

export default function Header({ onModalOpen }: HeaderProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleModalClick = (modalId: string, tab?: string) => {
    if (onModalOpen) {
      onModalOpen(modalId, tab);
    }
    
    // Handle login and register modals
    if (modalId === 'login') {
      setIsRegisterModalOpen(false);
      setIsLoginModalOpen(true);
    } else if (modalId === 'register') {
      setIsLoginModalOpen(false);
      setIsRegisterModalOpen(true);
    }
  };

  const closeAllModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const switchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const switchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
    <header className="z-50 shadow-md transition-all duration-300 bg-black py-0 md:py-3 border-t border-[#ff9494]" style={{ borderTopWidth: '1px' }}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-wrap">
          {/* Logo */}
          <div className="flex items-center w-full md:w-auto border-b border-gray-800 md:border-0 md:justify-start justify-center">
            <a href="#" className="flex items-center py-2 md:py-0 mx-auto md:mx-0">
              <Image 
                src="/images/main/logo.png"
                alt="ToTo Club Logo" 
                width={200}
                height={70}
                className="w-[40%] h-auto md:w-auto md:h-[70px] mx-auto md:mx-0"
                priority
              />
            </a>
          </div>

          {/* PC menu */}
          <nav className="flex relative w-full md:w-auto justify-center text-[10px] md:text-[1.2em]">
            <button 
              onClick={() => handleModalClick('account-page', 'deposit')}
              className="font-medium text-white m-1 md:m-4 transition-all duration-300 flex items-center justify-center gap-[5px] relative group flex-1 md:flex-none"
            >
              <i className="fa fa-rocket text-blue-300 text-xl md:text-base block w-full md:w-auto"></i>
              <span className="hidden md:inline">DEPOSIT</span>
              <span className="absolute left-1/2 -translate-x-1/2 h-full border border-[#fde2e2] border-t-0 border-b-0 rounded-[50px] opacity-0 group-hover:opacity-100 transition-all duration-500 w-full group-hover:w-[130%] hidden md:block z-0"></span>
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'withdraw')}
              className="font-medium text-white m-1 md:m-4 transition-all duration-300 flex items-center justify-center gap-[5px] relative group flex-1 md:flex-none"
            >
              <i className="fa fa-money-bill-wave text-yellow-300 text-xl md:text-base block w-full md:w-auto"></i>
              <span className="hidden md:inline">WITHDRAW</span>
              <span className="absolute left-1/2 -translate-x-1/2 h-full border border-[#fde2e2] border-t-0 border-b-0 rounded-[50px] opacity-0 group-hover:opacity-100 transition-all duration-500 w-full group-hover:w-[130%] hidden md:block z-0"></span>
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'point')}
              className="font-medium text-white m-1 md:m-4 transition-all duration-300 flex items-center justify-center gap-[5px] relative group flex-1 md:flex-none"
            >
              <i className="fa fa-coins text-purple-500 text-xl md:text-base block w-full md:w-auto"></i>
              <span className="hidden md:inline">POINT</span>
              <span className="absolute left-1/2 -translate-x-1/2 h-full border border-[#fde2e2] border-t-0 border-b-0 rounded-[50px] opacity-0 group-hover:opacity-100 transition-all duration-500 w-full group-hover:w-[130%] hidden md:block z-0"></span>
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'notice')}
              className="font-medium text-white m-1 md:m-4 transition-all duration-300 flex items-center justify-center gap-[5px] relative group flex-1 md:flex-none"
            >
              <i className="fa fa-bullhorn text-red-400 text-xl md:text-base block w-full md:w-auto"></i>
              <span className="hidden md:inline">NOTICE</span>
              <span className="absolute left-1/2 -translate-x-1/2 h-full border border-[#fde2e2] border-t-0 border-b-0 rounded-[50px] opacity-0 group-hover:opacity-100 transition-all duration-500 w-full group-hover:w-[130%] hidden md:block z-0"></span>
            </button>
            <button 
              onClick={() => handleModalClick('account-page', 'event')}
              className="font-medium text-white m-1 md:m-4 transition-all duration-300 flex items-center justify-center gap-[5px] relative group flex-1 md:flex-none"
            >
              <i className="fa fa-gift text-green-400 text-xl md:text-base block w-full md:w-auto"></i>
              <span className="hidden md:inline">EVENT</span>
              <span className="absolute left-1/2 -translate-x-1/2 h-full border border-[#fde2e2] border-t-0 border-b-0 rounded-[50px] opacity-0 group-hover:opacity-100 transition-all duration-500 w-full group-hover:w-[130%] hidden md:block z-0"></span>
            </button>
          </nav>

          {/* Top info - Desktop only */}
          <div className="hidden lg:block text-white font-medium text-[14px]">
            <div 
              className="w-full flex items-center justify-between gap-2 bg-gray-800 p-1 rounded-[3px] border-t border-[#065254]"
              style={{
                background: 'linear-gradient(rgba(61, 89, 137, 0.3), rgba(61, 89, 137, 0.2), rgba(9, 43, 68, 0), rgba(9, 43, 68, 0))'
              }}
            >
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
                onClick={() => handleModalClick('account-page', 'point')}
                className="cursor-pointer"
              >
                Points<span className="text-[#ea3333]"> 80,000</span>P
              </span>
              <span 
                onClick={() => handleModalClick('account-page', 'withdraw')}
                className="cursor-pointer"
              >
                Comps<span className="text-[#ea3333]"> $100,000</span>
              </span>
            </div>
            <div 
              className="w-full flex items-center justify-between gap-2 bg-gray-800 p-1 rounded-[3px] border-t border-[#065254]"
              style={{
                background: 'linear-gradient(rgba(61, 89, 137, 0.3), rgba(61, 89, 137, 0.2), rgba(9, 43, 68, 0), rgba(9, 43, 68, 0))'
              }}
            >
              <span 
                onClick={() => handleModalClick('account-page', 'deposit')}
                className="cursor-pointer"
              >
                Balance<span className="text-[#ea3333]"> $97,000</span> <i className="fa fa-refresh"></i>
              </span>
              <div className="flex items-center gap-2 justify-end">
                <span 
                  onClick={() => handleModalClick('my-page', 'letter')}
                  className="bg-red-500 px-2 rounded-md cursor-pointer"
                >
                  Letter
                </span>
                <span 
                  onClick={() => window.location.href = '/login'}
                  className="bg-red-500 px-2 rounded-md cursor-pointer"
                >
                  Logout
                </span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden relative group" style={{ marginTop: '-70px', paddingTop: '70px' }}>
            <button 
              type="button" 
              className="text-gray-100 hover:text-white focus:outline-none absolute top-[10px] right-[20px] z-10"
            >
              <i className="fa fa-bars text-2xl"></i>
            </button>
            {/* Mobile menu */}
            <div 
              className="absolute top-[55px] right-0 w-[250px] border border-[#5f1c1c] rounded-[5px] transition-all duration-300 opacity-0 invisible translate-y-[10px] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
              style={{
                backgroundImage: 'url(/images/bg/modal-bg.png)',
                backgroundSize: '100% auto',
                backgroundRepeat: 'repeat-y',
                backgroundPosition: 'center top',
                zIndex: 50
              }}
            >
              <div className="container mx-auto grid px-1 py-3 gap-3">
                <ul className="space-y-2">
                  <li 
                    onClick={() => handleModalClick('my-page', 'profile')}
                    className="px-1 py-2 border-t border-gray-300 rounded-md flex gap-2 cursor-pointer"
                  >
                    aaabbb11
                    <Image 
                      src="/images/level/lv10.png" 
                      alt="Level" 
                      width={24} 
                      height={24}
                      className="h-6"
                    />
                  </li>
                  <li 
                    onClick={() => handleModalClick('account-page', 'point')}
                    className="px-1 py-2 border-t border-gray-300 rounded-md cursor-pointer"
                  >
                    Points<span className="text-[#ea3333]"> 80,000</span>P
                  </li>
                  <li 
                    onClick={() => handleModalClick('account-page', 'withdraw')}
                    className="px-1 py-2 border-t border-gray-300 rounded-md cursor-pointer"
                  >
                    Comps<span className="text-[#ea3333]"> $100,000</span>
                  </li>
                  <li 
                    onClick={() => handleModalClick('account-page', 'deposit')}
                    className="px-1 py-2 border-t border-gray-300 rounded-md cursor-pointer"
                  >
                    Balance<span className="text-[#ea3333]"> $97,000</span> <i className="fa fa-refresh"></i>
                  </li>
                  <li 
                    onClick={() => handleModalClick('my-page', 'letter')}
                    className="px-1 py-2 border-t border-gray-300 rounded-md bg-blue-500/20 text-center cursor-pointer"
                  >
                    <i className="fa fa-envelope mr-2"></i>LETTER
                  </li>
                  <li 
                    onClick={() => window.location.href = '/login'}
                    className="px-1 py-2 border-t border-gray-300 rounded-md bg-red-500/20 text-center cursor-pointer"
                  >
                    <i className="fa fa-right-from-bracket mr-2"></i>LOGOUT
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Banner pic */}
    <section className="w-full relative overflow-hidden">
      {/* <Image 
        src="/images/main/banner1.png" 
        alt="Banner" 
        width={1920}
        height={400}
        className="w-full object-cover"
        priority
      /> */}
    </section>

    {/* Modals */}
    <LoginModal 
      isOpen={isLoginModalOpen}
      onClose={closeAllModals}
      onSwitchToRegister={switchToRegister}
    />
    <RegisterModal 
      isOpen={isRegisterModalOpen}
      onClose={closeAllModals}
      onSwitchToLogin={switchToLogin}
    />
    </>
  );
}

