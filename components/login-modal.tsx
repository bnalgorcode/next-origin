'use client';

import Image from 'next/image';
import { useEffect } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{
        transition: 'opacity 0.5s ease, visibility 0.5s ease',
      }}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className={`relative rounded-xl shadow-2xl w-full mx-2 md:mx-4 max-w-md overflow-hidden border border-gray-700 text-sm origin-top ${
          isOpen 
            ? 'opacity-100 max-h-[95vh]' 
            : 'opacity-0 max-h-0'
        }`}
        style={{
          backgroundColor: 'rgb(8, 8, 8)',
          transition: 'max-height 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s ease, transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
          transform: isOpen ? 'perspective(1000px) rotateX(0) scale(1)' : 'perspective(1000px) rotateX(-10deg) scale(0.95)',
          transformOrigin: 'top center',
          backgroundImage: 'url(/images/bg/modal-bg.png)',
          backgroundSize: '100% auto',
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'center top',
        }}
      >
        {/* Header */}
        <div className="flex justify-end p-3 md:p-4 border-b border-gray-700">
          <div className="flex flex-col items-center justify-center flex-1">
            <Image 
              src="/images/main/logo.png" 
              alt="Logo" 
              width={180}
              height={90}
              className="mx-auto w-[40%] max-w-[180px]"
            />
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <i className="fa fa-times text-xl"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
          <div className="modal-tab-content">
            <div className="mb-4">
              <label className="block text-gray-300 mb-2 text-sm md:text-base">UserID</label>
              <input 
                type="text" 
                className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] w-full text-sm md:text-base"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 text-sm md:text-base">Password</label>
              <input 
                type="password" 
                className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] w-full text-sm md:text-base"
              />
            </div>
            <div className="mx-auto px-2 md:px-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 mt-4">
              <button 
                type="submit" 
                className="bg-gradient-to-b from-[#c233ea] via-[#710bad] to-[#47046d] px-4 md:px-6 py-2 md:py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#c233ea] hover:via-[#710bad] hover:to-[#47046d] text-sm md:text-base flex-1 sm:flex-none"
              >
                Login
              </button>
              <button 
                type="button" 
                onClick={onSwitchToRegister}
                className="bg-gradient-to-b from-[#c233ea] via-[#710bad] to-[#47046d] px-4 md:px-6 py-2 md:py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#c233ea] hover:via-[#710bad] hover:to-[#47046d] text-sm md:text-base flex-1 sm:flex-none"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

