'use client';

import { useState } from 'react';

export default function DepositContent() {
  const [depositAmount, setDepositAmount] = useState('');
  const [selectedBonus, setSelectedBonus] = useState('European/Minigame 5% test');

  const amountButtons = ['1,000', '5,000', '10,000', '50,000', '100,000', '500,000'];

  const handleAmountClick = (amount: string) => {
    if (amount === 'Reset') {
      setDepositAmount('');
    } else {
      const numericAmount = amount.replace(/,/g, '');
      setDepositAmount(numericAmount);
    }
  };

  return (
    <div>
      {/* Mobile Title */}
      <h4 className="text-lg font-semibold mb-4 text-white md:hidden">Deposit</h4>
      
      {/* Info Section */}
      <div className="bg-black/60 p-3 md:p-4 text-white text-sm md:text-base">
        <p className="mb-2">* You must deposit under the name you entered when signing up for processing</p>
        <p className="mb-2">* Deposits maybe delayed during bank inspection times.</p>
        <p className="mb-2">
          * <button className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-1.5 py-0.5 rounded-sm font-black text-xs md:text-sm transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d]">
            &nbsp; Account Inquiry &nbsp;
          </button>
        </p>
        <p>You can check the account information below or through the customer center.</p>
      </div>

      {/* Form Section */}
      <div className="bg-black/60 p-2 md:p-3 lg:p-4 mt-4 text-white font-bold">
        <div className="p-2 md:p-3 border-b border-gray-600/50 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
          <label className="block sm:inline-block sm:min-w-[150px] text-sm md:text-base">Balance:</label>
          <span className="text-red-500 text-sm md:text-base">$20,000</span>
        </div>
        
        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Deposit Amount:</label>
          <input
            type="text"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] text-sm md:text-base"
            placeholder="0"
          />
          <div className="mt-2">
            <div className="flex flex-wrap sm:flex-nowrap w-full">
              {amountButtons.map((amount, index) => (
                <button
                  key={amount}
                  onClick={() => handleAmountClick(amount)}
                  className={`px-3 md:px-5 py-2 md:py-2 bg-[#1f2937] border border-[#26395f] text-white cursor-pointer whitespace-nowrap flex-shrink-0 text-xs sm:text-sm md:text-base transition-colors hover:bg-[#374151] ${
                    index === 0 ? 'rounded-l-md sm:rounded-l-md' : ''
                  } ${
                    index === amountButtons.length - 1 ? 'border-l-0' : 'border-l-0'
                  }`}
                >
                  {amount}
                </button>
              ))}
              <button
                onClick={() => handleAmountClick('Reset')}
                className="px-3 md:px-5 py-2 md:py-2 bg-[#991b1b] border border-[#26395f] text-white cursor-pointer whitespace-nowrap flex-shrink-0 text-xs sm:text-sm md:text-base rounded-r-md sm:rounded-r-md border-l-0 transition-colors hover:bg-[#374151]"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Recharge Bonus:</label>
          <select
            value={selectedBonus}
            onChange={(e) => setSelectedBonus(e.target.value)}
            className="w-full px-3 md:px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] text-sm md:text-base"
          >
            <option>Domestic/European/Minigame 10% test</option>
            <option>European/Minigame 5% test</option>
            <option>Unpaid</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mx-auto px-2 md:px-4 flex items-center justify-center gap-1 mt-4">
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-4 md:px-6 py-2 md:py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d] text-sm md:text-base"
        >
          Apply Deposit
        </button>
      </div>

      {/* Deposit History Table */}
      <div className="overflow-x-auto mb-4 mt-4 -mx-2 md:mx-0">
        <table className="min-w-full bg-black/40 text-xs md:text-sm">
          <thead>
            <tr>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Number</th>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Deposit Amount</th>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Date</th>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Situation</th>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151] hidden lg:table-cell">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((num) => (
              <tr key={num} className="border-b border-[rgba(55,65,81,0.5)] hover:bg-[rgba(31,41,55,0.3)] transition-colors">
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{num}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">10000</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">2025-8-3 21:42:40</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-green-400 text-center">Approved</td>
                <td className="px-2 md:px-4 py-2 md:py-3 hidden lg:table-cell text-center">
                  <button className="text-[#f87171] hover:text-[#ef4444] transition-colors px-1">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
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
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#33e1ea] text-white font-semibold text-xs md:text-sm">1</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#0b8dad] hover:text-white transition-colors text-xs md:text-sm">2</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#0b8dad] hover:text-white transition-colors text-xs md:text-sm">3</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#0b8dad] hover:text-white transition-colors text-xs md:text-sm">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

