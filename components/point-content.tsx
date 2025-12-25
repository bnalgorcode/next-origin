'use client';

import { useState } from 'react';

export default function PointContent() {
  const [pointAmount, setPointAmount] = useState('');
  const [selectedBonus, setSelectedBonus] = useState('no data');

  const amountButtons = ['1,000', '5,000', '10,000', '50,000', '100,000', '500,000'];

  const handleAmountClick = (amount: string) => {
    if (amount === 'Reset') {
      setPointAmount('');
    } else if (amount === 'MAX') {
      setPointAmount('20000');
    } else {
      const numericAmount = amount.replace(/,/g, '');
      setPointAmount(numericAmount);
    }
  };

  return (
    <div>
      {/* Mobile Title */}
      <h4 className="text-lg font-semibold mb-4 text-white md:hidden">Point</h4>
      
      {/* Info Section */}
      <div className="bg-black/60 p-3 md:p-4 text-white text-sm md:text-base">
        <p className="mb-2">* Please process a full money recovery before applying for withdrawal.</p>
        <p className="mb-2">* When you convert points, they will be moved to your balance.</p>
        <p>* The minimum points to convert is 100 points.</p>
      </div>

      {/* Form Section */}
      <div className="bg-black/60 p-2 md:p-3 lg:p-4 mt-4 text-white font-bold">
        <div className="p-2 md:p-3 border-b border-gray-600/50 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
          <label className="block sm:inline-block sm:min-w-[150px] text-sm md:text-base">Balance:</label>
          <span className="text-red-500 text-sm md:text-base">$20,000</span>
        </div>
        
        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[180px] mb-2 text-sm md:text-base">Profile/withdrawAmount:</label>
          <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
            <input
              type="text"
              value={pointAmount}
              onChange={(e) => setPointAmount(e.target.value)}
              className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] text-sm md:text-base"
              placeholder="0"
            />
            <button
              onClick={() => handleAmountClick('MAX')}
              className="px-2 md:px-3 py-1 md:py-1.5 bg-black/60 border border-[#33e1ea]/50 rounded-md hover:bg-[#33e1ea]/20 transition-colors text-xs md:text-sm w-full sm:w-auto"
            >
              MAX
            </button>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap gap-2">
              {amountButtons.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountClick(amount)}
                  className="px-2 md:px-3 py-1 md:py-1.5 bg-black/60 border border-[#33e1ea]/50 rounded-md hover:bg-[#33e1ea]/20 transition-colors text-xs md:text-sm"
                >
                  {amount}
                </button>
              ))}
              <button
                onClick={() => handleAmountClick('Reset')}
                className="px-2 md:px-3 py-1 md:py-1.5 bg-black/60 border border-[#33e1ea]/50 rounded-md hover:bg-[#33e1ea]/20 transition-colors text-xs md:text-sm"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[180px] mb-2 text-sm md:text-base">profile/rechargeBonus:</label>
          <select
            value={selectedBonus}
            onChange={(e) => setSelectedBonus(e.target.value)}
            className="w-full px-3 md:px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] text-sm md:text-base"
          >
            <option>no data</option>
            <option>no data</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mx-auto px-2 md:px-4 flex items-center justify-center gap-1 mt-4">
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-4 md:px-6 py-2 md:py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d] text-sm md:text-base"
        >
          Profile/Apply Deposit
        </button>
      </div>
    </div>
  );
}

