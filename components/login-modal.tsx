'use client';

import Image from 'next/image';

type TabType = 'login' | 'register' | 'consult';

interface LoginModalProps {
  isOpen: boolean;
  activeTab: TabType;
  onClose: () => void;
  onTabChange: (tab: TabType) => void;
}

export default function LoginModal({ isOpen, activeTab, onClose, onTabChange }: LoginModalProps) {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'login', label: 'LOGIN' },
    { id: 'register', label: 'REGISTER' },
    { id: 'consult', label: 'CONSULT' },
  ];

  const tabIndex = tabs.findIndex(tab => tab.id === activeTab);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto ${isOpen ? 'opacity-100 visible' : 'opacity-30 invisible'}`}

      style={{
        backgroundImage: 'url(/images/bg/footer_bg.jpg)',
        backgroundSize: 'cover',
        backgroundColor: '#0e1214',
        minHeight: '100vh',
      }}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className={`relative rounded-lg shadow-2xl w-full max-w-xl border border-white/20 my-8`}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          transition: 'opacity 0.6s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo Header */}
        <div className="p-6 border-b border-white/20 flex justify-center">
          <Image 
            src="/images/main/logo.png"
            alt="Logo" 
            width={300}
            height={100}
            className="w-1/2 max-w-[300px] h-auto"
            priority
          />
        </div>

        {/* Tabs */}
        <div className="p-6 pt-6 pb-0 text-gray-300">
          <div className="flex mb-6 relative font-bold">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex-1 py-2 text-center transition-colors ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-gray-400 hover:text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
            {/* Tab Indicator */}
            <div 
              className="absolute h-0.5 bg-primary transition-all duration-300 -bottom-px"
              style={{
                width: '33.333%',
                left: `${tabIndex * 33.333}%`,
              }}
            />
          </div>

          {/* Login Content */}
          {activeTab === 'login' && (
            <div className="space-y-4 mb-6">
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">UserID</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white" 
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Password</label>
                <input 
                  type="password" 
                  className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                onClick={onClose}
              >
                LOGIN
              </button>
            </div>
          )}

          {/* Register Content */}
          {activeTab === 'register' && (
            <div className="space-y-4 mb-6">
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">UserID</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary flex-1 text-white" 
                  />
                  <button className="bg-primary text-white w-[80px] p-2 rounded-md hover:bg-primary/90">
                    Check
                  </button>
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Nickname</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary flex-1 text-white" 
                  />
                  <button className="bg-primary text-white w-[80px] p-2 rounded-md hover:bg-primary/90">
                    Check
                  </button>
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Password</label>
                <input 
                  type="password" 
                  className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white" 
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Password2</label>
                <input 
                  type="password" 
                  className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white" 
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Saving Bank</label>
                <div className="flex gap-2">
                  <select className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-[100px] text-white">
                    <option>SB</option>
                    <option selected>CK</option>
                    <option>CN</option>
                  </select>
                  <input 
                    type="text" 
                    className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary flex-1 text-white" 
                  />
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Holder Name</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white" 
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Phone</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary flex-1 text-white" 
                  />
                  <button type="button" className="bg-primary text-white w-[100px] p-2 rounded-md hover:bg-primary/90">
                    SendSMS
                  </button>
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Birthday</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white"
                    style={{
                      colorScheme: 'dark',
                    }}
                  />
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Security Pwd</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white" 
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Referral</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white" 
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">Favourite items</label>
                <div className="mt-2 h-[40px] flex items-center gap-10">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="h-5 w-5 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-300">Casino</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="h-5 w-5 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-300">Slot</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="h-5 w-5 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-300">Mini</span>
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 mb-2">USDT Address</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg transition-colors mt-4"
              >
                REGISTER
              </button>
            </div>
          )}

          {/* Consult Content */}
          {activeTab === 'consult' && (
            <div className="space-y-4 mb-6">
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Title</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white" 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white" 
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Content</label>
                <textarea 
                  className="px-4 py-2 bg-black border border-primary/50 rounded-md focus:outline-none focus:border-primary w-full text-white min-h-[120px]" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                SUBMIT
              </button>
            </div>
          )}
        </div>

       
      </div>
    </div>
  );
}

