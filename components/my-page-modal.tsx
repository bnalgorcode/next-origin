'use client';

import { useEffect } from 'react';
import ProfileContent from './profile-content';
import LetterContent from './letter-content';
import QNAContent from './qna-content';
import HistoryContent from './history-content';

type TabType = 'profile' | 'letter' | 'qna' | 'history';

interface MyPageModalProps {
  isOpen: boolean;
  activeTab: TabType;
  onClose: () => void;
  onTabChange: (tab: TabType) => void;
}

export default function MyPageModal({ isOpen, activeTab, onClose, onTabChange }: MyPageModalProps) {
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

  const tabs: { id: TabType; label: string }[] = [
    { id: 'profile', label: 'My profile' },
    { id: 'letter', label: 'Letter' },
    { id: 'qna', label: 'QNA' },
    { id: 'history', label: 'History' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileContent />;
      case 'letter':
        return <LetterContent />;
      case 'qna':
        return <QNAContent />;
      case 'history':
        return <HistoryContent />;
      default:
        return <ProfileContent />;
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
        className={`relative rounded-xl shadow-2xl w-full mx-2 md:mx-4 max-w-6xl overflow-hidden border border-gray-700 ${
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

        {/* Tabs - Desktop Only */}
        <div className="hidden md:block">
          <div className="flex flex-wrap bg-black/40 font-[700]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex-1 py-4 px-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-[#c233ea] border-b-2 border-[#c233ea]'
                    : 'hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
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

