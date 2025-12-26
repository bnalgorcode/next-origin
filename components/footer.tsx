'use client';

import Image from 'next/image'; 
interface FooterProps {
  onModalOpen?: (modalId: string, tab?: string) => void;
}

export default function Footer({ onModalOpen }: FooterProps) {
  const handleModalClick = (modalId: string, tab?: string) => {
    if (onModalOpen) {
      onModalOpen(modalId, tab);
    }
  };

  const realtimeItems = [
    { name: 'Kex***t', status: 'Deposit', amount: '800,000', time: '08:45:22', statusClass: 'bg-green-900/30 text-green-400' },
    { name: 'Pt***m', status: 'Withdraw', amount: '100,000,000', time: '08:45:50', statusClass: 'bg-red-700/30 text-red-300' },
    { name: 'MN***m', status: 'Withdraw', amount: '77,000,000', time: '08:45:52', statusClass: 'bg-red-700/30 text-red-300' },
    { name: 'EE***r', status: 'Deposit', amount: '100,000', time: '08:52:35', statusClass: 'bg-green-900/30 text-green-400' },
    { name: 'by***a', status: 'Deposit', amount: '888,000', time: '08:55:37', statusClass: 'bg-green-900/30 text-green-400' },
    { name: 'Zx***x', status: 'Deposit', amount: '756,000', time: '08:58:17', statusClass: 'bg-green-900/30 text-green-400' },
    { name: 'Xx***m', status: 'Withdraw', amount: '3,000,000', time: '09:20:51', statusClass: 'bg-red-700/30 text-red-300' },
  ];

  // Duplicate items for infinite scroll effect
  const duplicatedRealtimeItems = [...realtimeItems, ...realtimeItems];

  return (
    <>
      <section className="py-12">
        <div className="sm:px-14 md:px-22 lg:px-29 mx-auto px-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Notice section */}
            <div className="relative shadow-sm rounded-b-lg opacity-90" style={{
              background: '#0a0a0a',
              border : "3px solid transparent",
              borderImage: "linear-gradient(to bottom, #333333, #33150a) 1",
              borderRadius: "0 0 15px 15px",
            }}> 
              <div className="p-8 bg-black/80 rounded-b-[5px]">
                <h2 className="text-2xl font-bold mb-7 text-center text-white">
                  <i className="fa fa-bullhorn text-[#e82525] mr-2"></i>Notice
                </h2>
                <div className="space-y-0">
                  <div 
                    onClick={() => handleModalClick('notice-page', 'notice')}
                    className="flex justify-between items-center pt-2 pb-2 last:border-b-0 cursor-pointer"
                  >
                    <a 
                      href="#" 
                      className="text-[#d1d5db] max-w-[70%] truncate transition-colors duration-150 hover:text-[#fc7474fc] text-[1rem]"
                    >
                      New Match:Barceiona Vs Real Madridna Vs Real Madrid
                    </a>
                    <span className="text-[#6b7280] whitespace-nowrap text-[0.875rem]">
                      2025-7-31
                    </span>
                  </div>
                  <div 
                    onClick={() => handleModalClick('notice-page', 'notice')}
                    className="flex justify-between items-center pt-2 pb-2 border-b border-gray-600/50 last:border-b-0 cursor-pointer text-[0.85rem]"
                  >
                    <a 
                      href="#" 
                      className="text-[#d1d5db] max-w-[70%] truncate transition-colors duration-150 hover:text-[#fc7474fc] text-[0.9rem]"
                    >
                      Laker vs Celtics Just Added!
                    </a>
                    <span className="text-[#6b7280] whitespace-nowrap text-[0.875rem]">
                      2025-8-15
                    </span>
                  </div>
                  <div 
                    onClick={() => handleModalClick('notice-page', 'notice')}
                    className="flex justify-between items-center pt-2 pb-2 border-b border-gray-600/50 last:border-b-0 cursor-pointer text-[0.85rem]"
                  >
                    <a 
                      href="#" 
                      className="text-[#d1d5db] max-w-[70%] truncate transition-colors duration-150 hover:text-[#fc7474fc] text-[1rem]"
                    >
                      🏏 India vs Pakistan: High-Stakes Clash!
                    </a>
                    <span className="text-[#6b7280] whitespace-nowrap text-[0.875rem]">
                      2025-8-20
                    </span>
                  </div>
                  <div 
                    onClick={() => handleModalClick('notice-page', 'notice')}
                    className="flex justify-between items-center pt-2 pb-2 border-b border-gray-600/50 last:border-b-0 cursor-pointer text-[0.85rem]"
                  >
                    <a 
                      href="#" 
                      className="text-[#d1d5db] max-w-[70%] truncate transition-colors duration-150 hover:text-[#fc7474fc] text-[1rem]"
                    >
                      New Match:Barceiona Vs Real Madridna Vs Real Madrid
                    </a>
                    <span className="text-[#6b7280] whitespace-nowrap text-[0.875rem]">
                      2025-8-21
                    </span>
                  </div>
                  <div 
                    onClick={() => handleModalClick('notice-page', 'notice')}
                    className="flex justify-between items-center pt-2 pb-2 border-b border-gray-600/50 last:border-b-0 cursor-pointer text-[0.85rem]"
                  >
                    <a 
                      href="#" 
                      className="text-[#d1d5db] max-w-[70%] truncate transition-colors duration-150 hover:text-[#fc7474fc] text-[1rem]"
                    >
                      Laker vs Celtics Just Added!
                    </a>
                    <span className="text-[#6b7280] whitespace-nowrap text-[0.875rem]">
                      2025-8-23
                    </span>
                  </div>
                </div>
                <a 
                  href="#" 
                  onClick={() => handleModalClick('account-page', 'notice')}
                  className="text-[#ea3333] flex items-center justify-end mt-4 hover:underline"
                >
                  MORE <i className="fa fa-angle-right ml-1"></i>
                </a>
              </div>
            </div>

            {/* Event section */}
            <div className="relative shadow-sm rounded-b-lg opacity-90" style={{
              background: '#0a0a0a',
              border : "3px solid #3b3737",
            }}>
              <div className="p-8 bg-black/80 rounded-b-[5px]">
                <h2 className="text-2xl font-bold mb-7 text-center text-white">
                  <i className="fa fa-gift text-[#ea3333] mr-2"></i>Event
                </h2>
                <div className="space-y-0">
                  <div 
                    onClick={() => handleModalClick('event-page', 'event')}
                    className="flex justify-between items-center pt-2 pb-2  border- last:border-b-0 cursor-pointer text-[1rem]"
                  >
                    <a 
                      href="#" 
                      className="text-[#d1d5db] max-w-[70%] truncate transition-colors duration-150 hover:text-[#fc7474fc] text-[1rem]"
                    >
                      Laker vs Celtics Just Added!
                    </a>
                    <span className="text-[#6b7280] whitespace-nowrap text-[0.875rem]">
                      2025-8-15
                    </span>
                  </div>
                  <div 
                    onClick={() => handleModalClick('event-page', 'event')}
                    className="flex justify-between items-center pt-2 pb-2 last:border-b-0 cursor-pointer text-[0.85rem]"
                  >
                    <a 
                      href="#" 
                      className="text-[#d1d5db] max-w-[70%] truncate transition-colors duration-150 hover:text-[#fc7474fc] text-[0.9rem]"
                    >
                      🏏 India vs Pakistan: High-Stakes Clash!
                    </a>
                    <span className="text-[#6b7280] whitespace-nowrap text-[0.875rem]">
                      2025-8-20
                    </span>
                  </div>
                  <div 
                    onClick={() => handleModalClick('event-page', 'event')}
                    className="flex justify-between items-center pt-2 pb-2 border-b border-gray-600/50 last:border-b-0 cursor-pointer text-[0.85rem]"
                  >
                    <a 
                      href="#" 
                      className="text-[#d1d5db] max-w-[70%] truncate transition-colors duration-150 hover:text-[#fc7474fc] text-[1rem]"
                    >
                      New Match:Barceiona Vs Real Madridna Vs Real Madrid
                    </a>
                    <span className="text-[#6b7280] whitespace-nowrap text-[0.875rem]">
                      2025-8-21
                    </span>
                  </div>
                  <div 
                    onClick={() => handleModalClick('event-page', 'event')}
                    className="flex justify-between items-center pt-2 pb-2 border-b border-gray-600/50 last:border-b-0 cursor-pointer text-[0.85rem]"
                  >
                    <a 
                      href="#" 
                      className="text-[#d1d5db] max-w-[70%] truncate transition-colors duration-150 hover:text-[#fc7474fc] text-[1rem]"
                    >
                      Laker vs Celtics Just Added!
                    </a>
                    <span className="text-[#6b7280] whitespace-nowrap text-[0.875rem]">
                      2025-8-23
                    </span>
                  </div>
                  <div 
                    onClick={() => handleModalClick('event-page', 'event')}
                    className="flex justify-between items-center pt-2 pb-2 border-b border-gray-600/50 last:border-b-0 cursor-pointer text-[0.9rem]"
                  >
                    <a 
                      href="#" 
                      className="text-[#d1d5db] max-w-[70%] truncate transition-colors duration-150 hover:text-[#fc7474fc] text-[1rem]"
                    >
                      New Match:Barceiona Vs Real Madridna Vs Real Madrid
                    </a>
                    <span className="text-[#6b7280] whitespace-nowrap text-[0.875rem]">
                      2025-9-21
                    </span>
                  </div>
                </div>
                <a 
                  href="#" 
                  onClick={() => handleModalClick('account-page', 'event')}
                  className="text-[#ea3333] flex items-center justify-end mt-4 hover:underline"
                >
                  MORE <i className="fa fa-angle-right ml-1"></i>
                </a>
              </div>
            </div>

            {/* Real-time section */}
            <div className="relative shadow-sm rounded-b-lg opacity-90" style={{
              background: '#0a0a0a',
              border : "3px solid #3b3737",
            }}>
              <div className="p-8 bg-black/80 rounded-b-[5px]">
                <h2 className="text-2xl font-bold mb-4 text-center text-white">
                  <i className="fa fa-trophy text-[#ea3333] mr-2"></i>Real-time
                </h2>
                
                <div className="h-[250px] overflow-hidden relative group">
                  <div 
                    className="absolute w-full group-hover:[animation-play-state:paused]"
                    style={{
                      animation: 'scrollrealtimes 15s linear infinite'
                    }}
                  >
                    <div className="space-y-0">
                      {duplicatedRealtimeItems.map((item, index) => (
                        <div 
                          key={index}
                          className="flex justify-between items-center pt-2 pb-2 border-b border-gray-600/50 last:border-b-0"
                        >
                          <div className="flex items-center">
                            <span className="text-[#d1d5db] mr-2">{item.name}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${item.statusClass}`}>
                              {item.status}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-[#ff9494] text-base font-black">
                              {item.amount}
                            </div>
                            <div className="text-[#6b7280] text-xs">
                              {item.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer image section */}
      <section className="mb-8">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <Image 
            src="/images/main/footer.png" 
            alt="Footer" 
            width={1200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}

