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
            <tr>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Number</th>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Title</th>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Date</th>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Action</th>
            </tr>
          </thead>
          <tbody>
            {qnaItems.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[rgba(55,65,81,0.5)] hover:bg-[rgba(31,41,55,0.3)] transition-colors cursor-pointer"
              >
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{item.id}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{item.title}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{item.date}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                  <button className="text-[#f87171] hover:text-[#ef4444] transition-colors px-1">
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
            className="w-full px-3 md:px-4 py-2 bg-black border border-[#73171b]/50 rounded-md focus:outline-none focus:border-[#73171b] text-sm md:text-base"
          />
        </div>
        <div className="p-2 md:p-3">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Description:</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 md:px-4 py-2 bg-black border border-[#73171b]/50 rounded-md focus:outline-none focus:border-[#73171b] text-sm md:text-base resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mx-auto px-2 md:px-4 flex items-center justify-center gap-1 mt-4">
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-b  from-[#ea6064] via-[#993336] to-[#73171b] px-4 md:px-6 py-2 md:py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#73171b] hover:via-[#73171b] hover:to-[#73171b] text-sm md:text-base"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

