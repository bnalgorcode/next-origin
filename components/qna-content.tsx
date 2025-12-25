'use client';

import { useState } from 'react';

export default function QNAContent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const qnaItems = [
    { id: 1, title: 'How to recharge', date: '2025-8-3 21:42:40' },
    { id: 2, title: 'How to recharge', date: '2025-8-3 21:42:40' },
    { id: 3, title: 'How to recharge', date: '2025-8-3 21:42:40' },
  ];

  return (
    <div>
      {/* Mobile Title */}
      <h4 className="text-lg font-semibold mb-4 text-white md:hidden">QNA</h4>
      
      {/* QNA Table */}
      <div className="overflow-x-auto mb-4 mt-2 -mx-2 md:mx-0">
        <table className="min-w-full bg-black/40 text-xs md:text-sm">
          <thead>
            <tr className="border-b border-gray-600/50">
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Number</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Title</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Date</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {qnaItems.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-600/30 hover:bg-black/60 transition-colors cursor-pointer"
              >
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{item.id}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{item.title}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{item.date}</td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <button className="text-red-400 hover:text-red-300 transition-colors">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* QNA Form */}
      <div className="bg-black/60 p-2 md:p-3 lg:p-4 mt-4 text-white font-bold">
        <div className="p-2 md:p-3">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 md:px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] text-sm md:text-base"
          />
        </div>
        <div className="p-2 md:p-3">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Description:</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 md:px-4 py-2 bg-black border border-[#33e1ea]/50 rounded-md focus:outline-none focus:border-[#33e1ea] text-sm md:text-base resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mx-auto px-2 md:px-4 flex items-center justify-center gap-1 mt-4">
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-b from-[#33e1ea] via-[#0b8dad] to-[#04336d] px-4 md:px-6 py-2 md:py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#33e1ea] hover:via-[#0b8dad] hover:to-[#04336d] text-sm md:text-base"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

