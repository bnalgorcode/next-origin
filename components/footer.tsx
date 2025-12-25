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

  const noticeItems = [
    { text: 'New Match:Barceiona Vs Real Madridna Vs Real Madrid', date: '2025-7-31' },
    { text: 'Laker vs Celtics Just Added!', date: '2025-8-15' },
    { text: '🏏 India vs Pakistan: High-Stakes Clash!', date: '2025-8-20' },
    { text: 'New Match:Barceiona Vs Real Madridna Vs Real Madrid', date: '2025-8-21' },
    { text: 'Laker vs Celtics Just Added!', date: '2025-8-23' },
  ];

  const eventItems = [
    { text: 'Laker vs Celtics Just Added!', date: '2025-8-15' },
    { text: '🏏 India vs Pakistan: High-Stakes Clash!', date: '2025-8-20' },
    { text: 'New Match:Barceiona Vs Real Madridna Vs Real Madrid', date: '2025-8-21' },
    { text: 'Laker vs Celtics Just Added!', date: '2025-8-23' },
    { text: 'New Match:Barceiona Vs Real Madridna Vs Real Madrid', date: '2025-9-21' },
  ];

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
        <div className="container mx-auto px-1 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Notice section */}
            <div className="border-2 border-[#b5f4fe] border-t-0 rounded-b-lg bg-gray-800/60 shadow-sm">
              <div className="h-[6px] bg-gradient-to-r from-[#b5dbfe] via-[#fed9fe] to-[#568abe]"></div>
              <div className="p-3">
                <h2 className="text-xl font-bold mb-4 items-center text-center">
                  <i className="fa fa-bullhorn text-[#33e1ea] mr-2"></i>Notice
                </h2>
                <div className="space-y-0">
                  {noticeItems.map((item, index) => (
                    <div 
                      key={index}
                      onClick={() => handleModalClick('notice-page', 'notice')}
                      className="flex justify-between items-center pt-2 pb-2 border-b border-gray-600/50 last:border-b-0 cursor-pointer group"
                    >
                      <a 
                        href="#" 
                        className="text-gray-300 max-w-[70%] truncate text-sm transition-colors duration-150 group-hover:text-[#33e1ea]"
                      >
                        {item.text}
                      </a>
                      <span className="text-gray-500 text-sm whitespace-nowrap ml-2">
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="text-[#33e1ea] flex items-center justify-end mt-4 hover:underline"
                >
                  MORE <i className="fa fa-angle-right ml-1"></i>
                </a>
              </div>
            </div>

            {/* Event section */}
            <div className="border-2 border-[#b5f4fe] border-t-0 rounded-b-lg bg-gray-800/60 shadow-sm">
              <div className="h-[6px] bg-gradient-to-r from-[#b5dbfe] via-[#fed9fe] to-[#568abe]"></div>
              <div className="p-3">
                <h2 className="text-xl font-bold mb-4 items-center text-center">
                  <i className="fa fa-gift text-[#33e1ea] mr-2"></i>Event
                </h2>
                <div className="space-y-0">
                  {eventItems.map((item, index) => (
                    <div 
                      key={index}
                      onClick={() => handleModalClick('event-page', 'event')}
                      className="flex justify-between items-center pt-2 pb-2 border-b border-gray-600/50 last:border-b-0 cursor-pointer group"
                    >
                      <a 
                        href="#" 
                        className="text-gray-300 max-w-[70%] truncate text-sm transition-colors duration-150 group-hover:text-[#33e1ea]"
                      >
                        {item.text}
                      </a>
                      <span className="text-gray-500 text-sm whitespace-nowrap ml-2">
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="text-[#33e1ea] flex items-center justify-end mt-4 hover:underline"
                >
                  MORE <i className="fa fa-angle-right ml-1"></i>
                </a>
              </div>
            </div>

            {/* Real-time section */}
            <div className="border-2 border-[#b5f4fe] border-t-0 rounded-b-lg bg-gray-800/60 shadow-sm">
              <div className="h-[6px] bg-gradient-to-r from-[#b5dbfe] via-[#fed9fe] to-[#568abe]"></div>
              <div className="p-3">
                <h2 className="text-xl font-bold mb-4 items-center text-center">
                  <i className="fa fa-trophy text-[#33e1ea] mr-2"></i>Real-time
                </h2>
                
                <div className="h-[250px] overflow-hidden relative">
                  <div 
                    className="absolute w-full animate-[scrollrealtimes_15s_linear_infinite] hover:[animation-play-state:paused]"
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
                            <span className="text-gray-300 mr-2">{item.name}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${item.statusClass}`}>
                              {item.status}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-[#b5f4fe] text-base font-black">
                              {item.amount}
                            </div>
                            <div className="text-gray-500 text-xs">
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
      <section>
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

