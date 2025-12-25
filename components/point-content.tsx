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
      <div className="bg-black/60 p-4 text-white">
        <p className="mb-2">* Please process a full money recovery before applying for withdrawal.</p>
        <p className="mb-2">* When you convert points, they will be moved to your balance.</p>
        <p>* The minimum points to convert is 100 points.</p>
      </div>

      {/* Form Section */}
      <div className="bg-black/60 p-1 lg:p-4 mt-4 text-white font-bold">
        <div className="p-3 border-b border-gray-600/50">
          <label className="inline-block min-w-[150px]">Balance:</label>
          <span className="text-red-500">$20,000</span>
        </div>
        
        <div className="p-3 border-b border-gray-600/50">
          <label className="inline-block min-w-[180px] mb-2">Profile/withdrawAmount:</label>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={pointAmount}
              onChange={(e) => setPointAmount(e.target.value)}
              className="px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea]"
              placeholder="0"
            />
            <button
              onClick={() => handleAmountClick('MAX')}
              className="px-3 py-1.5 bg-black/60 border border-[#33e1ea]/50 rounded-md hover:bg-[#33e1ea]/20 transition-colors text-sm"
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
                  className="px-3 py-1.5 bg-black/60 border border-[#33e1ea]/50 rounded-md hover:bg-[#33e1ea]/20 transition-colors text-sm"
                >
                  {amount}
                </button>
              ))}
              <button
                onClick={() => handleAmountClick('Reset')}
                className="px-3 py-1.5 bg-black/60 border border-[#33e1ea]/50 rounded-md hover:bg-[#33e1ea]/20 transition-colors text-sm"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="p-3 border-b border-gray-600/50">
          <label className="inline-block min-w-[180px] mb-2">profile/rechargeBonus:</label>
          <select
            value={selectedBonus}
            onChange={(e) => setSelectedBonus(e.target.value)}
            className="w-full max-w-full px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea]"
          >
            <option>no data</option>
            <option>no data</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mx-auto px-4 flex items-center justify-center gap-1 mt-4">
        <button
          type="submit"
          className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-6 py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d]"
        >
          Profile/Apply Deposit
        </button>
      </div>
    </div>
  );
}

