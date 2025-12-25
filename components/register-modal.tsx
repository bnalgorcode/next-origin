'use client';

import Image from 'next/image';
import { useEffect } from 'react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) {
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
        className={`relative bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden border border-gray-700 text-sm origin-top ${
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
          <div className="flex flex-col items-center justify-center w-full">
            <Image 
              src="/images/main/logo2.png" 
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
        <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
          <div className="modal-tab-content grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Left Column */}
            <div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">UserID</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] flex-1"
                  />
                  <button 
                    type="button" 
                    className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-4 py-2 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d] w-[80px]"
                  >
                    Check
                  </button>
                </div>
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Nickname</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] flex-1"
                  />
                  <button 
                    type="button" 
                    className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-4 py-2 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d] w-[80px]"
                  >
                    Check
                  </button>
                </div>
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Password</label>
                <input 
                  type="password" 
                  className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] w-full"
                />
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Password2</label>
                <input 
                  type="password" 
                  className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] w-full"
                />
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Saving Bank</label>
                <div className="flex gap-2">
                  <select className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] w-[100px]">
                    <option>SB</option>
                    <option selected>CK</option>
                    <option>CN</option>
                  </select>
                  <input 
                    type="text" 
                    className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] flex-1"
                  />
                </div>
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Holder Name</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] w-full"
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Phone</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] flex-1"
                  />
                  <button 
                    type="button" 
                    className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-4 py-2 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d] w-[100px]"
                  >
                    SendSMS
                  </button>
                </div>
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Birthday</label>
                <input 
                  type="date" 
                  className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] w-full"
                />
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Security Pwd</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] w-full"
                />
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Referral</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] w-full"
                />
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Favourite items</label>
                <div className="mt-2 h-[40px] flex items-center gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="h-5 w-5 text-[#33e1ea] bg-gray-700 border-gray-600 rounded focus:ring-[#33e1ea]"
                    />
                    <span className="ml-2 text-gray-300">Casino</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="h-5 w-5 text-[#33e1ea] bg-gray-700 border-gray-600 rounded focus:ring-[#33e1ea]"
                    />
                    <span className="ml-2 text-gray-300">Slot</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="h-5 w-5 text-[#33e1ea] bg-gray-700 border-gray-600 rounded focus:ring-[#33e1ea]"
                    />
                    <span className="ml-2 text-gray-300">Mini</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">USDT Address</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] w-full"
                />
              </div>
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="my-4">
            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="h-5 w-5 text-[#33e1ea] bg-gray-700 border-gray-600 rounded focus:ring-[#33e1ea]"
              />
              <span className="ml-2 text-gray-300">
                I have read the <a href="#" className="text-[#33e1ea] hover:underline">agreement</a>
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="mx-auto px-4 flex items-center justify-center gap-1 mt-4">
            <button 
              type="button" 
              onClick={onSwitchToLogin}
              className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-6 py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d]"
            >
              Login
            </button>
            <button 
              type="submit" 
              className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-6 py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d]"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

