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
              ? 'bg-gradient-to-b from-[#c233ea] via-[#710bad] to-[#47046d]'
              : 'bg-black/60 border border-[#c233ea]/50 hover:bg-[#c233ea]/20'
          }`}
        >
          Casino
        </button>
        <button
          onClick={() => setActiveGameType('slot')}
          className={`px-2 md:px-3 py-1 md:py-1.5 rounded-sm font-black text-xs md:text-sm transition-all duration-300 ${
            activeGameType === 'slot'
              ? 'bg-gradient-to-b from-[#c233ea] via-[#710bad] to-[#47046d]'
              : 'bg-black/60 border border-[#c233ea]/50 hover:bg-[#c233ea]/20'
          }`}
        >
          Slot
        </button>
        <button
          onClick={() => setActiveGameType('mini')}
          className={`px-2 md:px-3 py-1 md:py-1.5 rounded-sm font-black text-xs md:text-sm transition-all duration-300 ${
            activeGameType === 'mini'
              ? 'bg-gradient-to-b from-[#c233ea] via-[#710bad] to-[#47046d]'
              : 'bg-black/60 border border-[#c233ea]/50 hover:bg-[#c233ea]/20'
          }`}
        >
          Mini
        </button>
      </div>

      {/* History Table */}
      <div className="overflow-x-auto mb-4 mt-2 -mx-2 md:mx-0">
        <table className="min-w-full bg-black/40 text-xs md:text-sm">
          <thead>
            <tr>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Date</th>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Game</th>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Betinfo</th>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Bet amount</th>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Result</th>
            </tr>
          </thead>
          <tbody>
            {historyItems.map((item, index) => (
              <tr key={index} className="border-b border-[rgba(55,65,81,0.5)] hover:bg-[rgba(31,41,55,0.3)] transition-colors">
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{item.date}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{item.game}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{item.betInfo}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{item.betAmount}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-green-400 text-center">{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-1 mt-4 flex-wrap">
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] cursor-not-allowed opacity-50 text-xs md:text-sm">
          <i className="fa fa-angle-left"></i>
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#c233ea] text-white font-semibold text-xs md:text-sm">1</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#710bad] hover:text-white transition-colors text-xs md:text-sm">2</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#710bad] hover:text-white transition-colors text-xs md:text-sm">3</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#710bad] hover:text-white transition-colors text-xs md:text-sm">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

