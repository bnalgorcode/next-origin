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
              className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] text-sm md:text-base"
              placeholder="0"
            />
            <button
              onClick={() => handleAmountClick('MAX')}
              className="px-3 md:px-5 py-2 md:py-2 bg-[#1f2937] border border-[#26395f] text-white cursor-pointer whitespace-nowrap flex-shrink-0 text-xs sm:text-sm md:text-base transition-colors hover:bg-[#374151] w-full sm:w-auto"
            >
              MAX
            </button>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap w-full">
              {amountButtons.map((amount, index) => (
                <button
                  key={amount}
                  onClick={() => handleAmountClick(amount)}
                  className={`px-3 md:px-5 py-2 md:py-2 bg-[#1f2937] border border-[#26395f] text-white whitespace-nowrap flex-shrink-0 transition-colors hover:bg-[#374151] text-xs sm:text-sm md:text-base ${
                    index === 0 ? 'rounded-l-md' : ''
                  } ${index === amountButtons.length - 1 ? 'border-l-0' : 'border-l-0'}`}
                >
                  {amount}
                </button>
              ))}
              <button
                onClick={() => handleAmountClick('Reset')}
                className="px-3 md:px-5 py-2 md:py-2 bg-[#991b1b] border border-[#26395f] border-l-0 text-white whitespace-nowrap flex-shrink-0 transition-colors hover:bg-[#374151] rounded-r-md text-xs sm:text-sm md:text-base"
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
            className="w-full px-3 md:px-4 py-2 bg-black border border-[#c233ea]/50 rounded-md focus:outline-none focus:border-[#c233ea] text-sm md:text-base"
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
          className="w-full sm:w-auto bg-gradient-to-b from-[#c233ea] via-[#710bad] to-[#47046d] px-4 md:px-6 py-2 md:py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#c233ea] hover:via-[#710bad] hover:to-[#47046d] text-sm md:text-base"
        >
          Profile/Apply Deposit
        </button>
      </div>
    </div>
  );
}

