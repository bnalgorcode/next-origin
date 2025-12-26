'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProfileContent() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [selectedBank, setSelectedBank] = useState('CK');

  return (
    <div>
      {/* Mobile Title */}
      <h4 className="text-lg font-semibold mb-4 text-white md:hidden">Profile</h4>
      
      {/* Form Section */}
      <div className="bg-black/60 p-2 md:p-3 lg:p-4 mt-4 text-white font-bold">
        <div className="p-2 md:p-3 border-b border-gray-600/50 flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="block sm:inline-block max-w-[80px]">
            <Image
              src="/images/level/lv12.png"
              alt="Level"
              width={80}
              height={80}
              className="w-full"
            />
          </label>
          <div className="w-full sm:flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500 rounded-full w-3/4"></div>
          </div>
        </div>

        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">ID:</label>
          <input
            type="text"
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#73171b]/50 rounded-md focus:outline-none focus:border-[#73171b] text-sm md:text-base"
            placeholder="2546"
            disabled
          />
        </div>

        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Nickname:</label>
          <input
            type="text"
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#73171b]/50 rounded-md focus:outline-none focus:border-[#73171b] text-sm md:text-base"
            placeholder="Jack Son"
            disabled
          />
        </div>

        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Bank:</label>
          <select
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#73171b]/50 rounded-md focus:outline-none focus:border-[#73171b] text-sm md:text-base"
          >
            <option>SB</option>
            <option>CK</option>
            <option>CN</option>
          </select>
        </div>

        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Holder Name:</label>
          <input
            type="text"
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#73171b]/50 rounded-md focus:outline-none focus:border-[#73171b] text-sm md:text-base"
            placeholder="Jack Son"
            disabled
          />
        </div>

        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Account Number:</label>
          <input
            type="text"
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#73171b]/50 rounded-md focus:outline-none focus:border-[#73171b] text-sm md:text-base"
            placeholder="200 500 785 1254"
            disabled
          />
        </div>

        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Phone:</label>
          <input
            type="text"
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#73171b]/50 rounded-md focus:outline-none focus:border-[#73171b] text-sm md:text-base"
            placeholder="784 48765"
            disabled
          />
        </div>

        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Current password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#73171b]/50 rounded-md focus:outline-none focus:border-[#73171b] text-sm md:text-base"
          />
        </div>

        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">New password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#73171b]/50 rounded-md focus:outline-none focus:border-[#73171b] text-sm md:text-base"
          />
        </div>

        <div className="p-2 md:p-3 border-b border-gray-600/50">
          <label className="block sm:inline-block sm:min-w-[150px] mb-2 text-sm md:text-base">Password2:</label>
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-black border border-[#73171b]/50 rounded-md focus:outline-none focus:border-[#73171b] text-sm md:text-base"
          />
        </div>
      </div>

      {/* Submit Buttons */}
      <div className="mx-auto px-2 md:px-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 mt-4">
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-b  from-[#ea6064] via-[#993336] to-[#73171b] px-4 md:px-6 py-2 md:py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#73171b] hover:via-[#73171b] hover:to-[#73171b] text-sm md:text-base"
        >
          Submit
        </button>
        <button
          type="button"
          className="w-full sm:w-auto bg-gradient-to-b  from-[#ea6064] via-[#993336] to-[#73171b] px-4 md:px-6 py-2 md:py-3 rounded-sm font-black transition-all duration-300 hover:bg-gradient-to-t hover:from-[#73171b] hover:via-[#73171b] hover:to-[#73171b] text-sm md:text-base"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

