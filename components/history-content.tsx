'use client';

import { useState } from 'react';

type GameType = 'casino' | 'slot' | 'mini';

export default function HistoryContent() {
  const [activeGameType, setActiveGameType] = useState<GameType>('casino');

  const historyItems = [
    { date: '2025-8-3 21:42:40', game: 'Evolution', betInfo: 'xxxxxxxxxxxxxx xxxxxxxx', betAmount: '2,000,000', result: 'WIN' },
    { date: '2025-8-3 21:42:40', game: 'Evolution', betInfo: 'xxxxxxxxxxxxxx xxxxxxxx', betAmount: '2,000,000', result: 'WIN' },
    { date: '2025-8-3 21:42:40', game: 'Evolution', betInfo: 'xxxxxxxxxxxxxx xxxxxxxx', betAmount: '2,000,000', result: 'WIN' },
  ];

  return (
    <div>
      {/* Mobile Title */}
      <h4 className="text-lg font-semibold mb-4 text-white md:hidden">Betting History</h4>
      
      {/* Game Type Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveGameType('casino')}
          className={`px-2 md:px-3 py-1 md:py-1.5 rounded-sm font-black text-xs md:text-sm transition-all duration-300 ${
            activeGameType === 'casino'
              ? 'bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d]'
              : 'bg-black/60 border border-[#33e1ea]/50 hover:bg-[#33e1ea]/20'
          }`}
        >
          Casino
        </button>
        <button
          onClick={() => setActiveGameType('slot')}
          className={`px-2 md:px-3 py-1 md:py-1.5 rounded-sm font-black text-xs md:text-sm transition-all duration-300 ${
            activeGameType === 'slot'
              ? 'bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d]'
              : 'bg-black/60 border border-[#33e1ea]/50 hover:bg-[#33e1ea]/20'
          }`}
        >
          Slot
        </button>
        <button
          onClick={() => setActiveGameType('mini')}
          className={`px-2 md:px-3 py-1 md:py-1.5 rounded-sm font-black text-xs md:text-sm transition-all duration-300 ${
            activeGameType === 'mini'
              ? 'bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d]'
              : 'bg-black/60 border border-[#33e1ea]/50 hover:bg-[#33e1ea]/20'
          }`}
        >
          Mini
        </button>
      </div>

      {/* History Table */}
      <div className="overflow-x-auto mb-4 mt-2 -mx-2 md:mx-0">
        <table className="min-w-full bg-black/40 text-xs md:text-sm">
          <thead>
            <tr className="border-b border-gray-600/50">
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Date</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Game</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Betinfo</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Bet amount</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Result</th>
            </tr>
          </thead>
          <tbody>
            {historyItems.map((item, index) => (
              <tr key={index} className="border-b border-gray-600/30">
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{item.date}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{item.game}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{item.betInfo}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{item.betAmount}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-green-400">{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-1 md:gap-2 mt-4 flex-wrap">
        <button className="px-2 md:px-3 py-1.5 md:py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-gray-400 cursor-not-allowed text-xs md:text-sm">
          <i className="fa fa-angle-left"></i>
        </button>
        <button className="px-2 md:px-3 py-1.5 md:py-2 bg-[#33e1ea]/20 border border-[#33e1ea] rounded-md text-[#33e1ea] font-bold text-xs md:text-sm">1</button>
        <button className="px-2 md:px-3 py-1.5 md:py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-white hover:bg-[#33e1ea]/20 transition-colors text-xs md:text-sm">2</button>
        <button className="px-2 md:px-3 py-1.5 md:py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-white hover:bg-[#33e1ea]/20 transition-colors text-xs md:text-sm">3</button>
        <button className="px-2 md:px-3 py-1.5 md:py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-white hover:bg-[#33e1ea]/20 transition-colors text-xs md:text-sm">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

