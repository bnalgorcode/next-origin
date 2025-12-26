'use client';

import { useEffect } from 'react';
import DepositContent from './deposit-content';
import WithdrawContent from './withdraw-content';
import PointContent from './point-content';
import NoticeContent from './notice-content';
import EventContent from './event-content';

type TabType = 'deposit' | 'withdraw' | 'point' | 'notice' | 'event';

interface AccountModalProps {
  isOpen: boolean;
  activeTab: TabType;
  onClose: () => void;
  onTabChange: (tab: TabType) => void;
}

export default function AccountModal({ isOpen, activeTab, onClose, onTabChange }: AccountModalProps) {
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

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'deposit', label: 'Deposit', icon: 'fa-rocket' },
    { id: 'withdraw', label: 'Withdraw', icon: 'fa-money-bill-wave' },
    { id: 'point', label: 'Point', icon: 'fa-coins' },
    { id: 'notice', label: 'Notice', icon: 'fa-bullhorn' },
    { id: 'event', label: 'Event', icon: 'fa-gift' },
  ];

  const getTitle = (): string => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    return currentTab?.label || 'Deposit';
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'deposit':
        return <DepositContent />;
      case 'withdraw':
        return <WithdrawContent />;
      case 'point':
        return <PointContent />;
      case 'notice':
        return <NoticeContent />;
      case 'event':
        return <EventContent />;
      default:
        return <DepositContent />;
    }
  };

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
        className={`relative rounded-xl shadow-2xl w-full mx-2 md:mx-10 max-w-7xl overflow-hidden border border-[#993336] ${
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
        {/* Close Button */}
        <div className="flex justify-end p-2 md:p-4">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <i className="fa fa-times text-2xl md:text-3xl"></i>
          </button>
        </div>

        {/* Title */}
        <div className="text-center px-4 pb-2">
          <h2 className="text-2xl md:text-3xl font-medium text-white">
            {getTitle()}
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-4">
          <div className="flex justify-center gap-1 flex-wrap p-4 md:gap-8">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`group relative w-[65px] md:w-[80px] aspect-square rounded-full flex flex-col items-center justify-center transition-all duration-300 border border-[#9c3535] ${
                    isActive
                      ? 'text-white'
                      : 'text-[#ff9494]'
                  }`}
                  style={{
                    ...(isActive ? {
                      backgroundImage: 'linear-gradient(rgba(242, 92, 92, 0.5), rgba(37, 12, 12, 0.3), rgba(27, 7, 7, 0.1), rgba(27, 7, 7, 0.1))'
                    } : {})
                  }}
                >
                  <div 
                    className="absolute inset-[3px] rounded-full -z-10 transition-all duration-300"
                    style={{
                      borderTop: '1px solid #ff9494',
                      backgroundImage: isActive 
                        ? 'linear-gradient(rgba(242, 92, 92, 0.5), rgba(37, 12, 12, 0.3), rgba(27, 7, 7, 0.1), rgba(27, 7, 7, 0.1))'
                        : 'linear-gradient(rgba(242, 92, 92, 0.5), rgba(189, 75, 75, 0.3), rgba(89, 24, 24, 0.1), rgba(60, 17, 17, 0.2), rgba(183, 80, 80, 0.3))'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundImage = 'linear-gradient(rgba(242, 92, 92, 0.5), rgba(37, 12, 12, 0.3), rgba(27, 7, 7, 0.1), rgba(27, 7, 7, 0.1))';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundImage = 'linear-gradient(rgba(242, 92, 92, 0.5), rgba(189, 75, 75, 0.3), rgba(89, 24, 24, 0.1), rgba(60, 17, 17, 0.2), rgba(183, 80, 80, 0.3))';
                      }
                    }}
                  />
                  <i className={`fa ${tab.icon} text-[0.75rem] md:text-[1.25rem] mb-1`}></i>
                  <span className="text-[0.75rem] leading-none">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-2 md:p-4 lg:p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

