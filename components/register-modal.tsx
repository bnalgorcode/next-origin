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
        className={`relative rounded-xl shadow-2xl w-full mx-2 md:mx-4 max-w-4xl overflow-hidden border border-gray-700 text-sm origin-top ${
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
          <div className="flex flex-col items-center justify-center w-full">
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
        <div className="p-3 md:p-4 lg:p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
          <div className="modal-tab-content grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Left Column */}
            <div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">UserID</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="text" 
                    className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] flex-1 text-sm md:text-base"
                  />
                  <button 
                    type="button" 
                    className="bg-gradient-to-b from-[#c233ea] via-[#710bad] to-[#47046d] px-3 md:px-4 py-2 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#c233ea] hover:via-[#710bad] hover:to-[#47046d] w-full sm:w-[80px] text-sm md:text-base"
                  >
                    Check
                  </button>
                </div>
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Nickname</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="text" 
                    className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] flex-1 text-sm md:text-base"
                  />
                  <button 
                    type="button" 
                    className="bg-gradient-to-b from-[#c233ea] via-[#710bad] to-[#47046d] px-3 md:px-4 py-2 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#c233ea] hover:via-[#710bad] hover:to-[#47046d] w-full sm:w-[80px] text-sm md:text-base"
                  >
                    Check
                  </button>
                </div>
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Password</label>
                <input 
                  type="password" 
                  className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] w-full text-sm md:text-base"
                />
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Password2</label>
                <input 
                  type="password" 
                  className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] w-full text-sm md:text-base"
                />
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Saving Bank</label>
                <div className="flex flex-col sm:flex-row gap-2">
                <select defaultValue="CK" className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] w-full sm:w-[100px] text-sm md:text-base">
                    <option value="SB">SB</option>
                    <option value="CK">CK</option>
                    <option value="CN">CN</option>
                  </select>
                  <input 
                    type="text" 
                    className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] flex-1 text-sm md:text-base"
                  />
                </div>
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Holder Name</label>
                <input 
                  type="text" 
                  className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] w-full text-sm md:text-base"
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Phone</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="text" 
                    className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] flex-1 text-sm md:text-base"
                  />
                  <button 
                    type="button" 
                    className="bg-gradient-to-b from-[#c233ea] via-[#710bad] to-[#47046d] px-3 md:px-4 py-2 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#c233ea] hover:via-[#710bad] hover:to-[#47046d] w-full sm:w-[100px] text-sm md:text-base"
                  >
                    SendSMS
                  </button>
                </div>
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Birthday</label>
                <input 
                  type="date" 
                  className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] w-full text-sm md:text-base"
                />
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Security Pwd</label>
                <input 
                  type="text" 
                  className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] w-full text-sm md:text-base"
                />
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Referral</label>
                <input 
                  type="text" 
                  className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] w-full text-sm md:text-base"
                />
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">Favourite items</label>
                <div className="mt-2 min-h-[40px] flex flex-wrap items-center gap-4 md:gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 md:h-5 md:w-5 text-[#c233ea] bg-gray-700 border-gray-600 rounded focus:ring-[#c233ea]"
                    />
                    <span className="ml-2 text-gray-300 text-sm md:text-base">Casino</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 md:h-5 md:w-5 text-[#c233ea] bg-gray-700 border-gray-600 rounded focus:ring-[#c233ea]"
                    />
                    <span className="ml-2 text-gray-300 text-sm md:text-base">Slot</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 md:h-5 md:w-5 text-[#c233ea] bg-gray-700 border-gray-600 rounded focus:ring-[#c233ea]"
                    />
                    <span className="ml-2 text-gray-300 text-sm md:text-base">Mini</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-2">
                <label className="block text-gray-300 mb-2 text-sm md:text-base">USDT Address</label>
                <input 
                  type="text" 
                  className="px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] w-full text-sm md:text-base"
                />
              </div>
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="my-4">
            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="h-5 w-5 text-[#c233ea] bg-gray-700 border-gray-600 rounded focus:ring-[#c233ea]"
              />
              <span className="ml-2 text-gray-300">
                I have read the <a href="#" className="text-[#c233ea] hover:underline">agreement</a>
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="mx-auto px-2 md:px-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 mt-4">
            <button 
              type="button" 
              onClick={onSwitchToLogin}
              className="bg-gradient-to-b from-[#c233ea] via-[#710bad] to-[#47046d] px-4 md:px-6 py-2 md:py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#c233ea] hover:via-[#710bad] hover:to-[#47046d] text-sm md:text-base flex-1 sm:flex-none"
            >
              Login
            </button>
            <button 
              type="submit" 
              className="bg-gradient-to-b from-[#c233ea] via-[#710bad] to-[#47046d] px-4 md:px-6 py-2 md:py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#c233ea] hover:via-[#710bad] hover:to-[#47046d] text-sm md:text-base flex-1 sm:flex-none"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

