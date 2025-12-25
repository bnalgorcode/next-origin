'use client';

import { useState } from 'react';

export default function WithdrawContent() {
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const amountButtons = ['1,000', '5,000', '10,000', '50,000', '100,000', '500,000'];

  const handleAmountClick = (amount: string) => {
    if (amount === 'Reset') {
      setWithdrawAmount('');
    } else if (amount === 'MAX') {
      setWithdrawAmount('20000');
    } else {
      const numericAmount = amount.replace(/,/g, '');
      setWithdrawAmount(numericAmount);
    }
  };

  return (
    <div>
      {/* Mobile Title */}
      <h4 className="text-lg font-semibold mb-4 text-white md:hidden">Withdraw</h4>
      
      {/* Info Section */}
      <div className="bg-black/60 p-4 text-white">
        <p className="mb-2">* You must deposit under the name you entered when signing up for processing</p>
        <p>* Deposits maybe delayed during bank inspection times.</p>
      </div>

      {/* Form Section */}
      <div className="bg-black/60 p-1 lg:p-4 mt-4 text-white font-bold">
        <div className="p-3 border-b border-gray-600/50">
          <label className="inline-block min-w-[150px]">Balance:</label>
          <span className="text-red-500">$20,000</span>
        </div>
        
        <div className="p-3 border-b border-gray-600/50">
          <label className="inline-block min-w-[150px] mb-2">Withdraw Amount:</label>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
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
      </div>

      {/* Submit Button */}
      <div className="mx-auto px-4 flex items-center justify-center gap-1 mt-4">
        <button
          type="submit"
          className="bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-6 py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d]"
        >
          Apply Withdraw
        </button>
      </div>

      {/* Withdraw History Table */}
      <div className="overflow-x-auto mb-4 mt-4">
        <table className="min-w-full bg-black/40">
          <thead>
            <tr className="border-b border-gray-600/50">
              <th className="px-4 py-3 text-left text-white font-bold">Number</th>
              <th className="px-4 py-3 text-left text-white font-bold">Withdraw Amount</th>
              <th className="px-4 py-3 text-left text-white font-bold">Date</th>
              <th className="px-4 py-3 text-left text-white font-bold">Situation</th>
              <th className="px-4 py-3 text-left text-white font-bold hidden lg:table-cell">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((num) => (
              <tr key={num} className="border-b border-gray-600/30">
                <td className="px-4 py-3 text-white">{num}</td>
                <td className="px-4 py-3 text-white">10000</td>
                <td className="px-4 py-3 text-white">2025-8-3 21:42:40</td>
                <td className="px-4 py-3 text-green-400">Approved</td>
                <td className="px-4 py-3 hidden lg:table-cell">
                  <button className="text-red-400 hover:text-red-300 transition-colors">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button className="px-3 py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-gray-400 cursor-not-allowed">
          <i className="fa fa-angle-left"></i>
        </button>
        <button className="px-3 py-2 bg-[#33e1ea]/20 border border-[#33e1ea] rounded-md text-[#33e1ea] font-bold">1</button>
        <button className="px-3 py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-white hover:bg-[#33e1ea]/20 transition-colors">2</button>
        <button className="px-3 py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-white hover:bg-[#33e1ea]/20 transition-colors">3</button>
        <button className="px-3 py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-white hover:bg-[#33e1ea]/20 transition-colors">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

