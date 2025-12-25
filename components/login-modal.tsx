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
        className={`relative bg-gray-800 rounded-xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-700 text-sm origin-top ${
          isOpen 
            ? 'opacity-100 max-h-[95vh]' 
            : 'opacity-0 max-h-0'
        }`}
        style={{
          transition: 'max-height 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s ease, transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
          transform: isOpen ? 'perspective(1000px) rotateX(0) scale(1)' : 'perspective(1000px) rotateX(-10deg) scale(0.95)',
          transformOrigin: 'top center',
          backgroundImage: 'url(/images/bg/modal-bg2.png)',
          backgroundSize: '100% auto',
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'center top',
        }}
      >
        {/* Header */}
        <div className="flex justify-end p-4 border-b border-gray-700">
          <div className="flex flex-col items-center justify-center">
            <Image 
              src="/images/main/logo2.png" 
              alt="Logo" 
              width={180}
              height={90}
              className="mx-auto w-[40%]"
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
        <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
          <div className="modal-tab-content">
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">UserID</label>
              <input 
                type="text" 
                className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] w-full"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Password</label>
              <input 
                type="password" 
                className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] w-full"
              />
            </div>
            <div className="mx-auto px-4 flex items-center justify-center gap-1 mt-4">
              <button 
                type="submit" 
                className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-6 py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d]"
              >
                Login
              </button>
              <button 
                type="button" 
                onClick={onSwitchToRegister}
                className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-6 py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d]"
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

